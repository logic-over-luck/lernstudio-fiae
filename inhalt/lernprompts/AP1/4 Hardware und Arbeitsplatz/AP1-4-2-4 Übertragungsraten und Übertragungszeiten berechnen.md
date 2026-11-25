Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Hardware und Arbeitsplatz › Kenngrößen berechnen › Übertragungsraten und Übertragungszeiten berechnen

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP1 – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen. Wo etwas abläuft oder funktioniert (Technik, Verfahren, Protokoll, Rechenweg), erklär zuerst Schritt für Schritt, was passiert, mit den richtigen Begriffen und dem Warum dahinter. Ein Beispiel aus dem Alltag gern danach als Eselsbrücke – sag dazu, wo es hinkt.
- Die Erklärungen im Stoff sind das Minimum für die Prüfung, nicht die Grenze. Wo dort nur steht, was es gibt, erklär mir auch, wie es funktioniert, und trenn sichtbar, was die IHK lesen will und was nur Hintergrund zum Verstehen ist. Stehen in der Lehrnotiz „Abläufe zum Verstehen“, bau sie in deine Erklärung ein.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag – klein heißt wenig auf einmal, nicht oberflächlich. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Die Aufgaben sollen mich vor allem anwenden lassen, nicht nur die Erklärung nachsagen. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
- Bewerte nur, was in der Aufgabe verlangt war. Stimmt der Inhalt und fehlt nur das Fachwort, zählt es als richtig: Nenn mir das Wort und weiter.
- Fachwörter, die die IHK lesen will, mach mir ruhig deutlich.
- Häng ich irgendwo fest, probier's anders – und wenn's gar nicht klickt, zeig mir die Lösung und wir machen weiter.
- Zeichnungen mache ich auf Papier und lade ein Foto hoch.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im IHK-Stil (Kundensituation, Teilaufgaben mit Punkten, zusammen etwa 10–12, eine nach der anderen). Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

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

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K7 – Von den Nutzdaten zu den Bits auf der Leitung: (1) Der Sender teilt die Nutzdaten der Datei in Stücke, die jeweils in ein Paket passen. (2) Jede Protokollschicht setzt ihre Kopfdaten vor das Stück, und die Sicherungsschicht hängt an den fertigen Rahmen eine Prüfsumme an. (3) Die Leitungscodierung ersetzt Gruppen von Datenbits durch längere Bitgruppen, zum Beispiel 8 Datenbits durch 10 Leitungsbits, damit der Empfänger Takt und Signal sicher erkennt. (4) Der Empfänger macht die Leitungscodierung rückgängig, prüft die Prüfsumme, entfernt die Kopfdaten und reicht nur die Nutzdaten an das Programm weiter. (5) Der Empfänger bestätigt den Empfang; nicht bestätigte Pakete sendet der Sender erneut, was Übertragungszeit ohne neue Nutzdaten kostet. (6) Die Bruttorate zählt alle Bits auf der Leitung, der Durchsatz nur die angekommenen Nutzdaten, deshalb liegt er immer darunter. Vereinfacht: Wie groß die Abzüge sind, hängt von Schnittstelle und Protokoll ab; bei manchen Schnittstellen ist die Leitungscodierung in der angegebenen Rate bereits berücksichtigt.

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
- 2026F (K3), 4 Punkte, „berechnen“ mit Rechenweg: Datenrate eines Live-Streams in Mbit/s aus Auflösung, Bildern je Sekunde und Farbtiefe 24 Bit bei „Komprimierung auf 30 %“, auf volle Mbit/s gerundet. „Auf 30 %“ heißt mal 0,3, „um 30 %“ mal 0,7. Folgeaufgabe (5 Punkte): Speicher in TiB für vier Kameras und 72 Stunden, aufgerundet, mit Ersatzwert.

**Fallen:**
- Reicht die Leitung: das Zeitfenster nicht in Sekunden oder die Datenmenge nicht in Bit umrechnen, oder mit der falschen Richtung vergleichen.
- Reicht die Leitung: nur rechnen ohne Urteil oder urteilen ohne Rechnung. Liegt die nötige Rate nur knapp unter der vorhandenen, gehört der Hinweis auf die geringe Reserve dazu.
- Videostream: mit dem weggefallenen Anteil multiplizieren statt mit dem verbleibenden.
- Videostream: die Rate mit 1.048.576 statt mit 1.000.000 in Mbit/s umrechnen.
- Aufzeichnung: die Zahl der Kameras vergessen, nicht durch 8 teilen, mit 10¹² statt 2⁴⁰ teilen oder nicht aufrunden.
- Durchsatz: nur einen der beiden Gründe nennen, das Urteil weglassen oder erwarten, dass die Nutzdaten die Bruttorate erreichen. Ein Mangel liegt erst nahe, wenn der Wert deutlich unter dem Üblichen liegt.
- Signalgeschwindigkeit: nur „Glasfaser erlaubt höhere Datenraten“ sagen, ohne Aussage zur Signalgeschwindigkeit – oder umgekehrt.
