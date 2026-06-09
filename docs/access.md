# Zugriff & URLs

## Lokal im Netzwerk

Zugriff erfolgt über das zentrale Dashboard **SmartHub**. Einzelne App-Ports sind für Endanwender in der Regel **nicht relevant**. Ausgenommen ist **evcc** mit Port **7070**.

Öffnen im Browser:

- `http://ehiveone.local/`
- `http://<IP-ADRESSE>/`

Wenn `ehiveone.local` nicht funktioniert:

- IP in Router-/DHCP-Liste ermitteln
- bei Fehlkonfiguration `NetMode` nutzen (siehe *Software -> NetMode (Netzwerk-Taster)*)

## Standard-Zugang

- Benutzer: `admin`
- Passwort: wird bei der Integration geändert bzw. durch das Gerätepasswort ersetzt.

Empfehlung:

- Passwort nach Inbetriebnahme ändern.
- Lokal wird nur **HTTP** bereitgestellt (kein HTTPS).
- Remote-Zugriff nur gezielt aktivieren (siehe *Software -> Tunnel Manager*).

## Firewall und Netzwerkabgrenzung

Bei Einsatz in kritischer Infrastruktur, produktiven Unternehmensnetzen, Energieanlagen oder Gebäudeautomation muss eHive One immer durch eine geeignete Firewall bzw. Netzwerksegmentierung vom übrigen Netz getrennt werden.

- Vor Inbetriebnahme mit der zuständigen IT-/OT-Administration bzw. dem Betreiber abstimmen.
- Nur die tatsächlich benötigten Verbindungen freigeben.
- App-Ports nicht pauschal in fremde Netze weiterleiten.
- Remote-Zugriff nur über den vorgesehenen Tunnel Manager und nur bei Bedarf aktivieren.
- Firewall-Regeln, VLANs, Routing und Freigaben dokumentieren.

Für Schäden durch unsachgemäße Netzwerkintegration, fehlende Firewall oder fehlende Abstimmung mit der zuständigen Administration wird - soweit gesetzlich zulässig - keine Gewährleistung oder Haftung übernommen. Bei Fragen zur sicheren Einbindung unterstützen wir gerne.
