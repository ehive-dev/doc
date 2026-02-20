# NetMode (Netzwerk‑Taster)

NetMode ist die Funktion hinter dem Hardware‑Taster, um das Gerät im Netzwerk wieder erreichbar zu machen (z. B. nach Fehlkonfiguration).

- Tasterposition: **unterhalb der RJ45‑Buchse**.
- Default‑IP im Recovery‑Modus: **192.168.100.1/24** (fix).

## Verhalten

- **Taste gedrückt:** LED dauerhaft an
- **Loslassen nach ≥ 10 s:** auf **DHCP** umstellen und Neustart
- **Loslassen nach ≥ 30 s:** auf **Default‑IP 192.168.100.1/24** umstellen und Neustart
- **NetMode-Reset:** setzt immer alle Zugangspasswörter zurück


LED‑Hinweis:

- Während des Tastendrucks leuchtet die LED dauerhaft.
- Nach dem Umschalten zeigt die LED den aktiven NetMode‑Recovery an.


## Beispiel: Wiederherstellung nach falscher statischer IP

1. Taste **10 s** halten → loslassen → Gerät rebootet → DHCP.
2. Router nach neuer IP durchsuchen → SmartHub öffnen → Konfiguration korrigieren.

## Beispiel: Direkter Zugriff per Default‑IP

1. Taste **30 s** halten → loslassen → Gerät rebootet → IP `192.168.100.1`.
2. PC/Notebook temporär auf `192.168.100.2/24` stellen.
3. SmartHub unter `http://192.168.100.1/` öffnen.
