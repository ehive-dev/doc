# eHive One – Dokumentationsrepo (GitHub Pages)

## Lokal starten

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install mkdocs-material
mkdocs serve
```

## Deployment via GitHub Pages (Actions)

Die empfohlene Variante ist GitHub Actions.

1. Workflow `.github/workflows/pages.yml` committen.
2. In GitHub: Repository → **Settings** → **Pages** → **Source**: „GitHub Actions“.

