// Tests für tools/ablauf-ergaenzen.mjs: Abläufe in die Lehrnotiz setzen, Antworten der Modelle auswerten und ein
// ganzer Lauf (start → weiter → einarbeiten) gegen eine nachgebaute Batch-API. Kein Netz, kein Schlüssel nötig.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ladeLernprompts } from '../tools/inhalt.mjs';
import { teileRegelblock } from '../tools/regelblock.mjs';
import { ABSCHNITT, SCHREIBER, PRUEFER, aussagenIm, entferneAblaeufe, setzeAblaeufeEin, ablaufZeile, materialAus, leseJson, leseErgebnis, leseVorschlaege, fuehreZusammen, trifft, kosten, haupt } from '../tools/ablauf-ergaenzen.mjs';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Die Tests rechnen mit Prompts ohne den Abschnitt „Abläufe zum Verstehen“. Im Repo haben ihn viele schon,
// deshalb wird er hier herausgenommen – im Speicher und in jeder Kopie, auf der ein Lauf nachgestellt wird.
const prompts = Object.fromEntries(Object.entries(ladeLernprompts(wurzel).prompts).map(([id, p]) => [id, { ...p, text: entferneAblaeufe(p.text) }]));
function kopiereOhneAblaeufe(tmp) {
  fs.cpSync(path.join(wurzel, 'inhalt', 'lernprompts'), path.join(tmp, 'inhalt', 'lernprompts'), { recursive: true });
  for (const p of Object.values(prompts)) fs.writeFileSync(path.join(tmp, p.datei), p.text);
}
const eintrag = (aussage, extra = {}) => ({ aussage, titel: 'Zugriff über die Stufen', schritte: ['Der Prozessor sucht im L1-Cache', '2. Bei einem Fehlgriff holt er einen Block aus dem Arbeitsspeicher.'], vereinfacht: null, ...extra });

test('Einsetzen: Abschnitt steht hinter den Kerngedanken, alles andere bleibt zeichengleich, Entfernen stellt den Text wieder her', () => {
  assert.ok(Object.keys(prompts).length > 0);
  for (const [id, p] of Object.entries(prompts)) {
    const nr = aussagenIm(p.text);
    assert.ok(nr.length, id);
    const neu = setzeAblaeufeEin(p.text, [eintrag(nr.at(-1)), eintrag(nr[0], { vereinfacht: 'Vereinfacht: Der Prefetcher lädt zusätzlich voraus' })]);
    assert.equal(entferneAblaeufe(neu), p.text, id);
    assert.equal(setzeAblaeufeEin(neu, []), p.text, id);
    const zeilen = neu.split('\n');
    const a = zeilen.indexOf(ABSCHNITT);
    const [kern, danach] = [zeilen.indexOf('**Kerngedanken:**'), zeilen.indexOf('**Typische Missverständnisse:**')];
    if (kern >= 0 && danach >= 0) assert.ok(a > kern && a < danach && zeilen[a + 3] === '', id);
    assert.ok(zeilen[a + 1].startsWith(`- ${nr[0]} – Zugriff über die Stufen: (1) Der Prozessor sucht im L1-Cache. (2) Bei einem Fehlgriff`), id);
    assert.ok(zeilen[a + 1].endsWith(' Vereinfacht: Der Prefetcher lädt zusätzlich voraus.'), id);
    // Kopf, Regelblock und Stoff unverändert; zweimal einsetzen ergibt dasselbe
    const [vor, nach] = [teileRegelblock(p.text), teileRegelblock(neu)];
    assert.equal(nach.kopf + nach.block, vor.kopf + vor.block, id);
    assert.equal(nach.rest.slice(0, nach.rest.indexOf('\n## Lehrnotiz: ')), vor.rest.slice(0, vor.rest.indexOf('\n## Lehrnotiz: ')), id);
    assert.equal(setzeAblaeufeEin(neu, [eintrag(nr.at(-1)), eintrag(nr[0], { vereinfacht: 'Der Prefetcher lädt zusätzlich voraus' })]), neu, id);
    // die Modelle sehen weder Regelblock noch einen schon eingearbeiteten Abschnitt
    assert.equal(materialAus(neu), materialAus(p.text), id);
    assert.ok(!materialAus(p.text).includes('## So läuft unsere Sitzung') && materialAus(p.text).includes('## Lehrnotiz: '), id);
    if (p.text.includes('\n**Material:**\n')) assert.equal(neu.slice(neu.indexOf('\n**Material:**\n')), p.text.slice(p.text.indexOf('\n**Material:**\n')), id);
  }
});

test('Einsetzen ohne bekannte Abschnitte: ans Ende; ohne Lehrnotiz: null', () => {
  const text = 'Kopf\n\n## So läuft unsere Sitzung\n\nRegeln.\n\n## Stoff: B\n\n### K1 – A (Stufe 2 Verstehen)\n\n## Lehrnotiz: B\n\nFreier Text.\n';
  assert.equal(setzeAblaeufeEin(text, [eintrag('K1')]), `${text}\n${ABSCHNITT}\n${ablaufZeile(eintrag('K1'))}\n`);
  assert.equal(setzeAblaeufeEin('Kopf\n\n## Stoff: B\n', [eintrag('K1')]), null);
});

test('Antworten lesen: JSON mit Text drumherum, Vorschläge nur zu vorhandenen Aussagen', () => {
  assert.deepEqual(leseJson('Hier:\n```json\n{"ergaenzungen": []}\n```'), { ergaenzungen: [] });
  assert.equal(leseJson('kein JSON'), null);
  const v = leseVorschlaege(JSON.stringify({ ergaenzungen: [eintrag('K5'), eintrag('K9'), eintrag('K5'), { aussage: 'K1', titel: 'x', schritte: ['nur einer'] }] }), ['K1', 'K5']);
  assert.deepEqual(v.vorschlaege.map((x) => x.aussage), ['K5']);
  assert.equal(v.vorschlaege[0].schritte[1], 'Bei einem Fehlgriff holt er einen Block aus dem Arbeitsspeicher.');
  assert.equal(v.fehler.length, 3);
  assert.equal(leseVorschlaege('Unsinn', ['K1']).fehler.length, 1);
  assert.match(leseErgebnis({ custom_id: 'AP1-1-1-1', result: { type: 'errored', error: { type: 'error' } } }).fehler, /errored/);
  assert.match(leseErgebnis({ custom_id: 'AP1-1-1-1', result: { type: 'succeeded', message: { stop_reason: 'max_tokens', content: [] } } }).fehler, /abgeschnitten/);
  assert.deepEqual(leseErgebnis({ custom_id: 'x', result: { type: 'succeeded', message: { stop_reason: 'end_turn', content: [{ type: 'thinking', thinking: '…' }, { type: 'text', text: '{}' }], usage: { input_tokens: 10, output_tokens: 5 } } } }), { id: 'x', text: '{}', nutzung: { ein: 10, aus: 5 } });
});

test('Zusammenführen: ok übernimmt, korrigiert nimmt die Fassung des Prüfers, alles andere fällt weg', () => {
  const vorschlaege = ['K1', 'K2', 'K3', 'K4', 'K5'].map((k) => eintrag(k));
  const antwort = JSON.stringify({
    urteile: [
      { aussage: 'K1', urteil: 'ok', grund: '' },
      { aussage: 'K2', urteil: 'korrigiert', grund: 'Reihenfolge', titel: 'Neu', schritte: ['Erst das.', 'Dann das.'], vereinfacht: null },
      { aussage: 'K3', urteil: 'ablehnen', grund: 'steht schon im Stoff' },
      { aussage: 'K4', urteil: 'korrigiert', grund: 'ohne Schritte' },
    ],
    uebersehen: [{ aussage: 'K7', hinweis: 'Ablauf der Vergabe fehlt' }, { aussage: 'K8' }],
    stoffmeldungen: [{ aussage: 'K1', meldung: 'Zahl veraltet' }],
  });
  const e = fuehreZusammen(vorschlaege, antwort, ['K1', 'K2', 'K3', 'K4', 'K5', 'K7']);
  assert.deepEqual(e.uebernommen.map((x) => [x.aussage, x.korrigiert, x.titel]), [['K1', false, 'Zugriff über die Stufen'], ['K2', true, 'Neu']]);
  assert.deepEqual(e.abgelehnt.map((x) => x.aussage), ['K3', 'K4', 'K5']);
  assert.equal(e.abgelehnt[2].grund, 'kein Urteil des Prüfers');
  assert.deepEqual(e.uebersehen, [{ aussage: 'K7', hinweis: 'Ablauf der Vergabe fehlt' }]);
  assert.deepEqual(e.stoffmeldungen, [{ aussage: 'K1', meldung: 'Zahl veraltet' }]);
  const kaputt = fuehreZusammen(vorschlaege, 'kein JSON', ['K1']);
  assert.equal(kaputt.uebernommen.length, 0);
  assert.equal(kaputt.abgelehnt.length, 5);
});

test('Filter und Kosten', () => {
  assert.ok(trifft('ALLE', 'PB2-5-1-1') && trifft('AP1', 'AP1-4-1-8') && trifft('AP1-4', 'AP1-4-1-8') && trifft('AP1-4-1-8', 'AP1-4-1-8'));
  assert.ok(!trifft('AP1-4', 'AP1-41-1-1') && !trifft('AP1-4-1-8', 'AP1-4-1-80') && !trifft('PB1', 'PB2-1-1-1'));
  assert.equal(kosten({ ein: 1e6, aus: 1e6 }, SCHREIBER), 24);
  assert.equal(kosten({ ein: 1e6, aus: 1e6 }, PRUEFER), 12);
});

// Nachgebaute Batch-API: nimmt Batches an, beantwortet sie mit `antworte(modell, id, anfrage)` und liefert JSONL
function falscheApi(antworte, { ersteAnmeldungScheitert = false, direktIds = [] } = {}) {
  const gesehen = new Set();
  const direktThema = new Map(direktIds.map((id) => [id, prompts[id].text.split('\n').find((z) => z.startsWith('Thema: '))]));
  const batches = new Map();
  const aufrufe = [];
  const fetch = async (url, opt) => {
    aufrufe.push({ url, opt });
    const json = (o, status = 200) => ({ ok: status === 200, status, json: async () => o, text: async () => (typeof o === 'string' ? o : JSON.stringify(o)) });
    if (ersteAnmeldungScheitert && opt.headers['x-api-key']) return json({ type: 'error' }, 401);
    const antwort = (a) => ({ stop_reason: 'end_turn', content: [{ type: 'text', text: JSON.stringify(antworte(a.model, a.custom_id, { params: a })) }], usage: { input_tokens: 4000, output_tokens: 1000 } });
    if (url === 'https://api.anthropic.com/v1/messages') {
      const params = JSON.parse(opt.body);
      const id = params.messages[0].content.match(/### (K\d+) – /) && [...direktIds].find((x) => !gesehen.has(`${params.model} ${x}`) && params.messages[0].content.includes(direktThema.get(x)));
      gesehen.add(`${params.model} ${id}`);
      return json(antwort({ ...params, custom_id: id }));
    }
    assert.ok(url.startsWith('https://api.anthropic.com/v1/messages/batches'));
    if (opt.method === 'POST') {
      const id = `msgbatch_${batches.size + 1}`;
      batches.set(id, { anfragen: JSON.parse(opt.body).requests, abfragen: 0 });
      return json({ id, processing_status: 'in_progress' });
    }
    const [, id, ergebnisse] = url.match(/batches\/(msgbatch_\d+)(\/results)?$/);
    const b = batches.get(id);
    if (!ergebnisse) {
      b.abfragen++;
      const fertig = b.abfragen > 1;
      return json({ id, processing_status: fertig ? 'ended' : 'in_progress', request_counts: { processing: fertig ? 0 : b.anfragen.length, succeeded: fertig ? b.anfragen.length : 0 }, results_url: fertig ? `https://api.anthropic.com/v1/messages/batches/${id}/results` : null });
    }
    return json(b.anfragen.map((a) => JSON.stringify({ custom_id: a.custom_id, result: { type: 'succeeded', message: { stop_reason: 'end_turn', content: [{ type: 'text', text: JSON.stringify(antworte(a.params.model, a.custom_id, a)) }], usage: { input_tokens: 4000, output_tokens: 1000 } } } })).join('\n'));
  };
  return { fetch, batches, aufrufe };
}

test('Ganzer Lauf: start, weiter warten, einarbeiten – nur Freigegebenes landet in der Lehrnotiz', async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ablauf-'));
  try {
    kopiereOhneAblaeufe(tmp);
    const ids = Object.keys(prompts).filter((id) => id.startsWith('AP1-4-1-')).slice(0, 3);
    assert.equal(ids.length, 3);
    const k = Object.fromEntries(ids.map((id) => [id, aussagenIm(prompts[id].text)]));
    const api = falscheApi((modell, id, a) => {
      assert.ok(!a.params.messages[0].content.includes('## So läuft unsere Sitzung'));
      if (modell === SCHREIBER) return { ergaenzungen: id === ids[0] ? [eintrag(k[id][0]), eintrag(k[id][1])] : id === ids[1] ? [eintrag(k[id][0])] : [] };
      assert.equal(modell, PRUEFER);
      assert.deepEqual(a.params.output_config, { effort: 'high' });
      if (id === ids[0]) return { urteile: [{ aussage: k[id][0], urteil: 'ok', grund: '' }, { aussage: k[id][1], urteil: 'ablehnen', grund: 'unsicher' }], uebersehen: [], stoffmeldungen: [] };
      if (id === ids[1]) return { urteile: [{ aussage: k[id][0], urteil: 'korrigiert', grund: 'Begriff', titel: 'Besser', schritte: ['Erst A.', 'Dann B.', 'Zuletzt C.'], vereinfacht: 'Sonderfälle fehlen' }], uebersehen: [], stoffmeldungen: [] };
      if (id !== ids[2]) return { urteile: [], uebersehen: [], stoffmeldungen: [] };
      return { urteile: [], uebersehen: [{ aussage: k[id][0], hinweis: 'Ablauf fehlt' }], stoffmeldungen: [{ aussage: k[id][0], meldung: 'veraltet' }] };
    }, { ersteAnmeldungScheitert: true });
    const zeilen = [];
    const umgebung = { wurzel: tmp, fetch: api.fetch, key: 'test-schluessel', log: (z) => zeilen.push(z), pause: async () => {} };
    const filter = ids[0].split('-').slice(0, 3).join('-'); // Block AP1-4-1
    assert.equal(await haupt(['start', filter], { ...umgebung, key: undefined }), 1); // ohne Schlüssel kein Start
    assert.equal(await haupt(['start', ids[0]], umgebung), 0);
    assert.equal(await haupt(['start', ids[1]], umgebung), 1); // ein Lauf ist offen
    fs.rmSync(path.join(tmp, '.ablauf'), { recursive: true });
    const alleImBlock = Object.keys(prompts).filter((id) => id.startsWith(`${filter}-`));
    assert.equal(await haupt(['start', filter.toLowerCase()], umgebung), 0, zeilen.join(' / '));
    assert.equal(api.batches.get('msgbatch_2').anfragen.length, alleImBlock.length);
    assert.equal(await haupt(['einarbeiten'], umgebung), 1); // noch kein Bericht
    assert.equal(await haupt(['weiter', 'warten'], umgebung), 0);
    assert.equal(api.batches.size, 3);
    // die zweite Anmeldeart wurde gemerkt, der Schlüssel ging nur an die API
    assert.equal(JSON.parse(fs.readFileSync(path.join(tmp, '.ablauf', 'lauf.json'), 'utf8')).kopf, 1);
    assert.ok(api.aufrufe.every((a) => a.url.startsWith('https://api.anthropic.com/')));
    const bericht = fs.readdirSync(path.join(tmp, 'inhalt', 'lernprompts')).find((d) => d.startsWith('_Ablauf-Bericht_') && d.endsWith(`_${filter}.md`));
    const text = fs.readFileSync(path.join(tmp, 'inhalt', 'lernprompts', bericht), 'utf8');
    for (const s of ['Ergänzungen freigegeben: 2 (davon 1 vom Prüfer korrigiert), abgelehnt: 1', 'Vom Prüfer als fehlend gemeldet: 1, Stoff-Meldungen: 1, Fehler: 0', 'Grund: unsicher', 'Vom Prüfer korrigiert: Begriff', '## Ohne Befund']) assert.ok(text.includes(s), s);
    // vor dem Einarbeiten ist kein Prompt geändert
    for (const id of alleImBlock) assert.equal(fs.readFileSync(path.join(tmp, prompts[id].datei), 'utf8'), prompts[id].text, id);
    assert.equal(await haupt(['einarbeiten'], umgebung), 0);
    const nach = (id) => fs.readFileSync(path.join(tmp, prompts[id].datei), 'utf8');
    assert.equal(nach(ids[0]), setzeAblaeufeEin(prompts[ids[0]].text, [eintrag(k[ids[0]][0])]));
    assert.ok(nach(ids[1]).includes(`- ${k[ids[1]][0]} – Besser: (1) Erst A. (2) Dann B. (3) Zuletzt C. Vereinfacht: Sonderfälle fehlen.`));
    for (const id of alleImBlock.filter((x) => !ids.slice(0, 2).includes(x))) assert.equal(nach(id), prompts[id].text, id);
    // Eingearbeitetes kommt beim nächsten Start nicht wieder dran, mit „neu“ schon
    assert.equal(await haupt(['start', filter], umgebung), 0);
    assert.equal(api.batches.size, 3);
    assert.equal(await haupt(['start', filter, 'neu'], umgebung), 0);
    assert.equal(api.batches.get('msgbatch_4').anfragen.length, alleImBlock.length);
    assert.ok(!api.batches.get('msgbatch_4').anfragen.some((a) => a.params.messages[0].content.includes(ABSCHNITT)));
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

test('Direkter Lauf ohne Batch: gleiche Auswertung, voller Preis, Bericht sofort', async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ablauf-'));
  try {
    kopiereOhneAblaeufe(tmp);
    const ids = Object.keys(prompts).filter((id) => id.startsWith('AP1-4-1-')).slice(0, 2);
    const k = Object.fromEntries(ids.map((id) => [id, aussagenIm(prompts[id].text)]));
    const api = falscheApi((modell, id, a) => {
      assert.equal(a.params.max_tokens, 16000);
      if (modell === SCHREIBER) return { ergaenzungen: id === ids[0] ? [eintrag(k[id][0])] : [] };
      return { urteile: id === ids[0] ? [{ aussage: k[id][0], urteil: 'ok', grund: '' }] : [], uebersehen: [], stoffmeldungen: [] };
    }, { direktIds: ids });
    const zeilen = [];
    const umgebung = { wurzel: tmp, fetch: api.fetch, key: 'test-schluessel', log: (z) => zeilen.push(z), pause: async () => {} };
    assert.equal(await haupt(['direkt', ids[0]], umgebung), 0, zeilen.join(' / '));
    assert.equal(api.batches.size, 0);
    assert.equal(api.aufrufe.length, 2);
    const lauf = JSON.parse(fs.readFileSync(path.join(tmp, '.ablauf', 'lauf.json'), 'utf8'));
    assert.deepEqual([lauf.phase, lauf.direkt, lauf.nutzung.schreiber.ein, lauf.nutzung.pruefer.aus], ['bericht', true, 4000, 1000]);
    const text = fs.readFileSync(path.join(tmp, lauf.bericht), 'utf8');
    // 4000 ein / 1000 aus: Schreiber 0,032 + 0,04 = 0,07 $, Prüfer 0,016 + 0,02 = 0,04 $ – ohne Batch-Rabatt
    for (const s of ['Ergänzungen freigegeben: 1 (davon 0 vom Prüfer korrigiert)', 'direkt, voller Preis', '= 0,07 $', '= 0,04 $']) assert.ok(text.includes(s), s);
    assert.equal(fs.readFileSync(path.join(tmp, prompts[ids[0]].datei), 'utf8'), prompts[ids[0]].text);
    assert.equal(await haupt(['einarbeiten'], umgebung), 0);
    assert.equal(fs.readFileSync(path.join(tmp, prompts[ids[0]].datei), 'utf8'), setzeAblaeufeEin(prompts[ids[0]].text, [eintrag(k[ids[0]][0])]));
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

test('Prompts, die den Abschnitt schon haben: Entfernen und Einsetzen sind genau gegenläufig, ein Start überspringt sie', async () => {
  const mit = Object.entries(ladeLernprompts(wurzel).prompts).filter(([, p]) => p.text.split('\n').includes(ABSCHNITT));
  for (const [id, p] of mit) {
    const zeilen = p.text.split('\n');
    const a = zeilen.indexOf(ABSCHNITT);
    let e = a + 1;
    while (zeilen[e].startsWith('- ')) e++;
    assert.ok(e > a + 1 && zeilen[e] === '', id);
    assert.equal(entferneAblaeufe(p.text), prompts[id].text, id);
    assert.ok(!prompts[id].text.includes(ABSCHNITT), id);
  }
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ablauf-'));
  try {
    kopiereOhneAblaeufe(tmp);
    const [id, anderer] = Object.keys(prompts).filter((x) => x.startsWith('AP1-4-1-'));
    const vorher = setzeAblaeufeEin(prompts[id].text, [eintrag(aussagenIm(prompts[id].text)[0])]);
    fs.writeFileSync(path.join(tmp, prompts[id].datei), vorher);
    const api = falscheApi(() => ({ ergaenzungen: [], urteile: [], uebersehen: [], stoffmeldungen: [] }), { direktIds: [id, anderer] });
    const zeilen = [];
    const umgebung = { wurzel: tmp, fetch: api.fetch, key: 'test-schluessel', log: (z) => zeilen.push(z), pause: async () => {} };
    // ohne Merkzettel in .ablauf/: der Abschnitt im Prompt reicht, damit der Stichpunkt nicht noch einmal läuft
    assert.equal(await haupt(['direkt', id], umgebung), 0);
    assert.equal(api.aufrufe.length, 0, zeilen.join(' / '));
    assert.equal(fs.readFileSync(path.join(tmp, prompts[id].datei), 'utf8'), vorher);
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});
