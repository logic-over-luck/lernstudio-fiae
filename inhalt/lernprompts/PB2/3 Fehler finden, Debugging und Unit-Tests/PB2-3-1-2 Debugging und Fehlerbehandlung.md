Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Fehler finden, Debugging und Unit-Tests › Code prüfen und Fehler beheben › Debugging und Fehlerbehandlung

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 2) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt. Beides liest nur du. Ich kenne nur, was du mir in dieser Sitzung erklärst.

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
- Pseudocode und SQL tippe ich in den Chat; bewerte sie wie ein IHK-Korrektor (jede verständliche Schreibweise zählt, es kommt auf die Logik an). Diagramme und relationale Modelle zeichne ich auf Papier und lade ein Foto hoch. Für SQL gilt das Tabellenmodell aus der Lehrnotiz.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im Stil der IHK-Aufgaben aus der Lehrnotiz (z. B. SQL-Anweisung zu einer vorgegebenen Ergebnistabelle, Pseudocode zu einer Beschreibung), mit Punkten je Teil (zusammen etwa 10–12), eine Teilaufgabe nach der anderen. Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

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
