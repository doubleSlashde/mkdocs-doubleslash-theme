---
hide:
  - navigation
---

# mkdocs-doubleslash-theme

[doubleSlash style,](https://doubleslash.style/) for MkDocs.

## Installation

### Prerequisites

- [`mkdocs`](https://pypi.org/project/mkdocs/)
- [`mkdocs-material`](https://pypi.org/project/mkdocs-material/)

### Install the Plugin

Install the plugin using pip:

```shell
pip install mkdocs-doubleslash-theme
```

Replace `<token>` with an GitLab access token with the  `read_registry ` scope, or `$CI_JOB_TOKEN`
if you're using GitLab CI/CD.

### Configuration

In your `mkdocs.yml` configuration file,

1. Enable the material theme
2. Add the mkdocs-doubleslash-theme plugin

```yaml
theme: material

plugins:
  - search
  - mkdocs-doubleslash-theme
```

That's it! The plugin will automatically:

- Apply a custom stylesheet with the doubleSlash styles
- Set the doubleSlash logo and favicon (if no custom logo is configured)
- Enable the Material for MkDocs theme
- Configure the Material for MkDocs theme with the doubleSlash color palette
