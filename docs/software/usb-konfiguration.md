# USB-Konfiguration für die Werkstatt

Ab SmartHub `1.1.65` kann ein eHive One bereits in der Werkstatt über einen vorbereiteten USB-Stick konfiguriert werden. Derselbe Stick kann anschließend für Statusdateien, Diagnose-Logs und automatische Backups verwendet werden.

## Geeigneten USB-Stick vorbereiten

1. USB-Stick mit **FAT32** oder **exFAT** formatieren.
2. Datenträger **`EHIVE`** oder **`EHIVE_BACKUP`** nennen.
3. Den leeren Stick an ein eHive One mit aktuellem SmartHub anschließen.
4. Warten, bis SmartHub die Verzeichnisstruktur und die Vorlagen angelegt hat.
5. Stick sicher entfernen und am Arbeitsplatz öffnen.

SmartHub legt auf einem leeren Stick diese Struktur an:

```text
EHIVE/
├── EHIVE-CONFIG/
│   ├── ehive-config.conf
│   ├── status.conf
│   ├── branding/
│   │   ├── logo-light.svg
│   │   └── logo-dark.svg
│   └── logs/
└── EHIVE-BACKUPS/
```

`ehive-config.conf` enthält alle verfügbaren Parameter mit Kommentaren auf Deutsch und Englisch. `status.conf` wird bei jedem Einstecken neu geschrieben und enthält ausschließlich den tatsächlich erkannten Geräte- und Konfigurationszustand.

## Konfiguration übernehmen

1. `EHIVE-CONFIG/ehive-config.conf` in einem Texteditor öffnen.
2. Gewünschte Werte eintragen.
3. Im jeweiligen Abschnitt `apply=true` setzen.
4. Datei speichern und den Stick sicher auswerfen.
5. Stick in das zu konfigurierende eHive One stecken.
6. Verarbeitung abwarten und anschließend `EHIVE-CONFIG/status.conf` kontrollieren.

`apply=true` gilt jeweils nur für den betreffenden Abschnitt. Nach erfolgreicher Übernahme setzt SmartHub den Wert wieder auf `false`. Passwörter werden nicht in `status.conf` exportiert und nach erfolgreicher Verwendung aus der Konfigurationsdatei entfernt.

Folgende Bereiche können vorbereitet werden:

| Abschnitt | Funktion |
| --- | --- |
| `[device]` | Seriennummer und Hostname |
| `[network]` | LAN-Schnittstelle, DHCP oder statische IPv4-Konfiguration |
| `[time]` | Zeitzone und NTP-Zeitserver |
| `[wifi]` | USB-WLAN, SSID und IP-Konfiguration |
| `[password]` | Lokales Admin-Passwort |
| `[logging]` | Diagnose-Logging auf dem eingesteckten Stick |
| `[backup]` | Automatische USB-Systembackups |
| `[whiteLabel]` | Markenname, Logos, Kontakt, CSS und evcc-Theme |

Beispiel für eine statische LAN-Konfiguration:

```ini
[network]
apply=true
interface=eth0
mode=static
address=192.168.1.50
prefix=24
gateway=192.168.1.1
dns=192.168.1.1
```

!!! warning "Erreichbarkeit prüfen"
    Eine statische Adresse muss zum Kundennetz passen und darf dort nicht bereits verwendet werden. Nach der Übernahme ist das Gerät unter der neuen Adresse erreichbar.

## Rückmeldung über die grüne LED

Die grüne System-LED nahe USB-C quittiert ausgewählte USB-Aktionen:

- **Netzwerkkonfiguration erfolgreich:** drei kurze Blinksignale, eine Pause; dieses Muster wird dreimal ausgegeben.
- **Netzwerkkonfiguration fehlgeschlagen:** fünf schnelle Blinksignale.
- **Diagnose-Logging gestartet:** zwei kurze Blinksignale.

Für Zeit, WLAN, Passwort, Backup und White Label ist `status.conf` die verbindliche Erfolgskontrolle. Details zu den übrigen LED-Zuständen stehen unter [LEDs und Taster](../hardware/leds-buttons.md).

## Diagnose-Logs aktivieren

```ini
[logging]
enabled=true
mode=continuous
maxSizeMb=100
```

Solange der Stick eingesteckt ist, schreibt SmartHub gefilterte Systemmeldungen nach `EHIVE-CONFIG/logs/`. Das Größenlimit liegt zwischen 10 und 1024 MB. Passwörter, Tokens und API-Schlüssel werden vor dem Schreiben geschwärzt. Das Logging endet beim Entfernen des Sticks, beim Erreichen des Limits oder nach `enabled=false`.

## Automatische Backups einstellen

```ini
[backup]
apply=true
enabled=true
interval=weekly
weekday=Sun
time=03:15
```

Mögliche Intervalle sind `daily`, `weekly` und `monthly`. Die Sicherungen werden unter `EHIVE-BACKUPS/` abgelegt. Ist zum geplanten Zeitpunkt kein geeigneter Stick eingesteckt, wird der Lauf ohne Fehler übersprungen.

Weitere Hinweise: [Backup und Wiederherstellung](../maintenance/backup-restore.md).

## White Label vorbereiten

Die beiden Logo-Dateien liegen unter `EHIVE-CONFIG/branding/`. Empfohlen werden **512 × 128 Pixel** beziehungsweise dieselbe SVG-Zeichenfläche für das helle und dunkle Logo.

```ini
[whiteLabel]
apply=true
enabled=true
brand=Mein Fachbetrieb
logoLight=branding/logo-light.svg
logoDark=branding/logo-dark.svg
website=https://beispiel.de
email=service@beispiel.de
phone=+49 123 456789
css=branding/custom.css
theme=auto
```

SmartHub kopiert die Branding-Dateien auf das Gerät, aktualisiert die evcc-Konfiguration und startet evcc neu. Beide Logos müssen gemeinsam angegeben oder gemeinsam leer gelassen werden.

## Fehler prüfen

Wenn eine Einstellung nicht übernommen wurde:

1. `status.conf` auf `success=false`, `action=` und `errors=` prüfen.
2. Schreibweise der Abschnitte und Werte in `ehive-config.conf` kontrollieren.
3. Sicherstellen, dass der Stick beschreibbar ist und eines der unterstützten Labels trägt.
4. Bei Bedarf `logging.enabled=true` aktivieren, Stick erneut einstecken und die Diagnose unter `EHIVE-CONFIG/logs/` auswerten.
