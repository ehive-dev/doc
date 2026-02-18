# Technische Daten

## Mechanik

| Merkmal | Wert |
|---|---|
| Abmessungen (B×H×T) | **45 mm × 53 mm × 75,4 mm** |
| Schutzart | **IP20** |
| Montage | Hutschiene (Schaltschrank/unter Abdeckung) |

## Elektrisch

| Merkmal | Wert |
|---|---|
| Versorgung | **12–30 V DC** (Klemme) oder **PoE** über integriertes PoE‑PD‑Modul **DP1435‑5V** (IEEE 802.3af, je nach Variante) |
| Netzteil-Empfehlung | **mind. 15 W** |
| Schutzklasse | schutzisoliert (Kleinspannung) |

## Hardwarebasis

Die Standardausführung basiert auf **Radxa ZERO 3E** (1 GB RAM):

| Merkmal | Wert |
|---|---|
| SoC | Rockchip RK3566, Quad‑Core Arm Cortex‑A55 @ bis 1,6 GHz |
| RAM | 1 GB LPDDR4 |
| Ethernet | 1× Gigabit Ethernet; PoE optional mit PoE‑Erweiterung |
| USB | 1× USB‑C (USB3 Host), 1× USB‑C (USB2 OTG) |
| Betriebstemperatur (Basis) | 0 °C bis 50 °C (SBC‑Spezifikation) |

Quelle: Radxa ZERO 3E Product Brief
- https://dl.radxa.com/zero3/docs/hw/3e/radxa_zero_3e_product_brief.pdf

## Geräteschnittstellen (eHive One)

| Schnittstelle | Beschreibung |
|---|---|
| RS485 | On‑board (Integration abhängig von Projekt/Parametrierung) |
| DI (EnWG §14a) | Digitaler Eingang; Status über DI‑LED sichtbar |
| HDMI | **nicht Bestandteil der Standardausführung**, optional auf Anfrage |

## Software

| Merkmal | Wert |
|---|---|
| Betriebssystem | OpenArc (DietPi‑basiert) |
| Bedienung | Weboberflächen über SmartHub (Reverse Proxy) |
