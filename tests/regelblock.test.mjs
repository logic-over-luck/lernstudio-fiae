// Tests für tools/regelblock.mjs: Der Regelblock („## So läuft unsere Sitzung“ bis vor „## Stoff“) steht je Raum in
// inhalt/lernprompts/<RAUM>/_regelblock.md und wird von dort in alle Prompts des Raums geschrieben.
// Gearbeitet wird auf einer Kopie von inhalt/lernprompts/ in einem Temp-Ordner.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ladeLernprompts, RAEUME } from '../tools/inhalt.mjs';
import { teileRegelblock, pruefeRegelblock, setzeRegelblockEin, leseRegelblockAus, regelblockPfad, REGELBLOCK_DATEI } from '../tools/regelblock.mjs';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Kopie der Lernprompts; fn bekommt die Wurzel der Kopie
function mitKopie(fn) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'regelblock-'));
  try {
    fs.cpSync(path.join(wurzel, 'inhalt', 'lernprompts'), path.join(tmp, 'inhalt', 'lernprompts'), { recursive: true });
    return fn(tmp);
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}
const lies = (w, datei) => fs.readFileSync(path.join(w, datei), 'utf8');
const dateienVon = (w, raum) =>
  Object.entries(ladeLernprompts(w).prompts)
    .filter(([id]) => id.startsWith(`${raum}-`))
    .map(([, p]) => p.datei);

test('Im Repo hat jeder Prompt den Regelblock aus der _regelblock.md seines Raums', () => {
  const erg = pruefeRegelblock(wurzel);
  assert.deepEqual(
    erg.map((e) => [e.raum, e.zahl, e.fehler, e.abweichler]),
    [
      ['AP1', 124, [], []],
      ['PB1', 76, [], []],
      ['PB2', 23, [], []],
      ['WISO', 70, [], []],
    ],
  );
});

test('_regelblock.md wird nicht als Lernprompt geladen (der Build lässt sie weg)', () => {
  for (const r of RAEUME) assert.ok(fs.existsSync(path.join(wurzel, regelblockPfad(r))), r);
  const { prompts } = ladeLernprompts(wurzel);
  assert.equal(Object.keys(prompts).length, 293);
  assert.ok(!Object.values(prompts).some((p) => p.datei.endsWith(REGELBLOCK_DATEI)));
});

test('Zerlegen: Kopf + Regelblock + Rest ergibt wieder den Prompt', () => {
  const text = 'Kopf 1\nThema: A › B\n\n## So läuft unsere Sitzung\n\nRegeln.\n\n## Stoff: B\n\nZiel: …\n\n## Lehrnotiz: B\n';
  const t = teileRegelblock(text);
  assert.deepEqual(t, { kopf: 'Kopf 1\nThema: A › B\n\n', block: '## So läuft unsere Sitzung\n\nRegeln.\n\n', rest: '## Stoff: B\n\nZiel: …\n\n## Lehrnotiz: B\n' });
  assert.equal(t.kopf + t.block + t.rest, text);
  assert.equal(teileRegelblock('Kopf\n\n## Stoff: B\n'), null);
  assert.equal(teileRegelblock('Kopf\n\n## So läuft unsere Sitzung\n\nRegeln.\n'), null);
});

test('Einsetzen ändert nur den Regelblock: Kopf, Stoff, Lehrnotiz und Material bleiben zeichengleich', () => {
  mitKopie((tmp) => {
    const dateien = dateienVon(tmp, 'PB2');
    assert.equal(dateien.length, 23);
    const vorher = new Map(RAEUME.flatMap((r) => dateienVon(tmp, r)).map((d) => [d, lies(tmp, d)]));
    const sql = dateien.find((d) => path.basename(d).startsWith('PB2-5-1-1 '));
    assert.ok(teileRegelblock(vorher.get(sql)).rest.includes('\n**Material:**\nTabellenmodell „VeloPlan“'));

    // Vorlage ändern (ohne Zeilenumbruch am Ende gespeichert – das darf nichts ausmachen)
    const vorlage = lies(tmp, regelblockPfad('PB2'));
    const neu = vorlage.replace('Antworte auf Deutsch.', '- Neue Testregel.\n\nAntworte auf Deutsch.').trimEnd();
    assert.notEqual(neu, vorlage.trimEnd());
    fs.writeFileSync(path.join(tmp, regelblockPfad('PB2')), neu);

    // vor dem Einsetzen: alle 23 PB2-Prompts weichen ab, die anderen Räume nicht
    const davor = pruefeRegelblock(tmp);
    assert.deepEqual(davor.map((e) => e.abweichler.length), [0, 0, 23, 0]);
    assert.deepEqual(davor.flatMap((e) => e.fehler), []);

    const erg = setzeRegelblockEin(tmp, 'PB2');
    assert.deepEqual(erg.fehler, []);
    assert.equal(erg.geaendert.length, 23);
    for (const d of dateien) {
      const alt = teileRegelblock(vorher.get(d));
      const jetzt = teileRegelblock(lies(tmp, d));
      assert.equal(jetzt.kopf, alt.kopf, d);
      assert.equal(jetzt.rest, alt.rest, d);
      assert.equal(jetzt.block, `${neu}\n\n`, d);
      assert.equal(lies(tmp, d), alt.kopf + `${neu}\n\n` + alt.rest, d);
    }
    // andere Räume unberührt, danach stimmt wieder alles; ein zweites Einsetzen ändert nichts mehr
    for (const [d, text] of vorher) if (!d.includes('/PB2/')) assert.equal(lies(tmp, d), text, d);
    assert.deepEqual(pruefeRegelblock(tmp).flatMap((e) => [...e.fehler, ...e.abweichler]), []);
    assert.equal(setzeRegelblockEin(tmp, 'PB2').geaendert.length, 0);
  });
});

test('Ein Prompt mit abweichendem Regelblock wird gemeldet – und nur der', () => {
  mitKopie((tmp) => {
    const datei = dateienVon(tmp, 'WISO')[5];
    const text = lies(tmp, datei);
    const t = teileRegelblock(text);
    fs.writeFileSync(path.join(tmp, datei), t.kopf + t.block.replace('Antworte auf Deutsch.', 'Antworte auf Deutsch!') + t.rest);
    const erg = pruefeRegelblock(tmp, ['WISO']);
    assert.deepEqual(erg, [{ raum: 'WISO', zahl: 70, fehler: [], abweichler: [datei] }]);
    // Eine Änderung im Stoff oder in der Lehrnotiz ist kein Fall für diesen Check
    fs.writeFileSync(path.join(tmp, datei), t.kopf + t.block + t.rest.replace('## Lehrnotiz: ', '## Lehrnotiz: X '));
    assert.deepEqual(pruefeRegelblock(tmp, ['WISO'])[0].abweichler, []);
  });
});

test('Fehlende oder kaputte Vorlage: Fehler, und Einsetzen ändert nichts', () => {
  mitKopie((tmp) => {
    const ziel = path.join(tmp, regelblockPfad('PB1'));
    const dateien = dateienVon(tmp, 'PB1');
    const vorher = dateien.map((d) => lies(tmp, d));
    const gleich = () => assert.deepEqual(dateien.map((d) => lies(tmp, d)), vorher);

    fs.writeFileSync(ziel, 'Ohne Überschrift.\n');
    assert.match(pruefeRegelblock(tmp, ['PB1'])[0].fehler[0], /erste Zeile muss „## So läuft unsere Sitzung“ sein/);
    assert.equal(setzeRegelblockEin(tmp, 'PB1').geaendert.length, 0);
    gleich();

    // eine zweite „## “-Überschrift würde die Aufteilung in Stoff und Lehrnotiz stören
    fs.writeFileSync(ziel, '## So läuft unsere Sitzung\n\nRegeln.\n\n## Stoff: falsch\n');
    assert.match(setzeRegelblockEin(tmp, 'PB1').fehler[0], /weitere Überschrift „## Stoff: falsch“/);
    gleich();

    fs.rmSync(ziel);
    assert.deepEqual(pruefeRegelblock(tmp, ['PB1'])[0].fehler, ['inhalt/lernprompts/PB1/_regelblock.md fehlt']);
    assert.deepEqual(setzeRegelblockEin(tmp, 'PB1').fehler, ['inhalt/lernprompts/PB1/_regelblock.md fehlt']);
    gleich();
  });
});

test('Auslesen legt die Vorlage nur an, wenn alle Prompts des Raums denselben Regelblock haben', () => {
  mitKopie((tmp) => {
    const ziel = path.join(tmp, regelblockPfad('AP1'));
    const original = fs.readFileSync(ziel, 'utf8');
    assert.match(leseRegelblockAus(tmp, 'AP1').fehler[0], /gibt es schon/);

    fs.rmSync(ziel);
    const erg = leseRegelblockAus(tmp, 'AP1');
    assert.deepEqual([erg.angelegt, erg.zahl, erg.fehler], [true, 124, []]);
    assert.equal(fs.readFileSync(ziel, 'utf8'), original);

    // ein Abweichler: Abbruch, die Datei wird genannt, nichts wird angelegt
    fs.rmSync(ziel);
    const datei = dateienVon(tmp, 'AP1')[7];
    fs.writeFileSync(path.join(tmp, datei), lies(tmp, datei).replace('Antworte auf Deutsch.', 'Antworte auf Deutsch, bitte.'));
    const ab = leseRegelblockAus(tmp, 'AP1');
    assert.equal(ab.angelegt, false);
    assert.match(ab.fehler[0], /2 verschiedene Regelblöcke; 123 von 124 Prompts sind gleich/);
    assert.deepEqual(ab.fehler.slice(1), [`  ${datei}`]);
    assert.ok(!fs.existsSync(ziel));
  });
});
