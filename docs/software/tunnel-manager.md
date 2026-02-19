# Tunnel Manager (Remote‑Zugriff)

Der Tunnel Manager richtet einen Remote‑Zugriff ein.

- Veröffentlicht **nur Web‑UIs** (keine SSH‑Freigabe).
- Der Zugriff erfolgt über eine **seriennummernbasierte Subdomain** plus persönlichen **Hash**.

## Zugriff & Login

- Öffne den Tunnel Manager über **SmartHub**.
- Standard-Zugang (Geräteauslieferung):
  - Benutzer: `admin`
  - Passwort: (wurde bei der Integration geändert)

## Typischer Ablauf

### 1) Remote‑Zugriff aktivieren

1. Tunnel Manager öffnen.
2. Assistent/Setup starten.
3. Der Manager erzeugt eine Remote‑Adresse nach dem Schema:
   - `<SERIAL>-<HASH>.<domain>`
4. Ein **QR‑Code** kann angezeigt werden, um die URL schnell zu teilen.

### 2) Hash neu erzeugen (Sicherheitsmaßnahme)

Wenn eine URL weitergegeben wurde oder du den Zugriff rotieren willst:

1. „Neuen Hash erzeugen“ auswählen.
2. Es wird eine neue Remote‑Adresse generiert.
3. Den alten Link nicht weiterverwenden.

### 3) Temporärer Zugang für Support/Installateur

Für Supportfälle kann ein temporärer Zugang eingerichtet werden:

- Aktivieren → Link/QR weitergeben
- Nach Abschluss: temporären Zugang **deaktivieren/entfernen**

## Sicherheit

- Default‑Passwörter ändern.
- Remote‑Zugriff nur aktiv lassen, wenn er benötigt wird.
- Links/QR nicht öffentlich teilen.


## Screenshots

![Tunnel Manager – Dashboard](../assets/images/ui-tunnelmanager-dashboard.png)
