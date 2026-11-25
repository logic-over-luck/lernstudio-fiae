Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 2 „Entwicklung und Umsetzung von Algorithmen“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Testszenarien und Testdaten › Testszenarien auswählen und Testdaten generieren › Testverfahren auswählen und Bestehenskriterien festlegen

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 2) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen: gern mit Beispielen aus dem Alltag und dem Warum dahinter.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Die Aufgaben sollen mich vor allem anwenden lassen, nicht nur die Erklärung nachsagen. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
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
