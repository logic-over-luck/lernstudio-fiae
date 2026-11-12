Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Objektorientierter Entwurf und Entwurfsmuster › Objektorientierter Entwurf › Kapselung, Vererbung, Interfaces und Polymorphie

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

## Stoff: Kapselung, Vererbung, Interfaces und Polymorphie

Ziel: Kapselung und Vererbung im Entwurf anwenden, abstrakte Klassen, Interfaces und gewöhnliche Klassen unterscheiden und einen Entwurf mit Fallunterscheidungen polymorph umbauen.

Das muss ich können:

### K1 – Kapselung im Entwurf: Prüfung und Austauschbarkeit (Stufe 3 Anwenden)
Du kannst Kapselung (private Attribute, Zugriff über Methoden, AP1) im Entwurf anwenden und begründen: Die Klasse prüft ihre Daten selbst, zum Beispiel im Setter, und ihre Umsetzung lässt sich austauschen, ohne dass sich der aufrufende Code ändert.

Erklärung:
Kapselung im Entwurf:
- Attribute **private**, Zugriff nur über Methoden
- die Klasse **prüft ihre Daten selbst**, z. B. `setAlter(a)` lehnt negative Werte ab
- die interne Umsetzung lässt sich **austauschen**, ohne dass aufrufender Code geändert werden muss

### K2 – Vererbung: Oberklasse und Unterklassen (Stufe 3 Anwenden)
Du kannst Vererbung anwenden: gemeinsame Attribute und Methoden in eine Oberklasse legen; Unterklassen erben sie und ergänzen oder überschreiben Methoden.

Erklärung:
- Gemeinsames (Attribute, Methoden) in die **Oberklasse**
- **Unterklassen erben** es automatisch und **ergänzen** Eigenes oder **überschreiben** Methoden
Beispiel: `Fahrzeug` mit `kennzeichen`, `fahren()`; `LKW` ergänzt `ladung`, überschreibt `fahren()`.
Prüffrage: Ist die Unterklasse *eine Art von* Oberklasse?

### K3 – Abstrakte Klasse, Interface und gewöhnliche Klasse (Stufe 3 Anwenden)
Du kannst abstrakte Klasse, Interface und gewöhnliche Klasse unterscheiden und im Entwurf einsetzen: Von einer abstrakten Klasse lassen sich keine Objekte erzeugen, sie kann Attribute und fertige Methoden enthalten und abstrakte Methoden vorgeben; ein Interface legt klassisch nur Methodensignaturen fest (neuere Sprachversionen erlauben Standardimplementierungen), die jede implementierende Klasse bereitstellen muss. In Java oder C# erbt eine Klasse von nur einer Oberklasse, kann aber mehrere Interfaces implementieren.

Erklärung:
- **Gewöhnliche Klasse:** Objekte erzeugbar, alle Methoden ausprogrammiert
- **Abstrakte Klasse:** **keine Objekte**; darf Attribute und fertige Methoden haben und **abstrakte Methoden** vorgeben (nur der Methodenkopf ohne Umsetzung; jede nicht abstrakte Unterklasse muss sie überschreiben)
- **Interface:** legt (klassisch) **nur Methodensignaturen** fest; jede implementierende Klasse muss sie bereitstellen
- Java/C#: **eine** Oberklasse, aber **mehrere** Interfaces

### K4 – Polymorphie und dynamisches Binden (Stufe 2 Verstehen)
Du kannst Polymorphie erläutern: Eine Methode mit gleicher Signatur wird in Unterklassen oder in Klassen, die ein Interface implementieren, unterschiedlich umgesetzt; welche Umsetzung läuft, entscheidet sich zur Laufzeit am tatsächlichen Objekt (dynamisches Binden).

Erklärung:
**Polymorphie** = gleiche Methode, unterschiedliches Verhalten.
- `berechneFlaeche()` ist in `Kreis` und `Rechteck` verschieden umgesetzt.
- Für eine Liste von `Form`-Objekten ruft man einfach `f.berechneFlaeche()` auf.
- **Welche** Umsetzung läuft, entscheidet sich **zur Laufzeit** am tatsächlichen Objekt, nicht am Typ der Variablen (dynamisches Binden).

### K5 – Fallunterscheidung nach Typ polymorph umbauen (Stufe 3 Anwenden)
Du kannst einen Entwurf mit Fallunterscheidungen über ein Typ-Attribut in einen polymorphen Entwurf umbauen und als Klassendiagramm erstellen: abstrakte Oberklasse ohne Typ-Attribut, je Typ eine Unterklasse, die die abstrakten Methoden überschreibt; so lassen sich neue Unterklassen ergänzen, ohne den aufrufenden Code zu ändern.

Erklärung:
Statt `wenn typ == "Premium" … sonst wenn typ == "Standard" …`:
- **abstrakte Oberklasse** ohne Typ-Attribut, abstrakte Methode z. B. `berechnePreis()`
- **je Typ eine Unterklasse**, die die Methode überschreibt
- aufrufender Code ruft nur noch `besucher.berechnePreis()`
- die Objekte erzeugt z. B. eine **statische Fabrikmethode** in der abstrakten Oberklasse: `+ createBesucher(typ : String) : Besucher {static}` liefert je nach `typ` ein Objekt der passenden Unterklasse. **Statisch** heißt: Die Methode gehört zur Klasse selbst, nicht zu einem Objekt, und wird über den Klassennamen aufgerufen (`Besucher.createBesucher("VIP")`) – deshalb geht das, obwohl es von `Besucher` selbst keine Objekte gibt
- im Klassendiagramm: Oberklasse mit `{abstract}` und ohne Typ-Attribut, abstrakte Methoden mit `{abstract}` (oder kursiv), statische Methode mit `{static}` (oder unterstrichen); jede Unterklasse führt die überschriebenen Methoden erneut auf, Vererbungspfeil mit hohlem Dreieck an der Oberklasse
Vorteil: Neuer Typ = neue Unterklasse, **ohne** den aufrufenden Code zu ändern. Nur die Stelle, an der die Objekte erzeugt werden (z. B. eine Fabrikmethode), bekommt einen Fall dazu.

### K6 – Sichtbarkeit geerbter Elemente (Stufe 2 Verstehen)
Du kannst erklären, welche geerbten Elemente eine Unterklasse direkt benutzen darf: public-Elemente überall, protected-Elemente auch in Unterklassen, private-Elemente nur in der eigenen Klasse – deshalb macht man Elemente, die Unterklassen brauchen, protected oder greift über öffentliche Getter und Setter zu.

Erklärung:
Vererbung gibt der Unterklasse alle Elemente der Oberklasse mit – **benutzen** darf sie aber nur, was die Sichtbarkeit erlaubt.
- **public** (+): von überall erreichbar
- **protected** (#): in der eigenen Klasse und in allen Unterklassen (in Java zusätzlich im selben Paket)
- **private** (-): nur in der eigenen Klasse – auch eine Unterklasse kommt nicht direkt heran
- ohne Angabe gilt in Java **package** (~): sichtbar im ganzen Paket, also nicht automatisch private
Braucht eine Unterklasse ein privates Attribut, gibt es zwei Wege: es **protected** machen oder den **Getter/Setter** der Oberklasse aufrufen. Der zweite Weg erhält die Kapselung, weil die Oberklasse weiter selbst prüft.
Beispiel: `Konto` hat `- kontostand`; `Sparkonto.zinsenGutschreiben()` ruft `getKontostand()` und `einzahlen(zins)` auf, statt `kontostand` direkt zu setzen.

### K7 – Einfach- und Mehrfachvererbung (Stufe 2 Verstehen)
Du kannst Einfach- und Mehrfachvererbung unterscheiden: Eine Klasse hat eine bzw. mindestens zwei direkte Oberklassen; weil bei gleichnamigen geerbten Methoden oder Attributen unklar wird, welche gilt, erlauben Sprachen wie Java und C# Mehrfachvererbung nur über mehrere Interfaces, andere wie C++ oder Python auch direkt.

Erklärung:
Bei der **Einfachvererbung** hat eine Klasse genau **eine** direkte Oberklasse, bei der **Mehrfachvererbung** **zwei oder mehr**.
- Problem der Mehrfachvererbung: Bringen beide Oberklassen eine Methode gleichen Namens mit (z. B. `starten()`), ist unklar, welche Fassung die Unterklasse hat (**Namenskonflikt**).
- **Java, C#:** nur eine Oberklasse, dafür beliebig viele **Interfaces** – sie geben klassisch nur Signaturen vor, die Klasse setzt sie selbst um, ein Konflikt entsteht nicht. Bringen zwei Interfaces gleichnamige Standardimplementierungen mit (Java ab Version 8), muss die Klasse die Methode selbst überschreiben.
- **C++, Python:** Mehrfachvererbung direkt, mit festen Regeln, welche Fassung gewinnt.
Beispiel: Ein `Multifunktionsdrucker` soll drucken und scannen – in Java erbt er von `Geraet` und implementiert die Interfaces `Drucker` und `Scanner`.

### K8 – Überladen gegen Überschreiben (Stufe 2 Verstehen)
Du kannst Überladen und Überschreiben unterscheiden: Beim Überladen hat eine Klasse mehrere Methoden gleichen Namens, die sich in Anzahl oder Datentyp der Parameter unterscheiden (ein anderer Rückgabetyp allein reicht nicht); beim Überschreiben setzt eine Unterklasse eine geerbte Methode mit gleicher Signatur neu um.

Erklärung:
Beide Begriffe bedeuten „gleicher Methodenname“, meinen aber Verschiedenes:
- **Überladen** (Overloading): **eine Klasse**, mehrere Methoden mit gleichem Namen und **unterschiedlicher Parameterliste**. Anhand der übergebenen Argumente steht fest, welche läuft. Ein anderer Rückgabetyp allein genügt nicht, weil der Aufruf dann nicht eindeutig wäre.
- **Überschreiben** (Overriding): Die **Unterklasse** setzt eine geerbte Methode mit **gleicher Signatur** neu um; welche Fassung läuft, entscheidet sich zur Laufzeit am Objekt (Polymorphie).
Beispiel: `Rechnung` hat `drucken()` und `drucken(anzahlKopien: int)` – überladen. `Gutschrift` erbt von `Rechnung` und bringt ein eigenes `drucken()` mit – überschrieben.
Auch Konstruktoren werden oft überladen, etwa einer mit allen Angaben und einer nur mit den Pflichtangaben.

### K9 – Konstruktor der Unterklasse mit super (Stufe 3 Anwenden)
Du kannst den Konstruktor einer Unterklasse erstellen, der zuerst den Konstruktor der Oberklasse aufruft (z. B. mit super), damit die geerbten Attribute belegt werden, und danach die eigenen Attribute setzt.

Erklärung:
Ein Objekt der Unterklasse besteht aus dem geerbten und dem eigenen Teil. Den geerbten Teil kennt und prüft nur die Oberklasse – deshalb belegt **ihr Konstruktor** ihn.
- erste Anweisung: Aufruf des Oberklassen-Konstruktors, meist `super(...)`, mit den Werten für die geerbten Attribute
- danach: die eigenen Attribute setzen
- private Attribute der Oberklasse könnte die Unterklasse ohnehin nicht direkt setzen
Beispiel in Pseudocode: `Mitarbeiter(name, gehalt)` ruft zuerst `super(name)` auf und setzt dann `this.gehalt = gehalt` – `name` wird in `Person` geprüft und gesetzt, `gehalt` in `Mitarbeiter`.

## Lehrnotiz: Kapselung, Vererbung, Interfaces und Polymorphie

**Aufteilung:**
- Kapselung im Entwurf: K1
- Vererbung und was die Unterklasse benutzen darf: K2, K6
- Konstruktor der Unterklasse: K9
- Abstrakte Klasse, Interface, Einfach- und Mehrfachvererbung: K3, K7
- Pause möglich nach abstrakter Klasse und Interface.
- Überladen und Überschreiben: K8
- Polymorphie und dynamisches Binden: K4
- Umbau als Klassendiagramm, hier kommt alles Vorige zusammen: K5

**Schon geprüft:** In Prüfungen: K3 (2025S), K4 (2023S), K5 (2023S) · Noch nicht geprüft: K1, K2, K6–K9

**Kerngedanken:**
- Auf ein Attribut greifen meist viele Stellen zu. Prüft die Klasse selbst, reicht eine Prüfung; sonst müsste jeder Aufrufer prüfen, und einer vergisst es.
- Eine Klasse wird abstrakt, wenn es kein Objekt „an sich“ von ihr geben soll. Meist kann sie dann mindestens eine Methode nicht sinnvoll selbst umsetzen und gibt sie nur als abstrakte Methode vor.
- Bei Polymorphie zählt die tatsächliche Klasse des Objekts, nicht der Typ der Variablen. Deshalb kann man eine Liste vom Typ der Oberklasse oder des Interface durchlaufen, ohne nach der Art zu unterscheiden.
- Wie die Methoden der Unterklassen ausprogrammiert werden und wie ein Setter einen abgelehnten Wert meldet (Ausnahmen), gehört zu anderen Stichpunkten.

**Typische Missverständnisse:**
- Viele denken, Polymorphie sei dasselbe wie Überladen. Richtig ist: Polymorphie beruht auf dem Überschreiben in verschiedenen Klassen, und die Auswahl fällt erst zur Laufzeit.
- Viele denken, eine Unterklasse müsse jede geerbte Methode neu schreiben. Richtig ist: Sie überschreibt nur, was bei ihr anders ist – abstrakte Methoden der Oberklasse muss eine konkrete Unterklasse aber immer umsetzen.

**Fachwörter:**
- Kapselung: Attribute private, Zugriff nur über Methoden
- Oberklasse: enthält das Gemeinsame, wird vererbt
- abstrakte Methode: nur vorgegeben, Unterklasse muss sie umsetzen
- Interface: legt (klassisch) Methodensignaturen ohne Umsetzung fest
- Polymorphie: gleiche Methode, je Klasse anderes Verhalten
- dynamisches Binden: Auswahl der Umsetzung zur Laufzeit
- Überschreiben: Unterklasse setzt geerbte Methode neu um
- statische Fabrikmethode: erzeugt je nach Typ das passende Objekt

**So fragt die IHK:**
- Das Thema kam in drei Prüfungen vor, jeweils als Teil einer größeren Aufgabe. Typisch ist: Eine Klasse mit Typ-Attribut und Fallunterscheidungen ist gegeben, weitere Typen sind geplant, ein Kollege rät zu Polymorphie.
- „Erläutern Sie den Begriff Polymorphie“ brachte 4 Punkte. Gezählt wurden gleiche Signatur in verschiedenen Klassen, erneute Implementierung, Entscheidung zur Laufzeit und dynamisches Binden. Dieses Wissen steht nicht im Aufgabentext.
- „Erstellen Sie ein UML-Klassendiagramm für den polymorphen Ansatz“ brachte 9 Punkte. Die Aufgabe gab Hinweise: abstrakt machen, Typ-Attribut entfernen, abstrakte Methoden überschreiben, statische Fabrikmethode. Die Punkte verteilten sich auf abstrakte Klasse, Fabrikmethode (2), Vererbung, abgeleitete Klassen (3) und überschriebene Methoden (2).
- Außerdem gab es „zwei Merkmale einer abstrakten Klasse im Vergleich zu Interfaces und gewöhnlichen Klassen erläutern“ (6 Punkte). Beim Observer-Muster war die Realisierungsbeziehung zu erläutern: Die Methode muss überschrieben werden, und dank Polymorphie läuft je Objekt die eigene Fassung.
- Operatoren: erläutern, erstellen, ergänzen, begründen. Kapselung, Sichtbarkeit, Überladen, Unterklassen-Konstruktor und Mehrfachvererbung wurden nicht eigens gefragt, stecken aber in den geprüften Aufgaben.

**Fallen:**
- Bei Kapselung nur „Attribute private machen“ sagen, ohne die beiden Gründe (Prüfung in der Klasse, Austauschbarkeit ohne Änderung beim Aufrufer).
- Vererbung nur einsetzen, um Code mitzunehmen, obwohl die Unterklasse keine Art der Oberklasse ist.
- Gemeinsames in den Unterklassen doppelt stehen lassen.
- Im Konstruktor der Unterklasse geerbte Attribute direkt zuweisen, den Aufruf der Oberklasse erst nach den eigenen Zuweisungen schreiben oder einen geerbten Wert im Aufruf vergessen.
- Abstrakte Klasse und Interface vertauschen oder bei der abstrakten Klasse „keine Objekte erzeugbar“ vergessen.
- Ein Merkmal nennen, ohne es auf den Fall zu beziehen; das kostet bei „erläutern“ und „begründen“ Punkte.
- Bei Mehrfachvererbung nur den Begriff nennen, ohne Namenskonflikt und ohne die Lösung über Interfaces.
- Überladen und Überschreiben vertauschen.
- Polymorphie nur mit „ein Objekt hat viele Formen“ erklären, ohne Laufzeitbezug und ohne das Fachwort dynamisches Binden.
- Im Diagramm die Pfeilspitze an die Unterklasse setzen oder eine Unterklasse als Rückgabetyp der Fabrikmethode angeben.

**Material:**
Notationsregeln, nach denen das Klassendiagramm des polymorphen Entwurfs geprüft wird:
- Attribut: `- name : Typ`. Methode: `+ name(parameter : Typ) : Rückgabetyp`. Sichtbarkeit: `+` public, `-` private, `#` protected, `~` package.
- Oberklasse: mit `{abstract}` gekennzeichnet (oder Name kursiv). Das Typ-Attribut ist entfernt, die gemeinsamen Attribute bleiben oben.
- Abstrakte Methoden: in der Oberklasse mit `{abstract}` (oder kursiv).
- Fabrikmethode: in der Oberklasse, mit `{static}` (oder unterstrichen), Parameter für den Typ, Rückgabetyp ist die abstrakte Oberklasse. Weitere Parameter sind erlaubt.
- Unterklassen: je Typ eine. Jede führt die überschriebenen Methoden mit gleicher Signatur erneut auf. Eigene Attribute stehen nur dort.
- Vererbung: durchgezogene Linie mit hohlem Dreieck an der Oberklasse. Die Linien dürfen zusammengeführt sein.
- Konstruktoren dürfen fehlen oder zusätzlich eingetragen sein.
