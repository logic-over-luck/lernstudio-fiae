Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › UML-Diagramme › Aktivitätsdiagramm

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

## Stoff: Aktivitätsdiagramm

Ziel: Einen beschriebenen Ablauf mit Entscheidungen und parallelen Zweigen in ein Aktivitätsdiagramm übertragen.

Das muss ich können:

### K1 – Grundelemente des Aktivitätsdiagramms (Stufe 3 Anwenden · in der Prüfung vorgegeben: Notationshilfe)
Du kannst Startknoten, Aktion, Entscheidung mit Bedingungen in eckigen Klammern, Zusammenführung und Endknoten darstellen.

Erklärung:
- **Startknoten:** ausgefüllter Kreis
- **Aktion:** Rechteck mit abgerundeten Ecken, z. B. „Bestellung prüfen“
- **Entscheidung:** Raute mit einem Eingang und mehreren Ausgängen
- **Bedingungen** in eckigen Klammern an den ausgehenden Kanten (Kante = Pfeil zum nächsten Element), z. B. `[betrag > 100]` und `[sonst]` – sie müssen sich gegenseitig ausschließen und zusammen alle Fälle abdecken (`[x < 0]` mit `[x >= 0]`, nicht mit `[x > 0]`)
- **Zusammenführung:** Raute mit mehreren Eingängen und einem Ausgang
- **Endknoten:** Kreis mit ausgefülltem Kreis darin
- **Konnektor** (steht in der Notationshilfe des Prüfungskatalogs): Kreis mit Buchstabe; er setzt eine Kante an anderer Stelle fort, wenn der Pfeil sonst quer durchs Diagramm liefe
Arbeite immer mit der Notationshilfe aus der Aufgabe.

### K2 – Ablauf mit Verzweigung als Aktivitätsdiagramm (Stufe 3 Anwenden · in der Prüfung vorgegeben: Notationshilfe und Vorlage)
Du kannst einen in Worten beschriebenen Ablauf mit Verzweigung in einem Aktivitätsdiagramm abbilden.

Erklärung:
Geh den Text Satz für Satz durch:
- **Start** → erste **Aktion**
- „Falls …“ → **Entscheidung** mit Bedingungen in eckigen Klammern
- je Zweig die passende **Aktion**
- die Zweige wieder **zusammenführen**
- → **Ende**
Beispiel: „Ist der Betrag über 100 €, muss der Teamleiter freigeben, sonst wird direkt bestellt.“ → Entscheidung `[betrag > 100]` → „Freigabe einholen“; `[sonst]` direkt weiter; beide zur Zusammenführung → „Bestellen“.

### K3 – Wiederholung als Rücksprung (Stufe 3 Anwenden)
Du kannst eine Wiederholung als Rücksprung von einer Entscheidung darstellen.

Erklärung:
Eine Wiederholung zeichnest du als **Rücksprung**:
- Eine Kante der Entscheidung führt **zurück** zu einer früheren Aktion (meist über eine Zusammenführung).
- Die andere Kante **verlässt** die Schleife.
Beispiel: „Passwort eingeben“ → Entscheidung `[falsch]` zurück zu „Passwort eingeben“, `[richtig]` weiter zu „Anmelden“.

### K4 – Parallele Abläufe mit Teilung und Synchronisation (Stufe 3 Anwenden)
Du kannst parallele Abläufe mit Teilung und Synchronisation (Balken) darstellen.

Erklärung:
- **Teilung:** ein **dicker Balken** mit **einem Eingang** und **mehreren Ausgängen** – ab hier laufen die Zweige gleichzeitig.
- **Synchronisation:** ein Balken mit **mehreren Eingängen** und **einem Ausgang** – es geht erst weiter, wenn **alle** Zweige angekommen sind.
Unterschied zur Zusammenführung (Raute): Dort reicht es, wenn **ein** Zweig ankommt.
Beispiel: Nach „Bestellung angenommen“ parallel „Ware packen“ und „Rechnung erstellen“, danach „Versenden“.

### K5 – Schwimmbahnen für Beteiligte (Stufe 3 Anwenden)
Du kannst Schwimmbahnen verwenden, um Aktionen verschiedenen Beteiligten zuzuordnen.

Erklärung:
Schwimmbahnen teilen das Diagramm in **Bahnen – eine je Beteiligtem**, z. B. Kunde, Vertrieb, Lager.
Jede Aktion steht in der Bahn **dessen, der sie ausführt**. So sieht man sofort, wer wofür zuständig ist und wo der Ablauf von einem zum anderen wechselt.

### K6 – Endknoten gegenüber Ablaufende (Stufe 2 Verstehen)
Du kannst Endknoten (beendet alle Abläufe) und Ablaufende (beendet nur den eigenen Zweig) unterscheiden.

Erklärung:
- **Endknoten** (Kreis mit ausgefülltem Kreis darin): beendet den **gesamten** Ablauf – auch alle parallelen Zweige.
- **Ablaufende** (Kreis mit X): beendet **nur den eigenen Zweig**, die anderen laufen weiter.

### K7 – Zusammenführung gegenüber Synchronisation (Stufe 2 Verstehen)
Du kannst Zusammenführung und Synchronisation im Aktivitätsdiagramm unterscheiden: Nach einer Zusammenführung (Raute) geht der Ablauf weiter, sobald einer der alternativen Zweige ankommt; eine Synchronisation (Balken) wartet, bis alle parallelen Zweige angekommen sind.

Erklärung:
Beide führen Zweige wieder zusammen, aber mit verschiedener Bedeutung.
- **Zusammenführung (Raute)** gehört zur **Entscheidung**: Von den alternativen Zweigen läuft ohnehin nur einer – sobald er ankommt, geht es weiter (**ODER**).
- **Synchronisation (Balken)** gehört zur **Teilung**: Die parallelen Zweige laufen gleichzeitig – weiter geht es erst, wenn **alle** angekommen sind (**UND**).
Beispiel: „Rechnung bezahlen“ und „Bestellung archivieren“ laufen parallel; versandt wird erst, wenn beides erledigt ist – also Synchronisationsbalken, keine Raute.

## Lehrnotiz: Aktivitätsdiagramm

**Aufteilung:**
- Grundelemente und ein Ablauf mit Verzweigung: K1, K2
- Wiederholung: K3
- Gleichzeitige Abläufe und der Unterschied zwischen Raute und Balken: K4, K7
- Endknoten oder Ablaufende: K6
- Schwimmbahnen: K5 – zum Schluss, weil sie am Ablauf nichts ändern, sondern nur zeigen, wer welche Aktion ausführt

**Schon geprüft:** In Prüfungen: K1 (2025H), K2 (2025H), K4 (2025H) · Noch nicht geprüft: K3, K5–K7

**Kerngedanken:**
- Das Aktivitätsdiagramm zeigt die Reihenfolge eines Ablaufs; wer was mit einem System tut, zeigt das Anwendungsfalldiagramm. Raute und Balken gibt es je zweimal, zum Öffnen und zum Schließen: Was eine Entscheidung trennt, schließt eine Zusammenführung; was eine Teilung trennt, schließt eine Synchronisation.
- Ein Rücksprung deckt beliebig viele Wiederholungen ab. Wer die Aktion stattdessen ein zweites Mal zeichnet, hat nur genau einen weiteren Versuch dargestellt.
- Ein paralleler Zweig, auf den der Rest nicht warten muss, läuft nicht in die Synchronisation, sondern endet mit einem Ablaufende.
- Wer ein Symbol begründen soll, nennt die Folge des falschen Symbols für diesen Ablauf: Eine Raute statt des Balkens ließe weiterlaufen, sobald der erste Zweig fertig ist; ein Endknoten in einem Nebenzweig bräche auch alle anderen Zweige ab. „Weil es parallel ist“ reicht nicht.

**Typische Missverständnisse:**
- Viele denken, wo Zweige wieder zusammenlaufen, passe immer eine Raute; richtig ist: Nach einer Teilung steht ein Balken, sonst wird nicht auf alle Zweige gewartet.
- Viele denken, hinter die letzte Aktion eines parallelen Zweigs gehöre ein Endknoten, damit er ein Ende hat; richtig ist: Der Endknoten beendet alles, auch die Zweige, die noch laufen.

**Fachwörter:**
- Aktion: ein einzelner Arbeitsschritt im Ablauf
- Entscheidung: Raute, von der Zweige mit Bedingungen abgehen
- Zusammenführung: Raute, die alternative Zweige wieder vereint
- Teilung: Balken, ab dem Zweige gleichzeitig laufen
- Synchronisation: Balken, der auf alle Zweige wartet
- Endknoten: beendet den gesamten Ablauf
- Ablaufende: beendet nur den eigenen Zweig
- Schwimmbahnen: Bahnen, eine je Beteiligtem

**So fragt die IHK:**
- Echte Aufgabe (2025H, K1, K2, K4), 9 Punkte, „erstellen“: Ein Prozess nach Rechnungseingang ist in sieben Spiegelstrichen beschrieben: automatische Prüfung, bei „nicht ok“ Ablehnung und Ende; sonst Entscheidung nach dem Betrag, darüber eine manuelle Prüfung mit eigener Ablehnung; am Schluss werden zwei Aktionen „gleichzeitig“ ausgeführt. Als Material die Notationshilfe (Startknoten, Endknoten, Ablaufende, Schwimmbahnen, Konnektor, Teilung und Synchronisation, Entscheidung und Zusammenführung) und eine Vorlage, in der nur Startknoten und erste Aktion stehen. Lösungshinweise liegen nicht vor.
- Das Signalwort „gleichzeitig“ verlangt Teilung und Synchronisation mit Balken; zwei Wege, die zur selben Aktion führen, brauchen eine Zusammenführung; jede ausgehende Kante einer Entscheidung trägt ihre Bedingung in eckigen Klammern.
- Der Prüfungskatalog nennt das Aktivitätsdiagramm zweimal: als Mittel, Kontrollstrukturen abzubilden, und als UML-Diagramm mit Notationsanhang (Start, Endknoten, Ablaufende, Aktion, Schwimmbahnen, Teilung und Synchronisation, Entscheidung mit Bedingungen, Zusammenführung, Konnektor).
- Zu erwarten ist daneben wie bei den anderen UML-Aufgaben der Operator „ergänzen“ mit einer weiter ausgefüllten Vorlage, eventuell mit Schleife und Schwimmbahnen.
- Es dürften Symbol, Bedingung in eckigen Klammern und Anschluss der Kanten zählen, nicht die Zeichenqualität.
- Daneben sind kurze Erläuterungen denkbar (Raute gegen Balken, Endknoten gegen Ablaufende).

**Fallen:**
- Bedingungen wählen, die sich überschneiden oder eine Lücke lassen, weil der Grenzwert selbst in keinem Zweig liegt; sicher ist `[sonst]` als zweite Bedingung.
- Bedingungen ohne eckige Klammern an die Kanten schreiben.
- Die Zusammenführung weglassen: beide Zweige direkt in die nächste Aktion führen, jeden Zweig einzeln weiterzeichnen oder jedem Zweig einen eigenen Endknoten geben.
- Den Rücksprung zur Entscheidung statt vor die Aktion führen; dann wird nichts neu getan, sondern endlos dasselbe geprüft.
- Eine Aktion in die Bahn dessen setzen, den sie betrifft, statt in die Bahn dessen, der sie ausführt.
- Bei einer Erläuterung nur das richtige Symbol nennen ohne die Folge, oder nur die Folge ohne das Symbol.

**Material:**
Notationsregeln, nach denen eine Zeichnung geprüft wird (wie der Stoff sie nennt; „üblich“ heißt: nicht durch den Stoff belegt):
- Aktion: Rechteck mit abgerundeten Ecken, darin die Tätigkeit. Sinngemäße Namen gelten.
- Kante: Linie mit Pfeilspitze in Richtung des Ablaufs (üblich).
- Entscheidung: Raute mit einem Eingang und mehreren Ausgängen. An jedem Ausgang steht eine Bedingung in eckigen Klammern; die Bedingungen schließen sich aus und decken zusammen jeden Fall ab.
- Zusammenführung: Raute mit mehreren Eingängen und einem Ausgang, ohne Bedingung.
- Rücksprung: Kante von einer Entscheidung zurück in eine Zusammenführung vor einer früheren Aktion; zwei Kanten direkt in eine Aktion bedeuten in UML „warten auf beide“ und sind darum zu vermeiden. Die andere Kante verlässt die Schleife.
- Teilung: dicker Balken mit einem Eingang und mehreren Ausgängen. Synchronisation: Balken mit mehreren Eingängen und einem Ausgang. Ein Balken darf über Bahngrenzen reichen.
- Schwimmbahnen: Bahnen nebeneinander, jede mit dem Namen eines Beteiligten überschrieben (üblich: senkrecht).
- Nicht bewertet werden Sauberkeit und Anordnung der Zeichnung.
