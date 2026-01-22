# mkdocs-doubleslash-theme

A MkDocs plugin that applies [doubleSlash style](https://doubleslash.style/) to your documentation.

## Quick Start

1. Install the plugin via `pip`:
  ```shell
  pip install mkdocs-doubleslash-theme
  ```
2.  Add the plugin to your `mkdocs.yml` and enable the `mkdocs-material` theme:
  ```yaml
  theme: material
  
  plugins:
    - search
    - mkdocs-doubleslash-theme
  ```
3. Thats it! The doubleSlash theme is now applied to your documentation.

## Documentation

For detailed instructions and a demo, please read the **[documentation](https://doubleslashde.github.io/mkdocs-doubleslash-theme/)**.

## Development

### Local setup

Run `./local-preview` in your terminal to build and run a MkDocs server with the plugin installed,
serving on <http://127.0.0.1:8000/>.

## Releasing

Manually trigger the `release` workflow via GitHub Actions, which will auto-bump the plugin version and perform the release process.
PyPi publishing is set up via [trusted publishing](https://docs.pypi.org/trusted-publishers/).

## License

mkdocs-doubleslash-theme is licensed under the [Apache License, Version 2.0](LICENSE).
