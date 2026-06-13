# Release-Checks

## Release-Check 2026-06-13

### Umfang

Aktualisiert wurde die öffentliche Dokumentation auf Basis der aktuellen App-Screenshots vom 13.06.2026 und eines Code-Abgleichs der betroffenen Apps.

Dokumentierter Stand für die sichtbaren Oberflächen:

| Komponente | Version / Stand | Hinweis |
|---|---:|---|
| SmartHub | `1.1.40` | Dashboard, App Store, Einstellungen und Systeminformationen |
| wattRadar | `0.4.3` | KPIs, Timeline, Leistungsdiagramme und Energiefluss |
| ioManager | aktueller Screenshot | Status- und Verlaufsansicht |
| chargeLedger | `0.2.8` | Monatsabrechnung mit PDF-Vorschau und Exportaktionen |
| tenantLedger | `0.1.8` | Verwaltungs- und Abrechnungsansicht |
| tunnel-manager | `0.9.17` | Dashboard, Passwortvergabe und temporärer Service-Zugang |

### Abgleich

- Screenshots aus der aktuellen eHive-Oberfläche in `docs/assets/images` übernommen.
- SmartHub-Doku um App-Store-Aktionen, Settings-Login und Systeminformationen ergänzt.
- Update-Doku um das SmartHub-Menü für App-Updates ergänzt.
- wattRadar, ioManager, chargeLedger, tenantLedger und Tunnel Manager mit aktuellen Screenshots abgeglichen.
- Code-Snapshots der Apps für Menüs, Routen und sichtbare UI-Funktionen geprüft.

### Ergebnis

- Für die dokumentierten App-Seiten sind keine fehlenden Bilder offen.
- Es wurden keine künstlich generierten Bilder benötigt.
- Alle aktuellen PNGs wurden aus dem bereitgestellten Screenshot-Satz übernommen.

## Release-Check 2026-06-09

### Umfang

Aktueller dokumentierter Release-Stand:

| Komponente | Version / Stand | Hinweis |
|---|---:|---|
| SmartHub | `1.1.28` | Dashboard, Einstellungen, Updates und Backups |
| wattRadar | `0.4.3` | mobile Optimierungen, Timeline, Status-/Export-Icons |
| ioManager | `1.0.4` | Layoutbreite, Trenddarstellung und Statusbereinigung |
| chargeLedger | `0.2.8` | PDF-/Zahlenformatierung und km-Korrekturen |
| tenantLedger | `0.1.8` | Style-Anpassungen und Beta-Hinweis |
| tunnel-manager | `0.9.17` | Remote-Zugriff, Login und Statusanzeige |
| chargeandgo | `0.1.0` | falls im System aktiviert |

evcc wird bewusst ausgeklammert, weil evcc einen eigenen Stil und eigene Update-/Betriebslogik hat.

### Geprüfte Schwerpunkte

- Einheitliche UI-Darstellung in hell und dunkel.
- Heller und dunkler Theme-Modus.
- App-Layouts in Desktop- und Mobilansicht.
- Entfernen alter App-eigener Update-Routen und Update-Runner-Reste.
- Tunnel-Manager mit Remote-Zugriff, Login und Statusanzeige.
- Zentrale App-Updates über SmartHub.
- Statusanzeigen mit Icons statt sichtbarer Alttexte wie `Status: OK`.
- CSV-/Download-Aktionen als Icon-Buttons.
- Deutsche Zahlen-/Datumsformate in PDF-Ausgaben.

### Tests

Durchgeführt bzw. als aktueller Stand dokumentiert:

- Node-Syntaxchecks für App-Einstiege.
- Build-Skripte mit `.deb`-Erzeugung, Installation und Health-Check.
- Prüfung der erreichbaren Oberflächen.
- Browserprüfung für Desktop und Mobil.
- String-Regression auf alte Status-, CSV- und Update-Begriffe.
- Logprüfung nach Neustart der Dienste.
- Tunnel-Manager-Thermalläufe auf Testgerät `.83`.
- Tunnel-Manager Smoke-Test nach finalem Versionbump und Release-Build.

Tunnel Manager wurde über SmartHub geöffnet; Login und Statusanzeige wurden geprüft.

Thermischer Vergleich auf `.83`, jeweils ca. 30 Minuten:

| Zustand | Max | Schnitt |
|---|---:|---:|
| Vor Optimierung | 76,875 °C | 74,984 °C |
| Tunnel-Manager aus | 70,000 °C | 68,543 °C |
| Optimierter Lauf 1 | 71,111 °C | 69,535 °C |
| Optimierter Lauf 2 | 75,625 °C | 73,790 °C |

Hinweis: Die Thermalläufe wurden mit der gleichen Codebasis vor dem finalen Versionbump durchgeführt. Der veröffentlichte Stand wurde zusätzlich per Installation, Healthcheck und Login geprüft.

Bewertung: Die thermische Reserve hängt weiterhin stark von Umgebung, Schaltschrank und Dauerlast ab; deshalb wurden die Montage- und Lüftungshinweise in der Hardware- und Sicherheitsdokumentation ergänzt.

### Doku-Abgleich

Aktualisiert wurden:

- Hardware-Überblick mit Montage- und Wärmeabfuhrhinweisen.
- Technische Daten mit klarer Trennung zwischen Speicher-Komponententemperatur und Schaltschrank-Umgebung.
- Sicherheitshinweise zu Lüftung, Abstand und Wärmequellen.
- SmartHub-Dokumentation.
- Tunnel-Manager-Dokumentation.
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

evcc wurde bewusst ausgeklammert.

### Bereinigung

- Alte App-eigene Update-Routen und Update-Runner-Reste entfernt.
- Unbenutzte `update.png`-Icons aus wattRadar, ioManager und chargeLedger entfernt.
- Interne Alttexte wie `Status OK`, `Vorschau aktuell`, `Preset 24h` und `CSV Export` aus den relevanten Quellen entfernt.
- wattRadar serverseitig von `globalThis.fetch` auf einen kleinen `http/https`-Wrapper umgestellt, damit die Node-18-Fetch-Warnung nicht mehr im Log erscheint.

### Tests

Durchgeführt:

- Node-Syntaxchecks für die App-Einstiege.
- Build-Skripte mit `.deb`-Erzeugung, Installation und Health-Check.
- Prüfung der erreichbaren Oberflächen.
- Browserprüfung für Desktop und Mobil.
- String-Regression auf alte Status-, CSV- und Update-Begriffe.
- Logprüfung nach erfolgreichem Neustart der Dienste.

Ergebnis:

- Alle relevanten Dienste aktiv.
- Relevante Oberflächen waren erreichbar.
- Veraltete Update-Oberflächen sind nicht mehr sichtbar.
- Interne UI-Prüfung wurde durchgeführt.
- Browserprüfung: 16 von 16 Ansichten erfolgreich, keine JavaScript-Fehler, keine horizontalen Überläufe, keine Textüberläufe.
- Logs ab erfolgreichem finalem wattRadar-Start sauber.

### Hinweise

- Geschützte Bereiche zeigen je nach Zustand die erwartete Loginseite.
- `git diff --check` ist bei chargeLedger und tunnel-manager wegen CRLF-Zeilenenden in geänderten Altdateien laut. Funktional war das nicht blockierend, eine separate Format-Bereinigung ist empfohlen.
- Lokaler MkDocs-Build wurde auf dem Windows-Arbeitsplatz nicht ausgeführt, weil dort kein Python-Launcher verfügbar war.
