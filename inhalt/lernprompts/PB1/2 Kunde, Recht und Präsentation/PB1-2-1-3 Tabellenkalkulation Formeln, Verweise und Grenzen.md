Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Kunde, Recht und Präsentation › Kundenbeziehungen, Recht und Präsentation › Tabellenkalkulation: Formeln, Verweise und Grenzen

## So läuft unsere Sitzung

Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) und am Ende mein Prüfer. Unten stehen der **Stoff** (meine Aussagen „Das muss ich können“ mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen zu genau diesem Thema.

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

## Stoff: Tabellenkalkulation: Formeln, Verweise und Grenzen

Ziel: In einer Tabellenkalkulation Formeln mit Bezügen, SVERWEIS, WENN und Datumsfunktionen erstellen und Einsatz und Grenzen beschreiben.

Das muss ich können:

### K1 – Formeln mit relativen und absoluten Zellbezügen (Stufe 3 Anwenden)
Du kannst in einer Tabellenkalkulation Formeln mit Zellbezügen erstellen, zum Beispiel das Datum der nächsten Zeile als Wert der Zelle darüber plus eins; absolute Bezüge ($B$3) verwenden, wenn die Formel kopiert wird.

Erklärung:
- Formel beginnt mit `=`; **relativer** Bezug (`B3`) verschiebt sich beim Kopieren mit.
- **Absoluter** Bezug (`$B$3`) bleibt fest – z. B. für einen Steuersatz in einer Zelle.
Beispiel fortlaufendes Datum: in A3 `=A2+1`, dann nach unten kopieren.
Beispiel Preis mit festem Rabatt: `=B5*(1-$B$1)`.
Beispiel aus der Prüfung (Sommer 2023): Der Buchungstag steht in A2, der erste buchbare Tag soll in C3 stehen → `=A2+1`. Das funktioniert, weil ein Datum intern eine fortlaufende Tageszahl ist. Für die Zeilen darunter in C4 `=C3+1` eintragen und nach unten kopieren – eine kopierte `=A2+1` würde auf die leeren Zellen A3, A4 … zeigen.

### K2 – SVERWEIS: Wert aus anderem Blatt holen (Stufe 3 Anwenden · in der Prüfung vorgegeben: Funktionsübersicht im Belegsatz (englische Funktionsnamen))
Du kannst mit SVERWEIS (VLOOKUP) einen Wert aus einer Tabelle auf einem anderen Blatt holen: Suchwert, Bereich, Nummer der Ergebnisspalte, genaue Übereinstimmung (FALSCH).

Erklärung:
`=SVERWEIS(Suchwert; Bereich; Spaltenindex; FALSCH)`
- **Suchwert:** was gesucht wird (z. B. Artikelnummer)
- **Bereich:** Tabelle, deren **erste Spalte** den Suchwert enthält – auch auf einem anderen Blatt (`Preise!A2:C50`)
- **Spaltenindex:** aus welcher Spalte des Bereichs das Ergebnis kommt, gezählt ab dessen erster Spalte (bei `B3:C17` ist C die Spalte 2)
- **FALSCH:** nur genaue Treffer
Englisch: `VLOOKUP`. Die Funktionsbeschreibung steht im Belegsatz.

### K3 – WENN mit Datumsfunktionen wie WOCHENTAG (Stufe 3 Anwenden · in der Prüfung vorgegeben: Funktionsübersicht im Belegsatz (englische Funktionsnamen))
Du kannst WENN mit Datumsfunktionen wie WOCHENTAG verknüpfen, zum Beispiel einen Grundpreis nur von Montag bis Freitag um 10 % senken; die Nummerierung der Wochentage steht in der Funktionsbeschreibung.

Erklärung:
`=WENN(Bedingung; Dann; Sonst)` mit `WOCHENTAG(Datum; 2)` (Montag = 1 … Sonntag = 7):
`=WENN(WOCHENTAG(A2;2)<=5; B2*0,9; B2)`
→ Montag bis Freitag 10 % günstiger, sonst Grundpreis.
Welche Zahl welcher Tag ist, hängt vom Typ-Parameter ab – in der Funktionsbeschreibung nachsehen.
In der Prüfung gilt die Nummerierung aus dem Belegsatz: Sommer 2023 beschreibt WEEKDAY(Datum) ohne Typ mit Montag = 1 … Sonntag = 7, also genügt dort `=H3*WENN(WOCHENTAG(C3)<=5;0,9;1)` (Grundpreis mal Faktor). In echtem Excel ist ohne Typ Sonntag = 1 – dort Typ 2 angeben.

### K4 – Einsatzmöglichkeiten einer Tabellenkalkulation (Stufe 2 Verstehen)
Du kannst Einsatzmöglichkeiten einer Tabellenkalkulation beschreiben, zum Beispiel Arbeitszeiten oder Kosten berechnen, Messwerte auswerten und als Diagramm darstellen.

Erklärung:
Typische Einsätze:
- Arbeitszeiten, Kosten, Kalkulationen berechnen
- Messwerte sammeln und auswerten (Summe, Mittelwert, Maximum)
- Ergebnisse als **Diagramm** darstellen
- kleine Listen pflegen (Termine, Inventar)

### K5 – Grenzen der Tabellenkalkulation bei großen Datenmengen (Stufe 2 Verstehen)
Du kannst Probleme beim Einsatz von Tabellenkalkulationen beschreiben: Bei großen Datenmengen und vielen Abhängigkeiten zwischen Formeln wird die Mappe unübersichtlich, schwer wartbar und fehleranfällig; dann passt eine Datenbankanwendung besser.

Erklärung:
Grenzen der Tabellenkalkulation:
- **große Datenmengen** → langsam, unübersichtlich
- **viele Formel-Abhängigkeiten** → schwer wartbar, Fehler fallen nicht auf
- kein sauberer **Mehrbenutzerbetrieb**, keine Rechteverwaltung
Dann besser: Datenbankanwendung.

## Lehrnotiz: Tabellenkalkulation: Formeln, Verweise und Grenzen

**Aufteilung:**
- Formeln mit relativen und absoluten Bezügen, Rechnen mit Datum: K1
- Wert aus einem anderen Blatt holen: K2
- Bedingter Preis nach Wochentag: K3
- Einsatzmöglichkeiten und Grenzen: K4, K5

**Schon geprüft:** In Prüfungen: K1 (2023S), K2 (2023S), K3 (2023S), K4 (2023S), K5 (2023S)

**Kerngedanken:**
- Die Probe für jede Formel: in Gedanken eine Zeile tiefer kopieren und prüfen, wohin jeder Bezug dann zeigt. Was je Zeile mitwandern soll, bleibt relativ; was für alle Zeilen dieselbe Einzelzelle ist (Rabatt, Steuersatz), wird absolut.
- Das gilt auch für den Bereich im SVERWEIS: Wird die Formel kopiert, muss der Bereich absolut sein, sonst rutscht er nach unten und Zeilen fallen heraus.
- Der Spaltenindex zählt ab der ersten Spalte des Bereichs, nicht ab Spalte A des Blatts. Steht die Suchspalte in B, beginnt der Bereich bei B, und C ist Spalte 2.
- Bei K4 und K5 heißt „beschreiben“: ein konkreter Einsatz (wofür genau) oder ein Problem mit Ursache und Folge. Beides steht nicht im Aufgabentext.

**Typische Missverständnisse:**
- Viele denken, bei „Formel für Zelle C3“ gehe es nur um diese eine Zelle; richtig ist: Braucht die Spalte darunter dieselbe Rechnung, muss die Formel kopierbar sein.
- Viele denken, „10 % weniger“ sei „−0,1“ oder „·0,1“; richtig ist: mal 0,9, allgemein mal (1 − Satz), bei einem Zuschlag mal (1 + Satz).

**Fachwörter:**
- relativer Bezug: verschiebt sich beim Kopieren mit
- absoluter Bezug: bleibt beim Kopieren fest ($)
- Suchwert: der Wert, nach dem gesucht wird
- Bereich: Tabelle, erste Spalte enthält den Suchwert
- Spaltenindex: Nummer der Ergebnisspalte im Bereich
- Mehrbenutzerbetrieb: mehrere arbeiten gleichzeitig an den Daten
- Datenbankanwendung: Programm mit Datenbank, für große Datenmengen

**So fragt die IHK:**
- Eine echte Aufgabe mit fünf Teilaufgaben, zusammen 16 Punkte. Ausgangslage war ein dynamisches Preismodell in einer Tabellenkalkulation.
- Vorgegeben waren Bildschirmausschnitte mehrerer Arbeitsblätter mit Zelladressen und ein Belegsatz mit den englischen Funktionsnamen (VLOOKUP, IF, WEEKDAY) samt Beschreibung. Hinweise im Text: Blattname mit Ausrufezeichen vor den Bezug, Datumswerte als Tageszahl, Hilfsspalten erlaubt.
- Operator „Geben Sie Formeln an“ für markierte Zellen: Folgedatum aus dem Datum einer anderen Zelle (2 Punkte), Wert per VLOOKUP aus einem anderen Blatt (5 Punkte), Endpreis mit IF und WEEKDAY (5 Punkte). Für den Endpreis war ein Grundpreis als Hilfswert vorgegeben.
- Danach je 2 Punkte: „Beschreiben Sie eine weitere Einsatzmöglichkeit“ (Lösung z. B. Arbeitszeitberechnung) und „Beschreiben Sie ein Problem“ (Lösung: bei umfangreichem Datenbestand und vielen Abhängigkeiten schlecht wartbar).

**Fallen:**
- Das Gleichheitszeichen am Anfang der Formel vergessen.
- Den Bezug auf die Zeile darüber absolut setzen: Dann zeigen alle kopierten Zeilen denselben Wert.
- Einen festen Einzelwert relativ lassen: Beim Kopieren zeigt die Formel auf die Zelle darunter.
- Bei Zuschlag oder Rabatt nur Preis mal Satz rechnen statt Preis mal (1 ± Satz).
- Den SVERWEIS-Bereich nicht mit der Suchspalte beginnen lassen.
- Den Blattnamen mit Ausrufezeichen vor dem Bereich vergessen.
- FALSCH weglassen; es gehört zur vollständigen Formel.
- Glauben, die Kopfzeile müsse im Bereich stehen; nötig ist sie nicht.
- Die Grenze der Bedingung falsch setzen (etwa <5 statt <=5, dann fehlt der Freitag); Probe: einen Freitag und einen Samstag einsetzen.
- Nur den Dann-Zweig schreiben; beide Zweige gehören in die Formel.
- Bei „beschreiben“ nur ein Stichwort liefern („Diagramme“, „unübersichtlich“, „Rechnen“).
- Bei den Problemen die Datenbankanwendung als bessere Lösung nicht nennen.

**Material:**
Funktionsübersicht, wie sie der Belegsatz vorgibt. Sie gehört zu jeder Formelaufgabe, zusammen mit den Zelladressen der Blätter und der Angabe, wohin die Formel kopiert wird:
- `SVERWEIS(Suchwert; Bereich; Spaltenindex; Bereich_Verweis)` / `VLOOKUP`: sucht den Suchwert in der ersten Spalte des Bereichs und liefert den Wert aus der Spalte mit der Nummer Spaltenindex derselben Zeile. FALSCH/FALSE bedeutet: nur genaue Übereinstimmung.
- `WENN(Bedingung; Dann_Wert; Sonst_Wert)` / `IF`
- `WOCHENTAG(Datum; Typ)` / `WEEKDAY`: Nummer des Wochentags; maßgeblich ist die Nummerierung im Belegsatz (Sommer 2023: ohne Typ Montag = 1 … Sonntag = 7; in echtem Excel dafür Typ 2).
- Bezug auf ein anderes Blatt: Blattname, Ausrufezeichen, Zelle oder Bereich (`Preise!A2:C50`).
- Datumswerte sind intern fortlaufende Tageszahlen.

Formeln werden nach Bestandteilen geprüft (richtige Zellen, Blattname, Spaltenindex, FALSCH, Bedingung, beide Zweige), nicht nach Schreibweise. Gleichwertig sind:
- deutsche oder englische Funktionsnamen
- Semikolon oder Komma als Trenner
- Lösungen mit Hilfsspalten
- „Preis mal WENN-Faktor“ statt zwei ausgeschriebener Zweige
- `B$1` statt `$B$1`, wenn nur nach unten kopiert wird
