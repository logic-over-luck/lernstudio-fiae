Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Testszenarien und Testdaten › Testszenarien auswählen und Testdaten generieren › Testabdeckung: Anweisungs-, Zweig- und Pfadüberdeckung

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

## Stoff: Testabdeckung: Anweisungs-, Zweig- und Pfadüberdeckung

Ziel: Die Überdeckungsmaße des White-Box-Tests erläutern und abgrenzen, für einen Code die nötigen Testfälle bestimmen, alle Pfade aufzählen und Testdaten so anpassen, dass eine verlangte Überdeckung erreicht wird.

Das muss ich können:

### K1 – Testabdeckung als Anteil ausgeführten Codes (Stufe 2 Verstehen)
Du kannst Testabdeckung (Code Coverage) erläutern: der Anteil des Codes, der von den Testfällen ausgeführt wird, meist in Prozent angegeben.

Erklärung:
**Testabdeckung (Code Coverage):** der Anteil des Codes, der von den Testfällen **ausgeführt** wird, meist in Prozent.
Beispiel: 20 Anweisungen, die Tests führen 15 aus → 15 / 20 = **75 %** Anweisungsüberdeckung.
Aussage: In den restlichen 25 % kann ein Fehler stecken, den kein Test findet. Umgekehrt heißt 100 % nicht „fehlerfrei“ – nur, dass alles mindestens einmal lief.

### K2 – Anweisungs-, Zweig- und Pfadüberdeckung (Stufe 2 Verstehen · in der Prüfung vorgegeben: englischer Text zu den Überdeckungsmaßen (2024S))
Du kannst Anweisungs-, Zweig- und Pfadüberdeckung erläutern und wie sie aufeinander aufbauen: jede Anweisung mindestens einmal ausgeführt; jede Verzweigung in jede Richtung mindestens einmal durchlaufen; jeder mögliche Weg vom Anfang bis zum Ende durchlaufen. Volle Pfadüberdeckung schließt volle Zweigüberdeckung ein, diese volle Anweisungsüberdeckung – nicht umgekehrt. Bei Schleifen wächst die Zahl der Pfade mit jedem möglichen Durchlauf, ohne feste Obergrenze unbegrenzt; volle Pfadüberdeckung ist dann praktisch nicht erreichbar. Die englischen Begriffe (statement, branch, path coverage) sind meist vorgegeben.

Erklärung:
Die drei Überdeckungsmaße des White-Box-Tests (englische Begriffe sind meist vorgegeben):
- **Anweisungsüberdeckung** (statement coverage, C0): jede Anweisung mindestens einmal ausgeführt
- **Zweigüberdeckung** (branch coverage, C1): jede Verzweigung in **jede Richtung** mindestens einmal, also die Bedingung jeder Verzweigung **als Ganzes** einmal wahr und einmal falsch – auch der **leere Else-Zweig**
- **Pfadüberdeckung** (path coverage): **jeder mögliche Weg** vom Anfang bis zum Ende
**Als Metrik** ist jedes Maß ein **Prozentwert:** ausgeführte Anweisungen / alle Anweisungen, durchlaufene Zweige / alle Zweige, durchlaufene Pfade / alle Pfade; die Kriterien oben beschreiben jeweils die volle Überdeckung (100 %). Ein **Pfad** ist eine Folge von Anweisungen, die am Einstiegspunkt des Programms beginnt und an einem Ausstiegspunkt endet.
**Aufbau:** Pfad schließt Zweig ein, Zweig schließt Anweisung ein – nicht umgekehrt.
Beispiel `if x > 0 then y = 1 end if` (ohne else): x = 5 genügt für Anweisungsüberdeckung; für Zweigüberdeckung braucht es zusätzlich x = 0.
**Schleifen:** Jede Zahl von Durchläufen ist ein eigener Pfad. Ohne feste Obergrenze gibt es unbegrenzt viele – volle Pfadüberdeckung ist dann praktisch nicht erreichbar.

### K4 – Ungetestete Anweisungen und Mindestzahl der Testfälle (Stufe 3 Anwenden)
Du kannst für einen gegebenen Code die Anweisungen nennen, die mit vorgegebenen Testdaten nicht durchlaufen werden, und die Mindestzahl an Testfällen für Anweisungs- oder Zweigüberdeckung bestimmen.

Erklärung:
Vorgehen:
- jeden Testfall durch den Code verfolgen und die ausgeführten Zeilen abhaken
- was nie abgehakt wird, ist **nicht durchlaufen**
- **Mindestzahl** bestimmen: Welche Bedingungen müssen wahr, welche falsch werden, und lassen sie sich in einem Testfall kombinieren?
Beispiel:
`1 ergebnis = "normal"`
`2 if x < 0 then`
`3   ergebnis = "negativ"`
`4 end if`
`5 if x > 100 then`
`6   ergebnis = "zu groß"`
`7 end if`
- Testdaten 50 und −3: Zeile 6 wird nie ausgeführt
- Anweisungsüberdeckung: x < 0 und x > 100 schließen sich aus → mindestens **2** Testfälle (z. B. −3, 150)
- Zweigüberdeckung: −3 (wahr/falsch) und 150 (falsch/wahr) decken beide Richtungen beider `if` ab → ebenfalls **2**
**Schleife oder Rekursion:** Derselbe Code läuft mehrmals – dann kann **ein** Testfall genügen. Beispiel: `rest = dezimalzahl modulo 2; AUSGABE(rest); dezimalzahl = dezimalzahl div 2; WENN dezimalzahl > 0 DANN Umrechnung(dezimalzahl) ENDE`. Mit dezimalzahl = 7 wird jede Anweisung ausgeführt (7 → 3 → 1 → 0), also genügt **1** Testfall; im letzten Aufruf ist die Bedingung falsch, damit ist sogar die Zweigüberdeckung erreicht. Mit dezimalzahl = 1 würde der rekursive Aufruf nie ausgeführt.

### K5 – Alle Pfade für volle Pfadüberdeckung (Stufe 3 Anwenden)
Du kannst für einen kurzen Code alle Pfade ermitteln, die für eine vollständige Pfadüberdeckung durchlaufen werden müssen, und je Pfad die durchlaufenen Bedingungen und Anweisungen in der Reihenfolge ihrer Abarbeitung aufschreiben (z. B. B1, A1, B2, A3, B3, A4); hintereinanderliegende, voneinander unabhängige Verzweigungen multiplizieren dabei die Zahl der Pfade.

Erklärung:
Für die Pfadüberdeckung schreibst du **jeden Weg** durch den Code auf – mit den Bedingungen (B) und Anweisungen (A) in der Reihenfolge, in der sie abgearbeitet werden.
Beispiel:
`B1: if a > 0 then A1 else A2`
`B2: if b > 0 then A3`
- B1, A1, B2, A3
- B1, A1, B2
- B1, A2, B2, A3
- B1, A2, B2
**Zählregel:** Hintereinanderliegende, voneinander unabhängige Verzweigungen **multiplizieren** die Pfade (hier 2 · 2 = 4). Die Zweige **einer** Verzweigung **addieren** sich (Pfade im Ja-Zweig + Pfade im Nein-Zweig): Das **verschachtelte** `if a then (if b then x else y) else z` hat 2 + 1 = 3 Pfade. Kombiniert: `if (B1) { A1; if (B2) { A3 } if (B3) { A4 } } else { A2 }` → Ja-Zweig 2 · 2 = 4, Nein-Zweig 1 → **5** Pfade.

### K6 – Testdaten passend zur verlangten Überdeckung (Stufe 4 Beurteilen)
Du kannst Testdaten so anpassen, dass eine verlangte Überdeckung erreicht wird, und die Änderung begründen, zum Beispiel einen Wert so wählen, dass auch die bisher nicht durchlaufene Anweisung zum Setzen des Minimums ausgeführt wird.

Erklärung:
Erreichen die Testdaten eine verlangte Überdeckung nicht, passt du sie gezielt an:
- Welche Anweisung oder welcher Zweig fehlt?
- Welche **Bedingung** muss dafür wahr bzw. falsch werden?
- Einen Wert wählen, der genau das bewirkt – und die Wahl **begründen**
Beispiel Minimum-Suche:
`1 min = werte[0]`
`2 for i = 1 to laenge(werte) - 1`
`3   if werte[i] < min then`
`4     min = werte[i]`
- [1, 4, 7]: das Minimum steht vorn, Zeile 4 läuft nie
- angepasst [5, 4, 7]: 4 < 5, Zeile 4 wird ausgeführt → Anweisungsüberdeckung
- für **Zweigüberdeckung** muss die Bedingung auch einmal falsch sein: [5, 4, 7] erfüllt das mit 7; [9, 3] dagegen nicht → z. B. [9, 3, 5]

### K7 – Anweisungs- und Zweigüberdeckung: Stärken und Lücken (Stufe 4 Beurteilen)
Du kannst Anweisungs- und Zweigüberdeckung nach ihrer Aussagekraft beurteilen: Die Anweisungsüberdeckung ist mit wenigen Testfällen erreicht und deckt nicht ausführbaren (toten) Code auf, findet aber wenige Fehler, weil leere Zweige wie ein fehlendes Else nie geprüft werden; die Zweigüberdeckung findet mehr Fehler und deckt unerreichbare Zweige auf, prüft aber Schleifen, zusammengesetzte Bedingungen (UND/ODER) und voneinander abhängige Bedingungen nur unzureichend.

Erklärung:
**Prinzip:** Jedes Überdeckungsmaß sagt nur etwas über das aus, was es zählt – was es nicht zählt, bleibt ungeprüft.
- **Anweisungsüberdeckung:** zählt ausgeführte Anweisungen. Bleibt trotz vieler Testfälle eine Anweisung unerreicht, ist sie vermutlich **toter Code**. Ein `if` ohne `else` ist aber schon mit dem Ja-Fall abgedeckt – was passiert, wenn die Bedingung **nicht** gilt, wird nie getestet.
- **Zweigüberdeckung:** verlangt jede Verzweigung in **beide** Richtungen, prüft also auch den leeren Else-Zweig und findet Zweige, die nie erreicht werden können.
- Grenzen der Zweigüberdeckung: Bei `if (a > 0 && b > 0)` reichen zwei Testfälle (wahr/falsch), obwohl nie geprüft wird, ob `b > 0` allein richtig wirkt; eine Schleife gilt schon als abgedeckt, wenn ihre Bedingung einmal wahr (Rumpf betreten) und einmal falsch (Schleife verlassen) war – das schafft oft ein einziger Testfall; ob sie bei 0, 1 oder vielen Durchläufen richtig arbeitet, wird nicht geprüft.
Beispiel: Eine Rabattfunktion `if (summe >= 100) rabatt = 10;` ist mit `summe = 150` zu 100 % anweisungsüberdeckt – dass `rabatt` bei `summe = 50` gar nicht gesetzt wird, zeigt erst der zweite Testfall der Zweigüberdeckung.

## Lehrnotiz: Testabdeckung: Anweisungs-, Zweig- und Pfadüberdeckung

**Aufteilung:**
- Testabdeckung als Prozentwert: K1
- Die drei Überdeckungsmaße und ihr Aufbau: K2
- Testfälle durch den Code verfolgen, Mindestzahl bestimmen: K4
- Testdaten gezielt anpassen: K6 – schließt in der Prüfung direkt an das Abhaken an
- Alle Pfade aufschreiben: K5
- Aussagekraft der Maße beurteilen: K7

**Schon geprüft:** In Prüfungen: K1 (2025W), K2 (2023S, 2024S), K4 (2022W, 2023S), K5 (2024S), K6 (2023S) · Noch nicht geprüft: K7

**Kerngedanken:**
- Ein „grüner“ Test sagt nur, dass erwartetes und tatsächliches Ergebnis übereinstimmen. Welche Teile des Codes dabei gelaufen sind, zeigt erst die Testabdeckung.
- Zweigüberdeckung verlangt jede Richtung einmal, Pfadüberdeckung jede mögliche Kombination der Richtungen. Deshalb können dieselben Testfälle 100 % Zweigüberdeckung erreichen und trotzdem nur einen Teil der Pfade durchlaufen.
- Eine innere Verzweigung wird nur erreicht, wenn die äußere Bedingung passend ausfällt. Für Zweigüberdeckung braucht man dann zwei Testfälle mit dieser äußeren Richtung und mindestens einen für die andere.
- Abgrenzung: Hier wird Überdeckung gemessen und erreicht. Welches Maß man für ein Projekt vorschlägt und wie man Testdaten aus der Anforderung bildet, gehört zu den Nachbarthemen.

**Typische Missverständnisse:**
- Viele denken, Testabdeckung sei die Anzahl der Testfälle; richtig ist: Zehn Testfälle, die denselben Weg nehmen, bringen nicht mehr Abdeckung als einer.
- Viele denken, eine Bedingung gehöre nur in den Pfad, wenn danach eine Anweisung folgt; richtig ist: Jede geprüfte Bedingung steht im Pfad, auch wenn sie falsch ist und nichts ausgeführt wird.
- Viele denken, eine nicht erreichte Anweisung brauche „mehr Testdaten“; richtig ist: Es braucht einen Wert, der die zugehörige Bedingung genau so ausfallen lässt (wahr bzw. falsch), dass diese Anweisung erreicht wird.

**Fachwörter:**
- Testabdeckung (Code Coverage): Anteil des von Tests ausgeführten Codes
- Anweisungsüberdeckung: jede Anweisung mindestens einmal ausgeführt
- Zweigüberdeckung: jede Verzweigung in jede Richtung (Bedingung als Ganzes einmal wahr, einmal falsch)
- Pfadüberdeckung: jeder Weg vom Anfang zum Ende
- Pfad: Folge vom Einstiegspunkt bis zum Ausstiegspunkt
- toter Code: Anweisung, die nie erreicht werden kann

**So fragt die IHK:**
- Das Thema kam mehrfach als Teil einer größeren Testaufgabe vor, meist mit der Rolle „Sie sind im Testteam“. Operatoren: beschreiben, erläutern, nennen, angeben, notieren, anpassen und begründen.
- Testabdeckung beschreiben (3 Punkte): Gezählt wurde, wie viel Prozent der Anweisungen durch die Testfälle erreicht und ausgeführt werden.
- Überdeckungsmaße erläutern; einmal war dazu ein englischer Text vorgegeben, dessen Begriffe verstanden und erläutert werden mussten.
- Typische Folge: Zu einem Algorithmus mit vorgegebenen Testdaten die nicht durchlaufenen Anweisungen nennen, dann die Testdaten so anpassen und begründen, dass die fehlende Zuweisung (z. B. Setzen eines Minimums) läuft.
- Einmal: Mindestzahl an Testfällen für Anweisungsüberdeckung bei einem rekursiven Algorithmus bestimmen und begründen.
- Einmal (5 Punkte): Algorithmus mit B- und A-Markierungen (äußere if-else-Verzweigung, im Ja-Zweig zwei unabhängige `if` ohne `else`), alle Pfade in eine Antworttabelle mit vorgegebener Zeilenzahl notieren. Die Reihenfolge der Pfade ist beliebig.
- Gewertet wird streng: Ein Pfad zählt nur mit allen Bedingungen in Abarbeitungsreihenfolge, angepasste Testdaten nur mit Begründung über die Bedingung.
- Zur Beurteilung der Aussagekraft (K7) gibt es keine echte Aufgabe; zu erwarten wäre „Beurteilen Sie die Aussagekraft …“ mit 3–4 Punkten.

**Fallen:**
- Auf die Frage, warum die Zweigüberdeckung nicht erreicht ist, den nie durchlaufenen leeren Nein-Zweig als Grund vergessen.
- Bei der Mindestzahl reflexhaft „so viele wie Verzweigungen“ oder „immer 2“ antworten: Stehen alle Anweisungen in Ja-Zweigen und können alle Bedingungen gleichzeitig wahr sein, reicht für Anweisungsüberdeckung ein Testfall.
- Bei einer Schleife einen Wert wählen, mit dem der Rumpf gar nicht betreten wird.
- Eine Mindestzahl nennen, zu der die angegebenen Testdaten nicht passen, oder die Begründung weglassen.
- Im Pfad eine Anweisung vor ihre Bedingung schreiben.
- Anweisungen, die immer laufen (vor der ersten Bedingung, nach der letzten Verzweigung), in einzelnen Pfaden weglassen.
- Unmögliche Pfade aufschreiben, etwa eine innere Bedingung nach dem Else-Zweig der äußeren.
- Bei verschachtelten Verzweigungen multiplizieren statt addieren; Pfade aufschreiben, ohne vorher ihre Zahl zu bestimmen – dann fehlt leicht einer.
- Beim Anpassen nur „anderen Wert nehmen“ schreiben: Verlangt ist, welche Bedingung dadurch wahr bzw. falsch wird.
- Nach dem Anpassen nicht alle Bedingungen nachrechnen: Ein geänderter Wert kann eine andere Bedingung ungewollt kippen.
- Beim Beurteilen nur eine Seite nennen, nur „Zweigüberdeckung ist genauer“ schreiben oder volle Zweigüberdeckung mit „vollständig getestet“ gleichsetzen.
