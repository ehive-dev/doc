# Weitere Apps und Dienste

Über SmartHub erreichst du je nach Auslieferungsstand weitere Dienste, die auf eHive One vorinstalliert oder vorbereitet sind. Sichtbar werden sie nur, wenn sie aktiviert und gestartet sind.

Diese Endanwender-Doku beschreibt die wichtigsten eHive-Tools. Für Dritt-UIs und externe Dienste gelten zusätzlich die jeweiligen Projektdokumentationen und Herstellerangaben.

## Tools im App Store

- **HiveScope** findet Geräte und offene Dienste im lokalen Netzwerk und markiert mögliche evcc-Kandidaten.
- **HiveBus** untersucht Modbus TCP und Modbus RTU, liest Geräteinformationen und unterstützt gezielte Schreibzugriffe durch den Anwender.
- **[KNX Bridge](knx-bridge.md)** verbindet ausgewählte evcc-Datenpunkte mit KNX-Gruppenadressen.
- **[KNX Logger](knx-logger.md)** importiert ETS-Gruppenadressen, zeichnet KNX-Telegramme lokal auf und stellt Zeitreihen zur Auswertung bereit.

Die Tools erscheinen zunächst im App Store. Erst nach erfolgreicher Installation und Start zeigt SmartHub sie als verfügbare App an. Installation und Deinstallation wurden mit SmartHub `1.1.55` auch über einen Seiten-Neuladevorgang hinweg geprüft.

## Typische Dritt- oder Zusatzkomponenten

- evcc
- Home Assistant
- Node-RED
- Grafana
- Webmin
- Homebridge

## Hinweise

- Dritt-UIs können einen eigenen Stil, eigene Bedienlogik und eigene Updatewege haben.
- Nicht installierte oder nicht aktivierte Apps werden in SmartHub nicht als laufende App erwartet.
- Verfügbarkeit, Funktionsumfang und möglicher Beta-Status hängen vom installierten SmartHub- und App-Stand ab. Hinweise in der jeweiligen App und Dokumentation beachten.
- Für Dritt-Hardware, externe Dienste und Fremdanlagen gelten die Hinweise unter *Rechtliches -> Garantie und Haftung*.
