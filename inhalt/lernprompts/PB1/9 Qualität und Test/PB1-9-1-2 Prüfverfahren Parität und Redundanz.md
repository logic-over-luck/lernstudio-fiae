Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Qualität und Test › Qualität sichern und Software testen › Prüfverfahren: Parität und Redundanz

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

## Stoff: Prüfverfahren: Parität und Redundanz

Ziel: Paritätsbits bestimmen und deuten und Redundanz als Prüfverfahren anwenden. Redundanz heißt hier gewollte Prüfinformation, nicht die unerwünschte Datenredundanz aus PB1-6.

Das muss ich können:

### K1 – Paritätsbit bei gerader und ungerader Parität (Stufe 3 Anwenden)
Du kannst ein Paritätsbit bestimmen: bei gerader Parität so ergänzen, dass die Anzahl der Einsen gerade ist, bei ungerader Parität so, dass sie ungerade ist.

Erklärung:
Das Paritätsbit ist ein **zusätzliches** Bit. Paritätsbit bestimmen – Einsen zählen, das Paritätsbit zählt mit:
- **gerade Parität:** Bit so setzen, dass die Anzahl der Einsen **gerade** ist
- **ungerade Parität:** so, dass sie **ungerade** ist
Beispiel `1011001` (4 Einsen): gerade → `0`, ungerade → `1`.

### K2 – Paritätsbit: was es erkennt und was nicht (Stufe 2 Verstehen)
Du kannst erklären, dass ein Paritätsbit einen einzelnen Bitfehler erkennt, ihn aber nicht findet oder berichtigt, und zwei gleichzeitig gekippte Bits nicht bemerkt.

Erklärung:
Was ein Paritätsbit kann:
- erkennt **ein** gekipptes Bit (Anzahl stimmt nicht mehr)
- findet **nicht**, welches Bit falsch ist, und **berichtigt nicht**
- bemerkt **zwei** gleichzeitig gekippte Bits **nicht** (die Anzahl der Einsen ändert sich um eine gerade Zahl oder gar nicht, die Parität stimmt wieder)

### K3 – Redundanz als Prüfverfahren: Prüfsumme, CRC (Stufe 2 Verstehen)
Du kannst Redundanz als Prüfverfahren erklären: zusätzliche Prüfinformation mitspeichern oder mitsenden, zum Beispiel eine Prüfsumme oder Prüfziffer, die der Empfänger neu berechnet und vergleicht, etwa die Frame Check Sequence (CRC) im Ethernet-Frame.

Erklärung:
**Redundanz als Prüfverfahren** = zusätzliche Prüfinformation, die der Empfänger neu berechnet und vergleicht:
- **Prüfsumme** (z. B. CRC = Cyclic Redundancy Check, ein aus den Daten berechneter Prüfwert; im Ethernet-Frame steht er am Ende als Frame Check Sequence, FCS)
- **Prüfziffer** (z. B. bei IBAN, ISBN)
Stimmt der Vergleich nicht, wurden die Daten bei der Übertragung, Speicherung oder Eingabe verfälscht – die Prüfziffer einer IBAN fängt z. B. Tippfehler ab. Achtung: nicht verwechseln mit unerwünschter **Datenredundanz** in Tabellen (PB1-6).

## Lehrnotiz: Prüfverfahren: Parität und Redundanz

**Aufteilung:**
- Paritätsbit bestimmen: K1
- Was ein Paritätsbit erkennt und was nicht: K2
- Redundanz als Prüfverfahren, mit dem Paritätsbit als einfachster Form: K3

**Schon geprüft:** Noch nicht geprüft: K1–K3

**Kerngedanken:**
- Das Paritätsbit ist ein zusätzliches Bit, und gezählt wird die Gesamtzahl der Einsen einschließlich dieses Bits. Faustregel: Ist die Anzahl in den Datenbits schon so, wie sie sein soll, ist das Paritätsbit 0, sonst 1.
- Der Empfänger kennt den richtigen Wert nicht, er zählt nur die Einsen nach. Kippt ein Bit, ändert sich die Anzahl um 1, und die Parität stimmt nicht mehr. Kippen zwei Bits, ändert sie sich um 0 oder um 2, also um eine gerade Zahl, und die Parität stimmt wieder.
- Berichtigen kann der Empfänger nicht, weil er nur weiß, dass die Anzahl falsch ist, aber nicht, an welcher Stelle.
- Redundanz heißt hier: Information, die für den Inhalt selbst nicht nötig ist und nur mitgeschickt wird, damit Fehler auffallen. Das Paritätsbit ist ihre einfachste Form, Prüfsumme und Prüfziffer arbeiten nach demselben Prinzip.

**Typische Missverständnisse:**
- Viele denken, bei gerader Parität sei das Paritätsbit 1 oder bei einer geraden Anzahl Einsen komme eine 1 dazu; richtig ist: Das Bit macht die Gesamtzahl passend, und bei schon gerader Anzahl ist es bei gerader Parität 0.
- Viele denken, das Paritätsbit „sichere“ die Daten und das System korrigiere Fehler automatisch; richtig ist: Es zeigt einen einzelnen Bitfehler nur an und berichtigt ihn nicht; die Daten müssen dann als fehlerhaft behandelt werden.

**Fachwörter:**
- Paritätsbit: Zusatzbit, macht die Anzahl der Einsen passend
- gerade Parität: Gesamtzahl der Einsen ist gerade
- ungerade Parität: Gesamtzahl der Einsen ist ungerade
- Bitfehler: ein Bit ist bei der Übertragung gekippt
- Prüfsumme: aus den Daten berechneter Kontrollwert
- Prüfziffer: aus den übrigen Ziffern berechnete Kontrollziffer
- Frame Check Sequence: Prüffeld am Ende des Ethernet-Frames
- Redundanz: zusätzliche, für den Inhalt nicht nötige Information

**So fragt die IHK:**
- In den vorliegenden Prüfungen wurde das Thema noch nicht gefragt. Der Prüfungskatalog nennt unter „Methoden der Qualitätslenkung anwenden“ ausdrücklich „Verschiedene Prüfverfahren, z. B. Parität, Redundanz“.
- Zu erwarten ist eine kurze Teilaufgabe (2–4 Punkte) mit drei möglichen Teilen:
  - ein Paritätsbit zu einer Bitfolge bestimmen („Ermitteln/Ergänzen Sie“),
  - prüfen, ob eine empfangene Folge zur vereinbarten Parität passt,
  - „Erläutern Sie“ zur Grenze des Verfahrens.
- Bei Redundanz genügt meist das Prinzip „zusätzliche Prüfinformation, beim Empfänger neu berechnet und verglichen“ mit einem Beispiel (Prüfsumme/CRC, Prüfziffer, Paritätsbit).
- Wichtig ist die Begründung über die Anzahl der Einsen.

**Fallen:**
- Null Einsen sind eine gerade Anzahl.
- Das Paritätsbit mit der Anzahl der Einsen verwechseln oder beim Prüfen einer empfangenen Folge das Paritätsbit nicht mitzählen.
- Nur das Bit hinschreiben, ohne die gezählten Einsen als Begründung.
- Wo das Paritätsbit steht (vorn oder hinten), legt das jeweilige Verfahren fest. Die Aufgabe muss es angeben.
- Eine empfangene Folge mit passender Parität „richtig“ nennen. Zulässig ist nur: Es wird kein Fehler erkannt.
- Bei der Grenze des Verfahrens nur behaupten statt begründen oder einen der drei Teile weglassen (erkennt einen Fehler, berichtigt nicht, übersieht zwei).
- Bei zwei gekippten Bits erwarten, dass sich die Anzahl der Einsen sichtbar ändert. Sie kann auch gleich bleiben.
- Redundanz nur als „doppelte Information“ beschreiben, ohne den Prüfzweck. Beim Unterschied zur Datenredundanz muss der Zweck beider Arten genannt sein.
- Eine CRC wird nicht von Hand gerechnet. Soll eine Prüfsumme oder Prüfziffer berechnet werden, muss die Rechenregel in der Aufgabe stehen.
