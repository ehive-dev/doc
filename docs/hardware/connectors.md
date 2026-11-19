# Anschlüsse & Bedienelemente

## Übersicht

Die folgenden Fotoansichten zeigen die Position der Schnittstellen am Gerät.

### QR mit USB-C

![eHive One Front-/Labelseite](../assets/images/ehive-one-front.webp)

### Ethernet + Versorgung + NetMode-Taster

![eHive One Anschlussseite Ethernet und Versorgung](../assets/images/ehive-one-ethernet-power.webp)

### RJ45, 12-30 V DC, NetMode Taster + LED

![eHive One Anschlussseite RS485 und DI](../assets/images/ehive-one-rs485-di.webp)

Die folgenden Anschlüsse/Funktionen sind für die Standardausführung vorgesehen.

| Bereich | Element | Zweck / Hinweis |
|---|---|---|
| Versorgung | **12–30 V DC** (Schraub-/Push‑In‑Klemme) | Kleinspannungsversorgung, Polung gemäß Beschriftung am Gerät |
| Netzwerk | **RJ45 Ethernet (Gigabit)** | Netzwerkzugang; optional mit PoE |
| USB | **USB‑C** | Erweiterungen (z. B. WLAN‑Stick, USB‑Peripherie); je nach System auch Service/Diagnose |
| Feldbus | **RS485** | Serielle Schnittstelle für Feld-/Zähler-/Gateway‑Anbindungen. **Klemmenbelegung: G (GND), B, A** |
| Digitaleingänge | **DI1 / DI2** | Steuersignale und Statuskontakte; nicht galvanisch getrennt. Je Eingang einen potentialfreien Relaiskontakt verwenden |


## RS485

- Klemmen: **G (GND)**, **B**, **A**
- Verwendung: Integrationsabhängig (z. B. Zähler/Gateway/Feldbus‑Anbindungen)
- Hardware-Prinzip: TTL-UART zu RS485, halbduplex, mit automatischer Richtungsumschaltung.
- Es ist keine separate DE/RE-Steuerleitung vorgesehen. Software nutzt nur TX, RX und GND.
- Interner UART-Default für Projekt-/Servicetests: `/dev/ttyS2`, typischer Modbus-RTU-Test mit `9600 8N1`.
- Abschlusswiderstand: 120 Ohm nur an den beiden Bus-Enden aktivieren. Bei kurzen Einzeltests kann der Abschluss je nach Gegenstelle entfallen.
- Empfehlung: verdrilltes A/B-Paar verwenden und GND als Bezug mitführen, besonders bei längeren Leitungen oder separaten Versorgungen.

<span id="digitaler-eingang-enwg-14a"></span>

## Digitale Eingänge DI1 und DI2

- DI1 und DI2 erfassen zwei unabhängige Kontaktzustände, etwa Steuersignale sowie Betriebs- oder Störmeldungen.
- Die Eingänge sind **nicht galvanisch getrennt**. Für die Ansteuerung jeweils einen **potentialfreien Relaiskontakt** verwenden.
- **Keine externe Spannung anlegen.** Kontakte gemäß der Beschriftung des jeweiligen Geräts anschließen.
- Anzeige, Statusabfrage und Beispiele: [ioManager](../software/iomanager.md#di1-und-di2-abfragen).

## Taster

- **Reset/NetMode‑Taster:** unterhalb der RJ45‑Buchse.
  - Funktion: Netzwerk und Passwort‑Recovery (`5 s` DHCP / `10 s` Default‑IP) → siehe *Software → NetMode*.
  - Position siehe Foto: *Ethernet + Versorgung + NetMode-Taster*.

## LEDs

- **NetMode‑LED (rot):** befindet sich unterhalb der RJ45‑Buchse und zeigt den Netzwerk‑Recovery‑Modus an.
- **System‑LED (grün):** befindet sich nahe USB‑C und leuchtet während des Reboots nach NetMode dauerhaft.
- **DI‑LED (EnWG §14a):** zeigt den Status des digitalen Eingangs an.

## Versorgungsempfehlung

- Netzteil: **mindestens 15 W**
- Absicherung: gemäß verwendetem **Netzteil** und Installation durch Elektrofachkraft
