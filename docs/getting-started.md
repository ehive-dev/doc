# Inbetriebnahme

## Lieferumfang (typisch)

- eHive One
- Typenschild (Seriennummer am Gerät)

> Abweichungen je nach Ausführung/Projektstand möglich.

## Montage

- Montage als **Hutschienengerät**.
- Betrieb nur in **trockener Innenumgebung**.
- **Nicht offen** montieren – vorgesehen für **Schaltschrank / Abdeckung** (Schutzart IP20).
- Für ausreichende Luftzirkulation im Schaltschrank sorgen.

## Versorgung

Es gibt zwei Versorgungswege:

1. **12–30 V DC** über Schraub-/Push‑In‑Klemme
2. **PoE:** über Ethernet (wenn die Variante/Erweiterung PoE unterstützt)

Netzteil-Empfehlung:
- **mindestens 15 W** (zusätzlich zu angeschlossenen USB‑Erweiterungen berücksichtigen)

## Netzwerk

- Standardmäßig bezieht das Gerät seine IP-Adresse per **DHCP**.
- Hostname ab Werk: **`ehiveone`**
- mDNS-Name: **`ehiveone.local`**

## Erster Zugriff

1. PC/Notebook im selben Netzwerk.
2. Browser öffnen:
   - `http://ehiveone.local/`
   - oder `http://<IP-ADRESSE>/`
3. Login:
   - Benutzer: `admin`
   - Passwort: `ehive`

## Erste Schritte nach Login

1. **Passwort ändern** (SmartHub kann dies beim ersten Login erzwingen).
2. Optional: Hostname prüfen/anpassen.
3. Optional: Netzwerk (DHCP/Statisch) konfigurieren.
4. Bei Bedarf: Remote-Zugriff über Tunnel Manager einrichten (für Installateure/Service).
