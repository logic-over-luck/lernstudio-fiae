Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmlogik und Pseudocode › Algorithmen in Pseudocode › Algorithmen über Arrays und Listen: filtern, zählen, Extremwerte, abgleichen, gruppieren

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

## Stoff: Algorithmen über Arrays und Listen: filtern, zählen, Extremwerte, abgleichen, gruppieren

Ziel: Wiederkehrende Grundmuster sicher anwenden: Elemente filtern, zählen und summieren, Extremwerte bestimmen, Listen und Zeiträume abgleichen, Häufigkeiten in einem Ergebnisarray zählen, Nachbarelemente vergleichen und sortierte Daten gruppenweise auswerten.

Das muss ich können:

### K1 – Elemente nach Bedingungen filtern (Stufe 3 Anwenden)
Du kannst eine Liste oder ein Array durchlaufen und die Elemente, die eine oder mehrere Bedingungen erfüllen, in eine Ergebnisliste übernehmen und diese zurückgeben.

Erklärung:
Muster **Filtern**: aus einer Liste alle Elemente herausholen, die eine Bedingung erfüllen.
- leere **Ergebnisliste** vor der Schleife anlegen
- jedes Element durchlaufen
- Bedingung prüfen, mehrere mit `and` / `or` verknüpft
- trifft sie zu: `ergebnis.add(element)`
- **nach** der Schleife `return ergebnis`
Beispiel: alle freien Tische mit mindestens `personen` Plätzen
- `funktion passendeTische(tische: Liste<Tisch>, personen: Ganzzahl): Liste<Tisch>`
- `  ergebnis = neue Liste<Tisch>`
- `  for i = 0 to tische.size() - 1`
- `    t = tische.get(i)`
- `    if t.getStatus() == "frei" and t.getPlaetze() >= personen then`
- `      ergebnis.add(t)`
- `    end if`
- `  end for`
- `  return ergebnis`
Passt nichts, wird die leere Liste zurückgegeben – das ist meist genau richtig und braucht keinen eigenen Sonderfall.

### K2 – Zählen, Summieren und Durchschnitt (Stufe 3 Anwenden)
Du kannst zählen, summieren und einen Durchschnitt berechnen, auch nur für die Elemente, die eine Bedingung erfüllen, zum Beispiel die Tage, an denen ein Kurs besser als der Index war.

Erklärung:
Zählen, Summieren und Durchschnitt folgen demselben Aufbau:
- Zähler und Summe **vor** der Schleife mit 0 belegen (in der Schleife würden sie jedes Mal zurückgesetzt)
- in der Schleife: Bedingung prüfen, dann `anzahl = anzahl + 1` bzw. `summe = summe + wert`
- nach der Schleife: Durchschnitt `summe / anzahl` – nur wenn `anzahl > 0`, und als Kommazahl
Beispiel: An wie vielen Tagen war die Aktie „besser“ als der Index, also ihre prozentuale Veränderung größer als die des Index, und wie hoch war diese Veränderung an diesen Tagen im Schnitt? (Das Array `kurse` enthält je Tag ein Objekt mit beiden Veränderungen; Kurs und Indexstand selbst, etwa 100 und 15 000, wären nicht vergleichbar.)
- `anzahl = 0`
- `summe = 0.0`
- `for i = 0 to kurse.length - 1`
- `  if kurse[i].getProzVAktie() > kurse[i].getProzVDAX() then`
- `    anzahl = anzahl + 1`
- `    summe = summe + kurse[i].getProzVAktie()`
- `  end if`
- `end for`
- `if anzahl > 0 then`
- `  schnitt = summe / anzahl`
- `else`
- `  schnitt = 0`
- `end if`
Für einen Zeitraum lautet die Bedingung entsprechend `datum >= von and datum <= bis`.

### K3 – Kleinstes oder größtes Element mit Index (Stufe 3 Anwenden)
Du kannst das kleinste oder größte Element nach einem Kriterium bestimmen: mit dem ersten Element oder dem größten bzw. kleinsten möglichen Wert (z. B. Integer.MAX_VALUE, Double.MAX_VALUE) beginnen, jedes weitere vergleichen und neben dem bisher besten Wert auch seinen Index merken; auch das Element mit der kleinsten Abweichung von einem Zielwert und wiederholt, bis alle Elemente verbraucht sind (nächstgelegene Position wählen, übernehmen und aus der Liste entfernen).

Erklärung:
Muster **Extremwert** (Minimum oder Maximum nach einem Kriterium):
- **Startwert:** das erste Element – oder bei der Minimumsuche der größtmögliche Wert (`Integer.MAX_VALUE`, `Double.MAX_VALUE`), bei der Maximumsuche der kleinstmögliche (`Integer.MIN_VALUE`; bei Kommazahlen `-Double.MAX_VALUE`, denn `Double.MIN_VALUE` ist in Java die kleinste positive Zahl, nicht die kleinste Zahl). Nicht 0: Sind alle Werte größer, bliebe 0 fälschlich das Minimum.
- jedes weitere Element vergleichen; ist es besser, **Wert und Index** (oder das Objekt) merken
- nach der Schleife das Gemerkte zurückgeben
Beispiel: Index des günstigsten Angebots (bei leerer Liste gibt es keins – dann vorab −1 oder den Wert, den die Aufgabe festlegt)
- `if angebote.size() == 0 then`
- `  return -1`
- `end if`
- `minIndex = 0`
- `for i = 1 to angebote.size() - 1`
- `  if angebote.get(i).getPreis() < angebote.get(minIndex).getPreis() then`
- `    minIndex = i`
- `  end if`
- `end for`
- `return minIndex`
**Kleinste Abweichung von einem Zielwert:** Verglichen wird nicht der Wert selbst, sondern der Abstand `abs(wert - ziel)` – bzw. bei Positionen die Entfernung.
**Wiederholt, bis alle verbraucht sind:** Eine Route soll immer die nächstgelegene offene Position anfahren. Eine äußere Schleife läuft, solange noch Positionen offen sind; darin sucht eine Minimumsuche die nächstgelegene, hängt sie an die Route an, entfernt sie aus der Liste der offenen (z. B. mit `remove(index)`, wenn die Liste das anbietet) und nimmt sie als neue Ausgangsposition. Der Startwert der Minimumsuche (`minAbstand = Double.MAX_VALUE`) wird in **jedem** Durchlauf der äußeren Schleife (`while offen.size() > 0 do`) neu gesetzt, sonst bleibt der kleinste Abstand der vorigen Runde stehen.

### K4 – Zwei Listen und Zeiträume abgleichen (Stufe 3 Anwenden)
Du kannst zwei Listen mit verschachtelten Schleifen abgleichen, zum Beispiel ob eine Reservierung denselben Tisch am selben Datum belegt, und über einen Datumsbereich Tag für Tag zählen (date = date + 1), wie viele Einträge einen Tag im Zeitraum von–bis enthalten; dabei setzt du die Grenzen genau (Aufnahmetag zählt, Entlassungstag nicht: datumVon <= tag < datumBis).

Erklärung:
**Zwei Listen abgleichen:** äußere Schleife über die eine Liste, innere über die andere; in der inneren wird verglichen.
Beispiel: Welche Tische sind an einem Datum noch frei?
- `freie = neue Liste<Tisch>`
- `for i = 0 to tische.size() - 1`
- `  belegt = false`
- `  for j = 0 to reservierungen.size() - 1`
- `    r = reservierungen.get(j)`
- `    if r.getTischNr() == tische.get(i).getNr() and r.getDatum() == datum then`
- `      belegt = true`
- `    end if`
- `  end for`
- `  if not belegt then`
- `    freie.add(tische.get(i))`
- `  end if`
- `end for`
Der **Merker** `belegt` wird vor jeder inneren Schleife zurückgesetzt, sonst trägt er das Ergebnis des vorigen Tischs weiter.
**Zeitraum Tag für Tag:** Soll gezählt werden, wie viele Einträge an jedem Tag eines Zeitraums aktiv sind, läuft eine Schleife über die Tage (`tag = tag + 1`) und prüft für jeden Eintrag, ob der Tag in seinem Zeitraum liegt. Die **Grenzen** gibt die Aufgabe vor: Zählt der Aufnahmetag, der Entlassungstag aber nicht, lautet die Bedingung `datumVon <= tag and tag < datumBis`. Aufnahme am 3., Entlassung am 5. heißt also: belegt am 3. und 4.
Beispiel: Tage, an denen eine Station zu mehr als 80 % belegt war (`belegung: Belegung[]`, Zeitraum `startDatum` bis `endDatum`)
- `anzahlTage = 0`
- `tag = startDatum`
- `while tag <= endDatum do`
- `  belegt = 0`
- `  for i = 0 to belegung.length - 1`
- `    b = belegung[i]`
- `    if b.getStationId() == stationId and b.getDatumVon() <= tag and tag < b.getDatumBis() then`
- `      belegt = belegt + 1`
- `    end if`
- `  end for`
- `  if belegt * 100 > 80 * anzahlBetten then`
- `    anzahlTage = anzahlTage + 1`
- `  end if`
- `  tag = tag + 1`
- `end while`
- `return anzahlTage`
Der Zähler `belegt` wird für **jeden Tag** neu auf 0 gesetzt, gezählt werden nur Einträge der gesuchten Station, und die Schwelle wird je Tag geprüft. Ob der letzte Tag des Zeitraums mitzählt (`<=` oder `<`), entnimmst du der Aufgabe.

### K5 – Häufigkeiten je Schlüssel im Ergebnisarray (Stufe 3 Anwenden)
Du kannst Häufigkeiten je Schlüssel zählen: das Ergebnisarray vorher in passender Größe anlegen (ein- oder zweidimensional, z. B. new Integer[15] oder Tage des Monats × 10 Öffnungsstunden), den Index aus dem Fachwert berechnen (Tag − 1, Stunde − 9, Haltestelle − 1) und den Zähler an dieser Stelle erhöhen.

Erklärung:
Sind die Schlüssel **kleine ganze Zahlen** (Tag, Stunde, Haltestellennummer), zählst du Häufigkeiten in einem **Ergebnisarray**:
- **Größe festlegen:** so viele Stellen wie mögliche Schlüssel, z. B. 15 Haltestellen → `new Integer[15]`, alle Stellen auf 0 setzen
- **Index aus dem Fachwert berechnen**, weil Arrays bei 0 beginnen: Haltestelle 1 → Index 0, also `haltestelle - 1`; Öffnung ab 9 Uhr → `stunde - 9`; Tag des Monats → `tag - 1`
- **Zähler erhöhen:** `zaehler[index] = zaehler[index] + 1`
Zweidimensional, z. B. Besuche je Tag und Stunde bei 10 Öffnungsstunden (9 bis 19 Uhr):
- `zaehler = new Integer[tageImMonat][10]`
- `alle Stellen von zaehler auf 0 setzen`
- `for i = 0 to besuche.size() - 1`
- `  t = besuche.get(i).getTag() - 1`
- `  s = besuche.get(i).getStunde() - 9`
- `  zaehler[t][s] = zaehler[t][s] + 1`
- `end for`
Prüfe mit dem kleinsten und größten Fachwert, ob der Index im Bereich 0 bis Größe − 1 bleibt: Stunde 9 → 0, Stunde 18 → 9.
**Anwesenheit statt Ereignisse:** Soll je Stunde stehen, wie viele Personen **anwesend** waren, wirkt ein Eintritt auf seine Stunde und alle folgenden: `for j = s to 9` mit `zaehler[t][j] = zaehler[t][j] + eintrag.getNoPeople()` (ein Gruppenticket zählt mit seiner Personenzahl). Geht eine Person, wird sie erst ab der nächsten Stunde abgezogen: `for j = s + 1 to 9` mit `zaehler[t][j] = zaehler[t][j] - 1`. `eintrag` ist dabei das aktuelle Element (`besuche.get(i)`), `getNoPeople()` sein Getter für die Personenzahl; die Zahl der Zeilen (Tage im Monat) liefert eine vorgegebene Methode der Datumsklasse wie `getDaysOfMonth()`.

### K7 – Nachbarelemente verrechnen und Gruppenwechsel (Stufe 3 Anwenden)
Du kannst aufeinanderfolgende Elemente miteinander verrechnen (Element i mit Element i − 1, wenn beide dasselbe Datum haben; Spalte m + 1 minus Spalte m) und auf nach einem Schlüssel sortierte Daten den Gruppenwechsel anwenden: bei Wechsel des Schlüssels das Ergebnis der Gruppe ausgeben oder übernehmen, die Gruppenwerte zurücksetzen und die letzte Gruppe nach der Schleife nicht vergessen.

Erklärung:
**Nachbarn verrechnen:** Element i wird mit Element i − 1 verglichen oder verrechnet, z. B. zwei Buchungen mit demselben Datum. Die Schleife beginnt deshalb bei 1 (oder endet bei Länge − 2, wenn du mit i + 1 arbeitest). In Tabellen geht das genauso mit Spalten: Verbrauch im Monat m = Spalte m + 1 minus Spalte m.
**Gruppenwechsel:** Die Daten sind nach einem Schlüssel **sortiert** (z. B. Kundennummer), zusammengehörige Einträge stehen also hintereinander.
- Schlüssel des ersten Eintrags merken, Gruppensumme = 0
- je Eintrag: Ist der Schlüssel **anders** als der gemerkte, ist die alte Gruppe fertig → Ergebnis ausgeben oder übernehmen, Gruppensumme zurücksetzen, neuen Schlüssel merken
- dann den Eintrag zur (neuen) Gruppe addieren
- **nach der Schleife die letzte Gruppe** ausgeben – für sie kommt kein Wechsel mehr
Beispiel (Liste nicht leer):
- `aktuell = daten.get(0).getKunde()`
- `summe = 0`
- `for i = 0 to daten.size() - 1`
- `  if daten.get(i).getKunde() != aktuell then`
- `    ausgabe(aktuell, summe)`
- `    summe = 0`
- `    aktuell = daten.get(i).getKunde()`
- `  end if`
- `  summe = summe + daten.get(i).getBetrag()`
- `end for`
- `ausgabe(aktuell, summe)`
Die letzte Zeile ist die Ausgabe der letzten Gruppe – sie fehlt in fehlerhaftem Code besonders gern.
**Mit Gesamtauswertung:** Werden die Gruppenwerte auch in Gesamtwerte übernommen (Monat → Jahr), gehört diese Übernahme zum Gruppenabschluss – nach der Schleife also **Ausgabe und Übernahme** der letzten Gruppe wiederholen. Beim Wechsel alle Gruppenwerte zurücksetzen (Summe, Zähler, Minimum, Maximum), und den Gesamtdurchschnitt mit dem **Gesamt**zähler bilden, nicht mit dem Zähler der letzten Gruppe.

## Lehrnotiz: Algorithmen über Arrays und Listen: filtern, zählen, Extremwerte, abgleichen, gruppieren

**Aufteilung:**
- Filtern: K1
- Zählen, Summieren, Durchschnitt: K2
- Extremwerte: K3
- Zwei Listen und Zeiträume abgleichen: K4
- Häufigkeiten im Ergebnisarray: K5
- Nachbarn verrechnen und Gruppenwechsel: K7

**Schon geprüft:** In Prüfungen: K1 (2025W), K2 (2023S, 2024S), K3 (2022S, 2023W, 2025W), K4 (2025S, 2025W), K5 (2023S, 2024W), K7 (2022S, 2023S, 2024W)

**Kerngedanken:**
- Es sind wenige Grundmuster; Prüfungsaufgaben kombinieren sie, und wer das Muster erkennt, hat das Gerüst der Lösung.
- Genau lesen, worüber gemittelt wird: Der Durchschnitt innerhalb einer Gruppe teilt durch deren Einträge. Der Durchschnitt über die Gruppen (z. B. „durchschnittlicher Umsatz je Kunde“) teilt die Gesamtsumme durch die Zahl der Gruppen.
- Verrechnet man Nachbarn zu Differenzen, entsteht ein Wert weniger, als es Elemente gibt.
- Schleifengrenzen, Sonderfälle und Datentypen sind Thema des Nachbarstichpunkts und werden hier nur angewandt.

**Typische Missverständnisse:**
- Viele denken, bei Öffnung von 9 bis 19 Uhr brauche das Zählarray 11 Stellen; richtig ist: Es zählen die Stunden 9 bis 18, also 10 – in der Schließstunde beginnt nichts mehr.
- Viele denken, beim Abgleich könne schon in der inneren Schleife entschieden werden, ob ein Element ins Ergebnis kommt; richtig ist: Erst nach der inneren Schleife steht fest, dass es keinen Treffer gab.

**Fachwörter:**
- Ergebnisliste: leere Liste, die Treffer aufnimmt
- Merker: Wahrheitswert, der einen Treffer festhält
- Extremwert: Minimum oder Maximum nach einem Kriterium
- Ergebnisarray: Zählarray, je Schlüssel eine Stelle
- Gruppenwechsel: Schlüssel ändert sich, Gruppe wird abgeschlossen
- Schlüssel: Wert, der eine Gruppe kennzeichnet

**So fragt die IHK:**
- Die Muster stecken, meist kombiniert, in fast jeder Algorithmusaufgabe: Operator „implementieren“, vorgedruckte Signatur, Klassendiagramm-Auszug. Die Lösungshinweise sind beispielhaft; andere richtige Lösungen zählen.
- Belege: Filtern mit zwei Bedingungen plus Abgleich gegen eine zweite Liste mit Merker (20 Punkte); Minimumsuche über die kleinste Abweichung, Start mit dem ersten Element, leere Liste ergibt `null` (10 Punkte); aus einem sortierten Array höchstens N Einträge übernehmen (15 Punkte).
- Weitere Prüfungen: Einstiege je Haltestelle im Ergebnisarray; Besuche je Tag und Stunde im zweidimensionalen Array, auch als Anwesenheit; Tage mit Kurs besser als der Index; Belegungstage über 80 % mit Aufnahme- und Entlassungstag; Verbrauch aus Zählerständen. Die fehlende letzte Gruppe im Gruppenwechsel war in fremdem Code zu finden.
- Punkte gibt es je Bestandteil (Initialisierung, Schleife mit richtiger Grenze, Bedingung, Merken/Hochzählen, Sonderfall, Rückgabe); Folgefehler zählen nur einmal.

**Fallen:**
- Filtern: `return` oder das Anlegen der Ergebnisliste in die Schleife schreiben; `or` statt `and`, wenn alle Bedingungen gelten müssen; Grenzwörter wie „vor“ ungenau übersetzen (`<=` statt `<`).
- Zählen: einen Zeitraum mit `>` und `<` prüfen (die Randtage fehlen); Zähler und Summe in verschiedenen Bedingungen erhöhen.
- Extremwert: nur den Wert merken, obwohl das Objekt zurückgegeben werden soll; die Abweichung ohne Betrag vergleichen – dann stimmt der Vergleich nur auf einer Seite des Zielwerts.
- Extremwert, wiederholt: das gewählte Element nicht entfernen oder nicht als neue Ausgangsposition nehmen.
- Abgleich: den Merker im `else` wieder auf `false` setzen; einen Teil des Vergleichs vergessen (z. B. das Datum); in der Tagesschleife das Weiterzählen des Tags vergessen.
- Ergebnisarray: den Fachwert unverschoben als Index nehmen; im zweidimensionalen Fall nur einen der beiden Indizes verschieben.
- Gruppenwechsel: den Wert des Eintrags vor der Wechselprüfung addieren – er landet in der alten Gruppe.
- Gruppenwechsel: bei einer möglicherweise leeren Liste ohne Prüfung auf das erste Element zugreifen.
