# Lernstudio Fachinformatik

Lern-App für die IHK-Abschlussprüfung **Fachinformatiker/in Anwendungsentwicklung**: AP1, PB1 (Planen eines
Softwareproduktes), PB2 (Entwicklung und Umsetzung von Algorithmen) und WiSo.

**App öffnen:** <https://logic-over-luck.github.io/lernstudio-fiae/>

## Wie dieses Repo entstanden ist

**Dieses Repo ist vollständig mit KI erzeugt und kein Programmierprojekt von mir.** Es ist mein Lernwerkzeug für
die Prüfungen meiner Umschulung. Öffentlich ist es, weil die App über GitHub Pages läuft.

- **Von der KI (Claude Code, Anthropic):** der gesamte Code, die Tests, die Ausarbeitung der Lerninhalte, Lernkarten
  und Lernprompts und auch diese Dokumentation. Deshalb steht „Claude“ als einziger Contributor im Verlauf, und die
  Arbeitsanweisungen für die KI liegen offen in [`CLAUDE.md`](CLAUDE.md).
- **Von mir:** die Idee, die Anforderungen, die Quellen (Prüfungskatalog, Lehrbücher, alte Prüfungen) und die
  Entscheidungen: was die App können soll, wie gelernt und wiederholt wird, was in den Stoff gehört und was nicht.

## Was die App kann

- **Lernplan** je Prüfungsteil: 293 Stichpunkte mit Ziel, Kurzfassung, 1.854 Können-Aussagen mit Erklärung und
  Buchstellen
- **Lernprompts:** zu jedem Stichpunkt ein fertiger Auftrag für einen KI-Chat (Regeln, Stoff, Lehrnotiz); die KI
  erklärt, fragt nach und stellt am Ende eine Aufgabe im Stil der Prüfung
- **Lernkarten:** 4.240 Karten mit Wiederholung in festen Abständen (Gewusst / Unsicher / Nicht gewusst) und einer
  Prüfungsrunde in den letzten sechs Wochen vor dem eingetragenen Termin
- **Lernreihenfolge** (AP1) und **Wichtigkeit** (PB1, PB2, WiSo): was zuerst gelernt wird und warum
- **Trainer:** Zahlen und IT-Rechnen, Subnetze, Kaufmännisch, Netzplan, Pseudocode, SQL-Labor, Modellieren (UML, ER,
  Normalisierung, EPK/BPMN, Masken)
- **Probeprüfungen** je Prüfungsteil und ein **Glossar**

Der Lernstand liegt nur im Browser. Ab und zu über **Sicherung** (oben rechts) exportieren.

## Starten

- **Online:** Link oben (`index.html` leitet auf `Lernstudio.html` weiter).
- **Offline:** `Lernstudio.html` herunterladen und per Doppelklick öffnen. Kein Internet, keine Installation.

## Aufbau

Die ganze App ist eine einzige HTML-Datei, gebaut mit Preact und esbuild; das SQL-Labor nutzt sql.js.

| Ordner | Inhalt |
|---|---|
| `inhalt/` | Alle Lerninhalte: `AP1.json`, `PB1.json`, `PB2.json`, `WISO.json` (Gliederung, Stichpunkte, Karten), `glossar.json` und in `lernprompts/<Prüfungsteil>/` ein Lernprompt je Stichpunkt |
| `src/` | Die App. Trainer-Aufgaben und Probeprüfungen liegen unter `src/bereiche/` |
| `tools/` | Build und Prüfwerkzeuge |
| `tests/` | Tests |
| `lizenzen/` | Lizenzen der eingebundenen Schriften und Bibliotheken |

## Bauen und prüfen

```
npm install
npm run build      # baut Lernstudio.html
npm test           # Tests
npm run pruefen    # prüft inhalt/ auf Stimmigkeit
npm run saetze     # prüft die Probeprüfungen
```

Offene Punkte: [`OFFENE_PUNKTE.md`](OFFENE_PUNKTE.md).
