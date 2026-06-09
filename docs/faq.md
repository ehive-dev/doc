# FAQ

## Welches Passwort benutze ich für SmartHub?

Standardmäßig:

- Benutzer: `admin`
- Passwort: wird bei der Integration geändert bzw. durch das Gerätepasswort ersetzt.
- Hinweis: NetMode setzt die Zugangspasswörter zurück und startet das Gerät neu. Der Ablauf dauert ca. 1 Minute.

Empfehlung: nach Inbetriebnahme ändern.

## Wie finde ich die IP-Adresse?

- Router/DHCP-Liste
- mDNS: `http://ehiveone.local/`
- NetMode: **5 s** halten für DHCP oder **10 s** halten für Default-IP `192.168.100.1` (Taster unterhalb RJ45). Beim Loslassen werden die Zugangspasswörter zurückgesetzt und das Gerät startet neu; das dauert ca. 1 Minute.

## Warum gibt es kein HTTPS?

Lokal wird nur **HTTP** bereitgestellt. Für den Zugriff über das Internet ausschließlich die Remote-Lösung (Tunnel Manager) mit Zugriffsschutz verwenden.

Zwischen eHive One und kritischer Infrastruktur oder produktiven Unternehmensnetzen muss eine Firewall bzw. geeignete Netzwerksegmentierung eingesetzt werden. Die Einbindung ist vor Inbetriebnahme mit der zuständigen IT-/OT-Administration bzw. dem Betreiber abzustimmen. Bei Fragen zur sicheren Einbindung unterstützen wir gerne.

## Wie exportiere ich Daten aus WattRadar?

Im WattRadar: **CSV exportieren** - exportiert das aktuelle Zeitfenster.
