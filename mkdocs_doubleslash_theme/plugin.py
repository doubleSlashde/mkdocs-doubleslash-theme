import os
from mkdocs.plugins import BasePlugin


class DoubleSlashThemePlugin(BasePlugin):
    def on_config(self, config):
        theme = config["theme"]

        plugin_dir = os.path.dirname(__file__)
        assets_dir = os.path.join(plugin_dir, "assets")
        overrides_dir = os.path.join(plugin_dir, "overrides")

        if overrides_dir not in theme.dirs:
            # Insert after user's custom_dir (if any) so user overrides take precedence
            insert_pos = (
                theme.dirs.index(theme.custom_dir) + 1
                if theme.custom_dir in theme.dirs
                else 0
            )
            theme.dirs.insert(insert_pos, overrides_dir)
        if assets_dir not in theme.dirs:
            theme.dirs.append(assets_dir)

        config["extra_css"].append("stylesheets/mkdocs-doubleslash-theme.css")

        theme["palette"] = [
            {"media": "(prefers-color-scheme)"},
            {
                "media": "(prefers-color-scheme: light)",
                "primary": "custom",
                "accent": "custom",
                "scheme": "default",
            },
            {
                "media": "(prefers-color-scheme: dark)",
                "primary": "custom",
                "accent": "custom",
                "scheme": "slate",
            },
        ]

        if "logo" not in theme and "logo" not in (theme.get("icon") or {}):
            theme["logo"] = "images/logo.svg"
        if "favicon" not in theme:
            theme["favicon"] = "images/favicon.ico"

        return config
