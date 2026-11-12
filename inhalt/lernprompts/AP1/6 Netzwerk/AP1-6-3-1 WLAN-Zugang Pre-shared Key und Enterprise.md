Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Verbindungen einrichten und Fehler finden › WLAN-Zugang: Pre-shared Key und Enterprise

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

## Stoff: WLAN-Zugang: Pre-shared Key und Enterprise

Ziel: Die Anmeldung an einem WLAN mit Pre-shared Key und mit Enterprise-Verfahren unterscheiden und das passende Verfahren empfehlen.

Das muss ich können:

### K1 – WLAN-Anmeldung: Pre-shared Key gegen Enterprise (Stufe 2 Verstehen)
Du kannst die Anmeldung am WLAN mit Pre-shared Key (ein gemeinsames Kennwort für alle) und mit Enterprise-Verfahren (eigene Zugangsdaten je Benutzer) unterscheiden.

Erklärung:
- **Pre-shared Key (PSK, auch WPA-Personal):** **ein gemeinsames Kennwort** für alle Benutzer und Geräte – wie das WLAN zu Hause.
- **Enterprise (auch WPA-Enterprise-RADIUS):** Jeder Benutzer meldet sich mit **eigenen Zugangsdaten** an (z. B. Benutzername und Passwort oder Zertifikat).

### K2 – PSK oder Enterprise nach Unternehmensgröße (Stufe 4 Beurteilen)
Du kannst begründen, für welche Unternehmensgröße sich PSK und Enterprise eignen: Enterprise ist sicherer, weil sich einzelne Zugänge sperren lassen, braucht aber einen RADIUS-Server.

Erklärung:
- **Kleines Büro** → **PSK** genügt: einfach einzurichten, kein Server nötig.
- **Unternehmen mit vielen Mitarbeitern** → **Enterprise**: sicherer, weil sich einzelne Zugänge sperren lassen.
Das Problem bei PSK: Verlässt jemand das Unternehmen, kennt er das Kennwort weiter. Es muss für alle geändert und auf jedem Gerät neu eingetragen werden.
Der Preis für Enterprise: Es braucht einen **RADIUS-Server**.

### K6 – SSID und Schlüssel für WPA-PSK (Stufe 1 Wiedergeben)
Du kannst die Angaben nennen, die du für die Anmeldung an einem WPA-PSK-WLAN brauchst: SSID und Schlüssel.

Erklärung:
- **SSID:** der Name des WLANs
- **Schlüssel:** das gemeinsame WLAN-Kennwort

### K7 – RADIUS-Server beim Enterprise-Verfahren (Stufe 2 Verstehen)
Du kannst erklären, wozu beim Enterprise-Verfahren ein RADIUS-Server dient: Er prüft die Zugangsdaten jedes einzelnen Benutzers; der Access Point reicht die Anmeldung nach IEEE 802.1X mit EAP an ihn weiter (daher auch „EAP-Verfahren“).

Erklärung:
Der RADIUS-Server ist die zentrale Prüfstelle: Er **prüft die Zugangsdaten jedes einzelnen Benutzers** und erlaubt oder verweigert den Zugang.
Der Access Point fragt bei jeder Anmeldung beim RADIUS-Server nach; er reicht die Anmeldung nach **IEEE 802.1X** mit **EAP** weiter – deshalb heißt das Verfahren auch „EAP-Verfahren“. Wird ein Konto gesperrt, kommt dieser Benutzer nicht mehr ins WLAN – alle anderen merken nichts.

### K8 – WLAN-Verschlüsselung heute: WPA2 und WPA3 (Stufe 2 Verstehen)
Du kannst erklären, welches Sicherheitsverfahren du heute für ein WLAN einstellst: WPA3 oder, solange ältere Geräte es brauchen, den Übergangsmodus WPA2/WPA3; WEP und WPA (mit TKIP) gelten als unsicher und werden nicht mehr verwendet. Auch WPA3-Personal arbeitet mit einem gemeinsamen Kennwort, handelt es aber sicherer aus (SAE statt PSK-Handshake); im 6-GHz-Band ist WPA3 Pflicht.

Erklärung:
Beim Einrichten eines WLANs stellst du heute **WPA3** ein – oder den **Übergangsmodus WPA2/WPA3**, solange ältere Geräte nur WPA2 können.
- **WEP** und **WPA** (mit TKIP) gelten als **unsicher** und werden nicht mehr verwendet.
- **WPA3-Personal** nutzt weiter ein **gemeinsames Kennwort**; der Anmeldevorgang (Handshake; bei WPA3 heißt er SAE) verhindert aber, dass ein Angreifer ein mitgeschnittenes Anmelden in Ruhe durchprobiert.
- Im **6-GHz-Band** (Wi-Fi 6E/7) ist WPA3 vorgeschrieben.
Den technischen Vergleich der Verfahren brauchst du für AP1 nicht.
Beispiel: Neues Büro-WLAN, ein alter Scanner kann nur WPA2 → Übergangsmodus WPA2/WPA3, neue Geräte nutzen WPA3.

## Lehrnotiz: WLAN-Zugang: Pre-shared Key und Enterprise

**Aufteilung:**
- Ein Kennwort für alle oder eigene Zugangsdaten: K1, K6
- Wer beim Enterprise-Verfahren prüft: K7
- Das passende Verfahren empfehlen: K2
- Welches Sicherheitsverfahren man heute einstellt: K8

**Schon geprüft:** In Prüfungen: K1 (2022F), K2 (2022F), K6 (2022F), K7 (2022F), K8 (2022F)

**Kerngedanken:**
- Es sind zwei getrennte Entscheidungen: wie man sich anmeldet (gemeinsames Kennwort oder eigene Zugangsdaten) und welche Generation der Verschlüsselung läuft (WPA2, WPA3). WPA3 ersetzt die erste Entscheidung nicht – es gibt WPA3-Personal und WPA3-Enterprise.
- Die Bezeichnungen wechseln, gemeint ist dasselbe: „WPA-Personal“ oder „WPA2-Personal“ ist das PSK-Verfahren; „EAP-Verfahren“, „802.1X“, „WPA-Enterprise-RADIUS“ und „WPA2/WPA3-Enterprise“ sind das Enterprise-Verfahren.
- Beim PSK kennt der Access Point das eine Kennwort selbst; beim Enterprise-Verfahren ist er nur Vermittler.
- Eine Empfehlung besteht aus Urteil, Bezug auf Größe und Personalwechsel des Betriebs und einem Gegenargument oder einer Bedingung (Aufwand für den RADIUS-Server, Kennwortwechsel beim Ausscheiden).

**Typische Missverständnisse:**
- Viele denken, „Personal“ heiße persönliche Zugangsdaten. Richtig ist: Es heißt „für den Privatbereich“ und meint ein gemeinsames Kennwort; persönliche Zugangsdaten gibt es nur bei Enterprise.
- Viele denken, beim Enterprise-Verfahren stünden die Kennwörter aller Mitarbeiter im Access Point. Richtig ist: Er reicht die Anmeldung nur weiter.

**Fachwörter:**
- Pre-shared Key (PSK): ein gemeinsames Kennwort für alle
- Enterprise: eigene Zugangsdaten je Benutzer
- SSID: der Name des WLANs
- RADIUS-Server: zentrale Prüfstelle für die Zugangsdaten
- IEEE 802.1X mit EAP: Standard für das Weiterreichen an den RADIUS-Server
- Übergangsmodus WPA2/WPA3: alte Geräte WPA2, neue WPA3

**So fragt die IHK:**
- Eine echte Aufgabe: ein Notebook soll in ein Firmen-WLAN mit WPA-PSK; zu nennen sind zwei Angaben, die man vom Administrator braucht (2 Punkte; gezählt: SSID und Pre-shared Key bzw. Passwort).
- Danach eine Tabelle: Die Zeile WPA-PSK ist ausgefüllt vorgegeben (einfach / unsicher, weil das Passwort bei vielen Nutzern schnell bekannt wird / kleine Unternehmen). Für „EAP/WPA-Enterprise-RADIUS“ sind je ein Vorteil, ein Nachteil und die passende Unternehmensgröße einzutragen (3 Punkte). Gezählt: sehr viel sicherer, weil jeder eine eigene Kombination aus Name und Passwort hat; komplizierter, RADIUS-Server nötig; mittlere und große Unternehmen.
- Operatoren: nennen, angeben. WPA3 kam in echten Aufgaben noch nicht vor, gehört über den Prüfungskatalog aber zum Rahmen.

**Fallen:**
- Als Unterschied nur „mit Passwort / ohne Passwort“ nennen. Ein Kennwort gibt es bei beiden Verfahren; entscheidend ist, ob alle dasselbe eintippen.
- „Enterprise ist sicherer, also immer Enterprise“ empfehlen: Für ein kleines, festes Team ist der RADIUS-Server unverhältnismäßiger Aufwand.
- Umgekehrt nur „PSK ist einfacher“ schreiben, obwohl viele Leute kommen und gehen.
- Beim RADIUS-Server nur „er prüft“ schreiben und die Rolle des Access Points weglassen.
- Reines WPA3 einstellen, obwohl ein Gerät nur WPA2 kann – es kommt dann nicht mehr ins WLAN.
- Für ein Altgerät, das nur WEP oder WPA (TKIP) kann, einen unsicheren Mischmodus einschalten. Ein solches Gerät wird per Kabel angebunden oder ersetzt.
- Bei WPA3-Personal den Ablauf von SAE erklären wollen, statt die Wirkung zu nennen: Ein mitgeschnittenes Anmelden lässt sich nicht in Ruhe durchprobieren.
