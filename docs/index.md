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

## Styled elements

The sections below render the elements the theme restyles, so a change to the
stylesheet can be checked in both color schemes on a single page.

### Headings

Headings use Inter SemiBold on the docs type scale, from 45px for the page
title down to 18px for level 6.

#### Heading level 4

##### Heading level 5

###### Heading level 6

### Text and links

Body copy is Inter at 18px on a 27px line. Inline markup covers **bold**,
*italic*, `inline code` and a [link](https://doubleslash.style/), which stays
free of an underline until hovered.

### Lists

- Unordered items are marked with a chevron instead of a bullet
- The marker color follows the active color scheme
    - Nested levels keep the same marker

1. Ordered lists keep Material's numbering
2. Second item

### Tables

| Token | Value | Used for |
| --- | --- | --- |
| `--ds-color-primary` | `#00759e` | Links, accents, active navigation |
| `--ds-color-border` | `#6d6d6d` | Content divider, control outlines, tab sets |
| `--ds-rounded-md` | `10px` | Search field, tooltip and table corners |

Header cells carry no fill, the body sits inside a rounded outline, rows are
separated by hairlines and tint on hover.

### Code

Fenced blocks with line numbers, via `pymdownx.highlight`:

```python linenums="1"
def on_config(self, config):
    config.theme.dirs.insert(0, str(OVERRIDES_DIR))
    return config
```

### Tabbed content

Requires `pymdownx.tabbed` with `alternate_style: true`.

=== "pip"

    ```shell
    pip install mkdocs-doubleslash-theme
    ```

=== "uv"

    ```shell
    uv add mkdocs-doubleslash-theme
    ```

### Table of contents and layout controls

The right sidebar can be collapsed with the round button next to it, and the
navigation sidebar with the button on the content divider. Both appear on
viewports wide enough to show the respective sidebar.
