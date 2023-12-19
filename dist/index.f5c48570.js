// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hTe8s":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe27fe52f5c48570";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8ZNvh":[function(require,module,exports) {
//import delle funzioni presenti negli altri moduli
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "disp", ()=>disp);
parcelHelpers.export(exports, "prenotazionePerData", ()=>prenotazionePerData);
var _tabellaJs = require("./tabella.js");
var _amministrazioneJs = require("./amministrazione.js");
var _aggiungiJs = require("./aggiungi.js");
var _cacheJs = require("./cache.js");
const saveModifiche = document.getElementById("salvaModifiche");
const saveModal = document.getElementById("saveModal");
const noSaveModal = document.getElementById("noSaveModal");
const mymodal = new bootstrap.Modal("#modalSave");
const tableHead = document.getElementById("tableHeader");
const tableBody = document.getElementById("tableBody");
const modificaDisponibilita = document.getElementById("modificaDisponibilita");
const paginaDiAmministrazione = document.getElementById("visualizzaPaginaAmministrazione");
const buttonSaveModal = document.getElementById("saveModalModifiche");
const aggiungiStanza = document.getElementById("aggiungiStanza");
const nomeStanza = document.getElementById("tipologiaStanza");
const numeroStanze = document.getElementById("numeroStanze");
const nomeStanzaDaEliminare = document.getElementById("nomeStanzaDaEliminare");
const confermaElimina = document.getElementById("confermaElimina");
const indietro = document.getElementById("indietro");
const avanti = document.getElementById("avanti");
const aggiungi = document.getElementById("aggiungi");
const modal = document.getElementById("modalBody");
const date = document.getElementById("date");
date.value = new Date().toISOString().split("T")[0];
const prossimoModal = document.getElementById("prossimoModal");
const select = document.getElementById("select");
const modalIndietro = document.getElementById("modalIndietro");
const modalTogli = document.getElementById("modalTogli");
const modalaggiungi = document.getElementById("modalAggiungi");
const modalSet = document.getElementById("ModalSet");
const numeri = document.getElementById("numeri");
let numeroStanzeMax = 0;
let numeroAttualeStanze = 0;
let scelta = 0;
let dataFinale = 0;
let index = 0;
if (numeroAttualeStanze === 0) modalTogli.disabled = true;
numeri.innerText = numeroAttualeStanze;
date.min = new Date().toISOString().split("T")[0];
let giorni = 0;
let disp = {
    singola: 10,
    doppia: 5,
    tripla: 3
};
let prenotazionePerData = [];
paginaDiAmministrazione.onclick = ()=>{
    //al click del button per modificare la pagina web
    //viene generato l'html
    modificaDisponibilita.innerHTML = (0, _amministrazioneJs.generaModificaQuantita)(disp);
};
buttonSaveModal.onclick = ()=>{
    //alla pressione del button esci e conferma del modal
    //rigenera la tabella con le modifiche apportate
    (0, _tabellaJs.generaTabella)((0, _amministrazioneJs.salvaModifiche)(disp), tableHead, tableBody, (0, _aggiungiJs.sommaData)(giorni));
};
aggiungiStanza.onclick = ()=>{
    //alla pressione del button aggiungi stanza
    //inserisco la stanza nel dizionario disp
    disp[nomeStanza.value] = parseInt(numeroStanze.value);
    nomeStanza.value = "";
    numeroStanze.value = "";
    prenotazionePerData = (0, _tabellaJs.aggiornaPrenotazioni)(disp);
    (0, _tabellaJs.generaTabella)(disp, tableHead, tableBody, (0, _aggiungiJs.sommaData)(giorni));
};
confermaElimina.onclick = ()=>{
    //alla pressione del button conferma elimina stanza
    //viene ricercata la stanza da eliminare, viene restituito poi il nuovo dizionario
    //viene poi rigenerata la tabella modificata
    disp = (0, _amministrazioneJs.generaNuovoDizionario)(nomeStanzaDaEliminare.value, disp);
    for(let i = 0; i < prenotazionePerData.length; i++)prenotazionePerData[i].prenotazioni = (0, _amministrazioneJs.generaNuovoDizionario)(nomeStanzaDaEliminare.value, prenotazionePerData[i].prenotazioni);
    //prenotazionePerData = aggiornaPrenotazioni(disp);
    //console.log(nomeStanzaDaEliminare.value);
    nomeStanzaDaEliminare.value = "";
    console.log(disp);
    console.log(" :");
    console.log(prenotazionePerData);
    (0, _tabellaJs.generaTabella)(disp, tableHead, tableBody, (0, _aggiungiJs.sommaData)(giorni));
//console.log(prenotazionePerData);
};
avanti.onclick = ()=>{
    giorni += 30;
    indietro.disabled = false;
    (0, _tabellaJs.generaTabella)(disp, tableHead, tableBody, (0, _aggiungiJs.sommaData)(giorni)); //genera la tabella iniziale che verrà poi scaricata dalla cache remota
};
indietro.onclick = ()=>{
    giorni -= 30;
    if (giorni == 0) indietro.disabled = true;
    (0, _tabellaJs.generaTabella)(disp, tableHead, tableBody, (0, _aggiungiJs.sommaData)(giorni)); //genera la tabella iniziale che verrà poi scaricata dalla cache remota
};
prossimoModal.onclick = ()=>{
    scelta = select.selectedIndex;
    let dataScelta = date.value.split("-");
    let mese = 0;
    if (parseInt(dataScelta[1]) < 10) mese = dataScelta[1].charAt(1);
    else mese = dataScelta[1];
    dataFinale = dataScelta[2] + "/" + mese + "/" + dataScelta[0];
    index = (0, _tabellaJs.recuperaIndexData)(dataFinale, prenotazionePerData);
    numeroStanzeMax = (0, _aggiungiJs.numMaxStanze)(disp, index, scelta, prenotazionePerData);
    console.log(numeroStanzeMax);
    if (numeroAttualeStanze === numeroStanzeMax - 1 || numeroStanzeMax === 0) modalAggiungi.disabled = true;
};
aggiungi.onclick = ()=>{
    select.innerHTML = (0, _aggiungiJs.valorizzaForm)(disp);
    numeroAttualeStanze = 0;
    numeri.innerText = numeroAttualeStanze;
    modalAggiungi.disabled = false;
    modalTogli.disabled = true;
};
modalTogli.onclick = ()=>{
    modalAggiungi.disabled = false;
    if (numeroAttualeStanze === 1) modalTogli.disabled = true;
    numeroAttualeStanze--;
    numeri.innerText = numeroAttualeStanze;
};
modalAggiungi.onclick = ()=>{
    modalTogli.disabled = false;
    console.log("numero attuale " + numeroAttualeStanze);
    console.log("numero Max " + (numeroStanzeMax - 1));
    if (numeroAttualeStanze === numeroStanzeMax - 1) {
        modalAggiungi.disabled = true;
        console.log("MAX");
    }
    numeroAttualeStanze++;
    numeri.innerText = numeroAttualeStanze;
};
modalSet.onclick = ()=>{
    const stringa = Object.keys(disp)[scelta];
    console.log(Object.keys(disp)[scelta]);
    (0, _aggiungiJs.modificaArray)(index, prenotazionePerData, stringa, numeroAttualeStanze, dataFinale, disp);
    (0, _tabellaJs.generaTabella)(disp, tableHead, tableBody, (0, _aggiungiJs.sommaData)(giorni));
    numeroAttualeStanze = 0;
    numeri.innerText = numeroAttualeStanze;
};
modalIndietro.onclick = ()=>{
    numeroAttualeStanze = 0;
    modalAggiungi.disabled = false;
    modalTogli.disabled = true;
    numeri.innerText = numeroAttualeStanze;
};
saveModifiche.onclick = ()=>{
    (0, _cacheJs.salvaDati)(disp, "disp");
    (0, _cacheJs.salvaDati)(prenotazionePerData, "prenotazionePerData");
    console.log("cliccato");
};
saveModal.onclick = ()=>{
    (0, _cacheJs.salvaDati)(disp, "disp");
    (0, _cacheJs.salvaDati)(prenotazionePerData, "prenotazionePerData");
    console.log("cliccato");
};
setInterval(function() {
    mymodal.show();
}, 3600000);
(0, _cacheJs.recuperaDati)("disp").then((response)=>{
    console.log(JSON.parse(response.result));
    disp = JSON.parse(response.result);
    (0, _tabellaJs.generaTabella)(disp, tableHead, tableBody, (0, _aggiungiJs.sommaData)(giorni));
});
(0, _cacheJs.recuperaDati)("prenotazionePerData").then((response)=>{
    console.log(response);
    prenotazionePerData = JSON.parse(response.result);
    (0, _tabellaJs.generaTabella)(disp, tableHead, tableBody, (0, _aggiungiJs.sommaData)(giorni));
    const numElimina = (0, _cacheJs.controlEvent)(prenotazionePerData);
    if (numElimina !== -1) prenotazionePerData.splice(0, numElimina);
    (0, _cacheJs.salvaDati)(prenotazionePerData, "prenotazionePerData");
}); //generaTabella(disp, tableHead, tableBody, sommaData(giorni));

},{"./tabella.js":"7zTcW","./amministrazione.js":"akawJ","./aggiungi.js":"5kanW","./cache.js":"2qYEs","@parcel/transformer-js/src/esmodule-helpers.js":"47Nxo"}],"7zTcW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "recuperaIndexData", ()=>recuperaIndexData);
parcelHelpers.export(exports, "generaTabella", ()=>generaTabella);
parcelHelpers.export(exports, "aggiornaPrenotazioni", ()=>aggiornaPrenotazioni);
var _scriptJs = require("./script.js");
const colori = {
    rosso: "bg-danger",
    blu: "bg-primary",
    giallo: "bg-warning",
    verde: "bg-success",
    azzurro: "bg-info"
};
/** 
Funzione per creare l'header della tabella
*/ const creaHeaderCompleta = (disp, table)=>{
    let header = "<tr><th>Giorno</th>%CAMERE</tr>";
    const intestazione = "<th>%VALORE</th>";
    const keys = Object.keys(disp); //recupero le chiavi del dizionario
    let html = "";
    //genero il codice html dell'header della tabella
    keys.forEach((key)=>{
        html += intestazione.replace("%VALORE", key);
    });
    header = header.replace("%CAMERE", html);
    table.innerHTML = header; //la inserisco come html
};
/** 
Recupera la data finale da inserire nella tabella
*/ function dataFinale(days, data) {
    let res = new Date(data); //creo l'oggetto data
    res.setDate(res.getDate() + days); //sommo alla data ottenuta il numero di giorni desiderati
    //restituisco la data nel formato gg/mm/yyyy
    return res.getDate() + "/" + (res.getMonth() + 1) + "/" + res.getFullYear();
}
function formattaData(days, data) {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    let res = new Date(data); //creo l'oggetto data
    res.setDate(res.getDate() + days); //sommo alla data ottenuta il numero di giorni desiderati
    //restituisco la data nel formato gg/mm/yyyy
    return res.toLocaleDateString(undefined, options);
}
function primaMaiuscola(stringa) {
    // Verifica se la stringa è vuota o nulla
    if (!stringa) return "";
    // Trasforma il primo carattere in maiuscolo e concatena il resto della stringa
    return stringa.charAt(0).toUpperCase() + stringa.slice(1);
}
const recuperaIndexData = (date, disp)=>{
    return disp.findIndex(({ data })=>data === date);
};
/** 
Funzione per creare il body della tabella
*/ const creaBodyTabella = (disp, table, data)=>{
    //genero il body della tabella
    let rows = "<tr >%VALORI</tr>";
    const dato = "<td>%DATO</td>";
    let body = "";
    for(let i = 0; i <= 30; i++){
        let cont = 0;
        let html = "";
        const dataInserita = dataFinale(i, data);
        const giornoTabella = formattaData(i, data);
        html += dato.replace("%DATO", primaMaiuscola(giornoTabella));
        for(let j = 0; j < Object.values(disp).length; j++){
            const indexData = recuperaIndexData(dataInserita, (0, _scriptJs.prenotazionePerData));
            const tmp = indexData !== -1 ? Object.values(disp)[j] - Object.values((0, _scriptJs.prenotazionePerData)[indexData].prenotazioni)[j] : Object.values(disp)[j];
            //se la lunghezza dei giorni non è uguale al valore di i inserisco il numero massimo di camere disponibili altrimenti la differenza tra il numero di camere ed il numero di quelle camere prenotate
            const numeroPrenotazione = '<div class="progress" style="height: 30px;">\n  <div class="progress-bar ' + Object.values(colori)[cont] + '" role="progressbar" aria-label="Example with label" style="width:' + tmp / Object.values(disp)[j] * 100 + '%; font-size: x-large;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">' + tmp + "</div>\n" + "</div>";
            if (tmp !== 0) html += dato.replace("%DATO", numeroPrenotazione);
            else html += dato.replace("%DATO", '<img width="40" height="40" src="Icon/calendarioPieno.svg" alt="elimina">');
            cont++;
            if (cont == 5) cont = 0;
        }
        body += rows.replace("%VALORI", html);
    }
    table.innerHTML = body; //lo inserisco come html
};
const generaTabella = (disp, tableHead, tableBody, dataIniziale)=>{
    creaHeaderCompleta(disp, tableHead);
    creaBodyTabella(disp, tableBody, dataIniziale);
};
/** 
Funzione per la ricerca della stanza
*/ const ricercaStanza = (prenotazioni, stanza)=>{
    let bol = false;
    for(let i = 0; i < prenotazioni.length; i++){
        bol = prenotazioni[i] === stanza ? true : false;
        if (bol) break;
    }
    return bol;
};
const aggiornaPrenotazioni = (disp)=>{
    const totaleAggiornato = []; //array di dizionari aggiornato e poi restituito
    const chiaviDisponibilita = Object.keys(disp);
    for(let i = 0; i < (0, _scriptJs.prenotazionePerData).length; i++){
        const chiaviPrenotati = Object.keys((0, _scriptJs.prenotazionePerData)[i].prenotazioni);
        const valoriPrenotati = Object.values((0, _scriptJs.prenotazionePerData)[i].prenotazioni);
        const data = (0, _scriptJs.prenotazionePerData)[i].data; //data nell'array di dizionari
        const aggiornato = {}; //parte del dizionario aggiornata
        for(let j = 0; j < Object.keys(disp).length; j++){
            aggiornato[Object.keys(disp)[j]] = Object.values(data)[j];
            if (ricercaStanza(chiaviPrenotati, chiaviDisponibilita[j])) //se trova la stanza
            aggiornato[chiaviDisponibilita[j]] = valoriPrenotati[j];
            else //altrimenti se non lo trova
            aggiornato[chiaviDisponibilita[j]] = 0;
        }
        totaleAggiornato.push({
            data: data,
            prenotazioni: aggiornato
        });
    }
    return totaleAggiornato;
};

},{"./script.js":"8ZNvh","@parcel/transformer-js/src/esmodule-helpers.js":"47Nxo"}],"47Nxo":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"akawJ":[function(require,module,exports) {
/** 
Template degli input per modificare il numero di stanze disponibili nell'albergo
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generaModificaQuantita", ()=>generaModificaQuantita);
parcelHelpers.export(exports, "salvaModifiche", ()=>salvaModifiche);
parcelHelpers.export(exports, "generaNuovoDizionario", ()=>generaNuovoDizionario);
const inputTemplate = "<div class=\"col\"><div class=\"form-floating\"><input type='number' class=\"form-control border-dark\" value='%DISPONIBILITA' placeholder=\"%TITOLO2\" id='%ID'><label for='%VAL'>%TITOLO</label></div></div>";
const generaModificaQuantita = (disp)=>{
    let html = "";
    const keys = Object.keys(disp);
    const values = Object.values(disp);
    for(let i = 0; i < keys.length; i++)html += inputTemplate.replace("%ID", values[i]).replace("%VAL", values[i]).replace("%TITOLO2", keys[i]).replace("%TITOLO", keys[i]).replace("%DISPONIBILITA", values[i]);
    return html;
};
const salvaModifiche = (disp)=>{
    const values = Object.values(disp);
    const keys = Object.keys(disp);
    for(let i = 0; i < values.length; i++){
        const nuovoValore = document.getElementById(values[i]).value;
        disp[keys[i]] = nuovoValore; //modifico i valori nel dizionario
    }
    return disp;
};
const generaNuovoDizionario = (nomeDaCercare, dizionario)=>{
    const keys = generaMaiuscole(Object.keys(dizionario));
    const values = generaMaiuscole(Object.values(dizionario));
    const posizione = keys.indexOf(nomeDaCercare.toUpperCase());
    if (posizione != -1) {
        //se viene trovata la posizione  restituisce un nuovo dizionario
        const newDict = {};
        for(let i = 0; i < keys.length; i++)if (i != posizione) {
            newDict[Object.keys(dizionario)[i]] = values[i];
            console.log(Object.keys(dizionario)[i]);
            console.log(values[i]);
        }
        return newDict;
    } else return dizionario; //restituisce il dizionario senza alcuna modifica
};
/** 
Funzione che prende in ingresso un array, verifica se all'interno ci sono stringhe,
se si mette la stringa in maiuscolo, altrimenti rimane cosi
*/ const generaMaiuscole = (values)=>{
    const newValues = [];
    values.forEach((element)=>newValues.push(typeof element === "string" ? element.toUpperCase() : element));
    return newValues;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"47Nxo"}],"5kanW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "valorizzaForm", ()=>valorizzaForm);
parcelHelpers.export(exports, "sommaData", ()=>sommaData);
parcelHelpers.export(exports, "numMaxStanze", ()=>numMaxStanze);
parcelHelpers.export(exports, "modificaArray", ()=>modificaArray);
const template = '<option value="%VALUE">%TITOLO</option>';
const valorizzaForm = (disp)=>{
    let html = "";
    for(let i = 0; i < Object.keys(disp).length; i++){
        html += template.replace("%VALUE", i).replace("%TITOLO", Object.keys(disp)[i]);
        html += "\n";
    }
    return html;
};
function sommaData(days) {
    let res = new Date(); //creo l'oggetto data
    res.setDate(res.getDate() + days); //sommo alla data ottenuta il numero di giorni desiderati
    //restituisco la data nel formato gg/mm/yyyy
    return res.getFullYear() + "-" + (res.getMonth() + 1) + "-" + res.getDate();
}
function numMaxStanze(disp, index, scelta, prenotazionePerData) {
    console.log(scelta);
    return index !== -1 ? Object.values(disp)[scelta] - Object.values(prenotazionePerData[index].prenotazioni)[scelta] : Object.values(disp)[scelta];
}
function modificaArray(index, prenotazionePerData, scelta, numero, data, disp) {
    if (index !== -1) prenotazionePerData[index].prenotazioni[scelta] += numero;
    else {
        prenotazionePerData.push({
            data: data,
            prenotazioni: newDictZero(disp)
        });
        prenotazionePerData[prenotazionePerData.length - 1].prenotazioni[scelta] = numero;
    }
    return prenotazionePerData;
}
function newDictZero(dizionario) {
    const newDict = {};
    for(const chiave in dizionario)if (dizionario.hasOwnProperty(chiave)) newDict[chiave] = 0;
    return newDict;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"47Nxo"}],"2qYEs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "salvaDati", ()=>salvaDati);
parcelHelpers.export(exports, "recuperaDati", ()=>recuperaDati);
parcelHelpers.export(exports, "controlEvent", ()=>controlEvent);
function salvaDati(dict, key) {
    fetch("https://ws.progettimolinari.it/cache/set", {
        method: "Post",
        headers: {
            "content-type": "application/json",
            key: "93bb2bf0-9b41-4066-971f-1ecbf8ce02fd"
        },
        body: JSON.stringify({
            key: key,
            value: JSON.stringify(dict)
        })
    }).then((element)=>element.json()).then((element)=>console.log(element)).catch((error)=>console.error(error));
}
function recuperaDati(chiave, dict) {
    return new Promise((resolve, reject)=>{
        fetch("https://ws.progettimolinari.it/cache/get", {
            method: "Post",
            headers: {
                "content-type": "application/json",
                key: "93bb2bf0-9b41-4066-971f-1ecbf8ce02fd"
            },
            body: JSON.stringify({
                key: chiave
            })
        }).then((element)=>{
            resolve(element.json());
        }).catch((error)=>reject(error));
    });
}
function controlEvent(array) {
    const oggi = new Date();
    oggi.setHours(0, 0, 0, 0); // Imposta l'orario a mezzanotte
    for(let i = 0; i < array.length; i++){
        const data = array[i].data.split("/");
        const dataSelezionata = new Date(data[2], data[1] - 1, data[0]);
        if (dataSelezionata >= oggi) return i;
    }
    return -1;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"47Nxo"}]},["hTe8s","8ZNvh"], "8ZNvh", "parcelRequire716c")

//# sourceMappingURL=index.f5c48570.js.map
