const PREFIX = `doona-shell:${self.registration.scope}:`;
// The page reads the same build from index.html, to tell whether this worker taking it over is a new build.
const BUILD = '8c0588640ec43b3a';
const CACHE = PREFIX + BUILD;
const PRECACHE = ["assets/AddCircle-2y5jrdcE.js","assets/AppearanceControls-BJhbBjrJ.js","assets/AreaChart-Bblyu-rE.js","assets/AreaCurve-DQSHOSpG.js","assets/BackendText-BzTWLjuo.js","assets/CardView-3TSMAgRP.js","assets/ChainFields-CTnnXZAq.js","assets/Checkbox-DylgX6j7.js","assets/CheckboxSet-GZ-d3iAd.js","assets/CodeEditor-pHhioEaS.js","assets/Config-5Y4wcfOQ.js","assets/Connections-CEImC7NR.js","assets/Copy-CmyoPz3V.js","assets/Coverage-BAP0S0Oz.js","assets/DaeCode-DEjXqvav.js","assets/Delete-BWI-DVqE.js","assets/Dns-CsAXSf3H.css","assets/Dns-DHU34Fyy.js","assets/Donut-DZG_pRQW.js","assets/Editors-BQ44e73P.js","assets/Editors-rPgk_VZK.css","assets/Events-T_JxyXXC.js","assets/FlagPicker-j7ma99-d.js","assets/Flows-7BA0br5a.js","assets/Flows-CFNotQUH.css","assets/GridList-G1CfB-ZT.js","assets/ItemText-D-wXBrsj.js","assets/LinkOut-C_Et0TXJ.js","assets/Login-CAcKMpzL.js","assets/Logs-CLnVYEB3.js","assets/ManualFields-COSb0GS1.js","assets/ModeReadOnlyHint-7-5ptXm6.js","assets/NodePath-Bv-iz8ej.js","assets/Nodes-BcorxTnp.js","assets/Nodes-CM_U6MZ3.css","assets/NumberField-B1YBUBvl.js","assets/Overview-BEIKSOVV.js","assets/Policies-Bl1jVCED.js","assets/Rules-Dbtoq38W.js","assets/SearchDialog-DFYGnaP8.js","assets/SearchList-CmPA29Yq.js","assets/SearchSelect-CCVlMlGo.js","assets/Select-JqGRgdZq.js","assets/Settings-BVpmQMTB.css","assets/Settings-CduRpZRf.js","assets/Sparkline-MFOr1kUL.js","assets/SubscriptionFields-Bueyticw.js","assets/Table-BWw9rIOl.js","assets/Tabs-D9EXYmg3.js","assets/Tag-CbsD09q4.js","assets/TimeCell-CsaUNJSu.js","assets/Trace-Beso9JYf.js","assets/TwemojiCountryFlags-Bymva2JV.woff2","assets/Virtualizer-CDqncCfl.js","assets/WallpaperSettings-Du4q86ZG.js","assets/XhttpOptions-DVC8EVP0.js","assets/_commonjsHelpers-CXUWDbkB.js","assets/activity-CFz9Lwt5.js","assets/activity-Dh87vlBh.css","assets/antd-BTVob2XE.css","assets/arco-DnDQV30N.css","assets/array-C0VuvQyb.js","assets/auth-BeQQuY-M.js","assets/auth-DPS-a4fO.js","assets/catppuccin-CFfx8ddQ.css","assets/daeTokens-BVtuNnWZ.js","assets/duck-night-CbKHyiul.webp","assets/files-Dt8K7QfP.js","assets/flows-Ca7ykvht.js","assets/fonts-C5_wsAqZ.css","assets/geodata-CvcFemyc.js","assets/geodataUpdate-BYRa68HA.js","assets/glass-BcMm4w7K.js","assets/glass-piYllnzE.css","assets/gorges-dark-FlgXSNn1.webp","assets/gorges-light-DCWkLX37.webp","assets/groupFilters-z2MX9NDp.js","assets/halloween-Dfny7j3b.js","assets/halloween-e3DfiasY.css","assets/impact-B8feJDtJ.css","assets/index-CQHYBvmE.css","assets/index-DUM-iwa2.js","assets/index-XT3rbv5d.js","assets/ipLookup-5hKuP46W.js","assets/ipLookup-BYorpVJi.css","assets/kary-pGa0AxYi.css","assets/labels-D8xxfRTQ.js","assets/lake-dark-B_VaUlAe.webp","assets/lake-light-oWll36-V.webp","assets/lens-BMneTJKP.js","assets/limitHint-DM5OFy7S.js","assets/logo-CKC46m8V.svg","assets/logo-obi05X1B.svg","assets/logs-vUOf60Z6.js","assets/match.worker-B2aIccpg.js","assets/nav-BwFIzn_J.js","assets/nav-feJGP75T.js","assets/nodes-BC5mCR8j.js","assets/nord-BE7QITf9.css","assets/outbounds-nZ9nCivV.js","assets/paletteSheet-Vc0PGoNW.js","assets/paletteSheets-Bf5fGVE_.js","assets/probe-Ch1tEK9O.js","assets/qiangguo-CTOUSOCk.css","assets/recorder-BHyqDNp5.js","assets/rule-DZUKLdb6.js","assets/semi-DGpddBEP.css","assets/square-dark-CG0rwsS1.webp","assets/square-light-OU6dsCf9.webp","assets/subscriptionEntries-DH6ZXI8l.js","assets/taishan-dark-BI3cd4fj.webp","assets/taishan-light-Dip0HmJZ.webp","assets/useGridSelectionCheckbox-CCiGaLHG.js","assets/useQuickRule-rnOtMdgD.js","assets/vendor-editor-50h2cCk6.js","assets/vendor-react-64fcanlc.js","assets/wall-dark-DCO0xUUO.webp","assets/wall-light-BYfte2Bi.webp","assets/wallpaper-CEC7gitM.js","index.html"];
// Each language's catalogue and stylesheets in this build, cached only for a language a reader uses. A partial
// language's list holds the reference language's files too, since it loads them.
const LANGUAGES = {"zh-TW":["assets/fonts-tc-D9rvq3k7.css","assets/locale-zh-TW-activity-B4FjBL_G.js","assets/locale-zh-TW-core-DUIVLsYf.js","assets/locale-zh-TW-rest-BCiiZaKK.js"],"zh-CN":["assets/fonts-sc-Dyn9aW84.css","assets/locale-zh-CN-activity--3M_cvyC.js","assets/locale-zh-CN-core-D8hHJVk2.js","assets/locale-zh-CN-rest-PXwz-ehW.js"],"en":["assets/locale-en-activity-DciTGa2i.js","assets/locale-en-core-B5pEqoG8.js","assets/locale-en-rest-DSXBo_3V.js"]};
// The mock backend's chunk, cached only for a page that runs on it.
const MOCK = ["assets/index-DRfIll7B.js"];
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
