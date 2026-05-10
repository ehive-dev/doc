# FAQ

## Welches Passwort benutze ich für SmartHub?

Standardmäßig:

- Benutzer: `admin`
- Passwort: (wurde bei der Integration geändert)
- Hinweis: NetMode setzt die Zugangspasswörter zurück und startet das Gerät neu. Der Ablauf dauert ca. 1 Minute.

Empfehlung: nach Inbetriebnahme ändern.

## Wie finde ich die IP‑Adresse?

- Router/DHCP‑Liste
- mDNS: `http://ehiveone.local/`
- NetMode: **5 s** halten für DHCP oder **10 s** halten für Default‑IP `192.168.100.1` (Taster unterhalb RJ45). Beim Loslassen werden die Zugangspasswörter zurückgesetzt und das Gerät startet neu; das dauert ca. 1 Minute.

## Warum gibt es kein HTTPS?

Lokal wird nur **HTTP** bereitgestellt. Für den Zugriff über das Internet ausschließlich die Remote‑Lösung (Tunnel Manager) mit Zugriffsschutz verwenden. Zwischen eHive und kritischer Infrastruktur (Firmennetzwerk) muss eine Firewall verwendet werden.

## Wie exportiere ich Daten aus WattRadar?

Im WattRadar: **„CSV exportieren“** – exportiert das aktuelle Zeitfenster.
