# SmartHub (Dashboard)

SmartHub ist das zentrale Dashboard von eHive One. Es listet verfügbare Apps, zeigt Status und bietet **Einstellungen** für Gerät, Netzwerk, Updates und Backups.

Dokumentierter Softwarestand: **SmartHub 1.1.40**

## Öffnen

- Browser -> `http://ehiveone.local/` oder `http://<IP-ADRESSE>/`

## Login (Standard)

- Benutzer: `admin`
- Passwort: wird bei der Integration geändert bzw. durch das Gerätepasswort ersetzt.

Beim ersten Öffnen kann SmartHub das Setzen eines neuen Admin-Passworts erzwingen.

## Navigation

- Links in der Sidebar: Apps
- Statusanzeige pro App:
  - **on**: erreichbar
  - **off**: nicht erreichbar
  - **update**: Update verfügbar / Update-Modus

## App Store und App-Aktionen

SmartHub trennt die installierten Apps von der Store-Ansicht:

- **Apps** zeigt die installierten und erreichbaren Anwendungen.
- **App Store** zeigt vorbereitete oder verfügbare Apps mit Installationsstatus.
- Das Drei-Punkte-Menü einer App bietet je nach Zustand **Update**, **Neustarten**, **Installieren** oder **Deinstallieren**.
- Während Updates, Installationen oder Neustarts zeigt SmartHub ein Log-Panel und aktualisiert die App-Liste danach.

## Einstellungen

SmartHub -> **Einstellungen**:

### Geräte- & Netzwerkstatus

Zeigt u. a.:

- Hostname (`ehiveone`), mDNS
- IPv4, Gateway, DNS
- Interface, MAC
- Systeminformationen und Seriennummer

### Netzwerk ändern

- Hostname setzen
- Interface auswählen
- IP-Modus: DHCP oder Statisch
- Änderungen werden per Dialog bestätigt (Rollback möglich)

### Passwort ändern

- aktuelles Passwort + neues Passwort (mind. 8 Zeichen empfohlen)

### System

- Neustart über Button (Bestätigung erforderlich)

### Updates und Wiederherstellung

SmartHub stellt eine Update-/Rettungsoberfläche bereit:

- `http://ehiveone.local/update/`
- `http://<IP-ADRESSE>/update/`
- `http://<IP-ADRESSE>:3003/` als direkter Rettungszugriff

Details: [Updates](../maintenance/updates.md) und [Backup und Wiederherstellung](../maintenance/backup-restore.md).

## Screenshots

![Systeminformationen.png](../assets/images/Systeminformationen.png)

![AppStoreInstalliereDeinstallierenNeustarten.png](../assets/images/AppStoreInstalliereDeinstallierenNeustarten.png)

![LoginFürSettings.png](../assets/images/LoginFürSettings.png)

![SettingsTeil1.png](../assets/images/SettingsTeil1.png)

![SettingsTeil2.png](../assets/images/SettingsTeil2.png)
