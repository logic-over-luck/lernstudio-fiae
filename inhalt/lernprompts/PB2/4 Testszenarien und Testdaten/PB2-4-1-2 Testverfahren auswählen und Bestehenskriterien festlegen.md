Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Testszenarien und Testdaten › Testszenarien auswählen und Testdaten generieren › Testverfahren auswählen und Bestehenskriterien festlegen

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

## Stoff: Testverfahren auswählen und Bestehenskriterien festlegen

Ziel: Für eine Situation das passende Testverfahren und Überdeckungsmaß auswählen und begründen und festlegen, wann ein Testfall als bestanden gilt.

Das muss ich können:

### K1 – Passendes Testverfahren mit Begründung (Stufe 4 Beurteilen)
Du kannst über PB1-9-1-3 hinaus für eine konkrete Situation ein Testverfahren auswählen und die Wahl begründen: Black-Box-Test mit Äquivalenzklassen und Grenzwerten, wenn gegen die Anforderungen ohne Blick in den Code geprüft wird; White-Box-Test, wenn der Code systematisch abgedeckt werden soll; statischer Test (Review, Schreibtischtest), wenn Code ohne Ausführung geprüft werden soll oder noch nicht lauffähig ist.

Erklärung:
Die Verfahren kennst du aus PB1-9-1-3. Hier **wählst** du für eine Situation und **begründest**:
- **Black-Box-Test** mit Äquivalenzklassen und Grenzwerten, wenn gegen die **Anforderungen** geprüft wird, ohne in den Code zu sehen – z. B. durch die Fachabteilung oder wenn der Code noch nicht existiert
- **White-Box-Test,** wenn der **Code systematisch abgedeckt** werden soll, z. B. jede Verzweigung
- **statischer Test** (Review, Schreibtischtest), wenn Code **ohne Ausführung** geprüft werden soll oder noch nicht lauffähig ist
Muster für die Antwort: „Ich wähle …, weil in dieser Situation …“ – die Begründung muss sich auf die Situation beziehen, nicht nur das Verfahren beschreiben.

### K2 – Überdeckungsmaß für eine Vorgabe (Stufe 4 Beurteilen)
Du kannst ein Überdeckungsmaß für eine Vorgabe des Projektleiters nennen und begründen, zum Beispiel Zweigüberdeckung, weil sie anders als die Anweisungsüberdeckung auch leere Else-Zweige prüft, aber anders als die Pfadüberdeckung noch bezahlbar bleibt.

Erklärung:
Verlangt der Projektleiter ein Überdeckungsmaß, ist **Zweigüberdeckung** meist der vernünftige Mittelweg:
- **besser als Anweisungsüberdeckung:** auch leere Else-Zweige werden durchlaufen; bei `if` ohne `else` bleibt sonst ungetestet, was passiert, wenn die Bedingung falsch ist
- **günstiger als Pfadüberdeckung:** deren Zahl an Testfällen wächst mit jeder Verzweigung und Schleife stark, oft unbezahlbar
Beispiel: Eine Prüffunktion mit mehreren `if` ohne `else` erreicht 100 % Anweisungsüberdeckung schon, wenn alle Bedingungen wahr sind – die Nein-Fälle bleiben ungeprüft.

### K3 – Bestehenskriterien und Testfalltabelle (Stufe 3 Anwenden · in der Prüfung vorgegeben: Testdaten (2025W-PB2-A3-ba))
Du kannst Kriterien für Testergebnisse festlegen: zu jedem Testfall vorab das erwartete Ergebnis bestimmen, es in einer Testfalltabelle (Testdaten, erwartetes Ergebnis, tatsächliches Ergebnis) dem tatsächlichen Ergebnis gegenüberstellen – auch einem von Hand per Schreibtischtest ermittelten – und den Testfall nur als bestanden werten, wenn beide genau übereinstimmen, auch bei einer erwarteten Fehlermeldung oder Ausnahme.

Erklärung:
Damit ein Testergebnis eindeutig bewertet werden kann:
- zu jedem Testfall **vorab** das erwartete Ergebnis festlegen (aus der Anforderung)
- in einer **Testfalltabelle** gegenüberstellen: Testdaten | erwartetes Ergebnis | tatsächliches Ergebnis | bestanden?
- das tatsächliche Ergebnis stammt aus der Ausführung oder aus einem **Schreibtischtest** von Hand
- **bestanden nur bei genauer Übereinstimmung** – auch bei einer erwarteten Fehlermeldung oder Ausnahme
Beispiel: Eingabe −5, erwartet „ungültige Menge“, geliefert 0 → **nicht bestanden**.
Warum vorab? Sonst passt man die Erwartung unbewusst an das an, was herauskommt.

### K4 – Manuell oder automatisiert testen (Stufe 4 Beurteilen)
Du kannst für eine Situation beurteilen, ob manuell oder automatisiert getestet wird: Automatisierte Tests laufen schnell, zuverlässig und beliebig oft (z. B. als Regressionstests) und protokollieren sich selbst, kosten aber Aufwand beim Schreiben und bei jeder Änderung; deshalb automatisiert man wiederkehrende Routinefälle, testet manuell, wenn sich die Software noch ständig ändert, der Aufwand den Nutzen übersteigt oder das Verhalten erst erkundet werden soll, und prüft besonders kritische Bereiche zusätzlich von Hand.

Erklärung:
**Prinzip:** Automatisieren lohnt sich, wenn derselbe Test oft genug läuft, um den Aufwand für das Schreiben und Pflegen des Testprogramms wieder einzuspielen.
- **automatisiert:** schnell, ermüdungsfrei, immer gleich ausgeführt, nach jeder Änderung wiederholbar (Regressionstest: die vorhandenen Tests nach einer Änderung erneut ausführen – z. B. in einer CI-Pipeline, die die Software bei jedem Commit, also jedem eingecheckten Änderungsstand, automatisch baut und testet), Ergebnis wird automatisch protokolliert – aber Anfangsaufwand und Anpassung bei jeder Änderung der Software
- **manuell:** für jede Anwendung ohne Vorarbeit möglich, gut zum **erkundenden Testen** neuer Funktionen – aber teuer, langsam, ermüdend und schwer exakt wiederholbar
- Faustregel: Routine automatisieren, Neues und sich ständig Änderndes von Hand prüfen, Kritisches (z. B. Zahlungsablauf) zusätzlich manuell
Beispiel: Die 300 Unit-Tests einer Preisberechnung laufen bei jedem Commit automatisch; die neue, noch wöchentlich umgebaute Startseite wird vorerst von Hand durchgeklickt.

## Lehrnotiz: Testverfahren auswählen und Bestehenskriterien festlegen

**Aufteilung:**
- Testverfahren für eine Situation wählen und begründen: K1
- Überdeckungsmaß für eine Vorgabe vorschlagen: K2
- Bestehenskriterien und Testfalltabelle: K3
- Manuell oder automatisiert testen: K4

**Schon geprüft:** In Prüfungen: K2 (2025S), K3 (2025W) · Noch nicht geprüft: K1, K4

**Kerngedanken:**
- Die Wahl des Verfahrens hängt an zwei Fragen: Was liegt in dem Moment vor (nur eine Beschreibung, geschriebener Code, lauffähiger Code), und kennt die prüfende Person den Code?
- Das erwartete Ergebnis kommt immer aus der Anforderung, nie aus dem Code. Ein Schreibtischtest liefert das tatsächliche Ergebnis, wenn der Code nicht ausgeführt werden kann.
- Für „manuell oder automatisiert“ zählen drei Fragen: Wie oft läuft der Test, wie stabil ist der getestete Teil, wie kritisch ist er?
- Abgrenzung: Wie man eine Überdeckung misst und erreicht, ist das Nachbarthema Testabdeckung. Hier wird nur ein Maß ausgewählt und begründet.

**Typische Missverständnisse:**
- Viele denken, ohne Code könne man nur statisch prüfen oder noch gar nichts vorbereiten; richtig ist: Black-Box-Testfälle entstehen schon aus der Beschreibung; ein statischer Test des Codes (Review, Schreibtischtest) setzt geschriebenen Code voraus, lauffähig muss er nicht sein.
- Viele denken, ein Testfall sei bestanden, wenn nichts abstürzt; richtig ist: Verglichen wird allein mit dem vorab festgelegten erwarteten Ergebnis.
- Viele denken, Pfadüberdeckung sei als gründlichstes Maß immer die beste Antwort; richtig ist: Bei einer Vorgabe der Projektleitung gehört der Aufwand zur Begründung.

**Fachwörter:**
- Black-Box-Test: Testfälle aus der Anforderung, ohne Code
- White-Box-Test: Testfälle aus dem Quellcode abgeleitet
- statischer Test: Code prüfen, ohne ihn auszuführen
- Schreibtischtest: Code von Hand mit Werten durchspielen
- Zweigüberdeckung: jede Verzweigung in jede Richtung
- Testfalltabelle: Testdaten, erwartetes und tatsächliches Ergebnis
- Regressionstest: vorhandene Tests nach einer Änderung wiederholen

**So fragt die IHK:**
- Das Auswählen kam bisher nur eingebettet in größere Testaufgaben vor.
- Zweimal ging es um den White-Box-Test selbst: beschreiben, was einen Whiteboxtest auszeichnet (2 Punkte, im Zusammenhang mit Überdeckungstests), und zwei Vorteile von Whitebox- gegenüber Blackbox-Tests beschreiben (4 Punkte). Gezählt wurden u. a.: Fehler genauer lokalisierbar, auch nicht spezifizierte Programmteile werden getestet, hohe Testabdeckung des Quellcodes.
- Einmal war für eine Vorgabe des Projektleiters ein Überdeckungsmaß zu nennen und zu begründen.
- Einmal waren Testdaten vorgegeben; daraus waren erwartete Ergebnisse bzw. Testergebnisse zu bewerten.
- Ein eigenständiges „Wählen Sie ein Testverfahren für … und begründen Sie“ und die Frage manuell/automatisiert gab es noch nicht. Zu erwarten wären 2–4 Punkte mit den Operatoren begründen, beurteilen, beschreiben.
- Begründungen zählen nur mit Bezug zur Situation. In einer Testfalltabelle zählt eine Zeile nur mit richtigem erwartetem Ergebnis und richtiger Bewertung.

**Fallen:**
- White-Box wählen, obwohl die prüfende Person (Fachabteilung, Kunde) den Code nicht kennt und gegen die Anforderungen prüft.
- Das Überdeckungsmaß nur gegen eines der beiden anderen abgrenzen: Verlangt ist der Vergleich mit beiden.
- Beim Vergleich mit der Anweisungsüberdeckung den Grund „leere Else-Zweige“ nicht nennen.
- Das erwartete Ergebnis vom gelieferten Wert abschreiben statt aus der Anforderung berechnen – besonders an der Grenze („ab 5“ schließt die 5 ein).
- Das erwartete Ergebnis falsch rechnen oder die Bewertung „bestanden/nicht bestanden“ ohne Begründung hinschreiben.
- „Automatisiert ist immer besser“ schreiben oder nur mit „ist schneller“ bzw. „ist einfacher“ begründen, ohne Bezug zur Situation.
- Beim Beurteilen nur Vorteile nennen: Zu jeder Entscheidung gehört auch der Nachteil der gewählten oder der verworfenen Art.
- Bei kritischen Bereichen „manuell statt automatisiert“ schreiben: Gemeint ist zusätzlich von Hand.
