# Lernprompts PB1

76 Lernprompts, einer je Stichpunkt. Der Knopf „Lernprompt“ in der App kopiert für einen offenen Stichpunkt genau
diese Datei. Jede Datei besteht aus Kopf, Regelblock (in allen Dateien gleich), Stoff (wortgleich mit
`inhalt/PB1.json`) und Lehrnotiz (Kerngedanken, typische Fehler, wie die IHK fragt, was schon geprüft wurde).

## So benutzt du einen Prompt

1. In der App am Stichpunkt auf „Lernprompt“ klicken (oder die Datei öffnen und alles kopieren).
2. In einen **neuen** KI-Chat einfügen und absenden. Die KI fängt direkt an.
   - **„kann ich“** → nur eine Aufgabe, bei richtig geht es weiter.
   - **„Pause“** → kurze Zusammenfassung; später im selben Chat weitermachen.
   - Zeichnen (UML, ER-Modell, relationales Modell): auf Papier, Foto hochladen.
3. Am Ende kommt eine Abschlussaufgabe im Stil der IHK. Ab zwei Dritteln der Punkte: in der App abhaken.

## Gut zu wissen

- Länge: im Mittel 14.000–18.000 Zeichen.
- Fester Fall für PB1 und PB2: **Nordlicht Software GmbH** entwickelt die Werkstatt- und Verleihsoftware **VeloPlan**.
- Wo es keine Prüfungsaufgabe zum Stichpunkt gibt, sagt „So fragt die IHK“ das offen.
- Stoff ändern: in `inhalt/PB1.json` **und** in der Datei gleich (siehe `CLAUDE.md`).
- Offene Meldungen zum Stoff: `../_Stoff-Meldungen_Drehbuch_2026-11-10.md`. Wo das Buch dem Stoff widerspricht:
  `../_Buch-Abweichungen_2026-11-10.md` (dort gilt der Stoff).
