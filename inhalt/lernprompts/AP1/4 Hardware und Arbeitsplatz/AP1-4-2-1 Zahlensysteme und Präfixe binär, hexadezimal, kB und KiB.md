Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Hardware und Arbeitsplatz › Kenngrößen berechnen › Zahlensysteme und Präfixe: binär, hexadezimal, kB und KiB

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

## Stoff: Zahlensysteme und Präfixe: binär, hexadezimal, kB und KiB

Ziel: Zwischen Zahlensystemen und Einheiten umrechnen, Dezimal- und Binärpräfixe richtig einsetzen und Text- und Binärdateien unterscheiden.

Das muss ich können:

### K1 – Umrechnung Dezimal-, Binär-, Hexadezimalsystem (Stufe 3 Anwenden)
Du kannst eine Umrechnung zwischen Dezimal-, Binär- und Hexadezimalsystem durchführen.

Erklärung:
- **Dezimal** (Basis 10): Ziffern 0–9
- **Binär** (auch **dual**, Basis 2): Ziffern 0 und 1
- **Hexadezimal** (Basis 16): 0–9 und A=10, B=11, C=12, D=13, E=14, F=15
**Binär → dezimal:** jede 1 mit ihrer Zweierpotenz (von rechts 1, 2, 4, 8, 16 …) multiplizieren und addieren. 1011 0101 = 128 + 32 + 16 + 4 + 1 = **181**.
**Dezimal → binär:** die größten passenden Zweierpotenzen abziehen. 172 = 128 + 32 + 8 + 4 → **1010 1100**. Oder fortlaufend durch 2 teilen und die Reste von unten nach oben lesen: 172 : 2 = 86 Rest 0, 86 : 2 = 43 Rest 0, 43 : 2 = 21 Rest 1, 21 : 2 = 10 Rest 1, 10 : 2 = 5 Rest 0, 5 : 2 = 2 Rest 1, 2 : 2 = 1 Rest 0, 1 : 2 = 0 Rest 1 → 1010 1100.
**Binär ↔ hexadezimal:** von rechts Vierergruppen bilden, jede Gruppe ist eine Hex-Ziffer. 1010 1100 → A C → **AC**.

### K2 – Zweierpotenzen bis 2¹⁰, Binärpräfixe bis 2⁴⁰ (Stufe 3 Anwenden)
Du kannst Zweierpotenzen bis 2 hoch 10 berechnen und daraus die Binärpräfixe bis 2 hoch 40 berechnen: Jede Stufe ist das 1.024-Fache der vorigen, also 1 KiB = 2¹⁰, 1 MiB = 2²⁰, 1 GiB = 2³⁰ und 1 TiB = 2⁴⁰ Byte.

Erklärung:
- 2⁰ = 1
- 2¹ = 2, 2² = 4, 2³ = 8
- 2⁴ = 16, 2⁵ = 32, 2⁶ = 64
- 2⁷ = 128, 2⁸ = 256
- 2⁹ = 512, 2¹⁰ = 1.024
Jede Stufe ist das Doppelte der vorherigen. Mit n Bit lassen sich 2ⁿ Werte darstellen: 8 Bit → 256 Werte (0 bis 255).
**Binärpräfixe** gehen in Schritten von 2¹⁰ = 1.024:
- 1 KiB = 2¹⁰ = 1.024 Byte
- 1 MiB = 2²⁰ = 1.024² = 1.048.576 Byte
- 1 GiB = 2³⁰ = 1.024³ = 1.073.741.824 Byte
- 1 TiB = 2⁴⁰ = 1.024⁴ = 1.099.511.627.776 Byte
Auswendig brauchst du nur 2¹⁰ – den Rest rechnest du mit dem Taschenrechner als 1.024 hoch n.

### K3 – Dezimalpräfixe gegen Binärpräfixe (Stufe 2 Verstehen)
Du kannst Dezimalpräfixe (1 kB = 1.000 Byte) und Binärpräfixe (1 KiB = 1.024 Byte) unterscheiden und sagen, wofür welche verwendet werden.

Erklärung:
- **Dezimalpräfixe:** k, M, G, T – Faktor **1.000**. 1 kB = 1.000 Byte. Verwendet für Herstellerangaben bei Datenträgern, für Übertragungsraten und für physikalische Größen.
- **Binärpräfixe:** Ki, Mi, Gi, Ti – Faktor **1.024**. 1 KiB = 1.024 Byte, 1 MiB = 1.048.576 Byte. Verwendet für Datenmengen, Arbeitsspeicher und oft für die Anzeige im Betriebssystem.
Das kleine „i“ zeigt dir: hier wird mit 1.024 gerechnet. Steht eine Datenmenge ausdrücklich in kB, MB oder GB, rechnest du dezimal mit 1.000. Deine eigenen Ergebnisse für Datenmengen gibst du aber mit KiB, MiB, GiB oder TiB an – laut Prüfungskatalog sind Angaben zu Datenmengen nur mit Binärpräfixen richtig.

### K4 – 1.000 GB als 931 GiB (Stufe 4 Beurteilen)
Du kannst zwischen Dezimal- und Binärpräfixen umrechnen und begründen, warum ein Datenträger mit 1.000 GB als 931 GiB angezeigt wird.

Erklärung:
Rechne über Byte:
`GiB = GB × 10⁹ ÷ 2³⁰`
Beispiel: 1.000 GB = 1.000.000.000.000 Byte ÷ 1.073.741.824 ≈ **931 GiB**.
Begründung: Der Hersteller rechnet dezimal (mit 1.000), das Betriebssystem binär (mit 1.024) – Windows schreibt hinter den binären Wert trotzdem „GB“. Es fehlt **kein** Speicher – es ist dieselbe Menge in einer anderen Einheit.

### K5 – Umrechnung zwischen Bit und Byte (Stufe 3 Anwenden)
Du kannst eine Umrechnung zwischen Bit und Byte durchführen: 8 Bit sind 1 Byte.

Erklärung:
**1 Byte = 8 Bit**
- Bit → Byte: durch 8 teilen. 64 Bit = 8 Byte.
- Byte → Bit: mal 8 nehmen. 2 Byte = 16 Bit.
Schreibweise: großes **B** für Byte (MB), kleines **b** bzw. „bit“ für Bit (Mbit/s).

### K6 – ASCII-Datei gegen Binärdatei (Stufe 2 Verstehen)
Du kannst den Unterschied zwischen einer Datei im ASCII-Format und einer Binärdatei erläutern: lesbare Zeichen, die jeder Texteditor öffnet, gegenüber binären Daten, die nur die passende Anwendung verarbeitet.

Erklärung:
- **ASCII-Datei (Textdatei):** enthält nur lesbare Zeichen – Buchstaben, Ziffern, Satzzeichen. Jeder Texteditor kann sie öffnen. Beispiel: eine `.txt`- oder `.csv`-Datei.
- **Binärdatei:** enthält beliebige Bytewerte, die keinen lesbaren Text ergeben. Nur die passende Anwendung kann sie verarbeiten. Beispiel: ein Bild, ein Programm. Öffnest du sie im Editor, siehst du Zeichensalat.

### K7 – Physikalische Größen mit Dezimalpräfixen (Stufe 3 Anwenden)
Du kannst eine Umrechnung physikalischer Größen mit Dezimalpräfixen durchführen, zum Beispiel 3,4 GHz = 3.400.000.000 Hz.

Erklärung:
Für physikalische Größen gelten immer die **Dezimalpräfixe**:
- k = 10³ = 1.000, M = 10⁶, G = 10⁹, T = 10¹²
- m = 10⁻³ (milli), µ = 10⁻⁶ (mikro)
Beispiele: 3,4 GHz = 3.400.000.000 Hz; 250 mW = 0,25 W; 1,5 kW = 1.500 W.

### K8 – Prinzip des Stellenwertsystems (Stufe 2 Verstehen)
Du kannst das Prinzip eines Stellenwertsystems erklären: Die Basis legt fest, wie viele Ziffern es gibt, und jede Stelle hat als Wert eine Potenz der Basis (…, b², b¹, b⁰), sodass sich eine Zahl als Summe aus Ziffer mal Stellenwert ergibt – im Dezimal-, Dual- und Hexadezimalsystem gleich.

Erklärung:
Ob dezimal, dual oder hexadezimal – alle drei funktionieren gleich, nur die **Basis** ist anders.
- **Basis 10:** Ziffern 0–9, Stellenwerte 1, 10, 100, …
- **Basis 2:** Ziffern 0 und 1, Stellenwerte 1, 2, 4, 8, …
- **Basis 16:** Ziffern 0–9 und A–F, Stellenwerte 1, 16, 256, …
Der Wert einer Ziffer hängt von ihrer **Stelle** ab. Beispiel: 1011 (dual) = 1·8 + 0·4 + 1·2 + 1·1 = 11.
Wer das Prinzip verstanden hat, kann jede Umrechnung herleiten, statt Tabellen auswendig zu lernen.

### K9 – Hexadezimalzahlen: Zweck und Schreibweise (Stufe 2 Verstehen)
Du kannst erklären, warum die IT Hexadezimalzahlen verwendet und woran du sie erkennst: Eine Hex-Ziffer (0–9, A–F) steht für genau 4 Bit, so werden lange Dualzahlen kurz und lesbar, etwa bei Farbcodes (#FF8800), MAC- und Speicheradressen; im Quellcode kennzeichnet 0x eine Hex-, 0b eine Dualzahl.

Erklärung:
Vier Bit haben 16 mögliche Werte – genau so viele Ziffern hat das Hexadezimalsystem. Darum lässt sich jede Gruppe von 4 Bit durch **eine** Hex-Ziffer ersetzen:
`1111 1111 1000 1000 0000 0000` = `FF 88 00`
Gespeichert werden dieselben Bits – nur die **Schreibweise** für Menschen wird kürzer und übersichtlicher.
Kennzeichnung:
- Mathematik: Basis als Index, z. B. FF₁₆
- Quellcode: `0x` für hexadezimal, `0b` für dual, ohne Präfix dezimal (eine führende 0 kann als Oktalzahl gelesen werden)
- Webfarben: `#FF8800`

## Lehrnotiz: Zahlensysteme und Präfixe: binär, hexadezimal, kB und KiB

**Aufteilung:**
- Teil A – Zahlensysteme: Prinzip K8; Umrechnen K1; Zweck und Schreibweise von Hex K9
- Textdatei gegen Binärdatei: K6
- Pause möglich nach Teil A und der Textdatei.
- Teil B – Einheiten: Bit, Byte und die 1.024er-Stufen K5, K2; welches Präfix wofür K3, K7; zwischen GB und GiB umrechnen K4

**Schon geprüft:** In Prüfungen: K4 (2026H), K6 (2024F), K7 (2022F) · Noch nicht geprüft: K1–K3, K5, K8, K9

**Kerngedanken:**
- Hexadezimal ist nur eine kürzere Schreibweise für dieselben Bits; Speicher spart sie nicht.
- Gespeichert sind alle Dateien als Bits. „Binärdatei“ heißt nur, dass die Bytes keine lesbaren Zeichen ergeben. Warum ein Editor dann Unsinn zeigt, gehört zum Stichpunkt über Zeichenkodierung.
- Windows rechnet binär, schreibt aber „GB“ oder „TB“ hinter die Zahl; gemeint sind GiB und TiB. Daher sieht es aus, als fehle Speicher.
- Zwischen GB und GiB liegen drei Stufen, zwischen TB und TiB vier. Der Abstand wächst also mit dem Präfix: Die Anzeige liegt bei GB rund 7 %, bei TB rund 9 % unter der Herstellerangabe. Sicher ist nur der Weg über Byte.

**Typische Missverständnisse:**
- Viele denken, die Differenz zwischen Herstellerangabe und Anzeige gehe für Formatierung oder Systemdateien drauf. Richtig ist: Es ist dieselbe Menge, nur in einer anderen Einheit gezählt.
- Viele denken, A bis F seien Zusatzzeichen. Richtig ist: Es sind Ziffern mit den Werten 10 bis 15.

**Fachwörter:**
- Basis: Anzahl der Ziffern eines Zahlensystems
- Stellenwert: Wert einer Stelle, Potenz der Basis
- Dezimalpräfix: k, M, G, T mit Faktor 1.000
- Binärpräfix: Ki, Mi, Gi, Ti mit Faktor 1.024
- ASCII-Datei: enthält nur lesbare Zeichen
- Binärdatei: beliebige Bytewerte, nur passende Anwendung

**So fragt die IHK:**
- Umrechnungen von Größen kommen als Mini-Teilaufgabe mit „angeben“ und 1 Punkt, etwa eine Taktfrequenz in GHz aus einem Screenshot in Hz. Gezählt wird nur die vollständig ausgeschriebene Zahl.
- Präfixe und Bit/Byte stecken fast immer in größeren Rechenaufgaben (Speicherbedarf, Übertragungsdauer). Die Lösungshinweise geben Teilpunkte je Umrechnungsschritt; wer 1.000 und 1.024 vertauscht, verliert genau diese.
- Textdatei gegen Binärdatei: „Erläutern Sie den Unterschied …“ an einem unbekannten Dateiformat, das es in beiden Varianten gibt; 4 Punkte, je 2 pro Seite (Zeichen und jeder Texteditor – binäres Format und nur die passende Anwendung).
- 2026H (K4), 3 Punkte: Im Testprotokoll steht für eine SSD „erwartet 1.000 GB, angezeigt 931 GiB“. Die Anzeige „begründen“ und die Umrechnung durchführen: Hersteller rechnen mit 10⁹ Byte je GB, das Betriebssystem mit 2³⁰ Byte je GiB; 10¹² Byte geteilt durch 1.024³ ergibt rund 931. Zu Umrechnungen dual/hex gibt es keine echte Aufgabe.

**Fallen:**
- Teil A: Vierergruppen von links statt von rechts bilden. Kurze Dualzahlen werden links mit Nullen aufgefüllt.
- Teil A: Bei mehrstelligen Hexzahlen den Stellenwert der dritten Stelle (256) vergessen.
- Textdatei: Nur sagen „das eine ist Text, das andere nicht“, ohne die Folge für Öffnen und Bearbeiten – und nur eine der beiden Seiten erläutern.
- Teil B: Für 1 MiB mit 1.000.000 Byte rechnen.
- Teil B: Von Bit nach Byte mal 8 nehmen statt durch 8 teilen.
- Teil B: Die Stufen falsch zählen, etwa 1.024³ für TiB.
- Teil B: Physikalische Größen und Übertragungsraten mit 1.024 umrechnen.
- Teil B: Die Herstellerangabe eines Datenträgers in TB für binär halten.
- Teil B: Bei Giga oder milli das Komma um eine Zehnerpotenz falsch verschieben.
- Teil B: Von GB nach GiB nur einmal durch 1,024 teilen.
- Teil B: Bei „beurteilen“ nur rechnen ohne Urteil oder nur urteilen ohne Rechnung.
