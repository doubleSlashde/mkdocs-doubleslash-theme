# Jira2Booking: Liebherr-Aerospace

> Anleitung zur Übernahme von Liebherr-Jira-Tickets in Heimat-Buchungen.  
> **Tool:** [Jira2Booking](https://gitlab.doubleslash.de/doubleSlash/tools/jira2booking)

---

## Buchungsstruktur in Heimat

| Offer | Buchungspositionen |
|---|---|
| OFFER-7332 | Senior FE Dev, Senior BE Dev, Reisezeit |
| OFFER-7369 | Senior FE Dev, Reisezeit |

Da die Buchung **nicht ticketbasiert** erfolgt (keine STORY-Cluster), ist Jira2Booking für dieses Projekt **nicht aktiv im Einsatz**. Alle Aufwände werden pauschal auf die jeweilige Buchungsposition (Senior FE Dev / Senior BE Dev) gebucht.

---

## Falls ticketbasierte Buchung künftig eingeführt wird

CSV-Export aus Liebherr Jira mit folgenden Spalten (in dieser Reihenfolge):

| Spalte | Bedeutung |
|---|---|
| Key | Jira-Ticket-ID (z.B. `LT-123`) |
| Summary | Kurzbeschreibung |
| Effort size | Aufwand (T-Shirt-Size) |

**Wichtig:** Heimat-Vorgänge nur als `[JIRA-ID]` anlegen (ohne Effort Size), damit das Controlling Tool korrekt funktioniert.

### Ablauf
1. Sprint in Heimat anlegen (unter dem jeweiligen Offer)
2. CSV aus Liebherr Jira exportieren
3. Im Jira2Booking-Tool: CSV importieren, Sprint als Parent wählen
4. Preview prüfen — bestehende Vorgänge werden nicht doppelt angelegt
5. Import ausführen

---

*Erstellt: 15.06.2026 | Autor: Markus Wingler*
