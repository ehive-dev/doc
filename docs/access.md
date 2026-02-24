# Zugriff & URLs

## Lokal im Netzwerk

Zugriff erfolgt über das zentrale Dashboard **SmartHub**. Einzelne App-Ports sind für Endanwender in der Regel **nicht relevant**. Ausgenommen ist **evcc** mit Port **7070**.

Öffnen im Browser:

- `http://ehiveone.local/`
- `http://<IP-ADRESSE>/`

Wenn `ehiveone.local` nicht funktioniert:

- IP in Router-/DHCP-Liste ermitteln
- bei Fehlkonfiguration `NetMode` nutzen (siehe *Software → NetMode (Netzwerk-Taster)*)

## Standard-Zugang

- Benutzer: `admin`
- Passwort: (wurde bei der Integration geändert)

Empfehlung:
- Passwort nach Inbetriebnahme ändern.
- Lokal wird nur **HTTP** bereitgestellt (kein HTTPS).
- Remote-Zugriff nur gezielt aktivieren (siehe *Software → Tunnel Manager*).