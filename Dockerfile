FROM python:latest

RUN pip install mkdocs-material

# Copy plugin source and install
COPY . /tmp/mkdocs_doubleslash_theme/
RUN pip install /tmp/mkdocs_doubleslash_theme/ && rm -rf /tmp/mkdocs_doubleslash_theme

WORKDIR /docs
EXPOSE 8000
CMD ["mkdocs", "serve", "-a", "0.0.0.0:8000", "--livereload"]
