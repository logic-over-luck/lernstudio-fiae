Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Datenmodellierung und Datenhaltung › Datenmodelle und Datenhaltung › Transaktionen und Datenintegrität

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

## Stoff: Transaktionen und Datenintegrität

Ziel: ACID-Eigenschaften beschreiben, Transaktionen einsetzen und die Maßnahmen zur Sicherung der Datenintegrität einschließlich Constraints beurteilen.

Das muss ich können:

### K1 – ACID-Eigenschaften einer Transaktion (Stufe 2 Verstehen)
Du kannst die ACID-Eigenschaften einer Transaktion beschreiben: Atomarität (ganz oder gar nicht), Konsistenz (die Regeln gelten vor und nach der Transaktion), Isolation (gleichzeitige Transaktionen beeinflussen sich nicht), Dauerhaftigkeit (bestätigte Änderungen bleiben erhalten).

Erklärung:
**ACID:**
- **A**tomicity (Atomarität, Abgeschlossenheit): Die Transaktion ist unteilbar und wird ganz oder gar nicht ausgeführt; tritt ein Fehler auf, werden bereits durchgeführte Änderungen zurückgenommen.
- **C**onsistency (Konsistenz): Die Konsistenzregeln der Datenbank (z. B. Constraints) gelten vor und nach der Transaktion; sonst wird die ganze Transaktion zurückgenommen.
- **I**solation (Abgrenzung): Gleichzeitige Transaktionen sind voneinander abgegrenzt; das Ergebnis ist dasselbe, als liefen sie nacheinander – umgesetzt z. B. durch Sperren (Locks).
- **D**urability (Dauerhaftigkeit): Bestätigte Änderungen bleiben auch nach einem Software- oder Hardwarefehler erhalten – gesichert z. B. durch Transaktionslogs.

### K2 – Wann eine Transaktion nötig ist (Stufe 2 Verstehen)
Du kannst erklären, wann eine Transaktion nötig ist: wenn mehrere Änderungen nur zusammen sinnvoll sind, zum Beispiel eine Umbuchung zwischen zwei Konten oder das Verschieben von Datensätzen in ein Archiv (kopieren und löschen).

Erklärung:
Eine **Transaktion** ist eine Folge von Änderungen, die als Einheit ganz oder gar nicht gilt. Sie ist nötig, wenn **mehrere Änderungen nur zusammen** Sinn ergeben:
- **Umbuchung:** Konto A belasten **und** Konto B gutschreiben
- **Archivieren:** Datensatz ins Archiv kopieren **und** im Original löschen
Bricht ein Schritt ab, wird alles zurückgenommen.

### K3 – Maßnahmen zur Sicherung der Datenintegrität (Stufe 4 Beurteilen)
Du kannst beurteilen, mit welchen technischen Maßnahmen die Datenintegrität einer Anwendung sichergestellt wird, und sie festlegen: Constraints in der Datenbank (Primärschlüssel, Fremdschlüssel, NOT NULL, UNIQUE, CHECK), Validierung der Eingaben in der Anwendung, Transaktionen für zusammengehörige Änderungen.

Erklärung:
Maßnahmen zur Datenintegrität (die Daten sind korrekt, vollständig und widerspruchsfrei):
- **Constraints** in der Datenbank = Regeln in der Tabellendefinition, die das DBMS bei jedem Einfügen und Ändern erzwingt; Verstöße werden abgewiesen: Primärschlüssel (eindeutig und nie leer, wirkt wie `UNIQUE` und `NOT NULL` zusammen), Fremdschlüssel (Wert muss als Primärschlüssel in der verknüpften Tabelle vorkommen oder NULL sein), `NOT NULL` (Pflichtwert), `UNIQUE` (jeder Wert nur einmal), `CHECK` (Bedingung, z. B. `CHECK (Menge > 0)`)
- **Validierung** der Eingaben in der Anwendung (Format, Bereich, Pflichtfelder)
- **Transaktionen** für zusammengehörige Änderungen
Am besten kombiniert: die Anwendung prüft für gute Meldungen, die Datenbank sichert ab. Die SQL-Befehle dafür gehören zu PB2.

### K4 – Commit und Autocommit (Stufe 2 Verstehen)
Du kannst erklären, warum Änderungen, die ein Programm über eine Datenbankverbindung ohne Autocommit schreibt, erst mit dem Commit dauerhaft gespeichert sind: Bis dahin gehören sie zu einer offenen Transaktion, die bei einem Fehler zurückgerollt wird und beim Schließen der Verbindung ohne Commit in der Regel verloren geht; im Autocommit-Modus, den viele Treiber voreinstellen, ist dagegen jede einzelne Anweisung sofort eine abgeschlossene Transaktion.

Erklärung:
Schreibt ein Programm mit INSERT, UPDATE oder DELETE in die Datenbank und ist **Autocommit ausgeschaltet**, sind die Änderungen zunächst **vorläufig** – sie gehören zu einer offenen Transaktion.
- **Commit:** Die Änderungen werden dauerhaft und für andere sichtbar (Dauerhaftigkeit aus ACID).
- **Rollback:** Alles seit dem letzten Commit wird verworfen. Bei einem Fehler löst das Programm das Rollback selbst aus (z. B. im catch-Block); wird die Verbindung ohne Commit geschlossen oder bricht sie ab, verwirft das DBMS die offene Transaktion in der Regel selbst.
Warum so? Damit zusammengehörige Änderungen ganz oder gar nicht gelten (PB1-6-1-5-K2).
Beispiel: Ein Skript importiert ohne Autocommit 500 Bestellungen, beendet sich aber ohne Commit – in der Datenbank steht danach keine davon.
**Autocommit:** Viele Treiber und Schnittstellen bestätigen standardmäßig jede Anweisung sofort; dann ist jede Anweisung eine eigene Transaktion. Für zusammengehörige Änderungen schaltet man Autocommit ab. Die SQL-Befehle dazu stehen in PB2.

## Lehrnotiz: Transaktionen und Datenintegrität

**Aufteilung:**
- Was eine Transaktion ist und wann man sie braucht: K2
- Die vier ACID-Eigenschaften: K1
- Commit, Rollback und Autocommit im Programm: K4
- Maßnahmen für die Datenintegrität festlegen und beurteilen: K3

**Schon geprüft:** In Prüfungen: K1 (2023W) · Noch nicht geprüft: K2–K4

**Kerngedanken:**
- Eine Transaktion ist eine Folge von Anweisungen, die das DBMS als Einheit ganz oder gar nicht ausführt. Sie verhindert nicht den Fehler, sondern den halben Zustand: Nach dem Abbruch ist der Vorgang nicht erledigt, aber der Datenbestand ist stimmig, und man kann ihn wiederholen.
- Atomarität betrifft eine einzelne Transaktion, Isolation mehrere gleichzeitige.
- Constraints greifen auf jedem Weg, auf dem Daten in die Tabelle kommen (Web-Anwendung, App, Import-Skript). Die Validierung prüft nur, was durch diese eine Anwendung kommt, liefert dafür aber verständliche Meldungen.
- Abgrenzung: BASE als Gegenstück zu ACID gehört zum Stichpunkt Relationale und NoSQL-Datenbanken, die SQL-Befehle gehören zu PB2.

**Typische Missverständnisse:**
- Viele denken, Konsistenz heiße „die Daten sind inhaltlich richtig“; richtig ist: Die festgelegten Regeln der Datenbank gelten vor und nach der Transaktion.
- Viele denken, „keine Fehlermeldung“ heiße „gespeichert“; richtig ist: Ohne Autocommit bleibt alles vorläufig, bis das Commit kommt.

**Fachwörter:**
- Transaktion: Anweisungen als Einheit, ganz oder gar nicht
- Commit: macht die Änderungen dauerhaft und sichtbar
- Rollback: verwirft alles seit dem letzten Commit
- Autocommit: jede Anweisung wird sofort einzeln bestätigt
- Constraints: Regeln in der Tabellendefinition, vom DBMS erzwungen
- Validierung: Prüfung der Eingaben in der Anwendung
- Sperren (Locks): halten gleichzeitige Transaktionen auseinander
- Transaktionslogs: Protokoll der Änderungen, sichert die Dauerhaftigkeit

**So fragt die IHK:**
- Es gibt eine echte Teilaufgabe: Zu einer relationalen Datenbank waren die vier ACID-Eigenschaften zu beschreiben (8 Punkte, 2 je Eigenschaft).
- Vorgegeben war eine Tabelle mit den englischen Namen und den deutschen Übersetzungen Abgeschlossenheit, Konsistenz, Abgrenzung, Dauerhaftigkeit.
- Für volle 2 Punkte reicht ein Stichwort nicht; Bedeutung und Folge müssen beschrieben sein. Die Lösung nennt als Beispiele für die Umsetzung Sperrverfahren und Transaktionslogs.
- In derselben Aufgabe ging es danach um den Umstieg auf eine dokumentenorientierte Datenbank.
- Wann eine Transaktion nötig ist, Integritätsmaßnahmen und Commit/Autocommit wurden bisher nicht eigens gefragt. Denkbar sind „Erläutern Sie, warum … in einer Transaktion …“ oder „Legen Sie für folgende Anforderungen Maßnahmen fest“ mit 1 Punkt je Maßnahme.

**Fallen:**
- Die Transaktion nur mit „es sind mehrere Änderungen“ oder „damit nichts schiefgeht“ begründen. Verlangt ist, dass die Änderungen nur zusammen sinnvoll sind, und was ohne Transaktion konkret schiefsteht (doppelt, verloren, halb geändert).
- Bei ACID nur den Begriff oder seine Übersetzung hinschreiben statt zu beschreiben, was das DBMS garantiert.
- Nennt die Aufgabe einen Vorgang, die Eigenschaften allgemein beschreiben statt an diesem Vorgang.
- Als Abhilfe für ein fehlendes Commit „Autocommit einschalten“ vorschlagen. Richtig ist: nach erfolgreichem Schreiben Commit, bei einem Fehler Rollback.
- Übersehen, dass bei eingeschaltetem Autocommit nach einem Absturz alles bis dahin Geschriebene gespeichert bleibt und der Rest fehlt.
- Constraints nur aufzählen, statt jeder Anforderung die passende Maßnahme zuzuordnen: Pflichtangabe → NOT NULL, nur einmal → UNIQUE, Wertebereich → CHECK, „verweist auf“ → Fremdschlüssel.
- Beim Beurteilen nur „nein“ oder „Constraints sind sicherer“ schreiben oder sich für eine Seite entscheiden. Verlangt ist die begründete Kombination von Datenbank und Anwendung.
