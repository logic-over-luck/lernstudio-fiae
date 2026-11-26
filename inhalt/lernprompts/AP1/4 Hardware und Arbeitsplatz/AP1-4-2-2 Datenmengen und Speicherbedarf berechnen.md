Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Hardware und Arbeitsplatz › Kenngrößen berechnen › Datenmengen und Speicherbedarf berechnen

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP1 – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt. Beides liest nur du. Ich kenne nur, was du mir in dieser Sitzung erklärst.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Was ich am Ende können soll, steht dagegen fest:

- Jede Aussage im Stoff (K1, K2 …) ist ein Lernziel. Der Satz „Du kannst …“ sagt, was ich in der Prüfung können muss, die Stufe, auf welche Art: Wiedergeben = nennen; Verstehen = erklären, beschreiben, unterscheiden; Anwenden = es an einem Fall selbst tun (rechnen, erstellen, zeichnen); Beurteilen = entscheiden und begründen. Fertig ist eine Aussage, wenn ich genau das kann – mit allem, was der Satz nennt. Fehlende Nummern (etwa K4) sind Absicht.
- Dieser Stichpunkt ist einer von knapp 300 und eng zugeschnitten. Was über seine Aussagen hinausgeht, lerne ich in einem anderen Stichpunkt oder brauche es für die Prüfung nicht. Nimm es nicht vorweg, weder in der Erklärung noch in einer Aufgabe; brauche ich etwas davon zum Verstehen, reicht ein Satz. Das gilt erst recht für alles, was die Lehrnotiz einem Nachbarstichpunkt zuordnet, und für alles, was eine Erklärung im Stoff nur nebenbei erwähnt.

Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen – also jede Aussage begründen können, nicht mehr Stoff lernen. Erklär mit den richtigen Fachbegriffen. Die Begründungen nimmst du aus dem Stoff und der Lehrnotiz; ergänzt du eine eigene, kennzeichne sie mit „Hintergrund, nicht aus dem Stoff: …“. Verlangt eine Aussage selbst ein Verfahren, einen Ablauf oder einen Rechenweg, gehen wir ihn Schritt für Schritt durch.
- Zu manchen Aussagen stehen in der Lehrnotiz „Abläufe zum Verstehen“: fachlich geprüfte Erklärungen dessen, was Schritt für Schritt passiert. Bring den Ablauf bei seiner Aussage, und sag dazu, was davon die IHK lesen will und was nur Hintergrund ist. Steht zu einer Aussage kein Ablauf da, reicht die Erklärung aus dem Stoff. Fehlt dir im Einzelfall trotzdem etwas Wichtiges, biet es mir in einem Satz an; schreibe ich „tiefer“, erklärst du es kurz und als Hintergrund gekennzeichnet.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Sag am Anfang jedes Häppchens, an welcher Aussage wir sind. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Eine Aufgabe prüft, was der Satz „Du kannst …“ verlangt, auf seiner Stufe – möglichst an einem neuen Fall statt als Nachsagen der Erklärung, aber nur mit dem, was du mir vorher erklärt hast. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
- Sag bei jeder Aufgabe, wie viele Punkte sie hat (ein Punkt je verlangtem Teil). Bewerte nur, was verlangt war, mit „x von y Punkten“ und dem, was fehlte: ✅ nur bei voller Punktzahl, ⚠️ bei Teilpunkten, ❌ bei null. Stimmt der Inhalt und fehlt nur das Fachwort, gibt es den Punkt: Nenn mir das Wort und weiter.
- Fachwörter, die die IHK lesen will, mach mir ruhig deutlich.
- Häng ich irgendwo fest, probier's anders – und wenn's gar nicht klickt, zeig mir die Lösung und wir machen weiter.
- Zeichnungen mache ich auf Papier und lade ein Foto hoch.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im IHK-Stil (Kundensituation, Teilaufgaben mit Punkten, zusammen etwa 10–12, eine nach der anderen). Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

Antworte auf Deutsch.

## Stoff: Datenmengen und Speicherbedarf berechnen

Ziel: Den Speicherbedarf von Dokumenten, Bildern und Aufzeichnungen berechnen, hochrechnen und beurteilen, ob der Speicher reicht.

Das muss ich können:

### K1 – Speicherbedarf aus Werten und Bit je Wert (Stufe 3 Anwenden)
Du kannst den Speicherbedarf aus der Anzahl der Werte und den Bit je Wert berechnen und in KiB, MiB oder GiB angeben.

Erklärung:
- `Bit = Anzahl der Werte × Bit je Wert` – hat jeder Punkt mehrere Werte (z. B. x, y, z), zählt jeder mit: Punkte × Werte je Punkt × Bit je Wert
- ÷ 8 → Byte
- ÷ 1.024 → KiB, nochmal ÷ 1.024 → MiB, nochmal → GiB
Beispiel: Ein Sensor speichert 86.400 Messwerte zu je 16 Bit.
- 86.400 × 16 = 1.382.400 Bit
- ÷ 8 = 172.800 Byte
- ÷ 1.024 = **168,75 KiB**

### K2 – Darstellbare Werte aus der Bittiefe (Stufe 3 Anwenden)
Du kannst aus der Bittiefe die Zahl der darstellbaren Werte berechnen, zum Beispiel 2 hoch 24 Farben bei 3 mal 8 Bit.

Erklärung:
Mit n Bit lassen sich **2ⁿ** verschiedene Werte darstellen.
- 8 Bit → 2⁸ = 256 Werte
- 24 Bit Farbtiefe (3 × 8 Bit für Rot, Grün, Blau) → 2²⁴ = **16.777.216 Farben**

### K5 – Mehrbedarf in Prozent (Stufe 3 Anwenden)
Du kannst einen Mehrbedarf in Prozent berechnen.

Erklärung:
`Mehrbedarf in % = (neu − alt) ÷ alt × 100`
Beispiel: Bisher 120 GiB, künftig 150 GiB → (150 − 120) ÷ 120 × 100 = **25 %**.
Achtung: Immer durch den **alten** Wert teilen.

### K6 – Speicherbedarf eines unkomprimierten Bildes (Stufe 3 Anwenden)
Du kannst den Speicherbedarf eines unkomprimierten Bildes aus Breite, Höhe, Auflösung und Farbtiefe berechnen.

Erklärung:
- Pixel aus Größe und Auflösung: `Zoll × dpi` je Seite. Sind die Maße in cm gegeben, erst umrechnen: `Zoll = cm ÷ 2,54` (z. B. 50,8 cm ÷ 2,54 = 20 Zoll).
- `Bit = Breite × Höhe in Pixel × Farbtiefe`, dann ÷ 8 → Byte.
Beispiel: Foto 4 × 6 Zoll, 300 dpi, 24 Bit Farbtiefe:
- 4 × 300 = 1.200 und 6 × 300 = 1.800 Pixel
- 1.200 × 1.800 = 2.160.000 Pixel
- × 3 Byte (24 Bit) = 6.480.000 Byte ≈ **6,18 MiB**

### K7 – Komprimierung im Speicherbedarf berücksichtigen (Stufe 3 Anwenden)
Du kannst eine Komprimierung berücksichtigen, zum Beispiel Speicherbedarf um 30 % verringert.

Erklärung:
Wird der Speicherbedarf um x % verringert, bleiben (100 − x) % übrig:
`komprimiert = unkomprimiert × (1 − x ÷ 100)`
Beispiel: 40 MiB, um 30 % verringert → 40 MiB × 0,7 = **28 MiB**.
Typischer Fehler: mit 0,3 multiplizieren – das wäre nur die Ersparnis. Anders bei „auf 30 % komprimiert“: Dann bleiben 30 % übrig, also × 0,3.

### K8 – Hochrechnung über die Zeit auf volle TiB (Stufe 3 Anwenden)
Du kannst Mengen über die Zeit hochrechnen, zum Beispiel Aufnahmen je Tag aus Geschwindigkeit und Arbeitszeit, und den Gesamtbedarf wie verlangt auf volle TiB aufrunden.

Erklärung:
- Menge je Zeiteinheit × Arbeitszeit = Menge je Tag
- × Arbeitstage = Menge im Jahr
- × Größe je Stück = Speicherbedarf
- in die verlangte Einheit umrechnen und wie verlangt **aufrunden**
Beispiel: Ein Scanner schafft 20 Seiten je Minute, 7 Stunden am Tag, 220 Tage, je Seite 2 MiB.
- 20 × 60 × 7 = 8.400 Seiten je Tag
- × 220 = 1.848.000 Seiten
- × 2 MiB = 3.696.000 MiB ÷ 1.024 ÷ 1.024 ≈ 3,52 TiB → aufgerundet **4 TiB**

### K9 – Reicht der Speicher für die Datenmenge (Stufe 4 Beurteilen)
Du kannst beurteilen, ob ein Speicher für die berechnete Datenmenge ausreicht.

Erklärung:
Rechne Kapazität und Bedarf in **dieselbe Einheit** um und vergleiche.
Beispiel: Bedarf 3,52 TiB, Festplatte 4 TB.
- 4 TB = 4 × 10¹² Byte ÷ 2⁴⁰ ≈ 3,64 TiB
- 3,64 TiB > 3,52 TiB → reicht, aber nur knapp.
Bedenke Reserve und Wachstum: Bei so wenig Luft ist eine größere Platte die sicherere Empfehlung.

### K10 – Analoge gegen digitale Daten (Stufe 2 Verstehen)
Du kannst analoge und digitale Daten unterscheiden: Analoge Größen ändern sich stufenlos mit beliebig vielen Zwischenwerten (Zeigeruhr, Schall), digitale haben nur endlich viele Stufen; ein Computer verarbeitet nur digitale Daten, Analoges muss erst digitalisiert werden.

Erklärung:
- **analog:** kontinuierlich, jeder Zwischenwert ist möglich – Zeigeruhr, Temperaturverlauf, Schallwelle
- **digital:** diskret, nur endlich viele Werte – Digitaluhr, Zahl im Speicher
Ein Rechner kann nur mit digitalen Werten arbeiten. Darum werden analoge Signale **digitalisiert**: in festen Abständen gemessen und jeder Messwert auf eine der verfügbaren Stufen gerundet. Je mehr Messungen und Stufen, desto genauer – und desto größer die Datenmenge.
Beispiel: Ein Scanner digitalisiert ein Papierdokument, ein Mikrofon mit Soundkarte die Sprache im Videocall.

### K11 – Speicherbedarf einer Audioaufnahme (Stufe 3 Anwenden)
Du kannst den Speicherbedarf einer unkomprimierten Audioaufnahme berechnen: Abtastrate mal Abtasttiefe mal Kanalzahl mal Dauer, zum Beispiel für CD-Qualität mit 44,1 kHz, 16 Bit und Stereo.

Erklärung:
Beim **Sampling** wird die Schallwelle in festen Abständen gemessen und jeder Messwert als Zahl gespeichert.
- **Abtastrate:** Messungen je Sekunde (CD: 44.100 Hz)
- **Abtasttiefe:** Bit je Messwert (CD: 16 Bit = 65.536 Stufen)
- **Kanäle:** mono 1, stereo 2, 5.1 sechs
Rechnung für 1 Minute CD-Qualität:
`44.100 · 16 Bit · 2 · 60 s = 84.672.000 Bit = 10.584.000 Byte ≈ 10,09 MiB`
Achte auf die Einheiten: Bit durch 8 ergibt Byte, Datenmengen in KiB/MiB mit Binärpräfix.

## Lehrnotiz: Datenmengen und Speicherbedarf berechnen

**Aufteilung:**
- Analog und digital: K10
- Wie viele Werte in n Bit passen: K2
- Speicherbedarf aus Anzahl und Bit je Wert, Mehrbedarf: K1, K5
- Audioaufnahme: K11
- Bild und Komprimierung: K6, K7
- Pause möglich nach Bild und Komprimierung.
- Hochrechnen und beurteilen, ob der Speicher reicht: K8, K9

**Schon geprüft:** In Prüfungen: K1 (2024F, 2025H), K2 (2024F), K5 (2024F), K6 (2022H), K7 (2025H), K8 (2022H, 2026F) · Noch nicht geprüft: K9–K11

**Kerngedanken:**
- Alle Rechnungen hier folgen einem Muster: Anzahl der Werte mal Bit je Wert, durch 8, dann je Stufe durch 1.024. Bild und Audio unterscheiden sich nur darin, wie man die Anzahl der Werte findet.
- dpi heißt Punkte je Zoll. Die IHK gibt die Maße in cm an und dazu „1 Inch = 2,54 cm“: erst cm durch 2,54 teilen, dann mal dpi.
- Beim Digitalisieren gehen Zwischenwerte verloren, auch beim Scannen: Das Raster (dpi) legt den Messabstand fest, die Farbtiefe die Zahl der Stufen.
- Ist nach vollen Einheiten gefragt (volle TiB, Zahl der Datenträger), wird immer aufgerundet, auch bei 3,1 – abgerundeter Speicher reicht nicht. Nachkommastellen eines Ergebnisses werden normal gerundet.

**Typische Missverständnisse:**
- Viele denken, 3 × 8 Bit ergäben 3 · 256 Farben. Richtig ist 256 · 256 · 256, weil jede Kombination der drei Kanäle eine eigene Farbe ist.
- Viele denken, digital heiße genauer. Richtig ist: Digital heißt nur „endlich viele Stufen“; wie genau es ist, hängt von Messabstand und Stufenzahl ab.

**Fachwörter:**
- Bittiefe: Zahl der Bit je Wert
- Farbtiefe: Bit je Pixel für die Farbe
- Auflösung: Bildpunkte je Zoll (dpi)
- digitalisieren: in festen Abständen messen, auf Stufen runden
- Abtastrate: Messungen je Sekunde
- Abtasttiefe: Bit je Messwert

**So fragt die IHK:**
- Typisch ist eine Kette abhängiger Rechenaufgaben mit Material (Scanfläche in cm, Auflösung in dpi, Farbtiefe, 1 Inch = 2,54 cm): Aufnahmen je Tag aus Geschwindigkeit und Arbeitszeit (2 Punkte), Datenvolumen je Aufnahme in MiB (4 Punkte), Tagesbedarf in TiB, „auf volle TiB aufrunden“ (2 Punkte). Operator „ermitteln“, der Rechenweg ist anzugeben.
- Teilpunkte gibt es je Zeile: Pixel, mal Farbtiefe, durch 8, durch 1.024, durch 1.024. Folgefehler werden mit Ersatzwerten aufgefangen.
- Ebenso „berechnen“, je 2–3 Punkte: Speicherbedarf von Datenpunkten (Anzahl mal Koordinaten mal Bit je Wert) in KiB, Farbanzahl aus 3 × 8 Bit, Mehrbedarf in Prozent durch zusätzliche Farbwerte je Punkt.
- „Reicht der Speicher“ ist nach dem Prüfungskatalog eine naheliegende Ergänzung derselben Kette. Zu Audio und analog/digital gab es keine eigene Aufgabe.
- 2025H (K1, K7), je 3 Punkte, „ermitteln“ mit Rechenweg: Aus Rechnungen je Stunde rund um die Uhr und der Größe je Rechnung in kB den Tagesbedarf in KiB (auf ganze KiB runden); danach den Jahresbedarf in GiB bei einer Komprimierung, die den Bedarf um 30 % senkt (zwei Nachkommastellen, Ersatzwert vorgegeben). Falle: kB sind 1.000 Byte, KiB 1.024.
- 2026F (K8), 5 Punkte: Speicher in TiB für vier Kameras über 72 Stunden aus der Datenrate in Mbit/s (Ersatzwert vorgegeben), aufrunden.

**Fallen:**
- Anzahl und Höchstwert verwechseln: n Bit haben 2ⁿ Werte, der größte ist 2ⁿ − 1.
- Bei Datenpunkten vergessen, dass jeder Punkt mehrere Werte hat (etwa drei Koordinaten).
- Mehrbedarf: Es reicht der Vergleich je Datenpunkt; die Anzahl der Punkte ändert den Prozentwert nicht.
- Mit 1.000 statt 1.024 in KiB, MiB oder TiB umrechnen oder eine Stufe auslassen (von MiB nach TiB sind es zwei).
- Komprimierung: „um 30 %“ (es bleiben 70 %) mit „auf 30 %“ (es bleiben 30 %) verwechseln.
- Audio: kHz nicht in Hz umrechnen, Minuten statt Sekunden einsetzen oder die Kanalzahl vergessen. Die Formel gilt nur unkomprimiert.
- Bild: mit 24 Bit rechnen, obwohl Graustufen mit weniger Bit angegeben sind.
- Hochrechnen: Stunden nicht in Minuten umrechnen, wenn die Geschwindigkeit je Minute angegeben ist.
- Bei „beurteilen“ nur urteilen ohne Umrechnung oder nur rechnen ohne Urteil.
- Digitalisieren nur mit „wird umgewandelt“ beschreiben statt mit Messen und Runden.
