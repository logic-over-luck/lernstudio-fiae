Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Code lesen, schreiben und prüfen › Variablen, Datentypen und Ausdrücke: Gültigkeit, Konstanten, Zuweisung, Rangfolge

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

## Stoff: Variablen, Datentypen und Ausdrücke: Gültigkeit, Konstanten, Zuweisung, Rangfolge

Ziel: Gültigkeitsbereich, Datentypen, Konstanten und Typumwandlung erklären und Zuweisungen und Ausdrücke nach der Rangfolge der Operatoren auswerten.

Das muss ich können:

### K1 – Gültigkeitsbereich: global und lokal (Stufe 2 Verstehen)
Du kannst den Gültigkeitsbereich einer Variablen erklären: Eine global, also außerhalb aller Funktionen angelegte Variable ist im ganzen Programm bekannt, eine lokal in einer Funktion oder einem Block angelegte nur dort, sodass gleiche Namen in verschiedenen Funktionen sich nicht stören.

Erklärung:
Jeder Name gilt nur in einem bestimmten Bereich des Programms, seinem **Gültigkeitsbereich**.
- **Global:** außerhalb aller Funktionen angelegt, überall lesbar. Für Konstanten wie einen Steuersatz praktisch.
- **Lokal:** in einer Funktion oder einem Block angelegt; außerhalb unbekannt und nach dem Ende der Funktion verschwunden.
- Zwei Funktionen dürfen je eine lokale Variable `summe` haben, ohne sich zu stören.
Globale **Variablen** sparsam einsetzen: Wenn jede Funktion sie ändern kann, ist ein Fehler schwer zu finden.
Beispiel: Wird `i` als Schleifenzähler in einer Funktion angelegt, führt ein Zugriff auf `i` im Hauptprogramm zu einem Fehler.

### K2 – Datentyp: Wertebereich, Speicher, Operationen (Stufe 2 Verstehen)
Du kannst erklären, was der Datentyp einer Variablen festlegt: welche Werte sie aufnehmen kann (Wertebereich), wie viel Speicher sie belegt und welche Operationen mit ihr erlaubt sind, etwa Rechnen mit Zahlen oder Verketten von Text.

Erklärung:
Eine Variable ist ein benannter Speicherplatz. Ihr **Datentyp** bestimmt drei Dinge:
- **Wertebereich:** z. B. nur ganze Zahlen, nur wahr/falsch, beliebiger Text.
- **Speicherbedarf:** Ein großer Zahlentyp belegt mehr Bytes als ein kleiner.
- **Erlaubte Operationen:** Mit Zahlen rechnest du, Texte verkettest du, Wahrheitswerte verknüpfst du mit UND/ODER.
Deshalb liefert `"3" + "4"` bei Text `"34"`, bei Ganzzahlen `3 + 4` dagegen `7`.

### K5 – Deklaration und Initialisierung (Stufe 2 Verstehen)
Du kannst Deklaration und Initialisierung einer Variablen unterscheiden: Bei der Deklaration wird sie vor der ersten Verwendung mit Namen und Datentyp angelegt, bei der Initialisierung bekommt sie ihren ersten Wert; beides kann in einer Anweisung geschehen.

Erklärung:
- **Deklaration:** Name und Datentyp werden festgelegt, der Speicherplatz wird reserviert. Beispiel: `GANZZAHL anzahl`.
- **Initialisierung:** die erste Wertzuweisung. Beispiel: `anzahl = 0`.
- **Beides zusammen:** `GANZZAHL anzahl = 0`.
Wer eine deklarierte, aber nicht initialisierte Variable liest, bekommt je nach Sprache einen Fehler oder einen zufälligen Wert.
Typischer Fehler im Schreibtischtest: Eine Summenvariable wird nicht mit 0 initialisiert, die Summe stimmt nicht.

### K6 – Konstante gegenüber Variable (Stufe 2 Verstehen)
Du kannst Konstante und Variable unterscheiden: Der Wert einer Konstanten wird einmal festgelegt und darf danach nicht mehr geändert werden; feste Werte wie einen Steuersatz legt man als benannte Konstante (Name meist in Großbuchstaben) an, statt die Zahl mehrfach in den Code zu schreiben.

Erklärung:
- **Variable:** Ihr Wert darf sich während des Programms beliebig oft ändern.
- **Konstante:** Ihr Wert wird **einmal** festgelegt; ein späterer Änderungsversuch ist ein Fehler. Manche Sprachen kennen keine echten Konstanten, dann gilt nur die Namenskonvention.
- **Namenskonvention:** Großbuchstaben, Wörter mit Unterstrich: `MWST_SATZ`, `MAX_VERSUCHE`.
**Warum benannte Konstanten?** Der Code wird lesbarer (`MWST_SATZ` statt `0.19`), und bei einer Änderung passt man nur eine Stelle an statt jede Zahl im Code.
Beispiel: `KONSTANTE MAX_VERSUCHE = 3` begrenzt die Anmeldeversuche.

### K7 – Rangfolge der Operatoren (Stufe 3 Anwenden)
Du kannst den Wert eines Ausdrucks nach der Rangfolge der Operatoren bestimmen: Klammern zuerst, Punkt- vor Strichrechnung, Vergleiche vor UND, UND vor ODER; wie stark NICHT bindet, ist je nach Sprache verschieden, deshalb setzt man dort Klammern.

Erklärung:
Ohne Klammern legt die **Rangfolge** fest, was zuerst ausgewertet wird:
- 1. **Klammern**
- 2. **Punktrechnung:** `*`, `/`, Modulo `%`, dann **Strichrechnung:** `+`, `-`
- 3. **Vergleiche:** `<`, `>`, `==`, `!=` …
- 4. **logisch:** UND vor ODER
Wie stark **NICHT** bindet, hängt von der Sprache ab: In Java oder C bindet `!` stärker als Rechen- und Vergleichszeichen, in Python bindet `not` schwächer als Vergleiche. Darum setzt man bei NICHT Klammern, z. B. `NICHT (a > 5)`.
Beispiel: `a = 2`, `b = 3`: `a + b * 2 > 7 UND a == 2` → `2 + 6 = 8`, `8 > 7` wahr, `a == 2` wahr → **wahr**.

### K8 – Zuweisung und Kurzformen wie += (Stufe 2 Verstehen)
Du kannst eine Zuweisung interpretieren: Erst wird der Ausdruck rechts vom Zuweisungszeichen ausgewertet, dann wird das Ergebnis in der Variablen links gespeichert; x = x + 1 ist deshalb keine Gleichung, sondern erhöht x um 1, und Kurzformen wie x += 5 stehen für x = x + 5.

Erklärung:
Die Zuweisung ist der Grundschritt jedes Schreibtischtests.
- **Rechts zuerst:** Der Ausdruck wird mit den **aktuellen** Werten ausgerechnet.
- **Dann links speichern:** Der alte Wert der Variablen wird überschrieben.
- `x = x + 1` ist kein mathematischer Widerspruch: Mit x = 4 wird rechts 5 berechnet und in x gespeichert.
- **Kurzformen:** `x += 5` → `x = x + 5`, `x -= 2`, `x *= 3`, `x /= 2`, `x %= 3` (Rest) entsprechend.
Beispiel: `summe = 10`, dann `summe += summe * 2` → rechts 10 + 20 = 30, summe = 30.

### K10 – Regeln für gültige Bezeichner (Stufe 3 Anwenden)
Du kannst die Regeln für Bezeichner anwenden: nur Buchstaben, Ziffern und Unterstrich, keine Ziffer am Anfang, kein Schlüsselwort, und in vielen Sprachen zählt die Groß- und Kleinschreibung.

Erklärung:
Ein **Bezeichner** ist der Name einer Variablen, Funktion oder Klasse. Fast alle Sprachen verlangen:
- nur Buchstaben, Ziffern und den Unterstrich `_`, also keine Leerzeichen, Bindestriche oder Sonderzeichen,
- am Anfang keine Ziffer,
- kein **Schlüsselwort** der Sprache wie `if`, `while` oder `class`.
In vielen Sprachen (Java, Python, C) sind `summe` und `Summe` zwei verschiedene Namen.
Beispiel: `anzahl_kunden` und `wert2` sind gültig; `2wert`, `anzahl-kunden` und `class` nicht.

### K11 – Benutzereingabe in Zahl umwandeln (Stufe 2 Verstehen)
Du kannst eingelesene Werte in den benötigten Datentyp umwandeln: Eine Benutzereingabe kommt als Text an und muss vor dem Rechnen ausdrücklich in eine Ganz- oder Gleitkommazahl umgewandelt werden; ist der Text keine Zahl, scheitert die Umwandlung zur Laufzeit.

Erklärung:
Eine Benutzereingabe kommt als Text an und muss vor dem Rechnen ausdrücklich in eine Ganz- oder Gleitkommazahl umgewandelt werden; ist der Text keine Zahl, scheitert die Umwandlung zur Laufzeit – das Programm startet also ohne Fehler und bricht erst ab, wenn es diese Eingabe umwandeln will.
Beispiel: Die Eingaben "12" und "5" ergeben ohne Umwandlung zusammengefügt "125" statt 17; die Umwandlung von "zwölf" in eine Zahl scheitert zur Laufzeit.

## Lehrnotiz: Variablen, Datentypen und Ausdrücke: Gültigkeit, Konstanten, Zuweisung, Rangfolge

**Aufteilung:**
- Zuweisung und Startwert: K8, K5
- Was der Datentyp festlegt, und Eingaben umwandeln: K2, K11
- Pause möglich nach dem Umwandeln der Eingaben.
- Wo ein Name gilt und was fest bleibt: K1, K6
- Gültige Namen: K10
- Ausdrücke auswerten: K7

**Schon geprüft:** Noch nicht geprüft: K1, K2, K5–K8, K10, K11

**Kerngedanken:**
- Das Zuweisungszeichen `=` ist ein Befehl („speichere“), das Vergleichszeichen `==` eine Frage, die wahr oder falsch liefert. Wer das trennt, stolpert nicht über `x = x + 1`.
- „Scheitert zur Laufzeit“ heißt: Das Programm startet ohne Fehler und bricht erst ab, wenn es mit genau diesen Daten an die Stelle kommt. Mit einer anderen Eingabe läuft dasselbe Programm durch.
- Einen gemischten Ausdruck wertet man in festen Runden aus: erst alle Rechnungen, dann alle Vergleiche, dann jeden UND-Teil zu einem Wert zusammenfassen, zuletzt ODER. Gleichrangige Rechenzeichen (etwa `/` und `*`) gelten von links nach rechts.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K1 – Lebenslauf lokaler und globaler Variablen beim Funktionsaufruf: (1) Beim Programmstart legt das Programm die globalen Variablen in einem Speicherbereich an, der bis zum Programmende bestehen bleibt. (2) Bei jedem Funktionsaufruf reserviert das Programm einen eigenen Speicherbereich für die Parameter und lokalen Variablen genau dieses Aufrufs. (3) Verwendet die Funktion einen Namen, wird er zuerst unter ihren lokalen Variablen gesucht und erst danach unter den globalen. (4) Am Ende der Funktion gibt das Programm den Speicherbereich des Aufrufs frei; die lokalen Variablen und ihre Werte existieren dann nicht mehr. (5) Ein weiterer Aufruf erhält einen neuen Speicherbereich, seine lokalen Variablen beginnen neu, während eine globale Variable ihren zuletzt gespeicherten Wert behält. (6) Code außerhalb der Funktion findet den lokalen Namen nicht, weil dort nur unter den globalen Variablen gesucht wird, und der Zugriff führt zu einem Fehler. Vereinfacht: Bei übersetzten Sprachen entscheidet schon der Compiler vor dem Programmstart, welcher Name an welcher Stelle bekannt ist, und meldet den Fehler bereits beim Übersetzen.

**Typische Missverständnisse:**
- Viele denken, UND und ODER würden einfach von links nach rechts ausgewertet; richtig ist: UND bindet stärker, auch wenn das ODER weiter vorn steht – das Ergebnis kann sonst kippen.
- Viele denken, ein Name dürfe nicht mit einem Unterstrich beginnen; richtig ist: Verboten ist am Anfang nur die Ziffer.

**Fachwörter:**
- Zuweisung: rechts ausrechnen, links speichern
- Deklaration: Variable mit Namen und Datentyp anlegen
- Initialisierung: erste Wertzuweisung
- Gültigkeitsbereich: Programmteil, in dem ein Name bekannt ist
- Konstante: einmal festgelegter, unveränderlicher Wert
- Bezeichner: Name einer Variablen, Funktion oder Klasse
- Rangfolge: Reihenfolge, in der Operatoren ausgewertet werden

**So fragt die IHK:**
- Zu diesem Stichpunkt gibt es keine eigene echte Aufgabe.
- Der Prüfungskatalog nennt „Variablen, Datentypen und -strukturen“, „Fehler in einem gegebenen Quellcode finden“ und „Schreibtischtest mit einem gegebenen Quellcode durchführen“. Der Inhalt steckt also vor allem in Code-Aufgaben.
- Als Erwartung, ohne echte Vorlage: kurze Teilaufgaben an einem Codeausschnitt (ungültige Namen berichtigen, Wert einer Bedingung ermitteln, Folgen einer fehlenden Umwandlung erläutern).

**Fallen:**
- Eine fehlende Initialisierung nur als „Fehler“ benennen, ohne den Grund: Die rechte Seite braucht schon beim ersten Durchlauf einen alten Wert.
- Von den drei Festlegungen des Datentyps den Speicherbedarf vergessen.
- Einer Ganzzahl eine Kommazahl zuweisen: Der Wert liegt außerhalb des Wertebereichs; je nach Sprache gibt es einen Fehler oder die Nachkommastellen gehen verloren.
- Bei einer fehlenden Umwandlung nur die Berichtigung nennen und vergessen, dass die Umwandlung selbst scheitert, wenn kein Zahlentext eingegeben wird.
- Übersehen, dass eine globale Variable jede Änderung behält: Ändert eine Funktion sie, wirkt jeder weitere Aufruf auf den schon geänderten Wert.
- Für die benannte Konstante nur einen der beiden Vorteile nennen oder das Änderungsverbot weglassen.
- Einen Namen nur als ungültig markieren, ohne die verletzte Regel und – wo verlangt – einen gültigen Ersatz zu nennen.
- Eine Strichrechnung zuerst ausführen, weil sie im Ausdruck vorn steht, oder Summanden zusammenziehen, bevor multipliziert ist.
- Beim Auswerten nur das Endergebnis hinschreiben, obwohl die Aufgabe den Weg oder eine Begründung verlangt; dann gehören die Zwischenschritte in der richtigen Reihenfolge dazu.
