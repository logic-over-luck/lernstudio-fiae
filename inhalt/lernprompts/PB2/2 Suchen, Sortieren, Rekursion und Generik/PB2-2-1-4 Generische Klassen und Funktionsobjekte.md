Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Suchen, Sortieren, Rekursion und Generik › Suchen, Sortieren und weiterführende Techniken › Generische Klassen und Funktionsobjekte

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

## Stoff: Generische Klassen und Funktionsobjekte

Ziel: Generische Klassen erklären und Algorithmen flexibel machen, indem eine Vergleichsfunktion als Parameter übergeben wird.

Das muss ich können:

### K1 – Generische Klasse mit Typparameter (Stufe 2 Verstehen)
Du kannst den Begriff generische Klasse erläutern: Die Klasse wird mit einem Typparameter geschrieben (z. B. List<T>) und erst bei der Verwendung für einen bestimmten Typ festgelegt, sodass derselbe Code für verschiedene Datentypen typsicher funktioniert.

Erklärung:
Eine **generische Klasse** wird mit einem **Typparameter** geschrieben, meist `T`: `List<T>`, `Stapel<T>`. Welcher Typ das ist, wird erst bei der **Verwendung** festgelegt: `List<Kunde>`, `List<Integer>`.
- derselbe Code funktioniert für **verschiedene Datentypen** und muss nicht je Typ neu geschrieben werden
- **typsicher:** Der Compiler prüft, dass in eine `List<Kunde>` nur Kunden kommen; beim Herausholen ist keine Typumwandlung (Cast) nötig
- zum Vergleich: Eine Liste von beliebigen Objekten nimmt alles auf, Fehler fallen erst zur Laufzeit auf
- für den Typparameter können **Einschränkungen** festgelegt werden, z. B. `T extends Comparable<T>` (Java) – dann sind nur Typen erlaubt, die sich vergleichen lassen
Beispiel: `Box<T>` mit dem Attribut `inhalt: T` und der Methode `get(): T` – eine `Box<String>` liefert dann einen String, eine `Box<Integer>` eine Ganzzahl.

### K2 – Vergleichsfunktion mit 1, 0 oder −1 (Stufe 3 Anwenden)
Du kannst eine Vergleichsfunktion für zwei Objekte schreiben, die 0 bei Gleichheit, einen positiven Wert, wenn das erste größer ist, und sonst einen negativen Wert liefert; vergleicht sie Kommazahlen (z. B. ein Gehalt als Double), gibst du nicht die Differenz als Integer zurück, sondern über Verzweigungen 1, 0 oder −1, weil das Abschneiden eine Differenz wie 0,5 zu 0 macht.

Erklärung:
Eine **Vergleichsfunktion** bekommt zwei Objekte und sagt, in welcher Reihenfolge sie stehen:
- **0**, wenn beide gleich sind
- ein **positiver** Wert, wenn das erste größer ist (also nach hinten gehört)
- ein **negativer** Wert, wenn das erste kleiner ist
Bei Ganzzahlen genügt die Differenz: `return a.getAlter() - b.getAlter()`.
**Vorsicht bei Kommazahlen:** Muss die Funktion eine Ganzzahl liefern, darfst du die Differenz nicht einfach umwandeln – `(int)(3000.5 - 3000.0)` ergibt 0, die beiden Gehälter gälten als gleich. Die Differenz direkt zurückzugeben (`return a.getGehalt() - b.getGehalt()`) geht ebenfalls nicht: Sie ist ein Double, die Funktion soll aber eine Ganzzahl (Integer) liefern – ein Typkonflikt. Deshalb mit Verzweigungen:
- `funktion vergleicheGehalt(a: Mitarbeiter, b: Mitarbeiter): Ganzzahl`
- `  if a.getGehalt() > b.getGehalt() then`
- `    return 1`
- `  end if`
- `  if a.getGehalt() < b.getGehalt() then`
- `    return -1`
- `  end if`
- `  return 0`
Für eine absteigende Reihenfolge tauschst du die Vorzeichen (bzw. vertauschst a und b).

### K3 – Sortieren mit übergebenem Funktionsobjekt (Stufe 3 Anwenden)
Du kannst einen Sortieralgorithmus deiner Wahl so schreiben und benennen, dass er ein übergebenes Funktionsobjekt zum Vergleichen aufruft (ist f(a, b) > 0, wird getauscht), auch auf einer generischen Liste mit get, set und size statt auf einem Array, und damit dieselbe Sortierfunktion für verschiedene Kriterien nutzen (z. B. Kurs, Datum).

Erklärung:
Statt im Sortieralgorithmus fest `a[j] > a[j + 1]` zu schreiben, bekommt die Funktion ein **Funktionsobjekt** `f` (ein Objekt, in dem eine Funktion gespeichert ist und das man wie eine Funktion aufruft) als Parameter und ruft es an der Vergleichsstelle auf: Ist `f(a, b) > 0`, gehört `a` hinter `b`, also wird getauscht. Wie das Funktionsobjekt gespeichert und aufgerufen wird, gibt die Aufgabe vor. Der Typ `Vergleichsfunktion<T>` im Beispiel steht für ein Funktionsobjekt, das zwei Werte vom Typ `T` bekommt und eine Ganzzahl liefert.
Auf einer **generischen Liste** greifst du mit `get(i)` und `set(i, x)` statt mit `a[i]` zu, die Länge liefert `size()`:
- `funktion sortiere(liste: List<T>, f: Vergleichsfunktion<T>)`
- `  for i = 0 to liste.size() - 2`
- `    for j = 0 to liste.size() - 2 - i`
- `      if f(liste.get(j), liste.get(j + 1)) > 0 then`
- `        temp = liste.get(j)`
- `        liste.set(j, liste.get(j + 1))`
- `        liste.set(j + 1, temp)`
- `      end if`
- `    end for`
- `  end for`
**Nutzen:** Dieselbe Funktion sortiert nach verschiedenen Kriterien, je nachdem, welche Vergleichsfunktion übergeben wird – `sortiere(aktien, vergleicheKurs)` oder `sortiere(aktien, vergleicheDatum)`. Verlangt die Aufgabe, den Algorithmus zu benennen, schreib dazu, welchen du verwendest (hier Bubble Sort).

## Lehrnotiz: Generische Klassen und Funktionsobjekte

**Aufteilung:**
- Generische Klasse erläutern: K1
- Vergleichsfunktion schreiben: K2
- Sortieren mit übergebenem Funktionsobjekt auf einer generischen Liste: K3 – braucht beides davor

**Schon geprüft:** In Prüfungen: K1 (2022W), K2 (2022W), K3 (2022W, 2024S)

**Kerngedanken:**
- Ein Funktionsobjekt ist ein Objekt, in dem eine Funktion gespeichert ist und das man wie eine Funktion aufrufen kann. So lässt sich eine Vergleichsfunktion als Parameter an die Sortierfunktion übergeben.
- Gegenüber dem Bubble Sort auf einem Array ändern sich genau drei Dinge: die Signatur (Liste und Funktionsobjekt als Parameter), die Vergleichszeile (`f(…) > 0`) und die Zugriffe (`get`, `set`, `size`). Bubble Sort selbst gehört zum Stichpunkt „Such- und Sortierverfahren“.
- Was die Rückgabe bedeutet, legt die Aufgabe fest. „Größer 0, wenn das zweite Element vor das erste gehört“ ist dieselbe Regel wie „größer 0, wenn das erste größer ist“: Bei `> 0` wird getauscht.

**Typische Missverständnisse:**
- Viele denken, ein positiver Rückgabewert heiße „das erste kommt zuerst“; richtig ist: Das erste ist größer und gehört nach hinten.
- Viele denken, eine generische Klasse sei eine Liste, in die alles passt; richtig ist: Sie wird bei der Verwendung auf einen Typ festgelegt, und der Compiler lässt nur diesen Typ hinein.

**Fachwörter:**
- generische Klasse: Klasse mit Typparameter
- Typparameter: Platzhalter für einen Typ, meist T
- typsicher: Compiler prüft den Typ
- Vergleichsfunktion: liefert Reihenfolge zweier Objekte als Zahl
- Funktionsobjekt: Objekt, das eine Funktion speichert
- Typumwandlung (Cast): Wert in anderen Typ umwandeln

**So fragt die IHK:**
- Das Thema kam in zwei Prüfungen vor, jeweils als Fortsetzung einer Sortieraufgabe.
- Erste Prüfung (Aufgabe mit 25 Punkten): Zuerst war ein Bubble Sort für ein Array von Objekten zu schreiben. Dann kam eine Vergleichsfunktion für zwei Objekte nach einem Gehalt als Kommazahl, also genau der Fall mit dem Abschneiden. Dann war der Begriff generische Klasse zu „erläutern“.
- Zuletzt war dort der eigene Algorithmus zu „aktualisieren“ (7 Punkte). Als Parameter kamen eine generische Liste mit den vorgegebenen Methoden `get`, `set`, `size` und ein Funktionsobjekt hinzu. Wie es gespeichert und aufgerufen wird, stand in einer kleinen Tabelle.
- Der Lösungshinweis zeigt Bubble Sort mit `f(liste.get(j), liste.get(j+1)) > 0` und Tausch über eine Hilfsvariable vom Typ `T` mit `get` und `set`.
- Zweite Prüfung (12 Punkte, Operatoren „angeben“ und „nennen“): Verlangt war ein „Sortieralgorithmus eigener Wahl“ für ein Array mit übergebenem Funktionsobjekt, mit Namen des Verfahrens. Die Rückgabe war dort andersherum formuliert („> 0, wenn das zweite vor das erste gehört“).
- Gezählt wird nach Bestandteilen: Signatur mit beiden Parametern, Schleifen mit richtigen Grenzen über `size()` oder `length`, Aufruf des Funktionsobjekts an der Vergleichsstelle mit `> 0`, vollständiger Tausch mit den vorgegebenen Zugriffsmethoden, Name des Verfahrens, wenn verlangt.
- Die Schreibweise ist frei. Folgefehler aus dem ersten Algorithmus werden nicht doppelt abgezogen.
- Typ, Speichern und Aufruf des Funktionsobjekts und die Methoden der Liste standen in beiden bisherigen Prüfungen in der Aufgabe. Eine Übungsaufgabe gibt sie deshalb ebenfalls vor.

**Fallen:**
- Beim „Erläutern“ der generischen Klasse nur „Klasse mit T“ schreiben. Verlangt sind drei Dinge: Typparameter, Festlegung erst bei der Verwendung, derselbe Code typsicher für verschiedene Typen.
- In der Vergleichsfunktion den Fall „gleich“ mit Rückgabe 0 vergessen.
- Im Tausch einem Methodenaufruf etwas zuweisen (`liste.get(j) = …`); geschrieben wird mit `set`.
- Das Funktionsobjekt als Parameter annehmen, an der Vergleichsstelle aber doch fest einen Getter vergleichen.
- Mit `liste[j]` auf die Liste zugreifen oder gewohnte Methodennamen benutzen, obwohl die Aufgabe andere vorgibt.
- Die Schleifengrenzen vom Array übernehmen, ohne die Länge über die vorgegebene Methode der Liste zu holen.
- Für absteigend oder ein zweites Kriterium eine zweite Sortierfunktion schreiben statt einer neuen Vergleichsfunktion.
- Den Namen des Verfahrens weglassen, obwohl „nennen“ verlangt ist.
