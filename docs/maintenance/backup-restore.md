# Backup und Wiederherstellung

## Ziel

Ein Backup soll den Ist-Zustand des eHive-Systems sichern, damit ein Gerät nach einem Update, Defekt oder Austausch wieder auf den bekannten Stand gebracht werden kann.

!!! note "Aktueller Stand"
    Der SmartHub-Rollback ist bereits für SmartHub-Updates vorgesehen. Das vollständige System-Backup mit USB-/Download-Wiederherstellung beschreibt den Zielprozess für Gerätebackup und Austausch. Wenn diese Funktion in deiner Oberfläche noch nicht sichtbar ist, ist für vollständige Wiederherstellungen der Service einzubeziehen.

Es gibt zwei unterschiedliche Backup-Arten:

| Backup-Art | Zweck | Enthält |
| --- | --- | --- |
| SmartHub-Rollback | Ein SmartHub-Update rückgängig machen | SmartHub-Programm, SmartHub-Konfiguration, systemd-Dateien |
| System-Backup | Gerät vollständig wiederherstellen | SmartHub, installierte Apps, Konfigurationen, Daten und Datenbank-Dumps |

## Aktueller SmartHub-Rollback

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

- USB-Stick am Gerät
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

## Datenbanken

Datenbanken sollten kontrolliert exportiert werden:

- InfluxDB: per Datenbank-Backup oder Dump
- SQLite: per SQLite-Backup, nicht durch Kopieren einer laufenden Datei
- Andere Datenbanken: über app-spezifische Backup-Hooks

Dadurch wird vermieden, dass ein Backup zwar vollständig aussieht, aber inkonsistente Daten enthält.

## USB-Backup

Für Service- und Austauschfälle ist ein USB-Backup besonders hilfreich. Sobald die Funktion in der Oberfläche verfügbar ist, gilt dieser Ablauf:

1. USB-Stick einstecken.
2. Backup in der SmartHub- oder Updater-Oberfläche starten.
3. Ziel **USB** auswählen.
4. Backup erstellen und Abschlussmeldung abwarten.
5. USB-Stick sicher entfernen und getrennt vom Gerät aufbewahren.

Der USB-Stick sollte nur vertrauenswürdig verwendet werden. Backups können Zugangsdaten, Tokens und Konfigurationsdaten enthalten.

## Backup herunterladen

Wenn kein USB-Stick verwendet wird, sollte das Backup über die Weboberfläche heruntergeladen und sicher abgelegt werden, sobald die Download-Funktion verfügbar ist.

Empfehlung:

- Backup-Datei nach Datum und Gerät benennen.
- Datei nicht unverschlüsselt in öffentlichen Cloud-Ordnern ablegen.
- Bei sensiblen Anlagen eine Passphrase-Verschlüsselung verwenden.

## Wiederherstellung

Typischer Ablauf nach einem Gerätetausch:

1. Ersatzgerät installieren und ins Netzwerk bringen.
2. SmartHub oder Update-Oberfläche öffnen.
3. Backup von USB auswählen oder Backup-Datei hochladen.
4. Manifest prüfen: Gerät, Datum, Versionen und enthaltene Apps.
5. Wiederherstellung starten.
6. SmartHub installiert fehlende Apps in passender Version.
7. Dienste werden gestoppt, Daten und Datenbanken wiederhergestellt und Dienste neu gestartet.
8. Healthchecks prüfen und Log kontrollieren.

Wenn die Wiederherstellung fehlschlägt, das Gerät nicht mehrfach neu bespielen. Log sichern und Support kontaktieren.

## Sicherheit

Backups können sensible Daten enthalten:

- Passwörter und Tokens
- Netzwerkdaten
- Tunnel- und Fernwartungskonfiguration
- Mess- und Abrechnungsdaten

Backups sollten daher nur verschlüsselt weitergegeben werden. Für einen Gerätetausch darf die Verschlüsselung nicht ausschließlich an das alte Gerät gebunden sein, sonst kann das Backup auf einem Ersatzgerät nicht wiederhergestellt werden.
