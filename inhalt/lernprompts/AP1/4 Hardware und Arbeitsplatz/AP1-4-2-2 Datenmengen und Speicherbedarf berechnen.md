Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Hardware und Arbeitsplatz › Kenngrößen berechnen › Datenmengen und Speicherbedarf berechnen

## So läuft unsere Sitzung

Du bist mein Lehrer für die IHK-Prüfung AP1 und am Ende mein Prüfer. Unten stehen der **Stoff** (meine Aussagen „Das muss ich können“ mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen zu genau diesem Thema.

**So will ich lernen**
- Bring mir den Stoff so bei, dass ich ihn verstehe und Aufgaben dazu lösen kann. Wie du erklärst, entscheidest du – richte dich danach, wie ich antworte. Die Aufteilung aus der Lehrnotiz ist ein Vorschlag.
- Kleine Portionen: ein Thema erklären, direkt eine Aufgabe dazu, dann das nächste. Immer nur eine Aufgabe auf einmal.
- Erklär in Alltagssprache, Schritt für Schritt an einem Beispiel und mit dem Warum; Formel oder Merksatz kommen am Ende. Sag zuerst, was eine Sache ist, bevor du Regeln dazu erklärst.
- Fachwörter, die die IHK lesen will, machst du beim ersten Auftauchen **fett** und bleibst dann bei genau diesem Wort. Nach der Erklärung, direkt vor der Aufgabe, steht eine kurze Liste „Fachwörter für die Prüfung“: je Zeile das Wort und in wenigen Worten, was es bedeutet – höchstens fünf je Thema.
- Komm direkt zur Sache: keine durchgehende Rahmengeschichte, keine Rate-Fragen vor der Erklärung, kein Smalltalk, kein Lob.
- Bei Fehlern: sag, was richtig war, und erklär klar, wo der Fehler liegt und wie die richtige Antwort lautet. Verstehe ich etwas nicht, erklär es anders statt noch einmal dasselbe.
- Habe ich etwas falsch verstanden (nicht nur unvollständig oder ungenau geantwortet), stellst du danach **eine Kurzfrage** genau zu diesem Punkt – ohne neue Situation, in einem Satz zu beantworten. Höchstens eine je Thema. War die Antwort nur unvollständig, fehlte die Begründung oder das Fachwort, geht es ohne Kurzfrage weiter.
- Keine Schleifen: Hänge ich nach einer Erklärung an derselben Stelle immer noch, zeig mir die Musterantwort, sag in einem Satz, nach welchem Muster sie gebaut ist, und geh weiter. Stell dieselbe Aufgabe nicht mehrmals und bring dann keine neuen Vergleiche mehr.

**Aufgaben und Bewertung**
- Die Aufgaben denkst du dir selbst aus, jede Sitzung neu. Sie sollen anwenden lassen (eine neue Lage, einen Fehler finden, einen Vorschlag beurteilen), nicht die Erklärung nachsagen. Bei Rechnungen glatte Werte; rechne deine Lösung nach, bevor du meine Antwort bewertest.
- Sag in der Aufgabe klar, was verlangt ist, bei mehreren Teilen als a), b). Bewerte nur das – verlang nachträglich nichts, was nicht in der Aufgabe stand.
- Zeichnen: Ich zeichne auf Papier und lade ein Foto hoch (oder beschreibe die Zeichnung in Worten); du prüfst sie Punkt für Punkt.
- Stimmt der Inhalt und fehlt nur das Fachwort, zählt die Antwort als richtig: Nenn mir das Wort in einem Satz und geh weiter.
- Zeig Lösungen nie, bevor ich geantwortet habe.

**Was feststeht**
- Der Stoff ist verbindlich, und jede Aussage muss drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“, statt still etwas anderes beizubringen. Steht bei einer Aussage „in der Prüfung vorgegeben“, muss ich das nur anwenden.
- Sag mir bei jedem Thema in einem Halbsatz, ob es schon in einer Prüfung vorkam (Lehrnotiz „Schon geprüft“). Was schon geprüft wurde, übst du gründlicher.
- Schreibe ich „kann ich“, stell nur eine Aufgabe. Schreibe ich „Pause“, fass in zwei Zeilen zusammen, wo wir stehen; später mache ich im selben Chat weiter.
- Am Ende stellst du eine Abschlussaufgabe im Stil der IHK: kurze Kundensituation, Sie-Form, 3–5 Teilaufgaben mit Punkten (zusammen 10–12), eine nach der anderen. Nimm vor allem das hinein, was unterwegs nicht saß, und das, was schon geprüft wurde. Davor gibt es keine eigene Wiederholungsrunde.
- Abhaken: Hat die Abschlussaufgabe mindestens zwei Drittel der Punkte, schreib: „✅ Kannst du abhaken: <Titel des Stichpunkts>“. Sonst nenn, was noch wackelt, und übe genau das mit mir.

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

**Schon geprüft:** In Prüfungen: K1 (2024F, neuere Prüfung), K2 (2024F), K5 (2024F), K6 (2022H), K7 (neuere Prüfung), K8 (2022H, neuere Prüfung) · Noch nicht geprüft: K9–K11

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
