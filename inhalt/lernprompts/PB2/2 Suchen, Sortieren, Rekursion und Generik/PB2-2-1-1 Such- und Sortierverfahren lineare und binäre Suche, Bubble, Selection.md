Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Suchen, Sortieren, Rekursion und Generik › Suchen, Sortieren und weiterführende Techniken › Such- und Sortierverfahren: lineare und binäre Suche, Bubble, Selection und Insertion Sort, Quicksort, Mergesort und O-Notation

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

## Stoff: Such- und Sortierverfahren: lineare und binäre Suche, Bubble, Selection und Insertion Sort, Quicksort, Mergesort und O-Notation

Ziel: Die beiden Suchverfahren erklären und vergleichen, einen elementaren Sortieralgorithmus in Pseudocode schreiben, auch für Objekte nach einem Attribut, und die drei Sortierverfahren am Vorgehen unterscheiden. Dazu die Laufzeit mit der O-Notation einordnen und Quicksort und Mergesort im Prinzip erklären.

Das muss ich können:

### K1 – Lineare Suche: Ablauf und Rückgabe (Stufe 2 Verstehen)
Du kannst die lineare Suche beschreiben: die Elemente der Reihe nach mit dem Gesuchten vergleichen, beim ersten Treffer abbrechen und das Element oder seinen Index zurückgeben, sonst einen festgelegten Wert wie −1 oder null; sie funktioniert auch auf unsortierten Daten.

Erklärung:
Die **lineare Suche** geht die Elemente der Reihe nach durch und vergleicht jedes mit dem Gesuchten.
- beim **ersten Treffer** abbrechen und das Element oder seinen Index zurückgeben
- nach dem letzten Element ohne Treffer einen **festgelegten Wert** liefern, z. B. `-1` (für einen Index) oder `null` (für ein Objekt)
- funktioniert auch auf **unsortierten** Daten
- Aufwand: im schlechtesten Fall n Vergleiche (Element steht ganz hinten oder fehlt)
Beispiel:
- `for i = 0 to liste.size() - 1`
- `  if liste.get(i) == gesucht then`
- `    return i`
- `  end if`
- `end for`
- `return -1`

### K2 – Binäre Suche gegen lineare Suche (Stufe 2 Verstehen)
Du kannst die binäre Suche beschreiben und mit der linearen vergleichen: In einer sortierten Folge das mittlere Element prüfen und die Hälfte verwerfen, in der das Gesuchte nicht liegen kann, bis es gefunden oder der Bereich leer ist; sie funktioniert nur auf sortierten Daten, braucht dafür aber nur etwa log₂(n) Vergleiche (bei 1.000 Elementen höchstens 10) statt bis zu n.

Erklärung:
Die **binäre Suche** setzt Daten voraus, die **nach dem Merkmal sortiert** sind, nach dem gesucht wird (eine nach Namen sortierte Kundenliste hilft bei der Suche nach einer Kundennummer nicht), und halbiert den Suchbereich mit jedem Schritt:
- Element in der **Mitte** prüfen: `mitte = (links + rechts) / 2` (ganzzahlig)
- Treffer → fertig
- Gesuchtes kleiner → links weitersuchen (`rechts = mitte - 1`), größer → rechts (`links = mitte + 1`)
- wiederholen, solange `links <= rechts`; ist der Bereich leer, gibt es das Element nicht
Beispiel: In `[3, 8, 12, 17, 25, 31, 40]` wird 25 gesucht. Mitte Index 3 (17) → zu klein, rechts weiter; Bereich 4–6, Mitte Index 5 (31) → zu groß, links weiter; Bereich 4–4, Mitte Index 4 (25) → Treffer nach 3 Vergleichen.
**Vergleich mit der linearen Suche:**
- linear: auch unsortiert, bis zu **n** Vergleiche
- binär: nur sortiert, etwa **log₂(n)** Vergleiche – bei 1.000 Elementen höchstens 10 (2¹⁰ = 1.024), bei einer Million höchstens 20
Die binäre Suche lohnt sich, wenn oft gesucht wird und die Daten ohnehin sortiert vorliegen; für eine einzelne Suche in unsortierten Daten wäre erst das Sortieren teurer als ein linearer Durchlauf.

### K4 – Sortieralgorithmus in Pseudocode, auch für Objekte (Stufe 3 Anwenden)
Du kannst einen Sortieralgorithmus deiner Wahl in Pseudocode schreiben, zum Beispiel Bubble Sort mit zwei verschachtelten Schleifen und dem Tausch zweier Elemente über eine Hilfsvariable, auch für ein Array von Objekten, die nach einem Attribut (über den Getter) sortiert werden.

Erklärung:
Welches Verfahren du schreibst, ist meist freigestellt – **Bubble Sort** ist am kürzesten:
- zwei verschachtelte Schleifen
- innen benachbarte Elemente `a[j]` und `a[j + 1]` vergleichen und bei falscher Reihenfolge **über eine Hilfsvariable tauschen** (ohne sie würde `a[j] = a[j + 1]` den alten Wert überschreiben)
- nach jedem äußeren Durchlauf steht das größte restliche Element hinten, die innere Schleife wird um eins kürzer
Aufsteigend, Array `a` mit `n` Elementen (`n` ist die Länge des Arrays; ist in der Prüfung nur das Array vorgegeben, schreibst du sie aus, z. B. `raeume.length - 2` statt `n - 2`, bei einer Liste `liste.size() - 2`):
- `for i = 0 to n - 2`
- `  for j = 0 to n - 2 - i`
- `    if a[j] > a[j + 1] then`
- `      temp = a[j]`
- `      a[j] = a[j + 1]`
- `      a[j + 1] = temp`
- `    end if`
- `  end for`
- `end for`
**Objekte nach einem Attribut:** verglichen wird über den Getter, getauscht werden die ganzen Objekte: `if a[j].getPreis() > a[j + 1].getPreis() then …`. **Absteigend** sortierst du, indem du `>` durch `<` ersetzt.

### K5 – Bubble, Selection und Insertion Sort (Stufe 2 Verstehen)
Du kannst Bubble Sort (benachbarte Elemente vergleichen und bei falscher Reihenfolge tauschen, Durchläufe wiederholen, bis nichts mehr getauscht wird), Selection Sort (jeweils das kleinste restliche Element suchen und nach vorn tauschen) und Insertion Sort (jedes Element in den bereits sortierten Teil einfügen) am Vorgehen unterscheiden.

Erklärung:
- **Bubble Sort:** benachbarte Elemente vergleichen und bei falscher Reihenfolge tauschen; Durchläufe wiederholen, bis alles sortiert ist – in der einfachen Form (K4) sind das immer n − 1 Durchläufe, mit Abbruchmerker (K7) endet es schon nach dem ersten Durchlauf ohne Tausch. Große Werte steigen wie Blasen nach hinten.
- **Selection Sort:** im unsortierten Rest das **kleinste Element suchen** und mit dem ersten unsortierten Element tauschen. Der sortierte Teil wächst von vorn.
- **Insertion Sort:** das nächste Element nehmen und **im bereits sortierten Teil an der richtigen Stelle einfügen**; größere Elemente rücken dafür nach hinten – wie beim Einsortieren von Spielkarten in die Hand.
Beispiel `[5, 2, 4, 1]` nach dem ersten Durchlauf:
- Bubble: `[2, 4, 1, 5]` – die 5 ist ganz nach hinten gewandert
- Selection: `[1, 2, 4, 5]` – die 1 wurde mit der 5 getauscht
- Insertion: `[2, 5, 4, 1]` – die 2 wurde vor die 5 eingefügt

### K6 – Best, Average und Worst Case beim Sortieren (Stufe 2 Verstehen)
Du kannst erklären, warum man bei der Laufzeit eines Sortierverfahrens Best, Average und Worst Case unterscheidet: Wie viele Vergleiche und Vertauschungen nötig sind, hängt vom Ausgangszustand der Daten ab – Bubble Sort mit Abbruchmerker braucht für bereits sortierte Daten einen einzigen Durchlauf, für umgekehrt sortierte die meisten.

Erklärung:
Ein Sortierverfahren ordnet die Elemente einer linearen Datenstruktur (Array, Liste) nach einem Kriterium, auf- oder absteigend. Wie lange es dafür braucht, hängt nicht nur von der **Anzahl** der Elemente ab, sondern auch davon, **wie vorsortiert** sie schon sind. Deshalb gibt man drei Fälle an:
- **Best Case:** die günstigste Eingabe, z. B. bereits sortiert – Bubble Sort mit Abbruchmerker kommt mit einem Durchlauf und n − 1 Vergleichen aus; Insertion Sort braucht je einzufügendem Element nur einen Vergleich, insgesamt ebenfalls n − 1 Vergleiche und keine Verschiebung
- **Worst Case:** die ungünstigste Eingabe, z. B. umgekehrt sortiert – fast jedes Paar wird verglichen und getauscht, die Zahl der Vergleiche wächst mit n²
- **Average Case:** zufällig gemischte Daten, der typische Fall im Betrieb
Nicht jedes Verfahren profitiert von Vorsortierung: Selection Sort sucht in jedem Durchlauf das Minimum im ganzen Rest und braucht deshalb immer gleich viele Vergleiche.
Beispiel: Eine Kundenliste, an die nur wenige neue Einträge angehängt wurden, ist fast sortiert – Insertion Sort ist hier sehr schnell.

### K7 – Optimierter Bubble Sort mit Abbruchmerker (Stufe 2 Verstehen)
Du kannst erklären, wie zwei Verbesserungen den Bubble Sort verkürzen: Die innere Schleife endet in jedem Durchlauf ein Element früher, weil das größte unsortierte Element schon am Ende steht, und ein Merker beendet das Verfahren nach einem Durchlauf ohne Tausch; so genügen höchstens n − 1 Durchläufe.

Erklärung:
Nach jedem Durchlauf ist das **größte** noch unsortierte Element ans Ende „aufgestiegen“ und steht dort endgültig richtig. Zwei Verbesserungen sparen deshalb Arbeit:
- **innere Schleife verkürzen:** Im Durchlauf mit der Nummer d (ab 0 gezählt) müssen die letzten d Elemente nicht mehr verglichen werden
- **Abbruchmerker:** Wird in einem ganzen Durchlauf nichts getauscht, ist das Array sortiert, weitere Durchläufe sind überflüssig
Höchstens n − 1 Durchläufe sind nötig, bei fast sortierten Daten oft nur einer oder zwei.
- `d = 0`
- `getauscht = true`
- `while getauscht = true and d < n - 1`
- `  getauscht = false`
- `  for j = 0 to n - 2 - d`
- `    if a[j] > a[j + 1] then`
- `      temp = a[j]`
- `      a[j] = a[j + 1]`
- `      a[j + 1] = temp`
- `      getauscht = true`
- `    end if`
- `  end for`
- `  d = d + 1`
- `end while`

### K8 – O-Notation und Laufzeitklassen (Stufe 2 Verstehen)
Du kannst die O-Notation erklären und die bekannten Verfahren einordnen: Sie gibt an, wie der Aufwand mit der Datenmenge n wächst, ohne konstante Faktoren und meist für den Worst Case – O(1) gleichbleibend (Zugriff über den Index), O(log n) logarithmisch (binäre Suche), O(n) linear (lineare Suche), O(n log n) (Mergesort, Quicksort im Mittel), O(n²) quadratisch (Bubble, Selection und Insertion Sort).

Erklärung:
Die **O-Notation** beschreibt, wie stark der Aufwand eines Algorithmus wächst, wenn die Datenmenge **n** größer wird. Gezählt werden Schritte (meist Vergleiche), nicht Sekunden; konstante Faktoren fallen weg, deshalb ist 3n + 5 einfach O(n). Angegeben wird meist der **Worst Case**.
- **O(1)**, konstant: Zugriff auf `a[i]` über den Index – egal wie groß das Array ist
- **O(log n)**, logarithmisch: binäre Suche – jede Runde halbiert den Bereich
- **O(n)**, linear: lineare Suche – im schlechtesten Fall jedes Element einmal
- **O(n log n)**: Mergesort, Quicksort im Mittel
- **O(n²)**, quadratisch: Bubble, Selection und Insertion Sort – zwei verschachtelte Schleifen über die Daten
Faustregel: Eine Schleife über alle Elemente ergibt O(n), zwei verschachtelte ergeben O(n²), ein Bereich, der sich jede Runde halbiert, ergibt O(log n).
Beispiel für n = 1.000: O(log n) ≈ 10 Schritte, O(n) = 1.000, O(n log n) ≈ 10.000, O(n²) = 1.000.000. Verdoppelt sich n, verdoppelt sich die Laufzeit bei O(n), bei O(n²) vervierfacht sie sich.

### K9 – Quicksort und Mergesort: Teile und herrsche (Stufe 2 Verstehen)
Du kannst Quicksort und Mergesort als Verfahren nach dem Prinzip „Teile und herrsche“ beschreiben: Quicksort wählt ein Pivotelement, ordnet kleinere Elemente links und größere rechts davon an und sortiert beide Teile rekursiv; Mergesort halbiert die Folge bis auf einzelne Elemente und fügt die sortierten Teile schrittweise zusammen. Beide brauchen im Mittel O(n log n) statt O(n²) Schritte, Quicksort fällt bei ungünstiger Pivotwahl auf O(n²), Mergesort braucht zusätzlichen Speicher.

Erklärung:
Beide Verfahren arbeiten nach **„Teile und herrsche“**: Das Problem wird in kleinere Teilprobleme zerlegt, diese werden (rekursiv, das heißt: das Verfahren ruft sich für jeden Teil selbst auf) gelöst und die Ergebnisse zusammengesetzt.
**Quicksort**
- ein **Pivotelement** wählen (z. B. das letzte Element)
- die Folge **aufteilen:** alles Kleinere links vom Pivot, alles Größere rechts – das Pivot steht danach endgültig richtig
- linken und rechten Teil auf dieselbe Weise sortieren, bis die Teile nur noch ein Element haben
Im Mittel O(n log n) und in der Praxis sehr schnell, sortiert im Array selbst ohne nennenswerten Zusatzspeicher. Ist das Pivot immer das kleinste oder größte Element (z. B. bei schon sortierten Daten und dem letzten Element als Pivot), wird nur ein Element abgespalten – dann O(n²).
**Mergesort**
- die Folge **halbieren**, bis nur noch einzelne Elemente übrig sind (ein Element ist immer sortiert)
- je zwei sortierte Teile **zusammenfügen** (mischen, engl. merge): immer das kleinere der beiden vordersten Elemente übernehmen
Immer O(n log n), auch im Worst Case, und stabil (gleiche Werte behalten ihre Reihenfolge). Nachteil: Beim Zusammenfügen braucht es ein zusätzliches Array der Größe n.
Beispiel Mergesort mit 5 2 8 1: halbieren zu 5 2 | 8 1, dann 5 | 2 | 8 | 1; zusammenfügen zu 2 5 und 1 8, dann zu 1 2 5 8.

## Lehrnotiz: Such- und Sortierverfahren: lineare und binäre Suche, Bubble, Selection und Insertion Sort, Quicksort, Mergesort und O-Notation

**Aufteilung:**
- Suchen: lineare Suche K1, binäre Suche mit Vergleich K2
- Die drei einfachen Sortierverfahren am Vorgehen unterscheiden: K5
- Bubble Sort selbst schreiben, auch für Objekte: K4
- Pause möglich nach dem Schreiben von Bubble Sort.
- Laufzeitfälle und verbesserter Bubble Sort: K6, K7
- O-Notation: K8
- Quicksort und Mergesort: K9

**Schon geprüft:** In Prüfungen: K4 (2022W, 2024S) · Noch nicht geprüft: K1, K2, K5–K9

**Kerngedanken:**
- Die binäre Suche braucht Daten, die nach genau dem Merkmal sortiert sind, nach dem gesucht wird; eine Sortierung nach einem anderen Attribut hilft nicht.
- Die innere Schleife von Bubble Sort darf höchstens bis Länge − 2 laufen, weil jeder Vergleich auch `a[j + 1]` liest. Lässt jemand das „− i“ weg, ist das nicht falsch, sondern nur überflüssige Arbeit.
- Der einfache Bubble Sort mit zwei Zählschleifen macht auch bei schon sortierten Daten alle Durchläufe. Erst der Abbruchmerker bringt den Best Case mit einem Durchlauf.
- Auch der verbesserte Bubble Sort bleibt O(n²), weil die O-Notation meist für den Worst Case angegeben wird; nur sein Best Case (schon sortiert) sinkt auf n − 1 Vergleiche, also O(n).

**Typische Missverständnisse:**
- Viele denken, Mergesort sortiere beim Halbieren; richtig ist: Die Ordnung entsteht erst beim Zusammenfügen.
- Viele denken, das Pivotelement müsse der Mittelwert sein; richtig ist: Es ist irgendein Element der Folge, und seine Wahl entscheidet über schnell oder langsam.
- Viele denken, eine Suche ohne Treffer ende mit einer Fehlermeldung; richtig ist: Sie gibt einen festgelegten Wert zurück, mit dem der Aufrufer weiterarbeitet.

**Fachwörter:**
- lineare Suche: der Reihe nach vergleichen
- binäre Suche: Mitte prüfen, Hälfte verwerfen
- Hilfsvariable: Zwischenspeicher beim Tausch zweier Elemente
- Abbruchmerker: beendet Sortieren nach Durchlauf ohne Tausch
- Worst Case: ungünstigste Eingabe, meiste Schritte
- O-Notation: Wachstum des Aufwands mit n
- Pivotelement: Vergleichselement, um das Quicksort aufteilt
- Teile und herrsche: zerlegen, Teile lösen, zusammensetzen

**So fragt die IHK:**
- Geprüft wurde bisher nur das Sortieren selbst. Suchverfahren, O-Notation, Quicksort und Mergesort kamen nicht als eigene Aufgabe vor.
- Zweimal war ein Sortieralgorithmus in Pseudocode zu erstellen. Einmal ging es um ein Array von Objekten, aufsteigend nach einem ganzzahligen Attribut, das nur über einen Getter erreichbar ist; das Verfahren war in Stichpunkten beschrieben, gemeint war Bubble Sort.
- Das andere Mal (12 Punkte, Operatoren „angeben“ und „nennen“) war ein „Sortieralgorithmus eigener Wahl“ mit Namen und übergebener Vergleichsfunktion verlangt; die Vergleichsfunktion gehört zum Stichpunkt „Generische Klassen und Funktionsobjekte“.
- Die Lösungshinweise zeigen Bubble Sort mit zwei Zählschleifen, Nachbarvergleich und Tausch über eine Hilfsvariable; die Schreibweise ist frei.
- Gezählt wird nach Bestandteilen: Schleifen mit Grenzen ohne Zugriff hinter das Ende, Vergleich über den Getter in der richtigen Richtung, vollständiger Tausch der ganzen Objekte, gegebenenfalls der Name des Verfahrens.
- Zu Suche und Laufzeit gibt es keine echte Aufgabe; der Katalog verlangt, Such- und Sortierverfahren zu kennen. Zu erwarten wäre ein Beschreiben oder Vergleichen mit wenigen Punkten.

**Fallen:**
- Lineare Suche: Den Rückgabewert für „nicht gefunden“ in einen `else`-Zweig innerhalb der Schleife schreiben; dann endet die Suche beim ersten Nicht-Treffer. Er gehört hinter die Schleife.
- Binäre Suche: `rechts = mitte` statt `mitte - 1` setzen, obwohl die Mitte schon geprüft ist; ist der Bereich nur noch ein Element groß, ändert er sich dann nicht mehr und die Schleife läuft endlos.
- Binäre Suche: Beim Beschreiben nur „halbiert die Liste“ schreiben, ohne zu sagen, welche Hälfte weiter durchsucht wird und wann die Suche endet.
- Selection und Insertion Sort verwechseln: Selection sucht im Rest und tauscht, Insertion nimmt das nächste Element und schiebt es in den sortierten Teil.
- Bubble Sort schreiben: Die innere Schleife bis Länge − 1 laufen lassen; dann liest `a[j + 1]` hinter dem Ende.
- Bubble Sort für Objekte: Nur den Attributwert tauschen statt der ganzen Objekte; dann passen die übrigen Attribute nicht mehr zum Wert.
- Bubble Sort für Objekte: Direkt auf das Attribut zugreifen, obwohl nur ein Getter vorgegeben ist.
- Die Sortierrichtung der Aufgabe übersehen oder den verlangten Namen des Verfahrens weglassen.
- Abbruchmerker: Ihn nur einmal vor der äußeren Schleife auf `false` setzen statt am Anfang jedes Durchlaufs; nach dem ersten Tausch bleibt er dann immer `true`.
- O-Notation: Ein schnelleres Verfahren nennen, aber seine Laufzeitklasse weglassen.
- Quicksort und Mergesort beim Beschreiben vertauschen oder beim Vergleich nur einen Nachteil kennen (Quicksort: Worst Case O(n²); Mergesort: Zusatzspeicher).
