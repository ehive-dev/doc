# eHive One – Dokumentationsrepo (GitHub Pages)

## Lokal starten

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

## Lokale Arbeitsordner

Die Ordner `.codex_remote/`, `_smarthub_update_path_fix/`, `pic/`, `workflows/` und `site/` sind lokale Arbeits- bzw. Quellordner und werden nicht veröffentlicht.

## Deployment via GitHub Pages (Actions)

Die empfohlene Variante ist GitHub Actions.

1. Workflow `.github/workflows/pages.yml` committen.
2. In GitHub: Repository → **Settings** → **Pages** → **Source**: „GitHub Actions“.
