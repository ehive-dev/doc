# Tunnel Manager (Remote-Zugriff)

Der Tunnel Manager richtet einen Remote-Zugriff auf die Weboberflächen des eHive One ein.

- Veröffentlicht **nur Web-UIs**.
- Der Zugriff erfolgt über eine **seriennummernbasierte Subdomain** plus persönlichen **Hash**.
- SSH-Zugriffe sind nur für Servicefälle vorgesehen und müssen gezielt aktiviert und wieder deaktiviert werden.

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

### 3. Passwort ändern

Der Tunnel Manager kann das Basic-Auth-Passwort des veröffentlichten Webzugriffs ändern. Die Änderung wird in der lokalen Konfiguration gespeichert und in die Caddy-Konfiguration übernommen.

### 4. Temporärer Zugang für Support/Installateur

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

## Screenshots

![TunnelManager.png](../assets/images/TunnelManager.png)

![TunnelManager_PasswortVergabe.png](../assets/images/TunnelManager_PasswortVergabe.png)

![TunnelManager_TemporärerServiceZugang.png](../assets/images/TunnelManager_TemporärerServiceZugang.png)
