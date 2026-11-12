Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Daten, Masken und Abläufe modellieren › Prozessdarstellungen lesen: EPK und BPMN

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

## Stoff: Prozessdarstellungen lesen: EPK und BPMN

Ziel: Die Sinnbilder von EPK und BPM-Notation aus dem Katalog-Anhang benennen und einen dargestellten Ablauf wiedergeben.

Das muss ich können:

### K1 – Sinnbilder der EPK (Stufe 1 Wiedergeben)
Du kannst die Sinnbilder der EPK aus dem Anhang benennen: Ereignis, Funktion, Organisationseinheit, Objekt, die Konnektoren Und, Exklusives Oder, Offenes Oder sowie Kontrollfluss, Informations- bzw. Materialfluss und Zuordnung.

Erklärung:
**EPK** (ereignisgesteuerte Prozesskette):
- **Ereignis:** **Sechseck** – ein Zustand, z. B. „Bestellung ist eingegangen“.
- **Funktion:** **Rechteck mit abgerundeten Ecken** – eine Tätigkeit, z. B. „Bestellung prüfen“.
- **Organisationseinheit:** **Ellipse mit senkrechtem Strich** links – wer die Funktion ausführt.
- **(Informations-)Objekt:** **Rechteck** – z. B. ein Dokument oder eine Datenbank.
**Konnektoren** (Kreise):
- **Und** (∧): alle Zweige
- **Exklusives Oder** (XOR): genau ein Zweig
- **Offenes Oder** (∨): mindestens einer, auch mehrere
Ein Konnektor teilt den Ablauf oder führt ihn wieder zusammen; den Wechsel von Ereignis und Funktion unterbricht er nicht. Nach einem Ereignis darf nur mit Und geteilt werden, nicht mit XOR oder Oder – ein Ereignis entscheidet nichts.
**Verbindungen:**
- **Kontrollfluss** (Pfeil): Reihenfolge von Ereignissen, Funktionen und Konnektoren
- **Informations-** bzw. **Materialfluss** (im Katalog-Anhang zwei gegenläufige Pfeile zwischen Funktion und Objekt): Daten lesen/schreiben bzw. Material verbrauchen
- **Zuordnung** (Linie): welche Organisationseinheit oder welches Objekt zur Funktion gehört

### K2 – Grundregel der EPK (Stufe 2 Verstehen)
Du kannst die Grundregel der EPK erklären: Ereignisse und Funktionen wechseln sich ab; der Ablauf beginnt und endet mit einem Ereignis.

Erklärung:
- **Ereignisse und Funktionen wechseln sich ab:** Auf ein Ereignis folgt eine Funktion, auf eine Funktion ein Ereignis.
- Der Ablauf **beginnt und endet mit einem Ereignis**.
Beispiel: „Bestellung ist eingegangen“ (Ereignis) → „Bestellung prüfen“ (Funktion) → „Bestellung ist geprüft“ (Ereignis).

### K3 – Sinnbilder der BPM-Notation (Stufe 1 Wiedergeben)
Du kannst die Sinnbilder der BPM-Notation aus dem Anhang benennen: Aufgabe, Sequenzfluss, Nachrichtenfluss, Datenobjekt, Start-, Zwischen- und Endereignis, Nachrichten-, Zeit- und Fehlerereignis (Message, Timer, Exception), exklusives, inklusives und paralleles Gateway, Pool mit Lanes.

Erklärung:
**BPMN** (Business Process Model and Notation):
- **Aufgabe:** Rechteck mit abgerundeten Ecken.
- **Startereignis:** Kreis mit dünnem Rand; **Zwischenereignis:** doppelter Rand; **Endereignis:** dicker Rand.
- **Ereignistypen** im Kreis: **Briefumschlag** = Nachricht (Message), **Uhr** = Zeit (Timer), **Blitz** = Fehler (Exception).
- **Datenobjekt:** Dokument-Rechteck mit umgeknickter Ecke – Daten, die eine Aufgabe liest oder erzeugt.
- **Sequenzfluss:** durchgezogene Linie mit ausgefüllter Spitze – Reihenfolge innerhalb eines Pools.
- **Nachrichtenfluss:** gestrichelt, **kleiner offener Kreis am Anfang**, offene Spitze – zwischen Pools.
- **Gateways** (Rauten): **exklusiv** (× oder leer) – genau ein Weg; **inklusiv** (○) – ein oder mehrere; **parallel** (+) – alle gleichzeitig.
- **Pool:** Rahmen für einen Beteiligten (z. B. ein Unternehmen); **Lane:** Bahn darin für eine Rolle oder Abteilung.

### K4 – Ablauf und Zuständigkeiten im Prozessdiagramm (Stufe 2 Verstehen)
Du kannst einen dargestellten Ablauf beschreiben, auch wer welchen Schritt ausführt.

Erklärung:
- Folge den Pfeilen **der Reihe nach** vom Start bis zum Ende.
- Beschreibe bei jeder Verzweigung, **welche Bedingung** zu welchem Weg führt.
- Nenne, **wer** den Schritt ausführt: in der EPK die mit der Funktion verbundene **Organisationseinheit**, in BPMN die **Lane** bzw. der **Pool**, in dem die Aufgabe steht.
Beispiel: „Der Vertrieb prüft die Bestellung. Ist sie vollständig, packt das Lager die Ware, sonst fragt der Vertrieb beim Kunden nach.“

## Lehrnotiz: Prozessdarstellungen lesen: EPK und BPMN

**Aufteilung:**
- EPK, Grundregel und Sinnbilder: K2, K1 – die Regel zuerst, dann die übrigen Formen
- BPMN, Sinnbilder: K3
- Einen Ablauf mit Zuständigen beschreiben: K4 – einmal an einer EPK, einmal an einem BPMN-Diagramm

**Schon geprüft:** Noch nicht geprüft: K1–K4

**Kerngedanken:**
- Ereignis und Funktion erkennt man auch an der Formulierung: Ein Ereignis ist ein Zustand („ist eingegangen“), eine Funktion eine Tätigkeit („prüfen“). Ein Ereignis führt niemand aus.
- Konnektoren unterbrechen den Wechsel von Ereignis und Funktion nicht. Eine Entscheidung trifft immer eine Funktion: Nach einer Funktion darf ein XOR- oder Oder-Konnektor verzweigen, nach einem Ereignis nicht – ein Ereignis entscheidet nichts. Mit Und darf nach beidem verzweigt werden. Zusammenführen dürfen alle Konnektoren auch nach Ereignissen.
- Ein Konnektor oder Gateway teilt den Ablauf. Laufen die Zweige wieder zusammen, dann über einen Konnektor oder ein Gateway derselben Art; ein Zweig darf aber auch in einem eigenen Endereignis enden. Bei Und und beim parallelen Gateway geht es nach der Zusammenführung erst weiter, wenn alle Zweige erledigt sind.
- Beide Notationen haben dieselben drei Verzweigungen unter anderen Namen: Und entspricht parallel, Exklusives Oder entspricht exklusiv, Offenes Oder entspricht inklusiv. In der EPK stehen sie im Kreis, in BPMN in der Raute.

**Typische Missverständnisse:**
- Viele denken, bei Und werde einer der Wege gewählt; richtig ist, dass alle Zweige ausgeführt werden.
- Viele denken, ein Zwischenereignis mit Uhr sei eine Aufgabe; richtig ist, dass dort gewartet wird, bis der Zeitpunkt erreicht ist.
- Viele denken, Pool und Lane seien dasselbe; richtig ist, dass der Pool ein Beteiligter ist und die Lane eine Rolle oder Abteilung darin.

**Fachwörter:**
- Ereignis: ein Zustand, in der EPK ein Sechseck
- Funktion: eine Tätigkeit in der EPK
- Organisationseinheit: wer die Funktion ausführt
- Konnektoren: Verzweigungen der EPK im Kreis
- Gateways: Verzweigungen in BPMN als Raute
- Sequenzfluss: Reihenfolge innerhalb eines Pools
- Nachrichtenfluss: Nachricht zwischen zwei Pools
- Lane: Bahn für eine Rolle oder Abteilung

**So fragt die IHK:**
- Zu diesem Stichpunkt gibt es keine echte Aufgabe. Der Prüfungskatalog führt EPK und BPMN im Anhang „Notationen“ mit genau den Sinnbildern des Stoffs.
- Zu erwarten ist ein vorgegebenes Diagramm aus der Ausgangssituation. Daran benennt man Sinnbilder (wenige Punkte), beschreibt den Ablauf mit Zuständigkeiten (mehrere Punkte) oder ergänzt eine Stelle, etwa das passende Gateway. Eine Punkteverteilung ist nicht belegt.
- Operatoren: benennen, beschreiben, ergänzen, erläutern. Selbst zeichnen ist nicht zu erwarten.
- Bei einer Ablaufbeschreibung zählt, dass Reihenfolge, Bedingungen und Zuständige stimmen, nicht die Formulierung.

**Fallen:**
- Bei einer Kette nur die Mitte prüfen: Auch das erste und das letzte Element müssen Ereignisse sein.
- Ein Ereignis als Tätigkeit formulieren.
- Beim Beschreiben eines Ablaufs die Zuständigen weglassen oder an der Verzweigung die Bedingung nicht nennen.
- Bei Und oder beim parallelen Gateway „entweder – oder“ sagen.
- Beim Beschreiben ein Zwischenereignis übergehen, an dem gewartet wird.
- Eine Zusammenführung übergehen und nicht sagen, dass erst nach beiden Zweigen weitergemacht wird.
- Ein Diagramm für falsch halten, weil ein Zweig ohne Zusammenführung in einem eigenen Endereignis endet.
- Gleiche Form, anderer Name: Das Rechteck mit abgerundeten Ecken heißt in der EPK Funktion, in BPMN Aufgabe; das einfache Rechteck der EPK ist ein Objekt.
- Bei einem BPMN-Ereignis nur den Rand oder nur das Zeichen benennen; der volle Name hat beides, zum Beispiel Start und Nachricht.

**Material:**
Diagramme im Chat als Text zeigen, damit der Lernende die Sinnbilder selbst benennen muss:
- Die Form nennen, nicht den Namen: „Sechseck“, „Rechteck mit abgerundeten Ecken“, „Ellipse mit senkrechtem Strich“, „Kreis mit dünnem Rand und Briefumschlag“, „Raute mit +“.
- Hinter jede Form die Beschriftung setzen; Kontrollfluss und Sequenzfluss als Pfeil „→“ oder „↓“.
- EPK: Linie ohne Pfeil zur Organisationseinheit, Pfeil zwischen Funktion und Objekt; Konnektoren als „(XOR)“, „(∧)“, „(∨)“.
- BPMN: Pools und Lanes als Überschriften, darunter die Elemente der Lane; Nachrichtenfluss ausschreiben („gestrichelte Linie mit offenem Kreis am Anfang zum Pool …“).
