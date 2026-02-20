# Troubleshooting

## SmartHub nicht erreichbar

1. Netzwerk prüfen (Link/Router)
2. NetMode nutzen:
   - 10 s → DHCP
   - 30 s → Default-IP 192.168.100.1
   - Hinweis: NetMode setzt immer alle Zugangspasswörter zurück.
3. Danach IP erneut ermitteln und SmartHub öffnen.

## App in SmartHub „off“

- App-Dienst läuft nicht → Gerät neu starten
- Update/Upgrade durchgeführt → Seite neu laden
- Bei dauerhaften Problemen: Logs exportieren (falls verfügbar) und Support kontaktieren.

## Tunnel nicht erreichbar

- DNS/Internet-Verbindung prüfen
- Cloudflare Status/Access-Regeln prüfen
- Tunnel Manager Status & Log ansehen
