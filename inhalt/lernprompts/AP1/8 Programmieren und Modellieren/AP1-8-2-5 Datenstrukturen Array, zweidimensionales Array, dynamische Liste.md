Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Code lesen, schreiben und prüfen › Datenstrukturen: Array, zweidimensionales Array, dynamische Liste

## So läuft unsere Sitzung

Du bist mein Lehrer für die IHK-Prüfung AP1 und am Ende mein Prüfer. Unten stehen der **Stoff** (meine Aussagen „Das muss ich können“ mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen zu genau diesem Thema.

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

## Stoff: Datenstrukturen: Array, zweidimensionales Array, dynamische Liste

Ziel: Datenstrukturen nach Speicherbedarf und Geschwindigkeit der Operationen vergleichen, Array und dynamische Liste abwägen und ein zweidimensionales Array lesen.

Das muss ich können:

### K2 – Eignung: Speicherbedarf und Geschwindigkeit (Stufe 2 Verstehen)
Du kannst erklären, woran man die Eignung einer Datenstruktur misst: am Speicherbedarf und an der Geschwindigkeit der Operationen, die das Programm oft braucht, weil keine Struktur alle Operationen gleich gut beherrscht.

Erklärung:
Jede Datenstruktur ist ein Kompromiss. Gemessen wird ihre **Effizienz** an zwei Größen:
- **Speicherbedarf:** Wie viel Platz braucht sie für die Daten und für Verwaltungsangaben?
- **Geschwindigkeit je Operation:** Wie schnell geht Zugriff, Einfügen, Löschen, Suchen?
Keine Struktur ist überall die beste:
- **Array:** Zugriff über den Index sehr schnell, feste Größe, Einfügen in der Mitte aufwendig.
- **Dynamische Liste:** wächst und schrumpft zur Laufzeit; dafür braucht sie meist mehr Speicher je Element, und der Zugriff auf eine bestimmte Position ist meist langsamer.
Man wählt also nach den Operationen, die das Programm **am häufigsten** ausführt.

### K4 – Array gegenüber dynamischer Liste (Stufe 2 Verstehen)
Du kannst Stärken und Schwächen eines Arrays gegenüber einer dynamischen Liste beschreiben: Das Array bietet schnellen Zugriff über den Index, hat aber eine beim Anlegen festgelegte Größe, verschwendet zu groß angelegt Speicher und macht Einfügen und Löschen aufwendig; eine dynamische Liste wächst und schrumpft dagegen zur Laufzeit.

Erklärung:
**Array – Stärken:** sehr schneller Lese- und Schreibzugriff über den Index; einfach aufgebaut, alle Elemente vom selben Typ.
**Array – Schwächen:**
- **feste Größe**, die beim Anlegen bekannt sein muss; man kann Elemente nur überschreiben, nicht anfügen oder entfernen
- großzügig angelegt (1000 Plätze für meist 30 Einträge) **verschwendet** es Speicher
- Einfügen in der Mitte heißt: alle folgenden Elemente verschieben bzw. ein neues Array anlegen
- Suche nach einem Wert muss im schlechtesten Fall alle Elemente durchgehen
**Dynamische Liste:** wächst beim Anfügen und schrumpft beim Entfernen zur Laufzeit – passend, wenn die Anzahl vorher unbekannt ist. Achtung: Je Element braucht eine verkettete Liste sogar mehr Speicher (bei ihr ist jedes Element mit dem nächsten verkettet, es speichert also zusätzlich einen Verweis darauf); sparsam ist sie nur, weil nichts auf Vorrat angelegt wird.

### K5 – Zweidimensionales Array als Array von Zeilen (Stufe 2 Verstehen)
Du kannst erklären, dass ein zweidimensionales Array ein Array von Zeilen ist: Die Länge des äußeren Arrays ist die Anzahl der Zeilen, jede Zeile hat ihre eigene Länge, die auch verschieden sein kann, deshalb läuft eine innere Schleife bis zur Länge der jeweiligen Zeile.

Erklärung:
Ein zweidimensionales Array ist ein **Array, dessen Elemente selbst Arrays sind**.
- `tabelle[i]` ist die ganze Zeile i, `tabelle[i][j]` das Element in Zeile i, Spalte j.
- `LÄNGE(tabelle)` = Anzahl der **Zeilen**, `LÄNGE(tabelle[i])` = Anzahl der Elemente **in Zeile i**.
- Weil jede Zeile eigenständig ist, können Zeilen **unterschiedlich lang** sein.
Beim Durchlaufen geht die äußere Schleife über die Zeilen, die innere bis `LÄNGE(tabelle[i]) - 1`. Wer stattdessen die Länge der ersten Zeile für alle nimmt, greift bei kürzeren Zeilen über das Ende hinaus – ein Laufzeitfehler.
Beispiel: Umsätze je Filiale (Zeile) und Monat (Spalte); eine neue Filiale hat erst 3 Monatswerte.

## Lehrnotiz: Datenstrukturen: Array, zweidimensionales Array, dynamische Liste

**Aufteilung:**
- Woran man eine Datenstruktur misst: K2
- Array oder dynamische Liste abwägen: K4
- Zweidimensionales Array lesen: K5

**Schon geprüft:** Noch nicht geprüft: K2, K4, K5

**Kerngedanken:**
- Die Entscheidung hängt an zwei Fragen: Steht die Anzahl der Elemente vorher fest, und was tut das Programm am häufigsten – über die Position lesen und überschreiben (spricht für das Array) oder einfügen und entfernen (spricht für die dynamische Liste)?
- Einfügen ist im Array teuer, weil die Elemente lückenlos hintereinander liegen: Dazwischen ist kein freier Platz, und ist das Array voll, muss ein größeres angelegt und alles umkopiert werden.
- Eine begründete Entscheidung nennt die häufige Operation oder die Anzahl aus der Situation und die dazu passende Eigenschaft der Struktur. Beim Array gehört dazu, warum seine Schwächen in diesem Fall nicht stören.
- `tabelle[i][j]` liest man in zwei Zügen: erst die Zeile i holen (selbst ein Array), dann darin das Element j. Beide Indizes zählen ab 0. Array und Index selbst sind Thema des Stichpunkts über die Bausteine eines Programms.

**Typische Missverständnisse:**
- Viele denken, die dynamische Liste sei die modernere und deshalb immer bessere Wahl; richtig ist: Entschieden wird nach den häufigsten Operationen, und bei fester Anzahl mit Zugriff über die Position ist das Array die bessere Wahl.
- Viele denken, `LÄNGE(tabelle)` zähle alle Werte der Tabelle; richtig ist: Es zählt nur die Zeilen, die Zahl der Werte steckt in den Längen der einzelnen Zeilen.

**Fachwörter:**
- Effizienz: Speicherbedarf und Geschwindigkeit einer Datenstruktur
- Speicherbedarf: Platz für Daten und Verwaltungsangaben
- Index: Positionsnummer eines Elements im Array
- dynamische Liste: wächst und schrumpft zur Laufzeit
- zweidimensionales Array: Array, dessen Elemente Arrays sind
- Laufzeitfehler: Abbruch während der Ausführung

**So fragt die IHK:**
- Zu diesem Stichpunkt gibt es keine eigene echte Aufgabe. Der Prüfungskatalog nennt „Variablen, Datentypen und -strukturen“.
- Denkbar sind kurze Teilaufgaben wie „Entscheiden Sie sich für eine Datenstruktur und begründen Sie“ oder „Erläutern Sie Vor- und Nachteile“ (2–4 Punkte, je Argument ein Punkt).
- Zweidimensionale Arrays kommen in echten Schreibtischtest-Aufgaben vor: eine Tabelle mit Zeilen und Spalten, Index ab 0, die Zeilen unterschiedlich weit belegt, dazu verschachtelte Schleifen. Wer Zeile und Spalte oder die Zeilenlänge falsch liest, rechnet dort falsch.

**Fallen:**
- Die Wahl nur mit „die Liste ist flexibler“ begründen, ohne die beiden Messgrößen; besonders der Speicherbedarf wird vergessen.
- Eine Struktur nennen, ohne die Entscheidung zu begründen.
- Bei einem Array-Vorschlag nur die Nachteile aufzählen und die Stärke (schneller Zugriff über den Index) weglassen – oder nur eine Schwäche nennen, wo mehrere verlangt sind.
- Annehmen, man könne in ein Array „einfach einfügen“.
- Zeile und Spalte vertauschen: Der erste Index wählt die Zeile, der zweite das Element darin.
- Bei einer festen Grenze der inneren Schleife nur an den Abbruch bei kürzeren Zeilen denken: Ist eine Zeile länger als die Grenze, gibt es dort keinen Fehler, aber ihre hinteren Werte werden still ausgelassen.
- Einen Fehler in der Schleifengrenze nur feststellen, ohne die Ursache (jede Zeile hat ihre eigene Länge) und die berichtigte Zeile anzugeben.
