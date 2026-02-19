# Netzwerkeinrichtung

## Standardverhalten

- IP-Adresse standardmäßig über **DHCP**.
- Hostname ab Werk: **`ehiveone`**
- mDNS: **`ehiveone.local`**

## Netzwerk über SmartHub ändern

1. SmartHub öffnen → **Einstellungen**
2. Interface wählen (typisch `eth0`)
3. IP‑Modus:
   - **DHCP** oder
   - **Statisch** (IPv4, Prefix, Gateway, DNS)
4. **Speichern**
5. Bestätigungsdialog mit Countdown:
   - „Neue Adresse öffnen“ (Erreichbarkeit prüfen)
   - „Bestätigen & Neustart“

> Wenn die neue Adresse nicht erreichbar ist, stellt das System nach Ablauf automatisch die vorherige Konfiguration wieder her.

## Netzwerk zurücksetzen (Hardware‑Taster)

Siehe *Software → NetMode (Netzwerk‑Taster)*.
