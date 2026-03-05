# Troubleshooting

## Schnellcheck (2 Minuten)

1. Versorgung prüfen: Gerät mit `12-30 V DC` oder PoE versorgt?
2. Netzwerk prüfen: Link am Switch/Router aktiv?
3. Zugriff testen:
   - `http://ehiveone.local/`
   - `http://<IP-ADRESSE>/`
4. Falls kein Zugriff möglich: NetMode nutzen (siehe [NetMode](../software/netmode.md)).

## SmartHub nicht erreichbar

1. Router-/DHCP-Liste prüfen und aktuelle IP des Geräts ermitteln.
2. `ehiveone.local` funktioniert nicht:
   - direkten IP-Aufruf im Browser testen.
   - alternativ zweiten Browser/Privatmodus verwenden.
3. Bei falscher Netzkonfiguration:
   - NetMode `10 s` -> DHCP
   - NetMode `30 s` -> `192.168.100.1`
   - Hinweis: NetMode setzt alle Zugangspasswörter zurück.
4. Danach SmartHub erneut öffnen und Login prüfen.

## App in SmartHub "off"

| Beobachtung | Typische Ursache | Maßnahme |
| --- | --- | --- |
| App nach Neustart kurz "off" | Dienst startet noch | 1-2 Minuten warten, Seite neu laden |
| App dauerhaft "off" | Dienstfehler/abgebrochener Start | Gerät neu starten, erneut prüfen |
| App weiterhin "off" | Konfigurations- oder Updateproblem | App-spezifische Logs prüfen und Support kontaktieren |

## Tunnel nicht erreichbar

1. Internetzugang am Standort prüfen.
2. Tunnel-Status in [Tunnel Manager](../software/tunnel-manager.md) prüfen.
3. Zugriffsschutz/Regeln (z. B. Cloudflare Access) prüfen.
4. Nach Änderungen Hash/Zugang neu erzeugen und erneut testen.

## Für Support vorbereiten

Vor Kontakt bitte möglichst mitgeben:

- Seriennummer des Geräts
- Software-/App-Stand (falls sichtbar)
- Zeitpunkt des Fehlers
- betroffene Funktion/App
- Screenshot oder exakte Fehlermeldung
- durchgeführte Schritte (inkl. NetMode ja/nein)

## Wann direkt Support kontaktieren

- SmartHub ist auch nach NetMode-Rücksetzung nicht erreichbar.
- Das Gerät startet wiederholt neu oder bleibt instabil.
- Remote-Zugriff ist trotz bestätigter Internetverbindung dauerhaft nicht nutzbar.

Support-Prozess: siehe [Support-Prozess](../support.md).
