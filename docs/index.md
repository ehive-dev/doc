# eHive One Dokumentation

## Schnellstart

1. Gerät montieren und versorgen:
   - Hutschiene, trockene Innenumgebung, Schaltschrank/Abdeckung (IP20)
   - Versorgung: `12-30 V DC` (Klemme) oder optional `PoE` (je nach Variante)
2. Netzwerk verbinden (Standard: **DHCP** aktiv).
3. Zugriff im selben Netzwerk versuchen:
   - `http://ehiveone.local/` (mDNS)
   - oder `http://<IP-ADRESSE>/`
4. Wenn `ehiveone.local` nicht funktioniert:
   - IP in Router-/DHCP-Liste suchen
   - bei Fehlkonfiguration `NetMode` nutzen: `10 s` -> DHCP, `30 s` -> `192.168.100.1`
5. Login in **SmartHub**:
   - Benutzer: `admin`
   - Passwort: (wurde bei der Integration geändert)
6. Direkt danach:
   - Passwort ändern (`SmartHub -> Einstellungen`)
   - Netzwerkdaten prüfen
   - Remote-Zugriff (Tunnel Manager) nur bei Bedarf aktivieren

> Lokal wird nur **HTTP** bereitgestellt (kein HTTPS). Für Internetzugriff nur den **Tunnel Manager** verwenden.
>
> Hinweis: `NetMode` setzt immer alle Zugangspasswörter zurück.

Weiterführend:

- [Inbetriebnahme](getting-started.md)
- [Zugriff & URLs](access.md)
- [NetMode (Netzwerk-Taster)](software/netmode.md)
- [Troubleshooting](maintenance/troubleshooting.md)

## Support

- Kontakt: `support-eHive@gmx.de`