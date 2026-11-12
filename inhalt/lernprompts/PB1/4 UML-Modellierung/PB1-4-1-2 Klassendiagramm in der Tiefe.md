Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: UML-Modellierung › UML-Diagramme in der Tiefe › Klassendiagramm in der Tiefe

## So läuft unsere Sitzung

Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) und am Ende mein Prüfer. Unten stehen der **Stoff** (meine Aussagen „Das muss ich können“ mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen zu genau diesem Thema.

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

## Stoff: Klassendiagramm in der Tiefe

Ziel: Klassen vollständig mit Datentypen, Konstruktoren und Methoden modellieren, mehrere Klassen mit Assoziationen und Multiplizitäten verbinden, Aggregation und Komposition begründen und abstrakte Klassen, Interfaces und statische Elemente darstellen.

Das muss ich können:

### K1 – Klasse mit Konstruktor, Methoden und Datentypen (Stufe 3 Anwenden)
Du kannst eine Klasse über die Notation aus AP1 hinaus vollständig modellieren: mit Konstruktor, Get- und Set-Methoden und sinnvollen Datentypen, zum Beispiel validatePassword(String) : Boolean.

Erklärung:
Über AP1 hinaus vollständig:
- Attribute mit **Datentyp**: `- passwort : String`
- **Konstruktor**: `+ Benutzer(name : String)`
- **Get-/Set-Methoden**: `+ getName() : String`, `+ setName(name : String) : void`
- Methoden mit Parametern und Rückgabetyp: `+ validatePassword(pw : String) : Boolean`
- Sichtbarkeit in Worten: „nur klassenintern sichtbar“ = `-` (private), „paketübergreifend sichtbar“ = `+` (public, nicht `~`)

### K2 – Assoziationen und Multiplizitäten zwischen Klassen (Stufe 3 Anwenden)
Du kannst aus einer Beschreibung mehrere Klassen mit ihren Assoziationen und Multiplizitäten erstellen und deren Bedeutung erläutern (z. B. 1..* mindestens eins, * beliebig viele), auch Attribute, die auf Objekte oder Listen anderer Klassen verweisen (streckenliste : List<Strecke>); eine Aggregation wird so als Liste im Ganzen umgesetzt. Du kannst begründen, ob eine Aggregation oder eine Komposition passt.

Erklärung:
- Linie zwischen Klassen + **Multiplizitäten** an beiden Enden selbst setzen: `1` (genau eins), `0..1` (keins oder eins), `1..*` (mindestens eins, nach oben beliebig viele), `*` (beliebig viele, **auch keins**, wie `0..*`), feste Anzahl wie `2` (eine Strecke verbindet genau 2 Haltestellen); die Zahl steht am Ende der Klasse, deren Anzahl sie angibt
- Verweis auf andere Klassen als Attribut: `streckenliste : List<Strecke>`
- eine **Aggregation** setzt du so um: Das Ganze hält eine Liste der Teile
- Multiplizität am Ganzen: Bei einer **Komposition** gehört ein Teil nie zu mehreren Ganzen gleichzeitig, am Ganzen steht deshalb höchstens `1` (also `1` oder `0..1`), nie `*`. Bei einer **Aggregation** darf ein Teil auch zu mehreren Ganzen gehören oder ohne Ganzes bestehen (am Ganzen z. B. `*`)
Ob Aggregation oder Komposition passt, begründest du mit der Existenzabhängigkeit (aus AP1): Bei einer Komposition kann das Teil ohne das Ganze nicht bestehen, bei einer Aggregation besteht es weiter. Beispiel: Fahrer einer Personalverwaltung könnten auch in einer allgemeinen Mitarbeiterliste stehen – also Aggregation, keine Komposition.

### K3 – Abstrakte Klassen, Interfaces und statische Methoden (Stufe 3 Anwenden · in der Prüfung vorgegeben: Notation im Belegsatz bzw. Katalog-Anhang)
Du kannst abstrakte Klassen und Methoden ({abstract} oder kursiv), Interfaces mit ihrer Realisierung (gestrichelte Linie mit hohlem Dreieck), Vererbung (durchgezogene Linie mit hohlem Dreieck) und statische Methoden ({static} oder unterstrichen) im Klassendiagramm darstellen.

Erklärung:
- **abstrakt:** `{abstract}` oder *kursiv* – keine Objekte, abstrakte Methoden ohne Rumpf
- **Interface:** `<<interface>>`; Realisierung = **gestrichelte** Linie mit hohlem Dreieck
- **Vererbung:** **durchgezogene** Linie mit hohlem Dreieck zur Oberklasse
- **statisch:** `{static}` oder unterstrichen – die Methode gehört zur Klasse, nicht zu einem einzelnen Objekt, und wird über den Klassennamen aufgerufen; z. B. eine Fabrikmethode in der abstrakten Oberklasse, die ein Objekt einer Unterklasse liefert (Rückgabetyp = Oberklasse): `+ createBesucher(typ : String) : Besucher {static}`
- **Überschreiben/Implementieren:** Jede nicht abstrakte Unterklasse muss die abstrakten Methoden ihrer Oberklasse implementieren, jede realisierende Klasse alle Methoden des Interfaces – und **führt sie im eigenen Methodenfach noch einmal auf** (gleiche Signatur, ohne `{abstract}`), z. B. `+ calculatePreis(basisPreis : Double) : Double` in jeder Unterklasse von `Besucher` oder `+ update() : void` in jeder Klasse, die das Interface `Observer` realisiert. Nur unverändert geerbte Methoden stehen in der Unterklasse nicht noch einmal
Die Notation steht meist im Belegsatz.

### K4 – Methoden aus Anwendungsfällen ableiten (Stufe 3 Anwenden)
Du kannst die fachlichen Methoden einer Klasse aus den Anwendungsfällen ableiten: Aus „Termin absagen“ wird die Methode absagen() der Klasse Termin; Get- und Set-Methoden lässt man im Entwurf oft weg, damit die fachlichen Methoden im Vordergrund stehen.

Erklärung:
Ein Anwendungsfall beschreibt, was ein Akteur mit dem System tun will; irgendein Objekt muss diese Arbeit erledigen. Deshalb liefert das Anwendungsfalldiagramm die ersten Methoden des Klassendiagramms.
- Tätigkeit des Anwendungsfalls → **Methodenname**, Gegenstand → **Klasse**, die die Methode bekommt: „Termin absagen“ → `Termin.absagen()`
- Was der Anwendungsfall braucht oder liefert, wird **Parameter** oder **Rückgabetyp**: „Termin verschieben“ → `verschieben(neu : DateTime) : Boolean`
- Ein Anwendungsfall kann Methoden in mehreren Klassen auslösen; wie sie zusammenspielen, zeigt dann ein Sequenzdiagramm
- **Get- und Set-Methoden** ergeben sich aus den Attributen und sagen fachlich nichts Neues; im Entwurf lässt man sie oft weg – verlangt die Aufgabe sie ausdrücklich, gehören sie dazu
Beispiel Praxissoftware: „Termin buchen“, „Termin absagen“ und „Termin verschieben“ ergeben in der Klasse `Termin` die Methoden `buchen()`, `absagen()` und `verschieben()`.

## Lehrnotiz: Klassendiagramm in der Tiefe

**Aufteilung:**
- Eine Klasse vollständig: K1
- Fachliche Methoden aus Anwendungsfällen: K4
- Mehrere Klassen mit Beziehungen und Multiplizitäten: K2
- Abstrakte Klasse, Interface, statische Methode: K3

**Schon geprüft:** In Prüfungen: K1 (2021W, 2022S), K2 (2022S, 2024W), K3 (2022S, 2023S) · Noch nicht geprüft: K4

**Kerngedanken:**
- Der Text sagt, welche Zeile entsteht: „beim Erzeugen gesetzt“ wird ein Parameter des Konstruktors, „lesbar“ eine Get-Methode (kein Parameter, Rückgabetyp), „änderbar“ eine Set-Methode (ein Parameter, void), „stimmt / stimmt nicht“ die Rückgabe Boolean. Modelliert wird nur, was der Text verlangt.
- Datentypen müssen zur Sache passen: Zählbares Integer, Beträge Double, Text String, ja/nein Boolean; eine Nummer mit Buchstaben ist String.
- Für jede Linie stellt man die Frage zweimal, einmal von jeder Seite: „Wie viele B gehören zu einem A?“ Die Antwort steht am Ende bei B.
- Aggregation oder Komposition begründet man mit der Probe aus AP1: Besteht das Teil weiter, wenn es das Ganze nicht mehr gibt? Die IHK hat diese Begründung schon verlangt.
- Eine statische Methode gehört zur Klasse, nicht zu einem einzelnen Objekt.

**Typische Missverständnisse:**
- Viele denken, der Konstruktor brauche einen Rückgabetyp wie void; richtig ist: Er heißt wie die Klasse, hat Parameter und keinen Rückgabetyp.
- Viele denken, ein Verweis auf ein anderes Objekt sei dessen Nummer (Integer) wie ein Fremdschlüssel; richtig ist: Der Typ ist die Klasse selbst oder eine Liste davon.
- Viele denken, für einen Anwendungsfall brauche man eine Sammelklasse „Verwaltung“; richtig ist: Die Methode kommt in die Klasse des Gegenstands und heißt nach der Tätigkeit.

**Fachwörter:**
- Konstruktor: erzeugt ein Objekt, setzt Anfangswerte
- Multiplizität: wie viele Objekte am Linienende
- Aggregation: Teil besteht auch ohne das Ganze
- Komposition: Teil besteht nicht ohne das Ganze
- Interface: nur Methodenköpfe, ohne Umsetzung
- Realisierung: Klasse setzt ein Interface um
- Vererbung: Unterklasse übernimmt Attribute und Methoden
- Fabrikmethode: statische Methode, liefert passendes Objekt

**So fragt die IHK:**
- Eine Klasse vollständig „erstellen“ (zweimal, je 7 Punkte): Vorgegeben sind kursive Bezeichner und Sichtbarkeiten in Worten („nur klassenintern“). Verlangt sind Datentypen, Konstruktor, Get-/Set-Methoden oder Methoden mit Parametern und Rückgabetyp. Punkte je Zeile: Name 0,5–1, je Attribut 1, je Methode oder Konstruktor 1,5–2.
- Mehrere Klassen „ergänzen“ (17 Punkte, eine Klasse vorgegeben): vier Klassen mit Attributen und Datentypen, Verweise als Klassentyp und als List<…>, vier Beziehungen mit Multiplizitäten, darunter die feste Zahl 2. Je Klasse 3 Punkte, je Beziehung 2; Methoden waren nicht verlangt.
- Kleine Fragen zu einem gegebenen Diagramm (2–3 Punkte): Aggregation beschreiben, 1..* gegen * erläutern („auch keins“ mit Beispiel), begründen, warum keine Komposition passt, eine Beziehung zwischen Klasse und Interface einzeichnen und erläutern.
- Abstraktion: fehlende Interface-Methoden in realisierenden Klassen eintragen (2 Punkte); eine Hierarchie mit abstrakter Oberklasse, statischer Fabrikmethode und überschriebenen Methoden erstellen (9 Punkte).
- Die Notation lag im Belegsatz bei. K4 kam nicht als eigene Aufgabe vor.

**Fallen:**
- Eine Get-Methode mit Parameter oder eine Set-Methode ohne Parameter schreiben.
- Einen Datentyp oder einen Konstruktor-Parameter weglassen; Punkte gibt es je Zeile.
- Vorgegebene (kursive) Bezeichner abwandeln statt genau übernehmen.
- Den Gegenstand in den Methodennamen ziehen und die Methode in irgendeine Klasse setzen, oder bei einer abgeleiteten Methode Parameter und Rückgabetyp weglassen.
- Die Multiplizität an das falsche Linienende schreiben.
- `*` und `1..*` gleich deuten; beim Erläutern gehört der Bezug auf die beiden Klassen und ein Beispiel für „keins“ dazu.
- Wörter wie „mindestens“, „noch keiner“ oder „gibt es nicht ohne“ überlesen; sie entscheiden über die Multiplizität und über Aggregation oder Komposition.
- Das Listenattribut vergessen, wenn der Text sagt, dass eine Klasse eine Liste führt.
- Vererbung und Realisierung verwechseln: beide mit hohlem Dreieck, nur die Linienart unterscheidet sie.
- Die Kennzeichnung für abstrakt, statisch oder das Interface vergessen; „das Allgemeine an sich gibt es nicht“ heißt abstrakte Klasse.

**Material:**
Notationsregeln, nach denen eine Zeichnung geprüft wird:
- Klasse: Kasten mit drei Fächern – Name, Attribute, Methoden.
- Attribut: `Sichtbarkeit name : Typ`. Methode: `Sichtbarkeit name(parameter : Typ) : Rückgabetyp`, ohne Rückgabe `: void`.
- Sichtbarkeit: `+` public, `-` private, `#` protected, `~` package.
- Assoziation: durchgezogene Linie mit Multiplizität an beiden Enden.
- Aggregation: hohle Raute am Ganzen. Komposition: gefüllte Raute am Ganzen.
- Vererbung: durchgezogene Linie, hohles Dreieck bei der Oberklasse; mehrere Unterklassen dürfen zu einer Spitze zusammenlaufen.
- Interface: «interface» über dem Namen. Realisierung: gestrichelte Linie, hohles Dreieck beim Interface.
- Abstrakt: `{abstract}` oder kursiv. Statisch: `{static}` oder unterstrichen.
- Andere sinnvolle Namen und Typen gelten, auch `double`, `float` oder `boolean`; für einen Zählerstand galten Double oder Integer.
- Zusätzliche Get-/Set-Methoden kosten nichts; eine unverändert geerbte Methode in der Unterklasse zu wiederholen auch nicht.
- Zeichenqualität wird nicht bewertet.
- Textform im Chat: `A x —— y B` heißt, x steht am Ende bei A und y bei B; `◇`/`◆` stehen an der Klasse mit der Raute; `——▷` Vererbung, `- - -▷` Realisierung.
