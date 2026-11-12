Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Schnittstellen und Datenaustausch › Datenaustausch und Schnittstellen › XML: wohlgeformt, gültig, DTD und Schema

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

## Stoff: XML: wohlgeformt, gültig, DTD und Schema

Ziel: XML-Dokumente erstellen und lesen, Zweck von DTD und Schema erläutern, Fehler finden und einordnen und die Grenzen der Schemavalidierung erklären.

Das muss ich können:

### K1 – XML-Dokument: Aufbau und Regeln (Stufe 3 Anwenden)
Du kannst ein XML-Dokument nach vorgegebener Struktur erstellen und lesen: Prolog, genau ein Wurzelelement, Elemente mit öffnendem und schließendem Tag, Attribute im öffnenden Tag, korrekte Verschachtelung.

Erklärung:
Aufbau:
- **Prolog**: `<?xml version="1.0" encoding="UTF-8"?>`
- genau **ein Wurzelelement**
- Elemente mit öffnendem und schließendem Tag: `<name>Weingut</name>`; ein leeres Element darf verkürzt geschrieben werden: `<ort/>` statt `<ort></ort>`
- **Attribute** im öffnenden Tag: `<preis waehrung="EUR">12.50</preis>`
- **korrekt verschachtelt**: zuletzt geöffnet, zuerst geschlossen

### K2 – Zweck von DTD und XML-Schema (Stufe 2 Verstehen)
Du kannst erläutern, wofür eine DTD oder ein XML-Schema (XSD) benötigt wird: Sie legt verbindlich fest, welche Elemente und Attribute in welcher Reihenfolge und Schachtelung vorkommen dürfen, sodass alle Dokumente einer Art gleich aufgebaut sind.

Erklärung:
**DTD** bzw. **XML-Schema (XSD)** legen verbindlich fest:
- welche **Elemente und Attribute** vorkommen dürfen
- in welcher **Reihenfolge** und **Schachtelung**, wie oft
- (XSD zusätzlich) welche **Datentypen**
Zweck: Alle Dokumente einer Art sind **gleich aufgebaut** und lassen sich automatisch prüfen und verarbeiten.
Welche DTD gilt, sagt im Dokument die Zeile `<!DOCTYPE wurzel SYSTEM "datei.dtd">`: erst der Name des Wurzelelements, dann die externe Datei mit den Regeln.

### K3 – XML: wohlgeformt gegen gültig (Stufe 2 Verstehen)
Du kannst wohlgeformt (die XML-Regeln sind eingehalten: jedes Element geschlossen, richtig verschachtelt) und gültig (zusätzlich entspricht das Dokument der DTD bzw. dem Schema) erläutern.

Erklärung:
- **wohlgeformt:** die allgemeinen XML-Regeln sind eingehalten (jedes Element geschlossen, richtig verschachtelt, ein Wurzelelement, Attributwerte in Anführungszeichen, Groß-/Kleinschreibung von öffnendem und schließendem Tag gleich – `<Name>…</name>` ist ein Fehler)
- **gültig:** wohlgeformt **und** passend zur DTD bzw. zum Schema
Merke: Jedes gültige Dokument ist wohlgeformt, aber nicht umgekehrt.

### K4 – Fehler in XML mit DTD finden (Stufe 3 Anwenden · in der Prüfung vorgegeben: DTD und XML-Dokument mit Zeilennummern)
Du kannst in einem XML-Dokument mit gegebener DTD Fehler finden und mit Zeilennummer, Fehler und verletzter Eigenschaft angeben, zum Beispiel ein fehlendes schließendes Tag (Wohlgeformtheit) oder ein Element an falscher Stelle (Gültigkeit).

Erklärung:
DTD lesen:
- `<!ELEMENT kurs (bezeichnung, referententeam)>`: Komma = genau diese Reihenfolge; `a | b` = entweder a oder b
- hinter einem Element: `?` = 0- oder 1-mal, `*` = beliebig oft (auch 0-mal), `+` = mindestens 1-mal, ohne Zeichen = genau 1-mal; `(#PCDATA)` = nur Text
- `<!ATTLIST kurs id ID #REQUIRED kurstyp CDATA #IMPLIED>`: `kurs` hat die Attribute `id` (Pflicht; `ID` = der Wert muss im ganzen Dokument eindeutig sein) und `kurstyp` (optional; `CDATA` = beliebiger Text); Attribute stehen im öffnenden Tag, nicht als eigene Elemente
Fehlersuche Zeile für Zeile:
- fehlendes oder falsch geschriebenes **schließendes Tag** (z. B. `<kurs>` statt `</kurs>` oder fehlendes `>`), falsche Verschachtelung → verletzt **Wohlgeformtheit**
- Element an **falscher Stelle** (falsche Reihenfolge oder falsches Elternelement), fehlendes Pflichtelement, nicht erlaubtes Attribut, fehlendes Pflichtattribut (`#REQUIRED`), Element, das die DTD **nicht deklariert** (z. B. `<adresse>`), Angabe als **Element statt als Attribut** (z. B. `<kurstyp>`) → verletzt **Gültigkeit**
Antwort im Format: **Zeile – Fehler – verletzte Eigenschaft**.

### K5 – Grenzen der Schemavalidierung (Stufe 4 Beurteilen)
Du kannst beurteilen, ob eine Schemavalidierung für Daten aus einer Schnittstelle ausreicht: Sie prüft nur Aufbau, Pflichtfelder und Datentypen, aber keine logischen Fehler wie einen aus Bruttowerten berechneten Nettobetrag; dafür sind zusätzlich inhaltliche Plausibilitätsprüfungen und Unit-Tests nötig.

Erklärung:
Schemavalidierung prüft **nur**:
- Aufbau und Reihenfolge
- Pflichtfelder
- Datentypen
Sie erkennt **keine logischen Fehler**, z. B. einen Nettobetrag, der aus Bruttowerten berechnet wurde, oder eine Summe, die nicht stimmt.
Deshalb zusätzlich: **inhaltliche Plausibilitätsprüfungen** und **Unit-Tests** (automatische Tests, die eine Funktion mit festen Beispielwerten prüfen).

## Lehrnotiz: XML: wohlgeformt, gültig, DTD und Schema

**Aufteilung:**
- XML-Dokument aufbauen und lesen: K1
- Wozu DTD und Schema: K2
- Wohlgeformt und gültig: K3
- Fehler mit der DTD finden: K4
- Grenzen der Schemaprüfung: K5

**Schon geprüft:** In Prüfungen: K2 (2022W), K3 (2022W), K4 (2022W), K5 (2025W) · Noch nicht geprüft: K1

**Kerngedanken:**
- Eine DTD ist die Absprache in maschinenlesbarer Form. Eine Beispieldatei zeigt nur einen Fall, und eine mündliche Absprache kann kein Programm prüfen.
- Die Zeile `<!DOCTYPE wurzel SYSTEM "datei.dtd">` im Dokument verweist auf die externe DTD. Die IHK-Aufgabe geht von diesem Verweis aus.
- Fehlersuche in zwei Durchgängen: erst alle Tag-Paare abhaken (Wohlgeformtheit), dann jedes Element gegen seine DTD-Zeile und die `ATTLIST` halten (Gültigkeit).
- Das Schema sieht nur die Form. Formale Fehler (Pflichtfeld fehlt, Text im Zahlenfeld) findet es. Inhaltliche Fehler (Lieferdatum vor Bestelldatum, falsche Summe) findet es nicht, denn auch die falsche Summe ist eine gültige Zahl.

**Typische Missverständnisse:**
- Viele denken, eine DTD sei ein Beispiel oder eine Vorlage; richtig ist: Sie ist die verbindliche Festlegung für alle Dokumente einer Art.
- Viele denken, ein Dokument, das die Schemaprüfung besteht, sei inhaltlich richtig; richtig ist: Geprüft ist nur die Form.

**Fachwörter:**
- Prolog: erste Zeile mit XML-Version und Zeichensatz
- Wurzelelement: das eine Element, das alles umschließt
- Attribut: Name-Wert-Paar im öffnenden Tag
- DTD: verbindliche Festlegung des Dokumentaufbaus
- XML-Schema (XSD): wie DTD, zusätzlich mit Datentypen
- wohlgeformt: allgemeine XML-Regeln sind eingehalten
- gültig: wohlgeformt und passend zu DTD/Schema
- Plausibilitätsprüfung: prüft, ob ein Wert inhaltlich stimmen kann

**So fragt die IHK:**
- Eine Aufgabe (13 Punkte) mit Verweis auf eine externe DTD hatte drei Teile.
- Erster Teil: „Erläutern Sie, wofür diese benötigt wird“ (3 Punkte).
- Zweiter Teil: „wohlgeformt“ und „gültig“ in einer Tabelle erläutern (4 Punkte, je 2). Bei „gültig“ zählt „setzt Wohlgeformtheit voraus“.
- Dritter Teil: In einem Dokument mit Zeilennummern stecken mindestens sechs Fehler; Fehler sind als Zeile – Beschreibung – Eigenschaft einzutragen (6 Punkte, je 2 pro vollständiger Zeile). Typische Fehler sind ein fehlendes schließendes Tag, ein fehlender Schrägstrich, ein nicht deklariertes Element, Element statt Attribut und falsche Reihenfolge.
- Eine andere Prüfung zeigte eine XML-Rechnung mit markierter Fehlerstelle. Zu erklären war, weshalb eine ausschließliche Schemavalidierung unzureichend ist (6 Punkte: 3 für den logischen Fehler, 3 für „Schema prüft nur die Struktur“). Unit-Tests waren für die volle Punktzahl nicht nötig.
- Zum Erstellen eines XML-Dokuments gibt es keine echte Aufgabe; es leitet sich aus dem Prüfungskatalog ab.

**Fallen:**
- Erstellen: Den Prolog vergessen, mehrere Elemente ganz oben ohne gemeinsame Wurzel schreiben oder Tags überkreuzt schließen.
- Erstellen: Eine Angabe, die laut Vorgabe Attribut ist, als eigenes Element schreiben.
- Erstellen: Mehrere gleichartige Werte in ein Element packen statt je Wert ein eigenes Element.
- Erstellen: Für ein optionales Element, das nicht vorkommt, einen Platzhalter wie „kein“ schreiben, statt es wegzulassen.
- Ergänzen: Einen neuen Eintrag an eine Stelle setzen, die der Reihenfolge der DTD widerspricht.
- Zweck: Nur aufzählen, was die DTD festlegt, ohne den Nutzen (gleicher Aufbau, automatische Prüfung).
- Begriffe: „Wohlgeformt“ nur mit „Regeln eingehalten“ erklären, ohne mindestens zwei Regeln zu nennen.
- Begriffe: „Gültig“ als „fehlerfrei“ erklären, ohne Bezug zur DTD und ohne die Voraussetzung Wohlgeformtheit.
- Fehlersuche: Nur die Zeilennummer nennen. Ohne Beschreibung und Eigenschaft gibt es höchstens einen Teilpunkt.
- Fehlersuche: Ein fehlendes optionales Element (`?` oder `*`) als Fehler melden.
- Fehlersuche: Einen fehlenden Prolog als Verstoß gegen die Wohlgeformtheit melden; die XML-Deklaration ist dafür nicht vorgeschrieben.
- Fehlersuche: Ein fehlendes Pflichtattribut übersehen, weil nur die Elemente geprüft werden und nicht die `ATTLIST`.
- Fehlersuche: Bei `a | b` beides zusammen oder keines von beiden für erlaubt halten.
- Fehlersuche: Einen inhaltlichen Fehler (etwa eine falsche Summe) als Fehler gegen Wohlgeformtheit oder Gültigkeit melden.
- Schemaprüfung: Als Antwort „XSD ist besser als DTD“ schreiben. Auch ein XSD mit Datentypen erkennt keinen logischen Fehler.
- Schemaprüfung: Nur allgemein urteilen, statt den logischen Fehler im vorliegenden Dokument zu benennen (nachrechnen, Daten vergleichen).
