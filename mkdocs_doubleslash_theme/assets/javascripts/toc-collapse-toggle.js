(function () {
    "use strict";
  
    var STORAGE_KEY = "ds-toc-collapsed";
    var TOOLTIP_STORAGE_KEY = "ds-toc-toggle-tooltip-shown";
    var DESKTOP_QUERY = "(min-width: 76.25em)";
    var TOOLTIP_DURATION_MS = 3000;
    var LABEL_COLLAPSE = "Inhaltsverzeichnis ausblenden";
    var LABEL_EXPAND = "Inhaltsverzeichnis einblenden";
  
    function isTocCollapsed() {
      return document.documentElement.hasAttribute("data-ds-toc-collapsed");
    }
  
    function setTocCollapsed(enabled) {
      if (enabled) {
        document.documentElement.setAttribute("data-ds-toc-collapsed", "");
        try {
          localStorage.setItem(STORAGE_KEY, "true");
        } catch (e) {}
      } else {
        document.documentElement.removeAttribute("data-ds-toc-collapsed");
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch (e) {}
      }
    }
  
    function tocIsUnavailable() {
      var secondary = document.querySelector(".md-sidebar--secondary");
      if (!secondary || secondary.hasAttribute("hidden")) {
        return true;
      }
      // Material hides the secondary sidebar on small screens (display: none),
      // where the ToC is folded into the navigation drawer instead. offsetParent
      // is null when the element (or an ancestor) is display:none, so this covers
      // the responsive case without hardcoding a breakpoint. A collapsed sidebar
      // uses visibility:hidden (not display:none), so it still keeps a layout box
      // and the button stays available to expand it again.
      if (secondary.offsetParent === null) {
        return true;
      }
      // Material renders the secondary sidebar even for pages without headings,
      // leaving an empty ToC. Treat an empty ToC as hidden so the toggle button
      // is only shown when there is an actual table of contents to collapse.
      return !secondary.querySelector(".md-nav--secondary .md-nav__item");
    }
  
    function updateButtonState(button) {
      var collapsed = isTocCollapsed();
      var collapseIcon = button.querySelector(".ds-toc-toggle__icon--collapse");
      var expandIcon = button.querySelector(".ds-toc-toggle__icon--expand");
  
      button.setAttribute("aria-pressed", collapsed ? "true" : "false");
      button.setAttribute("aria-label", collapsed ? LABEL_EXPAND : LABEL_COLLAPSE);
      button.setAttribute("title", collapsed ? LABEL_EXPAND : LABEL_COLLAPSE);
  
      if (collapseIcon) {
        collapseIcon.hidden = collapsed;
      }
      if (expandIcon) {
        expandIcon.hidden = !collapsed;
      }
    }
  
    function shouldKeepTooltipVisible(button, isHovered) {
      return document.activeElement === button || isHovered;
    }
  
    function showTooltip(tooltip) {
      if (!tooltip) {
        return;
      }
      tooltip.classList.add("ds-toc-toggle__tooltip--visible");
    }
  
    function hideTooltip(tooltip, button, isHovered, force) {
      if (!tooltip || !tooltip.classList.contains("ds-toc-toggle__tooltip--visible")) {
        return;
      }
      if (!force && button && shouldKeepTooltipVisible(button, isHovered)) {
        return;
      }
      tooltip.classList.remove("ds-toc-toggle__tooltip--visible");
    }
  
    function bindTooltipInteractions(button, tooltip) {
      var isHovered = false;
      var autoHideTimer = null;
  
      function clearAutoHideTimer() {
        if (autoHideTimer !== null) {
          window.clearTimeout(autoHideTimer);
          autoHideTimer = null;
        }
      }
  
      function hideIfUnpinned(force) {
        hideTooltip(tooltip, button, isHovered, force);
      }
  
      function scheduleAutoHide() {
        clearAutoHideTimer();
        autoHideTimer = window.setTimeout(function () {
          hideIfUnpinned(false);
        }, TOOLTIP_DURATION_MS);
      }
  
      button.addEventListener("focus", function () {
        clearAutoHideTimer();
        showTooltip(tooltip);
      });
  
      button.addEventListener("blur", function () {
        hideIfUnpinned(false);
      });
  
      button.addEventListener("mouseenter", function () {
        isHovered = true;
        clearAutoHideTimer();
        showTooltip(tooltip);
      });
  
      button.addEventListener("mouseleave", function () {
        isHovered = false;
        hideIfUnpinned(false);
      });
  
      return {
        scheduleAutoHide: scheduleAutoHide,
        clearAutoHideTimer: clearAutoHideTimer,
        hideIfUnpinned: hideIfUnpinned,
      };
    }
  
    function updateButtonVisibility(button, tooltip, tooltipControl) {
      var wasVisible = !button.hidden;
      var shouldShow = !tocIsUnavailable();
      button.hidden = !shouldShow;
  
      if (!shouldShow) {
        if (wasVisible) {
          tooltipControl.clearAutoHideTimer();
          tooltipControl.hideIfUnpinned(true);
        }
        if (isTocCollapsed()) {
          setTocCollapsed(false);
          updateButtonState(button);
        }
        return;
      }
  
      maybeShowInitialTooltip(button, tooltip, tooltipControl);
    }
  
    function maybeShowInitialTooltip(button, tooltip, tooltipControl) {
      if (!tooltip || button.hidden) {
        return;
      }
  
      try {
        if (sessionStorage.getItem(TOOLTIP_STORAGE_KEY) === "true") {
          return;
        }
      } catch (e) {
        return;
      }
  
      showInitialTooltip(tooltip, tooltipControl);
    }
  
    function showInitialTooltip(tooltip, tooltipControl) {
      if (!tooltip || tooltip.classList.contains("ds-toc-toggle__tooltip--visible")) {
        return;
      }
  
      try {
        sessionStorage.setItem(TOOLTIP_STORAGE_KEY, "true");
      } catch (e) {}
  
      window.requestAnimationFrame(function () {
        showTooltip(tooltip);
        tooltipControl.scheduleAutoHide();
      });
    }
  
    function init() {
      var button = document.querySelector("[data-md-component='toc-collapse-toggle']");
      var tooltip = document.querySelector("[data-md-component='toc-collapse-tooltip']");
      if (!button) {
        return;
      }
  
      var tooltipControl = bindTooltipInteractions(button, tooltip);
      var desktopMedia = window.matchMedia(DESKTOP_QUERY);
  
      try {
        if (localStorage.getItem(STORAGE_KEY) === "true") {
          setTocCollapsed(true);
        }
      } catch (e) {}
  
      updateButtonState(button);
      updateButtonVisibility(button, tooltip, tooltipControl);
  
      button.addEventListener("click", function () {
        setTocCollapsed(!isTocCollapsed());
        updateButtonState(button);
        tooltipControl.clearAutoHideTimer();
        tooltipControl.hideIfUnpinned(true);
        document.dispatchEvent(new CustomEvent("ds-toc-collapse-change"));
      });
  
      desktopMedia.addEventListener("change", function () {
        updateButtonVisibility(button, tooltip, tooltipControl);
        updateButtonState(button);
      });
  
      window.addEventListener("resize", function () {
        updateButtonVisibility(button, tooltip, tooltipControl);
      });
    }
  
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  })();