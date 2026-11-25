Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Entwicklungsumgebung und Werkzeuge › Programmiersprachen und Werkzeuge › Entwicklungswerkzeuge aufgabenbezogen auswählen und anwenden

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

## Stoff: Entwicklungswerkzeuge aufgabenbezogen auswählen und anwenden

Ziel: Die Aufgaben aller Entwicklungswerkzeuge kennen, für einen Arbeitsschritt das passende Werkzeug auswählen und Werkzeugeinstellungen anwenden, etwa das Signieren beim Kompilieren.

Das muss ich können:

### K1 – Programmgenerator und Testsoftware (Stufe 2 Verstehen)
Du kannst die Aufgaben von Programmgenerator (erzeugt Quellcode aus einem Modell oder einer Beschreibung) und Testsoftware (führt Tests automatisch aus und wertet sie aus) erklären.

Erklärung:
- **Programmgenerator:** erzeugt Quellcode automatisch aus einem Modell oder einer Beschreibung (z. B. Klassen aus UML, Code aus einer Schnittstellenbeschreibung). Aus einem Klassendiagramm entstehen meist nur Gerüste (Attribute, leere Methoden); was die Methoden fachlich tun, schreibt weiter der Entwickler.
- **Testsoftware:** führt Tests automatisch aus und wertet aus, welche bestanden sind (z. B. JUnit, pytest).

### K2 – Passendes Werkzeug für einen Arbeitsschritt (Stufe 4 Beurteilen)
Du kannst für einen Arbeitsschritt der Entwicklung das passende Werkzeug aus Editor, IDE, Programmgenerator, Compiler, Linker, Interpreter, Debugger, Testsoftware und Versionsverwaltung auswählen und die Wahl begründen.

Erklärung:
- **Editor/IDE:** Code schreiben (IDE mit Vervollständigung, Debugger, Build)
- **Compiler + Linker:** übersetzen und zu einem ausführbaren Programm verbinden
- **Interpreter:** Skript direkt ausführen
- **Debugger:** Programm anhalten und Variablenwerte Schritt für Schritt verfolgen – zeigt, wo und warum ein Fehler entsteht (Tests zeigen nur, dass etwas falsch ist)
- **Testsoftware:** automatisiert testen
- **Programmgenerator:** Code aus Modellen erzeugen
- **Versionsverwaltung:** Stände sichern, im Team zusammenarbeiten
Immer begründen, *warum* das Werkzeug für diesen Schritt passt.

### K3 – Werkzeugeinstellungen: Signieren beim Kompilieren (Stufe 3 Anwenden)
Du kannst Werkzeugeinstellungen aufgabenbezogen anwenden, zum Beispiel in den Kompilierungseinstellungen festlegen, dass das Programm mit einem Code-Signing-Zertifikat einer vertrauenswürdigen Zertifizierungsstelle signiert wird.

Erklärung:
Beispiel **Code-Signing**: In den Build- bzw. Kompilierungseinstellungen das Zertifikat hinterlegen, damit das Programm beim Erstellen **digital signiert** wird.
- Zertifikat von einer **vertrauenswürdigen Zertifizierungsstelle**
- Ergebnis: Betriebssystem kann Herkunft und Unverändertheit prüfen
Achtung: Eine IHK-Lösung nennt den Hersteller des Betriebssystems als Aussteller. Allgemein stellt eine vertrauenswürdige Zertifizierungsstelle das Zertifikat aus, deren Wurzelzertifikat im Betriebssystem hinterlegt ist; bei manchen Plattformen (z. B. Apple für macOS) ist das der Betriebssystemhersteller selbst. In der Prüfung am besten beides nennen.

### K4 – Meldung „Programm nicht signiert“ deuten (Stufe 2 Verstehen)
Du kannst eine Sicherheitswarnung beim Programmstart wie „Das Programm stammt aus einer nicht vertrauenswürdigen Quelle“ deuten: Das Programm wurde beim Kompilieren nicht (mit einem Zertifikat einer vertrauenswürdigen Zertifizierungsstelle) signiert, deshalb kann das Betriebssystem den Hersteller nicht prüfen und warnt vor der Ausführung.

Erklärung:
Eine Warnung wie „Das Programm stammt aus einer nicht vertrauenswürdigen Quelle. Wollen Sie dieses Programm trotzdem öffnen?“ bedeutet, dass das Programm **nicht signiert** ist:
- Das Programm wurde **ohne Zertifikat** erstellt.
- Das Betriebssystem kann den **Hersteller nicht prüfen** und nicht feststellen, ob die Datei verändert wurde.
- Es **warnt** deshalb vor der Ausführung (z. B. Windows SmartScreen).
Abhilfe: beim Kompilieren signieren.
Das ist die typische Ursache und die Antwort der IHK. In der Praxis warnt Windows SmartScreen manchmal auch bei signierten Programmen, die noch wenig verbreitet sind.

### K5 – GUI-Builder: wann er sich lohnt (Stufe 4 Beurteilen)
Du kannst begründen, wann ein GUI-Builder (ein Programmgenerator für Oberflächen) sinnvoll ist: Bedienelemente werden per Drag and Drop angeordnet, ihre Eigenschaften und Ereignisse eingestellt und der Code dafür erzeugt, sodass nur die Reaktion auf die Ereignisse selbst programmiert wird; von Hand müssten Lage und Größe jedes Elements im Code stehen, was bei vielen Masken viel Zeit kostet und das Ausprobieren von Varianten erschwert.

Erklärung:
Ein GUI-Builder (auch GUI-Designer oder GUI-Editor) ist ein **Programmgenerator** (K1) speziell für Oberflächen.
- Du ziehst Schaltflächen, Textfelder und Listen auf ein Formular, stellst Beschriftung, Größe und Verhalten in einem Eigenschaftsfenster ein und legst fest, welche Methode bei einem Klick aufgerufen wird.
- Den Code für Aufbau und Anordnung erzeugt das Werkzeug; du schreibst nur die **Ereignislogik**, etwa was beim Klick auf „Speichern“ passiert.
- Von Hand müsstest du jedes Element mit Koordinaten oder Layout-Angaben im Code anlegen und das Programm nach jeder Änderung starten, um das Ergebnis zu sehen.
Er lohnt sich vor allem bei vielen Masken und häufigen Änderungen am Layout, etwa bei einem Erfassungsprogramm mit zehn Formularen; bei einer Oberfläche, die erst zur Laufzeit aus Daten aufgebaut wird, hilft er wenig.

### K6 – Generierten Oberflächencode nicht ändern (Stufe 2 Verstehen)
Du kannst erklären, warum vom GUI-Designer erzeugter Oberflächencode nicht von Hand geändert wird: Der Designer speichert den Entwurf als Beschreibung und erzeugt den Code daraus bei jeder Änderung neu, sodass Handänderungen überschrieben würden; die eigene Programmlogik gehört deshalb in eine eigene Klasse, die den erzeugten Teil einbindet oder von ihm erbt.

Erklärung:
Bei einem Generator ist die **Beschreibung** die Quelle; der erzeugte Code ist nur ein Zwischenergebnis.
- Der Entwurf liegt als Beschreibungsdatei vor (oft XML) oder im Projekt des Designers.
- Bei jeder Änderung im Designer wird der Code neu erzeugt – was du darin von Hand geändert hast, ist danach weg.
- Darum trennt man **erzeugten Teil** (Aufbau der Oberfläche) und **eigenen Teil** (Ereignisbehandlung, Fachlogik) in getrennte Dateien bzw. Klassen. Die eigene Klasse erbt vom erzeugten Teil oder bindet ihn ein.
Beispiel: Du verschiebst im Designer einen Button; der Generator schreibt die Oberflächenklasse neu. Deine Methode `speichernGeklickt()` steht in der eigenen Klasse und bleibt erhalten.

## Lehrnotiz: Entwicklungswerkzeuge aufgabenbezogen auswählen und anwenden

**Aufteilung:**
- Programmgenerator und Testsoftware: K1
- GUI-Builder als Programmgenerator für Oberflächen, erst der Nutzen, dann der Umgang mit dem erzeugten Code: K5, K6
- Für einen Arbeitsschritt das passende Werkzeug wählen: K2
- Signieren, erst die Warnung deuten, dann die Einstellung ändern: K4, K3

**Schon geprüft:** In Prüfungen: K3 (2021W), K4 (2021W) · Noch nicht geprüft: K1, K2, K5, K6

**Kerngedanken:**
- Ein Programmgenerator erzeugt nur, was im Modell oder in der Beschreibung steht. Aus einem Klassendiagramm entstehen meist Gerüste: Klassen mit Attributen und leeren Methoden. Was die Methoden fachlich tun, schreibt weiter der Entwickler.
- Tests zeigen, dass etwas falsch ist. Der Debugger hilft herauszufinden, wo und warum: Er hält das Programm an und zeigt Schritt für Schritt die Werte der Variablen.
- Die Warnung beim Programmstart wird beim Hersteller behoben, nicht beim Kunden. Die Warnung im Betriebssystem abzuschalten hebt den Schutz auf, ohne die Ursache zu beseitigen.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K3 – Was beim Signieren im Build passiert: (1) Der Hersteller erzeugt ein Schlüsselpaar aus privatem und öffentlichem Schlüssel und beantragt bei einer Zertifizierungsstelle ein Code-Signing-Zertifikat. (2) Die Zertifizierungsstelle prüft die Identität des Herstellers und stellt ein Zertifikat aus, das seinen Namen und seinen öffentlichen Schlüssel enthält und von ihr signiert ist. (3) Der Entwickler hinterlegt in den Build- bzw. Kompilierungseinstellungen das Zertifikat und den Zugriff auf den privaten Schlüssel. (4) Beim Erstellen berechnet das Signierwerkzeug nach dem Kompilieren und Linken einen Hashwert über die fertige Programmdatei. (5) Das Signierwerkzeug verschlüsselt diesen Hashwert mit dem privaten Schlüssel des Herstellers; das Ergebnis ist die digitale Signatur. (6) Das Signierwerkzeug bettet die Signatur und das Zertifikat in die Programmdatei ein, die so ausgeliefert wird. Vereinfacht: In der Praxis kommt meist noch ein Zeitstempel eines Zeitstempeldienstes dazu, damit die Signatur auch nach Ablauf des Zertifikats gültig bleibt.
- K4 – Signaturprüfung des Betriebssystems beim Programmstart: (1) Beim Start prüft das Betriebssystem, ob die Programmdatei eine digitale Signatur mit Zertifikat enthält. (2) Fehlt die Signatur, kann das Betriebssystem die Datei keinem Hersteller zuordnen und zeigt die Warnung an. (3) Ist eine Signatur vorhanden, prüft das Betriebssystem, ob das Zertifikat über die Zertifikatskette auf ein im Betriebssystem hinterlegtes Wurzelzertifikat zurückführt; ist das nicht so, etwa bei einem selbst ausgestellten Zertifikat, warnt es ebenfalls. (4) Das Betriebssystem entschlüsselt die Signatur mit dem öffentlichen Schlüssel aus dem Zertifikat und erhält so den Hashwert, den der Hersteller berechnet hat. (5) Das Betriebssystem berechnet selbst den Hashwert der Programmdatei und vergleicht beide Werte. (6) Stimmen die Hashwerte überein, gilt die Datei als unverändert und der Hersteller als bestätigt; andernfalls warnt das Betriebssystem ebenfalls. Vereinfacht: Zusätzlich prüft das Betriebssystem, ob das Zertifikat noch gültig ist und nicht gesperrt wurde.

**Typische Missverständnisse:**
- Viele denken, die Warnung bedeute einen Virus oder ein falsch eingestelltes Betriebssystem; richtig ist: Das Programm ist nicht signiert, das Betriebssystem kann die Herkunft nur nicht prüfen.
- Viele denken, ein selbst ausgestelltes Zertifikat reiche zum Signieren; richtig ist: Erzeugen kann man es, aber das Betriebssystem vertraut ihm nicht, und die Warnung bleibt. Das Zertifikat muss von einer Stelle stammen, deren Wurzelzertifikat im Betriebssystem hinterlegt ist.

**Fachwörter:**
- Programmgenerator: erzeugt Quellcode aus Modell oder Beschreibung
- Testsoftware: führt Tests automatisch aus, wertet aus
- Debugger: Programm anhalten, Variablenwerte verfolgen
- GUI-Builder: Programmgenerator für Oberflächen
- Ereignislogik: selbst programmierte Reaktion auf Klicks
- Code-Signing-Zertifikat: Zertifikat zum Signieren von Programmen
- Zertifizierungsstelle: stellt vertrauenswürdige Zertifikate aus

**So fragt die IHK:**
- Belegt ist eine Aufgabe zu einer Client-Anwendung: Beim Test erscheint die Startmeldung „nicht vertrauenswürdige Quelle“. Gefragt sind zwei Teilaufgaben zu je 2 Punkten mit dem Operator „beschreiben“: was die Meldung bedeutet (Lösung: beim Kompilieren nicht signiert) und wie man es über die Kompilierungseinstellungen behebt (Lösung: beim Kompilieren signieren; Zertifikat laut Lösung üblicherweise vom Betriebssystemhersteller).
- Die Ursache der Meldung steht nicht im Aufgabentext; man muss selbst darauf kommen, dass das Programm nicht signiert ist.
- Beim Aussteller gilt beides: vertrauenswürdige Zertifizierungsstelle und Betriebssystemhersteller.
- Aus derselben Prüfung stammen Teilaufgaben zu Compiler und Interpreter (Unterschied, Vor- und Nachteil, je 2 Punkte); sie gehören zum AP1-Stoff.
- Werkzeugauswahl, Programmgenerator, Testsoftware und GUI-Builder wurden noch nicht eigens geprüft. Zu erwarten sind „zuordnen und begründen“ (je Werkzeug 1 Punkt) und „begründen“ zu 2–3 Punkten.

**Fallen:**
- Den Programmgenerator erklären, ohne zu sagen, woraus er den Code erzeugt (Modell oder Beschreibung).
- Testsoftware als „jemand testet“ beschreiben; in die Antwort gehören das automatische Ausführen und das Auswerten.
- Den GUI-Builder mit „ist einfacher“ oder „geht schneller“ begründen; gefragt ist der Vergleich: was das Werkzeug erzeugt, was zu programmieren bleibt, was Handarbeit im vorliegenden Fall kostet.
- Als Grund gegen Handänderungen am erzeugten Code „ist verboten“ schreiben statt „wird neu erzeugt und dabei überschrieben“.
- Bei der Werkzeugauswahl nur den Namen nennen; die Begründung sagt, was das Werkzeug in genau diesem Arbeitsschritt leistet.
- Bei der Abhilfe nur „signieren“ schreiben, ohne die Kompilierungseinstellungen zu nennen, oder den Aussteller des Zertifikats weglassen.
