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

  function tocSidebarIsHidden() {
    var secondary = document.querySelector(".md-sidebar--secondary");
    return !secondary || secondary.hasAttribute("hidden");
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

  function hideTooltip(tooltip) {
    if (!tooltip || tooltip.hidden) {
      return;
    }
    tooltip.classList.remove("ds-toc-toggle__tooltip--visible");
    window.setTimeout(function () {
      tooltip.hidden = true;
    }, 200);
  }

  function updateButtonVisibility(button, tooltip, desktopMedia) {
    var wasVisible = !button.hidden;
    var shouldShow = desktopMedia.matches && !tocSidebarIsHidden();
    button.hidden = !shouldShow;

    if (!shouldShow) {
      if (wasVisible) {
        hideTooltip(tooltip);
      }
      if (isTocCollapsed()) {
        setTocCollapsed(false);
        updateButtonState(button);
      }
      return;
    }

    maybeShowInitialTooltip(button, tooltip);
  }

  function maybeShowInitialTooltip(button, tooltip) {
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

    showInitialTooltip(tooltip, button);
  }

  function showInitialTooltip(tooltip, button) {
    if (!tooltip || tooltip.classList.contains("ds-toc-toggle__tooltip--visible")) {
      return;
    }

    try {
      sessionStorage.setItem(TOOLTIP_STORAGE_KEY, "true");
    } catch (e) {}

    tooltip.hidden = false;
    window.requestAnimationFrame(function () {
      tooltip.classList.add("ds-toc-toggle__tooltip--visible");
    });

    window.setTimeout(function () {
      hideTooltip(tooltip);
    }, TOOLTIP_DURATION_MS);

    button.addEventListener(
      "click",
      function () {
        hideTooltip(tooltip);
      },
      { once: true }
    );
  }

  function init() {
    var button = document.querySelector("[data-md-component='toc-collapse-toggle']");
    var tooltip = document.querySelector("[data-md-component='toc-collapse-tooltip']");
    if (!button) {
      return;
    }

    var desktopMedia = window.matchMedia(DESKTOP_QUERY);

    try {
      if (localStorage.getItem(STORAGE_KEY) === "true") {
        setTocCollapsed(true);
      }
    } catch (e) {}

    updateButtonState(button);
    updateButtonVisibility(button, tooltip, desktopMedia);

    button.addEventListener("click", function () {
      setTocCollapsed(!isTocCollapsed());
      updateButtonState(button);
      document.dispatchEvent(new CustomEvent("ds-toc-collapse-change"));
    });

    desktopMedia.addEventListener("change", function () {
      updateButtonVisibility(button, tooltip, desktopMedia);
      updateButtonState(button);
    });

    window.addEventListener("resize", function () {
      updateButtonVisibility(button, tooltip, desktopMedia);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
