Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Daten, Masken und Abläufe modellieren › Redundanz erkennen und Datentypen wählen

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP1 – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt. Beides liest nur du. Ich kenne nur, was du mir in dieser Sitzung erklärst.

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

## Stoff: Redundanz erkennen und Datentypen wählen

Ziel: Redundanz und ihre Folgen erklären und für Attribute passende Datentypen begründen.

Das muss ich können:

### K2 – Redundanz und ihre Folgen (Stufe 2 Verstehen)
Du kannst erklären, was Redundanz ist, und ein Problem beschreiben, das dadurch entsteht: Dieselbe Information ist mehrfach gespeichert; wird beim Ändern eine Stelle vergessen, widersprechen sich die Daten.

Erklärung:
**Redundanz** heißt: **Dieselbe Information ist mehrfach gespeichert.**
Problem: Wird beim Ändern **eine Stelle vergessen**, widersprechen sich die Daten (Inkonsistenz). Dazu wird unnötig Speicher belegt.
Beispiel: Die Kundenadresse steht bei jeder Bestellung. Nach einem Umzug wird sie nur in der neuesten Bestellung geändert – jetzt hat der Kunde in der Datenbank zwei Adressen, und niemand weiß, welche stimmt.

### K3 – Datentyp für ein Attribut, etwa Postleitzahl (Stufe 4 Beurteilen)
Du kannst für ein Attribut einen passenden Datentyp begründen, zum Beispiel Datum, Ganzzahl oder Text, auch mit den üblichen Typnamen in Datenbanken (INTEGER, DECIMAL, VARCHAR, CHAR, DATE, BOOLEAN) und warum eine Postleitzahl als Text gespeichert wird: Führende Nullen bleiben erhalten, und gerechnet wird damit nicht.

Erklärung:
Wähle den Datentyp nach dem, was mit dem Wert passieren soll:
- **Datum** (DATE) für ein Geburtsdatum: nur gültige Werte möglich, man kann damit rechnen (Alter) und richtig sortieren.
- **Ganzzahl** (INTEGER) für die Anzahl Kinder oder Minuten: es wird gezählt und gerechnet.
- **Text** (VARCHAR(n)) für einen Nachnamen; **CHAR(n)** für Text fester Länge.
- **Text für die Postleitzahl:** Führende Nullen bleiben erhalten (01067 Dresden – als Zahl würde daraus 1067), und gerechnet wird damit nie; üblich ist CHAR(5).
- **Geldbeträge** als **DECIMAL(p,s)**, z. B. DECIMAL(8,2): Festkomma, keine Rundungsfehler wie bei den Gleitkommatypen FLOAT und DOUBLE.
- **BOOLEAN** für Ja/Nein-Werte.
- **Text** auch für Telefonnummern: führende 0, Zeichen wie + und Leerzeichen.
In der SQL-Übersicht der Prüfung stehen CHARACTER, CHAR(n) und VARCHAR(n) für Text, dazu DECIMAL, DOUBLE (Gleitkommazahl), INTEGER und DATE – nimm die Namen von dort.

### K5 – Einfüge-, Änderungs- und Löschanomalie (Stufe 2 Verstehen)
Du kannst Einfüge-, Änderungs- und Löschanomalie unterscheiden.

Erklärung:
Alle drei entstehen durch Redundanz:
- **Einfügeanomalie:** Ein Datensatz lässt sich nicht anlegen, weil andere Angaben fehlen. Beispiel: Ein neuer Kunde kann nicht gespeichert werden, solange er nichts bestellt hat.
- **Änderungsanomalie:** Eine mehrfach gespeicherte Angabe wird **nicht überall** geändert – die Daten widersprechen sich.
- **Löschanomalie:** Beim Löschen gehen **ungewollt andere Informationen** verloren. Beispiel: Die einzige Bestellung eines Kunden wird gelöscht – damit ist auch seine Adresse weg.

### K6 – Errechenbare Werte nicht speichern (Stufe 2 Verstehen)
Du kannst erklären, warum ein Wert, der sich aus anderen Spalten errechnen lässt, etwa der Gesamtpreis aus Einzelpreis und Menge, nicht zusätzlich gespeichert wird: Er ist versteckte Redundanz, und nach einer Änderung von Preis oder Menge kann er den übrigen Daten widersprechen; der Speicherplatz ist dabei das kleinere Problem.

Erklärung:
Redundanz heißt nicht nur, dass ein Wert zweimal dasteht. **Versteckt** ist sie, wenn ein Wert **aus anderen Werten folgt**.
- Beispiel: Spalten Einzelpreis 20 €, Menge 3, Gesamtpreis 60 €. Der Gesamtpreis steckt schon in den beiden anderen Spalten.
- Wird die Menge auf 4 geändert und der Gesamtpreis vergessen, stehen 60 € neben 4 × 20 € – die Daten **widersprechen sich** (Inkonsistenz).
- Das ist das Hauptproblem; die paar Bytes Speicher fallen kaum ins Gewicht.
Lösung: Rechenwerte nicht speichern, sondern bei Bedarf berechnen (z. B. in der Abfrage oder im Programm).

### K7 – Stammdaten, Bewegungsdaten und Rechendaten (Stufe 2 Verstehen)
Du kannst die Datenarten einer Auftragsbearbeitung unterscheiden: Stammdaten ändern sich selten (Kundenname, Artikelbezeichnung), Bewegungsdaten entstehen mit jedem Vorgang (Bestellmenge), Rechendaten berechnet das Programm (Gesamtpreis) und speichert sie deshalb meist nicht.

Erklärung:
Stammdaten ändern sich selten (Kundenname, Artikelbezeichnung), Bewegungsdaten entstehen laufend mit jedem Vorgang (Bestellmenge), Rechendaten berechnet das Programm (Gesamtpreis) und speichert sie deshalb meist nicht.
Achtung: Der Einzelpreis ist ein Stammdatum des Artikels, auch wenn er in jeder Bestellzeile auftaucht; die Bestellmenge ist das Bewegungsdatum.

## Lehrnotiz: Redundanz erkennen und Datentypen wählen

**Aufteilung:**
- Teil A, Redundanz und was daraus folgt: K2, K5
- Teil A, versteckte Redundanz und Datenarten: K6, K7 – der errechenbare Wert und das Rechendatum sind dieselbe Sache
- Teil B, Datentypen begründen: K3

**Schon geprüft:** In Prüfungen: K2 (2025F), K3 (2026H) · Noch nicht geprüft: K5–K7

**Kerngedanken:**
- Redundanz ist die Mehrfachspeicherung selbst, nicht „falsche Daten“. Der Widerspruch ist erst die mögliche Folge.
- Die Anomalien treten auf, wenn Angaben über verschiedene Dinge (etwa Kunde und Bestellung) in einer einzigen Tabelle stehen.
- Muss der Preis zum Zeitpunkt der Bestellung erhalten bleiben, ist er in der Bestellzeile keine Redundanz, sondern eine eigene Angabe („Preis bei Bestellung“). In Prüfungsaufgaben gilt der Einzelpreis als Stammdatum des Artikels.
- Beim Datentyp entscheidet, was mit dem Wert geschehen soll. „Besteht nur aus Ziffern“ heißt nicht „ist eine Zahl“ – entscheidend ist, ob man damit rechnet.
- K3 steht auf der Stufe Beurteilen: Verlangt sind ein Urteil, ein passender Typ und eine Begründung am Wert.
**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K5 – Wie die drei Anomalien in einer gemeinsamen Tabelle entstehen: (1) Eine einzige Tabelle speichert je Zeile eine Bestellung; Primärschlüssel ist die Bestellnummer, Name und Adresse des Kunden stehen in derselben Zeile. (2) Bestellt ein Kunde mehrmals, steht seine Adresse in mehreren Zeilen; das ist die Redundanz. (3) Einfügen: Ein Kunde ohne Bestellung hat keine Bestellnummer; weil der Primärschlüssel nicht leer sein darf, lehnt die Datenbank die Zeile ab. (4) Ändern: Eine Änderung, die nur eine Zeile trifft, lässt die alte Adresse in den übrigen Zeilen des Kunden stehen. (5) Löschen: Die Datenbank entfernt immer die ganze Zeile; mit der einzigen Bestellung eines Kunden verschwinden deshalb auch sein Name und seine Adresse. (6) Stehen die Kunden in einer eigenen Tabelle und die Bestellung verweist per Fremdschlüssel darauf, tritt in diesem Beispiel keiner der drei Fälle mehr auf.

**Typische Missverständnisse:**
- Viele denken, das Hauptproblem der Redundanz sei der Speicherplatz; richtig ist, dass der Widerspruch nach einer unvollständigen Änderung das Problem ist.
- Viele denken, bei der Löschanomalie lasse sich etwas nicht löschen; richtig ist, dass beim Löschen etwas mit verschwindet, das man behalten wollte.

**Fachwörter:**
- Redundanz: dieselbe Information mehrfach gespeichert
- Inkonsistenz: Daten widersprechen sich
- Einfügeanomalie: Datensatz nicht anlegbar, weil anderes fehlt
- Änderungsanomalie: Angabe nicht überall geändert
- Löschanomalie: beim Löschen geht anderes ungewollt verloren
- Stammdaten: ändern sich selten
- Bewegungsdaten: entstehen mit jedem Vorgang
- Rechendaten: berechnet das Programm
- DATE: Datum
- INTEGER: Ganzzahl
- CHAR(n): Text fester Länge
- VARCHAR(n): Text variabler Länge
- DECIMAL(p,s): Festkommazahl, geeignet für Geldbeträge

**So fragt die IHK:**
- Kurz und offen: In einer Ausgangssituation (zum Beispiel ein übernommener Datenbestand „enthält Redundanzen“) soll man den Begriff Redundanz erklären und ein Problem beschreiben, das daraus entstehen kann. Je etwa 2 Punkte, wenige Zeilen Platz.
- Die Situation ist dabei nur Verpackung: Verlangt ist das Wissen über Redundanz, es steht nicht in der Aufgabe.
- Für den Begriff reicht nach den Lösungshinweisen schon „Mehrfachspeicherung von Daten“, auch ohne Bezug auf den Fall. Beim Problem zählen: Änderungen an mehreren Stellen, Inkonsistenz durch eine übersehene Stelle, mehr Aufwand, ungewollte Nebeneffekte beim Einfügen, Ändern und Löschen. Andere sinnvolle Formulierungen gelten auch.
- Datentypen (K3, 2026H), 3 Punkte, „bestimmen“: Tabelle mit drei Attributen und je einem Beispielwert (ein Datum, eine Postleitzahl mit führender Null, eine Dauer in Minuten); einzutragen sind Datentyp und Begründung. Die nicht amtliche Lösung: DATE; VARCHAR(5) oder CHAR(5), weil bei einer Zahl die führende Null verloren ginge; INTEGER. Liegt eine SQL-Übersicht bei (dort stehen CHARACTER, DECIMAL, DOUBLE, INTEGER, DATE), nimmt man die Typnamen von dort. DOUBLE ist eine Gleitkommazahl – für Geld bleibt es bei DECIMAL.

**Fallen:**
- Redundanz mit „falschen Daten“ gleichsetzen.
- Lösch- und Änderungsanomalie verwechseln.
- Einen Datentyp nennen, aber nicht begründen („ist halt Text“).
- Einen Wert für eine Zahl halten, weil er nur aus Ziffern besteht.
- Ein Datum als Text speichern: Sortiert wird dann nach den ersten Zeichen statt nach der Zeit.
- Einen Zählwert als Text speichern, damit auch Schätzungen hineinpassen: Dann lässt sich nicht mehr rechnen.
- Für Geldbeträge eine Gleitkommazahl wählen, weil der Betrag ein Komma hat.
- Einen Rechenwert mitspeichern wollen, „um Rechenzeit zu sparen“: Die Rechnung kostet fast nichts, der Widerspruch viel.
