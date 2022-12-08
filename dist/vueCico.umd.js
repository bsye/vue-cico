(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueCico"] = factory();
	else
		root["vueCico"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "04f8":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var call = __webpack_require__("c65b");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var hasOwn = __webpack_require__("1a2d");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "07fa":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("50c4");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d51":
/***/ (function(module, exports) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "13d2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var DESCRIPTORS = __webpack_require__("83ab");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("5e77").CONFIGURABLE;
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var CHROME_VERSION = __webpack_require__("2d00");
var IS_NODE = __webpack_require__("605d");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "14d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var setArrayLength = __webpack_require__("3a34");
var doesNotExceedSafeInteger = __webpack_require__("3511");
var fails = __webpack_require__("d039");

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 and Safari <= 15.4, FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var SILENT_ON_NON_WRITABLE_LENGTH = !function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
}();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: INCORRECT_TO_LENGTH || SILENT_ON_NON_WRITABLE_LENGTH }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ "1626":
/***/ (function(module, exports, __webpack_require__) {

var $documentAll = __webpack_require__("8ea1");

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var toObject = __webpack_require__("7b0b");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports, __webpack_require__) {

var isNullOrUndefined = __webpack_require__("7234");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var defineBuiltIn = __webpack_require__("cb2d");
var defineGlobalProperty = __webpack_require__("6374");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "3511":
/***/ (function(module, exports) {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "3a34":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var isArray = __webpack_require__("e8b5");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ "3a9b":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "40d5":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.26.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var uncurryThis = __webpack_require__("e330");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5926":
/***/ (function(module, exports, __webpack_require__) {

var trunc = __webpack_require__("b42e");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var tryToString = __webpack_require__("0d51");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5c6c":
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

/***/ "5e77":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var hasOwn = __webpack_require__("1a2d");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "6374":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("cdce");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var hasOwn = __webpack_require__("1a2d");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "7234":
/***/ (function(module, exports) {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "84a2":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "861d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var $documentAll = __webpack_require__("8ea1");

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var isCallable = __webpack_require__("1626");
var store = __webpack_require__("c6cd");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8ea1":
/***/ (function(module, exports) {

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ "90e3":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("aed9");
var anObject = __webpack_require__("825a");
var toPropertyKey = __webpack_require__("a04b");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("c04e");
var isSymbol = __webpack_require__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "a41b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "aed9":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "b42e":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var hasOwn = __webpack_require__("1a2d");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("04f8");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var getMethod = __webpack_require__("dc4a");
var ordinaryToPrimitive = __webpack_require__("485a");
var wellKnownSymbol = __webpack_require__("b622");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c65b":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var defineGlobalProperty = __webpack_require__("6374");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c832":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var hasOwn = __webpack_require__("1a2d");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "cb2d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var definePropertyModule = __webpack_require__("9bf2");
var makeBuiltIn = __webpack_require__("13d2");
var defineGlobalProperty = __webpack_require__("6374");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cdce":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var lengthOfArrayLike = __webpack_require__("07fa");

var $TypeError = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw $TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var isCallable = __webpack_require__("1626");
var isPrototypeOf = __webpack_require__("3a9b");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");
var isNullOrUndefined = __webpack_require__("7234");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "e330":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("1a2d");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "css", function() { return /* reexport */ scss_default.a; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c556f10-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cico.vue?vue&type=template&id=312145b8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.value ? _c('div', {
    ref: `DatePicker-${_vm.hash}`,
    staticClass: "cico__wrapper",
    class: {
      'cico__wrapper--booking': _vm.bookings.length > 0
    }
  }, [_vm.isOpen ? _c('div', {
    staticClass: "cico__close-button cico__hide-on-desktop",
    on: {
      "click": _vm.closeMobileDatepicker
    }
  }, [_c('i', [_vm._v("+")])]) : _vm._e(), _c('div', {
    staticClass: "cico__dummy-wrapper",
    on: {
      "click": function ($event) {
        return _vm.toggleDatepicker();
      }
    }
  }, [_c('IconCalendar'), _c('div', {
    staticClass: "cico__dummy-wrapper-input-wrapper"
  }, [_vm.get(_vm.i18n, 'activity.filter.checkOut') ? _c('span', {
    staticClass: "cico__dummy-wrapper-arrival"
  }, [_vm._v(" " + _vm._s(_vm.get(_vm.i18n, 'activity.filter.checkIn')) + " ")]) : _vm._e(), _c('date-input', {
    attrs: {
      "i18n": _vm.i18n,
      "input-date": _vm.responsiveFormatter(this.checkIn),
      "input-date-type": "check-in",
      "is-open": _vm.isOpen,
      "toggle-datepicker": _vm.toggleDatepicker,
      "single-day-selection": _vm.singleDaySelection
    }
  })], 1), _c('IconArrow'), _c('div', {
    staticClass: "cico__dummy-wrapper-input-wrapper"
  }, [_vm.get(_vm.i18n, 'activity.filter.checkOut') ? _c('span', {
    staticClass: "cico__dummy-wrapper-departure"
  }, [_vm._v(" " + _vm._s(_vm.get(_vm.i18n, 'activity.filter.checkOut')) + " ")]) : _vm._e(), !_vm.singleDaySelection ? _c('date-input', {
    attrs: {
      "i18n": _vm.i18n,
      "input-date": _vm.responsiveFormatter(this.checkOut),
      "input-date-type": "check-out",
      "is-open": _vm.isOpen,
      "toggle-datepicker": _vm.toggleDatepicker,
      "single-day-selection": _vm.singleDaySelection
    }
  }) : _vm._e()], 1), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showClearSelectionButton,
      expression: "showClearSelectionButton"
    }],
    staticClass: "cico__clear-button",
    attrs: {
      "tabindex": "0"
    },
    on: {
      "click": _vm.clearSelection
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 68 68",
      "role": "img",
      "aria-label": "x"
    }
  }, [_c('title', [_vm._v("x")]), _c('path', {
    attrs: {
      "d": "M6.5 6.5l55 55m0-55l-55 55",
      "stroke": "#000",
      "fill": "none",
      "stroke-linecap": "square"
    }
  })])])], 1), _c('div', {
    staticClass: "cico",
    class: {
      'cico--open': _vm.isOpen,
      'cico--closed': !_vm.isOpen,
      'cico--right': _vm.positionRight
    }
  }, [_vm.isOpen ? _c('div', {
    staticClass: "cico__inner"
  }, [_c('CallToAction', {
    attrs: {
      "included-nights": _vm.minNightCount,
      "nights-total": _vm.totalNights,
      "nights-in": _vm.dateFormater(_vm.checkIn, 'ddd DD MMM.'),
      "nights-out": _vm.dateFormater(_vm.checkOut, 'ddd DD MMM.'),
      "i18n": _vm.i18n
    }
  }), _c('div', {
    staticClass: "cico__months",
    class: {
      'cico__months--full': _vm.showSingleMonth
    }
  }, [_vm.isDesktop ? _c('div', {
    class: {
      cico__header: _vm.isDesktop
    }
  }, [_c('button', {
    staticClass: "cico__month-button cico__month-button--prev",
    attrs: {
      "type": "button",
      "tabindex": _vm.isOpen ? 0 : -1,
      "disabled": _vm.activeMonthIndex === 0
    },
    on: {
      "click": _vm.renderPreviousMonth,
      "keyup": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.renderPreviousMonth.apply(null, arguments);
      }
    }
  }, [_c('svg', {
    attrs: {
      "width": "10",
      "height": "20",
      "viewBox": "0 0 8 12",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M1.5 11L6.5 6L1.5 1",
      "stroke": "#909090",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  })])]), _c('button', {
    staticClass: "cico__month-button cico__month-button--next",
    attrs: {
      "type": "button",
      "disabled": _vm.isPreventedMaxMonth,
      "tabindex": _vm.isOpen ? 0 : -1
    },
    on: {
      "click": _vm.renderNextMonth,
      "keyup": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.renderNextMonth.apply(null, arguments);
      }
    }
  }, [_c('svg', {
    attrs: {
      "width": "10",
      "height": "20",
      "viewBox": "0 0 8 12",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M1.5 11L6.5 6L1.5 1",
      "stroke": "#909090",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  })])])]) : _vm._e(), _vm._l(_vm.paginateMonths, function (month, monthIndex) {
    return _c('Month', {
      key: `${_vm.datepickerMonthKey}-${monthIndex}-desktop`,
      ref: "datepickerMonth",
      refInFor: true,
      attrs: {
        "month": month,
        "dayKey": _vm.datepickerDayKey,
        "weekKey": _vm.datepickerWeekKey,
        "isDesktop": _vm.isDesktop,
        "firstDayOfWeek": _vm.firstDayOfWeek,
        "showYear": _vm.showYear,
        "yearBeforeMonth": _vm.yearBeforeMonth,
        "activeMonthIndex": _vm.activeMonthIndex,
        "bookings": _vm.sortBookings,
        "checkIn": _vm.checkIn,
        "checkInPeriod": _vm.checkInPeriod,
        "checkOut": _vm.checkOut,
        "disableCheckoutOnCheckin": _vm.disableCheckoutOnCheckin,
        "duplicateBookingDates": _vm.duplicateBookingDates,
        "hoveringDate": _vm.hoveringDate,
        "hoveringPeriod": _vm.hoveringPeriod,
        "i18n": _vm.i18n,
        "isOpen": _vm.isOpen,
        "minNightCount": _vm.minNightCount,
        "nextDisabledDate": _vm.nextDisabledDate,
        "nextPeriodDisableDates": _vm.nextPeriodDisableDates,
        "options": _vm.dayOptions,
        "priceSymbol": _vm.priceSymbol,
        "screenSize": _vm.screenSize,
        "showPrice": _vm.showPrice,
        "disabledDates": _vm.disabledDates,
        "periodDates": _vm.periodDates,
        "sortedDisabledDates": _vm.sortedDisabledDates,
        "sortedPeriodDates": _vm.sortedPeriodDates
      },
      on: {
        "clear-selection": _vm.clearSelection,
        "booking-clicked": _vm.handleBookingClicked,
        "day-clicked": _vm.handleDayClick,
        "enter-day": _vm.enterDay,
        "enter-month": _vm.enterMonth
      }
    });
  })], 2), !_vm.isDesktop ? _c('MobileActions', {
    attrs: {
      "isClearDisabled": !(_vm.checkIn || _vm.checkOut),
      "isSelectDisabled": !_vm.checkIn || !_vm.checkOut,
      "i18n": _vm.i18n
    },
    on: {
      "reset": function ($event) {
        return _vm.clearSelection();
      },
      "selected": function ($event) {
        _vm.isOpen = !_vm.isOpen;
      }
    }
  }) : _vm._e()], 1) : _vm._e(), _vm._t("content")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Cico.vue?vue&type=template&id=312145b8&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./node_modules/lodash.throttle/index.js
var lodash_throttle = __webpack_require__("84a2");
var lodash_throttle_default = /*#__PURE__*/__webpack_require__.n(lodash_throttle);

// CONCATENATED MODULE: ./node_modules/fecha/lib/fecha.js
var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
var twoDigitsOptional = "\\d\\d?";
var twoDigits = "\\d\\d";
var threeDigits = "\\d{3}";
var fourDigits = "\\d{4}";
var word = "[^\\s]+";
var literal = /\[([^]*?)\]/gm;
function shorten(arr, sLen) {
    var newArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        newArr.push(arr[i].substr(0, sLen));
    }
    return newArr;
}
var monthUpdate = function (arrName) { return function (v, i18n) {
    var lowerCaseArr = i18n[arrName].map(function (v) { return v.toLowerCase(); });
    var index = lowerCaseArr.indexOf(v.toLowerCase());
    if (index > -1) {
        return index;
    }
    return null;
}; };
function fecha_assign(origObj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var obj = args_1[_a];
        for (var key in obj) {
            // @ts-ignore ex
            origObj[key] = obj[key];
        }
    }
    return origObj;
}
var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var monthNamesShort = shorten(monthNames, 3);
var dayNamesShort = shorten(dayNames, 3);
var defaultI18n = {
    dayNamesShort: dayNamesShort,
    dayNames: dayNames,
    monthNamesShort: monthNamesShort,
    monthNames: monthNames,
    amPm: ["am", "pm"],
    DoFn: function (dayOfMonth) {
        return (dayOfMonth +
            ["th", "st", "nd", "rd"][dayOfMonth % 10 > 3
                ? 0
                : ((dayOfMonth - (dayOfMonth % 10) !== 10 ? 1 : 0) * dayOfMonth) % 10]);
    }
};
var globalI18n = fecha_assign({}, defaultI18n);
var setGlobalDateI18n = function (i18n) {
    return (globalI18n = fecha_assign(globalI18n, i18n));
};
var regexEscape = function (str) {
    return str.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
};
var pad = function (val, len) {
    if (len === void 0) { len = 2; }
    val = String(val);
    while (val.length < len) {
        val = "0" + val;
    }
    return val;
};
var formatFlags = {
    D: function (dateObj) { return String(dateObj.getDate()); },
    DD: function (dateObj) { return pad(dateObj.getDate()); },
    Do: function (dateObj, i18n) {
        return i18n.DoFn(dateObj.getDate());
    },
    d: function (dateObj) { return String(dateObj.getDay()); },
    dd: function (dateObj) { return pad(dateObj.getDay()); },
    ddd: function (dateObj, i18n) {
        return i18n.dayNamesShort[dateObj.getDay()];
    },
    dddd: function (dateObj, i18n) {
        return i18n.dayNames[dateObj.getDay()];
    },
    M: function (dateObj) { return String(dateObj.getMonth() + 1); },
    MM: function (dateObj) { return pad(dateObj.getMonth() + 1); },
    MMM: function (dateObj, i18n) {
        return i18n.monthNamesShort[dateObj.getMonth()];
    },
    MMMM: function (dateObj, i18n) {
        return i18n.monthNames[dateObj.getMonth()];
    },
    YY: function (dateObj) {
        return pad(String(dateObj.getFullYear()), 4).substr(2);
    },
    YYYY: function (dateObj) { return pad(dateObj.getFullYear(), 4); },
    h: function (dateObj) { return String(dateObj.getHours() % 12 || 12); },
    hh: function (dateObj) { return pad(dateObj.getHours() % 12 || 12); },
    H: function (dateObj) { return String(dateObj.getHours()); },
    HH: function (dateObj) { return pad(dateObj.getHours()); },
    m: function (dateObj) { return String(dateObj.getMinutes()); },
    mm: function (dateObj) { return pad(dateObj.getMinutes()); },
    s: function (dateObj) { return String(dateObj.getSeconds()); },
    ss: function (dateObj) { return pad(dateObj.getSeconds()); },
    S: function (dateObj) {
        return String(Math.round(dateObj.getMilliseconds() / 100));
    },
    SS: function (dateObj) {
        return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
    },
    SSS: function (dateObj) { return pad(dateObj.getMilliseconds(), 3); },
    a: function (dateObj, i18n) {
        return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
    },
    A: function (dateObj, i18n) {
        return dateObj.getHours() < 12
            ? i18n.amPm[0].toUpperCase()
            : i18n.amPm[1].toUpperCase();
    },
    ZZ: function (dateObj) {
        var offset = dateObj.getTimezoneOffset();
        return ((offset > 0 ? "-" : "+") +
            pad(Math.floor(Math.abs(offset) / 60) * 100 + (Math.abs(offset) % 60), 4));
    },
    Z: function (dateObj) {
        var offset = dateObj.getTimezoneOffset();
        return ((offset > 0 ? "-" : "+") +
            pad(Math.floor(Math.abs(offset) / 60), 2) +
            ":" +
            pad(Math.abs(offset) % 60, 2));
    }
};
var monthParse = function (v) { return +v - 1; };
var emptyDigits = [null, twoDigitsOptional];
var emptyWord = [null, word];
var amPm = [
    "isPm",
    word,
    function (v, i18n) {
        var val = v.toLowerCase();
        if (val === i18n.amPm[0]) {
            return 0;
        }
        else if (val === i18n.amPm[1]) {
            return 1;
        }
        return null;
    }
];
var timezoneOffset = [
    "timezoneOffset",
    "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
    function (v) {
        var parts = (v + "").match(/([+-]|\d\d)/gi);
        if (parts) {
            var minutes = +parts[1] * 60 + parseInt(parts[2], 10);
            return parts[0] === "+" ? minutes : -minutes;
        }
        return 0;
    }
];
var parseFlags = {
    D: ["day", twoDigitsOptional],
    DD: ["day", twoDigits],
    Do: ["day", twoDigitsOptional + word, function (v) { return parseInt(v, 10); }],
    M: ["month", twoDigitsOptional, monthParse],
    MM: ["month", twoDigits, monthParse],
    YY: [
        "year",
        twoDigits,
        function (v) {
            var now = new Date();
            var cent = +("" + now.getFullYear()).substr(0, 2);
            return +("" + (+v > 68 ? cent - 1 : cent) + v);
        }
    ],
    h: ["hour", twoDigitsOptional, undefined, "isPm"],
    hh: ["hour", twoDigits, undefined, "isPm"],
    H: ["hour", twoDigitsOptional],
    HH: ["hour", twoDigits],
    m: ["minute", twoDigitsOptional],
    mm: ["minute", twoDigits],
    s: ["second", twoDigitsOptional],
    ss: ["second", twoDigits],
    YYYY: ["year", fourDigits],
    S: ["millisecond", "\\d", function (v) { return +v * 100; }],
    SS: ["millisecond", twoDigits, function (v) { return +v * 10; }],
    SSS: ["millisecond", threeDigits],
    d: emptyDigits,
    dd: emptyDigits,
    ddd: emptyWord,
    dddd: emptyWord,
    MMM: ["month", word, monthUpdate("monthNamesShort")],
    MMMM: ["month", word, monthUpdate("monthNames")],
    a: amPm,
    A: amPm,
    ZZ: timezoneOffset,
    Z: timezoneOffset
};
// Some common format strings
var globalMasks = {
    default: "ddd MMM DD YYYY HH:mm:ss",
    shortDate: "M/D/YY",
    mediumDate: "MMM D, YYYY",
    longDate: "MMMM D, YYYY",
    fullDate: "dddd, MMMM D, YYYY",
    isoDate: "YYYY-MM-DD",
    isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
    shortTime: "HH:mm",
    mediumTime: "HH:mm:ss",
    longTime: "HH:mm:ss.SSS"
};
var setGlobalDateMasks = function (masks) { return fecha_assign(globalMasks, masks); };
/***
 * Format a date
 * @method format
 * @param {Date|number} dateObj
 * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
 * @returns {string} Formatted date string
 */
var fecha_format = function (dateObj, mask, i18n) {
    if (mask === void 0) { mask = globalMasks["default"]; }
    if (i18n === void 0) { i18n = {}; }
    if (typeof dateObj === "number") {
        dateObj = new Date(dateObj);
    }
    if (Object.prototype.toString.call(dateObj) !== "[object Date]" ||
        isNaN(dateObj.getTime())) {
        throw new Error("Invalid Date pass to format");
    }
    mask = globalMasks[mask] || mask;
    var literals = [];
    // Make literals inactive by replacing them with @@@
    mask = mask.replace(literal, function ($0, $1) {
        literals.push($1);
        return "@@@";
    });
    var combinedI18nSettings = fecha_assign(fecha_assign({}, globalI18n), i18n);
    // Apply formatting rules
    mask = mask.replace(token, function ($0) {
        return formatFlags[$0](dateObj, combinedI18nSettings);
    });
    // Inline literal values back into the formatted value
    return mask.replace(/@@@/g, function () { return literals.shift(); });
};
/**
 * Parse a date string into a Javascript Date object /
 * @method parse
 * @param {string} dateStr Date string
 * @param {string} format Date parse format
 * @param {i18n} I18nSettingsOptional Full or subset of I18N settings
 * @returns {Date|null} Returns Date object. Returns null what date string is invalid or doesn't match format
 */
function parse(dateStr, format, i18n) {
    if (i18n === void 0) { i18n = {}; }
    if (typeof format !== "string") {
        throw new Error("Invalid format in fecha parse");
    }
    // Check to see if the format is actually a mask
    format = globalMasks[format] || format;
    // Avoid regular expression denial of service, fail early for really long strings
    // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
    if (dateStr.length > 1000) {
        return null;
    }
    // Default to the beginning of the year.
    var today = new Date();
    var dateInfo = {
        year: today.getFullYear(),
        month: 0,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        isPm: null,
        timezoneOffset: null
    };
    var parseInfo = [];
    var literals = [];
    // Replace all the literals with @@@. Hopefully a string that won't exist in the format
    var newFormat = format.replace(literal, function ($0, $1) {
        literals.push(regexEscape($1));
        return "@@@";
    });
    var specifiedFields = {};
    var requiredFields = {};
    // Change every token that we find into the correct regex
    newFormat = regexEscape(newFormat).replace(token, function ($0) {
        var info = parseFlags[$0];
        var field = info[0], regex = info[1], requiredField = info[3];
        // Check if the person has specified the same field twice. This will lead to confusing results.
        if (specifiedFields[field]) {
            throw new Error("Invalid format. " + field + " specified twice in format");
        }
        specifiedFields[field] = true;
        // Check if there are any required fields. For instance, 12 hour time requires AM/PM specified
        if (requiredField) {
            requiredFields[requiredField] = true;
        }
        parseInfo.push(info);
        return "(" + regex + ")";
    });
    // Check all the required fields are present
    Object.keys(requiredFields).forEach(function (field) {
        if (!specifiedFields[field]) {
            throw new Error("Invalid format. " + field + " is required in specified format");
        }
    });
    // Add back all the literals after
    newFormat = newFormat.replace(/@@@/g, function () { return literals.shift(); });
    // Check if the date string matches the format. If it doesn't return null
    var matches = dateStr.match(new RegExp(newFormat, "i"));
    if (!matches) {
        return null;
    }
    var combinedI18nSettings = fecha_assign(fecha_assign({}, globalI18n), i18n);
    // For each match, call the parser function for that date part
    for (var i = 1; i < matches.length; i++) {
        var _a = parseInfo[i - 1], field = _a[0], parser = _a[2];
        var value = parser
            ? parser(matches[i], combinedI18nSettings)
            : +matches[i];
        // If the parser can't make sense of the value, return null
        if (value == null) {
            return null;
        }
        dateInfo[field] = value;
    }
    if (dateInfo.isPm === 1 && dateInfo.hour != null && +dateInfo.hour !== 12) {
        dateInfo.hour = +dateInfo.hour + 12;
    }
    else if (dateInfo.isPm === 0 && +dateInfo.hour === 12) {
        dateInfo.hour = 0;
    }
    var dateTZ;
    if (dateInfo.timezoneOffset == null) {
        dateTZ = new Date(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute, dateInfo.second, dateInfo.millisecond);
        var validateFields = [
            ["month", "getMonth"],
            ["day", "getDate"],
            ["hour", "getHours"],
            ["minute", "getMinutes"],
            ["second", "getSeconds"]
        ];
        for (var i = 0, len = validateFields.length; i < len; i++) {
            // Check to make sure the date field is within the allowed range. Javascript dates allows values
            // outside the allowed range. If the values don't match the value was invalid
            if (specifiedFields[validateFields[i][0]] &&
                dateInfo[validateFields[i][0]] !== dateTZ[validateFields[i][1]]()) {
                return null;
            }
        }
    }
    else {
        dateTZ = new Date(Date.UTC(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute - dateInfo.timezoneOffset, dateInfo.second, dateInfo.millisecond));
        // We can't validate dates in another timezone unfortunately. Do a basic check instead
        if (dateInfo.month > 11 ||
            dateInfo.month < 0 ||
            dateInfo.day > 31 ||
            dateInfo.day < 1 ||
            dateInfo.hour > 23 ||
            dateInfo.hour < 0 ||
            dateInfo.minute > 59 ||
            dateInfo.minute < 0 ||
            dateInfo.second > 59 ||
            dateInfo.second < 0) {
            return null;
        }
    }
    // Don't allow invalid dates
    return dateTZ;
}
var fecha = {
    format: fecha_format,
    parse: parse,
    defaultI18n: defaultI18n,
    setGlobalDateI18n: setGlobalDateI18n,
    setGlobalDateMasks: setGlobalDateMasks
};

/* harmony default export */ var lib_fecha = (fecha);

//# sourceMappingURL=fecha.js.map

// EXTERNAL MODULE: ./node_modules/lodash.get/index.js
var lodash_get = __webpack_require__("c832");
var lodash_get_default = /*#__PURE__*/__webpack_require__.n(lodash_get);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c556f10-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Month.vue?vue&type=template&id=7d1d45a4&
var Monthvue_type_template_id_7d1d45a4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "datepickerMonth",
    staticClass: "cico__month",
    on: {
      "mouseenter": function ($event) {
        return _vm.enterMonth($event);
      }
    }
  }, [_c('p', {
    staticClass: "cico__month-name"
  }, [_vm._v(" " + _vm._s(_vm.monthName) + " ")]), _c('week-row', _vm._b({}, 'week-row', _vm.$props, false)), _c('div', {
    staticClass: "cico__square-wrapper"
  }, _vm._l(_vm.month.days, function (day, dayIndex) {
    return _c('div', {
      key: `${_vm.dayKey}-${dayIndex}`,
      staticClass: "cico__square",
      on: {
        "mouseenter": function ($event) {
          return _vm.enterDay($event, day);
        }
      }
    }, [_c('Day', _vm._b({
      attrs: {
        "belongsToThisMonth": day.belongsToThisMonth,
        "date": day.date
      },
      on: {
        "clear-selection": _vm.clearSelection,
        "booking-clicked": _vm.handleBookingClicked,
        "day-clicked": _vm.handleDayClick
      }
    }, 'Day', _vm.$props, false))], 1);
  }), 0)], 1);
};
var Monthvue_type_template_id_7d1d45a4_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Month.vue?vue&type=template&id=7d1d45a4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c556f10-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Day.vue?vue&type=template&id=1dc04a28&
var Dayvue_type_template_id_1dc04a28_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.showTooltip && _vm.options.hoveringTooltip ? _c('div', {
    staticClass: "cico__tooltip",
    domProps: {
      "innerHTML": _vm._s(_vm.tooltipMessageDisplay)
    }
  }) : _vm._e(), _c('div', {
    ref: "day",
    staticClass: "cico__month-day",
    class: [_vm.dayClass, _vm.disabledClass, _vm.checkinCheckoutClass, _vm.bookingClass, {
      'cico__month-day--today': _vm.isToday
    }],
    attrs: {
      "tabindex": _vm.tabIndex
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.dayClicked($event, _vm.date);
      }
    }
  }, [_c('div', {
    staticClass: "cico__month-day-wrapper"
  }, [_c('span', {
    staticClass: "day"
  }, [_vm._v(_vm._s(_vm.dayNumber))]), _c('Price', {
    attrs: {
      "show": _vm.showPrice,
      "price": _vm.dayPrice,
      "symbol": _vm.priceSymbol
    }
  })], 1)]), _vm.currentBooking && _vm.belongsToThisMonth && !_vm.isDisabled ? _c('BookingBullet', {
    attrs: {
      "currentBooking": _vm.currentBooking,
      "duplicateBookingDates": _vm.duplicateBookingDates,
      "formatDate": _vm.formatDate,
      "previousBooking": _vm.previousBooking
    }
  }) : _vm._e()], 1);
};
var Dayvue_type_template_id_1dc04a28_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Day.vue?vue&type=template&id=1dc04a28&

// CONCATENATED MODULE: ./src/helpers.js

/* eslint-disable vars-on-top */


const helpers = {
  getNextDate(datesArray, referenceDate) {
    const now = new Date(referenceDate);
    let closest = Infinity;
    datesArray.forEach(d => {
      const date = new Date(d);
      if (date >= now && date < closest) {
        closest = d;
      }
    });
    if (closest === Infinity) {
      return null;
    }
    return closest;
  },
  nextDateByDayOfWeek(weekDay, referenceDate, i18n) {
    const newReferenceDate = new Date(referenceDate);
    let newWeekDay = weekDay.toLowerCase();
    const daysDefault = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const translatedDays = [lodash_get_default()(i18n, 'date.weekdays.sun'), lodash_get_default()(i18n, 'date.weekdays.mon'), lodash_get_default()(i18n, 'date.weekdays.tue'), lodash_get_default()(i18n, 'date.weekdays.wed'), lodash_get_default()(i18n, 'date.weekdays.thu'), lodash_get_default()(i18n, 'date.weekdays.fri'), lodash_get_default()(i18n, 'date.weekdays.sat')];
    const days = i18n ? translatedDays : daysDefault;
    const referenceDateDay = newReferenceDate.getDay();
    for (let i = 7;; i--) {
      if (newWeekDay === days[i]) {
        newWeekDay = i <= referenceDateDay ? i + 7 : i;
        break;
      }
    }
    const daysUntilNext = newWeekDay - referenceDateDay;
    return newReferenceDate.setDate(newReferenceDate.getDate() + daysUntilNext);
  },
  nextDateByDayOfWeekArray(daysArray, referenceDate, i18n) {
    const tempArray = [];
    for (let i = 0; i < daysArray.length; i++) {
      tempArray.push(new Date(this.nextDateByDayOfWeek(daysArray[i], referenceDate, i18n)));
    }
    return this.getNextDate(tempArray, referenceDate);
  },
  nextDateByDayOfWeekObject(days, referenceDate, i18n) {
    const daysArray = Object.entries(days).map(e => e[1] ? e[0] : false).filter(v => v);
    return this.nextDateByDayOfWeekArray(daysArray, referenceDate, i18n);
  },
  countDays(start, end) {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(start);
    const secondDate = new Date(end);
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));
  },
  addDays(date, quantity) {
    const result = new Date(date);
    result.setDate(result.getDate() + quantity);
    return result;
  },
  getDayDiff(d1, d2) {
    const t2 = new Date(d2).getTime();
    const t1 = new Date(d1).getTime();
    return parseInt((t2 - t1) / (24 * 3600 * 1000), 10);
  },
  getFirstDay(date, firstDayOfWeek) {
    const firstDay = this.getFirstDayOfMonth(date);
    const day = firstDay.getDay();
    let offset = 0;
    if (firstDayOfWeek > 0) {
      offset = !day ? -6 : firstDayOfWeek;
    }
    return new Date(firstDay.setDate(firstDay.getDate() - (day - offset)));
  },
  getFirstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
  },
  getNextMonth(date) {
    let nextMonth;
    if (date.getMonth() === 11) {
      nextMonth = new Date(date.getFullYear() + 1, 0, 1);
    } else {
      nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    }
    return nextMonth;
  },
  getPreviousMonth(date) {
    let prevMonth;
    if (date.getMonth() === 0) {
      prevMonth = new Date(date.getFullYear() - 1, 11, 1);
    } else {
      prevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    }
    return prevMonth;
  },
  handleTouchStart(evt) {
    this.isTouchMove = false;
    if (this.isOpen) {
      this.xDown = evt.touches[0].clientX;
      this.yDown = evt.touches[0].clientY;
    }
  },
  handleTouchMove(evt) {
    if (!this.xDown || !this.yDown) {
      this.isTouchMove = false;
      return;
    }
    this.isTouchMove = true;
    this.xUp = evt.touches[0].clientX;
    this.yUp = evt.touches[0].clientY;
  },
  handleTouchEnd() {
    if (!this.isTouchMove) {
      return;
    }
    if (!this.xDown || !this.yDown) {
      return;
    }
    const xDiff = this.xDown - this.xUp;
    const yDiff = this.yDown - this.yUp;
    if (Math.abs(xDiff) < Math.abs(yDiff) && yDiff > 0 && !this.isPreventedMaxMonth) {
      this.renderNextMonth();
    } else {
      this.renderPreviousMonth();
    }
    this.xDown = null;
    this.yDown = null;
  },
  validateDateBetweenTwoDates(fromDate, toDate, givenDate) {
    const getvalidDate = d => {
      const formatDateAt00 = new Date(d).setHours(0, 0, 0, 0);
      return new Date(formatDateAt00);
    };
    return getvalidDate(givenDate) <= getvalidDate(toDate) && getvalidDate(givenDate) >= getvalidDate(fromDate);
  },
  validateDateBetweenDate(fromDate, givenDate) {
    const getvalidDate = d => {
      return new Date(d);
    };
    return getvalidDate(givenDate) <= getvalidDate(fromDate);
  },
  getMonthDiff(d1, d2) {
    const newD1 = new Date(d1);
    const newD2 = new Date(d2);
    const d1Y = newD1.getFullYear();
    const d2Y = newD2.getFullYear();
    const d1M = newD1.getMonth();
    const d2M = newD2.getMonth();
    return d2M + 12 * d2Y - (d1M + 12 * d1Y);
  },
  shortenString(arr, sLen) {
    const newArr = [];
    if (!arr) return null;
    for (let i = 0, len = arr.length; i < len; i++) {
      newArr.push(arr[i].substr(0, sLen));
    }
    return newArr;
  },
  getDaysArray(start, end) {
    for (
    // eslint-disable-next-line no-var
    var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
      arr.push(new Date(dt));
    }

    // eslint-disable-next-line block-scoped-var
    return arr;
  },
  dateFormater(date, format) {
    const f = format || 'YYYY-MM-DD';
    if (date) {
      return lib_fecha.format(date, f);
    }
    return '';
  },
  pluralize(countOfDays, periodType = 'night') {
    if (periodType === 'week') {
      return countOfDays > 7 ? 'weeks' : 'week';
    }
    return countOfDays !== 1 ? this.i18n.nights : this.i18n.night;
  },
  isDateLessOrEquals(time1, time2) {
    return new Date(time1) < new Date(time2);
  },
  compareDay(day1, day2) {
    const date1 = lib_fecha.format(new Date(day1), 'YYYYMMDD');
    const date2 = lib_fecha.format(new Date(day2), 'YYYYMMDD');
    if (date1 > date2) {
      return 1;
    }
    if (date1 === date2) {
      return 0;
    }
    if (date1 < date2) {
      return -1;
    }
    return null;
  }
};
/* harmony default export */ var src_helpers = (helpers);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c556f10-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BookingBullet.vue?vue&type=template&id=492cabe1&
var BookingBulletvue_type_template_id_492cabe1_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('i', {
    staticClass: "cico__parent-bullet"
  }, [_vm.previousBooking && _vm.duplicateBookingDates.includes(_vm.formatDate) ? _c('i', {
    staticClass: "cico__bullet",
    class: [{
      cico__checkInCheckOut: _vm.duplicateBookingDates.includes(_vm.formatDate)
    }],
    style: _vm.previousBooking.style
  }) : _vm._e(), _vm.previousBooking && _vm.duplicateBookingDates.includes(_vm.formatDate) ? _c('i', {
    staticClass: "cico__pipe cico__checkInCheckOut",
    style: _vm.previousBooking.style
  }) : _vm._e(), _vm.currentBooking && (_vm.currentBooking.checkInDate === _vm.formatDate || _vm.currentBooking.checkOutDate === _vm.formatDate) ? _c('i', {
    staticClass: "cico__bullet",
    class: [{
      cico__checkIn: _vm.currentBooking.checkInDate === _vm.formatDate,
      cico__checkOut: _vm.currentBooking.checkOutDate === _vm.formatDate
    }],
    style: _vm.currentBooking.style
  }) : _vm._e(), _vm.currentBooking ? _c('i', {
    staticClass: "cico__pipe",
    class: [{
      cico__checkIn: _vm.currentBooking.checkInDate === _vm.formatDate,
      cico__checkOut: _vm.currentBooking.checkOutDate === _vm.formatDate
    }],
    style: _vm.currentBooking.style
  }) : _vm._e()]);
};
var BookingBulletvue_type_template_id_492cabe1_staticRenderFns = [];

// CONCATENATED MODULE: ./components/BookingBullet.vue?vue&type=template&id=492cabe1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BookingBullet.vue?vue&type=script&lang=js&
/* harmony default export */ var BookingBulletvue_type_script_lang_js_ = ({
  name: 'BookingBullet',
  props: {
    currentBooking: {
      type: Object,
      default: () => ({})
    },
    duplicateBookingDates: {
      type: Array,
      default: () => []
    },
    formatDate: {
      type: String,
      default: ''
    },
    previousBooking: {
      type: Object,
      default: () => ({})
    }
  }
});
// CONCATENATED MODULE: ./components/BookingBullet.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BookingBulletvue_type_script_lang_js_ = (BookingBulletvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

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
  if (moduleIdentifier) {
    // server build
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
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./components/BookingBullet.vue





/* normalize component */

var component = normalizeComponent(
  components_BookingBulletvue_type_script_lang_js_,
  BookingBulletvue_type_template_id_492cabe1_render,
  BookingBulletvue_type_template_id_492cabe1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BookingBullet = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c556f10-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Price.vue?vue&type=template&id=0e09b53a&
var Pricevue_type_template_id_0e09b53a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show && _vm.price ? _c('div', {
    staticClass: "price"
  }, [_c('span', {
    staticClass: "price-symbol"
  }, [_vm._v(_vm._s(_vm.symbol))]), _c('span', {
    staticClass: "price-number"
  }, [_vm._v(_vm._s(_vm.price))])]) : _vm._e();
};
var Pricevue_type_template_id_0e09b53a_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Price.vue?vue&type=template&id=0e09b53a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Price.vue?vue&type=script&lang=js&
/* harmony default export */ var Pricevue_type_script_lang_js_ = ({
  name: 'Price',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    symbol: {
      type: [String, null, undefined],
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/Price.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Pricevue_type_script_lang_js_ = (Pricevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Price.vue





/* normalize component */

var Price_component = normalizeComponent(
  components_Pricevue_type_script_lang_js_,
  Pricevue_type_template_id_0e09b53a_render,
  Pricevue_type_template_id_0e09b53a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Price = (Price_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Day.vue?vue&type=script&lang=js&





/* harmony default export */ var Dayvue_type_script_lang_js_ = ({
  name: 'Day',
  components: {
    BookingBullet: BookingBullet,
    Price: Price
  },
  props: {
    bookings: {
      type: Array,
      default: () => []
    },
    activeMonthIndex: {
      type: Number
    },
    belongsToThisMonth: {
      type: Boolean,
      default: false
    },
    checkIn: {
      type: Date
    },
    checkIncheckOutHalfDay: {
      type: Object,
      default: () => ({})
    },
    checkInPeriod: {
      type: Object,
      default: () => ({})
    },
    checkOut: {
      type: Date
    },
    date: {
      type: Date
    },
    disableCheckoutOnCheckin: {
      type: Boolean,
      default: false
    },
    duplicateBookingDates: {
      type: Array,
      default: () => []
    },
    hoveringDate: {
      type: Date
    },
    hoveringPeriod: {
      type: Object,
      default: () => ({})
    },
    hoveringTooltip: {
      default: true,
      type: Boolean
    },
    i18n: {
      type: Object,
      default: () => ({})
    },
    isOpen: {
      type: Boolean,
      required: true
    },
    minNightCount: {
      type: Number,
      default: 0
    },
    nextDisabledDate: {
      type: [Date, Number, String]
    },
    nextPeriodDisableDates: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object
    },
    priceSymbol: {
      type: String,
      required: true
    },
    priceDecimals: {
      type: [Number, null],
      default: 0
    },
    screenSize: {
      type: String,
      default: ''
    },
    showCustomTooltip: {
      default: false,
      type: Boolean
    },
    showPrice: {
      type: Boolean,
      default: false
    },
    sortedDisabledDates: {
      type: Array,
      default: () => []
    },
    sortedPeriodDates: {
      type: Array,
      default: () => []
    },
    tooltipMessage: {
      default: null,
      type: String
    }
  },
  data() {
    return {
      currentDate: new Date(),
      isDisabled: false,
      isHighlighted: false
    };
  },
  computed: {
    previousBooking() {
      let previousBooking = null;
      if (this.currentBooking && this.duplicateBookingDates.includes(this.currentBooking.checkInDate)) {
        previousBooking = this.bookings.find(booking => booking.checkOutDate === this.formatDate && this.duplicateBookingDates.includes(booking.checkOutDate));
      }
      return previousBooking;
    },
    currentBooking() {
      return this.bookings.find(booking => this.duplicateBookingDates.includes(this.formatDate) && booking.checkInDate === this.formatDate || !this.duplicateBookingDates.includes(this.formatDate) && this.validateDateBetweenTwoDates(booking.checkInDate, booking.checkOutDate, this.formatDate));
    },
    dayNumber() {
      return lib_fecha.format(this.date, 'D');
    },
    dayPrice() {
      let result = '';
      const currentDate = [...this.sortedPeriodDates].reverse().find(d => this.validateDateBetweenTwoDates(d.startAt, d.endAt, this.formatDate));
      if (currentDate && currentDate.price) {
        const priceIsNumeric = typeof currentDate.price === 'number' || !Number.isNaN(parseFloat(currentDate.price));
        const weeklyPeriod = currentDate.periodType !== 'nightly';
        if (priceIsNumeric && weeklyPeriod) {
          // Convert the price when weekly and is not a float/int type
          const price = parseFloat(currentDate.price);
          const divisor = 7;
          const decimals = Number.isNaN(parseFloat(this.priceDecimals)) ? 0 : parseFloat(this.priceDecimals);
          result = (price / divisor).toFixed(decimals);
        } else {
          result = currentDate.price;
        }
      }
      return String(result);
    },
    halfDayClass() {
      if (Object.keys(this.checkIncheckOutHalfDay).length > 0) {
        const keyDate = this.dateFormater(this.date);
        if (this.checkIncheckOutHalfDay[keyDate] && this.checkIncheckOutHalfDay[keyDate].checkIn) {
          if (this.checkIn && !this.checkOut) {
            return 'cico__month-day--halfCheckIn cico__month-day--valid';
          }
          return 'cico__month-day--halfCheckIn cico__month-day--invalid';
        }
        if (this.checkIncheckOutHalfDay[keyDate] && this.checkIncheckOutHalfDay[keyDate].checkOut) {
          return 'cico__month-day--halfCheckOut cico__month-day--valid';
        }
      }
      return false;
    },
    bookingClass() {
      if (this.bookings.length > 0 && this.currentBooking) {
        if (!this.isDisabled && this.validateDateBetweenTwoDates(this.currentBooking.checkInDate, this.currentBooking.checkOutDate, this.hoveringDate)) {
          if (this.checkIncheckOutHalfDay[this.formatDate]) {
            if (this.checkIn && !this.checkOut) {
              return 'cico__month-day--not-allowed cico__month-day--hovering';
            }
            if (this.checkIncheckOutHalfDay[this.formatDate].checkOut) {
              return 'cico__month-day--not-allowed cico__month-day--hovering';
            }
            return 'cico__month-day--not-allowed cico__month-day--invalid';
          }
          if (this.checkIn && !this.checkOut) {
            return 'cico__month-day--not-allowed cico__month-day--invalid';
          }
          return 'cico__month-day--not-allowed cico__month-day--hovering';
        }
        if (this.checkIncheckOutHalfDay[this.formatDate] && this.checkIncheckOutHalfDay[this.formatDate].checkOut && !this.duplicateBookingDates.includes(this.formatDate)) {
          if (!this.checkIn) {
            return 'cico__month-day--not-allowed cico__month-day--hovering';
          }
          if (this.checkIn && this.checkIn === this.date || this.checkIn && this.checkOut) {
            return 'cico__month-day--not-allowed cico__month-day--hovering';
          }
        }
        if (this.checkIn && !this.checkOut && this.hoveringDate === this.date) {
          return 'cico__month-day--not-allowed cico__month-day--hovering';
        }
        return 'cico__month-day--not-allowed cico__month-day--invalid';
      }
      return '';
    },
    disabledClass() {
      return this.isDisabled || this.isADisabledDay ? ' cico__month-day--disabled ' : '';
    },
    dayClass() {
      if (!this.belongsToThisMonth) {
        // Good
        return 'cico__month-day--hidden';
      }

      // If the calendar has a minimum number of nights && !checkOut
      const nextValidDate = this.addDays(this.checkIn, this.minNightCount);
      const isDateAfterMinimumDuration = this.getDayDiff(this.hoveringDate, nextValidDate) <= 0;
      let isNotMinimumDuration = '';
      if (!isDateAfterMinimumDuration && !this.checkOut && !this.isDisabled && this.compareDay(this.date, this.checkIn) >= 0 && this.minNightCount > 0 && this.compareDay(this.date, this.addDays(this.checkIn, this.minNightCount)) === -1) {
        isNotMinimumDuration = ' cico__month-day--disabled minimumDurationUnvalidDay';
      }

      // Current Day
      if (!this.isDisabled && this.date === this.hoveringDate && this.checkIn !== null && this.checkOut == null && this.dateFormater(this.checkIn) !== this.dateFormater(this.date)) {
        return `cico__month-day--selected cico__month-day--hovering cico__currentDay${isNotMinimumDuration}`;
      }

      // Highlight the selected dates and prevent the user from selecting
      // the same date for checkout and checkin
      if (this.checkIn !== null && this.dateFormater(this.checkIn) === this.dateFormater(this.date)) {
        if (this.minNightCount === 0) {
          return `cico__month-day--first-day-selected checkIn${isNotMinimumDuration}`;
        }

        // Good
        return 'cico__month-day--disabled cico__month-day--first-day-selected checkIn';
      }

      // Checkout day
      if (this.checkOut !== null) {
        if (this.dateFormater(this.checkOut) === this.dateFormater(this.date)) {
          if (this.halfDayClass) {
            return `cico__month-day--disabled cico__month-day--last-day-selected ${this.halfDayClass} checkOut`;
          }
          return 'cico__month-day--disabled cico__month-day--last-day-selected checkOut';
        }
      }

      // Only highlight dates that are not disabled
      if (this.isHighlighted && !this.isDisabled) {
        const classSelected = 'cico__month-day--selected';
        if (this.isADisabledDay) {
          return `${classSelected} cico__month-day--disabled afterMinimumDurationValidDay`;
        }
        if (Object.keys(this.checkInPeriod).length > 0 && this.checkInPeriod.periodType.includes('weekly') && this.hoveringDate && (this.checkInPeriod.periodType === 'weekly_by_saturday' && this.hoveringDate.getDay() === 6 || this.checkInPeriod.periodType === 'weekly_by_sunday' && this.hoveringDate.getDay() === 0) && this.isDateLessOrEquals(this.date, this.hoveringDate)) {
          // If currentPeriod has a minimumDuration 1
          if (this.checkInPeriod.minimumDuration === 1) {
            return `${classSelected} afterMinimumDurationValidDay`;
          }

          // If currentPeriod has a minimumDuration superior to 1
          if (this.getDayDiff(this.hoveringDate, this.checkInPeriod.nextValidDate) <= 0) {
            return `${classSelected} afterMinimumDurationValidDay`;
          }
        } else if (Object.keys(this.checkInPeriod).length > 0 && this.checkInPeriod.periodType === 'nightly' && this.hoveringDate && this.hoveringPeriod.periodType.includes('weekly') && (this.hoveringPeriod.periodType === 'weekly_by_saturday' && this.hoveringDate.getDay() === 6 || this.hoveringPeriod.periodType === 'weekly_by_sunday' && this.hoveringDate.getDay() === 0 && this.isDateLessOrEquals(this.date, this.hoveringDate))) {
          return `${classSelected} afterMinimumDurationValidDay`;
        }
        if (this.hoveringPeriod.periodType === 'nightly' && this.isDateLessOrEquals(this.date, this.hoveringDate)) {
          return `${classSelected}  afterMinimumDurationValidDay`;
        }
        if (this.checkIn && this.checkOut) {
          return `${classSelected}`;
        }
        return `${classSelected} cico__month-day--valid`;
      }

      // Good
      if (this.isDisabled || this.isADisabledDay) {
        return 'cico__month-day--disabled';
      }
      if (this.halfDayClass) {
        return `${this.halfDayClass}`;
      }

      // Good
      return 'cico__month-day--valid';
    },
    checkinCheckoutClass() {
      let currentPeriod = null;
      this.sortedPeriodDates.forEach(d => {
        if (d.endAt !== this.formatDate && (d.startAt === this.formatDate || this.validateDateBetweenTwoDates(d.startAt, d.endAt, this.formatDate))) {
          currentPeriod = d;
        }
      });
      if (this.nextPeriodDisableDates ? this.nextPeriodDisableDates.some(i => this.compareDay(i, this.date) === 0) : null) {
        return 'cico__month-day--disabled cico__month-day--not-allowed nightly';
      }
      if (currentPeriod) {
        if (currentPeriod.periodType === 'nightly' && this.belongsToThisMonth && !this.isDisabled) {
          if ((!this.checkIn && !this.checkOut || this.checkIn && this.checkOut) && this.notAllowedDayDueToNextPeriod(currentPeriod)) {
            return 'cico__month-day--disabled cico__month-day--not-allowed nightly';
          }
          return 'nightly';
        }

        // date.getDay() === 6 => saturday
        if (currentPeriod.periodType === 'weekly_by_saturday' && currentPeriod.startAt !== this.formatDate && currentPeriod.endAt !== this.formatDate && this.date.getDay() !== 6) {
          return 'cico__month-day--disabled cico__month-day--not-allowed weekly_by_saturday';
        }

        // Disable date between checkIn and nextDate, if minimumDuration is superior to 1
        if (this.notAllowDaysBetweenCheckInAndNextValidDate(6)) {
          return 'cico__month-day--disabled cico__month-day--not-allowed weekly_by_saturday';
        }

        // date.getDay() === 0 => sunday
        if (currentPeriod.periodType === 'weekly_by_sunday' && currentPeriod.startAt !== this.formatDate && currentPeriod.endAt !== this.formatDate && this.date.getDay() !== 0) {
          return 'cico__month-day--disabled cico__month-day--not-allowed weekly_by_sunday';
        }

        // Disable date between checkIn and nextDate, if minimumDuration is superior to 1
        if (this.notAllowDaysBetweenCheckInAndNextValidDate(0)) {
          return 'cico__month-day--disabled cico__month-day--not-allowed weekly_by_sunday';
        }
        return '';
      }
      return '';
    },
    formatDate() {
      return this.dateFormater(this.date);
    },
    tabIndex() {
      if (!this.isOpen || !this.belongsToThisMonth || this.isDisabled || !this.isClickable()) {
        return -1;
      }
      return 0;
    },
    nightsCount() {
      return this.countDays(this.checkIn, this.hoveringDate);
    },
    tooltipMessageDisplay() {
      const dateIsInPeriod = this.validateDateBetweenTwoDates(this.hoveringPeriod.startAt, this.hoveringPeriod.endAt, this.date);
      const checkInIsInPeriod = this.validateDateBetweenTwoDates(this.hoveringPeriod.startAt, this.hoveringPeriod.endAt, this.checkIn);
      if (this.tooltipMessage) {
        return this.tooltipMessage;
      }
      if (this.hoveringPeriod && this.hoveringPeriod.type !== 'nightly' && dateIsInPeriod && checkInIsInPeriod && this.nightsCount >= 7) {
        return `${this.nightsCount / 7} ${this.pluralize(this.nightsCount, 'week')}`;
      }
      if (this.nightsCount >= 1) {
        return `${this.nightsCount} ${this.nightsCount !== 1 ? this.get(this.i18n, 'activity.filter.nights') : this.get(this.i18n, 'activity.filter.night')}`;
      }
      return '';
    },
    showTooltip() {
      if (this.screenSize === 'desktop' || this.screenSize === 'tablet') {
        const showCustomTooltip = this.showCustomTooltip && this.date === this.hoveringDate;
        const showDefaultTooltip = !this.isDisabled && this.belongsToThisMonth && this.date === this.hoveringDate && this.tooltipMessageDisplay.length > 0 && this.checkIn !== null && this.checkOut === null;
        return showCustomTooltip || showDefaultTooltip;
      }
      return false;
    },
    isToday() {
      return this.compareDay(this.currentDate, this.date) === 0;
    },
    isADisabledDay() {
      const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const day = days[this.date.getUTCDay()];
      return this.options.disabledWeekDaysObject[day];
    }
  },
  watch: {
    hoveringDate() {
      this.fetchHighlight();
    },
    checkIn() {
      this.fetchHighlight();
    },
    activeMonthIndex() {
      this.checkIfDisabled();
      this.checkIfHighlighted();
      if (this.checkIn !== null && this.checkOut !== null) {
        if (this.isDateLessOrEquals(this.checkIn, this.date) && this.isDateLessOrEquals(this.date, this.checkOut)) {
          this.isHighlighted = true;
        } else {
          this.isHighlighted = false;
        }
      } else if (this.checkIn !== null && this.checkOut === null) {
        this.disableNextDays();
      }
    },
    nextDisabledDate() {
      this.disableNextDays();
    }
  },
  beforeMount() {
    this.checkIfDisabled();
    this.checkIfHighlighted();
  },
  methods: {
    ...src_helpers,
    get: lodash_get_default.a,
    notAllowDaysBetweenCheckInAndNextValidDate(dayCode) {
      return this.checkIn && !this.checkOut && this.date.getDay() === dayCode && Object.keys(this.hoveringPeriod).length > 0 && this.validateDateBetweenTwoDates(this.checkIn, this.hoveringPeriod.nextValidDate, this.date) && this.dateFormater(this.checkIn) !== this.formatDate && this.dateFormater(this.hoveringPeriod.nextValidDate) !== this.formatDate;
    },
    notAllowedDayDueToNextPeriod(currentPeriod) {
      // Check if the next period is directly after the current period
      const date = new Date(currentPeriod.endAt);
      let nextPeriod = null;
      this.sortedPeriodDates.forEach(period => {
        const dateA = new Date(period.startAt).setHours(0, 0, 0, 0);
        const dateB = new Date(date).setHours(0, 0, 0, 0);
        if (dateA === dateB) {
          nextPeriod = period;
        }
      });
      if (nextPeriod) {
        // Subtract the startAt nextPeriod to the currentPeriod minimumDuration
        const subtractTimestamp = new Date(nextPeriod.startAt).setHours(0, 0, 0, 0);
        const subtractDate = new Date(subtractTimestamp);
        const resultDate = new Date(subtractDate.setDate(subtractDate.getDate() - currentPeriod.minimumDuration));
        if (!this.validateDateBetweenTwoDates(currentPeriod.startAt, resultDate, this.date)) {
          return true;
        }
      }
      return false;
    },
    isClickable() {
      if (this.$refs && this.$refs.day) {
        return getComputedStyle(this.$refs.day).pointerEvents !== 'none';
      }
      return true;
    },
    dayClicked(event, date) {
      let resetCheckin = false;
      let disableCheckoutOnCheckin = !this.disableCheckoutOnCheckin;
      if (!this.checkIncheckOutHalfDay[this.formatDate] && this.currentBooking) {
        this.$emit('booking-clicked', event, date, this.currentBooking);
        return;
      }
      if (this.disableCheckoutOnCheckin) {
        if (this.checkIn && this.checkIn === date) {
          if (this.checkOut) {
            disableCheckoutOnCheckin = true;
            resetCheckin = true;
          } else {
            disableCheckoutOnCheckin = false;
            this.$emit('clear-selection');
          }
        } else {
          disableCheckoutOnCheckin = true;
        }
      }
      if (disableCheckoutOnCheckin) {
        if (!this.isDisabled || this.isClickable()) {
          const formatDate = this.dateFormater(date);
          this.$emit('day-clicked', event, date, formatDate, resetCheckin);
        } else {
          this.$emit('clear-selection');
          this.dayClicked(event, date);
        }
      }
    },
    compareEndDay() {
      if (this.options.endDate !== Infinity) {
        return this.compareDay(this.date, this.options.endDate) === 1;
      }
      return false;
    },
    checkIfDisabled() {
      this.isDisabled =
      // If this day is equal any of the disabled dates
      (this.sortedDisabledDates ? this.sortedDisabledDates.some(i => this.compareDay(i, this.date) === 0) : null) ||
      // Or is before the start date
      this.compareDay(this.date, this.options.startDate) === -1 ||
      // Or is after the end date
      this.compareEndDay() ||
      // Or is in one of the disabled days of the week
      this.isADisabledDay ||
      // Or is after max Nights
      this.date >= this.nextDisabledDate && this.nextDisabledDate !== null;

      // Handle checkout enabled
      if (this.options.enableCheckout) {
        if (this.compareDay(this.date, this.checkIn) === 1 && this.compareDay(this.date, this.checkOut) === -1) {
          this.isDisabled = false;
        }
      }
    },
    checkIfHighlighted() {
      if (this.checkIn !== null && this.checkOut !== null && this.isDisabled === false) {
        if (this.isDateLessOrEquals(this.checkIn, this.date) && this.isDateLessOrEquals(this.date, this.checkOut)) {
          this.isHighlighted = true;
        } else {
          this.isHighlighted = false;
        }
      }
    },
    disableNextDays() {
      if (this.nextDisabledDate !== null && !this.isDateLessOrEquals(this.date, this.nextDisabledDate) && this.nextDisabledDate !== Infinity) {
        this.isDisabled = true;
      } else if (this.isDateLessOrEquals(this.date, new Date().setDate(this.options.startDate.getDate() - 1))) {
        this.isDisabled = true;
      }
      if (this.compareDay(this.date, this.checkIn) === 0 && this.minNightCount === 0) {
        this.isDisabled = false;
      }
      if (this.isDateLessOrEquals(this.checkIn, this.date) && this.options.enableCheckout) {
        this.isDisabled = false;
      }
    },
    fetchHighlight() {
      if (this.checkIn !== null && this.checkOut === null && this.isDisabled === false) {
        if (!this.isDateLessOrEquals(this.checkIn, this.date)) {
          this.isHighlighted = false;
        } else if (this.isDateLessOrEquals(this.date, this.hoveringDate)) {
          this.isHighlighted = true;
        } else if (!this.isDateLessOrEquals(this.date, this.hoveringDate)) {
          this.isHighlighted = false;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Day.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Dayvue_type_script_lang_js_ = (Dayvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Day.vue





/* normalize component */

var Day_component = normalizeComponent(
  components_Dayvue_type_script_lang_js_,
  Dayvue_type_template_id_1dc04a28_render,
  Dayvue_type_template_id_1dc04a28_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Day = (Day_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c556f10-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WeekRow.vue?vue&type=template&id=53d1a813&
var WeekRowvue_type_template_id_53d1a813_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cico__week-row cico__hide-up-to-tablet"
  }, _vm._l(_vm.dayNames, function (name, ix) {
    return _c('div', {
      key: `${_vm.weekKey}-${ix}`,
      staticClass: "cico__week-name"
    }, [_vm._v(" " + _vm._s(name) + " ")]);
  }), 0);
};
var WeekRowvue_type_template_id_53d1a813_staticRenderFns = [];

// CONCATENATED MODULE: ./components/WeekRow.vue?vue&type=template&id=53d1a813&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WeekRow.vue?vue&type=script&lang=js&


/* harmony default export */ var WeekRowvue_type_script_lang_js_ = ({
  name: 'WeekRow',
  props: {
    i18n: {
      type: Object,
      required: true
    },
    weekKey: {
      type: Number,
      required: true
    },
    firstDayOfWeek: {
      type: Number,
      required: true
    }
  },
  computed: {
    weekdaysShort() {
      return this.shortenString([this.get(this.i18n, 'date.weekdays.short.sun'), this.get(this.i18n, 'date.weekdays.short.mon'), this.get(this.i18n, 'date.weekdays.short.tue'), this.get(this.i18n, 'date.weekdays.short.wed'), this.get(this.i18n, 'date.weekdays.short.thu'), this.get(this.i18n, 'date.weekdays.short.fri'), this.get(this.i18n, 'date.weekdays.short.sat')], 2);
    },
    dayNames() {
      return [...this.weekdaysShort.slice(this.firstDayOfWeek), ...this.weekdaysShort.slice(0, this.firstDayOfWeek)].slice(0, 7);
    }
  },
  methods: {
    get: lodash_get_default.a,
    ...src_helpers
  }
});
// CONCATENATED MODULE: ./components/WeekRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WeekRowvue_type_script_lang_js_ = (WeekRowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/WeekRow.vue





/* normalize component */

var WeekRow_component = normalizeComponent(
  components_WeekRowvue_type_script_lang_js_,
  WeekRowvue_type_template_id_53d1a813_render,
  WeekRowvue_type_template_id_53d1a813_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var WeekRow = (WeekRow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Month.vue?vue&type=script&lang=js&



/* harmony default export */ var Monthvue_type_script_lang_js_ = ({
  name: 'Month',
  components: {
    Day: Day,
    WeekRow: WeekRow
  },
  props: {
    month: {
      type: Object,
      required: true
    },
    dayKey: {
      type: Number,
      required: true
    },
    weekKey: {
      type: Number,
      required: true
    },
    isDesktop: {
      type: Boolean,
      required: true
    },
    showYear: {
      type: Boolean,
      required: true
    },
    yearBeforeMonth: {
      type: Boolean,
      required: true
    },
    firstDayOfWeek: {
      type: Number,
      required: true
    },
    bookings: {
      type: Array,
      default: () => []
    },
    activeMonthIndex: {
      type: Number
    },
    checkIn: {
      type: Date
    },
    checkIncheckOutHalfDay: {
      type: Object,
      default: () => ({})
    },
    checkInPeriod: {
      type: Object,
      default: () => ({})
    },
    checkOut: {
      type: Date
    },
    disableCheckoutOnCheckin: {
      type: Boolean,
      default: false
    },
    duplicateBookingDates: {
      type: Array,
      default: () => []
    },
    hoveringDate: {
      type: Date
    },
    hoveringPeriod: {
      type: Object,
      default: () => ({})
    },
    hoveringTooltip: {
      default: true,
      type: Boolean
    },
    i18n: {
      type: Object,
      default: () => ({})
    },
    isOpen: {
      type: Boolean,
      required: true
    },
    minNightCount: {
      type: Number,
      default: 0
    },
    nextDisabledDate: {
      type: [Date, Number, String]
    },
    nextPeriodDisableDates: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object
    },
    priceSymbol: {
      type: String,
      default: ''
    },
    priceDecimals: {
      type: [Number, null],
      default: 0
    },
    screenSize: {
      type: String,
      default: ''
    },
    showPrice: {
      type: Boolean,
      default: false
    },
    disabledDates: {
      type: Array,
      default: () => []
    },
    sortedDisabledDates: {
      type: Array,
      default: () => []
    },
    sortedPeriodDates: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    monthName() {
      return this.getMonth(this.month.days[15].date);
    }
  },
  methods: {
    getMonth(date) {
      const month = 'MMMM';
      const year = 'YYYY';
      let format = month;
      if (this.showYear) {
        format = this.yearBeforeMonth ? `${year} ${month}` : `${month} ${year}`;
      }
      return lib_fecha.format(date, format).trim();
    },
    enterDay(event, day) {
      this.$emit('enter-day', event, day);
    },
    enterMonth(event) {
      this.$emit('enter-month', event, this.month);
    },
    clearSelection() {
      this.$emit('clear-selection');
    },
    handleBookingClicked(event, date, currentBooking) {
      this.$emit('booking-clicked', event, date, currentBooking);
    },
    handleDayClick(event, date, formatDate, resetCheckin) {
      this.$emit('day-clicked', event, date, formatDate, resetCheckin);
    }
  }
});
// CONCATENATED MODULE: ./components/Month.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Monthvue_type_script_lang_js_ = (Monthvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Month.vue





/* normalize component */

var Month_component = normalizeComponent(
  components_Monthvue_type_script_lang_js_,
  Monthvue_type_template_id_7d1d45a4_render,
  Monthvue_type_template_id_7d1d45a4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Month = (Month_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c556f10-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileActions.vue?vue&type=template&id=447043c8&
var MobileActionsvue_type_template_id_447043c8_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cico-mobile-actions"
  }, [_c('button', {
    staticClass: "button no-margin expanded has-text-weight-semibold cico-mobile-action-reset",
    class: {
      disabled: _vm.isClearDisabled
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('reset');
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.get(_vm.i18n, 'activity.filter.clear')) + " ")]), _c('button', {
    staticClass: "button primary no-margin expanded has-text-weight-semibold cico-mobile-action-select",
    class: {
      disabled: _vm.isSelectDisabled
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('selected');
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.get(_vm.i18n, 'cta.select')) + " ")])]);
};
var MobileActionsvue_type_template_id_447043c8_staticRenderFns = [];

// CONCATENATED MODULE: ./components/MobileActions.vue?vue&type=template&id=447043c8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileActions.vue?vue&type=script&lang=js&

/* harmony default export */ var MobileActionsvue_type_script_lang_js_ = ({
  props: {
    i18n: {
      type: Object,
      required: true
    },
    isSelectDisabled: {
      type: Boolean,
      required: true
    },
    isClearDisabled: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    get: lodash_get_default.a
  }
});
// CONCATENATED MODULE: ./components/MobileActions.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MobileActionsvue_type_script_lang_js_ = (MobileActionsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/MobileActions.vue





/* normalize component */

var MobileActions_component = normalizeComponent(
  components_MobileActionsvue_type_script_lang_js_,
  MobileActionsvue_type_template_id_447043c8_render,
  MobileActionsvue_type_template_id_447043c8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MobileActions = (MobileActions_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c556f10-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icons/IconCalendar.vue?vue&type=template&id=68fbd690&
var IconCalendarvue_type_template_id_68fbd690_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', {
    staticClass: "calendar-icon",
    attrs: {
      "width": "20",
      "height": "20",
      "viewBox": "0 0 20 20",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "d": "M5.69231 1.62069C5.69231 1.27789 5.96782 1 6.30769 1C6.64756 1 6.92308 1.27789 6.92308 1.62069V2.86207H9.38462V1.62069C9.38462 1.27789 9.66013 1 10 1C10.3399 1 10.6154 1.27789 10.6154 1.62069V2.86207H13.0769V1.62069C13.0769 1.27789 13.3524 1 13.6923 1C14.0322 1 14.3077 1.27789 14.3077 1.62069V2.86207H16.2483C17.2159 2.86207 18 3.65296 18 4.62886V7.82759V17.2332C18 18.2091 17.2159 19 16.2483 19H3.75169C2.78413 19 2 18.2091 2 17.2332V7.82759V4.62886C2 3.65296 2.78413 2.86207 3.75169 2.86207H5.69231V1.62069ZM3.23077 8.44828V17.2332C3.23077 17.5235 3.46387 17.7586 3.75169 17.7586H16.2483C16.5361 17.7586 16.7692 17.5235 16.7692 17.2332V8.44828H3.23077ZM16.7692 7.2069H3.23077V4.62886C3.23077 4.33856 3.46387 4.10345 3.75169 4.10345H5.69231V5.34483C5.69231 5.68762 5.96782 5.96552 6.30769 5.96552C6.64756 5.96552 6.92308 5.68762 6.92308 5.34483V4.10345H9.38462V5.34483C9.38462 5.68762 9.66013 5.96552 10 5.96552C10.3399 5.96552 10.6154 5.68762 10.6154 5.34483V4.10345H13.0769V5.34483C13.0769 5.68762 13.3524 5.96552 13.6923 5.96552C14.0322 5.96552 14.3077 5.68762 14.3077 5.34483V4.10345H16.2483C16.5361 4.10345 16.7692 4.33856 16.7692 4.62886V7.2069ZM6.30769 11.5517C6.64738 11.5517 6.92308 11.2737 6.92308 10.931C6.92308 10.5884 6.64738 10.3103 6.30769 10.3103C5.968 10.3103 5.69231 10.5884 5.69231 10.931C5.69231 11.2737 5.968 11.5517 6.30769 11.5517ZM9.38462 10.931C9.38462 11.2737 9.10892 11.5517 8.76923 11.5517C8.42954 11.5517 8.15385 11.2737 8.15385 10.931C8.15385 10.5884 8.42954 10.3103 8.76923 10.3103C9.10892 10.3103 9.38462 10.5884 9.38462 10.931ZM11.2308 11.5517C11.5705 11.5517 11.8462 11.2737 11.8462 10.931C11.8462 10.5884 11.5705 10.3103 11.2308 10.3103C10.8911 10.3103 10.6154 10.5884 10.6154 10.931C10.6154 11.2737 10.8911 11.5517 11.2308 11.5517ZM14.3077 10.931C14.3077 11.2737 14.032 11.5517 13.6923 11.5517C13.3526 11.5517 13.0769 11.2737 13.0769 10.931C13.0769 10.5884 13.3526 10.3103 13.6923 10.3103C14.032 10.3103 14.3077 10.5884 14.3077 10.931ZM6.30769 14.0345C6.64738 14.0345 6.92308 13.7564 6.92308 13.4138C6.92308 13.0712 6.64738 12.7931 6.30769 12.7931C5.968 12.7931 5.69231 13.0712 5.69231 13.4138C5.69231 13.7564 5.968 14.0345 6.30769 14.0345ZM9.38462 13.4138C9.38462 13.7564 9.10892 14.0345 8.76923 14.0345C8.42954 14.0345 8.15385 13.7564 8.15385 13.4138C8.15385 13.0712 8.42954 12.7931 8.76923 12.7931C9.10892 12.7931 9.38462 13.0712 9.38462 13.4138ZM11.2308 14.0345C11.5705 14.0345 11.8462 13.7564 11.8462 13.4138C11.8462 13.0712 11.5705 12.7931 11.2308 12.7931C10.8911 12.7931 10.6154 13.0712 10.6154 13.4138C10.6154 13.7564 10.8911 14.0345 11.2308 14.0345Z",
      "fill": "black"
    }
  })]);
};
var IconCalendarvue_type_template_id_68fbd690_staticRenderFns = [];

// CONCATENATED MODULE: ./components/icons/IconCalendar.vue?vue&type=template&id=68fbd690&

// CONCATENATED MODULE: ./components/icons/IconCalendar.vue

var script = {}


/* normalize component */

var IconCalendar_component = normalizeComponent(
  script,
  IconCalendarvue_type_template_id_68fbd690_render,
  IconCalendarvue_type_template_id_68fbd690_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconCalendar = (IconCalendar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c556f10-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/icons/IconArrow.vue?vue&type=template&id=797aab2c&
var IconArrowvue_type_template_id_797aab2c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', {
    staticClass: "arrow-icon",
    attrs: {
      "width": "19",
      "height": "16",
      "viewBox": "0 0 19 16",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M10.8281 1.32812L17.8992 8.39919L10.8281 15.4703",
      "stroke": "#000"
    }
  }), _c('path', {
    attrs: {
      "d": "M17.5 8.5H0.5",
      "stroke": "#000",
      "stroke-linecap": "square"
    }
  })]);
};
var IconArrowvue_type_template_id_797aab2c_staticRenderFns = [];

// CONCATENATED MODULE: ./components/icons/IconArrow.vue?vue&type=template&id=797aab2c&

// CONCATENATED MODULE: ./components/icons/IconArrow.vue

var IconArrow_script = {}


/* normalize component */

var IconArrow_component = normalizeComponent(
  IconArrow_script,
  IconArrowvue_type_template_id_797aab2c_render,
  IconArrowvue_type_template_id_797aab2c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconArrow = (IconArrow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c556f10-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DateInput.vue?vue&type=template&id=48e9e8e8&
var DateInputvue_type_template_id_48e9e8e8_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cico__input",
    class: _vm.inputClass,
    attrs: {
      "data-qa": "cicoInput",
      "tabindex": _vm.tabIndex
    },
    on: {
      "keyup": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.toggleDatepicker.apply(null, arguments);
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.text) + " ")]);
};
var DateInputvue_type_template_id_48e9e8e8_staticRenderFns = [];

// CONCATENATED MODULE: ./components/DateInput.vue?vue&type=template&id=48e9e8e8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DateInput.vue?vue&type=script&lang=js&

/* harmony default export */ var DateInputvue_type_script_lang_js_ = ({
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    inputDate: {
      type: String,
      default: null
    },
    inputDateType: {
      type: String,
      default: 'check-in'
    },
    singleDaySelection: {
      type: Boolean,
      default: false
    },
    toggleDatepicker: {
      type: Function,
      required: true
    },
    i18n: {
      type: Object,
      required: true
    }
  },
  computed: {
    inputClass() {
      return {
        'cico__input--is-active': this.isOpen && this.inputDate == null,
        'cico__input--single-date': this.singleDaySelection
      };
    },
    text() {
      let plain = null;
      if (this.inputDateType === 'check-in') plain = this.get(this.i18n, 'activity.filter.action');
      if (this.inputDateType === 'check-out') plain = this.get(this.i18n, 'activity.filter.action');
      return this.inputDate || plain;
    },
    tabIndex() {
      return this.inputDateType === 'check-in' ? 0 : -1;
    }
  },
  methods: {
    get: lodash_get_default.a
  }
});
// CONCATENATED MODULE: ./components/DateInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DateInputvue_type_script_lang_js_ = (DateInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/DateInput.vue





/* normalize component */

var DateInput_component = normalizeComponent(
  components_DateInputvue_type_script_lang_js_,
  DateInputvue_type_template_id_48e9e8e8_render,
  DateInputvue_type_template_id_48e9e8e8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DateInput = (DateInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3c556f10-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallToAction.vue?vue&type=template&id=86456312&
var CallToActionvue_type_template_id_86456312_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cico__cta-panel"
  }, [!_vm.nightsIn ? _c('h4', {
    staticClass: "cico__cta-panel-title"
  }, [_vm._v(" " + _vm._s(_vm.get(_vm.i18n, 'checkInCheckOut.checkIn')) + " ")]) : !_vm.nightsOut ? _c('h4', {
    staticClass: "cico__cta-panel-title"
  }, [_vm._v(" " + _vm._s(_vm.get(_vm.i18n, 'checkInCheckOut.checkOut')) + " ")]) : _c('h4', {
    staticClass: "cico__cta-panel-title"
  }, [_vm._v(" " + _vm._s(_vm.get(_vm.i18n, 'checkInCheckOut.yourDates')) + " ")]), !_vm.nightsIn ? _c('p', {
    staticClass: "cico__cta-info"
  }, [_vm._v(" " + _vm._s(_vm.get(_vm.i18n, 'checkInCheckOut.stayLongerOne')) + " ")]) : _vm._e(), _vm.nightsIn ? _c('p', {
    staticClass: "cico__nights-info"
  }, [_vm.nightsIn ? _c('span', {
    staticClass: "cico__checkin"
  }, [_vm._v(" " + _vm._s(_vm.nightsIn) + " ")]) : _c('span', [_vm._v(" " + _vm._s(_vm.get(_vm.i18n, 'activity.calendar.checkIn')) + " ")]), _vm.nightsOut ? _c('span', {
    staticClass: "cico__checkout"
  }, [_vm._v(" " + _vm._s(`- ${_vm.nightsOut} `) + " ")]) : _c('span', {
    staticClass: "cico__checkout"
  }, [_vm._v(" " + _vm._s('-') + " " + _vm._s(_vm.get(_vm.i18n, 'activity.calendar.checkOut')) + " ")]), [_vm.extraNights < 1 ? _c('span', {
    staticClass: "cico__nights"
  }, [_vm._v(" (" + _vm._s(`${_vm.includedNights}`) + " " + _vm._s(_vm.get(_vm.i18n, 'checkInCheckOut.nightsIncluded')) + ") ")]) : _vm._e()], _c('span', {
    staticClass: "cico__travel-dates"
  }, [_vm.extraNights >= 1 ? [_vm._v(" (" + _vm._s(` ${_vm.nightsTotal}`) + " "), _vm.nightsTotal > 1 ? _c('span', [_vm._v(_vm._s(_vm.get(_vm.i18n, 'activity.filter.nights')) + " " + _vm._s('-'))]) : _c('span', [_vm._v(_vm._s(_vm.get(_vm.i18n, 'activity.filter.night')) + " ")])] : _vm._e(), _vm.extraNights >= 1 ? [_c('span', [_vm._v(" " + _vm._s(` ${_vm.includedNights}`) + " " + _vm._s(_vm.get(_vm.i18n, 'checkInCheckOut.included')) + ", ")]), _c('span', {
    staticClass: "cico__extra-nights"
  }, [_vm._v(" " + _vm._s(_vm.extraNights) + " " + _vm._s(_vm.get(_vm.i18n, 'checkInCheckOut.extraNight')) + " ")]), _vm._v(") ")] : _vm._e()], 2)], 2) : _vm._e()]);
};
var CallToActionvue_type_template_id_86456312_staticRenderFns = [];

// CONCATENATED MODULE: ./components/CallToAction.vue?vue&type=template&id=86456312&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallToAction.vue?vue&type=script&lang=js&

/* harmony default export */ var CallToActionvue_type_script_lang_js_ = ({
  props: {
    i18n: Object,
    includedNights: {
      type: Number,
      default: 0
    },
    nightsIn: String,
    nightsOut: String,
    nightsTotal: Number
  },
  computed: {
    extraNights() {
      return this.nightsTotal - this.includedNights;
    }
  },
  methods: {
    get: lodash_get_default.a
  }
});
// CONCATENATED MODULE: ./components/CallToAction.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CallToActionvue_type_script_lang_js_ = (CallToActionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/CallToAction.vue





/* normalize component */

var CallToAction_component = normalizeComponent(
  components_CallToActionvue_type_script_lang_js_,
  CallToActionvue_type_template_id_86456312_render,
  CallToActionvue_type_template_id_86456312_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CallToAction = (CallToAction_component.exports);
// CONCATENATED MODULE: ./public/i18n/en.js
/* harmony default export */ var en = ({
  cta: {
    select: 'Select'
  },
  date: {
    weekdays: {
      sun: 'Sunday',
      mon: 'Monday',
      tue: 'Tuesday',
      wed: 'Wednesday',
      thu: 'Thursday',
      fri: 'Friday',
      sat: 'Saturday',
      short: {
        sun: 'Sun.',
        mon: 'Mon.',
        tue: 'Tue.',
        wed: 'Wed.',
        thu: 'Thu.',
        fri: 'Fri.',
        sat: 'Sat.'
      }
    },
    months: {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December'
    }
  },
  checkInCheckOut: {
    addDate: 'Add dates',
    whereToGo: 'Where to?',
    anywhere: 'Anywhere',
    stayLongerOne: 'Want to stay for longer?',
    addExtraNights: 'Add extra nights in the calendar!',
    checkIn: 'Select a check-in date',
    checkOut: 'Select a checkout date',
    included: 'included',
    extraNight: 'extra night(s)',
    yourDates: 'Your travel dates',
    selectCheckInCheckOut: 'Choose a check-in and check-out date to make the most of your getaway and really relax by enjoying an extended stay!',
    people: 'People',
    nightsIncluded: 'Night(s) included',
    nightsResults: '"Showing results for a # night stay ( 1 included, 1 extra)"',
    upgraded: "You've upgraded your stay by adding more nights",
    changeDatesOne: 'Change your dates to see results included in your box',
    changeDatesTwo: 'Change dates',
    clear: 'Clear',
    extendedStay: 'Extend your stay',
    mobileMinNights: 'Your experience is for a minimum of %boxMinNights% nights.'
  },
  activity: {
    calendar: {
      title: 'Select a date to make a booking',
      titleQCTerme: 'Select your date',
      mobileTitle: 'Your arrival date',
      numberOfNight: '"Your stay is for %number% night(s)"',
      upSell: 'You can add extra nights or rooms later',
      error: 'The selected partner has no availability at this time. Please choose another partner.',
      available: 'Available',
      provisional: 'On request',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      instantBookingRibbon: 'This Hotel is <span class="availability-ribbon__instant-booking">%symbol%Instantly Bookable</span>',
      onRequestBookingRibbon: "This hotel is available by request only. They'll get back to you within 24 hours."
    },
    filter: {
      total: '"Your search: %number% stays"',
      totalMobile: '"%number% results"',
      text: 'Where would you like to go?',
      textPopup: 'Search',
      textMobileNote: 'Here you can search for an experience or a location',
      regionAndDepartment: 'Country or county',
      regionMobileListTitle: 'Choose a destination',
      departmentMobileListTitle: 'Choose a destination',
      locatorRegionCountryListTitle: '"Country, county"',
      locatorNoDepartmentOrRegionSelected: 'No country/county selected',
      locatorDepartmentListTitle: 'Province',
      region: 'County',
      department: 'City or town',
      date: 'Arrival',
      noResult: 'We have not found any results matching your search',
      noResultWithOOB: 'Your current gift box does not contain any experiences corresponding to your search. But good news, we found below plenty of matching available experiences for you from our range! You can book any of these for free with your current gift voucher.',
      anyPlace: 'Search City or Region',
      anyDate: 'Any date',
      whereTo: 'Where to?',
      when: 'When?',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      ctaInfo: 'Want to stay for longer? Add extra nights in the calendar!',
      ctaCI: 'Select a check-in date',
      ctaCO: 'Select a checkout date',
      ctaDates: 'Your travel dates',
      action: 'Add dates',
      included: 'included',
      nightIncludedCICO: 'night included',
      nightsIncludedCICO: 'nights included',
      night: 'night',
      nights: 'nights',
      clear: 'Clear',
      extraNight: 'extra night',
      extraNights: 'extra nights',
      boxMinNights: 'Your experience is for a minimum of',
      currentLocation: 'Use current location',
      searching: 'Searching...'
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cico.vue?vue&type=script&lang=js&












// eslint-disable-next-line import/no-named-as-default

/* harmony default export */ var Cicovue_type_script_lang_js_ = ({
  name: 'HotelDatePicker',
  components: {
    Month: Month,
    CallToAction: CallToAction,
    MobileActions: MobileActions,
    IconCalendar: IconCalendar,
    IconArrow: IconArrow,
    DateInput: DateInput
  },
  props: {
    bookings: {
      type: Array,
      default() {
        return [];
      }
    },
    closeDatepickerOnClickOutside: {
      type: Boolean,
      default: true
    },
    disableCheckoutOnCheckin: {
      type: Boolean,
      default: false
    },
    disabledDates: {
      type: Array,
      default() {
        return [];
      }
    },
    disabledDaysOfWeek: {
      type: Array,
      default() {
        return [];
      }
    },
    disabledWeekDays: {
      type: Object,
      default() {
        return {};
      }
    },
    displayClearButton: {
      type: Boolean,
      default: true
    },
    enableCheckout: {
      type: Boolean,
      default: false
    },
    endDate: {
      type: [Date, String, Number],
      default: Infinity
    },
    endingDateValue: {
      type: [Date, null],
      default: null
    },
    firstDayOfWeek: {
      type: Number,
      default: 0
    },
    format: {
      type: String,
      default: 'dddd DD MMMM'
    },
    hoveringTooltip: {
      default: true,
      type: [Boolean, Function]
    },
    i18n: {
      type: Object,
      default: () => en
    },
    lastDateAvailable: {
      type: [Number, Date],
      default: Infinity
    },
    maxNights: {
      type: [Number, null],
      default: null
    },
    minNights: {
      type: Number,
      default: 1
    },
    periodDates: {
      type: Array,
      default() {
        return [];
      }
    },
    positionRight: {
      type: Boolean,
      default: false
    },
    priceSymbol: {
      type: String,
      default: ''
    },
    showPrice: {
      type: Boolean,
      default: false
    },
    showSingleMonth: {
      type: Boolean,
      default: false
    },
    showYear: {
      type: Boolean,
      default: true
    },
    singleDaySelection: {
      type: Boolean,
      default: false
    },
    startDate: {
      type: [Date, String],
      default() {
        return new Date();
      }
    },
    startingDateValue: {
      type: [Date, null],
      default: null
    },
    value: {
      type: Boolean,
      default: true
    },
    yearBeforeMonth: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeMonthIndex: 0,
      checkIn: this.startingDateValue,
      checkInPeriod: {},
      checkOut: this.endingDateValue,
      hoveringPeriod: {},
      customTooltip: '',
      customTooltipHalfday: '',
      datepickerDayKey: 0,
      datepickerMonthKey: 0,
      datepickerWeekKey: 0,
      dynamicNightCounts: null,
      hash: Date.now(),
      hoveringDate: null,
      isTouchMove: false,
      months: [],
      nextDisabledDate: null,
      nextPeriodDisableDates: [],
      open: false,
      screenSize: null,
      showCustomTooltip: false,
      sortedDisabledDates: null,
      xDown: null,
      xUp: null,
      yDown: null,
      yUp: null,
      windowWidth: window.innerWidth
    };
  },
  computed: {
    isOpen: {
      get() {
        return this.open;
      },
      set(open) {
        this.open = open;
        this.$emit('input', this.open);
      }
    },
    weekdays() {
      return [this.get(this.i18n, 'date.weekdays.sun'), this.get(this.i18n, 'date.weekdays.mon'), this.get(this.i18n, 'date.weekdays.tue'), this.get(this.i18n, 'date.weekdays.wed'), this.get(this.i18n, 'date.weekdays.thu'), this.get(this.i18n, 'date.weekdays.fri'), this.get(this.i18n, 'date.weekdays.sat')];
    },
    monthNames() {
      return Object.values(this.get(this.i18n, 'date.months'));
    },
    weekdaysShort() {
      return [this.get(this.i18n, 'date.weekdays.short.sun'), this.get(this.i18n, 'date.weekdays.short.mon'), this.get(this.i18n, 'date.weekdays.short.tue'), this.get(this.i18n, 'date.weekdays.short.wed'), this.get(this.i18n, 'date.weekdays.short.thu'), this.get(this.i18n, 'date.weekdays.short.fri'), this.get(this.i18n, 'date.weekdays.short.sat')];
    },
    totalNights() {
      if (!this.checkIn) return 0;
      if (!this.checkOut) return 0;
      return this.countDays(this.checkIn, this.checkOut);
    },
    sortBookings() {
      if (this.bookings.length > 0) {
        const bookings = [...this.bookings];
        return bookings.sort((a, b) => {
          const aa = a.checkInDate.split('/').reverse().join();
          const bb = b.checkOutDate.split('/').reverse().join();

          // eslint-disable-next-line no-nested-ternary
          return aa < bb ? -1 : aa > bb ? 1 : 0;
        });
      }
      return [];
    },
    duplicateBookingDates() {
      return this.baseHalfDayDates.filter((newArr => date => newArr.has(date) || !newArr.add(date))(new Set()));
    },
    baseHalfDayDates() {
      if (this.sortBookings.length > 0) {
        const bookings = this.sortBookings.map(x => [x.checkInDate, x.checkOutDate]);
        return bookings.reduce((a, b) => {
          return a.concat(b);
        });
      }
      return this.disabledDates;
    },
    paginateMonths() {
      const months = [];
      if (this.isDesktop) {
        months.push(this.months[this.activeMonthIndex]);
        months.push(this.months[this.activeMonthIndex + 1]);
      } else {
        this.months.forEach(el => {
          months.push(el);
        });
      }
      return months;
    },
    sortedPeriodDates() {
      let periodDates = [];
      if (this.periodDates) {
        const sortFunction = (fecha1, fecha2) => {
          const v1 = fecha1.startAt.split('/').reverse().join() + fecha1.endAt.split('/').reverse().join();
          const v2 = fecha2.startAt.split('/').reverse().join() + fecha2.endAt.split('/').reverse().join();

          // eslint-disable-next-line no-nested-ternary
          return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
        };
        periodDates = [...this.periodDates].sort(sortFunction);
      }
      return periodDates;
    },
    sliceMonthMobile() {
      const nbMonthRenderDom = 4;
      if (this.activeMonthIndex >= nbMonthRenderDom) {
        return this.months.slice(this.activeMonthIndex - 3, this.activeMonthIndex + 1);
      }
      return this.months.slice(0, nbMonthRenderDom);
    },
    isPreventedMaxMonth() {
      const lastIndexMonthAvailable = this.getMonthDiff(this.startDate, this.lastDateAvailable);
      return this.activeMonthIndex >= lastIndexMonthAvailable - 1;
    },
    minNightCount() {
      return this.dynamicNightCounts || this.minNights;
    },
    showClearSelectionButton() {
      return Boolean((this.checkIn || this.checkOut) && this.displayClearButton);
    },
    disabledWeekDaysObject() {
      const disabledDays = this.disabledDaysOfWeek.map(d => d.toLowerCase());
      const names = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const SUNDAY = names[0];
      const MONDAY = names[1];
      const TUESDAY = names[2];
      const WEDNESDAY = names[3];
      const THURSDAY = names[4];
      const FRIDAY = names[5];
      const SATURDAY = names[6];
      // The order of _default is important!
      const disabledWeekDaysObject = {
        sunday: disabledDays.includes(SUNDAY),
        monday: disabledDays.includes(MONDAY),
        tuesday: disabledDays.includes(TUESDAY),
        wednesday: disabledDays.includes(WEDNESDAY),
        thursday: disabledDays.includes(THURSDAY),
        friday: disabledDays.includes(FRIDAY),
        saturday: disabledDays.includes(SATURDAY)
      };
      return Object.assign(disabledWeekDaysObject, this.disabledWeekDays);
    },
    disabledWeekDaysArray() {
      const days = this.disabledWeekDaysObject;
      const fn = function fnDisabledWeekDaysArray(day, ix) {
        return day[1] ? this.weekdays[ix] : false;
      };
      return Object.entries(days).map(fn).filter(v => v);
    },
    dayOptions() {
      return {
        ...this.$props,
        disabledWeekDaysObject: this.disabledWeekDaysObject
      };
    },
    numberOfMonths() {
      if (this.isDesktop) return 2;
      return 12;
    },
    isDesktop() {
      return this.windowWidth > 767;
    }
  },
  watch: {
    bookings() {
      this.reRender();
    },
    checkIn(newDate) {
      this.$emit('check-in-changed', newDate);
      this.$emit('starting-date-changed', newDate);
      this.reRender();
    },
    checkOut(newDate) {
      this.$emit('ending-date-changed', newDate);
      if (this.checkOut !== null) {
        this.hoveringDate = null;
        this.nextDisabledDate = null;
        this.reRender();
        this.showCustomTooltip = false;
      }
      this.$emit('check-out-changed', newDate);
      this.reRender();
    },
    firstDayOfWeek(newDay) {
      this.$emit('first-day-of-week-changed', newDay);
      const startDate = new Date(this.startDate);
      const offset = this.numberOfMonths + this.activeMonthIndex;
      this.generateInitialMonths();
      for (let i = this.numberOfMonths; i < offset; i++) {
        this.createMonth(new Date(startDate.getFullYear(), startDate.getMonth() + i, 1));
      }
      this.reRender();
    },
    startingDateValue(date) {
      this.setCheckIn(date);
    },
    endingDateValue(date) {
      this.setCheckOut(date);
    },
    singleDaySelection(single) {
      if (single) {
        this.setCheckOut(this.checkIn);
      } else {
        this.setCheckIn(this.checkIn);
        this.setCheckOut(null);
      }
      this.reRender();
    },
    yearBeforeMonth() {
      this.reRender();
    },
    i18n() {
      this.configureI18n();
    },
    disabledDates() {
      this.nextDisabledDate = null;
      this.reRender();
    }
  },
  created() {
    this.configureI18n();
    this.generateInitialMonths();
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
      if (this.isDesktop) {
        document.addEventListener('click', this.handleClickOutside, false);
        document.addEventListener('keyup', this.escFunction, false);
      }
    });
    if (this.isDesktop) {
      document.addEventListener('click', this.handleClickOutside, false);
      document.addEventListener('keyup', this.escFunction, false);
    }
  },
  destroyed() {
    if (this.isDesktop) {
      document.removeEventListener('keyup', this.escFunction, false);
      document.removeEventListener('click', this.handleClickOutside);
    }
  },
  methods: {
    ...src_helpers,
    get: lodash_get_default.a,
    transformDisabledWeekDays() {},
    configureI18n() {
      lib_fecha.setGlobalDateI18n({
        dayNames: this.weekdays,
        dayNamesShort: this.shortenString(this.weekdaysShort, 3),
        monthNames: this.monthNames,
        monthNamesShort: this.shortenString(this.monthNames, 3),
        amPm: ['am', 'pm'],
        // D is the day of the month, function returns something like...  3rd or 11th
        DoFn(D) {
          return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
        }
      });
    },
    responsiveFormatter(date) {
      if (this.isDesktop) {
        return this.dateFormater(date, 'ddd DD MMM');
      }
      return this.dateFormater(date, 'DD MMM');
    },
    generateInitialMonths() {
      this.months = [];
      if (this.checkIn && (this.getMonthDiff(this.getNextMonth(new Date(this.startDate)), this.checkIn) > 0 || this.getMonthDiff(this.startDate, this.checkIn) > 0)) {
        this.createMonth(new Date(this.startDate));
        const count = this.getMonthDiff(this.startDate, this.checkIn);
        const monthCount = this.showSingleMonth ? count - 1 : count;
        let nextMonth = new Date(this.startDate);
        for (let i = 0; i <= monthCount; i++) {
          const tempNextMonth = this.getNextMonth(nextMonth);
          this.createMonth(tempNextMonth);
          nextMonth = tempNextMonth;
        }
        if (this.checkOut && this.getMonthDiff(this.checkIn, this.checkOut) > 0) {
          this.createMonth(this.getNextMonth(nextMonth));
          this.activeMonthIndex = 1;
        }
        this.activeMonthIndex += count;
      } else {
        let date = new Date(this.startDate);
        for (let i = 0; i < this.numberOfMonths; i++) {
          this.createMonth(date);
          date = this.getNextMonth(new Date(date));
        }
      }
    },
    handleBookingClicked(event, date, currentBooking) {
      this.$emit('booking-clicked', event, date, currentBooking);
    },
    escFunction(e) {
      const escTouch = 27;
      if (e.keyCode === escTouch && this.isOpen && this.checkIn) {
        this.clearSelection();
      }
    },
    formatDate(date) {
      return this.dateFormater(date, this.format);
    },
    dateIsInCheckInCheckOut(date) {
      const compareDate = this.dateFormater(date);
      let currentPeriod = null;
      this.sortedPeriodDates.forEach(d => {
        if (d.endAt !== compareDate && (d.startAt === compareDate || this.validateDateBetweenTwoDates(d.startAt, d.endAt, compareDate))) {
          currentPeriod = d;
        }
      });
      return currentPeriod;
    },
    dayIsDisabled(date) {
      if (this.checkIn && !this.checkOut && !this.isDateLessOrEquals(date, this.nextDisabledDate) && this.nextDisabledDate !== Infinity) {
        return true;
      }
      if (this.checkIn && !this.checkOut && this.isDateLessOrEquals(date, this.checkIn)) {
        return true;
      }
      return false;
    },
    enterMonth(event, month) {
      this.$emit('enter-month', event, month);
    },
    enterDay(event, day) {
      this.hoveringDate = this.singleDaySelection ? null : day.date;
      this.$emit('enter-day', event, day);
    },
    setCurrentPeriod(date, eventType) {
      let currentPeriod = {};
      if (this.sortedPeriodDates.length > 0) {
        this.sortedPeriodDates.forEach(d => {
          if (eventType === 'click' && (d.startAt === this.dateFormater(date) || d.endAt !== this.dateFormater(date) && this.validateDateBetweenTwoDates(d.startAt, d.endAt, date))) {
            currentPeriod = d;
          } else if (eventType === 'hover' && (d.startAt === this.dateFormater(date) || this.validateDateBetweenTwoDates(d.startAt, d.endAt, date))) {
            currentPeriod = d;
          }
        });
        if (Object.keys(currentPeriod).length > 0) {
          this.hoveringPeriod = currentPeriod;
        } else if (this.minNightCount > 0 && this.checkIn) {
          this.hoveringPeriod = {
            periodType: 'nightly',
            minimumDuration: this.minNightCount,
            startAt: this.checkIn,
            endAt: this.addDays(this.checkIn, this.minNightCount)
          };
        } else {
          this.hoveringPeriod = {
            periodType: 'nightly',
            minimumDuration: this.minNightCount,
            startAt: this.checkIn,
            endAt: this.addDays(this.checkIn, this.minNightCount)
          };
        }
      } else if (this.minNightCount > 0) {
        this.hoveringPeriod = {
          periodType: 'nightly',
          minimumDuration: this.minNightCount,
          startAt: this.checkIn,
          endAt: this.addDays(this.checkIn, this.minNightCount)
        };
      }
    },
    handleDayClick(event, date, formatDate, resetCheckin) {
      this.nextPeriodDisableDates = [];
      if (resetCheckin) {
        this.clearSelection();
        this.$nextTick(() => {
          this.handleDayClick(event, date, formatDate, false);
        });
        return;
      }
      let nextDisabledDate = (this.maxNights ? this.addDays(date, this.maxNights + 1) : null) || this.getNextDate(this.sortedDisabledDates, date) || this.nextDateByDayOfWeekArray(this.disabledWeekDaysArray, date, this.i18n) || this.nextBookingDate(date) || Infinity;
      this.dynamicNightCounts = null;
      if (this.enableCheckout) {
        nextDisabledDate = Infinity;
      }
      if (this.checkIn == null && !this.singleDaySelection) {
        this.checkIn = date;
        this.$emit('check-in-selected', date);
        this.setMinimumDuration(date);
      } else if (this.singleDaySelection) {
        this.checkIn = date;
        this.$emit('check-in-selected', date);
        this.checkOut = date;
      } else if (this.checkIn !== null && this.checkOut == null && this.isDateLessOrEquals(date, this.checkIn)) {
        this.checkIn = date;
        this.$emit('check-in-selected', date);
      } else if (this.checkIn !== null && this.checkOut == null) {
        this.checkOut = date;
        this.$emit('period-selected', event, this.checkIn, this.checkOut);
        /**
         * @deprecated since v4.0.0 beta 11
         */
        this.$emit('periodSelected', event, this.checkIn, this.checkOut);
      } else {
        this.checkOut = null;
        this.checkIn = date;
        this.$emit('check-in-selected', date);
        this.setMinimumDuration(date);
      }
      if (this.checkIn && !this.checkOut) {
        this.setCurrentPeriod(date, 'click');
        this.checkInPeriod = this.hoveringPeriod;
      }
      this.nextDisabledDate = nextDisabledDate;
      this.hoveringDate = null;
      this.hoveringDate = date;
      this.$emit('day-clicked', date, formatDate, nextDisabledDate);
      /**
       * @deprecated since v4.0.0 beta 11
       */
      this.$emit('dayClicked', date, formatDate, nextDisabledDate);
    },
    nextBookingDate(date) {
      let closest = Infinity;
      if (this.sortBookings.length > 0) {
        const nextDateFormated = this.dateFormater(this.addDays(date, 1));
        const nextBooking = this.sortBookings.find(booking => this.validateDateBetweenDate(booking.checkInDate, nextDateFormated) || this.validateDateBetweenTwoDates(booking.checkInDate, booking.checkOutDate, nextDateFormated));
        closest = nextBooking ? nextBooking.checkInDate : Infinity;
      }
      return closest;
    },
    handleClickOutside(event) {
      const ignoreClickOnMeElement = this.$refs[`DatePicker-${this.hash}`];
      if (ignoreClickOnMeElement) {
        const isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
        if (!isClickInsideElement) {
          this.hideDatepicker();
        }
      }
    },
    reRender() {
      this.datepickerDayKey += 1;
      this.datepickerMonthKey += 1;
      this.datepickerWeekKey += 1;
    },
    clearSelection() {
      this.hoveringDate = null;
      this.checkIn = null;
      this.checkOut = null;
      this.nextDisabledDate = null;
      this.nextPeriodDisableDates = [];
      this.hoveringPeriod = {};
      this.checkInPeriod = {};
      this.reRender();
      this.$emit('clear-selection');
    },
    closeMobileDatepicker() {
      this.hideDatepicker();
    },
    hideDatepicker() {
      this.isOpen = false;
      this.$nextTick(() => {
        this.$emit('cico-closed');
      });
    },
    showDatepicker() {
      this.isOpen = true;
      this.$nextTick(() => {
        this.$emit('cico-opened');
      });
    },
    toggleDatepicker() {
      this[this.isOpen ? 'hideDatepicker' : 'showDatepicker']();
    },
    clearCheckIn() {
      if (this.checkIn && !this.checkOut) {
        this.clearSelection();
      }
    },
    clickOutside() {
      if (this.closeDatepickerOnClickOutside) {
        this.hideDatepicker();
      }
    },
    setMinimumDuration(date) {
      if (this.sortedPeriodDates) {
        let nextPeriod = null;
        let currentPeriod = null;
        const compareDate = this.dateFormater(date);
        this.sortedPeriodDates.forEach(d => {
          if (d.endAt !== compareDate && (d.startAt === compareDate || this.validateDateBetweenTwoDates(d.startAt, d.endAt, date))) {
            currentPeriod = d;
          }
        });
        if (currentPeriod) {
          this.sortedPeriodDates.forEach(period => {
            if (period.startAt === currentPeriod.endAt) {
              nextPeriod = period;
            }
          });
          if (this.checkIn && !this.checkOut && nextPeriod) {
            const endNextPeriod = this.addDays(nextPeriod.startAt, nextPeriod.minimumDuration - 1);
            const startNextPeriodPlusOne = this.addDays(nextPeriod.startAt, 1);
            const newDisablesDates = this.getDaysArray(startNextPeriodPlusOne, endNextPeriod);
            this.nextPeriodDisableDates = newDisablesDates;
          }
          if (currentPeriod.periodType === 'nightly' && currentPeriod.endAt !== date) {
            this.dynamicNightCounts = currentPeriod.minimumDuration;
          }
          if (currentPeriod.periodType === 'weekly_by_saturday' || currentPeriod.periodType === 'weekly_by_sunday') {
            const minimumDuration = currentPeriod.minimumDuration * 7;
            this.dynamicNightCounts = minimumDuration;
          }
        } else {
          this.dynamicNightCounts = 0;
        }
      }
    },
    renderPreviousMonth() {
      if (this.activeMonthIndex >= 1) {
        const firstDayOfLastMonth = this.months[this.activeMonthIndex].days.filter(day => day.belongsToThisMonth === true);
        const previousMonth = this.getPreviousMonth(firstDayOfLastMonth[0].date);
        this.activeMonthIndex--;
        this.$emit('previous-month-rendered', previousMonth);
      }
    },
    renderNextMonth: lodash_throttle_default()(function throttleRenderNextMonth() {
      if (!this.showSingleMonth && this.activeMonthIndex < this.months.length - 2 || this.showSingleMonth && this.activeMonthIndex < this.months.length - 1) {
        this.activeMonthIndex++;
        return;
      }
      let firstDayOfLastMonth;
      if (!this.isDesktop) {
        firstDayOfLastMonth = this.months[this.months.length - 1].days.filter(day => day.belongsToThisMonth === true);
      } else {
        firstDayOfLastMonth = this.months[this.activeMonthIndex + 1].days.filter(day => day.belongsToThisMonth === true);
      }
      if (this.endDate !== Infinity) {
        if (lib_fecha.format(firstDayOfLastMonth[0].date, 'YYYYMM') === lib_fecha.format(new Date(this.endDate), 'YYYYMM')) {
          return;
        }
      }
      const nextMonth = this.getNextMonth(firstDayOfLastMonth[0].date);
      this.createMonth(nextMonth);
      this.activeMonthIndex++;
      this.$emit('next-month-rendered', nextMonth);
    }, 350),
    setCheckIn(date) {
      this.checkIn = date;
    },
    setCheckOut(date) {
      this.checkOut = date;
    },
    createMonth(date) {
      const firstDay = this.getFirstDay(date, this.firstDayOfWeek);
      const month = {
        days: []
      };
      for (let i = 0; i < 35; i++) {
        month.days.push({
          date: this.addDays(firstDay, i),
          belongsToThisMonth: this.addDays(firstDay, i).getMonth() === date.getMonth()
        });
      }
      this.months.push(month);
    }
  }
});
// CONCATENATED MODULE: ./components/Cico.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Cicovue_type_script_lang_js_ = (Cicovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Cico.vue





/* normalize component */

var Cico_component = normalizeComponent(
  components_Cicovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Cico = (Cico_component.exports);
// EXTERNAL MODULE: ./src/assets/scss/index.scss
var scss = __webpack_require__("a41b");
var scss_default = /*#__PURE__*/__webpack_require__.n(scss);

// CONCATENATED MODULE: ./src/index.js


/* harmony default export */ var src_0 = (Cico);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("04f8");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
});
//# sourceMappingURL=vueCico.umd.js.map