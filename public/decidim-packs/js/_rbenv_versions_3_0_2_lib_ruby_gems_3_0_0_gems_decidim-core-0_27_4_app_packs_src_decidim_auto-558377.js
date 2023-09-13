"use strict";
(self["webpackChunkdecidim_application"] = self["webpackChunkdecidim_application"] || []).push([["_rbenv_versions_3_0_2_lib_ruby_gems_3_0_0_gems_decidim-core-0_27_4_app_packs_src_decidim_auto-558377"],{

/***/ "../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/autocomplete.js":
/*!**********************************************************************************************************************!*\
  !*** ../../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.4/app/packs/src/decidim/autocomplete.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AutoComplete; }
/* harmony export */ });
/* harmony import */ var _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarekraafat/autocomplete.js */ "./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js");
/* harmony import */ var _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
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

var AutoComplete = /*#__PURE__*/function () {
  function AutoComplete(el) {
    var _this = this,
      _src;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, AutoComplete);
    this.element = el;
    this.stickySelectedSpan = null;
    this.clearStickySelectionSpan = null;
    this.stickyHiddenInput = null;
    this.promptDiv = null;
    var thresholdTemp = options.threshold || 2;
    this.options = Object.assign({
      // Defines name of the hidden input (e.g. assembly_member[user_id])
      name: null,
      // Placeholder of the visible input field
      placeholder: "",
      // Defines what happens after user has selected value from suggestions
      // sticky - Allows selecting a single value and not editing the value after selected (e.g. as the admin autocomplete fields)
      // single - Allows selecting a single value and editing the selected text after the selection (e.g. geocoding field)
      // multi - Allows selecting multiple values
      // null (default) - Disable selection event handling in this class
      mode: null,
      // Defines if we show input help (e.g. "Type at least three characters to search") or not.
      searchPrompt: false,
      // Defines search prompt message, only shown if showPrompt is enabled!
      searchPromptText: "Type at least ".concat(thresholdTemp, " characters to search"),
      // Defines items that are selected already when page is loaded before user selects them. (e.g. when form submit fails)
      selected: null,
      // Defines how many characters input has to have before we start searching
      threshold: thresholdTemp,
      // Defines how many results to show in the autocomplete selection list
      // by maximum.
      maxResults: 10,
      // Defines the data keys against which to match the user input when
      // searching through the results. For example, when the following
      // data is returned by the API:
      //   { id: 123, name: "John", nickname: "john", __typename: "User" }
      //
      // You can define the data keys array as ["name", "nickname"] in
      // which case the results shown to user would be only those that
      // have matching text in these defined fields.
      dataMatchKeys: null,
      // The data source is a method that gets the callback parameter as
      // its first argument which should be called with the results array
      // once they are returned by the API.
      // For example:
      //   (query, callback) => {
      //     (async () => {
      //       const results = await callAjax(`/api/url?query=${query}`);
      //       callback(results);
      //     })();
      //   }
      //
      // Signature: (callback: Function)
      dataSource: function dataSource() {
        return [];
      },
      // Filters the data list returned by the data source before it is shown
      // to the user. Can be used e.g. to hide already selected values from
      // the list.
      dataFilter: null,
      // Delay in milliseconds how long to wait after user action before
      // doing a backend request.
      delay: 200,
      // Allows modifying the suggested items before they are displayed in the list
      // Signature: (element: HTMLElement, value: Object)
      modifyResult: null
    }, options);
    this.autocomplete = new (_tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0___default())({
      selector: function selector() {
        return _this.element;
      },
      placeHolder: options.placeholder,
      // Delay (milliseconds) before autocomplete engine starts. It's preventing many queries when user is typing fast.
      debounce: 200,
      threshold: this.options.threshold,
      data: {
        keys: this.options.dataMatchKeys,
        src: function src(_x) {
          return (_src = _src || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(query) {
            var fetchResults;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  fetchResults = function fetchResults() {
                    return new Promise(function (resolve) {
                      _this.options.dataSource(query, resolve);
                    });
                  };
                  _context.prev = 1;
                  _context.next = 4;
                  return fetchResults();
                case 4:
                  return _context.abrupt("return", _context.sent);
                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](1);
                  return _context.abrupt("return", _context.t0);
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[1, 7]]);
          }))).apply(this, arguments);
        },
        filter: function filter(list) {
          if (_this.options.dataFilter) {
            return _this.options.dataFilter(list);
          }
          return list;
        }
      },
      resultsList: {
        maxResults: this.options.maxResults
      },
      resultItem: {
        element: function element(item, data) {
          if (!_this.options.modifyResult) {
            return;
          }
          _this.options.modifyResult(item, data.value);
        }
      },
      events: {
        input: {
          blur: function blur() {
            _this.promptDiv.style.display = "none";
          }
        }
      }
    });
    this.acWrapper = this.element.closest(".autoComplete_wrapper");
    this.element.ac = this.autocomplete;

    // Stop input field from bubbling open and close events to parent elements,
    // because foundation closes modal from these events.
    var stopPropagation = function stopPropagation(event) {
      event.stopPropagation();
    };
    this.element.addEventListener("close", stopPropagation);
    this.element.addEventListener("open", stopPropagation);
    this.createPromptDiv();
    switch (this.options.mode) {
      case "sticky":
        this.createStickySelect(this.options.name);
        break;
      case "multi":
        this.createMultiSelect(this.options.name);
        break;
      default:
    }
  }
  _createClass(AutoComplete, [{
    key: "setInput",
    value: function setInput(value) {
      this.autocomplete.input.value = value;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      switch (this.options.mode) {
        case "single":
          this.setInput(event.detail.selection.value[event.detail.selection.key]);
          break;
        case "sticky":
          this.handleStickyEvents(event);
          break;
        case "multi":
          this.handleMultiEvents(event);
          break;
        default:
      }
    }
  }, {
    key: "handleMultiEvents",
    value: function handleMultiEvents(event) {
      switch (event.type) {
        case "selection":
          this.addMultiSelectItem(event.detail.selection);
          break;
        default:
      }
    }
  }, {
    key: "handleStickyEvents",
    value: function handleStickyEvents(event) {
      switch (event.type) {
        case "selection":
          this.addStickySelectItem(event.detail.selection);
          break;
        case "click":
          if (event.target === this.clearStickySelectionSpan) {
            this.removeStickySelection();
          }
          break;
        case "keyup":
          if (this.stickyHiddenInput.value !== "" && event.target === this.element && (["Escape", "Backspace", "Delete"].includes(event.key) || /^[a-z0-9]$/i.test(event.key))) {
            this.removeStickySelection();
          } else if (this.options.searchPrompt) {
            if (this.stickyHiddenInput.value === "" && this.element.value.length < this.options.threshold) {
              this.promptDiv.style.display = "block";
            } else {
              this.promptDiv.style.display = "none";
            }
          }
          break;
        default:
      }
    }
  }, {
    key: "createHiddenInput",
    value: function createHiddenInput(value) {
      var hiddenInput = document.createElement("input");
      hiddenInput.name = this.options.name;
      hiddenInput.type = "hidden";
      if (value) {
        hiddenInput.value = value;
      }
      this.acWrapper.prepend(hiddenInput);
      return hiddenInput;
    }
  }, {
    key: "removeStickySelection",
    value: function removeStickySelection() {
      this.stickyHiddenInput.value = "";
      this.element.placeholder = this.options.placeholder;
      this.clearStickySelectionSpan.style.display = "none";
      this.stickySelectedSpan.style.display = "none";
    }
  }, {
    key: "addStickySelectItem",
    value: function addStickySelectItem(selection) {
      this.stickyHiddenInput.value = selection.value.value;
      this.element.placeholder = "";
      this.stickySelectedSpan.innerHTML = selection.value[selection.key];
      this.stickySelectedSpan.style.display = "block";
      this.clearStickySelectionSpan.style.display = "block";
      this.setInput("");
    }
  }, {
    key: "addMultiSelectItem",
    value: function addMultiSelectItem(selection) {
      var _this2 = this;
      this.setInput("");
      var chosen = document.createElement("span");
      chosen.classList.add("label", "primary", "autocomplete__selected-item", "multi");
      chosen.innerHTML = selection.value[selection.key];
      var clearSelection = document.createElement("span");
      clearSelection.classList.add("clear-multi-selection");
      clearSelection.innerHTML = "&times;";
      clearSelection.setAttribute("data-remove", selection.value.value);
      clearSelection.addEventListener("click", function (evt) {
        var hiddenInput = _this2.acWrapper.querySelector("input[type='hidden'][value='".concat(selection.value.value, "']"));
        if (hiddenInput) {
          hiddenInput.remove();
          evt.target.parentElement.remove();
        }
      });
      chosen.appendChild(clearSelection);
      var multiSelectWrapper = this.acWrapper.querySelector(".multiselect");
      var inputContainer = multiSelectWrapper.querySelector("span.input-container");
      multiSelectWrapper.insertBefore(chosen, inputContainer);
      this.createHiddenInput(selection.value.value);
    }
  }, {
    key: "createStickySelect",
    value: function createStickySelect() {
      var _this3 = this;
      this.stickySelectedSpan = document.createElement("span");
      this.stickySelectedSpan.classList.add("autocomplete__selected-item", "sticky");
      this.stickySelectedSpan.style.display = "none";
      this.stickySelectedSpan.addEventListener("click", function () {
        return _this3.element.focus();
      });
      this.stickyHiddenInput = this.createHiddenInput();
      this.clearStickySelectionSpan = document.createElement("span");
      this.clearStickySelectionSpan.className = "clear-sticky-selection";
      this.clearStickySelectionSpan.innerHTML = "&times;";
      this.clearStickySelectionSpan.style.display = "none";
      this.clearStickySelectionSpan.addEventListener("click", this);
      this.element.addEventListener("selection", this);
      this.element.addEventListener("keyup", this);
      this.acWrapper.insertBefore(this.clearStickySelectionSpan, this.element);
      this.acWrapper.insertBefore(this.stickySelectedSpan, this.element);
      if (this.options.selected) {
        this.addStickySelectItem(this.options.selected);
      }
    }
  }, {
    key: "createMultiSelect",
    value: function createMultiSelect() {
      var _this4 = this;
      var multiSelectWrapper = document.createElement("div");
      multiSelectWrapper.classList.add("multiselect");
      var inputContainer = document.createElement("span");
      inputContainer.classList.add("input-container");
      multiSelectWrapper.appendChild(inputContainer);
      this.acWrapper.prepend(multiSelectWrapper);
      inputContainer.appendChild(this.element);
      this.element.addEventListener("selection", this);
      multiSelectWrapper.addEventListener("click", function () {
        _this4.element.focus();
      });
      if (this.options.selected) {
        this.options.selected.forEach(function (selection) {
          _this4.addMultiSelectItem(selection);
        });
      }
    }
  }, {
    key: "createPromptDiv",
    value: function createPromptDiv() {
      this.promptDiv = document.createElement("div");
      this.promptDiv.classList.add("search-prompt");
      this.promptDiv.style.display = "none";
      this.promptDiv.innerHTML = this.options.searchPromptText;
      this.acWrapper.appendChild(this.promptDiv);
    }
  }]);
  return AutoComplete;
}();


/***/ })

}]);
//# sourceMappingURL=_rbenv_versions_3_0_2_lib_ruby_gems_3_0_0_gems_decidim-core-0_27_4_app_packs_src_decidim_auto-558377.js.map