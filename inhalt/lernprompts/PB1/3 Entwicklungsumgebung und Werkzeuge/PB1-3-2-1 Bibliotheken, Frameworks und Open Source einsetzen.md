Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Entwicklungsumgebung und Werkzeuge › Bibliotheken, Automatisierung und cyber-physische Systeme › Bibliotheken, Frameworks und Open Source einsetzen

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Was ich am Ende können soll, steht dagegen fest:

- Jede Aussage im Stoff (K1, K2 …) ist ein Lernziel. Der Satz „Du kannst …“ sagt, was ich in der Prüfung können muss, die Stufe, auf welche Art: Wiedergeben = nennen; Verstehen = erklären, beschreiben, unterscheiden; Anwenden = es an einem Fall selbst tun (rechnen, erstellen, zeichnen); Beurteilen = entscheiden und begründen. Fertig ist eine Aussage, wenn ich genau das kann – mit allem, was der Satz nennt.
- Dieser Stichpunkt ist einer von knapp 300 und eng zugeschnitten. Was über seine Aussagen hinausgeht, lerne ich in einem anderen Stichpunkt oder brauche es für die Prüfung nicht. Nimm es nicht vorweg, weder in der Erklärung noch in einer Aufgabe; brauche ich etwas davon zum Verstehen, reicht ein Satz. Das gilt erst recht für alles, was die Lehrnotiz einem Nachbarstichpunkt zuordnet.

Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen – also jede Aussage begründen können, nicht mehr Stoff lernen. Erklär mit den richtigen Fachbegriffen und dem Warum dahinter. Verlangt eine Aussage selbst ein Verfahren, einen Ablauf oder einen Rechenweg, gehen wir ihn Schritt für Schritt durch. Ein Beispiel aus dem Alltag gern danach als Eselsbrücke – sag dazu, wo es hinkt.
- Zu manchen Aussagen stehen in der Lehrnotiz „Abläufe zum Verstehen“: fachlich geprüfte Erklärungen dessen, was Schritt für Schritt passiert. Bring den Ablauf bei seiner Aussage, vor jedem Vergleich, und sag dazu, was davon die IHK lesen will und was nur Hintergrund ist. Steht zu einer Aussage kein Ablauf da, wurde das geprüft – dann reicht die Erklärung aus dem Stoff mit dem Warum dazu, ohne eigenen Ablauf. Fehlt dir im Einzelfall trotzdem etwas Wichtiges, biet es mir in einem Satz an; schreibe ich „tiefer“, erklärst du es kurz und als Hintergrund gekennzeichnet.
- Vereinfachst du etwas so, dass es fachlich nicht mehr ganz stimmt, kennzeichne es mit „vereinfacht: …“.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Sag am Anfang jedes Häppchens, an welcher Aussage wir sind. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Eine Aufgabe prüft, was der Satz „Du kannst …“ verlangt, auf seiner Stufe – möglichst an einem neuen Fall statt als Nachsagen der Erklärung, aber lösbar allein mit dem Stoff. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
- Bewerte nur, was in der Aufgabe verlangt war. Stimmt der Inhalt und fehlt nur das Fachwort, zählt es als richtig: Nenn mir das Wort und weiter.
- Fachwörter, die die IHK lesen will, mach mir ruhig deutlich.
- Häng ich irgendwo fest, probier's anders – und wenn's gar nicht klickt, zeig mir die Lösung und wir machen weiter.
- Zeichnungen mache ich auf Papier und lade ein Foto hoch.

Ein paar Fixpunkte:
- Der Stoff ist die Grundlage, und alle Aussagen sollen drankommen. Hältst du etwas darin für falsch oder veraltet, sag es offen mit „⚠️ Hinweis zum Stoff: …“. Steht „in der Prüfung vorgegeben“ dabei, muss ich das nur anwenden.
- Was laut Lehrnotiz schon in Prüfungen dran war, ist besonders wichtig.
- „kann ich“ heißt: Stell mir nur eine Aufgabe zum Prüfen. „Pause“ heißt: Fass kurz zusammen, wo wir stehen.
- Zum Schluss eine Abschlussaufgabe im IHK-Stil (Kundensituation, Teilaufgaben mit Punkten, zusammen etwa 10–12, eine nach der anderen). Rein kommt vor allem, was unterwegs nicht saß und was schon in Prüfungen dran war. Bei mindestens zwei Dritteln der Punkte schreib „✅ Kannst du abhaken: <Titel des Stichpunkts>“, sonst üben wir, was noch wackelt.

Antworte auf Deutsch.

## Stoff: Bibliotheken, Frameworks und Open Source einsetzen

Ziel: Vor- und Nachteile von Bibliotheken und Open-Source-Bibliotheken beschreiben und den Einsatz begründet entscheiden. Die Dokumentation einer Erweiterung steht in PB1-9.

Das muss ich können:

### K1 – Vor- und Nachteile einer Bibliothek (Stufe 2 Verstehen)
Du kannst Vor- und Nachteile beim Einsatz einer Bibliothek beschreiben: fertige, getestete Funktionen müssen nicht neu entwickelt werden gegenüber Einarbeitungszeit, Abhängigkeit vom Anbieter und möglichem Mehraufwand zur Laufzeit.

Erklärung:
Eine **Bibliothek** ist eine Sammlung fertiger Funktionen oder Klassen, die das eigene Programm einbindet und aufruft; ein **Framework** gibt zusätzlich die Grundstruktur der Anwendung vor, in die der eigene Code eingefügt wird.
- **Vorteile:** fertige, **getestete** Funktionen; schneller fertig; oft gut dokumentiert; Verbesserungen und Fehlerbehebungen in der Bibliothek kommen der Anwendung zugute, ohne dass ihr eigener Code geändert werden muss (bei gleicher Schnittstelle).
- **Nachteile:** **Einarbeitung**, **Abhängigkeit** vom Anbieter (Pflege, Lizenz), evtl. mehr Speicher und längere Laufzeit (**Overhead**: Mehraufwand zur Laufzeit), man bindet viel Code ein, den man nicht braucht.

### K2 – Sicherheit von Open-Source-Bibliotheken (Stufe 2 Verstehen)
Du kannst über die Vorteile aus AP1 hinaus die Sicherheit von Open-Source-Bibliotheken erläutern: Weil der Quelltext öffentlich ist, können auch Angreifer Schwachstellen finden (so die IHK-Lösung); dagegen steht, dass viele Prüfer Lücken oft schneller finden und schließen.

Erklärung:
Öffentlicher Quelltext hat zwei Seiten:
- **Risiko** (so die IHK-Lösung): Auch Angreifer können den Code lesen und Schwachstellen suchen.
- **Chance:** Jeder kann nachvollziehen, was die Bibliothek tut (so die IHK-Lösung als Vorteil), und viele Augen prüfen den Code – Lücken werden oft **schneller gefunden und geschlossen**.
Wichtig ist, ob das Projekt **aktiv gepflegt** wird und Updates eingespielt werden.
Open Source heißt nicht frei von Bedingungen: Jede Open-Source-Bibliothek steht unter einer Lizenz, deshalb darf man nicht jede ohne Weiteres einsetzen (so die IHK-Lösung; Lizenzen: PB1-2).

### K3 – Auswahlkriterien für Bibliothek oder Framework (Stufe 4 Beurteilen)
Du kannst begründet entscheiden, ob ein Projekt eine bestimmte Bibliothek oder ein Framework einsetzt: Funktionsumfang, Lizenz (PB1-2), Pflege und Verbreitung, Einarbeitungsaufwand, Abhängigkeit.

Erklärung:
Kriterien für die Entscheidung:
- **Funktionsumfang**: deckt sie, was wir brauchen?
- **Lizenz** passt zum Produkt (PB1-2)
- **Pflege und Verbreitung**: aktive Community, regelmäßige Updates
- **Einarbeitungsaufwand**
- **Abhängigkeit**: was, wenn sie eingestellt wird?
Am Ende eine klare Empfehlung mit dem ausschlaggebenden Grund.

### K4 – Sicherheitsfunktionen aus bewährten Frameworks (Stufe 4 Beurteilen)
Du kannst begründen, warum Sicherheitsfunktionen wie Verschlüsselung, Anmeldung, Eingabeprüfung und Schutz vor SQL-Injection aus bewährten Bibliotheken und Frameworks übernommen statt selbst programmiert werden: Eigenbauten haben leicht unentdeckte Lücken, bewährte Lösungen sind vielfach geprüft und werden bei neuen Angriffen aktualisiert; deshalb zählt die Sicherheitsunterstützung auch bei der Wahl von Programmiersprache und Framework.

Erklärung:
Sicherheit selbst richtig zu bauen ist schwer – ein kleiner Fehler genügt für einen Angriff.
- **Eigenbau:** Eine selbst geschriebene Verschlüsselung oder Passwortprüfung prüft nur das eigene Team; Lücken fallen oft erst auf, wenn jemand sie ausnutzt.
- **Bewährte Lösung:** Viele Projekte nutzen sie, Fachleute untersuchen sie, gemeldete Lücken werden per Update geschlossen.
- Typische Bausteine: Verschlüsselung und Passwort-Hashing, Anmeldung und Sitzungsverwaltung, Filter für Eingaben, Datenbankzugriff mit vorbereiteten Anweisungen gegen SQL-Injection (PB1-10).
- Für die Auswahl (K3) heißt das: Eine Sprache oder ein Framework, das diese Funktionen gepflegt mitbringt, spart Aufwand und senkt das Risiko.
Wichtig: Die Bibliothek muss aktuell gehalten werden, sonst wird sie selbst zur Schwachstelle.
Beispiel: Ein Webshop nutzt die Anmeldung seines Web-Frameworks samt Passwort-Hashing statt einer selbst gebauten Prüfung gegen eine Tabelle mit Passwörtern.

## Lehrnotiz: Bibliotheken, Frameworks und Open Source einsetzen

**Aufteilung:**
- Vor- und Nachteile einer Bibliothek: K1
- Open Source und Sicherheit: K2
- Sicherheitsfunktionen übernehmen statt selbst bauen: K4
- Begründet entscheiden, baut auf allem Vorigen auf: K3

**Schon geprüft:** In Prüfungen: K1 (2021W), K2 (2022W) · Noch nicht geprüft: K3, K4

**Kerngedanken:**
- Eine Bibliothek ist eine Sammlung fertiger Funktionen, die das eigene Programm aufruft; ein Framework gibt den Rahmen vor, in den man den eigenen Code einfügt.
- Open Source heißt: Der Quelltext ist öffentlich, und die Lizenz erlaubt, die Software zu nutzen, zu verändern und weiterzugeben – aber nur unter den Bedingungen der jeweiligen Lizenz, etwa Namensnennung oder die Pflicht, eigene Änderungen ebenfalls offenzulegen (Copyleft). Deshalb darf man nicht jede Open-Source-Bibliothek ohne Weiteres in jedes Produkt einbauen.
- Bei „beschreiben“ reicht ein Stichwort nicht, und die Vor- und Nachteile stehen nicht in der Aufgabe: Verlangt ist das Merkmal und ein Satz, was sich dadurch für das Projekt ändert.
- Bei der Auswahl gibt es Ausschlussgründe: Fehlt eine benötigte Funktion oder passt die Lizenz nicht, scheidet der Kandidat aus. Ein weicher Vorteil wie kurze Einarbeitung gleicht das nicht aus.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K2 – Von der gefundenen Lücke zum eingespielten Update: (1) Ein Entwickler oder Sicherheitsforscher findet im öffentlichen Quelltext eine Schwachstelle und meldet sie vertraulich den Betreuern des Projekts (Maintainern). (2) Die Maintainer korrigieren den fehlerhaften Code und veröffentlichen eine neue Version der Bibliothek. (3) Mit der neuen Version wird die Schwachstelle öffentlich bekannt gemacht, in der Regel mit Angabe der betroffenen Versionen. (4) Das eigene Team stellt die Abhängigkeit im Projekt auf die korrigierte Version um und liefert die Anwendung neu aus. (5) Anwendungen mit der alten Version bleiben verwundbar, und Angreifer kennen die Lücke jetzt aus der Veröffentlichung. (6) Wird das Projekt nicht mehr gepflegt, erscheint keine korrigierte Version, und gefundene Lücken bleiben dauerhaft offen. Vereinfacht: In Wirklichkeit kann auch ein Angreifer die Lücke als Erster finden und ausnutzen, bevor es überhaupt eine Korrektur gibt.

**Typische Missverständnisse:**
- Viele denken, Open Source sei sicherer, weil jeder den Code prüfen kann; richtig ist: Es gibt zwei Seiten, und die IHK-Lösung zählt ausdrücklich das Risiko.
- Viele denken, „kostenlos“ sei ein Vorteil einer Bibliothek; richtig ist: Das ist eine Frage der Lizenz, nicht der Bibliothek an sich.
- Viele denken, ein Eigenbau sei sicherer, weil man weiß, was drin ist; richtig ist: Außer dem eigenen Team hat ihn niemand geprüft.

**Fachwörter:**
- Bibliothek: Sammlung fertiger, aufrufbarer Funktionen
- Framework: Rahmen, in den eigener Code kommt
- Open Source: Quelltext offen; Nutzung, Änderung und Weitergabe nach Lizenzbedingungen erlaubt
- Abhängigkeit: Projekt hängt an Pflege und Lizenz des Anbieters
- Lizenz: Bedingungen für die Nutzung
- Passwort-Hashing: nur ein nicht umkehrbarer Prüfwert wird gespeichert
- SQL-Injection: SQL-Befehle über Eingabefelder einschleusen

**So fragt die IHK:**
- Das Thema kam in zwei Prüfungen vor, jeweils in Aufgaben zur Projektplanung, als offene Teilaufgaben mit 2 bis 4 Punkten. Operatoren: „beschreiben“, „erläutern“, „begründen“. Gewertet werden ganze Sätze mit Wirkung.
- Einmal war zu einer gesetzten Klassenbibliothek je ein Vor- und ein Nachteil zu beschreiben (4 Punkte). Die Lösung nennt als Vorteil fertige Funktionen, die nicht neu entwickelt werden müssen, und Änderungen der Bibliothek ohne Umbau der Anwendung. Als Nachteil nennt sie Einarbeitungszeit wegen des Umfangs und Mehraufwand („Overhead“) zur Laufzeit.
- Einmal gab es drei Teilaufgaben zu Open Source: den Begriff erläutern; begründen, warum man nicht jede Open-Source-Bibliothek ohne Weiteres einsetzen darf (Lizenzen); je einen Vor- und Nachteil beschreiben. Die Lösung nennt als Vorteil, dass nachvollziehbar ist, was die Bibliothek tut, und als Nachteil, dass Angreifer den Code lesen und Schwachstellen ausnutzen.
- Zur Auswahl nach Kriterien (K3) und zu Sicherheitsfunktionen aus Frameworks (K4) gibt es noch keine echte Aufgabe. Zu erwarten ist „Begründen Sie …“ oder „Entscheiden Sie begründet …“ mit 3 bis 4 Punkten.

**Fallen:**
- Denselben Punkt zweimal als Vorteil zählen, etwa „schneller fertig“ und „spart Zeit“.
- Bei Open Source die Bedingung weglassen: Das Projekt muss aktiv gepflegt sein, und das eigene Team muss die Updates auch einspielen.
- Bei Sicherheitsfunktionen nur „geht schneller“ schreiben. Erwartet werden beim Eigenbau die leicht unentdeckten Lücken, bei der bewährten Lösung „vielfach geprüft“ und „bei neuen Angriffen aktualisiert“.
- Kriterien nur aufzählen, statt jedes auf alle Kandidaten anzuwenden, oder am Ende keine klare Empfehlung geben.
- Einen Kandidaten allein wegen Vorkenntnissen oder kurzer Einarbeitung wählen, obwohl er nicht mehr gepflegt wird.
- Ein Kriterium als Grund anführen, das bei allen Kandidaten gleich ausfällt; es entscheidet nichts.
