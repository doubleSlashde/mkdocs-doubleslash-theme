---
hide:
  - navigation
  - toc
---

# mkdocs-doubleslash-theme

[doubleSlash theme](https://doubleslash.style/) for MkDocs.

## Installation

1. Install the plugin via `pip`:
  ```shell
  pip install mkdocs-doubleslash-theme
  ```
2. Add the plugin to your `mkdocs.yml` and enable the `mkdocs-material` theme:
  ```yaml
  theme: material
  
  plugins:
    - search
    - mkdocs-doubleslash-theme
  ```

That's it! The plugin will automatically:

- Apply a custom stylesheet with the doubleSlash styles
- Set the doubleSlash logo and favicon (if no custom logo is configured)
- Configure the Material for MkDocs theme with the doubleSlash color palette
