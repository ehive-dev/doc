# KNX Logger

Der KNX Logger zeichnet KNX-Telegramme lokal auf eHive One auf und stellt ausgewählte Gruppenadressen als Zeitreihen dar. Gruppenadressen, Namen, Hierarchie und Datenpunkttypen können aus einem ETS-XML-Export übernommen werden.

Dokumentierter Softwarestand: **KNX Logger 0.6.6**

!!! info "Beta-Stand"
    Der KNX Logger wird abhängig vom SmartHub- und Systemstand angeboten. Oberfläche und Funktionsumfang können sich während der Beta-Phase noch ändern.

## Voraussetzungen

- eHive One mit einem SmartHub-Stand, der den KNX Logger anbietet
- erreichbares KNX/IP-Gateway mit Tunneling-Unterstützung
- aus ETS exportierte Gruppenadressen als XML-Datei
- optional ein geeigneter USB-Datenträger für die dauerhafte Aufzeichnung
- Berechtigung zum Zugriff auf die betreffende KNX-Anlage

Ein vollständiges `.knxproj`-Archiv kann nicht direkt importiert werden. Exportiere die Gruppenadressen vorher in ETS als XML-Datei.

## Zugriff

1. SmartHub öffnen.
2. **KNX Logger** in der App-Liste auswählen.
3. Falls die App nicht sichtbar ist, im SmartHub App Store prüfen, ob sie für den installierten Systemstand angeboten, installiert und gestartet ist.

Die App wird über SmartHub unter `/apps/knx-logger/` geöffnet. Der interne Dienst verwendet standardmäßig Port `3033`; dieser Port muss nicht ins Internet freigegeben werden.

## 1. ETS-Gruppenadressen importieren

1. In ETS einen XML-Export der Gruppenadressen erstellen.
2. Im KNX Logger **ETS-XML auswählen** öffnen.
3. Die XML-Datei auswählen und importieren.
4. Importierte Namen, Gruppenadressen, Hierarchie und Datenpunkttypen kontrollieren.

Ein erneuter Import aktualisiert bereits bekannte Adressen. Prüfe nach einer Änderung der ETS-Projektierung, ob DPT und Einheiten weiterhin zur realen Anlage passen.

## 2. KNX/IP-Verbindung konfigurieren

Unter **Einstellungen** werden eingetragen:

- **Gateway-Adresse:** lokale IP-Adresse des KNX/IP-Gateways
- **Port:** üblicherweise `3671`
- **Physische Adresse:** für den Logger vorgesehene KNX-Adresse
- **Netzwerkschnittstelle:** lokale oder gezielt eingerichtete Schnittstelle zum KNX-Netz

Speichere die Einstellungen und aktiviere KNX erst, wenn Gateway und physikalische Adresse geprüft wurden. Die physikalische Adresse darf nicht gleichzeitig von einem anderen KNX-Teilnehmer verwendet werden.

## 3. Speichermodus wählen

### Arbeitsspeicher

Der RAM-Ringpuffer eignet sich für kurze Analysen und Funktionstests. Er hält nur eine begrenzte Anzahl Messpunkte und ist nicht für eine dauerhafte Historie vorgesehen.

### USB-Datenträger

Für die Langzeitaufzeichnung speichert der KNX Logger monatliche Dateien auf dem eingerichteten USB-Datenträger:

```text
<USB-Pfad>/knx-logger/YYYY-MM.ndjson
```

In den Einstellungen werden USB-Pfad und Aufbewahrungsdauer festgelegt. Der Datenträger muss zuverlässig eingebunden und für den KNX-Logger-Dienst beschreibbar sein. Verwende dafür die vorgesehene eHive-Speichereinrichtung; ändere Dateirechte nicht unkontrolliert.

!!! warning "USB ist kein Backup"
    Eine dauerhafte Aufzeichnung auf USB ersetzt keine Datensicherung. Wichtige Exporte und Konfigurationen regelmäßig zusätzlich sichern.

## Gruppenadressen aufzeichnen

Nach dem Import werden nur die Gruppenadressen für die Aufzeichnung ausgewählt, die tatsächlich benötigt werden. Das reduziert Datenmenge und erleichtert die spätere Auswertung.

Kontrolliere für jeden wichtigen Wert:

- Gruppenadresse
- Bezeichnung
- Datenpunkttyp
- Einheit
- eintreffende Werte und Zeitstempel

Ein empfangenes Telegramm bestätigt, dass Daten auf dem Bus sichtbar sind. Es beweist nicht automatisch, dass Gruppenadresse, DPT oder fachliche Bedeutung korrekt dokumentiert wurden.

## Trends und CSV-Export

Ausgewählte Gruppenadressen können gemeinsam als Zeitreihen dargestellt werden. Für größere Zeiträume verdichtet der Logger die Daten, damit der Verlauf lesbar bleibt.

Über den CSV-Export können die aufgezeichneten Werte in Tabellen- oder Analyseprogrammen weiterverarbeitet werden. Beim Vergleich mehrerer Datenpunkte auf unterschiedliche Einheiten und Wertebereiche achten.

## Optionaler Zugriff auf ein entferntes KNX-LAN

Der KNX Logger kann eine gezielt bereitgestellte WireGuard-Konfiguration verwenden, um ein entferntes KNX-LAN zu erreichen. Dieser Weg ist für geplante Service- oder Anlagenverbindungen gedacht.

- Konfiguration nur aus vertrauenswürdiger Quelle importieren.
- Dasselbe WireGuard-Profil nicht gleichzeitig auf mehreren Geräten verwenden.
- Erreichbare Netze auf das notwendige KNX-LAN beschränken.
- Tunnel nach Abschluss prüfen und bei Nichtgebrauch stoppen oder entfernen.
- Keine KNX- oder Logger-Ports direkt im Internet veröffentlichen.

## Datenschutz und Sicherheit

- Die Aufzeichnung und Auswertung läuft lokal auf eHive One.
- Gruppenadressen und Zeitreihen können Rückschlüsse auf Anwesenheit und Gebäudenutzung ermöglichen; Zugriffe entsprechend begrenzen.
- Exporte nur an berechtigte Personen weitergeben.
- Vor Änderungen der KNX-Projektierung eine aktuelle ETS-Sicherung erstellen.
- Produktive Änderungen an KNX gehören in die Hände einer entsprechend qualifizierten Fachkraft.

## Troubleshooting

- **ETS-Datei wird abgelehnt:** Sicherstellen, dass es sich um einen Gruppenadressen-XML-Export und nicht um eine `.knxproj`-Datei handelt.
- **KNX bleibt getrennt:** Gateway-IP, Port `3671`, physikalische Adresse, Tunneling-Verbindungen und Netzwerkroute prüfen.
- **Keine Telegramme:** KNX-Verbindung aktivieren, Gruppenadresse auswählen und einen realen Wertewechsel auslösen.
- **Werte sind unplausibel:** DPT und Einheit mit ETS vergleichen.
- **USB-Aufzeichnung startet nicht:** Einbindung, freien Speicher, konfigurierten Pfad und Schreibbarkeit über die eHive-Speichereinrichtung prüfen.
- **Alte Daten fehlen:** Speichermodus, Aufbewahrungsdauer und verfügbaren Zeitraum kontrollieren.
- **WireGuard ohne Verbindung:** Profil, Tunnelstatus, letzte Verbindung und Route zum KNX/IP-Gateway prüfen.

## Technische Pfade

| Bestandteil | Pfad oder Wert |
| --- | --- |
| Dienst | `knx-logger.service` |
| Konfiguration | `/etc/knx-logger/config.json` |
| interner Port | `3033` |
| SmartHub-Pfad | `/apps/knx-logger/` |
| Langzeitdaten | `<USB-Pfad>/knx-logger/YYYY-MM.ndjson` |

## Abgrenzung zur KNX Bridge

Der KNX Logger beobachtet, speichert und visualisiert vorhandene KNX-Telegramme. Die [KNX Bridge](knx-bridge.md) ordnet dagegen ausgewählte evcc-Datenpunkte KNX-Gruppenadressen zu und kann geeignete Datenwege aktiv übertragen.

