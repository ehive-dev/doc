# Style-System

## Grundsatz

SmartHub stellt das zentrale eHive-Style-System bereit. Apps sollen die gemeinsamen eHive-Klassen verwenden und keine eigenen Varianten für identische UI-Elemente aufbauen.

evcc ist davon ausgenommen, weil evcc einen eigenen Stil hat.

## Verbindliche Klassen

- Buttons: `ehive-button`, `ehive-button--primary`, `ehive-button--secondary`, `ehive-button--danger`, Icon-Buttons mit eindeutigem Icon.
- Formulare: `ehive-input`, `ehive-textarea`, `ehive-select`, `ehive-selectbox`, `ehive-field`, `ehive-label`.
- Flächen: `ehive-card`, `ehive-card__body`, `ehive-panel`, `ehive-stack`, `ehive-section`.
- Status: zentrale Status-Icons statt sichtbarer Texte wie `Status: OK`.
- Tabellen und Listen: zentrale Tabellen-, Toolbar- und Aktionsklassen.
- Meldungen: `ehive-toast` und zentrale Statusfarben.

## Theme-Regeln

- Farben, Schrift, Abstände, Radien und Flächen werden über CSS-Variablen gesteuert.
- Apps sollen Werte wie Farben, Border, Schatten und Radius nicht lokal neu definieren, wenn eine zentrale Variable oder Klasse existiert.
- Der Theme-Wechsel erfolgt über die zentrale Theme-Logik von SmartHub.
- Neue Komponenten müssen auf der Seite `/style` sichtbar nachvollziehbar sein.

## Nicht Verwenden

- Inline-Styles für wiederverwendbare UI-Elemente.
- App-eigene Button-, Input-, Card- oder Toast-Varianten ohne fachlichen Grund.
- Sichtbare Fallback-Texte wie `CSV Export`, `Status: OK`, `Lade...` oder `Vorschau aktuell`, wenn bereits Icons oder zentrale Statusanzeigen vorgesehen sind.
- Eigene `/update`-Oberflächen in Apps. Updates laufen zentral über SmartHub.

## Prüfung

Vor einem Release werden mindestens geprüft:

- `/style` in hell und dunkel.
- Jede App in Desktop- und Mobilansicht.
- Keine horizontalen Überläufe.
- Keine JavaScript-Fehler im Browser.
- Keine alten Status- oder Update-Strings in den Quellen.
- Keine App-eigenen Update-Routen außerhalb von SmartHub.
