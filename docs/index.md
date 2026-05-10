# eHive One Dokumentation

<video class="ehive-video" autoplay loop muted playsinline preload="metadata" width="100%">
  <source src="assets/videos/ehive-doc.mp4" type="video/mp4">
  Ihr Browser unterstützt kein HTML5-Video.
</video>

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
   - bei Fehlkonfiguration `NetMode` nutzen: `5 s` -> DHCP, `10 s` -> `192.168.100.1`
5. Login in **SmartHub**:
   - Benutzer: `admin`
   - Passwort: (wurde bei der Integration geändert)
6. Direkt danach:
   - Passwort ändern (`SmartHub -> Einstellungen`)
   - Netzwerkdaten prüfen
   - Remote-Zugriff (Tunnel Manager) nur bei Bedarf aktivieren

> Lokal wird nur **HTTP** bereitgestellt (kein HTTPS). Für Internetzugriff nur den **Tunnel Manager** verwenden.
>
> Hinweis: `NetMode` setzt die Zugangspasswörter zurück und startet das Gerät neu. Der Ablauf dauert ca. 1 Minute; während des Reboots leuchtet die System-LED nahe USB-C dauerhaft.

Weiterführend:

- [Inbetriebnahme](getting-started.md)
- [Zugriff & URLs](access.md)
- [Updates](maintenance/updates.md)
- [Backup und Wiederherstellung](maintenance/backup-restore.md)
- [NetMode (Netzwerk-Taster)](software/netmode.md)
- [Troubleshooting](maintenance/troubleshooting.md)

## Support

- Kontakt: `eHive@gmx.de`
- Ablauf: [Support-Prozess](support.md)
