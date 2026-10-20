// Bilder zum Mitmachen für Übertragungsdauer (Rahmen im Unterricht: <Abbildung> aus lernsystem/bausteine.jsx;
// Stil: styles/zahlen-uebertragung.css, Präfix zt-uebertragung-). Die Rechnung dahinter steht in ../rechnen.js.
//   Leitung (Bits fließen vom Absender zum Empfänger, Rate je Sekunde) · RateInBit (Mbit/s → bit/s, auf Wunsch → MiB/s)
//   MengeInBit (MiB → Byte → Bit) · Download (Dateigröße und Rate, mitlaufende Dauer, Rechenweg, Zeitvorgabe)
//   Angekommen (Rate · Dauer → Bit → Byte → MiB) · Minuten (Sekunden in Minuten und Sekunden) · Dreieck (Formel umstellen)

import { useEffect, useState } from 'preact/hooks';
import { Icon, Knopf } from '../../../../ui/bausteine.jsx';
import { Segmente } from '../bausteine.jsx';
import { z, runde, BYTE_JE, BPS_JE, inBit, minutenUndSekunden, faktorText, leseZahl } from '../rechnen.js';

const mit2 = (x) => z(runde(x, 2), 2);
const MUSTER = '0110100101110010110010100111010010110001101011100100101101100111';
const EINE_MIB = BYTE_JE.MiB;

// Schieberegler mit − und + an beiden Seiten; werte: erlaubte Werte, i: Index des gewählten Werts
function Regler({ name, werte, i, onWahl, text }) {
  return (
    <div class="zt-uebertragung-regler">
      <span class="zt-uebertragung-regler__name">{name}</span>
      <div class="zt-uebertragung-regler__zeile">
        <button type="button" class="symbolknopf symbolknopf--s" aria-label={`${name} kleiner`} disabled={i <= 0} onClick={() => onWahl(i - 1)}>
          <Icon name="minus" groesse={15} />
        </button>
        <input type="range" min="0" max={werte.length - 1} value={i} aria-label={name} aria-valuetext={text} onInput={(e) => onWahl(Number(e.currentTarget.value))} />
        <button type="button" class="symbolknopf symbolknopf--s" aria-label={`${name} größer`} disabled={i >= werte.length - 1} onClick={() => onWahl(i + 1)}>
          <Icon name="plus" groesse={15} />
        </button>
        <b class="zt-uebertragung-regler__wert mono">{text}</b>
      </div>
    </div>
  );
}

// Rechnung Zeile für Zeile: links was passiert („· 8“), rechts das Ergebnis
function Leiter({ zeilen }) {
  return (
    <div class="zt-uebertragung-leiter mono">
      {zeilen.map(([schritt, wert, ton], i) => (
        <div key={i} class={`zt-uebertragung-leiter__zeile ${ton ? `zt-uebertragung-leiter__zeile--${ton}` : ''}`}>
          <span class="zt-uebertragung-leiter__schritt">{schritt}</span>
          <span class="zt-uebertragung-leiter__wert">{wert}</span>
        </div>
      ))}
    </div>
  );
}

// ---------- Leitung: Bits fließen vom Absender zum Empfänger ----------
// Je Sekunde wandern `rate` Bit hinüber (eins nach dem anderen). formel: die Dauer als Rechnung darunter.

const MENGEN = [8, 12, 16, 20, 24, 32, 40, 48, 64];
const RATEN_KLEIN = [1, 2, 3, 4, 6, 8, 12, 16];

export function Leitung({ menge = 24, rate = 4, regler = false, formel = false }) {
  const [mi, setMi] = useState(Math.max(0, MENGEN.indexOf(menge)));
  const [ri, setRi] = useState(Math.max(0, RATEN_KLEIN.indexOf(rate)));
  const [n, setN] = useState(0); // angekommene Bit
  const [laeuft, setLaeuft] = useState(false);
  const m = MENGEN[mi];
  const r = RATEN_KLEIN[ri];
  const fertig = n >= m;
  const t = n / r;

  useEffect(() => {
    if (!laeuft) return undefined;
    if (fertig) {
      setLaeuft(false);
      return undefined;
    }
    const id = setTimeout(() => setN((x) => Math.min(m, x + 1)), 1000 / r);
    return () => clearTimeout(id);
  }, [laeuft, n, fertig]);

  const neu = (fn) => {
    setLaeuft(false);
    setN(0);
    fn();
  };
  const bits = Array.from({ length: m }, (_, i) => MUSTER[i % MUSTER.length]);
  const abspielen = () => {
    if (fertig) setN(0);
    setLaeuft(!laeuft || fertig);
  };

  return (
    <>
      <div class="zt-uebertragung-leitung">
        <div class="zt-uebertragung-ende">
          <span class="zt-uebertragung-ende__name">
            <Icon name="server" groesse={14} /> Absender
          </span>
          <div class="zt-uebertragung-bits" aria-label={`${m - n} Bit noch beim Absender`}>
            {bits.map((b, i) => (
              <span key={i} class={i < n ? 'zt-uebertragung-bit--weg' : ''}>
                {i < n ? '' : b}
              </span>
            ))}
          </div>
        </div>
        <div class={`zt-uebertragung-rohr ${laeuft ? 'zt-uebertragung-rohr--an' : ''}`} aria-hidden="true">
          <span class="zt-uebertragung-rohr__strom" />
          <span class="zt-uebertragung-rohr__text mono">{r} Bit je s</span>
        </div>
        <div class="zt-uebertragung-ende">
          <span class="zt-uebertragung-ende__name">
            <Icon name="laptop" groesse={14} /> Empfänger
          </span>
          <div class="zt-uebertragung-bits" aria-label={`${n} Bit beim Empfänger angekommen`}>
            {bits.map((b, i) => (
              <span key={i} class={i < n ? 'zt-uebertragung-bit--da' : 'zt-uebertragung-bit--leer'}>
                {i < n ? b : ''}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p class="zt-uebertragung-uhr" role="status">
        <Icon name="timer" groesse={15} />
        <span>
          <b class="mono">{z(runde(t, 1))} s</b> · angekommen: <b class="mono">{n}</b> von {m} Bit{fertig ? ' – fertig' : ''}
        </span>
      </p>
      {formel && (
        <div class="zt-summe">
          Dauer = {m} Bit ÷ {r} bit/s =<b>{z(runde(m / r, 2))} s</b>
        </div>
      )}
      <div class="zt-bild__knoepfe">
        <Knopf variante="primaer" groesse="s" icon="step-forward" disabled={fertig} onClick={() => (setLaeuft(false), setN(Math.min(m, Math.floor(n / r + 1e-9) * r + r)))}>
          1 Sekunde weiter
        </Knopf>
        <Knopf variante="zweit" groesse="s" icon={laeuft ? 'pause' : 'play'} onClick={abspielen}>
          {laeuft ? 'Anhalten' : 'Abspielen'}
        </Knopf>
        <Knopf variante="geist" groesse="s" icon="rotate-ccw" onClick={() => neu(() => {})}>
          Von vorn
        </Knopf>
      </div>
      {regler && (
        <div class="zt-uebertragung-regler-gruppe">
          <Regler name="Datenmenge" werte={MENGEN} i={mi} text={`${m} Bit`} onWahl={(i) => neu(() => setMi(i))} />
          <Regler name="Rate" werte={RATEN_KLEIN} i={ri} text={`${r} bit/s`} onWahl={(i) => neu(() => setRi(i))} />
        </div>
      )}
    </>
  );
}

// ---------- Rate in bit/s: Dezimalpräfix, auf Wunsch weiter in Byte/s und MiB/s ----------

const RATE_EINHEITEN = ['kbit/s', 'Mbit/s', 'Gbit/s'];

export function RateInBit({ wert = 100, einheit = 'Mbit/s', byte = false }) {
  const [text, setText] = useState(String(wert));
  const [e, setE] = useState(einheit);
  const v = leseZahl(text);
  const gueltig = v !== null && v >= 0 && v <= 100000;
  const bps = gueltig ? v * BPS_JE[e] : 0;
  const zeilen = [
    ['', `${z(v ?? 0)} ${e}`],
    [`· ${z(BPS_JE[e])}`, `${z(bps)} bit/s`, 'ziel'],
  ];
  if (byte) zeilen.push(['÷ 8', `${z(bps / 8)} Byte/s`], ['÷ 1.024²', `${mit2(bps / 8 / EINE_MIB)} MiB/s`]);
  return (
    <>
      <div class="zt-uebertragung-kopf">
        <label class="zt-bild__eingabe">
          Rate
          <input class="feld feld--mono" value={text} inputMode="decimal" autoComplete="off" onInput={(x) => setText(x.currentTarget.value)} />
        </label>
        <Segmente optionen={RATE_EINHEITEN} wert={e} onWahl={setE} label="Einheit der Rate" />
      </div>
      {gueltig ? (
        <Leiter zeilen={zeilen} />
      ) : (
        <span class="zt-bild__hinweis zt-bild__hinweis--warn">Bitte eine Zahl bis 100.000 eingeben.</span>
      )}
      <span class="zt-bild__hinweis">
        {byte ? 'Erst in bit/s (dezimal), dann ÷ 8 in Byte/s, dann ÷ 1.024² in MiB/s' : 'Raten sind dezimal: k = 1.000 · M = 1.000.000 · G = 1.000.000.000'}
      </span>
    </>
  );
}

// ---------- Datenmenge in Bit: Präfix, dann · 8 ----------

const MENGE_EINHEITEN = ['KiB', 'MiB', 'GiB', 'kB', 'MB', 'GB'];

export function MengeInBit({ wert = 5, einheit = 'MiB' }) {
  const [text, setText] = useState(String(wert));
  const [e, setE] = useState(einheit);
  const v = leseZahl(text);
  const gueltig = v !== null && v >= 0 && v <= 100000;
  const byte = gueltig ? v * BYTE_JE[e] : 0;
  const binaer = e.endsWith('iB');
  return (
    <>
      <div class="zt-uebertragung-kopf">
        <label class="zt-bild__eingabe">
          Datenmenge
          <input class="feld feld--mono" value={text} inputMode="decimal" autoComplete="off" onInput={(x) => setText(x.currentTarget.value)} />
        </label>
        <Segmente optionen={MENGE_EINHEITEN} wert={e} onWahl={setE} label="Einheit der Datenmenge" />
      </div>
      {gueltig ? (
        <Leiter
          zeilen={[
            ['', `${z(v)} ${e}`],
            [`· ${faktorText(e)}`, `${z(byte)} Byte`],
            ['· 8', `${z(inBit(v, e))} Bit`, 'ziel'],
          ]}
        />
      ) : (
        <span class="zt-bild__hinweis zt-bild__hinweis--warn">Bitte eine Zahl bis 100.000 eingeben.</span>
      )}
      <span class="zt-bild__hinweis">
        {binaer ? `${e}: Binärpräfix, Schritte von 1.024` : `${e}: Dezimalpräfix, Schritte von 1.000`} · ein Byte sind 8 Bit
      </span>
    </>
  );
}

// ---------- Lauf: Fortschrittsbalken mit Uhr, im Zeitraffer abspielbar ----------
// gesamt: echte Dauer in Sekunden · links/rechts: Beschriftung der Enden · mitte(p): Text auf dem Balken bei Anteil p

const ZEITRAFFER = 5; // längste Abspieldauer in Sekunden

function Lauf({ gesamt, links, rechts, mitte }) {
  const [p, setP] = useState(0);
  const [laeuft, setLaeuft] = useState(false);
  useEffect(() => {
    setP(0);
    setLaeuft(false);
  }, [gesamt]);
  useEffect(() => {
    if (!laeuft) return undefined;
    const echt = Math.min(gesamt, ZEITRAFFER) * 1000;
    const start = performance.now() - p * echt;
    let rahmen;
    const schritt = (jetzt) => {
      const neu = Math.min(1, (jetzt - start) / echt);
      setP(neu);
      if (neu < 1) rahmen = requestAnimationFrame(schritt);
      else setLaeuft(false);
    };
    rahmen = requestAnimationFrame(schritt);
    return () => cancelAnimationFrame(rahmen);
  }, [laeuft]);
  const abspielen = () => {
    if (p >= 1) setP(0);
    setLaeuft(!laeuft || p >= 1);
  };
  return (
    <>
      <div class="zt-uebertragung-lauf">
        <span class="zt-uebertragung-lauf__ende">{links}</span>
        <div class="zt-uebertragung-balken" aria-hidden="true">
          <span class="zt-uebertragung-balken__fuellung" style={{ width: `${p * 100}%` }} />
          <span class="zt-uebertragung-balken__text mono">{mitte(p)}</span>
        </div>
        <span class="zt-uebertragung-lauf__ende">{rechts}</span>
      </div>
      <div class="zt-uebertragung-lauf__fuss">
        <span class="zt-uebertragung-uhr" role="status">
          <Icon name="timer" groesse={15} />
          <span>
            <b class="mono">{mit2(p * gesamt)} s</b> von {mit2(gesamt)} s{gesamt > ZEITRAFFER ? ' · im Zeitraffer' : ''}
          </span>
        </span>
        <Knopf variante="zweit" groesse="s" icon={laeuft ? 'pause' : 'play'} onClick={abspielen}>
          {laeuft ? 'Anhalten' : 'Abspielen'}
        </Knopf>
      </div>
    </>
  );
}

// ---------- Download: Dateigröße und Rate einstellen, Dauer läuft mit ----------
// ziel: Zeitvorgabe in Sekunden (zeigt, ob die Rate reicht)

const RATEN = [1, 2, 6, 10, 16, 25, 50, 100, 150, 250, 500, 1000];
const DATEI_EINHEITEN = ['MiB', 'GiB', 'MB', 'GB'];

export function Download({ menge = 25, einheit = 'MiB', rate = 16, ziel = null }) {
  const [text, setText] = useState(String(menge));
  const [e, setE] = useState(einheit);
  const [ri, setRi] = useState(Math.max(0, RATEN.indexOf(rate)));
  const v = leseZahl(text);
  const gueltig = v !== null && v > 0 && v <= 10000;
  const r = RATEN[ri];
  const bit = gueltig ? inBit(v, e) : 0;
  const bps = r * BPS_JE['Mbit/s'];
  const sek = bit / bps;
  const ms = minutenUndSekunden(sek);
  const reicht = ziel !== null && sek <= ziel;
  return (
    <>
      <div class="zt-uebertragung-kopf">
        <label class="zt-bild__eingabe">
          Datei
          <input class="feld feld--mono" value={text} inputMode="decimal" autoComplete="off" onInput={(x) => setText(x.currentTarget.value)} />
        </label>
        <Segmente optionen={DATEI_EINHEITEN} wert={e} onWahl={setE} label="Einheit der Datei" />
      </div>
      <Regler name="Rate" werte={RATEN} i={ri} text={`${z(r)} Mbit/s`} onWahl={setRi} />
      {gueltig ? (
        <>
          <Lauf
            gesamt={sek}
            links={<Icon name="file-text" groesse={18} />}
            rechts={<Icon name="laptop" groesse={18} />}
            mitte={(p) => `${z(runde(v * p, 1))} von ${z(v)} ${e}`}
          />
          <Leiter
            zeilen={[
              ['Datenmenge', `${z(v)} ${e} = ${z(v)} · ${faktorText(e)} · 8`],
              ['', `= ${z(bit)} Bit`],
              ['Rate', `${z(r)} Mbit/s = ${z(bps)} bit/s`],
              ['Dauer', `${z(bit)} ÷ ${z(bps)}`],
              ['', `= ${mit2(sek)} s`, 'ziel'],
              ['', `≈ ${z(ms.ganz)} s = ${ms.min} min ${ms.sek} s`],
            ]}
          />
          {ziel !== null && (
            <p class={`zt-uebertragung-ziel ${reicht ? 'zt-uebertragung-ziel--gut' : 'zt-uebertragung-ziel--warn'}`} role="status">
              <Icon name={reicht ? 'circle-check' : 'circle-x'} groesse={15} />
              Vorgabe: höchstens {ziel} s – {reicht ? 'die Rate reicht.' : `reicht nicht (${mit2(sek)} s).`}
            </p>
          )}
        </>
      ) : (
        <span class="zt-bild__hinweis zt-bild__hinweis--warn">Bitte eine Dateigröße zwischen 0 und 10.000 eingeben.</span>
      )}
    </>
  );
}

// ---------- Angekommen: Rate · Dauer = Datenmenge, zurück in MiB ----------

const DAUERN = [1, 10, 20, 60, 90, 120, 300, 600];

export function Angekommen({ rate = 16, dauer = 60 }) {
  const [ri, setRi] = useState(Math.max(0, RATEN.indexOf(rate)));
  const [di, setDi] = useState(Math.max(0, DAUERN.indexOf(dauer)));
  const r = RATEN[ri];
  const d = DAUERN[di];
  const bit = r * BPS_JE['Mbit/s'] * d;
  const mib = bit / 8 / EINE_MIB;
  return (
    <>
      <div class="zt-uebertragung-regler-gruppe">
        <Regler name="Rate" werte={RATEN} i={ri} text={`${z(r)} Mbit/s`} onWahl={setRi} />
        <Regler name="Dauer" werte={DAUERN} i={di} text={`${d} s`} onWahl={setDi} />
      </div>
      <Lauf
        gesamt={d}
        links={<Icon name="server" groesse={18} />}
        rechts={<Icon name="laptop" groesse={18} />}
        mitte={(p) => `${mit2(mib * p)} MiB angekommen`}
      />
      <Leiter
        zeilen={[
          ['Datenmenge', `${z(r * 1e6)} bit/s · ${d} s`],
          ['=', `${z(bit)} Bit`],
          ['÷ 8', `${z(bit / 8)} Byte`],
          ['÷ 1.024²', `${mit2(mib)} MiB`, 'ziel'],
        ]}
      />
    </>
  );
}

// ---------- Minuten: Sekunden in volle Minuten und Restsekunden ----------

export function Minuten({ start = 130 }) {
  const [text, setText] = useState(String(start).replace('.', ','));
  const v = leseZahl(text);
  const gueltig = v !== null && v >= 0 && v <= 900;
  const { ganz, min, sek } = minutenUndSekunden(gueltig ? v : 0);
  const komma = ganz / 60;
  const falsch = Math.round((komma - min) * 100);
  return (
    <>
      <label class="zt-bild__eingabe">
        Sekunden
        <input class="feld feld--mono" value={text} inputMode="decimal" autoComplete="off" onInput={(x) => setText(x.currentTarget.value)} />
      </label>
      {gueltig ? (
        <>
          <div class="zt-uebertragung-minuten" aria-label={`${min} volle Minuten und ${sek} Sekunden`}>
            {Array.from({ length: min }, (_, i) => (
              <span key={i} class="zt-uebertragung-minute">
                <span class="zt-uebertragung-minute__fuellung" style={{ width: '100%' }} />
                <span class="zt-uebertragung-minute__text mono">60 s</span>
              </span>
            ))}
            {(sek > 0 || min === 0) && (
              <span class="zt-uebertragung-minute zt-uebertragung-minute--rest">
                <span class="zt-uebertragung-minute__fuellung" style={{ width: `${(sek / 60) * 100}%` }} />
                <span class="zt-uebertragung-minute__text mono">{sek} s</span>
              </span>
            )}
          </div>
          <div class="zt-summe">
            {v !== ganz ? `${z(v)} s ≈ ${ganz} s · ` : ''}
            {ganz} ÷ 60 = {min} Rest {sek} →<b>{min} min {sek} s</b>
          </div>
          {sek > 0 && falsch !== sek && (
            <span class="zt-bild__hinweis zt-bild__hinweis--warn">
              Vorsicht: {ganz} ÷ 60 = {z(runde(komma, 2), 2)} min – die ,{String(falsch).padStart(2, '0')} sind Hundertstel Minuten, keine Sekunden.
            </span>
          )}
        </>
      ) : (
        <span class="zt-bild__hinweis zt-bild__hinweis--warn">Bitte eine Zahl von 0 bis 900 eingeben.</span>
      )}
    </>
  );
}

// ---------- Dreieck: eine Formel, drei Fragen ----------

const FORMELN = {
  menge: 'Datenmenge = Übertragungsrate · Dauer',
  rate: 'Übertragungsrate = Datenmenge ÷ Dauer',
  dauer: 'Dauer = Datenmenge ÷ Übertragungsrate',
};
const ECKEN = [
  ['menge', 'Datenmenge', 'oben'],
  ['rate', 'Rate', 'links'],
  ['dauer', 'Dauer', 'rechts'],
];

export function Dreieck({ start = 'dauer' }) {
  const [gesucht, setGesucht] = useState(start);
  return (
    <>
      <div class="zt-uebertragung-dreieck">
        <svg viewBox="0 0 300 210" aria-hidden="true">
          <polygon points="150,6 294,204 6,204" />
          <line x1="78" y1="105" x2="222" y2="105" />
          <line x1="150" y1="105" x2="150" y2="204" />
        </svg>
        {ECKEN.map(([id, name, wo]) => (
          <button
            key={id}
            type="button"
            class={`zt-uebertragung-ecke zt-uebertragung-ecke--${wo}`}
            aria-pressed={gesucht === id}
            onClick={() => setGesucht(id)}
          >
            {gesucht === id ? '?' : name}
          </button>
        ))}
      </div>
      <p class="zt-uebertragung-formel mono" role="status">
        {FORMELN[gesucht]}
      </p>
    </>
  );
}
