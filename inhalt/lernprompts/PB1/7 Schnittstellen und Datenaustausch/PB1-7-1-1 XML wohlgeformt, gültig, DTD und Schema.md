Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Schnittstellen und Datenaustausch › Datenaustausch und Schnittstellen › XML: wohlgeformt, gültig, DTD und Schema

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

## Stoff: XML: wohlgeformt, gültig, DTD und Schema

Ziel: XML-Dokumente erstellen und lesen, Zweck von DTD und Schema erläutern, Fehler finden und einordnen und die Grenzen der Schemavalidierung erklären.

Das muss ich können:

### K1 – XML-Dokument: Aufbau und Regeln (Stufe 3 Anwenden)
Du kannst ein XML-Dokument nach vorgegebener Struktur erstellen und lesen: Prolog, genau ein Wurzelelement, Elemente mit öffnendem und schließendem Tag, Attribute im öffnenden Tag, korrekte Verschachtelung.

Erklärung:
Aufbau:
- **Prolog**: `<?xml version="1.0" encoding="UTF-8"?>`
- genau **ein Wurzelelement**
- Elemente mit öffnendem und schließendem Tag: `<name>Weingut</name>`; ein leeres Element darf verkürzt geschrieben werden: `<ort/>` statt `<ort></ort>`
- **Attribute** im öffnenden Tag: `<preis waehrung="EUR">12.50</preis>`
- **korrekt verschachtelt**: zuletzt geöffnet, zuerst geschlossen

### K2 – Zweck von DTD und XML-Schema (Stufe 2 Verstehen)
Du kannst erläutern, wofür eine DTD oder ein XML-Schema (XSD) benötigt wird: Sie legt verbindlich fest, welche Elemente und Attribute in welcher Reihenfolge und Schachtelung vorkommen dürfen, sodass alle Dokumente einer Art gleich aufgebaut sind.

Erklärung:
**DTD** bzw. **XML-Schema (XSD)** legen verbindlich fest:
- welche **Elemente und Attribute** vorkommen dürfen
- in welcher **Reihenfolge** und **Schachtelung**, wie oft
- (XSD zusätzlich) welche **Datentypen**
Zweck: Alle Dokumente einer Art sind **gleich aufgebaut** und lassen sich automatisch prüfen und verarbeiten.
Welche DTD gilt, sagt im Dokument die Zeile `<!DOCTYPE wurzel SYSTEM "datei.dtd">`: erst der Name des Wurzelelements, dann die externe Datei mit den Regeln.

### K3 – XML: wohlgeformt gegen gültig (Stufe 2 Verstehen)
Du kannst wohlgeformt (die XML-Regeln sind eingehalten: jedes Element geschlossen, richtig verschachtelt) und gültig (zusätzlich entspricht das Dokument der DTD bzw. dem Schema) erläutern.

Erklärung:
- **wohlgeformt:** die allgemeinen XML-Regeln sind eingehalten (jedes Element geschlossen, richtig verschachtelt, ein Wurzelelement, Attributwerte in Anführungszeichen, Groß-/Kleinschreibung von öffnendem und schließendem Tag gleich – `<Name>…</name>` ist ein Fehler)
- **gültig:** wohlgeformt **und** passend zur DTD bzw. zum Schema
Merke: Jedes gültige Dokument ist wohlgeformt, aber nicht umgekehrt.

### K4 – Fehler in XML mit DTD finden (Stufe 3 Anwenden · in der Prüfung vorgegeben: DTD und XML-Dokument mit Zeilennummern)
Du kannst in einem XML-Dokument mit gegebener DTD Fehler finden und mit Zeilennummer, Fehler und verletzter Eigenschaft angeben, zum Beispiel ein fehlendes schließendes Tag (Wohlgeformtheit) oder ein Element an falscher Stelle (Gültigkeit).

Erklärung:
DTD lesen:
- `<!ELEMENT kurs (bezeichnung, referententeam)>`: Komma = genau diese Reihenfolge; `a | b` = entweder a oder b
- hinter einem Element: `?` = 0- oder 1-mal, `*` = beliebig oft (auch 0-mal), `+` = mindestens 1-mal, ohne Zeichen = genau 1-mal; `(#PCDATA)` = nur Text
- `<!ATTLIST kurs id ID #REQUIRED kurstyp CDATA #IMPLIED>`: `kurs` hat die Attribute `id` (Pflicht; `ID` = der Wert muss im ganzen Dokument eindeutig sein) und `kurstyp` (optional; `CDATA` = beliebiger Text); Attribute stehen im öffnenden Tag, nicht als eigene Elemente
Fehlersuche Zeile für Zeile:
- fehlendes oder falsch geschriebenes **schließendes Tag** (z. B. `<kurs>` statt `</kurs>` oder fehlendes `>`), falsche Verschachtelung → verletzt **Wohlgeformtheit**
- Element an **falscher Stelle** (falsche Reihenfolge oder falsches Elternelement), fehlendes Pflichtelement, nicht erlaubtes Attribut, fehlendes Pflichtattribut (`#REQUIRED`), Element, das die DTD **nicht deklariert** (z. B. `<adresse>`), Angabe als **Element statt als Attribut** (z. B. `<kurstyp>`) → verletzt **Gültigkeit**
Antwort im Format: **Zeile – Fehler – verletzte Eigenschaft**.

### K5 – Grenzen der Schemavalidierung (Stufe 4 Beurteilen)
Du kannst beurteilen, ob eine Schemavalidierung für Daten aus einer Schnittstelle ausreicht: Sie prüft nur Aufbau, Pflichtfelder und Datentypen, aber keine logischen Fehler wie einen aus Bruttowerten berechneten Nettobetrag; dafür sind zusätzlich inhaltliche Plausibilitätsprüfungen und Unit-Tests nötig.

Erklärung:
Schemavalidierung prüft **nur**:
- Aufbau und Reihenfolge
- Pflichtfelder
- Datentypen
Sie erkennt **keine logischen Fehler**, z. B. einen Nettobetrag, der aus Bruttowerten berechnet wurde, oder eine Summe, die nicht stimmt.
Deshalb zusätzlich: **inhaltliche Plausibilitätsprüfungen** und **Unit-Tests** (automatische Tests, die eine Funktion mit festen Beispielwerten prüfen).

## Lehrnotiz: XML: wohlgeformt, gültig, DTD und Schema

**Aufteilung:**
- XML-Dokument aufbauen und lesen: K1
- Wozu DTD und Schema: K2
- Wohlgeformt und gültig: K3
- Fehler mit der DTD finden: K4
- Grenzen der Schemaprüfung: K5

**Schon geprüft:** In Prüfungen: K2 (2022W), K3 (2022W), K4 (2022W), K5 (2025W) · Noch nicht geprüft: K1

**Kerngedanken:**
- Eine DTD ist die Absprache in maschinenlesbarer Form. Eine Beispieldatei zeigt nur einen Fall, und eine mündliche Absprache kann kein Programm prüfen.
- Die Zeile `<!DOCTYPE wurzel SYSTEM "datei.dtd">` im Dokument verweist auf die externe DTD. Die IHK-Aufgabe geht von diesem Verweis aus.
- Fehlersuche in zwei Durchgängen: erst alle Tag-Paare abhaken (Wohlgeformtheit), dann jedes Element gegen seine DTD-Zeile und die `ATTLIST` halten (Gültigkeit).
- Das Schema sieht nur die Form. Formale Fehler (Pflichtfeld fehlt, Text im Zahlenfeld) findet es. Inhaltliche Fehler (Lieferdatum vor Bestelldatum, falsche Summe) findet es nicht, denn auch die falsche Summe ist eine gültige Zahl.

**Typische Missverständnisse:**
- Viele denken, eine DTD sei ein Beispiel oder eine Vorlage; richtig ist: Sie ist die verbindliche Festlegung für alle Dokumente einer Art.
- Viele denken, ein Dokument, das die Schemaprüfung besteht, sei inhaltlich richtig; richtig ist: Geprüft ist nur die Form.

**Fachwörter:**
- Prolog: erste Zeile mit XML-Version und Zeichensatz
- Wurzelelement: das eine Element, das alles umschließt
- Attribut: Name-Wert-Paar im öffnenden Tag
- DTD: verbindliche Festlegung des Dokumentaufbaus
- XML-Schema (XSD): wie DTD, zusätzlich mit Datentypen
- wohlgeformt: allgemeine XML-Regeln sind eingehalten
- gültig: wohlgeformt und passend zu DTD/Schema
- Plausibilitätsprüfung: prüft, ob ein Wert inhaltlich stimmen kann

**So fragt die IHK:**
- Eine Aufgabe (13 Punkte) mit Verweis auf eine externe DTD hatte drei Teile.
- Erster Teil: „Erläutern Sie, wofür diese benötigt wird“ (3 Punkte).
- Zweiter Teil: „wohlgeformt“ und „gültig“ in einer Tabelle erläutern (4 Punkte, je 2). Bei „gültig“ zählt „setzt Wohlgeformtheit voraus“.
- Dritter Teil: In einem Dokument mit Zeilennummern stecken mindestens sechs Fehler; Fehler sind als Zeile – Beschreibung – Eigenschaft einzutragen (6 Punkte, je 2 pro vollständiger Zeile). Typische Fehler sind ein fehlendes schließendes Tag, ein fehlender Schrägstrich, ein nicht deklariertes Element, Element statt Attribut und falsche Reihenfolge.
- Eine andere Prüfung zeigte eine XML-Rechnung mit markierter Fehlerstelle. Zu erklären war, weshalb eine ausschließliche Schemavalidierung unzureichend ist (6 Punkte: 3 für den logischen Fehler, 3 für „Schema prüft nur die Struktur“). Unit-Tests waren für die volle Punktzahl nicht nötig.
- Zum Erstellen eines XML-Dokuments gibt es keine echte Aufgabe; es leitet sich aus dem Prüfungskatalog ab.

**Fallen:**
- Erstellen: Den Prolog vergessen, mehrere Elemente ganz oben ohne gemeinsame Wurzel schreiben oder Tags überkreuzt schließen.
- Erstellen: Eine Angabe, die laut Vorgabe Attribut ist, als eigenes Element schreiben.
- Erstellen: Mehrere gleichartige Werte in ein Element packen statt je Wert ein eigenes Element.
- Erstellen: Für ein optionales Element, das nicht vorkommt, einen Platzhalter wie „kein“ schreiben, statt es wegzulassen.
- Ergänzen: Einen neuen Eintrag an eine Stelle setzen, die der Reihenfolge der DTD widerspricht.
- Zweck: Nur aufzählen, was die DTD festlegt, ohne den Nutzen (gleicher Aufbau, automatische Prüfung).
- Begriffe: „Wohlgeformt“ nur mit „Regeln eingehalten“ erklären, ohne mindestens zwei Regeln zu nennen.
- Begriffe: „Gültig“ als „fehlerfrei“ erklären, ohne Bezug zur DTD und ohne die Voraussetzung Wohlgeformtheit.
- Fehlersuche: Nur die Zeilennummer nennen. Ohne Beschreibung und Eigenschaft gibt es höchstens einen Teilpunkt.
- Fehlersuche: Ein fehlendes optionales Element (`?` oder `*`) als Fehler melden.
- Fehlersuche: Einen fehlenden Prolog als Verstoß gegen die Wohlgeformtheit melden; die XML-Deklaration ist dafür nicht vorgeschrieben.
- Fehlersuche: Ein fehlendes Pflichtattribut übersehen, weil nur die Elemente geprüft werden und nicht die `ATTLIST`.
- Fehlersuche: Bei `a | b` beides zusammen oder keines von beiden für erlaubt halten.
- Fehlersuche: Einen inhaltlichen Fehler (etwa eine falsche Summe) als Fehler gegen Wohlgeformtheit oder Gültigkeit melden.
- Schemaprüfung: Als Antwort „XSD ist besser als DTD“ schreiben. Auch ein XSD mit Datentypen erkennt keinen logischen Fehler.
- Schemaprüfung: Nur allgemein urteilen, statt den logischen Fehler im vorliegenden Dokument zu benennen (nachrechnen, Daten vergleichen).
