Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Hardware und Arbeitsplatz › Kenngrößen berechnen › Übertragungsraten und Übertragungszeiten berechnen

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

## Stoff: Übertragungsraten und Übertragungszeiten berechnen

Ziel: Übertragungsdauern und benötigte Datenraten berechnen und dabei Bit und Byte, Dezimal- und Binärpräfixe sauber trennen.

Das muss ich können:

### K1 – Übertragungsdauer aus Datenmenge und Rate (Stufe 3 Anwenden)
Du kannst die Übertragungsdauer aus Datenmenge und Übertragungsrate berechnen und in Minuten und Sekunden angeben.

Erklärung:
- Datenmenge in **Bit** umrechnen (Byte × 8).
- `Dauer in s = Datenmenge in Bit ÷ Rate in Bit/s`
- ÷ 60 → Minuten, der Rest sind Sekunden.
Beispiel: 3 GiB über 50 Mbit/s:
- 3 × 1.073.741.824 × 8 = 25.769.803.776 Bit
- ÷ 50.000.000 Bit/s ≈ 515,4 s, gerundet 515 s
- 515 s = 8 × 60 s + 35 s = **8 min 35 s**
Verlangt die Aufgabe „auf volle Sekunden aufrunden“, sind es 516 s = 8 min 36 s.

### K2 – Einheiten bei Datenmenge und Übertragungsrate (Stufe 3 Anwenden)
Du kannst bei Datenmengen und Übertragungsraten eine Umrechnung der Einheiten durchführen: Datenmenge in Byte mit Binärpräfix, Übertragungsrate in Bit je Sekunde mit Dezimalpräfix.

Erklärung:
Die Grundregel:
- **Datenmenge** in **Byte** mit **Binärpräfix** (KiB, MiB, GiB – Faktor 1.024)
- **Übertragungsrate** in **Bit je Sekunde** mit **Dezimalpräfix** (Mbit/s = 1.000.000 Bit/s)
Steht eine Datenmenge ausdrücklich in MB oder GB, rechnest du sie dezimal.
Häufige Fehler: Byte nicht mit 8 multipliziert, oder 1.024 und 1.000 verwechselt.

### K3 – Videostream: Datenrate und Aufzeichnung in TiB (Stufe 3 Anwenden)
Du kannst die benötigte Datenrate eines Videostreams aus Auflösung, Farbtiefe, Bildrate und Komprimierung berechnen (Breite · Höhe · Farbtiefe · Bilder je Sekunde · verbleibender Anteil, in Mbit/s mit Dezimalpräfix) und daraus den Speicherbedarf einer Aufzeichnung mehrerer Kameras über Stunden oder Tage bestimmen (Datenrate · Kameras · Sekunden ÷ 8, in TiB, wie verlangt aufgerundet).

Erklärung:
**Datenrate des Streams:**
`Rate in Bit/s = Breite × Höhe × Farbtiefe × Bilder je Sekunde × verbleibender Anteil`
Danach in Mbit/s umrechnen – Raten mit **Dezimalpräfix** (1 Mbit/s = 1.000.000 Bit/s).
**Speicherbedarf der Aufzeichnung:**
`Bit = Rate × Anzahl Kameras × Dauer in Sekunden`, dann ÷ 8 = Byte, dann ÷ 2⁴⁰ = TiB – Datenmengen mit **Binärpräfix**; wie verlangt **aufrunden**.
Beispiel: 1.280 × 720 Pixel, 24 Bit, 20 Bilder je Sekunde, auf 25 % komprimiert, vier Kameras, 48 Stunden:
- 1.280 × 720 × 24 × 20 × 0,25 = 110.592.000 Bit/s ≈ **111 Mbit/s**
- 4 × 111.000.000 Bit/s × 172.800 s = 76.723.200.000.000 Bit ÷ 8 = 9.590.400.000.000 Byte
- ÷ 2⁴⁰ ≈ 8,72 TiB → aufgerundet **9 TiB**

### K4 – Übertragungszeit: richtige Leitungsrichtung (Stufe 3 Anwenden)
Du kannst die Übertragungszeit mit der passenden Richtung der Leitung berechnen, zum Beispiel mit dem Upload für eine Sicherung in die Cloud.

Erklärung:
Ein Internetanschluss hat zwei Richtungen mit oft sehr unterschiedlicher Rate:
- **Download** (aus dem Internet zu dir) – meist groß, z. B. 250 Mbit/s
- **Upload** (von dir ins Internet) – meist kleiner, z. B. 40 Mbit/s
Eine Sicherung **in die Cloud** ist ein **Upload** – also mit der kleineren Uploadrate rechnen. Typischer Fehler: mit der Downloadrate rechnen, dann kommt eine viel zu kurze Zeit heraus.

### K5 – Reicht die Leitung für die Übertragung (Stufe 4 Beurteilen)
Du kannst beurteilen, ob eine Leitung für eine Übertragung in der gewünschten Zeit ausreicht.

Erklärung:
Zwei Wege:
- Dauer berechnen und mit der verfügbaren Zeit vergleichen.
- Oder: `nötige Rate = Datenmenge in Bit ÷ verfügbare Sekunden` und mit der vorhandenen Rate vergleichen.
Beispiel: 60 GiB sollen in 2 Stunden hochgeladen werden.
- 60 × 1.073.741.824 × 8 ≈ 515,4 Mrd. Bit ÷ 7.200 s ≈ **71,6 Mbit/s** nötig
- Upload nur 40 Mbit/s → reicht **nicht**.

### K7 – Durchsatz unter der Bruttorate (Stufe 4 Beurteilen)
Du kannst begründen, warum der tatsächliche Durchsatz unter der angegebenen Rate einer Schnittstelle liegt: Die Angabe ist eine Bruttorate, von der Protokoll-Overhead und Leitungscodierung abgehen; vor einem Vergleich musst du außerdem bit/s und Byte/s auf eine Einheit bringen.

Erklärung:
Datenblätter nennen die **Bruttorate** – alles, was über die Leitung geht. Nutzdaten sind weniger:
- **Leitungscodierung:** zusätzliche Bits, damit der Empfänger das Signal sicher erkennt
- **Protokoll-Overhead:** Kopfdaten, Prüfsummen, Bestätigungen
Dazu kommt die Einheitenfalle: Schnittstellen in **bit/s**, Kopierprogramme in **Byte/s** – Faktor 8.
Beispiel: 1 Gbit/s ÷ 8 = 125 MB/s brutto; über eine 1-Gbit/s-Verbindung kommen beim Kopieren davon etwa 110–118 MB/s an, nicht 1.000 – und erst recht nicht 1 GB/s.

### K8 – Datenrate gegen Signalgeschwindigkeit (Stufe 2 Verstehen)
Du kannst die Datenübertragungsrate (Bit je Sekunde, auch Bitrate, umgangssprachlich Bandbreite) von der Signalgeschwindigkeit abgrenzen: Das Signal breitet sich in Kupfer wie in Glasfaser mit etwa zwei Dritteln der Lichtgeschwindigkeit aus; Glasfaser erlaubt höhere Datenraten.

Erklärung:
Datenrate gegen Signalgeschwindigkeit: Die Datenrate gibt an, wie viele Bit je Sekunde übertragen werden, die Signalgeschwindigkeit, wie schnell sich das Signal ausbreitet – in Kupfer wie in Glasfaser etwa zwei Drittel der Lichtgeschwindigkeit; Glasfaser ist also nicht „schneller“, sondern erlaubt höhere Datenraten.

## Lehrnotiz: Übertragungsraten und Übertragungszeiten berechnen

**Aufteilung:**
- Einheiten von Datenmenge und Rate: K2
- Übertragungsdauer mit der richtigen Richtung: K1, K4
- Reicht die Leitung in der verfügbaren Zeit: K5
- Pause möglich nach „reicht die Leitung“.
- Videostream und Aufzeichnung: K3
- Warum weniger ankommt, als angegeben ist: K7
- Datenrate gegen Signalgeschwindigkeit: K8

**Schon geprüft:** In Prüfungen: K1 (2022F, 2024F), K2 (2024F), K3 (2026F), K4 (2022F, 2024F) · Noch nicht geprüft: K5, K7, K8

**Kerngedanken:**
- Die Richtung ergibt sich aus dem Datenfluss, nicht aus dem Vertrag: Was vom eigenen Anschluss weggeht (sichern, einreichen, hochladen), ist Upload; was ankommt, ist Download. Die Aufgabe nennt beide Raten, die Wahl ist Teil der Lösung.
- In der typischen Dauerrechnung treffen beide Präfixarten aufeinander: die Datenmenge binär (steht sie ausdrücklich in MB oder GB, dezimal) und mal 8, die Rate dezimal. Erst wenn oben Bit und unten Bit je Sekunde stehen, wird geteilt.
- „Um x % komprimiert“ lässt (100 − x) % übrig, „auf x % komprimiert“ lässt x % übrig.- Beim Vergleich einer Schnittstelle mit einer Kopieranzeige gibt es zwei getrennte Gründe: Zuerst die Einheit – bit/s durch 8 ergibt Byte/s, das erklärt den größten Teil. Die kleine Lücke, die danach bleibt, erklärt brutto gegen netto (Overhead, Leitungscodierung).

**Typische Missverständnisse:**
- Viele denken, die Nachkommastellen der Minuten seien die Sekunden. Richtig ist: Sekunden = Gesamtsekunden minus volle Minuten mal 60.
- Viele denken, 1 Gbit/s seien 1 GB/s. Richtig ist: Es sind brutto 125 MB/s.

**Fachwörter:**
- Übertragungsrate: Bit je Sekunde, mit Dezimalpräfix
- Bruttorate: alles, was über die Leitung geht
- Protokoll-Overhead: Kopfdaten, Prüfsummen, Bestätigungen
- Leitungscodierung: zusätzliche Bits zur sicheren Signalerkennung
- Signalgeschwindigkeit: wie schnell sich das Signal ausbreitet

**So fragt die IHK:**
- Die typische Aufgabe: Eine Datei in MiB oder GiB soll in die Cloud gesichert oder von unterwegs abgespeichert werden. Gegeben sind Download- und Uploadrate, als Vertragsangabe oder als Speedtest-Ergebnis in „Mbps“ (= Mbit/s).
- Operatoren: „berechnen“, „aufrunden auf volle Sekunden“, „in Minuten und Sekunden darstellen“, der Rechenweg ist anzugeben; 4–6 Punkte.
- Teilpunkte je Schritt: Datenmenge in Byte, Byte in Bit, Rate in Bit/s, Teilen, Ergebnis in Sekunden, Umrechnung in Minuten und Sekunden. Wer mit dem Download rechnet, verliert das Ergebnis.
- Zu „reicht die Leitung“ und Brutto gegen Durchsatz gibt es keine verwendbare echte Aufgabe; sie sind aus dem Prüfungskatalog abgeleitet.

**Fallen:**
- Reicht die Leitung: das Zeitfenster nicht in Sekunden oder die Datenmenge nicht in Bit umrechnen, oder mit der falschen Richtung vergleichen.
- Reicht die Leitung: nur rechnen ohne Urteil oder urteilen ohne Rechnung. Liegt die nötige Rate nur knapp unter der vorhandenen, gehört der Hinweis auf die geringe Reserve dazu.
- Videostream: mit dem weggefallenen Anteil multiplizieren statt mit dem verbleibenden.
- Videostream: die Rate mit 1.048.576 statt mit 1.000.000 in Mbit/s umrechnen.
- Aufzeichnung: die Zahl der Kameras vergessen, nicht durch 8 teilen, mit 10¹² statt 2⁴⁰ teilen oder nicht aufrunden.
- Durchsatz: nur einen der beiden Gründe nennen, das Urteil weglassen oder erwarten, dass die Nutzdaten die Bruttorate erreichen. Ein Mangel liegt erst nahe, wenn der Wert deutlich unter dem Üblichen liegt.
- Signalgeschwindigkeit: nur „Glasfaser erlaubt höhere Datenraten“ sagen, ohne Aussage zur Signalgeschwindigkeit – oder umgekehrt.
