# evcc Lifetime-Lizenz einrichten

Mit der evcc Lifetime-Lizenz wird die Sponsoring-Funktion von evcc auf deinem eHive One freigeschaltet. Die Lizenzdaten erhältst du zusammen mit deiner Rechnung per E-Mail.

## Das benötigst du

- einen eHive One im selben Netzwerk wie dein Computer oder Smartphone
- die mitgelieferte **Lizenz-ID**, zum Beispiel `7YE_01`
- den vollständigen **Sponsortoken** aus der Rechnungs-E-Mail

!!! warning "Token vertraulich behandeln"
    Der Sponsortoken ist deine persönliche Lizenz. Veröffentliche ihn nicht und gib ihn nicht an Dritte weiter.

## Lizenz eintragen

1. Verbinde den eHive One mit deinem Netzwerk und warte, bis das Gerät vollständig gestartet ist.
2. Öffne im Browser:
   - `http://ehiveone.local:7070`
   - oder `http://<IP-ADRESSE>:7070`, falls der mDNS-Name nicht erreichbar ist.
3. Öffne in evcc **Konfiguration**.
4. Wähle den Bereich **Sponsoring**.
5. Kopiere den vollständigen Sponsortoken aus der Rechnungs-E-Mail in das vorgesehene Feld.
6. Speichere die Änderung.
7. Starte evcc neu, damit die Lizenz aktiviert wird.

## Aktivierung prüfen

Öffne nach dem Neustart erneut die evcc-Oberfläche. Im Sponsoring-Bereich muss die Lizenz als aktiv erkannt werden.

Wenn ProductionDesk den Token bereits während der Produktion auf das Gerät übertragen hat, ist keine erneute Eingabe erforderlich. Prüfe in diesem Fall nur den Lizenzstatus.

## Fehlerbehebung

### `ehiveone.local` ist nicht erreichbar

- Prüfe, ob Computer und eHive One mit demselben Netzwerk verbunden sind.
- Ermittle die IP-Adresse in der Geräteliste deines Routers.
- Öffne anschließend `http://<IP-ADRESSE>:7070`.

### Die Lizenz wird nicht aktiv

- Prüfe, ob der Token vollständig und ohne zusätzliche Leerzeichen kopiert wurde.
- Starte evcc nach dem Speichern neu.
- Prüfe Datum, Uhrzeit und Internetverbindung des Geräts.

Weitere technische Informationen findest du in der [offiziellen evcc-Dokumentation zum Sponsortoken](https://docs.evcc.io/de/reference/configuration/sponsortoken/).
