# Release-Checks

## Release-Check 2026-06-09

### Umfang

Aktueller dokumentierter Release-Stand:

| Komponente | Version / Stand | Hinweis |
|---|---:|---|
| SmartHub | `1.1.28` | inklusive Systemdiagnose und USV-Seite |
| wattRadar | `0.4.3` | mobile Optimierungen, Timeline, Status-/Export-Icons |
| ioManager | `1.0.4` | Layoutbreite, Trenddarstellung und Statusbereinigung |
| chargeLedger | `0.2.8` | PDF-/Zahlenformatierung und km-Korrekturen |
| tenantLedger | `0.1.8` | Style-Anpassungen und Beta-Hinweis |
| tunnel-manager | `0.9.17` | ohne `systemd-status`/`shelljs`, reduziertes Polling |
| knx-bridge | `0.1.0` | Test-/Integrationsstand |
| chargeandgo | `0.1.0` | falls im System aktiviert |

evcc wird bewusst ausgeklammert, weil evcc einen eigenen Stil und eigene Update-/Betriebslogik hat.

### Geprüfte Schwerpunkte

- Zentrales Style-System und `/style`-Seite.
- Heller und dunkler Theme-Modus.
- App-Layouts in Desktop- und Mobilansicht.
- Entfernen alter App-eigener Update-Routen und Update-Runner-Reste.
- USV-API, USV-Seite unter `/sysDiag/usv`, deaktivierter Standardzustand und Ereignislog.
- Tunnel-Manager `0.9.17` mit direkter `systemctl show`-Statusabfrage statt `systemd-status`/`shelljs`.
- Zentrale App-Updates über SmartHub.
- Statusanzeigen mit Icons statt sichtbarer Alttexte wie `Status: OK`.
- CSV-/Download-Aktionen als Icon-Buttons.
- Deutsche Zahlen-/Datumsformate in PDF-Ausgaben.

### Tests

Durchgeführt bzw. als aktueller Stand dokumentiert:

- Node-Syntaxchecks für App-Einstiege.
- Build-Skripte mit `.deb`-Erzeugung, Installation und Health-Check.
- API- und Routenprüfung über SmartHub/Caddy.
- Browserprüfung für Desktop und Mobil.
- String-Regression auf alte Status-, CSV- und Update-Begriffe.
- Logprüfung nach Neustart der Dienste.
- USV-Smoke-Test auf Gerät mit vorhandener Hardware.
- Tunnel-Manager-Thermalläufe auf Testgerät `.83`.
- Tunnel-Manager `0.9.17` Smoke-Test nach finalem Versionbump und Release-Build.

Ergebnis Tunnel-Manager `0.9.17`:

- Dienst `tunnel-manager`: `active`, `enabled`.
- Dienst `cloudflared`: `active`, `enabled`.
- `/apps/tunnel-manager/healthz` liefert `200`.
- Login, `live-status` und `action-status` funktionieren über SmartHub/Caddy.
- Keine `/tmp/shelljs_*`-Dateien.
- Keine ShellJS-Child-Prozesse.

Thermischer Vergleich auf `.83`, jeweils ca. 30 Minuten:

| Zustand | Max | Schnitt |
|---|---:|---:|
| Alt aktiv `0.9.15` | 76,875 °C | 74,984 °C |
| Tunnel-Manager aus | 70,000 °C | 68,543 °C |
| Fix Lauf 1 `0.9.16` | 71,111 °C | 69,535 °C |
| Fix Lauf 2 `0.9.16` | 75,625 °C | 73,790 °C |

Hinweis: Die Thermalläufe wurden mit der gleichen Fix-Codebasis vor dem finalen Versionbump durchgeführt. `0.9.17` enthält den veröffentlichten Stand ohne `systemd-status`/`shelljs` und wurde zusätzlich per Installation, Healthcheck, Login und ShellJS-Regression geprüft.

Bewertung: Der `shelljs`-Pfad ist entfernt. Die thermische Reserve hängt weiterhin stark von Umgebung, Schaltschrank und Dauerlast ab; deshalb wurden die Montage- und Lüftungshinweise in der Hardware- und Sicherheitsdokumentation ergänzt.

### Doku-Abgleich

Aktualisiert wurden:

- Hardware-Überblick mit Montage- und Wärmeabfuhrhinweisen.
- Technische Daten mit klarer Trennung zwischen Speicher-Komponententemperatur und Schaltschrank-Umgebung.
- Sicherheitshinweise zu Lüftung, Abstand und Wärmequellen.
- SmartHub-Dokumentation mit `/sysDiag/usv`.
- Tunnel-Manager-Dokumentation für `0.9.17`.
- Release-Check-Stand 2026-06-09.

### Hinweise

- `11_doc` liegt lokal aktuell ohne `.git`-Metadaten vor. Änderungen sind lokal möglich; für GitHub-Push muss der echte Doku-Repository-Checkout bzw. das Ziel-Repository verwendet werden.
- Die Temperaturgrenzen in der Doku sind Planungsgrenzen ohne gesonderten thermischen Nachweis. Die konkrete Schaltschrankauslegung bleibt Aufgabe der Elektrofachkraft bzw. des Schaltanlagenbauers.

## Release-Check 2026-06-03

### Umfang

Geprüft und neu gebaut wurden:

- SmartHub `1.1.27`
- wattRadar `0.4.2`
- ioManager `1.0.3`
- chargeLedger `0.2.7`
- tenantLedger `0.1.7`
- tunnel-manager `0.9.14`
- knx-bridge `0.1.0`

evcc wurde bewusst ausgeklammert.

### Bereinigung

- Alte App-eigene Update-Routen und Update-Runner-Reste entfernt.
- Unbenutzte `update.png`-Icons aus wattRadar, ioManager und chargeLedger entfernt.
- Interne Alttexte wie `Status OK`, `Vorschau aktuell`, `Preset 24h` und `CSV Export` aus den relevanten Quellen entfernt.
- knx-bridge-Testtexte auf korrekte Umlaute umgestellt.
- knx-bridge `qs` per npm-Override auf `6.15.2` aktualisiert, danach `npm audit` ohne Schwachstellen.
- wattRadar serverseitig von `globalThis.fetch` auf einen kleinen `http/https`-Wrapper umgestellt, damit die Node-18-Fetch-Warnung nicht mehr im Log erscheint.

### Tests

Durchgeführt:

- Node-Syntaxchecks für die App-Einstiege.
- Build-Skripte mit `.deb`-Erzeugung, Installation und Health-Check.
- knx-bridge `build.sh` inklusive Selfcheck, Unit-Tests und 12 Simulationstests.
- API- und Routenprüfung über SmartHub/Caddy.
- Browserprüfung für Desktop und Mobil.
- String-Regression auf alte Status-, CSV- und Update-Begriffe.
- Logprüfung nach erfolgreichem Neustart der Dienste.

Ergebnis:

- Alle relevanten Dienste aktiv.
- Kernrouten und Health-Endpunkte liefern `200`.
- Alte wattRadar- und ioManager-Update-Endpunkte liefern `404`.
- `/style` ist erreichbar.
- Browserprüfung: 16 von 16 Ansichten erfolgreich, keine JavaScript-Fehler, keine horizontalen Überläufe, keine Textüberläufe.
- Logs ab erfolgreichem finalem wattRadar-Start sauber.

### Hinweise

- `store`, `settings` und tunnel-manager liefern je nach Zustand erwartete Login- oder Redirect-Antworten.
- `git diff --check` ist bei chargeLedger und tunnel-manager wegen CRLF-Zeilenenden in geänderten Altdateien laut. Funktional war das nicht blockierend, eine separate Format-Bereinigung ist empfohlen.
- Lokaler MkDocs-Build wurde auf dem Windows-Arbeitsplatz nicht ausgeführt, weil dort kein Python-Launcher verfügbar war.
