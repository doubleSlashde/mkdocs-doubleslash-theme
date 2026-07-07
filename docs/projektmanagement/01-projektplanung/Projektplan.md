# Projektplan: Liebherr-Aerospace – Front- und Backendentwicklung

> **Jira:** [STQB-196](https://jira.doubleslash.de/jira/browse/STQB-196) | **Typ:** Time & Material (kein Gewerk) | **Status:** In Progress

---

## 1. Projektsteckbrief

| Feld | Wert |
|---|---|
| **Kunde** | Liebherr-Aerospace Lindenberg GmbH |
| **Projektname** | Front- und Backendentwicklung |
| **Projekttyp** | Time & Material — keine Lieferung von Gewerken |
| **Kickoff** | 10.06.2026 |
| **Laufzeit** | 10.06.2026 – 31.12.2026 |
| **Angebote** | OFFER-7332 (1 FE + 1 BE, 0,8 FTE je), OFFER-7369 (0,5 FE) |
| **Projektleiter doubleSlash** | Markus Wingler |
| **Ansprechpartner Kunde** | Stefan Huber (Head of Solution Development & Data Lab, LLI) |
| **Kontakt Kunde** | stefan.huber4@liebherr.com \| +49 8381 46-6359 |

---

## 2. Scope & Abgrenzung

### In Scope
- Unterstützung bei der Weiterentwicklung und Pflege bestehender LLI-Systeme (initial: Laserticket, Elima, Flow — weitere Systeme/Projekte werden im Laufe des Auftrags hinzukommen)
- Frontend-Entwicklung (Angular) und Backendentwicklung (C#)
- Technische Beratung und Code Reviews im Rahmen der laufenden Entwicklung

### Out of Scope
- Keine eigenständige Lieferung von Gewerken oder Teilsystemen
- Keine Produktverantwortung / kein eigenständiges Projektmanagement auf Kundenseite
- Keine Testverantwortung über Unit-Tests hinaus (sofern nicht explizit vereinbart)

---

## 3. Team & Rollen

### doubleSlash

| Name | Rolle | FTE | Verfügbarkeit |
|---|---|---|---|
| Markus Wingler | Projektleiter / FE-Entwicklung (Laserticket) | 0,8 | ab sofort; Onboarding bis 28.06., voll ab 29.06.2026; freitags verfügbar |
| Dennis Stricker | FE-Entwicklung (Elima) | 0,8 | ab sofort |
| Andreas Nuber | FE-Entwicklung (Flow) | 0,8 | ab sofort; Onboarding bis 05.07., voll ab 06.07.2026 (freitags nicht verfügbar); Urlaub 17.08.–06.09.2026 |

### Liebherr-Aerospace

| Name | Rolle |
|---|---|
| Stefan Huber | Head of Solution Development & Data Lab, Hauptansprechpartner |
| Ilja Kulisidi | Strategischer Ansprechpartner / Systemzugänge | ilja.kulisidi@liebherr.com |

---

## 4. Systeme / Teilprojekte

> Die folgenden Systeme sind der initiale Scope. Weitere Projekte werden im Laufe des Auftrags ergänzt.


### 4.1 Laserticket
- **Beschreibung:** Ticketsystem für Montage und Fahrwerk
- **Nutzer:** ~305 User
- **Volumen:** ~500 Tickets / Monat
- **Team doubleSlash:** Markus Wingler
- **Counterpart LLI:** Tom N.N.
- **Tech Stack:** TBD (Angular FE)
- **Besonderheiten:** —

### 4.2 Elima
- **Beschreibung:** Visuelle Plattform zur strukturierten und visuellen Darstellung von Fehlerspeichern
- **Nutzer:** <100 User (Reparaturprozess)
- **Team doubleSlash:** Dennis Stricker
- **Counterpart LLI:** Daniel N.N.
- **Tech Stack:** TBD (Angular FE)
- **Besonderheiten:** —

### 4.3 Flow
- **Beschreibung:** PLM-System, zentrales Tool für Dokumenten-Management, Änderungsnachweise und Lieferantenkommunikation
- **Alter:** ~15 Jahre
- **Team doubleSlash:** Andreas Nuber
- **Counterpart LLI:** Lukas N.N.
- **Tech Stack:** TBD (C# BE + Angular FE)
- **Besonderheiten:** Legacy-System; Nachweispflicht bei Änderungen; bisher via E-Mail-Kommunikation mit Lieferanten

---

## 5. Phasenplan / Meilensteine

| Phase | Zeitraum | Inhalt |
|---|---|---|
| **Onboarding / Transition-In** | 10.06. – 28.06.2026 | Systemzugänge, Umgebungssetup, Codebase-Einarbeitung, Austausch mit Liebherr-Entwicklungsteams |
| **Operativer Start** | ab 29.06.2026 (Markus) / ab 06.07.2026 (Andi) | Erste aktive Entwicklungsbeiträge in allen drei Systemen |
| **Sommer-Planung** | Juli 2026 | Berücksichtigung Urlaubsabwesenheit Andi (17.08.–06.09.); ggf. Vertretungsregelung |
| **Review / Statuscheck** | September 2026 | Zwischenbilanz T&M, ggf. Verlängerungsverhandlung |
| **Projektende (aktuell)** | 31.12.2026 | Ende der aktuellen Beauftragung |

---

## 6. Kommunikation & Abstimmungsformate

| Format | Rhythmus | Teilnehmer | Moderator |
|---|---|---|---|
| Erster operativer Call | 18.06.2026 | Markus + Stefan Huber | Markus |
| Liebherr-Leads Interner Sync | 2-wöchentlich, Do 15:00–15:30 | Markus, Dennis, Andi | Markus |
| Statusbericht / Reporting | TBD | Markus → Stefan Huber | Markus |

> ⚠️ **TODO:** Abstimmungsformate und -rhythmus mit Liebherr im ersten operativen Call klären.

---

## 7. Risiken & Abhängigkeiten

| # | Risiko | Eintrittswahrscheinlichkeit | Auswirkung | Maßnahme |
|---|---|---|---|---|
| R1 | Systemzugänge (LLI) verzögert | Mittel | Hoch | Proaktiv bei Stefan Huber nachfassen; Status läuft bereits (laut OFFER-7332) |
| R2 | Andi Nuber Urlaubsabwesenheit Aug–Sep | Sicher | Mittel | Übergabe/Vertretung für Flow vorab planen |
| R3 | Legacy-System Flow: hohe Einarbeitungszeit | Hoch | Mittel | Dediziertes Onboarding-Zeit einplanen; Wissenstransfer von Liebherr anfordern |
| R4 | Scope-Creep bei T&M | Mittel | Mittel | Klare Kommunikation: T&M ≠ Gewerk; keine Produktverantwortung |
| R5 | Vertragsverlängerung nach Dez 2026 | Mittel | Hoch | Review-Gespräch spätestens Oktober anstoßen |

---

## 8. Offene Punkte (TODOs)

- [ ] Nachnamen der Internen (Tom, Daniel, Lukas) ergänzen
- [ ] Tech Stacks je System konkretisieren
- [ ] Jour-Fixe-Rhythmus und Format mit Stefan Huber abstimmen
- [ ] Internes Team-Sync-Format festlegen
- [x] Bestellungen / POs von Liebherr eingegangen (Dennis, Andreas, Markus) ✓
- [x] Systemzugänge bestätigt — VPN, GitHub, Jira, Confluence für alle ✓ (Stand 15.06.2026)
- [ ] Vertretungsregelung für Andi-Urlaub (17.08.–06.09.) klären
- [ ] Review-Gespräch Verlängerung im Oktober vormerken

---

*Erstellt: 15.06.2026 | Autor: Markus Wingler | Quelle: STQB-196, OFFER-7369, OFFER-7332*
