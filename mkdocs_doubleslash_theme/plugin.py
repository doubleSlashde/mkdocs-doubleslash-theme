import os

from mkdocs.config import config_options
from mkdocs.plugins import BasePlugin
from mkdocs.structure.files import File


class DoubleSlashThemePlugin(BasePlugin):
    """MkDocs plugin that applies doubleSlash corporate styling to Material theme."""

    config_scheme = (
        ("content_width_toggle", config_options.Type(bool, default=True)),
    )

    def __init__(self):
        super().__init__()
        plugin_dir = os.path.dirname(__file__)
        self.assets_dir = os.path.join(plugin_dir, "assets")
        self.overrides_dir = os.path.join(plugin_dir, "overrides")

    def on_config(self, config):
        theme = config["theme"]
        config["extra_css"].append("stylesheets/mkdocs-doubleslash-theme.css")

        content_width_toggle = self.config.get("content_width_toggle", True)
        config.setdefault("extra", {})["ds_content_width_toggle"] = content_width_toggle
        if content_width_toggle:
            config["extra_javascript"].append(
                "javascripts/content-width-toggle.js"
            )
            config["extra_javascript"].append(
                "javascripts/toc-collapse-toggle.js"
            )

        # Insert overrides after user's custom_dir (if any) so user overrides take precedence
        if self.overrides_dir not in theme.dirs:
            insert_pos = (
                theme.dirs.index(theme.custom_dir) + 1
                if theme.custom_dir in theme.dirs
                else 0
            )
            theme.dirs.insert(insert_pos, self.overrides_dir)

        # Only set palette if user hasn't defined their own
        if not theme.get("palette"):
            theme["palette"] = [
                {
                    "media": "(prefers-color-scheme)",
                    "toggle": {
                        "icon": "lucide/sun-moon",
                        "name": "Switch to light mode",
                    },
                },
                {
                    "media": "(prefers-color-scheme: light)",
                    "primary": "custom",
                    "accent": "custom",
                    "scheme": "default",
                    "toggle": {
                        "icon": "lucide/sun",
                        "name": "Switch to dark mode",
                    },
                },
                {
                    "media": "(prefers-color-scheme: dark)",
                    "primary": "custom",
                    "accent": "custom",
                    "scheme": "slate",
                    "toggle": {
                        "icon": "lucide/moon-star",
                        "name": "Switch to system preference",
                    },
                },
            ]

        icons = theme.get("icon") or {}
        if "logo" not in theme and "logo" not in icons:
            theme["icon"] = icons
            theme["icon"]["logo"] = "doubleslash-logo"

        # Override only if using MkDocs Material default favicon
        if theme.get("favicon") in (None, "assets/images/favicon.png"):
            theme["favicon"] = "images/favicon.ico"

        return config

    def on_files(self, files, config):
        existing_paths = {f.src_path for f in files}

        for root, _, filenames in os.walk(self.assets_dir):
            for filename in filenames:
                rel_path = os.path.relpath(
                    os.path.join(root, filename), self.assets_dir
                )

                # Skip if user has a file with the same path
                if rel_path in existing_paths:
                    continue

                files.append(
                    File(
                        path=rel_path,
                        src_dir=self.assets_dir,
                        dest_dir=config["site_dir"],
                        use_directory_urls=config["use_directory_urls"],
                    )
                )
        return files
