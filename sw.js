const PREFIX = `doona-shell:${self.registration.scope}:`;
// The page reads the same build from index.html, to tell whether this worker taking it over is a new build.
const BUILD = '38975788abf579f3';
const CACHE = PREFIX + BUILD;
const PRECACHE = ["assets/AddCircle-WU7OoFGJ.js","assets/AppearanceControls-BdEWzgLh.js","assets/AreaChart-BSqNUk6x.js","assets/AreaCurve-DQSHOSpG.js","assets/BackendText-OcUuAfYE.js","assets/CardView-DTwCONiq.js","assets/Checkbox-CVJCWdXp.js","assets/CheckboxSet-xCkoMrY5.js","assets/CodeEditor-BFwUCPTU.js","assets/Config-B07lanAw.js","assets/Connections-nOI2-dzs.js","assets/Copy-pU5GUaom.js","assets/Coverage-CV9xs1OQ.js","assets/DaeCode-DEjXqvav.js","assets/Delete-Dlt6cyeY.js","assets/Dns-CsAXSf3H.css","assets/Dns-VDJ6dELe.js","assets/Donut-CKeKyuI2.js","assets/Editors-2LX2eUTj.js","assets/Editors-rPgk_VZK.css","assets/Events-DR6oFXEN.js","assets/FlagPicker-Bq9kWK7a.js","assets/Flows-BekA1vQh.css","assets/Flows-DjvyvzF-.js","assets/GridList-DMqxrkIP.js","assets/ItemText-t5bkw6X0.js","assets/LinkOut-BZMdy2Xm.js","assets/Login-CvhrsyLX.js","assets/Logs-AnoOSlOL.js","assets/ManualFields-Bi7bb8Qt.js","assets/ModeReadOnlyHint-ChuVDqOv.js","assets/NodePath-B3N0X9gt.js","assets/Nodes-C5jKaMfB.js","assets/Nodes-CM_U6MZ3.css","assets/NumberField-BkhktS_C.js","assets/Overview-7Tc9xBT2.js","assets/Policies-C6B22L7r.js","assets/Rules-Dq6rYZ0V.js","assets/SearchDialog-B6WQ674U.js","assets/SearchList-CThHxvI9.js","assets/SearchSelect-N7WWEc4k.js","assets/Select-G3Cn_FLo.js","assets/Settings-BVpmQMTB.css","assets/Settings-Blv1H-4r.js","assets/Sparkline-C9DBaxsx.js","assets/SubscriptionFields-Djh3YxDr.js","assets/Table-CCnYhmrb.js","assets/Tabs-C0BY9Tl6.js","assets/Tag-BodvLt_I.js","assets/TimeCell-D4WmH-Oy.js","assets/Trace-lP65X3j2.js","assets/TwemojiCountryFlags-Bymva2JV.woff2","assets/Virtualizer-OB2-nK_4.js","assets/WallpaperSettings-BNDNcoiL.js","assets/XhttpOptions-C5N7y-CX.js","assets/_commonjsHelpers-CXUWDbkB.js","assets/activity-CgcM8uHz.css","assets/activity-D6cs4iWn.js","assets/antd-BTVob2XE.css","assets/arco-DnDQV30N.css","assets/array-C0VuvQyb.js","assets/auth-BH9sZpF8.js","assets/auth-DBxEvbPl.js","assets/catppuccin-CFfx8ddQ.css","assets/daeTokens-BVtuNnWZ.js","assets/duck-night-CbKHyiul.webp","assets/files-Dt8K7QfP.js","assets/flows-CDa9C7-n.js","assets/fonts-C5_wsAqZ.css","assets/geodata-CvcFemyc.js","assets/geodataUpdate-DHil7IIc.js","assets/glass-BcMm4w7K.js","assets/glass-piYllnzE.css","assets/gorges-dark-FlgXSNn1.webp","assets/gorges-light-DCWkLX37.webp","assets/groupFilters-D1a3TDF1.js","assets/halloween-Dfny7j3b.js","assets/halloween-e3DfiasY.css","assets/impact-B8feJDtJ.css","assets/index-CAFZ-w5s.js","assets/index-DUM-iwa2.js","assets/index-DdIDwpAM.css","assets/ipLookup-BYorpVJi.css","assets/ipLookup-DSD4KQ8D.js","assets/kary-pGa0AxYi.css","assets/labels-D8xxfRTQ.js","assets/lake-dark-B_VaUlAe.webp","assets/lake-light-oWll36-V.webp","assets/lens-BMneTJKP.js","assets/limitHint-DXriDvN8.js","assets/logo-CKC46m8V.svg","assets/logo-obi05X1B.svg","assets/logs-BPqkt5oP.js","assets/match.worker-B2aIccpg.js","assets/nav-BRT8F7aW.js","assets/nav-CVxbM-Cl.js","assets/nodes-CfaZbtN_.js","assets/nord-BE7QITf9.css","assets/outbounds-CPZ-2mpC.js","assets/paletteSheet-Vc0PGoNW.js","assets/paletteSheets-Bf5fGVE_.js","assets/probe-xEQaP9oI.js","assets/qiangguo-CTOUSOCk.css","assets/recorder-BHyqDNp5.js","assets/rule-Cf4Xlol9.js","assets/semi-DGpddBEP.css","assets/square-dark-CG0rwsS1.webp","assets/square-light-OU6dsCf9.webp","assets/subscriptionEntries-kGw8eyoA.js","assets/taishan-dark-BI3cd4fj.webp","assets/taishan-light-Dip0HmJZ.webp","assets/useGridSelectionCheckbox-B_uf3_Rw.js","assets/useQuickRule-C9QKX-8Y.js","assets/vendor-editor-50h2cCk6.js","assets/vendor-react-64fcanlc.js","assets/wall-dark-DCO0xUUO.webp","assets/wall-light-BYfte2Bi.webp","assets/wallpaper-CEC7gitM.js","index.html"];
// Each language's catalogue and stylesheets in this build, cached only for a language a reader uses. A partial
// language's list holds the reference language's files too, since it loads them.
const LANGUAGES = {"zh-TW":["assets/fonts-tc-D9rvq3k7.css","assets/locale-zh-TW-activity-OwlmpZI1.js","assets/locale-zh-TW-core-7ufa9rvT.js","assets/locale-zh-TW-rest-DsugrspE.js"],"zh-CN":["assets/fonts-sc-Dyn9aW84.css","assets/locale-zh-CN-activity-oeOXoHOS.js","assets/locale-zh-CN-core-RsaGnxBF.js","assets/locale-zh-CN-rest-TobAgWGm.js"],"en":["assets/locale-en-activity-8ELc1Zfz.js","assets/locale-en-core-Dighhy7A.js","assets/locale-en-rest-DrKNGl6R.js"]};
// The mock backend's chunk, cached only for a page that runs on it.
const MOCK = ["assets/index-BovVZhaQ.js"];
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
