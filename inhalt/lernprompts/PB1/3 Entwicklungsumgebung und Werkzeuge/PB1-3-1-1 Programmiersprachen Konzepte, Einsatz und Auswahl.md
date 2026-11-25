Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Entwicklungsumgebung und Werkzeuge › Programmiersprachen und Werkzeuge › Programmiersprachen: Konzepte, Einsatz und Auswahl

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

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

## Stoff: Programmiersprachen: Konzepte, Einsatz und Auswahl

Ziel: Die Konzepte strukturiert, prozedural, funktional und objektorientiert kennen, Beispielsprachen und Einsatzgebiete zuordnen und für ein Projekt eine Sprache begründet auswählen.

Das muss ich können:

### K1 – Programmierkonzepte mit Beispielsprachen (Stufe 1 Wiedergeben)
Du kannst die Konzepte strukturiert, prozedural, funktional und objektorientiert nennen und je eine Programmiersprache als Beispiel angeben: C (prozedural, strukturiert), Java oder C# (objektorientiert), Haskell (funktional); Python verbindet mehrere Konzepte.

Erklärung:
- **Prozedural/strukturiert:** C
- **Objektorientiert:** Java, C#
- **Funktional:** Haskell
- **Mehrere Konzepte:** Python (prozedural, objektorientiert, funktional)

### K2 – Merkmale der einzelnen Programmierkonzepte (Stufe 1 Wiedergeben)
Du kannst je ein Merkmal der Konzepte nennen: strukturiert – Kontrollstrukturen (Sequenz, Verzweigung, Schleife) statt Sprüngen; prozedural – Gliederung in Prozeduren und Funktionen; funktional – Funktionen ohne Seiteneffekte, die Werte entgegennehmen und neue zurückgeben, statt Variablen zu verändern; objektorientiert – Daten und Methoden in Objekten zusammengefasst, die aus Klassen erzeugt werden (Kapselung, Vererbung, Polymorphie).

Erklärung:
- **strukturiert:** nur Sequenz, Verzweigung, Schleife – kein `goto`
- **prozedural:** Programm in Prozeduren/Funktionen gegliedert
- **funktional:** Funktionen ohne Seiteneffekte (Seiteneffekt = Wirkung über den Rückgabewert hinaus, z. B. ein Attribut ändern oder etwas ausgeben); Werte rein, neuer Wert raus, keine Variablen verändern
- **objektorientiert:** Daten (Attribute) und Methoden in Objekten, die aus Klassen erzeugt werden; Kernkonzepte Kapselung, Vererbung, Polymorphie

### K3 – Compilersprachen und Interpretersprachen (Stufe 1 Wiedergeben)
Du kannst je eine Programmiersprache für Compilersprachen (C, C++; in Bytecode übersetzt auch Java, C#) und für Interpretersprachen (PHP, Python) nennen.

Erklärung:
- **Compiler:** C, C++ (Maschinencode); Java, C# übersetzen in **Bytecode**, der in einer Laufzeitumgebung läuft
- **Interpreter:** PHP, Python (Anweisung für Anweisung zur Laufzeit)
Den Unterschied mit Vor- und Nachteilen kennst du aus AP1-8-1-1; er wurde auch in PB1 gefragt (2021W). Kurz: Ein Compiler übersetzt das ganze Programm vorab, danach läuft es ohne erneute Übersetzung; ein Interpreter übersetzt den Quellcode bei jeder Ausführung neu. Interpreter – Vorteil: schnelles Testen, fehlerhafte Stellen fallen sofort auf; Nachteil: langsamere Ausführung.

### K4 – Einsatzgebiete von Programmiersprachen (Stufe 1 Wiedergeben)
Du kannst Einsatzmöglichkeiten von Programmiersprachen nennen, zum Beispiel JavaScript für Webanwendungen, Kotlin oder Swift für mobile Apps, C für hardwarenahe Programmierung, Python für Datenauswertung und Automatisierung, SQL für Datenbankabfragen.

Erklärung:
- **JavaScript:** Webanwendungen (Browser, mit Node.js auch Server)
- **Kotlin / Swift:** mobile Apps (Android / iOS)
- **C:** hardwarenah, Mikrocontroller
- **Python:** Datenauswertung, Automatisierung, KI
- **SQL:** Datenbankabfragen

### K5 – Kriterien für die Wahl einer Programmiersprache (Stufe 1 Wiedergeben)
Du kannst die Kriterien für die Wahl einer Programmiersprache nennen: Performance und Speicherverbrauch, Portabilität, verfügbare Frameworks und Bibliotheken, Unterstützung durch integrierte Entwicklungsumgebungen, vorhandenes Know-how im Team; Portabilität heißt, das Programm läuft ohne große Anpassung auf verschiedenen Plattformen (Qualitätsmerkmal Übertragbarkeit, PB1-1).

Erklärung:
Kriterien für die Sprachwahl:
- **Performance** und Speicherverbrauch
- **Portabilität** (läuft auf verschiedenen Plattformen = Übertragbarkeit)
- verfügbare **Frameworks und Bibliotheken**
- Unterstützung durch **IDEs**
- vorhandenes **Know-how** im Team

### K6 – Sprachwahl bei gegensätzlichen Kriterien (Stufe 4 Beurteilen)
Du kannst für ein beschriebenes Projekt eine Programmiersprache auswählen und die Wahl mit mehreren Kriterien begründen, auch wenn sie gegeneinander stehen, zum Beispiel höchste Ausführungsgeschwindigkeit gegen kurze Entwicklungszeit mit dem vorhandenen Know-how.

Erklärung:
Vorgehen: Anforderungen des Projekts den Kriterien gegenüberstellen und **abwägen**.
Beispiel: Echtzeit-Steuerung → C wegen Geschwindigkeit, obwohl das Team besser Python kann; Verwaltungs-Web-App → Python/Django, weil das Team es kann und Entwicklungszeit wichtiger ist als Millisekunden.
Begründung immer mit dem Kriterium, das für **diesen** Fall den Ausschlag gibt.

### K7 – Imperative gegen deklarative Programmierung (Stufe 2 Verstehen)
Du kannst imperative und deklarative Programmierung unterscheiden: Imperativ legt das Programm Schritt für Schritt fest, wie das Ergebnis entsteht (dazu gehören strukturiert, prozedural und objektorientiert, z. B. C, Java); deklarativ beschreibt es nur, was gelten oder herauskommen soll, und den Lösungsweg bestimmt das System (dazu gehören funktional und logisch, z. B. Haskell, Prolog, ebenso SQL).

Erklärung:
Die Konzepte aus K1 lassen sich in zwei Familien ordnen. Die Frage ist: Schreibt das Programm den **Weg** vor oder nur das **Ziel**?
- **Imperativ (wie):** eine Folge von Anweisungen mit Verzweigungen und Schleifen, die Variablen schrittweise verändern. Dazu gehören strukturiert, prozedural und objektorientiert.
- **Deklarativ (was):** Das Programm beschreibt das gewünschte Ergebnis oder die geltenden Regeln; wie es berechnet wird, entscheidet die Sprache bzw. das System. Dazu gehören funktional und logisch (logisch, z. B. Prolog: Das Programm besteht aus Fakten und Regeln, die Antwort leitet das System selbst daraus ab).
Beispiel: `SELECT name FROM kunde WHERE ort = 'Köln'` sagt nur, welche Daten du willst – wie die Datenbank sucht, legt sie selbst fest. Imperativ wäre dieselbe Aufgabe eine Schleife über alle Kunden, die je Kunde den Ort prüft und den Namen in eine Liste schreibt.

### K9 – Sprachen mit virtueller Maschine wählen (Stufe 4 Beurteilen)
Du kannst begründen, wann eine Sprache, die in Zwischencode (Bytecode) übersetzt und in einer virtuellen Maschine ausgeführt wird (z. B. Java, C#; virtuelle Maschine: AP1-8-1-1), für ein Projekt passt: Das Programm läuft ohne Neuübersetzung auf jedem Betriebssystem mit passender virtueller Maschine, und solche Sprachen bringen meist eine große Standardbibliothek und freie Entwicklungswerkzeuge mit; dafür laufen sie meist langsamer und brauchen mehr Speicher als direkt in Maschinencode übersetzte Sprachen wie C.

Erklärung:
Bei der Sprachwahl (K5, K6) setzt du die Eigenschaften einer Sprachfamilie als Argumente ein. Sprachen mit virtueller Maschine sind das typische Beispiel für **Portabilität gegen Performance**; Java steht hier stellvertretend, für C# gilt dasselbe.
- **Bytecode und virtuelle Maschine:** einmal übersetzen, auf Windows, Linux oder macOS ausführen (AP1-8-1-1).
- **Konsequent objektorientiert** (nicht rein: einfache Datentypen wie `int` sind in Java keine Objekte): Große Programme lassen sich in Klassen und Module gliedern, die einzeln getestet und wiederverwendet werden.
- **Umfeld:** umfangreiche Standardbibliothek, viele Frameworks, kostenlose IDEs, viele Entwickler am Markt.
- **Preis:** Start der virtuellen Maschine und höherer Speicherbedarf; für hardwarenahe Aufgaben oder Mikrocontroller passt C besser.
Beispiel: Eine Lagerverwaltung, die auf Windows-Arbeitsplätzen und einem Linux-Server laufen soll, spricht für Java; die Firmware eines Temperatursensors eher für C.

## Lehrnotiz: Programmiersprachen: Konzepte, Einsatz und Auswahl

**Aufteilung:**
- Die vier Konzepte, erst Merkmale, dann Beispielsprachen: K2, K1
- Zwei Familien, imperativ und deklarativ: K7
- Wie übersetzt, wofür eingesetzt: K3, K4
- Pause möglich nach den Einsatzgebieten.
- Kriterien für die Sprachwahl: K5
- Sprachen mit virtueller Maschine als Argument: K9
- Eine Sprache begründet auswählen, hier kommt alles zusammen: K6

**Schon geprüft:** In Prüfungen: K3 (2021W) · Noch nicht geprüft: K1, K2, K4–K7, K9

**Kerngedanken:**
- Ein Seiteneffekt ist jede Wirkung einer Funktion über ihren Rückgabewert hinaus, zum Beispiel ein Attribut ändern, in eine Datei schreiben oder etwas ausgeben.
- Strukturiert und prozedural sind kein Gegensatz: Strukturiert betrifft den Ablauf, prozedural die Gliederung des Programms. C ist beides.
- Eine begründete Auswahl nennt das Kriterium, das in diesem Fall den Ausschlag gibt, und sagt dazu, warum das Gegenargument hier weniger wiegt.
- Portabilität ist nur dann ein Argument, wenn das Programm wirklich auf mehreren Plattformen laufen soll. Läuft es nur auf einem einzigen Gerät, bringt sie nichts.

**Typische Missverständnisse:**
- Viele denken, „funktional“ heiße „arbeitet mit Funktionen“; richtig ist: Funktionen hat C auch, gemeint ist „ohne Seiteneffekte“.
- Viele denken, Java sei keine Compilersprache, weil eine virtuelle Maschine den Code ausführt; richtig ist: Ein Compiler übersetzt den Quellcode vorab in Bytecode, die virtuelle Maschine führt erst diesen Bytecode aus. Deshalb gelten Java und C# auch in IHK-Lösungen als Compilersprachen.

**Fachwörter:**
- Seiteneffekt: Wirkung über den Rückgabewert hinaus
- imperativ: Programm gibt den Weg vor
- deklarativ: Programm beschreibt nur das Ergebnis
- Bytecode: Zwischencode für eine virtuelle Maschine
- Portabilität: läuft ohne große Anpassung auf verschiedenen Plattformen
- Performance: Ausführungsgeschwindigkeit des Programms
- Know-how: vorhandene Kenntnisse im Team

**So fragt die IHK:**
- Belegt ist eine Aufgabe zur Programmierumgebung zu Projektbeginn (20 Punkte, mehrere Teilaufgaben). Hierher gehört daraus: „nennen“, je eine Programmiersprache für Compilersprachen und für Interpretersprachen, 2 Punkte. Die Lösung ist beispielhaft; in Bytecode übersetzte Sprachen wie Java oder C# gelten ausdrücklich als Compilersprachen.
- Konzepte, Einsatzgebiete und Auswahlkriterien stehen im Prüfungskatalog, wurden aber noch nicht eigens gefragt. Zu erwarten sind kurze „nennen“-Aufgaben zu 2–3 Punkten und eine Aufgabe „entscheiden und begründen“ zu 3–4 Punkten (ein Punkt für die Entscheidung, der Rest für fallbezogene Kriterien).
- Sprachen gelten beispielhaft; die Begründung muss sich auf den Fall beziehen.

**Fallen:**
- Python als Beispiel für ein einzelnes Konzept nennen, ohne zu sagen, dass es mehrere Konzepte verbindet.
- Java oder C# „rein objektorientiert“ nennen; „konsequent“ passt besser, denn in Java sind einfache Datentypen keine Objekte, und in beiden Sprachen gibt es statische Methoden ohne Objekt.
- Den Unterschied imperativ/deklarativ nur mit „deklarativ ist kürzer“ erklären statt mit „Weg vorgeben“ gegen „Ergebnis beschreiben, das System bestimmt den Weg“.
- Bei Einsatzgebieten nur einen Sprachnamen nennen statt des Gebiets, oder Kotlin (Android) und Swift (iOS) vertauschen.
- Statt Kriterien Sprachen nennen; „weil die Sprache gut ist“ ist kein Kriterium.
- Portabilität als „läuft auf dem Handy“ erklären.
- „Plattformunabhängig“ ohne Bezug auf Bytecode und virtuelle Maschine als Begründung hinschreiben, oder den Preis (Speicher, Startzeit) weglassen.
- Gegen Java auf einem Mikrocontroller nur „Java ist langsam“ schreiben, ohne den Speicherbedarf der virtuellen Maschine zu nennen.
- Die Auswahl mit nur einem Kriterium oder ohne Fallbezug begründen („ist modern“, „ist verbreitet“), oder alle Kriterien gleich gewichten, statt zu sagen, was Vorrang hat.
