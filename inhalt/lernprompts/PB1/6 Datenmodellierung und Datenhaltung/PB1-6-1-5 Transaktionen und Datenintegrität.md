Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Datenmodellierung und Datenhaltung › Datenmodelle und Datenhaltung › Transaktionen und Datenintegrität

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt. Beides liest nur du. Ich kenne nur, was du mir in dieser Sitzung erklärst.

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
- Zeichnungen mache ich auf Papier und lade ein Foto hoch.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im IHK-Stil (Kundensituation, Teilaufgaben mit Punkten, zusammen etwa 10–12, eine nach der anderen). Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

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

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K1 – Wie Sperren und Transaktionslog ACID umsetzen: (1) Bevor eine Transaktion eine Zeile ändert, setzt das DBMS eine Sperre darauf; andere Transaktionen, die dieselbe Zeile ändern wollen, müssen warten. (2) Das DBMS schreibt jede Änderung mit altem und neuem Wert zuerst in das Transaktionslog und erst danach in die Datendateien. (3) Beim Commit schreibt das DBMS einen Commit-Eintrag ins Log, sichert das Log auf den Datenträger und bestätigt erst dann dem Programm. (4) Bei einem Rollback oder Fehler stellt das DBMS mit den alten Werten aus dem Log den Zustand vor der Transaktion wieder her. (5) Am Ende der Transaktion gibt das DBMS die Sperren frei, und wartende Transaktionen arbeiten mit dem dann gültigen Stand weiter. (6) Nach einem Absturz liest das DBMS beim Neustart das Log: Änderungen mit Commit-Eintrag holt es nach, Änderungen ohne Commit-Eintrag nimmt es zurück.

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
