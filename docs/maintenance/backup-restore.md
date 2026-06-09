# Backup und Wiederherstellung

## Ziel

Ein Backup soll den Ist-Zustand des eHive-Systems sichern, damit ein Gerät nach einem Update, Defekt oder Austausch wieder auf den bekannten Stand gebracht werden kann.

!!! note "Hinweis zum Backup"
    Ab SmartHub `1.1.6` gibt es die erste sichere Stufe des System-Backups: optionale USB-Sicherung, Backup-Liste, Prüfsummenprüfung und Download. Ein USB-Stick ist nicht erforderlich. Wenn kein Stick eingesteckt ist, wird kein Backup erzeugt und der automatische Timer überspringt den Lauf ohne Fehler. Die automatische Voll-Wiederherstellung ist noch nicht freigegeben; für eine Wiederherstellung nach Gerätetausch muss das geprüfte Backup aktuell durch Service oder Installateur eingespielt werden.

Es gibt zwei unterschiedliche Backup-Arten:

| Backup-Art | Zweck | Enthält |
| --- | --- | --- |
| SmartHub-Rollback | Ein SmartHub-Update rückgängig machen | SmartHub-Programm, SmartHub-Konfiguration, systemd-Dateien |
| System-Backup | Gerät vollständig wiederherstellen | SmartHub, installierte Apps, Konfigurationen, Daten und Datenbank-Dumps |

## SmartHub-Rollback

Vor einem SmartHub-Update wird automatisch ein Rollback-Backup angelegt. Es liegt auf dem Gerät unter:

`/var/lib/smarthub/self-backups/smarthub`

Dieses Backup enthält aktuell:

- `/opt/smarthub`
- `/etc/smarthub`
- `/etc/default/smarthub`
- SmartHub-systemd-Unit
- SmartHub-systemd-Drop-ins

Nicht enthalten sind App-Datenbanken, Messdaten, InfluxDB-Daten, ChargeLedger-/TenantLedger-Daten oder vollständige Betriebssystemdaten.

## System-Backup

Für Gerätetausch oder Defekt ist ein vollständiges System-Backup sinnvoll. Dieses Backup sollte nicht nur auf dem Gerät liegen, sondern zusätzlich extern gespeichert werden.

Empfohlene Speicherorte:

- optionaler USB-Stick am Gerät
- Download über die Update-/Backup-Oberfläche
- Sicherer Service-Speicher beim Installateur oder Betreiber

Ein System-Backup sollte enthalten:

- Manifest mit Datum, Geräteinfo, SmartHub-Version und App-Versionen
- SmartHub-Konfiguration und App-Katalog
- Netzwerk- und Proxy-Konfigurationen, soweit für die Wiederherstellung nötig
- EVCC-Konfiguration, z. B. `/etc/evcc.yaml`
- Konfigurationsdateien der Apps
- Datenverzeichnisse der Apps
- Datenbank-Dumps, nicht nur rohe Datenbankdateien
- Prüfsummen zur Integritätsprüfung

SmartHub `1.1.6` erstellt dafür ein portables Backup-Verzeichnis mit `manifest.json`, `manifest.public.json`, `payload.tar.gz`, `exports.tar.gz`, `checksums.sha256` und `backup.log`. InfluxDB wird als portables Backup exportiert. SQLite-Dateien werden zusätzlich per `sqlite3 .backup` gesichert, wenn `sqlite3` auf dem Gerät verfügbar ist. Apps können später eigene Backup-Hooks unter `/opt/<app>/scripts/backup.sh` bereitstellen.

## Datenbanken

Datenbanken sollten kontrolliert exportiert werden:

- InfluxDB: per Datenbank-Backup oder Dump
- SQLite: per SQLite-Backup, nicht durch Kopieren einer laufenden Datei
- Andere Datenbanken: über app-spezifische Backup-Hooks

Dadurch wird vermieden, dass ein Backup zwar vollständig aussieht, aber inkonsistente Daten enthält.

## USB-Backup

Für Service- und Austauschfälle ist ein USB-Backup besonders hilfreich.

1. USB-Stick einstecken.
2. Update-Oberfläche öffnen: `http://ehiveone.local/update/` oder `http://<IP-ADRESSE>/update/`.
3. Im Bereich **System-Backup** prüfen, ob der USB-Stick als Ziel angezeigt wird.
4. **Auf USB sichern** starten.
5. Abschluss im Live-Log abwarten.
6. Backup über **Prüfen** kontrollieren.
7. USB-Stick sicher entfernen und getrennt vom Gerät aufbewahren.

SmartHub erkennt beschreibbare Datenträger unter `/media`, `/mnt` und `/run/media`. Ein Stick mit Label `EHIVE_BACKUP` wird bevorzugt eingebunden. Die Backups liegen auf dem Stick unter:

`EHIVE-BACKUPS/<geraete-id>/<zeitstempel>/`

Zusätzlich richtet SmartHub einen wöchentlichen Timer ein. Jeden Sonntag ab ca. 03:15 Uhr wird ein USB-Backup erstellt, wenn ein passender USB-Stick eingesteckt ist. Ist kein USB-Stick vorhanden, wird der Lauf ohne Fehler übersprungen.

Ohne USB-Stick zeigt die Oberfläche **kein USB, Backup wird übersprungen**. Der Button **Auf USB sichern** ist dann deaktiviert. Das ist ein normaler Zustand und keine Störung.

Der USB-Stick sollte nur vertrauenswürdig verwendet werden. Backups können Zugangsdaten, Tokens und Konfigurationsdaten enthalten.

## Backup herunterladen

Wenn kein USB-Stick verwendet wird, kann ein vorhandenes System-Backup über die Update-Oberfläche heruntergeladen und sicher abgelegt werden.

Empfehlung:

- Backup-Datei nach Datum und Gerät benennen.
- Datei nicht unverschlüsselt in öffentlichen Cloud-Ordnern ablegen.
- Bei sensiblen Anlagen eine Passphrase-Verschlüsselung verwenden.

## Wiederherstellung

Aktueller sicherer Ablauf nach einem Gerätetausch:

1. Ersatzgerät installieren und ins Netzwerk bringen.
2. SmartHub oder Update-Oberfläche öffnen.
3. USB-Stick mit `EHIVE-BACKUPS` einstecken.
4. Manifest prüfen: Gerät, Datum, Versionen und enthaltene Apps.
5. Backup über **Prüfen** kontrollieren.
6. Backup herunterladen oder dem Service bereitstellen.
7. Wiederherstellung durch Service/Installateur durchführen.
8. Healthchecks prüfen und Log kontrollieren.

Ein automatischer Restore-Button wird erst freigegeben, wenn die Wiederherstellung inklusive App-Versionen, Datenbankimporten und app-spezifischen Restore-Hooks zuverlässig abgesichert ist. Wenn eine Wiederherstellung fehlschlägt, das Gerät nicht mehrfach neu bespielen. Log sichern und Support kontaktieren.

## Sicherheit

Backups können sensible Daten enthalten:

- Passwörter und Tokens
- Netzwerkdaten
- Tunnel- und Fernwartungskonfiguration
- Mess- und Abrechnungsdaten

Backups sollten daher nur verschlüsselt weitergegeben werden. Für einen Gerätetausch darf die Verschlüsselung nicht ausschließlich an das alte Gerät gebunden sein, sonst kann das Backup auf einem Ersatzgerät nicht wiederhergestellt werden.
