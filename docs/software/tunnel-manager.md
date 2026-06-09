# Tunnel Manager (Remote-Zugriff)

Der Tunnel Manager richtet einen Remote-Zugriff auf die Weboberflächen des eHive One ein.

- Veröffentlicht **nur Web-UIs**.
- Der Zugriff erfolgt über eine **seriennummernbasierte Subdomain** plus persönlichen **Hash**.
- SSH-Zugriffe sind nur für Servicefälle vorgesehen und müssen gezielt aktiviert und wieder deaktiviert werden.

## Aktueller Stand

Dokumentierter Softwarestand: **Tunnel Manager 0.9.17**

Ab Version `0.9.17` nutzt der Tunnel Manager für Dienststatus-Abfragen direkt `systemctl show`. Die frühere Abhängigkeit `systemd-status` und deren `shelljs`-Aufrufe werden nicht mehr verwendet. Das reduziert Hintergrundlast und vermeidet temporäre `shelljs_*`-Dateien.

Status- und Reparaturprüfungen laufen bewusst weniger hektisch:

- Standard-Backend-Polling: `30 s`
- konfigurierbar über `TUNNEL_STATUS_POLL_INTERVAL_MS`
- Systemd-Timeout: `CFM_SYSTEMCTL_TIMEOUT_MS`
- kurzer Service-Status-Cache: `CFM_SERVICE_INFO_CACHE_MS`

Dadurch kann ein Ausfall etwas später erkannt werden als früher, das System läuft aber deutlich ruhiger.

## Zugriff & Login

- Öffne den Tunnel Manager über **SmartHub**.
- Standard-Zugang (Geräteauslieferung):
  - Benutzer: `admin`
  - Passwort: wird bei der Integration geändert bzw. durch das Gerätepasswort ersetzt.

## Typischer Ablauf

### 1. Remote-Zugriff aktivieren

1. Tunnel Manager öffnen.
2. Assistent/Setup starten.
3. Der Manager erzeugt eine Remote-Adresse nach dem Schema:
   - `<SERIAL>-<HASH>.<domain>`
4. Ein QR-Code kann angezeigt werden; abhängig vom Handy öffnet er die passende App oder Weboberfläche.

### 2. Hash neu erzeugen

Wenn eine URL weitergegeben wurde oder du den Zugriff rotieren willst:

1. **Neuen Hash erzeugen** auswählen.
2. Es wird eine neue Remote-Adresse generiert.
3. Den alten Link nicht weiterverwenden.

### 3. Temporärer Zugang für Support/Installateur

Für Supportfälle kann ein temporärer Zugang eingerichtet werden:

- Aktivieren -> Link/QR weitergeben
- Nach Abschluss: temporären Zugang **deaktivieren/entfernen**

## Sicherheit

- Default-Passwörter ändern.
- Remote-Zugriff nur aktiv lassen, wenn er benötigt wird.
- Links/QR-Codes nicht öffentlich teilen.
- Temporäre Zugänge nach Abschluss des Servicefalls entfernen.
- Bei Einsatz in kritischer Infrastruktur oder produktiven Unternehmensnetzen muss eHive One über eine Firewall bzw. geeignete Netzwerksegmentierung abgesichert werden.
- Remote-Zugriff und Firewall-Regeln müssen vor Aktivierung mit der zuständigen IT-/OT-Administration bzw. dem Betreiber abgestimmt werden.

Für Schäden durch unsachgemäße Freigaben, fehlende Firewall, fehlende Netzwerksegmentierung oder nicht abgestimmte Remote-Zugriffe wird - soweit gesetzlich zulässig - keine Gewährleistung oder Haftung übernommen. Bei Fragen zur sicheren Einbindung unterstützen wir gerne.

## Prüfungen

Nach Updates mindestens prüfen:

- `tunnel-manager` Dienst ist `active` und `enabled`.
- `cloudflared` Dienst ist `active` und `enabled`.
- `/apps/tunnel-manager/healthz` liefert `200`.
- Login über SmartHub/Caddy funktioniert.
- Es entstehen keine `/tmp/shelljs_*`-Dateien.

## Screenshots

![Tunnel Manager - Dashboard](../assets/images/ui-tunnelmanager-dashboard.png)
