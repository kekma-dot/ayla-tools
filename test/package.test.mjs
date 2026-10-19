import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile, access } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
const root = fileURLToPath(new URL('..', import.meta.url));

test('skills-only package has explicit resources and no executable dependency', async () => {
 const pkg = JSON.parse(await readFile(resolve(root,'package.json'),'utf8'));
 assert.equal(pkg.name,'ayla-tools');
 assert.deepEqual(pkg.pi.extensions,[]);
 assert.deepEqual(pkg.pi.skills,['./skills']);
 assert.equal(pkg.dependencies,undefined);
 const skill=await readFile(resolve(root,'skills/ayla-public-release/SKILL.md'),'utf8');
 assert.match(skill,/name: ayla-public-release/);
 assert.match(skill,/does not certify|do not certify/);
 assert.match(skill,/never publishes merely because this skill is loaded/);
 assert.match(skill,/No force push/);
});

test('both README languages link to shipped resources and a real PNG banner', async () => {
 for (const name of ['README.md','README.ru.md']) {
  const text=await readFile(resolve(root,name),'utf8');
  assert.ok(text.includes(name==='README.md'?'README.ru.md':'README.md'));
  for (const [,target] of text.matchAll(/\]\(([^)]+)\)/g)) {
   if (/^(?:https?:|#)/.test(target)) continue;
   await access(resolve(root,target));
  }
  assert.ok(text.includes('assets/banner.png'));
 }
 const png=await readFile(resolve(root,'assets/banner.png'));
 assert.equal(png.subarray(0,8).toString('hex'),'89504e470d0a1a0a');
 assert.equal(png.readUInt32BE(16)/png.readUInt32BE(20),3);
});

test('actual Pi skill loader accepts one release skill', {skip:!process.env.PI_TEST_SDK_ROOT}, async () => {
 const sdk=await import(pathToFileURL(resolve(process.env.PI_TEST_SDK_ROOT,'dist/index.js')));
 const loaded=sdk.loadSkillsFromDir({dir:resolve(root,'skills'),source:'ayla-tools-check'});
 assert.deepEqual(loaded.diagnostics,[]);
 assert.equal(loaded.skills.length,1);
 assert.equal(loaded.skills[0].name,'ayla-public-release');
});
