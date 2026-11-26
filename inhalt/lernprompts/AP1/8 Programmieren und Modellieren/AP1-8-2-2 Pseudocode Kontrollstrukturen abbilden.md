Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Code lesen, schreiben und prüfen › Pseudocode: Kontrollstrukturen abbilden

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP1 – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt. Beides liest nur du. Ich kenne nur, was du mir in dieser Sitzung erklärst.

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

## Stoff: Pseudocode: Kontrollstrukturen abbilden

Ziel: Pseudocode lesen, kurze Abläufe mit Verzweigung und Schleife in Pseudocode schreiben und fehlerhafte Zeilen berichtigen.

Das muss ich können:

### K1 – Pseudocode mit verschachtelten Kontrollstrukturen (Stufe 2 Verstehen)
Du kannst Pseudocode mit Verzweigungen und Schleifen interpretieren, auch wenn sie mehrfach verschachtelt sind.

Erklärung:
Welche Zeilen zu einem Zweig oder einer Schleife gehören, zeigt die **Einrückung** bzw. das **Ende-Wort**.
- Alles zwischen `Für …` und `Ende Für` wird wiederholt.
- Ein `Sonst` gehört zum nächsten `Wenn` darüber auf **derselben Ebene**.
Bei Verschachtelung von außen nach innen lesen: Die innere Schleife läuft **bei jedem Durchlauf der äußeren** komplett durch.
Pseudocode ist nicht genormt – entscheidend sind klare Schlüsselwörter und saubere Einrückung.

### K3 – Fehlerhafte Zeile in Pseudocode (Stufe 3 Anwenden)
Du kannst eine fehlerhafte Zeile in Pseudocode korrigieren.

Erklärung:
Typische Zeilenfehler:
- **Schleifengrenze:** Bei Index ab 0 läuft die Schleife `bis n − 1`, nicht `bis n` – sonst Zugriff hinter das Array-Ende.
- **Vergleich:** „ab 18 Jahren“ heißt `>= 18`, nicht `> 18`.
- **Zähler vergessen:** In einer Solange-Schleife muss der Zähler erhöht werden, sonst endet sie nie.
Prüfe jede Zeile mit einem konkreten Wert: Was passiert bei genau 18?

### K4 – Pseudocode aus Beschreibung in Worten (Stufe 3 Anwenden)
Du kannst einen kurzen, in Worten beschriebenen Ablauf mit Verzweigungen und Schleifen in Pseudocode abbilden und die Struktur durch Einrücken sichtbar machen.

Erklärung:
Übersetze die Wörter in Bausteine:
- „für jedes Element …“ → `Für jedes element in liste … Ende Für`
- „solange …“ → `Solange Bedingung … Ende Solange`
- „falls …, sonst …“ → `Wenn Bedingung dann … Sonst … Ende Wenn`
Beispiel „Für jeden Artikel: Ist der Bestand unter 10, Nachbestellung auslösen“:
`Für jeden artikel in artikelliste`
`    Wenn artikel.bestand < 10 dann`
`        nachbestellen(artikel)`
`    Ende Wenn`
`Ende Für`

### K5 – Reihenfolge und Verschachtelung vorgegebener Anweisungen (Stufe 3 Anwenden · in der Prüfung vorgegeben: Variablen, Felder und Funktionen)
Du kannst einen Ablauf aus vorgegebenen Anweisungen in richtiger Reihenfolge und Verschachtelung abbilden, zum Beispiel zwei ineinander geschachtelte Schleifen über Listen.

Erklärung:
Bei vorgegebenen Anweisungen musst du Reihenfolge und Verschachtelung finden:
- Was gehört **außen**, was **innen**? Die äußere Schleife geht über das „größere“ Ding.
- Beispiel „für jede Abteilung jeden Mitarbeiter prüfen“: außen `Für jede abteilung`, innen `Für jeden mitarbeiter in abteilung`.
- Startwerte (z. B. `summe = 0`) stehen **direkt vor** der Schleife, die sie nutzt, Ausgaben des Gesamtergebnisses **nach** ihr. Der Startwert eines inneren Zählers steht deshalb in der äußeren Schleife direkt vor der inneren – sonst wird er für das nächste äußere Element nicht zurückgesetzt.

### K6 – Schleife mit zusammengesetzter Abbruchbedingung (Stufe 3 Anwenden · in der Prüfung vorgegeben: Funktionen der Schnittstelle)
Du kannst eine Funktion mit einer Schleife und einer zusammengesetzten Abbruchbedingung ergänzen, zum Beispiel wiederholen, solange die Stückzahl nicht erreicht und kein Notaus ausgelöst ist.

Erklärung:
Eine zusammengesetzte Bedingung verknüpfst du mit **UND / ODER / NICHT**.
Beispiel: „Produzieren, solange die Stückzahl nicht erreicht ist und kein Notaus ausgelöst wurde“:
`Solange anzahl < ziel UND NICHT notausAktiv()`
`    produziereStueck()`
`    anzahl = anzahl + 1`
`Ende Solange`
Wichtig: Im Rumpf den Zähler erhöhen – sonst läuft die Schleife endlos. Und **UND** statt ODER: Es soll nur weiterlaufen, wenn **beides** zutrifft.
Steht der Notaus in einer Statusvariablen (vor der Schleife `notaus = notausAktiv()`, Bedingung `Solange anzahl < ziel UND NICHT notaus`), musst du ihn im Rumpf neu abfragen (`notaus = notausAktiv()`) – sonst bemerkt die Schleife einen Notaus nie.

### K7 – Algorithmus gegenüber Programm (Stufe 2 Verstehen)
Du kannst Algorithmus und Programm unterscheiden: Ein Algorithmus ist eine endliche, eindeutige Folge von Schritten zur Lösung eines Problems und unabhängig von einer Programmiersprache; ein Programm setzt ihn in einer bestimmten Programmiersprache um.

Erklärung:
- **Algorithmus:** die **Lösungsidee** als Schrittfolge. Sie ist **endlich** (kommt zum Ende) und **eindeutig** (jeder Schritt ist klar festgelegt).
- **Programm:** dieselbe Schrittfolge in der Syntax **einer bestimmten Sprache**, sodass der Rechner sie ausführen kann.
Weil der Algorithmus nicht an eine Sprache gebunden ist, beschreibt man ihn in **Pseudocode** oder im Aktivitätsdiagramm. Daraus lassen sich Programme in verschiedenen Sprachen schreiben.
Beispiel: „Größten Wert einer Liste finden: ersten Wert merken, jeden weiteren vergleichen, größeren merken“ ist der Algorithmus; die Umsetzung in Java oder Python ist je ein Programm.

## Lehrnotiz: Pseudocode: Kontrollstrukturen abbilden

**Hinweis aus dem Lernplan:** 2022F-A4-d und 2022H-A4-b waren noch als Struktogramm zu lösen; die Logik dahinter stellst du heute in Pseudocode dar.

**Aufteilung:**
- Algorithmus und Programm: K7
- Pseudocode lesen, auch verschachtelt: K1
- Aus einer Beschreibung in Worten schreiben: K4
- Vorgegebene Anweisungen ordnen und schachteln: K5
- Schleife mit zusammengesetzter Bedingung: K6
- Fehlerhafte Zeilen berichtigen: K3

**Schon geprüft:** In Prüfungen: K5 (2022F), K6 (2022H) · Noch nicht geprüft: K1, K3, K4, K7

**Kerngedanken:**
- „Startwert vor die Schleife“ heißt: direkt vor die Schleife, die ihn nutzt. Der Startwert eines inneren Zählers steht deshalb in der äußeren Schleife vor der inneren; vor beiden Schleifen würde er für das zweite äußere Element nicht zurückgesetzt.
- Zu jeder Solange-Schleife mit Zähler gehören drei Zeilen: Startwert davor, Bedingung im Kopf, Erhöhung im Rumpf. Der äußere Zähler wird erst nach dem Ende der inneren Schleife erhöht.
- Die Bedingung hinter `Solange` sagt, wann weitergemacht wird, nicht wann Schluss ist. „Bis das Ziel erreicht ist oder ein Stopp kommt“ wird darum zu „Solange Ziel nicht erreicht UND kein Stopp“.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K1 – Abarbeitung einer Solange-Schleife: (1) Vor der Schleife wird die Zeile mit dem Startwert einmal ausgeführt, bevor die Schleife beginnt, zum Beispiel zaehler = 0. Steht die Schleife in einer äußeren Schleife, geschieht das bei jedem äußeren Durchlauf neu. (2) Am Schleifenkopf wertet der Rechner die Bedingung hinter Solange mit den aktuellen Werten der Variablen aus. (3) Ist die Bedingung wahr, führt er die Zeilen des Rumpfes der Reihe nach bis Ende Solange aus, auch die Erhöhung des Zählers. (4) Steht im Rumpf eine weitere Schleife, wird sie an dieser Stelle nach demselben Muster vollständig abgearbeitet, bevor die nächste Zeile der äußeren Schleife folgt. (5) Bei Ende Solange springt die Ausführung zurück zum Schleifenkopf; nur dort wird die Bedingung erneut geprüft, nicht mitten im Rumpf. (6) Ist die Bedingung am Kopf falsch, wird der Rumpf übersprungen und die Ausführung geht mit der ersten Zeile hinter Ende Solange weiter. Vereinfacht: Bei einer Für-Schleife übernimmt der Schleifenkopf Startwert, Prüfung der Grenze und Weiterzählen selbst.

**Typische Missverständnisse:**
- Viele denken, eine andere Programmiersprache brauche einen neuen Algorithmus; richtig ist: Neu ist nur das Programm.
- Viele denken, zwei `Wenn` hintereinander seien dasselbe wie `Wenn … Sonst wenn`; richtig ist: Bei zwei unabhängigen `Wenn` können beide Zweige laufen.

**Fachwörter:**
- Algorithmus: endliche, eindeutige Schrittfolge, unabhängig von der Sprache
- Programm: Umsetzung in einer bestimmten Programmiersprache
- Pseudocode: Ablauf in Schlüsselwörtern, nicht genormt
- Einrückung: zeigt, was zu Zweig oder Schleife gehört

**So fragt die IHK:**
- Zwei Aufgabentypen kamen vor, früher als Struktogramm, heute in Pseudocode. Die Struktur muss erkennbar sein, etwa durch Einrücken; Syntaxfehler werden toleriert. Operatoren: eintragen, ergänzen, erstellen.
- Anweisungen ordnen (9 Punkte, je richtig platzierte Zeile 1): Neun durcheinander stehende Anweisungen (zwei Solange-Schleifen, Startwerte, Erhöhungen, Funktionsaufrufe) sind „folgerichtig einzutragen“. Kern: was außen, was innen steht und wo die inneren Startwerte hingehören.
- Funktion ergänzen (7 Punkte): Übergeben wird ein Array, dessen Indizes feste Bedeutungen haben; die Funktionen der Schnittstelle sind vorgegeben, darunter ein Notaus-Status als Wahrheitswert. Verlangt: Werte übergeben, Schleife „solange Stückzahl nicht erreicht und kein Notaus“, im Rumpf ein Stück starten, Status neu abfragen, Zähler erhöhen. Schleifenbedingung und Statusabfrage zählen je 2 Punkte, die übrigen Zeilen je 1; Rumpfzeilen dürfen vertauscht sein.
- Korrigieren und Schreiben aus einer Beschreibung stehen im Katalog, kamen aber nicht vor.

**Fallen:**
- Eine ungenaue Anweisung („bis es genug ist“) als Algorithmus gelten lassen: Sie ist nicht eindeutig.
- Ein `Sonst` dem nächstliegenden `Wenn` zuordnen statt dem mit gleicher Einrückung.
- Die Verzweigung hinter die Schleife schreiben, obwohl sie für jedes Element gelten soll.
- Vergleichswörter ungenau übersetzen: „unter“ heißt `<`, „mehr als“ `>`, „höchstens“ `<=`.
- Die Erhöhung des äußeren Zählers in die innere Schleife setzen.
- Den Zähler ohne Startwert benutzen oder bei einem Zähler ab 0 für „höchstens n Durchläufe“ `<= n` schreiben (ein Durchlauf zu viel).
- Einen Status vor der Schleife in eine Variable lesen und im Rumpf nicht neu abfragen.
- Eine Schleife über ein Array `von 1 bis n` laufen lassen: Das erste Element fehlt, der letzte Zugriff liegt hinter dem Ende.
- Nur mit unauffälligen Werten prüfen statt auch den letzten Durchlauf.
