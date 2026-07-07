# Projekt-Organigramm: Liebherr-Aerospace

> **Projekt:** Front- und Backendentwicklung | **Typ:** T&M | **Stand:** 15.06.2026

---

## Organigramm

```plantuml
@startuml
!include https://raw.githubusercontent.com/doubleSlashde/umltheme/refs/heads/main/doubleslash/doubleslash-gen2.puml
title Projekt-Organigramm – Liebherr-Aerospace

package "Auftraggeber / Kunde (LLI)" {
  [Stefan Huber\nHead of Solution Development & Data Lab] as Kunde
  [Ilja Kulisidi\nStrategischer Ansprechpartner] as Ilja
}

package "Projektleitung (doubleSlash)" {
  [Markus Wingler\nProjektleiter] as PL
}

Kunde -down-> PL

package "Track A – Laserticket" {
  [Markus Wingler\nFE-Entwicklung (dS)] as A1
  [Tom N.N.\nEntwickler (LLI)] as A2
}

package "Track B – Elima" {
  [Dennis Stricker\nFE-Entwicklung (dS)] as B1
  [Daniel N.N.\nEntwickler (LLI)] as B2
}

package "Track C – Flow" {
  [Andreas Nuber\nFE/BE-Entwicklung (dS)] as C1
  [Lukas N.N.\nEntwickler (LLI)] as C2
}

PL -down-> A1
PL -down-> B1
PL -down-> C1

@enduml
```

---

## Rollen & Ansprechpartner

| Rolle | Name | Kontakt |
|---|---|---|
| **Auftraggeber / Hauptansprechpartner LLI** | Stefan Huber | stefan.huber4@liebherr.com |
| **Systemzugänge / Infrastruktur LLI** | Ilja Kulisidi | ilja.kulisidi@liebherr.com |
| **Projektleiter doubleSlash** | Markus Wingler | markus.wingler@doubleslash.de |
| **FE-Entwickler Track A (Laserticket)** | Markus Wingler | markus.wingler@doubleslash.de |
| **FE-Entwickler Track B (Elima)** | Dennis Stricker | dennis.stricker@doubleslash.de |
| **FE/BE-Entwickler Track C (Flow)** | Andreas Nuber | andreas.nuber@doubleslash.de |
| **Counterpart LLI Track A (Laserticket)** | Tom N.N. | — |
| **Counterpart LLI Track B (Elima)** | Daniel N.N. | — |
| **Counterpart LLI Track C (Flow)** | Lukas N.N. | — |

---

## Hinweise

- Nachnamen der Internen (Tom, Daniel, Lukas) noch zu ergänzen
- Markus Wingler nimmt Doppelrolle wahr: Projektleiter + aktiver Entwickler Track A
- Tom, Daniel, Lukas sind Liebherr-interne Entwickler (nicht doubleSlash)
- Alle drei Tracks folgen dem Liebherr-seitigen Scrum-Prozess

---

*Erstellt: 15.06.2026 | Autor: Markus Wingler | Quelle: STQB-196*
