const PREFIX = `doona-shell:${self.registration.scope}:`;
// The page reads the same build from index.html, to tell whether this worker taking it over is a new build.
const BUILD = '8a19ceddccb94367';
const CACHE = PREFIX + BUILD;
const PRECACHE = ["assets/AddCircle-S7sdvzLk.js","assets/AppearanceControls-DNFrgnzD.js","assets/AreaChart-D_Y692v_.js","assets/AreaCurve-DQSHOSpG.js","assets/BackendText-B14D2cMW.js","assets/CardView-DAJRuz7B.js","assets/Checkbox-CnrragOh.js","assets/CheckboxSet-D451sHfT.js","assets/CodeEditor-UBA4n1KZ.js","assets/Config-Bd8ImKy-.js","assets/Connections-Bmep1tOD.js","assets/Copy-CYJ9g3WK.js","assets/Coverage-CDSiLOH8.js","assets/DaeCode-DEjXqvav.js","assets/Delete-BL51Jefr.js","assets/Dns-Clt-E-j0.js","assets/Dns-CsAXSf3H.css","assets/Donut-DEBAuI4y.js","assets/Editors-HZHLFSvi.js","assets/Editors-rPgk_VZK.css","assets/Events-17x-7uQc.js","assets/FlagPicker-DtWtFFw3.js","assets/Flows-CFNotQUH.css","assets/Flows-CFs1AyfA.js","assets/GridList-BDr03tHN.js","assets/ItemText-DfGB5jD-.js","assets/LinkOut-BmHmFgY_.js","assets/Login-CTusBLxr.js","assets/Logs-D1f6NwsR.js","assets/ManualFields-BSxVS2SE.js","assets/ModeReadOnlyHint-B8hdDtWY.js","assets/NodePath-BMIM6AQl.js","assets/Nodes-CM_U6MZ3.css","assets/Nodes-FX9i9E-o.js","assets/NumberField-CFqW0_c3.js","assets/Overview-q4NcyFXy.js","assets/Policies-cQ9vNbcD.js","assets/Rules-BZYrFKyY.js","assets/SearchDialog-BUnfmhgx.js","assets/SearchList-D9_RzQor.js","assets/SearchSelect-BfMCHi8N.js","assets/Select-CDo0zyKY.js","assets/Settings-BVpmQMTB.css","assets/Settings-BXLZiAwG.js","assets/Sparkline-DKLNDclN.js","assets/SubscriptionFields-sLpI5J6B.js","assets/Table-BByCcpi-.js","assets/Tabs-CPERMF_e.js","assets/Tag-VVc9_-Yi.js","assets/TimeCell-arGNA5Mc.js","assets/Trace-D_RP5gba.js","assets/TwemojiCountryFlags-Bymva2JV.woff2","assets/Virtualizer-CyUTkKn1.js","assets/WallpaperSettings-CkamF6JX.js","assets/XhttpOptions-OTov9aH3.js","assets/_commonjsHelpers-CXUWDbkB.js","assets/activity-Dh87vlBh.css","assets/activity-lL2Neviq.js","assets/antd-BTVob2XE.css","assets/arco-DnDQV30N.css","assets/array-C0VuvQyb.js","assets/auth-B2DaHT5_.js","assets/auth-iUxdO9oL.js","assets/catppuccin-CFfx8ddQ.css","assets/daeTokens-BVtuNnWZ.js","assets/duck-night-CbKHyiul.webp","assets/files-Dt8K7QfP.js","assets/flows-Ct_WCK9w.js","assets/fonts-C5_wsAqZ.css","assets/geodata-CvcFemyc.js","assets/geodataUpdate-CEY_cTiD.js","assets/glass-BcMm4w7K.js","assets/glass-piYllnzE.css","assets/gorges-dark-FlgXSNn1.webp","assets/gorges-light-DCWkLX37.webp","assets/groupFilters-D_4kpQM5.js","assets/halloween-Dfny7j3b.js","assets/halloween-e3DfiasY.css","assets/impact-B8feJDtJ.css","assets/index-BSfio2HA.css","assets/index-DHEn6nze.js","assets/index-DUM-iwa2.js","assets/ipLookup-BYorpVJi.css","assets/ipLookup-C5y_pQju.js","assets/kary-pGa0AxYi.css","assets/labels-D8xxfRTQ.js","assets/lake-dark-B_VaUlAe.webp","assets/lake-light-oWll36-V.webp","assets/lens-BMneTJKP.js","assets/limitHint-BklNxP1O.js","assets/logo-CKC46m8V.svg","assets/logo-obi05X1B.svg","assets/logs-CxxepGZt.js","assets/match.worker-B2aIccpg.js","assets/nav-B6HjvxIZ.js","assets/nav-CxsWrvXt.js","assets/nodes-xq2OJS0n.js","assets/nord-BE7QITf9.css","assets/outbounds-CKNXPZDA.js","assets/paletteSheet-Vc0PGoNW.js","assets/paletteSheets-Bf5fGVE_.js","assets/probe-C1fpKruV.js","assets/qiangguo-CTOUSOCk.css","assets/recorder-BHyqDNp5.js","assets/rule-C3UzwlIL.js","assets/semi-DGpddBEP.css","assets/square-dark-CG0rwsS1.webp","assets/square-light-OU6dsCf9.webp","assets/subscriptionEntries-DCjQGkkt.js","assets/taishan-dark-BI3cd4fj.webp","assets/taishan-light-Dip0HmJZ.webp","assets/useGridSelectionCheckbox-nqAbJvuI.js","assets/useQuickRule-Dnz8-iT8.js","assets/vendor-editor-50h2cCk6.js","assets/vendor-react-64fcanlc.js","assets/wall-dark-DCO0xUUO.webp","assets/wall-light-BYfte2Bi.webp","assets/wallpaper-CEC7gitM.js","index.html"];
// Each language's catalogue and stylesheets in this build, cached only for a language a reader uses. A partial
// language's list holds the reference language's files too, since it loads them.
const LANGUAGES = {"zh-TW":["assets/fonts-tc-D9rvq3k7.css","assets/locale-zh-TW-activity-fRKz10-p.js","assets/locale-zh-TW-core-CXhgGZht.js","assets/locale-zh-TW-rest-C043kV6r.js"],"zh-CN":["assets/fonts-sc-Dyn9aW84.css","assets/locale-zh-CN-activity-BJWaMDih.js","assets/locale-zh-CN-core-Bee1WHW4.js","assets/locale-zh-CN-rest-CA3U-MW-.js"],"en":["assets/locale-en-activity-EBNyCYzq.js","assets/locale-en-core-DaThY8z_.js","assets/locale-en-rest-1oBOhp74.js"]};
// The mock backend's chunk, cached only for a page that runs on it.
const MOCK = ["assets/index-C-nG7R6I.js"];
const ROOT = new URL(self.registration.scope);

// A new build takes over on the next online load, including open dashboard tabs.
// Each build records when it was installed, so activation can tell the build it replaces from older ones.
const STAMP = new URL('__installed__', ROOT);
// index.html keeps its name across builds, so it is fetched past the HTTP cache: a caching proxy cannot hand the new
// build an old shell. A file under assets/ is named after its content hash, so the copy the page already loaded through
// the HTTP cache is the same file and is not downloaded again.
const precacheRequest = url => (url.startsWith('assets/') ? url : new Request(url, {cache: 'reload'}));
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then(cache => Promise.all([cache.addAll(PRECACHE.map(precacheRequest)), cache.put(STAMP, new Response(String(Date.now())))]))
      .then(() => self.skipWaiting())
  );
});
// A page loads its catalogue and backend before this worker controls it, so it reports the language it shows and
// whether it runs on the mock, to have them cached.
self.addEventListener('message', event => {
  if (event.data?.build === true) {
    event.ports[0]?.postMessage(BUILD);
    return;
  }
  const lang = event.data?.language;
  const files = [...(typeof lang === 'string' && Object.hasOwn(LANGUAGES, lang) ? LANGUAGES[lang] : []), ...(event.data?.mock === true ? MOCK : [])];
  if (!files.length) return;
  event.waitUntil(caches.open(CACHE).then(cache => Promise.all(files.map(async url => (await cache.match(url, {ignoreVary: true})) ?? cache.add(url)))));
});
// The build just replaced stays: tabs still showing it load their remaining chunks from it until reloaded.
self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      const older = [];
      for (const key of await caches.keys()) {
        if (!key.startsWith(PREFIX) || key === CACHE) continue;
        const stamp = await (await caches.open(key)).match(STAMP);
        older.push({key, installed: stamp ? Number(await stamp.text()) : 0});
      }
      older.sort((a, b) => b.installed - a.installed);
      await Promise.all(older.slice(1).map(({key}) => caches.delete(key)));
      await self.clients.claim();
    })()
  );
});

function hit(response) {
  if (!response) return Response.error();
  const headers = new Headers(response.headers);
  headers.set('x-doona-sw', 'hit');
  return new Response(response.body, {status: response.status, statusText: response.statusText, headers});
}

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== ROOT.origin || /\/api(?:\/|$)/.test(url.pathname) || !url.pathname.startsWith(ROOT.pathname)) return;
  if (url.pathname.startsWith(new URL('lite/', ROOT).pathname)) return;
  const navigation = request.mode === 'navigate';
  if (!navigation && !/^(assets|fonts|icons)\//.test(url.pathname.slice(ROOT.pathname.length))) return;
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      if (navigation) {
        try {
          return await fetch(request);
        } catch {
          return hit(await cache.match(new URL('index.html', ROOT)));
        }
      }
      // A build file is the same for every requester, so a server's Vary: Origin must not turn a cached copy into a miss.
      const response = (await cache.match(request, {ignoreVary: true})) ?? (await caches.match(request, {ignoreVary: true}));
      if (response) return hit(response);
      const fresh = await fetch(request);
      // A host may answer a missing file with the page; caching that would keep the file missing once it is installed.
      if (fresh.ok && fresh.type === 'basic' && !fresh.redirected && !fresh.headers.get('content-type')?.includes('html'))
        await cache.put(request, fresh.clone());
      return fresh;
    })()
  );
});
