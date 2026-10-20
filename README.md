# Lernstudio Fachinformatik

Lern-App für die IHK-Abschlussprüfung **Fachinformatiker/in Anwendungsentwicklung**: AP1, PB1 (Planen eines
Softwareproduktes), PB2 (Entwicklung und Umsetzung von Algorithmen) und WiSo.

## Starten

**Online:** über GitHub Pages (`index.html` leitet auf `Lernstudio.html` weiter).

**Offline:** `Lernstudio.html` herunterladen und per Doppelklick öffnen. Kein Internet, keine Installation.

Der Lernstand liegt im Browser. Ab und zu über **Sicherung** (oben rechts) exportieren.

## Was drin ist

- **Lernplan** je Prüfungsteil: Stichpunkte mit Ziel, Kurzfassung, Können-Aussagen mit Erklärung, Kür, Wiederholungs-Phasen, Lernprompt
- **Wichtigkeit** je Stichpunkt: in wie vielen der ausgewerteten IHK-Prüfungen er vorkam (Top-Thema, Wichtig, Geprüft, Noch nie geprüft)
- **Lernkarten** mit Wiederholungsplanung, **Glossar**
- **Trainer:** Zahlen & IT-Rechnen, Subnetze, Kaufmännisch, Netzplan, Pseudocode, SQL-Labor, Modellieren (UML, ER, Normalisierung, EPK/BPMN, Masken)
- **Probeprüfungen** je Prüfungsteil

## Aufbau

| Ordner | Inhalt |
|---|---|
| `inhalt/` | Alle Lerninhalte: `AP1.json`, `PB1.json`, `PB2.json`, `WISO.json` (Gliederung, Stichpunkte, Karten) und `glossar.json` |
| `src/` | Die App (Preact). Trainer-Aufgaben und Probeprüfungen liegen unter `src/bereiche/` |
| `tools/` | Build und Prüfwerkzeuge |
| `tests/` | Tests |

## Entwickeln

```
npm install
npm run build      # baut Lernstudio.html
npm test           # Tests
npm run pruefen    # prüft inhalt/ auf Stimmigkeit
npm run saetze     # prüft die Probeprüfungen
```

Hinweise zum Bearbeiten der Inhalte: [CLAUDE.md](CLAUDE.md).
