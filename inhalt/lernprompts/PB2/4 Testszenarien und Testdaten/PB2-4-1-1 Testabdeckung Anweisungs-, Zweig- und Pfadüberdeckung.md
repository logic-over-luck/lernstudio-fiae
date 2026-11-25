Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Testszenarien und Testdaten › Testszenarien auswählen und Testdaten generieren › Testabdeckung: Anweisungs-, Zweig- und Pfadüberdeckung

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 2) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

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
- Pseudocode und SQL tippe ich in den Chat; bewerte sie wie ein IHK-Korrektor (jede verständliche Schreibweise zählt, es kommt auf die Logik an). Diagramme und relationale Modelle zeichne ich auf Papier und lade ein Foto hoch. Für SQL gilt das Tabellenmodell aus der Lehrnotiz.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im Stil der IHK-Aufgaben aus der Lehrnotiz (z. B. SQL-Anweisung zu einer vorgegebenen Ergebnistabelle, Pseudocode zu einer Beschreibung), mit Punkten je Teil (zusammen etwa 10–12), eine Teilaufgabe nach der anderen. Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

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
