---
hide:
    - toc
---

# Projektmanagement im Projekt-Repository

**Vorlagen**, **Blueprints** und **Wissensdokumente** für professionelles Projektmanagement liegen hier unter `**docs/projektmanagement/`**. Die Ordnerstruktur folgt **logischen Projektbereichen** – für klare Navigation und schnelle Orientierung.

Dieser Bereich ist der zentrale Ablageort für PM-Dokumente, Vorlagen und Arbeitsstände **dieses** Projekts im Projekt-Repository.

## Themenbereiche (README & Markdown-Artefakte)

| Bereich | Übersicht |
|--------|-----------|
| [01 – Projektplanung](01-projektplanung/README.md) | `Projektplan.md`, PI-Commitment unter `pi-commitment/…`, … |
| [02 – Projektorganisation](02-projektorganisation/README.md) | DoR/DoD/DoE, Prozess-Overviews, Teamorganisation, … |
| [03 – Stakeholder-Management](03-stakeholder-management/README.md) | `stakeholder-analyse.md` |
| [04 – Risikomanagement](04-risikomanagement/README.md) | `Eskalationsprozess.md` |
| [05 – Claim & Change](05-claim-und-change-management/README.md) | `claim-und-change-register.md` |
| [06 – Reporting & Meeting Minutes](06-reporting-und-meeting-minutes/README.md) | Decisionlog, Management-Report, Meeting-Vorlagen, … |
| [07 – Delivery](07-delivery/README.md) | `templates/` (Epic, Story, Defect, Problems) |
| [08 – Qualitäts-Management](08-qualitaets-management/README.md) | *(Qualitätsplan projektspezifisch)* |
| [09 – Controlling & Abrechnung](09-controlling-abrechnung-manual/README.md) | `abnahmeprotokoll-leistungsnachweis.md` |
| [10 – Transition-In](10-transition-in/README.md) | `transitionplan.md`, `coc-protokoll.md`, … |
| [11 – Operations](11-operations/README.md) | *(vorbereitet)* |
| [12 – Dashboard & Tools](12-dashboard-und-tools/README.md) | Tool-Verweise & Excel |
| [13 – Projektabschluss](13-projektabschluss/README.md) | `finale-kundenabnahme.md`, `uebergabeprotokoll.md` |
| [Diagramm-Export](diagramm-export/README.md) · [images](images/README.md) | PNG/SVG-Ausgaben, Diagramm-Navigation |

## Anfangs leer, wächst mit dem Projekt

Aus der Vorlage kommt der Bereich **bewusst schlank** (Struktur und Platzhalter, wo nötig). **Im Projektverlauf** entstehen die echten Inhalte: Pläne, Protokolle, Register, Reports und alles, was für Steuerung und Nachweis gebraucht wird. Das Template liefert **Ordnung** und **Anknüpfung an Cursor Rules/Skills**; **Projektdaten** pflegt das Team vor Ort.

## PM-Blueprints über MCP

Struktur, Frontmatter und Blueprint-Module der PM-Artefakte kommen **über MCP** vom Server `**user-ki-pm-blueprints`** (doubleSlash PM-Blueprints). Die **MCP-Konfiguration für Cursor** wird **mit diesem Repository ausgerollt** – es ist **kein** zusätzlicher Einrichtungsschritt nötig.

## Cursor: Rules und Skills

**Cursor Rules** und **Skills** unterstützen u. a. Ticket-Erstellung, DoE-/DoR-Prüfungen, PI-Commitment und blueprint-konforme Dokumente.

- **Skills (Kurzüberblick):** .cursor/skills/README.md
- **Cursor Rules (Übersicht):** .cursor/rules/README.md

Jira-Anbindung (wo vorgesehen) erfolgt **über MCP**, nicht durch Annahmen im leeren Repo.
