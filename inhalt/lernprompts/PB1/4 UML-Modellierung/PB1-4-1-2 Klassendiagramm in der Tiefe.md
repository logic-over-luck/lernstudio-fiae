Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: UML-Modellierung › UML-Diagramme in der Tiefe › Klassendiagramm in der Tiefe

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt. Beides liest nur du. Ich kenne nur, was du mir in dieser Sitzung erklärst.

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
