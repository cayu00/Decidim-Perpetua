/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/entrypoints/decidim_map_provider_here.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/entrypoints/decidim_map_provider_here.js ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_map_provider_here__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/map/provider/here */ "../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/map/provider/here.js");
/* harmony import */ var src_decidim_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/map */ "../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/map.js");



/***/ }),

/***/ "../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/map/provider/here.js":
/*!***************************************************************************************************************************!*\
  !*** ../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/map/provider/here.js ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_decidim_vendor_leaflet_tilelayer_here__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/vendor/leaflet-tilelayer-here */ "../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/vendor/leaflet-tilelayer-here.js");
/* harmony import */ var src_decidim_vendor_leaflet_tilelayer_here__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_decidim_vendor_leaflet_tilelayer_here__WEBPACK_IMPORTED_MODULE_1__);



/**
 * NOTE:
 * This has to load before decidim/map in order for it to apply correctly when
 * the map is initialized. The document.ready handler set by this script has to
 * be registered before decidim/map registers its own.
 */
$(function () {
  $("[data-decidim-map]").on("configure.decidim", function (_ev, map, mapConfig) {
    L.tileLayer.here(mapConfig.tileLayer).addTo(map);
  });
});

/***/ }),

/***/ "../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/vendor/leaflet-tilelayer-here.js":
/*!***************************************************************************************************************************************!*\
  !*** ../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/vendor/leaflet-tilelayer-here.js ***!
  \***************************************************************************************************************************************/
/***/ (function() {

/* eslint-disable */

// 🍂class TileLayer.HERE
// Tile layer for HERE maps tiles.
L.TileLayer.HERE = L.TileLayer.extend({
  options: {
    subdomains: '1234',
    minZoom: 2,
    maxZoom: 18,
    // 🍂option scheme: String = 'normal.day'
    // The "map scheme", as documented in the HERE API.
    scheme: 'normal.day',
    // 🍂option resource: String = 'maptile'
    // The "map resource", as documented in the HERE API.
    resource: 'maptile',
    // 🍂option mapId: String = 'newest'
    // Version of the map tiles to be used, or a hash of an unique map
    mapId: 'newest',
    // 🍂option format: String = 'png8'
    // Image format to be used (`png8`, `png`, or `jpg`)
    format: 'png8',
    // 🍂option appId: String = ''
    // Required option. The `app_id` provided as part of the HERE credentials
    appId: '',
    // 🍂option appCode: String = ''
    // Required option. The `app_code` provided as part of the HERE credentials
    appCode: '',
    // 🍂option useCIT: boolean = false
    // Whether to use the CIT when loading the here-maptiles
    useCIT: false,
    // 🍂option useHTTPS: boolean = true
    // Whether to use HTTPS when loading the here-maptiles
    useHTTPS: true,
    // 🍂option language: String = ''
    // The language of the descriptions on the maps that are loaded
    language: '',
    // 🍂option language: String = ''
    // The second language of the descriptions on the maps that are loaded
    language2: ''
  },
  initialize: function initialize(options) {
    options = L.setOptions(this, options);

    // Decide if this scheme uses the aerial servers or the basemap servers
    var schemeStart = options.scheme.split('.')[0];
    options.tileResolution = 256;

    // {Base URL}{Path}/{resource (tile type)}/{map id}/{scheme}/{zoom}/{column}/{row}/{size}/{format}
    // ?apiKey={YOUR_API_KEY}
    // &{param}={value}

    var params = ['apiKey=' + encodeURIComponent(options.apiKey)];
    // Fallback to old app_id,app_code if no apiKey passed
    if (!options.apiKey) {
      params = ['app_id=' + encodeURIComponent(options.appId), 'app_code=' + encodeURIComponent(options.appCode)];
    }
    if (options.language) {
      params.push('lg=' + encodeURIComponent(options.language));
    }
    if (options.language2) {
      params.push('lg2=' + encodeURIComponent(options.language2));
    }
    var urlQuery = '?' + params.join('&');
    var path = '/maptile/2.1/{resource}/{mapId}/{scheme}/{z}/{x}/{y}/{tileResolution}/{format}' + urlQuery;
    var attributionPath = '/maptile/2.1/copyright/{mapId}?apiKey={apiKey}';
    var baseUrl = 'maps.ls.hereapi.com';

    // Old style with apiId/apiCode for compatibility
    if (!options.apiKey) {
      // make sure the CIT-url can be used
      baseUrl = 'maps' + (options.useCIT ? '.cit' : '') + '.api.here.com';
      attributionPath = '/maptile/2.1/copyright/{mapId}?app_id={appId}&app_code={appCode}';
    }
    var tileServer = 'base.' + baseUrl;
    if (schemeStart == 'satellite' || schemeStart == 'terrain' || schemeStart == 'hybrid') {
      tileServer = 'aerial.' + baseUrl;
    }
    if (options.scheme.indexOf('.traffic.') !== -1) {
      tileServer = 'traffic' + baseUrl;
    }
    var protocol = 'http' + (options.useHTTPS ? 's' : '');
    var tileUrl = protocol + '://{s}.' + tileServer + path;
    this._attributionUrl = L.Util.template(protocol + '://1.' + tileServer + attributionPath, this.options);
    L.TileLayer.prototype.initialize.call(this, tileUrl, options);
    this._attributionText = '';
  },
  onAdd: function onAdd(map) {
    L.TileLayer.prototype.onAdd.call(this, map);
    if (!this._attributionBBoxes) {
      this._fetchAttributionBBoxes();
    }
  },
  onRemove: function onRemove(map) {
    //
    // Remove the attribution text, and clear the cached text so it will be recalculated
    // if/when we are shown again.
    //
    this._map.attributionControl.removeAttribution(this._attributionText);
    this._attributionText = '';
    this._map.off('moveend zoomend resetview', this._findCopyrightBBox, this);

    //
    // Call the prototype last, once we've tidied up our own changes
    //
    L.TileLayer.prototype.onRemove.call(this, map);
  },
  _fetchAttributionBBoxes: function _onMapMove() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = L.bind(function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        this._parseAttributionBBoxes(JSON.parse(xmlhttp.responseText));
      }
    }, this);
    xmlhttp.open("GET", this._attributionUrl, true);
    xmlhttp.send();
  },
  _parseAttributionBBoxes: function _parseAttributionBBoxes(json) {
    if (!this._map) {
      return;
    }
    var providers = json[this.options.scheme.split('.')[0]] || json.normal;
    for (var i = 0; i < providers.length; i++) {
      if (providers[i].boxes) {
        for (var j = 0; j < providers[i].boxes.length; j++) {
          var box = providers[i].boxes[j];
          providers[i].boxes[j] = L.latLngBounds([[box[0], box[1]], [box[2], box[3]]]);
        }
      }
    }
    this._map.on('moveend zoomend resetview', this._findCopyrightBBox, this);
    this._attributionProviders = providers;
    this._findCopyrightBBox();
  },
  _findCopyrightBBox: function _findCopyrightBBox() {
    if (!this._map) {
      return;
    }
    var providers = this._attributionProviders;
    var visibleProviders = [];
    var zoom = this._map.getZoom();
    var visibleBounds = this._map.getBounds();
    for (var i = 0; i < providers.length; i++) {
      if (providers[i].minLevel <= zoom && providers[i].maxLevel >= zoom) {
        if (!providers[i].boxes) {
          // No boxes = attribution always visible
          visibleProviders.push(providers[i]);
        } else {
          for (var j = 0; j < providers[i].boxes.length; j++) {
            var box = providers[i].boxes[j];
            if (visibleBounds.intersects(box)) {
              visibleProviders.push(providers[i]);
              break;
            }
          }
        }
      }
    }
    var attributions = ['<a href="https://legal.here.com/en-gb/terms" target="_blank" rel="noopener noreferrer">HERE maps</a>'];
    for (var i = 0; i < visibleProviders.length; i++) {
      var provider = visibleProviders[i];
      attributions.push('<abbr title="' + provider.alt + '">' + provider.label + '</abbr>');
    }
    var attributionText = '© ' + attributions.join(', ') + '. ';
    if (attributionText !== this._attributionText) {
      this._map.attributionControl.removeAttribution(this._attributionText);
      this._map.attributionControl.addAttribution(this._attributionText = attributionText);
    }
  }
});
L.tileLayer.here = function (opts) {
  return new L.TileLayer.HERE(opts);
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"decidim_map_provider_here": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdecidim_application"] = self["webpackChunkdecidim_application"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_leaflet_markercluster_dist_leaflet_markercluster-src_js","vendors-node_modules_leaflet_dist_leaflet-src_js","_rbenv_versions_3_0_2_lib_ruby_gems_3_0_0_gems_decidim-core-0_27_4_app_packs_src_decidim_map_-c6e2bb","_rbenv_versions_3_0_2_lib_ruby_gems_3_0_0_gems_decidim-core-0_27_4_app_packs_src_decidim_map_js"], function() { return __webpack_require__("../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/entrypoints/decidim_map_provider_here.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=decidim_map_provider_here.js.map