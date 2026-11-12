# Lernprompts AP1

124 Lernprompts, einer je Stichpunkt. Der Knopf „Lernprompt“ in der App kopiert für einen offenen Stichpunkt genau
diese Datei. Jede Datei besteht aus vier Teilen:

1. **Kopf** – Stichpunkt, Ziel, was vorausgesetzt wird
2. **Regelblock** – wie die Sitzung abläuft (in allen 124 Dateien gleich)
3. **Stoff** – die Können-Aussagen mit Stufe und Erklärung, wortgleich mit `inhalt/AP1.json`
4. **Lehrnotiz** – Kerngedanken, typische Fehler, wie die IHK fragt, was schon geprüft wurde

## So benutzt du einen Prompt

1. In der App am Stichpunkt auf „Lernprompt“ klicken (oder die Datei öffnen und alles kopieren).
2. In einen **neuen** KI-Chat einfügen und absenden. Die KI fängt direkt an.
   - **„kann ich“** → nur eine Aufgabe, bei richtig geht es weiter.
   - **„Pause“** → kurze Zusammenfassung; später im selben Chat weitermachen.
   - Zeichnen: auf Papier, Foto hochladen.
3. Am Ende kommt eine Abschlussaufgabe im Stil der IHK. Ab zwei Dritteln der Punkte: in der App abhaken.

## Gut zu wissen

- Länge: im Mittel rund 14.000 Zeichen.
- Die drei aufgehobenen Prüfungen (2025H, 2026F, 2026H) werden in den Prompts nicht genannt und nicht verwendet.
- Stoff ändern: immer in `inhalt/AP1.json` **und** in der Datei gleich (`npm run pruefen` meldet Abweichungen).
  Wie das geht, steht in `CLAUDE.md`.
