Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmlogik und Pseudocode › Algorithmen in Pseudocode › Pseudocode und Aktivitätsdiagramm: Funktionen, Schleifengrenzen, Sonderfälle und Datentypen

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

## Stoff: Pseudocode und Aktivitätsdiagramm: Funktionen, Schleifengrenzen, Sonderfälle und Datentypen

Ziel: Eine Funktion zur vorgegebenen Signatur so aufschreiben, dass ein Dritter sie ohne Kenntnis der Sprache lesen kann: mit richtigen Schleifengrenzen, abgefangenen Sonderfällen, passenden Datentypen und nur den Methoden und Strukturen, die die Aufgabe vorgibt; dieselben Kontrollstrukturen auch als Aktivitätsdiagramm.

Das muss ich können:

### K1 – Pseudocode zur vorgegebenen Signatur (Stufe 3 Anwenden)
Du kannst eine Funktion zur vorgegebenen Signatur (Name, Parameter mit Datentyp, Rückgabetyp) so in Pseudocode schreiben, dass ein Dritter sie ohne Kenntnis deiner Programmiersprache lesen kann, und dabei nur die vorgegebenen Klassen, Methoden und Datenstrukturen verwenden: Listen mit add, size und get, Getter von Objekten und vorgegebene Methoden wie getDay() oder getTimeTable(id), aber keine eigenen Hilfsfunktionen, die es nicht gibt.

Erklärung:
In der Prüfung ist die **Signatur** meist vorgedruckt: Name, Parameter mit Datentyp und Rückgabetyp. Du übernimmst sie unverändert und schreibst nur den Rumpf. Die Parameter stehen dir im Rumpf schon mit ihren Werten zur Verfügung – du liest sie nicht noch einmal ein.
- **lesbar für Dritte:** allgemein verständlicher Pseudocode oder Programmcode in Anlehnung an eine bekannte Sprache; er muss nicht kompilierbar sein, Syntaxfehler werden toleriert – die Kontrollstrukturen müssen aber erkennbar sein, z. B. durch Einrücken
- **nur Vorgegebenes verwenden:** die Klassen, Getter und Methoden aus der Aufgabe, z. B. `getDay()` oder `getTimeTable(id)`, und für Listen `add(x)`, `size()`, `get(i)`
- **Array oder Liste:** Bei einem **Array** (Typ `Tisch[]`, `int[][]`) liest du die Länge mit `a.length` und greifst mit `a[i]` zu; bei einer **Liste** mit `liste.size()` und `liste.get(i)`. Welches von beiden vorliegt, zeigt die Signatur.
- **keine erfundenen Hilfsfunktionen** wie `sortiere()` oder `enthaelt()`: Was es nicht gibt, schreibst du selbst als Schleife aus. Elementare Grundfunktionen wie den Betrag `abs(x)`, die Länge eines Textes oder eine Typumwandlung wie `String(x)` darfst du verwenden
- **Ergebnis** mit `return` zurückgeben, im Typ der Signatur
Beispiel, Signatur vorgegeben: `zaehleFreieTische(tische: Liste<Tisch>): Ganzzahl`
- `funktion zaehleFreieTische(tische: Liste<Tisch>): Ganzzahl`
- `  anzahl = 0`
- `  for i = 0 to tische.size() - 1`
- `    if tische.get(i).getStatus() == "frei" then`
- `      anzahl = anzahl + 1`
- `    end if`
- `  end for`
- `  return anzahl`
`getStatus()` darf hier nur stehen, weil das (gedachte) Klassendiagramm diesen Getter vorgibt. Übernimm Namen genau so, wie sie in der Aufgabe stehen.

### K2 – Schleifengrenzen und vorzeitiger Schleifenabbruch (Stufe 3 Anwenden)
Du kannst über die Pseudocode-Grundlagen aus AP1 hinaus Schleifengrenzen beim Schreiben richtig setzen (Index von 0 bis Länge − 1; greifst du auf das Nachbarelement i − 1 oder i + 1 zu, beginnt die Schleife eine Stelle später oder endet eine Stelle früher) und eine Schleife mit einer zusätzlichen Bedingung (Merker oder Zähler) vorzeitig beenden, sobald das Ergebnis feststeht.

Erklärung:
Kopf-, fuß- und zählergesteuerte Schleifen kennst du aus AP1. Neu ist, die **Grenzen** beim eigenen Schreiben genau zu setzen:
- Indizes laufen von **0 bis Länge − 1**: `for i = 0 to liste.size() - 1`. Mit `to liste.size()` greift der letzte Durchlauf hinter das Ende (Laufzeitfehler).
- Zugriff auf den **Nachfolger** `a[i + 1]`: Die Schleife endet eine Stelle früher, `for i = 0 to n - 2`.
- Zugriff auf den **Vorgänger** `a[i - 1]`: Die Schleife beginnt eine Stelle später, `for i = 1 to n - 1`.
- **Grenzen aus dem Aufgabentext** genau in den Vergleich übersetzen: „mindestens 10“ → `>= 10`, „mehr als 10“ → `> 10`, „höchstens 10“ → `<= 10`, „weniger als 10“ → `< 10`.
**Vorzeitig beenden**, sobald das Ergebnis feststeht: statt der Zählschleife eine `while`-Schleife mit zusätzlicher Bedingung, z. B. einem Merker:
- `gefunden = false`
- `i = 0`
- `while i < liste.size() and not gefunden do`
- `  if liste.get(i).getNummer() == nummer then`
- `    gefunden = true`
- `  end if`
- `  i = i + 1`
- `end while`
Genauso mit einem **Zähler**: `while i < liste.size() and anzahl < max do` hört auf, sobald `max` Einträge gesammelt sind. Auch ein `return` mitten in der Schleife beendet sie – und zwar gleich die ganze Funktion.

### K3 – Zweidimensionale Arrays: Zeile suchen, Spalten durchlaufen (Stufe 3 Anwenden)
Du kannst zweidimensionale Arrays verarbeiten: Zeile und Spalte über zwei Indizes ansprechen, eine Zeile anhand eines Schlüsselwerts (z. B. Monat und Tag) suchen und die Spalten dieser Zeile durchlaufen, auch wenn die Nutzdaten erst ab einer bestimmten Spalte beginnen (Zeitslot j steht in Spalte 2 + j).

Erklärung:
Ein zweidimensionales Array ist eine Tabelle: `a[z][s]` ist der Wert in **Zeile z, Spalte s** (beide ab 0). Durchlaufen wird mit zwei geschachtelten Schleifen – außen die Zeilen, innen die Spalten.
Typisch in der Prüfung: Eine Zeile ist ein Datensatz, die ersten Spalten sind **Schlüssel**, danach folgen die **Nutzdaten**. Beispiel Belegungsplan: Spalte 0 = Monat, Spalte 1 = Tag, ab Spalte 2 die Zeitslots 0, 1, 2, … Zeitslot j steht also in Spalte `2 + j`, und Spalte s enthält Zeitslot `s - 2`.
Vorgehen:
- **Zeile suchen:** alle Zeilen durchlaufen, bis `plan[z][0] == monat and plan[z][1] == tag`
- **Spalten dieser Zeile durchlaufen:** `for j = 0 to anzahlSlots - 1` mit Zugriff auf `plan[z][2 + j]`
Beispiel: ersten freien Zeitslot (Wert 0) an einem Tag finden, sonst −1
- `for z = 0 to plan.length - 1`
- `  if plan[z][0] == monat and plan[z][1] == tag then`
- `    for j = 0 to anzahlSlots - 1`
- `      if plan[z][2 + j] == 0 then`
- `        return j`
- `      end if`
- `    end for`
- `  end if`
- `end for`
- `return -1`
`plan.length` ist die Zahl der Zeilen. `anzahlSlots` ist die Zahl der Zeitslots aus der Aufgabe (z. B. 8); steht sie dort nicht, ist es `plan[z].length - 2` (alle Spalten ohne die zwei Schlüsselspalten).
Achte darauf, Zeilen- und Spaltenindex nicht zu vertauschen und die Verschiebung um die Schlüsselspalten in beide Richtungen richtig umzurechnen.

### K5 – Sonderfälle vor dem ersten Zugriff (Stufe 3 Anwenden)
Du kannst im Pseudocode Sonderfälle vor dem ersten Zugriff abfangen und dafür den festgelegten Rückgabewert liefern, zum Beispiel eine leere Liste vor get(0) (Rückgabe null), einen Sonderwert als Parameter (Zeitslot −1 heißt „beliebiger Slot“), keinen passenden Eintrag (Rückgabe false) oder eine Division durch null, wenn nichts gezählt wurde.

Erklärung:
Bevor du auf ein Element zugreifst oder teilst, frag dich: **Welche Eingabe könnte das hier sprengen?** Den Sonderfall fängst du **vor dem ersten Zugriff** ab und lieferst genau den Wert, den die Aufgabe dafür festlegt.
- **leere Liste:** vor `liste.get(0)` prüfen, z. B. `if liste.size() == 0 then return null`
- **Sonderwert als Parameter:** Zeitslot `-1` heißt etwa „beliebiger Slot“ – dann alle Slots prüfen, sonst nur den angegebenen. Den Sonderwert nie als Index benutzen.
- **kein passender Eintrag:** `return false` steht **nach** der Schleife, nicht im `else`-Zweig in der Schleife – sonst endet die Suche beim ersten Eintrag, der nicht passt. Genauso bei einem Merker: Er wird bei einem Treffer auf `true` gesetzt und im `else`-Zweig **nicht** wieder auf `false` zurückgesetzt – sonst entscheidet allein das letzte Element
- **Division durch null:** Wurde nichts gezählt, nicht teilen, sondern den festgelegten Wert (z. B. 0) zurückgeben. Zählt die Schleife nur passende Elemente, steht diese Prüfung **nach der Schleife, direkt vor der Division** (`if anzahl == 0 then return 0`)
Beispiel:
- `funktion durchschnittsAlter(patienten: Liste<Patient>): Kommazahl`
- `  if patienten.size() == 0 then`
- `    return 0`
- `  end if`
- `  summe = 0.0`
- `  for i = 0 to patienten.size() - 1`
- `    summe = summe + patienten.get(i).getAlter()`
- `  end for`
- `  return summe / patienten.size()`
`summe` beginnt mit `0.0`, damit am Ende nicht ganzzahlig geteilt wird (siehe Datentypen). Nennt die Aufgabe keinen Rückgabewert für den Sonderfall, wähle einen sinnvollen und schreib dazu, was er bedeutet – oder löse eine Ausnahme aus (z. B. `throw new Exception("Liste leer")`), wenn kein Rückgabewert sinnvoll ist.

### K6 – Datentypen bei Rechnungen im Pseudocode (Stufe 3 Anwenden)
Du kannst bei Rechnungen im Pseudocode die Datentypen beachten: eine ungewollte Ganzzahldivision vermeiden (getMaxPersonen() / 2.0 statt / 2), eine Prozentschwelle mit ganzen Zahlen ohne Abschneiden formulieren (belegt * 100 > 80 * anzahlBetten statt belegt / anzahlBetten > 0.8) und Kommazahlen nicht in einer Integer-Variablen speichern.

Erklärung:
Ganzzahldivision rechnen kannst du aus AP1. Hier geht es darum, sie **im eigenen Code zu vermeiden**:
- **Ganzzahl / Ganzzahl ergibt eine Ganzzahl**, der Rest fällt weg: `5 / 2` ergibt 2. Brauchst du den genauen Wert, teile durch eine Kommazahl: `getMaxPersonen() / 2.0` ergibt bei 5 Personen 2,5.
- **Prozentschwelle ohne Kommazahlen:** Der Quotient `belegt / anzahlBetten` ist mit Ganzzahlen fast immer 0 (17 von 20 Betten: 17 / 20 = 0), die Bedingung `belegt / anzahlBetten > 0.8` ist dann falsch. Stattdessen beide Seiten mit `100 * anzahlBetten` multiplizieren, sodass keine Division übrig bleibt: `belegt * 100 > 80 * anzahlBetten` (1700 > 1600, wahr).
- **Ergebnisvariable passend wählen:** einen Durchschnitt oder Preis nicht in einer Ganzzahl-Variablen speichern, sonst gehen die Nachkommastellen verloren (aus 2,75 wird 2).
**Faustregel:** Steht in einer Rechnung eine Division, schau auf die Typen beider Seiten und auf den Typ der Variablen, die das Ergebnis aufnimmt.

### K7 – Kontrollstrukturen als Aktivitätsdiagramm (Stufe 3 Anwenden)
Du kannst die Kontrollstrukturen eines Algorithmus statt in Pseudocode als Aktivitätsdiagramm abbilden und zwischen beiden Formen übertragen: eine Zählschleife mit Initialisierung, Prüfung und Schrittweite als eigene Aktionen, geschachtelte Schleifen und Verzweigungen, ohne dass Bedingungen fehlen oder sich überschneiden.

Erklärung:
Die Notation des Aktivitätsdiagramms (Aktion, Entscheidung, Zusammenführung, Rücksprung) kennst du aus AP1. Neu ist das **Übertragen** eines Algorithmus zwischen Pseudocode und Diagramm:
- **Zählschleife** `for i = 0 to n - 1` zerfällt in drei Teile: Aktion `i = 0` (Initialisierung), Entscheidung `[i <= n - 1]` / `[sonst]` (Prüfung), am Ende des Rumpfs Aktion `i = i + 1` (Schrittweite) mit Rücksprung zur Zusammenführung vor der Entscheidung
- **kopfgesteuert** (`while`): Entscheidung vor dem Rumpf; **fußgesteuert** (`do … while`): erst der Rumpf, dann die Entscheidung
- **Verzweigung** `if … else`: Entscheidung mit Bedingungen in eckigen Klammern, danach eine Zusammenführung
- **Schachtelung:** Die innere Schleife liegt vollständig im Rumpf der äußeren. `j = 0` steht direkt vor der inneren Entscheidung, damit j bei jedem äußeren Durchlauf neu beginnt; der Ausgang der inneren Schleife führt zum Rest des äußeren Rumpfs (z. B. `i = i + 1`).
- **Bedingungen vollständig und überschneidungsfrei:** An jeder Entscheidung trifft genau ein Ausgang zu, z. B. `[x < 0]`, `[x == 0]`, `[x > 0]`. Falsch wären `[x <= 0]` und `[x >= 0]` (bei 0 träfen beide zu) oder `[x < 0]` und `[x > 0]` (bei 0 keiner).

### K8 – Algorithmus erst modellieren oder direkt codieren (Stufe 2 Verstehen)
Du kannst erklären, wann ein Algorithmus vor dem Programmieren sprachunabhängig als Pseudocode oder Aktivitätsdiagramm modelliert wird: bei komplexen Abläufen, weil das Modell den Lösungsweg vorab plant, im Team besprechbar macht und dokumentiert, während ein einfacher Ablauf wie die Summe zweier Werte direkt programmiert wird.

Erklärung:
Ein Modell trennt das **Was** (den Lösungsweg) vom **Wie** (der Syntax einer bestimmten Sprache).
- **komplexer Ablauf** (mehrere Schleifen, Sonderfälle, Zusammenspiel mehrerer Objekte): erst modellieren – Denkfehler fallen auf, bevor Code entsteht, und das Modell lässt sich mit Team oder Fachabteilung besprechen
- **Dokumentation:** Das Modell bleibt gültig, auch wenn das Programm später in einer anderen Sprache neu geschrieben wird
- **einfacher Ablauf** (zwei Zahlen addieren, einen Wert ausgeben): Ein Modell kostet mehr, als es bringt – man schreibt ihn direkt
Beispiel: Die Monatsauswertung eines Parkhauses (Auslastung je Tag, Durchschnitt, Tage mit Höchst- und Tiefstwert) planst du erst in Pseudocode; die Umrechnung von Euro in Cent schreibst du sofort.

### K9 – Modell in eine Programmiersprache übertragen (Stufe 3 Anwenden)
Du kannst einen in Pseudocode oder als Aktivitätsdiagramm modellierten Algorithmus in einer Programmiersprache umsetzen und ihn nur dort anpassen, wo die Sprache abweicht – eine fehlende Von-bis-Zählschleife durch eine Solange-Schleife mit Zähler nachbilden, Datentypen, Datenstrukturen sowie Ein- und Ausgabe anpassen –, ohne den Grundablauf des Modells zu ändern.

Erklärung:
Meist lässt sich das Modell **Zeile für Zeile** übernehmen: Jede Aktion wird eine Anweisung, jede Verzweigung ein `if`, jede Schleife eine Schleife.
Anpassen musst du dort, wo Sprache und Modell nicht zusammenpassen:
- **Kontrollstruktur fehlt:** Kennt die Sprache keine Zählschleife von–bis, bildest du sie mit Startwert, Solange-Schleife und `i = i + 1` nach
- **Datentypen:** Einen Prozentwert nicht versehentlich ganzzahlig teilen, sondern `100.0 * belegt / gesamt` rechnen
- **Datenstrukturen und Ein-/Ausgabe:** Aus „Ausgabe x“ wird eine Rückgabe, eine Konsolenausgabe oder ein Feld im Formular; aus einem Array kann eine Liste werden
Der **Grundablauf** – welche Schritte in welcher Reihenfolge unter welchen Bedingungen – bleibt gleich, sonst passen Modell und Dokumentation nicht mehr zum Programm.
Beispiel: `for i = 1 to n` wird in einer Sprache ohne Von-bis-Schleife zu `i = 1`, `while i <= n`, Rumpf, `i = i + 1`, `end while`.

## Lehrnotiz: Pseudocode und Aktivitätsdiagramm: Funktionen, Schleifengrenzen, Sonderfälle und Datentypen

**Aufteilung:**
- Erst modellieren oder direkt programmieren: K8
- Funktion zur vorgegebenen Signatur: K1
- Schleifengrenzen und vorzeitiges Ende: K2
- Sonderfälle und Datentypen: K5, K6
- Zweidimensionale Arrays: K3
- Pause möglich nach den zweidimensionalen Arrays.
- Übertragen in Aktivitätsdiagramm und Programmiersprache: K7, K9

**Schon geprüft:** In Prüfungen: K1 (2021W, 2023S, 2025W), K2 (2022S, 2024W, 2025W), K3 (2021W, 2022S), K5 (2021W, 2025W), K6 (2025S, 2025W), K7 (2021W) · Noch nicht geprüft: K8, K9

**Kerngedanken:**
- Die wiederkehrenden Lösungsmuster (filtern, Extremwert, Gruppenwechsel) sind ein eigener Stichpunkt; hier geht es um das Handwerk darunter.
- Eine Suche nach dem ersten Treffer darf das Ergebnis nach dem ersten Fund nicht mehr überschreiben – am saubersten endet die Schleife dann vorzeitig. Läuft sie ungebremst weiter und überschreibt das Ergebnis, kommt der letzte Treffer heraus.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K6 – Auswertung eines Rechenausdrucks mit gemischten Datentypen: (1) Das Programm wertet einen Ausdruck Operation für Operation aus, gleichrangige Operatoren wie * und / von links nach rechts. (2) Vor jeder einzelnen Operation bestimmt es die Datentypen der beiden Operanden; der Typ der Zielvariablen spielt dabei noch keine Rolle. (3) Sind beide Operanden Ganzzahlen, führt es eine Ganzzahldivision aus und verwirft die Nachkommastellen: 17 / 20 ergibt 0. (4) Ist ein Operand eine Kommazahl, wandelt es den anderen vorher implizit in eine Kommazahl um und teilt genau: 5 / 2.0 ergibt 2.5. (5) Das Zwischenergebnis geht mit seinem Typ in die nächste Operation: 100.0 * belegt / gesamt bleibt genau, belegt / gesamt * 100.0 rechnet mit dem abgeschnittenen Quotienten weiter (bei 17 von 20 mit 0). (6) Erst zum Schluss weist das Programm das Ergebnis der Variablen zu: Eine Ganzzahl-Variable kann keine Nachkommastellen aufnehmen. In C werden sie abgeschnitten, Java und C# verlangen dafür eine ausdrückliche Umwandlung. Eine Kommazahl-Variable holt verlorene Stellen nicht zurück. Vereinfacht: Diese Regeln gelten für Sprachen wie Java, C# oder C, an die sich der Prüfungs-Pseudocode anlehnt; manche Sprachen wie Python haben getrennte Operatoren für Ganzzahl- und Kommadivision.

**Typische Missverständnisse:**
- Viele denken, ein Sonderfall werde immer ganz oben geprüft; richtig ist: Zählt ein Durchschnitt nur passende Elemente, steht die Prüfung auf Anzahl 0 nach der Schleife, aber vor der Division.
- Viele denken, eine Zählschleife sei im Aktivitätsdiagramm eine Aktion „für alle i“; richtig ist: Initialisierung, Prüfung und Schrittweite stehen einzeln; fehlen sie, fehlen genau diese Bestandteile in der Bewertung.

**Fachwörter:**
- Signatur: Name, Parameter mit Datentyp, Rückgabetyp
- Merker: Wahrheitswert, der einen Treffer festhält
- Ganzzahldivision: Teilen, bei dem der Rest wegfällt
- Schrittweite: Erhöhung der Laufvariablen je Durchlauf
- Grundablauf: Schritte, Reihenfolge und Bedingungen des Modells

**So fragt die IHK:**
- Operator „implementieren“, vorgedruckte Kopfzeile (Signatur), Klassendiagramm-Auszug als Material. Die Lösungshinweise sind beispielhaft; andere richtige Lösungen zählen. Gewertet wird Logik vor Schreibweise, mit Punkten je Bestandteil; Folgefehler zählen nur einmal.
- Jüngere Aufgaben: Funktion über zwei Listen, Hälfte einer Personenzahl ausdrücklich ohne Ganzzahldivision, innere Schleife endet mit Merker vorzeitig (20 Punkte); Minimumsuche, die eine leere Liste mit `null` abfängt (10 Punkte); aus einem sortierten Array höchstens `max` Einträge ab jetzt übernehmen, mit zwei Schleifenbedingungen (15 Punkte).
- Ältere Aufgaben: zweidimensionaler Belegungsplan (Monat und Tag als Schlüsselspalten, Zeitslots dahinter, −1 für „beliebiger Slot“) oder ein vorgegebenes Struktogramm. Struktogramm und Programmablaufplan sind aus dem Katalog gestrichen; geantwortet wird in Pseudocode.
- Diagramme (Aktivitäts-, Sequenz-, Zustandsdiagramm) sind eigene Aufgaben mit bis zu 25 Punkten; das Übertragen einer Schleife ins Aktivitätsdiagramm leitet sich aus dem Katalog ab. Zu K8 und K9 gibt es keine echte Aufgabe.

**Fallen:**
- Modellieren: Pauschalregel nennen statt nach Komplexität abzuwägen und zu begründen.
- Signatur: beim Zählen das `return` in die Schleife schreiben; nicht auf jedem Weg einen Wert im Rückgabetyp liefern; Array- und Listenschreibweise mischen.
- Schleifen: in der `while`-Schleife das Hochzählen vergessen (Endlosschleife) oder Merker bzw. Zähler nicht in die Bedingung aufnehmen.
- Sonderfälle: einen Sonderwert für „alle“ mit `or` ohne Klammern an `and`-Bedingungen hängen – dann zählen falsche Elemente mit.
- Datentypen: bei der Prozentschwelle ein anderes Vergleichszeichen schreiben, als der Text verlangt (z. B. `>=` bei „mehr als 80 %“).
- Zweidimensional: einen Schlüssel bei der Zeilensuche vergessen; die Spalte statt der Slotnummer zurückgeben; den Wert für „keine Zeile“ im `else` der Zeilensuche zurückgeben.
- Diagramm: Schrittweite weglassen, Rücksprung hinter die Entscheidung führen, innere Laufvariable vor der äußeren Schleife setzen, Start- oder Endknoten vergessen.
- Übertragen: „nebenbei“ eine Bedingung ändern oder Startwert, Bedingung oder Schrittweite der nachgebildeten Schleife weglassen.
