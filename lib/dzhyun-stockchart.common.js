module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "014b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("e53d");
var has = __webpack_require__("07e3");
var DESCRIPTORS = __webpack_require__("8e60");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var META = __webpack_require__("ebfd").KEY;
var $fails = __webpack_require__("294c");
var shared = __webpack_require__("dbdb");
var setToStringTag = __webpack_require__("45f2");
var uid = __webpack_require__("62a0");
var wks = __webpack_require__("5168");
var wksExt = __webpack_require__("ccb9");
var wksDefine = __webpack_require__("6718");
var enumKeys = __webpack_require__("47ee");
var isArray = __webpack_require__("9003");
var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var createDesc = __webpack_require__("aebd");
var _create = __webpack_require__("a159");
var gOPNExt = __webpack_require__("0395");
var $GOPD = __webpack_require__("bf0b");
var $DP = __webpack_require__("d9f6");
var $keys = __webpack_require__("c3a1");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("355d").f = $propertyIsEnumerable;
  __webpack_require__("9aa9").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("b8e3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "0293":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("241e");
var $getPrototypeOf = __webpack_require__("53e2");

__webpack_require__("ce7e")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0395":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("36c3");
var gOPN = __webpack_require__("6abf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "061b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fa99");

/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0a0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("e829");

/***/ }),

/***/ "0a49":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("9b43");
var IObject = __webpack_require__("626a");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var asc = __webpack_require__("cd1c");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "0b21":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__("5ca1");

$export($export.S, 'Math', { sign: __webpack_require__("96fb") });


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "14e0":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
var $parseInt = __webpack_require__("5d6b");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "1af6":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("63b6");

$export($export.S, 'Array', { isArray: __webpack_require__("9003") });


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1cb7":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__("bf0b");
var getPrototypeOf = __webpack_require__("53e2");
var has = __webpack_require__("07e3");
var $export = __webpack_require__("63b6");
var isObject = __webpack_require__("f772");
var anObject = __webpack_require__("e4ae");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "1df8":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("63b6");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("ead6").set });


/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "20d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "20fd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "25b0":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1df8");
module.exports = __webpack_require__("584a").Object.setPrototypeOf;


/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "268f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fde4");

/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("aae3");
var anObject = __webpack_require__("cb7c");
var speciesConstructor = __webpack_require__("ebd6");
var advanceStringIndex = __webpack_require__("0390");
var toLength = __webpack_require__("9def");
var callRegExpExec = __webpack_require__("5f1b");
var regexpExec = __webpack_require__("520a");
var fails = __webpack_require__("79e5");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2f37":
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__("63b6");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "32a6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("241e");
var $keys = __webpack_require__("c3a1");

__webpack_require__("ce7e")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("4bf8");
var toAbsoluteIndex = __webpack_require__("77f1");
var toLength = __webpack_require__("9def");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3702":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("481b");
var ITERATOR = __webpack_require__("5168")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "3846":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("9e1e") && /./g.flags != 'g') __webpack_require__("86cc").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("0bfb")
});


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "3a3d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("14e0");
module.exports = __webpack_require__("584a").Number.parseInt;


/***/ }),

/***/ "3b2b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var inheritIfRequired = __webpack_require__("5dbc");
var dP = __webpack_require__("86cc").f;
var gOPN = __webpack_require__("9093").f;
var isRegExp = __webpack_require__("aae3");
var $flags = __webpack_require__("0bfb");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__("9e1e") && (!CORRECT_NEW || __webpack_require__("79e5")(function () {
  re2[__webpack_require__("2b4c")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__("2aba")(global, 'RegExp', $RegExp);
}

__webpack_require__("7a56")('RegExp');


/***/ }),

/***/ "40c3":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("6b4c");
var TAG = __webpack_require__("5168")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "454f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("46a7");
var $Object = __webpack_require__("584a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "469f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6c1c");
__webpack_require__("1654");
module.exports = __webpack_require__("7d7b");


/***/ }),

/***/ "46a7":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("8e60"), 'Object', { defineProperty: __webpack_require__("d9f6").f });


/***/ }),

/***/ "47ee":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4910":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1cb7");
module.exports = __webpack_require__("584a").Reflect.get;


/***/ }),

/***/ "4aa6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dc62");

/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4d16":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("25b0");

/***/ }),

/***/ "4ee1":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("5168")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "5176":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("51b6");

/***/ }),

/***/ "51b6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a3c3");
module.exports = __webpack_require__("584a").Object.assign;


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "549b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("d864");
var $export = __webpack_require__("63b6");
var toObject = __webpack_require__("241e");
var call = __webpack_require__("b0dc");
var isArrayIter = __webpack_require__("3702");
var toLength = __webpack_require__("b447");
var createProperty = __webpack_require__("20fd");
var getIterFn = __webpack_require__("7cd6");

$export($export.S + $export.F * !__webpack_require__("4ee1")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "54a1":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6c1c");
__webpack_require__("1654");
module.exports = __webpack_require__("95d5");


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5d58":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d8d6");

/***/ }),

/***/ "5d6b":
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__("e53d").parseInt;
var $trim = __webpack_require__("a1ce").trim;
var ws = __webpack_require__("e692");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "5d73":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("469f");

/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "6718":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var LIBRARY = __webpack_require__("b8e3");
var wksExt = __webpack_require__("ccb9");
var defineProperty = __webpack_require__("d9f6").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "67bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f921");

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "69d3":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('asyncIterator');


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6abf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("e6f3");
var hiddenKeys = __webpack_require__("1691").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6b54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3846");
var anObject = __webpack_require__("cb7c");
var $flags = __webpack_require__("0bfb");
var DESCRIPTORS = __webpack_require__("9e1e");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("2aba")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("79e5")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "6c7b":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__("5ca1");

$export($export.P, 'Array', { fill: __webpack_require__("36bd") });

__webpack_require__("9c6c")('fill');


/***/ }),

/***/ "70f1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3a3d");

/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "7445":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
var $parseInt = __webpack_require__("5d6b");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "765d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('observable');


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "774e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d2d5");

/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7cd6":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "7d7b":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var get = __webpack_require__("7cd6");
module.exports = __webpack_require__("584a").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("454f");

/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8aae":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("32a6");
module.exports = __webpack_require__("584a").Object.keys;


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "8feb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4910");

/***/ }),

/***/ "9003":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "9306":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
var toObject = __webpack_require__("241e");
var IObject = __webpack_require__("335c");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("294c")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "9427":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("a159") });


/***/ }),

/***/ "95d5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "96fb":
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a1ce":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
var defined = __webpack_require__("25eb");
var fails = __webpack_require__("294c");
var spaces = __webpack_require__("e692");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "a21f":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "a3c3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("63b6");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("9306") });


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "a4bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8aae");

/***/ }),

/***/ "a745":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f410");

/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "b0dc":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("e4ae");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "b9e9":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("7445");
module.exports = __webpack_require__("584a").parseInt;


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("355d");
var createDesc = __webpack_require__("aebd");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var has = __webpack_require__("07e3");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "bf90":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("36c3");
var $getOwnPropertyDescriptor = __webpack_require__("bf0b").f;

__webpack_require__("ce7e")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "c207":
/***/ (function(module, exports) {



/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("54a1");

/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ccb9":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("5168");


/***/ }),

/***/ "cd1c":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("e853");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "ce7e":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("63b6");
var core = __webpack_require__("584a");
var fails = __webpack_require__("294c");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "d2d5":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("549b");
module.exports = __webpack_require__("584a").Array.from;


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8d6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("6c1c");
module.exports = __webpack_require__("ccb9").f('iterator');


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "dc62":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("9427");
var $Object = __webpack_require__("584a").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e692":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "e814":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("b9e9");

/***/ }),

/***/ "e829":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("2f37");
module.exports = __webpack_require__("584a").Date.now;


/***/ }),

/***/ "e853":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var isArray = __webpack_require__("1169");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "ead6":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("f772");
var anObject = __webpack_require__("e4ae");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("d864")(Function.call, __webpack_require__("bf0b").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "ebd6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("cb7c");
var aFunction = __webpack_require__("d8e8");
var SPECIES = __webpack_require__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "ebfd":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("62a0")('meta');
var isObject = __webpack_require__("f772");
var has = __webpack_require__("07e3");
var setDesc = __webpack_require__("d9f6").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("294c")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "f410":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1af6");
module.exports = __webpack_require__("584a").Array.isArray;


/***/ }),

/***/ "f499":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("a21f");

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f921":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
__webpack_require__("c207");
__webpack_require__("69d3");
__webpack_require__("765d");
module.exports = __webpack_require__("584a").Symbol;


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fa99":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0293");
module.exports = __webpack_require__("584a").Object.getPrototypeOf;


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6a83156a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/stock-chart/src/stock-chart.vue?vue&type=template&id=5acbbcbc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticStyle:{"width":"100%","height":"100%"}},[_c('canvas',{ref:"canvas",style:({width: _vm.width+'px', height: _vm.height + 'px'}),attrs:{"id":_vm.id,"pixelRadio":_vm.pixelRadio,"width":_vm.chartWidth,"height":_vm.chartHeight},on:{"contextmenu":_vm.handleContextMenu}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/stock-chart/src/stock-chart.vue?vue&type=template&id=5acbbcbc&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("e814");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__("6c7b");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./packages/stock-chart/src/charts/Canvas.js






var Canvas_Canvas =
/*#__PURE__*/
function () {
  function Canvas() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        width = _ref.width,
        height = _ref.height,
        pixelRadio = _ref.pixelRadio,
        canvasId = _ref.canvasId;

    _classCallCheck(this, Canvas);

    // 画布显示宽高
    this.width = width || 375;
    this.height = height || 500;
    this.canvasId = canvasId;
    this.pixelRadio = pixelRadio || 2;
    this.charts = [];
    this.currentChartIndex = 0;
  }

  _createClass(Canvas, [{
    key: "initCanvas",
    value: function initCanvas() {
      var canvas = document.getElementById(this.canvasId);
      this.ctx = canvas.getContext('2d');
      var ratio = this.pixelRadio; // 画布实际宽高，即绘图时的宽高

      this.canvasWidth = this.width * ratio;
      this.canvasHeight = this.height * ratio;
    }
  }, {
    key: "getCtx",
    value: function getCtx() {
      !this.ctx && this.initCanvas();
      var ctx = this.ctx;
      return ctx;
    }
  }, {
    key: "redraw",
    value: function redraw() {
      this.initCanvas();
      var currentChart = this.getCurrentChart();

      if (currentChart) {
        currentChart.redraw();
      }
    }
  }, {
    key: "getCurrentChart",
    value: function getCurrentChart() {
      return this.charts[this.currentChartIndex];
    }
  }, {
    key: "show",
    value: function show(chart) {
      if (chart) {
        var index = this.charts.indexOf(chart);

        if (index >= 0) {
          this.currentChartIndex = index; // 这里很重要！如果chart已存在，重新订阅

          chart.initSubscribe();
        } else {
          this.currentChartIndex = this.charts.length;
          this.addChart(chart);
        }
      }

      this.redraw();
    }
  }, {
    key: "addChart",
    value: function addChart(chart) {
      this.charts.push(chart);
      chart.setCanvas(this);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.ctx && this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.ctx.save();
    }
  }, {
    key: "drawCanvas",
    value: function drawCanvas() {
      if (this.ctx) {
        this.ctx.restore();
      }
    }
  }, {
    key: "touchstart",
    value: function touchstart(event) {
      this.lastX = event.changedTouches[0].clientX * this.pixelRadio;
    }
  }, {
    key: "touchmove",
    value: function touchmove(event, deltaX) {
      var chart = this.getCurrentChart();
      var touch = event.touches[0];
      var moveToX = touch.pageX * this.pixelRadio;
      var moveToY = touch.pageY * this.pixelRadio;
      deltaX = deltaX * this.pixelRadio;
      var result = chart && chart.panMove(this.pressed, moveToX, moveToY, deltaX);
      result && (this.lastX = moveToX);
    }
  }, {
    key: "touchend",
    value: function touchend() {
      this.pressed = false;
      this.lastX = 0;
      var chart = this.getCurrentChart();
      chart && chart.panMove(this.pressed);
    }
    /**
     * 长按事件处理
     * @param {Object} event 手指触摸event对象
     */

  }, {
    key: "longtap",
    value: function longtap(event) {
      this.pressed = true;
      var chart = this.getCurrentChart();
      var touch = event.touches[0];
      var moveToX = 0;
      var moveToY = 0;

      if (touch.offsetX && touch.offsetY) {
        // PC端逻辑
        moveToX = touch.offsetX * this.pixelRadio;
        moveToY = touch.offsetY * this.pixelRadio;
      } else {
        // 移动端逻辑
        moveToX = (touch.pageX - event.target.offsetLeft) * this.pixelRadio;
        moveToY = (touch.pageY - event.target.offsetTop) * this.pixelRadio;
      }

      chart && chart.panMove(this.pressed, moveToX, moveToY);
    }
  }, {
    key: "pinch",
    value: function pinch(event, scale) {
      if (!this.pressed) {
        var chart = this.getCurrentChart();
        chart && chart.pinchMove(scale);
      }
    }
    /**
     * 显示和隐藏mask层
     */

  }, {
    key: "toggleMask",
    value: function toggleMask(show) {}
    /**
     * 画一条线
     * @param {number} x1 起始位置x轴坐标
     * @param {*} y1 起始位置y轴坐标
     * @param {*} x2 结束位置x轴坐标
     * @param {*} y2 结束位置y轴坐标
     * @param {*} lineWidth 线条宽度
     * @param {*} style 边框颜色
     */

  }, {
    key: "drawLine",
    value: function drawLine(x1, y1, x2, y2, lineWidth, style) {
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = style;
      ctx.moveTo(this.normalizeDrawLinePoint(x1), this.normalizeDrawLinePoint(y1));
      ctx.lineTo(this.normalizeDrawLinePoint(x2), this.normalizeDrawLinePoint(y2));
      ctx.stroke();
    }
    /**
     * 绘制水平方向的dashed线
     * @param {*} x1 起始点x1坐标
     * @param {*} x2 结束点x2坐标
     * @param {*} y y轴坐标
     * @param {*} lineWidth 线条宽度
     * @param {*} style 边框颜色
     */

  }, {
    key: "createHorzDashedLine",
    value: function createHorzDashedLine(x1, x2, y, lineWidth, style) {
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = style;
      var splitLineLen = 8;
      var dashLen = splitLineLen / 2;
      var dX = x2 - x1;
      var count = dX / splitLineLen + 0.5 << 0;

      for (var i = 0; i < count; i++) {
        ctx.moveTo(this.normalizeDrawLinePoint(x1), this.normalizeDrawLinePoint(y));
        ctx.lineTo(this.normalizeDrawLinePoint(x1 + dashLen), this.normalizeDrawLinePoint(y));
        x1 += splitLineLen;
      }

      ctx.stroke();
    }
    /**
     * 绘制垂直方向的dashed线
     * @param {*} x x坐标
     * @param {*} y1 起始y1坐标
     * @param {*} y2 结束y2坐标
     * @param {*} lineWidth 线条宽度
     * @param {*} style 边框颜色
     */

  }, {
    key: "createVerticalDashedLine",
    value: function createVerticalDashedLine(x, y1, y2, lineWidth, style) {
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = style;
      var splitLineLen = 8;
      var dashLen = splitLineLen / 2;
      var dY = y2 - y1;
      var count = dY / splitLineLen + 0.5 << 0;

      for (var i = 0; i < count; i++) {
        ctx.moveTo(this.normalizeDrawLinePoint(x), this.normalizeDrawLinePoint(y1));
        ctx.lineTo(this.normalizeDrawLinePoint(x), this.normalizeDrawLinePoint(y1 + dashLen));
        y1 += splitLineLen;
      }

      ctx.stroke();
    }
    /**
     * 绘制文字
     * @param {String} text 文字
     * @param {Number} pointX 绘制文字的起始点的x轴坐标
     * @param {Number} pointY 绘制文字的起始点的y轴坐标
     * @param {Number} fontSize 字体大小
     * @param {String} fontFamily 字体大小
     * @param {String} fontStyle 字体颜色
     * @param {String} backgroundStyle 背景色
     */

  }, {
    key: "drawText",
    value: function drawText(text, pointX, pointY, fontSize, fontFamily, fontStyle) {
      var backgroundStyle = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
      var ctx = this.ctx;
      ctx.font = "".concat(fontSize, "px ").concat(fontFamily);
      var textWidth = this.measureText(text, fontSize);
      var x = Math.min(Math.max(pointX, 0), this.canvasWidth - textWidth);
      var y = pointY;

      if (backgroundStyle) {
        // 背景边框
        ctx.fillStyle = backgroundStyle;
        ctx.rect(x - 2, y + 2, textWidth + 4, -(fontSize + 4));
        ctx.fill();
      }

      ctx.beginPath();
      ctx.fillStyle = fontStyle;
      ctx.fillText(text, x, y);
    }
    /**
     * 以一系列点的位置集合绘制一条连续的路径，并以结束点、x坐标轴、起始点绘制一块闭合区域，填充其颜色
     * 例：分时图的主图
     * @param {Array} points 点的位置坐标集合，例：[[x1,y1],[x2,y2],[x3,y3],...]
     * @param {*} y0
     * @param {*} strokeColor 线条颜色
     * @param {*} fillStyle 填充绘画的颜色
     * @param {*} lineWidth 线条宽度
     */

  }, {
    key: "fillPath",
    value: function fillPath(points, y0, strokeColor, fillStyle) {
      var lineWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var ctx = this.ctx;
      ctx.beginPath();
      points.forEach(function (eachPoint, index) {
        if (index === 0) {
          ctx.moveTo(eachPoint[0], eachPoint[1]);
        } else {
          ctx.lineTo(eachPoint[0], eachPoint[1]);
        }
      });
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = strokeColor;
      ctx.lineJoin = 'round';
      ctx.stroke();

      if (points.length > 1) {
        ctx.lineWidth = 0;
        ctx.lineTo(points[points.length - 1][0], y0);
        ctx.lineTo(points[0][0], y0);
        ctx.closePath();
        ctx.fillStyle = fillStyle;
        ctx.fill();
      } else {
        ctx.closePath();
      }
    }
    /**
     * 以一系列点的位置集合绘制一条连续的路径
     * @param {*} points 点的位置坐标集合，例：[[x1,y1],[x2,y2],[x3,y3],...]
     * @param {*} color 线条颜色
     * @param {*} lineWidth 线条宽度
     */

  }, {
    key: "drawPath",
    value: function drawPath(points, color) {
      var lineWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.lineJoin = 'round';
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = color;
      points.forEach(function (eachPoint, index) {
        if (index === 0) {
          ctx.moveTo(eachPoint[0], eachPoint[1]);
        } else {
          ctx.lineTo(eachPoint[0], eachPoint[1]);
        }
      });
      ctx.stroke();
      ctx.closePath();
    }
    /**
     * 创建一个矩形
     * @param {Number} x 矩形路径左上角的x坐标
     * @param {Number} y 矩形路径左上角的y坐标
     * @param {Number} width 矩形路径的宽度
     * @param {Number} height 矩形路径的高度
     * @param {Number} fillStyle 矩形的填充颜色
     * @param {Number} lineWidth 线条宽度
     * @param {String} strokeStyle 线条颜色
     */

  }, {
    key: "drawRect",
    value: function drawRect(x, y, width, height, fillStyle) {
      var lineWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var strokeStyle = arguments.length > 6 ? arguments[6] : undefined;
      var ctx = this.ctx;

      if (x && y && width && height) {
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.closePath();
        ctx.fillStyle = fillStyle;
        ctx.fill();

        if (lineWidth && strokeStyle) {
          ctx.lineWidth = lineWidth;
          ctx.strokeStyle = strokeStyle;
          ctx.stroke();
        }
      }
    }
    /**
     * 绘制一个圆，并填充其颜色
     * @param {Number} x 圆心x轴坐标
     * @param {Number} y 圆心y轴坐标
     * @param {Number} radius 圆的半径
     * @param {String} fillStyle 填充颜色
     * @param {Number} lineWidth 线条宽度
     * @param {String} strokeStyle 线条颜色
     */

  }, {
    key: "drawCircle",
    value: function drawCircle(x, y, radius, fillStyle) {
      var lineWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var strokeStyle = arguments.length > 5 ? arguments[5] : undefined;
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = fillStyle;
      ctx.fill();

      if (lineWidth && strokeStyle) {
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
      }
    }
  }, {
    key: "normalizeDrawLinePoint",
    value: function normalizeDrawLinePoint(point) {
      if (this.pixelRadio === 1) {
        var intPoint = parse_int_default()(point, 10);

        return intPoint > point ? intPoint - 0.5 : intPoint + 0.5;
      }

      return point;
    }
    /**
     * 计算文字的宽度
     * @param {String} text 文字
     */

  }, {
    key: "measureText",
    value: function measureText(text, fontSize, fontFamily) {
      var ctx = this.ctx;
      ctx.font = "".concat(fontSize, "px ").concat(fontFamily);
      return ctx.measureText(text).width; // 计算text的半角长度后乘以每个半角字符的宽度
      // return text.replace(/[\u0391-\uFFE5]/g, 'aa').length * fontSize
      // return text.replace(/[\u0391-\uFFE5]/g, 'aa').length * 5 * this.pixelRadio
    }
  }]);

  return Canvas;
}();


// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("5176");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/number/parse-int.js
var number_parse_int = __webpack_require__("70f1");
var number_parse_int_default = /*#__PURE__*/__webpack_require__.n(number_parse_int);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("a4bb");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("5d58");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("67bb");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__("061b");
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("4d16");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js


function getPrototypeOf_getPrototypeOf(o) {
  getPrototypeOf_getPrototypeOf = set_prototype_of_default.a ? get_prototype_of_default.a : function _getPrototypeOf(o) {
    return o.__proto__ || get_prototype_of_default()(o);
  };
  return getPrototypeOf_getPrototypeOf(o);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("268f");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/reflect/get.js
var get = __webpack_require__("8feb");
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/superPropBase.js

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf_getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/get.js




function get_get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && get_default.a) {
    get_get = get_default.a;
  } else {
    get_get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;

      var desc = get_own_property_descriptor_default()(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return get_get(target, property, receiver || target);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("4aa6");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("a745");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("774e");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("c8bb");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("f499");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("3b2b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./packages/stock-chart/src/utils/stockUtils.js






var EPSILON = 0.00000001;
/**
 * 去代码前缀 SH600000 转为 600000
 * @param {any} obj
 * @returns
 */

var formatStockCode = function formatStockCode(obj) {
  return obj.substring(2);
};
/**
 * 格式化文本，将输入的数字参数格式化为指定精度的字符串
 * @param {!number|string|null} data      需要格式化的数字，可以是数字，字符串或者null对象
 * @param {?number} precision             保留小数精度，null则默认取2位小数
 * @param {?''|'K'|'M'|'B'|'K/M'|'K/M/B'|'万'|'亿'|'万/亿'|'%'} unit    单位，按自定的单位格式化数据，null则为''为不加单位
 * @param {boolean|string=} useDefault    是否使用默认值，默认显示--，字符串类型表示需要显示的默认值
 * @param {boolean=} isAutoPrec    是否自动进行精度控制，true时 对于不到单位转换的情况时直接取整
 * @param {boolean=} isAbs    是否显示数字绝对值
 * @returns {string}
 */


var formatStockText = function formatStockText(data, precision, unit, useDefault, isAutoPrec, isAbs) {
  var n = Number(data);

  if ((data == null || isNaN(n) || n === Infinity || n === -Infinity) && useDefault !== false) {
    return typeof useDefault === 'string' ? useDefault : '--';
  }

  var abs = Math.abs(n);
  var m = n;
  unit = unit || '';
  precision = precision != null ? precision : 2;

  if (unit) {
    if (unit.indexOf('B') >= 0 && abs >= 1000000000) {
      unit = 'B';
      n /= 1000000000;
    } else if (unit.indexOf('万亿') >= 0 && abs >= 1000000000000) {
      unit = '万亿';
      n /= 1000000000000;
    } else if (unit.indexOf('亿') >= 0 && abs >= 100000000) {
      unit = '亿';
      n /= 100000000;
    } else if (unit.indexOf('M') >= 0 && abs >= 1000000) {
      unit = 'M';
      n /= 1000 * 1000;
    } else if (unit.indexOf('万') >= 0 && abs >= 10000) {
      unit = '万';
      n /= 10000;
    } else if (unit.indexOf('K') >= 0 && abs >= 1000) {
      unit = 'K';
      n /= 1000;
    } else if (unit === 100) {
      unit = '';
      n /= 100;
    } else if (unit === '%') {
      n *= 100;
    } else {
      unit = '';
    }
  }

  if (n === m && isAutoPrec === true) {
    precision = 0;
  }

  if (isAbs) {
    n = Math.abs(n);
  }

  return (n + EPSILON).toFixed(precision) + unit;
};
/**
 * 格式化价格
 * @param {any} price 价格
 * @param {number} [precision=2]  精度
 * @param {boolean} [withSign=false]  是否带正负号
 * @returns
 */


var formatPrice = function formatPrice(price) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var withSign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  // 与服务端约定 停牌的股票的价格返回null 若返回0值，则作为正常值处理
  if (withSign && price >= 0) {
    return '+' + formatStockText(price, precision);
  }

  return formatStockText(price, precision);
};
/**
 * 格式化量值
 * @param {any} volume  量
 * @param {any} unit  量单位
 * @param {number} [precision=2] 精度
 * @returns
 */


var formatVolume = function formatVolume(volume) {
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  if (!unit) unit = 1;

  if (volume != null) {
    volume = volume / unit; // 排除null运算后结果为0的情况
  }

  return formatStockText(volume, precision, '万亿', true, true);
};
/**
 * 获取百分比值
 * @param {any} value 值
 * @param {number} [precision=2] 精度
 * @param {boolean} [withSign=true]  是否带正负号
 * @param {number} [ratio=100] 转化比，默认百分比
 * @returns
 */


var formatRatio = function formatRatio(value) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var withSign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var ratio = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  if (!ratio) ratio = 1;

  if (value != null) {
    value = value / ratio; // 排除null运算后结果为0的情况
  }

  if (withSign && value > 0) {
    return '+' + formatStockText(value, precision, '%');
  }

  return formatStockText(value, precision, '%');
};
/**
 * 值转化到对应的颜色
 * @param {any} value 要格式化的值
 * @param {number} [compareValue=0]  比较的基准值
 * @param {string} [style=['', 'stock-up', 'stock-down']] 显示的样式
 * @returns
 */


var formatColor = function formatColor(value) {
  var compareValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['', 'stock-up', 'stock-down'];

  if (!style || style.length <= 2) {
    return '';
  }

  if (typeof value === 'undefined' || value === null || isNaN(value)) return style[0];
  if (value > compareValue) return style[1];else if (value < compareValue) return style[2];
  return style[0];
};
/** 股票类型格式化函数 */
// INDEX = 0,               //指数
// STOCK = 1,               //股票
// FUND = 2,                //基金
// BOND = 3,                //债券
// OTHER_STOCK = 4,         //其它股票
// OPTION = 5,              //选择权
// EXCHANGE = 6,            //外汇
// FUTURE = 7,              //期货
// FTR_IDX = 8,             //期指
// RGZ = 9,                 //认购证
// ETF = 10,                //ETF
// LOF = 11,                //LOF
// COV_BOND = 12,           //可转债
// TRUST = 13,              //信托
// WARRANT = 14,            //权证
// REPO = 15,               //回购
// COMM = 16,               //商品现货
// STOCKFUND = 17,          //股票基金
// BONDFUND = 18,           //债券基金
// HYBRIDFUND = 19,         //混合型基金
// CPTPSVFUND = 20,         //保本型基金
// MONEYFUND = 21,          //货币一般基金
// NVMONEYFUND = 22,        //货币净值基金
// SMFUND = 23,             //短期理财基金
// QDIIFUND = 24,           //QDII基金
// LOANLEND =25,            //拆借
// INTERESTRATE=26,         //利率
// FENJIAFUND=27,           //分级A基金
// FENJIBFUND=28,           //分级B基金
// FENJIMUFUND=29,          //分级母基金


var getStockType = function getStockType(value) {
  var type = '';

  switch (value) {
    case 0:
      type = '指数';
      break;

    case 1:
      type = '股票';
      break;

    case 2:
      type = '基金';
      break;

    case 3:
      type = '债券';
      break;

    case 4:
      type = '其它股票';
      break;

    case 5:
      type = '选择权';
      break;

    case 6:
      type = '外汇';
      break;

    case 7:
      type = '期货';
      break;

    case 8:
      type = '期指';
      break;

    case 9:
      type = '认购证';
      break;

    case 10:
      type = 'ETF';
      break;

    case 11:
      type = 'LOF';
      break;

    case 12:
      type = '可转债';
      break;

    case 13:
      type = '信托';
      break;

    case 14:
      type = '权证';
      break;

    case 15:
      type = '回购';
      break;

    case 16:
      type = '商品现货';
      break;

    case 17:
      type = '股票基金';
      break;

    case 18:
      type = '债券基金';
      break;

    case 19:
      type = '混合型基金';
      break;

    case 20:
      type = '保本型基金';
      break;

    case 21:
      type = '货币一般基金';
      break;

    case 22:
      type = '货币净值基金';
      break;

    case 23:
      type = '短期理财基金';
      break;

    case 24:
      type = 'QDII基金';
      break;

    case 25:
      type = '拆借';
      break;

    case 26:
      type = '利率';
      break;

    case 27:
      type = '分级A基金';
      break;

    case 28:
      type = '分级B基金';
      break;

    case 29:
      type = '分级母基金';
      break;
  }

  return type;
};

function formatDate(time, format) {
  var date = new Date(time);
  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  };
  var d;

  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, "".concat(date.getFullYear()).substr(4 - RegExp.$1.length));
  }

  keys_default()(o).forEach(function (k) {
    d = o[k];

    if (new RegExp("(".concat(k, ")")).test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? d : "00".concat(d).substr(stringify_default()(d).length));
    }
  });

  return format;
}
/**
 * 防抖动：
 * 防抖技术即是可以把多个顺序地调用合并成一次，也就是在一定时间内，规定事件被触发的次数。
 * @param {Function} func 要执行的函数
 * @param {Number} wait 等待时间
 * @param {Boolean} immediate 是否立即执行一次
 */


function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    window.clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}
/**
 * 节流函数：
 * 只允许一个函数在 wait 毫秒内执行一次，只有当上一次函数执行后过了你规定的时间间隔，才能进行下一次该函数的调用。
 * 它保证在 mustRun 毫秒内至少执行一次我们希望触发的事件 func。
 * @param {Function} func 要执行的函数
 * @param {Number} wait 等待多少ms后可以再次执行函数
 * @param {Number} mustRun 多少ms内至少执行一次，mustRun > wait
 */

function throttle(func, wait, mustRun) {
  var timeout;
  var startTime = new Date();
  return function () {
    var context = this;
    var args = arguments;
    var curTime = new Date();
    window.clearTimeout(timeout);

    if (curTime - startTime >= mustRun) {
      // 如果达到了规定的触发时间间隔，触发 事件
      func.apply(context, args);
      startTime = curTime;
    } else {
      // 没达到触发间隔，重新设定定时器
      timeout = window.setTimeout(func, wait);
    }
  };
}
/* harmony default export */ var stockUtils = ({
  formatStockCode: formatStockCode,
  formatStockText: formatStockText,
  formatPrice: formatPrice,
  formatVolume: formatVolume,
  formatRatio: formatRatio,
  formatColor: formatColor,
  getStockType: getStockType,
  formatDate: formatDate,
  debounce: debounce,
  throttle: throttle
});
// CONCATENATED MODULE: ./packages/stock-chart/src/charts/Chart.js







var noop = function noop() {};

var Chart_Chart =
/*#__PURE__*/
function () {
  function Chart(dataProvider) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Chart);

    this.dataProvider = dataProvider;
    this.options = options; // 暴露出去的长按回调

    this.longTap = options.longTap || noop; // 文本对齐间隔

    this.labelMargin = 2;
  }
  /**
   * Canvas中show(chart)方法，addChart(chart)时会调用
   */


  _createClass(Chart, [{
    key: "initData",
    value: function initData() {
      this.simplifiedMode = this.options.simplifiedMode || false; // 指标 'NONE' || VOL' || 'MACD' || 'KDJ'

      this.currentIndics = this.options.currentIndics || 'VOL'; // 图表通用参数配置

      this.fontSize = (this.options.fontSize || 12) * this.canvas.pixelRadio;
      this.fontFamily = this.options.fontFamily || 'Arial'; // 上涨 颜色

      this.upColor = this.options.upColor || '#ff0000'; // 下跌 颜色

      this.downColor = this.options.downColor || '#008000'; // 坐标轴颜色

      this.gridLineColor = this.options.gridLineColor || '#dddddd'; // 坐标轴 文字颜色

      this.tickColor = this.options.tickColor || '#555555'; // 价格 小数位数

      this.pricePrecision = this.options.pricePrecision || 2; // 数量(量图) 小数位数

      this.volPrecision = this.options.volPrecision || 0; // 按压时辅助线的颜色

      this.pointerLineColor = this.options.pointerLineColor || '#999999'; // 按压时辅助线对应标签的颜色

      this.pointerTickColor = this.options.pointerTickColor || '#ffffff'; // 按压时，提示文字的背景色

      this.tickBackgroundColor = this.options.tickBackgroundColor || '#eeeeee'; // 分时图-价格线的颜色

      this.minLineColor = this.options.minLineColor || '#0095D9'; // 分时图-闭合区域的颜色

      if (this.simplifiedMode) {
        var ctx = this.canvas.getCtx();

        if (typeof_typeof(this.minFillColor) === 'object') {
          // let fillColor = {
          //  'type': 'LinearGradient',
          //  'layout': [0, 0, 0, 125],
          //  'colors': [[0, 'rgb(11, 22, 33)'], [1, 'rgba(251,176,176,0)']],
          // };
          var minFillColorObj = this.minFillColor;

          if (minFillColorObj.type && minFillColorObj.type === 'LinearGradient') {
            var gradient = ctx.createLinearGradient.apply(ctx, _toConsumableArray(minFillColorObj.layout));

            if (minFillColorObj.colors.length > 0) {
              minFillColorObj.colors.forEach(function (item) {
                // gradient.addColorStop(1,'rgba(251,176,176,0)')
                gradient.addColorStop(item[0], item[1]);
              });
            }
          }
        }

        this.minFillColor = gradient;
      } else {
        this.minFillColor = this.options.minFillColor || 'rgba(0, 149, 217, 0.2)';
      } // 时间轴的高度为fontSize + 4，时间轴即表示时间的坐标轴，它的高度即 9:30 10:30 这些文字的高度


      this.timeAxisHeight = this.fontSize + 8;
      this.gridLineWidth = 1;
      this.horizLineCount = this.options.horizLineCount || 4;
      this.leftRangeWidth = this.options.leftRangeWidth * this.canvas.pixelRadio || 0;
      this.rightRangeWidth = this.options.rightRangeWidth * this.canvas.pixelRadio || 0;
      this.chartExtend = this.options.chartExtend;
    }
    /**
     * 初始化订阅
     */

  }, {
    key: "initSubscribe",
    value: function initSubscribe() {
      console.warn('not implemented');
    }
  }, {
    key: "setCanvas",
    value: function setCanvas(canvas) {
      // 初始数据
      this.canvas = canvas;
      this.initData();
    }
  }, {
    key: "show",
    value: function show() {
      this.canvas && this.canvas.show(this);
    }
  }, {
    key: "remove",
    value: function remove() {
      this.canvas && this.canvas.remove(this);
    }
  }, {
    key: "redraw",
    value: function redraw() {
      if (this.canvas && this.canvas.getCurrentChart() === this && this.canvas.canvasWidth && this.canvas.canvasHeight) {
        this.canvas.clear();
        this.initChart();
        this.drawBackground();
        this.drawChart();
        this.drawAxisTicks();
        this.drawChartExtend();
        this.canvas && this.canvas.toggleMask(false);
        this.canvas.drawCanvas();
      }
    }
    /**
     * 设置主图和量图的高度，mainChartHeight 和 volumeChartHeight
     */

  }, {
    key: "initChart",
    value: function initChart() {
      this.yAxisTicks = [];
      var timeAxisHeight = this.timeAxisHeight;
      var hasVolume = this.currentIndics === 'VOL'; // 默认主图和量图的比例为7 : 3

      var height = this.canvas.canvasHeight - timeAxisHeight;

      if (this.currentIndics !== 'NONE') {
        this.mainChartHeight = height * 0.7;
        this.volumeChartHeight = height * 0.3;
        this.indicsChartHeight = height * 0.3;
      } else {
        this.mainChartHeight = height;
        this.volumeChartHeight = 0;
        this.indicsChartHeight = 0;
      }

      this.mainChartWidth = this.canvas.canvasWidth - this.leftRangeWidth - this.rightRangeWidth;
    }
    /* eslint class-methods-use-this: 0 */

  }, {
    key: "drawBackground",
    value: function drawBackground() {
      if (!this.simplifiedMode) {
        // 横轴，水平方向的线
        this.drawYAxisGridLine(0);
        this.drawYAxisGridLine(this.canvas.canvasHeight - 1); // 竖轴，垂直方向的线

        this.drawXAxisGridLine(this.leftRangeWidth, undefined, undefined, undefined, undefined, true);
        this.drawXAxisGridLine(this.canvas.canvasWidth - this.rightRangeWidth - 1, undefined, undefined, undefined, undefined, true);
      }
    }
  }, {
    key: "getPoint",
    value: function getPoint(time, price) {
      return null;
    }
  }, {
    key: "getLowPricePoint",
    value: function getLowPricePoint(time) {
      return null;
    }
  }, {
    key: "drawChartExtend",
    value: function drawChartExtend(isMinChart) {
      var _this = this;

      if (!this.chartExtend) return;
      if (this.chartExtend instanceof Array && this.chartExtend.length === 0) return;
      var boundLeft = this.leftRangeWidth;
      var boundRight = this.canvas.canvasWidth - this.rightRangeWidth;
      var boundTop = 0;
      var boundBottom = this.mainChartHeight;
      this.chartExtend.forEach(function (item, index) {
        if (item.type === 'label') {
          var data = item.data;

          if (data && data instanceof Array) {
            var style = item.style || {};
            var lineColor = style.line || '#FF8245';
            var textColor = style.text || '#FF8245';
            var fillColor = style.background || '#FFEFE7';

            for (var i = 0; i < data.length; i++) {
              var _item = data[i];

              var result = _this.getPoint(_item.time, _item.price);

              if (result) {
                var cornerX = result.x + 12;
                var cornerY = result.y + 12;
                var textRectX = cornerX;
                var textRectY = cornerY;
                var rectW = _this.canvas.measureText(_item.text, _this.fontSize, _this.fontFamily) + 6;
                var rectH = _this.fontSize + 8;

                if (cornerX + rectW > boundRight) {
                  cornerX = result.x - 12;
                  textRectX = cornerX - rectW;
                }

                if (cornerY + rectH > boundBottom) {
                  cornerY = result.y - 12;
                  textRectY = cornerY - rectH;
                }

                _this.canvas.drawCircle(result.x, result.y, 2, lineColor, 1, lineColor);

                _this.canvas.drawPath([[result.x, result.y], [cornerX, cornerY]], lineColor, 1);

                _this.canvas.drawRect(textRectX, textRectY, rectW, rectH, fillColor, 2, lineColor);

                _this.canvas.drawText(_item.text, textRectX + 3, textRectY + _this.fontSize + 3, _this.fontSize, _this.fontFamily, textColor);

                if (isMinChart) {
                  _this.canvas.drawText(_item.price, textRectX + 1, textRectY - 3, _this.fontSize, _this.fontFamily, textColor);
                }
              }
            }
          }
        } else if (item.type === 'tag') {
          var _data = item.data;

          if (_data && _data instanceof Array) {
            var _style = item.style || {};

            var _lineColor = _style.line || '#FF8245';

            var _textColor = _style.text || '#FF8245';

            var _fillColor = _style.background || '#FFEFE7';

            for (var _i = 0; _i < _data.length; _i++) {
              var _item2 = _data[_i];

              var _result = _this.getLowPricePoint(_item2.time);

              if (_result) {
                var _rectW = _this.canvas.measureText(_item2.text, _this.fontSize, _this.fontFamily) + 6;

                var _rectH = _this.fontSize + 8;

                var _textRectX = _result.x - _rectW / 2;

                var _textRectY = _result.y + 2;

                _this.canvas.drawRect(_textRectX, _textRectY, _rectW, _rectH, _fillColor, 2, _lineColor);

                _this.canvas.drawText(_item2.text, _textRectX + 3, _textRectY + _this.fontSize + 3, _this.fontSize, _this.fontFamily, _textColor);
              }
            }
          }
        }
      });
    }
    /* eslint class-methods-use-this: 0 */

  }, {
    key: "drawChart",
    value: function drawChart() {
      console.warn('not implemented');
    }
  }, {
    key: "getLastIndicatorData",
    value: function getLastIndicatorData() {
      return null;
    }
    /**
     * 绘制Y轴(水平方向的坐标轴)上的文字
     */

  }, {
    key: "drawAxisTicks",
    value: function drawAxisTicks() {
      var _this2 = this;

      var yAxisTicks = this.yAxisTicks;

      if (yAxisTicks) {
        var canvas = this.canvas;
        var tickBackgroundColor = this.tickBackgroundColor;
        yAxisTicks.forEach(function (eachTick) {
          canvas.drawText(eachTick.text, eachTick.x, eachTick.y, _this2.fontSize, _this2.fontFamily, eachTick.tickColor, eachTick.withBackground && tickBackgroundColor);
        });
      }
    }
  }, {
    key: "formatYAxisLabel",
    value: function formatYAxisLabel(text, precision) {
      // return Chart.formatNumber(text, precision, 'K/M', false);
      // return Chart.formatNumber(text, precision, '', false)
      return stockUtils.formatStockText(text, precision, '', false);
    }
  }, {
    key: "formatXAxisLabel",
    value: function formatXAxisLabel(text) {
      return text;
    }
  }, {
    key: "getColor",
    value: function getColor(isUp) {
      return isUp ? this.upColor : this.downColor;
    }
    /**
     * 绘制水平方向的线条
     * @param {Number} y 起始点Y轴坐标
     * @param {String} text 文字
     * @param {String} color 线条颜色
     * @param {String} position 文字在线条的上面('top')或下面('bottom'),中心(center)
     * @param {Boolean} withBackground 文字是否带背景色
     * @param {String} tickColor 文字颜色
     * @param {Number} precision 文字格式化的小数位数
     * @param {String} lineType 线条样式，'solid' || 'dashed'
     */

  }, {
    key: "drawYAxisGridLine",
    value: function drawYAxisGridLine(y, text) {
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.gridLineColor;
      var position = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'top';
      var withBackground = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var tickColor = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : this.tickColor;
      var precision = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 2;
      var lineType = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'solid';

      if (lineType === 'solid') {
        this.canvas.drawLine(this.leftRangeWidth, y, this.canvas.canvasWidth - this.rightRangeWidth, y, this.gridLineWidth, color);
      } else if (lineType === 'dashed') {
        this.canvas.createHorzDashedLine(this.leftRangeWidth, this.canvas.canvasWidth - this.rightRangeWidth, y, this.gridLineWidth, color);
      }

      if (text) {
        // 记录Y轴坐标位置
        var yAxisTicks = this.yAxisTicks;
        var x = this.labelMargin;
        var formatText = this.formatYAxisLabel(text, precision);

        if (this.leftRangeWidth > 0) {
          var textLen = this.canvas.measureText(formatText, this.fontSize, this.fontFamily);

          if (textLen < this.leftRangeWidth) {
            x = this.leftRangeWidth - textLen - this.labelMargin;
          }
        }

        if (x < 0) {
          x = 0;
        }

        var yAxis = y;

        switch (position) {
          case 'top':
            yAxis = y - 2;
            break;

          case 'bottom':
            yAxis = y + this.fontSize + 2;
            break;

          case 'center':
            yAxis = y + this.fontSize / 2 - 1;
            break;

          default:
            yAxis = y;
            break;
        }

        yAxisTicks.push({
          text: formatText,
          x: x,
          y: yAxis,
          tickColor: tickColor,
          withBackground: withBackground
        });
      }
    }
    /**
     * 绘制垂直方向的线条
     * @param {Number} x X轴对应坐标
     * @param {String} text 文字
     * @param {String} color 线条颜色
     * @param {Sting} position 文字相对于线条的位置，'middle'表示文字在线条中间,'left'左对齐,'right'文字最右边和线条对齐
     * @param {Boolean} withBackground 文字是否带背景色
     * @param {Boolean} full 是否充满画布，即线条高度是否为画布高度，false则为分时图主图的高度
     * @param {String} tickColor 文字颜色
     * @param {Boolean} showLine 是否画网格线，即 页面上 主图 竖着的 线
     * @param {String} lineType 线条样式，'solid' || 'dashed'
     */

  }, {
    key: "drawXAxisGridLine",
    value: function drawXAxisGridLine(x, text) {
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.gridLineColor;
      var position = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'middle';
      var withBackground = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var full = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var tickColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : this.tickColor;
      var showLine = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
      var lineType = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 'solid';

      // 画网格线，即 页面上 主图 竖着的 线
      if (showLine) {
        var y = full ? this.canvas.canvasHeight : this.mainChartHeight;

        if (lineType === 'solid') {
          this.canvas.drawLine(x, 0, x, y, this.gridLineWidth, color);
        } else if (lineType === 'dashed') {
          this.canvas.createVerticalDashedLine(x, 0, y, this.gridLineWidth, color);
        }
      }

      if (text) {
        var textWidth = this.canvas.measureText(text, this.fontSize, this.fontFamily);
        var fontSize = this.fontSize;
        var textX = x;

        switch (position) {
          case 'middle':
            textX = x - textWidth / 2;
            break;

          case 'left':
            textX = x;
            break;

          case 'right':
            textX = x - textWidth;
            break;

          default:
            textX = x;
            break;
        }

        var textY = this.mainChartHeight + fontSize + 2;
        this.canvas.drawText(text, textX, textY, fontSize, this.fontFamily, tickColor, withBackground && this.tickBackgroundColor);
      }
    }
    /* eslint no-unused-vars: 0 */

  }, {
    key: "panMove",
    value: function panMove(pressed, x, y, deltaX) {}
    /* eslint no-unused-vars: 0 */

  }, {
    key: "pinchMove",
    value: function pinchMove(scale) {}
  }]);

  return Chart;
}();


// CONCATENATED MODULE: ./packages/stock-chart/src/charts/MinChart.js














var MinChart_MinChart =
/*#__PURE__*/
function (_Chart) {
  _inherits(MinChart, _Chart);

  function MinChart() {
    _classCallCheck(this, MinChart);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(MinChart).apply(this, arguments));
  }

  _createClass(MinChart, [{
    key: "initData",

    /**
     * 初始化数据。在这里会通过DataProvider订阅数据，有数据推送到达时重画
     */
    value: function initData() {
      get_get(getPrototypeOf_getPrototypeOf(MinChart.prototype), "initData", this).call(this); // 建议最小时间间隔


      this.customInterval = this.options.customInterval || 60; // 均线的颜色

      this.avgPriceColor = this.options.avgPriceColor || '#EB5F15';
      this.cache = null;
      this.canvas && this.canvas.toggleMask(true);
      this.initSubscribe();
    }
  }, {
    key: "initSubscribe",
    value: function initSubscribe() {
      var _this = this;

      // this.dataProvider.cancel()
      // debugger
      // 订阅数据,有数据推送到达时重画
      this.dataProvider.subscribeMin(function (data) {
        _this.cache = data;

        _this.redraw();
      });
    }
    /**
     * 计算X轴和Y轴的最小单位像素
     * minYPixelRadio：主图Y轴最小单位像素
     * volumeYPixelRadio：量图Y轴最小单位像素
     * pixelPer：X轴最小单位像素
     */

  }, {
    key: "initChart",
    value: function initChart() {
      var _this2 = this;

      get_get(getPrototypeOf_getPrototypeOf(MinChart.prototype), "initChart", this).call(this); // 是否显示均价, 默认true


      this.hasAvgPrice = this.options.hasAvgPrice !== false;
      var lastClose = this.cache.lastClose; // 计算最大和最小值

      var MAX_VALUE = Number.MAX_VALUE;
      var MIN_VALUE = Number.MIN_VALUE;
      var min = MAX_VALUE;
      var max = 0;
      var maxVolume = 0;

      if (lastClose) {
        // 昨收价存在,取距离昨收价最大偏移量作为最大绝对值
        var maxOffset = 0;
        var eachData;

        keys_default()(this.cache).forEach(function (key) {
          eachData = _this2.cache[key];

          if (eachData && eachData.ChengJiaoJia) {
            maxOffset = Math.max(maxOffset, Math.abs(eachData.ChengJiaoJia - lastClose));
            maxVolume = Math.max(maxVolume, eachData.ChengJiaoLiang);
          }
        });

        max = lastClose + maxOffset;
        min = lastClose - maxOffset;
      } else {
        // 昨收价不存在时
        var _eachData;

        keys_default()(this.cache).forEach(function (key) {
          _eachData = _this2.cache[key];

          if (_eachData && _eachData.ChengJiaoJia) {
            max = Math.max(max, _eachData.ChengJiaoJia || MIN_VALUE);
            min = Math.min(min, _eachData.ChengJiaoJia || MAX_VALUE);
            maxVolume = Math.max(maxVolume, _eachData.ChengJiaoLiang);
          }
        });
      } // 最大值和最小值范围增加10%
      // this.max = max > min ? max + (max - min) * 0.1 : max * 1.1;
      // this.min = max > min ? min - (max - min) * 0.1 : max * 0.9;


      this.max = max > min ? max : max * 1.1;
      this.min = max > min ? min : max * 0.9;

      if (this.min < 0) {
        this.min = 0;
      }

      this.maxVolume = maxVolume;
      this.minChartHeight = this.mainChartHeight; // 主图的Y轴最小单位像素：主图高度 / (最大数值 - 最小数值)

      this.minYPixelRadio = this.minChartHeight / (this.max - this.min);
      this.volumeYPixelRadio = this.indicsChartHeight / maxVolume; // X轴最小单位像素

      this.pixelPer = this.mainChartWidth / this.cache.minTimes.length;
    }
    /* eslint class-methods-use-this: 0 */

    /**
     * 格式化日期
     * @param {Number} text 日期，以毫秒为单位
     * @param {Boolean} hasDate 返回格式是否带年月日
     * @returns hasDate ? 'yyyy-MM-dd hh:mm' : 'hh:mm'
     */

  }, {
    key: "formatXAxisLabel",
    value: function formatXAxisLabel(text) {
      var hasDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var date = new Date(text);
      return hasDate ? stockUtils.formatDate(date, 'yyyy-MM-dd hh:mm') : stockUtils.formatDate(date, 'hh:mm');
    }
    /**
     * 重绘
     */

  }, {
    key: "redraw",
    value: function redraw() {
      if (this.cache) {
        get_get(getPrototypeOf_getPrototypeOf(MinChart.prototype), "redraw", this).call(this);
      }
    }
  }, {
    key: "drawChart",
    value: function drawChart() {
      var _this3 = this;

      var hasVolume = this.currentIndics === 'VOL';
      var minTimes = this.cache.minTimes; // 交易时间 间隔点 [ 11:30 ]

      var timeIntervalPoints = this.cache.timeIntervalPoints;
      var pixelPer = this.pixelPer; // X轴最小单位像素

      var pricePoints = [];
      var avgPricePoints = [];
      var hasAvgPrice = this.hasAvgPrice;
      var lastPrice = this.cache.lastClose; // 如果数据量大于300个数据则按60分间隔否则按30分间隔

      var interval = minTimes.length > 300 ? 60 : 30;
      var lastTickIndex = -1000; // 保证第一个符合要求的时间能绘制出来

      var xAxis = [];
      minTimes.forEach(function (time, index) {
        var minData = _this3.cache[time];

        if (minData) {
          var isUp = minData.isUp = minData.ChengJiaoJia >= lastPrice;
          var x1 = pixelPer * index + _this3.leftRangeWidth;
          var x2 = x1 + pixelPer / 2;
          minData.ChengJiaoJia && pricePoints.push([x2, (_this3.max - minData.ChengJiaoJia) * _this3.minYPixelRadio]);
          hasAvgPrice && minData.JunJia && avgPricePoints.push([x2, (_this3.max - minData.JunJia) * _this3.minYPixelRadio, !(minData.JunJia > _this3.max || minData.JunJia < _this3.min)]);
          hasVolume && _this3.drawVolume(index, minData.ChengJiaoLiang, isUp);
          lastPrice = minData.ChengJiaoJia;
        } // 开盘时间和收盘时间，必需画


        if (index === 0 || index === minTimes.length - 1) {
          lastTickIndex = index;
          xAxis.push({
            index: index,
            text: _this3.formatXAxisLabel(minTimes[index]),
            position: index === 0 ? 'left' : 'right',
            x: pixelPer * index + pixelPer / 2 + _this3.leftRangeWidth,
            lineType: undefined,
            showLine: false,
            mustShow: true
          });
        } else {
          // 时间 间隔点，最好需要绘制，比如 11:30
          if (timeIntervalPoints.indexOf(time) > -1) {
            lastTickIndex = index;
            xAxis.push({
              index: index,
              text: _this3.formatXAxisLabel(minTimes[index]),
              position: 'middle',
              x: pixelPer * index + pixelPer / 2 + _this3.leftRangeWidth,
              lineType: 'solid',
              showLine: true,
              mustShow: false
            });
          } else {
            // 满足条件时画出时间轴
            // 不连续时间段的之前时间点
            var tickIndex;

            if (time - minTimes[index - 1] > 1 * 60 * 1000 && lastTickIndex !== index - 1) {
              tickIndex = index - 1;
            } else if (new Date(time).getMinutes() % interval === 0) {
              // 当前时间是大的时间间隔点（60分间隔或者30分间隔）
              tickIndex = index;
            }

            if (tickIndex && (tickIndex - lastTickIndex) * pixelPer > 55 * _this3.canvas.pixelRadio && tickIndex - lastTickIndex >= _this3.customInterval) {
              xAxis.push({
                index: tickIndex,
                text: _this3.formatXAxisLabel(minTimes[tickIndex]),
                position: 'middle',
                x: pixelPer * tickIndex + pixelPer / 2 + _this3.leftRangeWidth,
                lineType: 'dashed',
                showLine: true,
                mustShow: false
              });
              lastTickIndex = tickIndex;
            }
          }
        }
      }); // 绘制垂直分割线

      var xAxisItem;

      for (var i = 0, j = xAxis.length; i < j; i++) {
        xAxisItem = xAxis[i];

        if (!xAxisItem.mustShow) {
          var prev = xAxis[i - 1];
          var next = xAxis[i + 1];

          if (prev && next) {
            if (xAxisItem.x - prev.x < 55 * this.canvas.pixelRadio) {
              continue;
            } else if (next.x - xAxisItem.x < 55 * this.canvas.pixelRadio) {
              continue;
            }
          }
        }

        if (!this.simplifiedMode) {
          this.drawXAxisGridLine(xAxisItem.x, xAxisItem.text, undefined, xAxisItem.position, false, false, undefined, xAxisItem.showLine, xAxisItem.lineType);
        }
      } // 绘制分时图的主图部分，一段连续不断的线条，和其与坐标轴形成的闭合区域


      this.canvas.fillPath(pricePoints, this.minChartHeight, this.minLineColor, this.minFillColor, this.simplifiedMode ? 2 : 1); // 均价，分时图主图部分的一段连续的线条

      hasAvgPrice && this.canvas.drawPath(avgPricePoints, this.avgPriceColor); // 按压时显示十字光标

      if (this.pressPoint) {
        var _this$pressPoint = this.pressPoint,
            x = _this$pressPoint.x,
            y = _this$pressPoint.y;

        if (x <= this.leftRangeWidth || x >= this.canvas.canvasWidth - this.rightRangeWidth) {
          return;
        }

        x = x - this.leftRangeWidth;

        var index = number_parse_int_default()(x / pixelPer, 10);

        var minTime = minTimes[index];
        var data = this.cache[minTime];

        if (data) {
          // x
          x = pixelPer * index + pixelPer / 2 + this.leftRangeWidth; // 绘制按压时垂直方向的线条

          this.drawXAxisGridLine(x, this.formatXAxisLabel(minTime), this.pointerLineColor, undefined, true, true, this.pointerTickColor); // y

          var price = data.ChengJiaoJia;
          y = (this.max - price) * this.minYPixelRadio; // debugger
          // 绘制按压时水平方向的线条

          this.drawYAxisGridLine(y, price, this.pointerLineColor, y > this.minChartHeight / 2 ? 'top' : 'bottom', true, this.pointerTickColor // this.getColor(data.ChengJiaoJia >= this.cache.lastClose)
          ); // 按压点所在的x轴坐标，对应的分时图主图的成交价(的y轴坐标)，即以此时成交价的坐标点绘制一个小圆点

          this.canvas.drawCircle(x, y, 3, 'rgba(230, 100, 100, 0.8)'); // 显示详细信息

          var showData = assign_default()({}, {
            lastClose: this.cache.lastClose
          }, data);

          this.longTap(showData, 'min'); // this.drawTooltip(data);
        }
      }
    }
    /**
     * 画量图的柱子
     * @param {Number} index 时间节点minTimes数组内数据的index
     * @param {Number} volume 成交量
     * @param {Boolean} isUp 成交价是否大于昨收
     */

  }, {
    key: "drawVolume",
    value: function drawVolume(index, volume, isUp) {
      var x = this.pixelPer * index + this.leftRangeWidth; // 以画布最下面坐标线上的点为起始点，这时Y坐标为画布高度

      var y = this.canvas.canvasHeight;
      var width = Math.max(0.5, this.pixelPer - 1); // 矩形高度为负值，则会以起始点 向上(界面上看起来) 绘图

      var height = -this.volumeYPixelRadio * volume;
      this.canvas.drawRect(x, y, width, height, this.getColor(isUp));
    }
    /**
     * 绘制按压时的提示信息
     * @param {Object} data 按压时x轴对应的数据
     */

  }, {
    key: "drawTooltip",
    value: function drawTooltip(data) {
      var _this4 = this;

      var fontSize = this.fontSize;
      var y = fontSize + 2;
      var lastClose = this.cache.lastClose;
      var startX = 50 + this.leftRangeWidth;
      var ShiJian = this.formatXAxisLabel(data.ShiJian * 1000);
      var ChengJiaoJia = stockUtils.formatStockText(data.ChengJiaoJia, 2);
      var ZhangDie = stockUtils.formatStockText((data.ChengJiaoJia - lastClose) / lastClose, 2, '%');
      var ChengJiaoLiang = stockUtils.formatStockText(data.ChengJiaoLiang, 2, 'K/M');
      [{
        label: "\u65F6\u95F4:".concat(ShiJian),
        labelColor: '#555555'
      }, {
        label: "\u4EF7\u683C:".concat(ChengJiaoJia),
        labelColor: '#0095D9'
      }, this.hasAvgPrice && data.JunJia <= this.max && data.JunJia >= this.min ? {
        label: "\u5747\u4EF7:".concat(stockUtils.formatStockText(data.JunJia, 2)),
        labelColor: '#EB5F15'
      } : undefined, {
        label: "\u6DA8\u8DCC:".concat(ZhangDie),
        labelColor: this.getColor(data.ChengJiaoJia >= lastClose)
      }, {
        label: "\u6210\u4EA4\u91CF:".concat(ChengJiaoLiang),
        labelColor: this.getColor(data.isUp)
      }].forEach(function () {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            label = _ref.label,
            labelColor = _ref.labelColor;

        if (label) {
          _this4.canvas.drawText(label, startX, y, fontSize, _this4.fontFamily, labelColor);

          startX += _this4.canvas.measureText(label, fontSize, _this4.fontFamily) + 10;
        }
      });
    }
    /**
     * 画出横坐标和网格线
     */

  }, {
    key: "drawBackground",
    value: function drawBackground() {
      get_get(getPrototypeOf_getPrototypeOf(MinChart.prototype), "drawBackground", this).call(this);

      var lastClose = this.cache.lastClose;
      var max = this.max;
      var min = this.min;

      if (!this.simplifiedMode) {
        // 画出横坐标和网格线
        // 画x轴 横坐标，从坐标原点(0, 0)到右侧(画布宽度, 0)
        this.drawYAxisGridLine(0, max, undefined, 'bottom', undefined, this.getColor(true), this.pricePrecision); // 画从(0, 图表高度)到(画布宽度, 图表高度)

        this.drawYAxisGridLine(this.minChartHeight, min, undefined, undefined, undefined, this.getColor(false), this.pricePrecision);
      } // 画 2/4即二分之一处的(横向的)网格线


      this.drawYAxisGridLine(this.minChartHeight / 2, this.simplifiedMode ? '' : lastClose || max - (max - min) / 2, undefined, 'center', undefined, undefined, this.pricePrecision);

      for (var i = 1; i < this.horizLineCount; i++) {
        if (i !== this.horizLineCount / 2) {
          this.drawYAxisGridLine(this.minChartHeight * (i / this.horizLineCount), max - (max - min) * (i / this.horizLineCount), undefined, 'center', undefined, this.getColor(i < this.horizLineCount / 2), this.pricePrecision, 'dashed');
        }
      }

      var hasVolume = this.currentIndics === 'VOL';

      if (hasVolume) {
        // 画数量图的x轴，即最底部的一条横线
        get_get(getPrototypeOf_getPrototypeOf(MinChart.prototype), "drawYAxisGridLine", this).call(this, this.canvas.canvasHeight, '0', undefined, undefined, undefined, undefined, this.volPrecision); // 画数量图中间的一条线


        get_get(getPrototypeOf_getPrototypeOf(MinChart.prototype), "drawYAxisGridLine", this).call(this, this.canvas.canvasHeight - this.volumeChartHeight / 2, this.maxVolume / 2, undefined, undefined, undefined, undefined, this.volPrecision, 'dashed'); // 画数量图顶部的一条网格线


        get_get(getPrototypeOf_getPrototypeOf(MinChart.prototype), "drawYAxisGridLine", this).call(this, this.canvas.canvasHeight - this.volumeChartHeight, this.maxVolume, undefined, 'bottom', undefined, undefined, this.volPrecision);
      }
    }
  }, {
    key: "getPoint",
    value: function getPoint(time, price) {
      if (price > this.max || price < this.min) return null;
      var timeIndex = this.cache.minTimes.indexOf(time);
      if (timeIndex === -1) return null;
      var x = this.pixelPer * timeIndex + this.pixelPer / 2 + this.leftRangeWidth;
      var y = (this.max - price) * this.minYPixelRadio;
      return {
        x: x,
        y: y
      };
    }
    /**
     * 绘制扩展图形
     */

  }, {
    key: "drawChartExtend",
    value: function drawChartExtend() {
      get_get(getPrototypeOf_getPrototypeOf(MinChart.prototype), "drawChartExtend", this).call(this, true);
    }
    /**
     * 绘制水平方向的线条
     * @param {Number} y 起始点Y轴坐标
     * @param {String} text 文字
     * @param {String} color 线条颜色
     * @param {String} position 线条在文字的上面('top')或下面('bottom'),中心(center)
     * @param {Boolean} withBackground 是否带背景色
     * @param {String} tickColor 文字颜色
     * @param {Number} precision 文字格式化的小数位数
     * @param {String} lineType 线条样式，'solid' || 'dashed'
     */

  }, {
    key: "drawYAxisGridLine",
    value: function drawYAxisGridLine(y, text) {
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.gridLineColor;
      var position = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'top';
      var withBackground = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var tickColor = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : this.tickColor;
      var precision = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 2;
      var lineType = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'solid';

      get_get(getPrototypeOf_getPrototypeOf(MinChart.prototype), "drawYAxisGridLine", this).call(this, y, text, color, position, withBackground, tickColor, precision, lineType);

      if (text) {
        var yAxisTicks = this.yAxisTicks;
        var rightText = stockUtils.formatStockText((text - this.cache.lastClose) / this.cache.lastClose, 2, '%', false);
        var x;

        if (this.rightRangeWidth > 0) {
          x = this.canvas.canvasWidth - this.rightRangeWidth + this.labelMargin;
        } else {
          x = this.canvas.canvasWidth - this.canvas.measureText(rightText, this.fontSize, this.fontFamily) - this.labelMargin;
        }

        var yAxis = y;

        switch (position) {
          case 'top':
            yAxis = y - 2;
            break;

          case 'bottom':
            yAxis = y + this.fontSize + 2;
            break;

          case 'center':
            yAxis = y + this.fontSize / 2 - 1;
            break;

          default:
            yAxis = y;
            break;
        }

        yAxisTicks.push({
          text: rightText,
          x: x,
          y: yAxis,
          tickColor: tickColor,
          withBackground: withBackground
        });
      }
    }
    /**
     * 触摸移动的处理
     * @param {Object} pressed 当前是否处于触摸状态
     * @param {} x 当前触摸点的x轴坐标
     * @param {*} y 当前触摸点的y轴坐标
     */

  }, {
    key: "panMove",
    value: function panMove(pressed, x, y) {
      if (pressed) {
        this.pressPoint = {
          x: x,
          y: y
        };
      } else {
        this.pressPoint = null;
      }

      this.redraw();
    }
  }]);

  return MinChart;
}(Chart_Chart);


// CONCATENATED MODULE: ./packages/stock-chart/src/charts/MultiMinChart.js














var MultiMinChart_MinChart =
/*#__PURE__*/
function (_Chart) {
  _inherits(MinChart, _Chart);

  function MinChart() {
    _classCallCheck(this, MinChart);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(MinChart).apply(this, arguments));
  }

  _createClass(MinChart, [{
    key: "initData",

    /**
     * 初始化数据。在这里会通过DataProvider订阅数据，有数据推送到达时重画
     */
    value: function initData() {
      get_get(getPrototypeOf_getPrototypeOf(MinChart.prototype), "initData", this).call(this); // 建议最小时间间隔


      this.customInterval = this.options.customInterval || 60; // 均线的颜色

      this.avgPriceColor = this.options.avgPriceColor || '#EB5F15'; // 多日分时 days,最大为10，值为5时表示取4天的历史分时加当天的分时

      this.days = this.options.days || 5;
      this.cache = null;
      this.canvas && this.canvas.toggleMask(true);
      this.initSubscribe();
    }
  }, {
    key: "initSubscribe",
    value: function initSubscribe() {
      var _this = this;

      // 订阅数据,有数据推送到达时重画
      this.dataProvider.subMultiMin(function (data) {
        _this.cache = data;

        _this.redraw();
      }, {
        days: this.days
      });
    }
    /**
     * 计算X轴和Y轴的最小单位像素
     * minYPixelRadio：主图Y轴最小单位像素
     * volumeYPixelRadio：量图Y轴最小单位像素
     * pixelPer：X轴最小单位像素
     */

  }, {
    key: "initChart",
    value: function initChart() {
      var _this2 = this;

      get_get(getPrototypeOf_getPrototypeOf(MinChart.prototype), "initChart", this).call(this); // 是否显示均价, 默认true


      this.hasAvgPrice = this.options.hasAvgPrice !== false;
      var lastClose = this.cache.lastClose; // 计算最大和最小值

      var MAX_VALUE = Number.MAX_VALUE;
      var MIN_VALUE = Number.MIN_VALUE;
      var min = MAX_VALUE;
      var max = 0;
      var maxVolume = 0;

      if (lastClose) {
        // 昨收价存在,取距离昨收价最大偏移量作为最大绝对值
        var maxOffset = 0;
        var eachData;

        keys_default()(this.cache).forEach(function (key) {
          eachData = _this2.cache[key];

          if (eachData && eachData.ChengJiaoJia) {
            maxOffset = Math.max(maxOffset, Math.abs(eachData.ChengJiaoJia - lastClose));
            maxVolume = Math.max(maxVolume, eachData.ChengJiaoLiang);
          }
        });

        max = lastClose + maxOffset;
        min = lastClose - maxOffset;
      } else {
        // 昨收价不存在时
        var _eachData;

        keys_default()(this.cache).forEach(function (key) {
          _eachData = _this2.cache[key];

          if (_eachData && _eachData.ChengJiaoJia) {
            max = Math.max(max, _eachData.ChengJiaoJia || MIN_VALUE);
            min = Math.min(min, _eachData.ChengJiaoJia || MAX_VALUE);
            maxVolume = Math.max(maxVolume, _eachData.ChengJiaoLiang);
          }
        });
      } // 最大值和最小值范围增加10%


      this.max = max > min ? max + (max - min) * 0.1 : max * 1.1;
      this.min = max > min ? min - (max - min) * 0.1 : max * 0.9;

      if (this.min < 0) {
        this.min = 0;
      }

      this.maxVolume = maxVolume;
      this.minChartHeight = this.mainChartHeight; // 主图的Y轴最小单位像素：主图高度 / (最大数值 - 最小数值)

      this.minYPixelRadio = this.minChartHeight / (this.max - this.min);
      this.volumeYPixelRadio = this.indicsChartHeight / maxVolume; // X轴最小单位像素

      this.pixelPer = this.mainChartWidth / this.cache.minTimes.length;
    }
    /* eslint class-methods-use-this: 0 */

    /**
     * 格式化日期
     * @param {Number} text 日期，以毫秒为单位
     * @param {Boolean} hasDate 返回格式是否带年月日
     * @returns hasDate ? 'yyyy-MM-dd hh:mm' : 'hh:mm'
     */

  }, {
    key: "formatXAxisLabel",
    value: function formatXAxisLabel(text) {
      var hasDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var date = new Date(text);
      return hasDate ? stockUtils.formatDate(date, 'yyyy-MM-dd hh:mm') : stockUtils.formatDate(date, 'MM-dd');
    }
    /**
     * 重绘
     */

  }, {
    key: "redraw",
    value: function redraw() {
      if (this.cache) {
        get_get(getPrototypeOf_getPrototypeOf(MinChart.prototype), "redraw", this).call(this);
      }
    }
  }, {
    key: "drawChart",
    value: function drawChart() {
      var _this3 = this;

      var hasVolume = this.currentIndics === 'VOL';
      var minTimes = this.cache.minTimes;
      var pixelPer = this.pixelPer; // X轴最小单位像素

      var pricePoints = [];
      var avgPricePoints = [];
      var hasAvgPrice = this.hasAvgPrice;
      var lastPrice = this.cache.lastClose; // 如果数据量大于300个数据则按60分间隔否则按30分间隔

      var interval = minTimes.length > 300 ? 60 : 30;
      var lastTickIndex = 0; // ?

      var lastLabel;
      var currentLabel;
      var lastDrawIndex = -1;
      minTimes.forEach(function (time, index) {
        var minData = _this3.cache[time];

        if (minData) {
          var isUp = minData.isUp = minData.ChengJiaoJia >= lastPrice;
          var x1 = pixelPer * index + _this3.leftRangeWidth;
          var x2 = x1 + pixelPer / 2;
          minData.ChengJiaoJia && pricePoints.push([x2, (_this3.max - minData.ChengJiaoJia) * _this3.minYPixelRadio]);
          hasAvgPrice && minData.JunJia && avgPricePoints.push([x2, (_this3.max - minData.JunJia) * _this3.minYPixelRadio, !(minData.JunJia > _this3.max || minData.JunJia < _this3.min)]);
          hasVolume && _this3.drawVolume(index, minData.ChengJiaoLiang, isUp);
          lastPrice = minData.ChengJiaoJia;
        }

        currentLabel = _this3.formatXAxisLabel(time);

        if (currentLabel !== lastLabel) {
          lastLabel = currentLabel;

          if (lastDrawIndex === -1 && index > 0 || (index - lastDrawIndex) * pixelPer > 55 * _this3.canvas.pixelRadio) {
            lastDrawIndex = index; // 第一根和最后一根不画

            var isShow = index !== 0 && index !== minTimes.length - 1;

            _this3.drawXAxisGridLine(pixelPer * index + pixelPer / 2 + _this3.leftRangeWidth, currentLabel, undefined, undefined, undefined, undefined, undefined, isShow, 'dashed');
          }
        }
      }); // 绘制分时图的主图部分，一段连续不断的线条，和其与坐标轴形成的闭合区域

      this.canvas.fillPath(pricePoints, this.minChartHeight, this.minLineColor, this.minFillColor); // 均价，分时图主图部分的一段连续的线条

      hasAvgPrice && this.canvas.drawPath(avgPricePoints, this.avgPriceColor); // 按压时显示十字光标

      if (this.pressPoint) {
        var _this$pressPoint = this.pressPoint,
            x = _this$pressPoint.x,
            y = _this$pressPoint.y;

        if (x <= this.leftRangeWidth || x >= this.canvas.canvasWidth - this.rightRangeWidth) {
          return;
        }

        x = x - this.leftRangeWidth;

        var index = number_parse_int_default()(x / pixelPer, 10);

        var minTime = minTimes[index];
        var data = this.cache[minTime];

        if (data) {
          // x
          x = pixelPer * index + pixelPer / 2 + this.leftRangeWidth; // 绘制按压时垂直方向的线条

          this.drawXAxisGridLine(x, this.formatXAxisLabel(minTime, true), this.pointerLineColor, undefined, true, true, this.pointerTickColor); // y

          var price = data.ChengJiaoJia;
          y = (this.max - price) * this.minYPixelRadio; // 绘制按压时水平方向的线条

          this.drawYAxisGridLine(y, price, this.pointerLineColor, y > this.minChartHeight / 2 ? 'top' : 'bottom', true, this.pointerTickColor // this.getColor(data.ChengJiaoJia >= this.cache.lastClose)
          ); // 按压点所在的x轴坐标，对应的分时图主图的成交价(的y轴坐标)，即以此时成交价的坐标点绘制一个小圆点

          this.canvas.drawCircle(x, y, 3, 'rgba(230, 100, 100, 0.8)'); // 显示详细信息

          var showData = assign_default()({}, {
            lastClose: this.cache.lastClose
          }, data);

          this.longTap(showData, 'multi-min');
        }
      }
    }
    /**
     * 画量图的柱子
     * @param {Number} index 时间节点minTimes数组内数据的index
     * @param {Number} volume 成交量
     * @param {Boolean} isUp 成交价是否大于昨收
     */

  }, {
    key: "drawVolume",
    value: function drawVolume(index, volume, isUp) {
      var x = this.pixelPer * index + this.leftRangeWidth; // 以画布最下面坐标线上的点为起始点，这时Y坐标为画布高度

      var y = this.canvas.canvasHeight;
      var width = Math.max(0.5, this.pixelPer - 1); // 矩形高度为负值，则会以起始点 向上(界面上看起来) 绘图

      var height = -this.volumeYPixelRadio * volume;
      this.canvas.drawRect(x, y, width, height, this.getColor(isUp));
    }
    /**
     * 画出横坐标和网格线
     */

  }, {
    key: "drawBackground",
    value: function drawBackground() {
      get_get(getPrototypeOf_getPrototypeOf(MinChart.prototype), "drawBackground", this).call(this);

      var lastClose = this.cache.lastClose;
      var max = this.max;
      var min = this.min; // 画出横坐标和网格线
      // 画x轴 横坐标，从坐标原点(0, 0)到右侧(画布宽度, 0)

      this.drawYAxisGridLine(0, max, undefined, 'bottom', undefined, this.getColor(true), this.pricePrecision); // 画从(0, 图表高度)到(画布宽度, 图表高度)

      this.drawYAxisGridLine(this.minChartHeight, min, undefined, undefined, undefined, this.getColor(false), this.pricePrecision); // 画 2/4即二分之一处的(横向的)网格线

      this.drawYAxisGridLine(this.minChartHeight / 2, lastClose || max - (max - min) / 2, undefined, 'center', undefined, undefined, this.pricePrecision, 'dashed');

      for (var i = 1; i < this.horizLineCount; i++) {
        if (i !== this.horizLineCount / 2) {
          this.drawYAxisGridLine(this.minChartHeight * (i / this.horizLineCount), max - (max - min) * (i / this.horizLineCount), undefined, 'center', undefined, this.getColor(i < this.horizLineCount / 2), this.pricePrecision, 'dashed');
        }
      } // 画数量图的x轴，即最底部的一条横线


      get_get(getPrototypeOf_getPrototypeOf(MinChart.prototype), "drawYAxisGridLine", this).call(this, this.canvas.canvasHeight, '0', undefined, undefined, undefined, undefined, this.volPrecision); // 画数量图顶部的一条网格线


      get_get(getPrototypeOf_getPrototypeOf(MinChart.prototype), "drawYAxisGridLine", this).call(this, this.canvas.canvasHeight - this.volumeChartHeight, this.maxVolume, undefined, 'bottom', undefined, undefined, this.volPrecision);
    }
    /** 扩展图形绘制 */

  }, {
    key: "drawChartExtend",
    value: function drawChartExtend() {}
    /**
     * 绘制水平方向的线条
     * @param {Number} y 起始点Y轴坐标
     * @param {String} text 文字
     * @param {String} color 线条颜色
     * @param {String} position 线条在文字的上面('top')或下面('bottom'),中心(center)
     * @param {Boolean} withBackground 是否带背景色
     * @param {String} tickColor 文字颜色
     * @param {Number} precision 文字格式化的小数位数
     * @param {String} lineType 线条样式，'solid' || 'dashed'
     */

  }, {
    key: "drawYAxisGridLine",
    value: function drawYAxisGridLine(y, text) {
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.gridLineColor;
      var position = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'top';
      var withBackground = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var tickColor = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : this.tickColor;
      var precision = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 2;
      var lineType = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'solid';

      get_get(getPrototypeOf_getPrototypeOf(MinChart.prototype), "drawYAxisGridLine", this).call(this, y, text, color, position, withBackground, tickColor, precision, lineType);

      if (text) {
        var yAxisTicks = this.yAxisTicks;
        var rightText = stockUtils.formatStockText((text - this.cache.lastClose) / this.cache.lastClose, 2, '%', false);
        var x;

        if (this.rightRangeWidth > 0) {
          x = this.canvas.canvasWidth - this.rightRangeWidth + this.labelMargin;
        } else {
          x = this.canvas.canvasWidth - this.canvas.measureText(rightText, this.fontSize, this.fontFamily) - this.labelMargin;
        }

        var yAxis = y;

        switch (position) {
          case 'top':
            yAxis = y - 2;
            break;

          case 'bottom':
            yAxis = y + this.fontSize + 2;
            break;

          case 'center':
            yAxis = y + this.fontSize / 2 - 1;
            break;

          default:
            yAxis = y;
            break;
        }

        yAxisTicks.push({
          text: rightText,
          x: x,
          y: yAxis,
          tickColor: tickColor,
          withBackground: withBackground
        });
      }
    }
    /**
     * 触摸移动的处理
     * @param {Object} pressed 当前是否处于触摸状态
     * @param {} x 当前触摸点的x轴坐标
     * @param {*} y 当前触摸点的y轴坐标
     */

  }, {
    key: "panMove",
    value: function panMove(pressed, x, y) {
      if (pressed) {
        this.pressPoint = {
          x: x,
          y: y
        };
      } else {
        this.pressPoint = null;
      }

      this.redraw();
    }
  }]);

  return MinChart;
}(Chart_Chart);


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.sign.js
var es6_math_sign = __webpack_require__("0b21");

// CONCATENATED MODULE: ./packages/stock-chart/src/charts/KlineChart.js

















var KlineChart_KlineChart =
/*#__PURE__*/
function (_Chart) {
  _inherits(KlineChart, _Chart);

  function KlineChart() {
    _classCallCheck(this, KlineChart);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(KlineChart).apply(this, arguments));
  }

  _createClass(KlineChart, [{
    key: "initData",
    value: function initData() {
      get_get(getPrototypeOf_getPrototypeOf(KlineChart.prototype), "initData", this).call(this); // 主图指标，NONE || MA || BOLL


      this.mIndics = this.options.mIndics; // ma线的颜色

      this.maColor = this.options.maColor || ['#FFD11E', '#F77BFC', '#39C2FD', '#B7B7B7', '#D3141A', '#FF8802']; // BOLL线的颜色

      this.bollColor = this.options.bollColor || ['#FFD11E', '#F77BFC', '#39C2FD']; // MACD的 DIF DEA 线的颜色

      this.macdColor = this.options.macdColor || ['#FFD11E', '#F77BFC']; // KDJ的颜色

      this.kdjColor = this.options.kdjColor || ['#FFD11E', '#F77BFC', '#39C2FD']; // RSI的颜色

      this.rsiColor = this.options.rsiColor || ['#FFD11E', '#F77BFC', '#39C2FD']; // DMA指标的颜色

      this.dmaColor = this.options.dmaColor || ['#FFD11E', '#F77BFC']; // BIAS指标的颜色

      this.biasColor = this.options.biasColor || ['#FFD11E', '#F77BFC', '#39C2FD']; // CCI指标的颜色

      this.cciColor = this.options.cciColor || ['#FFD11E']; // W&R指标的颜色

      this.w8rColor = this.options.w8rColor || ['#FFD11E', '#F77BFC']; // DBJJ指标的颜色

      this.dbjjColor = this.options.dbjjColor || ['#FF0F0F', '#EEEEEE', '#FF0F0F']; // QSZZ指标的颜色

      this.qszzColor = this.options.qszzColor || ['#E61919', '#1CA249', '#1CA249', '#E61919', '#FF0000', '#1A75F1']; // QSZZ BS标签

      this.qszzBSTag = this.options.qszzBSTag; // MA指标显示的数量控制 dongw+

      this.maCount = this.options.maCount || 4; // 初始化数据,取options中data字段作为初始数据

      this.data = this.options.data || []; // 界面上当前显示图的数据

      this.klineTimes = []; // 当前可视区域的时间缓存，毫秒为单位

      this.cache = [].concat(this.data); // 缓存好的数据

      this.indicsData = {}; // 指标数据

      this.period = this.options.period || '1day';
      this.split = this.options.split !== undefined ? this.options.split : 1; // 最大显示条数(理论数值,不能大于重画时计算出的最大条数)

      this.maxCount = this.options.maxCount || Number.MAX_VALUE; // 最小显示条数

      this.minCount = this.options.minCount || 50; // 最大预加载数据条数,默认300,预加载数据条数取当前显示条数和最大预加载数据条数中较小的一个值

      this.maxPreLoadCount = this.options.maxPreLoadCount || 300; // 位置表示显示数据在缓存中开始位置

      this.position = 0;
      this.hasMoreData = true;
      this.defaultRequestCount = 0; // 初始需要展示的数据条数,默认80

      this.reCalculate(0, this.options.initCount || 80);
      this.initSubscribe();
    }
  }, {
    key: "initSubscribe",
    value: function initSubscribe() {
      var _this = this;

      // 订阅K线数据变化(更新最新的1条数据)
      var param = {
        period: this.period,
        split: this.split,
        start: -1
      };
      this.dataProvider.subscribeKline(param, function (data) {
        if (data.length > 0) {
          var updateData = data[0];

          if (_this.cache.length > 0) {
            // 订阅K线，每次收到的都是最新的一条数据，即cache缓存数据最后一条数据所对应日期的最新数据
            _this.cache[_this.cache.length - 1] = updateData;
          }

          _this.reCalculate();
        }

        if (_this.currentIndics !== 'NONE' && _this.currentIndics !== 'VOL') {
          _this.getIndicatorData(_this.currentIndics, param);
        }

        if (_this.mIndics !== 'NONE') {
          // 获取主图指标数据
          _this.getIndicatorData(_this.mIndics, param);
        }
      });
    }
  }, {
    key: "redraw",
    value: function redraw() {
      if (this.data) {
        get_get(getPrototypeOf_getPrototypeOf(KlineChart.prototype), "redraw", this).call(this);
      }
    }
  }, {
    key: "initChart",
    value: function initChart() {
      var _this2 = this;

      get_get(getPrototypeOf_getPrototypeOf(KlineChart.prototype), "initChart", this).call(this); // 根据画板宽度调整显示数据个数,1像素最多显示一条数据(单条数据小于1像素时,需要调整显示个数),间隙和影线宽度都是固定的1像素


      var count = this.data.length; // FIXME count = 0

      var pixelPerWithSeparator = this.mainChartWidth / count;
      var pixelPer = Math.max(pixelPerWithSeparator * 2 / 3, 0.5);

      if (pixelPerWithSeparator < 1) {
        // 如果数据量过多，导致每条数据不到1像素时
        pixelPerWithSeparator = 1; // 显示数据量调整为画布宽度

        count = this.mainChartWidth;
        this.data = this.data.slice(0, count);
        this.klineTimes = this.data.map(function (item) {
          return item.ShiJian * 1000;
        });
        this.maxCount = count;
      } else if (pixelPer > 50) {
        // 超过最大值50,则取最大值
        pixelPerWithSeparator = 90;
        pixelPer = 60;
      } // X轴每条数据最小单位像素(每根柱子所占宽度)


      this.pixelPer = pixelPer; //  X轴最小单位像素(每根柱子所占宽度+柱子间的间隔)

      this.pixelPerWithSeparator = pixelPerWithSeparator; // 计算最大和最小值

      var MAX_VALUE = Number.MAX_VALUE;
      var MIN_VALUE = Number.MIN_VALUE;
      var min = MAX_VALUE;
      var max = 0;
      var maxVolume = 0;
      var maxIndics = 0;
      var minIndics = 0;
      var mainIndicsData; // 主图指标数据 DBJJ只画标签，不参与计算

      if (this.mIndics !== 'NONE' && this.mIndics !== 'DBJJ') {
        mainIndicsData = this.indicsData[this.mIndics];
      }

      this.data.forEach(function (eachData) {
        max = Math.max(max, eachData.ZuiGaoJia || MIN_VALUE);
        min = Math.min(min, eachData.ZuiDiJia || MAX_VALUE);

        if (mainIndicsData && mainIndicsData[eachData.ShiJian]) {
          var arr = mainIndicsData[eachData.ShiJian];
          var index = 0;
          var _count = arr.length;

          if (_this2.mIndics === 'QSZZ') {
            // 趋势追踪部分数据参与计算
            index = 4;
            _count = 2;
          }

          for (var i = index, j = index + _count; i < j; i++) {
            max = Math.max(max, arr[i]);
            min = Math.min(min, arr[i]);
          }
        }

        if (_this2.currentIndics !== 'NONE') {
          if (_this2.currentIndics === 'VOL') {
            maxVolume = Math.max(maxVolume, eachData.ChengJiaoLiang);
          } else {
            var iData = _this2.indicsData[_this2.currentIndics];

            if (iData && iData[eachData.ShiJian]) {
              var _arr = iData[eachData.ShiJian];
              var _count2 = _arr.length;

              if (_this2.currentIndics === 'DBJJ') {
                _count2 = 1;
              }

              for (var _i = 0, _j = _count2; _i < _j; _i++) {
                maxIndics = Math.max(maxIndics, _arr[_i]);
                minIndics = Math.min(minIndics, _arr[_i]);
              }
            }
          }
        }
      }); // 最大值和最小值范围增加10%

      this.max = max > min ? max + (max - min) * 0.1 : max * 1.1;
      this.min = max > min ? min - (max - min) * 0.1 : max * 0.9;

      if (this.split === 0 && this.min < 0) {
        this.min = 0;
      }

      this.maxVolume = maxVolume;

      if (maxIndics >= 0) {
        this.maxIndics = Math.ceil(maxIndics * 110) / 100;
      } else {
        this.maxIndics = Math.floor(maxIndics * 110) / 100;
      }

      if (minIndics >= 0) {
        this.minIndics = Math.ceil(minIndics * 110) / 100;
      } else {
        this.minIndics = Math.floor(minIndics * 110) / 100;
      }

      this.candleChartHeight = this.mainChartHeight; // K线图Y轴每单位像素

      this.candleYPixelRadio = this.candleChartHeight / (this.max - this.min);

      if (maxVolume > 0) {
        this.volumeYPixelRadio = this.volumeChartHeight / maxVolume;
      }

      var off;

      switch (this.currentIndics) {
        case 'VOL':
          this.indicsYPixelRadio = this.indicsChartHeight / maxVolume;
          break;

        case 'MACD':
          off = Math.max(Math.abs(this.maxIndics), Math.abs(this.minIndics));
          this.indicsYPixelRadio = this.indicsChartHeight / (off * 2);
          break;

        case 'KDJ':
        case 'RSI':
        case 'DMA':
        case 'BIAS':
        case 'CCI':
        case 'W&R':
        case 'DBJJ':
          off = this.maxIndics - this.minIndics;
          this.indicsYPixelRadio = this.indicsChartHeight / off;
          break;

        default:
          break;
      }
    }
    /**
     * 重新计算显示数据在缓存数据中的左偏移位置和长度
     * @param {Number} move 移动了多少单位(移动了多少根k线)：move为正数表示向左移动,负数表示向右移动
     * @param {Number} count 要显示的数据条数
     */

  }, {
    key: "reCalculate",
    value: function reCalculate() {
      var _this3 = this;

      var move = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var count = arguments.length > 1 ? arguments[1] : undefined;
      // 重新计算显示数据在缓存数据中的左偏移位置和长度
      var cacheCount = this.cache.length;
      var requestCount = 0;
      var currentCount = this.data.length;
      var leftPosition = this.position; // 如果move为正数,表示向左移动,判断缓存数据是否存在,缓存数据不足则加载更多数据,负数表示向右移动直接从缓存中取得数据

      if (move > 0) {
        // 手指向右划，数据向左移动
        if (leftPosition < move) {
          // 如果最左边数据的index小于移动的距离，说明缓存数据不够了
          if (this.hasMoreData) {
            requestCount = move - leftPosition;
          } else {
            leftPosition = 0;
          }
        } else {
          leftPosition -= move;
        }
      } else if (move < 0) {
        // 手指向左划，数据向右移动
        var restCount = cacheCount - leftPosition - currentCount; // 右侧还有多少未显示的剩余数据

        if (restCount > -move) {
          // 说明剩余数据比滑动的距离需要的数据多
          leftPosition += -move;
        } else {
          leftPosition += restCount;
        }
      } // count 重设显示数据个数(先重新计算左偏移,再重设count)
      // 限制最小个数


      if (count) {
        count = Math.max(count, this.minCount);
      } // 如果count比当前个数小,则直接左偏移向右移动count/2


      if (count < currentCount) {
        leftPosition += number_parse_int_default()(currentCount - count, 10);
        currentCount = count;
      } else if (count > currentCount) {
        // 限制显示的最大个数
        count = Math.min(count, this.maxCount); // 计算新的显示个数比老的 多显示 多少

        var leftOffsetCount = number_parse_int_default()(count - currentCount, 10); // leftOffsetCount += Math.max(
        //   leftOffsetCount - (cacheCount - leftPosition - currentCount),
        //   0
        // );
        // 如果缓存数据不足则加载更多数据


        if (leftPosition < leftOffsetCount && this.hasMoreData) {
          requestCount = leftOffsetCount - leftPosition;
        } else {
          leftPosition = Math.max(leftPosition - leftOffsetCount, 0);
          currentCount = count;
        }
      } // requestCount不为零则加载数据后再做reCalculate


      if (requestCount > 0) {
        // 计算请求数据的start和count,count需要加上预加载个数(默认等于当前显示的数据个数,但不能超过限制的最大值)
        // 初始currentCount为0时,请求个数为初始显示个数的2倍
        requestCount += Math.min(currentCount || requestCount, this.maxPreLoadCount);
        var start = -(requestCount + cacheCount);
        this.defaultRequestCount = requestCount; // 记录当前请求数量，用于指标请求时容错使用

        this.loadMoreData(start, requestCount).then(function () {
          _this3.reCalculate(move, count);
        });
        return;
      } // 根据新的左偏移位置和新的数据个数重设显示数据data后重画图形


      this.data = this.cache.slice(leftPosition, leftPosition + currentCount);
      this.klineTimes = this.data.map(function (item) {
        return item.ShiJian * 1000;
      });
      this.position = leftPosition;
      this.redraw();
    }
    /**
     * 动态加载数据,添加到缓存cache中并且修改当前位置
     * @param {Number} start 行筛选，-1表示最后一行开始，7表示从第7行开始
     * @param {Number} count 行筛选，大于等于0的整数，表示从start的位置往后筛选多少行数据（包括start）
     */

  }, {
    key: "loadMoreData",
    value: function loadMoreData(start, count) {
      var _this4 = this;

      this.loading = true;
      this.canvas && this.canvas.toggleMask(true);
      var lastDataProvider = this.dataProvider;
      var param = {
        period: this.period,
        start: start,
        count: count,
        split: this.split
      };
      var klinePromise = this.dataProvider.getKline(param);

      if (this.currentIndics !== 'NONE' && this.currentIndics !== 'VOL') {
        this.getIndicatorData(this.currentIndics, param);
      }

      if (this.mIndics !== 'NONE') {
        // 获取主图指标数据
        this.getIndicatorData(this.mIndics, param);
      }

      return klinePromise.then(function (klineData) {
        if (klineData && lastDataProvider === _this4.dataProvider) {
          // // 合并数据到缓存中,判断是否还有更多数据(请求到的数据的时间在cache中已经存在)
          var cacheStartTime = _this4.cache[0] ? _this4.cache[0].ShiJian : Number.MAX_VALUE;
          var eachData;

          for (var i = klineData.length; i > 0; i -= 1) {
            eachData = klineData[i - 1];

            if (eachData.ShiJian < cacheStartTime) {
              _this4.cache.unshift(eachData);

              _this4.position += 1;
            } else {
              _this4.hasMoreData = false; // break;
            }
          }
        }

        _this4.loading = false;

        _this4.redraw();
      });
    }
  }, {
    key: "initIndicator",
    value: function initIndicator(indicName) {
      var count = this.cache.length || this.defaultRequestCount;

      if (count > 0) {
        var param = {
          period: this.period,
          start: -count,
          count: count,
          split: this.split
        };
        this.getIndicatorData(indicName, param);
      }
    }
  }, {
    key: "getIndicatorData",
    value: function getIndicatorData(indicName, param) {
      var _this5 = this;

      if (indicName === 'NONE') {
        return;
      }

      var indicParam = {}; // dongw- 使用MA的默认参数即可
      // if (indicName === 'MA') {
      //   indicParam = {
      //     name: 'MA',
      //     text: 'MA1:MA(CLOSE,P1);MA2:MA(CLOSE,P2);MA3:MA(CLOSE,P3);MA4:MA(CLOSE,P4);',
      //     parameter: 'P1=5,P2=10,P3=30,P4=60'
      //   }
      // } else {

      indicParam = {
        name: indicName // }

      };

      var params = assign_default()({}, param, indicParam);

      this.dataProvider.getIndicatorData(params).then(function (data) {
        // console.log(`指标(${indicName})的数据：`, JSON.parse(JSON.stringify(data)))
        if (data.length > 0) {
          var e;

          for (var i = 0, j = data.length; i < j; i++) {
            e = data[i];

            if (!_this5.indicsData[indicName]) {
              _this5.indicsData[indicName] = {};
            }

            if (indicName === 'MA') {
              // 控制ma显示数量。2019-08-07 kuang+
              e.JieGuo = e.JieGuo.slice(0, _this5.maCount);
            }

            _this5.indicsData[indicName][e.ShiJian] = e.JieGuo;
          }

          _this5.redraw();
        }
      });
    }
    /**
     * 格式化日期
     * @param {Number} text 日期，以毫秒为单位
     * @param {Boolean} hasDate 返回格式是否带年月日
     * @param {*} format 格式化参数，例：'yyyy-MM-dd'
     * @returns hasDate ? 'yyyy-MM-dd' : 'yyyy-MM'
     */

  }, {
    key: "formatXAxisLabel",
    value: function formatXAxisLabel(text) {
      var hasDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var date = new Date(text);
      if (format) return stockUtils.formatDate(date, format);
      return hasDay ? stockUtils.formatDate(date, 'yyyy-MM-dd') : stockUtils.formatDate(date, 'yyyy-MM');
    }
    /* eslint class-methods-use-this: 0 */

    /**
     * 判断是否是上涨状态
     * @param {Number} open 开盘价
     * @param {Number} close 收盘价
     * @param {Number} lastClose 昨收
     */

  }, {
    key: "isUp",
    value: function isUp(open, close, lastClose) {
      // FIXME 还需要考虑当天收盘和昨收相同的情况
      return open !== close ? close > open : close > lastClose;
    }
  }, {
    key: "drawChart",
    value: function drawChart() {
      var _this6 = this;

      var pixelPerWithSeparator = this.pixelPerWithSeparator;
      var pixelPer = this.pixelPer;
      var halfPixelPer = pixelPer / 2;
      var candleYPixelRadio = this.candleYPixelRadio;
      var max = this.max;
      var canvas = this.canvas;
      var lastLabel;
      var currentLabel;
      var lastDrawIndex = -1; // 是否是分钟k线

      var isMinKline = this.period.indexOf('min') > -1;
      var timeFormatter = 'yyyy-MM-dd';
      var labelFormatter = 'yyyy-MM';

      if (isMinKline) {
        timeFormatter = 'MM-dd hh:mm';
        labelFormatter = 'MM-dd hh';
      } // 主图指标MA, BOLL


      var mainCommonLinePoints = []; // 主图指标DBJJ

      var mainCommonTags = []; // MACD线

      var macdPoints = []; // 通用的 KDJ, RSI, DMA

      var commonLinePoints = [];
      var baseHeight = this.canvas.canvasHeight - this.indicsChartHeight;
      var firstPointIndex = -1; // 记录下来的第一个点的索引
      // 画出每根k线和量

      var ratio = 0.15;

      if (isMinKline) {
        ratio = 0.4;
      }

      this.data.forEach(function (eachData, index) {
        var lastClose = eachData.lastClose; // 添加数据附加属性

        if (!lastClose) {
          lastClose = eachData.lastClose = index > 0 ? _this6.data[index - 1].ShouPanJia : 0;
          eachData.time = eachData.ShiJian * 1000;
          eachData.isUp = _this6.isUp(eachData.KaiPanJia, eachData.ShouPanJia, lastClose); // xAxisLabel为年月yyyy-MM 分钟线格式为

          eachData.xAxisLabel = _this6.formatXAxisLabel(eachData.time, undefined, labelFormatter);
        }

        currentLabel = eachData.xAxisLabel; // 满足条件画x轴坐标(跨月的第一交易日并且两个坐标点之间的距离不小于指定大小)

        if (currentLabel !== lastLabel) {
          lastLabel = currentLabel; // if ((lastDrawIndex === -1 && index > 0) || (index - lastDrawIndex) * pixelPerWithSeparator > (64 * this.canvas.pixelRadio)) {
          //   this.drawXAxisGridLine(
          //     (pixelPerWithSeparator * index + halfPixelPer + this.leftRangeWidth),
          //     this.formatXAxisLabel(eachData.time, undefined, isMinKline ? 'hh:mm' : 'yyyy-MM'),
          //     undefined,
          //     undefined,
          //     undefined,
          //     undefined,
          //     undefined,
          //     false
          //   )
          //   lastDrawIndex = index
          // }
          // 第一个日期

          if (lastDrawIndex === -1 && index > 0) {
            _this6.drawXAxisGridLine(pixelPerWithSeparator * index + halfPixelPer + _this6.leftRangeWidth, _this6.formatXAxisLabel(eachData.time, undefined, isMinKline ? 'hh:mm' : 'yyyy-MM'), undefined, undefined, undefined, undefined, undefined, false);

            lastDrawIndex = index;
            firstPointIndex = index;
          }

          var SPACE_GAP = _this6.canvas.measureText(_this6.formatXAxisLabel(eachData.time, undefined, isMinKline ? 'hh:mm' : 'yyyy-MM')); // 第二个日期


          if (lastDrawIndex === firstPointIndex && (index - lastDrawIndex) * pixelPerWithSeparator >= SPACE_GAP * (1.5 + ratio) && index * pixelPerWithSeparator < _this6.mainChartWidth) {
            _this6.drawXAxisGridLine(pixelPerWithSeparator * index + halfPixelPer + _this6.leftRangeWidth, _this6.formatXAxisLabel(eachData.time, undefined, isMinKline ? 'hh:mm' : 'yyyy-MM'), undefined, undefined, undefined, undefined, undefined, false);

            lastDrawIndex = index;
          }

          if (lastDrawIndex !== firstPointIndex && (index - lastDrawIndex) * pixelPerWithSeparator >= SPACE_GAP * (1 + ratio) && index * pixelPerWithSeparator < _this6.mainChartWidth - SPACE_GAP * 0.5) {
            // 第三个到最后一个日期
            _this6.drawXAxisGridLine(pixelPerWithSeparator * index + halfPixelPer + _this6.leftRangeWidth, _this6.formatXAxisLabel(eachData.time, undefined, isMinKline ? 'hh:mm' : 'yyyy-MM'), undefined, undefined, undefined, undefined, undefined, false);

            lastDrawIndex = index;
          }
        }

        _this6.drawCandle(index, eachData.KaiPanJia, eachData.ShouPanJia, eachData.ZuiGaoJia, eachData.ZuiDiJia, eachData.isUp);

        var x = pixelPerWithSeparator * index + halfPixelPer + _this6.leftRangeWidth;

        if (index === 0) {
          x -= halfPixelPer;
        } else if (index === _this6.data.length - 1) {
          x += halfPixelPer;
        }

        var commonLineData;

        switch (_this6.currentIndics) {
          case 'VOL':
            _this6.drawVolume(index, eachData.ChengJiaoLiang, eachData.isUp);

            break;

          case 'MACD':
            var macdData = _this6.indicsData[_this6.currentIndics];

            if (macdData && macdData[eachData.ShiJian]) {
              // 有数据
              var maxIndicsOffset = Math.max(Math.abs(_this6.maxIndics), Math.abs(_this6.minIndics));

              _this6.calMACDPoints(macdData[eachData.ShiJian], macdPoints, x, baseHeight, maxIndicsOffset);

              _this6.drawMACDStick(index, macdData[eachData.ShiJian][2], baseHeight);
            }

            break;

          case 'KDJ':
          case 'RSI':
          case 'DMA':
          case 'BIAS':
          case 'CCI':
          case 'W&R':
            commonLineData = _this6.indicsData[_this6.currentIndics];

            if (commonLineData && commonLineData[eachData.ShiJian]) {
              _this6.calCommonLinePoints(commonLineData[eachData.ShiJian], commonLinePoints, x, _this6.maxIndics, _this6.indicsYPixelRadio, baseHeight);
            }

            break;

          case 'DBJJ':
            commonLineData = _this6.indicsData[_this6.currentIndics];

            if (commonLineData && commonLineData[eachData.ShiJian]) {
              _this6.calCommonLinePoints([commonLineData[eachData.ShiJian][0]], commonLinePoints, x, _this6.maxIndics, _this6.indicsYPixelRadio, baseHeight);
            }

            break;

          default:
            break;
        }

        switch (_this6.mIndics) {
          case 'MA':
            commonLineData = _this6.indicsData[_this6.mIndics];

            if (commonLineData && commonLineData[eachData.ShiJian]) {
              var maData = commonLineData[eachData.ShiJian].slice(0, _this6.maCount);

              _this6.calCommonLinePoints(maData, mainCommonLinePoints, x, max, candleYPixelRadio, 0);
            }

            break;

          case 'BOLL':
            commonLineData = _this6.indicsData[_this6.mIndics];

            if (commonLineData && commonLineData[eachData.ShiJian]) {
              _this6.calCommonLinePoints(commonLineData[eachData.ShiJian], mainCommonLinePoints, x, max, candleYPixelRadio, 0);
            }

            break;

          case 'DBJJ':
            commonLineData = _this6.indicsData[_this6.mIndics];

            if (commonLineData && commonLineData[eachData.ShiJian]) {
              if (commonLineData[eachData.ShiJian][1] === 1) {
                // 上穿标记进行记录(底部狙击)
                var x1 = _this6.pixelPerWithSeparator * index + _this6.pixelPerWithSeparator / 2 - _this6.pixelPer / 2 + _this6.leftRangeWidth + _this6.pixelPer / 2;
                var y = (max - eachData.ZuiDiJia) * candleYPixelRadio + 6;
                mainCommonTags.push({
                  x: x1,
                  y: y,
                  label: '狙击',
                  textColor: _this6.dbjjColor[1],
                  rectColor: _this6.dbjjColor[2]
                });
              }
            }

            break;

          case 'QSZZ':
            // 准备牛马线数据
            commonLineData = _this6.indicsData[_this6.mIndics];

            if (commonLineData && commonLineData[eachData.ShiJian]) {
              _this6.calCommonLinePoints(commonLineData[eachData.ShiJian], mainCommonLinePoints, x, max, candleYPixelRadio, 0, 4, 2);
            } // 准备买卖点标签


            if (commonLineData && commonLineData[eachData.ShiJian]) {
              if (commonLineData[eachData.ShiJian][0] === 1) {
                var _x = _this6.pixelPerWithSeparator * index + _this6.pixelPerWithSeparator / 2 - _this6.pixelPer / 2 + _this6.leftRangeWidth + _this6.pixelPer / 2;

                var _y = (max - eachData.ZuiDiJia) * candleYPixelRadio;

                mainCommonTags.push({
                  x: _x,
                  y: _y,
                  label: 'B',
                  textColor: _this6.qszzColor[0]
                });
              } else if (commonLineData[eachData.ShiJian][1] === 1) {
                var _x2 = _this6.pixelPerWithSeparator * index + _this6.pixelPerWithSeparator / 2 - _this6.pixelPer / 2 + _this6.leftRangeWidth + _this6.pixelPer / 2;

                var _y2 = (max - eachData.ZuiGaoJia) * candleYPixelRadio;

                mainCommonTags.push({
                  x: _x2,
                  y: _y2,
                  label: 'S',
                  textColor: _this6.qszzColor[1],
                  position: 1
                });
              } // K线修复


              if (commonLineData[eachData.ShiJian][2] === 1) {
                // 蜡烛图红线
                _this6.drawCandle(index, eachData.KaiPanJia, eachData.ShouPanJia, eachData.ZuiGaoJia, eachData.ZuiDiJia, true);
              } else if (commonLineData[eachData.ShiJian][3] === 1) {
                // 蜡烛图绿线
                _this6.drawCandle(index, eachData.KaiPanJia, eachData.ShouPanJia, eachData.ZuiGaoJia, eachData.ZuiDiJia, false);
              }
            }

            break;

          default:
            break;
        }
      }); // 主图指标 线的颜色，MA, BOLL

      var color = this.maColor;

      if (this.mIndics === 'MA') {
        color = this.maColor;
      } else if (this.mIndics === 'BOLL') {
        color = this.bollColor;
      } else if (this.mIndics === 'DBJJ') {
        color = this.dbjjColor;
      } else if (this.mIndics === 'QSZZ') {
        color = this.qszzColor;
      }

      mainCommonLinePoints.forEach(function (eachPoints, index) {
        canvas.drawPath(eachPoints, color[index]);
      });

      if (this.mIndics === 'QSZZ' && !this.qszzBSTag) {// 标签不需要绘制
      } else {
        mainCommonTags.forEach(function (eachLabel, index) {
          var rectW = _this6.canvas.measureText(eachLabel.label, _this6.fontSize, _this6.fontFamily) + 6;
          var rectH = _this6.fontSize + 8;
          var textRectX = eachLabel.x - rectW / 2;
          var textRectY = eachLabel.y + 2;

          if (eachLabel.rectColor) {
            _this6.canvas.drawRect(textRectX, textRectY, rectW, rectH, eachLabel.rectColor, 1, eachLabel.rectColor);
          }

          var offset = _this6.fontSize + 3;

          if (eachLabel.position === 1) {
            offset = -_this6.fontSize / 2;
          }

          _this6.canvas.drawText(eachLabel.label, textRectX + 3, textRectY + offset, _this6.fontSize + 1, _this6.fontFamily, eachLabel.textColor || '#FF0F0F');
        });
      }

      if (this.currentIndics === 'MACD') {
        macdPoints.forEach(function (eachPoints, index) {
          canvas.drawPath(eachPoints, _this6.macdColor[index]);
        });
      } else if (this.currentIndics === 'KDJ') {
        color = this.kdjColor;
      } else if (this.currentIndics === 'RSI') {
        color = this.rsiColor;
      } else if (this.currentIndics === 'DMA') {
        color = this.dmaColor;
      } else if (this.currentIndics === 'BIAS') {
        color = this.biasColor;
      } else if (this.currentIndics === 'CCI') {
        color = this.cciColor;
      } else if (this.currentIndics === 'W&R') {
        color = this.w8rColor;
      } else if (this.currentIndics === 'DBJJ') {
        color = this.dbjjColor;
      }

      commonLinePoints.forEach(function (eachPoints, index) {
        canvas.drawPath(eachPoints, color[index]);
      }); // 按压时显示十字光标

      if (this.pressPoint) {
        var x = this.pressPoint.x;

        if (x <= this.leftRangeWidth || x >= this.canvas.canvasWidth - this.rightRangeWidth) {
          return;
        }

        x = x - this.leftRangeWidth;

        var index = parse_int_default()(x / pixelPerWithSeparator, 10);

        var data = this.data[index];

        if (data) {
          // x
          // 绘制按压时垂直方向的辅助线
          this.drawXAxisGridLine(pixelPerWithSeparator * index + pixelPerWithSeparator / 2 + this.leftRangeWidth, this.formatXAxisLabel(data.time, true, timeFormatter), this.pointerLineColor, undefined, true, true, this.pointerTickColor); // y
          // 绘制按压时水平方向的辅助线

          var y = this.candleYPixelRadio * (this.max - data.ShouPanJia);

          if (y < this.candleChartHeight && y > 0) {
            this.drawYAxisGridLine(y, data.ShouPanJia, this.pointerLineColor, y > this.candleChartHeight / 2 ? 'top' : 'bottom', true, this.pointerTickColor, this.pricePrecision);
          }

          data = this.getIndicatorSliceData(data); // 显示详细信息

          this.longTap(data, 'kline'); // this.drawTooltip(data);
        }
      }
    } // 获取指标切片数据

  }, {
    key: "getIndicatorSliceData",
    value: function getIndicatorSliceData(data) {
      if (this.currentIndics !== 'NONE' && this.currentIndics !== 'VOL') {
        var currentIndicsData = this.indicsData[this.currentIndics];

        if (currentIndicsData && currentIndicsData[data.ShiJian]) {
          var indicsD = currentIndicsData[data.ShiJian];
          var pData = JSON.parse(stringify_default()(indicsD));
          var pIndicsData = {};
          pIndicsData[this.currentIndics] = pData;
          data = assign_default()({}, data, pIndicsData);

          if (this.currentIndics === 'DBJJ' && currentIndicsData) {
            // 追加上一条的数据，用于数据对比
            var timeIndex = this.klineTimes.indexOf(data.ShiJian * 1000);

            if (timeIndex >= 1) {
              var preTime = this.klineTimes[timeIndex - 1] / 1000;

              if (preTime) {
                var _indicsD = currentIndicsData[preTime];

                if (data && _indicsD) {
                  data['Pre' + this.currentIndics] = JSON.parse(stringify_default()(_indicsD));
                }
              }
            }
          }
        }
      }

      if (this.mIndics !== 'NONE') {
        var _currentIndicsData = this.indicsData[this.mIndics];

        if (_currentIndicsData && _currentIndicsData[data.ShiJian]) {
          var _indicsD2 = _currentIndicsData[data.ShiJian];

          var _pData = JSON.parse(stringify_default()(_indicsD2));

          var _pIndicsData = {};
          _pIndicsData[this.mIndics] = _pData;
          data = assign_default()({}, data, _pIndicsData);
        }

        if (this.mIndics === 'QSZZ' && _currentIndicsData) {
          // 追加上一条的数据，用于数据对比
          var _timeIndex = this.klineTimes.indexOf(data.ShiJian * 1000);

          if (_timeIndex >= 1) {
            var _preTime = this.klineTimes[_timeIndex - 1] / 1000;

            if (_preTime) {
              var _indicsD3 = _currentIndicsData[_preTime];

              if (data && _indicsD3) {
                data['Pre' + this.mIndics] = JSON.parse(stringify_default()(_indicsD3));
              }
            }
          }
        }
      }

      return data;
    } // 最新的指标数据

  }, {
    key: "getLastIndicatorData",
    value: function getLastIndicatorData() {
      var data = this.data[this.data.length - 1];
      if (!data) return null;
      return this.getIndicatorSliceData(data);
    }
    /**
     * 生成通用的 线的点的数组
     * @param {*} data 数据源，一个数组
     * @param {*} points []
     * @param {*} x x坐标
     * @param {*} max 最大值
     * @param {*} yPixelRadio y轴每单位占的像素高度
     * @param {*} baseHeight 基础高度
     * @param {*} offset 返回数据中的线数据的偏移
     * @param {*} count 返回的数据数量
     */

  }, {
    key: "calCommonLinePoints",
    value: function calCommonLinePoints(data, points, x, max, yPixelRadio) {
      var baseHeight = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var offset = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var count = arguments.length > 7 ? arguments[7] : undefined;
      count = count ? count + offset : data.length;

      for (var i = offset, j = count; i < j; i++) {
        if (!points[i]) {
          points[i] = [];
        }

        var y = (max - data[i]) * yPixelRadio + baseHeight;
        points[i].push([x, y]);
      }
    } // 生成MACD的DIF和DEA两条线需要的点

  }, {
    key: "calMACDPoints",
    value: function calMACDPoints(data, macdPoints, x, baseHeight, maxIndicsOffset) {
      for (var i = 0, j = data.length; i < j; i++) {
        if (i < 2) {
          // DIF DEA 线
          if (!macdPoints[i]) {
            macdPoints[i] = [];
          }

          var y = void 0;

          if (data[i] > 0) {
            y = (maxIndicsOffset - data[i]) * this.indicsYPixelRadio + baseHeight;
          } else if (data[i] === 0) {
            y = maxIndicsOffset * this.indicsYPixelRadio + baseHeight;
          } else if (data[i] < 0) {
            y = (maxIndicsOffset - data[i]) * this.indicsYPixelRadio + baseHeight;
          }

          macdPoints[i].push([x, y]);
        } else if (i === 2) {// MACD柱子
        }
      }
    }
    /**
     * 绘制按压时的提示信息
     * @param {Object} data 按压时x轴对应的数据
     */

  }, {
    key: "drawTooltip",
    value: function drawTooltip(data) {
      var _this7 = this;

      var startX = 50 + this.leftRangeWidth;
      var fontSize = this.fontSize;
      var y = fontSize + 2;
      var color = this.getColor(this.isUp(data.KaiPanJia, data.ShouPanJia, data.lastClose));
      [{
        label: "\u65E5\u671F:".concat(this.formatXAxisLabel(data.time, true)),
        labelColor: '#555555'
      }, {
        label: "\u5F00:".concat(stockUtils.formatStockText(data.KaiPanJia, 2))
      }, {
        label: "\u6536:".concat(stockUtils.formatStockText(data.ShouPanJia, 2))
      }, {
        label: "\u9AD8:".concat(stockUtils.formatStockText(data.ZuiGaoJia, 2))
      }, {
        label: "\u4F4E:".concat(stockUtils.formatStockText(data.ZuiDiJia, 2))
      }, {
        label: "\u6DA8\u8DCC:".concat(stockUtils.formatStockText((data.ShouPanJia - data.lastClose) / data.lastClose, 2, '%')),
        labelColor: this.getColor(data.ShouPanJia >= data.lastClose)
      }, {
        label: "\u91CF:".concat(stockUtils.formatStockText(data.ChengJiaoLiang, 2, 'K/M'))
      }].forEach(function (_ref) {
        var label = _ref.label,
            _ref$labelColor = _ref.labelColor,
            labelColor = _ref$labelColor === void 0 ? color : _ref$labelColor;

        _this7.canvas.drawText(label, startX, y, fontSize, _this7.fontFamily, labelColor);

        startX += _this7.canvas.measureText(label, fontSize, _this7.fontFamily) + 10;
      });
    }
    /**
     * 画出纵坐标(水平方向的线)
     */

  }, {
    key: "drawBackground",
    value: function drawBackground() {
      get_get(getPrototypeOf_getPrototypeOf(KlineChart.prototype), "drawBackground", this).call(this);

      var max = this.max;
      var min = this.min; // 绘制K线图最上方的一条水平线，文字(最大值)在线的下面

      this.drawYAxisGridLine(0, max, undefined, 'bottom', undefined, undefined, this.pricePrecision); // 绘制K线图最下方的一条水平线，文字(最小值)在线的上面

      this.drawYAxisGridLine(this.candleChartHeight, min, undefined, undefined, undefined, undefined, this.pricePrecision); // 绘制中间几条水平线

      for (var i = 1; i < this.horizLineCount; i++) {
        this.drawYAxisGridLine(this.candleChartHeight * (i / this.horizLineCount), max - (max - min) * (i / this.horizLineCount), undefined, 'center', undefined, undefined, this.pricePrecision, 'dashed');
      }

      switch (this.currentIndics) {
        case 'VOL':
          // 绘制量图最下方的一条水平线
          this.drawYAxisGridLine(this.canvas.canvasHeight, '0', undefined, undefined, undefined, undefined, this.volPrecision); // 绘制量图中间的平均线

          this.drawYAxisGridLine(this.canvas.canvasHeight - this.indicsChartHeight / 2, this.maxVolume / 2, undefined, undefined, undefined, undefined, this.volPrecision, 'dashed'); // 绘制量图最上方的一条水平线

          this.drawYAxisGridLine(this.canvas.canvasHeight - this.indicsChartHeight, this.maxVolume, null, 'bottom', undefined, undefined, this.volPrecision);
          break;

        case 'MACD':
          // MACD
          var off = Math.max(Math.abs(this.maxIndics), Math.abs(this.minIndics)); // 绘制指标图最下方的一条水平线

          this.drawYAxisGridLine(this.canvas.canvasHeight, -off, undefined, undefined, undefined, undefined, 2); // 绘制最上方的一条水平线

          this.drawYAxisGridLine(this.canvas.canvasHeight - this.indicsChartHeight, off, null, 'bottom', undefined, undefined, 2); // 绘制 MACD的 0刻度线

          this.drawYAxisGridLine(this.canvas.canvasHeight - this.indicsChartHeight / 2, '0', undefined, 'center', undefined, undefined, 2);
          break;

        case 'KDJ':
        case 'RSI':
        case 'DMA':
        case 'BIAS':
        case 'CCI':
        case 'W&R':
        case 'DBJJ':
          // 绘制指标图最下方的一条水平线
          this.drawYAxisGridLine(this.canvas.canvasHeight, this.minIndics || 0, undefined, undefined, undefined, undefined, 2); // 绘制指标图中间的平均线

          this.drawYAxisGridLine(this.canvas.canvasHeight - this.indicsChartHeight / 2, (this.minIndics + this.maxIndics) / 2, undefined, undefined, undefined, undefined, 2, 'dashed'); // 绘制最上方的一条水平线

          this.drawYAxisGridLine(this.canvas.canvasHeight - this.indicsChartHeight, this.maxIndics, null, 'bottom', undefined, undefined, 2);
          break;

        default:
          break;
      }
    }
  }, {
    key: "getPoint",
    value: function getPoint(time, price) {
      if (price > this.max || price < this.min) return null;
      var timeIndex = this.klineTimes.indexOf(time);
      if (timeIndex === -1) return null;
      var x = this.pixelPerWithSeparator * timeIndex + this.pixelPerWithSeparator / 2 - this.pixelPer / 2 + this.leftRangeWidth + this.pixelPer / 2;
      var y = this.candleYPixelRadio * (this.max - price);
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "getLowPricePoint",
    value: function getLowPricePoint(time) {
      var timeIndex = this.klineTimes.indexOf(time);
      if (timeIndex === -1) return null;
      var barData = this.data[timeIndex];
      if (!barData) return null;
      var x = this.pixelPerWithSeparator * timeIndex + this.pixelPerWithSeparator / 2 - this.pixelPer / 2 + this.leftRangeWidth + this.pixelPer / 2;
      var y = this.candleYPixelRadio * (this.max - barData.ZuiDiJia);
      return {
        x: x,
        y: y
      };
    }
    /**
     * 绘制扩展图形
     */

  }, {
    key: "drawChartExtend",
    value: function drawChartExtend() {
      get_get(getPrototypeOf_getPrototypeOf(KlineChart.prototype), "drawChartExtend", this).call(this);
    }
    /**
     * 绘制单根K线
     * @param {Number} index 要绘制的单根K线在当前界面显示的K线图数据的位置index
     * @param {Number} open 开盘价
     * @param {Number} close 收盘价
     * @param {Number} top 最高级
     * @param {Number} low 最低价
     * @param {Boolean} isUp 是否上涨
     */

  }, {
    key: "drawCandle",
    value: function drawCandle(index, open, close, top, low, isUp) {
      var width = this.pixelPer;
      var x = this.pixelPerWithSeparator * index + this.pixelPerWithSeparator / 2 - width / 2 + this.leftRangeWidth;
      var y = this.candleYPixelRadio * (this.max - open);
      var height = open === close ? 1 : this.candleYPixelRadio * (this.max - close) - y;
      height = Math.abs(height) < 1 ? Math.sign(height) : height;
      var color = this.getColor(isUp);

      if (width > 1) {
        // 绘制K线的实体
        this.canvas.drawRect(x, y, width, height, color);
      } // 上下影线


      var x1 = x + width / 2;
      var y1 = this.candleYPixelRadio * (this.max - top);
      var y2 = this.candleYPixelRadio * (this.max - low); // 绘制影线，因为实体部分有填充色，所以直接绘制一条从最高价坐标点到最低价坐标点的线

      this.canvas.drawLine(x1, y1, x1, y2, 1, color);
    }
    /**
     * 画量图的柱子
     * @param {Number} index 要绘制的量图的第几个柱子
     * @param {Number} volume
     * @param {Boolean} isUp 是否是上涨状态
     */

  }, {
    key: "drawVolume",
    value: function drawVolume(index, volume, isUp) {
      var width = this.pixelPer;
      var x = this.pixelPerWithSeparator * index + this.pixelPerWithSeparator / 2 - width / 2 + this.leftRangeWidth;
      var y = this.canvas.canvasHeight;
      var height = -this.volumeYPixelRadio * volume;
      this.canvas.drawRect(x, y, width, height, this.getColor(isUp));
    }
  }, {
    key: "drawMACDStick",
    value: function drawMACDStick(index, v, baseHeight) {
      var width = 1;
      var x = this.pixelPerWithSeparator * index + this.pixelPerWithSeparator / 2 - width / 2 + this.leftRangeWidth;
      var y = baseHeight + this.indicsChartHeight / 2;
      var isUp;
      var height;

      if (v >= 0) {
        isUp = true;
      } else {
        isUp = false;
      }

      height = -this.indicsYPixelRadio * v;
      this.canvas.drawRect(x, y, width, height, this.getColor(isUp));
    } // 手指移动

  }, {
    key: "panMove",
    value: function panMove(pressed, x, y, deltaX) {
      if (!this.loading) {
        if (pressed) {
          this.pressPoint = {
            x: x,
            y: y
          };
          this.redraw();
        } else if (this.pressPoint) {
          this.pressPoint = null;
          this.redraw();
        } else {
          var size = Math.round(deltaX / this.pixelPerWithSeparator);

          if (typeof size === 'number' && size !== 0) {
            this.reCalculate(size);
            return true;
          }
        }
      }

      return false;
    }
    /**
     * 缩放
     * scale > 1 说明是放大操作，显示的k线比原来少
     * scale < 1 说明是缩小操作，要显示更多的k线
     * @param {Number} scale 放大或缩小的倍数
     */

  }, {
    key: "pinchMove",
    value: function pinchMove(scale) {
      if (!this.loading) {
        var newCount = this.data.length;

        try {
          var offsetCount = 5;
          var len = newCount;
          var beishu = 1;

          if (len > 210) {
            beishu = 25;
          } else if (len > 180) {
            beishu = 18;
          } else if (len > 160) {
            beishu = 16;
          } else if (len > 140) {
            beishu = 14;
          } else if (len > 120) {
            beishu = 12;
          } else if (len > 100) {
            beishu = 10;
          } else if (len > 60) {
            beishu = 2;
          } else {
            beishu = 1;
          }

          if (scale > 1) {
            offsetCount = Math.ceil(scale * beishu);
            newCount -= offsetCount;
          } else if (scale < 1) {
            offsetCount = Math.ceil(1 / scale * beishu);
            newCount += offsetCount;
          } // console.log(newCount);

        } catch (error) {
          if (scale > 1) {
            newCount = this.data.length - 5;
          } else if (scale < 1) {
            newCount = this.data.length + 5;
          }
        }

        this.reCalculate(0, newCount);
        return true;
      }

      return false;
    }
  }]);

  return KlineChart;
}(Chart_Chart);


// CONCATENATED MODULE: ./packages/stock-chart/src/charts/KlineChart2.js












/**
 * 取K线分钟线的数据，K线的柱子变成一条连续的线
 */



var KlineChart2_KlineChart =
/*#__PURE__*/
function (_Chart) {
  _inherits(KlineChart, _Chart);

  function KlineChart() {
    _classCallCheck(this, KlineChart);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(KlineChart).apply(this, arguments));
  }

  _createClass(KlineChart, [{
    key: "initData",
    value: function initData() {
      get_get(getPrototypeOf_getPrototypeOf(KlineChart.prototype), "initData", this).call(this); // 初始化数据,取options中data字段作为初始数据


      this.data = this.options.data || []; // 界面上当前显示图的数据

      this.cache = [].concat(this.data); // 缓存好的数据

      this.period = this.options.period || '1min';
      this.split = this.options.split !== undefined ? this.options.split : 1; // 位置表示显示数据在缓存中开始位置

      this.position = 0;
      this.hasMoreData = true; // 初始需要展示的数据条数,默认80

      this.reCalculate(0, this.options.initCount || 240);
      this.initSubscribe();
    }
  }, {
    key: "initSubscribe",
    value: function initSubscribe() {
      var _this = this;

      var param = {
        period: this.period,
        split: this.split,
        start: -1 // 订阅K线数据变化(更新最新的1条数据)

      };
      this.dataProvider.subscribeKline(param, function (data) {
        if (data.length > 0) {
          var updateData = data[0];

          if (_this.cache.length > 0) {
            // 订阅K线，每次收到的都是最新的一条数据，即cache缓存数据最后一条数据所对应日期的最新数据
            _this.cache[_this.cache.length - 1] = updateData;
          }

          _this.reCalculate();
        }
      });
    }
  }, {
    key: "redraw",
    value: function redraw() {
      if (this.data) {
        get_get(getPrototypeOf_getPrototypeOf(KlineChart.prototype), "redraw", this).call(this);
      }
    }
  }, {
    key: "initChart",
    value: function initChart() {
      get_get(getPrototypeOf_getPrototypeOf(KlineChart.prototype), "initChart", this).call(this); // 根据画板宽度调整显示数据个数,1像素最多显示一条数据(单条数据小于1像素时,需要调整显示个数),间隙和影线宽度都是固定的1像数


      var count = this.data.length; // FIXME count = 0

      var pixelPerWithSeparator = this.mainChartWidth / count;
      var pixelPer = Math.max(pixelPerWithSeparator * 2 / 3, 0.5);

      if (pixelPerWithSeparator < 1) {
        // 如果数据量过多，导致每条数据不到1像素时
        pixelPerWithSeparator = 1; // 显示数据量调整为画布宽度

        count = this.mainChartWidth;
        this.data = this.data.slice(0, count);
      } else if (pixelPer > 50) {
        // 超过最大值50,则取最大值
        pixelPerWithSeparator = 90;
        pixelPer = 60;
      } // X轴每条数据最小单位像素(每根柱子所占宽度)


      this.pixelPer = pixelPer; //  X轴最小单位像素(每根柱子所占宽度+柱子间的间隔)

      this.pixelPerWithSeparator = pixelPerWithSeparator; // 计算最大和最小值

      var MAX_VALUE = Number.MAX_VALUE;
      var MIN_VALUE = Number.MIN_VALUE;
      var min = MAX_VALUE;
      var max = 0;
      var maxVolume = 0;
      this.data.forEach(function (eachData) {
        max = Math.max(max, eachData.ZuiGaoJia || MIN_VALUE);
        min = Math.min(min, eachData.ZuiDiJia || MAX_VALUE);
        maxVolume = Math.max(maxVolume, eachData.ChengJiaoLiang);
      }); // 最大值和最小值范围增加10%

      this.max = max > min ? max + (max - min) * 0.1 : max * 1.1;
      this.min = max > min ? min - (max - min) * 0.1 : max * 0.9;

      if (this.split === 0 && this.min < 0) {
        this.min = 0;
      }

      this.maxVolume = maxVolume;
      this.candleChartHeight = this.mainChartHeight; // K线图Y轴每单位像素

      this.candleYPixelRadio = this.candleChartHeight / (this.max - this.min);
      this.volumeYPixelRadio = this.indicsChartHeight / maxVolume;
    }
    /**
     * 重新计算显示数据在缓存数据中的左偏移位置和长度
     * @param {Number} move 移动了多少单位(移动了多少根k线)：move为正数表示向左移动,负数表示向右移动
     * @param {Number} count 要显示的数据条数
     */

  }, {
    key: "reCalculate",
    value: function reCalculate() {
      var _this2 = this;

      var move = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var count = arguments.length > 1 ? arguments[1] : undefined;
      // 重新计算显示数据在缓存数据中的左偏移位置和长度
      var cacheCount = this.cache.length;
      var requestCount = 0;
      var currentCount = this.data.length;
      var leftPosition = this.position; // 如果move为正数,表示向左移动,判断缓存数据是否存在,缓存数据不足则加载更多数据,负数表示向右移动直接从缓存中取得数据

      if (move > 0) {
        // 手指向右划，数据向左移动
        if (leftPosition < move) {
          // 如果最左边数据的index小于移动的距离，说明缓存数据不够了
          if (this.hasMoreData) {
            requestCount = move - leftPosition;
          } else {
            leftPosition = 0;
          }
        } else {
          leftPosition -= move;
        }
      } else if (move < 0) {
        // 手指向左划，数据向右移动
        var restCount = cacheCount - leftPosition - currentCount; // 右侧还有多少未显示的剩余数据

        if (restCount > -move) {
          // 说明剩余数据比滑动的距离需要的数据多
          leftPosition += -move;
        } else {
          leftPosition += restCount;
        }
      } // 如果count比当前个数小,则直接左偏移向右移动count/2


      if (count < currentCount) {
        leftPosition += number_parse_int_default()((currentCount - count) / 2, 10);
        currentCount = count;
      } else if (count > currentCount) {
        var leftOffsetCount = number_parse_int_default()((count - currentCount) / 2, 10);

        leftOffsetCount += Math.max(leftOffsetCount - (cacheCount - leftPosition - currentCount), 0); // 如果缓存数据不足则加载更多数据

        if (leftPosition < leftOffsetCount && this.hasMoreData) {
          requestCount = leftOffsetCount - leftPosition;
        } else {
          leftPosition = Math.max(leftPosition - leftOffsetCount, 0);
          currentCount = count;
        }
      } // requestCount不为零则加载数据后再做reCalculate


      if (requestCount > 0) {
        // 计算请求数据的start和count,count需要加上预加载个数(默认等于当前显示的数据个数,但不能超过限制的最大值)
        // 初始currentCount为0时,请求个数为初始显示个数的2倍
        requestCount += currentCount || requestCount;
        var start = -(requestCount + cacheCount);
        this.loadMoreData(start, requestCount).then(function () {
          _this2.reCalculate(move, count);
        });
        return;
      } // 根据新的左偏移位置和新的数据个数重设显示数据data后重画图形


      this.data = this.cache.slice(leftPosition, leftPosition + currentCount);
      this.position = leftPosition;
      this.redraw();
    }
    /**
     * 动态加载数据,添加到缓存cache中并且修改当前位置
     * @param {Number} start 行筛选，-1表示最后一行开始，7表示从第7行开始
     * @param {Number} count 行筛选，大于等于0的整数，表示从start的位置往后筛选多少行数据（包括start）
     */

  }, {
    key: "loadMoreData",
    value: function loadMoreData(start, count) {
      var _this3 = this;

      this.loading = true;
      this.canvas && this.canvas.toggleMask(true);
      var lastDataProvider = this.dataProvider;
      var klinePromise = this.dataProvider.getKline({
        period: this.period,
        split: this.split,
        start: start,
        count: count
      });
      return klinePromise.then(function (klineData) {
        if (klineData && lastDataProvider === _this3.dataProvider) {
          // 合并数据到缓存中,判断是否还有更多数据(请求到的数据长度小于count大小或者请求到的数据的时间在cache中已经存在)
          // if (klineData.length < count) {
          //   this.hasMoreData = false;
          // }
          var cacheStartTime = _this3.cache[0] ? _this3.cache[0].ShiJian : Number.MAX_VALUE;
          var eachData;

          for (var i = klineData.length; i > 0; i -= 1) {
            eachData = klineData[i - 1];

            if (eachData.ShiJian < cacheStartTime) {
              _this3.cache.unshift(eachData);

              _this3.position += 1;
            } else {
              _this3.hasMoreData = false; // break;
            }
          }
        }

        _this3.loading = false;

        _this3.redraw();
      });
    }
    /**
     * 格式化日期
     * @param {Number} text 日期，以毫秒为单位
     * @param {Boolean} hasDate 返回格式是否带分钟
     * @returns hasDate ? 'yyyy-MM-dd' : 'yyyy-MM'
     */

  }, {
    key: "formatXAxisLabel",
    value: function formatXAxisLabel(text) {
      var hasDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var date = new Date(text);
      return hasDay ? stockUtils.formatDate(date, 'yyyy-MM-dd hh:mm') : stockUtils.formatDate(date, 'hh:00');
    }
    /* eslint class-methods-use-this: 0 */

    /**
     * 判断是否是上涨状态
     * @param {Number} open 开盘价
     * @param {Number} close 收盘价
     * @param {Number} lastClose 昨收
     */

  }, {
    key: "isUp",
    value: function isUp(open, close, lastClose) {
      // FIXME 还需要考虑当天收盘和昨收相同的情况
      return open !== close ? close > open : close > lastClose;
    }
  }, {
    key: "drawChart",
    value: function drawChart() {
      var _this4 = this;

      var kPoints = [];
      var pixelPerWithSeparator = this.pixelPerWithSeparator;
      var pixelPer = this.pixelPer;
      var halfPixelPer = pixelPer / 2;
      var hasVolume = this.currentIndics === 'VOL';
      var candleYPixelRadio = this.candleYPixelRadio;
      var max = this.max;
      var lastLabel;
      var currentLabel;
      var lastDrawIndex = 0; // 画出每根k线和量

      /* eslint no-param-reassign: 0 */

      this.data.forEach(function (eachData, index) {
        var lastClose = eachData.lastClose; // 添加数据附加属性

        if (!lastClose) {
          lastClose = eachData.lastClose = index > 0 ? _this4.data[index - 1].ShouPanJia : 0;
          eachData.time = eachData.ShiJian * 1000;
          eachData.isUp = _this4.isUp(eachData.KaiPanJia, eachData.ShouPanJia, lastClose); // xAxisLabel为年月yyyy-MM

          eachData.xAxisLabel = _this4.formatXAxisLabel(eachData.time);
        }

        currentLabel = eachData.xAxisLabel; // 满足条件画x轴坐标(跨月的第一交易日并且两个坐标点之间的距离不小于指定大小)

        if (currentLabel !== lastLabel) {
          lastLabel = currentLabel;

          if ((index - lastDrawIndex) * pixelPerWithSeparator > 55 * _this4.canvas.pixelRadio) {
            // 第一根和最后一根不画
            var isShow = index !== 0 && index !== _this4.data.length - 1;

            _this4.drawXAxisGridLine(pixelPerWithSeparator * index + halfPixelPer + _this4.leftRangeWidth, currentLabel, undefined, undefined, undefined, undefined, undefined, isShow, 'dashed');

            lastDrawIndex = index;
          }
        }

        if (hasVolume) {
          _this4.drawVolume(index, eachData.ChengJiaoLiang, eachData.isUp);
        } // 以K线的收盘价 画线条


        var x = pixelPerWithSeparator * index + halfPixelPer + _this4.leftRangeWidth;

        if (index === 0) {
          x -= halfPixelPer;
        } else if (index === _this4.data.length - 1) {
          x += halfPixelPer;
        }

        kPoints.push([x, candleYPixelRadio * (max - eachData.ShouPanJia)]);
      }); // 绘制收盘价的线条
      // canvas.drawPath(kPoints, 'black');

      this.canvas.fillPath(kPoints, this.mainChartHeight, this.minLineColor, this.minFillColor, 2); // 按压时显示十字光标

      if (this.pressPoint) {
        var x = this.pressPoint.x;

        if (x <= this.leftRangeWidth || x >= this.canvas.canvasWidth - this.rightRangeWidth) {
          return;
        }

        x = x - this.leftRangeWidth;

        var index = parse_int_default()(x / pixelPerWithSeparator, 10);

        var data = this.data[index];
        if (!data) return; // x
        // 绘制按压时垂直方向的辅助线

        this.drawXAxisGridLine(pixelPerWithSeparator * index + pixelPerWithSeparator / 2 + this.leftRangeWidth, this.formatXAxisLabel(data.time, true), this.pointerLineColor, undefined, true, true, this.pointerTickColor); // y
        // 绘制按压时水平方向的辅助线

        var newY = candleYPixelRadio * (max - data.ShouPanJia);

        if (newY < this.candleChartHeight && newY > 0) {
          this.drawYAxisGridLine(newY, data.ShouPanJia, this.pointerLineColor, newY > this.candleChartHeight / 2 ? 'top' : 'bottom', true, this.pointerTickColor, this.pricePrecision);
        } // 按压点所在的x轴坐标，对应的分时图主图的成交价(的y轴坐标)，即以此时成交价的坐标点绘制一个小圆点
        // this.canvas.drawCircle(x, newY, 3, 'rgba(230, 100, 100, 0.8)');
        // 显示详细信息


        this.longTap(data, 'kline2');
      }
    }
    /**
     * 画出纵坐标(水平方向的线)
     */

  }, {
    key: "drawBackground",
    value: function drawBackground() {
      get_get(getPrototypeOf_getPrototypeOf(KlineChart.prototype), "drawBackground", this).call(this);

      var max = this.max;
      var min = this.min; // 绘制K线图最上方的一条水平线，文字(最大值)在线的下面

      this.drawYAxisGridLine(0, max, undefined, 'bottom', undefined, undefined, this.pricePrecision); // 绘制K线图最下方的一条水平线，文字(最小值)在线的上面

      this.drawYAxisGridLine(this.candleChartHeight, min, undefined, undefined, undefined, undefined, this.pricePrecision); // 绘制中间几条水平线

      for (var i = 1; i < this.horizLineCount; i++) {
        // let lineType = i % 2 === 0 ? 'solid' : 'dashed'
        this.drawYAxisGridLine(this.candleChartHeight * (i / this.horizLineCount), max - (max - min) * (i / this.horizLineCount), undefined, 'center', undefined, undefined, this.pricePrecision, 'dashed');
      }

      var hasVolume = this.currentIndics === 'VOL';

      if (hasVolume) {
        // 绘制量图最下方的一条水平线
        this.drawYAxisGridLine(this.canvas.canvasHeight, '0', undefined, undefined, undefined, undefined, this.volPrecision); // 绘制量图最上方的一条水平线

        this.drawYAxisGridLine(this.canvas.canvasHeight - this.volumeChartHeight, this.maxVolume, null, 'bottom', undefined, undefined, this.volPrecision);
      }
    }
    /** 扩展图形绘制 */

  }, {
    key: "drawChartExtend",
    value: function drawChartExtend() {}
    /**
     * 画量图的柱子
     * @param {Number} index 要绘制的量图的第几个柱子
     * @param {Number} volume
     * @param {Boolean} isUp 是否是上涨状态
     */

  }, {
    key: "drawVolume",
    value: function drawVolume(index, volume, isUp) {
      var width = this.pixelPer;
      var x = this.pixelPerWithSeparator * index + this.pixelPerWithSeparator / 2 - width / 2 + this.leftRangeWidth;
      var y = this.canvas.canvasHeight;
      var height = -this.volumeYPixelRadio * volume;
      this.canvas.drawRect(x, y, width, height, this.getColor(isUp));
    }
  }, {
    key: "panMove",
    value: function panMove(pressed, x, y, deltaX) {
      if (!this.loading) {
        if (pressed) {
          this.pressPoint = {
            x: x,
            y: y
          };
          this.redraw();
        } else if (this.pressPoint) {
          this.pressPoint = null;
          this.redraw();
        } else {
          var size = Math.round(deltaX / this.pixelPerWithSeparator);

          if (typeof size === 'number' && size !== 0) {
            this.reCalculate(size);
            return true;
          }
        }
      }

      return false;
    }
  }]);

  return KlineChart;
}(Chart_Chart);


// CONCATENATED MODULE: ./packages/stock-chart/src/charts/DataProvider.js









function DataProvider_noop() {}

var oneMinute = 1 * 60 * 1000;
var oneDay = 1 * 24 * 60 * oneMinute;
var baseIndicators = ['MA', 'BOLL', 'MACD', 'KDJ', 'RSI', 'DMA', 'BIAS', 'CCI', 'W&R']; // 默认股票交易时间

var defaultTimeInfo = function () {
  var now = new Date();
  var year = now.getFullYear();
  var month = "0".concat(now.getMonth() + 1).slice(-2);
  var day = "0".concat(now.getDate()).slice(-2);
  var date = [year, month, day].join('');
  return {
    RiQi: date,
    JiaoYiShiJianDuan: [{
      KaiShiShiJian: 930,
      JieShuShiJian: 1130,
      KaiShiRiQi: date,
      JieShuRiQi: date
    }, {
      KaiShiShiJian: 1300,
      JieShuShiJian: 1500,
      KaiShiRiQi: date,
      JieShuRiQi: date
    }],
    JiHeJingJiaDianShu: 15,
    ShiQu: 8,
    ZuoShou: 0
  };
}();
/**
 * 解析日期、时间、时区，返回Date.UTC(2018,3,17,9,30)
 * 注意：Date.UTC()的month是0到11之间的整数
 * @param {String || Number} dateParam 日期，格式为20180417
 * @param {String || Number} hourMinute 时间，格式为930或者1130
 * @param {Number} timeZone 时区，默认为 8
 * @returns 返回从1970-1-1 00:00:00 UTC到指定日期(例2018-04-17 09:30)的毫秒数
 */


var DataProvider_getTime = function getTime(dateParam, hourMinute, timeZone) {
  var date = String(dateParam);

  var year = parse_int_default()(date.substr(0, 4), 10);

  var month = parse_int_default()(date.substr(4, 2), 10) - 1;

  var day = parse_int_default()(date.substr(6, 2), 10);

  var hour = parse_int_default()(Number(hourMinute) / 100, 10) - timeZone;
  var minute = hourMinute % 100;
  return Date.UTC(year, month, day, hour, minute);
};

var DataProvider_DataProvider =
/*#__PURE__*/
function () {
  function DataProvider(params, dzhyun, huilv, volTradeUnit, showPrefix) {
    _classCallCheck(this, DataProvider);

    this.dzhyun = dzhyun; // dzhyunjs实例

    this.huilv = huilv; // 汇率

    this.showPrefix = showPrefix; // 是否显示集合竞价

    this.volTradeUnit = volTradeUnit; // 成交量的交易单位
    // params为{obj: 'xxx'}

    this.params = params;
  }

  _createClass(DataProvider, [{
    key: "getKline",
    value: function getKline(params) {
      var _this = this;

      var klineQuery = this.dzhyun.query('/quote/kline', assign_default()({}, this.params, params)).then(function (data) {
        // console.log('getKline', data);
        if (data[0] && data[0].Data) {
          var list = data[0].Data;
          list.forEach(function (item) {
            item.KaiPanJia = item.KaiPanJia * _this.huilv;
            item.ShouPanJia = item.ShouPanJia * _this.huilv;
            item.ZuiDiJia = item.ZuiDiJia * _this.huilv;
            item.ZuiGaoJia = item.ZuiGaoJia * _this.huilv;
            item.ChengJiaoLiang = item.ChengJiaoLiang / _this.volTradeUnit;

            if (item.lastClose) {
              item.lastClose = item.lastClose * _this.huilv;
            }
          });
          return list;
        }

        return [];
      });
      return klineQuery;
    }
  }, {
    key: "subscribeKline",
    value: function subscribeKline(params) {
      var _this2 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DataProvider_noop;
      // 每次订阅前线取消其它的订阅
      this.cancel();
      this.klineDataStore = this.dzhyun.subscribe('/quote/kline', assign_default()({}, this.params, params), function (data) {
        if (!(data instanceof Error)) {
          var kline = data[0] && data[0].Data;

          if (kline) {
            // console.log('DataProvider.js-->subscribeKline', JSON.parse(JSON.stringify(data)));
            kline.forEach(function (item) {
              item.KaiPanJia = item.KaiPanJia * _this2.huilv;
              item.ShouPanJia = item.ShouPanJia * _this2.huilv;
              item.ZuiDiJia = item.ZuiDiJia * _this2.huilv;
              item.ZuiGaoJia = item.ZuiGaoJia * _this2.huilv;
              item.ChengJiaoLiang = item.ChengJiaoLiang / _this2.volTradeUnit;

              if (item.lastClose) {
                item.lastClose = item.lastClose * _this2.huilv;
              }
            });
            callback(kline);
          }
        }
      });
    }
  }, {
    key: "getMA",
    value: function getMA(params) {
      var _this3 = this;

      return this.dzhyun.query('/indicator/calc', assign_default()({}, this.params, params, {
        name: 'MA',
        text: 'MA1:MA(CLOSE,P1);MA2:MA(CLOSE,P2);MA3:MA(CLOSE,P3);MA4:MA(CLOSE,P4);',
        parameter: 'P1=5,P2=10,P3=30,P4=60'
      })).then(function (data) {
        if (data[0] && data[0].ShuJu) {
          var list = data[0].ShuJu;

          var _loop = function _loop(i, j) {
            var jieguo = list[i].JieGuo;
            jieguo.forEach(function (item, index) {
              jieguo[index] = item * _this3.huilv;
            });
          };

          for (var i = 0, j = list.length; i < j; i++) {
            _loop(i, j);
          }

          return list;
        }

        return [];
      }).catch(function () {
        return [];
      });
    }
  }, {
    key: "getIndicatorData",
    value: function getIndicatorData(params) {
      var queryPath = '/indicator/calc';

      if (baseIndicators.indexOf(params.name) === -1) {
        // 判断是否是基础指标
        queryPath = '/indicator/calc/new';
      }

      return this.dzhyun.query(queryPath, assign_default()({}, this.params, params)).then(function (data) {
        if (data[0] && data[0].ShuJu) {
          return data[0].ShuJu;
        }

        return [];
      }).catch(function () {
        return [];
      });
    }
    /**
     * 初始化minCache，给minCache添加交易时间段minTimes
     * @param {Object} timeInfo
     */

  }, {
    key: "_initMinCache",
    value: function _initMinCache(timeInfo) {
      var times = timeInfo.JiaoYiShiJianDuan;
      var timeZone = timeInfo.ShiQu || 8;
      this.minCache = {
        lastClose: timeInfo.ZuoShou,
        ZuoShou: timeInfo.ZuoShou,
        // 用来缓存初始状态时的 昨收价，因为汇率变化时要重新计算
        ShiQu: timeZone
      };
      var minTimes = [];

      if (times && times.length > 0) {
        // 统计当日的数据
        minTimes = this.calMinTimes(times, timeZone, timeInfo.JiHeJingJiaDianShu || 0);
      }

      this.minCache.minTimes = minTimes;
    }
    /**
     * 订阅当日分时
     * @param {Function} callback 回调函数
     */

  }, {
    key: "subscribeMin",
    value: function subscribeMin() {
      var _this4 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DataProvider_noop;
      // 每次订阅前线取消其它的订阅
      this.cancel();

      var queryParams = assign_default()({}, this.params);

      if (this.minCache && this.minCache.currentTime) {
        var beginTime = stockUtils.formatDate(this.minCache.currentTime * 1000, "yyyyMMdd-hhmmss") + "-000-".concat(this.minCache.ShiQu);
        queryParams.begin_time = beginTime;
      }

      this.minDataStore = this.dzhyun.subscribe('/quote/min', queryParams, function (data) {
        if (data && !(data instanceof Error) && data.length > 0) {
          var minData = data[0]; // 清盘

          if (minData.QingPan === 1) {
            _this4.minCache = null;
          } // 初始缓存数据(交易时间段)


          if (!_this4.minCache) {
            // console.log('subscribeMin-->data', JSON.parse(JSON.stringify(data)))
            _this4._initMinCache(minData.JiaoYiShiJianDuan ? minData : defaultTimeInfo // defaultTimeInfo
            );
          }

          if (_this4.minCache && _this4.minCache.ZuoShou) {
            _this4.minCache.lastClose = _this4.minCache.ZuoShou * _this4.huilv;
          } // 更新数据


          minData = minData.Data;

          if (minData && minData.length > 0) {
            minData.forEach(function (eachData) {
              var time = eachData.ShiJian * 1000;
              var newPrice = eachData.ChengJiaoJia * _this4.huilv;

              _this4.updateMinCache(_this4.minCache, _this4.minCache.minTimes, time, eachData, newPrice);
            }); // 记录最后一条数据的时间(以秒为单位)，下次订阅从此时间开始

            var currentTime = minData[minData.length - 1].ShiJian;

            if (currentTime) {
              _this4.minCache.currentTime = currentTime;
            }
          } // console.log('subscribeMin-->this.minCache', JSON.parse(JSON.stringify(this.minCache)));


          callback(_this4.minCache);
        }
      });
    }
    /**
     * 根据交易时间段得出时间段minTimes
     * @param {Array} times JiaoYiShiJianDuan 交易时间段
     * @param {Number} timeZone ShiQu 时区
     * @param {Number} JiHeJingJiaDianShu 集合竞价点数
     */

  }, {
    key: "calMinTimes",
    value: function calMinTimes(times, timeZone) {
      var _this5 = this;

      var JiHeJingJiaDianShu = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var minTimes = []; // console.log(`calMinTimes-->times`, JSON.parse(JSON.stringify(times)))

      if (times && times.length > 0) {
        var lastTime = 0;
        var startTime;
        var endTime;
        var len = times.length - 1;
        this.minCache.timeIntervalPoints = [];
        times.forEach(function (eachTime, index) {
          startTime = DataProvider_getTime(eachTime.KaiShiRiQi, eachTime.KaiShiShiJian, timeZone);
          endTime = DataProvider_getTime(eachTime.JieShuRiQi, eachTime.JieShuShiJian, timeZone); // 跨天

          if (endTime < startTime) {
            endTime += oneDay;
          }

          if (startTime < lastTime) {
            startTime += oneDay;
            endTime += oneDay;
          } // 跳过除第一段时间的开始时间


          if (index > 0) {
            startTime += oneMinute;
          } // 给minTimes添加数据，从startTime开始到endTime，每隔1分钟oneMinute添加一次


          while (startTime <= endTime) {
            minTimes.push(startTime);
            startTime += oneMinute;
          }

          lastTime = endTime; // 保存时间间隔点，例如 11:30

          if (index < len) {
            _this5.minCache.timeIntervalPoints.push(endTime);
          }
        });

        if (this.showPrefix) {
          // 默认包含集合竞价(9:15到9:30之间)的数据
          var prefixMinute = JiHeJingJiaDianShu;
          startTime = minTimes[0]; // 如果有集合竞价，要画(9:15到9:30之间)的数据，所以时间段要多加15分钟

          for (var i = 1; i <= prefixMinute; i += 1) {
            minTimes.unshift(startTime - i * oneMinute);
          }
        }
      }

      return minTimes;
    }
    /**
     * 初始化多日分时multiMinCache，添加交易时间段minTimes
     * @param {Object} data 数据
     */

  }, {
    key: "_initMultiMinCache",
    value: function _initMultiMinCache(data) {
      var _this6 = this;

      var times = data.JiaoYiShiJianDuan;
      var timeZone = data.ShiQu || 8;
      this.multiMinCache = {
        lastClose: data.ZuoShou,
        ZuoShou: data.ZuoShou,
        // 用来缓存初始状态时的 昨收价，因为汇率变化时要重新计算
        ShiQu: timeZone
      };
      var minTimes = []; // 统计历史分时的数据

      if (data.LiShiFenShi && data.LiShiFenShi.length > 0) {
        var oldData = data.LiShiFenShi;
        var item;
        var rows;

        var _loop2 = function _loop2(i, j) {
          var itemMinTimes = [];
          item = oldData[i];
          rows = item.Rows;

          if (item.JiaoYiShiJianDuan) {
            itemMinTimes = _this6.calMinTimes(item.JiaoYiShiJianDuan, timeZone);
          }

          if (itemMinTimes.length > 0 && rows && rows.length > 0) {
            rows.forEach(function (eachData) {
              var time = eachData.ShiJian * 1000;
              var newPrice = eachData.ChengJiaoJia * _this6.huilv;

              _this6.updateMinCache(_this6.multiMinCache, itemMinTimes, time, eachData, newPrice);
            });
          }

          minTimes = minTimes.concat(itemMinTimes);
        };

        for (var i = 0, j = oldData.length; i < j; i++) {
          _loop2(i, j);
        }
      } // 统计当日的数据


      if (times && times.length > 0) {
        var curMinTimes = this.calMinTimes(times, timeZone, data.JiHeJingJiaDianShu || 0);
        var curData = data.Data;

        if (curMinTimes.length > 0 && curData && curData.length > 0) {
          curData.forEach(function (eachData) {
            var time = eachData.ShiJian * 1000;
            var newPrice = eachData.ChengJiaoJia * _this6.huilv;

            _this6.updateMinCache(_this6.multiMinCache, curMinTimes, time, eachData, newPrice);
          }); // 记录最后一条数据的时间(以秒为单位)，下次订阅从此时间开始

          var currentTime = curData[curData.length - 1].ShiJian;

          if (currentTime) {
            this.multiMinCache.currentTime = currentTime;
          }
        }

        minTimes = minTimes.concat(curMinTimes);
      }

      this.multiMinCache.minTimes = minTimes;
    }
  }, {
    key: "updateMinCache",
    value: function updateMinCache(cache, minTimes, time, data, newPrice) {
      var index = minTimes.indexOf(time);
      data.ChengJiaoJia = newPrice;
      data.ChengJiaoLiang = data.ChengJiaoLiang / this.volTradeUnit;

      if (index >= 0) {
        cache[time] = data;
      } else {
        /**
         * 跨天，后端逻辑错误
         * 交易时间段(JiaoYiShiJianDuan)的结束日期(JieShuRiQi)和结束时间(JieShuShiJian)不匹配
         */

        /* 可能是集合竞价 */
        // console.warn('跨天');
      }
    }
    /**
     * 订阅多日分时
     * @param {Function} callback 回调函数
     * @param {Object} params 查询参数
     */

  }, {
    key: "subMultiMin",
    value: function subMultiMin() {
      var _this7 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DataProvider_noop;
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // 每次订阅前线取消其它的订阅
      this.cancel();

      var queryParams = assign_default()({}, this.params, params);

      if (this.multiMinCache && this.multiMinCache.currentTime) {
        var beginTime = stockUtils.formatDate(this.multiMinCache.currentTime * 1000, "yyyyMMdd-hhmmss") + "-000-".concat(this.multiMinCache.ShiQu);
        queryParams.begin_time = beginTime;
      }

      this.multiMinDataStore = this.dzhyun.subscribe('/quote/min', queryParams, function (data) {
        // console.log('subMultiMin-->data', JSON.parse(JSON.stringify(data)));
        if (data && !(data instanceof Error) && data.length > 0) {
          var minData = data[0]; // 清盘

          if (minData.QingPan === 1) {
            _this7.multiMinCache = null;
          } // 初始缓存数据


          if (!_this7.multiMinCache) {
            _this7._initMultiMinCache(minData.JiaoYiShiJianDuan ? minData : defaultTimeInfo);
          } else {
            // 更新数据
            minData = minData.Data;

            if (minData && minData.length > 0) {
              minData.forEach(function (eachData) {
                var time = eachData.ShiJian * 1000;
                var newPrice = eachData.ChengJiaoJia * _this7.huilv;

                _this7.updateMinCache(_this7.multiMinCache, _this7.multiMinCache.minTimes, time, eachData, newPrice);
              }); // 记录最后一条数据的时间(以秒为单位)，下次订阅从此时间开始

              var currentTime = minData[minData.length - 1].ShiJian;

              if (currentTime) {
                _this7.multiMinCache.currentTime = currentTime;
              }
            }
          }

          if (_this7.multiMinCache && _this7.multiMinCache.ZuoShou) {
            _this7.multiMinCache.lastClose = _this7.multiMinCache.ZuoShou * _this7.huilv;
          } // console.log('subMultiMin-->this.multiMinCache', JSON.parse(JSON.stringify(this.multiMinCache)));


          callback(_this7.multiMinCache);
        }
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this.klineDataStore) {
        this.klineDataStore.cancel();
        this.klineDataStore = null;
      }

      if (this.minDataStore) {
        this.minDataStore.cancel();
        this.minDataStore = null;
      }

      if (this.multiMinDataStore) {
        this.multiMinDataStore.cancel();
        this.multiMinDataStore = null;
      }
    }
  }]);

  return DataProvider;
}();


// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/date/now.js
var date_now = __webpack_require__("0a0d");
var now_default = /*#__PURE__*/__webpack_require__.n(date_now);

// CONCATENATED MODULE: ./packages/stock-chart/src/utils/gesture.js






/**
 * 专为绘图封装的手势库
 * 支持事件：
 * 长按 longTap
 * 缩放 pinch
 * 移动(k线图) move
 * 触摸结束 end
 * 单击(切换分时和K线) tap
 */
// 默认配置
var OPTION = {
  longTapTime: 600
};
var ABS = Math.abs;

var gesture_Gesture =
/*#__PURE__*/
function () {
  function Gesture(target) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Gesture);

    // 获取目标元素
    this.target = typeof target === 'string' ? document.querySelector(target) : target; // 绑定基本事件，需要注意this的指向

    this._start = this._start.bind(this);
    this._move = this._move.bind(this);
    this._end = this._end.bind(this);
    this._cancel = this._cancel.bind(this);
    this.target.addEventListener('touchstart', this._start, false);
    this.target.addEventListener('touchmove', this._move, false);
    this.target.addEventListener('touchend', this._end, false);
    this.target.addEventListener('touchcancel', this._cancel, false);

    this._init();

    this.handles = {}; // 用于存放回调函数的对象

    this.option = assign_default()({}, OPTION, option);
  }

  _createClass(Gesture, [{
    key: "_init",
    value: function _init() {
      this.touch = {}; // 记录刚触摸的手指

      this.movetouch = {}; // 记录移动过程中变化的手指参数

      this.isLongTap = false; // 上一次两指间 x、y轴 的距离差

      this.preVector = {
        x: 0,
        y: 0
      };
      this.params = {
        zoom: 1,
        // 触摸和移动时，缩放的倍数
        deltaX: 0,
        // 触摸和移动时手指每次变化的横坐标
        direction: '' // 滑动的方向

      };
    }
  }, {
    key: "_start",
    value: function _start(e) {
      var _this = this;

      this._cancelTouchEnd();

      this._cancelLongTap();

      var point = e.touches ? e.touches[0] : e; // 获得触摸参数

      var now = now_default()(); // 当前时间


      this.touch.startX = point.pageX;
      this.touch.startY = point.pageY;
      this.touch.startTime = now;

      if (e.touches.length > 1) {
        // 这里为处理多个手指触摸的情况
        var point2 = e.touches[1]; // 获取第二个手指信息
        // 两根手指x轴和y轴的距离差

        this.preVector = {
          x: point2.pageX - this.touch.startX,
          y: point2.pageY - this.touch.startY
        };
      } else {
        this.longTapTimeout = window.setTimeout(function () {
          _this.isLongTap = true;

          _this._emit('longTap', e);
        }, ~~this.option.longTapTime);
      }
    }
  }, {
    key: "_move",
    value: function _move(e) {
      this._cancelLongTap();

      this._cancelTouchEnd();

      var shouldPrevent = false; // 是否需要阻止默认行为(页面滚动)

      var point = e.touches ? e.touches[0] : e;

      if (e.touches.length > 1) {
        shouldPrevent = true; // 当手指移动时，如果已经触发了长按事件，则按照业务，应该继续长按事件

        if (this.isLongTap) {
          this._emit('longTap', e);
        } else {
          // 如果没有触发过长按事件，则按多个手指触摸移动的情况
          var point2 = e.touches[1];
          var v = {
            x: point2.pageX - point.pageX,
            y: point2.pageY - point.pageY // 根据上一次两指间的距离(x轴的距离差)和本次两指间的距离，计算缩放倍数

          };

          if (this.preVector.x && v.x) {
            // 计算放大或者缩小的倍数（利用前后两指间的距离）
            this.params.zoom = this.calcLen(v) / this.calcLen(this.preVector);

            this._emit('pinch', e);
          } // 更新最后上一个向量为当前向量


          this.preVector.x = v.x;
          this.preVector.y = v.y;
        }
      } else {
        // 当手指移动时，如果已经触发了长按事件，则按照业务，应该继续长按事件
        if (this.isLongTap) {
          shouldPrevent = true;

          this._emit('longTap', e);
        } else {
          if (this.movetouch.x || this.movetouch.y) {
            var deltaX = ~~(point.pageX - (this.movetouch.x || 0));
            var deltaY = ~~(point.pageY - (this.movetouch.y || 0));

            if (ABS(deltaX) < ABS(deltaY)) {
              if (deltaY < 0) {
                this.params.direction = 'up';
              } else {
                this.params.direction = 'down';
              }
            } else {
              shouldPrevent = true;

              if (deltaX < 0) {
                this.params.direction = 'left';
              } else {
                this.params.direction = 'right';
              }
            }
          }

          if (this.params.direction === 'left' || this.params.direction === 'right') {
            // 记录移动过程中与上一次移动的相对坐标
            if (this.movetouch.x) {
              this.params.deltaX = point.pageX - this.movetouch.x;
            } else {
              this.params.deltaX = 0;
            }

            this._emit('move', e);
          }
        } // 更新移动中的手指参数


        this.movetouch.x = point.pageX;
        this.movetouch.y = point.pageY;
      }

      if (shouldPrevent) {
        e.preventDefault();
      }
    }
  }, {
    key: "_end",
    value: function _end(e) {
      this._touchEnd(e);
    }
  }, {
    key: "_cancel",
    value: function _cancel(e) {
      this._touchEnd(e);
    }
  }, {
    key: "_touchEnd",
    value: function _touchEnd(e) {
      var _this2 = this;

      if (this.isLongTap) {
        // 如果当前处于长按，则隔一段时间后再重绘图表(为了让长按的辅助线多停留一会)
        this.touchEndTimeout = window.setTimeout(function () {
          _this2._emit('end', e);

          _this2._init();
        }, 1500);
      } else {
        var shouldTap = false; // 是否应该触发单击事件tap

        if (e.touches && e.touches.length > 0) {
          // 如果touchend事件触发时屏幕上还有手指则不触发单击
          shouldTap = false;
        } else {
          // 触发单击事件的条件
          var timestamp = now_default()(); // 1.本次手指触碰的时间在300ms以内
          // 2.手指的距离变化在30px内


          if (timestamp - this.touch.startTime <= 300) {
            if (this.movetouch.x === undefined && this.movetouch.y === undefined) {
              // 没有movetouch说明没有触发touchmove事件
              shouldTap = true;
            } else {
              var deltaX = ~~((this.movetouch.x || 0) - this.touch.startX);
              var deltaY = ~~((this.movetouch.y || 0) - this.touch.startY);
              var condition2 = this.movetouch.x !== undefined && ABS(deltaX) <= 30;
              var condition3 = this.movetouch.y !== undefined && ABS(deltaY) <= 30;

              if (condition2 && condition3) {
                shouldTap = true;
              }
            }
          }
        }

        this.handleTouchEnd(e);

        if (shouldTap) {
          this._emit('tap', e);
        }
      }
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(e) {
      // 手指离开，取消长按事件定时器
      this._cancelLongTap();

      this._emit('end', e);

      this._init();
    }
  }, {
    key: "_emit",
    value: function _emit(type, e) {
      if (this.handles[type] && typeof this.handles[type] === 'function') {
        this.handles[type].call(this.target, e, JSON.parse(stringify_default()(this.params)));
      }
    }
    /**
     * 取消长按定时器
     */

  }, {
    key: "_cancelLongTap",
    value: function _cancelLongTap() {
      if (this.longTapTimeout) {
        window.clearTimeout(this.longTapTimeout);
        this.longTapTimeout = null;
      }
    }
    /**
     * 取消touchend定时器
     */

  }, {
    key: "_cancelTouchEnd",
    value: function _cancelTouchEnd() {
      if (this.touchEndTimeout) {
        window.clearTimeout(this.touchEndTimeout);
        this.touchEndTimeout = null;
      }
    }
    /**
     * 取消所有的定时器
     */

  }, {
    key: "cancelAll",
    value: function cancelAll() {
      this._cancelLongTap();

      this._cancelTouchEnd();
    }
    /**
     * 计算两点间的距离（直角三角形斜边的长度）
     * @param {Object} v v.x两点间x轴距离差,v.y两点间y轴距离差
     */

  }, {
    key: "calcLen",
    value: function calcLen(v) {
      return Math.sqrt(v.x * v.x + v.y * v.y);
    }
    /**
     * 给目标元素添加事件
     * @param {String} type 事件名
     * @param {*} callback 回调函数
     */

  }, {
    key: "on",
    value: function on(type, callback) {
      this.handles[type] = callback;
    }
    /**
     * 移除目标元素的事件
     * @param {String} type 事件名
     */

  }, {
    key: "off",
    value: function off(type) {
      this.handles[type] = null;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.cancelAll();
      this.target.removeEventListener('touchstart', this._start);
      this.target.removeEventListener('touchmove', this._move);
      this.target.removeEventListener('touchend', this._end);
      this.target.removeEventListener('touchcancel', this._cancel);
      this.isLongTap = false;
      this.params = this.handles = this.movetouch = this.touch = this.preVector = null;
      return false;
    }
  }]);

  return Gesture;
}();


// CONCATENATED MODULE: ./packages/stock-chart/src/utils/mouseEventAdapter.js






var mouseEventAdapter_OPTION = {
  longTapTime: 600
};
var mouseEventAdapter_ABS = Math.abs;

var mouseEventAdapter_Mouse =
/*#__PURE__*/
function () {
  function Mouse(target) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Mouse);

    // 获取目标元素
    this.target = typeof target === 'string' ? document.querySelector(target) : target; // 绑定基本事件，需要注意this的指向

    this._start = this._start.bind(this);
    this._move = this._move.bind(this);
    this._end = this._end.bind(this);
    this._pinch = this._pinch.bind(this);
    this._leave = this._leave.bind(this);
    this.target.addEventListener('mousedown', this._start, false);
    this.target.addEventListener('mousemove', this._move, false);
    this.target.addEventListener('mouseup', this._end, false);
    this.target.addEventListener('mouseleave', this._leave, false);
    this.addMouseWheelEvent();

    this._init();

    this.handles = {}; // 用于存放回调函数的对象

    this.option = assign_default()({}, mouseEventAdapter_OPTION, option);
  }
  /**
   * 给目标元素添加事件
   * @param {String} type 事件名
   * @param {*} callback 回调函数
   */


  _createClass(Mouse, [{
    key: "on",
    value: function on(type, callback) {
      this.handles[type] = callback;
    }
    /**
     * 移除目标元素的事件
     * @param {String} type 事件名
     */

  }, {
    key: "off",
    value: function off(type) {
      this.handles[type] = null;
    }
  }, {
    key: "_emit",
    value: function _emit(type, e) {
      if (this.handles[type] && typeof this.handles[type] === 'function') {
        this.handles[type].call(this.target, e, JSON.parse(stringify_default()(this.params)));
      }
    }
  }, {
    key: "_init",
    value: function _init() {
      this.touch = {}; // 记录刚触摸的手指

      this.movetouch = {}; // 记录移动过程中变化的手指参数

      this.isLongTap = false;
      this.mouseIsPress = false;
      this.params = {
        zoom: 1,
        // 触摸和移动时，缩放的倍数
        deltaX: 0,
        // 触摸和移动时手指每次变化的横坐标
        direction: '' // 滑动的方向

      };
    }
  }, {
    key: "_start",
    value: function _start(e) {
      this._cancelTouchEnd();

      e.touches = [];
      e.touches.push(e); // 仿写touchstart事件

      var now = now_default()(); // 当前时间


      this.touch.startX = e.pageX;
      this.touch.startY = e.pageY;
      this.touch.startTime = now; // this.movetouch.x = e.pageX;
      // this.movetouch.y = e.pageY;

      this.mouseIsPress = true; // 如果当前处于长按(isLongTap为true)，发送结束事件取消显示辅助线

      this._emit('end', e);
    }
  }, {
    key: "_move",
    value: function _move(e) {
      var _this = this;

      // console.log('move');
      e.touches = [];
      e.touches.push(e); // 仿写touchmove事件

      if (this.mouseIsPress) {
        this.isLongTap = false;

        if (this.movetouch.x || this.movetouch.y) {
          var deltaX = ~~(e.pageX - (this.movetouch.x || 0));
          var deltaY = ~~(e.pageY - (this.movetouch.y || 0));

          if (mouseEventAdapter_ABS(deltaX) < mouseEventAdapter_ABS(deltaY)) {
            if (deltaY < 0) {
              this.params.direction = 'up';
            } else {
              this.params.direction = 'down';
            }
          } else {
            if (deltaX < 0) {
              this.params.direction = 'left';
            } else {
              this.params.direction = 'right';
            }
          }
        }

        if (this.params.direction === 'left' || this.params.direction === 'right') {
          // 记录移动过程中与上一次移动的相对坐标
          if (this.movetouch.x) {
            this.params.deltaX = e.pageX - this.movetouch.x;
          } else {
            this.params.deltaX = 0;
          }

          if (this.params.deltaX !== 0) {
            this._cancelTouchEnd();
          }

          this._emit('move', e);
        }
      } // 更新移动中的手指参数


      this.movetouch.x = e.pageX;
      this.movetouch.y = e.pageY;

      if (this.mouseIsPress) {
        return; // 按压状态下只进入move逻辑
      }

      this.isLongTap = true;

      this._emit('longTap', e);

      this._cancelTouchEnd();

      this.touchEndTimeout = window.setTimeout(function () {
        _this._emit('end', e);

        _this._init();
      }, 1500);
    }
  }, {
    key: "_end",
    value: function _end(e) {
      // console.log('end');
      e.touches = [];
      e.touches.push(e); // 仿写touchup事件

      var shouldTap = false; // 是否应该触发单击事件tap
      // 触发单击事件的条件

      var timestamp = now_default()(); // 1.本次手指触碰的时间在300ms以内
      // 2.手指的距离变化在30px内


      if (timestamp - this.touch.startTime <= 300) {
        if (this.movetouch.x === undefined && this.movetouch.y === undefined) {
          // 没有movetouch说明没有触发touchmove事件
          shouldTap = true;
        } else {
          var deltaX = ~~((this.movetouch.x || 0) - this.touch.startX);
          var deltaY = ~~((this.movetouch.y || 0) - this.touch.startY);
          var condition2 = this.movetouch.x !== undefined && mouseEventAdapter_ABS(deltaX) <= 30;
          var condition3 = this.movetouch.y !== undefined && mouseEventAdapter_ABS(deltaY) <= 30;

          if (condition2 && condition3) {
            shouldTap = true;
          }
        }
      }

      this.handleTouchEnd(e);

      if (shouldTap) {
        this._emit('tap', e);
      }
    }
  }, {
    key: "_pinch",
    value: function _pinch(e) {
      this._emit('end', e);

      e.preventDefault();

      if (this.support === 'mousewheel') {
        // 非火狐 event.wheelDelta(下-120上120) 正数:向上滚动，负数：向下滚动
        if (e.wheelDelta < 0) {
          // 向下滚动
          this.params.zoom = 1.001;
        } else {
          this.params.zoom = 0.999;
        }
      } else if (this.support === 'DOMMouseScroll') {
        // 火狐下event.detail(下3上-3) 正数：向下滚动，负数：向上滚动
        if (e.detail > 0) {
          this.params.zoom = 1.001;
        } else {
          this.params.zoom = 0.999;
        }
      }

      this._emit('pinch', e);
    }
    /**
     * 触发mouseleave事件
     * @param {Event} e mouseleave事件对象
     */

  }, {
    key: "_leave",
    value: function _leave(e) {
      e.touches = [];
      e.touches.push(e); // 仿写touchup事件

      this.handleTouchEnd(e);
    }
  }, {
    key: "addMouseWheelEvent",
    value: function addMouseWheelEvent() {
      if (typeof_typeof(this.target.onmousewheel) === 'object') {
        this.support = 'mousewheel';
        this.target.addEventListener('mousewheel', this._pinch, false);
      } else if (typeof this.target.onmousewheel === 'undefined') {
        this.support = 'DOMMouseScroll';
        this.target.addEventListener('DOMMouseScroll', this._pinch, false);
      } else {
        this.support = '';
        console.warn('不支持鼠标滚轮事件');
      }
    }
  }, {
    key: "removeMouseWheelEvent",
    value: function removeMouseWheelEvent() {
      if (this.support === 'mousewheel') {
        this.target.removeEventListener('mousewheel', this._pinch);
      } else if (this.support === 'DOMMouseScroll') {
        this.target.removeEventListener('DOMMouseScroll', this._pinch);
      }

      this.support = '';
    }
    /**
     * 取消长按定时器
     */

  }, {
    key: "_cancelLongTap",
    value: function _cancelLongTap() {
      if (this.longTapTimeout) {
        window.clearTimeout(this.longTapTimeout);
        this.longTapTimeout = null;
      }
    }
    /**
     * 取消touchend定时器
     */

  }, {
    key: "_cancelTouchEnd",
    value: function _cancelTouchEnd() {
      if (this.touchEndTimeout) {
        window.clearTimeout(this.touchEndTimeout);
        this.touchEndTimeout = null;
      }
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(e) {
      this._emit('end', e);

      this._init();
    }
    /**
     * 取消所有的定时器
     */

  }, {
    key: "cancelAll",
    value: function cancelAll() {
      this._cancelLongTap();

      this._cancelTouchEnd();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.cancelAll();
      this.target.removeEventListener('mousedown', this._start);
      this.target.removeEventListener('mousemove', this._move);
      this.target.removeEventListener('mouseup', this._end);
      this.target.removeEventListener('mouseleave', this._leave);
      this.removeMouseWheelEvent();
      this.isLongTap = false;
      this.mouseIsPress = false;
      this.params = this.handles = this.movetouch = this.touch = this.preVector = null;
      return false;
    }
  }]);

  return Mouse;
}();


// CONCATENATED MODULE: ./packages/stock-chart/src/utils/dom.js



function hasClass(el, className) {
  var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
  return reg.test(el.className);
}
function addClass(el, className) {
  if (hasClass(el, className)) {
    return;
  }

  var newClass = el.className.split(' ');
  newClass.push(className);
  el.className = newClass.join(' ');
}
function removeClass(el, className) {
  if (!hasClass(el, className)) {
    return;
  }

  var reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
  el.className = el.className.replace(reg, ' ');
}
function getData(el, name, val) {
  var prefix = 'data-';

  if (val) {
    return el.setAttribute(prefix + name, val);
  }

  return el.getAttribute(prefix + name);
}
function getRect(el) {
  var rect = el.getBoundingClientRect();
  return {
    width: Math.floor(rect.width),
    height: Math.floor(rect.height)
  };
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("20d6");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("5d73");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// CONCATENATED MODULE: ./packages/stock-chart/src/utils/assist.js





// Thanks to https://github.com/iview/iview/blob/2.0/src/utils/assist.js
function typeOf(obj) {
  var toString = Object.prototype.toString;
  var map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  return map[toString.call(obj)];
} // 判断参数是否是其中之一


function oneOf(value, validList) {
  for (var i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }

  return false;
} // deepCopy

function deepCopy(data) {
  var t = typeOf(data);
  var o;

  if (t === 'array') {
    o = [];
  } else if (t === 'object') {
    o = {};
  } else {
    return data;
  }

  if (t === 'array') {
    for (var i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === 'object') {
    for (var _i in data) {
      o[_i] = deepCopy(data[_i]);
    }
  }

  return o;
}

 // Find components upward

function findComponentUpward(context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }

  var parent = context.$parent;
  var name = parent.$options.name;

  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }

  return parent;
}

 // Find component downward

function findComponentDownward(context, componentName) {
  var childrens = context.$children;
  var children = null;

  if (childrens.length) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = get_iterator_default()(childrens), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var child = _step.value;
        var name = child.$options.name;

        if (name === componentName) {
          children = child;
          break;
        } else {
          children = findComponentDownward(child, componentName);
          if (children) break;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return children;
} // Find components downward

function findComponentsDownward(context, componentName) {
  return context.$children.reduce(function (components, child) {
    if (child.$options.name === componentName) components.push(child);
    var foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
} // Find components upward

function findComponentsUpward(context, componentName) {
  var parents = [];
  var parent = context.$parent;

  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentName));
  } else {
    return [];
  }
} // Find brothers components

function findBrothersComponents(context, componentName) {
  var exceptMe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var res = context.$parent.$children.filter(function (item) {
    return item.$options.name === componentName;
  });
  var index = res.findIndex(function (item) {
    return item._uid === context._uid;
  });
  if (exceptMe) res.splice(index, 1);
  return res;
}
/**
 * 防抖动：
 * 防抖技术即是可以把多个顺序地调用合并成一次，也就是在一定时间内，规定事件被触发的次数。
 * @param {Function} func 要执行的函数
 * @param {Number} wait 等待时间
 * @param {Boolean} immediate 是否立即执行一次
 */

function assist_debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    window.clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}
/**
 * 节流函数：
 * 只允许一个函数在 wait 毫秒内执行一次，只有当上一次函数执行后过了你规定的时间间隔，才能进行下一次该函数的调用。
 * 它保证在 mustRun 毫秒内至少执行一次我们希望触发的事件 func。
 * @param {Function} func 要执行的函数
 * @param {Number} wait 等待多少ms后可以再次执行函数
 * @param {Number} mustRun 多少ms内至少执行一次，mustRun > wait
 */

function assist_throttle(func, wait, mustRun) {
  var timeout;
  var startTime = new Date();
  return function () {
    var context = this;
    var args = arguments;
    var curTime = new Date();
    window.clearTimeout(timeout);

    if (curTime - startTime >= mustRun) {
      // 如果达到了规定的触发时间间隔，触发 事件
      func.apply(context, args);
      startTime = curTime;
    } else {
      // 没达到触发间隔，重新设定定时器
      timeout = window.setTimeout(func, wait);
    }
  };
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/stock-chart/src/stock-chart.vue?vue&type=script&lang=js&


//
//
//
//
//










var SEED = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
/* harmony default export */ var stock_chartvue_type_script_lang_js_ = ({
  name: 'dzhyun-stockchart',
  data: function data() {
    return {
      width: 375,
      height: 420,
      pixelRadio: 2,
      id: '',
      isNotExcuteActive: false // actived事件是否激活

    };
  },
  props: {
    // 股票代码
    obj: {
      type: String,
      required: true
    },
    // 图表类型：min(分时图)，1day(日K)，week(周K)，month(月K)
    chartType: {
      type: String,
      default: 'min',
      validator: function validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return ['min', 'multi-min', 'kline2', '1min', '5min', '15min', '30min', '60min', '1day', 'week', 'month', 'season', 'halfyear', 'year'].indexOf(value) !== -1;
      }
    },
    // 分时图开启简洁模式，只保留分时线和昨收线
    simplifiedMode: {
      type: Boolean,
      default: false
    },
    // k线的主指标
    klineMainIndics: {
      type: String,
      default: 'NONE' // validator: function (value) {
      //   // 这个值必须匹配下列字符串中的一个
      //   return ['NONE', 'MA', 'BOLL', 'DBJJ'].indexOf(value) !== -1
      // }

    },
    // k线的副图指标
    klineIndics: {
      type: String,
      default: 'NONE' // validator: function (value) {
      //   // 这个值必须匹配下列字符串中的一个
      //   return ['NONE', 'VOL', 'MACD', 'KDJ', 'RSI', 'DMA', 'BIAS', 'CCI', 'W&R'].indexOf(value) !== -1
      // }

    },
    // 多日分时：最大为10，值为5时表示取4天的历史分时加当天的分时
    days: {
      type: Number
    },
    // 价格 小数位数
    pricePrecision: {
      type: Number,
      default: 2
    },
    // 数量(量图) 小数位数
    volPrecision: {
      type: Number,
      default: 0
    },
    // 当一个元素被按住超过 longTapTime 毫秒触发长按事件
    longTapTime: {
      type: Number,
      default: 750
    },
    // 汇率
    huilv: {
      type: Number,
      default: 1
    },
    // 是否有均价
    hasAvgPrice: {
      type: Boolean,
      default: true
    },
    // 分时图时间段间隔，默认一小时(并且相邻时间段之间的距离不能小于100px)
    customInterval: {
      type: Number,
      default: 60
    },
    // 连续两次点击之间的间隔相差x毫秒，则触发双击事件，默认0，即不触发双击事件
    doubleTapTime: {
      type: Number,
      default: 0
    },
    upColor: {
      type: String,
      default: '#ee2c2c'
    },
    downColor: {
      type: String,
      default: '#1ca049'
    },
    // 按压时辅助线的颜色
    pointerLineColor: {
      type: String,
      default: '#3e6ac5'
    },
    // 按压时辅助线下方标签的颜色
    pointerTickColor: {
      type: String,
      default: '#ffffff'
    },
    // 坐标轴颜色
    gridLineColor: {
      type: String,
      default: '#d6d6d6'
    },
    // 坐标轴 文字颜色
    tickColor: {
      type: String,
      default: '#333333'
    },
    tickBackgroundColor: {
      type: String,
      default: '#ffffff'
    },
    // 分时图 价格线的颜色
    minLineColor: {
      type: String,
      default: '#3378dd'
    },
    // 分时图闭合区域填充色
    minFillColor: {
      type: [String, Object],
      // default: 'rgba(0, 149, 217, 0.2)'
      default: 'rgba(164, 202, 255, 0.2)'
    },
    // 均线的颜色
    avgPriceColor: {
      type: String,
      default: '#ff8800'
    },
    // ma线的颜色,一个数组，默认 MA5, MA10, MA30, MA60
    maColor: {
      type: Array,
      default: function _default() {
        return ['#e78512', '#2e8ae6', '#cc2996', '#3e6ac5', '#4ca92a', '#d3141a'];
      }
    },
    // BOLL线的颜色,一个数组
    bollColor: {
      type: Array,
      default: function _default() {
        return ['#e78512', '#2e8ae6', '#cc2996'];
      }
    },
    // MACD，DIFF和DEA 线的颜色
    macdColor: {
      type: Array,
      default: function _default() {
        return ['#e78512', '#2e8ae6'];
      }
    },
    // KDJ线的颜色
    kdjColor: {
      type: Array,
      default: function _default() {
        return ['#e78512', '#2e8ae6', '#cc2996'];
      }
    },
    // RSI线的颜色
    rsiColor: {
      type: Array,
      default: function _default() {
        return ['#e78512', '#2e8ae6', '#cc2996'];
      }
    },
    // DMA指标的颜色
    dmaColor: {
      type: Array,
      default: function _default() {
        return ['#e78512', '#2e8ae6'];
      }
    },
    // BIAS指标的颜色
    biasColor: {
      type: Array,
      default: function _default() {
        return ['#e78512', '#2e8ae6', '#cc2996'];
      }
    },
    // CCI指标的颜色
    cciColor: {
      type: Array,
      default: function _default() {
        return ['#e78512'];
      }
    },
    w8rColor: {
      // W&R,注：因为&是逻辑运算符，所以在组件定义的参数中用 w8r 代替，否则会报错；在作为值进行传入时仍然写成 'W&R'
      type: Array,
      default: function _default() {
        return ['#e78512', '#2e8ae6'];
      }
    },
    // 主图DBJJ标签的颜色
    dbjjColor: {
      type: Array,
      default: function _default() {
        return ['#FF0F0F', '#EEEEEE', '#FF0F0F']; // 附图线条颜色,主图文字颜色，主图文字背景色
      }
    },
    qszzColor: {
      type: Array,
      default: function _default() {
        return ['#E61919', '#1CA249', '#1CA249', '#E61919', '#FF0000', '#1A75F1']; // 附图线条颜色,主图文字颜色，主图文字背景色
      }
    },
    // 是否显示趋势追踪的BS点
    qszzBSTag: {
      type: Boolean,
      default: false
    },
    // 成交量的交易单位，例如 100股为1手 ChengJiaoLiang要除以 100
    volTradeUnit: {
      type: Number,
      default: 100
    },
    // K线的除权标记，0(不复权),1(前复权),2(后复权)
    split: {
      type: Number,
      default: 1
    },
    // MA指标显示的数量控制
    maCount: {
      type: Number,
      default: 4
    },
    // 是否是手机端，手机端用触摸事件，pc端用鼠标事件
    isMobileMode: {
      type: Boolean,
      default: true
    },
    // 是否支持鼠标或触摸事件
    useEvent: {
      type: Boolean,
      default: true
    },
    // 分时图是否显示集合竞价阶段
    showPrefix: {
      type: Boolean,
      default: true
    },
    // 水平线数量（分时图中必须是偶数）
    horizLineCount: {
      type: Number,
      default: 4
    },
    leftRangeWidth: {
      type: Number,
      default: 0
    },
    rightRangeWidth: {
      type: Number,
      default: 0
    },
    // 绘图区域字体大小
    fontSize: {
      type: Number,
      default: 12
    },
    // 绘图区域字体
    fontFamily: {
      type: String,
      default: 'Arial'
    },
    initKlineCount: {
      type: Number,
      default: 80
    },
    // 扩展绘图
    chartExtend: {
      type: Array,
      default: null
    }
  },
  created: function created() {
    this.klineChart = {};
    var str = this.randomStr(6);
    this.id = "canvas_".concat(str); // 函数防抖：把多个顺序地调用合并成一次，也就是在一定时间内，规定事件被触发的次数

    this.debounceShowChart = assist_debounce(this.showChart, 15);
  },
  mounted: function mounted() {
    this.isNotExcuteActive = true; // 首次加载可以跳过actived事件，使用者主动调用一次loadchart();

    this.resizeFunc = assist_throttle(this.resizeHandle, 200, 1000);
    window.addEventListener('resize', this.resizeFunc);
    var rect = getRect(this.$refs.container);
    this.width = rect.width;
    this.height = rect.height;
    this.pixelRadio = window.devicePixelRatio ? window.devicePixelRatio : 2;

    if (this.$refs.canvas) {
      if (this.useEvent) {
        if (this.isMobileMode) {
          this.gesture = new gesture_Gesture(this.$refs.canvas, {
            longTapTime: this.longTapTime
          });
        } else {
          this.gesture = new mouseEventAdapter_Mouse(this.$refs.canvas, {
            longTapTime: this.longTapTime
          });
        }

        this.gesture.on('move', this.onMove.bind(this));
        this.gesture.on('longTap', this.onLongTap.bind(this));
        this.gesture.on('pinch', this.onPinch.bind(this));
        this.gesture.on('end', this.onEnd.bind(this));
        this.gesture.on('tap', this.onTap.bind(this));
      }
    } else {
      console.warn('canvas未加载');
    }
  },
  activated: function activated() {
    // 根据状态判断是否需要执行activated事件
    if (this.isNotExcuteActive) {
      this.isNotExcuteActive = false;
      return;
    }

    this.loadChart();
  },
  deactivated: function deactivated() {
    this.init();
  },
  destroyed: function destroyed() {
    // 取消大小变化的监控
    window.clearTimeout(this.delayTimeOut);
    window.removeEventListener('resize', this.resizeFunc);
    this.resizeFunc = null;
    this.init();

    if (this.gesture) {
      this.gesture.destroy();
    }
  },
  computed: {
    chartWidth: function chartWidth() {
      return this.width * this.pixelRadio;
    },
    chartHeight: function chartHeight() {
      return this.height * this.pixelRadio;
    }
  },
  watch: {
    obj: function obj(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.isNotExcuteActive = true; // obj变化可以跳过activated事件，避免多次loadchart();

        this.init();
        this.loadChart();
      }
    },
    width: function width(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (this.canvas) {
          this.canvas.width = newValue;
        }

        this.debounceShowChart();
      }
    },
    height: function height(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (this.canvas) {
          this.canvas.height = newValue;
        }

        this.debounceShowChart();
      }
    },
    chartType: function chartType(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (this.gesture) {
          this.gesture.handleTouchEnd();
        }

        this.debounceShowChart();
      }
    },
    pricePrecision: function pricePrecision(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.debounceShowChart();
      }
    },
    volPrecision: function volPrecision(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.debounceShowChart();
      }
    },
    huilv: function huilv(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (this.chartDataProvider) {
          this.chartDataProvider.huilv = newValue;
        }

        this.debounceShowChart();
      }
    },
    showPrefix: function showPrefix(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (this.chartDataProvider) {
          this.chartDataProvider.showPrefix = newValue;
        }

        this.debounceShowChart();
      }
    },
    volTradeUnit: function volTradeUnit(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (this.chartDataProvider) {
          this.chartDataProvider.volTradeUnit = newValue;
        }

        this.debounceShowChart();
      }
    },
    split: function split(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.debounceShowChart();
      }
    },
    upColor: function upColor(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.debounceShowChart();
      }
    },
    downColor: function downColor(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.debounceShowChart();
      }
    },
    pointerLineColor: function pointerLineColor(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.debounceShowChart();
      }
    },
    pointerTickColor: function pointerTickColor(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.debounceShowChart();
      }
    },
    gridLineColor: function gridLineColor(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.debounceShowChart();
      }
    },
    tickColor: function tickColor(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.debounceShowChart();
      }
    },
    tickBackgroundColor: function tickBackgroundColor(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.debounceShowChart();
      }
    },
    avgPriceColor: function avgPriceColor(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.debounceShowChart();
      }
    },
    klineIndics: function klineIndics(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.debounceShowChart();
      }
    },
    klineMainIndics: function klineMainIndics(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.debounceShowChart();
      }
    },
    chartExtend: function chartExtend(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.debounceShowChart();
      }
    }
  },
  methods: {
    /**
     * obj变化或者组件销毁时清空变量(缓存)
     */
    init: function init() {
      this.chartDataProvider && this.chartDataProvider.cancel();
      this.chartDataProvider = null;
      this.canvas = null;

      if (this.minChart) {
        this.minChart = null;
      }

      if (this.multiMinChart) {
        this.multiMinChart = null;
      }

      if (this.kline2) {
        this.kline2 = null;
      }

      this.klineChart = {};
    },
    updateSize: function updateSize() {
      var rect = getRect(this.$refs.container);

      if (rect.height !== this.height || rect.width !== this.width) {
        this.width = rect.width;
        this.height = rect.height;
      }
    },
    resizeHandle: function resizeHandle() {
      var _this = this;

      this.cleanTimer();
      this.delayTimeOut = window.setTimeout(function () {
        _this.updateSize();
      }, 30);
    },
    cleanTimer: function cleanTimer() {
      if (this.delayTimeOut) {
        window.clearTimeout(this.delayTimeOut);
        this.delayTimeOut = null;
      }
    },

    /**
     * 使用此组件(stock-chart)时，必须在组件mounted时调用此方法
     */
    loadChart: function loadChart() {
      this.chartDataProvider = new DataProvider_DataProvider({
        obj: this.obj
      }, this.$dzhyun, this.huilv, this.volTradeUnit, this.showPrefix);
      this.canvas = new Canvas_Canvas({
        pixelRadio: this.pixelRadio,
        canvasId: this.id,
        width: this.width,
        height: this.height
      });
      this.debounceShowChart();
    },
    showChart: function showChart() {
      var currentChart;

      if (this.chartType === 'min') {
        if (!this.minChart) {
          this.minChart = new MinChart_MinChart(this.chartDataProvider, {
            simplifiedMode: this.simplifiedMode,
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            hasAvgPrice: this.hasAvgPrice,
            pricePrecision: this.pricePrecision,
            volPrecision: this.volPrecision,
            customInterval: this.customInterval,
            longTap: this.handleLongTap.bind(this),
            downColor: this.downColor,
            upColor: this.upColor,
            pointerLineColor: this.pointerLineColor,
            pointerTickColor: this.pointerTickColor,
            gridLineColor: this.gridLineColor,
            tickColor: this.tickColor,
            tickBackgroundColor: this.tickBackgroundColor,
            avgPriceColor: this.avgPriceColor,
            minLineColor: this.minLineColor,
            minFillColor: this.minFillColor,
            horizLineCount: this.horizLineCount,
            currentIndics: this.klineIndics,
            leftRangeWidth: this.leftRangeWidth,
            rightRangeWidth: this.rightRangeWidth,
            chartExtend: this.chartExtend
          });
        }

        currentChart = this.minChart;
        currentChart.hasAvgPrice = this.hasAvgPrice;
        currentChart.avgPriceColor = this.avgPriceColor;
        currentChart.minLineColor = this.minLineColor;
        currentChart.minFillColor = this.minFillColor;
      } else if (this.chartType === 'multi-min') {
        if (!this.multiMinChart) {
          this.multiMinChart = new MultiMinChart_MinChart(this.chartDataProvider, {
            days: this.days,
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            hasAvgPrice: this.hasAvgPrice,
            pricePrecision: this.pricePrecision,
            volPrecision: this.volPrecision,
            customInterval: this.customInterval,
            longTap: this.handleLongTap.bind(this),
            downColor: this.downColor,
            upColor: this.upColor,
            pointerLineColor: this.pointerLineColor,
            pointerTickColor: this.pointerTickColor,
            gridLineColor: this.gridLineColor,
            tickColor: this.tickColor,
            tickBackgroundColor: this.tickBackgroundColor,
            avgPriceColor: this.avgPriceColor,
            minLineColor: this.minLineColor,
            minFillColor: this.minFillColor,
            horizLineCount: this.horizLineCount,
            currentIndics: this.klineIndics,
            leftRangeWidth: this.leftRangeWidth,
            rightRangeWidth: this.rightRangeWidth
          });
        }

        currentChart = this.multiMinChart;
        currentChart.hasAvgPrice = this.hasAvgPrice;
        currentChart.avgPriceColor = this.avgPriceColor;
        currentChart.minLineColor = this.minLineColor;
        currentChart.minFillColor = this.minFillColor;
      } else if (this.chartType === 'kline2') {
        var needNew = false;

        if (this.kline2) {
          if (this.kline2.split !== this.split) {
            needNew = true;
          }
        } else {
          needNew = true;
        }

        if (needNew) {
          this.kline2 = new KlineChart2_KlineChart(this.chartDataProvider, {
            period: '1min',
            pricePrecision: this.pricePrecision,
            volPrecision: this.volPrecision,
            longTap: this.handleLongTap.bind(this),
            downColor: this.downColor,
            upColor: this.upColor,
            pointerLineColor: this.pointerLineColor,
            pointerTickColor: this.pointerTickColor,
            gridLineColor: this.gridLineColor,
            tickColor: this.tickColor,
            tickBackgroundColor: this.tickBackgroundColor,
            minLineColor: this.minLineColor,
            minFillColor: this.minFillColor,
            split: this.split,
            horizLineCount: this.horizLineCount,
            currentIndics: 'VOL',
            leftRangeWidth: this.leftRangeWidth,
            rightRangeWidth: this.rightRangeWidth
          });
        }

        currentChart = this.kline2;
        currentChart.minLineColor = this.minLineColor;
        currentChart.minFillColor = this.minFillColor;
      } else {
        var klineChartName = "klineChart".concat(this.chartType);
        var _needNew = false;

        if (this.klineChart[klineChartName]) {
          if (this.klineChart[klineChartName].split !== this.split) {
            _needNew = true;
          }

          if (this.klineChart[klineChartName].currentIndics !== this.klineIndics) {
            // 初始化指标数据
            this.klineChart[klineChartName].currentIndics = this.klineIndics;
            this.klineChart[klineChartName].initIndicator(this.klineIndics);
          }

          if (this.klineChart[klineChartName].mIndics !== this.klineMainIndics) {
            // 初始化 主图 指标数据
            this.klineChart[klineChartName].mIndics = this.klineMainIndics;
            this.klineChart[klineChartName].initIndicator(this.klineMainIndics);
          }
        } else {
          _needNew = true;
        }

        if (_needNew) {
          this.klineChart[klineChartName] = new KlineChart_KlineChart(this.chartDataProvider, {
            period: this.chartType,
            maxCount: 240,
            minCount: 20,
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            pricePrecision: this.pricePrecision,
            volPrecision: this.volPrecision,
            longTap: this.handleLongTap.bind(this),
            downColor: this.downColor,
            upColor: this.upColor,
            pointerLineColor: this.pointerLineColor,
            pointerTickColor: this.pointerTickColor,
            gridLineColor: this.gridLineColor,
            tickColor: this.tickColor,
            tickBackgroundColor: this.tickBackgroundColor,
            maColor: this.maColor,
            macdColor: this.macdColor,
            kdjColor: this.kdjColor,
            rsiColor: this.rsiColor,
            dmaColor: this.dmaColor,
            bollColor: this.bollColor,
            biasColor: this.biasColor,
            cciColor: this.cciColor,
            w8rColor: this.w8rColor,
            dbjjColor: this.dbjjColor,
            qszzColor: this.qszzColor,
            qszzBSTag: this.qszzBSTag,
            maCount: this.maCount,
            split: this.split,
            horizLineCount: this.horizLineCount,
            mIndics: this.klineMainIndics,
            currentIndics: this.klineIndics,
            leftRangeWidth: this.leftRangeWidth,
            rightRangeWidth: this.rightRangeWidth,
            chartExtend: this.chartExtend,
            initCount: this.initKlineCount
          });
        }

        currentChart = this.klineChart[klineChartName];
        currentChart.maColor = this.maColor;
        currentChart.macdColor = this.macdColor;
        currentChart.kdjColor = this.kdjColor;
        currentChart.rsiColor = this.rsiColor;
        currentChart.dmaColor = this.dmaColor;
        currentChart.bollColor = this.bollColor;
        currentChart.biasColor = this.biasColor;
        currentChart.cciColor = this.cciColor;
        currentChart.w8rColor = this.w8rColor;
        currentChart.dbjjColor = this.dbjjColor;
        currentChart.qszzColor = this.qszzColor;
        currentChart.qszzBSTag = this.qszzBSTag;
      }

      currentChart.volPrecision = this.volPrecision;
      currentChart.pricePrecision = this.pricePrecision;
      /* 公共颜色重置  start */

      currentChart.upColor = this.upColor;
      currentChart.downColor = this.downColor;
      currentChart.pointerLineColor = this.pointerLineColor;
      currentChart.pointerTickColor = this.pointerTickColor;
      currentChart.gridLineColor = this.gridLineColor;
      currentChart.tickColor = this.tickColor;
      currentChart.tickBackgroundColor = this.tickBackgroundColor;
      /* 扩展标记 */

      currentChart.chartExtend = this.chartExtend;
      /* 公共颜色重置  end */

      if (this.canvas) {
        // debugger
        this.canvas.show(currentChart);
      }

      this.$emit('chart-showed');
    },

    /**
     * 移动端浏览器，长按的时候回显示一个菜单(提供一些复制 等功能)，类似于pc浏览器的右键菜单
     * 绘图的区域，即canvas要屏蔽contextmenu
     */
    handleContextMenu: function handleContextMenu(e) {
      e.preventDefault();
    },
    onMove: function onMove(e, params) {
      this.canvas.touchmove(e, params.deltaX);
    },
    onEnd: function onEnd(e) {
      this.$emit('touchend');

      if (this.canvas) {
        this.canvas.touchend();
      }
    },
    onTap: function onTap(e) {
      this.$emit('tap');
    },
    onLongTap: function onLongTap(e) {
      if (this.canvas) {
        this.canvas.longtap(e);
      }
    },
    onPinch: function onPinch(e, params) {
      this.canvas.pinch(e, params.zoom);
    },
    handleLongTap: function handleLongTap(data, type) {
      this.$emit('long-tap-select', data, type);
    },
    // 根据长度size生成随机字符串
    randomStr: function randomStr(size) {
      var seedlength = SEED.length;
      var str = '';

      for (var i = 0; i < size; i++) {
        var j = Math.floor(Math.random() * seedlength);
        str += SEED[j];
      }

      return str;
    },
    getLastIndicatorData: function getLastIndicatorData() {
      var klineChartName = "klineChart".concat(this.chartType);
      var kline = this.klineChart[klineChartName];
      if (!kline) return null; // K线图未生成的时候，返回null

      return kline.getLastIndicatorData();
    }
  }
});
// CONCATENATED MODULE: ./packages/stock-chart/src/stock-chart.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_stock_chartvue_type_script_lang_js_ = (stock_chartvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/stock-chart/src/stock-chart.vue





/* normalize component */

var component = normalizeComponent(
  src_stock_chartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var stock_chart = (component.exports);
// CONCATENATED MODULE: ./packages/stock-chart/index.js

 // 为组件提供 install 安装方法，供按需引入

stock_chart.install = function (Vue) {
  Vue.component(stock_chart.name, stock_chart);
};

/* harmony default export */ var packages_stock_chart = (stock_chart);
// CONCATENATED MODULE: ./packages/index.js

// 导入组件
 // 存储组件列表

var components = [packages_stock_chart]; // 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册

var install = function install(Vue) {
  // 判断是否安装
  if (install.installed) return; // 遍历注册全局组件

  components.map(function (component) {
    return Vue.component(component.name, component);
  });
}; // 判断是否是直接引入文件


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install: install,
  // 以下是具体的组件列表
  StockChart: packages_stock_chart
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "fde4":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("bf90");
var $Object = __webpack_require__("584a").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
//# sourceMappingURL=dzhyun-stockchart.common.js.map