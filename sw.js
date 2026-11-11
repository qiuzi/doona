const PREFIX = `doona-shell:${self.registration.scope}:`;
// The page reads the same build from index.html, to tell whether this worker taking it over is a new build.
const BUILD = '380e7fd1cef8f0a7';
const CACHE = PREFIX + BUILD;
const PRECACHE = ["assets/AddCircle-Cz1tfIif.js","assets/AppearanceControls-BstXwgog.js","assets/AreaChart-BPJdAI2-.js","assets/AreaCurve-DQSHOSpG.js","assets/BackendText-Cn5Ha-H6.js","assets/CardView-BfaIhEfM.js","assets/Checkbox-DBv0beoi.js","assets/CheckboxSet-aoMrHYfD.js","assets/CodeEditor-BsjpNJ_F.js","assets/Config-Bs0U8_Ut.js","assets/Connections-wsThEFPN.js","assets/Copy-icsdrbyj.js","assets/Coverage-BCEZoNAc.js","assets/DaeCode-DEjXqvav.js","assets/Delete-BaQJA4JK.js","assets/Dns-BLzIHFU_.js","assets/Dns-CsAXSf3H.css","assets/Donut-Bkrm5673.js","assets/Editors-Br7xuhpr.js","assets/Editors-rPgk_VZK.css","assets/Events-CmuGlkpe.js","assets/FlagPicker-Dnf7Mqof.js","assets/Flows-BekA1vQh.css","assets/Flows-CDCv5dzA.js","assets/GridList-BoNe-jR8.js","assets/ItemText-L9PhRmhm.js","assets/LinkOut-XZbTrsvQ.js","assets/Login-C7M9snWZ.js","assets/Logs-BIYPy_EZ.js","assets/ManualFields-BIMzW7vv.js","assets/ModeReadOnlyHint-wPIa4nQJ.js","assets/NodePath-CtBWgfP5.js","assets/Nodes-Bo7tKF0B.js","assets/Nodes-CM_U6MZ3.css","assets/NumberField-CboRQxv_.js","assets/Overview-CI1iY1Hn.js","assets/Policies-Cod8R5J8.js","assets/Rules-BBvZiV01.js","assets/SearchDialog-DngTrDvb.js","assets/SearchList-ByczQpC5.js","assets/SearchSelect-DRW-U-NG.js","assets/Select-J0CrzT8q.js","assets/Settings-3YIXxSex.js","assets/Settings-BVpmQMTB.css","assets/Sparkline-CCxQ7tdC.js","assets/SubscriptionFields-ClTBkFBt.js","assets/Table-CvlXTjlZ.js","assets/Tabs-Dl13ZNem.js","assets/Tag-uG8X8W7h.js","assets/TimeCell-ADN5am06.js","assets/Trace-BrGZaxT9.js","assets/TwemojiCountryFlags-Bymva2JV.woff2","assets/Virtualizer-DEPntUeR.js","assets/WallpaperSettings-D8D90mX2.js","assets/XhttpOptions-DbXGQuLq.js","assets/_commonjsHelpers-CXUWDbkB.js","assets/activity-CgcM8uHz.css","assets/activity-Cky4lytI.js","assets/antd-BTVob2XE.css","assets/arco-DnDQV30N.css","assets/array-C0VuvQyb.js","assets/auth-Db8XUl10.js","assets/auth-Dx0B5HCj.js","assets/catppuccin-CFfx8ddQ.css","assets/daeTokens-BVtuNnWZ.js","assets/duck-night-CbKHyiul.webp","assets/files-Dt8K7QfP.js","assets/flows-B9XiMyPH.js","assets/fonts-C5_wsAqZ.css","assets/geodata-CvcFemyc.js","assets/geodataUpdate-Be412XY2.js","assets/glass-BcMm4w7K.js","assets/glass-piYllnzE.css","assets/gorges-dark-FlgXSNn1.webp","assets/gorges-light-DCWkLX37.webp","assets/groupFilters-CeytRBI5.js","assets/halloween-Dfny7j3b.js","assets/halloween-e3DfiasY.css","assets/impact-B8feJDtJ.css","assets/index-CjG7Pdf8.js","assets/index-DUM-iwa2.js","assets/index-DdIDwpAM.css","assets/ipLookup-BYorpVJi.css","assets/ipLookup-DxpcjaOy.js","assets/kary-pGa0AxYi.css","assets/labels-D8xxfRTQ.js","assets/lake-dark-B_VaUlAe.webp","assets/lake-light-oWll36-V.webp","assets/lens-BMneTJKP.js","assets/limitHint-DMKF6dxb.js","assets/logo-CKC46m8V.svg","assets/logo-obi05X1B.svg","assets/logs-Bw-KlVmx.js","assets/match.worker-B2aIccpg.js","assets/nav-Bcu-jEg6.js","assets/nav-jIomSF-2.js","assets/nodes-CIvjWbiW.js","assets/nord-BE7QITf9.css","assets/outbounds-CHHKYpcs.js","assets/paletteSheet-Vc0PGoNW.js","assets/paletteSheets-Bf5fGVE_.js","assets/probe-Yokz_pdT.js","assets/qiangguo-CTOUSOCk.css","assets/recorder-BHyqDNp5.js","assets/rule-TdOAuJe6.js","assets/semi-DGpddBEP.css","assets/square-dark-CG0rwsS1.webp","assets/square-light-OU6dsCf9.webp","assets/subscriptionEntries-DM97iOYN.js","assets/taishan-dark-BI3cd4fj.webp","assets/taishan-light-Dip0HmJZ.webp","assets/useGridSelectionCheckbox-COh3-yxx.js","assets/useQuickRule-DKKQu2K5.js","assets/vendor-editor-50h2cCk6.js","assets/vendor-react-64fcanlc.js","assets/wall-dark-DCO0xUUO.webp","assets/wall-light-BYfte2Bi.webp","assets/wallpaper-CEC7gitM.js","index.html"];
// Each language's catalogue and stylesheets in this build, cached only for a language a reader uses. A partial
// language's list holds the reference language's files too, since it loads them.
const LANGUAGES = {"zh-TW":["assets/fonts-tc-D9rvq3k7.css","assets/locale-zh-TW-activity-BRVZNWfL.js","assets/locale-zh-TW-core-CXhgGZht.js","assets/locale-zh-TW-rest-CXx-Z81P.js"],"zh-CN":["assets/fonts-sc-Dyn9aW84.css","assets/locale-zh-CN-activity-DAFdFOBw.js","assets/locale-zh-CN-core-Bee1WHW4.js","assets/locale-zh-CN-rest-DiGZn2xh.js"],"en":["assets/locale-en-activity-aTilNtlS.js","assets/locale-en-core-DaThY8z_.js","assets/locale-en-rest-Dt7_TEKO.js"]};
// The mock backend's chunk, cached only for a page that runs on it.
const MOCK = ["assets/index-VLqPp7LF.js"];
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
