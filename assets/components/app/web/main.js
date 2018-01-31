/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Promise", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Deferred", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "classify", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hyphenate", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ucfirst", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["K"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isWindow", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isDocument", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["J"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toFloat", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toList", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["G"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toMedia", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["H"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "coerce", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toMs", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["I"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "swap", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "each", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "intersectRect", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointInRect", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ajax", function() { return __WEBPACK_IMPORTED_MODULE_0__lang__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$", function() { return __WEBPACK_IMPORTED_MODULE_1__selector__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return __WEBPACK_IMPORTED_MODULE_1__selector__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "query", function() { return __WEBPACK_IMPORTED_MODULE_1__selector__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return __WEBPACK_IMPORTED_MODULE_1__selector__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return __WEBPACK_IMPORTED_MODULE_1__selector__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "within", function() { return __WEBPACK_IMPORTED_MODULE_1__selector__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return __WEBPACK_IMPORTED_MODULE_1__selector__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return __WEBPACK_IMPORTED_MODULE_1__selector__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "parents", function() { return __WEBPACK_IMPORTED_MODULE_1__selector__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isJQuery", function() { return __WEBPACK_IMPORTED_MODULE_1__selector__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toNode", function() { return __WEBPACK_IMPORTED_MODULE_1__selector__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toNodes", function() { return __WEBPACK_IMPORTED_MODULE_1__selector__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return __WEBPACK_IMPORTED_MODULE_1__selector__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attr__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return __WEBPACK_IMPORTED_MODULE_2__attr__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hasAttr", function() { return __WEBPACK_IMPORTED_MODULE_2__attr__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "removeAttr", function() { return __WEBPACK_IMPORTED_MODULE_2__attr__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "filterAttr", function() { return __WEBPACK_IMPORTED_MODULE_2__attr__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "data", function() { return __WEBPACK_IMPORTED_MODULE_2__attr__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isRtl", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isReady", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isInView", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scrolledOver", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getIndex", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isVoidElement", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Dimensions", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "preventClick", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "selInput", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isInput", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "html", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "append", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "before", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "after", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "wrapAll", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "wrapInner", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "unwrap", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "fragment", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "index", function() { return __WEBPACK_IMPORTED_MODULE_3__dom__["l"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "css", function() { return __WEBPACK_IMPORTED_MODULE_4__style__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return __WEBPACK_IMPORTED_MODULE_4__style__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return __WEBPACK_IMPORTED_MODULE_4__style__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getCssVar", function() { return __WEBPACK_IMPORTED_MODULE_4__style__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "propName", function() { return __WEBPACK_IMPORTED_MODULE_4__style__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class__ = __webpack_require__(12);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return __WEBPACK_IMPORTED_MODULE_5__class__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return __WEBPACK_IMPORTED_MODULE_5__class__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "removeClasses", function() { return __WEBPACK_IMPORTED_MODULE_5__class__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "replaceClass", function() { return __WEBPACK_IMPORTED_MODULE_5__class__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return __WEBPACK_IMPORTED_MODULE_5__class__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return __WEBPACK_IMPORTED_MODULE_5__class__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__env__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "win", function() { return __WEBPACK_IMPORTED_MODULE_6__env__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "doc", function() { return __WEBPACK_IMPORTED_MODULE_6__env__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "docEl", function() { return __WEBPACK_IMPORTED_MODULE_6__env__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return __WEBPACK_IMPORTED_MODULE_6__env__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return __WEBPACK_IMPORTED_MODULE_6__env__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hasTouch", function() { return __WEBPACK_IMPORTED_MODULE_6__env__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointerDown", function() { return __WEBPACK_IMPORTED_MODULE_6__env__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointerMove", function() { return __WEBPACK_IMPORTED_MODULE_6__env__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointerUp", function() { return __WEBPACK_IMPORTED_MODULE_6__env__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointerEnter", function() { return __WEBPACK_IMPORTED_MODULE_6__env__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointerLeave", function() { return __WEBPACK_IMPORTED_MODULE_6__env__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getImage", function() { return __WEBPACK_IMPORTED_MODULE_6__env__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "supports", function() { return __WEBPACK_IMPORTED_MODULE_6__env__["l"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "on", function() { return __WEBPACK_IMPORTED_MODULE_7__event__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "off", function() { return __WEBPACK_IMPORTED_MODULE_7__event__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "once", function() { return __WEBPACK_IMPORTED_MODULE_7__event__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return __WEBPACK_IMPORTED_MODULE_7__event__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return __WEBPACK_IMPORTED_MODULE_7__event__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toEventTargets", function() { return __WEBPACK_IMPORTED_MODULE_7__event__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fastdom__ = __webpack_require__(55);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "fastdom", function() { return __WEBPACK_IMPORTED_MODULE_8__fastdom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mouse__ = __webpack_require__(56);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MouseTracker", function() { return __WEBPACK_IMPORTED_MODULE_9__mouse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__options__ = __webpack_require__(57);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return __WEBPACK_IMPORTED_MODULE_10__options__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__player__ = __webpack_require__(58);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return __WEBPACK_IMPORTED_MODULE_11__player__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__position__ = __webpack_require__(13);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "positionAt", function() { return __WEBPACK_IMPORTED_MODULE_12__position__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return __WEBPACK_IMPORTED_MODULE_12__position__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "position", function() { return __WEBPACK_IMPORTED_MODULE_12__position__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "height", function() { return __WEBPACK_IMPORTED_MODULE_12__position__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "width", function() { return __WEBPACK_IMPORTED_MODULE_12__position__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "flipPosition", function() { return __WEBPACK_IMPORTED_MODULE_12__position__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__touch__ = __webpack_require__(59);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isTouch", function() { return __WEBPACK_IMPORTED_MODULE_13__touch__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getPos", function() { return __WEBPACK_IMPORTED_MODULE_13__touch__["a"]; });
















/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = bind;
/* harmony export (immutable) */ __webpack_exports__["l"] = hasOwn;
/* harmony export (immutable) */ __webpack_exports__["h"] = classify;
/* harmony export (immutable) */ __webpack_exports__["m"] = hyphenate;
/* harmony export (immutable) */ __webpack_exports__["f"] = camelize;
/* harmony export (immutable) */ __webpack_exports__["K"] = ucfirst;
/* harmony export (immutable) */ __webpack_exports__["C"] = startsWith;
/* harmony export (immutable) */ __webpack_exports__["k"] = endsWith;
/* harmony export (immutable) */ __webpack_exports__["n"] = includes;
/* harmony export (immutable) */ __webpack_exports__["s"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["v"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["w"] = isPlainObject;
/* harmony export (immutable) */ __webpack_exports__["z"] = isWindow;
/* harmony export (immutable) */ __webpack_exports__["r"] = isDocument;
/* harmony export (immutable) */ __webpack_exports__["q"] = isBoolean;
/* harmony export (immutable) */ __webpack_exports__["x"] = isString;
/* harmony export (immutable) */ __webpack_exports__["t"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["u"] = isNumeric;
/* harmony export (immutable) */ __webpack_exports__["y"] = isUndefined;
/* harmony export (immutable) */ __webpack_exports__["E"] = toBoolean;
/* harmony export (immutable) */ __webpack_exports__["J"] = toNumber;
/* harmony export (immutable) */ __webpack_exports__["F"] = toFloat;
/* harmony export (immutable) */ __webpack_exports__["G"] = toList;
/* harmony export (immutable) */ __webpack_exports__["H"] = toMedia;
/* harmony export (immutable) */ __webpack_exports__["i"] = coerce;
/* harmony export (immutable) */ __webpack_exports__["I"] = toMs;
/* harmony export (immutable) */ __webpack_exports__["D"] = swap;
/* harmony export (immutable) */ __webpack_exports__["j"] = each;
/* harmony export (immutable) */ __webpack_exports__["g"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["A"] = noop;
/* harmony export (immutable) */ __webpack_exports__["o"] = intersectRect;
/* harmony export (immutable) */ __webpack_exports__["B"] = pointInRect;
/* harmony export (immutable) */ __webpack_exports__["c"] = ajax;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__promise__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selector__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style__ = __webpack_require__(8);





function bind(fn, context) {
    return function (a) {
        var l = arguments.length;
        return l ? l > 1 ? fn.apply(context, arguments) : fn.call(context, a) : fn.call(context);
    };
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}

const Promise = 'Promise' in window ? window.Promise : __WEBPACK_IMPORTED_MODULE_1__promise__["a" /* default */];
/* harmony export (immutable) */ __webpack_exports__["b"] = Promise;


class Deferred {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.reject = reject;
            this.resolve = resolve;
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Deferred;


const classifyRe = /(?:^|[-_\/])(\w)/g;

function classify(str) {
    return str.replace(classifyRe, (_, c) => c ? c.toUpperCase() : '');
}

const hyphenateRe = /([a-z\d])([A-Z])/g;

function hyphenate(str) {
    return str
        .replace(hyphenateRe, '$1-$2')
        .toLowerCase();
}

const camelizeRE = /-(\w)/g;

function camelize(str) {
    return str.replace(camelizeRE, toUpper);
}

function toUpper(_, c) {
    return c ? c.toUpperCase() : '';
}

function ucfirst(str) {
    return str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : '';
}

var strPrototype = String.prototype;
var startsWithFn = strPrototype.startsWith || function (search) { return this.lastIndexOf(search, 0) === 0; };

function startsWith(str, search) {
    return startsWithFn.call(str, search);
}

var endsWithFn = strPrototype.endsWith || function (search) { return this.substr(-search.length) === search; };

function endsWith(str, search) {
    return endsWithFn.call(str, search);
}

var includesFn = function (search) { return ~this.indexOf(search); };
var includesStr = strPrototype.includes || includesFn;
var includesArray = Array.prototype.includes || includesFn;

function includes(obj, search) {
    return obj && (isString(obj) ? includesStr : includesArray).call(obj, search);
}

const isArray = Array.isArray;
/* harmony export (immutable) */ __webpack_exports__["p"] = isArray;


function isFunction(obj) {
    return typeof obj === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) === Object.prototype;
}

function isWindow(obj) {
    return isObject(obj) && obj === obj.window;
}

function isDocument(obj) {
    return isObject(obj) && obj.nodeType === 9;
}

function isBoolean(value) {
    return typeof value === 'boolean';
}

function isString(value) {
    return typeof value === 'string';
}

function isNumber(value) {
    return typeof value === 'number';
}

function isNumeric(value) {
    return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
}

function isUndefined(value) {
    return value === void 0;
}

function toBoolean(value) {
    return isBoolean(value)
        ? value
        : value === 'true' || value === '1' || value === ''
            ? true
            : value === 'false' || value === '0'
                ? false
                : value;
}

function toNumber(value) {
    var number = Number(value);
    return !isNaN(number) ? number : false;
}

function toFloat(value) {
    return parseFloat(value) || 0;
}

function toList(value) {
    return isArray(value)
        ? value
        : isString(value)
            ? value.split(/,(?![^(]*\))/).map(value => isNumeric(value)
                ? toNumber(value)
                : toBoolean(value.trim()))
            : [value];
}

var vars = {};

function toMedia(value) {

    if (isString(value)) {
        if (value[0] === '@') {
            var name = `media-${value.substr(1)}`;
            value = vars[name] || (vars[name] = toFloat(Object(__WEBPACK_IMPORTED_MODULE_3__style__["b" /* getCssVar */])(name)));
        } else if (isNaN(value)) {
            return value;
        }
    }

    return value && !isNaN(value) ? `(min-width: ${value}px)` : false;
}

function coerce(type, value, context) {

    if (type === Boolean) {
        return toBoolean(value);
    } else if (type === Number) {
        return toNumber(value);
    } else if (type === 'query') {
        return Object(__WEBPACK_IMPORTED_MODULE_2__selector__["i" /* query */])(value, context);
    } else if (type === 'list') {
        return toList(value);
    } else if (type === 'media') {
        return toMedia(value);
    }

    return type ? type(value) : value;
}

function toMs(time) {
    return !time
        ? 0
        : endsWith(time, 'ms')
            ? toFloat(time)
            : toFloat(time) * 1000;
}

function swap(value, a, b) {
    return value.replace(new RegExp(`${a}|${b}`, 'mg'), function (match) {
        return match === a ? b : a;
    });
}

const assign = Object.assign || function (target, ...args) {
    target = Object(target);
    for (var i = 0; i < args.length; i++) {
        var source = args[i];
        if (source !== null) {
            for (var key in source) {
                if (hasOwn(source, key)) {
                    target[key] = source[key];
                }
            }
        }
    }
    return target;
};
/* harmony export (immutable) */ __webpack_exports__["d"] = assign;


function each(obj, cb) {
    for (var key in obj) {
        if (cb.call(obj[key], obj[key], key) === false) {
            break;
        }
    }
}

function clamp(number, min = 0, max = 1) {
    return Math.min(Math.max(number, min), max);
}

function noop() {}

function intersectRect(r1, r2) {
    return r1.left <= r2.right &&
        r2.left <= r1.right &&
        r1.top <= r2.bottom &&
        r2.top <= r1.bottom;
}

function pointInRect(point, rect) {
    return intersectRect({top: point.y, bottom: point.y, left: point.x, right: point.x}, rect);
}

function ajax(url, options) {
    return new Promise((resolve, reject) => {

        var env = assign({
            data: null,
            method: 'GET',
            headers: {},
            xhr: new XMLHttpRequest(),
            beforeSend: noop,
            responseType: ''
        }, options);

        var xhr = env.xhr;

        env.beforeSend(env);

        for (var prop in env) {
            if (prop in xhr) {
                try {

                    xhr[prop] = env[prop];

                } catch (e) {}
            }
        }

        xhr.open(env.method.toUpperCase(), url);

        for (var header in env.headers) {
            xhr.setRequestHeader(header, env.headers[header]);
        }

        Object(__WEBPACK_IMPORTED_MODULE_0__event__["c" /* on */])(xhr, 'load', () => {

            if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                resolve(xhr);
            } else {
                reject(assign(Error(xhr.statusText), {
                    xhr,
                    status: xhr.status
                }));
            }

        });

        Object(__WEBPACK_IMPORTED_MODULE_0__event__["c" /* on */])(xhr, 'error', () => reject(assign(Error('Network Error'), {xhr})));
        Object(__WEBPACK_IMPORTED_MODULE_0__event__["c" /* on */])(xhr, 'timeout', () => reject(assign(Error('Network Timeout'), {xhr})));

        xhr.send(env.data);
    });
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__container__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__togglable__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Class", function() { return __WEBPACK_IMPORTED_MODULE_0__class__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return __WEBPACK_IMPORTED_MODULE_1__container__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return __WEBPACK_IMPORTED_MODULE_2__modal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return __WEBPACK_IMPORTED_MODULE_3__position__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Togglable", function() { return __WEBPACK_IMPORTED_MODULE_4__togglable__["a"]; });








/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.mixin.class = __WEBPACK_IMPORTED_MODULE_0__class__["a" /* default */];
    UIkit.mixin.container = __WEBPACK_IMPORTED_MODULE_1__container__["a" /* default */];
    UIkit.mixin.modal = __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* default */];
    UIkit.mixin.position = __WEBPACK_IMPORTED_MODULE_3__position__["a" /* default */];
    UIkit.mixin.togglable = __WEBPACK_IMPORTED_MODULE_4__togglable__["a" /* default */];

});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = getImage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__promise__ = __webpack_require__(11);
/* global DocumentTouch */


const win = window;
/* harmony export (immutable) */ __webpack_exports__["m"] = win;

const doc = document;
/* harmony export (immutable) */ __webpack_exports__["b"] = doc;

const docEl = doc.documentElement;
/* harmony export (immutable) */ __webpack_exports__["c"] = docEl;


const Observer = win.MutationObserver;
/* harmony export (immutable) */ __webpack_exports__["a"] = Observer;

const requestAnimationFrame = win.requestAnimationFrame;
/* harmony export (immutable) */ __webpack_exports__["k"] = requestAnimationFrame;


var hasTouchEvents = 'ontouchstart' in win;
var hasPointerEvents = win.PointerEvent;
const hasTouch = 'ontouchstart' in win
    || win.DocumentTouch && doc instanceof DocumentTouch
    || navigator.pointerEnabled && navigator.maxTouchPoints;
/* harmony export (immutable) */ __webpack_exports__["e"] = hasTouch;
 // IE >=11

const pointerDown = !hasTouch ? 'mousedown' : `mousedown ${hasTouchEvents ? 'touchstart' : 'pointerdown'}`;
/* harmony export (immutable) */ __webpack_exports__["f"] = pointerDown;

const pointerMove = !hasTouch ? 'mousemove' : `mousemove ${hasTouchEvents ? 'touchmove' : 'pointermove'}`;
/* harmony export (immutable) */ __webpack_exports__["i"] = pointerMove;

const pointerUp = !hasTouch ? 'mouseup' : `mouseup ${hasTouchEvents ? 'touchend' : 'pointerup'}`;
/* harmony export (immutable) */ __webpack_exports__["j"] = pointerUp;

const pointerEnter = hasTouch && hasPointerEvents ? 'pointerenter' : 'mouseenter';
/* harmony export (immutable) */ __webpack_exports__["g"] = pointerEnter;

const pointerLeave = hasTouch && hasPointerEvents ? 'pointerleave' : 'mouseleave';
/* harmony export (immutable) */ __webpack_exports__["h"] = pointerLeave;


function getImage(src) {

    return new __WEBPACK_IMPORTED_MODULE_0__promise__["a" /* default */]((resolve, reject) => {
        var img = new Image();

        img.onerror = reject;
        img.onload = () => resolve(img);

        img.src = src;
    });

}

const supports = {};
/* harmony export (immutable) */ __webpack_exports__["l"] = supports;


// IE 11
(function () {

    var list = doc.createElement('_').classList;
    if (list) {
        list.add('a', 'b');
        list.toggle('c', false);
        supports.Multiple = list.contains('b');
        supports.Force = !list.contains('c');
        supports.ClassList = true;
    }
    list = null;

})();


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = $;
/* harmony export (immutable) */ __webpack_exports__["b"] = $$;
/* harmony export (immutable) */ __webpack_exports__["i"] = query;
/* harmony export (immutable) */ __webpack_exports__["j"] = queryAll;
/* harmony export (immutable) */ __webpack_exports__["e"] = filter;
/* harmony export (immutable) */ __webpack_exports__["m"] = within;
/* harmony export (immutable) */ __webpack_exports__["g"] = matches;
/* harmony export (immutable) */ __webpack_exports__["c"] = closest;
/* harmony export (immutable) */ __webpack_exports__["h"] = parents;
/* harmony export (immutable) */ __webpack_exports__["f"] = isJQuery;
/* harmony export (immutable) */ __webpack_exports__["k"] = toNode;
/* harmony export (immutable) */ __webpack_exports__["l"] = toNodes;
/* harmony export (immutable) */ __webpack_exports__["d"] = escape;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__env__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attr__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lang__ = __webpack_require__(1);





var arrayProto = Array.prototype;

function $(selector, context) {
    return !Object(__WEBPACK_IMPORTED_MODULE_3__lang__["x" /* isString */])(selector)
        ? toNode(selector)
        : isHtml(selector)
            ? toNode(Object(__WEBPACK_IMPORTED_MODULE_0__dom__["i" /* fragment */])(selector))
            : find(selector, context);
}

function $$(selector, context) {
    return !Object(__WEBPACK_IMPORTED_MODULE_3__lang__["x" /* isString */])(selector)
        ? toNodes(selector)
        : isHtml(selector)
            ? toNodes(Object(__WEBPACK_IMPORTED_MODULE_0__dom__["i" /* fragment */])(selector))
            : findAll(selector, context);
}

function isHtml(str) {
    return str[0] === '<' || str.match(/^\s*</);
}

function query(selector, context) {
    return $(selector, isContextSelector(selector) ? context : __WEBPACK_IMPORTED_MODULE_1__env__["b" /* doc */]);
}

function queryAll(selector, context) {
    return $$(selector, isContextSelector(selector) ? context : __WEBPACK_IMPORTED_MODULE_1__env__["b" /* doc */]);
}

function find(selector, context) {
    return toNode(_query(selector, context, 'querySelector'));
}

function findAll(selector, context) {
    return toNodes(_query(selector, context, 'querySelectorAll'));
}

function _query(selector, context = __WEBPACK_IMPORTED_MODULE_1__env__["b" /* doc */], queryFn) {

    if (!selector || !Object(__WEBPACK_IMPORTED_MODULE_3__lang__["x" /* isString */])(selector)) {
        return null;
    }

    selector = selector.replace(contextSanitizeRe, '$1 *');

    var removes;

    if (isContextSelector(selector)) {

        removes = [];

        selector = selector.split(',').map((selector, i) => {

            let ctx = context;

            selector = selector.trim();

            if (selector[0] === '!') {

                var selectors = selector.substr(1).trim().split(' ');
                ctx = closest(context.parentNode, selectors[0]);
                selector = selectors.slice(1).join(' ');

            }

            if (!ctx) {
                return null;
            }

            if (!ctx.id) {
                ctx.id = `uk-${Date.now()}${i}`;
                removes.push(() => Object(__WEBPACK_IMPORTED_MODULE_2__attr__["e" /* removeAttr */])(ctx, 'id'));
            }

            return `#${escape(ctx.id)} ${selector}`;

        }).filter(Boolean).join(',');

        context = __WEBPACK_IMPORTED_MODULE_1__env__["b" /* doc */];

    }

    try {

        return context[queryFn](selector);

    } catch (e) {

        return null;

    } finally {

        removes && removes.forEach(remove => remove());

    }

}

function filter(element, selector) {
    return $$(element).filter(element => matches(element, selector));
}

function within(element, selector) {
    return !Object(__WEBPACK_IMPORTED_MODULE_3__lang__["x" /* isString */])(selector)
        ? element === selector || toNode(selector).contains(toNode(element))
        : matches(element, selector) || closest(element, selector);
}

var contextSelectorRe = /(^|,)\s*[!>+~]/,
    contextSanitizeRe = /([!>+~])(?=\s+[!>+~]|\s*$)/g;

function isContextSelector(selector) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__lang__["x" /* isString */])(selector) && selector.match(contextSelectorRe);
}

var elProto = Element.prototype;
var matchesFn = elProto.matches || elProto.msMatchesSelector;

function matches(element, selector) {
    return toNodes(element).some(element => matchesFn.call(element, selector));
}

var closestFn = elProto.closest || function (selector) {
    var ancestor = this;

    do {

        if (matches(ancestor, selector)) {
            return ancestor;
        }

        ancestor = ancestor.parentNode;

    } while (ancestor && ancestor.nodeType === 1);
};

function closest(element, selector) {

    if (Object(__WEBPACK_IMPORTED_MODULE_3__lang__["C" /* startsWith */])(selector, '>')) {
        selector = selector.slice(1);
    }

    return isNode(element)
        ? element.parentNode && closestFn.call(element, selector)
        : toNodes(element).map(element => element.parentNode && closestFn.call(element, selector)).filter(Boolean);
}

function parents(element, selector) {
    var elements = [], parent = toNode(element).parentNode;

    while (parent && parent.nodeType === 1) {

        if (matches(parent, selector)) {
            elements.push(parent);
        }

        parent = parent.parentNode;
    }

    return elements;
}

function isJQuery(obj) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__lang__["v" /* isObject */])(obj) && !!obj.jquery;
}

function isNode(element) {
    return element instanceof Node || Object(__WEBPACK_IMPORTED_MODULE_3__lang__["v" /* isObject */])(element) && element.nodeType === 1;
}

function isNodeCollection(element) {
    return element instanceof NodeList || element instanceof HTMLCollection;
}

function toNode(element) {
    return isNode(element) || Object(__WEBPACK_IMPORTED_MODULE_3__lang__["z" /* isWindow */])(element) || Object(__WEBPACK_IMPORTED_MODULE_3__lang__["r" /* isDocument */])(element)
        ? element
        : isNodeCollection(element) || isJQuery(element)
            ? element[0]
            : Object(__WEBPACK_IMPORTED_MODULE_3__lang__["p" /* isArray */])(element)
                ? toNode(element[0])
                : null;
}

function toNodes(element) {
    return isNode(element)
        ? [element]
        : isNodeCollection(element)
            ? arrayProto.slice.call(element)
            : Object(__WEBPACK_IMPORTED_MODULE_3__lang__["p" /* isArray */])(element)
                ? element.map(toNode).filter(Boolean)
                : isJQuery(element)
                    ? element.toArray()
                    : [];
}

var escapeFn = __WEBPACK_IMPORTED_MODULE_1__env__["m" /* win */].CSS && CSS.escape || function (css) { return css.replace(/([^\x7f-\uFFFF\w-])/g, match => `\\${match}`); };
function escape(css) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__lang__["x" /* isString */])(css) ? escapeFn.call(null, css) : '';
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = on;
/* harmony export (immutable) */ __webpack_exports__["b"] = off;
/* harmony export (immutable) */ __webpack_exports__["d"] = once;
/* harmony export (immutable) */ __webpack_exports__["f"] = trigger;
/* harmony export (immutable) */ __webpack_exports__["a"] = createEvent;
/* harmony export (immutable) */ __webpack_exports__["e"] = toEventTargets;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selector__ = __webpack_require__(4);




function on(...args) {

    var [target, type, selector, listener, useCapture] = getArgs(args);

    target = toEventTarget(target);

    if (selector) {
        listener = delegate(target, selector, listener);
    }

    if (listener.length > 1) {
        listener = detail(listener);
    }

    type.split(' ').forEach(type => target && target.addEventListener(type, listener, useCapture));
    return () => off(target, type, listener, useCapture);
}

function off(target, type, listener, useCapture = false) {
    target = toEventTarget(target);
    target && type.split(' ').forEach(type => target.removeEventListener(type, listener, useCapture));
}

function once(...args) {

    var [element, type, selector, listener, useCapture, condition] = getArgs(args),
        off = on(element, type, selector, e => {
            var result = !condition || condition(e);
            if (result) {
                off();
                listener(e, result);
            }
        }, useCapture);

    return off;
}

function trigger(target, event, detail) {
    return toEventTargets(target).reduce((notCanceled, target) =>
        notCanceled && target.dispatchEvent(createEvent(event, true, true, detail))
        , true);
}

function createEvent(e, bubbles = true, cancelable = false, detail) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__lang__["x" /* isString */])(e)) {
        var event = __WEBPACK_IMPORTED_MODULE_0__env__["b" /* doc */].createEvent('CustomEvent'); // IE 11
        event.initCustomEvent(e, bubbles, cancelable, detail);
        e = event;
    }

    return e;
}

function getArgs(args) {

    if (Object(__WEBPACK_IMPORTED_MODULE_1__lang__["x" /* isString */])(args[0])) {
        args[0] = Object(__WEBPACK_IMPORTED_MODULE_2__selector__["a" /* $ */])(args[0]);
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_1__lang__["s" /* isFunction */])(args[2])) {
        args.splice(2, 0, false);
    }
    return args;
}

function delegate(element, selector, listener) {
    return e => {

        var target = e.target,
            current = selector[0] === '>'
                ? Object(__WEBPACK_IMPORTED_MODULE_2__selector__["b" /* $$ */])(selector, element).reverse().filter(element => Object(__WEBPACK_IMPORTED_MODULE_2__selector__["m" /* within */])(target, element))[0]
                : Object(__WEBPACK_IMPORTED_MODULE_2__selector__["c" /* closest */])(target, selector);

        if (current) {
            e.delegate = element;
            e.current = current;

            listener.call(this, e);
        }
    };
}

function detail(listener) {
    return e => Object(__WEBPACK_IMPORTED_MODULE_1__lang__["p" /* isArray */])(e.detail) ? listener.apply(listener, [e].concat(e.detail)) : listener(e);
}

function isEventTarget(target) {
    return 'EventTarget' in __WEBPACK_IMPORTED_MODULE_0__env__["m" /* win */]
        ? target instanceof EventTarget
        : target && 'addEventListener' in target;
}

function toEventTarget(target) {
    return isEventTarget(target) ? target : Object(__WEBPACK_IMPORTED_MODULE_2__selector__["k" /* toNode */])(target);
}

function toEventTargets(target) {
    return isEventTarget(target)
        ? [target]
        : Object(__WEBPACK_IMPORTED_MODULE_1__lang__["p" /* isArray */])(target)
            ? target.map(toEventTarget).filter(Boolean)
            : Object(__WEBPACK_IMPORTED_MODULE_2__selector__["l" /* toNodes */])(target);
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["o"] = isReady;
/* harmony export (immutable) */ __webpack_exports__["u"] = ready;
/* harmony export (immutable) */ __webpack_exports__["y"] = transition;
/* harmony export (immutable) */ __webpack_exports__["e"] = animate;
/* harmony export (immutable) */ __webpack_exports__["m"] = isInView;
/* harmony export (immutable) */ __webpack_exports__["w"] = scrolledOver;
/* harmony export (immutable) */ __webpack_exports__["j"] = getIndex;
/* harmony export (immutable) */ __webpack_exports__["r"] = isVoidElement;
/* harmony export (immutable) */ __webpack_exports__["t"] = preventClick;
/* harmony export (immutable) */ __webpack_exports__["q"] = isVisible;
/* harmony export (immutable) */ __webpack_exports__["n"] = isInput;
/* harmony export (immutable) */ __webpack_exports__["h"] = empty;
/* harmony export (immutable) */ __webpack_exports__["k"] = html;
/* harmony export (immutable) */ __webpack_exports__["s"] = prepend;
/* harmony export (immutable) */ __webpack_exports__["f"] = append;
/* harmony export (immutable) */ __webpack_exports__["g"] = before;
/* harmony export (immutable) */ __webpack_exports__["d"] = after;
/* harmony export (immutable) */ __webpack_exports__["v"] = remove;
/* harmony export (immutable) */ __webpack_exports__["A"] = wrapAll;
/* harmony export (immutable) */ __webpack_exports__["B"] = wrapInner;
/* harmony export (immutable) */ __webpack_exports__["z"] = unwrap;
/* harmony export (immutable) */ __webpack_exports__["i"] = fragment;
/* harmony export (immutable) */ __webpack_exports__["l"] = index;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attr__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selector__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lang__ = __webpack_require__(1);









const isRtl = Object(__WEBPACK_IMPORTED_MODULE_0__attr__["a" /* attr */])(__WEBPACK_IMPORTED_MODULE_2__env__["c" /* docEl */], 'dir') === 'rtl';
/* harmony export (immutable) */ __webpack_exports__["p"] = isRtl;


function isReady() {
    return __WEBPACK_IMPORTED_MODULE_2__env__["b" /* doc */].readyState === 'complete' || __WEBPACK_IMPORTED_MODULE_2__env__["b" /* doc */].readyState !== 'loading' && !__WEBPACK_IMPORTED_MODULE_2__env__["c" /* docEl */].doScroll;
}

function ready(fn) {

    if (isReady()) {
        fn();
        return;
    }

    var handle = function () {
            unbind1();
            unbind2();
            fn();
        },
        unbind1 = Object(__WEBPACK_IMPORTED_MODULE_4__event__["c" /* on */])(__WEBPACK_IMPORTED_MODULE_2__env__["b" /* doc */], 'DOMContentLoaded', handle),
        unbind2 = Object(__WEBPACK_IMPORTED_MODULE_4__event__["c" /* on */])(__WEBPACK_IMPORTED_MODULE_2__env__["m" /* win */], 'load', handle);
}

function transition(element, props, duration = 400, timing = 'linear') {

    return __WEBPACK_IMPORTED_MODULE_7__lang__["b" /* Promise */].all(Object(__WEBPACK_IMPORTED_MODULE_5__selector__["l" /* toNodes */])(element).map(element =>
        new __WEBPACK_IMPORTED_MODULE_7__lang__["b" /* Promise */]((resolve, reject) => {

            for (var name in props) {
                var value = Object(__WEBPACK_IMPORTED_MODULE_1__style__["a" /* css */])(element, name);
                if (value === '') {
                    Object(__WEBPACK_IMPORTED_MODULE_1__style__["a" /* css */])(element, name, value);
                }
            }

            var timer = setTimeout(() => Object(__WEBPACK_IMPORTED_MODULE_4__event__["f" /* trigger */])(element, 'transitionend'), duration);

            Object(__WEBPACK_IMPORTED_MODULE_4__event__["d" /* once */])(element, 'transitionend transitioncanceled', ({type}) => {
                clearTimeout(timer);
                Object(__WEBPACK_IMPORTED_MODULE_6__class__["c" /* removeClass */])(element, 'uk-transition');
                Object(__WEBPACK_IMPORTED_MODULE_1__style__["a" /* css */])(element, {
                    'transition-property': '',
                    'transition-duration': '',
                    'transition-timing-function': ''
                });
                type === 'transitioncanceled' ? reject() : resolve();
            }, false, ({target}) => element === target);

            Object(__WEBPACK_IMPORTED_MODULE_6__class__["a" /* addClass */])(element, 'uk-transition');
            Object(__WEBPACK_IMPORTED_MODULE_1__style__["a" /* css */])(element, Object(__WEBPACK_IMPORTED_MODULE_7__lang__["d" /* assign */])({
                'transition-property': Object.keys(props).map(__WEBPACK_IMPORTED_MODULE_1__style__["e" /* propName */]).join(','),
                'transition-duration': `${duration}ms`,
                'transition-timing-function': timing
            }, props));

        })
    ));

}

const Transition = {

    start: transition,

    stop(element) {
        Object(__WEBPACK_IMPORTED_MODULE_4__event__["f" /* trigger */])(element, 'transitionend');
        return __WEBPACK_IMPORTED_MODULE_7__lang__["b" /* Promise */].resolve();
    },

    cancel(element) {
        Object(__WEBPACK_IMPORTED_MODULE_4__event__["f" /* trigger */])(element, 'transitioncanceled');
    },

    inProgress(element) {
        return Object(__WEBPACK_IMPORTED_MODULE_6__class__["b" /* hasClass */])(element, 'uk-transition');
    }

};
/* harmony export (immutable) */ __webpack_exports__["c"] = Transition;


var animationPrefix = 'uk-animation-',
    clsCancelAnimation = 'uk-cancel-animation';

function animate(element, animation, duration = 200, origin, out) {

    return __WEBPACK_IMPORTED_MODULE_7__lang__["b" /* Promise */].all(Object(__WEBPACK_IMPORTED_MODULE_5__selector__["l" /* toNodes */])(element).map(element =>
        new __WEBPACK_IMPORTED_MODULE_7__lang__["b" /* Promise */]((resolve, reject) => {

            if (Object(__WEBPACK_IMPORTED_MODULE_6__class__["b" /* hasClass */])(element, clsCancelAnimation)) {
                requestAnimationFrame(() =>
                    __WEBPACK_IMPORTED_MODULE_7__lang__["b" /* Promise */].resolve().then(() =>
                        animate.apply(null, arguments).then(resolve, reject)
                    )
                );
                return;
            }

            var cls = `${animation} ${animationPrefix}${out ? 'leave' : 'enter'}`;

            if (Object(__WEBPACK_IMPORTED_MODULE_7__lang__["C" /* startsWith */])(animation, animationPrefix)) {

                if (origin) {
                    cls += ` uk-transform-origin-${origin}`;
                }

                if (out) {
                    cls += ` ${animationPrefix}reverse`;
                }

            }

            reset();

            Object(__WEBPACK_IMPORTED_MODULE_4__event__["d" /* once */])(element, 'animationend animationcancel', ({type}) => {

                var hasReset = false;

                if (type === 'animationcancel') {
                    reject();
                    reset();
                } else {
                    resolve();
                    __WEBPACK_IMPORTED_MODULE_7__lang__["b" /* Promise */].resolve().then(() => {
                        hasReset = true;
                        reset();
                    });
                }

                requestAnimationFrame(() => {
                    if (!hasReset) {
                        Object(__WEBPACK_IMPORTED_MODULE_6__class__["a" /* addClass */])(element, clsCancelAnimation);

                        requestAnimationFrame(() => Object(__WEBPACK_IMPORTED_MODULE_6__class__["c" /* removeClass */])(element, clsCancelAnimation));
                    }
                });

            }, false, ({target}) => element === target);

            Object(__WEBPACK_IMPORTED_MODULE_1__style__["a" /* css */])(element, 'animationDuration', `${duration}ms`);
            Object(__WEBPACK_IMPORTED_MODULE_6__class__["a" /* addClass */])(element, cls);

            function reset() {
                Object(__WEBPACK_IMPORTED_MODULE_1__style__["a" /* css */])(element, 'animationDuration', '');
                Object(__WEBPACK_IMPORTED_MODULE_6__class__["d" /* removeClasses */])(element, `${animationPrefix}\\S*`);
            }

        })
    ));

}

var inProgress = new RegExp(`${animationPrefix}(enter|leave)`);
const Animation = {

    in(element, animation, duration, origin) {
        return animate(element, animation, duration, origin, false);
    },

    out(element, animation, duration, origin) {
        return animate(element, animation, duration, origin, true);
    },

    inProgress(element) {
        return inProgress.test(Object(__WEBPACK_IMPORTED_MODULE_0__attr__["a" /* attr */])(element, 'class'));
    },

    cancel(element) {
        Object(__WEBPACK_IMPORTED_MODULE_4__event__["f" /* trigger */])(element, 'animationcancel');
    }

};
/* harmony export (immutable) */ __webpack_exports__["a"] = Animation;


function isInView(element, top = 0, left = 0) {
    return Object(__WEBPACK_IMPORTED_MODULE_7__lang__["o" /* intersectRect */])(Object(__WEBPACK_IMPORTED_MODULE_5__selector__["k" /* toNode */])(element).getBoundingClientRect(), {
        top,
        left,
        bottom: top + Object(__WEBPACK_IMPORTED_MODULE_3__position__["b" /* height */])(__WEBPACK_IMPORTED_MODULE_2__env__["m" /* win */]),
        right: left + Object(__WEBPACK_IMPORTED_MODULE_3__position__["f" /* width */])(__WEBPACK_IMPORTED_MODULE_2__env__["m" /* win */])
    });
}

function scrolledOver(element) {

    element = Object(__WEBPACK_IMPORTED_MODULE_5__selector__["k" /* toNode */])(element);

    var elHeight = element.offsetHeight,
        top = positionTop(element),
        vp = Object(__WEBPACK_IMPORTED_MODULE_3__position__["b" /* height */])(__WEBPACK_IMPORTED_MODULE_2__env__["m" /* win */]),
        vh = vp + Math.min(0, top - vp),
        diff = Math.max(0, vp - (Object(__WEBPACK_IMPORTED_MODULE_3__position__["b" /* height */])(__WEBPACK_IMPORTED_MODULE_2__env__["b" /* doc */]) - (top + elHeight)));

    return Object(__WEBPACK_IMPORTED_MODULE_7__lang__["g" /* clamp */])(((vh + __WEBPACK_IMPORTED_MODULE_2__env__["m" /* win */].pageYOffset - top) / ((vh + (elHeight - (diff < vp ? diff : 0))) / 100)) / 100);
}

function positionTop(element) {
    var top = 0;

    do {

        top += element.offsetTop;

    } while (element = element.offsetParent);

    return top;
}

function getIndex(i, elements, current = 0, finite = false) {

    elements = Object(__WEBPACK_IMPORTED_MODULE_5__selector__["l" /* toNodes */])(elements);

    var length = elements.length;

    i = Object(__WEBPACK_IMPORTED_MODULE_7__lang__["u" /* isNumeric */])(i)
        ? Object(__WEBPACK_IMPORTED_MODULE_7__lang__["J" /* toNumber */])(i)
        : i === 'next'
            ? current + 1
            : i === 'previous'
                ? current - 1
                : index(elements, i);

    if (finite) {
        return Object(__WEBPACK_IMPORTED_MODULE_7__lang__["g" /* clamp */])(i, 0, length - 1);
    }

    i %= length;

    return i < 0 ? i + length : i;
}

var voidElements = {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    menuitem: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
};
function isVoidElement(element) {
    return voidElements[Object(__WEBPACK_IMPORTED_MODULE_5__selector__["k" /* toNode */])(element).tagName.toLowerCase()];
}

const Dimensions = {

    ratio(dimensions, prop, value) {

        var aProp = prop === 'width' ? 'height' : 'width';

        return {
            [aProp]: Math.round(value * dimensions[aProp] / dimensions[prop]),
            [prop]: value
        };
    },

    contain(dimensions, maxDimensions) {
        dimensions = Object(__WEBPACK_IMPORTED_MODULE_7__lang__["d" /* assign */])({}, dimensions);

        Object(__WEBPACK_IMPORTED_MODULE_7__lang__["j" /* each */])(dimensions, (_, prop) => dimensions = dimensions[prop] > maxDimensions[prop]
            ? this.ratio(dimensions, prop, maxDimensions[prop])
            : dimensions
        );

        return dimensions;
    },

    cover(dimensions, maxDimensions) {
        dimensions = this.contain(dimensions, maxDimensions);

        Object(__WEBPACK_IMPORTED_MODULE_7__lang__["j" /* each */])(dimensions, (_, prop) => dimensions = dimensions[prop] < maxDimensions[prop]
            ? this.ratio(dimensions, prop, maxDimensions[prop])
            : dimensions
        );

        return dimensions;
    }

};
/* harmony export (immutable) */ __webpack_exports__["b"] = Dimensions;


function preventClick() {

    var timer = setTimeout(() => Object(__WEBPACK_IMPORTED_MODULE_4__event__["f" /* trigger */])(__WEBPACK_IMPORTED_MODULE_2__env__["b" /* doc */], 'click'), 0);

    Object(__WEBPACK_IMPORTED_MODULE_4__event__["d" /* once */])(__WEBPACK_IMPORTED_MODULE_2__env__["b" /* doc */], 'click', e => {
        e.preventDefault();
        e.stopImmediatePropagation();

        clearTimeout(timer);
    }, true);

}

function isVisible(element) {
    return Object(__WEBPACK_IMPORTED_MODULE_5__selector__["l" /* toNodes */])(element).some(element => element.offsetHeight);
}

const selInput = 'input,select,textarea,button';
/* harmony export (immutable) */ __webpack_exports__["x"] = selInput;

function isInput(element) {
    return Object(__WEBPACK_IMPORTED_MODULE_5__selector__["l" /* toNodes */])(element).some(element => Object(__WEBPACK_IMPORTED_MODULE_5__selector__["g" /* matches */])(element, selInput));
}

function empty(element) {
    element = Object(__WEBPACK_IMPORTED_MODULE_5__selector__["k" /* toNode */])(element);
    element.innerHTML = '';
    return element;
}

function html(parent, html) {
    parent = Object(__WEBPACK_IMPORTED_MODULE_5__selector__["k" /* toNode */])(parent);
    return Object(__WEBPACK_IMPORTED_MODULE_7__lang__["y" /* isUndefined */])(html)
        ? parent.innerHTML
        : append(parent.hasChildNodes() ? empty(parent) : parent, html);
}

function prepend(parent, element) {

    parent = Object(__WEBPACK_IMPORTED_MODULE_5__selector__["k" /* toNode */])(parent);

    if (!parent.hasChildNodes()) {
        return append(parent, element);
    } else {
        return insertNodes(element, element => parent.insertBefore(element, parent.firstChild));
    }
}

function append(parent, element) {
    parent = Object(__WEBPACK_IMPORTED_MODULE_5__selector__["k" /* toNode */])(parent);
    return insertNodes(element, element => parent.appendChild(element));
}

function before(ref, element) {
    ref = Object(__WEBPACK_IMPORTED_MODULE_5__selector__["k" /* toNode */])(ref);
    return insertNodes(element, element => ref.parentNode.insertBefore(element, ref));
}

function after(ref, element) {
    ref = Object(__WEBPACK_IMPORTED_MODULE_5__selector__["k" /* toNode */])(ref);
    return insertNodes(element, element => ref.nextSibling
        ? before(ref.nextSibling, element)
        : append(ref.parentNode, element)
    );
}

function insertNodes(element, fn) {
    element = Object(__WEBPACK_IMPORTED_MODULE_7__lang__["x" /* isString */])(element) ? fragment(element) : element;
    return element
        ? 'length' in element
            ? Object(__WEBPACK_IMPORTED_MODULE_5__selector__["l" /* toNodes */])(element).map(fn)
            : fn(element)
        : null;
}

function remove(element) {
    Object(__WEBPACK_IMPORTED_MODULE_5__selector__["l" /* toNodes */])(element).map(element => element.parentNode && element.parentNode.removeChild(element));
}

function wrapAll(element, structure) {

    structure = Object(__WEBPACK_IMPORTED_MODULE_5__selector__["k" /* toNode */])(before(element, structure));

    while (structure.firstChild) {
        structure = structure.firstChild;
    }

    append(structure, element);

    return structure;
}

function wrapInner(element, structure) {
    return Object(__WEBPACK_IMPORTED_MODULE_5__selector__["l" /* toNodes */])(Object(__WEBPACK_IMPORTED_MODULE_5__selector__["l" /* toNodes */])(element).map(element =>
        element.hasChildNodes ? wrapAll(Object(__WEBPACK_IMPORTED_MODULE_5__selector__["l" /* toNodes */])(element.childNodes), structure) : append(element, structure)
    ));
}

function unwrap(element) {
    Object(__WEBPACK_IMPORTED_MODULE_5__selector__["l" /* toNodes */])(element)
        .map(element => element.parentNode)
        .filter((value, index, self) => self.indexOf(value) === index)
        .forEach(parent => {
            before(parent, parent.childNodes);
            remove(parent);
        });
}

var fragmentRE = /^\s*<(\w+|!)[^>]*>/,
    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

function fragment(html) {

    var matches;

    if (matches = singleTagRE.exec(html)) {
        return __WEBPACK_IMPORTED_MODULE_2__env__["b" /* doc */].createElement(matches[1]);
    }

    var container = __WEBPACK_IMPORTED_MODULE_2__env__["b" /* doc */].createElement('div');
    if (fragmentRE.test(html)) {
        container.insertAdjacentHTML('beforeend', html.trim());
    } else {
        container.textContent = html;
    }

    return container.childNodes.length > 1 ? Object(__WEBPACK_IMPORTED_MODULE_5__selector__["l" /* toNodes */])(container.childNodes) : container.firstChild;

}

function index(element, ref) {
    return ref
        ? Object(__WEBPACK_IMPORTED_MODULE_5__selector__["l" /* toNodes */])(element).indexOf(Object(__WEBPACK_IMPORTED_MODULE_5__selector__["k" /* toNode */])(ref))
        : Object(__WEBPACK_IMPORTED_MODULE_5__selector__["l" /* toNodes */])((element = Object(__WEBPACK_IMPORTED_MODULE_5__selector__["k" /* toNode */])(element)) && element.parentNode.children).indexOf(element);
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = attr;
/* harmony export (immutable) */ __webpack_exports__["d"] = hasAttr;
/* harmony export (immutable) */ __webpack_exports__["e"] = removeAttr;
/* harmony export (immutable) */ __webpack_exports__["c"] = filterAttr;
/* harmony export (immutable) */ __webpack_exports__["b"] = data;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selector__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang__ = __webpack_require__(1);



function attr(element, name, value) {

    if (Object(__WEBPACK_IMPORTED_MODULE_1__lang__["v" /* isObject */])(name)) {
        for (var key in name) {
            attr(element, key, name[key]);
        }
        return;
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_1__lang__["y" /* isUndefined */])(value)) {
        element = Object(__WEBPACK_IMPORTED_MODULE_0__selector__["k" /* toNode */])(element);
        return element && element.getAttribute(name);
    } else {
        Object(__WEBPACK_IMPORTED_MODULE_0__selector__["l" /* toNodes */])(element).forEach(element => {

            if (Object(__WEBPACK_IMPORTED_MODULE_1__lang__["s" /* isFunction */])(value)) {
                value = value.call(element, attr(element, name));
            }

            if (value === null) {
                removeAttr(element, name);
            } else {
                element.setAttribute(name, value);
            }
        });
    }

}

function hasAttr(element, name) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__selector__["l" /* toNodes */])(element).some(element => element.hasAttribute(name));
}

function removeAttr(element, name) {
    element = Object(__WEBPACK_IMPORTED_MODULE_0__selector__["l" /* toNodes */])(element);
    name.split(' ').forEach(name =>
        element.forEach(element =>
            element.removeAttribute(name)
        )
    );
}

function filterAttr(element, attribute, pattern, replacement) {
    attr(element, attribute, value => value ? value.replace(pattern, replacement) : value);
}

function data(element, attribute) {
    for (var i = 0, attrs = [attribute, `data-${attribute}`]; i < attrs.length; i++) {
        if (hasAttr(element, attrs[i])) {
            return attr(element, attrs[i]);
        }
    }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = css;
/* harmony export (immutable) */ __webpack_exports__["d"] = getStyles;
/* harmony export (immutable) */ __webpack_exports__["c"] = getStyle;
/* harmony export (immutable) */ __webpack_exports__["b"] = getCssVar;
/* harmony export (immutable) */ __webpack_exports__["e"] = propName;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selector__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lang__ = __webpack_require__(1);






var cssNumber = {
    'animation-iteration-count': true,
    'column-count': true,
    'fill-opacity': true,
    'flex-grow': true,
    'flex-shrink': true,
    'font-weight': true,
    'line-height': true,
    'opacity': true,
    'order': true,
    'orphans': true,
    'widows': true,
    'z-index': true,
    'zoom': true
};

function css(element, property, value) {

    return Object(__WEBPACK_IMPORTED_MODULE_3__selector__["l" /* toNodes */])(element).map(element => {

        if (Object(__WEBPACK_IMPORTED_MODULE_4__lang__["x" /* isString */])(property)) {

            property = propName(property);

            if (Object(__WEBPACK_IMPORTED_MODULE_4__lang__["y" /* isUndefined */])(value)) {
                return getStyle(element, property);
            } else if (!value && value !== 0) {
                element.style.removeProperty(property);
            } else {
                element.style[property] = Object(__WEBPACK_IMPORTED_MODULE_4__lang__["u" /* isNumeric */])(value) && !cssNumber[property] ? `${value}px` : value;
            }

        } else if (Object(__WEBPACK_IMPORTED_MODULE_4__lang__["p" /* isArray */])(property)) {

            var styles = getStyles(element);

            return property.reduce((props, property) => {
                props[property] = styles[propName(property)];
                return props;
            }, {});

        } else if (Object(__WEBPACK_IMPORTED_MODULE_4__lang__["v" /* isObject */])(property)) {
            Object(__WEBPACK_IMPORTED_MODULE_4__lang__["j" /* each */])(property, (value, property) => css(element, property, value));
        }

        return element;

    })[0];

}

function getStyles(element, pseudoElt) {
    element = Object(__WEBPACK_IMPORTED_MODULE_3__selector__["k" /* toNode */])(element);
    return element.ownerDocument.defaultView.getComputedStyle(element, pseudoElt);
}

function getStyle(element, property, pseudoElt) {
    return getStyles(element, pseudoElt)[property];
}

var vars = {};

function getCssVar(name) {

    if (!(name in vars)) {

        /* usage in css: .var-name:before { content:"xyz" } */

        var element = Object(__WEBPACK_IMPORTED_MODULE_0__dom__["f" /* append */])(__WEBPACK_IMPORTED_MODULE_2__env__["c" /* docEl */], __WEBPACK_IMPORTED_MODULE_2__env__["b" /* doc */].createElement('div'));

        Object(__WEBPACK_IMPORTED_MODULE_1__class__["a" /* addClass */])(element, `var-${name}`);

        try {

            vars[name] = getStyle(element, 'content', ':before').replace(/^["'](.*)["']$/, '$1');
            vars[name] = JSON.parse(vars[name]);

        } catch (e) {}

        __WEBPACK_IMPORTED_MODULE_2__env__["c" /* docEl */].removeChild(element);

    }

    return vars[name];

}

var cssProps = {};

function propName(name) {

    var ret = cssProps[name];
    if (!ret) {
        ret = cssProps[name] = vendorPropName(name) || name;
    }
    return ret;
}

var cssPrefixes = ['webkit', 'moz', 'ms'],
    style = __WEBPACK_IMPORTED_MODULE_2__env__["b" /* doc */].createElement('_').style;

function vendorPropName(name) {

    name = Object(__WEBPACK_IMPORTED_MODULE_4__lang__["m" /* hyphenate */])(name);

    if (name in style) {
        return name;
    }

    var i = cssPrefixes.length, prefixedName;

    while (i--) {
        prefixedName = `-${cssPrefixes[i]}-${name}`;
        if (prefixedName in style) {
            return prefixedName;
        }
    }
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = translate;
/* harmony export (immutable) */ __webpack_exports__["b"] = scale3d;
/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    var {css} = UIkit.util;

    var Animations = {

        slide: {

            show(dir) {
                return [
                    {transform: translate(dir * -100)},
                    {transform: translate()}
                ];
            },

            percent(current) {
                return Animations.translated(current);
            },

            translate(percent, dir) {
                return [
                    {transform: translate(dir * -100 * percent)},
                    {transform: translate(dir * 100 * (1 - percent))}
                ];
            }

        },

        translated(el) {
            return Math.abs(css(el, 'transform').split(',')[4] / el.offsetWidth) || 0;
        }

    };

    return Animations;

});

function translate(value = 0, unit = '%') {
    return `translate(${value}${value ? unit : ''}, 0)`; // currently not translate3d to support IE, translate3d within translate3d does not work while transitioning
}

function scale3d(value) {
    return `scale3d(${value}, ${value}, 1)`;
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hooks__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instance__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_index__ = __webpack_require__(0);







var UIkit = function (options) {
    this._init(options);
};

UIkit.util = __WEBPACK_IMPORTED_MODULE_5__util_index__;
UIkit.data = '__uikit__';
UIkit.prefix = 'uk-';
UIkit.options = {};
UIkit.instances = {};
UIkit.elements = [];

Object(__WEBPACK_IMPORTED_MODULE_0__global__["a" /* default */])(UIkit);
Object(__WEBPACK_IMPORTED_MODULE_1__hooks__["a" /* default */])(UIkit);
Object(__WEBPACK_IMPORTED_MODULE_2__state__["a" /* default */])(UIkit);
Object(__WEBPACK_IMPORTED_MODULE_3__instance__["a" /* default */])(UIkit);
Object(__WEBPACK_IMPORTED_MODULE_4__component__["a" /* default */])(UIkit);

/* harmony default export */ __webpack_exports__["default"] = (UIkit);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony export (immutable) */ __webpack_exports__["a"] = Promise;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang__ = __webpack_require__(1);
/* global setImmediate */


/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

const RESOLVED = 0;
const REJECTED = 1;
const PENDING = 2;

var async = 'setImmediate' in window ? setImmediate : setTimeout;

function Promise(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise.reject = function (r) {
    return new Promise(function (resolve, reject) {
        reject(r);
    });
};

Promise.resolve = function (x) {
    return new Promise(function (resolve, reject) {
        resolve(x);
    });
};

Promise.all = function all(iterable) {
    return new Promise(function (resolve, reject) {
        var count = 0, result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            Promise.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

Promise.race = function race(iterable) {
    return new Promise(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            Promise.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p = Promise.prototype;

p.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x.then;

            if (x !== null && Object(__WEBPACK_IMPORTED_MODULE_0__lang__["v" /* isObject */])(x) && Object(__WEBPACK_IMPORTED_MODULE_0__lang__["s" /* isFunction */])(then)) {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;

                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p.notify = function notify() {
    async(() => {
        if (this.state !== PENDING) {
            while (this.deferred.length) {
                var deferred = this.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (this.state === RESOLVED) {
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__lang__["s" /* isFunction */])(onResolved)) {
                            resolve(onResolved.call(undefined, this.value));
                        } else {
                            resolve(this.value);
                        }
                    } else if (this.state === REJECTED) {
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__lang__["s" /* isFunction */])(onRejected)) {
                            resolve(onRejected.call(undefined, this.value));
                        } else {
                            reject(this.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p.then = function then(onResolved, onRejected) {
    return new Promise((resolve, reject) => {
        this.deferred.push([onResolved, onRejected, resolve, reject]);
        this.notify();
    });
};

p.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(52).setImmediate))

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["d"] = removeClasses;
/* harmony export (immutable) */ __webpack_exports__["e"] = replaceClass;
/* harmony export (immutable) */ __webpack_exports__["b"] = hasClass;
/* harmony export (immutable) */ __webpack_exports__["f"] = toggleClass;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attr__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selector__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lang__ = __webpack_require__(1);





function addClass(element, ...args) {
    apply(element, args, 'add');
}

function removeClass(element, ...args) {
    apply(element, args, 'remove');
}

function removeClasses(element, cls) {
    Object(__WEBPACK_IMPORTED_MODULE_1__attr__["c" /* filterAttr */])(element, 'class', new RegExp(`(^|\\s)${cls}(?!\\S)`, 'g'), '');
}

function replaceClass(element, ...args) {
    args[0] && removeClass(element, args[0]);
    args[1] && addClass(element, args[1]);
}

function hasClass(element, cls) {
    return __WEBPACK_IMPORTED_MODULE_0__env__["l" /* supports */].ClassList && Object(__WEBPACK_IMPORTED_MODULE_2__selector__["l" /* toNodes */])(element).some(element => element.classList.contains(cls));
}

function toggleClass(element, ...args) {

    if (!__WEBPACK_IMPORTED_MODULE_0__env__["l" /* supports */].ClassList || !args.length) {
        return;
    }

    args = getArgs(args);

    var force = !Object(__WEBPACK_IMPORTED_MODULE_3__lang__["x" /* isString */])(args[args.length - 1]) ? args.pop() : undefined;

    args = args.filter(Boolean);

    Object(__WEBPACK_IMPORTED_MODULE_2__selector__["l" /* toNodes */])(element).forEach(({classList}) => {
        for (var i = 0; i < args.length; i++) {
            __WEBPACK_IMPORTED_MODULE_0__env__["l" /* supports */].Force
                ? classList.toggle(args[i], force)
                : (classList[(!Object(__WEBPACK_IMPORTED_MODULE_3__lang__["y" /* isUndefined */])(force) ? force : !classList.contains(args[i])) ? 'add' : 'remove'](args[i]));
        }
    });

}

function apply(element, args, fn) {
    args = getArgs(args).filter(Boolean);

    __WEBPACK_IMPORTED_MODULE_0__env__["l" /* supports */].ClassList && args.length && Object(__WEBPACK_IMPORTED_MODULE_2__selector__["l" /* toNodes */])(element).forEach(({classList}) => {
        __WEBPACK_IMPORTED_MODULE_0__env__["l" /* supports */].Multiple
            ? classList[fn].apply(classList, args)
            : args.forEach(cls => classList[fn](cls));
    });
}

function getArgs(args) {
    return args.reduce((args, arg) =>
        args.concat.call(args, Object(__WEBPACK_IMPORTED_MODULE_3__lang__["x" /* isString */])(arg) && Object(__WEBPACK_IMPORTED_MODULE_3__lang__["n" /* includes */])(arg, ' ') ? arg.trim().split(' ') : arg)
        , []);
}



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = positionAt;
/* harmony export (immutable) */ __webpack_exports__["c"] = offset;
/* harmony export (immutable) */ __webpack_exports__["d"] = position;
/* harmony export (immutable) */ __webpack_exports__["a"] = flipPosition;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selector__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lang__ = __webpack_require__(1);





var dirs = {
    width: ['x', 'left', 'right'],
    height: ['y', 'top', 'bottom']
};

function positionAt(element, target, elAttach, targetAttach, elOffset, targetOffset, flip, boundary) {

    elAttach = getPos(elAttach);
    targetAttach = getPos(targetAttach);

    var flipped = {element: elAttach, target: targetAttach};

    if (!element || !target) {
        return flipped;
    }

    var dim = getDimensions(element),
        targetDim = getDimensions(target),
        position = targetDim;

    moveTo(position, elAttach, dim, -1);
    moveTo(position, targetAttach, targetDim, 1);

    elOffset = getOffsets(elOffset, dim.width, dim.height);
    targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);

    elOffset['x'] += targetOffset['x'];
    elOffset['y'] += targetOffset['y'];

    position.left += elOffset['x'];
    position.top += elOffset['y'];

    boundary = getDimensions(boundary || getWindow(element));

    if (flip) {
        Object(__WEBPACK_IMPORTED_MODULE_3__lang__["j" /* each */])(dirs, ([dir, align, alignFlip], prop) => {

            if (!(flip === true || Object(__WEBPACK_IMPORTED_MODULE_3__lang__["n" /* includes */])(flip, dir))) {
                return;
            }

            var elemOffset = elAttach[dir] === align
                    ? -dim[prop]
                    : elAttach[dir] === alignFlip
                        ? dim[prop]
                        : 0,
                targetOffset = targetAttach[dir] === align
                    ? targetDim[prop]
                    : targetAttach[dir] === alignFlip
                        ? -targetDim[prop]
                        : 0;

            if (position[align] < boundary[align] || position[align] + dim[prop] > boundary[alignFlip]) {

                var centerOffset = dim[prop] / 2,
                    centerTargetOffset = targetAttach[dir] === 'center' ? -targetDim[prop] / 2 : 0;

                elAttach[dir] === 'center' && (
                    apply(centerOffset, centerTargetOffset)
                    || apply(-centerOffset, -centerTargetOffset)
                ) || apply(elemOffset, targetOffset);

            }

            function apply(elemOffset, targetOffset) {

                var newVal = position[align] + elemOffset + targetOffset - elOffset[dir] * 2;

                if (newVal >= boundary[align] && newVal + dim[prop] <= boundary[alignFlip]) {
                    position[align] = newVal;

                    ['element', 'target'].forEach((el) => {
                        flipped[el][dir] = !elemOffset
                            ? flipped[el][dir]
                            : flipped[el][dir] === dirs[prop][1]
                                ? dirs[prop][2]
                                : dirs[prop][1];
                    });

                    return true;
                }

            }

        });
    }

    offset(element, position);

    return flipped;
}

function offset(element, coordinates) {

    element = Object(__WEBPACK_IMPORTED_MODULE_2__selector__["k" /* toNode */])(element);

    if (coordinates) {

        var currentOffset = offset(element),
            pos = Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(element, 'position');

        ['left', 'top'].forEach(prop => {
            if (prop in coordinates) {
                var value = Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(element, prop);
                element.style[prop] = `${(coordinates[prop] - currentOffset[prop])
                    + Object(__WEBPACK_IMPORTED_MODULE_3__lang__["F" /* toFloat */])(pos === 'absolute' && value === 'auto' ? position(element)[prop] : value)
                }px`;
            }
        });

        return;
    }

    return getDimensions(element);
}

function getDimensions(element) {

    element = Object(__WEBPACK_IMPORTED_MODULE_2__selector__["k" /* toNode */])(element);

    var {pageYOffset: top, pageXOffset: left} = getWindow(element);

    if (Object(__WEBPACK_IMPORTED_MODULE_3__lang__["z" /* isWindow */])(element)) {

        var height = element.innerHeight,
            width = element.innerWidth;

        return {
            top,
            left,
            height,
            width,
            bottom: top + height,
            right: left + width,
        };
    }

    var display = false;
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__dom__["q" /* isVisible */])(element)) {
        display = element.style.display;
        element.style.display = 'block';
    }

    var rect = element.getBoundingClientRect();

    if (display !== false) {
        element.style.display = display;
    }

    return {
        height: rect.height,
        width: rect.width,
        top: rect.top + top,
        left: rect.left + left,
        bottom: rect.bottom + top,
        right: rect.right + left,
    };
}

function position(element) {
    element = Object(__WEBPACK_IMPORTED_MODULE_2__selector__["k" /* toNode */])(element);

    var parent = offsetParent(element),
        parentOffset = parent === docEl(element) ? {top: 0, left: 0} : offset(parent);

    return ['top', 'left'].reduce((props, prop) => {
        var propName = Object(__WEBPACK_IMPORTED_MODULE_3__lang__["K" /* ucfirst */])(prop);
        props[prop] -= parentOffset[prop]
            + (Object(__WEBPACK_IMPORTED_MODULE_3__lang__["F" /* toFloat */])(Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(element, `margin${propName}`)) || 0)
            + (Object(__WEBPACK_IMPORTED_MODULE_3__lang__["F" /* toFloat */])(Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(parent, `border${propName}Width`)) || 0);
        return props;
    }, offset(element));
}

function offsetParent(element) {

    var parent = Object(__WEBPACK_IMPORTED_MODULE_2__selector__["k" /* toNode */])(element).offsetParent;

    while (parent && Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(parent, 'position') === 'static') {
        parent = parent.offsetParent;
    }

    return parent || docEl(element);
}

const height = dimension('height');
/* harmony export (immutable) */ __webpack_exports__["b"] = height;

const width = dimension('width');
/* harmony export (immutable) */ __webpack_exports__["f"] = width;


function dimension(prop) {
    var propName = Object(__WEBPACK_IMPORTED_MODULE_3__lang__["K" /* ucfirst */])(prop);
    return (element, value) => {

        element = Object(__WEBPACK_IMPORTED_MODULE_2__selector__["k" /* toNode */])(element);

        if (Object(__WEBPACK_IMPORTED_MODULE_3__lang__["y" /* isUndefined */])(value)) {

            if (Object(__WEBPACK_IMPORTED_MODULE_3__lang__["z" /* isWindow */])(element)) {
                return element[`inner${propName}`];
            }

            if (Object(__WEBPACK_IMPORTED_MODULE_3__lang__["r" /* isDocument */])(element)) {
                var doc = element.documentElement;
                return Math.max(doc.offsetHeight, doc.scrollHeight);
            }

            value = Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(element, prop);
            value = value === 'auto' ? element[`offset${propName}`] : Object(__WEBPACK_IMPORTED_MODULE_3__lang__["F" /* toFloat */])(value) || 0;

            return getContentSize(prop, element, value);

        } else {

            Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(element, prop, !value && value !== 0
                ? ''
                : getContentSize(prop, element, value) + 'px'
            );

        }

    };
}

function getContentSize(prop, element, value) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(element, 'boxSizing') === 'border-box' ? dirs[prop].slice(1).map(__WEBPACK_IMPORTED_MODULE_3__lang__["K" /* ucfirst */]).reduce((value, prop) =>
        value
            - Object(__WEBPACK_IMPORTED_MODULE_3__lang__["F" /* toFloat */])(Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(element, `padding${prop}`))
            - Object(__WEBPACK_IMPORTED_MODULE_3__lang__["F" /* toFloat */])(Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(element, `border${prop}Width`))
        , value) : value;
}

function getWindow(element) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__lang__["z" /* isWindow */])(element) ? element : document(element).defaultView;
}

function moveTo(position, attach, dim, factor) {
    Object(__WEBPACK_IMPORTED_MODULE_3__lang__["j" /* each */])(dirs, function ([dir, align, alignFlip], prop) {
        if (attach[dir] === alignFlip) {
            position[align] += dim[prop] * factor;
        } else if (attach[dir] === 'center') {
            position[align] += dim[prop] * factor / 2;
        }
    });
}

function getPos(pos) {

    var x = /left|center|right/, y = /top|center|bottom/;

    pos = (pos || '').split(' ');

    if (pos.length === 1) {
        pos = x.test(pos[0])
            ? pos.concat(['center'])
            : y.test(pos[0])
                ? ['center'].concat(pos)
                : ['center', 'center'];
    }

    return {
        x: x.test(pos[0]) ? pos[0] : 'center',
        y: y.test(pos[1]) ? pos[1] : 'center'
    };
}

function getOffsets(offsets, width, height) {

    var [x, y] = (offsets || '').split(' ');

    return {
        x: x ? Object(__WEBPACK_IMPORTED_MODULE_3__lang__["F" /* toFloat */])(x) * (Object(__WEBPACK_IMPORTED_MODULE_3__lang__["k" /* endsWith */])(x, '%') ? width / 100 : 1) : 0,
        y: y ? Object(__WEBPACK_IMPORTED_MODULE_3__lang__["F" /* toFloat */])(y) * (Object(__WEBPACK_IMPORTED_MODULE_3__lang__["k" /* endsWith */])(y, '%') ? height / 100 : 1) : 0
    };
}

function flipPosition(pos) {
    switch (pos) {
        case 'left':
            return 'right';
        case 'right':
            return 'left';
        case 'top':
            return 'bottom';
        case 'bottom':
            return 'top';
        default:
            return pos;
    }
}

function document(element) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__selector__["k" /* toNode */])(element).ownerDocument;
}

function docEl(element) {
    return document(element).documentElement;
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/StarkRegular.eot?09eac2213aed428265001208379b0ec2";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getComponentName;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    const DATA = UIkit.data;

    UIkit.components = {};

    UIkit.component = function (id, options) {

        var name = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["camelize"])(id);

        if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isPlainObject"])(options)) {
            options.name = name;
            options = UIkit.extend(options);
        } else if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isUndefined"])(options)) {
            return UIkit.components[name];
        } else {
            options.options.name = name;
        }

        UIkit.components[name] = options;

        UIkit[name] = function (element, data) {

            if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isPlainObject"])(element)) {
                return new UIkit.components[name]({data: element});
            }

            if (UIkit.components[name].options.functional) {
                return new UIkit.components[name]({data: [...arguments]});
            }

            return element && element.nodeType ? init(element) : Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$$"])(element).map(init)[0];

            function init(element) {

                var cmp = UIkit.getComponent(element, name);

                if (cmp && data) {
                    cmp.$reset(data);
                }

                return cmp || new UIkit.components[name]({el: element, data: data || {}});
            }

        };

        if (UIkit._initialized && !options.options.functional) {
            __WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].read(() => UIkit[name](`[uk-${id}],[data-uk-${id}]`));
        }

        return UIkit.components[name];
    };

    UIkit.getComponents = element => element && (element = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isJQuery"])(element) ? element[0] : element) && element[DATA] || {};
    UIkit.getComponent = (element, name) => UIkit.getComponents(element)[name];

    UIkit.connect = node => {

        var name;

        if (node[DATA]) {
            for (name in node[DATA]) {
                node[DATA][name]._callConnected();
            }
        }

        for (var i = 0; i < node.attributes.length; i++) {

            name = getComponentName(node.attributes[i].name);

            if (name && name in UIkit.components) {
                UIkit[name](node);
            }

        }

    };

    UIkit.disconnect = node => {
        for (var name in node[DATA]) {
            node[DATA][name]._callDisconnected();
        }
    };

});

function getComponentName(attribute) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["startsWith"])(attribute, 'uk-') || Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["startsWith"])(attribute, 'data-uk-')
        ? Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["camelize"])(attribute.replace('data-uk-', '').replace('uk-', ''))
        : false;
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({

    init() {
        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["addClass"])(this.$el, this.$name);
    }

});


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = ({

    props: {
        container: Boolean
    },

    defaults: {
        container: true
    },

    computed: {

        container({container}) {
            return container === true && __WEBPACK_IMPORTED_MODULE_0__api_index__["default"].container || container && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(container);
        }

    }

});


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = ({

    props: {
        cls: Boolean,
        animation: 'list',
        duration: Number,
        origin: String,
        transition: String,
        queued: Boolean
    },

    defaults: {
        cls: false,
        animation: [false],
        duration: 200,
        origin: false,
        transition: 'linear',
        queued: false,

        initProps: {
            overflow: '',
            height: '',
            paddingTop: '',
            paddingBottom: '',
            marginTop: '',
            marginBottom: ''
        },

        hideProps: {
            overflow: 'hidden',
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: 0
        }

    },

    computed: {

        hasAnimation({animation}) {
            return !!animation[0];
        },

        hasTransition({animation}) {
            return this.hasAnimation && animation[0] === true;
        }

    },

    methods: {

        toggleElement(targets, show, animate) {
            return new __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"](resolve => {

                targets = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toNodes"])(targets);

                var all = targets => __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"].all(targets.map(el => this._toggleElement(el, show, animate))),
                    toggled = targets.filter(el => this.isToggled(el)),
                    untoggled = targets.filter(el => !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["includes"])(toggled, el)),
                    p;

                if (!this.queued || !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isUndefined"])(animate) || !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isUndefined"])(show) || !this.hasAnimation || targets.length < 2) {

                    p = all(untoggled.concat(toggled));

                } else {

                    var body = __WEBPACK_IMPORTED_MODULE_1__util_index__["doc"].body,
                        scroll = body.scrollTop,
                        el = toggled[0],
                        inProgress = __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].inProgress(el) && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(el, 'uk-animation-leave')
                            || __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].inProgress(el) && el.style.height === '0px';

                    p = all(toggled);

                    if (!inProgress) {
                        p = p.then(() => {
                            var p = all(untoggled);
                            body.scrollTop = scroll;
                            return p;
                        });
                    }

                }

                p.then(resolve, __WEBPACK_IMPORTED_MODULE_1__util_index__["noop"]);

            });
        },

        toggleNow(targets, show) {
            return new __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"](resolve => __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"].all(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toNodes"])(targets).map(el => this._toggleElement(el, show, false))).then(resolve, __WEBPACK_IMPORTED_MODULE_1__util_index__["noop"]));
        },

        isToggled(el) {
            var nodes = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toNodes"])(el || this.$el);
            return this.cls
                ? Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(nodes, this.cls.split(' ')[0])
                : !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasAttr"])(nodes, 'hidden');
        },

        updateAria(el) {
            if (this.cls === false) {
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(el, 'aria-hidden', !this.isToggled(el));
            }
        },

        _toggleElement(el, show, animate) {

            show = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isBoolean"])(show)
                ? show
                : __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].inProgress(el)
                    ? Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(el, 'uk-animation-leave')
                    : __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].inProgress(el)
                        ? el.style.height === '0px'
                        : !this.isToggled(el);

            if (!Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["trigger"])(el, `before${show ? 'show' : 'hide'}`, [this])) {
                return __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"].reject();
            }

            var promise = (animate === false || !this.hasAnimation
                ? this._toggleImmediate
                : this.hasTransition
                    ? this._toggleHeight
                    : this._toggleAnimation
            )(el, show);

            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["trigger"])(el, show ? 'show' : 'hide', [this]);

            return promise.then(() => {
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["trigger"])(el, show ? 'shown' : 'hidden', [this]);
                __WEBPACK_IMPORTED_MODULE_0__api_index__["default"].update(null, el);
            });
        },

        _toggle(el, toggled) {

            if (!el) {
                return;
            }

            if (this.cls) {
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toggleClass"])(el, this.cls, Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["includes"])(this.cls, ' ') ? undefined : toggled);
            } else {
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(el, 'hidden', !toggled ? '' : null);
            }

            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$$"])('[autofocus]', el).some(el => Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isVisible"])(el) && (el.focus() || true));

            this.updateAria(el);
            __WEBPACK_IMPORTED_MODULE_0__api_index__["default"].update(null, el);
        },

        _toggleImmediate(el, show) {
            this._toggle(el, show);
            return __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"].resolve();
        },

        _toggleHeight(el, show) {

            var inProgress = __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].inProgress(el),
                inner = el.hasChildNodes ? Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toFloat"])(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(el.firstElementChild, 'marginTop')) + Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toFloat"])(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(el.lastElementChild, 'marginBottom')) : 0,
                currentHeight = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isVisible"])(el) ? Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(el) + (inProgress ? 0 : inner) : 0,
                endHeight;

            __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].cancel(el);

            if (!this.isToggled(el)) {
                this._toggle(el, true);
            }

            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(el, '');

            // Update child components first
            __WEBPACK_IMPORTED_MODULE_1__util_index__["fastdom"].flush();

            endHeight = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(el) + (inProgress ? 0 : inner);
            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(el, currentHeight);

            return (show
                ? __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].start(el, Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])({}, this.initProps, {overflow: 'hidden', height: endHeight}), Math.round(this.duration * (1 - currentHeight / endHeight)), this.transition)
                : __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].start(el, this.hideProps, Math.round(this.duration * (currentHeight / endHeight)), this.transition).then(() => this._toggle(el, false))
            ).then(() => Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(el, this.initProps));

        },

        _toggleAnimation(el, show) {

            __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].cancel(el);

            if (show) {
                this._toggle(el, true);
                return __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].in(el, this.animation[0], this.duration, this.origin);
            }

            return __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].out(el, this.animation[1] || this.animation[0], this.duration, this.origin).then(() => this._toggle(el, false));
        }

    }

});


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_slideshow_animations__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_slideshow_transitioner__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_js__ = __webpack_require__(21);




function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    UIkit.use(__WEBPACK_IMPORTED_MODULE_2__slider_js__["a" /* default */]);

    var {mixin} = UIkit;
    var {assign, fastdom, isNumber} = UIkit.util;

    var Animations = Object(__WEBPACK_IMPORTED_MODULE_0__internal_slideshow_animations__["a" /* default */])(UIkit),
        Transitioner = Object(__WEBPACK_IMPORTED_MODULE_1__internal_slideshow_transitioner__["a" /* default */])(UIkit);

    UIkit.mixin.slideshow = {

        mixins: [mixin.slider],

        props: {
            animation: String
        },

        defaults: {
            animation: 'slide',
            Animations,
            Transitioner
        },

        computed: {

            animation({animation, Animations}) {
                return assign(animation in Animations ? Animations[animation] : Animations.slide, {name: animation});
            },

            transitionOptions() {
                return {animation: this.animation};
            }

        },

        events: {

            'itemshow itemhide itemshown itemhidden'({target}) {
                UIkit.update(null, target);
            },

            itemshow() {
                isNumber(this.prevIndex) && fastdom.flush(); // iOS 10+ will honor the video.play only if called from a gesture handler
            }

        }

    };

}

/* harmony default export */ __webpack_exports__["a"] = (plugin);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = speedUp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_slider_autoplay__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_slider_drag__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_slider_nav__ = __webpack_require__(109);




function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var {$, addClass, assign, clamp, fastdom, getIndex, hasClass, isNumber, isRtl, Promise, removeClass, toNodes, trigger} = UIkit.util;

    UIkit.mixin.slider = {

        attrs: true,

        mixins: [Object(__WEBPACK_IMPORTED_MODULE_0__internal_slider_autoplay__["a" /* default */])(UIkit), Object(__WEBPACK_IMPORTED_MODULE_1__internal_slider_drag__["a" /* default */])(UIkit), Object(__WEBPACK_IMPORTED_MODULE_2__internal_slider_nav__["a" /* default */])(UIkit)],

        props: {
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number
        },

        defaults: {
            easing: 'ease',
            finite: false,
            velocity: 1,
            index: 0,
            stack: [],
            percent: 0,
            clsActive: 'uk-active',
            clsActivated: 'uk-transition-active',
            Transitioner: false,
            transitionOptions: {}
        },

        computed: {

            duration({velocity}, $el) {
                return speedUp($el.offsetWidth / velocity);
            },

            length() {
                return this.slides.length;
            },

            list({selList}, $el) {
                return $(selList, $el);
            },

            maxIndex() {
                return this.length - 1;
            },

            slidesSelector({selList}) {
                return `${selList} > *`;
            },

            slides() {
                return toNodes(this.list.children);
            }

        },

        update: [

            {

                read() {
                    this._resetComputeds();
                },

                events: ['load', 'resize']

            }

        ],

        events: {

            beforeitemshow({target}) {
                addClass(target, this.clsActive);
            },

            itemshown({target}) {
                addClass(target, this.clsActivated);
            },

            itemhidden({target}) {
                removeClass(target, this.clsActive, this.clsActivated);
            }

        },

        methods: {

            show(index, force = false) {

                if (this.dragging || !this.length) {
                    return;
                }

                var stack = this.stack,
                    queueIndex = force ? 0 : stack.length,
                    reset = () => {
                        stack.splice(queueIndex, 1);

                        if (stack.length) {
                            this.show(stack.shift(), true);
                        }
                    };

                stack[force ? 'unshift' : 'push'](index);

                if (!force && stack.length > 1) {

                    if (stack.length === 2) {
                        this._transitioner.forward(Math.min(this.duration, 200));
                    }

                    return;
                }

                var prevIndex = this.index,
                    prev = hasClass(this.slides, this.clsActive) && this.slides[prevIndex],
                    nextIndex = this.getIndex(index, this.index),
                    next = this.slides[nextIndex];

                if (prev === next) {
                    reset();
                    return;
                }

                this.dir = getDirection(index, prevIndex);
                this.prevIndex = prevIndex;
                this.index = nextIndex;

                prev && trigger(prev, 'beforeitemhide', [this]);
                if (!trigger(next, 'beforeitemshow', [this, prev])) {
                    this.index = this.prevIndex;
                    reset();
                    return;
                }

                var promise = this._show(prev, next, force).then(() => {

                    prev && trigger(prev, 'itemhidden', [this]);
                    trigger(next, 'itemshown', [this]);

                    return new Promise(resolve => {
                        fastdom.write(() => {
                            stack.shift();
                            if (stack.length) {
                                this.show(stack.shift(), true);
                            } else {
                                this._transitioner = null;
                            }
                            resolve();
                        });
                    });

                });

                prev && trigger(prev, 'itemhide', [this]);
                trigger(next, 'itemshow', [this]);

                return promise;

            },

            getIndex(index = this.index, prev = this.index) {
                return clamp(getIndex(index, this.slides, prev, this.finite), 0, this.maxIndex);
            },

            getValidIndex(index = this.index, prevIndex = this.prevIndex) {
                return this.getIndex(index, prevIndex);
            },

            _show(prev, next, force) {

                this._transitioner = this._getTransitioner(
                    prev,
                    next,
                    this.dir,
                    assign({easing: force
                            ? next.offsetWidth < 600
                                ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' /* easeOutQuad */
                                : 'cubic-bezier(0.165, 0.84, 0.44, 1)' /* easeOutQuart */
                            : this.easing}, this.transitionOptions)
                );

                if (!force && !prev) {
                    this._transitioner.translate(1);
                    return Promise.resolve();
                }

                var length = this.stack.length;
                return this._transitioner[length > 1 ? 'forward' : 'show'](length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration, this.percent);

            },

            _getDistance(prev, next) {
                return new this._getTransitioner(prev, prev !== next && next).getDistance();
            },

            _translate(percent, prev = this.prevIndex, next = this.index) {
                var transitioner = this._getTransitioner(prev !== next ? prev : false, next);
                transitioner.translate(percent);
                return transitioner;
            },

            _getTransitioner(prev, next, dir = this.dir || 1, options = this.transitionOptions) {
                return new this.Transitioner(
                    isNumber(prev) ? this.slides[prev] : prev,
                    isNumber(next) ? this.slides[next] : next,
                    dir * (isRtl ? -1 : 1),
                    options
                );
            }

        }

    };

    function getDirection(index, prevIndex) {
        return index === 'next'
            ? 1
            : index === 'previous'
                ? -1
                : index < prevIndex
                    ? -1
                    : 1;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (plugin);

function speedUp(x) {
    return .5 * x + 300; // parabola through (400,500; 600,600; 1800,1200)
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    var {fastdom, removeClass} = UIkit.util;

    return {

        ready() {
            fastdom.write(() => this.show(this.getValidIndex()));
        },

        update: [

            {

                read() {
                    this._resetComputeds();
                },

                write() {

                    if (this.stack.length) {
                        return;
                    }

                    var index = this.getValidIndex();
                    delete this.index;
                    removeClass(this.slides, this.clsActive, this.clsActivated);
                    this.show(index);

                },

                events: ['load', 'resize']

            }

        ]

    };

});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about-bg.jpg?b27c78ca1a87edc5c678c81b0d839e20";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-enroll-success.png?3cf5d1344d8df4ba64c7afd736729744";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-ensamble-links.png?d8aeef513db3d55fd7db9091338edbff";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-menu-bar-small.png?6fba2021c69ad45f354d41870fa6e07a";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-menu-bar.png?04e75ba5aaa1708ca332c382e6604cb2";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-menu.png?299b3fe2e4372137b1227db7fbb41b86";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/check.svg?48e6e4ab281c9dbdf58a6e86b58b55f8";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/close.svg?0c9659746776c8e4da80e92eb0de75fa";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/domenart.svg?afc68ffba6c17bac3919a2790dade06e";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gray-tutors.jpg?82c44922367c96ba70eb20e7f5464ee9";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/intro.jpg?aa98814c4055647f83f8bfffa1bd0f02";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/list-marker.svg?42c117a9c46a373ba3bdb35ff1301006";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/success-logo.svg?0cbeefc85a6ff0fa8346d1f252164d61";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vk-members.jpg?5f2b7e93ffb7ee50e61e607ebd627a2a";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/StarkRegular.ttf?24a79d076afbe50db294a640bd96431b";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/StarkRegular.woff?4c19fba323e14376a59fe4a309f87b24";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(40);

__webpack_require__(41);

/* import files */
__webpack_require__(120);
__webpack_require__(161);

/* import styles */


/* import scripts */

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "main.css";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(42);

__webpack_require__(44);

__webpack_require__(45);

__webpack_require__(46);

__webpack_require__(47);

__webpack_require__(48);

__webpack_require__(49);

__webpack_require__(50);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _scrollmagic = __webpack_require__(43);

var _scrollmagic2 = _interopRequireDefault(_scrollmagic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Включить анимации первого экрана главной

var homepage = document.querySelector('.homepage');
var menuBar = document.querySelector('.menu-bar');
var menuBarLogo = document.querySelector('.menu-bar__logo');
var menuHeaderButton = document.querySelector('.header-menu');

if (homepage) {

    window.addEventListener('load', function () {
        var introLogo = document.querySelector('.intro__logo');
        var menuBarText = document.querySelector('.menu-bar__title-text');
        var introMajorFirst = document.querySelector('.intro-nav__major li:first-child');
        var introMajorDivider = document.querySelector('.intro-nav__dot-vertical');
        var introMajorLast = document.querySelector('.intro-nav__major li:last-child');
        var introMenuItems = document.querySelectorAll('.intro-nav__minor li');
        var menuBarThresholdInner = document.querySelector('.menu-bar__threshold');
        var menuBarDivider = document.querySelector('.menu-bar__divider');

        introLogo.style.animation = '1s appereance forwards';
        introLogo.addEventListener('animationend', function () {
            if (!menuBar.classList.contains('menu-bar-fixed') && !window.matchMedia('(max-width: 639px)').matches) {
                menuBar.style.opacity = '1';
                menuBar.style.animation = '2s menu-bar-appereance';
                setTimeout(function () {
                    menuBar.style.animation = '2s menu-bar-rotate 0.5s';
                    menuBarText.style.animation = '1s appereance 2s forwards';
                    menuBarText.addEventListener('animationend', function () {
                        menuBarText.style.opacity = '1';
                        menuBarText.style.animation = '';
                    });
                    menuBarThresholdInner.style.animation = '1s font-scale 3s';
                    menuBarThresholdInner.addEventListener('animationend', function () {
                        menuBarThresholdInner.style.animation = '';
                    });
                }, 500);
            }
            menuBar.addEventListener('animationend', function () {
                setTimeout(function () {
                    introMajorFirst.style.animation = '1s slide-ltr forwards';
                }, 1000);
                setTimeout(function () {
                    if (window.matchMedia('(max-width: 1199px)').matches) {
                        introMajorDivider.style.animation = '1s slide-up-divider-xsmall forwards';
                    } else {
                        introMajorDivider.style.animation = '1s slide-up forwards';
                    }
                    introMajorDivider.addEventListener('animationend', function () {
                        introMajorDivider.style.animation = '';
                        introMajorDivider.style.opacity = '1';
                    });
                }, 2000);
                setTimeout(function () {
                    introMajorLast.style.animation = '1s slide-ltr forwards';
                }, 3000);
                setTimeout(function () {
                    introMenuItems.forEach(function (item, i, introMenuItems) {
                        setTimeout(function () {
                            item.style.animation = '0.5s slide-ltr forwards';
                        }, i * 500);
                    });
                }, 4000);
                introMenuItems[introMenuItems.length - 1].addEventListener('animationend', function () {
                    menuHeaderButton.style.transform = 'scale(1)';
                });
            });
        });
    });

    //анимации главной
    var ensembleLinks = document.querySelector('.js-ensemble-links');

    if (ensembleLinks) {
        var tutorsImage = ensembleLinks.querySelector('.js-ensemble-tutors-image');
        var tutorsTitle = ensembleLinks.querySelector('.js-ensemble-tutors-title');
        var photoalbumImage = ensembleLinks.querySelector('.js-ensemble-photoalbum-image');
        var photoalbumTitle = ensembleLinks.querySelector('.js-ensemble-photoalbum-title');
        var videosImage = ensembleLinks.querySelector('.js-ensemble-videos-image');
        var videosTitle = ensembleLinks.querySelector('.js-ensemble-videos-title');

        window.addEventListener('scroll', function () {
            var ensembleLinksCoords = ensembleLinks.getBoundingClientRect();
            var animated = false;
            if (ensembleLinksCoords.top < document.documentElement.clientHeight / 2 && animated == false) {
                tutorsImage.style.animation = '1s slide-ltr both';
                tutorsTitle.style.animation = '1s slide-ltr 1s both';
                photoalbumImage.style.animation = '1s slide-rtl 1.5s both';
                photoalbumTitle.style.animation = '1s slide-rtl-rotated 2s both';
                videosImage.style.animation = '1s slide-rtl 2.5s both';
                videosTitle.style.animation = '1s slide-rtl 3s both';
                animated = true;
            };
        });
    }

    var costumedGirl = document.querySelector('.program__costumedgirl');

    if (costumedGirl) {
        window.addEventListener('scroll', function () {
            var costumedGirlCoords = costumedGirl.getBoundingClientRect();
            var animated = false;

            if (costumedGirlCoords.bottom < document.documentElement.clientHeight && animated == false) {
                costumedGirl.style.animation = '1s slide-up forwards';
                animated = true;
            }
        });
    }

    var programCollective = document.querySelector('.program__collective-text');

    if (programCollective) {
        window.addEventListener('scroll', function () {
            var programCollectiveCoords = programCollective.getBoundingClientRect();
            var animated = false;

            if (programCollectiveCoords.bottom < document.documentElement.clientHeight && animated == false) {
                programCollective.style.animation = '1s slide-up forwards';
                animated = true;
            }
        });
    }

    var programFeatures = document.querySelector('.program-features');
    var programFeaturesYears = document.querySelector('.program-features__years');
    var programFeaturesInternational = document.querySelector('.program-features__international');
    var programFeaturesReports = document.querySelectorAll('.program-features__reports a');

    if (programFeatures) {
        window.addEventListener('scroll', function () {
            var programFeaturesCoords = programFeatures.getBoundingClientRect();
            var animated = false;
            if (programFeaturesCoords.top < document.documentElement.clientHeight / 2 && animated == false) {
                programFeaturesYears.style.animation = '1s slide-ltr both';
                programFeaturesInternational.style.animation = '1s slide-ltr 1s both';
                setTimeout(function () {
                    programFeaturesReports.forEach(function (item, i, programFeaturesReports) {
                        setTimeout(function () {
                            item.style.animation = '0.5s slide-ltr both';
                        }, i * 500);
                    });
                }, 1500);
                animated = true;
            }
        });
    }

    //Линии
    var canvasHomepage = document.querySelector('#canvasHomepage');

    if (canvasHomepage) {
        var getCoords = function getCoords(elem) {
            var box = elem.getBoundingClientRect();
            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset,
                bottom: box.bottom + pageYOffset,
                right: box.right + pageXOffset
            };
        };

        canvasHomepage.setAttribute('width', document.documentElement.offsetWidth);
        canvasHomepage.setAttribute('height', document.documentElement.offsetHeight);

        if (canvasHomepage.getContext && window.matchMedia('(min-width: 639px)').matches) {
            var controller = new _scrollmagic2.default.Controller();
            var ctx = canvasHomepage.getContext('2d');
            var xDraw = void 0,
                yDraw = void 0;
            var _tutorsImage = document.querySelector('.js-ensemble-tutors-image');
            var tutorsImageCoords = getCoords(_tutorsImage);
            var programTitle = document.querySelector('.program__title');
            var programTitleCoords = getCoords(programTitle);
            var programList = document.querySelector('.program__list');
            var programListCoords = getCoords(programList);
            var programYears = document.querySelector('.program-features__years');
            var programYearsCoords = getCoords(programYears);
            var socialGrid = document.querySelector('.social-grid');
            var socialGridCoords = getCoords(socialGrid);
            var parentsButton = document.querySelector('.js-parents-button-more');
            var parentsButtonCoords = getCoords(parentsButton);

            ctx.strokeStyle = '#f355b2';
            ctx.lineWidth = 2;
            ctx.globalCompositeOperation = 'copy';

            var start = {
                x: 0,
                y: tutorsImageCoords.top + _tutorsImage.offsetHeight * 0.1
            };
            var offset = start.y - window.innerHeight * 0.7;
            var defaultDuration = window.innerHeight * 0.3;
            var points = [{
                coords: {
                    x: tutorsImageCoords.right + 27,
                    y: tutorsImageCoords.top + _tutorsImage.offsetHeight * 0.1
                }
            }, {
                coords: {
                    x: tutorsImageCoords.right + 27,
                    y: tutorsImageCoords.top + _tutorsImage.offsetHeight * 0.9
                }
            }, {
                coords: {
                    x: 0,
                    y: tutorsImageCoords.top + _tutorsImage.offsetHeight * 0.9
                }
            }, {
                coords: {
                    x: 0,
                    y: programTitleCoords.top + programTitle.offsetHeight
                }
            }, {
                coords: {
                    x: programTitleCoords.right + 75,
                    y: programTitleCoords.top + programTitle.offsetHeight
                }
            }, {
                coords: {
                    x: programTitleCoords.right + 75,
                    y: programYearsCoords.top + 55
                }
            }, {
                coords: {
                    x: programTitleCoords.right - 100,
                    y: programYearsCoords.top + 55
                }
            }, {
                coords: {
                    x: programTitleCoords.right - 100,
                    y: socialGridCoords.top - 40
                }
            }, {
                coords: {
                    x: socialGridCoords.left - 40,
                    y: socialGridCoords.top - 40
                }
            }, {
                coords: {
                    x: socialGridCoords.left - 40,
                    y: parentsButtonCoords.top + parentsButton.offsetHeight / 2
                }
            }, {
                coords: {
                    x: parentsButtonCoords.left,
                    y: parentsButtonCoords.top + parentsButton.offsetHeight / 2
                }
            }];

            points.forEach(function (point, index) {
                var prev = index > 0 ? points[index - 1].coords : start;
                var x = points[index].coords.x - prev.x;
                var y = points[index].coords.y - prev.y;

                points[index].prev = prev;
                points[index].move = { x: x, y: y };
                points[index].duration = y && y - defaultDuration || defaultDuration;
                points[index].offset = index > 0 ? offset += points[index - 1].duration : offset;
            });

            points.forEach(function (point, index) {
                new _scrollmagic2.default.Scene({
                    duration: point.duration,
                    offset: point.offset
                }).addTo(controller).on('progress', function (e) {
                    var progress = e.progress.toFixed(3);
                    ctx.beginPath();
                    // console.log('start:', start.x, start.y)
                    ctx.moveTo(start.x, start.y);
                    for (var i = 0; i < index; i++) {
                        // console.log(i + ':', points[i].coords.x, points[i].coords.y)
                        ctx.lineTo(points[i].coords.x, points[i].coords.y);
                    }
                    // console.log('point:', point.move.x * progress, point.move.y * progress)
                    ctx.lineTo(point.prev.x + point.move.x * progress, point.prev.y + point.move.y * progress);
                    ctx.stroke();
                });
            });
        }
    }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * ScrollMagic v2.0.5 (2015-04-29)
 * The javascript library for magical scroll interactions.
 * (c) 2015 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.5
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
/**
 * @namespace ScrollMagic
 */
(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		// CommonJS
		module.exports = factory();
	} else {
		// Browser global
		root.ScrollMagic = factory();
	}
}(this, function () {
	"use strict";

	var ScrollMagic = function () {
		_util.log(2, '(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use \'new ScrollMagic.Controller()\' to create a new controller instance. Use \'new ScrollMagic.Scene()\' to instance a scene.');
	};

	ScrollMagic.version = "2.0.5";

	// TODO: temporary workaround for chrome's scroll jitter bug
	window.addEventListener("mousewheel", function () {});

	// global const
	var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";

	/**
	 * The main class that is needed once per scroll container.
	 *
	 * @class
	 *
	 * @example
	 * // basic initialization
	 * var controller = new ScrollMagic.Controller();
	 *
	 * // passing options
	 * var controller = new ScrollMagic.Controller({container: "#myContainer", loglevel: 3});
	 *
	 * @param {object} [options] - An object containing one or more options for the controller.
	 * @param {(string|object)} [options.container=window] - A selector, DOM object that references the main container for scrolling.
	 * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
	 * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollMagic.Scene}.
	 * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
	 ** `0` => silent
	 ** `1` => errors
	 ** `2` => errors, warnings
	 ** `3` => errors, warnings, debuginfo
	 * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.  
	 This interval polls these parameters to fire the necessary events.  
	 If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
	 *
	 */
	ScrollMagic.Controller = function (options) {
/*
	 * ----------------------------------------------------------------
	 * settings
	 * ----------------------------------------------------------------
	 */
		var
		NAMESPACE = 'ScrollMagic.Controller',
			SCROLL_DIRECTION_FORWARD = 'FORWARD',
			SCROLL_DIRECTION_REVERSE = 'REVERSE',
			SCROLL_DIRECTION_PAUSED = 'PAUSED',
			DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;

/*
	 * ----------------------------------------------------------------
	 * private vars
	 * ----------------------------------------------------------------
	 */
		var
		Controller = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_sceneObjects = [],
			_updateScenesOnNextCycle = false,
			// can be boolean (true => all scenes) or an array of scenes to be updated
			_scrollPos = 0,
			_scrollDirection = SCROLL_DIRECTION_PAUSED,
			_isDocument = true,
			_viewPortSize = 0,
			_enabled = true,
			_updateTimeout, _refreshTimeout;

/*
	 * ----------------------------------------------------------------
	 * private functions
	 * ----------------------------------------------------------------
	 */

		/**
		 * Internal constructor function of the ScrollMagic Controller
		 * @private
		 */
		var construct = function () {
			for (var key in _options) {
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			_options.container = _util.get.elements(_options.container)[0];
			// check ScrollContainer
			if (!_options.container) {
				log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
				throw NAMESPACE + " init failed."; // cancel
			}
			_isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container);
			// normalize to window
			if (_isDocument) {
				_options.container = window;
			}
			// update container size immediately
			_viewPortSize = getViewportSize();
			// set event handlers
			_options.container.addEventListener("resize", onChange);
			_options.container.addEventListener("scroll", onChange);

			_options.refreshInterval = parseInt(_options.refreshInterval) || DEFAULT_OPTIONS.refreshInterval;
			scheduleRefresh();

			log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
		};

		/**
		 * Schedule the next execution of the refresh function
		 * @private
		 */
		var scheduleRefresh = function () {
			if (_options.refreshInterval > 0) {
				_refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
			}
		};

		/**
		 * Default function to get scroll pos - overwriteable using `Controller.scrollPos(newFunction)`
		 * @private
		 */
		var getScrollPos = function () {
			return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
		};

		/**
		 * Returns the current viewport Size (width vor horizontal, height for vertical)
		 * @private
		 */
		var getViewportSize = function () {
			return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
		};

		/**
		 * Default function to set scroll pos - overwriteable using `Controller.scrollTo(newFunction)`
		 * Make available publicly for pinned mousewheel workaround.
		 * @private
		 */
		var setScrollPos = this._setScrollPos = function (pos) {
			if (_options.vertical) {
				if (_isDocument) {
					window.scrollTo(_util.get.scrollLeft(), pos);
				} else {
					_options.container.scrollTop = pos;
				}
			} else {
				if (_isDocument) {
					window.scrollTo(pos, _util.get.scrollTop());
				} else {
					_options.container.scrollLeft = pos;
				}
			}
		};

		/**
		 * Handle updates in cycles instead of on scroll (performance)
		 * @private
		 */
		var updateScenes = function () {
			if (_enabled && _updateScenesOnNextCycle) {
				// determine scenes to update
				var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0);
				// reset scenes
				_updateScenesOnNextCycle = false;
				var oldScrollPos = _scrollPos;
				// update scroll pos now instead of onChange, as it might have changed since scheduling (i.e. in-browser smooth scroll)
				_scrollPos = Controller.scrollPos();
				var deltaScroll = _scrollPos - oldScrollPos;
				if (deltaScroll !== 0) { // scroll position changed?
					_scrollDirection = (deltaScroll > 0) ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
				}
				// reverse order of scenes if scrolling reverse
				if (_scrollDirection === SCROLL_DIRECTION_REVERSE) {
					scenesToUpdate.reverse();
				}
				// update scenes
				scenesToUpdate.forEach(function (scene, index) {
					log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
					scene.update(true);
				});
				if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
					log(3, "updating 0 Scenes (nothing added to controller)");
				}
			}
		};

		/**
		 * Initializes rAF callback
		 * @private
		 */
		var debounceUpdate = function () {
			_updateTimeout = _util.rAF(updateScenes);
		};

		/**
		 * Handles Container changes
		 * @private
		 */
		var onChange = function (e) {
			log(3, "event fired causing an update:", e.type);
			if (e.type == "resize") {
				// resize
				_viewPortSize = getViewportSize();
				_scrollDirection = SCROLL_DIRECTION_PAUSED;
			}
			// schedule update
			if (_updateScenesOnNextCycle !== true) {
				_updateScenesOnNextCycle = true;
				debounceUpdate();
			}
		};

		var refresh = function () {
			if (!_isDocument) {
				// simulate resize event. Only works for viewport relevant param (performance)
				if (_viewPortSize != getViewportSize()) {
					var resizeEvent;
					try {
						resizeEvent = new Event('resize', {
							bubbles: false,
							cancelable: false
						});
					} catch (e) { // stupid IE
						resizeEvent = document.createEvent("Event");
						resizeEvent.initEvent("resize", false, false);
					}
					_options.container.dispatchEvent(resizeEvent);
				}
			}
			_sceneObjects.forEach(function (scene, index) { // refresh all scenes
				scene.refresh();
			});
			scheduleRefresh();
		};

		/**
		 * Send a debug message to the console.
		 * provided publicly with _log for plugins
		 * @private
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};
		// for scenes we have getters for each option, but for the controller we don't, so we need to make it available externally for plugins
		this._options = _options;

		/**
		 * Sort scenes in ascending order of their start offset.
		 * @private
		 *
		 * @param {array} ScenesArray - an array of ScrollMagic Scenes that should be sorted
		 * @return {array} The sorted array of Scenes.
		 */
		var sortScenes = function (ScenesArray) {
			if (ScenesArray.length <= 1) {
				return ScenesArray;
			} else {
				var scenes = ScenesArray.slice(0);
				scenes.sort(function (a, b) {
					return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
				});
				return scenes;
			}
		};

		/**
		 * ----------------------------------------------------------------
		 * public functions
		 * ----------------------------------------------------------------
		 */

		/**
		 * Add one ore more scene(s) to the controller.  
		 * This is the equivalent to `Scene.addTo(controller)`.
		 * @public
		 * @example
		 * // with a previously defined scene
		 * controller.addScene(scene);
		 *
		 * // with a newly created scene.
		 * controller.addScene(new ScrollMagic.Scene({duration : 0}));
		 *
		 * // adding multiple scenes
		 * controller.addScene([scene, scene2, new ScrollMagic.Scene({duration : 0})]);
		 *
		 * @param {(ScrollMagic.Scene|array)} newScene - ScrollMagic Scene or Array of Scenes to be added to the controller.
		 * @return {Controller} Parent object for chaining.
		 */
		this.addScene = function (newScene) {
			if (_util.type.Array(newScene)) {
				newScene.forEach(function (scene, index) {
					Controller.addScene(scene);
				});
			} else if (newScene instanceof ScrollMagic.Scene) {
				if (newScene.controller() !== Controller) {
					newScene.addTo(Controller);
				} else if (_sceneObjects.indexOf(newScene) < 0) {
					// new scene
					_sceneObjects.push(newScene); // add to array
					_sceneObjects = sortScenes(_sceneObjects); // sort
					newScene.on("shift.controller_sort", function () { // resort whenever scene moves
						_sceneObjects = sortScenes(_sceneObjects);
					});
					// insert Global defaults.
					for (var key in _options.globalSceneOptions) {
						if (newScene[key]) {
							newScene[key].call(newScene, _options.globalSceneOptions[key]);
						}
					}
					log(3, "adding Scene (now " + _sceneObjects.length + " total)");
				}
			} else {
				log(1, "ERROR: invalid argument supplied for '.addScene()'");
			}
			return Controller;
		};

		/**
		 * Remove one ore more scene(s) from the controller.  
		 * This is the equivalent to `Scene.remove()`.
		 * @public
		 * @example
		 * // remove a scene from the controller
		 * controller.removeScene(scene);
		 *
		 * // remove multiple scenes from the controller
		 * controller.removeScene([scene, scene2, scene3]);
		 *
		 * @param {(ScrollMagic.Scene|array)} Scene - ScrollMagic Scene or Array of Scenes to be removed from the controller.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.removeScene = function (Scene) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.removeScene(scene);
				});
			} else {
				var index = _sceneObjects.indexOf(Scene);
				if (index > -1) {
					Scene.off("shift.controller_sort");
					_sceneObjects.splice(index, 1);
					log(3, "removing Scene (now " + _sceneObjects.length + " left)");
					Scene.remove();
				}
			}
			return Controller;
		};

		/**
		 * Update one ore more scene(s) according to the scroll position of the container.  
		 * This is the equivalent to `Scene.update()`.  
		 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
		 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.  
		 * _**Note:** This method gets called constantly whenever Controller detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
		 * @public
		 * @example
		 * // update a specific scene on next cycle
		 * controller.updateScene(scene);
		 *
		 * // update a specific scene immediately
		 * controller.updateScene(scene, true);
		 *
		 * // update multiple scenes scene on next cycle
		 * controller.updateScene([scene1, scene2, scene3]);
		 *
		 * @param {ScrollMagic.Scene} Scene - ScrollMagic Scene or Array of Scenes that is/are supposed to be updated.
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.  
		 This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
		 * @return {Controller} Parent object for chaining.
		 */
		this.updateScene = function (Scene, immediately) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.updateScene(scene, immediately);
				});
			} else {
				if (immediately) {
					Scene.update(true);
				} else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) { // if _updateScenesOnNextCycle is true, all connected scenes are already scheduled for update
					// prep array for next update cycle
					_updateScenesOnNextCycle = _updateScenesOnNextCycle || [];
					if (_updateScenesOnNextCycle.indexOf(Scene) == -1) {
						_updateScenesOnNextCycle.push(Scene);
					}
					_updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort
					debounceUpdate();
				}
			}
			return Controller;
		};

		/**
		 * Updates the controller params and calls updateScene on every scene, that is attached to the controller.  
		 * See `Controller.updateScene()` for more information about what this means.  
		 * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.  
		 * The only application for this method is when ScrollMagic fails to detect these events.  
		 * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
		 * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `Controller.scrollPos()` for details.
		 * @public
		 * @example
		 * // update the controller on next cycle (saves performance due to elimination of redundant updates)
		 * controller.update();
		 *
		 * // update the controller immediately
		 * controller.update(true);
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
		 * @return {Controller} Parent object for chaining.
		 */
		this.update = function (immediately) {
			onChange({
				type: "resize"
			}); // will update size and set _updateScenesOnNextCycle to true
			if (immediately) {
				updateScenes();
			}
			return Controller;
		};

		/**
		 * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.  
		 * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
		 * @public
		 *
		 * @since 1.1.0
		 * @example
		 * // scroll to an offset of 100
		 * controller.scrollTo(100);
		 *
		 * // scroll to a DOM element
		 * controller.scrollTo("#anchor");
		 *
		 * // scroll to the beginning of a scene
		 * var scene = new ScrollMagic.Scene({offset: 200});
		 * controller.scrollTo(scene);
		 *
		 * // define a new scroll position modification function (jQuery animate instead of jump)
		 * controller.scrollTo(function (newScrollPos) {
		 *	$("html, body").animate({scrollTop: newScrollPos});
		 * });
		 * controller.scrollTo(100); // call as usual, but the new function will be used instead
		 *
		 * // define a new scroll function with an additional parameter
		 * controller.scrollTo(function (newScrollPos, message) {
		 *  console.log(message);
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter to the defined custom function
		 * controller.scrollTo(100, "my message");
		 *
		 * // define a new scroll function with an additional parameter containing multiple variables
		 * controller.scrollTo(function (newScrollPos, options) {
		 *  someGlobalVar = options.a + options.b;
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter containing multiple options
		 * controller.scrollTo(100, {a: 1, b: 2});
		 *
		 * // define a new scroll function with a callback supplied as an additional parameter
		 * controller.scrollTo(function (newScrollPos, callback) {
		 *	$(this).animate({scrollTop: newScrollPos}, 400, "swing", callback);
		 * });
		 * // call as usual, but supply an extra parameter, which is used as a callback in the previously defined custom scroll function
		 * controller.scrollTo(100, function() {
		 *	console.log("scroll has finished.");
		 * });
		 *
		 * @param {mixed} scrollTarget - The supplied argument can be one of these types:
		 * 1. `number` -> The container will scroll to this new scroll offset.
		 * 2. `string` or `object` -> Can be a selector or a DOM object.  
		 *  The container will scroll to the position of this element.
		 * 3. `ScrollMagic Scene` -> The container will scroll to the start of this scene.
		 * 4. `function` -> This function will be used for future scroll position modifications.  
		 *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The function receives the new scroll position as a parameter and a reference to the container element using `this`.  
		 *  It may also optionally receive an optional additional parameter (see below)  
		 *  _**NOTE:**  
		 *  All other options will still work as expected, using the new function to scroll._
		 * @param {mixed} [additionalParameter] - If a custom scroll function was defined (see above 4.), you may want to supply additional parameters to it, when calling it. You can do this using this parameter – see examples for details. Please note, that this parameter will have no effect, if you use the default scrolling function.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.scrollTo = function (scrollTarget, additionalParameter) {
			if (_util.type.Number(scrollTarget)) { // excecute
				setScrollPos.call(_options.container, scrollTarget, additionalParameter);
			} else if (scrollTarget instanceof ScrollMagic.Scene) { // scroll to scene
				if (scrollTarget.controller() === Controller) { // check if the controller is associated with this scene
					Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
				}
			} else if (_util.type.Function(scrollTarget)) { // assign new scroll function
				setScrollPos = scrollTarget;
			} else { // scroll to element
				var elem = _util.get.elements(scrollTarget)[0];
				if (elem) {
					// if parent is pin spacer, use spacer position instead so correct start position is returned for pinned elements.
					while (elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						elem = elem.parentNode;
					}

					var
					param = _options.vertical ? "top" : "left",
						// which param is of interest ?
						containerOffset = _util.get.offset(_options.container),
						// container position is needed because element offset is returned in relation to document, not in relation to container.
						elementOffset = _util.get.offset(elem);

					if (!_isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
						containerOffset[param] -= Controller.scrollPos();
					}

					Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
				}
			}
			return Controller;
		};

		/**
		 * **Get** the current scrollPosition or **Set** a new method to calculate it.  
		 * -> **GET**:
		 * When used as a getter this function will return the current scroll position.  
		 * To get a cached value use Controller.info("scrollPos"), which will be updated in the update cycle.  
		 * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
		 *
		 * -> **SET**:
		 * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.  
		 * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.  
		 * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.  
		 * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.  
		 * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
		 *
		 * To change the current scroll position please use `Controller.scrollTo()`.
		 * @public
		 *
		 * @example
		 * // get the current scroll Position
		 * var scrollPos = controller.scrollPos();
		 *
		 * // set a new scroll position calculation method
		 * controller.scrollPos(function () {
		 *	return this.info("vertical") ? -mychildcontainer.y : -mychildcontainer.x
		 * });
		 *
		 * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
		 * @returns {(number|Controller)} Current scroll position or parent object for chaining.
		 */
		this.scrollPos = function (scrollPosMethod) {
			if (!arguments.length) { // get
				return getScrollPos.call(Controller);
			} else { // set
				if (_util.type.Function(scrollPosMethod)) {
					getScrollPos = scrollPosMethod;
				} else {
					log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
				}
			}
			return Controller;
		};

		/**
		 * **Get** all infos or one in particular about the controller.
		 * @public
		 * @example
		 * // returns the current scroll position (number)
		 * var scrollPos = controller.info("scrollPos");
		 *
		 * // returns all infos as an object
		 * var infos = controller.info();
		 *
		 * @param {string} [about] - If passed only this info will be returned instead of an object containing all.  
		 Valid options are:
		 ** `"size"` => the current viewport size of the container
		 ** `"vertical"` => true if vertical scrolling, otherwise false
		 ** `"scrollPos"` => the current scroll position
		 ** `"scrollDirection"` => the last known direction of the scroll
		 ** `"container"` => the container element
		 ** `"isDocument"` => true if container element is the document.
		 * @returns {(mixed|object)} The requested info(s).
		 */
		this.info = function (about) {
			var values = {
				size: _viewPortSize,
				// contains height or width (in regard to orientation);
				vertical: _options.vertical,
				scrollPos: _scrollPos,
				scrollDirection: _scrollDirection,
				container: _options.container,
				isDocument: _isDocument
			};
			if (!arguments.length) { // get all as an object
				return values;
			} else if (values[about] !== undefined) {
				return values[about];
			} else {
				log(1, "ERROR: option \"" + about + "\" is not available");
				return;
			}
		};

		/**
		 * **Get** or **Set** the current loglevel option value.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var loglevel = controller.loglevel();
		 *
		 * // set a new value
		 * controller.loglevel(3);
		 *
		 * @param {number} [newLoglevel] - The new loglevel setting of the Controller. `[0-3]`
		 * @returns {(number|Controller)} Current loglevel or parent object for chaining.
		 */
		this.loglevel = function (newLoglevel) {
			if (!arguments.length) { // get
				return _options.loglevel;
			} else if (_options.loglevel != newLoglevel) { // set
				_options.loglevel = newLoglevel;
			}
			return Controller;
		};

		/**
		 * **Get** or **Set** the current enabled state of the controller.  
		 * This can be used to disable all Scenes connected to the controller without destroying or removing them.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var enabled = controller.enabled();
		 *
		 * // disable the controller
		 * controller.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
		 * @returns {(boolean|Controller)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !! newState;
				Controller.updateScene(_sceneObjects, true);
			}
			return Controller;
		};

		/**
		 * Destroy the Controller, all Scenes and everything.
		 * @public
		 *
		 * @example
		 * // without resetting the scenes
		 * controller = controller.destroy();
		 *
		 * // with scene reset
		 * controller = controller.destroy(true);
		 *
		 * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (resetScenes) {
			window.clearTimeout(_refreshTimeout);
			var i = _sceneObjects.length;
			while (i--) {
				_sceneObjects[i].destroy(resetScenes);
			}
			_options.container.removeEventListener("resize", onChange);
			_options.container.removeEventListener("scroll", onChange);
			_util.cAF(_updateTimeout);
			log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
			return null;
		};

		// INIT
		construct();
		return Controller;
	};

	// store pagewide controller options
	var CONTROLLER_OPTIONS = {
		defaults: {
			container: window,
			vertical: true,
			globalSceneOptions: {},
			loglevel: 2,
			refreshInterval: 100
		}
	};
/*
 * method used to add an option to ScrollMagic Scenes.
 */
	ScrollMagic.Controller.addOption = function (name, defaultValue) {
		CONTROLLER_OPTIONS.defaults[name] = defaultValue;
	};
	// instance extension function for plugins
	ScrollMagic.Controller.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Controller = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Controller, oldClass); // copy properties
		ScrollMagic.Controller.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller; // restore constructor
	};


	/**
	 * A Scene defines where the controller should react and how.
	 *
	 * @class
	 *
	 * @example
	 * // create a standard scene and add it to a controller
	 * new ScrollMagic.Scene()
	 *		.addTo(controller);
	 *
	 * // create a scene with custom options and assign a handler to it.
	 * var scene = new ScrollMagic.Scene({
	 * 		duration: 100,
	 *		offset: 200,
	 *		triggerHook: "onEnter",
	 *		reverse: false
	 * });
	 *
	 * @param {object} [options] - Options for the Scene. The options can be updated at any time.  
	 Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.  
	 When a scene is added to the controller the options defined using the Scene constructor will be overwritten by those set in `globalSceneOptions`.
	 * @param {(number|function)} [options.duration=0] - The duration of the scene. 
	 If `0` tweens will auto-play when reaching the scene start point, pins will be pinned indefinetly starting at the start position.  
	 A function retuning the duration value is also supported. Please see `Scene.duration()` for details.
	 * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
	 * @param {(string|object)} [options.triggerElement=null] - Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
	 * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.  
	 Can also be defined using a string:
	 ** `"onEnter"` => `1`
	 ** `"onCenter"` => `0.5`
	 ** `"onLeave"` => `0`
	 * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
	 * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
	 ** `0` => silent
	 ** `1` => errors
	 ** `2` => errors, warnings
	 ** `3` => errors, warnings, debuginfo
	 * 
	 */
	ScrollMagic.Scene = function (options) {

/*
	 * ----------------------------------------------------------------
	 * settings
	 * ----------------------------------------------------------------
	 */

		var
		NAMESPACE = 'ScrollMagic.Scene',
			SCENE_STATE_BEFORE = 'BEFORE',
			SCENE_STATE_DURING = 'DURING',
			SCENE_STATE_AFTER = 'AFTER',
			DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;

/*
	 * ----------------------------------------------------------------
	 * private vars
	 * ----------------------------------------------------------------
	 */

		var
		Scene = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_state = SCENE_STATE_BEFORE,
			_progress = 0,
			_scrollOffset = {
				start: 0,
				end: 0
			},
			// reflects the controllers's scroll position for the start and end of the scene respectively
			_triggerPos = 0,
			_enabled = true,
			_durationUpdateMethod, _controller;

		/**
		 * Internal constructor function of the ScrollMagic Scene
		 * @private
		 */
		var construct = function () {
			for (var key in _options) { // check supplied options
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			// add getters/setters for all possible options
			for (var optionName in DEFAULT_OPTIONS) {
				addSceneOption(optionName);
			}
			// validate all options
			validateOption();
		};

/*
 * ----------------------------------------------------------------
 * Event Management
 * ----------------------------------------------------------------
 */

		var _listeners = {};
		/**
		 * Scene start event.  
		 * Fires whenever the scroll position its the starting point of the scene.  
		 * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#start
		 *
		 * @example
		 * scene.on("start", function (event) {
		 * 	console.log("Hit start point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene end event.  
		 * Fires whenever the scroll position its the ending point of the scene.  
		 * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#end
		 *
		 * @example
		 * scene.on("end", function (event) {
		 * 	console.log("Hit end point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene enter event.  
		 * Fires whenever the scene enters the "DURING" state.  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#enter
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 * 	console.log("Scene entered.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene - always `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene leave event.  
		 * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#leave
		 *
		 * @example
		 * scene.on("leave", function (event) {
		 * 	console.log("Scene left.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene update event.  
		 * Fires whenever the scene is updated (but not necessarily changes the progress).
		 *
		 * @event ScrollMagic.Scene#update
		 *
		 * @example
		 * scene.on("update", function (event) {
		 * 	console.log("Scene updated.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
		 * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
		 * @property {number} event.scrollPos - The current scroll position of the container
		 */
		/**
		 * Scene progress event.  
		 * Fires whenever the progress of the scene changes.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#progress
		 *
		 * @example
		 * scene.on("progress", function (event) {
		 * 	console.log("Scene progress changed to " + event.progress);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene change event.  
		 * Fires whenvever a property of the scene is changed.
		 *
		 * @event ScrollMagic.Scene#change
		 *
		 * @example
		 * scene.on("change", function (event) {
		 * 	console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.what - Indicates what value has been changed
		 * @property {mixed} event.newval - The new value of the changed property
		 */
		/**
		 * Scene shift event.  
		 * Fires whenvever the start or end **scroll offset** of the scene change.
		 * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
		 * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
		 * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
		 *
		 * @event ScrollMagic.Scene#shift
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("shift", function (event) {
		 * 	console.log("Scene moved, because the " + event.reason + " has changed.)");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.reason - Indicates why the scene has shifted
		 */
		/**
		 * Scene destroy event.  
		 * Fires whenvever the scene is destroyed.
		 * This can be used to tidy up custom behaviour used in events.
		 *
		 * @event ScrollMagic.Scene#destroy
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 *        // add custom action
		 *        $("#my-elem").left("200");
		 *      })
		 *      .on("destroy", function (event) {
		 *        // reset my element to start position
		 *        if (event.reset) {
		 *          $("#my-elem").left("0");
		 *        }
		 *      });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
		 */
		/**
		 * Scene add event.  
		 * Fires when the scene is added to a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#add
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("add", function (event) {
		 * 	console.log('Scene was added to a new controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.controller - The controller object the scene was added to.
		 */
		/**
		 * Scene remove event.  
		 * Fires when the scene is removed from a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#remove
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("remove", function (event) {
		 * 	console.log('Scene was removed from its controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 */

		/**
		 * Add one ore more event listener.  
		 * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
		 * @method ScrollMagic.Scene#on
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update progress start end enter leave", callback);
		 *
		 * @param {string} names - The name or names of the event the callback should be attached to.
		 * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.on = function (names, callback) {
			if (_util.type.Function(callback)) {
				names = names.trim().split(' ');
				names.forEach(function (fullname) {
					var
					nameparts = fullname.split('.'),
						eventname = nameparts[0],
						namespace = nameparts[1];
					if (eventname != "*") { // disallow wildcards
						if (!_listeners[eventname]) {
							_listeners[eventname] = [];
						}
						_listeners[eventname].push({
							namespace: namespace || '',
							callback: callback
						});
					}
				});
			} else {
				log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
			}
			return Scene;
		};

		/**
		 * Remove one or more event listener.
		 * @method ScrollMagic.Scene#off
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update", callback);
		 * // remove listeners
		 * scene.off("change update", callback);
		 *
		 * @param {string} names - The name or names of the event that should be removed.
		 * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.off = function (names, callback) {
			if (!names) {
				log(1, "ERROR: Invalid event name supplied.");
				return Scene;
			}
			names = names.trim().split(' ');
			names.forEach(function (fullname, key) {
				var
				nameparts = fullname.split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1] || '',
					removeList = eventname === '*' ? Object.keys(_listeners) : [eventname];
				removeList.forEach(function (remove) {
					var
					list = _listeners[remove] || [],
						i = list.length;
					while (i--) {
						var listener = list[i];
						if (listener && (namespace === listener.namespace || namespace === '*') && (!callback || callback == listener.callback)) {
							list.splice(i, 1);
						}
					}
					if (!list.length) {
						delete _listeners[remove];
					}
				});
			});
			return Scene;
		};

		/**
		 * Trigger an event.
		 * @method ScrollMagic.Scene#trigger
		 *
		 * @example
		 * this.trigger("change");
		 *
		 * @param {string} name - The name of the event that should be triggered.
		 * @param {object} [vars] - An object containing info that should be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.trigger = function (name, vars) {
			if (name) {
				var
				nameparts = name.trim().split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1],
					listeners = _listeners[eventname];
				log(3, 'event fired:', eventname, vars ? "->" : '', vars || '');
				if (listeners) {
					listeners.forEach(function (listener, key) {
						if (!namespace || namespace === listener.namespace) {
							listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
						}
					});
				}
			} else {
				log(1, "ERROR: Invalid event name supplied.");
			}
			return Scene;
		};

		// set event listeners
		Scene.on("change.internal", function (e) {
			if (e.what !== "loglevel" && e.what !== "tweenChanges") { // no need for a scene update scene with these options...
				if (e.what === "triggerElement") {
					updateTriggerElementPosition();
				} else if (e.what === "reverse") { // the only property left that may have an impact on the current scene state. Everything else is handled by the shift event.
					Scene.update();
				}
			}
		}).on("shift.internal", function (e) {
			updateScrollOffset();
			Scene.update(); // update scene to reflect new position
		});

		/**
		 * Send a debug message to the console.
		 * @private
		 * but provided publicly with _log for plugins
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};

		/**
		 * Add the scene to a controller.  
		 * This is the equivalent to `Controller.addScene(scene)`.
		 * @method ScrollMagic.Scene#addTo
		 *
		 * @example
		 * // add a scene to a ScrollMagic Controller
		 * scene.addTo(controller);
		 *
		 * @param {ScrollMagic.Controller} controller - The controller to which the scene should be added.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.addTo = function (controller) {
			if (!(controller instanceof ScrollMagic.Controller)) {
				log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
			} else if (_controller != controller) {
				// new controller
				if (_controller) { // was associated to a different controller before, so remove it...
					_controller.removeScene(Scene);
				}
				_controller = controller;
				validateOption();
				updateDuration(true);
				updateTriggerElementPosition(true);
				updateScrollOffset();
				_controller.info("container").addEventListener('resize', onContainerResize);
				controller.addScene(Scene);
				Scene.trigger("add", {
					controller: _controller
				});
				log(3, "added " + NAMESPACE + " to controller");
				Scene.update();
			}
			return Scene;
		};

		/**
		 * **Get** or **Set** the current enabled state of the scene.  
		 * This can be used to disable this scene without removing or destroying it.
		 * @method ScrollMagic.Scene#enabled
		 *
		 * @example
		 * // get the current value
		 * var enabled = scene.enabled();
		 *
		 * // disable the scene
		 * scene.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
		 * @returns {(boolean|Scene)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !! newState;
				Scene.update(true);
			}
			return Scene;
		};

		/**
		 * Remove the scene from the controller.  
		 * This is the equivalent to `Controller.removeScene(scene)`.
		 * The scene will not be updated anymore until you readd it to a controller.
		 * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
		 * @method ScrollMagic.Scene#remove
		 * @example
		 * // remove the scene from its controller
		 * scene.remove();
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.remove = function () {
			if (_controller) {
				_controller.info("container").removeEventListener('resize', onContainerResize);
				var tmpParent = _controller;
				_controller = undefined;
				tmpParent.removeScene(Scene);
				Scene.trigger("remove");
				log(3, "removed " + NAMESPACE + " from controller");
			}
			return Scene;
		};

		/**
		 * Destroy the scene and everything.
		 * @method ScrollMagic.Scene#destroy
		 * @example
		 * // destroy the scene without resetting the pin and tween to their initial positions
		 * scene = scene.destroy();
		 *
		 * // destroy the scene and reset the pin and tween
		 * scene = scene.destroy(true);
		 *
		 * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (reset) {
			Scene.trigger("destroy", {
				reset: reset
			});
			Scene.remove();
			Scene.off("*.*");
			log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
			return null;
		};


		/**
		 * Updates the Scene to reflect the current state.  
		 * This is the equivalent to `Controller.updateScene(scene, immediately)`.  
		 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
		 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.
		 * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.  
		 * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
		 * @method ScrollMagic.Scene#update
		 * @example
		 * // update the scene on next tick
		 * scene.update();
		 *
		 * // update the scene immediately
		 * scene.update(true);
		 *
		 * @fires Scene.update
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
		 * @returns {Scene} Parent object for chaining.
		 */
		this.update = function (immediately) {
			if (_controller) {
				if (immediately) {
					if (_controller.enabled() && _enabled) {
						var
						scrollPos = _controller.info("scrollPos"),
							newProgress;

						if (_options.duration > 0) {
							newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
						} else {
							newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
						}

						Scene.trigger("update", {
							startPos: _scrollOffset.start,
							endPos: _scrollOffset.end,
							scrollPos: scrollPos
						});

						Scene.progress(newProgress);
					} else if (_pin && _state === SCENE_STATE_DURING) {
						updatePinState(true); // unpin in position
					}
				} else {
					_controller.updateScene(Scene, false);
				}
			}
			return Scene;
		};

		/**
		 * Updates dynamic scene variables like the trigger element position or the duration.
		 * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic.Controller} option `refreshInterval`.
		 * 
		 * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
		 * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
		 *
		 * @method ScrollMagic.Scene#refresh
		 * @since 1.1.0
		 * @example
		 * scene = new ScrollMagic.Scene({triggerElement: "#trigger"});
		 * 
		 * // change the position of the trigger
		 * $("#trigger").css("top", 500);
		 * // immediately let the scene know of this change
		 * scene.refresh();
		 *
		 * @fires {@link Scene.shift}, if the trigger element position or the duration changed
		 * @fires {@link Scene.change}, if the duration changed
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.refresh = function () {
			updateDuration();
			updateTriggerElementPosition();
			// update trigger element position
			return Scene;
		};

		/**
		 * **Get** or **Set** the scene's progress.  
		 * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().  
		 * The order in which the events are fired depends on the duration of the scene:
		 *  1. Scenes with `duration == 0`:  
		 *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.  
		 *  When the trigger position of the scene is passed the events are always fired in this order:  
		 *  `enter`, `start`, `progress` when scrolling forward  
		 *  and  
		 *  `progress`, `start`, `leave` when scrolling in reverse
		 *  2. Scenes with `duration > 0`:  
		 *  Scenes with a set duration have a defined start and end point.  
		 *  When scrolling past the start position of the scene it will fire these events in this order:  
		 *  `enter`, `start`, `progress`  
		 *  When continuing to scroll and passing the end point it will fire these events:  
		 *  `progress`, `end`, `leave`  
		 *  When reversing through the end point these events are fired:  
		 *  `enter`, `end`, `progress`  
		 *  And when continuing to scroll past the start position in reverse it will fire:  
		 *  `progress`, `start`, `leave`  
		 *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
		 * 
		 * In short:  
		 * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.  
		 * `start` and `end` will always trigger at their respective position.
		 * 
		 * Please review the event descriptions for details on the events and the event object that is passed to the callback.
		 * 
		 * @method ScrollMagic.Scene#progress
		 * @example
		 * // get the current scene progress
		 * var progress = scene.progress();
		 *
		 * // set new scene progress
		 * scene.progress(0.3);
		 *
		 * @fires {@link Scene.enter}, when used as setter
		 * @fires {@link Scene.start}, when used as setter
		 * @fires {@link Scene.progress}, when used as setter
		 * @fires {@link Scene.end}, when used as setter
		 * @fires {@link Scene.leave}, when used as setter
		 *
		 * @param {number} [progress] - The new progress value of the scene `[0-1]`.
		 * @returns {number} `get` -  Current scene progress.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */
		this.progress = function (progress) {
			if (!arguments.length) { // get
				return _progress;
			} else { // set
				var
				doUpdate = false,
					oldState = _state,
					scrollDirection = _controller ? _controller.info("scrollDirection") : 'PAUSED',
					reverseOrForward = _options.reverse || progress >= _progress;
				if (_options.duration === 0) {
					// zero duration scenes
					doUpdate = _progress != progress;
					_progress = progress < 1 && reverseOrForward ? 0 : 1;
					_state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
				} else {
					// scenes with start and end
					if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
						// go back to initial state
						_progress = 0;
						_state = SCENE_STATE_BEFORE;
						doUpdate = true;
					} else if (progress >= 0 && progress < 1 && reverseOrForward) {
						_progress = progress;
						_state = SCENE_STATE_DURING;
						doUpdate = true;
					} else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
						_progress = 1;
						_state = SCENE_STATE_AFTER;
						doUpdate = true;
					} else if (_state === SCENE_STATE_DURING && !reverseOrForward) {
						updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
					}
				}
				if (doUpdate) {
					// fire events
					var
					eventVars = {
						progress: _progress,
						state: _state,
						scrollDirection: scrollDirection
					},
						stateChanged = _state != oldState;

					var trigger = function (eventName) { // tmp helper to simplify code
						Scene.trigger(eventName, eventVars);
					};

					if (stateChanged) { // enter events
						if (oldState !== SCENE_STATE_DURING) {
							trigger("enter");
							trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
						}
					}
					trigger("progress");
					if (stateChanged) { // leave events
						if (_state !== SCENE_STATE_DURING) {
							trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
							trigger("leave");
						}
					}
				}

				return Scene;
			}
		};


		/**
		 * Update the start and end scrollOffset of the container.
		 * The positions reflect what the controller's scroll position will be at the start and end respectively.
		 * Is called, when:
		 *   - Scene event "change" is called with: offset, triggerHook, duration 
		 *   - scroll container event "resize" is called
		 *   - the position of the triggerElement changes
		 *   - the controller changes -> addTo()
		 * @private
		 */
		var updateScrollOffset = function () {
			_scrollOffset = {
				start: _triggerPos + _options.offset
			};
			if (_controller && _options.triggerElement) {
				// take away triggerHook portion to get relative to top
				_scrollOffset.start -= _controller.info("size") * _options.triggerHook;
			}
			_scrollOffset.end = _scrollOffset.start + _options.duration;
		};

		/**
		 * Updates the duration if set to a dynamic function.
		 * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.change}, if the duration changed
		 * @fires {@link Scene.shift}, if the duration changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateDuration = function (suppressEvents) {
			// update duration
			if (_durationUpdateMethod) {
				var varname = "duration";
				if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) { // set
					Scene.trigger("change", {
						what: varname,
						newval: _options[varname]
					});
					Scene.trigger("shift", {
						reason: varname
					});
				}
			}
		};

		/**
		 * Updates the position of the triggerElement, if present.
		 * This method is called ...
		 *  - ... when the triggerElement is changed
		 *  - ... when the scene is added to a (new) controller
		 *  - ... in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.shift}, if the position changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateTriggerElementPosition = function (suppressEvents) {
			var
			elementPos = 0,
				telem = _options.triggerElement;
			if (_controller && telem) {
				var
				controllerInfo = _controller.info(),
					containerOffset = _util.get.offset(controllerInfo.container),
					// container position is needed because element offset is returned in relation to document, not in relation to container.
					param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?
				// if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.
				while (telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
					telem = telem.parentNode;
				}

				var elementOffset = _util.get.offset(telem);

				if (!controllerInfo.isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
					containerOffset[param] -= _controller.scrollPos();
				}

				elementPos = elementOffset[param] - containerOffset[param];
			}
			var changed = elementPos != _triggerPos;
			_triggerPos = elementPos;
			if (changed && !suppressEvents) {
				Scene.trigger("shift", {
					reason: "triggerElementPosition"
				});
			}
		};

		/**
		 * Trigger a shift event, when the container is resized and the triggerHook is > 1.
		 * @private
		 */
		var onContainerResize = function (e) {
			if (_options.triggerHook > 0) {
				Scene.trigger("shift", {
					reason: "containerResize"
				});
			}
		};

		var _validate = _util.extend(SCENE_OPTIONS.validate, {
			// validation for duration handled internally for reference to private var _durationMethod
			duration: function (val) {
				if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
					// percentage value
					var perc = parseFloat(val) / 100;
					val = function () {
						return _controller ? _controller.info("size") * perc : 0;
					};
				}
				if (_util.type.Function(val)) {
					// function
					_durationUpdateMethod = val;
					try {
						val = parseFloat(_durationUpdateMethod());
					} catch (e) {
						val = -1; // will cause error below
					}
				}
				// val has to be float
				val = parseFloat(val);
				if (!_util.type.Number(val) || val < 0) {
					if (_durationUpdateMethod) {
						_durationUpdateMethod = undefined;
						throw ["Invalid return value of supplied function for option \"duration\":", val];
					} else {
						throw ["Invalid value for option \"duration\":", val];
					}
				}
				return val;
			}
		});

		/**
		 * Checks the validity of a specific or all options and reset to default if neccessary.
		 * @private
		 */
		var validateOption = function (check) {
			check = arguments.length ? [check] : Object.keys(_validate);
			check.forEach(function (optionName, key) {
				var value;
				if (_validate[optionName]) { // there is a validation method for this option
					try { // validate value
						value = _validate[optionName](_options[optionName]);
					} catch (e) { // validation failed -> reset to default
						value = DEFAULT_OPTIONS[optionName];
						var logMSG = _util.type.String(e) ? [e] : e;
						if (_util.type.Array(logMSG)) {
							logMSG[0] = "ERROR: " + logMSG[0];
							logMSG.unshift(1); // loglevel 1 for error msg
							log.apply(this, logMSG);
						} else {
							log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
						}
					} finally {
						_options[optionName] = value;
					}
				}
			});
		};

		/**
		 * Helper used by the setter/getters for scene options
		 * @private
		 */
		var changeOption = function (varname, newval) {
			var
			changed = false,
				oldval = _options[varname];
			if (_options[varname] != newval) {
				_options[varname] = newval;
				validateOption(varname); // resets to default if necessary
				changed = oldval != _options[varname];
			}
			return changed;
		};

		// generate getters/setters for all options
		var addSceneOption = function (optionName) {
			if (!Scene[optionName]) {
				Scene[optionName] = function (newVal) {
					if (!arguments.length) { // get
						return _options[optionName];
					} else {
						if (optionName === "duration") { // new duration is set, so any previously set function must be unset
							_durationUpdateMethod = undefined;
						}
						if (changeOption(optionName, newVal)) { // set
							Scene.trigger("change", {
								what: optionName,
								newval: _options[optionName]
							});
							if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) {
								Scene.trigger("shift", {
									reason: optionName
								});
							}
						}
					}
					return Scene;
				};
			}
		};

		/**
		 * **Get** or **Set** the duration option value.
		 * As a setter it also accepts a function returning a numeric value.  
		 * This is particularly useful for responsive setups.
		 *
		 * The duration is updated using the supplied function every time `Scene.refresh()` is called, which happens periodically from the controller (see ScrollMagic.Controller option `refreshInterval`).  
		 * _**NOTE:** Be aware that it's an easy way to kill performance, if you supply a function that has high CPU demand.  
		 * Even for size and position calculations it is recommended to use a variable to cache the value. (see example)  
		 * This counts double if you use the same function for multiple scenes._
		 *
		 * @method ScrollMagic.Scene#duration
		 * @example
		 * // get the current duration value
		 * var duration = scene.duration();
		 *
		 * // set a new duration
		 * scene.duration(300);
		 *
		 * // use a function to automatically adjust the duration to the window height.
		 * var durationValueCache;
		 * function getDuration () {
		 *   return durationValueCache;
		 * }
		 * function updateDuration (e) {
		 *   durationValueCache = window.innerHeight;
		 * }
		 * $(window).on("resize", updateDuration); // update the duration when the window size changes
		 * $(window).triggerHandler("resize"); // set to initial value
		 * scene.duration(getDuration); // supply duration method
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|function)} [newDuration] - The new duration of the scene.
		 * @returns {number} `get` -  Current scene duration.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the offset option value.
		 * @method ScrollMagic.Scene#offset
		 * @example
		 * // get the current offset
		 * var offset = scene.offset();
		 *
		 * // set a new offset
		 * scene.offset(100);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {number} [newOffset] - The new offset of the scene.
		 * @returns {number} `get` -  Current scene offset.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerElement option value.
		 * Does **not** fire `Scene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `Scene.refresh()`, which is automatically triggered.
		 * @method ScrollMagic.Scene#triggerElement
		 * @example
		 * // get the current triggerElement
		 * var triggerElement = scene.triggerElement();
		 *
		 * // set a new triggerElement using a selector
		 * scene.triggerElement("#trigger");
		 * // set a new triggerElement using a DOM object
		 * scene.triggerElement(document.getElementById("trigger"));
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
		 * @returns {(string|object)} `get` -  Current triggerElement.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerHook option value.
		 * @method ScrollMagic.Scene#triggerHook
		 * @example
		 * // get the current triggerHook value
		 * var triggerHook = scene.triggerHook();
		 *
		 * // set a new triggerHook using a string
		 * scene.triggerHook("onLeave");
		 * // set a new triggerHook using a number
		 * scene.triggerHook(0.7);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link Scene} parameter description for value options.
		 * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the reverse option value.
		 * @method ScrollMagic.Scene#reverse
		 * @example
		 * // get the current reverse option
		 * var reverse = scene.reverse();
		 *
		 * // set new reverse option
		 * scene.reverse(false);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {boolean} [newReverse] - The new reverse setting of the scene.
		 * @returns {boolean} `get` -  Current reverse option value.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the loglevel option value.
		 * @method ScrollMagic.Scene#loglevel
		 * @example
		 * // get the current loglevel
		 * var loglevel = scene.loglevel();
		 *
		 * // set new loglevel
		 * scene.loglevel(3);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
		 * @returns {number} `get` -  Current loglevel.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** the associated controller.
		 * @method ScrollMagic.Scene#controller
		 * @example
		 * // get the controller of a scene
		 * var controller = scene.controller();
		 *
		 * @returns {ScrollMagic.Controller} Parent controller or `undefined`
		 */
		this.controller = function () {
			return _controller;
		};

		/**
		 * **Get** the current state.
		 * @method ScrollMagic.Scene#state
		 * @example
		 * // get the current state
		 * var state = scene.state();
		 *
		 * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
		 */
		this.state = function () {
			return _state;
		};

		/**
		 * **Get** the current scroll offset for the start of the scene.  
		 * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).  
		 * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
		 * @method ScrollMagic.Scene#scrollOffset
		 * @example
		 * // get the current scroll offset for the start and end of the scene.
		 * var start = scene.scrollOffset();
		 * var end = scene.scrollOffset() + scene.duration();
		 * console.log("the scene starts at", start, "and ends at", end);
		 *
		 * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
		 */
		this.scrollOffset = function () {
			return _scrollOffset.start;
		};

		/**
		 * **Get** the trigger position of the scene (including the value of the `offset` option).  
		 * @method ScrollMagic.Scene#triggerPosition
		 * @example
		 * // get the scene's trigger position
		 * var triggerPosition = scene.triggerPosition();
		 *
		 * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
		 */
		this.triggerPosition = function () {
			var pos = _options.offset; // the offset is the basis
			if (_controller) {
				// get the trigger position
				if (_options.triggerElement) {
					// Element as trigger
					pos += _triggerPos;
				} else {
					// return the height of the triggerHook to start at the beginning
					pos += _controller.info("size") * Scene.triggerHook();
				}
			}
			return pos;
		};

		var
		_pin, _pinOptions;

		Scene.on("shift.internal", function (e) {
			var durationChanged = e.reason === "duration";
			if ((_state === SCENE_STATE_AFTER && durationChanged) || (_state === SCENE_STATE_DURING && _options.duration === 0)) {
				// if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
				updatePinState();
			}
			if (durationChanged) {
				updatePinDimensions();
			}
		}).on("progress.internal", function (e) {
			updatePinState();
		}).on("add.internal", function (e) {
			updatePinDimensions();
		}).on("destroy.internal", function (e) {
			Scene.removePin(e.reset);
		});
		/**
		 * Update the pin state.
		 * @private
		 */
		var updatePinState = function (forceUnpin) {
			if (_pin && _controller) {
				var
				containerInfo = _controller.info(),
					pinTarget = _pinOptions.spacer.firstChild; // may be pin element or another spacer, if cascading pins
				if (!forceUnpin && _state === SCENE_STATE_DURING) { // during scene or if duration is 0 and we are past the trigger
					// pinned state
					if (_util.css(pinTarget, "position") != "fixed") {
						// change state before updating pin spacer (position changes due to fixed collapsing might occur.)
						_util.css(pinTarget, {
							"position": "fixed"
						});
						// update pin spacer
						updatePinDimensions();
					}

					var
					fixedPos = _util.get.offset(_pinOptions.spacer, true),
						// get viewport position of spacer
						scrollDistance = _options.reverse || _options.duration === 0 ? containerInfo.scrollPos - _scrollOffset.start // quicker
						: Math.round(_progress * _options.duration * 10) / 10; // if no reverse and during pin the position needs to be recalculated using the progress
					// add scrollDistance
					fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;

					// set new values
					_util.css(_pinOptions.spacer.firstChild, {
						top: fixedPos.top,
						left: fixedPos.left
					});
				} else {
					// unpinned state
					var
					newCSS = {
						position: _pinOptions.inFlow ? "relative" : "absolute",
						top: 0,
						left: 0
					},
						change = _util.css(pinTarget, "position") != newCSS.position;

					if (!_pinOptions.pushFollowers) {
						newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
					} else if (_options.duration > 0) { // only concerns scenes with duration
						if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) {
							change = true; // if in after state but havent updated spacer yet (jumped past pin)
						} else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) { // before
							change = true; // jumped past fixed state upward direction
						}
					}
					// set new values
					_util.css(pinTarget, newCSS);
					if (change) {
						// update pin spacer if state changed
						updatePinDimensions();
					}
				}
			}
		};

		/**
		 * Update the pin spacer and/or element size.
		 * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
		 * @private
		 */
		var updatePinDimensions = function () {
			if (_pin && _controller && _pinOptions.inFlow) { // no spacerresize, if original position is absolute
				var
				after = (_state === SCENE_STATE_AFTER),
					before = (_state === SCENE_STATE_BEFORE),
					during = (_state === SCENE_STATE_DURING),
					vertical = _controller.info("vertical"),
					pinTarget = _pinOptions.spacer.firstChild,
					// usually the pined element but can also be another spacer (cascaded pins)
					marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")),
					css = {};

				// set new size
				// if relsize: spacer -> pin | else: pin -> spacer
				if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
					if (during) {
						_util.css(_pin, {
							"width": _util.get.width(_pinOptions.spacer)
						});
					} else {
						_util.css(_pin, {
							"width": "100%"
						});
					}
				} else {
					// minwidth is needed for cascaded pins.
					css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
					css.width = during ? css["min-width"] : "auto";
				}
				if (_pinOptions.relSize.height) {
					if (during) {
						// the only padding the spacer should ever include is the duration (if pushFollowers = true), so we need to substract that.
						_util.css(_pin, {
							"height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
						});
					} else {
						_util.css(_pin, {
							"height": "100%"
						});
					}
				} else {
					// margin is only included if it's a cascaded pin to resolve an IE9 bug
					css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse); // needed for cascading pins
					css.height = during ? css["min-height"] : "auto";
				}

				// add space for duration if pushFollowers is true
				if (_pinOptions.pushFollowers) {
					css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
					css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
				}
				_util.css(_pinOptions.spacer, css);
			}
		};

		/**
		 * Updates the Pin state (in certain scenarios)
		 * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
		 * So this function is called on resize and scroll of the document.
		 * @private
		 */
		var updatePinInContainer = function () {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
				updatePinState();
			}
		};

		/**
		 * Updates the Pin spacer size state (in certain scenarios)
		 * If container is resized during pin and relatively sized the size of the pin might need to be updated...
		 * So this function is called on resize of the container.
		 * @private
		 */
		var updateRelativePinSpacer = function () {
			if (_controller && _pin && // well, duh
			_state === SCENE_STATE_DURING && // element in pinned state?
			( // is width or height relatively sized, but not in relation to body? then we need to recalc.
			((_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode)) || (_pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode)))) {
				updatePinDimensions();
			}
		};

		/**
		 * Is called, when the mousewhel is used while over a pinned element inside a div container.
		 * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
		 * @private
		 */
		var onMousewheelOverPin = function (e) {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) { // in pin state
				e.preventDefault();
				_controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
			}
		};

		/**
		 * Pin an element for the duration of the tween.  
		 * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.  
		 * Make sure only one pin is applied to an element at the same time.
		 * An element can be pinned multiple times, but only successively.
		 * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
		 * @method ScrollMagic.Scene#setPin
		 * @example
		 * // pin element and push all following elements down by the amount of the pin duration.
		 * scene.setPin("#pin");
		 *
		 * // pin element and keeping all following elements in their place. The pinned element will move past them.
		 * scene.setPin("#pin", {pushFollowers: false});
		 *
		 * @param {(string|object)} element - A Selector targeting an element or a DOM object that is supposed to be pinned.
		 * @param {object} [settings] - settings for the pin
		 * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.  
		 Ignored, when duration is `0`.
		 * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setPin = function (element, settings) {
			var
			defaultSettings = {
				pushFollowers: true,
				spacerClass: "scrollmagic-pin-spacer"
			};
			settings = _util.extend({}, defaultSettings, settings);

			// validate Element
			element = _util.get.elements(element)[0];
			if (!element) {
				log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
				return Scene; // cancel
			} else if (_util.css(element, "position") === "fixed") {
				log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
				return Scene; // cancel
			}

			if (_pin) { // preexisting pin?
				if (_pin === element) {
					// same pin we already have -> do nothing
					return Scene; // cancel
				} else {
					// kill old pin
					Scene.removePin();
				}

			}
			_pin = element;

			var
			parentDisplay = _pin.parentNode.style.display,
				boundsParams = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];

			_pin.parentNode.style.display = 'none'; // hack start to force css to return stylesheet values instead of calculated px values.
			var
			inFlow = _util.css(_pin, "position") != "absolute",
				pinCSS = _util.css(_pin, boundsParams.concat(["display"])),
				sizeCSS = _util.css(_pin, ["width", "height"]);
			_pin.parentNode.style.display = parentDisplay; // hack end.
			if (!inFlow && settings.pushFollowers) {
				log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
				settings.pushFollowers = false;
			}
			window.setTimeout(function () { // wait until all finished, because with responsive duration it will only be set after scene is added to controller
				if (_pin && _options.duration === 0 && settings.pushFollowers) {
					log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
				}
			}, 0);

			// create spacer and insert
			var
			spacer = _pin.parentNode.insertBefore(document.createElement('div'), _pin),
				spacerCSS = _util.extend(pinCSS, {
					position: inFlow ? "relative" : "absolute",
					boxSizing: "content-box",
					mozBoxSizing: "content-box",
					webkitBoxSizing: "content-box"
				});

			if (!inFlow) { // copy size if positioned absolutely, to work for bottom/right positioned elements.
				_util.extend(spacerCSS, _util.css(_pin, ["width", "height"]));
			}

			_util.css(spacer, spacerCSS);
			spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");
			_util.addClass(spacer, settings.spacerClass);

			// set the pin Options
			_pinOptions = {
				spacer: spacer,
				relSize: { // save if size is defined using % values. if so, handle spacer resize differently...
					width: sizeCSS.width.slice(-1) === "%",
					height: sizeCSS.height.slice(-1) === "%",
					autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
				},
				pushFollowers: settings.pushFollowers,
				inFlow: inFlow,
				// stores if the element takes up space in the document flow
			};

			if (!_pin.___origStyle) {
				_pin.___origStyle = {};
				var
				pinInlineCSS = _pin.style,
					copyStyles = boundsParams.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
				copyStyles.forEach(function (val) {
					_pin.___origStyle[val] = pinInlineCSS[val] || "";
				});
			}

			// if relative size, transfer it to spacer and make pin calculate it...
			if (_pinOptions.relSize.width) {
				_util.css(spacer, {
					width: sizeCSS.width
				});
			}
			if (_pinOptions.relSize.height) {
				_util.css(spacer, {
					height: sizeCSS.height
				});
			}

			// now place the pin element inside the spacer	
			spacer.appendChild(_pin);
			// and set new css
			_util.css(_pin, {
				position: inFlow ? "relative" : "absolute",
				margin: "auto",
				top: "auto",
				left: "auto",
				bottom: "auto",
				right: "auto"
			});

			if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
				_util.css(_pin, {
					boxSizing: "border-box",
					mozBoxSizing: "border-box",
					webkitBoxSizing: "border-box"
				});
			}

			// add listener to document to update pin position in case controller is not the document.
			window.addEventListener('scroll', updatePinInContainer);
			window.addEventListener('resize', updatePinInContainer);
			window.addEventListener('resize', updateRelativePinSpacer);
			// add mousewheel listener to catch scrolls over fixed elements
			_pin.addEventListener("mousewheel", onMousewheelOverPin);
			_pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);

			log(3, "added pin");

			// finally update the pin to init
			updatePinState();

			return Scene;
		};

		/**
		 * Remove the pin from the scene.
		 * @method ScrollMagic.Scene#removePin
		 * @example
		 * // remove the pin from the scene without resetting it (the spacer is not removed)
		 * scene.removePin();
		 *
		 * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
		 * scene.removePin(true);
		 *
		 * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removePin = function (reset) {
			if (_pin) {
				if (_state === SCENE_STATE_DURING) {
					updatePinState(true); // force unpin at position
				}
				if (reset || !_controller) { // if there's no controller no progress was made anyway...
					var pinTarget = _pinOptions.spacer.firstChild; // usually the pin element, but may be another spacer (cascaded pins)...
					if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // copy margins to child spacer
						var
						style = _pinOptions.spacer.style,
							values = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
						margins = {};
						values.forEach(function (val) {
							margins[val] = style[val] || "";
						});
						_util.css(pinTarget, margins);
					}
					_pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);
					_pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
					if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // if it's the last pin for this element -> restore inline styles
						// TODO: only correctly set for first pin (when cascading) - how to fix?
						_util.css(_pin, _pin.___origStyle);
						delete _pin.___origStyle;
					}
				}
				window.removeEventListener('scroll', updatePinInContainer);
				window.removeEventListener('resize', updatePinInContainer);
				window.removeEventListener('resize', updateRelativePinSpacer);
				_pin.removeEventListener("mousewheel", onMousewheelOverPin);
				_pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);
				_pin = undefined;
				log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
			}
			return Scene;
		};


		var
		_cssClasses, _cssClassElems = [];

		Scene.on("destroy.internal", function (e) {
			Scene.removeClassToggle(e.reset);
		});
		/**
		 * Define a css class modification while the scene is active.  
		 * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
		 * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
		 * @method ScrollMagic.Scene#setClassToggle
		 * @example
		 * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
		 * scene.setClassToggle("#my-elem", "myclass");
		 *
		 * // add multiple classes to multiple elements defined by the selector '.classChange'
		 * scene.setClassToggle(".classChange", "class1 class2 class3");
		 *
		 * @param {(string|object)} element - A Selector targeting one or more elements or a DOM object that is supposed to be modified.
		 * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setClassToggle = function (element, classes) {
			var elems = _util.get.elements(element);
			if (elems.length === 0 || !_util.type.String(classes)) {
				log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
				return Scene;
			}
			if (_cssClassElems.length > 0) {
				// remove old ones
				Scene.removeClassToggle();
			}
			_cssClasses = classes;
			_cssClassElems = elems;
			Scene.on("enter.internal_class leave.internal_class", function (e) {
				var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;
				_cssClassElems.forEach(function (elem, key) {
					toggle(elem, _cssClasses);
				});
			});
			return Scene;
		};

		/**
		 * Remove the class binding from the scene.
		 * @method ScrollMagic.Scene#removeClassToggle
		 * @example
		 * // remove class binding from the scene without reset
		 * scene.removeClassToggle();
		 *
		 * // remove class binding and remove the changes it caused
		 * scene.removeClassToggle(true);
		 *
		 * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removeClassToggle = function (reset) {
			if (reset) {
				_cssClassElems.forEach(function (elem, key) {
					_util.removeClass(elem, _cssClasses);
				});
			}
			Scene.off("start.internal_class end.internal_class");
			_cssClasses = undefined;
			_cssClassElems = [];
			return Scene;
		};

		// INIT
		construct();
		return Scene;
	};

	// store pagewide scene options
	var SCENE_OPTIONS = {
		defaults: {
			duration: 0,
			offset: 0,
			triggerElement: undefined,
			triggerHook: 0.5,
			reverse: true,
			loglevel: 2
		},
		validate: {
			offset: function (val) {
				val = parseFloat(val);
				if (!_util.type.Number(val)) {
					throw ["Invalid value for option \"offset\":", val];
				}
				return val;
			},
			triggerElement: function (val) {
				val = val || undefined;
				if (val) {
					var elem = _util.get.elements(val)[0];
					if (elem) {
						val = elem;
					} else {
						throw ["Element defined in option \"triggerElement\" was not found:", val];
					}
				}
				return val;
			},
			triggerHook: function (val) {
				var translate = {
					"onCenter": 0.5,
					"onEnter": 1,
					"onLeave": 0
				};
				if (_util.type.Number(val)) {
					val = Math.max(0, Math.min(parseFloat(val), 1)); //  make sure its betweeen 0 and 1
				} else if (val in translate) {
					val = translate[val];
				} else {
					throw ["Invalid value for option \"triggerHook\": ", val];
				}
				return val;
			},
			reverse: function (val) {
				return !!val; // force boolean
			},
			loglevel: function (val) {
				val = parseInt(val);
				if (!_util.type.Number(val) || val < 0 || val > 3) {
					throw ["Invalid value for option \"loglevel\":", val];
				}
				return val;
			}
		},
		// holder for  validation methods. duration validation is handled in 'getters-setters.js'
		shifts: ["duration", "offset", "triggerHook"],
		// list of options that trigger a `shift` event
	};
/*
 * method used to add an option to ScrollMagic Scenes.
 * TODO: DOC (private for dev)
 */
	ScrollMagic.Scene.addOption = function (name, defaultValue, validationCallback, shifts) {
		if (!(name in SCENE_OPTIONS.defaults)) {
			SCENE_OPTIONS.defaults[name] = defaultValue;
			SCENE_OPTIONS.validate[name] = validationCallback;
			if (shifts) {
				SCENE_OPTIONS.shifts.push(name);
			}
		} else {
			ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
		}
	};
	// instance extension function for plugins
	// TODO: DOC (private for dev)
	ScrollMagic.Scene.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Scene = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Scene, oldClass); // copy properties
		ScrollMagic.Scene.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene; // restore constructor
	};


	/**
	 * TODO: DOCS (private for dev)
	 * @class
	 * @private
	 */

	ScrollMagic.Event = function (type, namespace, target, vars) {
		vars = vars || {};
		for (var key in vars) {
			this[key] = vars[key];
		}
		this.type = type;
		this.target = this.currentTarget = target;
		this.namespace = namespace || '';
		this.timeStamp = this.timestamp = Date.now();
		return this;
	};

/*
 * TODO: DOCS (private for dev)
 */

	var _util = ScrollMagic._util = (function (window) {
		var U = {},
			i;

		/**
		 * ------------------------------
		 * internal helpers
		 * ------------------------------
		 */

		// parse float and fall back to 0.
		var floatval = function (number) {
			return parseFloat(number) || 0;
		};
		// get current style IE safe (otherwise IE would return calculated values for 'auto')
		var _getComputedStyle = function (elem) {
			return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
		};

		// get element dimension (width or height)
		var _dimension = function (which, elem, outer, includeMargin) {
			elem = (elem === document) ? window : elem;
			if (elem === window) {
				includeMargin = false;
			} else if (!_type.DomElement(elem)) {
				return 0;
			}
			which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
			var dimension = (outer ? elem['offset' + which] || elem['outer' + which] : elem['client' + which] || elem['inner' + which]) || 0;
			if (outer && includeMargin) {
				var style = _getComputedStyle(elem);
				dimension += which === 'Height' ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
			}
			return dimension;
		};
		// converts 'margin-top' into 'marginTop'
		var _camelCase = function (str) {
			return str.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, function (g) {
				return g[1].toUpperCase();
			});
		};

		/**
		 * ------------------------------
		 * external helpers
		 * ------------------------------
		 */

		// extend obj – same as jQuery.extend({}, objA, objB)
		U.extend = function (obj) {
			obj = obj || {};
			for (i = 1; i < arguments.length; i++) {
				if (!arguments[i]) {
					continue;
				}
				for (var key in arguments[i]) {
					if (arguments[i].hasOwnProperty(key)) {
						obj[key] = arguments[i][key];
					}
				}
			}
			return obj;
		};

		// check if a css display type results in margin-collapse or not
		U.isMarginCollapseType = function (str) {
			return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
		};

		// implementation of requestAnimationFrame
		// based on https://gist.github.com/paulirish/1579671
		var
		lastTime = 0,
			vendors = ['ms', 'moz', 'webkit', 'o'];
		var _requestAnimationFrame = window.requestAnimationFrame;
		var _cancelAnimationFrame = window.cancelAnimationFrame;
		// try vendor prefixes if the above doesn't work
		for (i = 0; !_requestAnimationFrame && i < vendors.length; ++i) {
			_requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
			_cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
		}

		// fallbacks
		if (!_requestAnimationFrame) {
			_requestAnimationFrame = function (callback) {
				var
				currTime = new Date().getTime(),
					timeToCall = Math.max(0, 16 - (currTime - lastTime)),
					id = window.setTimeout(function () {
						callback(currTime + timeToCall);
					}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}
		if (!_cancelAnimationFrame) {
			_cancelAnimationFrame = function (id) {
				window.clearTimeout(id);
			};
		}
		U.rAF = _requestAnimationFrame.bind(window);
		U.cAF = _cancelAnimationFrame.bind(window);

		var
		loglevels = ["error", "warn", "log"],
			console = window.console || {};

		console.log = console.log ||
		function () {}; // no console log, well - do nothing then...
		// make sure methods for all levels exist.
		for (i = 0; i < loglevels.length; i++) {
			var method = loglevels[i];
			if (!console[method]) {
				console[method] = console.log; // prefer .log over nothing
			}
		}
		U.log = function (loglevel) {
			if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
			var now = new Date(),
				time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3),
				method = loglevels[loglevel - 1],
				args = Array.prototype.splice.call(arguments, 1),
				func = Function.prototype.bind.call(console[method], console);
			args.unshift(time);
			func.apply(console, args);
		};

		/**
		 * ------------------------------
		 * type testing
		 * ------------------------------
		 */

		var _type = U.type = function (v) {
			return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
		};
		_type.String = function (v) {
			return _type(v) === 'string';
		};
		_type.Function = function (v) {
			return _type(v) === 'function';
		};
		_type.Array = function (v) {
			return Array.isArray(v);
		};
		_type.Number = function (v) {
			return !_type.Array(v) && (v - parseFloat(v) + 1) >= 0;
		};
		_type.DomElement = function (o) {
			return (
			typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
			o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string");
		};

		/**
		 * ------------------------------
		 * DOM Element info
		 * ------------------------------
		 */
		// always returns a list of matching DOM elements, from a selector, a DOM element or an list of elements or even an array of selectors
		var _get = U.get = {};
		_get.elements = function (selector) {
			var arr = [];
			if (_type.String(selector)) {
				try {
					selector = document.querySelectorAll(selector);
				} catch (e) { // invalid selector
					return arr;
				}
			}
			if (_type(selector) === 'nodelist' || _type.Array(selector)) {
				for (var i = 0, ref = arr.length = selector.length; i < ref; i++) { // list of elements
					var elem = selector[i];
					arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem); // if not an element, try to resolve recursively
				}
			} else if (_type.DomElement(selector) || selector === document || selector === window) {
				arr = [selector]; // only the element
			}
			return arr;
		};
		// get scroll top value
		_get.scrollTop = function (elem) {
			return (elem && typeof elem.scrollTop === 'number') ? elem.scrollTop : window.pageYOffset || 0;
		};
		// get scroll left value
		_get.scrollLeft = function (elem) {
			return (elem && typeof elem.scrollLeft === 'number') ? elem.scrollLeft : window.pageXOffset || 0;
		};
		// get element height
		_get.width = function (elem, outer, includeMargin) {
			return _dimension('width', elem, outer, includeMargin);
		};
		// get element width
		_get.height = function (elem, outer, includeMargin) {
			return _dimension('height', elem, outer, includeMargin);
		};

		// get element position (optionally relative to viewport)
		_get.offset = function (elem, relativeToViewport) {
			var offset = {
				top: 0,
				left: 0
			};
			if (elem && elem.getBoundingClientRect) { // check if available
				var rect = elem.getBoundingClientRect();
				offset.top = rect.top;
				offset.left = rect.left;
				if (!relativeToViewport) { // clientRect is by default relative to viewport...
					offset.top += _get.scrollTop();
					offset.left += _get.scrollLeft();
				}
			}
			return offset;
		};

		/**
		 * ------------------------------
		 * DOM Element manipulation
		 * ------------------------------
		 */

		U.addClass = function (elem, classname) {
			if (classname) {
				if (elem.classList) elem.classList.add(classname);
				else elem.className += ' ' + classname;
			}
		};
		U.removeClass = function (elem, classname) {
			if (classname) {
				if (elem.classList) elem.classList.remove(classname);
				else elem.className = elem.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		};
		// if options is string -> returns css value
		// if options is array -> returns object with css value pairs
		// if options is object -> set new css values
		U.css = function (elem, options) {
			if (_type.String(options)) {
				return _getComputedStyle(elem)[_camelCase(options)];
			} else if (_type.Array(options)) {
				var
				obj = {},
					style = _getComputedStyle(elem);
				options.forEach(function (option, key) {
					obj[option] = style[_camelCase(option)];
				});
				return obj;
			} else {
				for (var option in options) {
					var val = options[option];
					if (val == parseFloat(val)) { // assume pixel for seemingly numerical values
						val += 'px';
					}
					elem.style[_camelCase(option)] = val;
				}
			}
		};

		return U;
	}(window || {}));

	ScrollMagic.Scene.prototype.addIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}

	return ScrollMagic;
}));

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//Переключение карт на главной
var togglerUsman = document.querySelector('.js-toggler-usman');
var togglerOtradnoe = document.querySelector('.js-toggler-otradnoe');
var mapUsman = document.querySelector('.map__usman');
var mapOtradnoe = document.querySelector('.map__otradnoe');

if (togglerUsman) {
    togglerUsman.onclick = function () {
        mapUsman.hidden = false;
        mapOtradnoe.hidden = true;
        togglerUsman.classList.remove('toggler-usman-unactive');
        togglerUsman.classList.add('toggler-usman-active');
        togglerOtradnoe.classList.remove('toggler-otradnoe-active');
        togglerOtradnoe.classList.add('toggler-otradnoe-unactive');
    };
    togglerOtradnoe.onclick = function () {
        mapOtradnoe.hidden = false;
        mapUsman.hidden = true;
        togglerUsman.classList.remove('toggler-usman-active');
        togglerUsman.classList.add('toggler-usman-unactive');
        togglerOtradnoe.classList.remove('toggler-otradnoe-unactive');
        togglerOtradnoe.classList.add('toggler-otradnoe-active');
    };
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//адаптация под экраны меньше 639px
if (window.matchMedia('(max-width: 639px)').matches) {
    var homepage = document.querySelector('.homepage');
    var innerpage = document.querySelector('.innerpage');
    var homepageHeader = document.querySelector('.intro__container');
    var menu = document.querySelector('.menu');
    var menuHeaderButton = document.querySelector('.header-menu');
    var menuButtons = document.querySelectorAll('.button-menu');
    var menuBar = document.querySelectorAll('.menu-bar');
    var menuBarThreshold = document.querySelector('.menu-bar__threshold');
    var menuBarDivider = document.querySelector('.menu-bar__divider');
    var menuBarLogo = document.querySelector('.menu-bar__logo');
    var introContainer = document.querySelector('.intro__container');
    var programIntro = document.querySelector('.programm__intro');
    var programList = document.querySelector('.program__list');
    var reviewsViewAll = document.querySelector('.reviews__all');
    var reviewsSection = document.querySelector('.reviews');
    var counterSite = document.querySelector('.footer__counter');
    var footerBottom = document.querySelector('.footer__bottom');
    var menuBarFixed = void 0;

    if (homepage) {
        introContainer.appendChild(menuBarThreshold);
        introContainer.appendChild(menuBarLogo);
        programList.parentNode.insertBefore(programList, programIntro);
        reviewsSection.appendChild(reviewsViewAll);
        window.addEventListener('scroll', function () {
            if (window.pageYOffset >= homepageHeader.offsetHeight) {
                menuHeaderButton.classList.add('header-menu-fixed');
            } else {
                menuHeaderButton.classList.remove('header-menu-fixed');
            }
        });
    }

    if (innerpage) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset >= document.documentElement.clientHeight) {
                menuHeaderButton.classList.add('header-menu-fixed');
            } else {
                menuHeaderButton.classList.remove('header-menu-fixed');
            }
        });
    }

    menuBarThreshold.appendChild(menuBarDivider);
    footerBottom.appendChild(counterSite);
    menuButtons.forEach(function (element) {
        element.addEventListener('click', function () {
            if (!menu.classList.contains('menu-opened')) {
                menuBarLogo.classList.add('menu-bar__logo_fixed');
                menuBarThreshold.classList.add('menu-bar__threshold_fixed');
            } else {
                menuBarLogo.classList.remove('menu-bar__logo_fixed');
                menuBarThreshold.classList.remove('menu-bar__threshold_fixed');
            }
        });
    });
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//Кнопка "Наверх"
var toTop = document.querySelector('.to-top');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > document.documentElement.clientHeight) {
        toTop.hidden = false;
    } else {
        toTop.hidden = true;
    }
});

function scrollToTop(scrollDuration) {
    var scrollDuration = 1000;
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function () {
        if (window.scrollY != 0) {
            window.scrollBy(0, scrollStep);
        } else clearInterval(scrollInterval);
    }, 15);
};

toTop.addEventListener('click', scrollToTop);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//Фиксация и стилизация синего блока меню
var homepage = document.querySelector('.homepage');
var innerpage = document.querySelector('.innerpage');
var menuBar = document.querySelector('.menu-bar');
var menuBarButton = document.querySelector('.menu-bar-button');
var menuBarLogo = document.querySelector('.menu-bar__logo');
var menu = document.querySelector('.menu');
var menuButtons = document.querySelectorAll('.button-menu');
var menuShow = document.querySelectorAll('.button-menu__show');
var menuHide = document.querySelectorAll('.button-menu__hide');
var menuHeaderButton = document.querySelector('.header-menu');
var menuHeaderDecor = document.querySelector('.header-menu__decor');
var homepageHeader = document.querySelector('.intro__container');
var menuBarFixed;

if (homepage) {
    //фиксация меню при прокрутке
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= homepageHeader.offsetHeight) {
            if (!window.matchMedia('(max-width: 639px)').matches) {
                menuBar.classList.add('menu-bar-fixed');
            }
            return menuBarFixed = true;
        } else {
            if (!menu.classList.contains('menu-opened')) {
                menuBar.classList.remove('menu-bar-fixed');
                return menuBarFixed = false;
            }
        }
    });
    //обработка переключения меню кнопками
    menuButtons.forEach(function (element) {
        element.addEventListener('click', function () {
            if (!menu.classList.contains('menu-opened')) {
                menu.classList.add('menu-opened');
                menu.classList.remove('hidden');
                menuButtons.forEach(function (element) {
                    element.classList.add('button-menu-opened');
                });
                menuBar.classList.add('menu-bar-fixed');
            } else {
                menu.classList.remove('menu-opened');
                menu.classList.add('hidden');
                menuButtons.forEach(function (element) {
                    element.classList.remove('button-menu-opened');
                });
                if (!menuBarFixed) {
                    menuBar.classList.remove('menu-bar-fixed');
                }
            }
        });
    });
}

if (innerpage) {
    //фиксация меню при прокрутке
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= document.documentElement.clientHeight) {
            menuBarLogo.classList.remove('hidden');
            menuBarButton.classList.remove('hidden');
            menuBar.classList.add('menu-bar-fixed');
            return menuBarFixed = true;
        } else {
            if (!menu.classList.contains('menu-opened')) {
                menuBar.classList.remove('menu-bar-fixed');
                menuBarLogo.classList.add('hidden');
                menuBarButton.classList.add('hidden');
                return menuBarFixed = false;
            }
        }
    });
    //обработка переключения меню кнопками
    menuButtons.forEach(function (element) {
        element.addEventListener('click', function () {
            if (!menu.classList.contains('menu-opened')) {
                menu.classList.add('menu-opened');
                menu.classList.remove('hidden');
                menuButtons.forEach(function (element) {
                    element.classList.add('button-menu-opened');
                });
                menuBar.classList.add('menu-bar-fixed');
                menuBarLogo.classList.remove('hidden');
                menuBarButton.classList.remove('hidden');
            } else {
                menu.classList.remove('menu-opened');
                menu.classList.add('hidden');
                menuButtons.forEach(function (element) {
                    element.classList.remove('button-menu-opened');
                });
                if (!menuBarFixed) {
                    menuBar.classList.remove('menu-bar-fixed');
                    menuBarLogo.classList.add('hidden');
                    menuBarButton.classList.add('hidden');
                }
            }
        });
    });
}

/*
 else {
        if (!menu.classList.contains('menu-opened')) {
            menuBar.classList.remove('menu-bar-fixed');         
        }   
        
(!window.matchMedia('(max-width: 639px)').matches) {
 }
*/

/*
//Работа меню
menuButtons.forEach(element => {    
    element.addEventListener('click', function() {
        menu.classList.toggle('menu-opened');
        menuButtons.forEach(element => {
            element.classList.toggle('button-menu-opened');
        });
        if (menu.classList.contains('menu-opened')) {
            menuShow.forEach(element => {
                element.hidden = true;
            });
            menuHide.forEach(element => {
                element.hidden = false;
            });
            if (window.matchMedia('(max-width: 639px)').matches) {
                menuHeaderButton.hidden = false;
                menuBarLogo.style.position = 'fixed';
                menuBarThreshold.style.position = 'fixed';
            }
            menuBar.classList.add('menu-bar-fixed');
            menuHeaderDecor.hidden = true;
        } else {
            menuShow.forEach(element => {
                element.hidden = false;
            });
            menuHide.forEach(element => {
                element.hidden = true;
            });
            menuHeaderButton.hidden = false;          
            if ((window.pageYOffset < homepageHeader.offsetHeight) || (window.matchMedia('(max-width: 639px)').matches)) {
                menuBar.classList.remove('menu-bar-fixed');
            }
            if (window.matchMedia('(max-width: 639px)').matches) {
                menuBarLogo.style.position = 'absolute';
                menuBarThreshold.style.position = 'absolute';
            }
            menuHeaderDecor.hidden = false;
        }
    });
});
*/

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Popup просмотра фото
var category = document.querySelector('.category');
var photos = document.querySelectorAll('.play-btn');

if (category) {
    var popup = document.querySelector('.popup');
    var photoControls = document.querySelectorAll('.photo-popup__control');
    var photoImage = document.querySelector('.photo-popup__img');
    photos.forEach(function (element) {
        element.addEventListener('click', function () {
            popup.classList.remove('hidden');
        });
    });
    if (window.matchMedia('(max-width: 639px)').matches) {
        photoImage.appendChild(photoControls);
    }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var popup = document.querySelector('.popup');

//Кнопка "Закрыть"
var close = document.querySelector('.close-btn');
if (close) {
    close.addEventListener('click', function () {
        popup.classList.add('hidden');
    });
}

//закрыть по оверлею
if (popup) {
    popup.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.classList.add('hidden');
        }
    });
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(10);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(2);

var _index4 = _interopRequireDefault(_index3);

var _boot = __webpack_require__(65);

var _boot2 = _interopRequireDefault(_boot);

var _alert = __webpack_require__(66);

var _alert2 = _interopRequireDefault(_alert);

var _core = __webpack_require__(67);

var _core2 = _interopRequireDefault(_core);

var _cover = __webpack_require__(68);

var _cover2 = _interopRequireDefault(_cover);

var _formCustom = __webpack_require__(69);

var _formCustom2 = _interopRequireDefault(_formCustom);

var _gif = __webpack_require__(70);

var _gif2 = _interopRequireDefault(_gif);

var _grid = __webpack_require__(71);

var _grid2 = _interopRequireDefault(_grid);

var _heightMatch = __webpack_require__(72);

var _heightMatch2 = _interopRequireDefault(_heightMatch);

var _heightViewport = __webpack_require__(73);

var _heightViewport2 = _interopRequireDefault(_heightViewport);

var _icon = __webpack_require__(74);

var _icon2 = _interopRequireDefault(_icon);

var _leader = __webpack_require__(91);

var _leader2 = _interopRequireDefault(_leader);

var _margin = __webpack_require__(92);

var _margin2 = _interopRequireDefault(_margin);

var _modal = __webpack_require__(93);

var _modal2 = _interopRequireDefault(_modal);

var _responsive = __webpack_require__(94);

var _responsive2 = _interopRequireDefault(_responsive);

var _scroll = __webpack_require__(95);

var _scroll2 = _interopRequireDefault(_scroll);

var _scrollspy = __webpack_require__(96);

var _scrollspy2 = _interopRequireDefault(_scrollspy);

var _sticky = __webpack_require__(97);

var _sticky2 = _interopRequireDefault(_sticky);

var _svg = __webpack_require__(98);

var _svg2 = _interopRequireDefault(_svg);

var _switcher = __webpack_require__(99);

var _switcher2 = _interopRequireDefault(_switcher);

var _tab = __webpack_require__(100);

var _tab2 = _interopRequireDefault(_tab);

var _toggle = __webpack_require__(101);

var _toggle2 = _interopRequireDefault(_toggle);

var _video = __webpack_require__(102);

var _video2 = _interopRequireDefault(_video);

var _countdown = __webpack_require__(103);

var _countdown2 = _interopRequireDefault(_countdown);

var _lightbox = __webpack_require__(104);

var _lightbox2 = _interopRequireDefault(_lightbox);

var _notification = __webpack_require__(111);

var _notification2 = _interopRequireDefault(_notification);

var _slider = __webpack_require__(112);

var _slider2 = _interopRequireDefault(_slider);

var _slideshow = __webpack_require__(114);

var _slideshow2 = _interopRequireDefault(_slideshow);

var _tooltip = __webpack_require__(118);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _uikitIcons = __webpack_require__(119);

var _uikitIcons2 = _interopRequireDefault(_uikitIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* load uikit */

// import Sortable from 'uikit/src/js/components/sortable';

// import Parallax from 'uikit/src/js/components/parallax';

// import GridParallax from 'uikit/src/js/components/grid-parallax';

// import Nav from 'uikit/src/js/core/nav';
// import Navbar from 'uikit/src/js/core/navbar';
// import Offcanvas from 'uikit/src/js/core/offcanvas';


/* import core components */
// import Accordion from 'uikit/src/js/core/accordion';
_index2.default.version = 1.0;
// import Upload from 'uikit/src/js/components/upload';


/* import components */

// import ScrollspyNav from 'uikit/src/js/core/scrollspy-nav';

// import Drop from 'uikit/src/js/core/drop';
// import Dropdown from 'uikit/src/js/core/dropdown';
/* import core */

(0, _index4.default)(_index2.default);
(0, _boot2.default)(_index2.default);
// core functionality
_index2.default.use(_core2.default);

/* enable core components */
if (typeof _toggle2.default != 'undefined') _index2.default.use(_toggle2.default);
if (typeof Accordion != 'undefined') _index2.default.use(Accordion);
if (typeof _alert2.default != 'undefined') _index2.default.use(_alert2.default);
if (typeof _video2.default != 'undefined') _index2.default.use(_video2.default);
if (typeof _cover2.default != 'undefined') _index2.default.use(_cover2.default);
if (typeof Drop != 'undefined') _index2.default.use(Drop);
if (typeof Dropdown != 'undefined') _index2.default.use(Dropdown);
if (typeof _formCustom2.default != 'undefined') _index2.default.use(_formCustom2.default);
if (typeof _heightMatch2.default != 'undefined') _index2.default.use(_heightMatch2.default);
if (typeof _heightViewport2.default != 'undefined') _index2.default.use(_heightViewport2.default);
if (typeof _margin2.default != 'undefined') _index2.default.use(_margin2.default);
if (typeof _gif2.default != 'undefined') _index2.default.use(_gif2.default);
if (typeof _grid2.default != 'undefined') _index2.default.use(_grid2.default);
if (typeof _leader2.default != 'undefined') _index2.default.use(_leader2.default);
if (typeof _modal2.default != 'undefined') _index2.default.use(_modal2.default);
if (typeof Nav != 'undefined') _index2.default.use(Nav);
if (typeof Navbar != 'undefined') _index2.default.use(Navbar);
if (typeof Offcanvas != 'undefined') _index2.default.use(Offcanvas);
if (typeof _responsive2.default != 'undefined') _index2.default.use(_responsive2.default);
if (typeof _scroll2.default != 'undefined') _index2.default.use(_scroll2.default);
if (typeof _scrollspy2.default != 'undefined') _index2.default.use(_scrollspy2.default);
if (typeof ScrollspyNav != 'undefined') _index2.default.use(ScrollspyNav);
if (typeof _sticky2.default != 'undefined') _index2.default.use(_sticky2.default);
if (typeof _svg2.default != 'undefined') _index2.default.use(_svg2.default);
if (typeof _icon2.default != 'undefined') _index2.default.use(_icon2.default);
if (typeof _switcher2.default != 'undefined') _index2.default.use(_switcher2.default);
if (typeof _tab2.default != 'undefined') _index2.default.use(_tab2.default);

/* enable components */
if (typeof _countdown2.default != 'undefined') _index2.default.use(_countdown2.default);
if (typeof GridParallax != 'undefined') _index2.default.use(GridParallax);
if (typeof _lightbox2.default != 'undefined') _index2.default.use(_lightbox2.default);
if (typeof _notification2.default != 'undefined') _index2.default.use(_notification2.default);
if (typeof Parallax != 'undefined') _index2.default.use(Parallax);
if (typeof _slider2.default != 'undefined') _index2.default.use(_slider2.default);
if (typeof _slideshow2.default != 'undefined') _index2.default.use(_slideshow2.default);
if (typeof Sortable != 'undefined') _index2.default.use(Sortable);
if (typeof _tooltip2.default != 'undefined') _index2.default.use(_tooltip2.default);
if (typeof Upload != 'undefined') _index2.default.use(Upload);
if (typeof _uikitIcons2.default != 'undefined') _index2.default.use(_uikitIcons2.default);

exports.default = _index2.default;

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    const DATA = UIkit.data;

    UIkit.use = function (plugin) {

        if (plugin.installed) {
            return;
        }

        plugin.call(null, this);
        plugin.installed = true;

        return this;
    };

    UIkit.mixin = function (mixin, component) {
        component = (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(component) ? UIkit.components[component] : component) || this;
        mixin = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["mergeOptions"])({}, mixin);
        mixin.mixins = component.options.mixins;
        delete component.options.mixins;
        component.options = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["mergeOptions"])(mixin, component.options);
    };

    UIkit.extend = function (options) {

        options = options || {};

        var Super = this;
        var Sub = function UIkitComponent (options) {
            this._init(options)
        };

        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.options = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["mergeOptions"])(Super.options, options);

        Sub['super'] = Super;
        Sub.extend = Super.extend;

        return Sub;
    };

    UIkit.update = function (e, element, parents = false) {

        e = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["createEvent"])(e || 'update');

        if (!element) {

            update(UIkit.instances, e);
            return;

        }

        element = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toNode"])(element);

        if (parents) {

            do {

                update(element[DATA], e);
                element = element.parentNode;

            } while (element);

        } else {

            apply(element, element => update(element[DATA], e));

        }

    };

    var container;
    Object.defineProperty(UIkit, 'container', {

        get() {
            return container || __WEBPACK_IMPORTED_MODULE_0__util_index__["doc"].body;
        },

        set(element) {
            container = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(element);
        }

    });

    function apply(node, fn) {

        if (node.nodeType !== 1) {
            return;
        }

        fn(node);
        node = node.firstElementChild;
        while (node) {
            apply(node, fn);
            node = node.nextElementSibling;
        }
    }

    function update(data, e) {

        if (!data) {
            return;
        }

        for (var name in data) {
            if (data[name]._isReady) {
                data[name]._callUpdate(e);
            }
        }

    }

});


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(53);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = self && self.setImmediate || global && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = self && self.clearImmediate || global && global.clearImmediate || this && this.clearImmediate;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15), __webpack_require__(54)))

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__(3);
/*
    Based on:
    Copyright (c) 2016 Wilson Page wilsonpage@me.com
    https://github.com/wilsonpage/fastdom
*/



const fastdom = {

    reads: [],
    writes: [],

    read(task) {
        this.reads.push(task);
        scheduleFlush();
        return task;
    },

    write(task) {
        this.writes.push(task);
        scheduleFlush();
        return task;
    },

    clear(task) {
        return remove(this.reads, task) || remove(this.writes, task);
    },

    flush() {

        runTasks(this.reads);
        runTasks(this.writes.splice(0, this.writes.length));

        this.scheduled = false;

        if (this.reads.length || this.writes.length) {
            scheduleFlush();
        }

    }

};
/* harmony export (immutable) */ __webpack_exports__["a"] = fastdom;


function scheduleFlush() {
    if (!fastdom.scheduled) {
        fastdom.scheduled = true;
        Object(__WEBPACK_IMPORTED_MODULE_0__env__["k" /* requestAnimationFrame */])(fastdom.flush.bind(fastdom));
    }
}

function runTasks(tasks) {
    var task;
    while (task = tasks.shift()) {
        task();
    }
}

function remove(array, item) {
    var index = array.indexOf(item);
    return !!~index && !!array.splice(index, 1);
}


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MouseTracker;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position__ = __webpack_require__(13);




function MouseTracker() {}

MouseTracker.prototype = {

    positions: [],
    position: null,

    init() {

        this.positions = [];
        this.position = null;

        var ticking = false;
        this.unbind = Object(__WEBPACK_IMPORTED_MODULE_1__event__["c" /* on */])(__WEBPACK_IMPORTED_MODULE_0__env__["b" /* doc */], 'mousemove', e => {

            if (ticking) {
                return;
            }

            setTimeout(() => {

                var time = Date.now(), length = this.positions.length;
                if (length && (time - this.positions[length - 1].time > 100)) {
                    this.positions.splice(0, length);
                }

                this.positions.push({time, x: e.pageX, y: e.pageY});

                if (this.positions.length > 5) {
                    this.positions.shift();
                }

                ticking = false;
            }, 5);

            ticking = true;
        });

    },

    cancel() {
        if (this.unbind) {
            this.unbind();
        }
    },

    movesTo(target) {

        if (this.positions.length < 2) {
            return false;
        }

        var p = Object(__WEBPACK_IMPORTED_MODULE_2__position__["c" /* offset */])(target),
            position = this.positions[this.positions.length - 1],
            prevPos = this.positions[0];

        if (p.left <= position.x && position.x <= p.right && p.top <= position.y && position.y <= p.bottom) {
            return false;
        }

        var points = [
            [{x: p.left, y: p.top}, {x: p.right, y: p.bottom}],
            [{x: p.right, y: p.top}, {x: p.left, y: p.bottom}]
        ];

        if (p.right <= position.x) {

        } else if (p.left >= position.x) {
            points[0].reverse();
            points[1].reverse();
        } else if (p.bottom <= position.y) {
            points[0].reverse();
        } else if (p.top >= position.y) {
            points[1].reverse();
        }

        return !!points.reduce((result, point) => {
            return result + (slope(prevPos, point[0]) < slope(position, point[0]) && slope(prevPos, point[1]) > slope(position, point[1]));
        }, 0);
    }

};

function slope(a, b) {
    return (b.y - a.y) / (b.x - a.x);
}


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeOptions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang__ = __webpack_require__(1);


var strats = {};

// concat strategy
strats.args =
strats.events =
strats.init =
strats.created =
strats.beforeConnect =
strats.connected =
strats.ready =
strats.beforeDisconnect =
strats.disconnected =
strats.destroy = function (parentVal, childVal) {

    parentVal = parentVal && !Object(__WEBPACK_IMPORTED_MODULE_0__lang__["p" /* isArray */])(parentVal) ? [parentVal] : parentVal;

    return childVal
        ? parentVal
            ? parentVal.concat(childVal)
            : Object(__WEBPACK_IMPORTED_MODULE_0__lang__["p" /* isArray */])(childVal)
                ? childVal
                : [childVal]
        : parentVal;
};

// update strategy
strats.update = function (parentVal, childVal) {
    return strats.args(parentVal, Object(__WEBPACK_IMPORTED_MODULE_0__lang__["s" /* isFunction */])(childVal) ? {read: childVal} : childVal);
};

// property strategy
strats.props = function (parentVal, childVal) {

    if (Object(__WEBPACK_IMPORTED_MODULE_0__lang__["p" /* isArray */])(childVal)) {
        childVal = childVal.reduce((value, key) => {
            value[key] = String;
            return value;
        }, {});
    }

    return strats.methods(parentVal, childVal);
};

// extend strategy
strats.computed =
strats.defaults =
strats.methods = function (parentVal, childVal) {
    return childVal
        ? parentVal
            ? Object(__WEBPACK_IMPORTED_MODULE_0__lang__["d" /* assign */])({}, parentVal, childVal)
            : childVal
        : parentVal;
};

// default strategy
var defaultStrat = function (parentVal, childVal) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__lang__["y" /* isUndefined */])(childVal) ? parentVal : childVal;
};

function mergeOptions(parent, child) {

    var options = {}, key;

    if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
            parent = mergeOptions(parent, child.mixins[i]);
        }
    }

    for (key in parent) {
        mergeKey(key);
    }

    for (key in child) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__lang__["l" /* hasOwn */])(parent, key)) {
            mergeKey(key);
        }
    }

    function mergeKey(key) {
        options[key] = (strats[key] || defaultStrat)(parent[key], child[key]);
    }

    return options;
}


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attr__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__promise__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selector__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lang__ = __webpack_require__(1);







var id = 0;

class Player {

    constructor(el) {
        this.id = ++id;
        this.el = Object(__WEBPACK_IMPORTED_MODULE_4__selector__["k" /* toNode */])(el);
    }

    isVideo() {
        return this.isYoutube() || this.isVimeo() || this.isHTML5();
    }

    isHTML5() {
        return this.el.tagName === 'VIDEO';
    }

    isIFrame() {
        return this.el.tagName === 'IFRAME';
    }

    isYoutube() {
        return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
    }

    isVimeo() {
        return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/);
    }

    enableApi() {

        if (this.ready) {
            return this.ready;
        }

        var youtube = this.isYoutube(), vimeo = this.isVimeo(), poller;

        if (youtube || vimeo) {

            return this.ready = new __WEBPACK_IMPORTED_MODULE_3__promise__["a" /* default */](resolve => {

                Object(__WEBPACK_IMPORTED_MODULE_2__event__["d" /* once */])(this.el, 'load', () => {
                    if (youtube) {
                        var listener = () => post(this.el, {event: 'listening', id: this.id});
                        poller = setInterval(listener, 100);
                        listener();
                    }
                });

                listen(data => youtube && data.id === this.id && data.event === 'onReady' || vimeo && Number(data.player_id) === this.id)
                    .then(() => {
                        resolve();
                        poller && clearInterval(poller);
                    });

                Object(__WEBPACK_IMPORTED_MODULE_1__attr__["a" /* attr */])(this.el, 'src', `${this.el.src}${Object(__WEBPACK_IMPORTED_MODULE_5__lang__["n" /* includes */])(this.el.src, '?') ? '&' : '?'}${youtube ? 'enablejsapi=1' : `api=1&player_id=${id}`}`);

            });

        }

        return __WEBPACK_IMPORTED_MODULE_3__promise__["a" /* default */].resolve();

    }

    play() {

        if (!this.isVideo()) {
            return;
        }

        if (this.isIFrame()) {
            this.enableApi().then(() => post(this.el, {func: 'playVideo', method: 'play'}));
        } else if (this.isHTML5()) {
            try {
                this.el.play();
            } catch (e) {}
        }
    }

    pause() {

        if (!this.isVideo()) {
            return;
        }

        if (this.isIFrame()) {
            this.enableApi().then(() => post(this.el, {func: 'pauseVideo', method: 'pause'}));
        } else if (this.isHTML5()) {
            this.el.pause();
        }
    }

    mute() {

        if (!this.isVideo()) {
            return;
        }

        if (this.isIFrame()) {
            this.enableApi().then(() => post(this.el, {func: 'mute', method: 'setVolume', value: 0}));
        } else if (this.isHTML5()) {
            this.el.muted = true;
            Object(__WEBPACK_IMPORTED_MODULE_1__attr__["a" /* attr */])(this.el, 'muted', '');
        }

    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;


function post(el, cmd) {
    try {
        el.contentWindow.postMessage(JSON.stringify(Object(__WEBPACK_IMPORTED_MODULE_5__lang__["d" /* assign */])({event: 'command'}, cmd)), '*');
    } catch (e) {}
}

function listen(cb) {

    return new __WEBPACK_IMPORTED_MODULE_3__promise__["a" /* default */](resolve => {

        Object(__WEBPACK_IMPORTED_MODULE_2__event__["d" /* once */])(__WEBPACK_IMPORTED_MODULE_0__env__["m" /* win */], 'message', (_, data) => resolve(data), false, ({data}) => {

            if (!data || !Object(__WEBPACK_IMPORTED_MODULE_5__lang__["x" /* isString */])(data)) {
                return;
            }

            try {
                data = JSON.parse(data);
            } catch (e) {
                return;
            }

            return data && cb(data);

        });

    });

}


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isTouch;
/* harmony export (immutable) */ __webpack_exports__["a"] = getPos;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env__ = __webpack_require__(3);
/*
    Based on:
    Copyright (c) 2010-2016 Thomas Fuchs
    http://zeptojs.com/
*/





var touch = {}, clickTimeout, swipeTimeout, tapTimeout, clicked;

function swipeDirection({x1, x2, y1, y2}) {
    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down');
}

function cancelAll() {
    clickTimeout && clearTimeout(clickTimeout);
    swipeTimeout && clearTimeout(swipeTimeout);
    tapTimeout && clearTimeout(tapTimeout);
    clickTimeout = swipeTimeout = tapTimeout = null;
    touch = {};
}

Object(__WEBPACK_IMPORTED_MODULE_0__dom__["u" /* ready */])(function () {

    Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(__WEBPACK_IMPORTED_MODULE_3__env__["b" /* doc */], 'click', () => clicked = true, true);

    Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(__WEBPACK_IMPORTED_MODULE_3__env__["b" /* doc */], __WEBPACK_IMPORTED_MODULE_3__env__["f" /* pointerDown */], function (e) {

        var target = e.target,
            {x, y} = getPos(e),
            now = Date.now();

        touch.el = 'tagName' in target ? target : target.parentNode;

        clickTimeout && clearTimeout(clickTimeout);

        touch.x1 = x;
        touch.y1 = y;

        if (touch.last && now - touch.last <= 250) {
            touch = {};
        }

        touch.last = now;

        clicked = e.button > 0;

    });

    Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(__WEBPACK_IMPORTED_MODULE_3__env__["b" /* doc */], __WEBPACK_IMPORTED_MODULE_3__env__["i" /* pointerMove */], function (e) {

        var {x, y} = getPos(e);

        touch.x2 = x;
        touch.y2 = y;
    });

    Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(__WEBPACK_IMPORTED_MODULE_3__env__["b" /* doc */], __WEBPACK_IMPORTED_MODULE_3__env__["j" /* pointerUp */], function ({type, target}) {

        // swipe
        if (touch.x2 && Math.abs(touch.x1 - touch.x2) > 30 || touch.y2 && Math.abs(touch.y1 - touch.y2) > 30) {

            swipeTimeout = setTimeout(function () {
                if (touch.el) {
                    Object(__WEBPACK_IMPORTED_MODULE_2__event__["f" /* trigger */])(touch.el, 'swipe');
                    Object(__WEBPACK_IMPORTED_MODULE_2__event__["f" /* trigger */])(touch.el, `swipe${swipeDirection(touch)}`);
                }
                touch = {};
            });

        // normal tap
        } else if ('last' in touch) {

            tapTimeout = setTimeout(() => touch.el && Object(__WEBPACK_IMPORTED_MODULE_2__event__["f" /* trigger */])(touch.el, 'tap'));

            // trigger single click after 350ms of inactivity
            if (touch.el && type !== 'mouseup' && Object(__WEBPACK_IMPORTED_MODULE_1__selector__["m" /* within */])(target, touch.el)) {
                clickTimeout = setTimeout(function () {
                    clickTimeout = null;
                    if (touch.el && !clicked) {
                        Object(__WEBPACK_IMPORTED_MODULE_2__event__["f" /* trigger */])(touch.el, 'click');
                    }
                    touch = {};
                }, 350);
            }

        } else {
            touch = {};
        }
    });

    Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(__WEBPACK_IMPORTED_MODULE_3__env__["b" /* doc */], 'touchcancel', cancelAll);
    Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(__WEBPACK_IMPORTED_MODULE_3__env__["m" /* win */], 'scroll', cancelAll);
});

var touching = false;
Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(__WEBPACK_IMPORTED_MODULE_3__env__["b" /* doc */], 'touchstart', () => touching = true, true);
Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(__WEBPACK_IMPORTED_MODULE_3__env__["b" /* doc */], 'click', () => {touching = false;});
Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(__WEBPACK_IMPORTED_MODULE_3__env__["b" /* doc */], 'touchcancel', () => touching = false, true);

function isTouch(e) {
    return touching || e.pointerType === 'touch';
}

function getPos(e) {
    var {touches, changedTouches} = e,
        {pageX: x, pageY: y} = touches && touches[0] || changedTouches && changedTouches[0] || e;
    return {x, y};
}


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.prototype._callHook = function (hook) {

        var handlers = this.$options[hook];

        if (handlers) {
            handlers.forEach(handler => handler.call(this));
        }
    };

    UIkit.prototype._callConnected = function () {

        if (this._connected) {
            return;
        }

        if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(UIkit.elements, this.$options.el)) {
            UIkit.elements.push(this.$options.el);
        }

        UIkit.instances[this._uid] = this;

        this._data = {};

        this._callHook('beforeConnect');
        this._connected = true;

        this._initEvents();
        this._initObserver();

        this._callHook('connected');

        if (!this._isReady) {
            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["ready"])(() => this._callReady());
        }

        this._callUpdate();
    };

    UIkit.prototype._callDisconnected = function () {

        if (!this._connected) {
            return;
        }

        this._callHook('beforeDisconnect');

        if (this._observer) {
            this._observer.disconnect();
            this._observer = null;
        }

        var index = UIkit.elements.indexOf(this.$options.el);

        if (~index) {
            UIkit.elements.splice(index, 1);
        }

        delete UIkit.instances[this._uid];

        this._unbindEvents();
        this._callHook('disconnected');

        this._connected = false;

    };

    UIkit.prototype._callReady = function () {

        if (this._isReady) {
            return;
        }

        this._isReady = true;
        this._callHook('ready');
        this._resetComputeds();
        this._callUpdate();
    };

    UIkit.prototype._callUpdate = function (e) {

        e = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["createEvent"])(e || 'update');

        var {type, detail} = e;

        if (type === 'update' && detail && detail.mutation) {
            this._resetComputeds();
        }

        var updates = this.$options.update, {reads, writes} = this._frames;

        if (!updates) {
            return;
        }

        updates.forEach(({read, write, events}, i) => {

            if (type !== 'update' && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(events, type)) {
                return;
            }

            if (read && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].reads, reads[i])) {
                reads[i] = __WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].read(() => {

                    var result = read.call(this, this._data, e);

                    if (result === false && write) {
                        __WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].clear(writes[i]);
                        delete writes[i];
                    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isPlainObject"])(result)) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["assign"])(this._data, result);
                    }
                    delete reads[i];
                });
            }

            if (write && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].writes, writes[i])) {
                writes[i] = __WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].write(() => {
                    write.call(this, this._data, e);
                    delete writes[i];
                });
            }

        });

    };

});


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    var uid = 0;

    UIkit.prototype.props = {};

    UIkit.prototype._init = function (options) {

        options = options || {};
        options = this.$options = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["mergeOptions"])(this.constructor.options, options, this);

        this.$el = null;
        this.$name = UIkit.prefix + Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hyphenate"])(this.$options.name);
        this.$props = {};

        this._frames = {reads: {}, writes: {}};
        this._events = [];

        this._uid = uid++;
        this._initData();
        this._initMethods();
        this._initComputeds();
        this._callHook('created');

        if (options.el) {
            this.$mount(options.el);
        }
    };

    UIkit.prototype._initData = function () {

        var {defaults, data = {}, args = [], props = {}, el} = this.$options;

        if (args.length && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isArray"])(data)) {
            data = data.slice(0, args.length).reduce((data, value, index) => {
                if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isPlainObject"])(value)) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["assign"])(data, value);
                } else {
                    data[args[index]] = value;
                }
                return data;
            }, {});
        }

        for (var key in Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["assign"])({}, defaults, props)) {
            this.$props[key] = this[key] = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hasOwn"])(data, key) && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isUndefined"])(data[key])
                ? Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["coerce"])(props[key], data[key], el)
                : defaults
                    ? defaults[key] && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isArray"])(defaults[key])
                        ? defaults[key].concat()
                        : defaults[key]
                    : null;
        }
    };

    UIkit.prototype._initMethods = function () {

        var methods = this.$options.methods;

        if (methods) {
            for (var key in methods) {
                this[key] = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["bind"])(methods[key], this);
            }
        }
    };

    UIkit.prototype._initComputeds = function () {

        var computed = this.$options.computed;

        this._resetComputeds();

        if (computed) {
            for (var key in computed) {
                registerComputed(this, key, computed[key]);
            }
        }
    };

    UIkit.prototype._resetComputeds = function () {
        this._computeds = {};
    };

    UIkit.prototype._initProps = function (props) {

        var key;

        this._resetComputeds();

        props = props || getProps(this.$options, this.$name);

        for (key in props) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isUndefined"])(props[key])) {
                this.$props[key] = props[key];
            }
        }

        var exclude = [this.$options.computed, this.$options.methods];
        for (key in this.$props) {
            if (key in props && notIn(exclude, key)) {
                this[key] = this.$props[key];
            }
        }
    };

    UIkit.prototype._initEvents = function () {

        var events = this.$options.events;

        if (events) {

            events.forEach(event => {

                if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hasOwn"])(event, 'handler')) {
                    for (var key in event) {
                        registerEvent(this, event[key], key);
                    }
                } else {
                    registerEvent(this, event);
                }

            });
        }
    };

    UIkit.prototype._unbindEvents = function () {
        this._events.forEach(unbind => unbind());
        this._events = [];
    };

    UIkit.prototype._initObserver = function () {

        var {attrs, props, el} = this.$options;
        if (this._observer || !props || !attrs || !__WEBPACK_IMPORTED_MODULE_0__util_index__["Observer"]) {
            return;
        }

        attrs = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isArray"])(attrs) ? attrs : Object.keys(props).map(key => Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hyphenate"])(key));

        this._observer = new __WEBPACK_IMPORTED_MODULE_0__util_index__["Observer"](() => {

            var data = getProps(this.$options, this.$name);
            if (attrs.some(key => !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isUndefined"])(data[key]) && data[key] !== this.$props[key])) {
                this.$reset(data);
            }

        });

        this._observer.observe(el, {attributes: true, attributeFilter: attrs.concat([this.$name, `data-${this.$name}`])});
    };

    function getProps(opts, name) {

        var data = {},
            {args = [], props = {}, el} = opts,
            key, prop;

        if (!props) {
            return data;
        }

        for (key in props) {
            prop = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hyphenate"])(key);
            if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hasAttr"])(el, prop)) {

                var value = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["coerce"])(props[key], Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(el, prop), el);

                if (prop === 'target' && (!value || Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["startsWith"])(value, '_'))) {
                    continue;
                }

                data[key] = value;
            }
        }

        var options = parseOptions(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["data"])(el, name), args);

        for (key in options) {
            prop = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["camelize"])(key);
            if (props[prop] !== undefined) {
                data[prop] = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["coerce"])(props[prop], options[key], el);
            }
        }

        return data;
    }

    function parseOptions(options, args = []) {

        try {

            return !options
                ? {}
                : Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["startsWith"])(options, '{')
                    ? JSON.parse(options)
                    : args.length && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(options, ':')
                        ? ({[args[0]]: options})
                        : options.split(';').reduce((options, option) => {
                            var [key, value] = option.split(/:(.+)/);
                            if (key && value) {
                                options[key.trim()] = value.trim();
                            }
                            return options;
                        }, {});

        } catch (e) {
            return {};
        }

    }

    function registerComputed(component, key, cb) {
        Object.defineProperty(component, key, {

            enumerable: true,

            get() {

                var {_computeds, $props, $el} = component;

                if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hasOwn"])(_computeds, key)) {
                    _computeds[key] = cb.call(component, $props, $el);
                }

                return _computeds[key];
            },

            set(value) {
                component._computeds[key] = value;
            }

        });
    }

    function registerEvent(component, event, key) {

        if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isPlainObject"])(event)) {
            event = ({name: key, handler: event});
        }

        var {name, el, handler, capture, delegate, filter, self} = event;
        el = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isFunction"])(el)
            ? el.call(component)
            : el || component.$el;

        if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isArray"])(el)) {
            el.forEach(el => registerEvent(component, Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["assign"])({}, event, {el}), key));
            return;
        }

        if (!el || filter && !filter.call(component)) {
            return;
        }

        handler = detail(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(handler) ? component[handler] : Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["bind"])(handler, component));

        if (self) {
            handler = selfFilter(handler);
        }

        component._events.push(
            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(
                el,
                name,
                !delegate
                    ? null
                    : Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(delegate)
                        ? delegate
                        : delegate.call(component),
                handler,
                capture
            )
        );

    }

    function selfFilter(handler) {
        return function selfHandler(e) {
            if (e.target === e.currentTarget || e.target === e.current) {
                return handler.call(null, e);
            }
        };
    }

    function notIn(options, key) {
        return options.every(arr => !arr || !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hasOwn"])(arr, key));
    }

    function detail(listener) {
        return e => Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isArray"])(e.detail) ? listener.apply(listener, [e].concat(e.detail)) : listener(e);
    }

});


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    const DATA = UIkit.data;

    UIkit.prototype.$mount = function (el) {

        var name = this.$options.name;

        if (!el[DATA]) {
            el[DATA] = {};
        }

        if (el[DATA][name]) {
            return;
        }

        el[DATA][name] = this;

        this.$el = this.$options.el = this.$options.el || el;

        this._initProps();

        this._callHook('init');

        if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["within"])(el, __WEBPACK_IMPORTED_MODULE_0__util_index__["docEl"])) {
            this._callConnected();
        }
    };

    UIkit.prototype.$emit = function (e) {
        this._callUpdate(e);
    };

    UIkit.prototype.$update = function (e, parents) {
        UIkit.update(e, this.$options.el, parents);
    };

    UIkit.prototype.$reset = function (data) {
        this._callDisconnected();
        this._initProps(data);
        this._callConnected();
    };

    UIkit.prototype.$destroy = function (removeEl = false) {

        var {el, name} = this.$options;

        if (el) {
            this._callDisconnected();
        }

        this._callHook('destroy');

        if (!el || !el[DATA]) {
            return;
        }

        delete el[DATA][name];

        if (!Object.keys(el[DATA]).length) {
            delete el[DATA];
        }

        if (removeEl) {
            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["remove"])(this.$el);
        }
    };

});


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__container__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__togglable__ = __webpack_require__(19);





var active;

/* harmony default export */ __webpack_exports__["a"] = ({

    mixins: [__WEBPACK_IMPORTED_MODULE_1__class__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__container__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__togglable__["a" /* default */]],

    props: {
        clsPanel: String,
        selClose: String,
        escClose: Boolean,
        bgClose: Boolean,
        stack: Boolean
    },

    defaults: {
        cls: 'uk-open',
        escClose: true,
        bgClose: true,
        overlay: true,
        stack: false
    },

    computed: {

        panel({clsPanel}, $el) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(`.${clsPanel}`, $el);
        },

        transitionElement() {
            return this.panel;
        },

        transitionDuration() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toMs"])(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(this.transitionElement, 'transitionDuration'));
        }

    },

    events: [

        {

            name: 'click',

            delegate() {
                return this.selClose;
            },

            handler(e) {
                e.preventDefault();
                this.hide();
            }

        },

        {

            name: 'toggle',

            self: true,

            handler(e) {

                if (e.defaultPrevented) {
                    return;
                }

                e.preventDefault();
                this.toggle();
            }

        },

        {
            name: 'beforeshow',

            self: true,

            handler(e) {

                var prev = active && active !== this && active;

                active = this;

                if (prev) {
                    if (this.stack) {
                        this.prev = prev;
                    } else {
                        prev.hide().then(this.show);
                        e.preventDefault();
                        return;
                    }
                }

                registerEvents();

            }

        },

        {
            name: 'beforehide',

            self: true,

            handler() {

                active = active && active !== this && active || this.prev;

                if (!active) {
                    deregisterEvents();
                }

            }

        },

        {

            name: 'show',

            self: true,

            handler() {

                if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hasClass"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["docEl"], this.clsPage)) {
                    this.scrollbarWidth = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["width"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["win"]) - __WEBPACK_IMPORTED_MODULE_0__util_index__["docEl"].offsetWidth;
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["doc"].body, 'overflowY', this.scrollbarWidth && this.overlay ? 'scroll' : '');
                }

                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["addClass"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["docEl"], this.clsPage);

            }

        },

        {

            name: 'hidden',

            self: true,

            handler() {

                var found, prev = this.prev;

                while (prev) {

                    if (prev.clsPage === this.clsPage) {
                        found = true;
                        break;
                    }

                    prev = prev.prev;

                }

                if (!found) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["removeClass"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["docEl"], this.clsPage);

                }

                !this.prev && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["doc"].body, 'overflowY', '');
            }

        }

    ],

    methods: {

        toggle() {
            return this.isToggled() ? this.hide() : this.show();
        },

        show() {

            if (this.isToggled()) {
                return;
            }

            if (this.container && this.$el.parentNode !== this.container) {
                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["append"])(this.container, this.$el);
                this._callConnected();
            }

            return this.toggleNow(this.$el, true);
        },

        hide() {
            if (this.isToggled()) {
                return this.toggleNow(this.$el, false);
            }
        },

        getActive() {
            return active;
        },

        _toggleImmediate(el, show) {
            return new __WEBPACK_IMPORTED_MODULE_0__util_index__["Promise"](resolve =>
                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["requestAnimationFrame"])(() => {
                    this._toggle(el, show);

                    if (this.transitionDuration) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["once"])(this.transitionElement, 'transitionend', resolve, false, e => e.target === this.transitionElement);
                    } else {
                        resolve();
                    }
                })
            );
        }

    }

});

var events;

function registerEvents() {

    if (events) {
        return;
    }

    events = [
        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["docEl"], 'click', ({target, defaultPrevented}) => {
            if (active && active.bgClose && !defaultPrevented && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["within"])(target, (active.panel || active.$el))) {
                active.hide();
            }
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["doc"], 'keydown', e => {
            if (e.keyCode === 27 && active && active.escClose) {
                e.preventDefault();
                active.hide();
            }
        })
    ];
}

function deregisterEvents() {
    events && events.forEach(unbind => unbind());
    events = null;
}


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({

    props: {
        pos: String,
        offset: null,
        flip: Boolean,
        clsPos: String
    },

    defaults: {
        pos: `bottom-${!__WEBPACK_IMPORTED_MODULE_0__util_index__["isRtl"] ? 'left' : 'right'}`,
        flip: true,
        offset: false,
        clsPos: ''
    },

    computed: {

        pos({pos}) {
            return (pos + (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(pos, '-') ? '-center' : '')).split('-');
        },

        dir() {
            return this.pos[0];
        },

        align() {
            return this.pos[1];
        }

    },

    methods: {

        positionAt(element, target, boundary) {

            this._resetComputeds();

            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["removeClasses"])(element, `${this.clsPos}-(top|bottom|left|right)(-[a-z]+)?`);
            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(element, {top: '', left: ''});

            var node,
                offset = this.offset,
                axis = this.getAxis();

            offset = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isNumeric"])(offset)
                ? offset
                : (node = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(offset))
                    ? Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["offset"])(node)[axis === 'x' ? 'left' : 'top'] - Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["offset"])(target)[axis === 'x' ? 'right' : 'bottom']
                    : 0;

            var {x, y} = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["positionAt"])(
                    element,
                    target,
                    axis === 'x' ? `${Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["flipPosition"])(this.dir)} ${this.align}` : `${this.align} ${Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["flipPosition"])(this.dir)}`,
                    axis === 'x' ? `${this.dir} ${this.align}` : `${this.align} ${this.dir}`,
                    axis === 'x' ? `${this.dir === 'left' ? -offset : offset}` : ` ${this.dir === 'top' ? -offset : offset}`,
                    null,
                    this.flip,
                    boundary
                ).target;

            this.dir = axis === 'x' ? x : y;
            this.align = axis === 'x' ? y : x;

            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toggleClass"])(element, `${this.clsPos}-${this.dir}-${this.align}`, this.offset === false);

        },

        getAxis() {
            return this.dir === 'top' || this.dir === 'bottom' ? 'y' : 'x';
        }

    }

});


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    var {connect, disconnect} = UIkit;

    if (!__WEBPACK_IMPORTED_MODULE_1__util_index__["Observer"]) {
        return;
    }

    if (__WEBPACK_IMPORTED_MODULE_1__util_index__["doc"].body) {

        init();

    } else {

        (new __WEBPACK_IMPORTED_MODULE_1__util_index__["Observer"](function () {

            if (__WEBPACK_IMPORTED_MODULE_1__util_index__["doc"].body) {
                this.disconnect();
                init();
            }

        })).observe(__WEBPACK_IMPORTED_MODULE_1__util_index__["docEl"], {childList: true, subtree: true});

    }

    function init() {

        apply(__WEBPACK_IMPORTED_MODULE_1__util_index__["doc"].body, connect);

        __WEBPACK_IMPORTED_MODULE_1__util_index__["fastdom"].flush();

        (new __WEBPACK_IMPORTED_MODULE_1__util_index__["Observer"](mutations => mutations.forEach(applyMutation))).observe(__WEBPACK_IMPORTED_MODULE_1__util_index__["docEl"], {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: true
        });

        UIkit._initialized = true;
    }

    function applyMutation(mutation) {

        var {target, type} = mutation;

        var update = type !== 'attributes'
            ? applyChildList(mutation)
            : applyAttribute(mutation);

        update && UIkit.update(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["createEvent"])('update', true, false, {mutation: true}), target, true);

    }

    function applyAttribute({target, attributeName}) {

        if (attributeName === 'href') {
            return true;
        }

        var name = Object(__WEBPACK_IMPORTED_MODULE_0__component__["b" /* getComponentName */])(attributeName);

        if (!name || !(name in UIkit.components)) {
            return;
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasAttr"])(target, attributeName)) {
            UIkit[name](target);
            return true;
        }

        var component = UIkit.getComponent(target, name);

        if (component) {
            component.$destroy();
            return true;
        }

    }

    function applyChildList({addedNodes, removedNodes}) {

        var i;

        for (i = 0; i < addedNodes.length; i++) {
            apply(addedNodes[i], connect);
        }

        for (i = 0; i < removedNodes.length; i++) {
            apply(removedNodes[i], disconnect);
        }

        return true;
    }
    function apply(node, fn) {

        if (node.nodeType !== 1 || Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasAttr"])(node, 'uk-no-boot')) {
            return;
        }

        fn(node);
        node = node.firstElementChild;
        while (node) {
            var next = node.nextElementSibling;
            apply(node, fn);
            node = next;
        }
    }

});


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('alert', {

        attrs: true,

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["Class"], __WEBPACK_IMPORTED_MODULE_0__mixin_index__["Togglable"]],

        args: 'animation',

        props: {
            close: String
        },

        defaults: {
            animation: [true],
            selClose: '.uk-alert-close',
            duration: 150,
            hideProps: Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])({opacity: 0}, __WEBPACK_IMPORTED_MODULE_0__mixin_index__["Togglable"].defaults.hideProps)
        },

        events: [

            {

                name: 'click',

                delegate() {
                    return this.selClose;
                },

                handler(e) {
                    e.preventDefault();
                    this.close();
                }

            }

        ],

        methods: {

            close() {
                this.toggleElement(this.$el).then(() => this.$destroy(true));
            }

        }

    });

});


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["ready"])(() => {

        var scroll = 0, started = 0;

        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["win"], 'load resize', UIkit.update);
        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["win"], 'scroll', e => {
            e.dir = scroll <= __WEBPACK_IMPORTED_MODULE_0__util_index__["win"].pageYOffset ? 'down' : 'up';
            e.scrollY = scroll = __WEBPACK_IMPORTED_MODULE_0__util_index__["win"].pageYOffset;
            UIkit.update(e);
        });

        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["doc"], 'animationstart', ({target}) => {
            if ((Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(target, 'animationName') || '').match(/^uk-.*(left|right)/)) {
                started++;
                __WEBPACK_IMPORTED_MODULE_0__util_index__["doc"].body.style.overflowX = 'hidden';
                setTimeout(() => {
                    if (!--started) {
                        __WEBPACK_IMPORTED_MODULE_0__util_index__["doc"].body.style.overflowX = '';
                    }
                }, Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toMs"])(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(target, 'animationDuration')) + 100);
            }
        }, true);

        if (!__WEBPACK_IMPORTED_MODULE_0__util_index__["hasTouch"]) {
            return;
        }

        var cls = 'uk-hover';

        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["doc"], 'tap', ({target}) =>
            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$$"])(`.${cls}`).forEach((_, el) =>
                !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["within"])(target, el) && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["removeClass"])(el, cls)
            )
        );

        Object.defineProperty(UIkit, 'hoverSelector', {

            set(selector) {
                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["doc"], 'tap', selector, ({current}) => Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["addClass"])(current, cls));
            }

        });

        UIkit.hoverSelector = '.uk-animation-toggle, .uk-transition-toggle, [uk-hover]';

    });

});


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('cover', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["Class"], UIkit.components.video.options],

        props: {
            width: Number,
            height: Number
        },

        defaults: {
            automute: true
        },

        update: {

            write() {

                var el = this.$el;

                if (!Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isVisible"])(el)) {
                    return;
                }

                var {offsetHeight: height, offsetWidth: width} = el.parentNode;

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(el, {width: '', height: ''}),
                    __WEBPACK_IMPORTED_MODULE_1__util_index__["Dimensions"].cover(
                        {
                            width: this.width || el.clientWidth,
                            height: this.height || el.clientHeight
                        },
                        {
                            width: width + (width % 2 ? 1 : 0),
                            height: height + (height % 2 ? 1 : 0)
                        }
                    )
                );

            },

            events: ['load', 'resize']

        },

        events: {

            loadedmetadata() {
                this.$emit();
            }

        }

    });

});


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('form-custom', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["Class"]],

        args: 'target',

        props: {
            target: Boolean
        },

        defaults: {
            target: false
        },

        computed: {

            input(_, $el) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(__WEBPACK_IMPORTED_MODULE_1__util_index__["selInput"], $el);
            },

            state() {
                return this.input.nextElementSibling;
            },

            target({target}, $el) {
                return target && (target === true
                    && this.input.parentNode === $el
                    && this.input.nextElementSibling
                    || Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["query"])(target, $el));
            }

        },

        connected() {
            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["trigger"])(this.input, 'change');
        },

        events: [

            {

                name: 'focusin focusout mouseenter mouseleave',

                delegate: __WEBPACK_IMPORTED_MODULE_1__util_index__["selInput"],

                handler({type, current}) {
                    if (current === this.input) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toggleClass"])(
                            this.state,
                            `uk-${Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["includes"])(type, 'focus') ? 'focus' : 'hover'}`,
                            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["includes"])(['focusin', 'mouseenter'], type)
                        );
                    }
                }

            },

            {

                name: 'change',

                handler() {

                    var target = this.target, input = this.input, option;

                    if (!target) {
                        return;
                    }

                    target[Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isInput"])(target) ? 'value' : 'textContent'] = input.files && input.files[0]
                        ? input.files[0].name
                        : Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["matches"])(input, 'select') && (option = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$$"])('option', input).filter(el => el.selected)[0])
                            ? option.textContent
                            : input.value;
                }

            }

        ]

    });

});


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    // Deprecated
    UIkit.component('gif', {

        update: {

            read(data) {

                var inview = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isInView"])(this.$el);

                if (!inview || data.isInView === inview) {
                    return false;
                }

                data.isInView = inview;
            },

            write() {
                this.$el.src = this.$el.src;
            },

            events: ['scroll', 'load', 'resize']
        }

    });

});


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('grid', UIkit.components.margin.extend({

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["Class"]],

        name: 'grid',

        defaults: {
            margin: 'uk-grid-margin',
            clsStack: 'uk-grid-stack'
        },

        update: {

            write({stacks}) {

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toggleClass"])(this.$el, this.clsStack, stacks);

            },

            events: ['load', 'resize']

        }

    }));

});


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('height-match', {

        args: 'target',

        props: {
            target: String,
            row: Boolean
        },

        defaults: {
            target: '> *',
            row: true
        },

        computed: {

            elements({target}, $el) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$$"])(target, $el);
            }

        },

        update: {

            read() {

                var lastOffset = false;

                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(this.elements, 'minHeight', '');

                return {
                    rows: !this.row
                        ? [this.match(this.elements)]
                        : this.elements.reduce((rows, el) => {

                            if (lastOffset !== el.offsetTop) {
                                rows.push([el]);
                            } else {
                                rows[rows.length - 1].push(el);
                            }

                            lastOffset = el.offsetTop;

                            return rows;

                        }, []).map(elements => this.match(elements))
                };
            },

            write({rows}) {

                rows.forEach(({height, elements}) => Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(elements, 'minHeight', height));

            },

            events: ['load', 'resize']

        },

        methods: {

            match(elements) {

                if (elements.length < 2) {
                    return {};
                }

                var max = 0, heights = [];

                elements
                    .forEach(el => {

                        var style, hidden;

                        if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isVisible"])(el)) {
                            style = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(el, 'style');
                            hidden = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(el, 'hidden');

                            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(el, {
                                style: `${style || ''};display:block !important;`,
                                hidden: null
                            });
                        }

                        max = Math.max(max, el.offsetHeight);
                        heights.push(el.offsetHeight);

                        if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isUndefined"])(style)) {
                            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(el, {style, hidden});
                        }

                    });

                elements = elements.filter((el, i) => heights[i] < max);

                return {height: max, elements};
            }
        }

    });

});


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('height-viewport', {

        props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean,
            minHeight: Number
        },

        defaults: {
            expand: false,
            offsetTop: false,
            offsetBottom: false,
            minHeight: 0
        },

        update: {

            write() {

                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(this.$el, 'boxSizing', 'border-box');

                var viewport = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["height"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["win"]), minHeight, offsetTop = 0;

                if (this.expand) {

                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(this.$el, {height: '', minHeight: ''});

                    var diff = viewport - offsetHeight(__WEBPACK_IMPORTED_MODULE_0__util_index__["docEl"]);

                    if (diff > 0) {
                        minHeight = offsetHeight(this.$el) + diff;
                    }

                } else {

                    var top = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["offset"])(this.$el).top;

                    if (top < viewport / 2 && this.offsetTop) {
                        offsetTop += top;
                    }

                    if (this.offsetBottom === true) {

                        offsetTop += offsetHeight(this.$el.nextElementSibling);

                    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isNumeric"])(this.offsetBottom)) {

                        offsetTop += (viewport / 100) * this.offsetBottom;

                    } else if (this.offsetBottom && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["endsWith"])(this.offsetBottom, 'px')) {

                        offsetTop += Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toFloat"])(this.offsetBottom);

                    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(this.offsetBottom)) {

                        offsetTop += offsetHeight(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["query"])(this.offsetBottom, this.$el));

                    }

                    // on mobile devices (iOS and Android) window.innerHeight !== 100vh
                    minHeight = offsetTop ? `calc(100vh - ${offsetTop}px)` : '100vh';

                }

                if (!minHeight) {
                    return;
                }

                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(this.$el, {height: '', minHeight});

                var elHeight = this.$el.offsetHeight;
                if (this.minHeight && this.minHeight > elHeight) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(this.$el, 'minHeight', this.minHeight);
                }

                // IE 11 fix (min-height on a flex container won't apply to its flex items)
                if (viewport - offsetTop >= elHeight) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(this.$el, 'height', minHeight);
                }

            },

            events: ['load', 'resize']

        }

    });

    function offsetHeight(el) {
        return el && el.offsetHeight || 0;
    }

});


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_components_close_icon_svg__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_components_close_icon_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__images_components_close_icon_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_components_close_large_svg__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_components_close_large_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__images_components_close_large_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_components_marker_svg__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_components_marker_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__images_components_marker_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_components_navbar_toggle_icon_svg__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_components_navbar_toggle_icon_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__images_components_navbar_toggle_icon_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__images_components_overlay_icon_svg__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__images_components_overlay_icon_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__images_components_overlay_icon_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__images_components_pagination_next_svg__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__images_components_pagination_next_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__images_components_pagination_next_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__images_components_pagination_previous_svg__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__images_components_pagination_previous_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__images_components_pagination_previous_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__images_components_search_icon_svg__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__images_components_search_icon_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__images_components_search_icon_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__images_components_search_large_svg__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__images_components_search_large_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__images_components_search_large_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__images_components_search_navbar_svg__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__images_components_search_navbar_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__images_components_search_navbar_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__images_components_slidenav_next_svg__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__images_components_slidenav_next_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__images_components_slidenav_next_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__images_components_slidenav_next_large_svg__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__images_components_slidenav_next_large_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__images_components_slidenav_next_large_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__images_components_slidenav_previous_svg__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__images_components_slidenav_previous_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__images_components_slidenav_previous_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__images_components_slidenav_previous_large_svg__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__images_components_slidenav_previous_large_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__images_components_slidenav_previous_large_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__images_components_spinner_svg__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__images_components_spinner_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__images_components_spinner_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__images_components_totop_svg__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__images_components_totop_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__images_components_totop_svg__);



















/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    var parsed = {},
        icons = {
            spinner: __WEBPACK_IMPORTED_MODULE_16__images_components_spinner_svg___default.a,
            totop: __WEBPACK_IMPORTED_MODULE_17__images_components_totop_svg___default.a,
            marker: __WEBPACK_IMPORTED_MODULE_4__images_components_marker_svg___default.a,
            'close-icon': __WEBPACK_IMPORTED_MODULE_2__images_components_close_icon_svg___default.a,
            'close-large': __WEBPACK_IMPORTED_MODULE_3__images_components_close_large_svg___default.a,
            'navbar-toggle-icon': __WEBPACK_IMPORTED_MODULE_5__images_components_navbar_toggle_icon_svg___default.a,
            'overlay-icon': __WEBPACK_IMPORTED_MODULE_6__images_components_overlay_icon_svg___default.a,
            'pagination-next': __WEBPACK_IMPORTED_MODULE_7__images_components_pagination_next_svg___default.a,
            'pagination-previous': __WEBPACK_IMPORTED_MODULE_8__images_components_pagination_previous_svg___default.a,
            'search-icon': __WEBPACK_IMPORTED_MODULE_9__images_components_search_icon_svg___default.a,
            'search-large': __WEBPACK_IMPORTED_MODULE_10__images_components_search_large_svg___default.a,
            'search-navbar': __WEBPACK_IMPORTED_MODULE_11__images_components_search_navbar_svg___default.a,
            'slidenav-next': __WEBPACK_IMPORTED_MODULE_12__images_components_slidenav_next_svg___default.a,
            'slidenav-next-large': __WEBPACK_IMPORTED_MODULE_13__images_components_slidenav_next_large_svg___default.a,
            'slidenav-previous': __WEBPACK_IMPORTED_MODULE_14__images_components_slidenav_previous_svg___default.a,
            'slidenav-previous-large': __WEBPACK_IMPORTED_MODULE_15__images_components_slidenav_previous_large_svg___default.a
        };

    UIkit.component('icon', UIkit.components.svg.extend({

        attrs: ['icon', 'ratio'],

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["Class"]],

        name: 'icon',

        args: 'icon',

        props: ['icon'],

        defaults: {exclude: ['id', 'style', 'class', 'src', 'icon']},

        init() {
            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(this.$el, 'uk-icon');

            if (__WEBPACK_IMPORTED_MODULE_1__util_index__["isRtl"]) {
                this.icon = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["swap"])(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["swap"])(this.icon, 'left', 'right'), 'previous', 'next');
            }
        },

        methods: {

            getSvg() {

                var icon = getIcon(this.icon);

                if (!icon) {
                    return __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"].reject('Icon not found.');
                }

                return __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"].resolve(icon);
            }

        }

    }));

    [
        'marker',
        'navbar-toggle-icon',
        'overlay-icon',
        'pagination-previous',
        'pagination-next',
        'totop'
    ].forEach(name => registerComponent(name));

    [
        'slidenav-previous',
        'slidenav-next'
    ].forEach(name => registerComponent(name, {

        init() {
            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(this.$el, 'uk-slidenav');

            if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.$el, 'uk-slidenav-large')) {
                this.icon += '-large';
            }
        }

    }));

    registerComponent('search-icon', {

        init() {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.$el, 'uk-search-icon') && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["parents"])(this.$el, '.uk-search-large').length) {
                this.icon = 'search-large';
            } else if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["parents"])(this.$el, '.uk-search-navbar').length) {
                this.icon = 'search-navbar';
            }
        }

    });

    registerComponent('close', {

        init() {
            this.icon = `close-${Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.$el, 'uk-close-large') ? 'large' : 'icon'}`;
        }

    });

    registerComponent('spinner', {

        connected() {
            this.svg.then(svg => this.ratio !== 1 && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])('circle', svg), 'stroke-width', 1 / this.ratio), __WEBPACK_IMPORTED_MODULE_1__util_index__["noop"]);
        }

    });

    UIkit.icon.add = added => {
        Object.keys(added).forEach(name => {
            icons[name] = added[name];
            delete parsed[name];
        });

        if (UIkit._initialized) {
            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["each"])(UIkit.instances, component => {
                if (component.$options.name === 'icon') {
                    component.$reset();
                }
            });
        }
    };

    function registerComponent(name, mixin) {

        UIkit.component(name, UIkit.components.icon.extend({

            name,

            mixins: mixin ? [mixin] : [],

            defaults: {
                icon: name
            }

        }));
    }

    function getIcon(icon) {

        if (!icons[icon]) {
            return null;
        }

        if (!parsed[icon]) {
            parsed[icon] = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(icons[icon].trim());
        }

        return parsed[icon];
    }

});


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/close-icon.svg?43b2455e564d958bab922143ea757fd1";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/close-large.svg?2a8666c4127470181301ac7d1d515557";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/marker.svg?ccdb8795b762c0d2dbeaf0a3ed470f12";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/navbar-toggle-icon.svg?ac0e23342ff7f2c0b1a8d5b7f462cb26";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/overlay-icon.svg?38f2e1a76932cc64db589a6c5312dac5";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pagination-next.svg?7de8304556f8208b703db9f9a8a55cba";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pagination-previous.svg?91bec765228dcfedaf15ff8a9ea3d3cb";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/search-icon.svg?9e8cd27c02715ef4434864e17cc51d35";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/search-large.svg?1f442d3cd148680ae50a6a4156696b05";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/search-navbar.svg?9e1699e1def3b721b82ea79ab07826d1";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slidenav-next.svg?917ba628131d597d435dac1f0c5c88c3";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slidenav-next-large.svg?cc9de5211c432fb82176a2f6b8e257a2";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slidenav-previous.svg?e632e5c717828a2fefab0258dd34d56c";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slidenav-previous-large.svg?13de152b0c824e147e6ca4068a309d3f";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/spinner.svg?74c520d709b58a68fa2cb2d792ba3579";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/totop.svg?634078d32384e9edb89ba93b671663bc";

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('leader', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["Class"]],

        props: {
            fill: String,
            media: 'media'
        },

        defaults: {
            fill: '',
            media: false,
            clsWrapper: 'uk-leader-fill',
            clsHide: 'uk-leader-hide',
            attrFill: 'data-fill'
        },

        computed: {

            fill({fill}) {
                return fill || Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["getCssVar"])('leader-fill');
            }

        },

        connected() {
            this.wrapper = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["wrapInner"])(this.$el, `<span class="${this.clsWrapper}">`)[0];
        },

        disconnected() {
            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["unwrap"])(this.wrapper.childNodes);
        },

        update: [

            {

                read({changed, width}) {

                    var prev = width;

                    width = Math.floor(this.$el.offsetWidth / 2);

                    return {
                        width,
                        changed: changed || prev !== width,
                        hide: this.media && !__WEBPACK_IMPORTED_MODULE_1__util_index__["win"].matchMedia(this.media).matches
                    };
                },

                write(data) {

                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toggleClass"])(this.wrapper, this.clsHide, data.hide);

                    if (data.changed) {
                        data.changed = false;
                        Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(this.wrapper, this.attrFill, new Array(data.width).join(this.fill));
                    }

                },

                events: ['load', 'resize']

            }
        ]
    });

});


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('margin', {

        props: {
            margin: String,
            firstColumn: Boolean
        },

        defaults: {
            margin: 'uk-margin-small-top',
            firstColumn: 'uk-first-column'
        },

        update: {

            read(data) {

                var items = this.$el.children;

                if (!items.length || !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isVisible"])(this.$el)) {
                    return data.rows = false;
                }

                data.stacks = true;

                var rows = [[]];

                for (var i = 0; i < items.length; i++) {

                    var el = items[i],
                        dim = el.getBoundingClientRect();

                    if (!dim.height) {
                        continue;
                    }

                    for (var j = rows.length - 1; j >= 0; j--) {

                        var row = rows[j];

                        if (!row[0]) {
                            row.push(el);
                            break;
                        }

                        var leftDim = row[0].getBoundingClientRect();

                        if (dim.top >= Math.floor(leftDim.bottom)) {
                            rows.push([el]);
                            break;
                        }

                        if (Math.floor(dim.bottom) > leftDim.top) {

                            data.stacks = false;

                            if (dim.left < leftDim.left && !__WEBPACK_IMPORTED_MODULE_0__util_index__["isRtl"]) {
                                row.unshift(el);
                                break;
                            }

                            row.push(el);
                            break;
                        }

                        if (j === 0) {
                            rows.unshift([el]);
                            break;
                        }

                    }

                }

                data.rows = rows;

            },

            write({rows}) {

                rows.forEach((row, i) =>
                    row.forEach((el, j) => {
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toggleClass"])(el, this.margin, i !== 0);
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toggleClass"])(el, this.firstColumn, j === 0);
                    })
                );

            },

            events: ['load', 'resize']

        }

    });

});


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('modal', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["Modal"]],

        defaults: {
            clsPage: 'uk-modal-page',
            clsPanel: 'uk-modal-dialog',
            selClose: '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full'
        },

        events: [

            {
                name: 'show',

                self: true,

                handler() {

                    if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.panel, 'uk-margin-auto-vertical')) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(this.$el, 'uk-flex');
                    } else {
                        Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, 'display', 'block');
                    }

                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(this.$el); // force reflow
                }
            },

            {
                name: 'hidden',

                self: true,

                handler() {

                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, 'display', '');
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["removeClass"])(this.$el, 'uk-flex');

                }
            }

        ]

    });

    UIkit.component('overflow-auto', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["Class"]],

        computed: {

            modal(_, $el) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["closest"])($el, '.uk-modal');
            },

            panel(_, $el) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["closest"])($el, '.uk-modal-dialog');
            }

        },

        connected() {
            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, 'minHeight', 150);
        },

        update: {

            write() {

                if (!this.panel || !this.modal) {
                    return;
                }

                var current = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, 'maxHeight');

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, 'maxHeight', 150), 'maxHeight', Math.max(150, 150 + Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(this.modal) - this.panel.offsetHeight));
                if (current !== Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, 'maxHeight')) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["trigger"])(this.$el, 'resize');
                }
            },

            events: ['load', 'resize']

        }

    });

    UIkit.modal.dialog = function (content, options) {

        var dialog = UIkit.modal(`
            <div class="uk-modal">
                <div class="uk-modal-dialog">${content}</div>
             </div>
        `, options);

        dialog.show();

        Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["on"])(dialog.$el, 'hidden', ({target, currentTarget}) => {
            if (target === currentTarget) {
                dialog.$destroy(true);
            }
        });

        return dialog;
    };

    UIkit.modal.alert = function (message, options) {

        options = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])({bgClose: false, escClose: false, labels: UIkit.modal.labels}, options);

        return new __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"](
            resolve => Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["on"])(UIkit.modal.dialog(`
                <div class="uk-modal-body">${Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isString"])(message) ? message : Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["html"])(message)}</div>
                <div class="uk-modal-footer uk-text-right">
                    <button class="uk-button uk-button-primary uk-modal-close" autofocus>${options.labels.ok}</button>
                </div>
            `, options).$el, 'hide', resolve)
        );
    };

    UIkit.modal.confirm = function (message, options) {

        options = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])({bgClose: false, escClose: false, labels: UIkit.modal.labels}, options);

        return new __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"](
            (resolve, reject) => Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["on"])(UIkit.modal.dialog(`
                <div class="uk-modal-body">${Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isString"])(message) ? message : Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["html"])(message)}</div>
                <div class="uk-modal-footer uk-text-right">
                    <button class="uk-button uk-button-default uk-modal-close">${options.labels.cancel}</button>
                    <button class="uk-button uk-button-primary uk-modal-close" autofocus>${options.labels.ok}</button>
                </div>
            `, options).$el, 'click', '.uk-modal-footer button', ({target}) => Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["index"])(target) === 0 ? reject() : resolve())
        );
    };

    UIkit.modal.prompt = function (message, value, options) {

        options = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])({bgClose: false, escClose: false, labels: UIkit.modal.labels}, options);

        return new __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"](resolve => {

            var resolved = false,
                prompt = UIkit.modal.dialog(`
                    <form class="uk-form-stacked">
                        <div class="uk-modal-body">
                            <label>${Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isString"])(message) ? message : Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["html"])(message)}</label>
                            <input class="uk-input" autofocus>
                        </div>
                        <div class="uk-modal-footer uk-text-right">
                            <button class="uk-button uk-button-default uk-modal-close" type="button">${options.labels.cancel}</button>
                            <button class="uk-button uk-button-primary">${options.labels.ok}</button>
                        </div>
                    </form>
                `, options),
                input = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])('input', prompt.$el);

            input.value = value;

            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["on"])(prompt.$el, 'submit', 'form', e => {
                e.preventDefault();
                resolve(input.value);
                resolved = true;
                prompt.hide();
            });
            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["on"])(prompt.$el, 'hide', () => {
                if (!resolved) {
                    resolve(null);
                }
            });

        });
    };

    UIkit.modal.labels = {
        ok: 'Ok',
        cancel: 'Cancel'
    };

});


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('responsive', {

        props: ['width', 'height'],

        init() {
            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["addClass"])(this.$el, 'uk-responsive-width');
        },

        update: {

            read() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isVisible"])(this.$el) && this.width && this.height
                    ? {width: Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["width"])(this.$el.parentNode), height: this.height}
                    : false;
            },

            write(dim) {
                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["height"])(this.$el, __WEBPACK_IMPORTED_MODULE_0__util_index__["Dimensions"].contain({height: this.height, width: this.width}, dim).height);
            },

            events: ['load', 'resize']

        }

    });

});


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('scroll', {

        props: {
            duration: Number,
            offset: Number
        },

        defaults: {
            duration: 1000,
            offset: 0
        },

        methods: {

            scrollTo(el) {

                el = el && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(el) || __WEBPACK_IMPORTED_MODULE_0__util_index__["doc"].body;

                var target = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["offset"])(el).top - this.offset,
                    docHeight = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["height"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["doc"]),
                    winHeight = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["height"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["win"]);

                if (target + winHeight > docHeight) {
                    target = docHeight - winHeight;
                }

                if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["trigger"])(this.$el, 'beforescroll', [this, el])) {
                    return;
                }

                var start = Date.now(),
                    startY = __WEBPACK_IMPORTED_MODULE_0__util_index__["win"].pageYOffset,
                    step = () => {
                        var currentY = startY + (target - startY) * ease(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["clamp"])((Date.now() - start) / this.duration));

                        __WEBPACK_IMPORTED_MODULE_0__util_index__["win"].scrollTo(__WEBPACK_IMPORTED_MODULE_0__util_index__["win"].pageXOffset, currentY);

                        // scroll more if we have not reached our destination
                        if (currentY !== target) {
                            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["requestAnimationFrame"])(step);
                        } else {
                            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["trigger"])(this.$el, 'scrolled', [this, el]);
                        }
                    };

                step();

            }

        },

        events: {

            click(e) {

                if (e.defaultPrevented) {
                    return;
                }

                e.preventDefault();
                this.scrollTo(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["escape"])(this.$el.hash).substr(1));
            }

        }

    });

    function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    }

});


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('scrollspy', {

        args: 'cls',

        props: {
            cls: 'list',
            target: String,
            hidden: Boolean,
            offsetTop: Number,
            offsetLeft: Number,
            repeat: Boolean,
            delay: Number
        },

        defaults: {
            cls: ['uk-scrollspy-inview'],
            target: false,
            hidden: true,
            offsetTop: 0,
            offsetLeft: 0,
            repeat: false,
            delay: 0,
            inViewClass: 'uk-scrollspy-inview'
        },

        computed: {

            elements({target}, $el) {
                return target ? Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$$"])(target, $el) : [$el];
            }

        },

        update: [

            {

                write() {
                    if (this.hidden) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["filter"])(this.elements, `:not(.${this.inViewClass})`), 'visibility', 'hidden');
                    }
                }

            },

            {

                read(els) {

                    if (!UIkit._initialized) {
                        return false;
                    }

                    this.elements.forEach((el, i) => {

                        var elData = els[i];

                        if (!elData) {
                            var cls = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["data"])(el, 'uk-scrollspy-class');
                            elData = {toggles: cls && cls.split(',') || this.cls};
                        }

                        elData.show = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isInView"])(el, this.offsetTop, this.offsetLeft);
                        els[i] = elData;

                    });
                },

                write(data) {

                    var index = this.elements.length === 1 ? 1 : 0;

                    this.elements.forEach((el, i) => {

                        var elData = data[i], cls = elData.toggles[i] || elData.toggles[0];

                        if (elData.show) {

                            if (!elData.inview && !elData.timer) {

                                var show = () => {
                                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(el, 'visibility', '');
                                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["addClass"])(el, this.inViewClass);
                                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toggleClass"])(el, cls);

                                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["trigger"])(el, 'inview');

                                    this.$update();

                                    elData.inview = true;
                                    delete elData.timer;
                                };

                                if (this.delay && index) {
                                    elData.timer = setTimeout(show, this.delay * index);
                                } else {
                                    show();
                                }

                                index++;

                            }

                        } else {

                            if (elData.inview && this.repeat) {

                                if (elData.timer) {
                                    clearTimeout(elData.timer);
                                    delete elData.timer;
                                }

                                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(el, 'visibility', this.hidden ? 'hidden' : '');
                                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["removeClass"])(el, this.inViewClass);
                                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toggleClass"])(el, cls);

                                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["trigger"])(el, 'outview');

                                this.$update();

                                elData.inview = false;

                            }

                        }

                    });

                },

                events: ['scroll', 'load', 'resize']

            }

        ]

    });

});


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('sticky', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["Class"]],

        attrs: true,

        props: {
            top: null,
            bottom: Boolean,
            offset: Number,
            animation: String,
            clsActive: String,
            clsInactive: String,
            clsFixed: String,
            clsBelow: String,
            selTarget: String,
            widthElement: 'query',
            showOnUp: Boolean,
            media: 'media',
            target: Number
        },

        defaults: {
            top: 0,
            bottom: false,
            offset: 0,
            animation: '',
            clsActive: 'uk-active',
            clsInactive: '',
            clsFixed: 'uk-sticky-fixed',
            clsBelow: 'uk-sticky-below',
            selTarget: '',
            widthElement: false,
            showOnUp: false,
            media: false,
            target: false
        },

        computed: {

            selTarget({selTarget}, $el) {
                return selTarget && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(selTarget, $el) || $el;
            }

        },

        connected() {

            this.placeholder = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])('<div class="uk-sticky-placeholder"></div>');
            this.widthElement = this.$props.widthElement || this.placeholder;

            if (!this.isActive) {
                this.hide();
            }
        },

        disconnected() {

            if (this.isActive) {
                this.isActive = false;
                this.hide();
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["removeClass"])(this.selTarget, this.clsInactive);
            }

            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["remove"])(this.placeholder);
            this.placeholder = null;
            this.widthElement = null;
        },

        ready() {

            if (!(this.target && location.hash && __WEBPACK_IMPORTED_MODULE_1__util_index__["win"].pageYOffset > 0)) {
                return;
            }

            var target = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(location.hash);

            if (target) {
                __WEBPACK_IMPORTED_MODULE_1__util_index__["fastdom"].read(() => {

                    var top = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["offset"])(target).top,
                        elTop = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["offset"])(this.$el).top,
                        elHeight = this.$el.offsetHeight;

                    if (elTop + elHeight >= top && elTop <= top + target.offsetHeight) {
                        __WEBPACK_IMPORTED_MODULE_1__util_index__["win"].scrollTo(0, top - elHeight - this.target - this.offset);
                    }

                });
            }

        },

        events: [

            {
                name: 'active',

                self: true,

                handler() {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["replaceClass"])(this.selTarget, this.clsInactive, this.clsActive);
                }

            },

            {
                name: 'inactive',

                self: true,

                handler() {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["replaceClass"])(this.selTarget, this.clsActive, this.clsInactive);
                }

            }

        ],

        update: [

            {

                write() {

                    var placeholder = this.placeholder,
                        outerHeight = (this.isActive ? placeholder : this.$el).offsetHeight, el;

                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(placeholder, Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])(
                        {height: Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, 'position') !== 'absolute' ? outerHeight : ''},
                        Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'])
                    ));

                    if (!Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["within"])(placeholder, __WEBPACK_IMPORTED_MODULE_1__util_index__["docEl"])) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["after"])(this.$el, placeholder);
                        Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(placeholder, 'hidden', '');
                    }

                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(this.widthElement, 'hidden', null);
                    this.width = this.widthElement.offsetWidth;
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(this.widthElement, 'hidden', this.isActive ? null : '');

                    this.topOffset = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["offset"])(this.isActive ? placeholder : this.$el).top;
                    this.bottomOffset = this.topOffset + outerHeight;

                    ['top', 'bottom'].forEach(prop => {

                        this[prop] = this.$props[prop];

                        if (!this[prop]) {
                            return;
                        }

                        if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isNumeric"])(this[prop])) {

                            this[prop] = this[`${prop}Offset`] + Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toFloat"])(this[prop]);

                        } else {

                            if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isString"])(this[prop]) && this[prop].match(/^-?\d+vh$/)) {
                                this[prop] = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(__WEBPACK_IMPORTED_MODULE_1__util_index__["win"]) * Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toFloat"])(this[prop]) / 100;
                            } else {

                                el = this[prop] === true ? this.$el.parentNode : Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["query"])(this[prop], this.$el);

                                if (el) {
                                    this[prop] = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["offset"])(el).top + el.offsetHeight;
                                }

                            }

                        }

                    });

                    this.top = Math.max(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toFloat"])(this.top), this.topOffset) - this.offset;
                    this.bottom = this.bottom && this.bottom - outerHeight;
                    this.inactive = this.media && !__WEBPACK_IMPORTED_MODULE_1__util_index__["win"].matchMedia(this.media).matches;

                    if (this.isActive) {
                        this.update();
                    }
                },

                events: ['load', 'resize']

            },

            {

                read(_, {scrollY = __WEBPACK_IMPORTED_MODULE_1__util_index__["win"].pageYOffset}) {
                    return {
                        scroll: this.scroll = scrollY,
                        visible: Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isVisible"])(this.$el)
                    };
                },

                write({visible, scroll}, {dir} = {}) {

                    if (scroll < 0 || !visible || this.disabled || this.showOnUp && !dir) {
                        return;
                    }

                    if (this.inactive
                        || scroll < this.top
                        || this.showOnUp && (scroll <= this.top || dir === 'down' || dir === 'up' && !this.isActive && scroll <= this.bottomOffset)
                    ) {

                        if (!this.isActive) {
                            return;
                        }

                        this.isActive = false;

                        if (this.animation && scroll > this.topOffset) {
                            __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].cancel(this.$el);
                            __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].out(this.$el, this.animation).then(() => this.hide(), __WEBPACK_IMPORTED_MODULE_1__util_index__["noop"]);
                        } else {
                            this.hide();
                        }

                    } else if (this.isActive) {

                        this.update();

                    } else if (this.animation) {

                        __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].cancel(this.$el);
                        this.show();
                        __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].in(this.$el, this.animation).catch(__WEBPACK_IMPORTED_MODULE_1__util_index__["noop"]);

                    } else {
                        this.show();
                    }

                },

                events: ['scroll']

            },

        ],

        methods: {

            show() {

                this.isActive = true;
                this.update();
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(this.placeholder, 'hidden', null);

            },

            hide() {

                if (!this.isActive || Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.selTarget, this.clsActive)) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["trigger"])(this.$el, 'inactive');
                }

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["removeClass"])(this.$el, this.clsFixed, this.clsBelow);
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, {position: '', top: '', width: ''});
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(this.placeholder, 'hidden', '');

            },

            update() {

                var top = Math.max(0, this.offset), active = this.scroll > this.top;

                if (this.bottom && this.scroll > this.bottom - this.offset) {
                    top = this.bottom - this.scroll;
                }

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, {
                    position: 'fixed',
                    top: `${top}px`,
                    width: this.width
                });

                if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.selTarget, this.clsActive)) {

                    if (!active) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["trigger"])(this.$el, 'inactive');
                    }

                } else {

                    if (active) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["trigger"])(this.$el, 'active');
                    }
                }

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toggleClass"])(this.$el, this.clsBelow, this.scroll > this.bottomOffset);
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(this.$el, this.clsFixed);

            }

        }

    });

});


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


var svgs = {};

/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('svg', {

        attrs: true,

        props: {
            id: String,
            icon: String,
            src: String,
            style: String,
            width: Number,
            height: Number,
            ratio: Number,
            'class': String
        },

        defaults: {
            ratio: 1,
            id: false,
            exclude: ['src'],
            'class': ''
        },

        init() {
            this.class += ' uk-svg';
        },

        connected() {

            if (!this.icon && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(this.src, '#')) {

                var parts = this.src.split('#');

                if (parts.length > 1) {
                    this.src = parts[0];
                    this.icon = parts[1];
                }
            }

            this.svg = this.getSvg().then(svg => {

                var el;

                if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(svg)) {

                    if (this.icon && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(svg, '<symbol')) {
                        svg = parseSymbols(svg, this.icon) || svg;
                    }

                    el = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(svg.substr(svg.indexOf('<svg')));

                } else {
                    el = svg.cloneNode(true);
                }

                if (!el) {
                    return __WEBPACK_IMPORTED_MODULE_0__util_index__["Promise"].reject('SVG not found.');
                }

                var dimensions = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(el, 'viewBox');

                if (dimensions) {
                    dimensions = dimensions.split(' ');
                    this.width = this.$props.width || dimensions[2];
                    this.height = this.$props.height || dimensions[3];
                }

                this.width *= this.ratio;
                this.height *= this.ratio;

                for (var prop in this.$options.props) {
                    if (this[prop] && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(this.exclude, prop)) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(el, prop, this[prop]);
                    }
                }

                if (!this.id) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["removeAttr"])(el, 'id');
                }

                if (this.width && !this.height) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["removeAttr"])(el, 'height');
                }

                if (this.height && !this.width) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["removeAttr"])(el, 'width');
                }

                var root = this.$el;
                if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isVoidElement"])(root) || root.tagName === 'CANVAS') {

                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(root, {hidden: true, id: null});

                    var next = root.nextElementSibling;
                    if (next && el.isEqualNode(next)) {
                        el = next;
                    } else {
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["after"])(root, el);
                    }

                } else {

                    var last = root.lastElementChild;
                    if (last && el.isEqualNode(last)) {
                        el = last;
                    } else {
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["append"])(root, el);
                    }

                }

                this.svgEl = el;

                return el;

            }, __WEBPACK_IMPORTED_MODULE_0__util_index__["noop"]);

        },

        disconnected() {

            if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isVoidElement"])(this.$el)) {
                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(this.$el, {hidden: null, id: this.id || null});
            }

            if (this.svg) {
                this.svg.then(svg => (!this._connected || svg !== this.svgEl) && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["remove"])(svg), __WEBPACK_IMPORTED_MODULE_0__util_index__["noop"]);
            }

            this.svg = this.svgEl = null;

        },

        methods: {

            getSvg() {

                if (!this.src) {
                    return __WEBPACK_IMPORTED_MODULE_0__util_index__["Promise"].reject();
                }

                if (svgs[this.src]) {
                    return svgs[this.src];
                }

                svgs[this.src] = new __WEBPACK_IMPORTED_MODULE_0__util_index__["Promise"]((resolve, reject) => {

                    if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["startsWith"])(this.src, 'data:')) {
                        resolve(decodeURIComponent(this.src.split(',')[1]));
                    } else {

                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["ajax"])(this.src).then(
                            xhr => resolve(xhr.response),
                            () => reject('SVG not found.')
                        );

                    }

                });

                return svgs[this.src];

            }

        }

    });

    var symbolRe = /<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g,
        symbols = {};

    function parseSymbols(svg, icon) {

        if (!symbols[svg]) {

            symbols[svg] = {};

            var match;
            while (match = symbolRe.exec(svg)) {
                symbols[svg][match[3]] = `<svg xmlns="http://www.w3.org/2000/svg"${match[1]}svg>`;
            }

        }

        return symbols[svg][icon];
    }

});


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('switcher', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["Togglable"]],

        args: 'connect',

        props: {
            connect: String,
            toggle: String,
            active: Number,
            swiping: Boolean
        },

        defaults: {
            connect: '~.uk-switcher',
            toggle: '> *',
            active: 0,
            swiping: true,
            cls: 'uk-active',
            clsContainer: 'uk-switcher',
            attrItem: 'uk-switcher-item',
            queued: true
        },

        computed: {

            connects({connect}, $el) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["queryAll"])(connect, $el);
            },

            toggles({toggle}, $el) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$$"])(toggle, $el);
            }

        },

        events: [

            {

                name: 'click',

                delegate() {
                    return `${this.toggle}:not(.uk-disabled)`;
                },

                handler(e) {
                    e.preventDefault();
                    this.show(e.current);
                }

            },

            {
                name: 'click',

                el() {
                    return this.connects;
                },

                delegate() {
                    return `[${this.attrItem}],[data-${this.attrItem}]`;
                },

                handler(e) {
                    e.preventDefault();
                    this.show(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["data"])(e.current, this.attrItem));
                }
            },

            {
                name: 'swipeRight swipeLeft',

                filter() {
                    return this.swiping;
                },

                el() {
                    return this.connects;
                },

                handler(e) {
                    if (!Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isTouch"])(e)) {
                        return;
                    }

                    e.preventDefault();
                    if (!__WEBPACK_IMPORTED_MODULE_1__util_index__["win"].getSelection().toString()) {
                        this.show(e.type === 'swipeLeft' ? 'next' : 'previous');
                    }
                }
            }

        ],

        update() {

            this.connects.forEach(list => this.updateAria(list.children));
            this.show(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["filter"])(this.toggles, `.${this.cls}`)[0] || this.toggles[this.active] || this.toggles[0]);

        },

        methods: {

            show(item) {

                var length = this.toggles.length,
                    prev = !!this.connects.length && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["index"])(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["filter"])(this.connects[0].children, `.${this.cls}`)[0]),
                    hasPrev = prev >= 0,
                    next = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["getIndex"])(item, this.toggles, prev),
                    dir = item === 'previous' ? -1 : 1,
                    toggle;

                for (var i = 0; i < length; i++, next = (next + dir + length) % length) {
                    if (!Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["matches"])(this.toggles[next], '.uk-disabled, [disabled]')) {
                        toggle = this.toggles[next];
                        break;
                    }
                }

                if (!toggle || prev >= 0 && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(toggle, this.cls) || prev === next) {
                    return;
                }

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["removeClass"])(this.toggles, this.cls);
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(this.toggles, 'aria-expanded', false);
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(toggle, this.cls);
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(toggle, 'aria-expanded', true);

                this.connects.forEach(list => {
                    if (!hasPrev) {
                        this.toggleNow(list.children[next]);
                    } else {
                        this.toggleElement([list.children[prev], list.children[next]]);
                    }
                });

            }

        }

    });

});


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('tab', UIkit.components.switcher.extend({

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["Class"]],

        name: 'tab',

        props: {
            media: 'media'
        },

        defaults: {
            media: 960,
            attrItem: 'uk-tab-item'
        },

        init() {

            var cls = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.$el, 'uk-tab-left')
                ? 'uk-tab-left'
                : Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.$el, 'uk-tab-right')
                    ? 'uk-tab-right'
                    : false;

            if (cls) {
                UIkit.toggle(this.$el, {cls, mode: 'media', media: this.media});
            }
        }

    }));

});


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('toggle', {

        mixins: [UIkit.mixin.togglable],

        args: 'target',

        props: {
            href: String,
            target: null,
            mode: 'list',
            media: 'media'
        },

        defaults: {
            href: false,
            target: false,
            mode: 'click',
            queued: true,
            media: false
        },

        computed: {

            target({href, target}, $el) {
                target = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["queryAll"])(target || href, $el);
                return target.length && target || [$el];
            }

        },

        events: [

            {

                name: `${__WEBPACK_IMPORTED_MODULE_0__util_index__["pointerEnter"]} ${__WEBPACK_IMPORTED_MODULE_0__util_index__["pointerLeave"]}`,

                filter() {
                    return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(this.mode, 'hover');
                },

                handler(e) {
                    if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isTouch"])(e)) {
                        this.toggle(`toggle${e.type === __WEBPACK_IMPORTED_MODULE_0__util_index__["pointerEnter"] ? 'show' : 'hide'}`);
                    }
                }

            },

            {

                name: 'click',

                filter() {
                    return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(this.mode, 'click') || __WEBPACK_IMPORTED_MODULE_0__util_index__["hasTouch"];
                },

                handler(e) {

                    if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isTouch"])(e) && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(this.mode, 'click')) {
                        return;
                    }

                    // TODO better isToggled handling
                    var link;
                    if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["closest"])(e.target, 'a[href="#"], button')
                        || (link = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["closest"])(e.target, 'a[href]')) && (
                            this.cls
                            || !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isVisible"])(this.target)
                            || link.hash && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["matches"])(this.target, link.hash)
                        )
                    ) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["once"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["doc"], 'click', e => e.preventDefault());
                    }

                    this.toggle();
                }

            }
        ],

        update: {

            write() {

                if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(this.mode, 'media') || !this.media) {
                    return;
                }

                var toggled = this.isToggled(this.target);
                if (__WEBPACK_IMPORTED_MODULE_0__util_index__["win"].matchMedia(this.media).matches ? !toggled : toggled) {
                    this.toggle();
                }

            },

            events: ['load', 'resize']

        },

        methods: {

            toggle(type) {
                if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["trigger"])(this.target, type || 'toggle', [this])) {
                    this.toggleElement(this.target);
                }
            }

        }

    });

});


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (function (UIkit) {

    UIkit.component('video', {

        props: {
            automute: Boolean,
            autoplay: Boolean,
        },

        defaults: {
            automute: false,
            autoplay: true
        },

        computed: {

            inView({autoplay}) {
                return autoplay === 'inview';
            }

        },

        ready() {

            this.player = new __WEBPACK_IMPORTED_MODULE_0__util_index__["Player"](this.$el);

            if (this.automute) {
                this.player.mute();
            }

        },

        update: [

            {

                read(_, {type}) {

                    return !this.player || (type === 'scroll' || type === 'resize') && !this.inView
                        ? false
                        : {
                            visible: Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isVisible"])(this.$el) && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(this.$el, 'visibility') !== 'hidden',
                            inView: this.inView && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isInView"])(this.$el)
                        };
                },

                write({visible, inView}) {

                    if (!visible || this.inView && !inView) {
                        this.player.pause();
                    } else if (this.autoplay === true || this.inView && inView) {
                        this.player.play();
                    }

                },

                events: ['load', 'resize', 'scroll']

            }

        ],

    });

});


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var { $, doc, empty, html } = UIkit.util;

    UIkit.component('countdown', {

        mixins: [UIkit.mixin.class],

        attrs: true,

        props: {
            date: String,
            clsWrapper: String
        },

        defaults: {
            date: '',
            clsWrapper: '.uk-countdown-%unit%'
        },

        computed: {

            date({date}) {
                return Date.parse(date);
            },

            days({clsWrapper}, $el) {
                return $(clsWrapper.replace('%unit%', 'days'), $el);
            },

            hours({clsWrapper}, $el) {
                return $(clsWrapper.replace('%unit%', 'hours'), $el);
            },

            minutes({clsWrapper}, $el) {
                return $(clsWrapper.replace('%unit%', 'minutes'), $el);
            },

            seconds({clsWrapper}, $el) {
                return $(clsWrapper.replace('%unit%', 'seconds'), $el);
            },

            units() {
                return ['days', 'hours', 'minutes', 'seconds'].filter(unit => this[unit]);
            }

        },

        connected() {
            this.start();
        },

        disconnected() {
            this.stop();
            this.units.forEach(unit => empty(this[unit]));
        },

        events: [

            {

                name: 'visibilitychange',

                el: doc,

                handler() {
                    if (doc.hidden) {
                        this.stop();
                    } else {
                        this.start();
                    }
                }

            }

        ],

        update: {

            write() {

                var timespan = getTimeSpan(this.date);

                if (timespan.total <= 0) {

                    this.stop();

                    timespan.days
                        = timespan.hours
                        = timespan.minutes
                        = timespan.seconds
                        = 0;
                }

                this.units.forEach(unit => {

                    var digits = String(Math.floor(timespan[unit]));

                    digits = digits.length < 2 ? `0${digits}` : digits;

                    var el = this[unit];
                    if (el.textContent !== digits) {
                        digits = digits.split('');

                        if (digits.length !== el.children.length) {
                            html(el, digits.map(() => '<span></span>').join(''));
                        }

                        digits.forEach((digit, i) => el.children[i].textContent = digit);
                    }

                });

            }

        },

        methods: {

            start() {

                this.stop();

                if (this.date && this.units.length) {
                    this.$emit();
                    this.timer = setInterval(() => this.$emit(), 1000);
                }

            },

            stop() {

                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }

            }

        }

    });

    function getTimeSpan(date) {

        var total = date - Date.now();

        return {
            total,
            seconds: total / 1000 % 60,
            minutes: total / 1000 / 60 % 60,
            hours: total / 1000 / 60 / 60 % 24,
            days: total / 1000 / 60 / 60 / 24
        };
    }

}

if (false) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_lightbox_panel__ = __webpack_require__(105);


function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    UIkit.use(__WEBPACK_IMPORTED_MODULE_0__internal_lightbox_panel__["a" /* default */]);

    var {util} = UIkit;
    var {$$, assign, data, index} = util;

    UIkit.component('lightbox', {

        attrs: true,

        props: {
            animation: String,
            container: Boolean,
            toggle: String,
            autoplay: Boolean,
            autoplayInterval: Number,
            videoAutoplay: Boolean
        },

        defaults: {
            animation: undefined,
            container: true,
            toggle: 'a',
            autoplay: 0,
            videoAutoplay: false
        },

        computed: {

            toggles({toggle}, $el) {
                return $$(toggle, $el);
            }

        },

        disconnected() {
            this._destroy();
        },

        events: [

            {

                name: 'click',

                delegate() {
                    return `${this.toggle}:not(.uk-disabled)`;
                },

                handler(e) {
                    e.preventDefault();
                    e.current.blur();
                    this.show(index(this.toggles, e.current));
                }

            }

        ],

        update(data) {

            if (this.panel && this.animation) {
                this.panel.$props.animation = this.animation;
                this.panel.$emit();
            }

            if (!this.panel || data.toggles && isEqualList(data.toggles, this.toggles)) {
                return;
            }

            data.toggles = this.toggles;
            this._destroy();
            this._init();

        },

        methods: {

            _init() {
                return this.panel = this.panel || UIkit.lightboxPanel(assign({}, this.$props, {
                    items: this.toggles.reduce((items, el) => {
                        items.push(['href', 'caption', 'type', 'poster', 'alt'].reduce((obj, attr) => {
                            obj[attr === 'href' ? 'source' : attr] = data(el, attr);
                            return obj;
                        }, {}));
                        return items;
                    }, [])
                }));
            },

            _destroy() {
                if (this.panel) {
                    this.panel.$destroy(true);
                    this.panel = null;
                }
            },

            show(index) {

                if (!this.panel) {
                    this._init();
                }

                return this.panel.show(index);

            },

            hide() {

                return this.panel && this.panel.hide();

            }

        }

    });

    function isEqualList(listA, listB) {
        return listA.length === listB.length
            && listA.every((el, i) => el !== listB[i]);
    }

}

if (false) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_slideshow__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lightbox_animations__ = __webpack_require__(110);



function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    UIkit.use(__WEBPACK_IMPORTED_MODULE_0__mixin_slideshow__["a" /* default */]);

    var {mixin, util} = UIkit;
    var {$, addClass, ajax, append, assign, attr, css, doc, getImage, html, index, on, pointerDown, pointerMove, removeClass, Transition, trigger} = util;

    var Animations = Object(__WEBPACK_IMPORTED_MODULE_1__lightbox_animations__["a" /* default */])(UIkit);

    UIkit.component('lightbox-panel', {

        mixins: [mixin.container, mixin.modal, mixin.togglable, mixin.slideshow],

        functional: true,

        defaults: {
            preload: 1,
            videoAutoplay: false,
            delayControls: 3000,
            items: [],
            cls: 'uk-open',
            clsPage: 'uk-lightbox-page',
            selList: '.uk-lightbox-items',
            attrItem: 'uk-lightbox-item',
            selClose: '.uk-close-large',
            pauseOnHover: false,
            velocity: 2,
            Animations,
            template: `<div class="uk-lightbox uk-overflow-hidden">
                            <ul class="uk-lightbox-items"></ul>
                            <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque">
                                <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button>
                             </div>
                            <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href="#" uk-slidenav-previous uk-lightbox-item="previous"></a>
                            <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href="#" uk-slidenav-next uk-lightbox-item="next"></a>
                            <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div>
                        </div>`
        },

        created() {

            this.$mount(append(this.container, this.template));

            this.caption = $('.uk-lightbox-caption', this.$el);

            this.items.forEach(() => append(this.list, '<li></li>'));

        },

        events: [

            {

                name: `${pointerMove} ${pointerDown} keydown`,

                handler: 'showControls'

            },

            {

                name: 'click',

                self: true,

                delegate() {
                    return this.slidesSelector;
                },

                handler(e) {
                    e.preventDefault();
                    this.hide();
                }

            },

            {

                name: 'shown',

                self: true,

                handler: 'showControls'
            },

            {

                name: 'hide',

                self: true,

                handler() {

                    this.hideControls();

                    removeClass(this.slides, this.clsActive);
                    Transition.stop(this.slides);

                    delete this.index;
                    delete this.percent;
                    delete this._transitioner;

                }
            },

            {

                name: 'keyup',

                el() {
                    return doc;
                },

                handler(e) {

                    if (!this.isToggled(this.$el)) {
                        return;
                    }

                    switch (e.keyCode) {
                        case 37:
                            this.show('previous');
                            break;
                        case 39:
                            this.show('next');
                            break;
                    }
                }
            },

            {

                name: 'beforeitemshow',

                handler(e) {

                    if (this.isToggled()) {
                        return;
                    }

                    this.preventCatch = true;

                    e.preventDefault();

                    this.animation = Animations['scale'];
                    removeClass(e.target, this.clsActive);
                    this.stack.splice(1, 0, this.index);

                    this.toggleNow(this.$el, true);

                }

            },

            {

                name: 'itemshow',

                handler({target}) {

                    var i = index(target),
                        caption = this.getItem(i).caption;

                    css(this.caption, 'display', caption ? '' : 'none');
                    html(this.caption, caption);

                    for (var j = 0; j <= this.preload; j++) {
                        this.loadItem(this.getIndex(i + j));
                        this.loadItem(this.getIndex(i - j));
                    }

                    delete this._computeds.animation;

                }

            },

            {

                name: 'itemshown',

                handler() {
                    this.preventCatch = false;
                }

            },

            {

                name: 'itemload',

                handler(_, item) {

                    var {source, type, alt} = item, matches;

                    this.setItem(item, '<span uk-spinner></span>');

                    if (!source) {
                        return;
                    }

                    // Image
                    if (type === 'image' || source.match(/\.(jp(e)?g|png|gif|svg)$/i)) {

                        getImage(source).then(
                            img => this.setItem(item, `<img width="${img.width}" height="${img.height}" src="${source}" alt="${alt ? alt : ''}">`),
                            () => this.setError(item)
                        );

                    // Video
                    } else if (type === 'video' || source.match(/\.(mp4|webm|ogv)$/i)) {

                        var video = $(`<video controls playsinline${item.poster ? ` poster="${item.poster}"` : ''} uk-video="autoplay: ${this.videoAutoplay}"></video>`);
                        attr(video, 'src', source);

                        on(video, 'error', () => this.setError(item));
                        on(video, 'loadedmetadata', () => {
                            attr(video, {width: video.videoWidth, height: video.videoHeight});
                            this.setItem(item, video);
                        });

                    // Iframe
                    } else if (type === 'iframe') {

                        this.setItem(item, `<iframe class="uk-lightbox-iframe" src="${source}" frameborder="0" allowfullscreen></iframe>`);

                    // Youtube
                    } else if (matches = source.match(/\/\/.*?youtube\.[a-z]+\/watch\?v=([^&\s]+)/) || source.match(/youtu\.be\/(.*)/)) {

                        var id = matches[1],
                            setIframe = (width = 640, height = 450) => this.setItem(item, getIframe(`//www.youtube.com/embed/${id}`, width, height, this.videoAutoplay));

                        getImage(`//img.youtube.com/vi/${id}/maxresdefault.jpg`).then(
                            ({width, height}) => {
                                //youtube default 404 thumb, fall back to lowres
                                if (width === 120 && height === 90) {
                                    getImage(`//img.youtube.com/vi/${id}/0.jpg`).then(
                                        ({width, height}) => setIframe(width, height),
                                        setIframe
                                    );
                                } else {
                                    setIframe(width, height);
                                }
                            },
                            setIframe
                        );

                    // Vimeo
                    } else if (matches = source.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/)) {

                        ajax(`//vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(source)}`, {responseType: 'json'})
                            .then(({response: {height, width}}) =>
                                this.setItem(item, getIframe(`//player.vimeo.com/video/${matches[2]}`, width, height, this.videoAutoplay))
                            );

                    }

                }

            }

        ],

        methods: {

            loadItem(index = this.index) {

                var item = this.getItem(index);

                if (item.content) {
                    return;
                }

                trigger(this.$el, 'itemload', [item]);
            },

            getItem(index = this.index) {
                return this.items[index] || {};
            },

            setItem(item, content) {
                assign(item, {content});
                var el = html(this.slides[this.items.indexOf(item)], content);
                trigger(this.$el, 'itemloaded', [this, el]);
                UIkit.update(null, el);
            },

            setError(item) {
                this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
            },

            showControls() {

                clearTimeout(this.controlsTimer);
                this.controlsTimer = setTimeout(this.hideControls, this.delayControls);

                addClass(this.$el, 'uk-active', 'uk-transition-active');

            },

            hideControls() {
                removeClass(this.$el, 'uk-active', 'uk-transition-active');
            }

        }

    });

    function getIframe(src, width, height, autoplay) {
        return `<iframe src="${src}" width="${width}" height="${height}" style="max-width: 100%; box-sizing: border-box;" frameborder="0" allowfullscreen uk-video="autoplay: ${autoplay}" uk-responsive></iframe>`;
    }

}

if (false) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    var {createEvent, clamp, css, Deferred, noop, Promise, Transition, trigger} = UIkit.util;

    function Transitioner(prev, next, dir, {animation, easing}) {

        var {percent, translate, show = noop} = animation,
            props = show(dir),
            deferred = new Deferred();

        return {

            dir,

            show(duration, percent = 0, linear) {

                var timing = linear ? 'linear' : easing;
                duration -= Math.round(duration * clamp(percent, -1, 1));

                this.translate(percent);

                triggerUpdate(next, 'itemin', {percent, duration, timing, dir});
                triggerUpdate(prev, 'itemout', {percent: 1 - percent, duration, timing, dir});

                Promise.all([
                    Transition.start(next, props[1], duration, timing),
                    Transition.start(prev, props[0], duration, timing)
                ]).then(() => {
                    this.reset();
                    deferred.resolve();
                }, noop);

                return deferred.promise;
            },

            stop() {
                return Transition.stop([next, prev]);
            },

            cancel() {
                Transition.cancel([next, prev]);
            },

            reset() {
                for (var prop in props[0]) {
                    css([next, prev], prop, '');
                }
            },

            forward(duration, percent = this.percent()) {
                Transition.cancel([next, prev]);
                return this.show(duration, percent, true);

            },

            translate(percent) {

                var props = translate(percent, dir);
                css(next, props[1]);
                css(prev, props[0]);
                triggerUpdate(next, 'itemtranslatein', {percent, dir});
                triggerUpdate(prev, 'itemtranslateout', {percent: 1 - percent, dir});

            },

            percent() {
                return percent(prev || next, next, dir);
            },

            getDistance() {
                return prev.offsetWidth;
            }

        };

    }

    function triggerUpdate(el, type, data) {
        trigger(el, createEvent(type, false, false, data));
    }

    return Transitioner;

});


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    var {doc, pointerDown} = UIkit.util;

    return {

        props: {
            autoplay: Boolean,
            autoplayInterval: Number,
            pauseOnHover: Boolean
        },

        defaults: {
            autoplay: false,
            autoplayInterval: 7000,
            pauseOnHover: true
        },

        connected() {
            this.startAutoplay();
        },

        disconnected() {
            this.stopAutoplay();
        },

        events: [

            {

                name: 'visibilitychange',

                el: doc,

                handler() {
                    if (doc.hidden) {
                        this.stopAutoplay();
                    } else {
                        this.startAutoplay();
                    }
                }

            },

            {

                name: pointerDown,
                handler: 'stopAutoplay'

            },

            {

                name: 'mouseenter',

                filter() {
                    return this.autoplay;
                },

                handler() {
                    this.isHovering = true;
                }

            },

            {

                name: 'mouseleave',

                filter() {
                    return this.autoplay;
                },

                handler() {
                    this.isHovering = false;
                }

            }

        ],

        methods: {

            startAutoplay() {

                this.stopAutoplay();

                if (this.autoplay) {
                    this.interval = setInterval(() =>
                        !(this.isHovering && this.pauseOnHover) && !this.stack.length && this.show('next')
                    , this.autoplayInterval);
                }

            },

            stopAutoplay() {
                if (this.interval) {
                    clearInterval(this.interval);
                }
            }

        }

    }
});;


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    var {doc, getPos, includes, isRtl, isTouch, off, on, pointerDown, pointerMove, pointerUp, preventClick, trigger, win} = UIkit.util;

    return {

        defaults: {
            threshold: 10,
            preventCatch: false
        },

        init() {

            ['start', 'move', 'end'].forEach(key => {

                var fn = this[key];
                this[key] = e => {

                    var pos = getPos(e).x * (isRtl ? -1 : 1);

                    this.prevPos = pos !== this.pos ? this.pos : this.prevPos;
                    this.pos = pos;

                    fn(e);
                };

            });

        },

        events: [

            {

                name: pointerDown,

                delegate() {
                    return this.slidesSelector;
                },

                handler(e) {
                    if (isTouch(e) || !hasTextNodesOnly(e.target)) {
                        this.start(e);
                    }
                }

            },

            {
                name: 'dragstart',

                handler(e) {
                    e.preventDefault();
                }
            }

        ],

        methods: {

            start(e) {

                if (e.button > 0 || this.length < 2) {
                    return;
                }

                if (this.preventCatch) {
                    return;
                }

                this.drag = this.pos;

                if (this._transitioner) {

                    this.percent = this._transitioner.percent();
                    this.drag += this._transitioner.getDistance() * this.percent * this.dir;

                    this._transitioner.translate(this.percent);
                    this._transitioner.cancel();

                    this.dragging = true;

                    this.stack = [];

                } else {
                    this.prevIndex = this.index;
                }

                this.unbindMove = on(doc, pointerMove, this.move, {capture: true, passive: false});
                on(win, 'scroll', this.unbindMove);
                on(doc, pointerUp, this.end, true);

            },

            move(e) {

                var distance = this.pos - this.drag;

                if (distance === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(distance) < this.threshold) {
                    return;
                }

                e.cancelable && e.preventDefault();

                this.dragging = true;
                this.dir = (distance < 0 ? 1 : -1);

                var slides = this.slides,
                    prevIndex = this.prevIndex,
                    dis = Math.abs(distance),
                    nextIndex = this.getIndex(prevIndex + this.dir, prevIndex),
                    width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

                while (nextIndex !== prevIndex && dis > width) {

                    this.drag -= width * this.dir;

                    prevIndex = nextIndex;
                    dis -= width;
                    nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
                    width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

                }

                this.percent = dis / width;

                var prev = slides[prevIndex],
                    next = slides[nextIndex],
                    changed = this.index !== nextIndex,
                    edge = prevIndex === nextIndex;

                [this.index, this.prevIndex].filter(i => !includes([nextIndex, prevIndex], i)).forEach(i => {
                    trigger(slides[i], 'itemhidden', [this]);

                    this._transitioner && this._transitioner.reset();

                    if (edge) {
                        this.prevIndex = prevIndex;
                    }

                });

                if (this.index === prevIndex && this.prevIndex !== prevIndex) {
                    trigger(slides[this.index], 'itemshown', [this]);
                }

                if (changed) {
                    this.prevIndex = prevIndex;
                    this.index = nextIndex;

                    !edge && trigger(prev, 'beforeitemhide', [this]);
                    trigger(next, 'beforeitemshow', [this]);
                }

                this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);

                if (changed) {
                    !edge && trigger(prev, 'itemhide', [this]);
                    trigger(next, 'itemshow', [this]);
                }

            },

            end() {

                off(win, 'scroll', this.unbindMove);
                this.unbindMove();
                off(doc, pointerUp, this.end, true);

                if (this.dragging) {

                    this.dragging = null;

                    if (this.index === this.prevIndex) {
                        this.percent = 1 - this.percent;
                        this.dir *= -1;
                        this._show(false, this.index, true);
                        this._transitioner = null;
                    } else {

                        var dirChange = (isRtl ? this.dir * (isRtl ? 1 : -1) : this.dir) < 0 === this.prevPos > this.pos;
                        this.index = dirChange ? this.index : this.prevIndex;

                        if (dirChange) {
                            this.percent = 1 - this.percent;
                        }

                        this.show(this.dir > 0 && !dirChange || this.dir < 0 && dirChange ? 'next' : 'previous', true);
                    }

                    preventClick();

                }

                this.drag
                    = this.percent
                    = null;

            }

        }

    };

    function hasTextNodesOnly(el) {
        return !el.children.length && el.childNodes.length;
    }

});;


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    var {$, $$, data, html, index, toggleClass} = UIkit.util;

    return {

        defaults: {
            selNav: false
        },

        computed: {

            nav({selNav}, $el) {
                return $(selNav, $el);
            },

            navItemSelector({attrItem}) {
                return `[${attrItem}],[data-${attrItem}]`;
            },

            navItems(_, $el) {
                return $$(this.navItemSelector, $el);
            }

        },

        update: [

            {

                write() {

                    if (this.nav && this.length !== this.nav.children.length) {
                        html(this.nav, this.slides.map((_, i) => `<li ${this.attrItem}="${i}"><a href="#"></a></li>`).join(''));
                    }

                    toggleClass($$(this.navItemSelector, this.$el).concat(this.nav), 'uk-hidden', !this.maxIndex);

                },

                events: ['load', 'resize']

            }

        ],

        events: [

            {

                name: 'click',

                delegate() {
                    return this.navItemSelector;
                },

                handler(e) {
                    e.preventDefault();
                    e.current.blur();
                    this.show(data(e.current, this.attrItem));
                }

            },

            {

                name: 'itemshow',

                handler() {
                    var i = this.getValidIndex();
                    this.navItems.forEach(item => toggleClass(item, this.clsActive, index(item) === i));
                }

            }

        ]

    };

});


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    var {mixin} = UIkit;
    var {assign, css} = UIkit.util;

    return assign({}, mixin.slideshow.defaults.Animations, {

        fade: {

            show() {
                return [
                    {opacity: 0},
                    {opacity: 1}
                ];
            },

            percent(current) {
                return 1 - css(current, 'opacity');
            },

            translate(percent) {
                return [
                    {opacity: 1 - percent},
                    {opacity: percent}
                ];
            }

        },

        scale: {

            show() {
                return [
                    {opacity: 0, transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["b" /* scale3d */])(1 - .2)},
                    {opacity: 1, transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["b" /* scale3d */])(1)}
                ];
            },

            percent(current) {
                return 1 - css(current, 'opacity');
            },

            translate(percent) {
                return [
                    {opacity: 1 - percent, transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["b" /* scale3d */])(1 - .2 * percent)},
                    {opacity: percent, transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["b" /* scale3d */])(1 - .2 + .2 * percent)}
                ];
            }

        }

    });

});


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var {append, closest, css, each, pointerEnter, pointerLeave, remove, toFloat, Transition, trigger} = UIkit.util;
    var containers = {};

    UIkit.component('notification', {

        functional: true,

        args: ['message', 'status'],

        defaults: {
            message: '',
            status: '',
            timeout: 5000,
            group: null,
            pos: 'top-center',
            clsClose: 'uk-notification-close',
            clsMsg: 'uk-notification-message'
        },

        created() {

            if (!containers[this.pos]) {
                containers[this.pos] = append(UIkit.container, `<div class="uk-notification uk-notification-${this.pos}"></div>`);
            }

            var container = css(containers[this.pos], 'display', 'block');

            this.$mount(append(container,
                `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ''}">
                    <a href="#" class="${this.clsClose}" data-uk-close></a>
                    <div>${this.message}</div>
                </div>`
            ));

        },

        ready() {

            var marginBottom = toFloat(css(this.$el, 'marginBottom'));
            Transition.start(
                css(this.$el, {opacity: 0, marginTop: -this.$el.offsetHeight, marginBottom: 0}),
                {opacity: 1, marginTop: 0, marginBottom}
            ).then(() => {
                if (this.timeout) {
                    this.timer = setTimeout(this.close, this.timeout);
                }
            });

        },

        events: {

            click(e) {
                if (closest(e.target, 'a[href="#"]')) {
                    e.preventDefault();
                }
                this.close();
            },

            [pointerEnter]() {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
            },

            [pointerLeave]() {
                if (this.timeout) {
                    this.timer = setTimeout(this.close, this.timeout);
                }
            }

        },

        methods: {

            close(immediate) {

                var removeFn = () => {

                    trigger(this.$el, 'close', [this]);
                    remove(this.$el);

                    if (!containers[this.pos].children.length) {
                        css(containers[this.pos], 'display', 'none');
                    }

                };

                if (this.timer) {
                    clearTimeout(this.timer);
                }

                if (immediate) {
                    removeFn();
                } else {
                    Transition.start(this.$el, {
                        opacity: 0,
                        marginTop: -this.$el.offsetHeight,
                        marginBottom: 0
                    }).then(removeFn);
                }
            }

        }

    });

    UIkit.notification.closeAll = function (group, immediate) {
        each(UIkit.instances, component => {
            if (component.$options.name === 'notification' && (!group || group === component.group)) {
                component.close(immediate);
            }
        });
    };

}

if (false) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_slider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_internal_slider_reactive__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_slider_transitioner__ = __webpack_require__(113);




function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    UIkit.use(__WEBPACK_IMPORTED_MODULE_0__mixin_slider__["a" /* default */]);

    var {mixin} = UIkit;
    var {$, $$, css, data, includes, isNumeric, toggleClass, toFloat} = UIkit.util;
    var Transitioner = Object(__WEBPACK_IMPORTED_MODULE_2__internal_slider_transitioner__["a" /* default */])(UIkit);

    UIkit.component('slider', {

        mixins: [mixin.class, mixin.slider, Object(__WEBPACK_IMPORTED_MODULE_1__mixin_internal_slider_reactive__["a" /* default */])(UIkit)],

        props: {
            center: Boolean,
            sets: Boolean,
        },

        defaults: {
            center: false,
            sets: false,
            attrItem: 'uk-slider-item',
            selList: '.uk-slider-items',
            selNav: '.uk-slider-nav',
            clsContainer: 'uk-slider-container',
            Transitioner
        },

        computed: {

            avgWidth() {
                return Transitioner.getWidth(this.list) / this.length;
            },

            finite({finite}) {
                return finite || Transitioner.getWidth(this.list) < this.list.offsetWidth + Transitioner.getMaxWidth(this.list) + this.center;
            },

            maxIndex() {

                if (!this.finite || this.center && !this.sets) {
                    return this.length - 1;
                }

                if (this.center) {
                    return this.sets[this.sets.length - 1];
                }

                css(this.slides, 'order', '');

                var max = Transitioner.getMax(this.list), i = this.length;

                while (i--) {
                    if (Transitioner.getElLeft(this.list.children[i], this.list) < max) {
                        return Math.min(i + 1, this.length - 1);
                    }
                }

                return 0;
            },

            sets({sets}) {

                var width = this.list.offsetWidth / (this.center ? 2 : 1),
                    left = 0,
                    leftCenter = width;

                css(this.slides, 'order', '');

                sets = sets && this.slides.reduce((sets, slide, i) => {

                    var slideWidth = slide.offsetWidth,
                        slideLeft = Transitioner.getElLeft(slide, this.list),
                        slideRight = slideLeft + slideWidth;

                    if (slideRight > left) {

                        if (!this.center && i > this.maxIndex) {
                            i = this.maxIndex;
                        }

                        if (!includes(sets, i)) {

                            var cmp = this.slides[i + 1];
                            if (this.center && cmp && slideWidth < leftCenter - cmp.offsetWidth / 2) {
                                leftCenter -= slideWidth;
                            } else {
                                leftCenter = width;
                                sets.push(i);
                                left = slideLeft + width + (this.center ? slideWidth / 2 : 0);
                            }

                        }
                    }

                    return sets;

                }, []);

                return sets && sets.length && sets;

            },

            transitionOptions() {
                return {
                    center: this.center,
                    list: this.list
                };
            }

        },

        connected() {
            toggleClass(this.$el, this.clsContainer, !$(`.${this.clsContainer}`, this.$el));
        },

        update: {

            write() {

                $$(`[${this.attrItem}],[data-${this.attrItem}]`, this.$el).forEach(el => {
                    var index = data(el, this.attrItem);
                    this.maxIndex && toggleClass(el, 'uk-hidden', isNumeric(index) && (this.sets && !includes(this.sets, toFloat(index)) || index > this.maxIndex));
                });

            },

            events: ['load', 'resize']

        },

        events: {

            beforeitemshow(e) {

                if (!this.dragging && this.sets && this.stack.length < 2 && !includes(this.sets, this.index)) {
                    this.index = this.getValidIndex();
                }

                var diff = Math.abs(this.index + (this.dir > 0
                        ? this.index < this.prevIndex ? this.maxIndex + 1 : 0
                        : this.index > this.prevIndex ? -this.maxIndex : 0
                ) - this.prevIndex);

                if (!this.dragging && diff > 1) {

                    for (var i = 0; i < diff; i++) {
                        this.stack.splice(1, 0, this.dir > 0 ? 'next' : 'previous');
                    }

                    e.preventDefault();
                    return;
                }

                this.duration = Object(__WEBPACK_IMPORTED_MODULE_0__mixin_slider__["b" /* speedUp */])(this.avgWidth / this.velocity)
                    * ((
                        this.dir < 0 || !this.slides[this.prevIndex]
                            ? this.slides[this.index]
                            : this.slides[this.prevIndex]
                    ).offsetWidth / this.avgWidth);

                this.reorder();

            }

        },

        methods: {

            reorder() {

                css(this.slides, 'order', '');

                if (this.finite) {
                    return;
                }

                this.slides.forEach((slide, i) =>
                    css(slide, 'order', this.dir > 0 && i < this.prevIndex
                        ? 1
                        : this.dir < 0 && i >= this.index
                            ? -1
                            : ''
                    )
                );

                if (!this.center) {
                    return;
                }

                var index = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index,
                    next = this.slides[index],
                    width = this.list.offsetWidth / 2 - next.offsetWidth / 2,
                    j = 0;

                while (width >= 0) {
                    var slideIndex = this.getIndex(--j + index, index),
                        slide = this.slides[slideIndex];

                    css(slide, 'order', slideIndex > index ? -2 : -1);
                    width -= slide.offsetWidth;
                }

            },

            getValidIndex(index = this.index, prevIndex = this.prevIndex) {

                index = this.getIndex(index, prevIndex);

                if (!this.sets) {
                    return index;
                }

                var prev;

                do {

                    if (includes(this.sets, index)) {
                        return index;
                    }

                    prev = index;
                    index = this.getIndex(index + this.dir, prevIndex);

                } while (index !== prev);

                return index;
            }

        }

    });

}

if (false) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    var {clamp, css, Deferred, isRtl, noop, toNodes, Transition} = UIkit.util;

    function Transitioner(prev, next, dir, {center, easing, list}) {

        var deferred = new Deferred();

        var from = prev
                ? Transitioner.getLeft(prev, list, center)
                : Transitioner.getLeft(next, list, center) + next.offsetWidth * dir,
            to = next
                ? Transitioner.getLeft(next, list, center)
                : from + prev.offsetWidth * dir * (isRtl ? -1 : 1);

        return {

            dir,

            show(duration, percent = 0, linear) {

                duration -= Math.round(duration * clamp(percent, -1, 1));

                this.translate(percent);

                Transition
                    .start(list, {transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(-to * (isRtl ? -1 : 1), 'px')}, duration, linear ? 'linear' : easing)
                    .then(deferred.resolve, noop);

                return deferred.promise;

            },

            stop() {
                return Transition.stop(list);
            },

            cancel() {
                Transition.cancel(list);
            },

            reset() {
                css(list, 'transform', '');
            },

            forward(duration, percent = this.percent()) {
                Transition.cancel(list);
                return this.show(duration, percent, true);
            },

            translate(percent) {

                var distance = this.getDistance() * dir * (isRtl ? -1 : 1);

                css(list, 'transform', Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(clamp(
                    -to + (distance - distance * percent),
                    -Transitioner.getWidth(list),
                    list.offsetWidth
                ) * (isRtl ? -1 : 1), 'px'));

            },

            percent() {
                return Math.abs((css(list, 'transform').split(',')[4] * (isRtl ? -1 : 1) + from) / (to - from));
            },

            getDistance() {
                return Math.abs(to - from);
            }

        };

    }

    Transitioner.getLeft = function (el, list, center) {

        var left = Transitioner.getElLeft(el, list);

        return center
            ? left - Transitioner.center(el, list)
            : Math.min(left, Transitioner.getMax(list));

    };

    Transitioner.getMax = function (list) {
        return Math.max(0, Transitioner.getWidth(list) - list.offsetWidth);
    };

    Transitioner.getWidth = function (list) {
        return toNodes(list.children).reduce((right, el) => el.offsetWidth + right, 0);
    };

    Transitioner.getMaxWidth = function (list) {
        return toNodes(list.children).reduce((right, el) => Math.max(right, el.offsetWidth), 0);
    };

    Transitioner.center = function (el, list) {
        return list.offsetWidth / 2 - el.offsetWidth / 2;
    };

    Transitioner.getElLeft = function (el, list) {
        return (el.offsetLeft + (isRtl ? el.offsetWidth - list.offsetWidth : 0)) * (isRtl ? -1 : 1);
    };

    return Transitioner;

});


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_slideshow__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_slideshow_animations__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_slideshow_parallax__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixin_internal_slider_reactive__ = __webpack_require__(22);





function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    UIkit.use(__WEBPACK_IMPORTED_MODULE_2__internal_slideshow_parallax__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_0__mixin_slideshow__["a" /* default */]);

    var {mixin} = UIkit;
    var {height} = UIkit.util;

    var Animations = Object(__WEBPACK_IMPORTED_MODULE_1__internal_slideshow_animations__["a" /* default */])(UIkit);

    UIkit.component('slideshow', {

        mixins: [mixin.class, mixin.slideshow, Object(__WEBPACK_IMPORTED_MODULE_3__mixin_internal_slider_reactive__["a" /* default */])(UIkit)],

        props: {
            ratio: String,
            minHeight: Boolean,
            maxHeight: Boolean,
        },

        defaults: {
            ratio: '16:9',
            minHeight: false,
            maxHeight: false,
            selList: '.uk-slideshow-items',
            attrItem: 'uk-slideshow-item',
            selNav: '.uk-slideshow-nav',
            Animations
        },

        update: {

            read() {

                var [width, height] = this.ratio.split(':').map(Number);

                height = height * this.$el.offsetWidth / width;

                if (this.minHeight) {
                    height = Math.max(this.minHeight, height);
                }

                if (this.maxHeight) {
                    height = Math.min(this.maxHeight, height);
                }

                return {height};
            },

            write({height: hgt}) {
                height(this.list, Math.floor(hgt));
            },

            events: ['load', 'resize']

        }

    });

}

if (false) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    var {mixin} = UIkit;
    var {assign, css} = UIkit.util;

    var Animations = assign({}, mixin.slideshow.defaults.Animations, {

        fade: {

            show() {
                return [
                    {opacity: 0, zIndex: 0},
                    {zIndex: -1}
                ];
            },

            percent(current) {
                return 1 - css(current, 'opacity');
            },

            translate(percent) {
                return [
                    {opacity: 1 - percent, zIndex: 0},
                    {zIndex: -1}
                ];
            }

        },

        scale: {

            show() {
                return [
                    {opacity: 0, transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["b" /* scale3d */])(1 + .5), zIndex: 0},
                    {zIndex: -1}
                ];
            },

            percent(current) {
                return 1 - css(current, 'opacity');
            },

            translate(percent) {
                return [
                    {opacity: 1 - percent, transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["b" /* scale3d */])(1 + .5 * percent), zIndex: 0},
                    {zIndex: -1}
                ];
            }

        },

        pull: {

            show(dir) {
                return dir < 0
                    ? [
                        {transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(30), zIndex: -1},
                        {transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(), zIndex: 0},
                    ]
                    : [
                        {transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(-100), zIndex: 0},
                        {transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(), zIndex: -1}
                    ];
            },

            percent(current, next, dir) {
                return dir < 0
                    ? 1 - Animations.translated(next)
                    : Animations.translated(current);
            },

            translate(percent, dir) {
                return dir < 0
                    ? [
                        {transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(30 * percent), zIndex: -1},
                        {transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(-100 * (1 - percent)), zIndex: 0},
                    ]
                    : [
                        {transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(-percent * 100), zIndex: 0},
                        {transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(30 * (1 - percent)), zIndex: -1}
                    ];
            }

        },

        push: {

            show(dir) {
                return dir < 0
                    ? [
                        {transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(100), zIndex: 0},
                        {transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(), zIndex: -1},
                    ]
                    : [
                        {transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(-30), zIndex: -1},
                        {transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(), zIndex: 0}
                    ];
            },

            percent(current, next, dir) {
                return dir > 0
                    ? 1 - Animations.translated(next)
                    : Animations.translated(current);
            },

            translate(percent, dir) {
                return dir < 0
                    ? [
                        {transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(percent * 100), zIndex: 0},
                        {transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(-30 * (1 - percent)), zIndex: -1},
                    ]
                    : [
                        {transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(-30 * percent), zIndex: -1},
                        {transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(100 * (1 - percent)), zIndex: 0}
                    ];
            }

        }

    });

    return Animations;

});


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_parallax__ = __webpack_require__(117);


function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    UIkit.use(__WEBPACK_IMPORTED_MODULE_0__mixin_parallax__["a" /* default */]);

    var {mixin} = UIkit;
    var {closest, css, endsWith, noop, Transition} = UIkit.util;

    UIkit.component('slideshow-parallax', {

        mixins: [mixin.parallax],

        computed: {

            item() {
                var slideshow = UIkit.getComponent(closest(this.$el, '.uk-slideshow'), 'slideshow');
                return slideshow && closest(this.$el, slideshow.slidesSelector);
            }

        },

        events: [

            {

                name: 'itemshown',

                self: true,

                el() {
                    return this.item;
                },

                handler() {
                    css(this.$el, this.getCss(.5));
                }

            },

            {
                name: 'itemin itemout',

                self: true,

                el() {
                    return this.item;
                },

                handler({type, detail: {percent, duration, timing, dir}}) {

                    Transition.cancel(this.$el);
                    css(this.$el, this.getCss(getCurrent(type, dir, percent)));

                    Transition.start(this.$el, this.getCss(isIn(type)
                        ? .5
                        : dir > 0
                            ? 1
                            : 0
                    ), duration, timing).catch(noop);

                }
            },

            {
                name: 'transitioncanceled transitionend',

                self: true,

                el() {
                    return this.item;
                },

                handler() {
                    Transition.cancel(this.$el);
                }

            },

            {
                name: 'itemtranslatein itemtranslateout',

                self: true,

                el() {
                    return this.item;
                },

                handler({type, detail: {percent, dir}}) {
                    Transition.cancel(this.$el);
                    css(this.$el, this.getCss(getCurrent(type, dir, percent)));
                }
            }

        ]

    });

    function isIn(type) {
        return endsWith(type, 'in');
    }

    function getCurrent(type, dir, percent) {

        percent /= 2;

        return !isIn(type)
            ? dir < 0
                ? percent
                : 1 - percent
            : dir < 0
                ? 1 - percent
                : percent;
    }

}

if (false) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var {mixin, util} = UIkit;
    var {css, Dimensions, each, getImage, includes, isNumber, isUndefined, toFloat, win} = util;

    var props = ['x', 'y', 'bgx', 'bgy', 'rotate', 'scale', 'color', 'backgroundColor', 'borderColor', 'opacity', 'blur', 'hue', 'grayscale', 'invert', 'saturate', 'sepia', 'fopacity'];

    mixin.parallax = {

        props: props.reduce((props, prop) => {
            props[prop] = 'list';
            return props;
        }, {
            media: 'media'
        }),

        defaults: props.reduce((defaults, prop) => {
            defaults[prop] = undefined;
            return defaults;
        }, {
            media: false
        }),

        computed: {

            props(properties, $el) {

                return props.reduce((props, prop) => {

                    if (isUndefined(properties[prop])) {
                        return props;
                    }

                    var isColor = prop.match(/color/i),
                        isCssProp = isColor || prop === 'opacity',
                        steps = properties[prop].slice(0),
                        pos, bgPos, diff;

                    if (isCssProp) {
                        css($el, prop, '');
                    }

                    if (steps.length < 2) {
                        steps.unshift((prop === 'scale'
                            ? 1
                            : isCssProp
                                ? css($el, prop)
                                : 0) || 0);
                    }

                    var unit = includes(steps.join(''), '%') ? '%' : 'px';

                    if (isColor) {

                        var color = $el.style.color;
                        steps = steps.map(step => parseColor($el, step));
                        $el.style.color = color;

                    } else {

                        steps = steps.map(toFloat);

                    }

                    if (prop.match(/^bg/)) {

                        css($el, `background-position-${prop[2]}`, '');
                        bgPos = css($el, 'backgroundPosition').split(' ')[prop[2] === 'x' ? 0 : 1]; // IE 11 can't read background-position-[x|y]

                        if (this.covers) {

                            var min = Math.min(...steps),
                                max = Math.max(...steps),
                                down = steps.indexOf(min) < steps.indexOf(max);

                            diff = max - min;

                            steps = steps.map(step => step - (down ? min : max));
                            pos = `${down ? -diff : 0}px`;

                        } else {

                            pos = bgPos;

                        }
                    }

                    props[prop] = {steps, unit, pos, bgPos, diff};

                    return props;

                }, {});

            },

            bgProps() {
                return ['bgx', 'bgy'].filter(bg => bg in this.props);
            },

            covers(_, $el) {
                return css($el.style.backgroundSize !== '' ? css($el, 'backgroundSize', '') : $el, 'backgroundSize') === 'cover';
            }

        },

        disconnected() {
            delete this._image;
        },

        update: [

            {

                read(data) {

                    this._resetComputeds();

                    data.active = !this.media || win.matchMedia(this.media).matches;

                    if (data.image) {
                        data.image.dimEl = {
                            width: this.$el.offsetWidth,
                            height: this.$el.offsetHeight
                        };
                    }

                    if ('image' in data || !this.covers || !this.bgProps.length) {
                        return;
                    }

                    var src = css(this.$el, 'backgroundImage').replace(/^none|url\(["']?(.+?)["']?\)$/, '$1');

                    if (!src) {
                        return;
                    }

                    data.image = false;

                    getImage(src).then(img => {
                        data.image = {
                            width: img.naturalWidth,
                            height: img.naturalHeight
                        };

                        this.$emit();
                    });

                },

                write({image, active}) {

                    if (!image) {
                        return;
                    }

                    if (!active) {
                        css(this.$el, {backgroundSize: '', backgroundRepeat: ''});
                        return;
                    }

                    var dimEl = image.dimEl,
                        dim = Dimensions.cover(image, dimEl);

                    this.bgProps.forEach(prop => {

                        var {diff, bgPos, steps} = this.props[prop],
                            attr = prop === 'bgy' ? 'height' : 'width',
                            span = dim[attr] - dimEl[attr];

                        if (!bgPos.match(/%$|0px/)) {
                            return;
                        }

                        if (span < diff) {
                            dimEl[attr] = dim[attr] + diff - span;
                        } else if (span > diff) {

                            bgPos = parseFloat(bgPos);

                            if (bgPos) {
                                this.props[prop].steps = steps.map(step => step - (span - diff) / (100 / bgPos));
                            }
                        }

                        dim = Dimensions.cover(image, dimEl);
                    });

                    css(this.$el, {
                        backgroundSize: `${dim.width}px ${dim.height}px`,
                        backgroundRepeat: 'no-repeat'
                    });

                },

                events: ['load', 'resize']

            }

        ],

        methods: {

            reset() {
                each(this.getCss(0), (_, prop) => css(this.$el, prop, ''));
            },

            getCss(percent) {

                var translated = false,
                    props = this.props;

                return Object.keys(props).reduce((css, prop) => {

                    var {steps, unit, pos} = props[prop],
                        value = getValue(steps, percent);

                    switch (prop) {

                        // transforms
                        case 'x':
                        case 'y':

                            if (translated) {
                                break;
                            }

                            var [x, y] = ['x', 'y'].map(dir => prop === dir
                                ? value + unit
                                : props[dir]
                                    ? getValue(props[dir].steps, percent) + props[dir].unit
                                    : 0
                            );

                            translated = css.transform += ` translate3d(${x}, ${y}, 0)`;
                            break;
                        case 'rotate':
                            css.transform += ` rotate(${value}deg)`;
                            break;
                        case 'scale':
                            css.transform += ` scale(${value})`;
                            break;

                        // bg image
                        case 'bgy':
                        case 'bgx':
                            css[`background-position-${prop[2]}`] = `calc(${pos} + ${value + unit})`;
                            break;

                        // color
                        case 'color':
                        case 'backgroundColor':
                        case 'borderColor':

                            var [start, end, p] = getStep(steps, percent);

                            css[prop] = `rgba(${
                                start.map((value, i) => {
                                    value = value + p * (end[i] - value);
                                    return i === 3 ? toFloat(value) : parseInt(value, 10);
                                }).join(',')
                            })`;
                            break;

                        // CSS Filter
                        case 'blur':
                            css.filter += ` blur(${value}px)`;
                            break;
                        case 'hue':
                            css.filter += ` hue-rotate(${value}deg)`;
                            break;
                        case 'fopacity':
                            css.filter += ` opacity(${value}%)`;
                            break;
                        case 'grayscale':
                        case 'invert':
                        case 'saturate':
                        case 'sepia':
                            css.filter += ` ${prop}(${value}%)`;
                            break;

                        default:
                            css[prop] = value;
                    }

                    return css;

                }, {transform: '', filter: ''});

            }

        }

    };

    function parseColor(el, color) {
        return css(css(el, 'color', color), 'color').split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(n => toFloat(n));
    }

    function getStep(steps, percent) {
        var count = steps.length - 1,
            index = Math.min(Math.floor(count * percent), count - 1),
            step = steps.slice(index, index + 2);

        step.push(percent === 1 ? 1 : percent % (1 / count) * count);

        return step;
    }

    function getValue(steps, percent) {
        var [start, end, p] = getStep(steps, percent);
        return (isNumber(start)
            ? start + Math.abs(start - end) * p * (start < end ? 1 : -1)
            : +end
        ).toFixed(2);
    }

}

if (false) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var {util, mixin} = UIkit;
    var {append, attr, doc, flipPosition, hasAttr, includes, isTouch, isVisible, matches, on, pointerDown, pointerEnter, pointerLeave, remove, within} = util;

    var actives = [];

    UIkit.component('tooltip', {

        attrs: true,

        mixins: [mixin.container, mixin.togglable, mixin.position],

        props: {
            delay: Number,
            title: String
        },

        defaults: {
            pos: 'top',
            title: '',
            delay: 0,
            animation: ['uk-animation-scale-up'],
            duration: 100,
            cls: 'uk-active',
            clsPos: 'uk-tooltip'
        },

        beforeConnect() {
            this._hasTitle = hasAttr(this.$el, 'title');
            attr(this.$el, {title: '', 'aria-expanded': false});
        },

        disconnected() {
            this.hide();
            attr(this.$el, {title: this._hasTitle ? this.title : null, 'aria-expanded': null});
        },

        methods: {

            show() {

                if (includes(actives, this)) {
                    return;
                }

                actives.forEach(active => active.hide());
                actives.push(this);

                this._unbind = on(doc, 'click', e => !within(e.target, this.$el) && this.hide());

                clearTimeout(this.showTimer);

                this.tooltip = append(this.container, `<div class="${this.clsPos}" aria-hidden><div class="${this.clsPos}-inner">${this.title}</div></div>`);

                attr(this.$el, 'aria-expanded', true);

                this.positionAt(this.tooltip, this.$el);

                this.origin = this.getAxis() === 'y' ? `${flipPosition(this.dir)}-${this.align}` : `${this.align}-${flipPosition(this.dir)}`;

                this.showTimer = setTimeout(() => {

                    this.toggleElement(this.tooltip, true);

                    this.hideTimer = setInterval(() => {

                        if (!isVisible(this.$el)) {
                            this.hide();
                        }

                    }, 150);

                }, this.delay);
            },

            hide() {

                var index = actives.indexOf(this);

                if (!~index || matches(this.$el, 'input') && this.$el === doc.activeElement) {
                    return;
                }

                actives.splice(index, 1);

                clearTimeout(this.showTimer);
                clearInterval(this.hideTimer);
                attr(this.$el, 'aria-expanded', false);
                this.toggleElement(this.tooltip, false);
                this.tooltip && remove(this.tooltip);
                this.tooltip = false;
                this._unbind();

            }

        },

        events: {

            [`focus ${pointerEnter} ${pointerDown}`](e) {
                if (e.type !== pointerDown || !isTouch(e)) {
                    this.show();
                }
            },

            blur: 'hide',

            [pointerLeave](e) {
                if (!isTouch(e)) {
                    this.hide();
                }
            }

        }

    });

}

if (false) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

/*! UIkit 3.0.0-beta.38 | http://www.getuikit.com | (c) 2014 - 2017 YOOtheme | MIT License */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('uikiticons', factory) :
	(global.UIkitIcons = factory());
}(this, (function () { 'use strict';

var album = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"5\" y=\"2\" width=\"10\" height=\"1\" /> <rect x=\"3\" y=\"4\" width=\"14\" height=\"1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"6.5\" width=\"17\" height=\"11\" /></svg>";
var ban = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /> <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"4\" y1=\"3.5\" x2=\"16\" y2=\"16.5\" /></svg>";
var behance = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z\" /> <path d=\"M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z\" /> <rect x=\"13\" y=\"4\" width=\"5\" height=\"1.4\" /></svg>";
var bell = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z\" /> <path fill=\"none\" stroke=\"#000\" d=\"M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16\" /></svg>";
var bold = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z\" /></svg>";
var bolt = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z\" /></svg>";
var bookmark = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5\" /></svg>";
var calendar = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z\" /> <rect width=\"1\" height=\"3\" x=\"6\" y=\"2\" /> <rect width=\"1\" height=\"3\" x=\"13\" y=\"2\" /></svg>";
var camera = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10.8\" r=\"3.8\" /> <path fill=\"none\" stroke=\"#000\" d=\"M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z\" /></svg>";
var cart = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"7.3\" cy=\"17.3\" r=\"1.4\" /> <circle cx=\"13.3\" cy=\"17.3\" r=\"1.4\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5\" /></svg>";
var check = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"4,10 8,15 17,4\" /></svg>";
var clock = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /> <rect x=\"9\" y=\"4\" width=\"1\" height=\"7\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.018,14.197 L9.445,10.625\" /></svg>";
var close = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.06\" d=\"M16,16 L4,4\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.06\" d=\"M16,4 L4,16\" /></svg>";
var code = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"13,4 19,10 13,16\" /> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"7,4 1,10 7,16\" /></svg>";
var cog = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" cx=\"9.997\" cy=\"10\" r=\"3.31\" /> <path fill=\"none\" stroke=\"#000\" d=\"M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z\" /></svg>";
var comment = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z\" /></svg>";
var commenting = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5\" /> <circle cx=\"10\" cy=\"8\" r=\"1\" /> <circle cx=\"6\" cy=\"8\" r=\"1\" /> <circle cx=\"14\" cy=\"8\" r=\"1\" /></svg>";
var comments = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"2 0.5 19.5 0.5 19.5 13\" /> <path d=\"M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z\" /></svg>";
var copy = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"2.5\" width=\"12\" height=\"16\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"5 0.5 17.5 0.5 17.5 17\" /></svg>";
var database = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <ellipse fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"4.64\" rx=\"7.5\" ry=\"3.14\" /> <path fill=\"none\" stroke=\"#000\" d=\"M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11\" /> <path fill=\"none\" stroke=\"#000\" d=\"M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25\" /> <path fill=\"none\" stroke=\"#000\" d=\"M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64\" /></svg>";
var desktop = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"8\" y=\"15\" width=\"1\" height=\"2\" /> <rect x=\"11\" y=\"15\" width=\"1\" height=\"2\" /> <rect x=\"5\" y=\"16\" width=\"10\" height=\"1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"3.5\" width=\"17\" height=\"11\" /></svg>";
var download = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"14,10 9.5,14.5 5,10\" /> <rect x=\"3\" y=\"17\" width=\"13\" height=\"1\" /> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"13.91\" x2=\"9.5\" y2=\"3\" /></svg>";
var dribbble = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" cx=\"10\" cy=\"10\" r=\"9\" /></svg>";
var expand = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"13 2 18 2 18 7 17 7 17 3 13 3\" /> <polygon points=\"2 13 3 13 3 17 7 17 7 18 2 18\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M11,9 L17,3\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M3,17 L9,11\" /></svg>";
var facebook = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z\" /></svg>";
var file = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"1.5\" width=\"13\" height=\"17\" /></svg>";
var flickr = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"5.5\" cy=\"9.5\" r=\"3.5\" /> <circle cx=\"14.5\" cy=\"9.5\" r=\"3.5\" /></svg>";
var folder = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5\" /></svg>";
var forward = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z\" /></svg>";
var foursquare = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z\" /></svg>";
var future = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline points=\"19 2 18 2 18 6 14 6 14 7 19 7 19 2\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10\" /> <rect x=\"9\" y=\"4\" width=\"1\" height=\"7\" /> <path d=\"M13.018,14.197 L9.445,10.625\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" /></svg>";
var github = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z\" /></svg>";
var gitter = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"3.5\" y=\"1\" width=\"1.531\" height=\"11.471\" /> <rect x=\"7.324\" y=\"4.059\" width=\"1.529\" height=\"15.294\" /> <rect x=\"11.148\" y=\"4.059\" width=\"1.527\" height=\"15.294\" /> <rect x=\"14.971\" y=\"4.059\" width=\"1.529\" height=\"8.412\" /></svg>";
var google = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z\" /></svg>";
var grid = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"2\" y=\"2\" width=\"3\" height=\"3\" /> <rect x=\"8\" y=\"2\" width=\"3\" height=\"3\" /> <rect x=\"14\" y=\"2\" width=\"3\" height=\"3\" /> <rect x=\"2\" y=\"8\" width=\"3\" height=\"3\" /> <rect x=\"8\" y=\"8\" width=\"3\" height=\"3\" /> <rect x=\"14\" y=\"8\" width=\"3\" height=\"3\" /> <rect x=\"2\" y=\"14\" width=\"3\" height=\"3\" /> <rect x=\"8\" y=\"14\" width=\"3\" height=\"3\" /> <rect x=\"14\" y=\"14\" width=\"3\" height=\"3\" /></svg>";
var happy = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"13\" cy=\"7\" r=\"1\" /> <circle cx=\"7\" cy=\"7\" r=\"1\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10\" r=\"8.5\" /> <path fill=\"none\" stroke=\"#000\" d=\"M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4\" /></svg>";
var hashtag = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z\" /></svg>";
var heart = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" d=\"M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z\" /></svg>";
var history = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"#000\" points=\"1 2 2 2 2 6 6 6 6 7 1 7 1 2\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10\" /> <rect x=\"9\" y=\"4\" width=\"1\" height=\"7\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.018,14.197 L9.445,10.625\" id=\"Shape\" /></svg>";
var home = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65\" /> <polygon points=\"15 4 18 4 18 7 17 7 17 5 15 5\" /> <polygon points=\"3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19\" /></svg>";
var image = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"16.1\" cy=\"6.1\" r=\"1.1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"0.5\" y=\"2.5\" width=\"19\" height=\"15\" /> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"4,13 8,9 13,14\" /> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"11,12 12.5,10.5 16,14\" /></svg>";
var info = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /></svg>";
var instagram = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z\" /> <circle cx=\"14.87\" cy=\"5.26\" r=\"1.09\" /> <path d=\"M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z\" /></svg>";
var italic = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z\" /></svg>";
var joomla = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z\" /> <path d=\"M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8\" /> <path d=\"M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8\" /> <path d=\"M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7\" /></svg>";
var laptop = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect y=\"16\" width=\"20\" height=\"1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"2.5\" y=\"4.5\" width=\"15\" height=\"10\" /></svg>";
var lifesaver = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z\" /></svg>";
var link = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M7.925,11.875 L11.925,7.975\" /></svg>";
var linkedin = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z\" /> <path d=\"M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z\" /></svg>";
var list = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"6\" y=\"4\" width=\"12\" height=\"1\" /> <rect x=\"6\" y=\"9\" width=\"12\" height=\"1\" /> <rect x=\"6\" y=\"14\" width=\"12\" height=\"1\" /> <rect x=\"2\" y=\"4\" width=\"2\" height=\"1\" /> <rect x=\"2\" y=\"9\" width=\"2\" height=\"1\" /> <rect x=\"2\" y=\"14\" width=\"2\" height=\"1\" /></svg>";
var location = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" d=\"M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"6.8\" r=\"2.3\" /></svg>";
var lock = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" height=\"10\" width=\"13\" y=\"8.5\" x=\"3.5\" /> <path fill=\"none\" stroke=\"#000\" d=\"M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8\" /></svg>";
var mail = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"1.4,6.5 10,11 18.6,6.5\" /> <path d=\"M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z\" /></svg>";
var menu = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"2\" y=\"4\" width=\"16\" height=\"1\" /> <rect x=\"2\" y=\"9\" width=\"16\" height=\"1\" /> <rect x=\"2\" y=\"14\" width=\"16\" height=\"1\" /></svg>";
var minus = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect height=\"1\" width=\"18\" y=\"9\" x=\"1\" /></svg>";
var more = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"3\" cy=\"10\" r=\"2\" /> <circle cx=\"10\" cy=\"10\" r=\"2\" /> <circle cx=\"17\" cy=\"10\" r=\"2\" /></svg>";
var move = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"4,5 1,5 1,9 2,9 2,6 4,6 \" /> <polygon points=\"1,16 2,16 2,18 4,18 4,19 1,19 \" /> <polygon points=\"14,16 14,19 11,19 11,18 13,18 13,16 \" /> <rect fill=\"none\" stroke=\"#000\" x=\"5.5\" y=\"1.5\" width=\"13\" height=\"13\" /> <rect x=\"1\" y=\"11\" width=\"1\" height=\"3\" /> <rect x=\"6\" y=\"18\" width=\"3\" height=\"1\" /></svg>";
var nut = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10\" r=\"3.5\" /></svg>";
var pagekit = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19 \" /></svg>";
var pencil = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z\" /> <path fill=\"none\" stroke=\"#000\" d=\"M15.98,7.268 L13.851,5.148\" /></svg>";
var phone = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z\" /> <circle cx=\"10.5\" cy=\"16.5\" r=\"0.8\" /></svg>";
var pinterest = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1\" /></svg>";
var play = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"6.5,5 14.5,10 6.5,15\" /></svg>";
var plus = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"9\" y=\"1\" width=\"1\" height=\"17\" /> <rect x=\"1\" y=\"9\" width=\"17\" height=\"1\" /></svg>";
var pull = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7\" /> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"11\" x2=\"9.5\" y2=\"2\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5\" /></svg>";
var push = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3\" /> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"10\" x2=\"9.5\" y2=\"1\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5\" /></svg>";
var question = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /> <circle cx=\"10.44\" cy=\"14.42\" r=\"1.05\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" d=\"M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75\" /></svg>";
var receiver = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" d=\"M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611\" /></svg>";
var refresh = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"9.9 2 12.79 4.89 9.79 7.9\" /></svg>";
var reply = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z\" /></svg>";
var rss = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"3.12\" cy=\"16.8\" r=\"1.85\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5\" /></svg>";
var search = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\" /></svg>";
var server = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"3\" y=\"3\" width=\"1\" height=\"2\" /> <rect x=\"5\" y=\"3\" width=\"1\" height=\"2\" /> <rect x=\"7\" y=\"3\" width=\"1\" height=\"2\" /> <rect x=\"16\" y=\"3\" width=\"1\" height=\"1\" /> <rect x=\"16\" y=\"10\" width=\"1\" height=\"1\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"9.9\" cy=\"17.4\" r=\"1.4\" /> <rect x=\"3\" y=\"10\" width=\"1\" height=\"2\" /> <rect x=\"5\" y=\"10\" width=\"1\" height=\"2\" /> <rect x=\"9.5\" y=\"14\" width=\"1\" height=\"2\" /> <rect x=\"3\" y=\"17\" width=\"6\" height=\"1\" /> <rect x=\"11\" y=\"17\" width=\"6\" height=\"1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"1.5\" width=\"17\" height=\"5\" /> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"8.5\" width=\"17\" height=\"5\" /></svg>";
var settings = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <ellipse fill=\"none\" stroke=\"#000\" cx=\"6.11\" cy=\"3.55\" rx=\"2.11\" ry=\"2.15\" /> <ellipse fill=\"none\" stroke=\"#000\" cx=\"6.11\" cy=\"15.55\" rx=\"2.11\" ry=\"2.15\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"13.15\" cy=\"9.55\" r=\"2.15\" /> <rect x=\"1\" y=\"3\" width=\"3\" height=\"1\" /> <rect x=\"10\" y=\"3\" width=\"8\" height=\"1\" /> <rect x=\"1\" y=\"9\" width=\"8\" height=\"1\" /> <rect x=\"15\" y=\"9\" width=\"3\" height=\"1\" /> <rect x=\"1\" y=\"15\" width=\"3\" height=\"1\" /> <rect x=\"10\" y=\"15\" width=\"8\" height=\"1\" /></svg>";
var shrink = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"11 4 12 4 12 8 16 8 16 9 11 9\" /> <polygon points=\"4 11 9 11 9 16 8 16 8 12 4 12\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M12,8 L18,2\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M2,18 L8,12\" /></svg>";
var social = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13.4\" y1=\"14\" x2=\"6.3\" y2=\"10.7\" /> <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13.5\" y1=\"5.5\" x2=\"6.5\" y2=\"8.8\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"15.5\" cy=\"4.6\" r=\"2.3\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"15.5\" cy=\"14.8\" r=\"2.3\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"4.5\" cy=\"9.8\" r=\"2.3\" /></svg>";
var soundcloud = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z\" /> <rect x=\"6\" y=\"6.5\" width=\"1.5\" height=\"8.5\" /> <rect x=\"3\" y=\"8\" width=\"1.5\" height=\"7\" /> <rect y=\"10\" width=\"1.5\" height=\"5\" /></svg>";
var star = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27\" /></svg>";
var strikethrough = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z\" /> <rect x=\"3\" y=\"10\" width=\"15\" height=\"1\" /></svg>";
var table = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"1\" y=\"3\" width=\"18\" height=\"1\" /> <rect x=\"1\" y=\"7\" width=\"18\" height=\"1\" /> <rect x=\"1\" y=\"11\" width=\"18\" height=\"1\" /> <rect x=\"1\" y=\"15\" width=\"18\" height=\"1\" /></svg>";
var tablet = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z\" /> <circle cx=\"10.5\" cy=\"16.3\" r=\"0.8\" /></svg>";
var tag = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z\" /> <circle cx=\"14\" cy=\"6\" r=\"1\" /></svg>";
var thumbnails = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"3.5\" width=\"5\" height=\"5\" /> <rect fill=\"none\" stroke=\"#000\" x=\"11.5\" y=\"3.5\" width=\"5\" height=\"5\" /> <rect fill=\"none\" stroke=\"#000\" x=\"11.5\" y=\"11.5\" width=\"5\" height=\"5\" /> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"11.5\" width=\"5\" height=\"5\" /></svg>";
var trash = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"6.5 3 6.5 1.5 13.5 1.5 13.5 3\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"4.5 4 4.5 18.5 15.5 18.5 15.5 4\" /> <rect x=\"8\" y=\"7\" width=\"1\" height=\"9\" /> <rect x=\"11\" y=\"7\" width=\"1\" height=\"9\" /> <rect x=\"2\" y=\"3\" width=\"16\" height=\"1\" /></svg>";
var tripadvisor = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z\" /></svg>";
var tumblr = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z\" /></svg>";
var tv = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"7\" y=\"16\" width=\"6\" height=\"1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"0.5\" y=\"3.5\" width=\"19\" height=\"11\" /></svg>";
var twitter = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74\" /></svg>";
var uikit = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3\" /> <polygon points=\"9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3\" /></svg>";
var unlock = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"8.5\" width=\"13\" height=\"10\" /> <path fill=\"none\" stroke=\"#000\" d=\"M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9\" /></svg>";
var upload = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"5 8 9.5 3.5 14 8 \" /> <rect x=\"3\" y=\"17\" width=\"13\" height=\"1\" /> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"15\" x2=\"9.5\" y2=\"4\" /></svg>";
var user = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.9\" cy=\"6.4\" r=\"4.4\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2\" /></svg>";
var users = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"7.7\" cy=\"8.6\" r=\"3.5\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1\" /></svg>";
var vimeo = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z\" /></svg>";
var warning = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"10\" cy=\"14\" r=\"1\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /> <path d=\"M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z\" /></svg>";
var whatsapp = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9\" /></svg>";
var wordpress = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z\" /></svg>";
var world = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M1,10.5 L19,10.5\" /> <path fill=\"none\" stroke=\"#000\" d=\"M2.35,15.5 L17.65,15.5\" /> <path fill=\"none\" stroke=\"#000\" d=\"M2.35,5.5 L17.523,5.5\" /> <path fill=\"none\" stroke=\"#000\" d=\"M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10.5\" r=\"9\" /></svg>";
var xing = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z\" /> <path d=\"M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z\" /></svg>";
var yelp = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z\" /></svg>";
var youtube = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z\" /></svg>";
var Icons = {
	album: album,
	ban: ban,
	behance: behance,
	bell: bell,
	bold: bold,
	bolt: bolt,
	bookmark: bookmark,
	calendar: calendar,
	camera: camera,
	cart: cart,
	check: check,
	clock: clock,
	close: close,
	code: code,
	cog: cog,
	comment: comment,
	commenting: commenting,
	comments: comments,
	copy: copy,
	database: database,
	desktop: desktop,
	download: download,
	dribbble: dribbble,
	expand: expand,
	facebook: facebook,
	file: file,
	flickr: flickr,
	folder: folder,
	forward: forward,
	foursquare: foursquare,
	future: future,
	github: github,
	gitter: gitter,
	google: google,
	grid: grid,
	happy: happy,
	hashtag: hashtag,
	heart: heart,
	history: history,
	home: home,
	image: image,
	info: info,
	instagram: instagram,
	italic: italic,
	joomla: joomla,
	laptop: laptop,
	lifesaver: lifesaver,
	link: link,
	linkedin: linkedin,
	list: list,
	location: location,
	lock: lock,
	mail: mail,
	menu: menu,
	minus: minus,
	more: more,
	move: move,
	nut: nut,
	pagekit: pagekit,
	pencil: pencil,
	phone: phone,
	pinterest: pinterest,
	play: play,
	plus: plus,
	pull: pull,
	push: push,
	question: question,
	receiver: receiver,
	refresh: refresh,
	reply: reply,
	rss: rss,
	search: search,
	server: server,
	settings: settings,
	shrink: shrink,
	social: social,
	soundcloud: soundcloud,
	star: star,
	strikethrough: strikethrough,
	table: table,
	tablet: tablet,
	tag: tag,
	thumbnails: thumbnails,
	trash: trash,
	tripadvisor: tripadvisor,
	tumblr: tumblr,
	tv: tv,
	twitter: twitter,
	uikit: uikit,
	unlock: unlock,
	upload: upload,
	user: user,
	users: users,
	vimeo: vimeo,
	warning: warning,
	whatsapp: whatsapp,
	wordpress: wordpress,
	world: world,
	xing: xing,
	yelp: yelp,
	youtube: youtube,
	"500px": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719\t\tc0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449\t\tc-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045\t\tc-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z\" /> <path d=\"M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066\t\tc0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564\t\tc0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271\t\tc0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z\" /> <path d=\"M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521\t\tc-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53\t\tc-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203\t\tc-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604\t\tc0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645\t\tc1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z\" /> <path d=\"M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461\t\tc0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882\t\tc0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881\t\tc-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461\t\tc-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915\t\tC5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0\t\tc0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408\t\tc0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406\t\tc-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799\t\tc0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468\t\tc-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607\t\tc0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038\t\tc-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113\t\tc-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z\" /></svg>",
	"arrow-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66\" /> <line fill=\"none\" stroke=\"#000\" x1=\"10.5\" y1=\"4\" x2=\"10.5\" y2=\"15\" /></svg>",
	"arrow-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"10 14 5 9.5 10 5\" /> <line fill=\"none\" stroke=\"#000\" x1=\"16\" y1=\"9.5\" x2=\"5\" y2=\"9.52\" /></svg>",
	"arrow-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"10 5 15 9.5 10 14\" /> <line fill=\"none\" stroke=\"#000\" x1=\"4\" y1=\"9.5\" x2=\"15\" y2=\"9.5\" /></svg>",
	"arrow-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4\" /> <line fill=\"none\" stroke=\"#000\" x1=\"10.5\" y1=\"16\" x2=\"10.5\" y2=\"5\" /></svg>",
	"chevron-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"16 7 10 13 4 7\" /></svg>",
	"chevron-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"13 16 7 10 13 4\" /></svg>",
	"chevron-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"7 4 13 10 7 16\" /></svg>",
	"chevron-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"4 13 10 7 16 13\" /></svg>",
	"cloud-download": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"11.75 16 9.5 18.25 7.25 16\" /> <path fill=\"none\" stroke=\"#000\" d=\"M9.5,18 L9.5,9.5\" /></svg>",
	"cloud-upload": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"7.25 11.75 9.5 9.5 11.75 11.75\" /> <path fill=\"none\" stroke=\"#000\" d=\"M9.5,18 L9.5,9.5\" /></svg>",
	"credit-card": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"4.5\" width=\"17\" height=\"12\" /> <rect x=\"1\" y=\"7\" width=\"18\" height=\"3\" /></svg>",
	"file-edit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5\" /></svg>",
	"git-branch": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"7\" cy=\"3\" r=\"2\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"14\" cy=\"6\" r=\"2\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"7\" cy=\"17\" r=\"2\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5\" /></svg>",
	"git-fork": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"5.79\" cy=\"2.79\" r=\"1.79\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"14.19\" cy=\"2.79\" r=\"1.79\" /> <ellipse fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"10.03\" cy=\"16.79\" rx=\"1.79\" ry=\"1.79\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57\" /></svg>",
	"github-alt": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z\" /></svg>",
	"google-plus": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z\" /> <polygon points=\"20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9 \" /></svg>",
	"minus-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.5\" cy=\"9.5\" r=\"9\" /> <line fill=\"none\" stroke=\"#000\" x1=\"5\" y1=\"9.5\" x2=\"14\" y2=\"9.5\" /></svg>",
	"more-vertical": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"10\" cy=\"3\" r=\"2\" /> <circle cx=\"10\" cy=\"10\" r=\"2\" /> <circle cx=\"10\" cy=\"17\" r=\"2\" /></svg>",
	"paint-bucket": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.42,2.33 L11.7,7.61\" /> <path d=\"M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z\" /></svg>",
	"phone-landscape": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z\" /> <circle cx=\"3.8\" cy=\"10.5\" r=\"0.8\" /></svg>",
	"play-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"8.5 7 13.5 10 8.5 13\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /></svg>",
	"plus-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.5\" cy=\"9.5\" r=\"9\" /> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"5\" x2=\"9.5\" y2=\"14\" /> <line fill=\"none\" stroke=\"#000\" x1=\"5\" y1=\"9.5\" x2=\"14\" y2=\"9.5\" /></svg>",
	"quote-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z\" /> <path d=\"M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z\" /></svg>",
	"sign-in": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3\" /> <polygon points=\"9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5\" /></svg>",
	"sign-out": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5\" /> <polygon points=\"13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3\" /></svg>",
	"tablet-landscape": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z\" /> <circle cx=\"3.7\" cy=\"10.5\" r=\"0.8\" /></svg>",
	"triangle-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"5 7 15 7 10 12\" /></svg>",
	"triangle-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"12 5 7 10 12 15\" /></svg>",
	"triangle-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"8 5 13 10 8 15\" /></svg>",
	"triangle-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"5 13 10 8 15 13\" /></svg>",
	"video-camera": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"18,6 18,14 12,10 \" /> <rect x=\"2\" y=\"5\" width=\"12\" height=\"10\" /></svg>"
};

function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    UIkit.icon.add(Icons);

}

if (typeof window !== 'undefined' && window.UIkit) {
    window.UIkit.use(plugin);
}

return plugin;

})));


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about-bg.jpg": 23,
	"./about-live-1.jpg": 121,
	"./about-live-2.jpg": 122,
	"./about.jpg": 123,
	"./action.jpg": 124,
	"./article-content-image.jpg": 125,
	"./article-image.jpg": 126,
	"./ballet.png": 127,
	"./bg-enroll-success.png": 24,
	"./bg-ensamble-links.png": 25,
	"./bg-menu-bar-small.png": 26,
	"./bg-menu-bar.png": 27,
	"./bg-menu.png": 28,
	"./check.svg": 29,
	"./close.svg": 30,
	"./contacts-aside-image.jpg": 128,
	"./costumedgirl.jpg": 129,
	"./counter.jpg": 130,
	"./dancegirl.png": 131,
	"./dances.png": 132,
	"./domenart.svg": 31,
	"./favicon.gif": 133,
	"./fitness.png": 134,
	"./gray-tutors.jpg": 32,
	"./home-album.jpg": 135,
	"./home-tutor.jpg": 136,
	"./home-video.jpg": 137,
	"./home-videoposter.jpg": 138,
	"./homepage-video.mp4": 139,
	"./intro.jpg": 33,
	"./ioga.png": 140,
	"./list-marker.svg": 34,
	"./logo.svg": 141,
	"./map-icon.svg": 142,
	"./menu-logo.svg": 143,
	"./news-favorite.jpg": 144,
	"./photo-1.jpg": 145,
	"./photo-2.jpg": 146,
	"./photo-3.jpg": 147,
	"./photo-4.jpg": 148,
	"./photo-5.jpg": 149,
	"./photo-6.jpg": 150,
	"./photo-popup.jpg": 151,
	"./psevdo-vk.jpg": 152,
	"./review-image.jpg": 153,
	"./review-photo-1.jpg": 154,
	"./review-photo-2.jpg": 155,
	"./review-photo.jpg": 156,
	"./reviews-intro.jpg": 157,
	"./reward-img.jpg": 158,
	"./sprite.svg": 159,
	"./success-logo.svg": 35,
	"./tutor.jpg": 160,
	"./vk-members.jpg": 36
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 120;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about-live-1.jpg?d1c1a93f4a00f4d0d9f6b467fb77e5be";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about-live-2.jpg?82c44922367c96ba70eb20e7f5464ee9";

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about.jpg?b1b2fef60bdbb9eb5e396ba5fc2e72f6";

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/action.jpg?6cea72644c6e577937df9bb07a3fcc23";

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/article-content-image.jpg?07d3e475d5becc054ff4b3a77f7901d3";

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/article-image.jpg?ddc10b569e673d162c9b2367936151d7";

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ballet.png?51f915a240cb05ac08a0d59bc654a587";

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/contacts-aside-image.jpg?9e2712f16742f3642c6c38eb2c40ff17";

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/costumedgirl.jpg?0ff1dcb947f58ac6d7c037d0558a7fee";

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/counter.jpg?17fbac252e3377bcbdc19b646d1009a0";

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dancegirl.png?032a7d1ade5cbf295e1d5ea5b53c190b";

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dances.png?89a122f9abe35dad9b8d5806b22d3e4e";

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/favicon.gif?86aba3d09d29260970c7a34b6cbf8a1a";

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fitness.png?045339b7052664d647d15d6e22dbd591";

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home-album.jpg?103e3c8d5356c1048bb9338a86e0599e";

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home-tutor.jpg?a8982cefedf5d02369d3a3c7a71b22f3";

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home-video.jpg?2bab03f786a3b8b10a8640bc3c1e6a8f";

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home-videoposter.jpg?333c398a3483a1505ccdf08f1287b59c";

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/homepage-video.mp4?310065bcbc2d4faa2b977bb655dd94ff";

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ioga.png?77af1dcc74616473842b1b324e4230de";

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.svg?b2182cd582c249d0fed8e588a9eb7bcf";

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/map-icon.svg?8be48be12d31ea38fc1c4a3009cc7bfd";

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/menu-logo.svg?3d714ce8f24ce1d02fbd1f388d6bd661";

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/news-favorite.jpg?e1690c80e614830dc4663c817528ef9e";

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/photo-1.jpg?981819a32972973f26c5260719ced570";

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/photo-2.jpg?0816843b3a38b9e00c0b84fc4f5f60a8";

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/photo-3.jpg?f903f96823fa28bc96f964318e64720e";

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/photo-4.jpg?14c50bcb07cb79b3689228ad8bb2d493";

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/photo-5.jpg?a081e8ac3d0e3036acfd72ce20bdbe2e";

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/photo-6.jpg?09a5d6fee615dea09c09c8ba808b884f";

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/photo-popup.jpg?efcffe163ba48fb0f99627ba645ad528";

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/psevdo-vk.jpg?7ba2b5475b295143ab8faf1374be0fd2";

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/review-image.jpg?d5304d0c8adb5b810ebddabc8e099332";

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/review-photo-1.jpg?c53a4c8a3d2e4ddb5362b0d8ff4df2ad";

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/review-photo-2.jpg?ed6011ef9c38ceab17c6369c23a0583c";

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/review-photo.jpg?41d390943de69cc570de84ec244ce5bf";

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/reviews-intro.jpg?5a41d73f1441ca8641304f015ea9ae27";

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/reward-img.jpg?74d2f6c717445ad3343e2ee47a068feb";

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sprite.svg?4659b17c5104560caa9a1b84ae3760e9";

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tutor.jpg?227ac75b3eee0420b88616ef41ccb2a0";

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./StarkRegular/StarkRegular.eot": 14,
	"./StarkRegular/StarkRegular.ttf": 37,
	"./StarkRegular/StarkRegular.woff": 38
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 161;

/***/ })
/******/ ]);