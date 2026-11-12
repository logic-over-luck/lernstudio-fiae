Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Programmieren und Modellieren › Daten, Masken und Abläufe modellieren › Relationale Tabellen: Primär- und Fremdschlüssel

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

**Aufteilung:**
- Aufbau einer Tabelle und Primärschlüssel: K5, K1
- Fremdschlüssel und der Nutzen der Verknüpfung: K2, K3
- Was einen guten Primärschlüssel ausmacht: K7, K8
- Phasen des Datenbankentwurfs: K4 – eigenes Teilgebiet, nur die Reihenfolge ist gefragt

**Schon geprüft:** In Prüfungen: K1 (neuere Prüfung), K2 (neuere Prüfung), K3 (neuere Prüfung), K4 (2023H) · Noch nicht geprüft: K5, K7, K8

**Kerngedanken:**
- Eindeutig sein muss ein Wert nur in der Tabelle, in der er Primärschlüssel ist. Als Fremdschlüssel in einer anderen Tabelle darf derselbe Wert beliebig oft vorkommen.
- Bei 1:n steht der Fremdschlüssel in der Tabelle, von der es viele zu einem Partner gibt. Umgekehrt ginge es nicht, weil in ein Feld nur ein Wert passt. Bei m:n passt er in keine der beiden Tabellen; dann braucht es eine eigene Zwischentabelle mit zwei Fremdschlüsseln – das ist ein eigenes Thema.
- Bei den Phasen wird erst entschieden, wo die Datenbank liegt und wer darauf zugreift (Verteilung im Netz), dann wird sie dort angelegt (physischer Entwurf).

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
- Zu den Schlüsseln ist keine echte Aufgabe bekannt. Nach dem Prüfungskatalog sind kurze Aufgaben mit „beschreiben“ oder „erläutern“ an Tabellen aus der Ausgangssituation zu erwarten, wenige Punkte je Teil.
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
