# Inbetriebnahme

## Montage

- Montage auf **Hutschiene**.
- Betrieb nur in **trockener Innenumgebung**.
- **Nicht offen** montieren – vorgesehen für **Schaltschrank / Abdeckung** (Schutzart IP20).
- Für ausreichende Luftzirkulation im Schaltschrank sorgen.

## Versorgung

Es gibt zwei Versorgungswege:

1. **12–30 V DC** über Schraub-/Push-In-Klemme
2. **PoE:** über Ethernet (wenn PoE vorhanden)

Netzteil-Empfehlung:
- **mindestens 15 W**

## Netzwerk

- Standardmäßig bezieht das Gerät seine IP-Adresse per **DHCP**.
- Hostname ab Werk: **`ehiveone`**
- mDNS-Name: **`ehiveone.local`**

## Erster Zugriff

1. PC/Notebook im selben Netzwerk.
2. Browser öffnen:
   - `http://ehiveone.local/`
   - oder `http://<IP-ADRESSE>/`
3. Wenn `ehiveone.local` nicht funktioniert:
   - IP in Router-/DHCP-Liste nachsehen
   - bei Fehlkonfiguration `NetMode` verwenden (siehe *Software → NetMode (Netzwerk-Taster)*)
4. Login:
   - Benutzer: `admin`
   - Passwort: (wurde bei der Integration geändert)

> Hinweis: `NetMode` setzt immer alle Zugangspasswörter zurück.

## Erste Schritte nach Login

1. **Passwort ändern** (`SmartHub -> Einstellungen`).
2. Optional: Hostname anpassen.
3. Optional: Netzwerk (DHCP/Statisch) konfigurieren.
4. Bei Bedarf: Remote-Zugriff über Tunnel Manager einrichten (für Installateure/Service). Für den Zugang wird das Admin-Passwort benötigt.