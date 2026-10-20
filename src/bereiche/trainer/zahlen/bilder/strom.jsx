// Bilder zum Mitmachen für Leistung und Stromkosten (Rahmen im Unterricht: <Abbildung> aus lernsystem/bausteine.jsx;
// Stil: styles/zahlen-strom.css, Präfix zt-strom-). Jedes Bild liefert nur seinen Inhalt; Rechnungen in ../rechnen.js.
//   Leitung (Druck und Durchfluss, mit Wasserrad: P = U · I) · Formeldreieck (gesuchte Größe abdecken)
//   Netzteilwahl (Komponenten, Zuschlag, kleinstes Netzteil) · Netzteil (Wirkungsgrad, Wärme) · Stufen (η₁ · η₂)
//   Zaehler (Energie = Leistung · Zeit, auf Wunsch mit Kosten) · Jahr (Betriebsstunden, Last und Leerlauf)
//   Steckdose (Mehrfachsteckdose mit 16 A) · Usb (benötigte Stromstärke gegen das, was der Anschluss liefert)

import { useState } from 'preact/hooks';
import { Icon, Knopf, Zahl } from '../../../../ui/bausteine.jsx';
import { Segmente } from '../bausteine.jsx';
import { z, runde, netzteilWahl, stufenKette, jahresEnergie, anschlussLast } from '../rechnen.js';

const zahl = (x) => z(Math.round(x));
const mit2 = (x) => z(runde(x, 2), 2);
const kurz = (x, stellen = 2) => z(runde(x, stellen)); // ohne erzwungene Nachkommastellen: 0,9 · 24 · 1.314
const euro = (x) => `${z(runde(x, 2), 2)} €`;

// Schieberegler mit Beschriftung und Wert
function Regler({ name, wert, anzeige, min, max, schritt = 1, onWert }) {
  return (
    <label class="zt-strom-regler">
      <span class="zt-strom-regler__kopf">
        <span>{name}</span>
        <b class="mono">{anzeige}</b>
      </span>
      <input type="range" min={min} max={max} step={schritt} value={wert} aria-label={name} onInput={(e) => onWert(Number(e.currentTarget.value))} />
    </label>
  );
}

// Balken mit Füllung (anteil 0 bis 1) und optionaler Grenze (Strich bei grenze 0 bis 1)
function Fuellbalken({ anteil, grenze, ton, label }) {
  return (
    <div class="zt-strom-balken" role="img" aria-label={label}>
      <span class={`zt-strom-balken__fuellung ${ton ? `zt-strom-balken__fuellung--${ton}` : ''}`} style={{ width: `${Math.min(1, anteil) * 100}%` }} />
      {grenze !== undefined && <span class="zt-strom-balken__grenze" style={{ left: `${grenze * 100}%` }} />}
    </div>
  );
}

// ---------- Leitung: Druck (Spannung) und Durchfluss (Stromstärke), mit Wasserrad die Leistung ----------

const SPANNUNGEN = [1.5, 3.3, 5, 12, 20, 24, 48, 230];

export function Leitung({ u = 12, i = 2, leistung = false }) {
  const [nr, setNr] = useState(Math.max(0, SPANNUNGEN.indexOf(u)));
  const [strom, setStrom] = useState(i);
  const spannung = SPANNUNGEN[nr];
  const p = spannung * strom;
  const pegel = 18 + (82 * nr) / (SPANNUNGEN.length - 1);
  const fluss = 22 / (25 * strom); // Sekunden je Kugelabstand: doppelte Stromstärke, doppelt so schnell
  const dreh = Math.max(0.3, Math.min(30, 12 / Math.sqrt(p))); // Sekunden je Umdrehung
  const wortU = leistung ? 'Spannung U' : 'Druck';
  const wortI = leistung ? 'Stromstärke I' : 'Durchfluss';
  return (
    <>
      <div class="zt-strom-leitung" role="img" aria-label={`${wortU} ${z(spannung)} V, ${wortI} ${z(strom)} A${leistung ? `, Leistung ${kurz(p)} W` : ''}`}>
        <div class="zt-strom-leitung__teil">
          <div class="zt-strom-tank">
            <span class="zt-strom-tank__wasser" style={{ height: `${pegel}%` }} />
          </div>
          <span class="zt-strom-leitung__name">{wortU}</span>
          <b class="zt-strom-leitung__wert mono">{z(spannung)} V</b>
        </div>
        <div class="zt-strom-leitung__teil zt-strom-leitung__teil--rohr">
          <div class="zt-strom-rohr">
            <span class="zt-strom-rohr__fluss" style={{ animationDuration: `${fluss}s` }} />
          </div>
          <span class="zt-strom-leitung__name">{wortI}</span>
          <b class="zt-strom-leitung__wert mono">{z(strom)} A</b>
        </div>
        {leistung ? (
          <div class="zt-strom-leitung__teil">
            <svg class="zt-strom-rad" viewBox="0 0 48 48" style={{ animationDuration: `${dreh}s` }} aria-hidden="true">
              <circle cx="24" cy="24" r="17" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((w) => (
                <line key={w} x1="24" y1="24" x2="24" y2="2" transform={`rotate(${w} 24 24)`} />
              ))}
              <circle cx="24" cy="24" r="4" class="zt-strom-rad__nabe" />
            </svg>
            <span class="zt-strom-leitung__name">Wasserrad</span>
            <b class="zt-strom-leitung__wert mono">{kurz(p)} W</b>
          </div>
        ) : (
          <div class="zt-strom-leitung__teil">
            <span class="zt-strom-auslauf" aria-hidden="true">
              <Icon name="droplets" groesse={28} />
            </span>
            <span class="zt-strom-leitung__name">Gerät</span>
            <b class="zt-strom-leitung__wert mono">&nbsp;</b>
          </div>
        )}
      </div>
      {leistung && (
        <div class="zt-summe">
          P = U · I = {z(spannung)} V · {z(strom)} A =
          <b>
            <Zahl wert={p} format={(x) => `${kurz(x)} W`} />
          </b>
        </div>
      )}
      <div class="zt-strom-regler-reihe">
        <Regler name={wortU} wert={nr} anzeige={`${z(spannung)} V`} min={0} max={SPANNUNGEN.length - 1} onWert={setNr} />
        <Regler name={wortI} wert={strom} anzeige={`${z(strom)} A`} min={0.1} max={10} schritt={0.1} onWert={(x) => setStrom(runde(x, 1))} />
      </div>
      <span class="zt-bild__hinweis">
        {leistung ? 'Das Rad dreht sich umso schneller, je größer U · I ist.' : 'Links der Druck (Höhe im Tank), im Rohr der Durchfluss (wie schnell die Kugeln wandern).'}
      </span>
    </>
  );
}

// ---------- Formeldreieck: oben steht das Produkt, unten die beiden Faktoren ----------

export function Formeldreieck({ oben = 'P', links = 'U', rechts = 'I', namen = {}, start = null }) {
  const [gesucht, setGesucht] = useState(start);
  const formel = {
    [oben]: `${oben} = ${links} · ${rechts}`,
    [links]: `${links} = ${oben} ÷ ${rechts}`,
    [rechts]: `${rechts} = ${oben} ÷ ${links}`,
  };
  const worte = {
    [oben]: `${namen[oben]} = ${namen[links]} · ${namen[rechts]}`,
    [links]: `${namen[links]} = ${namen[oben]} ÷ ${namen[rechts]}`,
    [rechts]: `${namen[rechts]} = ${namen[oben]} ÷ ${namen[links]}`,
  };
  const knopf = (g, ort) => (
    <button type="button" class={`zt-strom-dreieck__groesse zt-strom-dreieck__groesse--${ort} ${gesucht === g ? 'zt-strom-dreieck__groesse--gesucht' : ''}`} aria-pressed={gesucht === g} aria-label={`${namen[g] ?? g} gesucht`} onClick={() => setGesucht(g)}>
      {g}
    </button>
  );
  return (
    <>
      <div class="zt-strom-dreieck">
        <svg viewBox="0 0 220 180" aria-hidden="true">
          <polygon points="110,6 214,174 6,174" />
          <line x1="51" y1="100" x2="169" y2="100" />
          <line x1="110" y1="100" x2="110" y2="174" />
        </svg>
        {knopf(oben, 'oben')}
        {knopf(links, 'links')}
        {knopf(rechts, 'rechts')}
      </div>
      <div class="zt-summe" aria-live="polite">
        {gesucht ? (
          <>
            <b class="zt-strom-formel">{formel[gesucht]}</b>
            {namen[oben] && <span class="zt-strom-formel__worte">{worte[gesucht]}</span>}
          </>
        ) : (
          'Welche Größe suchst du?'
        )}
      </div>
      <span class="zt-bild__hinweis">Tippe auf die gesuchte Größe. Nebeneinander heißt mal, übereinander heißt geteilt.</span>
    </>
  );
}

// ---------- Netzteil wählen: Komponenten addieren, Zuschlag, kleinstes passendes Netzteil ----------

const KOMPONENTEN = [
  ['Prozessor', 125],
  ['Grafikkarte', 200],
  ['Mainboard', 40],
  ['Arbeitsspeicher', 10],
  ['SSD', 5],
  ['Lüfter und Sonstiges', 20],
];
const GROESSEN = [300, 350, 400, 450, 500, 550, 650, 750];

export function Netzteilwahl({ teile = KOMPONENTEN, zuschlag: start = 30 }) {
  const [an, setAn] = useState(() => teile.map(() => true));
  const [zuschlag, setZuschlag] = useState(start);
  const { summe, bedarf, passend } = netzteilWahl(
    teile.filter((_, i) => an[i]).map(([, w]) => w),
    zuschlag,
    GROESSEN,
  );
  return (
    <>
      <div class="zt-strom-teile" role="group" aria-label="Komponenten">
        {teile.map(([name, w], i) => (
          <button key={i} type="button" class="zt-strom-teil" aria-pressed={an[i]} onClick={() => setAn(an.map((x, j) => (j === i ? !x : x)))}>
            <span>{name}</span>
            <b class="mono">{w} W</b>
          </button>
        ))}
      </div>
      <Segmente optionen={[20, 25, 30].map((p) => ({ wert: String(p), text: `${p} % Zuschlag` }))} wert={String(zuschlag)} onWahl={(w) => setZuschlag(Number(w))} label="Zuschlag" />
      <div class="zt-strom-rechnung mono">
        <span>Summe: {zahl(summe)} W</span>
        <span>
          mit Zuschlag: {zahl(summe)} W · {z(1 + zuschlag / 100)} = <b>{kurz(bedarf, 1)} W</b>
        </span>
      </div>
      <div class="zt-strom-netzteile" role="list" aria-label="Netzteile">
        {GROESSEN.map((g) => (
          <span key={g} role="listitem" class={`zt-strom-netzteil mono ${g < bedarf ? 'zt-strom-netzteil--klein' : ''} ${g === passend ? 'zt-strom-netzteil--passt' : ''}`}>
            {g} W
          </span>
        ))}
      </div>
      <span class="zt-bild__hinweis">
        {passend ? `Durchgestrichen: zu klein. Das kleinste passende Netzteil hat ${passend} W.` : 'Kein Netzteil dieser Reihe ist groß genug.'} Teile antippen zum Weglassen.
      </span>
    </>
  );
}

// ---------- Netzteil: aufgenommene Leistung = abgegebene ÷ Wirkungsgrad, der Rest wird Wärme ----------

export function Netzteil({ pab: startAb = 400, eta: startEta = 80 }) {
  const [pab, setPab] = useState(startAb);
  const [eta, setEta] = useState(startEta);
  const {
    stufen: [s],
  } = stufenKette(pab / (eta / 100), [eta / 100]);
  return (
    <>
      <div class="zt-strom-fluss" role="img" aria-label={`Aufgenommen ${mit2(s.rein)} W, abgegeben ${zahl(pab)} W, Wärme ${mit2(s.verlust)} W`}>
        <div class="zt-strom-fluss__zeile">
          <span>
            <Icon name="zap" groesse={14} />
            <span>
              aus der Steckdose (P<sub>zu</sub>)
            </span>
          </span>
          <b class="mono">{kurz(s.rein)} W</b>
        </div>
        <div class="zt-strom-fluss__balken">
          <span class="zt-strom-fluss__ab" style={{ width: `${eta}%` }} />
          <span class="zt-strom-fluss__waerme" style={{ width: `${100 - eta}%` }} />
        </div>
        <div class="zt-strom-fluss__zeile zt-strom-fluss__zeile--ab">
          <span>
            <span class="zt-strom-punkt zt-strom-punkt--ab" />
            <span>
              an die Komponenten (P<sub>ab</sub>)
            </span>
          </span>
          <b class="mono">{zahl(pab)} W</b>
        </div>
        <div class="zt-strom-fluss__zeile zt-strom-fluss__zeile--waerme">
          <span>
            <Icon name="flame" groesse={14} /> wird zu Wärme
          </span>
          <b class="mono">{kurz(s.verlust)} W</b>
        </div>
      </div>
      <div class="zt-summe">
        P<sub>zu</sub> = P<sub>ab</sub> ÷ η = {zahl(pab)} W ÷ {kurz(eta / 100)} =<b>{kurz(s.rein)} W</b>
      </div>
      <div class="zt-strom-regler-reihe">
        <Regler name="abgegeben" wert={pab} anzeige={`${zahl(pab)} W`} min={50} max={800} schritt={50} onWert={setPab} />
        <Regler name="Wirkungsgrad η" wert={eta} anzeige={`${eta} %`} min={50} max={98} onWert={setEta} />
      </div>
      <span class="zt-bild__hinweis">Je kleiner der Wirkungsgrad, desto mehr muss aus der Steckdose kommen – der Unterschied wird zu Wärme.</span>
    </>
  );
}

// ---------- Stufen hintereinander: jede Stufe gibt nur ihren Anteil weiter ----------

export function Stufen({ pzu = 1000, etas: start = [90, 90], namen = ['Stufe 1', 'Stufe 2'], ziel = 'an die Geräte' }) {
  const [etas, setEtas] = useState(start);
  const k = stufenKette(
    pzu,
    etas.map((e) => e / 100),
  );
  const verlust = pzu - k.pab;
  return (
    <>
      <div class="zt-strom-kette">
        <div class="zt-strom-kette__leistung">
          <span>aus dem Netz</span>
          <Fuellbalken anteil={1} ton="zu" label={`${zahl(pzu)} W`} />
          <b class="mono">{zahl(pzu)} W</b>
        </div>
        {k.stufen.map((s, i) => (
          <div key={i} class="zt-strom-kette__glied">
            <div class="zt-strom-kette__stufe">
              <Icon name="arrow-down" groesse={14} />
              <span class="zt-strom-kette__name">
                {namen[i]} · η{i === 0 ? '₁' : '₂'} = {etas[i]} %
              </span>
              <span class="zt-strom-kette__waerme mono">
                <Icon name="flame" groesse={12} /> − {kurz(s.verlust, 1)} W
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="99"
              value={etas[i]}
              aria-label={`Wirkungsgrad ${namen[i]}`}
              onInput={(e) => setEtas(etas.map((x, j) => (j === i ? Number(e.currentTarget.value) : x)))}
            />
            <div class="zt-strom-kette__leistung">
              <span>{i === k.stufen.length - 1 ? ziel : 'dazwischen'}</span>
              <Fuellbalken anteil={s.raus / pzu} ton={i === k.stufen.length - 1 ? 'ab' : 'zu'} label={`${kurz(s.raus, 1)} W`} />
              <b class="mono">{kurz(s.raus, 1)} W</b>
            </div>
          </div>
        ))}
      </div>
      <div class="zt-summe">
        η = {etas.map((e) => z(e / 100, 2)).join(' · ')} = {kurz(k.eta, 4)} =<b>{kurz(k.eta * 100, 2)} %</b>
      </div>
      <span class="zt-bild__hinweis">
        Wärme zusammen: {kurz(verlust, 1)} W. Jede Stufe verliert ihren Anteil von dem, was bei ihr ankommt.
      </span>
    </>
  );
}

// ---------- Zähler: Energie = Leistung · Zeit, auf Wunsch mit Kosten ----------

const VERBRAUCHER = [
  ['LED-Lampe', 10, 'lightbulb'],
  ['Monitor', 40, 'monitor'],
  ['PC', 200, 'server'],
  ['Wasserkocher', 2000, 'coffee'],
];

const dauerText = (t) => (t < 1 ? `${z(runde(t * 60, 0))} min` : `${kurz(t, 1)} h`);

export function Zaehler({ geraet = 0, stunden = 1, kosten = false, preis = 0.3 }) {
  const [g, setG] = useState(geraet);
  const [t, setT] = useState(stunden);
  const [name, p, icon] = VERBRAUCHER[g];
  const wh = p * t;
  const kwh = wh / 1000;
  return (
    <>
      <Segmente optionen={VERBRAUCHER.map(([n, w], i) => ({ wert: String(i), text: `${n} ${z(w)} W` }))} wert={String(g)} onWahl={(w) => setG(Number(w))} label="Gerät" />
      <div class="zt-strom-zaehler" role="img" aria-label={`${name} ${z(p)} W, ${dauerText(t)}, ${zahl(wh)} Wh`}>
        <span class="zt-strom-zaehler__geraet">
          <Icon name={icon} groesse={20} /> {name} · {z(p)} W · {dauerText(t)}
        </span>
        <span class="zt-strom-zaehler__anzeige mono">
          <Zahl wert={wh} format={(x) => zahl(x)} /> <small>Wh</small>
        </span>
      </div>
      <div class="zt-strom-rechnung mono">
        <span>
          W = P · t = {z(p)} W · {kurz(t, 1)} h = <b>{zahl(wh)} Wh</b>
        </span>
        {kosten && (
          <>
            <span>
              {zahl(wh)} Wh ÷ 1.000 = <b>{kurz(kwh, 3)} kWh</b>
            </span>
            <span>
              {kurz(kwh, 3)} kWh · {z(preis, 2)} €/kWh = <b>{euro(kwh * preis)}</b>
            </span>
          </>
        )}
      </div>
      <div class="zt-bild__knoepfe">
        <Knopf groesse="s" icon="plus" onClick={() => setT(runde(t + 0.1, 1))}>
          6 min
        </Knopf>
        <Knopf groesse="s" icon="plus" onClick={() => setT(runde(t + 1, 1))}>
          1 Stunde
        </Knopf>
        <Knopf groesse="s" icon="plus" onClick={() => setT(runde(t + 24, 1))}>
          1 Tag
        </Knopf>
        <Knopf groesse="s" variante="zweit" icon="rotate-ccw" onClick={() => setT(0)}>
          auf 0
        </Knopf>
      </div>
      <span class="zt-bild__hinweis">Gerät wechseln und vergleichen: Die Zeit bleibt stehen, nur die Leistung ändert sich.</span>
    </>
  );
}

// ---------- Jahr: Betriebsstunden, Energie und Kosten; auf Wunsch Last und Leerlauf getrennt ----------

const VORLAGEN = {
  server: { name: 'Server', p: 150, h: 24, d: 365 },
  buero: { name: 'Büro-PC', p: 120, h: 8, d: 250 },
};

function Tagesstreifen({ an, last }) {
  return (
    <div class="zt-strom-tag" role="img" aria-label={last !== undefined ? `${last} h Last, ${24 - last} h Leerlauf` : `${an} von 24 Stunden eingeschaltet`}>
      {Array.from({ length: 24 }, (_, i) => {
        const art = last !== undefined ? (i < last ? 'last' : 'leer') : i < an ? 'an' : 'aus';
        return <span key={i} class={`zt-strom-tag__stunde zt-strom-tag__stunde--${art}`} />;
      })}
      <span class="zt-strom-tag__achse mono">
        <span>0 h</span>
        <span>12 h</span>
        <span>24 h</span>
      </span>
    </div>
  );
}

export function Jahr({ leerlauf = false, leistung = 150, stunden = 24, tage = 365, last = 250, leer = 60, lastStunden = 8, preis = 0.3 }) {
  const [p, setP] = useState(leistung);
  const [h, setH] = useState(leerlauf ? lastStunden : stunden);
  const [d, setD] = useState(tage);
  const zustaende = leerlauf
    ? [
        { leistung: last, stunden: h },
        { leistung: leer, stunden: 24 - h },
      ]
    : [{ leistung: p, stunden: h }];
  const j = jahresEnergie(zustaende, d, preis);
  return (
    <>
      {!leerlauf && (
        <Segmente
          optionen={Object.entries(VORLAGEN).map(([id, v]) => ({ wert: id, text: v.name }))}
          wert={Object.keys(VORLAGEN).find((id) => VORLAGEN[id].p === p && VORLAGEN[id].h === h && VORLAGEN[id].d === d) ?? ''}
          onWahl={(id) => {
            setP(VORLAGEN[id].p);
            setH(VORLAGEN[id].h);
            setD(VORLAGEN[id].d);
          }}
          label="Beispiel"
        />
      )}
      <Tagesstreifen an={h} last={leerlauf ? h : undefined} />
      {leerlauf && (
        <span class="zt-strom-legende">
          <span>
            <span class="zt-strom-punkt zt-strom-punkt--last" /> Last {last} W
          </span>
          <span>
            <span class="zt-strom-punkt zt-strom-punkt--leer" /> Leerlauf {leer} W
          </span>
        </span>
      )}
      <div class="zt-strom-rechnung mono">
        {leerlauf ? (
          <>
            <span>
              Last: {last} W · {h} h = {zahl(last * h)} Wh
            </span>
            <span>
              Leerlauf: {leer} W · {24 - h} h = {zahl(leer * (24 - h))} Wh
            </span>
            <span>je Tag: {zahl(j.whTag)} Wh</span>
            <span>
              im Jahr: {zahl(j.whTag)} Wh · {d} = {zahl(j.whTag * d)} Wh = <b>{kurz(j.kwh)} kWh</b>
            </span>
          </>
        ) : (
          <>
            <span>
              Betriebsstunden: {h} h · {d} Tage = <b>{zahl(h * d)} h</b>
            </span>
            <span>
              Energie: {z(p)} W · {zahl(h * d)} h = {zahl(j.kwh * 1000)} Wh = <b>{kurz(j.kwh)} kWh</b>
            </span>
          </>
        )}
        <span>
          Kosten: {kurz(j.kwh)} kWh · {z(preis, 2)} €/kWh = <b>{euro(j.kosten)}</b>
        </span>
      </div>
      <div class="zt-strom-regler-reihe">
        {leerlauf ? (
          <Regler name="Stunden unter Last je Tag" wert={h} anzeige={`${h} h`} min={0} max={24} onWert={setH} />
        ) : (
          <>
            <Regler name="Leistung" wert={p} anzeige={`${p} W`} min={5} max={500} schritt={5} onWert={setP} />
            <Regler name="Stunden je Tag" wert={h} anzeige={`${h} h`} min={1} max={24} onWert={setH} />
          </>
        )}
        <Regler name="Tage im Jahr" wert={d} anzeige={`${d}`} min={1} max={365} onWert={setD} />
      </div>
      <span class="zt-bild__hinweis">
        {leerlauf ? 'Jeder Kasten ist eine Stunde: kräftig unter Last, blass im Leerlauf.' : 'Jeder Kasten ist eine Stunde des Tages.'} Strompreis {z(preis, 2)} €/kWh.
      </span>
    </>
  );
}

// ---------- Mehrfachsteckdose: Summe der Geräte gegen 230 V · 16 A ----------

const STECKER = [
  ['Laserdrucker', 1100, 'printer', true],
  ['Laserdrucker', 1100, 'printer', true],
  ['PC', 500, 'server', true],
  ['Monitor', 40, 'monitor', false],
  ['Heizlüfter', 1000, 'flame', false],
];

export function Steckdose({ geraete = STECKER }) {
  const [an, setAn] = useState(() => geraete.map((g) => g[3]));
  const l = anschlussLast(
    geraete.filter((_, i) => an[i]).map((g) => g[1]),
    230,
    16,
  );
  const skala = l.zulaessig * 1.25;
  return (
    <>
      <div class="zt-strom-leiste" role="group" aria-label="Geräte an der Mehrfachsteckdose">
        {geraete.map(([name, w, icon], i) => (
          <button key={i} type="button" class="zt-strom-dose" aria-pressed={an[i]} aria-label={`${name} ${z(w)} W ${an[i] ? 'eingesteckt' : 'nicht eingesteckt'}`} onClick={() => setAn(an.map((x, j) => (j === i ? !x : x)))}>
            <Icon name={icon} groesse={18} />
            <span class="zt-strom-dose__name">{name}</span>
            <b class="mono">{z(w)} W</b>
          </button>
        ))}
      </div>
      <div class="zt-strom-last">
        <Fuellbalken anteil={l.summe / skala} grenze={l.zulaessig / skala} ton={l.reicht ? 'ab' : 'warn'} label={`${zahl(l.summe)} W von ${zahl(l.zulaessig)} W`} />
        <span class="zt-strom-last__grenze mono" style={{ left: `${(l.zulaessig / skala) * 100}%` }}>
          {zahl(l.zulaessig)} W
        </span>
      </div>
      <div class="zt-strom-rechnung mono">
        <span>zulässig: 230 V · 16 A = {zahl(l.zulaessig)} W</span>
        <span>
          Summe: <b>{zahl(l.summe)} W</b> · I = {zahl(l.summe)} W ÷ 230 V = {mit2(l.strom)} A
        </span>
      </div>
      <p class={`zt-strom-urteil ${l.reicht ? 'zt-strom-urteil--ok' : 'zt-strom-urteil--warn'}`} role="status">
        <Icon name={l.reicht ? 'circle-check' : 'triangle-alert'} groesse={15} />
        {l.reicht ? `${zahl(l.summe)} W ≤ ${zahl(l.zulaessig)} W – alles in Ordnung.` : `${zahl(l.summe)} W > ${zahl(l.zulaessig)} W – zu viel, die Sicherung schaltet ab.`}
      </p>
      <span class="zt-bild__hinweis">Geräte antippen zum Ein- und Ausstecken.</span>
    </>
  );
}

// ---------- USB-Anschluss: benötigte Stromstärke I = P ÷ 5 V gegen das, was der Anschluss liefert ----------

const USB_ANSCHLUESSE = [
  ['USB 2.0', 0.5],
  ['USB 3.0', 0.9],
  ['USB-C', 3],
];

export function Usb({ leistung = 4.5, anschluss = 0 }) {
  const [p, setP] = useState(leistung);
  const [k, setK] = useState(anschluss);
  const [name, imax] = USB_ANSCHLUESSE[k];
  const l = anschlussLast([p], 5, imax);
  const skala = Math.max(imax, l.strom) * 1.25;
  return (
    <>
      <Segmente optionen={USB_ANSCHLUESSE.map(([n, a], i) => ({ wert: String(i), text: `${n} · ${z(a)} A` }))} wert={String(k)} onWahl={(w) => setK(Number(w))} label="Anschluss" />
      <div class="zt-summe">
        I = P ÷ U = {z(p)} W ÷ 5 V =<b>{mit2(l.strom)} A</b>
      </div>
      <div class="zt-strom-last">
        <Fuellbalken anteil={l.strom / skala} grenze={imax / skala} ton={l.reicht ? 'ab' : 'warn'} label={`braucht ${mit2(l.strom)} A, ${name} liefert ${z(imax)} A`} />
        <span class="zt-strom-last__grenze mono" style={{ left: `${(imax / skala) * 100}%` }}>
          {z(imax)} A
        </span>
      </div>
      <p class={`zt-strom-urteil ${l.reicht ? 'zt-strom-urteil--ok' : 'zt-strom-urteil--warn'}`} role="status">
        <Icon name={l.reicht ? 'circle-check' : 'triangle-alert'} groesse={15} />
        {l.reicht ? `${mit2(l.strom)} A ≤ ${z(imax)} A – der Anschluss reicht.` : `${mit2(l.strom)} A > ${z(imax)} A – zu wenig Strom, das Gerät arbeitet gestört.`}
      </p>
      <div class="zt-strom-regler-reihe">
        <Regler name="Leistung des Geräts" wert={p} anzeige={`${z(p)} W`} min={0.5} max={15} schritt={0.5} onWert={setP} />
      </div>
      <span class="zt-bild__hinweis">Der Strich zeigt, wie viel der Anschluss höchstens liefert. Die Spannung ist bei allen 5 V.</span>
    </>
  );
}
