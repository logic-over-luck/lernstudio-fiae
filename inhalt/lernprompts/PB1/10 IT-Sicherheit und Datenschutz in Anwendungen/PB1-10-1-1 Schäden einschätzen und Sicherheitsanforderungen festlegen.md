Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: IT-Sicherheit und Datenschutz in Anwendungen › Bedrohungen, Anforderungen und Kryptografie › Schäden einschätzen und Sicherheitsanforderungen festlegen

## So läuft unsere Sitzung

Hey! Du bist mein Lehrer für die IHK-Prüfung AP2 (Prüfungsbereich 1) – und am Ende auch mein Prüfer. Unten findest du den **Stoff** (was ich können muss, mit Erklärungen) und eine **Lehrnotiz** mit Hinweisen, typischen Fehlern und wie die IHK fragt.

Wie du mir das beibringst, überlasse ich dir. Sei einfach du selbst, locker und ehrlich – wir duzen uns. Ein paar Sachen sind mir wichtig:

- Ich will es verstehen, nicht auswendig lernen: gern mit Beispielen aus dem Alltag und dem Warum dahinter.
- Lieber kleine Häppchen mit einer Übungsaufgabe zwischendurch als ein langer Vortrag. Immer nur eine Aufgabe pro Nachricht, und lass mich erst antworten, bevor du die Lösung zeigst.
- Die Aufgaben sollen mich vor allem anwenden lassen, nicht nur die Erklärung nachsagen. Bei Rechnungen rechnest du erst selbst nach, bevor du meine Antwort bewertest.
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

## Stoff: Schäden einschätzen und Sicherheitsanforderungen festlegen

Ziel: Die möglichen Schäden eines Sicherheitsvorfalls einschätzen, Maßnahmen dagegen festlegen, Ziele von Sicherheitskriterien kennen und Sicherheitsanforderungen an eine Anwendung festlegen.

Das muss ich können:

### K1 – Mögliche Schäden eines Sicherheitsvorfalls (Stufe 4 Beurteilen)
Du kannst für einen beschriebenen Sicherheitsvorfall die möglichen Schäden einschätzen: Imageschaden (Vertrauensverlust bei Kunden und Partnern), wirtschaftlicher Schaden (Stillstand, Wiederherstellung, Vertragsstrafen, Bußgelder), Datenverlust; die Zuordnung zum verletzten Schutzziel kennst du aus AP1.

Erklärung:
Schadensarten einschätzen:
- **Imageschaden:** Vertrauensverlust bei Kunden und Partnern
- **wirtschaftlicher Schaden:** Stillstand, Wiederherstellung, Vertragsstrafen, **Bußgelder** (DSGVO)
- **Datenverlust**
„Einschätzen“ heißt: für den konkreten Fall sagen, **wie schwer** welcher Schaden wiegt und warum.

### K2 – Maßnahmen gegen eingeschätzte Schäden (Stufe 3 Anwenden)
Du kannst Maßnahmen festlegen, mit denen ein eingeschätzter Schaden verhindert oder begrenzt wird, zum Beispiel getrennte Datensicherung gegen Datenverlust, Notfallplan und geplante Kommunikation gegen Imageschaden, Verschlüsselung gegen Bußgelder nach Datenabfluss.

Erklärung:
Zu jedem Schaden eine Maßnahme:
- Datenverlust → **getrennte Datensicherung**
- Imageschaden → **Notfallplan** mit geplanter Kommunikation
- Bußgeld nach Datenabfluss → **Verschlüsselung**, Zugriffsbeschränkung
- Stillstand → Redundanz, Wiederanlaufplan

### K3 – Sicherheitsanforderungen an eine geplante Anwendung (Stufe 3 Anwenden)
Du kannst für eine geplante Anwendung sicherheitstechnische Anforderungen festlegen, als funktionale Anforderungen (z. B. sichere Datenübertragung, sichere Speicherung personenbezogener Daten, Anmeldung mit zwei Faktoren, Rollen und Rechte, Protokollierung, automatische Abmeldung bei Untätigkeit) und als Qualitätsanforderungen (z. B. Verfügbarkeit, Wiederherstellungszeit).

Erklärung:
Sicherheitsanforderungen an eine Anwendung:
- **funktional** (was die Anwendung tun soll): sichere Übertragung (TLS), sichere Speicherung personenbezogener Daten, **Zwei-Faktor-Anmeldung**, Rollen und Rechte, **Protokollierung**, automatische Abmeldung bei Untätigkeit
- **Qualität** (wie gut sie es tut): Verfügbarkeit, Wiederherstellungszeit nach Ausfall
Prüfbar formulieren (wie in PB1-1): mit einer Zahl oder klaren Bedingung, die man nach der Umsetzung mit Ja oder Nein abhaken kann, z. B. „Abmeldung nach 15 Minuten ohne Eingabe“.

### K4 – Ziele von IT-Sicherheitskriterien (Stufe 2 Verstehen)
Du kannst Ziele von IT-Sicherheitskriterien definieren: Richtschnur für Entwickler (Sicherheit von Beginn an), objektive Bewertung von Systemen (z. B. nach IT-Grundschutz), Unterstützung der Anwender bei der Auswahl eines geeigneten Sicherheitsprodukts.

Erklärung:
**IT-Sicherheitskriterien** = festgelegte, überprüfbare Anforderungen an die Sicherheit von IT-Produkten und Systemen.
Ziele von IT-Sicherheitskriterien:
- **Richtschnur für Entwickler** – Sicherheit von Beginn an einbauen (**Security by Design**): Eine Lücke, die erst im fertigen System auffällt, verlangt oft aufwendige Umbauten; im Entwurf lässt sie sich mit wenig Aufwand vermeiden.
- **objektive Bewertung** von Systemen (z. B. nach IT-Grundschutz, Common Criteria)
- **Unterstützung der Anwender** bei der Auswahl eines geeigneten Sicherheitsprodukts

### K6 – Entwurfsprinzipien sicherer Software (Stufe 2 Verstehen)
Du kannst Entwurfsprinzipien sicherer Software erklären: Schutz in mehreren Schichten, sodass jede Schicht eigene Maßnahmen hat (Zugriffskontrolle, Authentifizierung, Prüfung der Ein- und Ausgaben, Fehlerbehandlung, Protokollierung, Verschlüsselung) und keine einzelne Schwachstelle alles öffnet; sicherer Ausfall, bei dem auch ein Fehler Vertraulichkeit und Integrität nicht preisgibt und die Software mit sicheren Voreinstellungen ausgeliefert wird; benutzerfreundliche Sicherheit, weil Nutzer lästige Schutzmaßnahmen sonst umgehen.

Erklärung:
Keine einzelne Schutzmaßnahme ist fehlerfrei. Deshalb plant man Sicherheit so, dass ein Fehler allein noch keinen Schaden anrichtet.
- **Mehrere Schichten** (Defense in Depth): Firewall, Anmeldung, Rechteprüfung im Code, Eingabeprüfung, verschlüsselte Datenhaltung – fällt eine Schicht, hält die nächste. So entsteht kein **Single Point of Failure**.
- **Sicherer Ausfall** (Fail Secure): Im Fehlerfall wird der Zugriff verweigert statt erlaubt, Fehlermeldungen verraten keine Interna, und ausgeliefert wird mit sicheren Voreinstellungen.
- **Benutzerfreundliche Sicherheit:** Ist ein Schutz zu umständlich, wird er abgeschaltet oder umgangen – etwa das Passwort auf dem Zettel am Monitor.
Beispiel: Ist der Berechtigungsdienst nicht erreichbar, zeigt die Anwendung „Zugriff verweigert“ – und nicht einfach alle Daten.

## Lehrnotiz: Schäden einschätzen und Sicherheitsanforderungen festlegen

**Aufteilung:**
- Schäden eines Vorfalls einschätzen: K1
- Zu jedem Schaden die passende Maßnahme: K2
- Sicherheitsanforderungen an eine Anwendung, funktional und Qualität: K3
- Entwurfsprinzipien sicherer Software: K6
- Wozu es Sicherheitskriterien gibt: K4

**Schon geprüft:** In Prüfungen: K3 (2024S) · Noch nicht geprüft: K1, K2, K4, K6

**Kerngedanken:**
- Eine Vertragsstrafe ist vereinbart und wird fällig, wenn eine Zusage (z. B. Verfügbarkeit) verfehlt wird. Ein Bußgeld verhängt eine Behörde für einen Gesetzesverstoß, z. B. schlecht geschützte personenbezogene Daten.
- Beim Einschätzen wird jede Schadensart einzeln am Fall geprüft: Tritt sie hier überhaupt ein, und was steht auf dem Spiel? Das verletzte Schutzziel hilft beim Begründen.
- Funktionale Anforderungen sagen, was die Anwendung tut. Qualitätsanforderungen sagen, wie gut oder zuverlässig sie es tut. Prüfbar ist eine Anforderung, wenn eine Zahl oder eine klare Bedingung darin steht.
- Bei „Beschreiben Sie zwei Anforderungen“ stehen die Anforderungen nicht in der Aufgabe. Verlangt ist das Wissen über übliche Sicherheitsanforderungen, angewandt auf die geplante Anwendung: je Anforderung, was verlangt ist und wogegen es schützt.

**Typische Missverständnisse:**
- Viele denken, gestohlene Daten seien ein Datenverlust; richtig ist: Kopierte Daten sind noch da, der Schaden liegt bei Vertraulichkeit, Bußgeld und Image.
- Viele denken, „sicherer Ausfall“ heiße, dass die Anwendung im Fehlerfall weiterläuft; richtig ist: Sie gibt im Fehler nichts preis und verweigert lieber den Zugriff.

**Fachwörter:**
- Imageschaden: Vertrauensverlust bei Kunden und Partnern
- Wiederanlaufplan: geregelte Schritte zurück zum Betrieb
- Protokollierung: aufzeichnen, wer wann was tat
- Wiederherstellungszeit: Dauer bis zum Betrieb nach Ausfall
- Security by Design: Sicherheit von Beginn an einplanen
- Defense in Depth: Schutz in mehreren Schichten
- Fail Secure: im Fehler Zugriff verweigern
- Single Point of Failure: einzelne Stelle, deren Versagen das ganze System lahmlegt oder ungeschützt lässt

**So fragt die IHK:**
- Bisher eine echte Teilaufgabe (4 Punkte, „beschreiben“): zwei sicherheitstechnische Anforderungen an eine geplante Plattform, 2 Punkte je beschriebener Anforderung.
- Die Lösungshinweise nennen als Beispiele sichere Datenübertragung, sichere Speicherung personenbezogener Daten, sichere Authentifizierung und Begrenzung bei Inaktivität.
- Schäden, Maßnahmen, Sicherheitskriterien und Entwurfsprinzipien wurden noch nicht abgefragt. Zu erwarten ist ein kurzer Vorfall mit „Schätzen Sie … ein“ oder „Erläutern Sie …“, 2–4 Punkte, bewertet nach Fallbezug und Begründung.

**Fallen:**
- Einen Schaden als schwer werten, der im Fall gar nicht eintritt, etwa Stillstand, obwohl die Anwendung weiterläuft.
- Den Datenverlust überschätzen: Verloren ist nur, was seit der letzten brauchbaren Sicherung dazukam – sofern die Sicherung nicht selbst betroffen ist.
- Verschlüsselung als Maßnahme gegen Datenverlust nennen; sie macht abgeflossene Daten unlesbar, stellt aber nichts wieder her.
- Eine Sicherung einplanen, die auf dem befallenen System liegt.
- Eine allgemeine Maßnahme wie „Virenschutz“ ohne Bezug zum eingeschätzten Schaden nennen oder die Begründung weglassen.
- Eine Anforderung so allgemein fassen („muss sicher sein“), dass niemand prüfen kann, ob sie erfüllt ist.
- Als Ziel von Sicherheitskriterien nur „damit es sicher ist“ schreiben; gefragt sind die drei Blickwinkel: wer baut, wer bewertet, wer auswählt.
- Eine Rechteprüfung nur in der Oberfläche (Knopf ausblenden) für ausreichend halten; wer Anfragen direkt an den Server schickt, umgeht sie.
- Meinen, eine starke Maßnahme wie der zweite Faktor mache die übrigen Schichten überflüssig.
- Ein verletztes Prinzip nur benennen, ohne die Gefahr zu erklären.
