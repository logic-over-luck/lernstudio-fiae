Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Daten, Masken und Abläufe modellieren › Relationale Tabellen: Primär- und Fremdschlüssel

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

## Stoff: Relationale Tabellen: Primär- und Fremdschlüssel

Ziel: Die Aufgabe von Primär- und Fremdschlüssel beschreiben, den Nutzen verknüpfter Tabellen erklären und die Phasen des Datenbankentwurfs ordnen.

Das muss ich können:

### K1 – Funktion des Primärschlüssels (Stufe 2 Verstehen)
Du kannst die Funktion eines Primärschlüssels beschreiben: Er kennzeichnet jeden Datensatz einer Tabelle eindeutig.

Erklärung:
Der **Primärschlüssel** kennzeichnet **jeden Datensatz einer Tabelle eindeutig**.
- Sein Wert kommt in der Tabelle **nur einmal** vor.
- Er ist **nie leer**.
Beispiel: Die Kundennummer 4711 gibt es in der Tabelle Kunde genau einmal.

### K2 – Zweck des Fremdschlüssels (Stufe 2 Verstehen)
Du kannst den Zweck eines Fremdschlüssels beschreiben: Er verweist auf den Primärschlüssel einer anderen Tabelle und verbindet so die Tabellen.

Erklärung:
Ein **Fremdschlüssel** ist ein Attribut, das auf den **Primärschlüssel einer anderen Tabelle** verweist. So werden die Tabellen **verbunden**.
Beispiel: In der Tabelle `Bestellung` steht die Spalte `Kundennummer`. Sie verweist auf den Primärschlüssel der Tabelle `Kunde` – so weiß man, welcher Kunde bestellt hat.
Bei 1:n steht der Fremdschlüssel in der Tabelle der n-Seite (hier `Bestellung`); dort darf derselbe Wert mehrfach vorkommen – ein Kunde hat viele Bestellungen.

### K3 – Vorteil verknüpfter Tabellen (Stufe 2 Verstehen)
Du kannst den Vorteil verknüpfter Tabellen beschreiben: Jede Information wird nur einmal gespeichert und bleibt dadurch widerspruchsfrei.

Erklärung:
In verknüpften Tabellen wird **jede Information nur einmal** gespeichert – z. B. die Kundenadresse nur in der Tabelle Kunde, die Bestellungen verweisen nur über die Kundennummer darauf.
- **Keine Redundanz**
- **Änderungen an einer Stelle** – ändert sich die Adresse, wird sie einmal geändert und gilt für alle Bestellungen.
- Die Daten bleiben **widerspruchsfrei**.

### K4 – Phasen des Datenbankentwurfs (Stufe 2 Verstehen · in der Prüfung vorgegeben: Phasen des Datenbankentwurfs)
Du kannst die Phasen des Datenbankentwurfs in die richtige Reihenfolge bringen: Anforderungsanalyse, konzeptioneller Entwurf, logischer Entwurf, Verteilung im Netz, physischer Entwurf, Test, Anwendung und Wartung.

Erklärung:
Die Phasen in der richtigen Reihenfolge:
- **Anforderungsanalyse** – was soll gespeichert werden?
- **Konzeptioneller Entwurf** – z. B. ER-Modell
- **Logischer Entwurf** – Tabellen mit Schlüsseln
- **Entwurf der Verteilung im Netz** – auf welchen Rechnern oder Standorten liegen die Daten, wer greift zu?
- **Physischer Entwurf/Implementierung** – Umsetzung im konkreten Datenbanksystem
- **Test und Validation**
- **Anwendung und Wartung**
Logik: vom Allgemeinen (was?) zum Konkreten (wie genau?).

### K5 – Tabelle, Datensatz und Attribut (Stufe 2 Verstehen)
Du kannst Tabelle, Datensatz und Attribut einer relationalen Datenbank unterscheiden.

Erklärung:
- **Tabelle:** Sammlung gleichartiger Daten – z. B. alle Kunden.
- **Datensatz:** eine **Zeile** – ein einzelner Kunde.
- **Attribut:** eine **Spalte** – z. B. Name oder Kundennummer.

### K7 – Anforderungen an einen Primärschlüssel (Stufe 2 Verstehen)
Du kannst die Anforderungen an einen Primärschlüssel erklären: Er ist für jeden Datensatz eindeutig, minimal, besteht also aus so wenigen Spalten wie nötig, und unveränderlich, und jede Tabelle hat genau einen Primärschlüssel.

Erklärung:
- **Eindeutig:** Kein Wert kommt zweimal vor, und er ist nie leer.
- **Minimal:** Er enthält nur so viele Spalten, wie für die Eindeutigkeit nötig sind. Reicht die Kundennummer, gehört der Name nicht dazu.
- **Unveränderlich:** Andere Tabellen verweisen über Fremdschlüssel auf ihn; ändert er sich, müssten alle Verweise mitgeändert werden.
- **Genau einer je Tabelle** – er kann aber aus mehreren Spalten zusammengesetzt sein.
Beispiel: Die E-Mail-Adresse ist zwar eindeutig, aber nicht unveränderlich – als Primärschlüssel ungeeignet.

### K8 – Künstlicher statt natürlicher Primärschlüssel (Stufe 2 Verstehen)
Du kannst erklären, warum als Primärschlüssel meist ein künstlicher Schlüssel ohne weitere Bedeutung, etwa eine laufende Nummer, gewählt wird: Natürliche Merkmale wie Namen sind oft nicht eindeutig, und ein sprechender Schlüssel, der zum Beispiel die Postleitzahl enthält, wird beim Umzug falsch, lässt sich wegen der Verweise aus anderen Tabellen aber kaum ändern.

Erklärung:
- **Natürlicher Schlüssel:** ein Merkmal aus der realen Welt, z. B. Name oder Name + Geburtsdatum. Oft **nicht eindeutig** (zwei Personen namens Thomas Müller) oder **veränderlich** (Nachname nach Heirat).
- **Sprechender Schlüssel:** eine Nummer, die Bedeutung trägt, z. B. `53111-0042` mit Postleitzahl. Zieht der Kunde um, stimmt der Schlüssel nicht mehr – ändern darf man ihn aber nicht, weil Rechnungen und Aufträge darauf verweisen.
- **Künstlicher Schlüssel:** eine laufende Nummer oder ID **ohne Bedeutung**, z. B. Kundennummer 10023. Sie ist eindeutig, bleibt für immer gleich und wird oft vom DBMS automatisch vergeben.
Deshalb ist der künstliche Schlüssel in der Praxis der Normalfall.

## Lehrnotiz: Relationale Tabellen: Primär- und Fremdschlüssel

**Hinweis aus dem Lernplan:** Die Musterlösungen zu 2025H-A4-aa bis -ac fehlen; K1–K3 folgen den Aufgabenstellungen.

**Aufteilung:**
- Aufbau einer Tabelle und Primärschlüssel: K5, K1
- Fremdschlüssel und der Nutzen der Verknüpfung: K2, K3
- Was einen guten Primärschlüssel ausmacht: K7, K8
- Phasen des Datenbankentwurfs: K4 – eigenes Teilgebiet, nur die Reihenfolge ist gefragt

**Schon geprüft:** In Prüfungen: K1 (2025H), K2 (2025H), K3 (2025H), K4 (2023H) · Noch nicht geprüft: K5, K7, K8

**Kerngedanken:**
- Eindeutig sein muss ein Wert nur in der Tabelle, in der er Primärschlüssel ist. Als Fremdschlüssel in einer anderen Tabelle darf derselbe Wert beliebig oft vorkommen.
- Bei 1:n steht der Fremdschlüssel in der Tabelle, von der es viele zu einem Partner gibt. Umgekehrt ginge es nicht, weil in ein Feld nur ein Wert passt. Bei m:n passt er in keine der beiden Tabellen; dann braucht es eine eigene Zwischentabelle mit zwei Fremdschlüsseln – das ist ein eigenes Thema.
- Bei den Phasen wird erst entschieden, wo die Datenbank liegt und wer darauf zugreift (Verteilung im Netz), dann wird sie dort angelegt (physischer Entwurf).

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K2 – Wie ein Fremdschlüssel-Verweis aufgelöst wird: (1) Jeder Datensatz der Tabelle Bestellung speichert in der Fremdschlüsselspalte Kundennummer den Primärschlüsselwert des zugehörigen Kunden, zum Beispiel 4711. (2) Soll zu einer Bestellung der Kunde ermittelt werden, liest das DBMS diesen Wert aus dem Datensatz der Bestellung. (3) Das DBMS sucht in der Tabelle Kunde den Datensatz, dessen Primärschlüssel genau diesen Wert hat. (4) Weil der Primärschlüssel eindeutig ist, kann höchstens ein Kunden-Datensatz passen. Verweist die Bestellung auf einen vorhandenen Kunden, ist es genau einer. (5) Die Abfrage gibt die Attribute beider Datensätze gemeinsam aus, etwa das Bestelldatum zusammen mit Name und Adresse des Kunden. (6) In umgekehrter Richtung liefert die Suche nach 4711 in der Fremdschlüsselspalte von Bestellung alle Bestellungen dieses Kunden. Vereinfacht: Die Schritte beschreiben, was die Abfrage logisch ergibt; intern kann das DBMS die Tabellen auch in anderer Reihenfolge oder über einen Index durchsuchen.

**Typische Missverständnisse:**
- Viele denken, der Hauptvorteil verknüpfter Tabellen sei Übersicht oder gesparter Speicher; richtig ist, dass der Speicher nur ein Nebeneffekt ist – entscheidend ist, dass jede Angabe nur an einer Stelle geändert wird und die Daten sich deshalb nicht widersprechen können.
- Viele denken, ein sprechender Schlüssel sei praktisch, weil man ihm etwas ansieht; richtig ist, dass genau diese Bedeutung ihn veränderlich macht.

**Fachwörter:**
- Datensatz: eine Zeile der Tabelle
- Attribut: eine Spalte der Tabelle
- Primärschlüssel: kennzeichnet jeden Datensatz eindeutig
- Fremdschlüssel: verweist auf Primärschlüssel einer anderen Tabelle
- Redundanz: dieselbe Information mehrfach gespeichert
- künstlicher Schlüssel: laufende Nummer ohne Bedeutung
- sprechender Schlüssel: Nummer, die Bedeutung trägt

**So fragt die IHK:**
- Zu den Phasen gab es eine echte Aufgabe: eine Liste nummerierter Phasennamen, die Anforderungsanalyse ist als erstes Feld vorgegeben, man trägt die Ziffern in der richtigen Reihenfolge ein. 3 Punkte, je richtiges Feld 0,5 Punkte.
- Die Namen lauten dort etwas länger als in der Aussage: „Test und Validation“, „Entwurf der Verteilung im Netz“, „Physischer Entwurf/Implementierung“.
- Schlüssel (K1, K2, K3, 2025H), 6 Punkte: Ein kurzer englischer Fachtext erklärt Primärschlüssel, Fremdschlüssel und das Verknüpfen von Tabellen. Drei Fragen, auf Deutsch und mit Bezug zum Text zu beantworten, je 2 Punkte, „beschreiben“: die Funktion eines Primärschlüssels, der Zweck von Fremdschlüsseln, der Vorteil des Verknüpfens von Tabellen. Die Antworten stehen im Text (eindeutig kennzeichnen; auf den Primärschlüssel einer anderen Tabelle verweisen; Daten gemeinsam abfragen, weniger Redundanz). Lösungshinweise liegen nicht vor.
- Bei „beschreiben“ zählt die Funktion oder der Zweck. Nur das Wort „Primärschlüssel“ hinzuschreiben, bringt keinen Punkt.

**Fallen:**
- Zeile und Spalte verwechseln.
- Einen mehrfach vorkommenden Wert in einer Fremdschlüssel-Spalte für einen Fehler halten.
- Bei 1:n den Fremdschlüssel in die Tabelle der 1-Seite setzen.
- Den Zweck des Fremdschlüssels nur mit „verbindet“ angeben, ohne den Verweis auf den Primärschlüssel der anderen Tabelle.
- Einen Schlüssel für geeignet halten, nur weil er eindeutig ist, obwohl er sich ändern oder leer bleiben kann.
- Einen ungeeigneten Schlüssel mit dem falschen Grund ablehnen: „nicht eindeutig“ sagen, obwohl er eindeutig ist und das Problem darin liegt, dass er sich ändern kann oder mehr Spalten als nötig enthält.
- Einen sprechenden Schlüssel nur als „zu lang“ ablehnen, ohne die Verweise aus anderen Tabellen zu nennen.
- Bei den Phasen konzeptionellen und logischen Entwurf vertauschen oder die Verteilung im Netz hinter den physischen Entwurf setzen.
