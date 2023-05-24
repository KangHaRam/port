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
})({"lKzq4":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
var _chord = require("@tonaljs/chord");
var _tonal = require("tonal");
var _howler = require("howler");
const sound = new Howl({
    src: [
        "assets/pianoSprite.mp3"
    ],
    onload () {
        //console.log('Sound file has been loaded. Do something here!');
        soundEngine.init();
    },
    onloaderror (e, msg) {
        console.log("Error", e, msg);
    }
});
//console.log(note('c'));
//const myInterval = interval('5P');
//console.log(myInterval);
//console.log(Chord.get('Cmaj7'));
const startNotes = [
    "C",
    "C#",
    "Db",
    "D",
    "D#",
    "Eb",
    "E",
    "F",
    "F#",
    "Gb",
    "G",
    "G#",
    "Ab",
    "A",
    "A#",
    "Bb",
    "B"
];
const startNoteSelector = document.querySelector("#start-note");
const octaveSelector = document.querySelector("#octave");
const buttons = document.querySelector(".buttons");
const intervalsInChord = document.querySelector(".intervals-in-chord");
const notesInChord = document.querySelector(".notes-in-chord");
let selectedStartNote = "C";
let selectedOctave = "0";
let selectedChord;
const app = {
    init () {
        this.setUpStartNotes();
        this.setUpOctaves();
        this.setUpButtons();
        this.setUpEventListners();
    },
    setUpStartNotes () {
        startNotes.forEach((noteName)=>{
            let noteNameOption = this.addElement("option", noteName);
            startNoteSelector.appendChild(noteNameOption);
        });
    },
    setUpOctaves () {
        for(let i = 0; i <= 7; i++){
            let octaveNumber = this.addElement("option", i);
            octaveSelector.appendChild(octaveNumber);
        }
    },
    setUpButtons () {
        const chordNames = (0, _tonal.ChordType).all().map((entry)=>{
            return entry.aliases[0];
        });
        chordNames.forEach((chordName)=>{
            let chordButton = this.addElement("button", chordName);
            buttons.appendChild(chordButton);
        });
    },
    setUpEventListners () {
        startNoteSelector.addEventListener("change", ()=>{
            selectedStartNote = startNoteSelector.value;
        //console.log(selectedStartNote);
        });
        octaveSelector.addEventListener("change", ()=>{
            selectedOctave = octaveSelector.value;
        //console.log(selectedOctave);
        });
        buttons.addEventListener("click", (event)=>{
            if (event.target.classList.contains("buttons")) return;
            selectedChord = event.target.innerText;
            this.displayAndPlayChord(selectedChord);
        });
    },
    displayAndPlayChord (selectedChord) {
        let chordIntervals = (0, _chord.getChord)(selectedChord).intervals;
        intervalsInChord.innerText = chordIntervals.join(" - ");
        const startNotewithOctave = selectedStartNote + selectedOctave;
        let chordNotes = chordIntervals.map((val)=>{
            return (0, _tonal.transpose)(startNotewithOctave, val);
        });
        notesInChord.innerText = chordNotes.join(" - ");
        soundEngine.play(chordNotes);
    },
    addElement (elementName, content) {
        let element = document.createElement(elementName);
        element.innerHTML = content;
        return element;
    }
};
const soundEngine = {
    init () {
        const lengthOfNote = 1000.2;
        let timeIndex = 0;
        for(let i = 12; i <= 120; i++){
            sound["_sprite"][i] = [
                timeIndex,
                lengthOfNote
            ];
            timeIndex += lengthOfNote;
        }
    //sound.play('80');
    //console.log('It works');
    //sound.play();
    },
    play (soundSequence) {
        const soundSequenceMidiNumber = soundSequence.map((noteName)=>{
            return (0, _tonal.note)(noteName).midi;
        });
        soundSequenceMidiNumber.forEach((noteMidiNumber)=>{
            sound.volume(0.75);
            //console.log(noteMidiNumber);
            sound.play(noteMidiNumber.toString());
        });
    //console.log(soundSequence);
    }
};
app.init();

},{"@tonaljs/chord":"6ncZZ","tonal":"h8GkW","howler":"5Vjgk"}],"6ncZZ":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chord", ()=>chord);
parcelHelpers.export(exports, "chordScales", ()=>chordScales);
parcelHelpers.export(exports, "default", ()=>chord_default);
parcelHelpers.export(exports, "degrees", ()=>degrees);
parcelHelpers.export(exports, "detect", ()=>(0, _chordDetect.detect));
parcelHelpers.export(exports, "extended", ()=>extended);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "getChord", ()=>getChord);
parcelHelpers.export(exports, "reduced", ()=>reduced);
parcelHelpers.export(exports, "steps", ()=>steps);
parcelHelpers.export(exports, "tokenize", ()=>tokenize);
parcelHelpers.export(exports, "transpose", ()=>transpose);
var _chordDetect = require("@tonaljs/chord-detect");
var _chordType = require("@tonaljs/chord-type");
var _core = require("@tonaljs/core");
var _pcset = require("@tonaljs/pcset");
var _scaleType = require("@tonaljs/scale-type");
var NoChord = {
    empty: true,
    name: "",
    symbol: "",
    root: "",
    rootDegree: 0,
    type: "",
    tonic: null,
    setNum: NaN,
    quality: "Unknown",
    chroma: "",
    normalized: "",
    aliases: [],
    notes: [],
    intervals: []
};
var NUM_TYPES = /^(6|64|7|9|11|13)$/;
function tokenize(name) {
    const [letter, acc, oct, type] = (0, _core.tokenizeNote)(name);
    if (letter === "") return [
        "",
        name
    ];
    if (letter === "A" && type === "ug") return [
        "",
        "aug"
    ];
    if (!type && (oct === "4" || oct === "5")) return [
        letter + acc,
        oct
    ];
    if (NUM_TYPES.test(oct)) return [
        letter + acc,
        oct + type
    ];
    else return [
        letter + acc + oct,
        type
    ];
}
function get(src) {
    if (src === "") return NoChord;
    if (Array.isArray(src) && src.length === 2) return getChord(src[1], src[0]);
    else {
        const [tonic, type] = tokenize(src);
        const chord2 = getChord(type, tonic);
        return chord2.empty ? getChord(src) : chord2;
    }
}
function getChord(typeName, optionalTonic, optionalRoot) {
    const type = (0, _chordType.get)(typeName);
    const tonic = (0, _core.note)(optionalTonic || "");
    const root = (0, _core.note)(optionalRoot || "");
    if (type.empty || optionalTonic && tonic.empty || optionalRoot && root.empty) return NoChord;
    const rootInterval = (0, _core.distance)(tonic.pc, root.pc);
    const rootDegree = type.intervals.indexOf(rootInterval) + 1;
    if (!root.empty && !rootDegree) return NoChord;
    const intervals = Array.from(type.intervals);
    for(let i = 1; i < rootDegree; i++){
        const num = intervals[0][0];
        const quality = intervals[0][1];
        const newNum = parseInt(num, 10) + 7;
        intervals.push(`${newNum}${quality}`);
        intervals.shift();
    }
    const notes = tonic.empty ? [] : intervals.map((i)=>(0, _core.transpose)(tonic, i));
    typeName = type.aliases.indexOf(typeName) !== -1 ? typeName : type.aliases[0];
    const symbol = `${tonic.empty ? "" : tonic.pc}${typeName}${root.empty || rootDegree <= 1 ? "" : "/" + root.pc}`;
    const name = `${optionalTonic ? tonic.pc + " " : ""}${type.name}${rootDegree > 1 && optionalRoot ? " over " + root.pc : ""}`;
    return {
        ...type,
        name,
        symbol,
        type: type.name,
        root: root.name,
        intervals,
        rootDegree,
        tonic: tonic.name,
        notes
    };
}
var chord = (0, _core.deprecate)("Chord.chord", "Chord.get", get);
function transpose(chordName, interval) {
    const [tonic, type] = tokenize(chordName);
    if (!tonic) return chordName;
    return (0, _core.transpose)(tonic, interval) + type;
}
function chordScales(name) {
    const s = get(name);
    const isChordIncluded = (0, _pcset.isSupersetOf)(s.chroma);
    return (0, _scaleType.all)().filter((scale)=>isChordIncluded(scale.chroma)).map((scale)=>scale.name);
}
function extended(chordName) {
    const s = get(chordName);
    const isSuperset = (0, _pcset.isSupersetOf)(s.chroma);
    return (0, _chordType.all)().filter((chord2)=>isSuperset(chord2.chroma)).map((chord2)=>s.tonic + chord2.aliases[0]);
}
function reduced(chordName) {
    const s = get(chordName);
    const isSubset = (0, _pcset.isSubsetOf)(s.chroma);
    return (0, _chordType.all)().filter((chord2)=>isSubset(chord2.chroma)).map((chord2)=>s.tonic + chord2.aliases[0]);
}
function degrees(chordName) {
    const { intervals , tonic  } = get(chordName);
    const transpose2 = (0, _core.tonicIntervalsTransposer)(intervals, tonic);
    return (degree)=>degree ? transpose2(degree > 0 ? degree - 1 : degree) : "";
}
function steps(chordName) {
    const { intervals , tonic  } = get(chordName);
    return (0, _core.tonicIntervalsTransposer)(intervals, tonic);
}
var chord_default = {
    getChord,
    get,
    detect: (0, _chordDetect.detect),
    chordScales,
    extended,
    reduced,
    tokenize,
    transpose,
    degrees,
    steps,
    chord
};

},{"@tonaljs/chord-detect":"8m9ss","@tonaljs/chord-type":"fSYoM","@tonaljs/core":"d3Dyc","@tonaljs/pcset":"iyyUH","@tonaljs/scale-type":"eRJbX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8m9ss":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>chord_detect_default);
parcelHelpers.export(exports, "detect", ()=>detect);
var _chordType = require("@tonaljs/chord-type");
var _core = require("@tonaljs/core");
var _pcset = require("@tonaljs/pcset");
var namedSet = (notes)=>{
    const pcToName = notes.reduce((record, n)=>{
        const chroma = (0, _core.note)(n).chroma;
        if (chroma !== void 0) record[chroma] = record[chroma] || (0, _core.note)(n).name;
        return record;
    }, {});
    return (chroma)=>pcToName[chroma];
};
function detect(source, options = {}) {
    const notes = source.map((n)=>(0, _core.note)(n).pc).filter((x)=>x);
    if ((0, _core.note).length === 0) return [];
    const found = findMatches(notes, 1, options);
    return found.filter((chord)=>chord.weight).sort((a, b)=>b.weight - a.weight).map((chord)=>chord.name);
}
var BITMASK = {
    anyThirds: 384,
    perfectFifth: 16,
    nonPerfectFifths: 40,
    anySeventh: 3
};
var testChromaNumber = (bitmask)=>(chromaNumber)=>Boolean(chromaNumber & bitmask);
var hasAnyThird = testChromaNumber(BITMASK.anyThirds);
var hasPerfectFifth = testChromaNumber(BITMASK.perfectFifth);
var hasAnySeventh = testChromaNumber(BITMASK.anySeventh);
var hasNonPerfectFifth = testChromaNumber(BITMASK.nonPerfectFifths);
function hasAnyThirdAndPerfectFifthAndAnySeventh(chordType) {
    const chromaNumber = parseInt(chordType.chroma, 2);
    return hasAnyThird(chromaNumber) && hasPerfectFifth(chromaNumber) && hasAnySeventh(chromaNumber);
}
function withPerfectFifth(chroma) {
    const chromaNumber = parseInt(chroma, 2);
    return hasNonPerfectFifth(chromaNumber) ? chroma : (chromaNumber | 16).toString(2);
}
function findMatches(notes, weight, options) {
    const tonic = notes[0];
    const tonicChroma = (0, _core.note)(tonic).chroma;
    const noteName = namedSet(notes);
    const allModes = (0, _pcset.modes)(notes, false);
    const found = [];
    allModes.forEach((mode, index)=>{
        const modeWithPerfectFifth = options.assumePerfectFifth && withPerfectFifth(mode);
        const chordTypes = (0, _chordType.all)().filter((chordType)=>{
            if (options.assumePerfectFifth && hasAnyThirdAndPerfectFifthAndAnySeventh(chordType)) return chordType.chroma === modeWithPerfectFifth;
            return chordType.chroma === mode;
        });
        chordTypes.forEach((chordType)=>{
            const chordName = chordType.aliases[0];
            const baseNote = noteName(index);
            const isInversion = index !== tonicChroma;
            if (isInversion) found.push({
                weight: 0.5 * weight,
                name: `${baseNote}${chordName}/${tonic}`
            });
            else found.push({
                weight: 1 * weight,
                name: `${baseNote}${chordName}`
            });
        });
    });
    return found;
}
var chord_detect_default = {
    detect
};

},{"@tonaljs/chord-type":"fSYoM","@tonaljs/core":"d3Dyc","@tonaljs/pcset":"iyyUH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fSYoM":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "addAlias", ()=>addAlias);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "chordType", ()=>chordType);
parcelHelpers.export(exports, "default", ()=>chord_type_default);
parcelHelpers.export(exports, "entries", ()=>entries);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "keys", ()=>keys);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "removeAll", ()=>removeAll);
parcelHelpers.export(exports, "symbols", ()=>symbols);
var _core = require("@tonaljs/core");
var _pcset = require("@tonaljs/pcset");
// data.ts
var CHORDS = [
    [
        "1P 3M 5P",
        "major",
        "M ^  maj"
    ],
    [
        "1P 3M 5P 7M",
        "major seventh",
        "maj7 Δ ma7 M7 Maj7 ^7"
    ],
    [
        "1P 3M 5P 7M 9M",
        "major ninth",
        "maj9 Δ9 ^9"
    ],
    [
        "1P 3M 5P 7M 9M 13M",
        "major thirteenth",
        "maj13 Maj13 ^13"
    ],
    [
        "1P 3M 5P 6M",
        "sixth",
        "6 add6 add13 M6"
    ],
    [
        "1P 3M 5P 6M 9M",
        "sixth added ninth",
        "6add9 6/9 69 M69"
    ],
    [
        "1P 3M 6m 7M",
        "major seventh flat sixth",
        "M7b6 ^7b6"
    ],
    [
        "1P 3M 5P 7M 11A",
        "major seventh sharp eleventh",
        "maj#4 Δ#4 Δ#11 M7#11 ^7#11 maj7#11"
    ],
    [
        "1P 3m 5P",
        "minor",
        "m min -"
    ],
    [
        "1P 3m 5P 7m",
        "minor seventh",
        "m7 min7 mi7 -7"
    ],
    [
        "1P 3m 5P 7M",
        "minor/major seventh",
        "m/ma7 m/maj7 mM7 mMaj7 m/M7 -Δ7 mΔ -^7"
    ],
    [
        "1P 3m 5P 6M",
        "minor sixth",
        "m6 -6"
    ],
    [
        "1P 3m 5P 7m 9M",
        "minor ninth",
        "m9 -9"
    ],
    [
        "1P 3m 5P 7M 9M",
        "minor/major ninth",
        "mM9 mMaj9 -^9"
    ],
    [
        "1P 3m 5P 7m 9M 11P",
        "minor eleventh",
        "m11 -11"
    ],
    [
        "1P 3m 5P 7m 9M 13M",
        "minor thirteenth",
        "m13 -13"
    ],
    [
        "1P 3m 5d",
        "diminished",
        "dim \xb0 o"
    ],
    [
        "1P 3m 5d 7d",
        "diminished seventh",
        "dim7 \xb07 o7"
    ],
    [
        "1P 3m 5d 7m",
        "half-diminished",
        "m7b5 \xf8 -7b5 h7 h"
    ],
    [
        "1P 3M 5P 7m",
        "dominant seventh",
        "7 dom"
    ],
    [
        "1P 3M 5P 7m 9M",
        "dominant ninth",
        "9"
    ],
    [
        "1P 3M 5P 7m 9M 13M",
        "dominant thirteenth",
        "13"
    ],
    [
        "1P 3M 5P 7m 11A",
        "lydian dominant seventh",
        "7#11 7#4"
    ],
    [
        "1P 3M 5P 7m 9m",
        "dominant flat ninth",
        "7b9"
    ],
    [
        "1P 3M 5P 7m 9A",
        "dominant sharp ninth",
        "7#9"
    ],
    [
        "1P 3M 7m 9m",
        "altered",
        "alt7"
    ],
    [
        "1P 4P 5P",
        "suspended fourth",
        "sus4 sus"
    ],
    [
        "1P 2M 5P",
        "suspended second",
        "sus2"
    ],
    [
        "1P 4P 5P 7m",
        "suspended fourth seventh",
        "7sus4 7sus"
    ],
    [
        "1P 5P 7m 9M 11P",
        "eleventh",
        "11"
    ],
    [
        "1P 4P 5P 7m 9m",
        "suspended fourth flat ninth",
        "b9sus phryg 7b9sus 7b9sus4"
    ],
    [
        "1P 5P",
        "fifth",
        "5"
    ],
    [
        "1P 3M 5A",
        "augmented",
        "aug + +5 ^#5"
    ],
    [
        "1P 3m 5A",
        "minor augmented",
        "m#5 -#5 m+"
    ],
    [
        "1P 3M 5A 7M",
        "augmented seventh",
        "maj7#5 maj7+5 +maj7 ^7#5"
    ],
    [
        "1P 3M 5P 7M 9M 11A",
        "major sharp eleventh (lydian)",
        "maj9#11 Δ9#11 ^9#11"
    ],
    [
        "1P 2M 4P 5P",
        "",
        "sus24 sus4add9"
    ],
    [
        "1P 3M 5A 7M 9M",
        "",
        "maj9#5 Maj9#5"
    ],
    [
        "1P 3M 5A 7m",
        "",
        "7#5 +7 7+ 7aug aug7"
    ],
    [
        "1P 3M 5A 7m 9A",
        "",
        "7#5#9 7#9#5 7alt"
    ],
    [
        "1P 3M 5A 7m 9M",
        "",
        "9#5 9+"
    ],
    [
        "1P 3M 5A 7m 9M 11A",
        "",
        "9#5#11"
    ],
    [
        "1P 3M 5A 7m 9m",
        "",
        "7#5b9 7b9#5"
    ],
    [
        "1P 3M 5A 7m 9m 11A",
        "",
        "7#5b9#11"
    ],
    [
        "1P 3M 5A 9A",
        "",
        "+add#9"
    ],
    [
        "1P 3M 5A 9M",
        "",
        "M#5add9 +add9"
    ],
    [
        "1P 3M 5P 6M 11A",
        "",
        "M6#11 M6b5 6#11 6b5"
    ],
    [
        "1P 3M 5P 6M 7M 9M",
        "",
        "M7add13"
    ],
    [
        "1P 3M 5P 6M 9M 11A",
        "",
        "69#11"
    ],
    [
        "1P 3m 5P 6M 9M",
        "",
        "m69 -69"
    ],
    [
        "1P 3M 5P 6m 7m",
        "",
        "7b6"
    ],
    [
        "1P 3M 5P 7M 9A 11A",
        "",
        "maj7#9#11"
    ],
    [
        "1P 3M 5P 7M 9M 11A 13M",
        "",
        "M13#11 maj13#11 M13+4 M13#4"
    ],
    [
        "1P 3M 5P 7M 9m",
        "",
        "M7b9"
    ],
    [
        "1P 3M 5P 7m 11A 13m",
        "",
        "7#11b13 7b5b13"
    ],
    [
        "1P 3M 5P 7m 13M",
        "",
        "7add6 67 7add13"
    ],
    [
        "1P 3M 5P 7m 9A 11A",
        "",
        "7#9#11 7b5#9 7#9b5"
    ],
    [
        "1P 3M 5P 7m 9A 11A 13M",
        "",
        "13#9#11"
    ],
    [
        "1P 3M 5P 7m 9A 11A 13m",
        "",
        "7#9#11b13"
    ],
    [
        "1P 3M 5P 7m 9A 13M",
        "",
        "13#9"
    ],
    [
        "1P 3M 5P 7m 9A 13m",
        "",
        "7#9b13"
    ],
    [
        "1P 3M 5P 7m 9M 11A",
        "",
        "9#11 9+4 9#4"
    ],
    [
        "1P 3M 5P 7m 9M 11A 13M",
        "",
        "13#11 13+4 13#4"
    ],
    [
        "1P 3M 5P 7m 9M 11A 13m",
        "",
        "9#11b13 9b5b13"
    ],
    [
        "1P 3M 5P 7m 9m 11A",
        "",
        "7b9#11 7b5b9 7b9b5"
    ],
    [
        "1P 3M 5P 7m 9m 11A 13M",
        "",
        "13b9#11"
    ],
    [
        "1P 3M 5P 7m 9m 11A 13m",
        "",
        "7b9b13#11 7b9#11b13 7b5b9b13"
    ],
    [
        "1P 3M 5P 7m 9m 13M",
        "",
        "13b9"
    ],
    [
        "1P 3M 5P 7m 9m 13m",
        "",
        "7b9b13"
    ],
    [
        "1P 3M 5P 7m 9m 9A",
        "",
        "7b9#9"
    ],
    [
        "1P 3M 5P 9M",
        "",
        "Madd9 2 add9 add2"
    ],
    [
        "1P 3M 5P 9m",
        "",
        "Maddb9"
    ],
    [
        "1P 3M 5d",
        "",
        "Mb5"
    ],
    [
        "1P 3M 5d 6M 7m 9M",
        "",
        "13b5"
    ],
    [
        "1P 3M 5d 7M",
        "",
        "M7b5"
    ],
    [
        "1P 3M 5d 7M 9M",
        "",
        "M9b5"
    ],
    [
        "1P 3M 5d 7m",
        "",
        "7b5"
    ],
    [
        "1P 3M 5d 7m 9M",
        "",
        "9b5"
    ],
    [
        "1P 3M 7m",
        "",
        "7no5"
    ],
    [
        "1P 3M 7m 13m",
        "",
        "7b13"
    ],
    [
        "1P 3M 7m 9M",
        "",
        "9no5"
    ],
    [
        "1P 3M 7m 9M 13M",
        "",
        "13no5"
    ],
    [
        "1P 3M 7m 9M 13m",
        "",
        "9b13"
    ],
    [
        "1P 3m 4P 5P",
        "",
        "madd4"
    ],
    [
        "1P 3m 5P 6m 7M",
        "",
        "mMaj7b6"
    ],
    [
        "1P 3m 5P 6m 7M 9M",
        "",
        "mMaj9b6"
    ],
    [
        "1P 3m 5P 7m 11P",
        "",
        "m7add11 m7add4"
    ],
    [
        "1P 3m 5P 9M",
        "",
        "madd9"
    ],
    [
        "1P 3m 5d 6M 7M",
        "",
        "o7M7"
    ],
    [
        "1P 3m 5d 7M",
        "",
        "oM7"
    ],
    [
        "1P 3m 6m 7M",
        "",
        "mb6M7"
    ],
    [
        "1P 3m 6m 7m",
        "",
        "m7#5"
    ],
    [
        "1P 3m 6m 7m 9M",
        "",
        "m9#5"
    ],
    [
        "1P 3m 5A 7m 9M 11P",
        "",
        "m11A"
    ],
    [
        "1P 3m 6m 9m",
        "",
        "mb6b9"
    ],
    [
        "1P 2M 3m 5d 7m",
        "",
        "m9b5"
    ],
    [
        "1P 4P 5A 7M",
        "",
        "M7#5sus4"
    ],
    [
        "1P 4P 5A 7M 9M",
        "",
        "M9#5sus4"
    ],
    [
        "1P 4P 5A 7m",
        "",
        "7#5sus4"
    ],
    [
        "1P 4P 5P 7M",
        "",
        "M7sus4"
    ],
    [
        "1P 4P 5P 7M 9M",
        "",
        "M9sus4"
    ],
    [
        "1P 4P 5P 7m 9M",
        "",
        "9sus4 9sus"
    ],
    [
        "1P 4P 5P 7m 9M 13M",
        "",
        "13sus4 13sus"
    ],
    [
        "1P 4P 5P 7m 9m 13m",
        "",
        "7sus4b9b13 7b9b13sus4"
    ],
    [
        "1P 4P 7m 10m",
        "",
        "4 quartal"
    ],
    [
        "1P 5P 7m 9m 11P",
        "",
        "11b9"
    ]
];
var data_default = CHORDS;
// index.ts
var NoChordType = {
    ...(0, _pcset.EmptyPcset),
    name: "",
    quality: "Unknown",
    intervals: [],
    aliases: []
};
var dictionary = [];
var index = {};
function get(type) {
    return index[type] || NoChordType;
}
var chordType = (0, _core.deprecate)("ChordType.chordType", "ChordType.get", get);
function names() {
    return dictionary.map((chord)=>chord.name).filter((x)=>x);
}
function symbols() {
    return dictionary.map((chord)=>chord.aliases[0]).filter((x)=>x);
}
function keys() {
    return Object.keys(index);
}
function all() {
    return dictionary.slice();
}
var entries = (0, _core.deprecate)("ChordType.entries", "ChordType.all", all);
function removeAll() {
    dictionary = [];
    index = {};
}
function add(intervals, aliases, fullName) {
    const quality = getQuality(intervals);
    const chord = {
        ...(0, _pcset.get)(intervals),
        name: fullName || "",
        quality,
        intervals,
        aliases
    };
    dictionary.push(chord);
    if (chord.name) index[chord.name] = chord;
    index[chord.setNum] = chord;
    index[chord.chroma] = chord;
    chord.aliases.forEach((alias)=>addAlias(chord, alias));
}
function addAlias(chord, alias) {
    index[alias] = chord;
}
function getQuality(intervals) {
    const has = (interval)=>intervals.indexOf(interval) !== -1;
    return has("5A") ? "Augmented" : has("3M") ? "Major" : has("5d") ? "Diminished" : has("3m") ? "Minor" : "Unknown";
}
data_default.forEach(([ivls, fullName, names2])=>add(ivls.split(" "), names2.split(" "), fullName));
dictionary.sort((a, b)=>a.setNum - b.setNum);
var chord_type_default = {
    names,
    symbols,
    get,
    all,
    add,
    removeAll,
    keys,
    entries,
    chordType
};

},{"@tonaljs/core":"d3Dyc","@tonaljs/pcset":"iyyUH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3Dyc":[function(require,module,exports) {
// src/utils.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "accToAlt", ()=>accToAlt);
parcelHelpers.export(exports, "altToAcc", ()=>altToAcc);
parcelHelpers.export(exports, "coordToInterval", ()=>coordToInterval);
parcelHelpers.export(exports, "coordToNote", ()=>coordToNote);
parcelHelpers.export(exports, "decode", ()=>decode);
parcelHelpers.export(exports, "deprecate", ()=>deprecate);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "encode", ()=>encode);
parcelHelpers.export(exports, "fillStr", ()=>fillStr);
parcelHelpers.export(exports, "interval", ()=>interval);
parcelHelpers.export(exports, "isNamed", ()=>isNamed);
parcelHelpers.export(exports, "isPitch", ()=>isPitch);
parcelHelpers.export(exports, "note", ()=>note);
parcelHelpers.export(exports, "stepToLetter", ()=>stepToLetter);
parcelHelpers.export(exports, "tokenizeInterval", ()=>tokenizeInterval);
parcelHelpers.export(exports, "tokenizeNote", ()=>tokenizeNote);
parcelHelpers.export(exports, "tonicIntervalsTransposer", ()=>tonicIntervalsTransposer);
parcelHelpers.export(exports, "transpose", ()=>transpose);
var fillStr = (s, n)=>Array(Math.abs(n) + 1).join(s);
function deprecate(original, alternative, fn) {
    return function(...args) {
        console.warn(`${original} is deprecated. Use ${alternative}.`);
        return fn.apply(this, args);
    };
}
// src/named.ts
function isNamed(src) {
    return src !== null && typeof src === "object" && typeof src.name === "string" ? true : false;
}
// src/pitch.ts
function isPitch(pitch) {
    return pitch !== null && typeof pitch === "object" && typeof pitch.step === "number" && typeof pitch.alt === "number" ? true : false;
}
var FIFTHS = [
    0,
    2,
    4,
    -1,
    1,
    3,
    5
];
var STEPS_TO_OCTS = FIFTHS.map((fifths)=>Math.floor(fifths * 7 / 12));
function encode(pitch) {
    const { step , alt , oct , dir =1  } = pitch;
    const f = FIFTHS[step] + 7 * alt;
    if (oct === void 0) return [
        dir * f
    ];
    const o = oct - STEPS_TO_OCTS[step] - 4 * alt;
    return [
        dir * f,
        dir * o
    ];
}
var FIFTHS_TO_STEPS = [
    3,
    0,
    4,
    1,
    5,
    2,
    6
];
function decode(coord) {
    const [f, o, dir] = coord;
    const step = FIFTHS_TO_STEPS[unaltered(f)];
    const alt = Math.floor((f + 1) / 7);
    if (o === void 0) return {
        step,
        alt,
        dir
    };
    const oct = o + 4 * alt + STEPS_TO_OCTS[step];
    return {
        step,
        alt,
        oct,
        dir
    };
}
function unaltered(f) {
    const i = (f + 1) % 7;
    return i < 0 ? 7 + i : i;
}
// src/note.ts
var NoNote = {
    empty: true,
    name: "",
    pc: "",
    acc: ""
};
var cache = /* @__PURE__ */ new Map();
var stepToLetter = (step)=>"CDEFGAB".charAt(step);
var altToAcc = (alt)=>alt < 0 ? fillStr("b", -alt) : fillStr("#", alt);
var accToAlt = (acc)=>acc[0] === "b" ? -acc.length : acc.length;
function note(src) {
    const stringSrc = JSON.stringify(src);
    const cached = cache.get(stringSrc);
    if (cached) return cached;
    const value = typeof src === "string" ? parse(src) : isPitch(src) ? note(pitchName(src)) : isNamed(src) ? note(src.name) : NoNote;
    cache.set(stringSrc, value);
    return value;
}
var REGEX = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
function tokenizeNote(str) {
    const m = REGEX.exec(str);
    return [
        m[1].toUpperCase(),
        m[2].replace(/x/g, "##"),
        m[3],
        m[4]
    ];
}
function coordToNote(noteCoord) {
    return note(decode(noteCoord));
}
var mod = (n, m)=>(n % m + m) % m;
var SEMI = [
    0,
    2,
    4,
    5,
    7,
    9,
    11
];
function parse(noteName) {
    const tokens = tokenizeNote(noteName);
    if (tokens[0] === "" || tokens[3] !== "") return NoNote;
    const letter = tokens[0];
    const acc = tokens[1];
    const octStr = tokens[2];
    const step = (letter.charCodeAt(0) + 3) % 7;
    const alt = accToAlt(acc);
    const oct = octStr.length ? +octStr : void 0;
    const coord = encode({
        step,
        alt,
        oct
    });
    const name = letter + acc + octStr;
    const pc = letter + acc;
    const chroma = (SEMI[step] + alt + 120) % 12;
    const height = oct === void 0 ? mod(SEMI[step] + alt, 12) - 1188 : SEMI[step] + alt + 12 * (oct + 1);
    const midi = height >= 0 && height <= 127 ? height : null;
    const freq = oct === void 0 ? null : Math.pow(2, (height - 69) / 12) * 440;
    return {
        empty: false,
        acc,
        alt,
        chroma,
        coord,
        freq,
        height,
        letter,
        midi,
        name,
        oct,
        pc,
        step
    };
}
function pitchName(props) {
    const { step , alt , oct  } = props;
    const letter = stepToLetter(step);
    if (!letter) return "";
    const pc = letter + altToAcc(alt);
    return oct || oct === 0 ? pc + oct : pc;
}
// src/interval.ts
var NoInterval = {
    empty: true,
    name: "",
    acc: ""
};
var INTERVAL_TONAL_REGEX = "([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})";
var INTERVAL_SHORTHAND_REGEX = "(AA|A|P|M|m|d|dd)([-+]?\\d+)";
var REGEX2 = new RegExp("^" + INTERVAL_TONAL_REGEX + "|" + INTERVAL_SHORTHAND_REGEX + "$");
function tokenizeInterval(str) {
    const m = REGEX2.exec(`${str}`);
    if (m === null) return [
        "",
        ""
    ];
    return m[1] ? [
        m[1],
        m[2]
    ] : [
        m[4],
        m[3]
    ];
}
var cache2 = {};
function interval(src) {
    return typeof src === "string" ? cache2[src] || (cache2[src] = parse2(src)) : isPitch(src) ? interval(pitchName2(src)) : isNamed(src) ? interval(src.name) : NoInterval;
}
var SIZES = [
    0,
    2,
    4,
    5,
    7,
    9,
    11
];
var TYPES = "PMMPPMM";
function parse2(str) {
    const tokens = tokenizeInterval(str);
    if (tokens[0] === "") return NoInterval;
    const num = +tokens[0];
    const q = tokens[1];
    const step = (Math.abs(num) - 1) % 7;
    const t = TYPES[step];
    if (t === "M" && q === "P") return NoInterval;
    const type = t === "M" ? "majorable" : "perfectable";
    const name = "" + num + q;
    const dir = num < 0 ? -1 : 1;
    const simple = num === 8 || num === -8 ? num : dir * (step + 1);
    const alt = qToAlt(type, q);
    const oct = Math.floor((Math.abs(num) - 1) / 7);
    const semitones = dir * (SIZES[step] + alt + 12 * oct);
    const chroma = (dir * (SIZES[step] + alt) % 12 + 12) % 12;
    const coord = encode({
        step,
        alt,
        oct,
        dir
    });
    return {
        empty: false,
        name,
        num,
        q,
        step,
        alt,
        dir,
        type,
        simple,
        semitones,
        chroma,
        coord,
        oct
    };
}
function coordToInterval(coord, forceDescending) {
    const [f, o = 0] = coord;
    const isDescending = f * 7 + o * 12 < 0;
    const ivl = forceDescending || isDescending ? [
        -f,
        -o,
        -1
    ] : [
        f,
        o,
        1
    ];
    return interval(decode(ivl));
}
function qToAlt(type, q) {
    return q === "M" && type === "majorable" || q === "P" && type === "perfectable" ? 0 : q === "m" && type === "majorable" ? -1 : /^A+$/.test(q) ? q.length : /^d+$/.test(q) ? -1 * (type === "perfectable" ? q.length : q.length + 1) : 0;
}
function pitchName2(props) {
    const { step , alt , oct =0 , dir  } = props;
    if (!dir) return "";
    const calcNum = step + 1 + 7 * oct;
    const num = calcNum === 0 ? step + 1 : calcNum;
    const d = dir < 0 ? "-" : "";
    const type = TYPES[step] === "M" ? "majorable" : "perfectable";
    const name = d + num + altToQ(type, alt);
    return name;
}
function altToQ(type, alt) {
    if (alt === 0) return type === "majorable" ? "M" : "P";
    else if (alt === -1 && type === "majorable") return "m";
    else if (alt > 0) return fillStr("A", alt);
    else return fillStr("d", type === "perfectable" ? alt : alt + 1);
}
// src/distance.ts
function transpose(noteName, intervalName) {
    const note2 = note(noteName);
    const intervalCoord = Array.isArray(intervalName) ? intervalName : interval(intervalName).coord;
    if (note2.empty || !intervalCoord || intervalCoord.length < 2) return "";
    const noteCoord = note2.coord;
    const tr = noteCoord.length === 1 ? [
        noteCoord[0] + intervalCoord[0]
    ] : [
        noteCoord[0] + intervalCoord[0],
        noteCoord[1] + intervalCoord[1]
    ];
    return coordToNote(tr).name;
}
function tonicIntervalsTransposer(intervals, tonic) {
    const len = intervals.length;
    return (normalized)=>{
        if (!tonic) return "";
        const index = normalized < 0 ? (len - -normalized % len) % len : normalized % len;
        const octaves = Math.floor(normalized / len);
        const root = transpose(tonic, [
            0,
            octaves
        ]);
        return transpose(root, intervals[index]);
    };
}
function distance(fromNote, toNote) {
    const from = note(fromNote);
    const to = note(toNote);
    if (from.empty || to.empty) return "";
    const fcoord = from.coord;
    const tcoord = to.coord;
    const fifths = tcoord[0] - fcoord[0];
    const octs = fcoord.length === 2 && tcoord.length === 2 ? tcoord[1] - fcoord[1] : -Math.floor(fifths * 7 / 12);
    const forceDescending = to.height === from.height && to.midi !== null && from.midi !== null && from.step > to.step;
    return coordToInterval([
        fifths,
        octs
    ], forceDescending).name;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"iyyUH":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EmptyPcset", ()=>EmptyPcset);
parcelHelpers.export(exports, "chroma", ()=>chroma);
parcelHelpers.export(exports, "chromaToIntervals", ()=>chromaToIntervals);
parcelHelpers.export(exports, "chromas", ()=>chromas);
parcelHelpers.export(exports, "default", ()=>pcset_default);
parcelHelpers.export(exports, "filter", ()=>filter);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "includes", ()=>includes);
parcelHelpers.export(exports, "isChroma", ()=>isChroma);
parcelHelpers.export(exports, "isEqual", ()=>isEqual);
parcelHelpers.export(exports, "isNoteIncludedIn", ()=>isNoteIncludedIn);
parcelHelpers.export(exports, "isSubsetOf", ()=>isSubsetOf);
parcelHelpers.export(exports, "isSupersetOf", ()=>isSupersetOf);
parcelHelpers.export(exports, "modes", ()=>modes);
parcelHelpers.export(exports, "pcset", ()=>pcset);
var _collection = require("@tonaljs/collection");
var _core = require("@tonaljs/core");
var EmptyPcset = {
    empty: true,
    name: "",
    setNum: 0,
    chroma: "000000000000",
    normalized: "000000000000",
    intervals: []
};
var setNumToChroma = (num2)=>Number(num2).toString(2);
var chromaToNumber = (chroma2)=>parseInt(chroma2, 2);
var REGEX = /^[01]{12}$/;
function isChroma(set) {
    return REGEX.test(set);
}
var isPcsetNum = (set)=>typeof set === "number" && set >= 0 && set <= 4095;
var isPcset = (set)=>set && isChroma(set.chroma);
var cache = {
    [EmptyPcset.chroma]: EmptyPcset
};
function get(src) {
    const chroma2 = isChroma(src) ? src : isPcsetNum(src) ? setNumToChroma(src) : Array.isArray(src) ? listToChroma(src) : isPcset(src) ? src.chroma : EmptyPcset.chroma;
    return cache[chroma2] = cache[chroma2] || chromaToPcset(chroma2);
}
var pcset = (0, _core.deprecate)("Pcset.pcset", "Pcset.get", get);
var chroma = (set)=>get(set).chroma;
var intervals = (set)=>get(set).intervals;
var num = (set)=>get(set).setNum;
var IVLS = [
    "1P",
    "2m",
    "2M",
    "3m",
    "3M",
    "4P",
    "5d",
    "5P",
    "6m",
    "6M",
    "7m",
    "7M"
];
function chromaToIntervals(chroma2) {
    const intervals2 = [];
    for(let i = 0; i < 12; i++)if (chroma2.charAt(i) === "1") intervals2.push(IVLS[i]);
    return intervals2;
}
function chromas() {
    return (0, _collection.range)(2048, 4095).map(setNumToChroma);
}
function modes(set, normalize = true) {
    const pcs = get(set);
    const binary = pcs.chroma.split("");
    return (0, _collection.compact)(binary.map((_, i)=>{
        const r = (0, _collection.rotate)(i, binary);
        return normalize && r[0] === "0" ? null : r.join("");
    }));
}
function isEqual(s1, s2) {
    return get(s1).setNum === get(s2).setNum;
}
function isSubsetOf(set) {
    const s = get(set).setNum;
    return (notes)=>{
        const o = get(notes).setNum;
        return s && s !== o && (o & s) === o;
    };
}
function isSupersetOf(set) {
    const s = get(set).setNum;
    return (notes)=>{
        const o = get(notes).setNum;
        return s && s !== o && (o | s) === o;
    };
}
function isNoteIncludedIn(set) {
    const s = get(set);
    return (noteName)=>{
        const n = (0, _core.note)(noteName);
        return s && !n.empty && s.chroma.charAt(n.chroma) === "1";
    };
}
var includes = isNoteIncludedIn;
function filter(set) {
    const isIncluded = isNoteIncludedIn(set);
    return (notes)=>{
        return notes.filter(isIncluded);
    };
}
var pcset_default = {
    get,
    chroma,
    num,
    intervals,
    chromas,
    isSupersetOf,
    isSubsetOf,
    isNoteIncludedIn,
    isEqual,
    filter,
    modes,
    pcset
};
function chromaRotations(chroma2) {
    const binary = chroma2.split("");
    return binary.map((_, i)=>(0, _collection.rotate)(i, binary).join(""));
}
function chromaToPcset(chroma2) {
    const setNum = chromaToNumber(chroma2);
    const normalizedNum = chromaRotations(chroma2).map(chromaToNumber).filter((n)=>n >= 2048).sort()[0];
    const normalized = setNumToChroma(normalizedNum);
    const intervals2 = chromaToIntervals(chroma2);
    return {
        empty: false,
        name: "",
        setNum,
        chroma: chroma2,
        normalized,
        intervals: intervals2
    };
}
function listToChroma(set) {
    if (set.length === 0) return EmptyPcset.chroma;
    let pitch;
    const binary = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    for(let i = 0; i < set.length; i++){
        pitch = (0, _core.note)(set[i]);
        if (pitch.empty) pitch = (0, _core.interval)(set[i]);
        if (!pitch.empty) binary[pitch.chroma] = 1;
    }
    return binary.join("");
}

},{"@tonaljs/collection":"akihX","@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"akihX":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compact", ()=>compact);
parcelHelpers.export(exports, "default", ()=>collection_default);
parcelHelpers.export(exports, "permutations", ()=>permutations);
parcelHelpers.export(exports, "range", ()=>range);
parcelHelpers.export(exports, "rotate", ()=>rotate);
parcelHelpers.export(exports, "shuffle", ()=>shuffle);
function ascR(b, n) {
    const a = [];
    for(; n--; a[n] = n + b);
    return a;
}
function descR(b, n) {
    const a = [];
    for(; n--; a[n] = b - n);
    return a;
}
function range(from, to) {
    return from < to ? ascR(from, to - from + 1) : descR(from, from - to + 1);
}
function rotate(times, arr) {
    const len = arr.length;
    const n = (times % len + len) % len;
    return arr.slice(n, len).concat(arr.slice(0, n));
}
function compact(arr) {
    return arr.filter((n)=>n === 0 || n);
}
function shuffle(arr, rnd = Math.random) {
    let i;
    let t;
    let m = arr.length;
    while(m){
        i = Math.floor(rnd() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }
    return arr;
}
function permutations(arr) {
    if (arr.length === 0) return [
        []
    ];
    return permutations(arr.slice(1)).reduce((acc, perm)=>{
        return acc.concat(arr.map((e, pos)=>{
            const newPerm = perm.slice();
            newPerm.splice(pos, 0, arr[0]);
            return newPerm;
        }));
    }, []);
}
var collection_default = {
    compact,
    permutations,
    range,
    rotate,
    shuffle
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRJbX":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoScaleType", ()=>NoScaleType);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "addAlias", ()=>addAlias);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "default", ()=>scale_type_default);
parcelHelpers.export(exports, "entries", ()=>entries);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "keys", ()=>keys);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "removeAll", ()=>removeAll);
parcelHelpers.export(exports, "scaleType", ()=>scaleType);
var _core = require("@tonaljs/core");
var _pcset = require("@tonaljs/pcset");
// data.ts
var SCALES = [
    [
        "1P 2M 3M 5P 6M",
        "major pentatonic",
        "pentatonic"
    ],
    [
        "1P 2M 3M 4P 5P 6M 7M",
        "major",
        "ionian"
    ],
    [
        "1P 2M 3m 4P 5P 6m 7m",
        "minor",
        "aeolian"
    ],
    [
        "1P 2M 3m 3M 5P 6M",
        "major blues"
    ],
    [
        "1P 3m 4P 5d 5P 7m",
        "minor blues",
        "blues"
    ],
    [
        "1P 2M 3m 4P 5P 6M 7M",
        "melodic minor"
    ],
    [
        "1P 2M 3m 4P 5P 6m 7M",
        "harmonic minor"
    ],
    [
        "1P 2M 3M 4P 5P 6M 7m 7M",
        "bebop"
    ],
    [
        "1P 2M 3m 4P 5d 6m 6M 7M",
        "diminished",
        "whole-half diminished"
    ],
    [
        "1P 2M 3m 4P 5P 6M 7m",
        "dorian"
    ],
    [
        "1P 2M 3M 4A 5P 6M 7M",
        "lydian"
    ],
    [
        "1P 2M 3M 4P 5P 6M 7m",
        "mixolydian",
        "dominant"
    ],
    [
        "1P 2m 3m 4P 5P 6m 7m",
        "phrygian"
    ],
    [
        "1P 2m 3m 4P 5d 6m 7m",
        "locrian"
    ],
    [
        "1P 3M 4P 5P 7M",
        "ionian pentatonic"
    ],
    [
        "1P 3M 4P 5P 7m",
        "mixolydian pentatonic",
        "indian"
    ],
    [
        "1P 2M 4P 5P 6M",
        "ritusen"
    ],
    [
        "1P 2M 4P 5P 7m",
        "egyptian"
    ],
    [
        "1P 3M 4P 5d 7m",
        "neopolitan major pentatonic"
    ],
    [
        "1P 3m 4P 5P 6m",
        "vietnamese 1"
    ],
    [
        "1P 2m 3m 5P 6m",
        "pelog"
    ],
    [
        "1P 2m 4P 5P 6m",
        "kumoijoshi"
    ],
    [
        "1P 2M 3m 5P 6m",
        "hirajoshi"
    ],
    [
        "1P 2m 4P 5d 7m",
        "iwato"
    ],
    [
        "1P 2m 4P 5P 7m",
        "in-sen"
    ],
    [
        "1P 3M 4A 5P 7M",
        "lydian pentatonic",
        "chinese"
    ],
    [
        "1P 3m 4P 6m 7m",
        "malkos raga"
    ],
    [
        "1P 3m 4P 5d 7m",
        "locrian pentatonic",
        "minor seven flat five pentatonic"
    ],
    [
        "1P 3m 4P 5P 7m",
        "minor pentatonic",
        "vietnamese 2"
    ],
    [
        "1P 3m 4P 5P 6M",
        "minor six pentatonic"
    ],
    [
        "1P 2M 3m 5P 6M",
        "flat three pentatonic",
        "kumoi"
    ],
    [
        "1P 2M 3M 5P 6m",
        "flat six pentatonic"
    ],
    [
        "1P 2m 3M 5P 6M",
        "scriabin"
    ],
    [
        "1P 3M 5d 6m 7m",
        "whole tone pentatonic"
    ],
    [
        "1P 3M 4A 5A 7M",
        "lydian #5P pentatonic"
    ],
    [
        "1P 3M 4A 5P 7m",
        "lydian dominant pentatonic"
    ],
    [
        "1P 3m 4P 5P 7M",
        "minor #7M pentatonic"
    ],
    [
        "1P 3m 4d 5d 7m",
        "super locrian pentatonic"
    ],
    [
        "1P 2M 3m 4P 5P 7M",
        "minor hexatonic"
    ],
    [
        "1P 2A 3M 5P 5A 7M",
        "augmented"
    ],
    [
        "1P 2M 4P 5P 6M 7m",
        "piongio"
    ],
    [
        "1P 2m 3M 4A 6M 7m",
        "prometheus neopolitan"
    ],
    [
        "1P 2M 3M 4A 6M 7m",
        "prometheus"
    ],
    [
        "1P 2m 3M 5d 6m 7m",
        "mystery #1"
    ],
    [
        "1P 2m 3M 4P 5A 6M",
        "six tone symmetric"
    ],
    [
        "1P 2M 3M 4A 5A 6A",
        "whole tone",
        "messiaen's mode #1"
    ],
    [
        "1P 2m 4P 4A 5P 7M",
        "messiaen's mode #5"
    ],
    [
        "1P 2M 3M 4P 5d 6m 7m",
        "locrian major",
        "arabian"
    ],
    [
        "1P 2m 3M 4A 5P 6m 7M",
        "double harmonic lydian"
    ],
    [
        "1P 2m 2A 3M 4A 6m 7m",
        "altered",
        "super locrian",
        "diminished whole tone",
        "pomeroy"
    ],
    [
        "1P 2M 3m 4P 5d 6m 7m",
        "locrian #2",
        "half-diminished",
        "aeolian b5"
    ],
    [
        "1P 2M 3M 4P 5P 6m 7m",
        "mixolydian b6",
        "melodic minor fifth mode",
        "hindu"
    ],
    [
        "1P 2M 3M 4A 5P 6M 7m",
        "lydian dominant",
        "lydian b7",
        "overtone"
    ],
    [
        "1P 2M 3M 4A 5A 6M 7M",
        "lydian augmented"
    ],
    [
        "1P 2m 3m 4P 5P 6M 7m",
        "dorian b2",
        "phrygian #6",
        "melodic minor second mode"
    ],
    [
        "1P 2m 3m 4d 5d 6m 7d",
        "ultralocrian",
        "superlocrian bb7",
        "superlocrian diminished"
    ],
    [
        "1P 2m 3m 4P 5d 6M 7m",
        "locrian 6",
        "locrian natural 6",
        "locrian sharp 6"
    ],
    [
        "1P 2A 3M 4P 5P 5A 7M",
        "augmented heptatonic"
    ],
    [
        "1P 2M 3m 4A 5P 6M 7m",
        "dorian #4",
        "ukrainian dorian",
        "romanian minor",
        "altered dorian"
    ],
    [
        "1P 2M 3m 4A 5P 6M 7M",
        "lydian diminished"
    ],
    [
        "1P 2M 3M 4A 5A 7m 7M",
        "leading whole tone"
    ],
    [
        "1P 2M 3M 4A 5P 6m 7m",
        "lydian minor"
    ],
    [
        "1P 2m 3M 4P 5P 6m 7m",
        "phrygian dominant",
        "spanish",
        "phrygian major"
    ],
    [
        "1P 2m 3m 4P 5P 6m 7M",
        "balinese"
    ],
    [
        "1P 2m 3m 4P 5P 6M 7M",
        "neopolitan major"
    ],
    [
        "1P 2M 3M 4P 5P 6m 7M",
        "harmonic major"
    ],
    [
        "1P 2m 3M 4P 5P 6m 7M",
        "double harmonic major",
        "gypsy"
    ],
    [
        "1P 2M 3m 4A 5P 6m 7M",
        "hungarian minor"
    ],
    [
        "1P 2A 3M 4A 5P 6M 7m",
        "hungarian major"
    ],
    [
        "1P 2m 3M 4P 5d 6M 7m",
        "oriental"
    ],
    [
        "1P 2m 3m 3M 4A 5P 7m",
        "flamenco"
    ],
    [
        "1P 2m 3m 4A 5P 6m 7M",
        "todi raga"
    ],
    [
        "1P 2m 3M 4P 5d 6m 7M",
        "persian"
    ],
    [
        "1P 2m 3M 5d 6m 7m 7M",
        "enigmatic"
    ],
    [
        "1P 2M 3M 4P 5A 6M 7M",
        "major augmented",
        "major #5",
        "ionian augmented",
        "ionian #5"
    ],
    [
        "1P 2A 3M 4A 5P 6M 7M",
        "lydian #9"
    ],
    [
        "1P 2m 2M 4P 4A 5P 6m 7M",
        "messiaen's mode #4"
    ],
    [
        "1P 2m 3M 4P 4A 5P 6m 7M",
        "purvi raga"
    ],
    [
        "1P 2m 3m 3M 4P 5P 6m 7m",
        "spanish heptatonic"
    ],
    [
        "1P 2M 3m 3M 4P 5P 6M 7m",
        "bebop minor"
    ],
    [
        "1P 2M 3M 4P 5P 5A 6M 7M",
        "bebop major"
    ],
    [
        "1P 2m 3m 4P 5d 5P 6m 7m",
        "bebop locrian"
    ],
    [
        "1P 2M 3m 4P 5P 6m 7m 7M",
        "minor bebop"
    ],
    [
        "1P 2M 3M 4P 5d 5P 6M 7M",
        "ichikosucho"
    ],
    [
        "1P 2M 3m 4P 5P 6m 6M 7M",
        "minor six diminished"
    ],
    [
        "1P 2m 3m 3M 4A 5P 6M 7m",
        "half-whole diminished",
        "dominant diminished",
        "messiaen's mode #2"
    ],
    [
        "1P 3m 3M 4P 5P 6M 7m 7M",
        "kafi raga"
    ],
    [
        "1P 2M 3M 4P 4A 5A 6A 7M",
        "messiaen's mode #6"
    ],
    [
        "1P 2M 3m 3M 4P 5d 5P 6M 7m",
        "composite blues"
    ],
    [
        "1P 2M 3m 3M 4A 5P 6m 7m 7M",
        "messiaen's mode #3"
    ],
    [
        "1P 2m 2M 3m 4P 4A 5P 6m 6M 7M",
        "messiaen's mode #7"
    ],
    [
        "1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M",
        "chromatic"
    ]
];
var data_default = SCALES;
// index.ts
var NoScaleType = {
    ...(0, _pcset.EmptyPcset),
    intervals: [],
    aliases: []
};
var dictionary = [];
var index = {};
function names() {
    return dictionary.map((scale)=>scale.name);
}
function get(type) {
    return index[type] || NoScaleType;
}
var scaleType = (0, _core.deprecate)("ScaleDictionary.scaleType", "ScaleType.get", get);
function all() {
    return dictionary.slice();
}
var entries = (0, _core.deprecate)("ScaleDictionary.entries", "ScaleType.all", all);
function keys() {
    return Object.keys(index);
}
function removeAll() {
    dictionary = [];
    index = {};
}
function add(intervals, name, aliases = []) {
    const scale = {
        ...(0, _pcset.get)(intervals),
        name,
        intervals,
        aliases
    };
    dictionary.push(scale);
    index[scale.name] = scale;
    index[scale.setNum] = scale;
    index[scale.chroma] = scale;
    scale.aliases.forEach((alias)=>addAlias(scale, alias));
    return scale;
}
function addAlias(scale, alias) {
    index[alias] = scale;
}
data_default.forEach(([ivls, name, ...aliases])=>add(ivls.split(" "), name, aliases));
var scale_type_default = {
    names,
    get,
    all,
    add,
    removeAll,
    keys,
    entries,
    scaleType
};

},{"@tonaljs/core":"d3Dyc","@tonaljs/pcset":"iyyUH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h8GkW":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbcNotation", ()=>(0, _abcNotationDefault.default));
parcelHelpers.export(exports, "Array", ()=>_array);
parcelHelpers.export(exports, "Chord", ()=>(0, _chordDefault.default));
parcelHelpers.export(exports, "ChordDictionary", ()=>ChordDictionary);
parcelHelpers.export(exports, "ChordType", ()=>(0, _chordTypeDefault.default));
parcelHelpers.export(exports, "Collection", ()=>(0, _collectionDefault.default));
parcelHelpers.export(exports, "Core", ()=>_core);
parcelHelpers.export(exports, "DurationValue", ()=>(0, _durationValueDefault.default));
parcelHelpers.export(exports, "Interval", ()=>(0, _intervalDefault.default));
parcelHelpers.export(exports, "Key", ()=>(0, _keyDefault.default));
parcelHelpers.export(exports, "Midi", ()=>(0, _midiDefault.default));
parcelHelpers.export(exports, "Mode", ()=>(0, _modeDefault.default));
parcelHelpers.export(exports, "Note", ()=>(0, _noteDefault.default));
parcelHelpers.export(exports, "PcSet", ()=>PcSet);
parcelHelpers.export(exports, "Pcset", ()=>(0, _pcsetDefault.default));
parcelHelpers.export(exports, "Progression", ()=>(0, _progressionDefault.default));
parcelHelpers.export(exports, "Range", ()=>(0, _rangeDefault.default));
parcelHelpers.export(exports, "RomanNumeral", ()=>(0, _romanNumeralDefault.default));
parcelHelpers.export(exports, "Scale", ()=>(0, _scaleDefault.default));
parcelHelpers.export(exports, "ScaleDictionary", ()=>ScaleDictionary);
parcelHelpers.export(exports, "ScaleType", ()=>(0, _scaleTypeDefault.default));
parcelHelpers.export(exports, "TimeSignature", ()=>(0, _timeSignatureDefault.default));
parcelHelpers.export(exports, "Tonal", ()=>Tonal);
var _abcNotation = require("@tonaljs/abc-notation");
var _abcNotationDefault = parcelHelpers.interopDefault(_abcNotation);
var _array = require("@tonaljs/array");
var _chord = require("@tonaljs/chord");
var _chordDefault = parcelHelpers.interopDefault(_chord);
var _chordType = require("@tonaljs/chord-type");
var _chordTypeDefault = parcelHelpers.interopDefault(_chordType);
var _collection = require("@tonaljs/collection");
var _collectionDefault = parcelHelpers.interopDefault(_collection);
var _core = require("@tonaljs/core");
var _durationValue = require("@tonaljs/duration-value");
var _durationValueDefault = parcelHelpers.interopDefault(_durationValue);
var _interval = require("@tonaljs/interval");
var _intervalDefault = parcelHelpers.interopDefault(_interval);
var _key = require("@tonaljs/key");
var _keyDefault = parcelHelpers.interopDefault(_key);
var _midi = require("@tonaljs/midi");
var _midiDefault = parcelHelpers.interopDefault(_midi);
var _mode = require("@tonaljs/mode");
var _modeDefault = parcelHelpers.interopDefault(_mode);
var _note = require("@tonaljs/note");
var _noteDefault = parcelHelpers.interopDefault(_note);
var _pcset = require("@tonaljs/pcset");
var _pcsetDefault = parcelHelpers.interopDefault(_pcset);
var _progression = require("@tonaljs/progression");
var _progressionDefault = parcelHelpers.interopDefault(_progression);
var _range = require("@tonaljs/range");
var _rangeDefault = parcelHelpers.interopDefault(_range);
var _romanNumeral = require("@tonaljs/roman-numeral");
var _romanNumeralDefault = parcelHelpers.interopDefault(_romanNumeral);
var _scale = require("@tonaljs/scale");
var _scaleDefault = parcelHelpers.interopDefault(_scale);
var _scaleType = require("@tonaljs/scale-type");
var _scaleTypeDefault = parcelHelpers.interopDefault(_scaleType);
var _timeSignature = require("@tonaljs/time-signature");
var _timeSignatureDefault = parcelHelpers.interopDefault(_timeSignature);
parcelHelpers.exportAll(_core, exports);
var Tonal = _core;
var PcSet = (0, _pcsetDefault.default);
var ChordDictionary = (0, _chordTypeDefault.default);
var ScaleDictionary = (0, _scaleTypeDefault.default);

},{"@tonaljs/abc-notation":"drQEU","@tonaljs/array":"3k8ea","@tonaljs/chord":"6ncZZ","@tonaljs/chord-type":"fSYoM","@tonaljs/collection":"akihX","@tonaljs/core":"d3Dyc","@tonaljs/duration-value":"9nkSn","@tonaljs/interval":"2nbRQ","@tonaljs/key":"iUI0Q","@tonaljs/midi":"3mmFz","@tonaljs/mode":"aVKRW","@tonaljs/note":"aeHTX","@tonaljs/pcset":"iyyUH","@tonaljs/progression":"4YROa","@tonaljs/range":"8Q44U","@tonaljs/roman-numeral":"8RLpa","@tonaljs/scale":"cecAp","@tonaljs/scale-type":"eRJbX","@tonaljs/time-signature":"lbySg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"drQEU":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "abcToScientificNotation", ()=>abcToScientificNotation);
parcelHelpers.export(exports, "default", ()=>abc_notation_default);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "scientificToAbcNotation", ()=>scientificToAbcNotation);
parcelHelpers.export(exports, "tokenize", ()=>tokenize);
parcelHelpers.export(exports, "transpose", ()=>transpose);
var _core = require("@tonaljs/core");
var fillStr = (character, times)=>Array(times + 1).join(character);
var REGEX = /^(_{1,}|=|\^{1,}|)([abcdefgABCDEFG])([,']*)$/;
function tokenize(str) {
    const m = REGEX.exec(str);
    if (!m) return [
        "",
        "",
        ""
    ];
    return [
        m[1],
        m[2],
        m[3]
    ];
}
function abcToScientificNotation(str) {
    const [acc, letter, oct] = tokenize(str);
    if (letter === "") return "";
    let o = 4;
    for(let i = 0; i < oct.length; i++)o += oct.charAt(i) === "," ? -1 : 1;
    const a = acc[0] === "_" ? acc.replace(/_/g, "b") : acc[0] === "^" ? acc.replace(/\^/g, "#") : "";
    return letter.charCodeAt(0) > 96 ? letter.toUpperCase() + a + (o + 1) : letter + a + o;
}
function scientificToAbcNotation(str) {
    const n = (0, _core.note)(str);
    if (n.empty || !n.oct && n.oct !== 0) return "";
    const { letter , acc , oct  } = n;
    const a = acc[0] === "b" ? acc.replace(/b/g, "_") : acc.replace(/#/g, "^");
    const l = oct > 4 ? letter.toLowerCase() : letter;
    const o = oct === 5 ? "" : oct > 4 ? fillStr("'", oct - 5) : fillStr(",", 4 - oct);
    return a + l + o;
}
function transpose(note2, interval) {
    return scientificToAbcNotation((0, _core.transpose)(abcToScientificNotation(note2), interval));
}
function distance(from, to) {
    return (0, _core.distance)(abcToScientificNotation(from), abcToScientificNotation(to));
}
var abc_notation_default = {
    abcToScientificNotation,
    scientificToAbcNotation,
    tokenize,
    transpose,
    distance
};

},{"@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3k8ea":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compact", ()=>compact);
parcelHelpers.export(exports, "permutations", ()=>permutations);
parcelHelpers.export(exports, "range", ()=>range);
parcelHelpers.export(exports, "rotate", ()=>rotate);
parcelHelpers.export(exports, "shuffle", ()=>shuffle);
parcelHelpers.export(exports, "sortedNoteNames", ()=>sortedNoteNames);
parcelHelpers.export(exports, "sortedUniqNoteNames", ()=>sortedUniqNoteNames);
var _core = require("@tonaljs/core");
var isArray = Array.isArray;
function ascR(b, n) {
    const a = [];
    for(; n--; a[n] = n + b);
    return a;
}
function descR(b, n) {
    const a = [];
    for(; n--; a[n] = b - n);
    return a;
}
function range(from, to) {
    return from < to ? ascR(from, to - from + 1) : descR(from, from - to + 1);
}
function rotate(times, arr) {
    const len = arr.length;
    const n = (times % len + len) % len;
    return arr.slice(n, len).concat(arr.slice(0, n));
}
function compact(arr) {
    return arr.filter((n)=>n === 0 || n);
}
function sortedNoteNames(notes) {
    const valid = notes.map((n)=>(0, _core.note)(n)).filter((n)=>!n.empty);
    return valid.sort((a, b)=>a.height - b.height).map((n)=>n.name);
}
function sortedUniqNoteNames(arr) {
    return sortedNoteNames(arr).filter((n, i, a)=>i === 0 || n !== a[i - 1]);
}
function shuffle(arr, rnd = Math.random) {
    let i;
    let t;
    let m = arr.length;
    while(m){
        i = Math.floor(rnd() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }
    return arr;
}
function permutations(arr) {
    if (arr.length === 0) return [
        []
    ];
    return permutations(arr.slice(1)).reduce((acc, perm)=>{
        return acc.concat(arr.map((e, pos)=>{
            const newPerm = perm.slice();
            newPerm.splice(pos, 0, arr[0]);
            return newPerm;
        }));
    }, []);
}

},{"@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9nkSn":[function(require,module,exports) {
// data.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>duration_value_default);
parcelHelpers.export(exports, "fraction", ()=>fraction);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "shorthands", ()=>shorthands);
parcelHelpers.export(exports, "value", ()=>value);
var DATA = [
    [
        0.125,
        "dl",
        [
            "large",
            "duplex longa",
            "maxima",
            "octuple",
            "octuple whole"
        ]
    ],
    [
        0.25,
        "l",
        [
            "long",
            "longa"
        ]
    ],
    [
        0.5,
        "d",
        [
            "double whole",
            "double",
            "breve"
        ]
    ],
    [
        1,
        "w",
        [
            "whole",
            "semibreve"
        ]
    ],
    [
        2,
        "h",
        [
            "half",
            "minim"
        ]
    ],
    [
        4,
        "q",
        [
            "quarter",
            "crotchet"
        ]
    ],
    [
        8,
        "e",
        [
            "eighth",
            "quaver"
        ]
    ],
    [
        16,
        "s",
        [
            "sixteenth",
            "semiquaver"
        ]
    ],
    [
        32,
        "t",
        [
            "thirty-second",
            "demisemiquaver"
        ]
    ],
    [
        64,
        "sf",
        [
            "sixty-fourth",
            "hemidemisemiquaver"
        ]
    ],
    [
        128,
        "h",
        [
            "hundred twenty-eighth"
        ]
    ],
    [
        256,
        "th",
        [
            "two hundred fifty-sixth"
        ]
    ]
];
var data_default = DATA;
// index.ts
var VALUES = [];
data_default.forEach(([denominator, shorthand, names2])=>add(denominator, shorthand, names2));
var NoDuration = {
    empty: true,
    name: "",
    value: 0,
    fraction: [
        0,
        0
    ],
    shorthand: "",
    dots: "",
    names: []
};
function names() {
    return VALUES.reduce((names2, duration)=>{
        duration.names.forEach((name)=>names2.push(name));
        return names2;
    }, []);
}
function shorthands() {
    return VALUES.map((dur)=>dur.shorthand);
}
var REGEX = /^([^.]+)(\.*)$/;
function get(name) {
    const [_, simple, dots] = REGEX.exec(name) || [];
    const base = VALUES.find((dur)=>dur.shorthand === simple || dur.names.includes(simple));
    if (!base) return NoDuration;
    const fraction2 = calcDots(base.fraction, dots.length);
    const value2 = fraction2[0] / fraction2[1];
    return {
        ...base,
        name,
        dots,
        value: value2,
        fraction: fraction2
    };
}
var value = (name)=>get(name).value;
var fraction = (name)=>get(name).fraction;
var duration_value_default = {
    names,
    shorthands,
    get,
    value,
    fraction
};
function add(denominator, shorthand, names2) {
    VALUES.push({
        empty: false,
        dots: "",
        name: "",
        value: 1 / denominator,
        fraction: denominator < 1 ? [
            1 / denominator,
            1
        ] : [
            1,
            denominator
        ],
        shorthand,
        names: names2
    });
}
function calcDots(fraction2, dots) {
    const pow = Math.pow(2, dots);
    let numerator = fraction2[0] * pow;
    let denominator = fraction2[1] * pow;
    const base = numerator;
    for(let i = 0; i < dots; i++)numerator += base / Math.pow(2, i + 1);
    while(numerator % 2 === 0 && denominator % 2 === 0){
        numerator /= 2;
        denominator /= 2;
    }
    return [
        numerator,
        denominator
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nbRQ":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "addTo", ()=>addTo);
parcelHelpers.export(exports, "default", ()=>interval_default);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "fromSemitones", ()=>fromSemitones);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "invert", ()=>invert);
parcelHelpers.export(exports, "name", ()=>name);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "num", ()=>num);
parcelHelpers.export(exports, "quality", ()=>quality);
parcelHelpers.export(exports, "semitones", ()=>semitones);
parcelHelpers.export(exports, "simplify", ()=>simplify);
parcelHelpers.export(exports, "substract", ()=>substract);
parcelHelpers.export(exports, "transposeFifths", ()=>transposeFifths);
var _core = require("@tonaljs/core");
function names() {
    return "1P 2M 3M 4P 5P 6m 7m".split(" ");
}
var get = (0, _core.interval);
var name = (name2)=>(0, _core.interval)(name2).name;
var semitones = (name2)=>(0, _core.interval)(name2).semitones;
var quality = (name2)=>(0, _core.interval)(name2).q;
var num = (name2)=>(0, _core.interval)(name2).num;
function simplify(name2) {
    const i = (0, _core.interval)(name2);
    return i.empty ? "" : i.simple + i.q;
}
function invert(name2) {
    const i = (0, _core.interval)(name2);
    if (i.empty) return "";
    const step = (7 - i.step) % 7;
    const alt = i.type === "perfectable" ? -i.alt : -(i.alt + 1);
    return (0, _core.interval)({
        step,
        alt,
        oct: i.oct,
        dir: i.dir
    }).name;
}
var IN = [
    1,
    2,
    2,
    3,
    3,
    4,
    5,
    5,
    6,
    6,
    7,
    7
];
var IQ = "P m M m M P d P m M m M".split(" ");
function fromSemitones(semitones2) {
    const d = semitones2 < 0 ? -1 : 1;
    const n = Math.abs(semitones2);
    const c = n % 12;
    const o = Math.floor(n / 12);
    return d * (IN[c] + 7 * o) + IQ[c];
}
var distance = (0, _core.distance);
var add = combinator((a, b)=>[
        a[0] + b[0],
        a[1] + b[1]
    ]);
var addTo = (interval)=>(other)=>add(interval, other);
var substract = combinator((a, b)=>[
        a[0] - b[0],
        a[1] - b[1]
    ]);
function transposeFifths(interval, fifths) {
    const ivl = get(interval);
    if (ivl.empty) return "";
    const [nFifths, nOcts, dir] = ivl.coord;
    return (0, _core.coordToInterval)([
        nFifths + fifths,
        nOcts,
        dir
    ]).name;
}
var interval_default = {
    names,
    get,
    name,
    num,
    semitones,
    quality,
    fromSemitones,
    distance,
    invert,
    simplify,
    add,
    addTo,
    substract,
    transposeFifths
};
function combinator(fn) {
    return (a, b)=>{
        const coordA = (0, _core.interval)(a).coord;
        const coordB = (0, _core.interval)(b).coord;
        if (coordA && coordB) {
            const coord = fn(coordA, coordB);
            return (0, _core.coordToInterval)(coord).name;
        }
    };
}

},{"@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iUI0Q":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>key_default);
parcelHelpers.export(exports, "majorKey", ()=>majorKey);
parcelHelpers.export(exports, "majorTonicFromKeySignature", ()=>majorTonicFromKeySignature);
parcelHelpers.export(exports, "minorKey", ()=>minorKey);
var _core = require("@tonaljs/core");
var _note = require("@tonaljs/note");
var _romanNumeral = require("@tonaljs/roman-numeral");
var Empty = Object.freeze([]);
var NoKey = {
    type: "major",
    tonic: "",
    alteration: 0,
    keySignature: ""
};
var NoKeyScale = {
    tonic: "",
    grades: Empty,
    intervals: Empty,
    scale: Empty,
    triads: Empty,
    chords: Empty,
    chordsHarmonicFunction: Empty,
    chordScales: Empty
};
var NoMajorKey = {
    ...NoKey,
    ...NoKeyScale,
    type: "major",
    minorRelative: "",
    scale: Empty,
    secondaryDominants: Empty,
    secondaryDominantsMinorRelative: Empty,
    substituteDominants: Empty,
    substituteDominantsMinorRelative: Empty
};
var NoMinorKey = {
    ...NoKey,
    type: "minor",
    relativeMajor: "",
    natural: NoKeyScale,
    harmonic: NoKeyScale,
    melodic: NoKeyScale
};
var mapScaleToType = (scale, list, sep = "")=>list.map((type, i)=>`${scale[i]}${sep}${type}`);
function keyScale(grades, triads, chords, harmonicFunctions, chordScales) {
    return (tonic)=>{
        const intervals = grades.map((gr)=>(0, _romanNumeral.get)(gr).interval || "");
        const scale = intervals.map((interval)=>(0, _core.transpose)(tonic, interval));
        return {
            tonic,
            grades,
            intervals,
            scale,
            triads: mapScaleToType(scale, triads),
            chords: mapScaleToType(scale, chords),
            chordsHarmonicFunction: harmonicFunctions.slice(),
            chordScales: mapScaleToType(scale, chordScales, " ")
        };
    };
}
var distInFifths = (from, to)=>{
    const f = (0, _core.note)(from);
    const t = (0, _core.note)(to);
    return f.empty || t.empty ? 0 : t.coord[0] - f.coord[0];
};
var MajorScale = keyScale("I II III IV V VI VII".split(" "), " m m   m dim".split(" "), "maj7 m7 m7 maj7 7 m7 m7b5".split(" "), "T SD T SD D T D".split(" "), "major,dorian,phrygian,lydian,mixolydian,minor,locrian".split(","));
var NaturalScale = keyScale("I II bIII IV V bVI bVII".split(" "), "m dim  m m  ".split(" "), "m7 m7b5 maj7 m7 m7 maj7 7".split(" "), "T SD T SD D SD SD".split(" "), "minor,locrian,major,dorian,phrygian,lydian,mixolydian".split(","));
var HarmonicScale = keyScale("I II bIII IV V bVI VII".split(" "), "m dim aug m   dim".split(" "), "mMaj7 m7b5 +maj7 m7 7 maj7 o7".split(" "), "T SD T SD D SD D".split(" "), "harmonic minor,locrian 6,major augmented,lydian diminished,phrygian dominant,lydian #9,ultralocrian".split(","));
var MelodicScale = keyScale("I II bIII IV V VI VII".split(" "), "m m aug   dim dim".split(" "), "m6 m7 +maj7 7 7 m7b5 m7b5".split(" "), "T SD T SD D  ".split(" "), "melodic minor,dorian b2,lydian augmented,lydian dominant,mixolydian b6,locrian #2,altered".split(","));
function majorKey(tonic) {
    const pc = (0, _core.note)(tonic).pc;
    if (!pc) return NoMajorKey;
    const keyScale2 = MajorScale(pc);
    const alteration = distInFifths("C", pc);
    const romanInTonic = (src)=>{
        const r = (0, _romanNumeral.get)(src);
        if (r.empty) return "";
        return (0, _core.transpose)(tonic, r.interval) + r.chordType;
    };
    return {
        ...keyScale2,
        type: "major",
        minorRelative: (0, _core.transpose)(pc, "-3m"),
        alteration,
        keySignature: (0, _core.altToAcc)(alteration),
        secondaryDominants: "- VI7 VII7 I7 II7 III7 -".split(" ").map(romanInTonic),
        secondaryDominantsMinorRelative: "- IIIm7b5 IV#m7 Vm7 VIm7 VIIm7b5 -".split(" ").map(romanInTonic),
        substituteDominants: "- bIII7 IV7 bV7 bVI7 bVII7 -".split(" ").map(romanInTonic),
        substituteDominantsMinorRelative: "- IIIm7 Im7 IIbm7 VIm7 IVm7 -".split(" ").map(romanInTonic)
    };
}
function minorKey(tnc) {
    const pc = (0, _core.note)(tnc).pc;
    if (!pc) return NoMinorKey;
    const alteration = distInFifths("C", pc) - 3;
    return {
        type: "minor",
        tonic: pc,
        relativeMajor: (0, _core.transpose)(pc, "3m"),
        alteration,
        keySignature: (0, _core.altToAcc)(alteration),
        natural: NaturalScale(pc),
        harmonic: HarmonicScale(pc),
        melodic: MelodicScale(pc)
    };
}
function majorTonicFromKeySignature(sig) {
    if (typeof sig === "number") return (0, _note.transposeFifths)("C", sig);
    else if (typeof sig === "string" && /^b+|#+$/.test(sig)) return (0, _note.transposeFifths)("C", (0, _core.accToAlt)(sig));
    return null;
}
var key_default = {
    majorKey,
    majorTonicFromKeySignature,
    minorKey
};

},{"@tonaljs/core":"d3Dyc","@tonaljs/note":"aeHTX","@tonaljs/roman-numeral":"8RLpa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aeHTX":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "accidentals", ()=>accidentals);
parcelHelpers.export(exports, "ascending", ()=>ascending);
parcelHelpers.export(exports, "chroma", ()=>chroma);
parcelHelpers.export(exports, "default", ()=>note_default);
parcelHelpers.export(exports, "descending", ()=>descending);
parcelHelpers.export(exports, "enharmonic", ()=>enharmonic);
parcelHelpers.export(exports, "freq", ()=>freq);
parcelHelpers.export(exports, "fromFreq", ()=>fromFreq);
parcelHelpers.export(exports, "fromFreqSharps", ()=>fromFreqSharps);
parcelHelpers.export(exports, "fromMidi", ()=>fromMidi);
parcelHelpers.export(exports, "fromMidiSharps", ()=>fromMidiSharps);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "midi", ()=>midi);
parcelHelpers.export(exports, "name", ()=>name);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "octave", ()=>octave);
parcelHelpers.export(exports, "pitchClass", ()=>pitchClass);
parcelHelpers.export(exports, "simplify", ()=>simplify);
parcelHelpers.export(exports, "sortedNames", ()=>sortedNames);
parcelHelpers.export(exports, "sortedUniqNames", ()=>sortedUniqNames);
parcelHelpers.export(exports, "tr", ()=>tr);
parcelHelpers.export(exports, "trBy", ()=>trBy);
parcelHelpers.export(exports, "trFifths", ()=>trFifths);
parcelHelpers.export(exports, "trFrom", ()=>trFrom);
parcelHelpers.export(exports, "transpose", ()=>transpose);
parcelHelpers.export(exports, "transposeBy", ()=>transposeBy);
parcelHelpers.export(exports, "transposeFifths", ()=>transposeFifths);
parcelHelpers.export(exports, "transposeFrom", ()=>transposeFrom);
parcelHelpers.export(exports, "transposeOctaves", ()=>transposeOctaves);
var _core = require("@tonaljs/core");
var _midi = require("@tonaljs/midi");
var NAMES = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B"
];
var toName = (n)=>n.name;
var onlyNotes = (array)=>array.map((0, _core.note)).filter((n)=>!n.empty);
function names(array) {
    if (array === void 0) return NAMES.slice();
    else if (!Array.isArray(array)) return [];
    else return onlyNotes(array).map(toName);
}
var get = (0, _core.note);
var name = (note)=>get(note).name;
var pitchClass = (note)=>get(note).pc;
var accidentals = (note)=>get(note).acc;
var octave = (note)=>get(note).oct;
var midi = (note)=>get(note).midi;
var freq = (note)=>get(note).freq;
var chroma = (note)=>get(note).chroma;
function fromMidi(midi2) {
    return (0, _midi.midiToNoteName)(midi2);
}
function fromFreq(freq2) {
    return (0, _midi.midiToNoteName)((0, _midi.freqToMidi)(freq2));
}
function fromFreqSharps(freq2) {
    return (0, _midi.midiToNoteName)((0, _midi.freqToMidi)(freq2), {
        sharps: true
    });
}
function fromMidiSharps(midi2) {
    return (0, _midi.midiToNoteName)(midi2, {
        sharps: true
    });
}
var transpose = (0, _core.transpose);
var tr = (0, _core.transpose);
var transposeBy = (interval)=>(note)=>transpose(note, interval);
var trBy = transposeBy;
var transposeFrom = (note)=>(interval)=>transpose(note, interval);
var trFrom = transposeFrom;
function transposeFifths(noteName, fifths) {
    return transpose(noteName, [
        fifths,
        0
    ]);
}
var trFifths = transposeFifths;
function transposeOctaves(noteName, octaves) {
    return transpose(noteName, [
        0,
        octaves
    ]);
}
var ascending = (a, b)=>a.height - b.height;
var descending = (a, b)=>b.height - a.height;
function sortedNames(notes, comparator) {
    comparator = comparator || ascending;
    return onlyNotes(notes).sort(comparator).map(toName);
}
function sortedUniqNames(notes) {
    return sortedNames(notes, ascending).filter((n, i, a)=>i === 0 || n !== a[i - 1]);
}
var simplify = (noteName)=>{
    const note = get(noteName);
    if (note.empty) return "";
    return (0, _midi.midiToNoteName)(note.midi || note.chroma, {
        sharps: note.alt > 0,
        pitchClass: note.midi === null
    });
};
function enharmonic(noteName, destName) {
    const src = get(noteName);
    if (src.empty) return "";
    const dest = get(destName || (0, _midi.midiToNoteName)(src.midi || src.chroma, {
        sharps: src.alt < 0,
        pitchClass: true
    }));
    if (dest.empty || dest.chroma !== src.chroma) return "";
    if (src.oct === void 0) return dest.pc;
    const srcChroma = src.chroma - src.alt;
    const destChroma = dest.chroma - dest.alt;
    const destOctOffset = srcChroma > 11 || destChroma < 0 ? -1 : srcChroma < 0 || destChroma > 11 ? 1 : 0;
    const destOct = src.oct + destOctOffset;
    return dest.pc + destOct;
}
var note_default = {
    names,
    get,
    name,
    pitchClass,
    accidentals,
    octave,
    midi,
    ascending,
    descending,
    sortedNames,
    sortedUniqNames,
    fromMidi,
    fromMidiSharps,
    freq,
    fromFreq,
    fromFreqSharps,
    chroma,
    transpose,
    tr,
    transposeBy,
    trBy,
    transposeFrom,
    trFrom,
    transposeFifths,
    transposeOctaves,
    trFifths,
    simplify,
    enharmonic
};

},{"@tonaljs/core":"d3Dyc","@tonaljs/midi":"3mmFz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3mmFz":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chroma", ()=>chroma);
parcelHelpers.export(exports, "default", ()=>midi_default);
parcelHelpers.export(exports, "freqToMidi", ()=>freqToMidi);
parcelHelpers.export(exports, "isMidi", ()=>isMidi);
parcelHelpers.export(exports, "midiToFreq", ()=>midiToFreq);
parcelHelpers.export(exports, "midiToNoteName", ()=>midiToNoteName);
parcelHelpers.export(exports, "pcset", ()=>pcset);
parcelHelpers.export(exports, "pcsetDegrees", ()=>pcsetDegrees);
parcelHelpers.export(exports, "pcsetNearest", ()=>pcsetNearest);
parcelHelpers.export(exports, "pcsetSteps", ()=>pcsetSteps);
parcelHelpers.export(exports, "toMidi", ()=>toMidi);
var _core = require("@tonaljs/core");
function isMidi(arg) {
    return +arg >= 0 && +arg <= 127;
}
function toMidi(note) {
    if (isMidi(note)) return +note;
    const n = (0, _core.note)(note);
    return n.empty ? null : n.midi;
}
function midiToFreq(midi, tuning = 440) {
    return Math.pow(2, (midi - 69) / 12) * tuning;
}
var L2 = Math.log(2);
var L440 = Math.log(440);
function freqToMidi(freq) {
    const v = 12 * (Math.log(freq) - L440) / L2 + 69;
    return Math.round(v * 100) / 100;
}
var SHARPS = "C C# D D# E F F# G G# A A# B".split(" ");
var FLATS = "C Db D Eb E F Gb G Ab A Bb B".split(" ");
function midiToNoteName(midi, options = {}) {
    if (isNaN(midi) || midi === -Infinity || midi === Infinity) return "";
    midi = Math.round(midi);
    const pcs = options.sharps === true ? SHARPS : FLATS;
    const pc = pcs[midi % 12];
    if (options.pitchClass) return pc;
    const o = Math.floor(midi / 12) - 1;
    return pc + o;
}
function chroma(midi) {
    return midi % 12;
}
function pcsetFromChroma(chroma2) {
    return chroma2.split("").reduce((pcset2, val, index)=>{
        if (index < 12 && val === "1") pcset2.push(index);
        return pcset2;
    }, []);
}
function pcsetFromMidi(midi) {
    return midi.map(chroma).sort((a, b)=>a - b).filter((n, i, a)=>i === 0 || n !== a[i - 1]);
}
function pcset(notes) {
    return Array.isArray(notes) ? pcsetFromMidi(notes) : pcsetFromChroma(notes);
}
function pcsetNearest(notes) {
    const set = pcset(notes);
    return (midi)=>{
        const ch = chroma(midi);
        for(let i = 0; i < 12; i++){
            if (set.includes(ch + i)) return midi + i;
            if (set.includes(ch - i)) return midi - i;
        }
        return void 0;
    };
}
function pcsetSteps(notes, tonic) {
    const set = pcset(notes);
    const len = set.length;
    return (step)=>{
        const index = step < 0 ? (len - -step % len) % len : step % len;
        const octaves = Math.floor(step / len);
        return set[index] + octaves * 12 + tonic;
    };
}
function pcsetDegrees(notes, tonic) {
    const steps = pcsetSteps(notes, tonic);
    return (degree)=>{
        if (degree === 0) return void 0;
        return steps(degree > 0 ? degree - 1 : degree);
    };
}
var midi_default = {
    chroma,
    freqToMidi,
    isMidi,
    midiToFreq,
    midiToNoteName,
    pcsetNearest,
    pcset,
    pcsetDegrees,
    pcsetSteps,
    toMidi
};

},{"@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8RLpa":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>roman_numeral_default);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "tokenize", ()=>tokenize);
var _core = require("@tonaljs/core");
var NoRomanNumeral = {
    empty: true,
    name: "",
    chordType: ""
};
var cache = {};
function get(src) {
    return typeof src === "string" ? cache[src] || (cache[src] = parse(src)) : typeof src === "number" ? get(NAMES[src] || "") : (0, _core.isPitch)(src) ? fromPitch(src) : (0, _core.isNamed)(src) ? get(src.name) : NoRomanNumeral;
}
var romanNumeral = (0, _core.deprecate)("RomanNumeral.romanNumeral", "RomanNumeral.get", get);
function names(major = true) {
    return (major ? NAMES : NAMES_MINOR).slice();
}
function fromPitch(pitch) {
    return get((0, _core.altToAcc)(pitch.alt) + NAMES[pitch.step]);
}
var REGEX = /^(#{1,}|b{1,}|x{1,}|)(IV|I{1,3}|VI{0,2}|iv|i{1,3}|vi{0,2})([^IViv]*)$/;
function tokenize(str) {
    return REGEX.exec(str) || [
        "",
        "",
        "",
        ""
    ];
}
var ROMANS = "I II III IV V VI VII";
var NAMES = ROMANS.split(" ");
var NAMES_MINOR = ROMANS.toLowerCase().split(" ");
function parse(src) {
    const [name, acc, roman, chordType] = tokenize(src);
    if (!roman) return NoRomanNumeral;
    const upperRoman = roman.toUpperCase();
    const step = NAMES.indexOf(upperRoman);
    const alt = (0, _core.accToAlt)(acc);
    const dir = 1;
    return {
        empty: false,
        name,
        roman,
        interval: (0, _core.interval)({
            step,
            alt,
            dir
        }).name,
        acc,
        chordType,
        alt,
        step,
        major: roman === upperRoman,
        oct: 0,
        dir
    };
}
var roman_numeral_default = {
    names,
    get,
    romanNumeral
};

},{"@tonaljs/core":"d3Dyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aVKRW":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "default", ()=>mode_default);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "entries", ()=>entries);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "mode", ()=>mode);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "notes", ()=>notes);
parcelHelpers.export(exports, "relativeTonic", ()=>relativeTonic);
parcelHelpers.export(exports, "seventhChords", ()=>seventhChords);
parcelHelpers.export(exports, "triads", ()=>triads);
var _collection = require("@tonaljs/collection");
var _core = require("@tonaljs/core");
var _interval = require("@tonaljs/interval");
var _pcset = require("@tonaljs/pcset");
var _scaleType = require("@tonaljs/scale-type");
var MODES = [
    [
        0,
        2773,
        0,
        "ionian",
        "",
        "Maj7",
        "major"
    ],
    [
        1,
        2902,
        2,
        "dorian",
        "m",
        "m7"
    ],
    [
        2,
        3418,
        4,
        "phrygian",
        "m",
        "m7"
    ],
    [
        3,
        2741,
        -1,
        "lydian",
        "",
        "Maj7"
    ],
    [
        4,
        2774,
        1,
        "mixolydian",
        "",
        "7"
    ],
    [
        5,
        2906,
        3,
        "aeolian",
        "m",
        "m7",
        "minor"
    ],
    [
        6,
        3434,
        5,
        "locrian",
        "dim",
        "m7b5"
    ]
];
var NoMode = {
    ...(0, _pcset.EmptyPcset),
    name: "",
    alt: 0,
    modeNum: NaN,
    triad: "",
    seventh: "",
    aliases: []
};
var modes = MODES.map(toMode);
var index = {};
modes.forEach((mode2)=>{
    index[mode2.name] = mode2;
    mode2.aliases.forEach((alias)=>{
        index[alias] = mode2;
    });
});
function get(name) {
    return typeof name === "string" ? index[name.toLowerCase()] || NoMode : name && name.name ? get(name.name) : NoMode;
}
var mode = (0, _core.deprecate)("Mode.mode", "Mode.get", get);
function all() {
    return modes.slice();
}
var entries = (0, _core.deprecate)("Mode.mode", "Mode.all", all);
function names() {
    return modes.map((mode2)=>mode2.name);
}
function toMode(mode2) {
    const [modeNum, setNum, alt, name, triad, seventh, alias] = mode2;
    const aliases = alias ? [
        alias
    ] : [];
    const chroma = Number(setNum).toString(2);
    const intervals = (0, _scaleType.get)(name).intervals;
    return {
        empty: false,
        intervals,
        modeNum,
        chroma,
        normalized: chroma,
        name,
        setNum,
        alt,
        triad,
        seventh,
        aliases
    };
}
function notes(modeName, tonic) {
    return get(modeName).intervals.map((ivl)=>(0, _core.transpose)(tonic, ivl));
}
function chords(chords2) {
    return (modeName, tonic)=>{
        const mode2 = get(modeName);
        if (mode2.empty) return [];
        const triads2 = (0, _collection.rotate)(mode2.modeNum, chords2);
        const tonics = mode2.intervals.map((i)=>(0, _core.transpose)(tonic, i));
        return triads2.map((triad, i)=>tonics[i] + triad);
    };
}
var triads = chords(MODES.map((x)=>x[4]));
var seventhChords = chords(MODES.map((x)=>x[5]));
function distance(destination, source) {
    const from = get(source);
    const to = get(destination);
    if (from.empty || to.empty) return "";
    return (0, _interval.simplify)((0, _interval.transposeFifths)("1P", to.alt - from.alt));
}
function relativeTonic(destination, source, tonic) {
    return (0, _core.transpose)(tonic, distance(destination, source));
}
var mode_default = {
    get,
    names,
    all,
    distance,
    relativeTonic,
    notes,
    triads,
    seventhChords,
    entries,
    mode
};

},{"@tonaljs/collection":"akihX","@tonaljs/core":"d3Dyc","@tonaljs/interval":"2nbRQ","@tonaljs/pcset":"iyyUH","@tonaljs/scale-type":"eRJbX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4YROa":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>progression_default);
parcelHelpers.export(exports, "fromRomanNumerals", ()=>fromRomanNumerals);
parcelHelpers.export(exports, "toRomanNumerals", ()=>toRomanNumerals);
var _chord = require("@tonaljs/chord");
var _core = require("@tonaljs/core");
var _romanNumeral = require("@tonaljs/roman-numeral");
function fromRomanNumerals(tonic, chords) {
    const romanNumerals = chords.map((0, _romanNumeral.get));
    return romanNumerals.map((rn)=>(0, _core.transpose)(tonic, (0, _core.interval)(rn)) + rn.chordType);
}
function toRomanNumerals(tonic, chords) {
    return chords.map((chord)=>{
        const [note, chordType] = (0, _chord.tokenize)(chord);
        const intervalName = (0, _core.distance)(tonic, note);
        const roman = (0, _romanNumeral.get)((0, _core.interval)(intervalName));
        return roman.name + chordType;
    });
}
var progression_default = {
    fromRomanNumerals,
    toRomanNumerals
};

},{"@tonaljs/chord":"6ncZZ","@tonaljs/core":"d3Dyc","@tonaljs/roman-numeral":"8RLpa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Q44U":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chromatic", ()=>chromatic);
parcelHelpers.export(exports, "default", ()=>range_default);
parcelHelpers.export(exports, "numeric", ()=>numeric);
var _collection = require("@tonaljs/collection");
var _midi = require("@tonaljs/midi");
function numeric(notes) {
    const midi = (0, _collection.compact)(notes.map((note)=>typeof note === "number" ? note : (0, _midi.toMidi)(note)));
    if (!notes.length || midi.length !== notes.length) return [];
    return midi.reduce((result, note)=>{
        const last = result[result.length - 1];
        return result.concat((0, _collection.range)(last, note).slice(1));
    }, [
        midi[0]
    ]);
}
function chromatic(notes, options) {
    return numeric(notes).map((midi)=>(0, _midi.midiToNoteName)(midi, options));
}
var range_default = {
    numeric,
    chromatic
};

},{"@tonaljs/collection":"akihX","@tonaljs/midi":"3mmFz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cecAp":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>scale_default);
parcelHelpers.export(exports, "degrees", ()=>degrees);
parcelHelpers.export(exports, "detect", ()=>detect);
parcelHelpers.export(exports, "extended", ()=>extended);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "modeNames", ()=>modeNames);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "rangeOf", ()=>rangeOf);
parcelHelpers.export(exports, "reduced", ()=>reduced);
parcelHelpers.export(exports, "scale", ()=>scale);
parcelHelpers.export(exports, "scaleChords", ()=>scaleChords);
parcelHelpers.export(exports, "scaleNotes", ()=>scaleNotes);
parcelHelpers.export(exports, "steps", ()=>steps);
parcelHelpers.export(exports, "tokenize", ()=>tokenize);
var _chordType = require("@tonaljs/chord-type");
var _collection = require("@tonaljs/collection");
var _core = require("@tonaljs/core");
var _note = require("@tonaljs/note");
var _pcset = require("@tonaljs/pcset");
var _scaleType = require("@tonaljs/scale-type");
var NoScale = {
    empty: true,
    name: "",
    type: "",
    tonic: null,
    setNum: NaN,
    chroma: "",
    normalized: "",
    aliases: [],
    notes: [],
    intervals: []
};
function tokenize(name) {
    if (typeof name !== "string") return [
        "",
        ""
    ];
    const i = name.indexOf(" ");
    const tonic = (0, _core.note)(name.substring(0, i));
    if (tonic.empty) {
        const n = (0, _core.note)(name);
        return n.empty ? [
            "",
            name
        ] : [
            n.name,
            ""
        ];
    }
    const type = name.substring(tonic.name.length + 1);
    return [
        tonic.name,
        type.length ? type : ""
    ];
}
var names = (0, _scaleType.names);
function get(src) {
    const tokens = Array.isArray(src) ? src : tokenize(src);
    const tonic = (0, _core.note)(tokens[0]).name;
    const st = (0, _scaleType.get)(tokens[1]);
    if (st.empty) return NoScale;
    const type = st.name;
    const notes = tonic ? st.intervals.map((i)=>(0, _core.transpose)(tonic, i)) : [];
    const name = tonic ? tonic + " " + type : type;
    return {
        ...st,
        name,
        type,
        tonic,
        notes
    };
}
var scale = (0, _core.deprecate)("Scale.scale", "Scale.get", get);
function detect(notes, options = {}) {
    const notesChroma = (0, _pcset.chroma)(notes);
    const tonic = (0, _core.note)(options.tonic ?? notes[0] ?? "");
    const tonicChroma = tonic.chroma;
    if (tonicChroma === void 0) return [];
    const pitchClasses = notesChroma.split("");
    pitchClasses[tonicChroma] = "1";
    const scaleChroma = (0, _collection.rotate)(tonicChroma, pitchClasses).join("");
    const match = (0, _scaleType.all)().find((scaleType)=>scaleType.chroma === scaleChroma);
    const results = [];
    if (match) results.push(tonic.name + " " + match.name);
    if (options.match === "exact") return results;
    extended(scaleChroma).forEach((scaleName)=>{
        results.push(tonic.name + " " + scaleName);
    });
    return results;
}
function scaleChords(name) {
    const s = get(name);
    const inScale = (0, _pcset.isSubsetOf)(s.chroma);
    return (0, _chordType.all)().filter((chord)=>inScale(chord.chroma)).map((chord)=>chord.aliases[0]);
}
function extended(name) {
    const chroma2 = (0, _pcset.isChroma)(name) ? name : get(name).chroma;
    const isSuperset = (0, _pcset.isSupersetOf)(chroma2);
    return (0, _scaleType.all)().filter((scale2)=>isSuperset(scale2.chroma)).map((scale2)=>scale2.name);
}
function reduced(name) {
    const isSubset = (0, _pcset.isSubsetOf)(get(name).chroma);
    return (0, _scaleType.all)().filter((scale2)=>isSubset(scale2.chroma)).map((scale2)=>scale2.name);
}
function scaleNotes(notes) {
    const pcset = notes.map((n)=>(0, _core.note)(n).pc).filter((x)=>x);
    const tonic = pcset[0];
    const scale2 = (0, _note.sortedUniqNames)(pcset);
    return (0, _collection.rotate)(scale2.indexOf(tonic), scale2);
}
function modeNames(name) {
    const s = get(name);
    if (s.empty) return [];
    const tonics = s.tonic ? s.notes : s.intervals;
    return (0, _pcset.modes)(s.chroma).map((chroma2, i)=>{
        const modeName = get(chroma2).name;
        return modeName ? [
            tonics[i],
            modeName
        ] : [
            "",
            ""
        ];
    }).filter((x)=>x[0]);
}
function getNoteNameOf(scale2) {
    const names2 = Array.isArray(scale2) ? scaleNotes(scale2) : get(scale2).notes;
    const chromas = names2.map((name)=>(0, _core.note)(name).chroma);
    return (noteOrMidi)=>{
        const currNote = typeof noteOrMidi === "number" ? (0, _core.note)((0, _note.fromMidi)(noteOrMidi)) : (0, _core.note)(noteOrMidi);
        const height = currNote.height;
        if (height === void 0) return void 0;
        const chroma2 = height % 12;
        const position = chromas.indexOf(chroma2);
        if (position === -1) return void 0;
        return (0, _note.enharmonic)(currNote.name, names2[position]);
    };
}
function rangeOf(scale2) {
    const getName = getNoteNameOf(scale2);
    return (fromNote, toNote)=>{
        const from = (0, _core.note)(fromNote).height;
        const to = (0, _core.note)(toNote).height;
        if (from === void 0 || to === void 0) return [];
        return (0, _collection.range)(from, to).map(getName).filter((x)=>x);
    };
}
function degrees(scaleName) {
    const { intervals , tonic  } = get(scaleName);
    const transpose2 = (0, _core.tonicIntervalsTransposer)(intervals, tonic);
    return (degree)=>degree ? transpose2(degree > 0 ? degree - 1 : degree) : "";
}
function steps(scaleName) {
    const { intervals , tonic  } = get(scaleName);
    return (0, _core.tonicIntervalsTransposer)(intervals, tonic);
}
var scale_default = {
    degrees,
    detect,
    extended,
    get,
    modeNames,
    names,
    rangeOf,
    reduced,
    scaleChords,
    scaleNotes,
    steps,
    tokenize,
    scale
};

},{"@tonaljs/chord-type":"fSYoM","@tonaljs/collection":"akihX","@tonaljs/core":"d3Dyc","@tonaljs/note":"aeHTX","@tonaljs/pcset":"iyyUH","@tonaljs/scale-type":"eRJbX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lbySg":[function(require,module,exports) {
// index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>time_signature_default);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "names", ()=>names);
parcelHelpers.export(exports, "parse", ()=>parse);
var NONE = {
    empty: true,
    name: "",
    upper: void 0,
    lower: void 0,
    type: void 0,
    additive: []
};
var NAMES = [
    "4/4",
    "3/4",
    "2/4",
    "2/2",
    "12/8",
    "9/8",
    "6/8",
    "3/8"
];
function names() {
    return NAMES.slice();
}
var REGEX = /^(\d*\d(?:\+\d)*)\/(\d+)$/;
var CACHE = /* @__PURE__ */ new Map();
function get(literal) {
    const stringifiedLiteral = JSON.stringify(literal);
    const cached = CACHE.get(stringifiedLiteral);
    if (cached) return cached;
    const ts = build(parse(literal));
    CACHE.set(stringifiedLiteral, ts);
    return ts;
}
function parse(literal) {
    if (typeof literal === "string") {
        const [_, up2, low] = REGEX.exec(literal) || [];
        return parse([
            up2,
            low
        ]);
    }
    const [up, down] = literal;
    const denominator = +down;
    if (typeof up === "number") return [
        up,
        denominator
    ];
    const list = up.split("+").map((n)=>+n);
    return list.length === 1 ? [
        list[0],
        denominator
    ] : [
        list,
        denominator
    ];
}
var time_signature_default = {
    names,
    parse,
    get
};
var isPowerOfTwo = (x)=>Math.log(x) / Math.log(2) % 1 === 0;
function build([up, down]) {
    const upper = Array.isArray(up) ? up.reduce((a, b)=>a + b, 0) : up;
    const lower = down;
    if (upper === 0 || lower === 0) return NONE;
    const name = Array.isArray(up) ? `${up.join("+")}/${down}` : `${up}/${down}`;
    const additive = Array.isArray(up) ? up : [];
    const type = lower === 4 || lower === 2 ? "simple" : lower === 8 && upper % 3 === 0 ? "compound" : isPowerOfTwo(lower) ? "irregular" : "irrational";
    return {
        empty: false,
        name,
        type,
        upper,
        lower,
        additive
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Vjgk":[function(require,module,exports) {
var global = arguments[3];
/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */ (function() {
    "use strict";
    /** Global Methods **/ /***************************************************************************/ /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */ var HowlerGlobal1 = function() {
        this.init();
    };
    HowlerGlobal1.prototype = {
        /**
     * Initialize the global Howler object.
     * @return {Howler}
     */ init: function() {
            var self = this || Howler1;
            // Create a global ID counter.
            self._counter = 1000;
            // Pool of unlocked HTML5 Audio objects.
            self._html5AudioPool = [];
            self.html5PoolSize = 10;
            // Internal properties.
            self._codecs = {};
            self._howls = [];
            self._muted = false;
            self._volume = 1;
            self._canPlayEvent = "canplaythrough";
            self._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
            // Public properties.
            self.masterGain = null;
            self.noAudio = false;
            self.usingWebAudio = true;
            self.autoSuspend = true;
            self.ctx = null;
            // Set to false to disable the auto audio unlocker.
            self.autoUnlock = true;
            // Setup the various state values for global tracking.
            self._setup();
            return self;
        },
        /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */ volume: function(vol) {
            var self = this || Howler1;
            vol = parseFloat(vol);
            // If we don't have an AudioContext created yet, run the setup.
            if (!self.ctx) setupAudioContext();
            if (typeof vol !== "undefined" && vol >= 0 && vol <= 1) {
                self._volume = vol;
                // Don't update any of the nodes if we are muted.
                if (self._muted) return self;
                // When using Web Audio, we just need to adjust the master gain.
                if (self.usingWebAudio) self.masterGain.gain.setValueAtTime(vol, Howler1.ctx.currentTime);
                // Loop through and change volume for all HTML5 audio nodes.
                for(var i = 0; i < self._howls.length; i++)if (!self._howls[i]._webAudio) {
                    // Get all of the sounds in this Howl group.
                    var ids = self._howls[i]._getSoundIds();
                    // Loop through all sounds and change the volumes.
                    for(var j = 0; j < ids.length; j++){
                        var sound = self._howls[i]._soundById(ids[j]);
                        if (sound && sound._node) sound._node.volume = sound._volume * vol;
                    }
                }
                return self;
            }
            return self._volume;
        },
        /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */ mute: function(muted) {
            var self = this || Howler1;
            // If we don't have an AudioContext created yet, run the setup.
            if (!self.ctx) setupAudioContext();
            self._muted = muted;
            // With Web Audio, we just need to mute the master gain.
            if (self.usingWebAudio) self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler1.ctx.currentTime);
            // Loop through and mute all HTML5 Audio nodes.
            for(var i = 0; i < self._howls.length; i++)if (!self._howls[i]._webAudio) {
                // Get all of the sounds in this Howl group.
                var ids = self._howls[i]._getSoundIds();
                // Loop through all sounds and mark the audio node as muted.
                for(var j = 0; j < ids.length; j++){
                    var sound = self._howls[i]._soundById(ids[j]);
                    if (sound && sound._node) sound._node.muted = muted ? true : sound._muted;
                }
            }
            return self;
        },
        /**
     * Handle stopping all sounds globally.
     */ stop: function() {
            var self = this || Howler1;
            // Loop through all Howls and stop them.
            for(var i = 0; i < self._howls.length; i++)self._howls[i].stop();
            return self;
        },
        /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */ unload: function() {
            var self = this || Howler1;
            for(var i = self._howls.length - 1; i >= 0; i--)self._howls[i].unload();
            // Create a new AudioContext to make sure it is fully reset.
            if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== "undefined") {
                self.ctx.close();
                self.ctx = null;
                setupAudioContext();
            }
            return self;
        },
        /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */ codecs: function(ext) {
            return (this || Howler1)._codecs[ext.replace(/^x-/, "")];
        },
        /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */ _setup: function() {
            var self = this || Howler1;
            // Keeps track of the suspend/resume state of the AudioContext.
            self.state = self.ctx ? self.ctx.state || "suspended" : "suspended";
            // Automatically begin the 30-second suspend process
            self._autoSuspend();
            // Check if audio is available.
            if (!self.usingWebAudio) {
                // No audio is available on this system if noAudio is set to true.
                if (typeof Audio !== "undefined") try {
                    var test = new Audio();
                    // Check if the canplaythrough event is available.
                    if (typeof test.oncanplaythrough === "undefined") self._canPlayEvent = "canplay";
                } catch (e) {
                    self.noAudio = true;
                }
                else self.noAudio = true;
            }
            // Test to make sure audio isn't disabled in Internet Explorer.
            try {
                var test = new Audio();
                if (test.muted) self.noAudio = true;
            } catch (e) {}
            // Check for supported codecs.
            if (!self.noAudio) self._setupCodecs();
            return self;
        },
        /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */ _setupCodecs: function() {
            var self = this || Howler1;
            var audioTest = null;
            // Must wrap in a try/catch because IE11 in server mode throws an error.
            try {
                audioTest = typeof Audio !== "undefined" ? new Audio() : null;
            } catch (err) {
                return self;
            }
            if (!audioTest || typeof audioTest.canPlayType !== "function") return self;
            var mpegTest = audioTest.canPlayType("audio/mpeg;").replace(/^no$/, "");
            // Opera version <33 has mixed MP3 support, so we need to check for and block it.
            var ua = self._navigator ? self._navigator.userAgent : "";
            var checkOpera = ua.match(/OPR\/([0-6].)/g);
            var isOldOpera = checkOpera && parseInt(checkOpera[0].split("/")[1], 10) < 33;
            var checkSafari = ua.indexOf("Safari") !== -1 && ua.indexOf("Chrome") === -1;
            var safariVersion = ua.match(/Version\/(.*?) /);
            var isOldSafari = checkSafari && safariVersion && parseInt(safariVersion[1], 10) < 15;
            self._codecs = {
                mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType("audio/mp3;").replace(/^no$/, ""))),
                mpeg: !!mpegTest,
                opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!(audioTest.canPlayType('audio/wav; codecs="1"') || audioTest.canPlayType("audio/wav")).replace(/^no$/, ""),
                aac: !!audioTest.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!audioTest.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(audioTest.canPlayType("audio/x-m4a;") || audioTest.canPlayType("audio/m4a;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
                m4b: !!(audioTest.canPlayType("audio/x-m4b;") || audioTest.canPlayType("audio/m4b;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(audioTest.canPlayType("audio/x-mp4;") || audioTest.canPlayType("audio/mp4;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                webm: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(audioTest.canPlayType("audio/x-flac;") || audioTest.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return self;
        },
        /**
     * Some browsers/devices will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */ _unlockAudio: function() {
            var self = this || Howler1;
            // Only run this if Web Audio is supported and it hasn't already been unlocked.
            if (self._audioUnlocked || !self.ctx) return;
            self._audioUnlocked = false;
            self.autoUnlock = false;
            // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
            // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
            // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
            if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
                self._mobileUnloaded = true;
                self.unload();
            }
            // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
            // http://stackoverflow.com/questions/24119684
            self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);
            // Call this method on touch start to create and play a buffer,
            // then check if the audio actually played to determine if
            // audio has now been unlocked on iOS, Android, etc.
            var unlock = function(e) {
                // Create a pool of unlocked HTML5 Audio objects that can
                // be used for playing sounds without user interaction. HTML5
                // Audio objects must be individually unlocked, as opposed
                // to the WebAudio API which only needs a single activation.
                // This must occur before WebAudio setup or the source.onended
                // event will not fire.
                while(self._html5AudioPool.length < self.html5PoolSize)try {
                    var audioNode = new Audio();
                    // Mark this Audio object as unlocked to ensure it can get returned
                    // to the unlocked pool when released.
                    audioNode._unlocked = true;
                    // Add the audio node to the pool.
                    self._releaseHtml5Audio(audioNode);
                } catch (e) {
                    self.noAudio = true;
                    break;
                }
                // Loop through any assigned audio nodes and unlock them.
                for(var i = 0; i < self._howls.length; i++)if (!self._howls[i]._webAudio) {
                    // Get all of the sounds in this Howl group.
                    var ids = self._howls[i]._getSoundIds();
                    // Loop through all sounds and unlock the audio nodes.
                    for(var j = 0; j < ids.length; j++){
                        var sound = self._howls[i]._soundById(ids[j]);
                        if (sound && sound._node && !sound._node._unlocked) {
                            sound._node._unlocked = true;
                            sound._node.load();
                        }
                    }
                }
                // Fix Android can not play in suspend state.
                self._autoResume();
                // Create an empty buffer.
                var source = self.ctx.createBufferSource();
                source.buffer = self._scratchBuffer;
                source.connect(self.ctx.destination);
                // Play the empty buffer.
                if (typeof source.start === "undefined") source.noteOn(0);
                else source.start(0);
                // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
                if (typeof self.ctx.resume === "function") self.ctx.resume();
                // Setup a timeout to check that we are unlocked on the next event loop.
                source.onended = function() {
                    source.disconnect(0);
                    // Update the unlocked state and prevent this check from happening again.
                    self._audioUnlocked = true;
                    // Remove the touch start listener.
                    document.removeEventListener("touchstart", unlock, true);
                    document.removeEventListener("touchend", unlock, true);
                    document.removeEventListener("click", unlock, true);
                    document.removeEventListener("keydown", unlock, true);
                    // Let all sounds know that audio has been unlocked.
                    for(var i = 0; i < self._howls.length; i++)self._howls[i]._emit("unlock");
                };
            };
            // Setup a touch start listener to attempt an unlock in.
            document.addEventListener("touchstart", unlock, true);
            document.addEventListener("touchend", unlock, true);
            document.addEventListener("click", unlock, true);
            document.addEventListener("keydown", unlock, true);
            return self;
        },
        /**
     * Get an unlocked HTML5 Audio object from the pool. If none are left,
     * return a new Audio object and throw a warning.
     * @return {Audio} HTML5 Audio object.
     */ _obtainHtml5Audio: function() {
            var self = this || Howler1;
            // Return the next object from the pool if one exists.
            if (self._html5AudioPool.length) return self._html5AudioPool.pop();
            //.Check if the audio is locked and throw a warning.
            var testPlay = new Audio().play();
            if (testPlay && typeof Promise !== "undefined" && (testPlay instanceof Promise || typeof testPlay.then === "function")) testPlay.catch(function() {
                console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
            });
            return new Audio();
        },
        /**
     * Return an activated HTML5 Audio object to the pool.
     * @return {Howler}
     */ _releaseHtml5Audio: function(audio) {
            var self = this || Howler1;
            // Don't add audio to the pool if we don't know if it has been unlocked.
            if (audio._unlocked) self._html5AudioPool.push(audio);
            return self;
        },
        /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */ _autoSuspend: function() {
            var self = this;
            if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === "undefined" || !Howler1.usingWebAudio) return;
            // Check if any sounds are playing.
            for(var i = 0; i < self._howls.length; i++){
                if (self._howls[i]._webAudio) for(var j = 0; j < self._howls[i]._sounds.length; j++){
                    if (!self._howls[i]._sounds[j]._paused) return self;
                }
            }
            if (self._suspendTimer) clearTimeout(self._suspendTimer);
            // If no sound has played after 30 seconds, suspend the context.
            self._suspendTimer = setTimeout(function() {
                if (!self.autoSuspend) return;
                self._suspendTimer = null;
                self.state = "suspending";
                // Handle updating the state of the audio context after suspending.
                var handleSuspension = function() {
                    self.state = "suspended";
                    if (self._resumeAfterSuspend) {
                        delete self._resumeAfterSuspend;
                        self._autoResume();
                    }
                };
                // Either the state gets suspended or it is interrupted.
                // Either way, we need to update the state to suspended.
                self.ctx.suspend().then(handleSuspension, handleSuspension);
            }, 30000);
            return self;
        },
        /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */ _autoResume: function() {
            var self = this;
            if (!self.ctx || typeof self.ctx.resume === "undefined" || !Howler1.usingWebAudio) return;
            if (self.state === "running" && self.ctx.state !== "interrupted" && self._suspendTimer) {
                clearTimeout(self._suspendTimer);
                self._suspendTimer = null;
            } else if (self.state === "suspended" || self.state === "running" && self.ctx.state === "interrupted") {
                self.ctx.resume().then(function() {
                    self.state = "running";
                    // Emit to all Howls that the audio has resumed.
                    for(var i = 0; i < self._howls.length; i++)self._howls[i]._emit("resume");
                });
                if (self._suspendTimer) {
                    clearTimeout(self._suspendTimer);
                    self._suspendTimer = null;
                }
            } else if (self.state === "suspending") self._resumeAfterSuspend = true;
            return self;
        }
    };
    // Setup the global audio controller.
    var Howler1 = new HowlerGlobal1();
    /** Group Methods **/ /***************************************************************************/ /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */ var Howl1 = function(o) {
        var self = this;
        // Throw an error if no source is provided.
        if (!o.src || o.src.length === 0) {
            console.error("An array of source files must be passed with any new Howl.");
            return;
        }
        self.init(o);
    };
    Howl1.prototype = {
        /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */ init: function(o) {
            var self = this;
            // If we don't have an AudioContext created yet, run the setup.
            if (!Howler1.ctx) setupAudioContext();
            // Setup user-defined default properties.
            self._autoplay = o.autoplay || false;
            self._format = typeof o.format !== "string" ? o.format : [
                o.format
            ];
            self._html5 = o.html5 || false;
            self._muted = o.mute || false;
            self._loop = o.loop || false;
            self._pool = o.pool || 5;
            self._preload = typeof o.preload === "boolean" || o.preload === "metadata" ? o.preload : true;
            self._rate = o.rate || 1;
            self._sprite = o.sprite || {};
            self._src = typeof o.src !== "string" ? o.src : [
                o.src
            ];
            self._volume = o.volume !== undefined ? o.volume : 1;
            self._xhr = {
                method: o.xhr && o.xhr.method ? o.xhr.method : "GET",
                headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
                withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false
            };
            // Setup all other default properties.
            self._duration = 0;
            self._state = "unloaded";
            self._sounds = [];
            self._endTimers = {};
            self._queue = [];
            self._playLock = false;
            // Setup event listeners.
            self._onend = o.onend ? [
                {
                    fn: o.onend
                }
            ] : [];
            self._onfade = o.onfade ? [
                {
                    fn: o.onfade
                }
            ] : [];
            self._onload = o.onload ? [
                {
                    fn: o.onload
                }
            ] : [];
            self._onloaderror = o.onloaderror ? [
                {
                    fn: o.onloaderror
                }
            ] : [];
            self._onplayerror = o.onplayerror ? [
                {
                    fn: o.onplayerror
                }
            ] : [];
            self._onpause = o.onpause ? [
                {
                    fn: o.onpause
                }
            ] : [];
            self._onplay = o.onplay ? [
                {
                    fn: o.onplay
                }
            ] : [];
            self._onstop = o.onstop ? [
                {
                    fn: o.onstop
                }
            ] : [];
            self._onmute = o.onmute ? [
                {
                    fn: o.onmute
                }
            ] : [];
            self._onvolume = o.onvolume ? [
                {
                    fn: o.onvolume
                }
            ] : [];
            self._onrate = o.onrate ? [
                {
                    fn: o.onrate
                }
            ] : [];
            self._onseek = o.onseek ? [
                {
                    fn: o.onseek
                }
            ] : [];
            self._onunlock = o.onunlock ? [
                {
                    fn: o.onunlock
                }
            ] : [];
            self._onresume = [];
            // Web Audio or HTML5 Audio?
            self._webAudio = Howler1.usingWebAudio && !self._html5;
            // Automatically try to enable audio.
            if (typeof Howler1.ctx !== "undefined" && Howler1.ctx && Howler1.autoUnlock) Howler1._unlockAudio();
            // Keep track of this Howl group in the global controller.
            Howler1._howls.push(self);
            // If they selected autoplay, add a play event to the load queue.
            if (self._autoplay) self._queue.push({
                event: "play",
                action: function() {
                    self.play();
                }
            });
            // Load the source file unless otherwise specified.
            if (self._preload && self._preload !== "none") self.load();
            return self;
        },
        /**
     * Load the audio file.
     * @return {Howler}
     */ load: function() {
            var self = this;
            var url = null;
            // If no audio is available, quit immediately.
            if (Howler1.noAudio) {
                self._emit("loaderror", null, "No audio support.");
                return;
            }
            // Make sure our source is in an array.
            if (typeof self._src === "string") self._src = [
                self._src
            ];
            // Loop through the sources and pick the first one that is compatible.
            for(var i = 0; i < self._src.length; i++){
                var ext, str;
                if (self._format && self._format[i]) // If an extension was specified, use that instead.
                ext = self._format[i];
                else {
                    // Make sure the source is a string.
                    str = self._src[i];
                    if (typeof str !== "string") {
                        self._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                        continue;
                    }
                    // Extract the file extension from the URL or base64 data URI.
                    ext = /^data:audio\/([^;,]+);/i.exec(str);
                    if (!ext) ext = /\.([^.]+)$/.exec(str.split("?", 1)[0]);
                    if (ext) ext = ext[1].toLowerCase();
                }
                // Log a warning if no extension was found.
                if (!ext) console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
                // Check if this extension is available.
                if (ext && Howler1.codecs(ext)) {
                    url = self._src[i];
                    break;
                }
            }
            if (!url) {
                self._emit("loaderror", null, "No codec support for selected audio sources.");
                return;
            }
            self._src = url;
            self._state = "loading";
            // If the hosting page is HTTPS and the source isn't,
            // drop down to HTML5 Audio to avoid Mixed Content errors.
            if (window.location.protocol === "https:" && url.slice(0, 5) === "http:") {
                self._html5 = true;
                self._webAudio = false;
            }
            // Create a new sound object and add it to the pool.
            new Sound1(self);
            // Load and decode the audio data for playback.
            if (self._webAudio) loadBuffer(self);
            return self;
        },
        /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */ play: function(sprite, internal) {
            var self = this;
            var id = null;
            // Determine if a sprite, sound id or nothing was passed
            if (typeof sprite === "number") {
                id = sprite;
                sprite = null;
            } else if (typeof sprite === "string" && self._state === "loaded" && !self._sprite[sprite]) // If the passed sprite doesn't exist, do nothing.
            return null;
            else if (typeof sprite === "undefined") {
                // Use the default sound sprite (plays the full audio length).
                sprite = "__default";
                // Check if there is a single paused sound that isn't ended.
                // If there is, play that sound. If not, continue as usual.
                if (!self._playLock) {
                    var num = 0;
                    for(var i = 0; i < self._sounds.length; i++)if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                        num++;
                        id = self._sounds[i]._id;
                    }
                    if (num === 1) sprite = null;
                    else id = null;
                }
            }
            // Get the selected node, or get one from the pool.
            var sound = id ? self._soundById(id) : self._inactiveSound();
            // If the sound doesn't exist, do nothing.
            if (!sound) return null;
            // Select the sprite definition.
            if (id && !sprite) sprite = sound._sprite || "__default";
            // If the sound hasn't loaded, we must wait to get the audio's duration.
            // We also need to wait to make sure we don't run into race conditions with
            // the order of function calls.
            if (self._state !== "loaded") {
                // Set the sprite value on this sound.
                sound._sprite = sprite;
                // Mark this sound as not ended in case another sound is played before this one loads.
                sound._ended = false;
                // Add the sound to the queue to be played on load.
                var soundId = sound._id;
                self._queue.push({
                    event: "play",
                    action: function() {
                        self.play(soundId);
                    }
                });
                return soundId;
            }
            // Don't play the sound if an id was passed and it is already playing.
            if (id && !sound._paused) {
                // Trigger the play event, in order to keep iterating through queue.
                if (!internal) self._loadQueue("play");
                return sound._id;
            }
            // Make sure the AudioContext isn't suspended, and resume it if it is.
            if (self._webAudio) Howler1._autoResume();
            // Determine how long to play for and where to start playing.
            var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
            var duration = Math.max(0, (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000 - seek);
            var timeout = duration * 1000 / Math.abs(sound._rate);
            var start = self._sprite[sprite][0] / 1000;
            var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
            sound._sprite = sprite;
            // Mark the sound as ended instantly so that this async playback
            // doesn't get grabbed by another call to play while this one waits to start.
            sound._ended = false;
            // Update the parameters of the sound.
            var setParams = function() {
                sound._paused = false;
                sound._seek = seek;
                sound._start = start;
                sound._stop = stop;
                sound._loop = !!(sound._loop || self._sprite[sprite][2]);
            };
            // End the sound instantly if seek is at the end.
            if (seek >= stop) {
                self._ended(sound);
                return;
            }
            // Begin the actual playback.
            var node = sound._node;
            if (self._webAudio) {
                // Fire this when the sound is ready to play to begin Web Audio playback.
                var playWebAudio = function() {
                    self._playLock = false;
                    setParams();
                    self._refreshBuffer(sound);
                    // Setup the playback params.
                    var vol = sound._muted || self._muted ? 0 : sound._volume;
                    node.gain.setValueAtTime(vol, Howler1.ctx.currentTime);
                    sound._playStart = Howler1.ctx.currentTime;
                    // Play the sound using the supported method.
                    if (typeof node.bufferSource.start === "undefined") sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
                    else sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
                    // Start a new timer if none is present.
                    if (timeout !== Infinity) self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                    if (!internal) setTimeout(function() {
                        self._emit("play", sound._id);
                        self._loadQueue();
                    }, 0);
                };
                if (Howler1.state === "running" && Howler1.ctx.state !== "interrupted") playWebAudio();
                else {
                    self._playLock = true;
                    // Wait for the audio context to resume before playing.
                    self.once("resume", playWebAudio);
                    // Cancel the end timer.
                    self._clearTimer(sound._id);
                }
            } else {
                // Fire this when the sound is ready to play to begin HTML5 Audio playback.
                var playHtml5 = function() {
                    node.currentTime = seek;
                    node.muted = sound._muted || self._muted || Howler1._muted || node.muted;
                    node.volume = sound._volume * Howler1.volume();
                    node.playbackRate = sound._rate;
                    // Some browsers will throw an error if this is called without user interaction.
                    try {
                        var play = node.play();
                        // Support older browsers that don't support promises, and thus don't have this issue.
                        if (play && typeof Promise !== "undefined" && (play instanceof Promise || typeof play.then === "function")) {
                            // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
                            self._playLock = true;
                            // Set param values immediately.
                            setParams();
                            // Releases the lock and executes queued actions.
                            play.then(function() {
                                self._playLock = false;
                                node._unlocked = true;
                                if (!internal) self._emit("play", sound._id);
                                else self._loadQueue();
                            }).catch(function() {
                                self._playLock = false;
                                self._emit("playerror", sound._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                // Reset the ended and paused values.
                                sound._ended = true;
                                sound._paused = true;
                            });
                        } else if (!internal) {
                            self._playLock = false;
                            setParams();
                            self._emit("play", sound._id);
                        }
                        // Setting rate before playing won't work in IE, so we set it again here.
                        node.playbackRate = sound._rate;
                        // If the node is still paused, then we can assume there was a playback issue.
                        if (node.paused) {
                            self._emit("playerror", sound._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                            return;
                        }
                        // Setup the end timer on sprites or listen for the ended event.
                        if (sprite !== "__default" || sound._loop) self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                        else {
                            self._endTimers[sound._id] = function() {
                                // Fire ended on this audio node.
                                self._ended(sound);
                                // Clear this listener.
                                node.removeEventListener("ended", self._endTimers[sound._id], false);
                            };
                            node.addEventListener("ended", self._endTimers[sound._id], false);
                        }
                    } catch (err) {
                        self._emit("playerror", sound._id, err);
                    }
                };
                // If this is streaming audio, make sure the src is set and load again.
                if (node.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
                    node.src = self._src;
                    node.load();
                }
                // Play immediately if ready, or wait for the 'canplaythrough'e vent.
                var loadedNoReadyState = window && window.ejecta || !node.readyState && Howler1._navigator.isCocoonJS;
                if (node.readyState >= 3 || loadedNoReadyState) playHtml5();
                else {
                    self._playLock = true;
                    self._state = "loading";
                    var listener = function() {
                        self._state = "loaded";
                        // Begin playback.
                        playHtml5();
                        // Clear this listener.
                        node.removeEventListener(Howler1._canPlayEvent, listener, false);
                    };
                    node.addEventListener(Howler1._canPlayEvent, listener, false);
                    // Cancel the end timer.
                    self._clearTimer(sound._id);
                }
            }
            return sound._id;
        },
        /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */ pause: function(id) {
            var self = this;
            // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
            if (self._state !== "loaded" || self._playLock) {
                self._queue.push({
                    event: "pause",
                    action: function() {
                        self.pause(id);
                    }
                });
                return self;
            }
            // If no id is passed, get all ID's to be paused.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                // Clear the end timer.
                self._clearTimer(ids[i]);
                // Get the sound.
                var sound = self._soundById(ids[i]);
                if (sound && !sound._paused) {
                    // Reset the seek position.
                    sound._seek = self.seek(ids[i]);
                    sound._rateSeek = 0;
                    sound._paused = true;
                    // Stop currently running fades.
                    self._stopFade(ids[i]);
                    if (sound._node) {
                        if (self._webAudio) {
                            // Make sure the sound has been created.
                            if (!sound._node.bufferSource) continue;
                            if (typeof sound._node.bufferSource.stop === "undefined") sound._node.bufferSource.noteOff(0);
                            else sound._node.bufferSource.stop(0);
                            // Clean up the buffer source.
                            self._cleanBuffer(sound._node);
                        } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) sound._node.pause();
                    }
                }
                // Fire the pause event, unless `true` is passed as the 2nd argument.
                if (!arguments[1]) self._emit("pause", sound ? sound._id : null);
            }
            return self;
        },
        /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */ stop: function(id, internal) {
            var self = this;
            // If the sound hasn't loaded, add it to the load queue to stop when capable.
            if (self._state !== "loaded" || self._playLock) {
                self._queue.push({
                    event: "stop",
                    action: function() {
                        self.stop(id);
                    }
                });
                return self;
            }
            // If no id is passed, get all ID's to be stopped.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                // Clear the end timer.
                self._clearTimer(ids[i]);
                // Get the sound.
                var sound = self._soundById(ids[i]);
                if (sound) {
                    // Reset the seek position.
                    sound._seek = sound._start || 0;
                    sound._rateSeek = 0;
                    sound._paused = true;
                    sound._ended = true;
                    // Stop currently running fades.
                    self._stopFade(ids[i]);
                    if (sound._node) {
                        if (self._webAudio) // Make sure the sound's AudioBufferSourceNode has been created.
                        {
                            if (sound._node.bufferSource) {
                                if (typeof sound._node.bufferSource.stop === "undefined") sound._node.bufferSource.noteOff(0);
                                else sound._node.bufferSource.stop(0);
                                // Clean up the buffer source.
                                self._cleanBuffer(sound._node);
                            }
                        } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                            sound._node.currentTime = sound._start || 0;
                            sound._node.pause();
                            // If this is a live stream, stop download once the audio is stopped.
                            if (sound._node.duration === Infinity) self._clearSound(sound._node);
                        }
                    }
                    if (!internal) self._emit("stop", sound._id);
                }
            }
            return self;
        },
        /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */ mute: function(muted, id) {
            var self = this;
            // If the sound hasn't loaded, add it to the load queue to mute when capable.
            if (self._state !== "loaded" || self._playLock) {
                self._queue.push({
                    event: "mute",
                    action: function() {
                        self.mute(muted, id);
                    }
                });
                return self;
            }
            // If applying mute/unmute to all sounds, update the group's value.
            if (typeof id === "undefined") {
                if (typeof muted === "boolean") self._muted = muted;
                else return self._muted;
            }
            // If no id is passed, get all ID's to be muted.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                // Get the sound.
                var sound = self._soundById(ids[i]);
                if (sound) {
                    sound._muted = muted;
                    // Cancel active fade and set the volume to the end value.
                    if (sound._interval) self._stopFade(sound._id);
                    if (self._webAudio && sound._node) sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler1.ctx.currentTime);
                    else if (sound._node) sound._node.muted = Howler1._muted ? true : muted;
                    self._emit("mute", sound._id);
                }
            }
            return self;
        },
        /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */ volume: function() {
            var self = this;
            var args = arguments;
            var vol, id;
            // Determine the values based on arguments.
            if (args.length === 0) // Return the value of the groups' volume.
            return self._volume;
            else if (args.length === 1 || args.length === 2 && typeof args[1] === "undefined") {
                // First check if this is an ID, and if not, assume it is a new volume.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) id = parseInt(args[0], 10);
                else vol = parseFloat(args[0]);
            } else if (args.length >= 2) {
                vol = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }
            // Update the volume or return the current volume.
            var sound;
            if (typeof vol !== "undefined" && vol >= 0 && vol <= 1) {
                // If the sound hasn't loaded, add it to the load queue to change volume when capable.
                if (self._state !== "loaded" || self._playLock) {
                    self._queue.push({
                        event: "volume",
                        action: function() {
                            self.volume.apply(self, args);
                        }
                    });
                    return self;
                }
                // Set the group volume.
                if (typeof id === "undefined") self._volume = vol;
                // Update one or all volumes.
                id = self._getSoundIds(id);
                for(var i = 0; i < id.length; i++){
                    // Get the sound.
                    sound = self._soundById(id[i]);
                    if (sound) {
                        sound._volume = vol;
                        // Stop currently running fades.
                        if (!args[2]) self._stopFade(id[i]);
                        if (self._webAudio && sound._node && !sound._muted) sound._node.gain.setValueAtTime(vol, Howler1.ctx.currentTime);
                        else if (sound._node && !sound._muted) sound._node.volume = vol * Howler1.volume();
                        self._emit("volume", sound._id);
                    }
                }
            } else {
                sound = id ? self._soundById(id) : self._sounds[0];
                return sound ? sound._volume : 0;
            }
            return self;
        },
        /**
     * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */ fade: function(from, to, len, id) {
            var self = this;
            // If the sound hasn't loaded, add it to the load queue to fade when capable.
            if (self._state !== "loaded" || self._playLock) {
                self._queue.push({
                    event: "fade",
                    action: function() {
                        self.fade(from, to, len, id);
                    }
                });
                return self;
            }
            // Make sure the to/from/len values are numbers.
            from = Math.min(Math.max(0, parseFloat(from)), 1);
            to = Math.min(Math.max(0, parseFloat(to)), 1);
            len = parseFloat(len);
            // Set the volume to the start position.
            self.volume(from, id);
            // Fade the volume of one or all sounds.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                // Get the sound.
                var sound = self._soundById(ids[i]);
                // Create a linear fade or fall back to timeouts with HTML5 Audio.
                if (sound) {
                    // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
                    if (!id) self._stopFade(ids[i]);
                    // If we are using Web Audio, let the native methods do the actual fade.
                    if (self._webAudio && !sound._muted) {
                        var currentTime = Howler1.ctx.currentTime;
                        var end = currentTime + len / 1000;
                        sound._volume = from;
                        sound._node.gain.setValueAtTime(from, currentTime);
                        sound._node.gain.linearRampToValueAtTime(to, end);
                    }
                    self._startFadeInterval(sound, from, to, len, ids[i], typeof id === "undefined");
                }
            }
            return self;
        },
        /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */ _startFadeInterval: function(sound, from, to, len, id, isGroup) {
            var self = this;
            var vol = from;
            var diff = to - from;
            var steps = Math.abs(diff / 0.01);
            var stepLen = Math.max(4, steps > 0 ? len / steps : len);
            var lastTick = Date.now();
            // Store the value being faded to.
            sound._fadeTo = to;
            // Update the volume value on each interval tick.
            sound._interval = setInterval(function() {
                // Update the volume based on the time since the last tick.
                var tick = (Date.now() - lastTick) / len;
                lastTick = Date.now();
                vol += diff * tick;
                // Round to within 2 decimal points.
                vol = Math.round(vol * 100) / 100;
                // Make sure the volume is in the right bounds.
                if (diff < 0) vol = Math.max(to, vol);
                else vol = Math.min(to, vol);
                // Change the volume.
                if (self._webAudio) sound._volume = vol;
                else self.volume(vol, sound._id, true);
                // Set the group's volume.
                if (isGroup) self._volume = vol;
                // When the fade is complete, stop it and fire event.
                if (to < from && vol <= to || to > from && vol >= to) {
                    clearInterval(sound._interval);
                    sound._interval = null;
                    sound._fadeTo = null;
                    self.volume(to, sound._id);
                    self._emit("fade", sound._id);
                }
            }, stepLen);
        },
        /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */ _stopFade: function(id) {
            var self = this;
            var sound = self._soundById(id);
            if (sound && sound._interval) {
                if (self._webAudio) sound._node.gain.cancelScheduledValues(Howler1.ctx.currentTime);
                clearInterval(sound._interval);
                sound._interval = null;
                self.volume(sound._fadeTo, id);
                sound._fadeTo = null;
                self._emit("fade", id);
            }
            return self;
        },
        /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */ loop: function() {
            var self = this;
            var args = arguments;
            var loop, id, sound;
            // Determine the values for loop and id.
            if (args.length === 0) // Return the grou's loop value.
            return self._loop;
            else if (args.length === 1) {
                if (typeof args[0] === "boolean") {
                    loop = args[0];
                    self._loop = loop;
                } else {
                    // Return this sound's loop value.
                    sound = self._soundById(parseInt(args[0], 10));
                    return sound ? sound._loop : false;
                }
            } else if (args.length === 2) {
                loop = args[0];
                id = parseInt(args[1], 10);
            }
            // If no id is passed, get all ID's to be looped.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                sound = self._soundById(ids[i]);
                if (sound) {
                    sound._loop = loop;
                    if (self._webAudio && sound._node && sound._node.bufferSource) {
                        sound._node.bufferSource.loop = loop;
                        if (loop) {
                            sound._node.bufferSource.loopStart = sound._start || 0;
                            sound._node.bufferSource.loopEnd = sound._stop;
                            // If playing, restart playback to ensure looping updates.
                            if (self.playing(ids[i])) {
                                self.pause(ids[i], true);
                                self.play(ids[i], true);
                            }
                        }
                    }
                }
            }
            return self;
        },
        /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */ rate: function() {
            var self = this;
            var args = arguments;
            var rate, id;
            // Determine the values based on arguments.
            if (args.length === 0) // We will simply return the current rate of the first node.
            id = self._sounds[0]._id;
            else if (args.length === 1) {
                // First check if this is an ID, and if not, assume it is a new rate value.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) id = parseInt(args[0], 10);
                else rate = parseFloat(args[0]);
            } else if (args.length === 2) {
                rate = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }
            // Update the playback rate or return the current value.
            var sound;
            if (typeof rate === "number") {
                // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
                if (self._state !== "loaded" || self._playLock) {
                    self._queue.push({
                        event: "rate",
                        action: function() {
                            self.rate.apply(self, args);
                        }
                    });
                    return self;
                }
                // Set the group rate.
                if (typeof id === "undefined") self._rate = rate;
                // Update one or all volumes.
                id = self._getSoundIds(id);
                for(var i = 0; i < id.length; i++){
                    // Get the sound.
                    sound = self._soundById(id[i]);
                    if (sound) {
                        // Keep track of our position when the rate changed and update the playback
                        // start position so we can properly adjust the seek position for time elapsed.
                        if (self.playing(id[i])) {
                            sound._rateSeek = self.seek(id[i]);
                            sound._playStart = self._webAudio ? Howler1.ctx.currentTime : sound._playStart;
                        }
                        sound._rate = rate;
                        // Change the playback rate.
                        if (self._webAudio && sound._node && sound._node.bufferSource) sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler1.ctx.currentTime);
                        else if (sound._node) sound._node.playbackRate = rate;
                        // Reset the timers.
                        var seek = self.seek(id[i]);
                        var duration = (self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000 - seek;
                        var timeout = duration * 1000 / Math.abs(sound._rate);
                        // Start a new end timer if sound is already playing.
                        if (self._endTimers[id[i]] || !sound._paused) {
                            self._clearTimer(id[i]);
                            self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
                        }
                        self._emit("rate", sound._id);
                    }
                }
            } else {
                sound = self._soundById(id);
                return sound ? sound._rate : self._rate;
            }
            return self;
        },
        /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */ seek: function() {
            var self = this;
            var args = arguments;
            var seek, id;
            // Determine the values based on arguments.
            if (args.length === 0) // We will simply return the current position of the first node.
            {
                if (self._sounds.length) id = self._sounds[0]._id;
            } else if (args.length === 1) {
                // First check if this is an ID, and if not, assume it is a new seek position.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) id = parseInt(args[0], 10);
                else if (self._sounds.length) {
                    id = self._sounds[0]._id;
                    seek = parseFloat(args[0]);
                }
            } else if (args.length === 2) {
                seek = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }
            // If there is no ID, bail out.
            if (typeof id === "undefined") return 0;
            // If the sound hasn't loaded, add it to the load queue to seek when capable.
            if (typeof seek === "number" && (self._state !== "loaded" || self._playLock)) {
                self._queue.push({
                    event: "seek",
                    action: function() {
                        self.seek.apply(self, args);
                    }
                });
                return self;
            }
            // Get the sound.
            var sound = self._soundById(id);
            if (sound) {
                if (typeof seek === "number" && seek >= 0) {
                    // Pause the sound and update position for restarting playback.
                    var playing = self.playing(id);
                    if (playing) self.pause(id, true);
                    // Move the position of the track and cancel timer.
                    sound._seek = seek;
                    sound._ended = false;
                    self._clearTimer(id);
                    // Update the seek position for HTML5 Audio.
                    if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) sound._node.currentTime = seek;
                    // Seek and emit when ready.
                    var seekAndEmit = function() {
                        // Restart the playback if the sound was playing.
                        if (playing) self.play(id, true);
                        self._emit("seek", id);
                    };
                    // Wait for the play lock to be unset before emitting (HTML5 Audio).
                    if (playing && !self._webAudio) {
                        var emitSeek = function() {
                            if (!self._playLock) seekAndEmit();
                            else setTimeout(emitSeek, 0);
                        };
                        setTimeout(emitSeek, 0);
                    } else seekAndEmit();
                } else {
                    if (self._webAudio) {
                        var realTime = self.playing(id) ? Howler1.ctx.currentTime - sound._playStart : 0;
                        var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                        return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
                    } else return sound._node.currentTime;
                }
            }
            return self;
        },
        /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */ playing: function(id) {
            var self = this;
            // Check the passed sound ID (if any).
            if (typeof id === "number") {
                var sound = self._soundById(id);
                return sound ? !sound._paused : false;
            }
            // Otherwise, loop through all sounds and check if any are playing.
            for(var i = 0; i < self._sounds.length; i++){
                if (!self._sounds[i]._paused) return true;
            }
            return false;
        },
        /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */ duration: function(id) {
            var self = this;
            var duration = self._duration;
            // If we pass an ID, get the sound and return the sprite length.
            var sound = self._soundById(id);
            if (sound) duration = self._sprite[sound._sprite][1] / 1000;
            return duration;
        },
        /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */ state: function() {
            return this._state;
        },
        /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */ unload: function() {
            var self = this;
            // Stop playing any active sounds.
            var sounds = self._sounds;
            for(var i = 0; i < sounds.length; i++){
                // Stop the sound if it is currently playing.
                if (!sounds[i]._paused) self.stop(sounds[i]._id);
                // Remove the source or disconnect.
                if (!self._webAudio) {
                    // Set the source to 0-second silence to stop any downloading (except in IE).
                    self._clearSound(sounds[i]._node);
                    // Remove any event listeners.
                    sounds[i]._node.removeEventListener("error", sounds[i]._errorFn, false);
                    sounds[i]._node.removeEventListener(Howler1._canPlayEvent, sounds[i]._loadFn, false);
                    sounds[i]._node.removeEventListener("ended", sounds[i]._endFn, false);
                    // Release the Audio object back to the pool.
                    Howler1._releaseHtml5Audio(sounds[i]._node);
                }
                // Empty out all of the nodes.
                delete sounds[i]._node;
                // Make sure all timers are cleared out.
                self._clearTimer(sounds[i]._id);
            }
            // Remove the references in the global Howler object.
            var index = Howler1._howls.indexOf(self);
            if (index >= 0) Howler1._howls.splice(index, 1);
            // Delete this sound from the cache (if no other Howl is using it).
            var remCache = true;
            for(i = 0; i < Howler1._howls.length; i++)if (Howler1._howls[i]._src === self._src || self._src.indexOf(Howler1._howls[i]._src) >= 0) {
                remCache = false;
                break;
            }
            if (cache && remCache) delete cache[self._src];
            // Clear global errors.
            Howler1.noAudio = false;
            // Clear out `self`.
            self._state = "unloaded";
            self._sounds = [];
            self = null;
            return null;
        },
        /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */ on: function(event, fn, id, once) {
            var self = this;
            var events = self["_on" + event];
            if (typeof fn === "function") events.push(once ? {
                id: id,
                fn: fn,
                once: once
            } : {
                id: id,
                fn: fn
            });
            return self;
        },
        /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */ off: function(event, fn, id) {
            var self = this;
            var events = self["_on" + event];
            var i = 0;
            // Allow passing just an event and ID.
            if (typeof fn === "number") {
                id = fn;
                fn = null;
            }
            if (fn || id) // Loop through event store and remove the passed function.
            for(i = 0; i < events.length; i++){
                var isId = id === events[i].id;
                if (fn === events[i].fn && isId || !fn && isId) {
                    events.splice(i, 1);
                    break;
                }
            }
            else if (event) // Clear out all events of this type.
            self["_on" + event] = [];
            else {
                // Clear out all events of every type.
                var keys = Object.keys(self);
                for(i = 0; i < keys.length; i++)if (keys[i].indexOf("_on") === 0 && Array.isArray(self[keys[i]])) self[keys[i]] = [];
            }
            return self;
        },
        /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */ once: function(event, fn, id) {
            var self = this;
            // Setup the event listener.
            self.on(event, fn, id, 1);
            return self;
        },
        /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */ _emit: function(event, id, msg) {
            var self = this;
            var events = self["_on" + event];
            // Loop through event store and fire all functions.
            for(var i = events.length - 1; i >= 0; i--)// Only fire the listener if the correct ID is used.
            if (!events[i].id || events[i].id === id || event === "load") {
                setTimeout((function(fn) {
                    fn.call(this, id, msg);
                }).bind(self, events[i].fn), 0);
                // If this event was setup with `once`, remove it.
                if (events[i].once) self.off(event, events[i].fn, events[i].id);
            }
            // Pass the event type into load queue so that it can continue stepping.
            self._loadQueue(event);
            return self;
        },
        /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */ _loadQueue: function(event) {
            var self = this;
            if (self._queue.length > 0) {
                var task = self._queue[0];
                // Remove this task if a matching event was passed.
                if (task.event === event) {
                    self._queue.shift();
                    self._loadQueue();
                }
                // Run the task if no event type is passed.
                if (!event) task.action();
            }
            return self;
        },
        /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */ _ended: function(sound) {
            var self = this;
            var sprite = sound._sprite;
            // If we are using IE and there was network latency we may be clipping
            // audio before it completes playing. Lets check the node to make sure it
            // believes it has completed, before ending the playback.
            if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
                setTimeout(self._ended.bind(self, sound), 100);
                return self;
            }
            // Should this sound loop?
            var loop = !!(sound._loop || self._sprite[sprite][2]);
            // Fire the ended event.
            self._emit("end", sound._id);
            // Restart the playback for HTML5 Audio loop.
            if (!self._webAudio && loop) self.stop(sound._id, true).play(sound._id);
            // Restart this timer if on a Web Audio loop.
            if (self._webAudio && loop) {
                self._emit("play", sound._id);
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                sound._playStart = Howler1.ctx.currentTime;
                var timeout = (sound._stop - sound._start) * 1000 / Math.abs(sound._rate);
                self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            }
            // Mark the node as paused.
            if (self._webAudio && !loop) {
                sound._paused = true;
                sound._ended = true;
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                self._clearTimer(sound._id);
                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
                // Attempt to auto-suspend AudioContext if no sounds are still playing.
                Howler1._autoSuspend();
            }
            // When using a sprite, end the track.
            if (!self._webAudio && !loop) self.stop(sound._id, true);
            return self;
        },
        /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */ _clearTimer: function(id) {
            var self = this;
            if (self._endTimers[id]) {
                // Clear the timeout or remove the ended listener.
                if (typeof self._endTimers[id] !== "function") clearTimeout(self._endTimers[id]);
                else {
                    var sound = self._soundById(id);
                    if (sound && sound._node) sound._node.removeEventListener("ended", self._endTimers[id], false);
                }
                delete self._endTimers[id];
            }
            return self;
        },
        /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */ _soundById: function(id) {
            var self = this;
            // Loop through all sounds and find the one with this ID.
            for(var i = 0; i < self._sounds.length; i++){
                if (id === self._sounds[i]._id) return self._sounds[i];
            }
            return null;
        },
        /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */ _inactiveSound: function() {
            var self = this;
            self._drain();
            // Find the first inactive node to recycle.
            for(var i = 0; i < self._sounds.length; i++){
                if (self._sounds[i]._ended) return self._sounds[i].reset();
            }
            // If no inactive node was found, create a new one.
            return new Sound1(self);
        },
        /**
     * Drain excess inactive sounds from the pool.
     */ _drain: function() {
            var self = this;
            var limit = self._pool;
            var cnt = 0;
            var i = 0;
            // If there are less sounds than the max pool size, we are done.
            if (self._sounds.length < limit) return;
            // Count the number of inactive sounds.
            for(i = 0; i < self._sounds.length; i++)if (self._sounds[i]._ended) cnt++;
            // Remove excess inactive sounds, going in reverse order.
            for(i = self._sounds.length - 1; i >= 0; i--){
                if (cnt <= limit) return;
                if (self._sounds[i]._ended) {
                    // Disconnect the audio source when using Web Audio.
                    if (self._webAudio && self._sounds[i]._node) self._sounds[i]._node.disconnect(0);
                    // Remove sounds until we have the pool size.
                    self._sounds.splice(i, 1);
                    cnt--;
                }
            }
        },
        /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */ _getSoundIds: function(id) {
            var self = this;
            if (typeof id === "undefined") {
                var ids = [];
                for(var i = 0; i < self._sounds.length; i++)ids.push(self._sounds[i]._id);
                return ids;
            } else return [
                id
            ];
        },
        /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */ _refreshBuffer: function(sound) {
            var self = this;
            // Setup the buffer source for playback.
            sound._node.bufferSource = Howler1.ctx.createBufferSource();
            sound._node.bufferSource.buffer = cache[self._src];
            // Connect to the correct node.
            if (sound._panner) sound._node.bufferSource.connect(sound._panner);
            else sound._node.bufferSource.connect(sound._node);
            // Setup looping and playback rate.
            sound._node.bufferSource.loop = sound._loop;
            if (sound._loop) {
                sound._node.bufferSource.loopStart = sound._start || 0;
                sound._node.bufferSource.loopEnd = sound._stop || 0;
            }
            sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler1.ctx.currentTime);
            return self;
        },
        /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */ _cleanBuffer: function(node) {
            var self = this;
            var isIOS = Howler1._navigator && Howler1._navigator.vendor.indexOf("Apple") >= 0;
            if (Howler1._scratchBuffer && node.bufferSource) {
                node.bufferSource.onended = null;
                node.bufferSource.disconnect(0);
                if (isIOS) try {
                    node.bufferSource.buffer = Howler1._scratchBuffer;
                } catch (e) {}
            }
            node.bufferSource = null;
            return self;
        },
        /**
     * Set the source to a 0-second silence to stop any downloading (except in IE).
     * @param  {Object} node Audio node to clear.
     */ _clearSound: function(node) {
            var checkIE = /MSIE |Trident\//.test(Howler1._navigator && Howler1._navigator.userAgent);
            if (!checkIE) node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
        }
    };
    /** Single Sound Methods **/ /***************************************************************************/ /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */ var Sound1 = function(howl) {
        this._parent = howl;
        this.init();
    };
    Sound1.prototype = {
        /**
     * Initialize a new Sound object.
     * @return {Sound}
     */ init: function() {
            var self = this;
            var parent = self._parent;
            // Setup the default parameters.
            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._rate = parent._rate;
            self._seek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = "__default";
            // Generate a unique ID for this sound.
            self._id = ++Howler1._counter;
            // Add itself to the parent's pool.
            parent._sounds.push(self);
            // Create the new node.
            self.create();
            return self;
        },
        /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */ create: function() {
            var self = this;
            var parent = self._parent;
            var volume = Howler1._muted || self._muted || self._parent._muted ? 0 : self._volume;
            if (parent._webAudio) {
                // Create the gain node for controlling volume (the source will connect to this).
                self._node = typeof Howler1.ctx.createGain === "undefined" ? Howler1.ctx.createGainNode() : Howler1.ctx.createGain();
                self._node.gain.setValueAtTime(volume, Howler1.ctx.currentTime);
                self._node.paused = true;
                self._node.connect(Howler1.masterGain);
            } else if (!Howler1.noAudio) {
                // Get an unlocked Audio object from the pool.
                self._node = Howler1._obtainHtml5Audio();
                // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
                self._errorFn = self._errorListener.bind(self);
                self._node.addEventListener("error", self._errorFn, false);
                // Listen for 'canplaythrough' event to let us know the sound is ready.
                self._loadFn = self._loadListener.bind(self);
                self._node.addEventListener(Howler1._canPlayEvent, self._loadFn, false);
                // Listen for the 'ended' event on the sound to account for edge-case where
                // a finite sound has a duration of Infinity.
                self._endFn = self._endListener.bind(self);
                self._node.addEventListener("ended", self._endFn, false);
                // Setup the new audio node.
                self._node.src = parent._src;
                self._node.preload = parent._preload === true ? "auto" : parent._preload;
                self._node.volume = volume * Howler1.volume();
                // Begin loading the source.
                self._node.load();
            }
            return self;
        },
        /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */ reset: function() {
            var self = this;
            var parent = self._parent;
            // Reset all of the parameters of this sound.
            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._rate = parent._rate;
            self._seek = 0;
            self._rateSeek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = "__default";
            // Generate a new ID so that it isn't confused with the previous sound.
            self._id = ++Howler1._counter;
            return self;
        },
        /**
     * HTML5 Audio error listener callback.
     */ _errorListener: function() {
            var self = this;
            // Fire an error event and pass back the code.
            self._parent._emit("loaderror", self._id, self._node.error ? self._node.error.code : 0);
            // Clear the event listener.
            self._node.removeEventListener("error", self._errorFn, false);
        },
        /**
     * HTML5 Audio canplaythrough listener callback.
     */ _loadListener: function() {
            var self = this;
            var parent = self._parent;
            // Round up the duration to account for the lower precision in HTML5 Audio.
            parent._duration = Math.ceil(self._node.duration * 10) / 10;
            // Setup a sprite if none is defined.
            if (Object.keys(parent._sprite).length === 0) parent._sprite = {
                __default: [
                    0,
                    parent._duration * 1000
                ]
            };
            if (parent._state !== "loaded") {
                parent._state = "loaded";
                parent._emit("load");
                parent._loadQueue();
            }
            // Clear the event listener.
            self._node.removeEventListener(Howler1._canPlayEvent, self._loadFn, false);
        },
        /**
     * HTML5 Audio ended listener callback.
     */ _endListener: function() {
            var self = this;
            var parent = self._parent;
            // Only handle the `ended`` event if the duration is Infinity.
            if (parent._duration === Infinity) {
                // Update the parent duration to match the real audio duration.
                // Round up the duration to account for the lower precision in HTML5 Audio.
                parent._duration = Math.ceil(self._node.duration * 10) / 10;
                // Update the sprite that corresponds to the real duration.
                if (parent._sprite.__default[1] === Infinity) parent._sprite.__default[1] = parent._duration * 1000;
                // Run the regular ended method.
                parent._ended(self);
            }
            // Clear the event listener since the duration is now correct.
            self._node.removeEventListener("ended", self._endFn, false);
        }
    };
    /** Helper Methods **/ /***************************************************************************/ var cache = {};
    /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */ var loadBuffer = function(self) {
        var url = self._src;
        // Check if the buffer has already been cached and use it instead.
        if (cache[url]) {
            // Set the duration from the cache.
            self._duration = cache[url].duration;
            // Load the sound into this Howl.
            loadSound(self);
            return;
        }
        if (/^data:[^;]+;base64,/.test(url)) {
            // Decode the base64 data URI without XHR, since some browsers don't support it.
            var data = atob(url.split(",")[1]);
            var dataView = new Uint8Array(data.length);
            for(var i = 0; i < data.length; ++i)dataView[i] = data.charCodeAt(i);
            decodeAudioData(dataView.buffer, self);
        } else {
            // Load the buffer from the URL.
            var xhr = new XMLHttpRequest();
            xhr.open(self._xhr.method, url, true);
            xhr.withCredentials = self._xhr.withCredentials;
            xhr.responseType = "arraybuffer";
            // Apply any custom headers to the request.
            if (self._xhr.headers) Object.keys(self._xhr.headers).forEach(function(key) {
                xhr.setRequestHeader(key, self._xhr.headers[key]);
            });
            xhr.onload = function() {
                // Make sure we get a successful response back.
                var code = (xhr.status + "")[0];
                if (code !== "0" && code !== "2" && code !== "3") {
                    self._emit("loaderror", null, "Failed loading audio file with status: " + xhr.status + ".");
                    return;
                }
                decodeAudioData(xhr.response, self);
            };
            xhr.onerror = function() {
                // If there is an error, switch to HTML5 Audio.
                if (self._webAudio) {
                    self._html5 = true;
                    self._webAudio = false;
                    self._sounds = [];
                    delete cache[url];
                    self.load();
                }
            };
            safeXhrSend(xhr);
        }
    };
    /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */ var safeXhrSend = function(xhr) {
        try {
            xhr.send();
        } catch (e) {
            xhr.onerror();
        }
    };
    /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */ var decodeAudioData = function(arraybuffer, self) {
        // Fire a load error if something broke.
        var error = function() {
            self._emit("loaderror", null, "Decoding audio data failed.");
        };
        // Load the sound on success.
        var success = function(buffer) {
            if (buffer && self._sounds.length > 0) {
                cache[self._src] = buffer;
                loadSound(self, buffer);
            } else error();
        };
        // Decode the buffer into an audio source.
        if (typeof Promise !== "undefined" && Howler1.ctx.decodeAudioData.length === 1) Howler1.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
        else Howler1.ctx.decodeAudioData(arraybuffer, success, error);
    };
    /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */ var loadSound = function(self, buffer) {
        // Set the duration.
        if (buffer && !self._duration) self._duration = buffer.duration;
        // Setup a sprite if none is defined.
        if (Object.keys(self._sprite).length === 0) self._sprite = {
            __default: [
                0,
                self._duration * 1000
            ]
        };
        // Fire the loaded event.
        if (self._state !== "loaded") {
            self._state = "loaded";
            self._emit("load");
            self._loadQueue();
        }
    };
    /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */ var setupAudioContext = function() {
        // If we have already detected that Web Audio isn't supported, don't run this step again.
        if (!Howler1.usingWebAudio) return;
        // Check if we are using Web Audio and setup the AudioContext if we are.
        try {
            if (typeof AudioContext !== "undefined") Howler1.ctx = new AudioContext();
            else if (typeof webkitAudioContext !== "undefined") Howler1.ctx = new webkitAudioContext();
            else Howler1.usingWebAudio = false;
        } catch (e) {
            Howler1.usingWebAudio = false;
        }
        // If the audio context creation still failed, set using web audio to false.
        if (!Howler1.ctx) Howler1.usingWebAudio = false;
        // Check if a webview is being used on iOS8 or earlier (rather than the browser).
        // If it is, disable Web Audio as it causes crashing.
        var iOS = /iP(hone|od|ad)/.test(Howler1._navigator && Howler1._navigator.platform);
        var appVersion = Howler1._navigator && Howler1._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        var version = appVersion ? parseInt(appVersion[1], 10) : null;
        if (iOS && version && version < 9) {
            var safari = /safari/.test(Howler1._navigator && Howler1._navigator.userAgent.toLowerCase());
            if (Howler1._navigator && !safari) Howler1.usingWebAudio = false;
        }
        // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
        if (Howler1.usingWebAudio) {
            Howler1.masterGain = typeof Howler1.ctx.createGain === "undefined" ? Howler1.ctx.createGainNode() : Howler1.ctx.createGain();
            Howler1.masterGain.gain.setValueAtTime(Howler1._muted ? 0 : Howler1._volume, Howler1.ctx.currentTime);
            Howler1.masterGain.connect(Howler1.ctx.destination);
        }
        // Re-run the setup on Howler.
        Howler1._setup();
    };
    // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
    if (typeof define === "function" && define.amd) define([], function() {
        return {
            Howler: Howler1,
            Howl: Howl1
        };
    });
    exports.Howler = Howler1;
    exports.Howl = Howl1;
    // Add to global in Node.js (for testing, etc).
    if (typeof global !== "undefined") {
        global.HowlerGlobal = HowlerGlobal1;
        global.Howler = Howler1;
        global.Howl = Howl1;
        global.Sound = Sound1;
    } else if (typeof window !== "undefined") {
        window.HowlerGlobal = HowlerGlobal1;
        window.Howler = Howler1;
        window.Howl = Howl1;
        window.Sound = Sound1;
    }
})();
/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */ (function() {
    "use strict";
    // Setup default properties.
    HowlerGlobal.prototype._pos = [
        0,
        0,
        0
    ];
    HowlerGlobal.prototype._orientation = [
        0,
        0,
        -1,
        0,
        1,
        0
    ];
    /** Global Methods **/ /***************************************************************************/ /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */ HowlerGlobal.prototype.stereo = function(pan) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self.ctx || !self.ctx.listener) return self;
        // Loop through all Howls and update their stereo panning.
        for(var i = self._howls.length - 1; i >= 0; i--)self._howls[i].stereo(pan);
        return self;
    };
    /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */ HowlerGlobal.prototype.pos = function(x, y, z) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self.ctx || !self.ctx.listener) return self;
        // Set the defaults for optional 'y' & 'z'.
        y = typeof y !== "number" ? self._pos[1] : y;
        z = typeof z !== "number" ? self._pos[2] : z;
        if (typeof x === "number") {
            self._pos = [
                x,
                y,
                z
            ];
            if (typeof self.ctx.listener.positionX !== "undefined") {
                self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
                self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
                self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
            } else self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
        } else return self._pos;
        return self;
    };
    /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */ HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self.ctx || !self.ctx.listener) return self;
        // Set the defaults for optional 'y' & 'z'.
        var or = self._orientation;
        y = typeof y !== "number" ? or[1] : y;
        z = typeof z !== "number" ? or[2] : z;
        xUp = typeof xUp !== "number" ? or[3] : xUp;
        yUp = typeof yUp !== "number" ? or[4] : yUp;
        zUp = typeof zUp !== "number" ? or[5] : zUp;
        if (typeof x === "number") {
            self._orientation = [
                x,
                y,
                z,
                xUp,
                yUp,
                zUp
            ];
            if (typeof self.ctx.listener.forwardX !== "undefined") {
                self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
            } else self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
        } else return or;
        return self;
    };
    /** Group Methods **/ /***************************************************************************/ /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */ Howl.prototype.init = function(_super) {
        return function(o) {
            var self = this;
            // Setup user-defined default properties.
            self._orientation = o.orientation || [
                1,
                0,
                0
            ];
            self._stereo = o.stereo || null;
            self._pos = o.pos || null;
            self._pannerAttr = {
                coneInnerAngle: typeof o.coneInnerAngle !== "undefined" ? o.coneInnerAngle : 360,
                coneOuterAngle: typeof o.coneOuterAngle !== "undefined" ? o.coneOuterAngle : 360,
                coneOuterGain: typeof o.coneOuterGain !== "undefined" ? o.coneOuterGain : 0,
                distanceModel: typeof o.distanceModel !== "undefined" ? o.distanceModel : "inverse",
                maxDistance: typeof o.maxDistance !== "undefined" ? o.maxDistance : 10000,
                panningModel: typeof o.panningModel !== "undefined" ? o.panningModel : "HRTF",
                refDistance: typeof o.refDistance !== "undefined" ? o.refDistance : 1,
                rolloffFactor: typeof o.rolloffFactor !== "undefined" ? o.rolloffFactor : 1
            };
            // Setup event listeners.
            self._onstereo = o.onstereo ? [
                {
                    fn: o.onstereo
                }
            ] : [];
            self._onpos = o.onpos ? [
                {
                    fn: o.onpos
                }
            ] : [];
            self._onorientation = o.onorientation ? [
                {
                    fn: o.onorientation
                }
            ] : [];
            // Complete initilization with howler.js core's init function.
            return _super.call(this, o);
        };
    }(Howl.prototype.init);
    /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */ Howl.prototype.stereo = function(pan, id) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self._webAudio) return self;
        // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
        if (self._state !== "loaded") {
            self._queue.push({
                event: "stereo",
                action: function() {
                    self.stereo(pan, id);
                }
            });
            return self;
        }
        // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
        var pannerType = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
        // Setup the group's stereo panning if no ID is passed.
        if (typeof id === "undefined") {
            // Return the group's stereo panning if no parameters are passed.
            if (typeof pan === "number") {
                self._stereo = pan;
                self._pos = [
                    pan,
                    0,
                    0
                ];
            } else return self._stereo;
        }
        // Change the streo panning of one or all sounds in group.
        var ids = self._getSoundIds(id);
        for(var i = 0; i < ids.length; i++){
            // Get the sound.
            var sound = self._soundById(ids[i]);
            if (sound) {
                if (typeof pan === "number") {
                    sound._stereo = pan;
                    sound._pos = [
                        pan,
                        0,
                        0
                    ];
                    if (sound._node) {
                        // If we are falling back, make sure the panningModel is equalpower.
                        sound._pannerAttr.panningModel = "equalpower";
                        // Check if there is a panner setup and create a new one if not.
                        if (!sound._panner || !sound._panner.pan) setupPanner(sound, pannerType);
                        if (pannerType === "spatial") {
                            if (typeof sound._panner.positionX !== "undefined") {
                                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                            } else sound._panner.setPosition(pan, 0, 0);
                        } else sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
                    }
                    self._emit("stereo", sound._id);
                } else return sound._stereo;
            }
        }
        return self;
    };
    /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */ Howl.prototype.pos = function(x, y, z, id) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self._webAudio) return self;
        // If the sound hasn't loaded, add it to the load queue to change position when capable.
        if (self._state !== "loaded") {
            self._queue.push({
                event: "pos",
                action: function() {
                    self.pos(x, y, z, id);
                }
            });
            return self;
        }
        // Set the defaults for optional 'y' & 'z'.
        y = typeof y !== "number" ? 0 : y;
        z = typeof z !== "number" ? -0.5 : z;
        // Setup the group's spatial position if no ID is passed.
        if (typeof id === "undefined") {
            // Return the group's spatial position if no parameters are passed.
            if (typeof x === "number") self._pos = [
                x,
                y,
                z
            ];
            else return self._pos;
        }
        // Change the spatial position of one or all sounds in group.
        var ids = self._getSoundIds(id);
        for(var i = 0; i < ids.length; i++){
            // Get the sound.
            var sound = self._soundById(ids[i]);
            if (sound) {
                if (typeof x === "number") {
                    sound._pos = [
                        x,
                        y,
                        z
                    ];
                    if (sound._node) {
                        // Check if there is a panner setup and create a new one if not.
                        if (!sound._panner || sound._panner.pan) setupPanner(sound, "spatial");
                        if (typeof sound._panner.positionX !== "undefined") {
                            sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
                            sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
                            sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
                        } else sound._panner.setPosition(x, y, z);
                    }
                    self._emit("pos", sound._id);
                } else return sound._pos;
            }
        }
        return self;
    };
    /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */ Howl.prototype.orientation = function(x, y, z, id) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self._webAudio) return self;
        // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
        if (self._state !== "loaded") {
            self._queue.push({
                event: "orientation",
                action: function() {
                    self.orientation(x, y, z, id);
                }
            });
            return self;
        }
        // Set the defaults for optional 'y' & 'z'.
        y = typeof y !== "number" ? self._orientation[1] : y;
        z = typeof z !== "number" ? self._orientation[2] : z;
        // Setup the group's spatial orientation if no ID is passed.
        if (typeof id === "undefined") {
            // Return the group's spatial orientation if no parameters are passed.
            if (typeof x === "number") self._orientation = [
                x,
                y,
                z
            ];
            else return self._orientation;
        }
        // Change the spatial orientation of one or all sounds in group.
        var ids = self._getSoundIds(id);
        for(var i = 0; i < ids.length; i++){
            // Get the sound.
            var sound = self._soundById(ids[i]);
            if (sound) {
                if (typeof x === "number") {
                    sound._orientation = [
                        x,
                        y,
                        z
                    ];
                    if (sound._node) {
                        // Check if there is a panner setup and create a new one if not.
                        if (!sound._panner) {
                            // Make sure we have a position to setup the node with.
                            if (!sound._pos) sound._pos = self._pos || [
                                0,
                                0,
                                -0.5
                            ];
                            setupPanner(sound, "spatial");
                        }
                        if (typeof sound._panner.orientationX !== "undefined") {
                            sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
                            sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
                            sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
                        } else sound._panner.setOrientation(x, y, z);
                    }
                    self._emit("orientation", sound._id);
                } else return sound._orientation;
            }
        }
        return self;
    };
    /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *
   * @return {Howl/Object} Returns self or current panner attributes.
   */ Howl.prototype.pannerAttr = function() {
        var self = this;
        var args = arguments;
        var o, id, sound;
        // Stop right here if not using Web Audio.
        if (!self._webAudio) return self;
        // Determine the values based on arguments.
        if (args.length === 0) // Return the group's panner attribute values.
        return self._pannerAttr;
        else if (args.length === 1) {
            if (typeof args[0] === "object") {
                o = args[0];
                // Set the grou's panner attribute values.
                if (typeof id === "undefined") {
                    if (!o.pannerAttr) o.pannerAttr = {
                        coneInnerAngle: o.coneInnerAngle,
                        coneOuterAngle: o.coneOuterAngle,
                        coneOuterGain: o.coneOuterGain,
                        distanceModel: o.distanceModel,
                        maxDistance: o.maxDistance,
                        refDistance: o.refDistance,
                        rolloffFactor: o.rolloffFactor,
                        panningModel: o.panningModel
                    };
                    self._pannerAttr = {
                        coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== "undefined" ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
                        coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== "undefined" ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
                        coneOuterGain: typeof o.pannerAttr.coneOuterGain !== "undefined" ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
                        distanceModel: typeof o.pannerAttr.distanceModel !== "undefined" ? o.pannerAttr.distanceModel : self._distanceModel,
                        maxDistance: typeof o.pannerAttr.maxDistance !== "undefined" ? o.pannerAttr.maxDistance : self._maxDistance,
                        refDistance: typeof o.pannerAttr.refDistance !== "undefined" ? o.pannerAttr.refDistance : self._refDistance,
                        rolloffFactor: typeof o.pannerAttr.rolloffFactor !== "undefined" ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
                        panningModel: typeof o.pannerAttr.panningModel !== "undefined" ? o.pannerAttr.panningModel : self._panningModel
                    };
                }
            } else {
                // Return this sound's panner attribute values.
                sound = self._soundById(parseInt(args[0], 10));
                return sound ? sound._pannerAttr : self._pannerAttr;
            }
        } else if (args.length === 2) {
            o = args[0];
            id = parseInt(args[1], 10);
        }
        // Update the values of the specified sounds.
        var ids = self._getSoundIds(id);
        for(var i = 0; i < ids.length; i++){
            sound = self._soundById(ids[i]);
            if (sound) {
                // Merge the new values into the sound.
                var pa = sound._pannerAttr;
                pa = {
                    coneInnerAngle: typeof o.coneInnerAngle !== "undefined" ? o.coneInnerAngle : pa.coneInnerAngle,
                    coneOuterAngle: typeof o.coneOuterAngle !== "undefined" ? o.coneOuterAngle : pa.coneOuterAngle,
                    coneOuterGain: typeof o.coneOuterGain !== "undefined" ? o.coneOuterGain : pa.coneOuterGain,
                    distanceModel: typeof o.distanceModel !== "undefined" ? o.distanceModel : pa.distanceModel,
                    maxDistance: typeof o.maxDistance !== "undefined" ? o.maxDistance : pa.maxDistance,
                    refDistance: typeof o.refDistance !== "undefined" ? o.refDistance : pa.refDistance,
                    rolloffFactor: typeof o.rolloffFactor !== "undefined" ? o.rolloffFactor : pa.rolloffFactor,
                    panningModel: typeof o.panningModel !== "undefined" ? o.panningModel : pa.panningModel
                };
                // Update the panner values or create a new panner if none exists.
                var panner = sound._panner;
                if (panner) {
                    panner.coneInnerAngle = pa.coneInnerAngle;
                    panner.coneOuterAngle = pa.coneOuterAngle;
                    panner.coneOuterGain = pa.coneOuterGain;
                    panner.distanceModel = pa.distanceModel;
                    panner.maxDistance = pa.maxDistance;
                    panner.refDistance = pa.refDistance;
                    panner.rolloffFactor = pa.rolloffFactor;
                    panner.panningModel = pa.panningModel;
                } else {
                    // Make sure we have a position to setup the node with.
                    if (!sound._pos) sound._pos = self._pos || [
                        0,
                        0,
                        -0.5
                    ];
                    // Create a new panner node.
                    setupPanner(sound, "spatial");
                }
            }
        }
        return self;
    };
    /** Single Sound Methods **/ /***************************************************************************/ /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */ Sound.prototype.init = function(_super) {
        return function() {
            var self = this;
            var parent = self._parent;
            // Setup user-defined default properties.
            self._orientation = parent._orientation;
            self._stereo = parent._stereo;
            self._pos = parent._pos;
            self._pannerAttr = parent._pannerAttr;
            // Complete initilization with howler.js core Sound's init function.
            _super.call(this);
            // If a stereo or position was specified, set it up.
            if (self._stereo) parent.stereo(self._stereo);
            else if (self._pos) parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
        };
    }(Sound.prototype.init);
    /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */ Sound.prototype.reset = function(_super) {
        return function() {
            var self = this;
            var parent = self._parent;
            // Reset all spatial plugin properties on this sound.
            self._orientation = parent._orientation;
            self._stereo = parent._stereo;
            self._pos = parent._pos;
            self._pannerAttr = parent._pannerAttr;
            // If a stereo or position was specified, set it up.
            if (self._stereo) parent.stereo(self._stereo);
            else if (self._pos) parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
            else if (self._panner) {
                // Disconnect the panner.
                self._panner.disconnect(0);
                self._panner = undefined;
                parent._refreshBuffer(self);
            }
            // Complete resetting of the sound.
            return _super.call(this);
        };
    }(Sound.prototype.reset);
    /** Helper Methods **/ /***************************************************************************/ /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */ var setupPanner = function(sound, type) {
        type = type || "spatial";
        // Create the new panner node.
        if (type === "spatial") {
            sound._panner = Howler.ctx.createPanner();
            sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
            sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
            sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
            sound._panner.distanceModel = sound._pannerAttr.distanceModel;
            sound._panner.maxDistance = sound._pannerAttr.maxDistance;
            sound._panner.refDistance = sound._pannerAttr.refDistance;
            sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
            sound._panner.panningModel = sound._pannerAttr.panningModel;
            if (typeof sound._panner.positionX !== "undefined") {
                sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
            } else sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
            if (typeof sound._panner.orientationX !== "undefined") {
                sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
                sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
                sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
            } else sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
        } else {
            sound._panner = Howler.ctx.createStereoPanner();
            sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
        }
        sound._panner.connect(sound._node);
        // Update the connections.
        if (!sound._paused) sound._parent.pause(sound._id, true).play(sound._id, true);
    };
})();

},{}]},["lKzq4","bNKaB"], "bNKaB", "parcelRequire2008")

//# sourceMappingURL=index.0641b553.js.map
