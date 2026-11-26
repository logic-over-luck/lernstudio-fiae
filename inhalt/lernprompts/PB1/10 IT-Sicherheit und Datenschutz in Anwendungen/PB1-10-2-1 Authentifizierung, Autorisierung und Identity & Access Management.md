Ich bereite mich auf die IHK-Abschlussprüfung Teil 2 (AP2), Prüfungsbereich 1 „Planen eines Softwareproduktes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: IT-Sicherheit und Datenschutz in Anwendungen › Zugriff, Datenschutz, Prüfung und Beratung › Authentifizierung, Autorisierung und Identity & Access Management

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

## Stoff: Authentifizierung, Autorisierung und Identity & Access Management

Ziel: Anmeldung und Berechtigungen in Anwendungen umsetzen, OAuth2 und Single-Sign-On verstehen und Benutzer, Rollen und Rechte zentral verwalten.

Das muss ich können:

### K1 – Identity & Access Management und Berechtigungskonzept (Stufe 2 Verstehen)
Du kannst Identity & Access Management und ein Berechtigungskonzept erläutern: Benutzer, Rollen und Rechte werden zentral verwaltet, die Anmeldung kann an einen Identity Provider abgegeben werden; Zutritt, Zugang und Zugriff werden nach der Organisationsstruktur geregelt, indem Rechte an Rollen statt an einzelne Personen vergeben werden.

Erklärung:
**IAM** = Benutzer, Rollen und Rechte **zentral** verwalten; die Anmeldung kann an einen **Identity Provider** abgegeben werden (zentraler Anmeldedienst, der für mehrere Anwendungen prüft, wer sich anmeldet).
**Berechtigungskonzept:**
- Zutritt, Zugang, Zugriff (Unterscheidung aus AP1) nach der **Organisationsstruktur** regeln
- Rechte an **Rollen**, nicht an Personen; Benutzer erhalten Rollen
- so fallen überflüssige Rechte und verwaiste Konten an einer Stelle auf
(Nur die nötigen Rechte vergeben: AP1.)

### K2 – Authentifizierung und Autorisierung in der Anwendung (Stufe 3 Anwenden)
Du kannst Authentifizierung (Wer bist du?) und Autorisierung (Was darfst du?) mit Benutzer- und Rollenverwaltung in einer Anwendung umsetzen: Anmeldung sicher prüfen, Konten anlegen, Rollen zuweisen, Rechte bei jedem Zugriff prüfen, Konten bei Austritt sofort sperren, Änderungen protokollieren.

Erklärung:
- **Authentifizierung:** *Wer bist du?* – Anmeldung sicher prüfen (Passwort-Hash, Mindestanforderungen an Länge und Komplexität des Passworts, Sperre oder Wartezeit nach mehreren Fehlversuchen, 2FA)
- **Autorisierung:** *Was darfst du?* – Rechte bei **jedem** Zugriff prüfen
Verwaltung:
- Konten anlegen, **Rollen** zuweisen
- bei Austritt **sofort sperren**
- Änderungen **protokollieren**

### K3 – Ablauf der Autorisierung mit OAuth2 (Stufe 2 Verstehen)
Du kannst den Ablauf der Autorisierung mit OAuth2 nachvollziehen (für die Anmeldung erweitert durch OpenID Connect) und die Begriffe zuordnen: Der Client erhält vom Autorisierungsserver einen Autorisierungscode, tauscht ihn gegen ein Access Token und greift damit beim Resource Server auf die geschützte Ressource zu.

Erklärung:
**OAuth2** (Autorisierung): Eine Anwendung erhält mit Erlaubnis des Nutzers Zugriff auf dessen Daten bei einem anderen Dienst, ohne sein Passwort zu kennen.
Rollen: **Resource Owner** (Nutzer, dem die Daten gehören), Client (Anwendung), **Authorization Server** (Autorisierungsserver), Resource Server (hält die geschützten Daten). Ablauf:
- **Client** bittet den Resource Owner um Erlaubnis (Authorization Request) und leitet ihn zum **Autorisierungsserver**; dort stimmt er zu
- Client erhält einen **Autorisierungscode (Auth. Code)**
- Client schickt den Auth. Code an den Autorisierungsserver und erhält dafür ein **Access Token**
- Client schickt das Access Token an den **Resource Server**
- der Resource Server liefert die geschützte Ressource (**Protected Resource**)
Für die **Anmeldung** kommt **OpenID Connect** obendrauf (liefert, wer der Nutzer ist).

### K4 – Single-Sign-On: Vor- und Nachteile für Sicherheit (Stufe 2 Verstehen)
Du kannst Vor- und Nachteile von Single-Sign-On unter dem Sicherheitsaspekt erläutern: zentrale Rechteverwaltung, weniger Passwörter und schnelle Sperrung bei Vorfällen gegenüber Zugriff auf alle Systeme mit einem gestohlenen Zugang und Abhängigkeit vom Identity Provider.

Erklärung:
**Single-Sign-On** – eine Anmeldung für viele Systeme:
- **Vorteile:** zentrale Rechteverwaltung (bessere Übersicht über erteilte Rechte), weniger Passwörter → seltener aufgeschrieben oder wiederverwendet, **schnelle Sperrung** an zentraler Stelle bei Vorfällen
- **Nachteile:** gestohlener Zugang öffnet **alle Systeme**; **Abhängigkeit** vom Identity Provider (fällt er aus, kommt niemand rein)

## Lehrnotiz: Authentifizierung, Autorisierung und Identity & Access Management

**Aufteilung:**
- Authentifizierung und Autorisierung in der Anwendung: K2
- Zentrale Verwaltung und Rollen statt Personen: K1
- OAuth2, erst die vier Beteiligten, dann der Ablauf: K3
- Single-Sign-On unter dem Sicherheitsaspekt: K4

**Schon geprüft:** In Prüfungen: K3 (2022S), K4 (2022W) · Noch nicht geprüft: K1, K2

**Kerngedanken:**
- Die Authentifizierung kommt immer vor der Autorisierung, denn Rechte lassen sich erst prüfen, wenn feststeht, wer jemand ist. Wird ein korrekt angemeldeter Benutzer abgewiesen, hat die Autorisierung gegriffen.
- Gespeichert wird nicht das Passwort selbst, sondern nur sein Hash, ein Einwegwert, aus dem sich das Passwort nicht zurückrechnen lässt; bei der Anmeldung wird die Eingabe ebenso gehasht und verglichen.
- Mit OAuth2 bekommt eine Anwendung mit Erlaubnis des Nutzers Zugriff auf dessen Daten bei einem anderen Dienst.
- Der Nutzen von Rollen zeigt sich bei Veränderungen: Wechselt jemand die Stelle, ändert man nur die Rollenzuordnung, und eine Änderung an einer Rolle gilt sofort für alle ihre Benutzer.
- Bei „erläutern“ reicht ein Stichwort nicht: Zu jedem Argument gehört die Folge für die Sicherheit, bezogen auf den Kunden.

**Abläufe zum Verstehen (Hintergrund, mehr als die IHK verlangt):**
- K2 – Von der Anmeldung bis zur Rechteprüfung bei jeder Anfrage: (1) Der Benutzer sendet Benutzername und Passwort über eine verschlüsselte Verbindung an den Server. (2) Der Server sucht das Konto, weist gesperrte Konten ab und vergleicht sonst den Hash des eingegebenen Passworts mit dem gespeicherten Hash. (3) Bei Abweichung erhöht der Server den Fehlversuchszähler des Kontos und sperrt oder verzögert nach mehreren Fehlversuchen weitere Anmeldungen. (4) Bei Übereinstimmung prüft der Server gegebenenfalls den zweiten Faktor, legt eine Sitzung an und gibt dem Client eine Sitzungskennung oder ein Token zurück. (5) Der Client schickt diese Kennung bei jeder weiteren Anfrage mit, und der Server ermittelt daraus den angemeldeten Benutzer. (6) Der Server liest die Rollen dieses Benutzers und führt die Anfrage nur aus, wenn eine Rolle das benötigte Recht enthält; sonst lehnt er ab. Vereinfacht: In der Praxis wird das Passwort zusammen mit einem zufälligen Salt je Konto und mit einem absichtlich langsamen Hashverfahren gehasht.

**Typische Missverständnisse:**
- Viele denken, ein ausgeblendeter oder deaktivierter Knopf sei Autorisierung; richtig ist: Wer Adresse oder Schnittstelle direkt aufruft, umgeht die Oberfläche, deshalb prüft der Server die Rechte bei jedem Zugriff.
- Viele denken, der Client schicke den Auth. Code an den Resource Server; richtig ist: Der Auth. Code geht nur zurück an den Autorisierungsserver, zum Resource Server geht das Access Token.
- Viele denken, „bequemer“ oder „schneller“ sei ein Vorteil von Single-Sign-On; richtig ist: Unter dem Sicherheitsaspekt zählt nur ein Argument mit Sicherheitsfolge.

**Fachwörter:**
- Identity Provider: zentraler Dienst, der die Anmeldung übernimmt
- Berechtigungskonzept: Regelung, welche Rolle was darf
- Resource Owner: Nutzer, dem die Daten gehören
- Autorisierungscode (Auth. Code): Zwischenschritt, wird gegen das Token getauscht
- Access Token: Nachweis der Erlaubnis für den Resource Server
- Protected Resource: die geschützten Daten
- Single-Sign-On: eine Anmeldung für viele Systeme

**So fragt die IHK:**
- OAuth2 (K3), Operator „zuordnen“, 4 Punkte: Gegeben war eine Ablaufgrafik mit den Kästen Resource Owner, Client, Authorization Server und Resource Server. Vier leere Pfeile waren mit Auth. Code, Access Token und Protected Resource zu beschriften, 1 Punkt je Pfeil, ein Begriff kam doppelt vor.
- Single-Sign-On (K4), Operator „erläutern“, 6 Punkte: je ein Vor- und Nachteil „unter Beachtung des Sicherheitsaspekts“, in einer Situation mit Identity Provider per OAuth2. Gezählt wurden die Punkte aus dem Stoff, ausformuliert und nicht als Stichwort.
- K1 und K2 wurden noch nicht einzeln geprüft. Nach dem Katalog sind zu erwarten: „Erläutern Sie den Unterschied …“ oder „Beschreiben Sie, wie … umgesetzt wird“.

**Fallen:**
- Bei der Umsetzung ein gemeinsames Konto für mehrere Personen stehen lassen statt eigene Konten je Person.
- Nicht für jedes Problem der Ausgangssituation eine Regel nennen; oft fehlen die Sperre bei Austritt oder die Protokollierung.
- „Jeder bekommt die Rechte, die er braucht“ als Rollenkonzept ausgeben; das ist nur das Prinzip der geringsten Rechte.
- Beim Berechtigungskonzept nur „Rollen einführen“ oder „Konten löschen“ schreiben, ohne den Vorteil zu begründen.
- In der OAuth2-Grafik jeden Begriff nur einmal eintragen, obwohl einer an zwei Pfeilen steht: Das Access Token geht vom Autorisierungsserver zum Client und vom Client zum Resource Server; je nach Grafik hat auch der Auth. Code zwei Pfeile (zum Client und zurück zum Autorisierungsserver).
- Bei Single-Sign-On nur den Vorteil oder nur den Nachteil erläutern.
