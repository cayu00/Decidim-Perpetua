(self["webpackChunkdecidim_application"] = self["webpackChunkdecidim_application"] || []).push([["_rbenv_versions_3_0_2_lib_ruby_gems_3_0_0_gems_decidim-core-0_27_4_app_packs_src_decidim_map_-c6e2bb"],{

/***/ "../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/map/controller.js":
/*!************************************************************************************************************************!*\
  !*** ../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/map/controller.js ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MapController; }
/* harmony export */ });
/* harmony import */ var src_decidim_map_controller_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/map/controller_registry */ "../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/map/controller_registry.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

var MapController = /*#__PURE__*/function () {
  function MapController(mapId, config) {
    _classCallCheck(this, MapController);
    // Remove the old map if there is already one with the same ID.
    var old = src_decidim_map_controller_registry__WEBPACK_IMPORTED_MODULE_0__["default"].getController(mapId);
    if (old) {
      old.remove();
    }
    this.mapId = mapId;
    this.config = $.extend({
      popupTemplateId: "marker-popup",
      markerColor: "#ef604d"
    }, config);
    this.map = null;
    this.eventHandlers = {};
    src_decidim_map_controller_registry__WEBPACK_IMPORTED_MODULE_0__["default"].setController(mapId, this);
  }
  _createClass(MapController, [{
    key: "getConfig",
    value: function getConfig() {
      return this.config;
    }
  }, {
    key: "getMap",
    value: function getMap() {
      return this.map;
    }
  }, {
    key: "load",
    value: function load() {
      this.map = L.map(this.mapId);
      this.map.scrollWheelZoom.disable();

      // Fix the keyboard navigation on the map
      this.map.on("popupopen", function (ev) {
        var $popup = $(ev.popup.getElement());
        $popup.attr("tabindex", 0).focus();
      });
      this.map.on("popupclose", function (ev) {
        $(ev.popup._source._icon).focus();
      });
      return this.map;
    }

    // Override this in the specific map controllers.
  }, {
    key: "start",
    value: function start() {}
  }, {
    key: "remove",
    value: function remove() {
      if (this.map) {
        this.map.remove();
        this.map = null;
      }
    }
  }, {
    key: "createIcon",
    value: function createIcon() {
      return new L.DivIcon.SVGIcon.DecidimIcon({
        fillColor: this.config.markerColor,
        iconSize: L.point(28, 36)
      });
    }
  }, {
    key: "setEventHandler",
    value: function setEventHandler(name, callback) {
      this.eventHandlers[name] = callback;
    }
  }, {
    key: "triggerEvent",
    value: function triggerEvent(eventName, payload) {
      var handler = this.eventHandlers[eventName];
      if (typeof handler === "function") {
        return Reflect.apply(handler, this, payload);
      }
      return null;
    }
  }]);
  return MapController;
}();


/***/ }),

/***/ "../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/map/controller/markers.js":
/*!********************************************************************************************************************************!*\
  !*** ../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/map/controller/markers.js ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MapMarkersController; }
/* harmony export */ });
/* harmony import */ var src_decidim_vendor_jquery_tmpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/vendor/jquery-tmpl */ "../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/vendor/jquery-tmpl.js");
/* harmony import */ var src_decidim_vendor_jquery_tmpl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_decidim_vendor_jquery_tmpl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_decidim_map_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/map/controller */ "../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/map/controller.js");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet.markercluster */ "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}



var MapMarkersController = /*#__PURE__*/function (_MapController) {
  _inherits(MapMarkersController, _MapController);
  var _super = _createSuper(MapMarkersController);
  function MapMarkersController() {
    _classCallCheck(this, MapMarkersController);
    return _super.apply(this, arguments);
  }
  _createClass(MapMarkersController, [{
    key: "start",
    value: function start() {
      this.markerClusters = null;
      if (Array.isArray(this.config.markers) && this.config.markers.length > 0) {
        this.addMarkers(this.config.markers);
      } else {
        this.map.fitWorld();
      }
    }
  }, {
    key: "addMarkers",
    value: function addMarkers(markersData) {
      var _this = this;
      if (this.markerClusters === null) {
        this.markerClusters = new L.MarkerClusterGroup();
        this.map.addLayer(this.markerClusters);
      }

      // Pre-compiles the template
      $.template(this.config.popupTemplateId, $("#".concat(this.config.popupTemplateId)).html());
      var bounds = new L.LatLngBounds(markersData.map(function (markerData) {
        return [markerData.latitude, markerData.longitude];
      }));
      markersData.forEach(function (markerData) {
        var marker = new L.Marker([markerData.latitude, markerData.longitude], {
          icon: _this.createIcon(),
          keyboard: true,
          title: markerData.title
        });
        var node = document.createElement("div");
        $.tmpl(_this.config.popupTemplateId, markerData).appendTo(node);
        marker.bindPopup(node, {
          maxwidth: 640,
          minWidth: 500,
          keepInView: true,
          className: "map-info"
        }).openPopup();
        _this.markerClusters.addLayer(marker);
      });

      // Make sure there is enough space in the map for the padding to be
      // applied. Otherwise the map will automatically zoom out (test it on
      // mobile). Make sure there is at least the same amount of width and
      // height available on both sides + the padding (i.e. 4x padding in
      // total).
      var size = this.map.getSize();
      if (size.y >= 400 && size.x >= 400) {
        this.map.fitBounds(bounds, {
          padding: [100, 100]
        });
      } else if (size.y >= 120 && size.x >= 120) {
        this.map.fitBounds(bounds, {
          padding: [30, 30]
        });
      } else {
        this.map.fitBounds(bounds);
      }
    }
  }, {
    key: "clearMarkers",
    value: function clearMarkers() {
      this.map.removeLayer(this.markerClusters);
      this.markerClusters = new L.MarkerClusterGroup();
      this.map.addLayer(this.markerClusters);
    }
  }]);
  return MapMarkersController;
}(src_decidim_map_controller__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/map/controller_registry.js":
/*!*********************************************************************************************************************************!*\
  !*** ../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/map/controller_registry.js ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MapControllerRegistry; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var CONTROLLER_REGISTRY = {};
var MapControllerRegistry = /*#__PURE__*/function () {
  function MapControllerRegistry() {
    _classCallCheck(this, MapControllerRegistry);
  }
  _createClass(MapControllerRegistry, null, [{
    key: "getController",
    value: function getController(mapId) {
      return CONTROLLER_REGISTRY[mapId];
    }
  }, {
    key: "setController",
    value: function setController(mapId, map) {
      CONTROLLER_REGISTRY[mapId] = map;
    }
  }, {
    key: "findByMap",
    value: function findByMap(map) {
      return Object.values(CONTROLLER_REGISTRY).find(function (ctrl) {
        return ctrl.getMap() === map;
      });
    }
  }]);
  return MapControllerRegistry;
}();


/***/ }),

/***/ "../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/vendor/jquery-tmpl.js":
/*!****************************************************************************************************************************!*\
  !*** ../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/vendor/jquery-tmpl.js ***!
  \****************************************************************************************************************************/
/***/ (function() {

/* eslint-disable */

/*
 * jQuery Templating Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
;
(function (jQuery, undefined) {
  var oldManip = jQuery.fn.domManip,
    tmplItmAtt = "_tmplitem",
    htmlExpr = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
    newTmplItems = {},
    wrappedItems = {},
    appendToTmplItems,
    topTmplItem = {
      key: 0,
      data: {}
    },
    itemKey = 0,
    cloneIndex = 0,
    stack = [];
  function newTmplItem(options, parentItem, fn, data) {
    // Returns a template item data structure for a new rendered instance of a template (a 'template item').
    // The content field is a hierarchical array of strings and nested items (to be
    // removed and replaced by nodes field of dom elements, once inserted in DOM).
    var newItem = {
      data: data || (parentItem ? parentItem.data : {}),
      _wrap: parentItem ? parentItem._wrap : null,
      tmpl: null,
      parent: parentItem || null,
      nodes: [],
      calls: tiCalls,
      nest: tiNest,
      wrap: tiWrap,
      html: tiHtml,
      update: tiUpdate
    };
    if (options) {
      jQuery.extend(newItem, options, {
        nodes: [],
        parent: parentItem
      });
    }
    if (fn) {
      // Build the hierarchical content to be used during insertion into DOM
      newItem.tmpl = fn;
      newItem._ctnt = newItem._ctnt || newItem.tmpl(jQuery, newItem);
      newItem.key = ++itemKey;
      // Keep track of new template item, until it is stored as jQuery Data on DOM element
      (stack.length ? wrappedItems : newTmplItems)[itemKey] = newItem;
    }
    return newItem;
  }

  // Override appendTo etc., in order to provide support for targeting multiple elements. (This code would disappear if integrated in jquery core).
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var ret = [],
        insert = jQuery(selector),
        elems,
        i,
        l,
        tmplItems,
        parent = this.length === 1 && this[0].parentNode;
      appendToTmplItems = newTmplItems || {};
      if (parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1) {
        insert[original](this[0]);
        ret = this;
      } else {
        for (i = 0, l = insert.length; i < l; i++) {
          cloneIndex = i;
          elems = (i > 0 ? this.clone(true) : this).get();
          jQuery.fn[original].apply(jQuery(insert[i]), elems);
          ret = ret.concat(elems);
        }
        cloneIndex = 0;
        ret = this.pushStack(ret, name, insert.selector);
      }
      tmplItems = appendToTmplItems;
      appendToTmplItems = null;
      jQuery.tmpl.complete(tmplItems);
      return ret;
    };
  });
  jQuery.fn.extend({
    // Use first wrapped element as template markup.
    // Return wrapped set of template items, obtained by rendering template against data.
    tmpl: function tmpl(data, options, parentItem) {
      return jQuery.tmpl(this[0], data, options, parentItem);
    },
    // Find which rendered template item the first wrapped DOM element belongs to
    tmplItem: function tmplItem() {
      return jQuery.tmplItem(this[0]);
    },
    // Consider the first wrapped element as a template declaration, and get the compiled template or store it as a named template.
    template: function template(name) {
      return jQuery.template(name, this[0]);
    },
    domManip: function domManip(args, table, callback, options) {
      // This appears to be a bug in the appendTo, etc. implementation
      // it should be doing .call() instead of .apply(). See #6227
      if (args[0] && args[0].nodeType) {
        var dmArgs = jQuery.makeArray(arguments),
          argsLength = args.length,
          i = 0,
          tmplItem;
        while (i < argsLength && !(tmplItem = jQuery.data(args[i++], "tmplItem"))) {}
        if (argsLength > 1) {
          dmArgs[0] = [jQuery.makeArray(args)];
        }
        if (tmplItem && cloneIndex) {
          dmArgs[2] = function (fragClone) {
            // Handler called by oldManip when rendered template has been inserted into DOM.
            jQuery.tmpl.afterManip(this, fragClone, callback);
          };
        }
        oldManip.apply(this, dmArgs);
      } else {
        oldManip.apply(this, arguments);
      }
      cloneIndex = 0;
      if (!appendToTmplItems) {
        jQuery.tmpl.complete(newTmplItems);
      }
      return this;
    }
  });
  jQuery.extend({
    // Return wrapped set of template items, obtained by rendering template against data.
    tmpl: function tmpl(_tmpl, data, options, parentItem) {
      var ret,
        topLevel = !parentItem;
      if (topLevel) {
        // This is a top-level tmpl call (not from a nested template using {{tmpl}})
        parentItem = topTmplItem;
        _tmpl = jQuery.template[_tmpl] || jQuery.template(null, _tmpl);
        wrappedItems = {}; // Any wrapped items will be rebuilt, since this is top level
      } else if (!_tmpl) {
        // The template item is already associated with DOM - this is a refresh.
        // Re-evaluate rendered template for the parentItem
        _tmpl = parentItem.tmpl;
        newTmplItems[parentItem.key] = parentItem;
        parentItem.nodes = [];
        if (parentItem.wrapped) {
          updateWrapped(parentItem, parentItem.wrapped);
        }
        // Rebuild, without creating a new template item
        return jQuery(build(parentItem, null, parentItem.tmpl(jQuery, parentItem)));
      }
      if (!_tmpl) {
        return []; // Could throw...
      }

      if (typeof data === "function") {
        data = data.call(parentItem || {});
      }
      if (options && options.wrapped) {
        updateWrapped(options, options.wrapped);
      }
      ret = jQuery.isArray(data) ? jQuery.map(data, function (dataItem) {
        return dataItem ? newTmplItem(options, parentItem, _tmpl, dataItem) : null;
      }) : [newTmplItem(options, parentItem, _tmpl, data)];
      return topLevel ? jQuery(build(parentItem, null, ret)) : ret;
    },
    // Return rendered template item for an element.
    tmplItem: function tmplItem(elem) {
      var tmplItem;
      if (elem instanceof jQuery) {
        elem = elem[0];
      }
      while (elem && elem.nodeType === 1 && !(tmplItem = jQuery.data(elem, "tmplItem")) && (elem = elem.parentNode)) {}
      return tmplItem || topTmplItem;
    },
    // Set:
    // Use $.template( name, tmpl ) to cache a named template,
    // where tmpl is a template string, a script element or a jQuery instance wrapping a script element, etc.
    // Use $( "selector" ).template( name ) to provide access by name to a script block template declaration.

    // Get:
    // Use $.template( name ) to access a cached template.
    // Also $( selectorToScriptBlock ).template(), or $.template( null, templateString )
    // will return the compiled template, without adding a name reference.
    // If templateString includes at least one HTML tag, $.template( templateString ) is equivalent
    // to $.template( null, templateString )
    template: function template(name, tmpl) {
      if (tmpl) {
        // Compile template and associate with name
        if (typeof tmpl === "string") {
          // This is an HTML string being passed directly in.
          tmpl = buildTmplFn(tmpl);
        } else if (tmpl instanceof jQuery) {
          tmpl = tmpl[0] || {};
        }
        if (tmpl.nodeType) {
          // If this is a template block, use cached copy, or generate tmpl function and cache.
          tmpl = jQuery.data(tmpl, "tmpl") || jQuery.data(tmpl, "tmpl", buildTmplFn(tmpl.innerHTML));
        }
        return typeof name === "string" ? jQuery.template[name] = tmpl : tmpl;
      }
      // Return named compiled template
      return name ? typeof name !== "string" ? jQuery.template(null, name) : jQuery.template[name] ||
      // If not in map, treat as a selector. (If integrated with core, use quickExpr.exec)
      jQuery.template(null, htmlExpr.test(name) ? name : jQuery(name)) : null;
    },
    encode: function encode(text) {
      // Do HTML encoding replacing < > & and ' and " by corresponding entities.
      return ("" + text).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;");
    }
  });
  jQuery.extend(jQuery.tmpl, {
    tag: {
      "tmpl": {
        _default: {
          $2: "null"
        },
        open: "if($notnull_1){_=_.concat($item.nest($1,$2));}"
        // tmpl target parameter can be of type function, so use $1, not $1a (so not auto detection of functions)
        // This means that {{tmpl foo}} treats foo as a template (which IS a function).
        // Explicit parens can be used if foo is a function that returns a template: {{tmpl foo()}}.
      },

      "wrap": {
        _default: {
          $2: "null"
        },
        open: "$item.calls(_,$1,$2);_=[];",
        close: "call=$item.calls();_=call._.concat($item.wrap(call,_));"
      },
      "each": {
        _default: {
          $2: "$index, $value"
        },
        open: "if($notnull_1){$.each($1a,function($2){with(this){",
        close: "}});}"
      },
      "if": {
        open: "if(($notnull_1) && $1a){",
        close: "}"
      },
      "else": {
        _default: {
          $1: "true"
        },
        open: "}else if(($notnull_1) && $1a){"
      },
      "html": {
        // Unecoded expression evaluation.
        open: "if($notnull_1){_.push($1a);}"
      },
      "=": {
        // Encoded expression evaluation. Abbreviated form is ${}.
        _default: {
          $1: "$data"
        },
        open: "if($notnull_1){_.push($.encode($1a));}"
      },
      "!": {
        // Comment tag. Skipped by parser
        open: ""
      }
    },
    // This stub can be overridden, e.g. in jquery.tmplPlus for providing rendered events
    complete: function complete(items) {
      newTmplItems = {};
    },
    // Call this from code which overrides domManip, or equivalent
    // Manage cloning/storing template items etc.
    afterManip: function afterManip(elem, fragClone, callback) {
      // Provides cloned fragment ready for fixup prior to and after insertion into DOM
      var content = fragClone.nodeType === 11 ? jQuery.makeArray(fragClone.childNodes) : fragClone.nodeType === 1 ? [fragClone] : [];

      // Return fragment to original caller (e.g. append) for DOM insertion
      callback.call(elem, fragClone);

      // Fragment has been inserted:- Add inserted nodes to tmplItem data structure. Replace inserted element annotations by jQuery.data.
      storeTmplItems(content);
      cloneIndex++;
    }
  });

  //========================== Private helper functions, used by code above ==========================

  function build(tmplItem, nested, content) {
    // Convert hierarchical content into flat string array
    // and finally return array of fragments ready for DOM insertion
    var frag,
      ret = content ? jQuery.map(content, function (item) {
        return typeof item === "string" ?
        // Insert template item annotations, to be converted to jQuery.data( "tmplItem" ) when elems are inserted into DOM.
        tmplItem.key ? item.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + tmplItmAtt + "=\"" + tmplItem.key + "\" $2") : item :
        // This is a child template item. Build nested template.
        build(item, tmplItem, item._ctnt);
      }) :
      // If content is not defined, insert tmplItem directly. Not a template item. May be a string, or a string array, e.g. from {{html $item.html()}}.
      tmplItem;
    if (nested) {
      return ret;
    }

    // top-level template
    ret = ret.join("");

    // Support templates which have initial or final text nodes, or consist only of text
    // Also support HTML entities within the HTML markup.
    ret.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function (all, before, middle, after) {
      frag = jQuery(middle).get();
      storeTmplItems(frag);
      if (before) {
        frag = unencode(before).concat(frag);
      }
      if (after) {
        frag = frag.concat(unencode(after));
      }
    });
    return frag ? frag : unencode(ret);
  }
  function unencode(text) {
    // Use createElement, since createTextNode will not render HTML entities correctly
    var el = document.createElement("div");
    el.innerHTML = text;
    return jQuery.makeArray(el.childNodes);
  }

  // Generate a reusable function that will serve to render a template against data
  function buildTmplFn(markup) {
    return new Function("jQuery", "$item", "var $=jQuery,call,_=[],$data=$item.data;" +
    // Introduce the data as local variables using with(){}
    "with($data){_.push('" +
    // Convert the template into pure JavaScript
    jQuery.trim(markup).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function (all, slash, type, fnargs, target, parens, args) {
      var tag = jQuery.tmpl.tag[type],
        def,
        expr,
        exprAutoFnDetect;
      if (!tag) {
        throw "Template command not found: " + type;
      }
      def = tag._default || [];
      if (parens && !/\w$/.test(target)) {
        target += parens;
        parens = "";
      }
      if (target) {
        target = unescape(target);
        args = args ? "," + unescape(args) + ")" : parens ? ")" : "";
        // Support for target being things like a.toLowerCase();
        // In that case don't call with template item as 'this' pointer. Just evaluate...
        expr = parens ? target.indexOf(".") > -1 ? target + parens : "(" + target + ").call($item" + args : target;
        exprAutoFnDetect = parens ? expr : "(typeof(" + target + ")==='function'?(" + target + ").call($item):(" + target + "))";
      } else {
        exprAutoFnDetect = expr = def.$1 || "null";
      }
      fnargs = unescape(fnargs);
      return "');" + tag[slash ? "close" : "open"].split("$notnull_1").join(target ? "typeof(" + target + ")!=='undefined' && (" + target + ")!=null" : "true").split("$1a").join(exprAutoFnDetect).split("$1").join(expr).split("$2").join(fnargs ? fnargs.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g, function (all, name, parens, params) {
        params = params ? "," + params + ")" : parens ? ")" : "";
        return params ? "(" + name + ").call($item" + params : all;
      }) : def.$2 || "") + "_.push('";
    }) + "');}return _;");
  }
  function updateWrapped(options, wrapped) {
    // Build the wrapped content.
    options._wrap = build(options, true,
    // Suport imperative scenario in which options.wrapped can be set to a selector or an HTML string.
    jQuery.isArray(wrapped) ? wrapped : [htmlExpr.test(wrapped) ? wrapped : jQuery(wrapped).html()]).join("");
  }
  function unescape(args) {
    return args ? args.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null;
  }
  function outerHtml(elem) {
    var div = document.createElement("div");
    div.appendChild(elem.cloneNode(true));
    return div.innerHTML;
  }

  // Store template items in jQuery.data(), ensuring a unique tmplItem data data structure for each rendered template instance.
  function storeTmplItems(content) {
    var keySuffix = "_" + cloneIndex,
      elem,
      elems,
      newClonedItems = {},
      i,
      l,
      m;
    for (i = 0, l = content.length; i < l; i++) {
      if ((elem = content[i]).nodeType !== 1) {
        continue;
      }
      elems = elem.getElementsByTagName("*");
      for (m = elems.length - 1; m >= 0; m--) {
        processItemKey(elems[m]);
      }
      processItemKey(elem);
    }
    function processItemKey(el) {
      var pntKey,
        pntNode = el,
        pntItem,
        tmplItem,
        key;
      // Ensure that each rendered template inserted into the DOM has its own template item,
      if (key = el.getAttribute(tmplItmAtt)) {
        while (pntNode.parentNode && (pntNode = pntNode.parentNode).nodeType === 1 && !(pntKey = pntNode.getAttribute(tmplItmAtt))) {}
        if (pntKey !== key) {
          // The next ancestor with a _tmplitem expando is on a different key than this one.
          // So this is a top-level element within this template item
          // Set pntNode to the key of the parentNode, or to 0 if pntNode.parentNode is null, or pntNode is a fragment.
          pntNode = pntNode.parentNode ? pntNode.nodeType === 11 ? 0 : pntNode.getAttribute(tmplItmAtt) || 0 : 0;
          if (!(tmplItem = newTmplItems[key])) {
            // The item is for wrapped content, and was copied from the temporary parent wrappedItem.
            tmplItem = wrappedItems[key];
            tmplItem = newTmplItem(tmplItem, newTmplItems[pntNode] || wrappedItems[pntNode], null, true);
            tmplItem.key = ++itemKey;
            newTmplItems[itemKey] = tmplItem;
          }
          if (cloneIndex) {
            cloneTmplItem(key);
          }
        }
        el.removeAttribute(tmplItmAtt);
      } else if (cloneIndex && (tmplItem = jQuery.data(el, "tmplItem"))) {
        // This was a rendered element, cloned during append or appendTo etc.
        // TmplItem stored in jQuery data has already been cloned in cloneCopyEvent. We must replace it with a fresh cloned tmplItem.
        cloneTmplItem(tmplItem.key);
        newTmplItems[tmplItem.key] = tmplItem;
        pntNode = jQuery.data(el.parentNode, "tmplItem");
        pntNode = pntNode ? pntNode.key : 0;
      }
      if (tmplItem) {
        pntItem = tmplItem;
        // Find the template item of the parent element.
        // (Using !=, not !==, since pntItem.key is number, and pntNode may be a string)
        while (pntItem && pntItem.key != pntNode) {
          // Add this element as a top-level node for this rendered template item, as well as for any
          // ancestor items between this item and the item of its parent element
          pntItem.nodes.push(el);
          pntItem = pntItem.parent;
        }
        // Delete content built during rendering - reduce API surface area and memory use, and avoid exposing of stale data after rendering...
        delete tmplItem._ctnt;
        delete tmplItem._wrap;
        // Store template item as jQuery data on the element
        jQuery.data(el, "tmplItem", tmplItem);
      }
      function cloneTmplItem(key) {
        key = key + keySuffix;
        tmplItem = newClonedItems[key] = newClonedItems[key] || newTmplItem(tmplItem, newTmplItems[tmplItem.parent.key + keySuffix] || tmplItem.parent, null, true);
      }
    }
  }

  //---- Helper functions for template item ----

  function tiCalls(content, tmpl, data, options) {
    if (!content) {
      return stack.pop();
    }
    stack.push({
      _: content,
      tmpl: tmpl,
      item: this,
      data: data,
      options: options
    });
  }
  function tiNest(tmpl, data, options) {
    // nested template, using {{tmpl}} tag
    return jQuery.tmpl(jQuery.template(tmpl), data, options, this);
  }
  function tiWrap(call, wrapped) {
    // nested template, using {{wrap}} tag
    var options = call.options || {};
    options.wrapped = wrapped;
    // Apply the template, which may incorporate wrapped content,
    return jQuery.tmpl(jQuery.template(call.tmpl), call.data, options, call.item);
  }
  function tiHtml(filter, textOnly) {
    var wrapped = this._wrap;
    return jQuery.map(jQuery(jQuery.isArray(wrapped) ? wrapped.join("") : wrapped).filter(filter || "*"), function (e) {
      return textOnly ? e.innerText || e.textContent : e.outerHTML || outerHtml(e);
    });
  }
  function tiUpdate() {
    var coll = this.nodes;
    jQuery.tmpl(null, null, null, this).insertBefore(coll[0]);
    jQuery(coll).remove();
  }
})(jQuery);

/***/ })

}]);
//# sourceMappingURL=_rbenv_versions_3_0_2_lib_ruby_gems_3_0_0_gems_decidim-core-0_27_4_app_packs_src_decidim_map_-c6e2bb.js.map