Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Schnittstellen und Datenaustausch › Datenaustausch und Schnittstellen › eRechnung: strukturierte Daten prüfen und validieren

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

## Stoff: eRechnung: strukturierte Daten prüfen und validieren

Ziel: Ziel und Aspekte der eRechnung erläutern und Wege beurteilen, mit denen eine Implementierung der Spezifikation entspricht.

Das muss ich können:

### K1 – Hauptziel der eRechnung (Stufe 2 Verstehen)
Du kannst das Hauptziel einer eRechnung erläutern: Sie wird automatisch verarbeitet; eine für Menschen lesbare Darstellung ist zweitrangig.

Erklärung:
Hauptziel der **eRechnung**: **automatische Verarbeitung** beim Empfänger (Buchhaltung, Prüfung, Zahlung).
Die für Menschen lesbare Darstellung ist **zweitrangig**.

### K2 – Aspekte einer digitalen Rechnung (Stufe 2 Verstehen)
Du kannst Aspekte einer digitalen Rechnung erläutern: Sie liegt digital vor (z. B. als PDF) und hat einen visuellen Aspekt (für Menschen lesbar) und einen Datenaspekt (maschinell verarbeitbar); bei der eRechnung ist der Datenaspekt strukturiert (z. B. XRechnung, ZUGFeRD), ein reines PDF gilt seit 2025 nicht als eRechnung.

Erklärung:
- **digitale Rechnung:** liegt digital vor, z. B. als PDF
- **visueller Aspekt:** für Menschen lesbar
- **Datenaspekt:** maschinell verarbeitbar
Bei der **eRechnung** ist der Datenaspekt **strukturiert** (XRechnung als XML, ZUGFeRD als PDF mit eingebettetem XML). Ein reines PDF zeigt die Rechnung nur an; seine Inhalte sind nicht strukturiert, ein Programm müsste sie erst herauslesen. Deshalb gilt es seit **2025** nicht mehr als eRechnung.
PDF-Rechnungen sind damit nicht sofort verboten: Sie gelten als „sonstige Rechnung“ und dürfen in der Übergangszeit weiter verschickt werden (Fristen siehe Kür, Stand 2026).

### K3 – Implementierung gegen die Spezifikation prüfen (Stufe 1 Wiedergeben)
Du kannst Möglichkeiten nennen, mit denen eine Implementierung der Protokoll-Spezifikation entspricht: Test-Rechnungen bei einem zertifizierten Validator prüfen, Unit-Tests, eine zertifizierte Bibliothek nutzen, formale Validierung mit Schemadateien (XSD).

Erklärung:
So prüft man, ob eine Umsetzung (Implementierung) der Spezifikation entspricht, also der verbindlichen Beschreibung des Formats:
- Test-Rechnungen bei einem **zertifizierten Validator** prüfen
- **Unit-Tests** (automatische Tests, die einzelne Funktionen mit festen Beispielwerten prüfen)
- eine **zertifizierte Bibliothek** nutzen
- formale **Validierung mit Schemadateien (XSD)**
Die XSD-Prüfung allein reicht nicht: Sie prüft Aufbau, Pflichtfelder und Datentypen, aber keine Rechenfehler wie eine falsche Summe (siehe PB1-7-1-1 K5).

### K4 – Online-Validator: was zu beachten ist (Stufe 2 Verstehen)
Du kannst erläutern, was beim Nutzen eines Online-Validators zu beachten ist: keine echten Firmen- oder Kundendaten hochladen, nur Testdaten; die Ergebnisse können fehlerhaft sein, wenn das Werkzeug nicht geprüft und zertifiziert ist.

Erklärung:
Beim **Online-Validator**:
- **keine echten Firmen- oder Kundendaten** hochladen, nur **Testdaten** (Datenschutz, Geschäftsgeheimnis): Kundendaten sind personenbezogen (DSGVO), und fremde Werkzeuge und Testumgebungen sind oft schwächer geschützt und für mehr Personen zugänglich – deshalb anonymisieren oder künstliche Testdaten erzeugen
- Ergebnisse können falsch sein, wenn das Werkzeug **nicht geprüft und zertifiziert** ist
- klären, **was** das Werkzeug prüft: nur einzelne Daten oder die vollständige Spezifikation? Eine bloße Anzeige der Inhalte ist noch keine Validierung

## Lehrnotiz: eRechnung: strukturierte Daten prüfen und validieren

**Aufteilung:**
- Hauptziel der eRechnung: K1
- Aspekte einer digitalen Rechnung, eRechnung gegen reines PDF: K2
- Wege, die Umsetzung gegen die Spezifikation zu prüfen: K3
- Online-Validator richtig nutzen: K4

**Schon geprüft:** In Prüfungen: K1 (2025W), K2 (2025W), K3 (2025W), K4 (2025W)

**Kerngedanken:**
- Automatische Verarbeitung heißt: Die Software des Empfängers liest die Rechnung ein, prüft und bucht sie, ohne dass jemand Werte abtippt. Das spart Arbeit und vermeidet Tippfehler; diese Begründung gehört zum Erläutern dazu.
- Strukturiert heißt: Jeder Wert steht in einem festen Feld mit Bedeutung (etwa „Nettobetrag“). In einem reinen PDF sieht ein Programm nur Text an Positionen.
- Eine XRechnung ist reines XML und wird für Menschen erst über ein Anzeigeprogramm lesbar. Bei ZUGFeRD macht das eingebettete XML die Datei zur eRechnung, nicht das PDF darum.
- Die Prüfwege ergänzen sich. Die Validierung mit XSD prüft Aufbau, Pflichtfelder und Datentypen, findet aber keine logischen Fehler wie eine falsch berechnete Summe; dafür braucht es zusätzlich inhaltliche Plausibilitätsprüfungen und Unit-Tests. Vertieft wird das im Nachbarstichpunkt zur Schemavalidierung.
- Abgrenzung: Fristen zur eRechnung-Pflicht sind nicht Kern dieses Stichpunkts und werden nicht von sich aus vertieft.

**Typische Missverständnisse:**
- Viele denken, jede digital verschickte Rechnung sei eine eRechnung; richtig ist: Jede eRechnung ist digital, aber nur der strukturierte Datenaspekt macht eine digitale Rechnung zur eRechnung.
- Viele denken, das Ziel der eRechnung sei „papierlos“ oder „schneller verschickt“; richtig ist: Das leistet auch ein PDF, Hauptziel ist die automatische Verarbeitung beim Empfänger.

**Fachwörter:**
- eRechnung: Rechnung mit strukturiertem Datenaspekt
- visueller Aspekt: für Menschen lesbar
- Datenaspekt: maschinell verarbeitbar
- XRechnung: eRechnung als reines XML
- ZUGFeRD: PDF mit eingebettetem XML
- zertifizierter Validator: geprüftes Werkzeug zur Prüfung gegen die Spezifikation
- Schemadateien (XSD): Regeln für Aufbau und Datentypen
- Testdaten: künstliche oder anonymisierte Daten

**So fragt die IHK:**
- Das Thema kam bisher in einer Prüfung vor, in zwei aufeinanderfolgenden Aufgaben (zusammen rund 30 Punkte). Operatoren: erläutern, nennen, erklären.
- Erste Aufgabe, Material war ein englischer Text einer EU-Stelle zur elektronischen Rechnung:
  - Hauptziel erläutern (3 Punkte). Gezählt wurden automatische Verarbeitung und „menschenlesbare Darstellung zweitrangig“.
  - Zwei Aspekte einer digitalen Rechnung erläutern (6 Punkte). Gezählt wurden digitales Format, visueller Aspekt für den Menschen, Datenaspekt für den Computer.
- Zweite Aufgabe zur Umsetzung des Formats:
  - Drei Möglichkeiten nennen, wie die Implementierung der Protokoll-Spezifikation entspricht (3 Punkte, vier Lösungen zugelassen).
  - Zwei Punkte zur Nutzung einer Website zum Hochladen von eRechnungen erläutern (6 Punkte). Gezählt wurden: keine Echtdaten wegen Vertraulichkeit, Ergebnisse ohne Zertifizierung womöglich fehlerhaft, Teil- oder Vollprüfung. Andere Antworten waren möglich.
  - An einer XML-Rechnung erklären, warum Schemavalidierung allein nicht reicht (gehört zu PB1-7-1-1).
- Die Antworten muss man aus dem englischen Material ableiten können. Bei „erläutern“ gibt es Punkte nur mit Begründung.

**Fallen:**
- Beim Hauptziel nur eine Hälfte nennen. Verlangt sind beide: automatische Verarbeitung und „menschenlesbare Darstellung zweitrangig“.
- Beim reinen PDF nur „zählt nicht“ oder „ist nicht erlaubt“ schreiben, ohne den fehlenden strukturierten Datenaspekt als Grund.
- Nur einen der Aspekte erläutern, wo zwei verlangt sind.
- Als Prüfmöglichkeit „gründlich testen“ schreiben, ohne zu sagen, wie.
- Beim Online-Validator Stichworte liefern statt erläuterter Punkte („…, weil …“).
- „Datenschutz“ nennen, ohne die Folge: deshalb nur Testdaten oder anonymisieren.
