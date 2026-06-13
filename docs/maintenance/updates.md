# Updates

## Grundsatz

Updates schließen Sicherheitslücken und verbessern Stabilität. Führe Updates nach Möglichkeit in einem Wartungsfenster aus, besonders wenn das Gerät produktiv in einer Anlage eingesetzt wird.

Empfehlung:

- Vor größeren Änderungen ein Backup erstellen.
- Update-Log bis zum Abschluss offen lassen.
- Gerät während des Updates nicht vom Strom trennen.

## SmartHub-Update

SmartHub bringt eine eigene Update-Oberfläche mit. Sie ist auch dann erreichbar, wenn die normale SmartHub-Oberfläche während eines Updates kurz neu startet.

Öffnen:

- Normal: `http://ehiveone.local/` oder `http://<IP-ADRESSE>/`
- Direkt zur Update-Oberfläche: `http://ehiveone.local/update/` oder `http://<IP-ADRESSE>/update/`
- Rettungszugriff, falls der Proxy nicht greift: `http://<IP-ADRESSE>:3003/`

Ab SmartHub `1.1.4` wird bei einem Ausfall der normalen Oberfläche automatisch auf die Update-Oberfläche weitergeleitet. Dadurch bleibt `http://ehiveone.local/` im Fehlerfall als Rettungseinstieg nutzbar.

### Ablauf

1. SmartHub öffnen und in die Update-Ansicht wechseln.
2. Zielversion auswählen oder **Neueste** verwenden.
3. **Update** starten.
4. Das Live-Log beobachten.
5. Warten, bis `UPDATE END: success` oder eine Fehlermeldung angezeigt wird.
6. Danach SmartHub neu laden und Version prüfen.

Während des Updates wird vorab ein SmartHub-Rollback-Backup angelegt. Dieses Backup ist für das Zurückrollen eines SmartHub-Updates gedacht und ersetzt kein vollständiges System-Backup.

Ab SmartHub `1.1.6` kann zusätzlich im Bereich **System-Backup** ein portables Backup auf USB erstellt, geprüft und heruntergeladen werden. Der USB-Stick ist optional. Ein wöchentlicher USB-Backup-Timer wird automatisch eingerichtet und überspringt den Lauf ohne Fehler, wenn kein USB-Stick eingesteckt ist. Ohne USB-Stick wird kein Backup erzeugt.

## Wenn ein Update fehlschlägt

1. Update-Log vollständig lesen.
2. Update-Oberfläche direkt öffnen: `http://<IP-ADRESSE>/update/`.
3. Service-Status prüfen und SmartHub neu starten.
4. Falls nötig, ein vorhandenes Rollback-Backup auswählen.
5. Wenn SmartHub und Updater nicht erreichbar sind: Gerät neu starten und erneut prüfen.

Wenn das Gerät danach weiterhin nicht erreichbar ist, Support kontaktieren und das Update-Log sowie die angezeigte Fehlermeldung bereithalten.

## App-Updates

Apps werden im SmartHub Store bzw. in der jeweiligen App-Verwaltung aktualisiert. Je nach App können zusätzlich **Starten**, **Neustarten**, **Installieren** oder **Deinstallieren** verfügbar sein.

![AppsUpdaten.png](../assets/images/AppsUpdaten.png)

Zentrale Update-Regel:

- App-Updates laufen zentral über SmartHub.
- Einzelne Apps dürfen keine eigenen `/update`-Seiten, `/api/update/*`-Routen, Update-Runner oder app-eigenen Update-Skripte mitbringen.
- App-Pakete dürfen Metadaten für SmartHub bereitstellen, die Bedienung und Ausführung von Updates bleibt aber zentral.

Hinweise:

- Nicht installierte Apps sollten nicht als laufende App angezeigt werden.
- Während einer App-Aktualisierung kann die App kurz nicht erreichbar sein.
- Datenbank- oder Messdaten-Backups sind app-spezifisch und nicht automatisch Teil des SmartHub-Rollback-Backups.

## System-Updates

Systemupdates des Betriebssystems und der Basisdienste sollten in der Regel durch Installateur oder Service durchgeführt werden. Vor einem Systemupdate ist ein vollständiges System-Backup empfohlen.
