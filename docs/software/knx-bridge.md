# KNX Bridge

Die KNX Bridge verbindet ausgewählte evcc-Datenpunkte mit KNX-Gruppenadressen. Damit können beispielsweise Energie- und Ladeinformationen aus evcc in einer bestehenden KNX-Visualisierung oder Gebäudelogik verwendet werden.

Dokumentierter Softwarestand: **KNX Bridge 0.1.2**

## Voraussetzungen

- eHive One mit einem SmartHub-Stand, der die KNX Bridge anbietet
- laufende und erreichbare evcc-Instanz
- erreichbares KNX/IP-Gateway mit Tunneling-Unterstützung
- dokumentierte KNX-Gruppenadressen und zugehörige Datenpunkttypen (DPT)
- Berechtigung, die betreffende KNX-Anlage zu konfigurieren

!!! warning "Produktive Gebäudeautomation"
    Gruppenadressen, Datenpunkttypen und Schreibzugriffe müssen zur realen KNX- und evcc-Konfiguration passen. Produktive Steuerungen müssen fachgerecht geplant, geprüft und gegen unbeabsichtigte Befehle abgesichert werden.

## Zugriff

1. SmartHub öffnen.
2. **KNX Bridge** in der App-Liste auswählen.
3. Falls die App nicht sichtbar ist, im SmartHub App Store prüfen, ob sie für den installierten Systemstand angeboten, installiert und gestartet ist.

Die App wird über SmartHub unter `/apps/knx-bridge/` geöffnet. Der interne Dienst verwendet standardmäßig Port `3032`; dieser Port muss nicht ins Internet freigegeben werden.

## Verbindungen einrichten

### KNX/IP

Unter **Verbindungen** werden folgende Werte eingetragen:

- **Gateway:** lokale IP-Adresse des KNX/IP-Gateways
- **Port:** üblicherweise `3671`
- **Phys. Adresse:** für die KNX-Bridge vorgesehene physikalische Adresse
- **Reconnect:** Wartezeit für erneute Verbindungsversuche
- **Delay:** Mindestabstand zwischen KNX-Telegrammen
- **Poll:** Abrufintervall für evcc-Werte

KNX erst aktivieren, nachdem Gateway, physikalische Adresse und Netzwerkerreichbarkeit geprüft wurden. Die physikalische Adresse darf nicht bereits von einem anderen KNX-Teilnehmer verwendet werden.

### evcc

Auf eHive One wird evcc standardmäßig lokal unter `http://127.0.0.1:7070` angesprochen. Die Bridge liest den aktuellen Zustand aus der evcc-API und erzeugt daraus eine durchsuchbare Liste verfügbarer Datenpfade.

Wenn evcc geschützt oder unter einer abweichenden Adresse erreichbar ist, müssen URL und Zugangsdaten passend zur Anlage konfiguriert werden.

## Datenpunkte zuordnen

1. In der Ansicht **Mapping** nach dem gewünschten evcc-Pfad suchen.
2. Die passende KNX-Gruppenadresse eintragen.
3. Den Datenpunkttyp auswählen und mit der ETS-Projektierung vergleichen.
4. Die Übertragungsrichtung festlegen.
5. Das Mapping aktivieren.
6. Optional eine zyklische Übertragung mit geeignetem Intervall einschalten.
7. Mapping speichern und mit der Testfunktion kontrollieren.

Ein Mapping enthält mindestens:

| Feld | Bedeutung |
| --- | --- |
| evcc-Pfad | Wert aus dem aktuellen evcc-Zustand |
| KNX GA | KNX-Gruppenadresse, beispielsweise `1/2/3` |
| DPT | Darstellung und Codierung des KNX-Wertes |
| Richtung | evcc nach KNX, KNX nach evcc oder bidirektional |
| Aktiv | schaltet das einzelne Mapping ein oder aus |
| Zyklus | sendet den Wert zusätzlich in einem festen Abstand |

!!! info "KNX nach evcc ist nicht automatisch verfügbar"
    Für die Richtung **KNX → evcc** benötigt der betreffende Datenpunkt einen geeigneten evcc-Schreibendpunkt. Dieser unterscheidet sich je nach Funktion und muss für das Mapping oder global passend konfiguriert und geprüft werden. Die Auswahl der Richtung allein erzeugt noch keine funktionierende Schreibaktion.

## Status und Diagnose

Die Ansicht **Status** zeigt:

- Verbindung zu evcc
- Verbindung zum KNX/IP-Gateway
- Anzahl und Zustand der Mappings
- Zeitpunkt des letzten Scans
- aktuelle App-Protokolle

Nach jeder Änderung mindestens einen realen Wertewechsel prüfen. Dabei sowohl den gesendeten KNX-Wert als auch die Darstellung im Zielsystem kontrollieren. Bei Schreibzugriffen muss zusätzlich geprüft werden, ob evcc die gewünschte Aktion ausführt und sichere Anlagenzustände erhalten bleiben.

## Datensicherung

Die Konfiguration liegt auf dem Gerät unter:

```text
/etc/knx-bridge/config.yaml
```

Die Datei sollte über den vorgesehenen eHive-Backup-Prozess gesichert werden. Zugangsdaten nicht unverschlüsselt weitergeben.

## Sicherheit

- KNX Bridge und KNX/IP-Gateway nicht direkt aus dem Internet erreichbar machen.
- Netzwerkfreigaben auf die notwendigen lokalen Netze beschränken.
- Für Fernzugriff den vorgesehenen, geschützten eHive-Zugangsweg verwenden.
- Schreibzugriffe zunächst einzeln und unter Aufsicht testen.
- Vor Änderungen einen aktuellen Stand der ETS-Projektierung und der Bridge-Konfiguration sichern.

## Troubleshooting

- **evcc bleibt offline:** Prüfen, ob evcc läuft, die konfigurierte URL erreichbar ist und gegebenenfalls Zugangsdaten stimmen.
- **KNX bleibt offline:** IP-Adresse, Port `3671`, Tunneling-Verbindungen und Netzwerkroute zum Gateway prüfen.
- **Datenpunkt fehlt:** evcc-Scan erneut ausführen und prüfen, ob der Wert in der aktuellen evcc-Konfiguration vorhanden ist.
- **Falscher Wert auf KNX:** DPT, Einheit und Gruppenadresse mit ETS vergleichen.
- **Mapping sendet nicht:** Aktiv-Status, Datenpfad, KNX-Verbindung und Statusmeldung des Mappings prüfen.
- **KNX nach evcc reagiert nicht:** Geeigneten evcc-Schreibendpunkt, HTTP-Methode und erwartete Parameter prüfen.
- **Wert wird zu häufig gesendet:** Zyklische Übertragung deaktivieren oder Intervall vergrößern.

## Abgrenzung zum KNX Logger

Die KNX Bridge ordnet Werte zwischen evcc und KNX zu. Der [KNX Logger](knx-logger.md) zeichnet vorhandene KNX-Telegramme auf und stellt sie als Zeitreihen dar. Für reine Analyse und Langzeitaufzeichnung ist der Logger vorgesehen.

