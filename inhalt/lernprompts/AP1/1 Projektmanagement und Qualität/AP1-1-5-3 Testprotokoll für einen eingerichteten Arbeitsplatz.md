Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Projektmanagement und Qualität › Qualitätsmanagement › Testprotokoll für einen eingerichteten Arbeitsplatz

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

## Stoff: Testprotokoll für einen eingerichteten Arbeitsplatz

Ziel: Ein Testprotokoll für einen Arbeitsplatz erstellen, Abweichungen fachlich begründen und Fehler systematisch eingrenzen.

Das muss ich können:

### K3 – Weitere Prüfschritte nach fehlgeschlagenem Testfall (Stufe 3 Anwenden)
Du kannst nach einem fehlgeschlagenen Testfall weitere Prüfschritte festlegen, zum Beispiel die RAM-Größe im UEFI oder im Task-Manager nachsehen.

Erklärung:
Ein fehlgeschlagener Test sagt nur, dass etwas nicht stimmt. Mit weiteren Prüfschritten findest du heraus, warum.
- Statt 16 GB werden 8 GB RAM angezeigt → RAM-Größe im UEFI (der Firmware, die vor dem Betriebssystem startet) oder im Task-Manager prüfen, mit den eingebauten Riegeln vergleichen.
- Kein Internet → Kabel und LED, IP-Konfiguration, Gateway, DNS prüfen.
Prüfe auch, ob es wirklich ein Fehler ist: Eine Festplatte mit 1 TB zeigt Windows als „931 GB“ an – gerechnet ist das in GiB, also nur eine andere Einheit.
Danach: Fehler beheben, Test wiederholen, Ergebnis protokollieren.

### K5 – Testprotokoll für einen neuen Arbeitsplatz (Stufe 3 Anwenden)
Du kannst für einen neu eingerichteten Arbeitsplatz ein Testprotokoll erstellen: sinnvolle Testfälle (Hardware erkannt, Netzwerk und Internet, Drucker, Anmeldung, Software startet) mit Beschreibung, erwartetem und tatsächlichem Ergebnis aus der Spezifikation ableiten.

Erklärung:
Ein Testprotokoll hat diese Spalten: **Testfall, Beschreibung, erwartetes Ergebnis, tatsächliches Ergebnis**. Das erwartete Ergebnis leitest du aus der Spezifikation ab (den schriftlichen Vorgaben für den Arbeitsplatz).
Typische Testfälle:
- Hardware wird erkannt (z. B. 16 GB RAM laut Spezifikation)
- Netzwerk und Internet erreichbar
- Drucker druckt eine Testseite
- Anmeldung mit dem Benutzerkonto funktioniert
- benötigte Software startet
Weicht das tatsächliche vom erwarteten Ergebnis ab, ist der Testfall nicht bestanden – außer es ist nur eine andere Einheit (siehe K3); dann ist er bestanden, und die Begründung steht im Protokoll.

### K6 – Fehlersuche durch Austauschen von Komponenten (Stufe 3 Anwenden)
Du kannst eine Fehlersuche durch Austauschen planen: vorher das Gerät ausschalten, vom Stromnetz trennen und auf ESD-Schutz achten, dann immer nur eine Komponente ändern, danach testen und mit einer Gegenprobe bestätigen, zum Beispiel bei zwei Speicherriegeln.

Erklärung:
Zuerst die Sicherheit: Rechner **ausschalten, vom Stromnetz trennen** und auf **ESD-Schutz** achten (ESD = elektrostatische Entladung, die Bauteile zerstören kann; deshalb Armband oder Erdung, Bauteile nur am Rand anfassen).
Dann gilt: **Immer nur eine Komponente ändern, danach testen.** Sonst weißt du nicht, welche Änderung geholfen hat.
Beispiel mit zwei Speicherriegeln, der Rechner stürzt ab:
- Nur Riegel 1 einsetzen, starten, testen.
- Nur Riegel 2 einsetzen, starten, testen.
- Tritt der Fehler nur mit Riegel 2 auf, ist er defekt.
**Gegenprobe:** Riegel 2 in einem anderen Steckplatz oder Rechner testen – tritt der Fehler wieder auf, ist es sicher der Riegel und nicht der Steckplatz.

## Lehrnotiz: Testprotokoll für einen eingerichteten Arbeitsplatz

**Aufteilung:**
- Testprotokoll aus der Spezifikation ableiten: K5
- Testfall fehlgeschlagen, Ursache eingrenzen: K3
- Fehlersuche durch Austauschen, wenn Nachsehen nicht reicht: K6

**Schon geprüft:** In Prüfungen: K3 (2026H), K6 (2026H) · Noch nicht geprüft: K5

**Kerngedanken:**
- Das Testprotokoll ist der Nachweis, was genau geprüft wurde; „läuft“ ist kein Nachweis. Darum muss das erwartete Ergebnis so konkret sein, dass ein anderer Techniker beim Test eindeutig „ja“ oder „nein“ sagen kann.
- Die Beschreibung sagt, wie getestet wird (was tun, wo ablesen). Das erwartete Ergebnis sagt, was dann zu sehen sein muss.
- Nach einer Abweichung gilt die Reihenfolge: erst eingrenzen (ist es überhaupt ein Fehler, und wo liegt die Ursache?), dann beheben, dann denselben Testfall wiederholen und das neue Ergebnis eintragen.
- Kommt eine Abweichung nur aus der Einheit (der Hersteller rechnet mit Zehnerpotenzen, das Betriebssystem mit Zweierpotenzen und schreibt trotzdem „GB“ dahinter), ist der Testfall bestanden; im Protokoll steht die Begründung. Die Umrechnung selbst gehört nicht zu diesem Stichpunkt.

**Typische Missverständnisse:**
- Viele denken, ein fehlgeschlagener Testfall heiße: Bauteil defekt, also tauschen oder nachbestellen. Richtig ist: Er zeigt nur eine Abweichung; die Ursache wird erst eingegrenzt.
- Viele denken, nach mehreren gleichzeitigen Änderungen helfe eine weitere Änderung. Richtig ist: Man nimmt eine Änderung zurück und testet, dann die nächste.

**Fachwörter:**
- Testprotokoll: Tabelle, die Tests und Ergebnisse nachweist
- Spezifikation: schriftliche Vorgaben für den Arbeitsplatz
- erwartetes Ergebnis: Sollwert, aus der Spezifikation abgeleitet
- Gegenprobe: Verdacht an anderer Stelle bestätigen
- ESD-Schutz: Schutz der Bauteile vor elektrostatischer Entladung

**So fragt die IHK:**
- Die Prüfungsaufgaben, in denen K3 und K6 vorkamen, liegen hier nicht als Aufgabe vor. Der Prüfungskatalog nennt das „Testprotokoll für das Einrichten eines Arbeitsplatzes“ als Maßnahme des Qualitätsmanagements für den eigenen Arbeitsbereich.
- Zu erwarten ist eine Aufgabe in einem Kundenprojekt mit einer Spezifikation oder einem teilweise ausgefüllten Testprotokoll: Testfälle erstellen oder ergänzen, eine Abweichung begründen, weitere Prüfschritte festlegen, eine Fehlersuche durch Austauschen beschreiben.
- Als richtig dürften zählen: konkrete, aus der Spezifikation abgeleitete erwartete Ergebnisse; Prüfschritte mit konkretem Ort (UEFI, Task-Manager, `ipconfig`); beim Austauschen Sicherheit, nur eine Änderung und Gegenprobe.

**Fallen:**
- Das erwartete Ergebnis vage schreiben („funktioniert“, „Drucker geht“) oder Werte einsetzen, die nicht aus der Spezifikation stammen.
- Testfälle erfinden, die mit der Spezifikation nichts zu tun haben, und dafür Vorgaben daraus auslassen.
- Eine der vier Spalten weglassen.
- Bei einem Netzwerkfehler nur ein oder zwei Prüfschritte nennen, statt den Weg von der Verbindung über IP-Konfiguration und Gateway bis zur Namensauflösung abzugehen.
- Einen Einheitenunterschied nur „normal“ nennen, ohne Begründung – oder ihn als nicht bestanden eintragen und das Bauteil reklamieren.
- Nach dem Beheben oder Tauschen den Testfall nicht wiederholen oder das Ergebnis nicht nachtragen.
- Beim Austauschen einen der drei Teile weglassen: Sicherheit (nur ausschalten, ohne vom Stromnetz zu trennen, oder ohne ESD-Schutz), nur eine Änderung mit Test, Gegenprobe.
