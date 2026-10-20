// Unterricht Leistung und Stromkosten: Kapitel und Fachbegriffe (Format: lernsystem/struktur.js, Regeln: lernsystem/LEITFADEN.md).
// Der Text mit Bildern und Zwischenfragen steht in strom.jsx.

// Fachbegriffe: das Wort, wie es in Text und Prüfung steht, und der Eintrag im Glossar (dort steht die Bedeutung)
export const BEGRIFFE = {
  spannung: { wort: 'Spannung', glossar: 'Spannung' },
  stromstaerke: { wort: 'Stromstärke', glossar: 'Stromstärke' },
  leistung: { wort: 'Leistung', glossar: 'Leistung' },
  watt: { wort: 'Watt', glossar: 'Watt' },
  netzteil: { wort: 'Netzteil', glossar: 'Netzteil' },
  leistungsaufnahme: { wort: 'Leistungsaufnahme', glossar: 'Leistungsaufnahme' },
  zuschlag: { wort: 'Zuschlag', glossar: 'Zuschlag (Netzteil)' },
  wirkungsgrad: { wort: 'Wirkungsgrad', glossar: 'Wirkungsgrad' },
  verlustleistung: { wort: 'Verlustleistung', glossar: 'Verlustleistung' },
  gesamtwirkungsgrad: { wort: 'Gesamtwirkungsgrad', glossar: 'Gesamtwirkungsgrad' },
  energie: { wort: 'Energie', glossar: 'Energie' },
  wattstunde: { wort: 'Wattstunde', glossar: 'Wattstunde' },
  kwh: { wort: 'Kilowattstunde', glossar: 'kWh' },
  betriebsstunden: { wort: 'Betriebsstunden', glossar: 'Betriebsstunden' },
  last: { wort: 'Last', glossar: 'Last (Gerät)' },
  leerlauf: { wort: 'Leerlauf', glossar: 'Leerlauf (Gerät)' },
  sicherung: { wort: 'Sicherung', glossar: 'Sicherung (Stromkreis)' },
  ueberlastung: { wort: 'Überlastung', glossar: 'Überlastung (Stromkreis)' },
  usb: { wort: 'USB', glossar: 'USB' },
  // aus anderen Themen, nur mit <B> verwendet
  usv: { wort: 'USV', glossar: 'USV' },
};

export const KAPITEL = [
  {
    id: 'leistung',
    name: 'Leistung',
    worum: 'Spannung, Stromstärke und P = U · I',
    kurz: 'Die **Spannung** U (in Volt) treibt den Strom an, die **Stromstärke** I (in Ampere) sagt, wie viel Strom fließt. Zusammen ergeben sie die **Leistung**: **P = U · I** in **Watt** (230 V · 0,5 A = 115 W). Umgestellt: I = P ÷ U, U = P ÷ I.',
    braucht: [],
    lernziele: [
      'erklären, was Spannung und Stromstärke sind und in welchen Einheiten man sie angibt.',
      'die Leistung eines Geräts mit P = U · I berechnen.',
      'P = U · I umstellen und damit die Stromstärke oder die Spannung berechnen.',
    ],
    begriffe: ['spannung', 'stromstaerke', 'leistung', 'watt'],
    pruefung: [
      'Die **Spannung** U wird in Volt (V) angegeben, die **Stromstärke** I in Ampere (A). Die Steckdose liefert 230 V, ein USB-Anschluss 5 V.',
      'Die elektrische **Leistung** ist Spannung mal Stromstärke: **P = U · I**, angegeben in **Watt** (1 W = 1 V · 1 A). Beispiel: 230 V · 0,5 A = 115 W.',
      'Umgestellt gilt I = P ÷ U und U = P ÷ I. Beispiel: Ein Gerät mit 60 W an 230 V nimmt 60 W ÷ 230 V ≈ 0,26 A auf.',
    ],
    teile: [
      { id: 'spannung-strom', titel: 'Was im Kabel passiert' },
      { id: 'leistung-pui', titel: 'Leistung: Spannung mal Stromstärke' },
      { id: 'umstellen', titel: 'Die Formel umstellen', arten: ['pui'] },
    ],
  },
  {
    id: 'netzteil',
    name: 'Netzteil',
    worum: 'Netzteil auswählen, Wirkungsgrad und Verluste',
    kurz: 'Das **Netzteil** muss die Summe der **Leistungsaufnahmen** aller Komponenten plus **Zuschlag** liefern. Es arbeitet nicht verlustfrei: Der **Wirkungsgrad** η = abgegebene ÷ aufgenommene Leistung ist kleiner als 1, die Differenz wird zu Wärme. Aus dem Netz kommt deshalb mehr, als abgegeben wird: aufgenommen = abgegeben ÷ η.',
    braucht: ['leistung'],
    lernziele: [
      'aus den Leistungsaufnahmen der Komponenten und einem Zuschlag ein passendes Netzteil auswählen.',
      'erklären, was der Wirkungsgrad angibt, und die aufgenommene Leistung berechnen.',
      'den Gesamtwirkungsgrad hintereinandergeschalteter Stufen berechnen.',
    ],
    begriffe: ['netzteil', 'leistungsaufnahme', 'zuschlag', 'wirkungsgrad', 'verlustleistung', 'gesamtwirkungsgrad'],
    pruefung: [
      'Die **Leistungsaufnahmen** aller Komponenten werden addiert und ein **Zuschlag** als Reserve eingerechnet (400 W · 1,3 = 520 W). Gewählt wird das kleinste **Netzteil**, das mindestens so viel liefert (550 W).',
      'Der **Wirkungsgrad** η ist das Verhältnis von abgegebener zu aufgenommener Leistung und immer kleiner als 1. Die aufgenommene Leistung ist abgegebene Leistung ÷ η (400 W ÷ 0,8 = 500 W); die Differenz ist die **Verlustleistung**, sie wird zu Wärme.',
      'Bei hintereinandergeschalteten Stufen werden die Einzelwirkungsgrade multipliziert: **Gesamtwirkungsgrad** η = η₁ · η₂ (0,9 · 0,9 = 0,81).',
    ],
    teile: [
      { id: 'netzteil-waehlen', titel: 'Wie groß muss das Netzteil sein?', arten: ['netzteil'] },
      { id: 'verlust', titel: 'Warum das Netzteil warm wird', arten: ['wirkungsgrad'] },
      { id: 'stufen', titel: 'Mehrere Stufen hintereinander', arten: ['gesamt'] },
    ],
  },
  {
    id: 'energie',
    name: 'Energie',
    worum: 'Leistung mal Zeit, Kilowattstunden und Kosten',
    kurz: '**Energie** ist Leistung mal Zeit: **W = P · t**, in Wattstunden (Wh) und durch 1.000 in **Kilowattstunden** (kWh). Bezahlt wird die Energie: Kosten = kWh · Preis je kWh (100 W · 10 h = 1 kWh, bei 0,30 €/kWh also 0,30 €).',
    braucht: ['leistung'],
    lernziele: [
      'den Unterschied zwischen Leistung und Energie erklären.',
      'die Energie mit W = P · t berechnen und in kWh angeben.',
      'die Stromkosten aus Energie und Preis je kWh berechnen.',
    ],
    begriffe: ['energie', 'wattstunde', 'kwh'],
    pruefung: [
      'Die Leistung (in Watt) gibt an, wie viel ein Gerät in einem Moment umsetzt. Die **Energie** ist Leistung über eine Zeit: W = P · t.',
      '**W = P · t**: Mit P in kW und t in h ergibt sich die Energie in **Kilowattstunden** (kWh); 1 kWh = 1.000 **Wattstunden** (500 W · 4 h = 0,5 kW · 4 h = 2 kWh).',
      'Stromkosten = Energie in kWh · Preis je kWh (2 kWh · 0,30 €/kWh = 0,60 €).',
    ],
    teile: [
      { id: 'leistung-zeit', titel: 'Leistung mal Zeit' },
      { id: 'kwh-kosten', titel: 'Kilowattstunden und Kosten', arten: ['kosten'] },
    ],
  },
  {
    id: 'jahr',
    name: 'Kosten im Jahr',
    worum: 'Betriebsstunden, Last und Leerlauf',
    kurz: 'Für ein Jahr bestimmst du zuerst die **Betriebsstunden** (Stunden je Tag · Tage, Dauerbetrieb 24 h · 365 = 8.760 h), dann Energie = P · t und Kosten = kWh · Preis. Läuft ein Gerät teils unter **Last**, teils im **Leerlauf**, rechnest du beide Anteile getrennt und addierst sie.',
    braucht: ['energie'],
    lernziele: [
      'die Betriebsstunden eines Jahres bestimmen und daraus Energie und Kosten berechnen.',
      'die Stromkosten berechnen, wenn ein Gerät teils unter Last und teils im Leerlauf läuft.',
    ],
    begriffe: ['betriebsstunden', 'last', 'leerlauf'],
    pruefung: [
      'Die **Betriebsstunden** sind Stunden je Tag · Betriebstage (Dauerbetrieb: 24 h · 365 = 8.760 h). Energie = Leistung in kW · Betriebsstunden, Kosten = kWh · Preis je kWh (0,15 kW · 8.760 h = 1.314 kWh, · 0,30 €/kWh = 394,20 €).',
      'Läuft ein Gerät teils unter **Last**, teils im **Leerlauf**, wird die Energie beider Anteile getrennt berechnet und addiert (250 W · 8 h + 60 W · 16 h = 2.960 Wh je Tag).',
    ],
    teile: [
      { id: 'betriebsstunden', titel: 'Wie lange läuft das Gerät im Jahr?' },
      { id: 'last-leerlauf', titel: 'Last und Leerlauf', arten: ['jahr'] },
    ],
  },
  {
    id: 'anschluesse',
    name: 'Anschlüsse',
    worum: 'Mehrfachsteckdose und USB: Wie viel gibt ein Anschluss her?',
    kurz: 'Jeder Anschluss liefert nur eine begrenzte Stromstärke. An einer Steckdose mit 16 A **Sicherung** sind 230 V · 16 A = 3.680 W zulässig; mehr ist eine **Überlastung**. Ein **USB**-Anschluss liefert 5 V und z. B. 0,5 A (USB 2.0); die nötige Stromstärke ist I = P ÷ 5 V.',
    braucht: ['leistung'],
    lernziele: [
      'rechnerisch nachweisen, ob Geräte eine Mehrfachsteckdose überlasten.',
      'begründen, warum ein Gerät an einem USB-Anschluss gestört arbeiten kann.',
    ],
    begriffe: ['sicherung', 'ueberlastung', 'usb'],
    pruefung: [
      'Zulässige Leistung: P = U · I = 230 V · 16 A = 3.680 W. Ist die Summe der Leistungsaufnahmen größer, liegt eine **Überlastung** vor, und die **Sicherung** schaltet ab.',
      'Ein **USB**-Anschluss liefert 5 V, aber nur eine begrenzte Stromstärke (USB 2.0: 0,5 A). Braucht ein Gerät mehr (I = P ÷ U, z. B. 4,5 W ÷ 5 V = 0,9 A), bekommt es zu wenig Strom und arbeitet gestört oder gar nicht.',
    ],
    teile: [
      { id: 'steckdose', titel: 'Wie viel verträgt die Mehrfachsteckdose?', arten: ['steckdose'] },
      { id: 'usb', titel: 'Strom aus dem USB-Anschluss', arten: ['usb'] },
    ],
  },
];
