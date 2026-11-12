Ich bereite mich auf die IHK-Abschlussprüfung Teil 1 (AP1) „Einrichten eines IT-gestützten Arbeitsplatzes“ vor (Umschulung Fachinformatiker Anwendungsentwicklung).
Thema: Netzwerk › Adressierung › IPv6 im Netz: Präfixe aufteilen, Adressen vergeben, mit IPv4 kombinieren

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

## Stoff: IPv6 im Netz: Präfixe aufteilen, Adressen vergeben, mit IPv4 kombinieren

Ziel: Ein IPv6-Präfix in Teilnetze aufteilen, Geräten Adressen und Gateway vergeben, die Erreichbarkeit prüfen und den gemeinsamen Betrieb mit IPv4 erklären.

Das muss ich können:

### K1 – Standortpräfix, Teilnetz-ID und Interface-Identifier (Stufe 2 Verstehen)
Du kannst in einer IPv6-Adresse Standortpräfix (48 Bit), Teilnetz-ID (16 Bit) und Interface-Identifier (64 Bit) identifizieren.

Erklärung:
Eine typische IPv6-Adresse in einem Unternehmen besteht aus drei Teilen:
- **Standortpräfix:** 48 Bit – die ersten drei Blöcke, vom Provider zugeteilt
- **Teilnetz-ID:** 16 Bit – der vierte Block, frei für eigene Netze
- **Interface-Identifier:** 64 Bit – die letzten vier Blöcke, das Gerät
Beispiel: 2001:db8:abcd:12::1 → ungekürzt (jeder Block vier Ziffern): Standort 2001:0db8:abcd | Teilnetz 0012 | Interface 0000:0000:0000:0001

### K2 – Anzahl der Teilnetze aus einem Präfix (Stufe 3 Anwenden)
Du kannst berechnen, wie viele Teilnetze ein Präfix ergibt, zum Beispiel 2^16 Teilnetze mit /64 aus einem /48-Präfix.

Erklärung:
`Anzahl Teilnetze = 2^(Ziel-Präfix − Ausgangs-Präfix)`
- /48 → /64: 2^16 = **65.536** Teilnetze
- /56 → /64: 2^8 = **256** Teilnetze
Die Differenz der Präfixlängen ist die Zahl der Bits, die du für Teilnetze frei hast.

### K3 – Eigenes /64-Teilnetz mit Adressen und Gateway (Stufe 3 Anwenden)
Du kannst aus einem /48-Präfix ein eigenes /64-Teilnetz bilden und den Geräten darin Adressen und das Standardgateway vergeben.

Erklärung:
- Teilnetz-ID in den **vierten Block** schreiben → das /64-Netz, z. B. 2001:db8:abcd:**1**::/64.
- Dem **Router** eine Adresse geben, z. B. 2001:db8:abcd:1::1.
- Den **Geräten** Adressen im selben Netz geben, z. B. 2001:db8:abcd:1::10/64; Router und Switch getrennt von den Endgeräten nummerieren.
- Als **Standardgateway** die Routeradresse eintragen: 2001:db8:abcd:1::1 – auch beim Switch.

### K4 – ping auf Loopback ::1 und Gateway (Stufe 1 Wiedergeben)
Du kannst die Befehle angeben, um mit ping die eigene Loopback-Adresse (::1) und das Gateway über IPv6 zu prüfen.

Erklärung:
- Eigene Loopback-Adresse prüfen: `ping ::1` – antwortet sie, funktioniert IPv6 auf dem Gerät selbst.
- Gateway prüfen: `ping 2001:db8:abcd:1::1`
Unter Windows erzwingt `ping -6` IPv6, unter Linux ebenfalls `ping -6` (oder `ping6`).

### K5 – IPv4 und IPv6: Dual Stack oder Tunnel (Stufe 2 Verstehen)
Du kannst erklären, wie IPv4 und IPv6 gemeinsam betrieben werden: Dual Stack oder Tunnel.

Erklärung:
- **Dual Stack:** Jedes Gerät hat **Adressen beider Protokolle** und nutzt je nach Ziel IPv4 oder IPv6. Der übliche Weg für die Übergangszeit.
- **Tunnel:** Pakete des einen Protokolls werden in Pakete des anderen **verpackt**, um ein Netz zu durchqueren, das nur das andere Protokoll kann – z. B. IPv6-Pakete durch ein reines IPv4-Netz.

### K6 – Das n-te /64-Teilnetz eines /48-Präfixes (Stufe 3 Anwenden)
Du kannst das Teilnetz Nummer n (Teilnetz-ID n) eines /48-Präfixes als /64-Netz bestimmen, zum Beispiel 2001:db8:abcd:5::/64.

Erklärung:
Schreib die Nummer des Teilnetzes **hexadezimal** in den vierten Block:
- Teilnetz 5 → **2001:db8:abcd:5::/64**
- Teilnetz 10 → 10 = a → 2001:db8:abcd:a::/64
- Teilnetz 26 → 26 = 1a → **2001:db8:abcd:1a::/64**
Falle: dezimal 26 nicht einfach als „26“ in den Block schreiben – das wäre hexadezimal 38.

### K7 – IPv6-Adressvergabe: statisch, SLAAC, DHCPv6 (Stufe 2 Verstehen)
Du kannst die Arten der IPv6-Adressvergabe unterscheiden: statisch, automatisch per SLAAC aus den Angaben des Routers, über einen DHCPv6-Server.

Erklärung:
- **Statisch:** von Hand eingetragen – für Router und Server.
- **SLAAC** (Stateless Address Autoconfiguration): Der Router teilt das Präfix mit, das Gerät bildet daraus **selbst** seine Adresse.
- **DHCPv6:** Ein Server teilt die Adressen zu – wie DHCP bei IPv4, mit zentraler Übersicht.

## Lehrnotiz: IPv6 im Netz: Präfixe aufteilen, Adressen vergeben, mit IPv4 kombinieren

**Aufteilung:**
- Die drei Teile der Adresse: K1
- Wie viele Teilnetze ein Präfix hergibt: K2
- Das n-te Teilnetz hinschreiben: K6
- Ein Teilnetz mit Adressen und Gateway füllen, mit ping prüfen: K3, K4
- Wie Geräte zu ihrer Adresse kommen: K7
- IPv4 und IPv6 nebeneinander: K5

**Schon geprüft:** In Prüfungen: K1 (2022H), K2 (2022H), K3 (2022H), K4 (2022H), K5 (neuere Prüfung) · Noch nicht geprüft: K6, K7

**Kerngedanken:**
- Standortpräfix und Teilnetz-ID zusammen sind das /64-Präfix, also das Netz. Das Standortpräfix legt der Provider fest, die Teilnetz-ID der Betrieb. Den Interface-Identifier vergibt der Betrieb (von Hand oder per DHCPv6), oder das Gerät bildet ihn selbst (SLAAC).
- Vor dem Zerlegen wird die Adresse ausgeschrieben. Verlangt die Aufgabe „ungekürzt“, hat jeder Block vier Ziffern, auch im Standortpräfix.
- Netzwerkgeräte (Router, Switch) und Endgeräte bekommen der Übersicht halber getrennte Nummernbereiche. Die echte Aufgabe hat das ausdrücklich verlangt.
- Auch ein Switch braucht ein Gateway, sobald er aus einem anderen Teilnetz gewartet werden soll. Ohne Gateway ist ein Gerät nur im eigenen Netz erreichbar.
- Kürzen, Ausschreiben und die fe80-Adresse gehören zum Thema „IPv6-Adressen lesen und schreiben“ und werden hier nur benutzt.

**Typische Missverständnisse:**
- Viele denken, bei SLAAC vergebe der Router die Adresse. Richtig ist: Er liefert nur das Präfix, die Adresse bildet das Gerät selbst.
- Viele denken, Dual Stack heiße zwei Netzwerkkarten oder ein Umwandeln von IPv4 in IPv6. Richtig ist: Dasselbe Gerät spricht beide Protokolle nebeneinander.
- Viele denken, ein Tunnel übersetze zwischen den Protokollen. Richtig ist: Er verpackt das Paket unverändert und packt es am anderen Ende wieder aus.

**Fachwörter:**
- Standortpräfix: die ersten 48 Bit, vom Provider
- Teilnetz-ID: vierter Block, Nummer des eigenen Netzes
- Interface-Identifier: die letzten 64 Bit, das Gerät
- Loopback: der eigene Rechner, ::1
- SLAAC: Gerät bildet seine Adresse selbst
- DHCPv6: Server teilt IPv6-Adressen zu
- Dual Stack: IPv4 und IPv6 gleichzeitig am Gerät

**So fragt die IHK:**
- Echte Aufgabenfolge: Gegeben ist eine verkürzte globale Adresse mit /64, ausdrücklich mit „48-Bit-Standortpräfix und 16-Bit-Teilnetz-ID“.
- „Identifizieren, angeben“: Standortpräfix und Teilnetz-ID ungekürzt in Hex, 4 Punkte, je 2. Gezählt: drei Blöcke mit führenden Nullen, Teilnetz-ID vierstellig.
- „Angeben“, wie viele Teilnetze sich bilden lassen, 2 Punkte. Die Lösung lautet „2^16“; die Potenz reicht.
- „Vergeben“: Netzplan mit Router, Switch und Endgeräten, einzelne Adressen vorgegeben, leere Felder für Adresse und Gateway; 6 Punkte, beispielhaft. Gezählt: Adressen im richtigen /64, Gateway gleich Routeradresse bei allen Geräten einschließlich Switch.
- „Angeben“: Befehle für Loopback und Gateway, 2 Punkte.
- Dual Stack, Tunnel und die Vergabearten sind laut Katalog prüfbar, typisch „erläutern“ oder „beschreiben“ mit 2–4 Punkten.

**Fallen:**
- Das Standortpräfix mit vier Blöcken angeben. Es sind drei.
- Als Zahl der Teilnetze die Bitdifferenz nennen oder 2 hoch 64. Das zweite ist der Platz für Geräte in einem einzigen Netz.
- Ein Gerät in ein anderes /64 setzen als den Router, etwa durch eine verrutschte oder fehlende Ziffer im vierten Block.
- Eine Adresse doppelt vergeben, zum Beispiel einem Gerät die des Routers.
- Beim Tunnel nur „verbindet IPv4 und IPv6“ schreiben, ohne zu sagen, wann man ihn braucht: wenn ein Netz dazwischen nur das andere Protokoll kann.
