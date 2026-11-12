Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Fehler finden, Debugging und Unit-Tests › Code prüfen und Fehler beheben › Debugging und Fehlerbehandlung

## So läuft unsere Sitzung

Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 2) und am Ende mein Prüfer. Unten stehen der **Stoff** (meine Aussagen „Das muss ich können“ mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen zu genau diesem Thema.

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
- Pseudocode und SQL tippe ich in den Chat; bewerte sie wie ein IHK-Korrektor (jede verständliche Schreibweise zählt, es kommt auf die Logik an). Diagramme und relationale Modelle zeichne ich auf Papier und lade ein Foto hoch. Für SQL gilt das Tabellenmodell aus der Lehrnotiz.
- Stimmt der Inhalt und fehlt nur das Fachwort, zählt die Antwort als richtig: Nenn mir das Wort in einem Satz und geh weiter.
- Zeig Lösungen nie, bevor ich geantwortet habe.

**Was feststeht**
- Der Stoff ist verbindlich, und jede Aussage muss drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“, statt still etwas anderes beizubringen. Steht bei einer Aussage „in der Prüfung vorgegeben“, muss ich das nur anwenden.
- Sag mir bei jedem Thema in einem Halbsatz, ob es schon in einer Prüfung vorkam (Lehrnotiz „Schon geprüft“). Was schon geprüft wurde, übst du gründlicher.
- Schreibe ich „kann ich“, stell nur eine Aufgabe. Schreibe ich „Pause“, fass in zwei Zeilen zusammen, wo wir stehen; später mache ich im selben Chat weiter.
- Am Ende stellst du eine Abschlussaufgabe im Stil der IHK-Aufgaben aus der Lehrnotiz (z. B. SQL-Anweisung zu vorgegebener Ergebnistabelle, Pseudocode zu einer Beschreibung), mit Punkten je Teil (zusammen 10–12), eine Teilaufgabe nach der anderen. Nimm vor allem das hinein, was unterwegs nicht saß, und das, was schon geprüft wurde. Davor gibt es keine eigene Wiederholungsrunde.
- Abhaken: Hat die Abschlussaufgabe mindestens zwei Drittel der Punkte, schreib: „✅ Kannst du abhaken: <Titel des Stichpunkts>“. Sonst nenn, was noch wackelt, und übe genau das mit mir.

Antworte auf Deutsch.

## Stoff: Debugging und Fehlerbehandlung

Ziel: Den Debugger und print-Debugging gezielt zur Fehlersuche einsetzen, die passende Technik wählen und festlegen, wie ein Programm unbrauchbare Eingaben bereinigt.

Das muss ich können:

### K1 – Debugger: Breakpoint, Step over, Step into (Stufe 3 Anwenden)
Du kannst den Debugger gezielt einsetzen, um einen gegebenen Fehler einzugrenzen: einen Breakpoint vor die verdächtige Stelle setzen, im Einzelschritt weitergehen (Step over führt einen Methodenaufruf als Ganzes aus, Step into springt in die Methode hinein) und die Werte der Variablen beobachten, bis einer vom erwarteten Wert abweicht.

Erklärung:
Mit dem **Debugger** lässt du das Programm laufen und schaust ihm dabei in die Karten.
- **Breakpoint** vor die verdächtige Stelle setzen; das Programm hält dort an
- **Step over:** die aktuelle Zeile ausführen; ein Methodenaufruf läuft als Ganzes durch
- **Step into:** in die aufgerufene Methode hineinspringen
- **Variablen beobachten** (Watch-Fenster), bis ein Wert vom erwarteten abweicht
Beispiel: `berechnePreis()` liefert einen falschen Betrag, in Zeile 12 steht `rabatt(menge)`. Breakpoint auf Zeile 12, **Step into** in `rabatt`, Werte beobachten. Ist schon `menge` beim Eintritt falsch, liegt der Fehler vor Zeile 12. Stimmt in `rabatt` alles, mit **Step over** weiter durch `berechnePreis()`.

### K4 – Unbrauchbare Texteingaben: Bereinigung und Ersatzregel (Stufe 3 Anwenden)
Du kannst über PB1-5-1-2 hinaus für unbrauchbare Texteingaben eine Vorgehensweise festlegen: die Eingabe zuerst bereinigen (z. B. mit trim führende und folgende Leerzeichen entfernen), eine danach leere Eingabe wie eine fehlende behandeln und eine festgelegte Ersatzregel anwenden, etwa ohne Vorgabe des Arztes die hinterlegte Standardmedikation verwenden, statt mit der unbrauchbaren Eingabe weiterzuarbeiten.

Erklärung:
Ausnahmen und try/catch kennst du aus PB1-5-1-2. Hier geht es um **unbrauchbare Texteingaben**, die keine Ausnahme auslösen, aber trotzdem nichts taugen – z. B. nur Leerzeichen.
Vorgehen:
- **bereinigen:** mit `trim()` führende und folgende Leerzeichen entfernen
- **leer = fehlend:** ist die Eingabe danach leer (oder `null`), wie eine fehlende behandeln – `null` prüfst du **vor** `trim()`, denn ein Methodenaufruf auf `null` löst selbst eine Ausnahme aus
- **Ersatzregel anwenden,** statt mit der Eingabe weiterzuarbeiten
Beispiel (Medikation ohne Vorgabe des Arztes → Standardmedikation):
`String vorgabe = (eingabe == null) ? "" : eingabe.trim();`
`if (vorgabe.isEmpty()) {`
`  medikation = standardMedikation;`
`} else {`
`  medikation = vorgabe;`
`}`
Warum nicht nur `isEmpty()`? Weil `"   ".isEmpty()` falsch ist – die Leerzeichen-Eingabe würde durchrutschen.

### K5 – Debugger oder print-Debugging: Auswahl (Stufe 4 Beurteilen)
Du kannst für eine Fehlersuche begründet auswählen, ob du den Debugger oder print-Debugging (Zwischenwerte und Zustände gezielt ausgeben oder protokollieren) einsetzt: print-Debugging oder Logging, wenn kein Debugger zur Verfügung steht, der Fehler nur im Betrieb auftritt oder das Anhalten am Breakpoint den Ablauf verändert (z. B. Zeitabläufe); den Debugger, wenn sich der Fehler in der Entwicklungsumgebung nachstellen lässt und du Schritt für Schritt nachsehen willst.

Erklärung:
**print-Debugging:** Zwischenwerte und Zustände gezielt ausgeben oder in ein Log schreiben und danach auswerten.
Wann was?
**print-Debugging / Logging**, wenn
- kein Debugger zur Verfügung steht
- der Fehler nur im Betrieb (beim Kunden) auftritt – dort lässt sich meist kein Debugger anhängen, und am Breakpoint stünde der Betrieb still
- das Anhalten am Breakpoint den Ablauf verändert, z. B. bei Zeitabläufen oder **Timeouts** (Zeitlimit: Kommt eine Antwort nicht rechtzeitig, bricht das Programm den Vorgang ab)
**Debugger**, wenn
- sich der Fehler in der Entwicklungsumgebung nachstellen lässt
- du Schritt für Schritt alle Variablen ansehen willst, ohne Ausgaben einzubauen und später wieder zu entfernen
In der Prüfung immer mit der Situation begründen: „Weil der Fehler nur im Produktivbetrieb auftritt, …“

## Lehrnotiz: Debugging und Fehlerbehandlung

**Aufteilung:**
- Fehler mit dem Debugger eingrenzen: K1
- Debugger oder print-Debugging begründet wählen: K5
- Unbrauchbare Texteingaben bereinigen und Ersatzregel anwenden: K4

**Schon geprüft:** In Prüfungen: K4 (2025S) · Noch nicht geprüft: K1, K5

**Kerngedanken:**
- Die Zeile, nach der ein Wert erstmals vom erwarteten abweicht, ist die Fehlerstelle. Dafür braucht man einen Testfall, dessen richtige Werte man aus der Anforderung kennt.
- Ist noch offen, ob ein Methodenaufruf schuld ist, führt man ihn mit Step over aus und sieht sich das Ergebnis an. Ist es falsch, geht man mit Step into hinein – meist nach einem Neustart, weil die Zeile schon ausgeführt ist. Ist die Methode schon verdächtig (wie im Stoffbeispiel), geht man gleich mit Step into hinein.
- Im Produktivbetrieb lässt sich ein Debugger meist nicht anhängen, und am Breakpoint stünde der Betrieb still. Deshalb bleibt dort nur Protokollieren und späteres Auswerten.
- `null` muss vor `trim()` abgefangen werden, sonst löst der Aufruf selbst eine Ausnahme aus (NullPointerException).
- Bei „beschreiben“ zu unbrauchbaren Eingaben steht das Vorgehen nicht in der Aufgabe. Die Situation liefert nur die Ersatzregel (z. B. einen hinterlegten Standardwert). Die Reihenfolge bereinigen, leer wie fehlend behandeln, Ersatzregel anwenden muss man selbst wissen.

**Typische Missverständnisse:**
- Viele denken, der Debugger sei immer die bessere Wahl, weil man alles sieht; richtig ist: Das Anhalten verändert Zeitabläufe, ein zeitabhängiger Fehler tritt dann oft gar nicht mehr auf.
- Viele denken, auf eine unbrauchbare Eingabe müsse das Programm mit einer Ausnahme reagieren; richtig ist: Ist eine Ersatzregel festgelegt, wird sie angewendet und das Programm läuft weiter. Ausnahmen und try/catch sind Thema der allgemeinen Fehlerbehandlung.

**Fachwörter:**
- Debugger: Werkzeug, das ein Programm kontrolliert ablaufen lässt
- Breakpoint: Haltepunkt, an dem das Programm anhält
- Step over: Zeile ausführen, Methodenaufruf läuft durch
- Step into: in die aufgerufene Methode springen
- Watch-Fenster: Anzeige ausgewählter Variablenwerte
- print-Debugging: Zwischenwerte gezielt ausgeben oder protokollieren
- Logging: Zustände in eine Protokolldatei schreiben
- Ersatzregel: festgelegter Wert bei fehlender Eingabe

**So fragt die IHK:**
- Belegt ist bisher eine Teilaufgabe mit 2 Punkten, Operator „beschreiben“, vier Antwortzeilen. Ein Kollege fragt, wie das Programm reagieren soll, wenn eine im System hinterlegte Vorgabe nur aus Leerzeichen besteht.
- Erwartet ist eine Vorgehensweise in Worten: bereinigen, leer wie fehlend behandeln, festgelegte Ersatzregel anwenden (dort: hinterlegter Standardwert). Code ist nicht verlangt, wird aber als Beschreibung gewertet.
- Debugger und print-Debugging wurden bisher nicht eigens geprüft; sie stehen im Prüfungskatalog unter Fehlersuche und Testen.
- Zu erwarten wäre: „Beschreiben Sie, wie Sie mit dem Debugger den Fehler eingrenzen“ (3–4 Punkte für Breakpoint, Step over und Step into passend eingesetzt, Werte beobachten, erste Abweichung).
- Oder: „Entscheiden Sie begründet, ob Sie den Debugger oder Ausgaben/Logging einsetzen“ (2–3 Punkte, nur mit Begründung aus der Situation).

**Fallen:**
- Mit Step into sofort in jede Methode springen und sich in Code verlieren, der stimmt – oder nur Step over benutzen und nie in die Methode sehen, in der der falsche Wert entsteht.
- Ist ein Wert schon beim Eintritt in eine Methode falsch, liegt der Fehler davor, nicht in dieser Methode.
- Step over und Step into vertauschen oder nicht unterscheiden.
- Das Vorgehen nur als „Debugger starten und Fehler suchen“ beschreiben, ohne Breakpoint, Einzelschritte und Beobachten der Werte.
- Bei der Auswahl nicht sagen, was protokolliert wird: Zwischenwerte, Zustände und bei Zeitproblemen die Zeitpunkte.
- Nach dem Bereinigen die ursprüngliche Eingabe mit Leerzeichen weiterverwenden statt der bereinigten.
- Eine gleichwertige Lösung als falsch werten: Die Prüfung auf `null` und die Leerprüfung nach `trim()` dürfen auch in einer einzigen Bedingung stehen, wenn `null` zuerst geprüft wird, z. B. `eingabe == null || eingabe.trim().isEmpty()`.
