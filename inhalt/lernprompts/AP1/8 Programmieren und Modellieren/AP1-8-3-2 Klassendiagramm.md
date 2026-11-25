Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › UML-Diagramme › Klassendiagramm

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP1 – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Was ich am Ende können soll, steht dagegen fest:

- Jede Aussage im Stoff (K1, K2 …) ist ein Lernziel. Der Satz „Du kannst …“ sagt, was ich in der Prüfung können muss, die Stufe, auf welche Art: Wiedergeben = nennen; Verstehen = erklären, beschreiben, unterscheiden; Anwenden = es an einem Fall selbst tun (rechnen, erstellen, zeichnen); Beurteilen = entscheiden und begründen. Fertig ist eine Aussage, wenn ich genau das kann – mit allem, was der Satz nennt.
- Dieser Stichpunkt ist einer von knapp 300 und eng zugeschnitten. Was über seine Aussagen hinausgeht, lerne ich in einem anderen Stichpunkt oder brauche es für die Prüfung nicht. Nimm es nicht vorweg, weder in der Erklärung noch in einer Aufgabe; brauche ich etwas davon zum Verstehen, reicht ein Satz. Das gilt erst recht für alles, was die Lehrnotiz einem Nachbarstichpunkt zuordnet.

Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen – also jede Aussage begründen können, nicht mehr Stoff lernen. Erklär mit den richtigen Fachbegriffen und dem Warum dahinter. Verlangt eine Aussage selbst ein Verfahren, einen Ablauf oder einen Rechenweg, gehen wir ihn Schritt für Schritt durch. Ein Beispiel aus dem Alltag gern danach als Eselsbrücke – sag dazu, wo es hinkt.
- Zu manchen Aussagen stehen in der Lehrnotiz „Abläufe zum Verstehen“: fachlich geprüfte Erklärungen dessen, was Schritt für Schritt passiert. Bring den Ablauf bei seiner Aussage, vor jedem Vergleich, und sag dazu, was davon die IHK lesen will und was nur Hintergrund ist. Steht zu einer Aussage kein Ablauf da, wurde das geprüft – dann reicht die Erklärung aus dem Stoff mit dem Warum dazu, ohne eigenen Ablauf. Fehlt dir im Einzelfall trotzdem etwas Wichtiges, biet es mir in einem Satz an; schreibe ich „tiefer“, erklärst du es kurz und als Hintergrund gekennzeichnet.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Sag am Anfang jedes Häppchens, an welcher Aussage wir sind. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Eine Aufgabe prüft, was der Satz „Du kannst …“ verlangt, auf seiner Stufe – möglichst an einem neuen Fall statt als Nachsagen der Erklärung, aber lösbar allein mit dem Stoff. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
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

## Stoff: Klassendiagramm

Ziel: Klassen mit Attributen, Datentypen, Methoden und Sichtbarkeiten im Klassendiagramm darstellen und aus einem Text ableiten.

Das muss ich können:

### K1 – Klasse als Kasten mit drei Bereichen (Stufe 3 Anwenden)
Du kannst eine Klasse als Kasten mit drei Bereichen darstellen: Name, Attribute, Methoden.

Erklärung:
Eine Klasse ist ein **Kasten mit drei Bereichen** übereinander:
- oben: der **Name** der Klasse, z. B. `Kunde`
- Mitte: die **Attribute**
- unten: die **Methoden**

### K2 – Schreibweise von Attributen und Methoden (Stufe 3 Anwenden)
Du kannst Attribute in der Form „Sichtbarkeit Name : Typ“ und Methoden mit Parametern und Rückgabetyp darstellen.

Erklärung:
- **Attribut:** `Sichtbarkeit name : Typ` – z. B. `- name : String`
- **Methode:** `Sichtbarkeit name(parameter : Typ) : Rückgabetyp` – z. B. `+ berechneZins(jahre : int) : double`
Hat eine Methode keinen Rückgabewert, steht `: void` dahinter. Mehrere Parameter trennst du mit Komma; ohne Parameter bleiben die Klammern leer, z. B. `+ getName() : String`.

### K3 – Sichtbarkeitszeichen +, -, # und ~ (Stufe 3 Anwenden)
Du kannst die Sichtbarkeitszeichen + für public, - für private, # für protected und ~ für package verwenden.

Erklärung:
- `+` **public** – von überall zugreifbar
- `-` **private** – nur innerhalb der Klasse
- `#` **protected** – innerhalb der Klasse und abgeleiteter Klassen
- `~` **package** – innerhalb desselben Pakets (einer Gruppe zusammengehöriger Klassen)
Üblich: Attribute `-`, Methoden `+`.

### K4 – Assoziation mit Multiplizitäten und Navigierbarkeit (Stufe 3 Anwenden)
Du kannst eine Assoziation zwischen zwei Klassen mit Multiplizitäten wie 1 und * einzeichnen und interpretieren, auch eine gerichtete Assoziation, bei der ein Pfeil die Navigierbarkeit zeigt.

Erklärung:
Eine **Assoziation** ist eine **durchgezogene Linie** zwischen zwei Klassen. Die **Multiplizität** steht am Linienende **bei der Klasse, deren Anzahl sie angibt**:
- `1` genau eins, `*` beliebig viele, auch keins (gleich `0..*`), `0..1` keins oder eins, `1..*` mindestens eins, `1..20` eins bis zwanzig
Beispiel: `Kunde 1 —— * Bestellung`: Ein Kunde hat beliebig viele Bestellungen, jede Bestellung gehört zu genau einem Kunden.
**Einzeichnen:** Frag für jede Seite „Wie viele B gehören zu einem A?“ und schreib die Antwort an das Ende bei B.
**Gerichtete Assoziation:** Eine offene Pfeilspitze (zwei Striche, kein Dreieck wie bei der Vererbung) zeigt die **Navigierbarkeit** – die Klasse am Anfang kennt die an der Spitze, aber nicht umgekehrt.

### K5 – Klassen aus einer Textbeschreibung (Stufe 3 Anwenden)
Du kannst aus einer Textbeschreibung Klassen mit ihren Attributen und Methoden ableiten.

Erklärung:
Lies den Text und such:
- **Substantive** für eigenständige Dinge oder Personen → **Klassen**
- deren **Eigenschaften** → **Attribute** (mit passendem Typ)
- **Tätigkeiten** (Verben) → **Methoden**
Beispiel: „Ein Fahrzeug hat ein Kennzeichen und einen Kilometerstand. Es kann fahren.“
- Klasse `Fahrzeug`
- `- kennzeichen : String`, `- kilometerstand : int`
- `+ fahren(km : int) : void`
Richte dich nach dem Wortlaut der Aufgabe: Sind Typen oder Sichtbarkeiten dort nicht verlangt, genügen die Namen.

### K6 – Aggregation gegenüber Komposition (Stufe 2 Verstehen)
Du kannst Aggregation und Komposition im Klassendiagramm unterscheiden: Bei der Aggregation kann das Teil auch ohne das Ganze bestehen, bei der Komposition nicht.

Erklärung:
Beide beschreiben eine Teil-Ganzes-Beziehung. Die Raute sitzt immer **am Ganzen**.
- **Aggregation** – **leere Raute:** Das Teil kann **auch ohne das Ganze** bestehen. Beispiel: Mannschaft – Spieler; löst sich die Mannschaft auf, gibt es die Spieler noch.
- **Komposition** – **ausgefüllte Raute:** Das Teil kann **nicht ohne das Ganze** bestehen. Beispiel: Gebäude – Raum; wird das Gebäude abgerissen, sind die Räume weg.

### K7 – Vererbungspfeil im Klassendiagramm lesen (Stufe 3 Anwenden)
Du kannst eine Vererbung (Generalisierung) im Klassendiagramm interpretieren und selbst eine Klassenhierarchie mit gemeinsamer Oberklasse erstellen: Die durchgezogene Linie mit hohlem Dreieck zeigt auf die Oberklasse; die Unterklasse erbt deren Attribute und Methoden und kann eigene ergänzen.

Erklärung:
Die **Vererbung** (Generalisierung) zeigt eine **ist-ein-Beziehung**: Ein Lkw **ist ein** Fahrzeug.
- **Darstellung:** durchgezogene Linie mit **hohlem Dreieck**; die Spitze zeigt auf die **Oberklasse** (das Allgemeine).
- Die **Unterklasse** erbt alle Attribute und Methoden der Oberklasse, ohne dass sie dort noch einmal stehen, und ergänzt eigene.
Du kennst das Zeichen schon vom Anwendungsfalldiagramm (Generalisierung von Akteuren). Verlangt eine Aufgabe, zu einer vorgegebenen Oberklasse eine einfache Klassenhierarchie zu erstellen, ist das die Umkehrung des Lesens: Gemeinsames in die Oberklasse, Besonderes in die Unterklassen, hohles Dreieck zur Oberklasse. So eine Aufgabe gab es in der AP1 schon.

## Lehrnotiz: Klassendiagramm

**Aufteilung:**
- Die Klasse als Kasten und die Schreibweise der Zeilen: K1, K2
- Wer zugreifen darf: K3
- Klassen aus einem Text gewinnen: K5
- Assoziation: K4
- Teil und Ganzes: K6
- Vererbung: K7 – hier auch die Umkehrung, eine einfache Klassenhierarchie zu einer Oberklasse aufbauen

**Schon geprüft:** In Prüfungen: K1 (2026F), K2 (2026F), K3 (2026F), K5 (2023F), K7 (2023F) · Noch nicht geprüft: K4, K6

**Kerngedanken:**
- Das Klassendiagramm ist ein Bauplan, der für jede Programmiersprache gilt. Darum hat es eine eigene Schreibweise: Der Typ steht hinter dem Namen nach einem Doppelpunkt, nicht davor wie im Code.
- Probe, ob ein Substantiv Klasse oder Attribut wird: Ein eigenständiges Ding mit eigenen Eigenschaften wird eine Klasse; eine bloße Angabe über etwas anderes (ein Datum, ein Status) wird ein Attribut.
- Multiplizitäten lesen heißt auch die Untergrenze lesen: `*` schließt „keins“ ein. Ob es ein Objekt ohne Partner geben darf, zeigt das andere Ende – `1` heißt Pflicht, `0..1` heißt freiwillig.
- Vererbt wird nur von der Oberklasse zur Unterklasse. Ein Objekt der Unterklasse hat alles aus beiden Kästen; ein Objekt der Oberklasse hat die Ergänzungen der Unterklasse nicht.

**Typische Missverständnisse:**
- Viele denken, die Multiplizität gehöre an das Ende der Klasse, mit der der Satz beginnt („jede Bestellung gehört zu genau einem …“); richtig ist: Sie steht bei der Klasse, die gezählt wird.
- Viele denken, der Vererbungspfeil zeige wie „gibt weiter an“ auf die Unterklasse; richtig ist: Die Spitze zeigt immer auf das Allgemeine, die Oberklasse.

**Fachwörter:**
- Sichtbarkeit: wer auf Attribut oder Methode zugreifen darf
- Rückgabetyp: Typ des Werts, den eine Methode liefert
- Multiplizität: wie viele Objekte am Linienende beteiligt sind
- Navigierbarkeit: welche Klasse die andere kennt
- Aggregation: Teil besteht auch ohne das Ganze
- Komposition: Teil besteht nicht ohne das Ganze
- Oberklasse: das Allgemeine, von dem geerbt wird
- Unterklasse: erbt und ergänzt Eigenes

**So fragt die IHK:**
- Muster ist eine Aufgabe mit dem Operator „erstellen“ (2023F, 8 Punkte): Für zwei Arten eines Geschäftsvorfalls waren Eigenschaften und Methoden als Listen vorgegeben, dazu die gemeinsame Oberklasse. Verlangt war eine Klassenhierarchie: Gemeinsames in die Oberklasse, Besonderes in die Unterklassen, Vererbungslinien mit hohlem Dreieck zur Oberklasse.
- Als Material lag die UML-Notationsübersicht bei (Schreibweise von Attributen und Methoden, Sichtbarkeitszeichen, Linien für alle Beziehungen).
- Bewertet wurden 2 Punkte je Klasse und 2 Punkte für die Vererbung. Zusätzliche Methoden, Konstruktoren und Sichtbarkeiten waren ausdrücklich nicht gefordert; die Lösung zeigt nur Namen ohne Typen.
- Der Prüfungskatalog nennt außerdem Assoziationen mit Multiplizitäten und Navigierbarkeit sowie Aggregation und Komposition.
- 2026F (K1, K2, K3), 5 Punkte, „ergänzen“: leerer Klassenkasten mit drei Bereichen, in dem nur eine öffentliche Methode mit Parameter und Rückgabetyp steht. Der Text nennt den Klassennamen und vier Attribute, alle vom Typ double und private; einzutragen sind Klassenname und Attribute mit Sichtbarkeit und Datentyp (`- name: double`). Lösungshinweise liegen nicht vor.

**Fallen:**
- Den Typ vor den Namen schreiben wie im Code oder den Rückgabetyp weglassen, auch `void`.
- Bei einer Methode die Klammern weglassen, wenn sie nichts bekommt, oder einen Parameter ohne Typ schreiben.
- Einen Typ wählen, der nicht zur Angabe passt, etwa Text für eine Zahl; für ja/nein ist es ein Wahrheitswert.
- `#` als „privat“ lesen (privat ist `-`), `~` als „ungefähr“ oder „optional“ lesen (es heißt package) oder `#` und `~` vertauschen.
- Jedes Substantiv des Textes zur Klasse machen oder eine Eigenschaft als eigenen Kasten zeichnen.
- Bei der gerichteten Assoziation den Pfeil vergessen oder umdrehen: Die Spitze sitzt bei der Klasse, die gekannt wird.
- Die Raute an das Teil setzen oder Aggregation und Komposition nennen ohne den Grund, ob das Teil ohne das Ganze weiter besteht.
- Beim Lesen einer Vererbung nur aufzählen, was im Kasten der Unterklasse steht, und das Geerbte vergessen.

**Material:**
Notationsregeln, nach denen eine Zeichnung geprüft wird:
- Klasse: Rechteck mit drei Bereichen, durch Linien getrennt: Name, Attribute, Methoden.
- Attribut: `Sichtbarkeit name : Typ`.
- Methode: `Sichtbarkeit name(parameter : Typ) : Rückgabetyp`. Mehrere Parameter stehen durch Komma getrennt, ohne Parameter bleiben die Klammern leer, ohne Rückgabewert steht `: void`.
- Typen (üblich, keine IHK-Vorgabe): `int` für ganze Zahlen, `double` für Kommazahlen, `String` für Text, `boolean` für ja/nein, `Date` für ein Datum. `float` statt `double`, `String` für ein Datum und andere sinnvolle Namen gelten.
- Assoziation: durchgezogene Linie zwischen zwei Klassen. An jedem Ende steht die Multiplizität der Klasse an diesem Ende: `1`, `*`, `0..1`, `1..*` oder ein Bereich wie `1..20`; `0..*` bedeutet dasselbe wie `*`.
- Gerichtete Assoziation: dieselbe Linie mit offener Pfeilspitze bei der Klasse, die gekannt wird.
- Aggregation: Linie mit leerer Raute am Ganzen. Komposition: Linie mit ausgefüllter Raute am Ganzen.
- Vererbung: durchgezogene Linie mit hohlem Dreieck an der Oberklasse. Geerbte Attribute und Methoden stehen in der Unterklasse nicht noch einmal.
- Geprüft wird nur, was die Aufgabe verlangt: Sind Typen oder Sichtbarkeiten nicht gefordert, reichen die Namen.
