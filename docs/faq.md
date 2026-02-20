# FAQ

## Welches Passwort benutze ich für SmartHub?

Standardmäßig:

- Benutzer: `admin`
- Passwort: (wurde bei der Integration geändert)
- Hinweis: NetMode setzt die Zugangspasswörter zurück.

Empfehlung: nach Inbetriebnahme ändern.

## Wie finde ich die IP‑Adresse?

- Router/DHCP‑Liste
- mDNS: `http://ehiveone.local/`
- NetMode: Default‑IP `192.168.100.1` (Taste **30 s** halten; Taster unterhalb RJ45)

## Warum gibt es kein HTTPS?

Lokal wird nur **HTTP** bereitgestellt. Für den Zugriff über das Internet ausschließlich die Remote‑Lösung (Tunnel Manager) mit Zugriffsschutz verwenden. Zwischen eHive und kritischer Infrastruktur (Firmennetzwerk) muss eine Firewall verwendet werden.

## Wie exportiere ich Daten aus WattRadar?

Im WattRadar: **„CSV exportieren“** – exportiert das aktuelle Zeitfenster.
