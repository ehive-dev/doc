# NetMode (Netzwerk‑Taster)

Mit NetMode machst du eHive One nach einer Netzwerk-Fehlkonfiguration wieder erreichbar und setzt die Zugangspasswörter zurück. Die Funktion wird über den Hardware‑Taster unterhalb der RJ45‑Buchse ausgelöst.

- Default‑IP im Recovery‑Modus: **192.168.100.1/24** (fix).
- Bei beiden NetMode‑Aktionen werden die Zugangspasswörter zurückgesetzt.
- Nach dem Loslassen startet das Gerät neu. Der Ablauf dauert ca. **1 Minute**; während des Reboots leuchtet die **System‑LED nahe USB‑C dauerhaft**.

## Ablauf

| Tastendruck | Aktion beim Loslassen | Ergebnis nach Reboot |
| --- | --- | --- |
| **unter 5 s** | keine NetMode‑Aktion | bestehende Netzwerkkonfiguration bleibt aktiv |
| **5 s bis unter 10 s** | Passwörter zurücksetzen, auf **DHCP** umstellen, Neustart | Gerät erhält eine Adresse per DHCP |
| **ab 10 s** | Passwörter zurücksetzen, auf **Default‑IP** umstellen, Neustart | Gerät ist unter `192.168.100.1/24` erreichbar |

## LED‑Hinweise

Während der Taster gehalten wird, zeigt die rote NetMode‑LED unterhalb der RJ45‑Buchse die erreichte Schwelle an:

- **unter 5 s:** LED leuchtet dauerhaft
- **5 s bis unter 10 s:** LED aus
- **ab 10 s:** LED blinkt schnell

Nach dem Loslassen läuft der Neustart. In dieser Zeit leuchtet die System‑LED nahe USB‑C dauerhaft. Sobald das Gerät wieder hochgefahren ist, SmartHub erneut öffnen und bei Bedarf die Netzwerkkonfiguration korrigieren.

## Beispiel: Wiederherstellung nach falscher statischer IP

1. Taste **5 s bis unter 10 s** halten und loslassen.
2. Gerät setzt die Zugangspasswörter zurück, stellt auf DHCP um und rebootet.
3. Ca. **1 Minute** warten.
4. Router nach neuer IP durchsuchen, SmartHub öffnen und Konfiguration korrigieren.

## Beispiel: Direkter Zugriff per Default‑IP

1. Taste **mindestens 10 s** halten und loslassen.
2. Gerät setzt die Zugangspasswörter zurück, stellt auf `192.168.100.1/24` um und rebootet.
3. Ca. **1 Minute** warten.
4. PC/Notebook temporär auf `192.168.100.2/24` stellen.
5. SmartHub unter `http://192.168.100.1/` öffnen.
