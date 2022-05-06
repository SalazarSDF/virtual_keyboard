/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ansi-html-community/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ansi-html-community/index.js ***!
  \***************************************************/
/***/ (function(module) {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _src_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _src_js_makeButtons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/js/makeButtons.js */ "./src/js/makeButtons.js");
/* harmony import */ var _src_js_buttonsTemplate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/js/buttonsTemplate.js */ "./src/js/buttonsTemplate.js");
/* harmony import */ var _src_js_makeKeyboard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/js/makeKeyboard.js */ "./src/js/makeKeyboard.js");
/* harmony import */ var _src_js_brainCenter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/js/brainCenter.js */ "./src/js/brainCenter.js");







/***/ }),

/***/ "./src/js/brainCenter.js":
/*!*******************************!*\
  !*** ./src/js/brainCenter.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makeTextArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeTextArea */ "./src/js/makeTextArea.js");
/* harmony import */ var _makeKeyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeKeyboard */ "./src/js/makeKeyboard.js");
/* harmony import */ var _makeButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeButtons */ "./src/js/makeButtons.js");




function init() {
  var shift = false;
  var lang = "langEng";
  (0,_makeTextArea__WEBPACK_IMPORTED_MODULE_0__.makeTextArea)();
  (0,_makeKeyboard__WEBPACK_IMPORTED_MODULE_1__["default"])(shift, lang);
}

function keyPush(e) {
  (0,_makeButtons__WEBPACK_IMPORTED_MODULE_2__.keyAnimation)(e);
  (0,_makeTextArea__WEBPACK_IMPORTED_MODULE_0__.textAreaBrain)(e);
}

window.addEventListener("keydown", keyPush);
window.onload = init(); //window.onload = makeTextArea();
//document.DOMContentLoaded = init();

/***/ }),

/***/ "./src/js/buttonsTemplate.js":
/*!***********************************!*\
  !*** ./src/js/buttonsTemplate.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allKeys": function() { return /* binding */ allKeys; }
/* harmony export */ });
var allKeys = [[{
  code: "Backquote",
  langRu: {
    unShift: "ё",
    shift: "Ё"
  },
  langEng: {
    shift: "`",
    unShift: "~"
  },
  keyCode: "192"
}, {
  code: "Digit1",
  langRu: {
    unShift: "1",
    shift: "!"
  },
  langEng: {
    shift: "1",
    unShift: "!"
  },
  keyCode: "49"
}, {
  code: "Digit2",
  langRu: {
    unShift: "2",
    shift: '"'
  },
  langEng: {
    shift: "2",
    unShift: "@"
  },
  keyCode: "50"
}, {
  code: "Digit3",
  langRu: {
    unShift: "3",
    shift: "№"
  },
  langEng: {
    shift: "3",
    unShift: "#"
  },
  keyCode: "51"
}, {
  code: "Digit4",
  langRu: {
    unShift: "4",
    shift: ";"
  },
  langEng: {
    shift: "4",
    unShift: "$"
  },
  keyCode: "52"
}, {
  code: "Digit5",
  langRu: {
    unShift: "5",
    shift: "%"
  },
  langEng: {
    shift: "5",
    unShift: "%"
  },
  keyCode: "53"
}, {
  code: "Digit6",
  langRu: {
    unShift: "6",
    shift: ":"
  },
  langEng: {
    shift: "6",
    unShift: "^"
  },
  keyCode: "54"
}, {
  code: "Digit7",
  langRu: {
    unShift: "7",
    shift: "?"
  },
  langEng: {
    shift: "7",
    unShift: "&"
  },
  keyCode: "55"
}, {
  code: "Digit8",
  langRu: {
    unShift: "8",
    shift: "*"
  },
  langEng: {
    shift: "8",
    unShift: "*"
  },
  keyCode: "56"
}, {
  code: "Digit9",
  langRu: {
    unShift: "9",
    shift: "("
  },
  langEng: {
    shift: "9",
    unShift: "("
  },
  keyCode: "57"
}, {
  code: "Digit0",
  langRu: {
    unShift: "0",
    shift: ")"
  },
  langEng: {
    shift: "0",
    unShift: ")"
  },
  keyCode: "48"
}, {
  code: "Minus",
  langRu: {
    unShift: "-",
    shift: "_"
  },
  langEng: {
    shift: "-",
    unShift: "_"
  },
  keyCode: "173"
}, {
  code: "Equal",
  langRu: {
    unShift: "=",
    shift: "+"
  },
  langEng: {
    shift: "=",
    unShift: "+"
  },
  keyCode: "61"
}, {
  code: "Backspace",
  langRu: {
    unShift: "⌫",
    shift: "⌫"
  },
  langEng: {
    unShift: "⌫",
    shift: "⌫"
  },
  keyCode: "8"
}], [{
  code: "Tab",
  langRu: {
    unShift: "↹ Tab",
    shift: "↹ Tab"
  },
  langEng: {
    unShift: "↹ Tab",
    shift: "↹ Tab"
  },
  keyCode: "9"
}, {
  code: "KeyQ",
  func: false,
  langRu: {
    unShift: "й",
    shift: "Й"
  },
  langEng: {
    shift: "Q",
    unShift: "q"
  },
  keyCode: "81"
}, {
  code: "KeyW",
  langRu: {
    unShift: "ц",
    shift: "Ц"
  },
  langEng: {
    shift: "W",
    unShift: "w"
  },
  keyCode: "87"
}, {
  code: "KeyE",
  langRu: {
    unShift: "у",
    shift: "У"
  },
  langEng: {
    shift: "E",
    unShift: "e"
  },
  keyCode: "69"
}, {
  code: "KeyR",
  langRu: {
    unShift: "к",
    shift: "К"
  },
  langEng: {
    shift: "R",
    unShift: "r"
  },
  keyCode: "82"
}, {
  code: "KeyT",
  langRu: {
    unShift: "е",
    shift: "Е"
  },
  langEng: {
    shift: "T",
    unShift: "t"
  },
  keyCode: "84"
}, {
  code: "KeyY",
  langRu: {
    unShift: "н",
    shift: "Н"
  },
  langEng: {
    shift: "Y",
    unShift: "y"
  },
  keyCode: "89"
}, {
  code: "KeyU",
  langRu: {
    unShift: "г",
    shift: "Г"
  },
  langEng: {
    shift: "U",
    unShift: "u"
  },
  keyCode: "85"
}, {
  code: "KeyI",
  langRu: {
    unShift: "ш",
    shift: "Ш"
  },
  langEng: {
    shift: "I",
    unShift: "i"
  },
  keyCode: "73"
}, {
  code: "KeyO",
  langRu: {
    unShift: "щ",
    shift: "Щ"
  },
  langEng: {
    shift: "O",
    unShift: "o"
  },
  keyCode: "79"
}, {
  code: "KeyP",
  langRu: {
    unShift: "з",
    shift: "З"
  },
  langEng: {
    shift: "P",
    unShift: "p"
  },
  keyCode: "80"
}, {
  code: "BracketLeft",
  langRu: {
    unShift: "x",
    shift: "X"
  },
  langEng: {
    shift: "{",
    unShift: "["
  },
  keyCode: "219"
}, {
  code: "BracketRight",
  langRu: {
    unShift: "ъ",
    shift: "Ъ"
  },
  langEng: {
    shift: "}",
    unShift: "]"
  },
  keyCode: "221"
}, {
  code: "Backslash",
  langRu: {
    unShift: "\\",
    shift: "/"
  },
  langEng: {
    shift: "|",
    unShift: "\\"
  },
  keyCode: "220"
}], [{
  code: "CapsLock",
  langRu: {
    unShift: "🅰 Caps",
    shift: "🅰 Caps"
  },
  langEng: {
    unShift: "🅰 Caps",
    shift: "🅰 Caps"
  },
  keyCode: "0"
}, {
  code: "KeyA",
  langRu: {
    unShift: "ф",
    shift: "Ф"
  },
  langEng: {
    unShift: "a",
    shift: "A"
  },
  keyCode: "65"
}, {
  code: "KeyS",
  langRu: {
    unShift: "ы",
    shift: "Ы"
  },
  langEng: {
    unShift: "s",
    shift: "S"
  },
  keyCode: "83"
}, {
  code: "KeyD",
  langRu: {
    unShift: "в",
    shift: "В"
  },
  langEng: {
    unShift: "d",
    shift: "D"
  },
  keyCode: "68"
}, {
  code: "KeyF",
  langRu: {
    shift: "А",
    unShift: "а"
  },
  langEng: {
    shift: "F",
    unShift: "f"
  },
  keyCode: "70"
}, {
  code: "KeyG",
  langRu: {
    shift: "П",
    unShift: "п"
  },
  langEng: {
    shift: "G",
    unShift: "g"
  },
  keyCode: "71"
}, {
  code: "KeyH",
  langRu: {
    shift: "Р",
    unShift: "р"
  },
  langEng: {
    shift: "H",
    unShift: "h"
  },
  keyCode: "72"
}, {
  code: "KeyJ",
  langRu: {
    shift: "О",
    unShift: "о"
  },
  langEng: {
    shift: "J",
    unShift: "j"
  },
  keyCode: "74"
}, {
  code: "KeyK",
  langRu: {
    shift: "Л",
    unShift: "л"
  },
  langEng: {
    shift: "K",
    unShift: "k"
  },
  keyCode: "75"
}, {
  code: "KeyL",
  langRu: {
    shift: "Д",
    unShift: "д"
  },
  langEng: {
    shift: "L",
    unShift: "l"
  },
  keyCode: "76"
}, {
  code: "Semicolon",
  langRu: {
    shift: "Ж",
    unShift: "ж"
  },
  langEng: {
    shift: ":",
    unShift: ";"
  },
  keyCode: "59"
}, {
  code: "Quote",
  langRu: {
    shift: "Э",
    unShift: "э"
  },
  langEng: {
    shift: '"',
    unShift: "'"
  },
  keyCode: "222"
}, {
  code: "Enter",
  langRu: {
    shift: "Enter"
  },
  langEng: {
    shift: "Enter",
    unShift: "Enter"
  },
  keyCode: "13"
}], [{
  code: "ShiftLeft",
  langRu: {
    shift: "⇧Shift",
    unShift: "⇧Shift"
  },
  langEng: {
    shift: "⇧Shift",
    unShift: "⇧Shift"
  },
  keyCode: "16"
}, {
  code: "KeyZ",
  langRu: {
    shift: "Я",
    unShift: "я"
  },
  langEng: {
    shift: "Z",
    unShift: "z"
  },
  keyCode: "90"
}, {
  code: "KeyX",
  langRu: {
    shift: "Ч",
    unShift: "ч"
  },
  langEng: {
    shift: "X",
    unShift: "x"
  },
  keyCode: "88"
}, {
  code: "KeyC",
  langRu: {
    shift: "C",
    unShift: "c"
  },
  langEng: {
    shift: "C",
    unShift: "c"
  },
  keyCode: "67"
}, {
  code: "KeyV",
  langRu: {
    shift: "М",
    unShift: "м"
  },
  langEng: {
    shift: "V",
    unShift: "v"
  },
  keyCode: "86"
}, {
  code: "KeyB",
  langRu: {
    shift: "И",
    unShift: "и"
  },
  langEng: {
    shift: "B",
    unShift: "b"
  },
  keyCode: "66"
}, {
  code: "KeyN",
  langRu: {
    shift: "Т",
    unShift: "т"
  },
  langEng: {
    shift: "N",
    unShift: "n"
  },
  keyCode: "78"
}, {
  code: "KeyM",
  langRu: {
    shift: "Ь",
    unShift: "ь"
  },
  langEng: {
    shift: "M",
    unShift: "m"
  },
  keyCode: "77"
}, {
  code: "Comma",
  langRu: {
    shift: "Б",
    unShift: "б"
  },
  langEng: {
    shift: "<",
    unShift: ","
  },
  keyCode: "188"
}, {
  code: "Period",
  langRu: {
    shift: "Ю",
    unShift: "ю"
  },
  langEng: {
    shift: ">",
    unShift: "."
  },
  keyCode: "190"
}, {
  code: "Slash",
  langRu: {
    shift: ",",
    unShift: ","
  },
  langEng: {
    shift: "?",
    unShift: "/"
  },
  keyCode: "191"
}, {
  code: "ShiftRight",
  langRu: {
    shift: "⇧Shift",
    unShift: "⇧Shift"
  },
  langEng: {
    shift: "⇧Shift",
    unShift: "⇧Shift"
  },
  keyCode: "16"
}, {
  code: "ArrowUp",
  langRu: {
    shift: "⯅",
    unShift: "⯅"
  },
  langEng: {
    shift: "⯅",
    unShift: "⯅"
  },
  keyCode: "38"
}], [{
  code: "ControlLeft",
  langRu: {
    shift: "Control",
    unShift: "Control"
  },
  langEng: {
    shift: "Control",
    unShift: "Control"
  },
  keyCode: "17"
}, {
  code: "AltLeft",
  langRu: {
    shift: "Alt",
    unShift: "Alt"
  },
  langEng: {
    shift: "Alt",
    unShift: "Alt"
  },
  keyCode: "18"
}, {
  code: "Space",
  langRu: {
    shift: "Space",
    unShift: "Space"
  },
  langEng: {
    shift: "Space",
    unShift: "Space"
  },
  keyCode: "32"
}, {
  code: "AltRight",
  langRu: {
    shift: "Alt",
    unShift: "Alt"
  },
  langEng: {
    shift: "Alt",
    unShift: "Alt"
  },
  keyCode: "18"
}, {
  code: "ControlRight",
  langRu: {
    shift: "Control",
    unShift: "Control"
  },
  langEng: {
    shift: "Control",
    unShift: "Control"
  },
  keyCode: "17"
}, {
  code: "ArrowLeft",
  langRu: {
    shift: "⯇",
    unShift: "⯇"
  },
  langEng: {
    shift: "⯇",
    unShift: "⯇"
  },
  keyCode: "37"
}, {
  code: "ArrowDown",
  langRu: {
    shift: "⯆",
    unShift: "⯆"
  },
  langEng: {
    shift: "⯆",
    unShift: "⯆"
  },
  keyCode: "40"
}, {
  code: "ArrowRight",
  langRu: {
    shift: "⯈",
    unShift: "⯈"
  },
  langEng: {
    shift: "⯈",
    unShift: "⯈"
  },
  keyCode: "39"
}]];
 //console.log(allKeys);
//let row1 = "192 49 50 51 52 53 54 55 56 57 48 173 61 8";
//let row2 = "9 81 87 69 82 84 89 85 73 79 80 219 221 220";
//let row3 = "0 65 83 68 70 71 72 74 75 76 59 222 13";
//let row4 = "16 90 88 67 86 66 78 77 188 190 191 16 38";
//let row5 = "17 18 32 18 17 37 40 39";
//row1 = row1.split(" ");
//row2 = row2.split(" ");
//row3 = row3.split(" ");
//row4 = row4.split(" ");
//row5 = row5.split(" ");
//let allRows = [row1, row2, row3, row4, row5];
//for (let i = 0; i < allKeys.length; i++) {
//for (let j = 0; j < allKeys[i].length; j++) {
//allKeys[i][j]["keyCode"] = allRows[i][j];
//}
//}

/***/ }),

/***/ "./src/js/makeButtons.js":
/*!*******************************!*\
  !*** ./src/js/makeButtons.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyAnimation": function() { return /* binding */ keyAnimation; },
/* harmony export */   "langEngShift": function() { return /* binding */ langEngShift; },
/* harmony export */   "langEngUnShift": function() { return /* binding */ langEngUnShift; },
/* harmony export */   "langRuShift": function() { return /* binding */ langRuShift; },
/* harmony export */   "langRuUnShift": function() { return /* binding */ langRuUnShift; }
/* harmony export */ });
/* harmony import */ var _buttonsTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonsTemplate */ "./src/js/buttonsTemplate.js");
 //key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("clicked");
}

function makeButtons(allKeys, lang, shift) {
  var keys = document.createElement("div");
  keys.setAttribute("class", "keys");

  for (var i = 0; i < 5; i++) {
    var row = document.createElement("div");
    row.setAttribute("class", "row");

    for (var j = 0; j < allKeys[i].length; j++) {
      var key = document.createElement("div");
      key.setAttribute("class", "key");
      key.setAttribute("data-key", allKeys[i][j]["keyCode"]);
      key.addEventListener("transitionend", removeTransition);
      var kbd = document.createElement("kbd");
      kbd.innerHTML = allKeys[i][j][lang][shift];
      key.append(kbd);
      row.append(key);
    }

    keys.append(row);
  }

  return keys;
}

function keyAnimation(e) {
  var key = document.querySelectorAll("div[data-key=\"".concat(e.keyCode, "\"]"));
  if (!key) return;

  for (var i = 0; i < key.length; i++) {
    key[i].classList.toggle("clicked");
  }
}

var langEngShift = makeButtons(_buttonsTemplate__WEBPACK_IMPORTED_MODULE_0__.allKeys, "langEng", "shift");
var langEngUnShift = makeButtons(_buttonsTemplate__WEBPACK_IMPORTED_MODULE_0__.allKeys, "langEng", "unShift");
var langRuShift = makeButtons(_buttonsTemplate__WEBPACK_IMPORTED_MODULE_0__.allKeys, "langRu", "shift");
var langRuUnShift = makeButtons(_buttonsTemplate__WEBPACK_IMPORTED_MODULE_0__.allKeys, "langRu", "unShift"); //let keysDom = [langEngShift, langEngUnShift, langRuShift, langRuUnShift];



/***/ }),

/***/ "./src/js/makeKeyboard.js":
/*!********************************!*\
  !*** ./src/js/makeKeyboard.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makeButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeButtons */ "./src/js/makeButtons.js");


function makeKeyboard() {
  var shift = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "langEng";
  var body = document.querySelector("body");

  if (!shift && lang === "langEng") {
    body.append(_makeButtons__WEBPACK_IMPORTED_MODULE_0__.langEngUnShift);
  } else if (shift && lang === "langEng") {
    body.append(_makeButtons__WEBPACK_IMPORTED_MODULE_0__.langEngShift);
  } else if (!shift && lang === "langRu") {
    body.append(_makeButtons__WEBPACK_IMPORTED_MODULE_0__.langRuUnShift);
  } else if (shift && lang === "langRu") {
    body.append(_makeButtons__WEBPACK_IMPORTED_MODULE_0__.langRuShift);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (makeKeyboard);

/***/ }),

/***/ "./src/js/makeTextArea.js":
/*!********************************!*\
  !*** ./src/js/makeTextArea.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTextArea": function() { return /* binding */ makeTextArea; },
/* harmony export */   "textAreaBrain": function() { return /* binding */ textAreaBrain; }
/* harmony export */ });
function makeTextArea() {
  var body = document.querySelector("body");
  var wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  var textareaCont = document.createElement("div");
  textareaCont.setAttribute("class", "text-area");
  var textArea = document.createElement("textarea");
  textareaCont.append(textArea);
  wrapper.append(textareaCont);
  body.append(wrapper);
}

function textAreaBrain(e) {
  var textarea = document.querySelector("textarea");
  textarea.focus();

  if (e.keyCode == 9) {
    e.preventDefault();
    textarea.value += "    ";
  }
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/kayboard-bg.jpg */ "./src/assets/kayboard-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") bottom center;\n  background-size: cover;\n}\n\nbody, html {\n  margin: 0 auto;\n  font-family: sans-serif;\n}\n\n.keys {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  align-items: start;\n}\n\n.row {\n  display: flex;\n  align-items: center;\n}\n\n.key {\n  border: 0.2rem solid black;\n  border-radius: 0.5rem;\n  margin: 1rem 0.5rem;\n  font-size: 1.3rem;\n  padding: 1rem 0.5rem;\n  transition: all 0.07s ease;\n  width: 2rem;\n  text-align: center;\n  color: white;\n  background: rgba(0, 0, 0, 0.4);\n  text-shadow: 0 0 0.5rem black;\n}\n\n.key:hover {\n  border: 2px solid #fff;\n  cursor: pointer;\n}\n\n.key:active,\n.key.active {\n  transform: scale(1.1);\n  border-color: #0073ff;\n  box-shadow: 0 0 1rem #0073ff;\n}\n\nkbd {\n  display: block;\n}\n\n.clicked {\n  transform: scale(1.1);\n  border-color: #0073ff;\n  box-shadow: 0 0 1rem #0073ff;\n}\n\ntextarea {\n  height: 25vh;\n  width: 100%;\n  font-size: 2rem;\n  margin: 0 auto;\n  resize: none;\n  background: transparent;\n}", "",{"version":3,"sources":["webpack://./src/styles/_settings.scss","webpack://./src/styles/index.scss","webpack://./src/styles/_keys.scss","webpack://./src/styles/_input-area.scss"],"names":[],"mappings":"AACA;EACE,iEAAA;EACA,sBAAA;ACAF;;ADGA;EACE,cAAA;EACA,uBAAA;ACAF;;ACRA;EAEE,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,kBAAA;ADUF;;ACRA;EACE,aAAA;EACA,mBAAA;ADWF;;ACRA;EACE,0BAAA;EACA,qBAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;EACA,0BAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,8BAAA;EACA,6BAAA;ADWF;;ACRA;EACE,sBAAA;EACA,eAAA;ADWF;;ACTA;;EAEE,qBAAA;EACA,qBAAA;EACA,4BAAA;ADYF;;ACTA;EACE,cAAA;ADYF;;ACTA;EACE,qBAAA;EACA,qBAAA;EACA,4BAAA;ADYF;;AExDA;EACE,YAAA;EACA,WAAA;EACA,eAAA;EACA,cAAA;EACA,YAAA;EACA,uBAAA;AF2DF","sourcesContent":["//kayboard-bg.jpg\nhtml {\n  background: url('../assets/kayboard-bg.jpg') bottom center;\n  background-size: cover;\n}\n\nbody,html {\n  margin: 0 auto;\n  font-family: sans-serif;\n}","html {\n  background: url(\"../assets/kayboard-bg.jpg\") bottom center;\n  background-size: cover;\n}\n\nbody, html {\n  margin: 0 auto;\n  font-family: sans-serif;\n}\n\n.keys {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  align-items: start;\n}\n\n.row {\n  display: flex;\n  align-items: center;\n}\n\n.key {\n  border: 0.2rem solid black;\n  border-radius: 0.5rem;\n  margin: 1rem 0.5rem;\n  font-size: 1.3rem;\n  padding: 1rem 0.5rem;\n  transition: all 0.07s ease;\n  width: 2rem;\n  text-align: center;\n  color: white;\n  background: rgba(0, 0, 0, 0.4);\n  text-shadow: 0 0 0.5rem black;\n}\n\n.key:hover {\n  border: 2px solid #fff;\n  cursor: pointer;\n}\n\n.key:active,\n.key.active {\n  transform: scale(1.1);\n  border-color: #0073ff;\n  box-shadow: 0 0 1rem #0073ff;\n}\n\nkbd {\n  display: block;\n}\n\n.clicked {\n  transform: scale(1.1);\n  border-color: #0073ff;\n  box-shadow: 0 0 1rem #0073ff;\n}\n\ntextarea {\n  height: 25vh;\n  width: 100%;\n  font-size: 2rem;\n  margin: 0 auto;\n  resize: none;\n  background: transparent;\n}",".keys {\n  //flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  align-items: start;\n}\n.row {\n  display: flex;\n  align-items: center;\n}\n\n.key {\n  border: 0.2rem solid black;\n  border-radius: 0.5rem;\n  margin: 1rem 0.5rem;\n  font-size: 1.3rem;\n  padding: 1rem 0.5rem;\n  transition: all 0.07s ease;\n  width: 2rem;\n  text-align: center;\n  color: white;\n  background: rgba(0, 0, 0, 0.4);\n  text-shadow: 0 0 0.5rem black;\n}\n\n.key:hover {\n  border: 2px solid #fff;\n  cursor: pointer;\n}\n.key:active,\n.key.active {\n  transform: scale(1.1);\n  border-color: #0073ff;\n  box-shadow: 0 0 1rem #0073ff;\n}\n\nkbd {\n  display: block;\n}\n\n.clicked {\n  transform: scale(1.1);\n  border-color: #0073ff;\n  box-shadow: 0 0 1rem #0073ff;\n}\n","textarea {\n  height: 25vh;\n  width: 100%;\n  font-size: 2rem;\n  margin: 0 auto;\n  resize: none;\n  background: transparent;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ (function(module) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./node_modules/html-entities/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-entities/lib/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var named_references_1 = __webpack_require__(/*! ./named-references */ "./node_modules/html-entities/lib/named-references.js");
var numeric_unicode_map_1 = __webpack_require__(/*! ./numeric-unicode-map */ "./node_modules/html-entities/lib/numeric-unicode-map.js");
var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");
var allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), { all: named_references_1.namedReferences.html5 });
var encodeRegExps = {
    specialChars: /[<>'"&]/g,
    nonAscii: /(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
    nonAsciiPrintable: /(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
    extensive: /(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g
};
var defaultEncodeOptions = {
    mode: 'specialChars',
    level: 'all',
    numeric: 'decimal'
};
/** Encodes all the necessary (specified by `level`) characters in the text */
function encode(text, _a) {
    var _b = _a === void 0 ? defaultEncodeOptions : _a, _c = _b.mode, mode = _c === void 0 ? 'specialChars' : _c, _d = _b.numeric, numeric = _d === void 0 ? 'decimal' : _d, _e = _b.level, level = _e === void 0 ? 'all' : _e;
    if (!text) {
        return '';
    }
    var encodeRegExp = encodeRegExps[mode];
    var references = allNamedReferences[level].characters;
    var isHex = numeric === 'hexadecimal';
    encodeRegExp.lastIndex = 0;
    var _b = encodeRegExp.exec(text);
    var _c;
    if (_b) {
        _c = '';
        var _d = 0;
        do {
            if (_d !== _b.index) {
                _c += text.substring(_d, _b.index);
            }
            var _e = _b[0];
            var result_1 = references[_e];
            if (!result_1) {
                var code_1 = _e.length > 1 ? surrogate_pairs_1.getCodePoint(_e, 0) : _e.charCodeAt(0);
                result_1 = (isHex ? '&#x' + code_1.toString(16) : '&#' + code_1) + ';';
            }
            _c += result_1;
            _d = _b.index + _e.length;
        } while ((_b = encodeRegExp.exec(text)));
        if (_d !== text.length) {
            _c += text.substring(_d);
        }
    }
    else {
        _c =
            text;
    }
    return _c;
}
exports.encode = encode;
var defaultDecodeOptions = {
    scope: 'body',
    level: 'all'
};
var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var baseDecodeRegExps = {
    xml: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.xml
    },
    html4: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html4
    },
    html5: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html5
    }
};
var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), { all: baseDecodeRegExps.html5 });
var fromCharCode = String.fromCharCode;
var outOfBoundsChar = fromCharCode(65533);
var defaultDecodeEntityOptions = {
    level: 'all'
};
/** Decodes a single entity */
function decodeEntity(entity, _a) {
    var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level, level = _b === void 0 ? 'all' : _b;
    if (!entity) {
        return '';
    }
    var _b = entity;
    var decodeEntityLastChar_1 = entity[entity.length - 1];
    if (false) {}
    else if (false) {}
    else {
        var decodeResultByReference_1 = allNamedReferences[level].entities[entity];
        if (decodeResultByReference_1) {
            _b = decodeResultByReference_1;
        }
        else if (entity[0] === '&' && entity[1] === '#') {
            var decodeSecondChar_1 = entity[2];
            var decodeCode_1 = decodeSecondChar_1 == 'x' || decodeSecondChar_1 == 'X'
                ? parseInt(entity.substr(3), 16)
                : parseInt(entity.substr(2));
            _b =
                decodeCode_1 >= 0x10ffff
                    ? outOfBoundsChar
                    : decodeCode_1 > 65535
                        ? surrogate_pairs_1.fromCodePoint(decodeCode_1)
                        : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] || decodeCode_1);
        }
    }
    return _b;
}
exports.decodeEntity = decodeEntity;
/** Decodes all entities in the text */
function decode(text, _a) {
    var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a, decodeCode_1 = decodeSecondChar_1.level, level = decodeCode_1 === void 0 ? 'all' : decodeCode_1, _b = decodeSecondChar_1.scope, scope = _b === void 0 ? level === 'xml' ? 'strict' : 'body' : _b;
    if (!text) {
        return '';
    }
    var decodeRegExp = decodeRegExps[level][scope];
    var references = allNamedReferences[level].entities;
    var isAttribute = scope === 'attribute';
    var isStrict = scope === 'strict';
    decodeRegExp.lastIndex = 0;
    var replaceMatch_1 = decodeRegExp.exec(text);
    var replaceResult_1;
    if (replaceMatch_1) {
        replaceResult_1 = '';
        var replaceLastIndex_1 = 0;
        do {
            if (replaceLastIndex_1 !== replaceMatch_1.index) {
                replaceResult_1 += text.substring(replaceLastIndex_1, replaceMatch_1.index);
            }
            var replaceInput_1 = replaceMatch_1[0];
            var decodeResult_1 = replaceInput_1;
            var decodeEntityLastChar_2 = replaceInput_1[replaceInput_1.length - 1];
            if (isAttribute
                && decodeEntityLastChar_2 === '=') {
                decodeResult_1 = replaceInput_1;
            }
            else if (isStrict
                && decodeEntityLastChar_2 !== ';') {
                decodeResult_1 = replaceInput_1;
            }
            else {
                var decodeResultByReference_2 = references[replaceInput_1];
                if (decodeResultByReference_2) {
                    decodeResult_1 = decodeResultByReference_2;
                }
                else if (replaceInput_1[0] === '&' && replaceInput_1[1] === '#') {
                    var decodeSecondChar_2 = replaceInput_1[2];
                    var decodeCode_2 = decodeSecondChar_2 == 'x' || decodeSecondChar_2 == 'X'
                        ? parseInt(replaceInput_1.substr(3), 16)
                        : parseInt(replaceInput_1.substr(2));
                    decodeResult_1 =
                        decodeCode_2 >= 0x10ffff
                            ? outOfBoundsChar
                            : decodeCode_2 > 65535
                                ? surrogate_pairs_1.fromCodePoint(decodeCode_2)
                                : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_2] || decodeCode_2);
                }
            }
            replaceResult_1 += decodeResult_1;
            replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;
        } while ((replaceMatch_1 = decodeRegExp.exec(text)));
        if (replaceLastIndex_1 !== text.length) {
            replaceResult_1 += text.substring(replaceLastIndex_1);
        }
    }
    else {
        replaceResult_1 =
            text;
    }
    return replaceResult_1;
}
exports.decode = decode;


/***/ }),

/***/ "./node_modules/html-entities/lib/named-references.js":
/*!************************************************************!*\
  !*** ./node_modules/html-entities/lib/named-references.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.bodyRegExps={xml:/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html4:/&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html5:/&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g};exports.namedReferences={xml:{entities:{"&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'","&amp;":"&"},characters:{"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","&":"&amp;"}},html4:{entities:{"&apos;":"'","&nbsp":" ","&nbsp;":" ","&iexcl":"¡","&iexcl;":"¡","&cent":"¢","&cent;":"¢","&pound":"£","&pound;":"£","&curren":"¤","&curren;":"¤","&yen":"¥","&yen;":"¥","&brvbar":"¦","&brvbar;":"¦","&sect":"§","&sect;":"§","&uml":"¨","&uml;":"¨","&copy":"©","&copy;":"©","&ordf":"ª","&ordf;":"ª","&laquo":"«","&laquo;":"«","&not":"¬","&not;":"¬","&shy":"­","&shy;":"­","&reg":"®","&reg;":"®","&macr":"¯","&macr;":"¯","&deg":"°","&deg;":"°","&plusmn":"±","&plusmn;":"±","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&acute":"´","&acute;":"´","&micro":"µ","&micro;":"µ","&para":"¶","&para;":"¶","&middot":"·","&middot;":"·","&cedil":"¸","&cedil;":"¸","&sup1":"¹","&sup1;":"¹","&ordm":"º","&ordm;":"º","&raquo":"»","&raquo;":"»","&frac14":"¼","&frac14;":"¼","&frac12":"½","&frac12;":"½","&frac34":"¾","&frac34;":"¾","&iquest":"¿","&iquest;":"¿","&Agrave":"À","&Agrave;":"À","&Aacute":"Á","&Aacute;":"Á","&Acirc":"Â","&Acirc;":"Â","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Aring":"Å","&Aring;":"Å","&AElig":"Æ","&AElig;":"Æ","&Ccedil":"Ç","&Ccedil;":"Ç","&Egrave":"È","&Egrave;":"È","&Eacute":"É","&Eacute;":"É","&Ecirc":"Ê","&Ecirc;":"Ê","&Euml":"Ë","&Euml;":"Ë","&Igrave":"Ì","&Igrave;":"Ì","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Iuml":"Ï","&Iuml;":"Ï","&ETH":"Ð","&ETH;":"Ð","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Ograve":"Ò","&Ograve;":"Ò","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Otilde":"Õ","&Otilde;":"Õ","&Ouml":"Ö","&Ouml;":"Ö","&times":"×","&times;":"×","&Oslash":"Ø","&Oslash;":"Ø","&Ugrave":"Ù","&Ugrave;":"Ù","&Uacute":"Ú","&Uacute;":"Ú","&Ucirc":"Û","&Ucirc;":"Û","&Uuml":"Ü","&Uuml;":"Ü","&Yacute":"Ý","&Yacute;":"Ý","&THORN":"Þ","&THORN;":"Þ","&szlig":"ß","&szlig;":"ß","&agrave":"à","&agrave;":"à","&aacute":"á","&aacute;":"á","&acirc":"â","&acirc;":"â","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&aring":"å","&aring;":"å","&aelig":"æ","&aelig;":"æ","&ccedil":"ç","&ccedil;":"ç","&egrave":"è","&egrave;":"è","&eacute":"é","&eacute;":"é","&ecirc":"ê","&ecirc;":"ê","&euml":"ë","&euml;":"ë","&igrave":"ì","&igrave;":"ì","&iacute":"í","&iacute;":"í","&icirc":"î","&icirc;":"î","&iuml":"ï","&iuml;":"ï","&eth":"ð","&eth;":"ð","&ntilde":"ñ","&ntilde;":"ñ","&ograve":"ò","&ograve;":"ò","&oacute":"ó","&oacute;":"ó","&ocirc":"ô","&ocirc;":"ô","&otilde":"õ","&otilde;":"õ","&ouml":"ö","&ouml;":"ö","&divide":"÷","&divide;":"÷","&oslash":"ø","&oslash;":"ø","&ugrave":"ù","&ugrave;":"ù","&uacute":"ú","&uacute;":"ú","&ucirc":"û","&ucirc;":"û","&uuml":"ü","&uuml;":"ü","&yacute":"ý","&yacute;":"ý","&thorn":"þ","&thorn;":"þ","&yuml":"ÿ","&yuml;":"ÿ","&quot":'"',"&quot;":'"',"&amp":"&","&amp;":"&","&lt":"<","&lt;":"<","&gt":">","&gt;":">","&OElig;":"Œ","&oelig;":"œ","&Scaron;":"Š","&scaron;":"š","&Yuml;":"Ÿ","&circ;":"ˆ","&tilde;":"˜","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&zwnj;":"‌","&zwj;":"‍","&lrm;":"‎","&rlm;":"‏","&ndash;":"–","&mdash;":"—","&lsquo;":"‘","&rsquo;":"’","&sbquo;":"‚","&ldquo;":"“","&rdquo;":"”","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&permil;":"‰","&lsaquo;":"‹","&rsaquo;":"›","&euro;":"€","&fnof;":"ƒ","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigmaf;":"ς","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&thetasym;":"ϑ","&upsih;":"ϒ","&piv;":"ϖ","&bull;":"•","&hellip;":"…","&prime;":"′","&Prime;":"″","&oline;":"‾","&frasl;":"⁄","&weierp;":"℘","&image;":"ℑ","&real;":"ℜ","&trade;":"™","&alefsym;":"ℵ","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lArr;":"⇐","&uArr;":"⇑","&rArr;":"⇒","&dArr;":"⇓","&hArr;":"⇔","&forall;":"∀","&part;":"∂","&exist;":"∃","&empty;":"∅","&nabla;":"∇","&isin;":"∈","&notin;":"∉","&ni;":"∋","&prod;":"∏","&sum;":"∑","&minus;":"−","&lowast;":"∗","&radic;":"√","&prop;":"∝","&infin;":"∞","&ang;":"∠","&and;":"∧","&or;":"∨","&cap;":"∩","&cup;":"∪","&int;":"∫","&there4;":"∴","&sim;":"∼","&cong;":"≅","&asymp;":"≈","&ne;":"≠","&equiv;":"≡","&le;":"≤","&ge;":"≥","&sub;":"⊂","&sup;":"⊃","&nsub;":"⊄","&sube;":"⊆","&supe;":"⊇","&oplus;":"⊕","&otimes;":"⊗","&perp;":"⊥","&sdot;":"⋅","&lceil;":"⌈","&rceil;":"⌉","&lfloor;":"⌊","&rfloor;":"⌋","&lang;":"〈","&rang;":"〉","&loz;":"◊","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦"},characters:{"'":"&apos;"," ":"&nbsp;","¡":"&iexcl;","¢":"&cent;","£":"&pound;","¤":"&curren;","¥":"&yen;","¦":"&brvbar;","§":"&sect;","¨":"&uml;","©":"&copy;","ª":"&ordf;","«":"&laquo;","¬":"&not;","­":"&shy;","®":"&reg;","¯":"&macr;","°":"&deg;","±":"&plusmn;","²":"&sup2;","³":"&sup3;","´":"&acute;","µ":"&micro;","¶":"&para;","·":"&middot;","¸":"&cedil;","¹":"&sup1;","º":"&ordm;","»":"&raquo;","¼":"&frac14;","½":"&frac12;","¾":"&frac34;","¿":"&iquest;","À":"&Agrave;","Á":"&Aacute;","Â":"&Acirc;","Ã":"&Atilde;","Ä":"&Auml;","Å":"&Aring;","Æ":"&AElig;","Ç":"&Ccedil;","È":"&Egrave;","É":"&Eacute;","Ê":"&Ecirc;","Ë":"&Euml;","Ì":"&Igrave;","Í":"&Iacute;","Î":"&Icirc;","Ï":"&Iuml;","Ð":"&ETH;","Ñ":"&Ntilde;","Ò":"&Ograve;","Ó":"&Oacute;","Ô":"&Ocirc;","Õ":"&Otilde;","Ö":"&Ouml;","×":"&times;","Ø":"&Oslash;","Ù":"&Ugrave;","Ú":"&Uacute;","Û":"&Ucirc;","Ü":"&Uuml;","Ý":"&Yacute;","Þ":"&THORN;","ß":"&szlig;","à":"&agrave;","á":"&aacute;","â":"&acirc;","ã":"&atilde;","ä":"&auml;","å":"&aring;","æ":"&aelig;","ç":"&ccedil;","è":"&egrave;","é":"&eacute;","ê":"&ecirc;","ë":"&euml;","ì":"&igrave;","í":"&iacute;","î":"&icirc;","ï":"&iuml;","ð":"&eth;","ñ":"&ntilde;","ò":"&ograve;","ó":"&oacute;","ô":"&ocirc;","õ":"&otilde;","ö":"&ouml;","÷":"&divide;","ø":"&oslash;","ù":"&ugrave;","ú":"&uacute;","û":"&ucirc;","ü":"&uuml;","ý":"&yacute;","þ":"&thorn;","ÿ":"&yuml;",'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;","Œ":"&OElig;","œ":"&oelig;","Š":"&Scaron;","š":"&scaron;","Ÿ":"&Yuml;","ˆ":"&circ;","˜":"&tilde;"," ":"&ensp;"," ":"&emsp;"," ":"&thinsp;","‌":"&zwnj;","‍":"&zwj;","‎":"&lrm;","‏":"&rlm;","–":"&ndash;","—":"&mdash;","‘":"&lsquo;","’":"&rsquo;","‚":"&sbquo;","“":"&ldquo;","”":"&rdquo;","„":"&bdquo;","†":"&dagger;","‡":"&Dagger;","‰":"&permil;","‹":"&lsaquo;","›":"&rsaquo;","€":"&euro;","ƒ":"&fnof;","Α":"&Alpha;","Β":"&Beta;","Γ":"&Gamma;","Δ":"&Delta;","Ε":"&Epsilon;","Ζ":"&Zeta;","Η":"&Eta;","Θ":"&Theta;","Ι":"&Iota;","Κ":"&Kappa;","Λ":"&Lambda;","Μ":"&Mu;","Ν":"&Nu;","Ξ":"&Xi;","Ο":"&Omicron;","Π":"&Pi;","Ρ":"&Rho;","Σ":"&Sigma;","Τ":"&Tau;","Υ":"&Upsilon;","Φ":"&Phi;","Χ":"&Chi;","Ψ":"&Psi;","Ω":"&Omega;","α":"&alpha;","β":"&beta;","γ":"&gamma;","δ":"&delta;","ε":"&epsilon;","ζ":"&zeta;","η":"&eta;","θ":"&theta;","ι":"&iota;","κ":"&kappa;","λ":"&lambda;","μ":"&mu;","ν":"&nu;","ξ":"&xi;","ο":"&omicron;","π":"&pi;","ρ":"&rho;","ς":"&sigmaf;","σ":"&sigma;","τ":"&tau;","υ":"&upsilon;","φ":"&phi;","χ":"&chi;","ψ":"&psi;","ω":"&omega;","ϑ":"&thetasym;","ϒ":"&upsih;","ϖ":"&piv;","•":"&bull;","…":"&hellip;","′":"&prime;","″":"&Prime;","‾":"&oline;","⁄":"&frasl;","℘":"&weierp;","ℑ":"&image;","ℜ":"&real;","™":"&trade;","ℵ":"&alefsym;","←":"&larr;","↑":"&uarr;","→":"&rarr;","↓":"&darr;","↔":"&harr;","↵":"&crarr;","⇐":"&lArr;","⇑":"&uArr;","⇒":"&rArr;","⇓":"&dArr;","⇔":"&hArr;","∀":"&forall;","∂":"&part;","∃":"&exist;","∅":"&empty;","∇":"&nabla;","∈":"&isin;","∉":"&notin;","∋":"&ni;","∏":"&prod;","∑":"&sum;","−":"&minus;","∗":"&lowast;","√":"&radic;","∝":"&prop;","∞":"&infin;","∠":"&ang;","∧":"&and;","∨":"&or;","∩":"&cap;","∪":"&cup;","∫":"&int;","∴":"&there4;","∼":"&sim;","≅":"&cong;","≈":"&asymp;","≠":"&ne;","≡":"&equiv;","≤":"&le;","≥":"&ge;","⊂":"&sub;","⊃":"&sup;","⊄":"&nsub;","⊆":"&sube;","⊇":"&supe;","⊕":"&oplus;","⊗":"&otimes;","⊥":"&perp;","⋅":"&sdot;","⌈":"&lceil;","⌉":"&rceil;","⌊":"&lfloor;","⌋":"&rfloor;","〈":"&lang;","〉":"&rang;","◊":"&loz;","♠":"&spades;","♣":"&clubs;","♥":"&hearts;","♦":"&diams;"}},html5:{entities:{"&AElig":"Æ","&AElig;":"Æ","&AMP":"&","&AMP;":"&","&Aacute":"Á","&Aacute;":"Á","&Abreve;":"Ă","&Acirc":"Â","&Acirc;":"Â","&Acy;":"А","&Afr;":"𝔄","&Agrave":"À","&Agrave;":"À","&Alpha;":"Α","&Amacr;":"Ā","&And;":"⩓","&Aogon;":"Ą","&Aopf;":"𝔸","&ApplyFunction;":"⁡","&Aring":"Å","&Aring;":"Å","&Ascr;":"𝒜","&Assign;":"≔","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Backslash;":"∖","&Barv;":"⫧","&Barwed;":"⌆","&Bcy;":"Б","&Because;":"∵","&Bernoullis;":"ℬ","&Beta;":"Β","&Bfr;":"𝔅","&Bopf;":"𝔹","&Breve;":"˘","&Bscr;":"ℬ","&Bumpeq;":"≎","&CHcy;":"Ч","&COPY":"©","&COPY;":"©","&Cacute;":"Ć","&Cap;":"⋒","&CapitalDifferentialD;":"ⅅ","&Cayleys;":"ℭ","&Ccaron;":"Č","&Ccedil":"Ç","&Ccedil;":"Ç","&Ccirc;":"Ĉ","&Cconint;":"∰","&Cdot;":"Ċ","&Cedilla;":"¸","&CenterDot;":"·","&Cfr;":"ℭ","&Chi;":"Χ","&CircleDot;":"⊙","&CircleMinus;":"⊖","&CirclePlus;":"⊕","&CircleTimes;":"⊗","&ClockwiseContourIntegral;":"∲","&CloseCurlyDoubleQuote;":"”","&CloseCurlyQuote;":"’","&Colon;":"∷","&Colone;":"⩴","&Congruent;":"≡","&Conint;":"∯","&ContourIntegral;":"∮","&Copf;":"ℂ","&Coproduct;":"∐","&CounterClockwiseContourIntegral;":"∳","&Cross;":"⨯","&Cscr;":"𝒞","&Cup;":"⋓","&CupCap;":"≍","&DD;":"ⅅ","&DDotrahd;":"⤑","&DJcy;":"Ђ","&DScy;":"Ѕ","&DZcy;":"Џ","&Dagger;":"‡","&Darr;":"↡","&Dashv;":"⫤","&Dcaron;":"Ď","&Dcy;":"Д","&Del;":"∇","&Delta;":"Δ","&Dfr;":"𝔇","&DiacriticalAcute;":"´","&DiacriticalDot;":"˙","&DiacriticalDoubleAcute;":"˝","&DiacriticalGrave;":"`","&DiacriticalTilde;":"˜","&Diamond;":"⋄","&DifferentialD;":"ⅆ","&Dopf;":"𝔻","&Dot;":"¨","&DotDot;":"⃜","&DotEqual;":"≐","&DoubleContourIntegral;":"∯","&DoubleDot;":"¨","&DoubleDownArrow;":"⇓","&DoubleLeftArrow;":"⇐","&DoubleLeftRightArrow;":"⇔","&DoubleLeftTee;":"⫤","&DoubleLongLeftArrow;":"⟸","&DoubleLongLeftRightArrow;":"⟺","&DoubleLongRightArrow;":"⟹","&DoubleRightArrow;":"⇒","&DoubleRightTee;":"⊨","&DoubleUpArrow;":"⇑","&DoubleUpDownArrow;":"⇕","&DoubleVerticalBar;":"∥","&DownArrow;":"↓","&DownArrowBar;":"⤓","&DownArrowUpArrow;":"⇵","&DownBreve;":"̑","&DownLeftRightVector;":"⥐","&DownLeftTeeVector;":"⥞","&DownLeftVector;":"↽","&DownLeftVectorBar;":"⥖","&DownRightTeeVector;":"⥟","&DownRightVector;":"⇁","&DownRightVectorBar;":"⥗","&DownTee;":"⊤","&DownTeeArrow;":"↧","&Downarrow;":"⇓","&Dscr;":"𝒟","&Dstrok;":"Đ","&ENG;":"Ŋ","&ETH":"Ð","&ETH;":"Ð","&Eacute":"É","&Eacute;":"É","&Ecaron;":"Ě","&Ecirc":"Ê","&Ecirc;":"Ê","&Ecy;":"Э","&Edot;":"Ė","&Efr;":"𝔈","&Egrave":"È","&Egrave;":"È","&Element;":"∈","&Emacr;":"Ē","&EmptySmallSquare;":"◻","&EmptyVerySmallSquare;":"▫","&Eogon;":"Ę","&Eopf;":"𝔼","&Epsilon;":"Ε","&Equal;":"⩵","&EqualTilde;":"≂","&Equilibrium;":"⇌","&Escr;":"ℰ","&Esim;":"⩳","&Eta;":"Η","&Euml":"Ë","&Euml;":"Ë","&Exists;":"∃","&ExponentialE;":"ⅇ","&Fcy;":"Ф","&Ffr;":"𝔉","&FilledSmallSquare;":"◼","&FilledVerySmallSquare;":"▪","&Fopf;":"𝔽","&ForAll;":"∀","&Fouriertrf;":"ℱ","&Fscr;":"ℱ","&GJcy;":"Ѓ","&GT":">","&GT;":">","&Gamma;":"Γ","&Gammad;":"Ϝ","&Gbreve;":"Ğ","&Gcedil;":"Ģ","&Gcirc;":"Ĝ","&Gcy;":"Г","&Gdot;":"Ġ","&Gfr;":"𝔊","&Gg;":"⋙","&Gopf;":"𝔾","&GreaterEqual;":"≥","&GreaterEqualLess;":"⋛","&GreaterFullEqual;":"≧","&GreaterGreater;":"⪢","&GreaterLess;":"≷","&GreaterSlantEqual;":"⩾","&GreaterTilde;":"≳","&Gscr;":"𝒢","&Gt;":"≫","&HARDcy;":"Ъ","&Hacek;":"ˇ","&Hat;":"^","&Hcirc;":"Ĥ","&Hfr;":"ℌ","&HilbertSpace;":"ℋ","&Hopf;":"ℍ","&HorizontalLine;":"─","&Hscr;":"ℋ","&Hstrok;":"Ħ","&HumpDownHump;":"≎","&HumpEqual;":"≏","&IEcy;":"Е","&IJlig;":"Ĳ","&IOcy;":"Ё","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Icy;":"И","&Idot;":"İ","&Ifr;":"ℑ","&Igrave":"Ì","&Igrave;":"Ì","&Im;":"ℑ","&Imacr;":"Ī","&ImaginaryI;":"ⅈ","&Implies;":"⇒","&Int;":"∬","&Integral;":"∫","&Intersection;":"⋂","&InvisibleComma;":"⁣","&InvisibleTimes;":"⁢","&Iogon;":"Į","&Iopf;":"𝕀","&Iota;":"Ι","&Iscr;":"ℐ","&Itilde;":"Ĩ","&Iukcy;":"І","&Iuml":"Ï","&Iuml;":"Ï","&Jcirc;":"Ĵ","&Jcy;":"Й","&Jfr;":"𝔍","&Jopf;":"𝕁","&Jscr;":"𝒥","&Jsercy;":"Ј","&Jukcy;":"Є","&KHcy;":"Х","&KJcy;":"Ќ","&Kappa;":"Κ","&Kcedil;":"Ķ","&Kcy;":"К","&Kfr;":"𝔎","&Kopf;":"𝕂","&Kscr;":"𝒦","&LJcy;":"Љ","&LT":"<","&LT;":"<","&Lacute;":"Ĺ","&Lambda;":"Λ","&Lang;":"⟪","&Laplacetrf;":"ℒ","&Larr;":"↞","&Lcaron;":"Ľ","&Lcedil;":"Ļ","&Lcy;":"Л","&LeftAngleBracket;":"⟨","&LeftArrow;":"←","&LeftArrowBar;":"⇤","&LeftArrowRightArrow;":"⇆","&LeftCeiling;":"⌈","&LeftDoubleBracket;":"⟦","&LeftDownTeeVector;":"⥡","&LeftDownVector;":"⇃","&LeftDownVectorBar;":"⥙","&LeftFloor;":"⌊","&LeftRightArrow;":"↔","&LeftRightVector;":"⥎","&LeftTee;":"⊣","&LeftTeeArrow;":"↤","&LeftTeeVector;":"⥚","&LeftTriangle;":"⊲","&LeftTriangleBar;":"⧏","&LeftTriangleEqual;":"⊴","&LeftUpDownVector;":"⥑","&LeftUpTeeVector;":"⥠","&LeftUpVector;":"↿","&LeftUpVectorBar;":"⥘","&LeftVector;":"↼","&LeftVectorBar;":"⥒","&Leftarrow;":"⇐","&Leftrightarrow;":"⇔","&LessEqualGreater;":"⋚","&LessFullEqual;":"≦","&LessGreater;":"≶","&LessLess;":"⪡","&LessSlantEqual;":"⩽","&LessTilde;":"≲","&Lfr;":"𝔏","&Ll;":"⋘","&Lleftarrow;":"⇚","&Lmidot;":"Ŀ","&LongLeftArrow;":"⟵","&LongLeftRightArrow;":"⟷","&LongRightArrow;":"⟶","&Longleftarrow;":"⟸","&Longleftrightarrow;":"⟺","&Longrightarrow;":"⟹","&Lopf;":"𝕃","&LowerLeftArrow;":"↙","&LowerRightArrow;":"↘","&Lscr;":"ℒ","&Lsh;":"↰","&Lstrok;":"Ł","&Lt;":"≪","&Map;":"⤅","&Mcy;":"М","&MediumSpace;":" ","&Mellintrf;":"ℳ","&Mfr;":"𝔐","&MinusPlus;":"∓","&Mopf;":"𝕄","&Mscr;":"ℳ","&Mu;":"Μ","&NJcy;":"Њ","&Nacute;":"Ń","&Ncaron;":"Ň","&Ncedil;":"Ņ","&Ncy;":"Н","&NegativeMediumSpace;":"​","&NegativeThickSpace;":"​","&NegativeThinSpace;":"​","&NegativeVeryThinSpace;":"​","&NestedGreaterGreater;":"≫","&NestedLessLess;":"≪","&NewLine;":"\n","&Nfr;":"𝔑","&NoBreak;":"⁠","&NonBreakingSpace;":" ","&Nopf;":"ℕ","&Not;":"⫬","&NotCongruent;":"≢","&NotCupCap;":"≭","&NotDoubleVerticalBar;":"∦","&NotElement;":"∉","&NotEqual;":"≠","&NotEqualTilde;":"≂̸","&NotExists;":"∄","&NotGreater;":"≯","&NotGreaterEqual;":"≱","&NotGreaterFullEqual;":"≧̸","&NotGreaterGreater;":"≫̸","&NotGreaterLess;":"≹","&NotGreaterSlantEqual;":"⩾̸","&NotGreaterTilde;":"≵","&NotHumpDownHump;":"≎̸","&NotHumpEqual;":"≏̸","&NotLeftTriangle;":"⋪","&NotLeftTriangleBar;":"⧏̸","&NotLeftTriangleEqual;":"⋬","&NotLess;":"≮","&NotLessEqual;":"≰","&NotLessGreater;":"≸","&NotLessLess;":"≪̸","&NotLessSlantEqual;":"⩽̸","&NotLessTilde;":"≴","&NotNestedGreaterGreater;":"⪢̸","&NotNestedLessLess;":"⪡̸","&NotPrecedes;":"⊀","&NotPrecedesEqual;":"⪯̸","&NotPrecedesSlantEqual;":"⋠","&NotReverseElement;":"∌","&NotRightTriangle;":"⋫","&NotRightTriangleBar;":"⧐̸","&NotRightTriangleEqual;":"⋭","&NotSquareSubset;":"⊏̸","&NotSquareSubsetEqual;":"⋢","&NotSquareSuperset;":"⊐̸","&NotSquareSupersetEqual;":"⋣","&NotSubset;":"⊂⃒","&NotSubsetEqual;":"⊈","&NotSucceeds;":"⊁","&NotSucceedsEqual;":"⪰̸","&NotSucceedsSlantEqual;":"⋡","&NotSucceedsTilde;":"≿̸","&NotSuperset;":"⊃⃒","&NotSupersetEqual;":"⊉","&NotTilde;":"≁","&NotTildeEqual;":"≄","&NotTildeFullEqual;":"≇","&NotTildeTilde;":"≉","&NotVerticalBar;":"∤","&Nscr;":"𝒩","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Nu;":"Ν","&OElig;":"Œ","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Ocy;":"О","&Odblac;":"Ő","&Ofr;":"𝔒","&Ograve":"Ò","&Ograve;":"Ò","&Omacr;":"Ō","&Omega;":"Ω","&Omicron;":"Ο","&Oopf;":"𝕆","&OpenCurlyDoubleQuote;":"“","&OpenCurlyQuote;":"‘","&Or;":"⩔","&Oscr;":"𝒪","&Oslash":"Ø","&Oslash;":"Ø","&Otilde":"Õ","&Otilde;":"Õ","&Otimes;":"⨷","&Ouml":"Ö","&Ouml;":"Ö","&OverBar;":"‾","&OverBrace;":"⏞","&OverBracket;":"⎴","&OverParenthesis;":"⏜","&PartialD;":"∂","&Pcy;":"П","&Pfr;":"𝔓","&Phi;":"Φ","&Pi;":"Π","&PlusMinus;":"±","&Poincareplane;":"ℌ","&Popf;":"ℙ","&Pr;":"⪻","&Precedes;":"≺","&PrecedesEqual;":"⪯","&PrecedesSlantEqual;":"≼","&PrecedesTilde;":"≾","&Prime;":"″","&Product;":"∏","&Proportion;":"∷","&Proportional;":"∝","&Pscr;":"𝒫","&Psi;":"Ψ","&QUOT":'"',"&QUOT;":'"',"&Qfr;":"𝔔","&Qopf;":"ℚ","&Qscr;":"𝒬","&RBarr;":"⤐","&REG":"®","&REG;":"®","&Racute;":"Ŕ","&Rang;":"⟫","&Rarr;":"↠","&Rarrtl;":"⤖","&Rcaron;":"Ř","&Rcedil;":"Ŗ","&Rcy;":"Р","&Re;":"ℜ","&ReverseElement;":"∋","&ReverseEquilibrium;":"⇋","&ReverseUpEquilibrium;":"⥯","&Rfr;":"ℜ","&Rho;":"Ρ","&RightAngleBracket;":"⟩","&RightArrow;":"→","&RightArrowBar;":"⇥","&RightArrowLeftArrow;":"⇄","&RightCeiling;":"⌉","&RightDoubleBracket;":"⟧","&RightDownTeeVector;":"⥝","&RightDownVector;":"⇂","&RightDownVectorBar;":"⥕","&RightFloor;":"⌋","&RightTee;":"⊢","&RightTeeArrow;":"↦","&RightTeeVector;":"⥛","&RightTriangle;":"⊳","&RightTriangleBar;":"⧐","&RightTriangleEqual;":"⊵","&RightUpDownVector;":"⥏","&RightUpTeeVector;":"⥜","&RightUpVector;":"↾","&RightUpVectorBar;":"⥔","&RightVector;":"⇀","&RightVectorBar;":"⥓","&Rightarrow;":"⇒","&Ropf;":"ℝ","&RoundImplies;":"⥰","&Rrightarrow;":"⇛","&Rscr;":"ℛ","&Rsh;":"↱","&RuleDelayed;":"⧴","&SHCHcy;":"Щ","&SHcy;":"Ш","&SOFTcy;":"Ь","&Sacute;":"Ś","&Sc;":"⪼","&Scaron;":"Š","&Scedil;":"Ş","&Scirc;":"Ŝ","&Scy;":"С","&Sfr;":"𝔖","&ShortDownArrow;":"↓","&ShortLeftArrow;":"←","&ShortRightArrow;":"→","&ShortUpArrow;":"↑","&Sigma;":"Σ","&SmallCircle;":"∘","&Sopf;":"𝕊","&Sqrt;":"√","&Square;":"□","&SquareIntersection;":"⊓","&SquareSubset;":"⊏","&SquareSubsetEqual;":"⊑","&SquareSuperset;":"⊐","&SquareSupersetEqual;":"⊒","&SquareUnion;":"⊔","&Sscr;":"𝒮","&Star;":"⋆","&Sub;":"⋐","&Subset;":"⋐","&SubsetEqual;":"⊆","&Succeeds;":"≻","&SucceedsEqual;":"⪰","&SucceedsSlantEqual;":"≽","&SucceedsTilde;":"≿","&SuchThat;":"∋","&Sum;":"∑","&Sup;":"⋑","&Superset;":"⊃","&SupersetEqual;":"⊇","&Supset;":"⋑","&THORN":"Þ","&THORN;":"Þ","&TRADE;":"™","&TSHcy;":"Ћ","&TScy;":"Ц","&Tab;":"\t","&Tau;":"Τ","&Tcaron;":"Ť","&Tcedil;":"Ţ","&Tcy;":"Т","&Tfr;":"𝔗","&Therefore;":"∴","&Theta;":"Θ","&ThickSpace;":"  ","&ThinSpace;":" ","&Tilde;":"∼","&TildeEqual;":"≃","&TildeFullEqual;":"≅","&TildeTilde;":"≈","&Topf;":"𝕋","&TripleDot;":"⃛","&Tscr;":"𝒯","&Tstrok;":"Ŧ","&Uacute":"Ú","&Uacute;":"Ú","&Uarr;":"↟","&Uarrocir;":"⥉","&Ubrcy;":"Ў","&Ubreve;":"Ŭ","&Ucirc":"Û","&Ucirc;":"Û","&Ucy;":"У","&Udblac;":"Ű","&Ufr;":"𝔘","&Ugrave":"Ù","&Ugrave;":"Ù","&Umacr;":"Ū","&UnderBar;":"_","&UnderBrace;":"⏟","&UnderBracket;":"⎵","&UnderParenthesis;":"⏝","&Union;":"⋃","&UnionPlus;":"⊎","&Uogon;":"Ų","&Uopf;":"𝕌","&UpArrow;":"↑","&UpArrowBar;":"⤒","&UpArrowDownArrow;":"⇅","&UpDownArrow;":"↕","&UpEquilibrium;":"⥮","&UpTee;":"⊥","&UpTeeArrow;":"↥","&Uparrow;":"⇑","&Updownarrow;":"⇕","&UpperLeftArrow;":"↖","&UpperRightArrow;":"↗","&Upsi;":"ϒ","&Upsilon;":"Υ","&Uring;":"Ů","&Uscr;":"𝒰","&Utilde;":"Ũ","&Uuml":"Ü","&Uuml;":"Ü","&VDash;":"⊫","&Vbar;":"⫫","&Vcy;":"В","&Vdash;":"⊩","&Vdashl;":"⫦","&Vee;":"⋁","&Verbar;":"‖","&Vert;":"‖","&VerticalBar;":"∣","&VerticalLine;":"|","&VerticalSeparator;":"❘","&VerticalTilde;":"≀","&VeryThinSpace;":" ","&Vfr;":"𝔙","&Vopf;":"𝕍","&Vscr;":"𝒱","&Vvdash;":"⊪","&Wcirc;":"Ŵ","&Wedge;":"⋀","&Wfr;":"𝔚","&Wopf;":"𝕎","&Wscr;":"𝒲","&Xfr;":"𝔛","&Xi;":"Ξ","&Xopf;":"𝕏","&Xscr;":"𝒳","&YAcy;":"Я","&YIcy;":"Ї","&YUcy;":"Ю","&Yacute":"Ý","&Yacute;":"Ý","&Ycirc;":"Ŷ","&Ycy;":"Ы","&Yfr;":"𝔜","&Yopf;":"𝕐","&Yscr;":"𝒴","&Yuml;":"Ÿ","&ZHcy;":"Ж","&Zacute;":"Ź","&Zcaron;":"Ž","&Zcy;":"З","&Zdot;":"Ż","&ZeroWidthSpace;":"​","&Zeta;":"Ζ","&Zfr;":"ℨ","&Zopf;":"ℤ","&Zscr;":"𝒵","&aacute":"á","&aacute;":"á","&abreve;":"ă","&ac;":"∾","&acE;":"∾̳","&acd;":"∿","&acirc":"â","&acirc;":"â","&acute":"´","&acute;":"´","&acy;":"а","&aelig":"æ","&aelig;":"æ","&af;":"⁡","&afr;":"𝔞","&agrave":"à","&agrave;":"à","&alefsym;":"ℵ","&aleph;":"ℵ","&alpha;":"α","&amacr;":"ā","&amalg;":"⨿","&amp":"&","&amp;":"&","&and;":"∧","&andand;":"⩕","&andd;":"⩜","&andslope;":"⩘","&andv;":"⩚","&ang;":"∠","&ange;":"⦤","&angle;":"∠","&angmsd;":"∡","&angmsdaa;":"⦨","&angmsdab;":"⦩","&angmsdac;":"⦪","&angmsdad;":"⦫","&angmsdae;":"⦬","&angmsdaf;":"⦭","&angmsdag;":"⦮","&angmsdah;":"⦯","&angrt;":"∟","&angrtvb;":"⊾","&angrtvbd;":"⦝","&angsph;":"∢","&angst;":"Å","&angzarr;":"⍼","&aogon;":"ą","&aopf;":"𝕒","&ap;":"≈","&apE;":"⩰","&apacir;":"⩯","&ape;":"≊","&apid;":"≋","&apos;":"'","&approx;":"≈","&approxeq;":"≊","&aring":"å","&aring;":"å","&ascr;":"𝒶","&ast;":"*","&asymp;":"≈","&asympeq;":"≍","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&awconint;":"∳","&awint;":"⨑","&bNot;":"⫭","&backcong;":"≌","&backepsilon;":"϶","&backprime;":"‵","&backsim;":"∽","&backsimeq;":"⋍","&barvee;":"⊽","&barwed;":"⌅","&barwedge;":"⌅","&bbrk;":"⎵","&bbrktbrk;":"⎶","&bcong;":"≌","&bcy;":"б","&bdquo;":"„","&becaus;":"∵","&because;":"∵","&bemptyv;":"⦰","&bepsi;":"϶","&bernou;":"ℬ","&beta;":"β","&beth;":"ℶ","&between;":"≬","&bfr;":"𝔟","&bigcap;":"⋂","&bigcirc;":"◯","&bigcup;":"⋃","&bigodot;":"⨀","&bigoplus;":"⨁","&bigotimes;":"⨂","&bigsqcup;":"⨆","&bigstar;":"★","&bigtriangledown;":"▽","&bigtriangleup;":"△","&biguplus;":"⨄","&bigvee;":"⋁","&bigwedge;":"⋀","&bkarow;":"⤍","&blacklozenge;":"⧫","&blacksquare;":"▪","&blacktriangle;":"▴","&blacktriangledown;":"▾","&blacktriangleleft;":"◂","&blacktriangleright;":"▸","&blank;":"␣","&blk12;":"▒","&blk14;":"░","&blk34;":"▓","&block;":"█","&bne;":"=⃥","&bnequiv;":"≡⃥","&bnot;":"⌐","&bopf;":"𝕓","&bot;":"⊥","&bottom;":"⊥","&bowtie;":"⋈","&boxDL;":"╗","&boxDR;":"╔","&boxDl;":"╖","&boxDr;":"╓","&boxH;":"═","&boxHD;":"╦","&boxHU;":"╩","&boxHd;":"╤","&boxHu;":"╧","&boxUL;":"╝","&boxUR;":"╚","&boxUl;":"╜","&boxUr;":"╙","&boxV;":"║","&boxVH;":"╬","&boxVL;":"╣","&boxVR;":"╠","&boxVh;":"╫","&boxVl;":"╢","&boxVr;":"╟","&boxbox;":"⧉","&boxdL;":"╕","&boxdR;":"╒","&boxdl;":"┐","&boxdr;":"┌","&boxh;":"─","&boxhD;":"╥","&boxhU;":"╨","&boxhd;":"┬","&boxhu;":"┴","&boxminus;":"⊟","&boxplus;":"⊞","&boxtimes;":"⊠","&boxuL;":"╛","&boxuR;":"╘","&boxul;":"┘","&boxur;":"└","&boxv;":"│","&boxvH;":"╪","&boxvL;":"╡","&boxvR;":"╞","&boxvh;":"┼","&boxvl;":"┤","&boxvr;":"├","&bprime;":"‵","&breve;":"˘","&brvbar":"¦","&brvbar;":"¦","&bscr;":"𝒷","&bsemi;":"⁏","&bsim;":"∽","&bsime;":"⋍","&bsol;":"\\","&bsolb;":"⧅","&bsolhsub;":"⟈","&bull;":"•","&bullet;":"•","&bump;":"≎","&bumpE;":"⪮","&bumpe;":"≏","&bumpeq;":"≏","&cacute;":"ć","&cap;":"∩","&capand;":"⩄","&capbrcup;":"⩉","&capcap;":"⩋","&capcup;":"⩇","&capdot;":"⩀","&caps;":"∩︀","&caret;":"⁁","&caron;":"ˇ","&ccaps;":"⩍","&ccaron;":"č","&ccedil":"ç","&ccedil;":"ç","&ccirc;":"ĉ","&ccups;":"⩌","&ccupssm;":"⩐","&cdot;":"ċ","&cedil":"¸","&cedil;":"¸","&cemptyv;":"⦲","&cent":"¢","&cent;":"¢","&centerdot;":"·","&cfr;":"𝔠","&chcy;":"ч","&check;":"✓","&checkmark;":"✓","&chi;":"χ","&cir;":"○","&cirE;":"⧃","&circ;":"ˆ","&circeq;":"≗","&circlearrowleft;":"↺","&circlearrowright;":"↻","&circledR;":"®","&circledS;":"Ⓢ","&circledast;":"⊛","&circledcirc;":"⊚","&circleddash;":"⊝","&cire;":"≗","&cirfnint;":"⨐","&cirmid;":"⫯","&cirscir;":"⧂","&clubs;":"♣","&clubsuit;":"♣","&colon;":":","&colone;":"≔","&coloneq;":"≔","&comma;":",","&commat;":"@","&comp;":"∁","&compfn;":"∘","&complement;":"∁","&complexes;":"ℂ","&cong;":"≅","&congdot;":"⩭","&conint;":"∮","&copf;":"𝕔","&coprod;":"∐","&copy":"©","&copy;":"©","&copysr;":"℗","&crarr;":"↵","&cross;":"✗","&cscr;":"𝒸","&csub;":"⫏","&csube;":"⫑","&csup;":"⫐","&csupe;":"⫒","&ctdot;":"⋯","&cudarrl;":"⤸","&cudarrr;":"⤵","&cuepr;":"⋞","&cuesc;":"⋟","&cularr;":"↶","&cularrp;":"⤽","&cup;":"∪","&cupbrcap;":"⩈","&cupcap;":"⩆","&cupcup;":"⩊","&cupdot;":"⊍","&cupor;":"⩅","&cups;":"∪︀","&curarr;":"↷","&curarrm;":"⤼","&curlyeqprec;":"⋞","&curlyeqsucc;":"⋟","&curlyvee;":"⋎","&curlywedge;":"⋏","&curren":"¤","&curren;":"¤","&curvearrowleft;":"↶","&curvearrowright;":"↷","&cuvee;":"⋎","&cuwed;":"⋏","&cwconint;":"∲","&cwint;":"∱","&cylcty;":"⌭","&dArr;":"⇓","&dHar;":"⥥","&dagger;":"†","&daleth;":"ℸ","&darr;":"↓","&dash;":"‐","&dashv;":"⊣","&dbkarow;":"⤏","&dblac;":"˝","&dcaron;":"ď","&dcy;":"д","&dd;":"ⅆ","&ddagger;":"‡","&ddarr;":"⇊","&ddotseq;":"⩷","&deg":"°","&deg;":"°","&delta;":"δ","&demptyv;":"⦱","&dfisht;":"⥿","&dfr;":"𝔡","&dharl;":"⇃","&dharr;":"⇂","&diam;":"⋄","&diamond;":"⋄","&diamondsuit;":"♦","&diams;":"♦","&die;":"¨","&digamma;":"ϝ","&disin;":"⋲","&div;":"÷","&divide":"÷","&divide;":"÷","&divideontimes;":"⋇","&divonx;":"⋇","&djcy;":"ђ","&dlcorn;":"⌞","&dlcrop;":"⌍","&dollar;":"$","&dopf;":"𝕕","&dot;":"˙","&doteq;":"≐","&doteqdot;":"≑","&dotminus;":"∸","&dotplus;":"∔","&dotsquare;":"⊡","&doublebarwedge;":"⌆","&downarrow;":"↓","&downdownarrows;":"⇊","&downharpoonleft;":"⇃","&downharpoonright;":"⇂","&drbkarow;":"⤐","&drcorn;":"⌟","&drcrop;":"⌌","&dscr;":"𝒹","&dscy;":"ѕ","&dsol;":"⧶","&dstrok;":"đ","&dtdot;":"⋱","&dtri;":"▿","&dtrif;":"▾","&duarr;":"⇵","&duhar;":"⥯","&dwangle;":"⦦","&dzcy;":"џ","&dzigrarr;":"⟿","&eDDot;":"⩷","&eDot;":"≑","&eacute":"é","&eacute;":"é","&easter;":"⩮","&ecaron;":"ě","&ecir;":"≖","&ecirc":"ê","&ecirc;":"ê","&ecolon;":"≕","&ecy;":"э","&edot;":"ė","&ee;":"ⅇ","&efDot;":"≒","&efr;":"𝔢","&eg;":"⪚","&egrave":"è","&egrave;":"è","&egs;":"⪖","&egsdot;":"⪘","&el;":"⪙","&elinters;":"⏧","&ell;":"ℓ","&els;":"⪕","&elsdot;":"⪗","&emacr;":"ē","&empty;":"∅","&emptyset;":"∅","&emptyv;":"∅","&emsp13;":" ","&emsp14;":" ","&emsp;":" ","&eng;":"ŋ","&ensp;":" ","&eogon;":"ę","&eopf;":"𝕖","&epar;":"⋕","&eparsl;":"⧣","&eplus;":"⩱","&epsi;":"ε","&epsilon;":"ε","&epsiv;":"ϵ","&eqcirc;":"≖","&eqcolon;":"≕","&eqsim;":"≂","&eqslantgtr;":"⪖","&eqslantless;":"⪕","&equals;":"=","&equest;":"≟","&equiv;":"≡","&equivDD;":"⩸","&eqvparsl;":"⧥","&erDot;":"≓","&erarr;":"⥱","&escr;":"ℯ","&esdot;":"≐","&esim;":"≂","&eta;":"η","&eth":"ð","&eth;":"ð","&euml":"ë","&euml;":"ë","&euro;":"€","&excl;":"!","&exist;":"∃","&expectation;":"ℰ","&exponentiale;":"ⅇ","&fallingdotseq;":"≒","&fcy;":"ф","&female;":"♀","&ffilig;":"ﬃ","&fflig;":"ﬀ","&ffllig;":"ﬄ","&ffr;":"𝔣","&filig;":"ﬁ","&fjlig;":"fj","&flat;":"♭","&fllig;":"ﬂ","&fltns;":"▱","&fnof;":"ƒ","&fopf;":"𝕗","&forall;":"∀","&fork;":"⋔","&forkv;":"⫙","&fpartint;":"⨍","&frac12":"½","&frac12;":"½","&frac13;":"⅓","&frac14":"¼","&frac14;":"¼","&frac15;":"⅕","&frac16;":"⅙","&frac18;":"⅛","&frac23;":"⅔","&frac25;":"⅖","&frac34":"¾","&frac34;":"¾","&frac35;":"⅗","&frac38;":"⅜","&frac45;":"⅘","&frac56;":"⅚","&frac58;":"⅝","&frac78;":"⅞","&frasl;":"⁄","&frown;":"⌢","&fscr;":"𝒻","&gE;":"≧","&gEl;":"⪌","&gacute;":"ǵ","&gamma;":"γ","&gammad;":"ϝ","&gap;":"⪆","&gbreve;":"ğ","&gcirc;":"ĝ","&gcy;":"г","&gdot;":"ġ","&ge;":"≥","&gel;":"⋛","&geq;":"≥","&geqq;":"≧","&geqslant;":"⩾","&ges;":"⩾","&gescc;":"⪩","&gesdot;":"⪀","&gesdoto;":"⪂","&gesdotol;":"⪄","&gesl;":"⋛︀","&gesles;":"⪔","&gfr;":"𝔤","&gg;":"≫","&ggg;":"⋙","&gimel;":"ℷ","&gjcy;":"ѓ","&gl;":"≷","&glE;":"⪒","&gla;":"⪥","&glj;":"⪤","&gnE;":"≩","&gnap;":"⪊","&gnapprox;":"⪊","&gne;":"⪈","&gneq;":"⪈","&gneqq;":"≩","&gnsim;":"⋧","&gopf;":"𝕘","&grave;":"`","&gscr;":"ℊ","&gsim;":"≳","&gsime;":"⪎","&gsiml;":"⪐","&gt":">","&gt;":">","&gtcc;":"⪧","&gtcir;":"⩺","&gtdot;":"⋗","&gtlPar;":"⦕","&gtquest;":"⩼","&gtrapprox;":"⪆","&gtrarr;":"⥸","&gtrdot;":"⋗","&gtreqless;":"⋛","&gtreqqless;":"⪌","&gtrless;":"≷","&gtrsim;":"≳","&gvertneqq;":"≩︀","&gvnE;":"≩︀","&hArr;":"⇔","&hairsp;":" ","&half;":"½","&hamilt;":"ℋ","&hardcy;":"ъ","&harr;":"↔","&harrcir;":"⥈","&harrw;":"↭","&hbar;":"ℏ","&hcirc;":"ĥ","&hearts;":"♥","&heartsuit;":"♥","&hellip;":"…","&hercon;":"⊹","&hfr;":"𝔥","&hksearow;":"⤥","&hkswarow;":"⤦","&hoarr;":"⇿","&homtht;":"∻","&hookleftarrow;":"↩","&hookrightarrow;":"↪","&hopf;":"𝕙","&horbar;":"―","&hscr;":"𝒽","&hslash;":"ℏ","&hstrok;":"ħ","&hybull;":"⁃","&hyphen;":"‐","&iacute":"í","&iacute;":"í","&ic;":"⁣","&icirc":"î","&icirc;":"î","&icy;":"и","&iecy;":"е","&iexcl":"¡","&iexcl;":"¡","&iff;":"⇔","&ifr;":"𝔦","&igrave":"ì","&igrave;":"ì","&ii;":"ⅈ","&iiiint;":"⨌","&iiint;":"∭","&iinfin;":"⧜","&iiota;":"℩","&ijlig;":"ĳ","&imacr;":"ī","&image;":"ℑ","&imagline;":"ℐ","&imagpart;":"ℑ","&imath;":"ı","&imof;":"⊷","&imped;":"Ƶ","&in;":"∈","&incare;":"℅","&infin;":"∞","&infintie;":"⧝","&inodot;":"ı","&int;":"∫","&intcal;":"⊺","&integers;":"ℤ","&intercal;":"⊺","&intlarhk;":"⨗","&intprod;":"⨼","&iocy;":"ё","&iogon;":"į","&iopf;":"𝕚","&iota;":"ι","&iprod;":"⨼","&iquest":"¿","&iquest;":"¿","&iscr;":"𝒾","&isin;":"∈","&isinE;":"⋹","&isindot;":"⋵","&isins;":"⋴","&isinsv;":"⋳","&isinv;":"∈","&it;":"⁢","&itilde;":"ĩ","&iukcy;":"і","&iuml":"ï","&iuml;":"ï","&jcirc;":"ĵ","&jcy;":"й","&jfr;":"𝔧","&jmath;":"ȷ","&jopf;":"𝕛","&jscr;":"𝒿","&jsercy;":"ј","&jukcy;":"є","&kappa;":"κ","&kappav;":"ϰ","&kcedil;":"ķ","&kcy;":"к","&kfr;":"𝔨","&kgreen;":"ĸ","&khcy;":"х","&kjcy;":"ќ","&kopf;":"𝕜","&kscr;":"𝓀","&lAarr;":"⇚","&lArr;":"⇐","&lAtail;":"⤛","&lBarr;":"⤎","&lE;":"≦","&lEg;":"⪋","&lHar;":"⥢","&lacute;":"ĺ","&laemptyv;":"⦴","&lagran;":"ℒ","&lambda;":"λ","&lang;":"⟨","&langd;":"⦑","&langle;":"⟨","&lap;":"⪅","&laquo":"«","&laquo;":"«","&larr;":"←","&larrb;":"⇤","&larrbfs;":"⤟","&larrfs;":"⤝","&larrhk;":"↩","&larrlp;":"↫","&larrpl;":"⤹","&larrsim;":"⥳","&larrtl;":"↢","&lat;":"⪫","&latail;":"⤙","&late;":"⪭","&lates;":"⪭︀","&lbarr;":"⤌","&lbbrk;":"❲","&lbrace;":"{","&lbrack;":"[","&lbrke;":"⦋","&lbrksld;":"⦏","&lbrkslu;":"⦍","&lcaron;":"ľ","&lcedil;":"ļ","&lceil;":"⌈","&lcub;":"{","&lcy;":"л","&ldca;":"⤶","&ldquo;":"“","&ldquor;":"„","&ldrdhar;":"⥧","&ldrushar;":"⥋","&ldsh;":"↲","&le;":"≤","&leftarrow;":"←","&leftarrowtail;":"↢","&leftharpoondown;":"↽","&leftharpoonup;":"↼","&leftleftarrows;":"⇇","&leftrightarrow;":"↔","&leftrightarrows;":"⇆","&leftrightharpoons;":"⇋","&leftrightsquigarrow;":"↭","&leftthreetimes;":"⋋","&leg;":"⋚","&leq;":"≤","&leqq;":"≦","&leqslant;":"⩽","&les;":"⩽","&lescc;":"⪨","&lesdot;":"⩿","&lesdoto;":"⪁","&lesdotor;":"⪃","&lesg;":"⋚︀","&lesges;":"⪓","&lessapprox;":"⪅","&lessdot;":"⋖","&lesseqgtr;":"⋚","&lesseqqgtr;":"⪋","&lessgtr;":"≶","&lesssim;":"≲","&lfisht;":"⥼","&lfloor;":"⌊","&lfr;":"𝔩","&lg;":"≶","&lgE;":"⪑","&lhard;":"↽","&lharu;":"↼","&lharul;":"⥪","&lhblk;":"▄","&ljcy;":"љ","&ll;":"≪","&llarr;":"⇇","&llcorner;":"⌞","&llhard;":"⥫","&lltri;":"◺","&lmidot;":"ŀ","&lmoust;":"⎰","&lmoustache;":"⎰","&lnE;":"≨","&lnap;":"⪉","&lnapprox;":"⪉","&lne;":"⪇","&lneq;":"⪇","&lneqq;":"≨","&lnsim;":"⋦","&loang;":"⟬","&loarr;":"⇽","&lobrk;":"⟦","&longleftarrow;":"⟵","&longleftrightarrow;":"⟷","&longmapsto;":"⟼","&longrightarrow;":"⟶","&looparrowleft;":"↫","&looparrowright;":"↬","&lopar;":"⦅","&lopf;":"𝕝","&loplus;":"⨭","&lotimes;":"⨴","&lowast;":"∗","&lowbar;":"_","&loz;":"◊","&lozenge;":"◊","&lozf;":"⧫","&lpar;":"(","&lparlt;":"⦓","&lrarr;":"⇆","&lrcorner;":"⌟","&lrhar;":"⇋","&lrhard;":"⥭","&lrm;":"‎","&lrtri;":"⊿","&lsaquo;":"‹","&lscr;":"𝓁","&lsh;":"↰","&lsim;":"≲","&lsime;":"⪍","&lsimg;":"⪏","&lsqb;":"[","&lsquo;":"‘","&lsquor;":"‚","&lstrok;":"ł","&lt":"<","&lt;":"<","&ltcc;":"⪦","&ltcir;":"⩹","&ltdot;":"⋖","&lthree;":"⋋","&ltimes;":"⋉","&ltlarr;":"⥶","&ltquest;":"⩻","&ltrPar;":"⦖","&ltri;":"◃","&ltrie;":"⊴","&ltrif;":"◂","&lurdshar;":"⥊","&luruhar;":"⥦","&lvertneqq;":"≨︀","&lvnE;":"≨︀","&mDDot;":"∺","&macr":"¯","&macr;":"¯","&male;":"♂","&malt;":"✠","&maltese;":"✠","&map;":"↦","&mapsto;":"↦","&mapstodown;":"↧","&mapstoleft;":"↤","&mapstoup;":"↥","&marker;":"▮","&mcomma;":"⨩","&mcy;":"м","&mdash;":"—","&measuredangle;":"∡","&mfr;":"𝔪","&mho;":"℧","&micro":"µ","&micro;":"µ","&mid;":"∣","&midast;":"*","&midcir;":"⫰","&middot":"·","&middot;":"·","&minus;":"−","&minusb;":"⊟","&minusd;":"∸","&minusdu;":"⨪","&mlcp;":"⫛","&mldr;":"…","&mnplus;":"∓","&models;":"⊧","&mopf;":"𝕞","&mp;":"∓","&mscr;":"𝓂","&mstpos;":"∾","&mu;":"μ","&multimap;":"⊸","&mumap;":"⊸","&nGg;":"⋙̸","&nGt;":"≫⃒","&nGtv;":"≫̸","&nLeftarrow;":"⇍","&nLeftrightarrow;":"⇎","&nLl;":"⋘̸","&nLt;":"≪⃒","&nLtv;":"≪̸","&nRightarrow;":"⇏","&nVDash;":"⊯","&nVdash;":"⊮","&nabla;":"∇","&nacute;":"ń","&nang;":"∠⃒","&nap;":"≉","&napE;":"⩰̸","&napid;":"≋̸","&napos;":"ŉ","&napprox;":"≉","&natur;":"♮","&natural;":"♮","&naturals;":"ℕ","&nbsp":" ","&nbsp;":" ","&nbump;":"≎̸","&nbumpe;":"≏̸","&ncap;":"⩃","&ncaron;":"ň","&ncedil;":"ņ","&ncong;":"≇","&ncongdot;":"⩭̸","&ncup;":"⩂","&ncy;":"н","&ndash;":"–","&ne;":"≠","&neArr;":"⇗","&nearhk;":"⤤","&nearr;":"↗","&nearrow;":"↗","&nedot;":"≐̸","&nequiv;":"≢","&nesear;":"⤨","&nesim;":"≂̸","&nexist;":"∄","&nexists;":"∄","&nfr;":"𝔫","&ngE;":"≧̸","&nge;":"≱","&ngeq;":"≱","&ngeqq;":"≧̸","&ngeqslant;":"⩾̸","&nges;":"⩾̸","&ngsim;":"≵","&ngt;":"≯","&ngtr;":"≯","&nhArr;":"⇎","&nharr;":"↮","&nhpar;":"⫲","&ni;":"∋","&nis;":"⋼","&nisd;":"⋺","&niv;":"∋","&njcy;":"њ","&nlArr;":"⇍","&nlE;":"≦̸","&nlarr;":"↚","&nldr;":"‥","&nle;":"≰","&nleftarrow;":"↚","&nleftrightarrow;":"↮","&nleq;":"≰","&nleqq;":"≦̸","&nleqslant;":"⩽̸","&nles;":"⩽̸","&nless;":"≮","&nlsim;":"≴","&nlt;":"≮","&nltri;":"⋪","&nltrie;":"⋬","&nmid;":"∤","&nopf;":"𝕟","&not":"¬","&not;":"¬","&notin;":"∉","&notinE;":"⋹̸","&notindot;":"⋵̸","&notinva;":"∉","&notinvb;":"⋷","&notinvc;":"⋶","&notni;":"∌","&notniva;":"∌","&notnivb;":"⋾","&notnivc;":"⋽","&npar;":"∦","&nparallel;":"∦","&nparsl;":"⫽⃥","&npart;":"∂̸","&npolint;":"⨔","&npr;":"⊀","&nprcue;":"⋠","&npre;":"⪯̸","&nprec;":"⊀","&npreceq;":"⪯̸","&nrArr;":"⇏","&nrarr;":"↛","&nrarrc;":"⤳̸","&nrarrw;":"↝̸","&nrightarrow;":"↛","&nrtri;":"⋫","&nrtrie;":"⋭","&nsc;":"⊁","&nsccue;":"⋡","&nsce;":"⪰̸","&nscr;":"𝓃","&nshortmid;":"∤","&nshortparallel;":"∦","&nsim;":"≁","&nsime;":"≄","&nsimeq;":"≄","&nsmid;":"∤","&nspar;":"∦","&nsqsube;":"⋢","&nsqsupe;":"⋣","&nsub;":"⊄","&nsubE;":"⫅̸","&nsube;":"⊈","&nsubset;":"⊂⃒","&nsubseteq;":"⊈","&nsubseteqq;":"⫅̸","&nsucc;":"⊁","&nsucceq;":"⪰̸","&nsup;":"⊅","&nsupE;":"⫆̸","&nsupe;":"⊉","&nsupset;":"⊃⃒","&nsupseteq;":"⊉","&nsupseteqq;":"⫆̸","&ntgl;":"≹","&ntilde":"ñ","&ntilde;":"ñ","&ntlg;":"≸","&ntriangleleft;":"⋪","&ntrianglelefteq;":"⋬","&ntriangleright;":"⋫","&ntrianglerighteq;":"⋭","&nu;":"ν","&num;":"#","&numero;":"№","&numsp;":" ","&nvDash;":"⊭","&nvHarr;":"⤄","&nvap;":"≍⃒","&nvdash;":"⊬","&nvge;":"≥⃒","&nvgt;":">⃒","&nvinfin;":"⧞","&nvlArr;":"⤂","&nvle;":"≤⃒","&nvlt;":"<⃒","&nvltrie;":"⊴⃒","&nvrArr;":"⤃","&nvrtrie;":"⊵⃒","&nvsim;":"∼⃒","&nwArr;":"⇖","&nwarhk;":"⤣","&nwarr;":"↖","&nwarrow;":"↖","&nwnear;":"⤧","&oS;":"Ⓢ","&oacute":"ó","&oacute;":"ó","&oast;":"⊛","&ocir;":"⊚","&ocirc":"ô","&ocirc;":"ô","&ocy;":"о","&odash;":"⊝","&odblac;":"ő","&odiv;":"⨸","&odot;":"⊙","&odsold;":"⦼","&oelig;":"œ","&ofcir;":"⦿","&ofr;":"𝔬","&ogon;":"˛","&ograve":"ò","&ograve;":"ò","&ogt;":"⧁","&ohbar;":"⦵","&ohm;":"Ω","&oint;":"∮","&olarr;":"↺","&olcir;":"⦾","&olcross;":"⦻","&oline;":"‾","&olt;":"⧀","&omacr;":"ō","&omega;":"ω","&omicron;":"ο","&omid;":"⦶","&ominus;":"⊖","&oopf;":"𝕠","&opar;":"⦷","&operp;":"⦹","&oplus;":"⊕","&or;":"∨","&orarr;":"↻","&ord;":"⩝","&order;":"ℴ","&orderof;":"ℴ","&ordf":"ª","&ordf;":"ª","&ordm":"º","&ordm;":"º","&origof;":"⊶","&oror;":"⩖","&orslope;":"⩗","&orv;":"⩛","&oscr;":"ℴ","&oslash":"ø","&oslash;":"ø","&osol;":"⊘","&otilde":"õ","&otilde;":"õ","&otimes;":"⊗","&otimesas;":"⨶","&ouml":"ö","&ouml;":"ö","&ovbar;":"⌽","&par;":"∥","&para":"¶","&para;":"¶","&parallel;":"∥","&parsim;":"⫳","&parsl;":"⫽","&part;":"∂","&pcy;":"п","&percnt;":"%","&period;":".","&permil;":"‰","&perp;":"⊥","&pertenk;":"‱","&pfr;":"𝔭","&phi;":"φ","&phiv;":"ϕ","&phmmat;":"ℳ","&phone;":"☎","&pi;":"π","&pitchfork;":"⋔","&piv;":"ϖ","&planck;":"ℏ","&planckh;":"ℎ","&plankv;":"ℏ","&plus;":"+","&plusacir;":"⨣","&plusb;":"⊞","&pluscir;":"⨢","&plusdo;":"∔","&plusdu;":"⨥","&pluse;":"⩲","&plusmn":"±","&plusmn;":"±","&plussim;":"⨦","&plustwo;":"⨧","&pm;":"±","&pointint;":"⨕","&popf;":"𝕡","&pound":"£","&pound;":"£","&pr;":"≺","&prE;":"⪳","&prap;":"⪷","&prcue;":"≼","&pre;":"⪯","&prec;":"≺","&precapprox;":"⪷","&preccurlyeq;":"≼","&preceq;":"⪯","&precnapprox;":"⪹","&precneqq;":"⪵","&precnsim;":"⋨","&precsim;":"≾","&prime;":"′","&primes;":"ℙ","&prnE;":"⪵","&prnap;":"⪹","&prnsim;":"⋨","&prod;":"∏","&profalar;":"⌮","&profline;":"⌒","&profsurf;":"⌓","&prop;":"∝","&propto;":"∝","&prsim;":"≾","&prurel;":"⊰","&pscr;":"𝓅","&psi;":"ψ","&puncsp;":" ","&qfr;":"𝔮","&qint;":"⨌","&qopf;":"𝕢","&qprime;":"⁗","&qscr;":"𝓆","&quaternions;":"ℍ","&quatint;":"⨖","&quest;":"?","&questeq;":"≟","&quot":'"',"&quot;":'"',"&rAarr;":"⇛","&rArr;":"⇒","&rAtail;":"⤜","&rBarr;":"⤏","&rHar;":"⥤","&race;":"∽̱","&racute;":"ŕ","&radic;":"√","&raemptyv;":"⦳","&rang;":"⟩","&rangd;":"⦒","&range;":"⦥","&rangle;":"⟩","&raquo":"»","&raquo;":"»","&rarr;":"→","&rarrap;":"⥵","&rarrb;":"⇥","&rarrbfs;":"⤠","&rarrc;":"⤳","&rarrfs;":"⤞","&rarrhk;":"↪","&rarrlp;":"↬","&rarrpl;":"⥅","&rarrsim;":"⥴","&rarrtl;":"↣","&rarrw;":"↝","&ratail;":"⤚","&ratio;":"∶","&rationals;":"ℚ","&rbarr;":"⤍","&rbbrk;":"❳","&rbrace;":"}","&rbrack;":"]","&rbrke;":"⦌","&rbrksld;":"⦎","&rbrkslu;":"⦐","&rcaron;":"ř","&rcedil;":"ŗ","&rceil;":"⌉","&rcub;":"}","&rcy;":"р","&rdca;":"⤷","&rdldhar;":"⥩","&rdquo;":"”","&rdquor;":"”","&rdsh;":"↳","&real;":"ℜ","&realine;":"ℛ","&realpart;":"ℜ","&reals;":"ℝ","&rect;":"▭","&reg":"®","&reg;":"®","&rfisht;":"⥽","&rfloor;":"⌋","&rfr;":"𝔯","&rhard;":"⇁","&rharu;":"⇀","&rharul;":"⥬","&rho;":"ρ","&rhov;":"ϱ","&rightarrow;":"→","&rightarrowtail;":"↣","&rightharpoondown;":"⇁","&rightharpoonup;":"⇀","&rightleftarrows;":"⇄","&rightleftharpoons;":"⇌","&rightrightarrows;":"⇉","&rightsquigarrow;":"↝","&rightthreetimes;":"⋌","&ring;":"˚","&risingdotseq;":"≓","&rlarr;":"⇄","&rlhar;":"⇌","&rlm;":"‏","&rmoust;":"⎱","&rmoustache;":"⎱","&rnmid;":"⫮","&roang;":"⟭","&roarr;":"⇾","&robrk;":"⟧","&ropar;":"⦆","&ropf;":"𝕣","&roplus;":"⨮","&rotimes;":"⨵","&rpar;":")","&rpargt;":"⦔","&rppolint;":"⨒","&rrarr;":"⇉","&rsaquo;":"›","&rscr;":"𝓇","&rsh;":"↱","&rsqb;":"]","&rsquo;":"’","&rsquor;":"’","&rthree;":"⋌","&rtimes;":"⋊","&rtri;":"▹","&rtrie;":"⊵","&rtrif;":"▸","&rtriltri;":"⧎","&ruluhar;":"⥨","&rx;":"℞","&sacute;":"ś","&sbquo;":"‚","&sc;":"≻","&scE;":"⪴","&scap;":"⪸","&scaron;":"š","&sccue;":"≽","&sce;":"⪰","&scedil;":"ş","&scirc;":"ŝ","&scnE;":"⪶","&scnap;":"⪺","&scnsim;":"⋩","&scpolint;":"⨓","&scsim;":"≿","&scy;":"с","&sdot;":"⋅","&sdotb;":"⊡","&sdote;":"⩦","&seArr;":"⇘","&searhk;":"⤥","&searr;":"↘","&searrow;":"↘","&sect":"§","&sect;":"§","&semi;":";","&seswar;":"⤩","&setminus;":"∖","&setmn;":"∖","&sext;":"✶","&sfr;":"𝔰","&sfrown;":"⌢","&sharp;":"♯","&shchcy;":"щ","&shcy;":"ш","&shortmid;":"∣","&shortparallel;":"∥","&shy":"­","&shy;":"­","&sigma;":"σ","&sigmaf;":"ς","&sigmav;":"ς","&sim;":"∼","&simdot;":"⩪","&sime;":"≃","&simeq;":"≃","&simg;":"⪞","&simgE;":"⪠","&siml;":"⪝","&simlE;":"⪟","&simne;":"≆","&simplus;":"⨤","&simrarr;":"⥲","&slarr;":"←","&smallsetminus;":"∖","&smashp;":"⨳","&smeparsl;":"⧤","&smid;":"∣","&smile;":"⌣","&smt;":"⪪","&smte;":"⪬","&smtes;":"⪬︀","&softcy;":"ь","&sol;":"/","&solb;":"⧄","&solbar;":"⌿","&sopf;":"𝕤","&spades;":"♠","&spadesuit;":"♠","&spar;":"∥","&sqcap;":"⊓","&sqcaps;":"⊓︀","&sqcup;":"⊔","&sqcups;":"⊔︀","&sqsub;":"⊏","&sqsube;":"⊑","&sqsubset;":"⊏","&sqsubseteq;":"⊑","&sqsup;":"⊐","&sqsupe;":"⊒","&sqsupset;":"⊐","&sqsupseteq;":"⊒","&squ;":"□","&square;":"□","&squarf;":"▪","&squf;":"▪","&srarr;":"→","&sscr;":"𝓈","&ssetmn;":"∖","&ssmile;":"⌣","&sstarf;":"⋆","&star;":"☆","&starf;":"★","&straightepsilon;":"ϵ","&straightphi;":"ϕ","&strns;":"¯","&sub;":"⊂","&subE;":"⫅","&subdot;":"⪽","&sube;":"⊆","&subedot;":"⫃","&submult;":"⫁","&subnE;":"⫋","&subne;":"⊊","&subplus;":"⪿","&subrarr;":"⥹","&subset;":"⊂","&subseteq;":"⊆","&subseteqq;":"⫅","&subsetneq;":"⊊","&subsetneqq;":"⫋","&subsim;":"⫇","&subsub;":"⫕","&subsup;":"⫓","&succ;":"≻","&succapprox;":"⪸","&succcurlyeq;":"≽","&succeq;":"⪰","&succnapprox;":"⪺","&succneqq;":"⪶","&succnsim;":"⋩","&succsim;":"≿","&sum;":"∑","&sung;":"♪","&sup1":"¹","&sup1;":"¹","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&sup;":"⊃","&supE;":"⫆","&supdot;":"⪾","&supdsub;":"⫘","&supe;":"⊇","&supedot;":"⫄","&suphsol;":"⟉","&suphsub;":"⫗","&suplarr;":"⥻","&supmult;":"⫂","&supnE;":"⫌","&supne;":"⊋","&supplus;":"⫀","&supset;":"⊃","&supseteq;":"⊇","&supseteqq;":"⫆","&supsetneq;":"⊋","&supsetneqq;":"⫌","&supsim;":"⫈","&supsub;":"⫔","&supsup;":"⫖","&swArr;":"⇙","&swarhk;":"⤦","&swarr;":"↙","&swarrow;":"↙","&swnwar;":"⤪","&szlig":"ß","&szlig;":"ß","&target;":"⌖","&tau;":"τ","&tbrk;":"⎴","&tcaron;":"ť","&tcedil;":"ţ","&tcy;":"т","&tdot;":"⃛","&telrec;":"⌕","&tfr;":"𝔱","&there4;":"∴","&therefore;":"∴","&theta;":"θ","&thetasym;":"ϑ","&thetav;":"ϑ","&thickapprox;":"≈","&thicksim;":"∼","&thinsp;":" ","&thkap;":"≈","&thksim;":"∼","&thorn":"þ","&thorn;":"þ","&tilde;":"˜","&times":"×","&times;":"×","&timesb;":"⊠","&timesbar;":"⨱","&timesd;":"⨰","&tint;":"∭","&toea;":"⤨","&top;":"⊤","&topbot;":"⌶","&topcir;":"⫱","&topf;":"𝕥","&topfork;":"⫚","&tosa;":"⤩","&tprime;":"‴","&trade;":"™","&triangle;":"▵","&triangledown;":"▿","&triangleleft;":"◃","&trianglelefteq;":"⊴","&triangleq;":"≜","&triangleright;":"▹","&trianglerighteq;":"⊵","&tridot;":"◬","&trie;":"≜","&triminus;":"⨺","&triplus;":"⨹","&trisb;":"⧍","&tritime;":"⨻","&trpezium;":"⏢","&tscr;":"𝓉","&tscy;":"ц","&tshcy;":"ћ","&tstrok;":"ŧ","&twixt;":"≬","&twoheadleftarrow;":"↞","&twoheadrightarrow;":"↠","&uArr;":"⇑","&uHar;":"⥣","&uacute":"ú","&uacute;":"ú","&uarr;":"↑","&ubrcy;":"ў","&ubreve;":"ŭ","&ucirc":"û","&ucirc;":"û","&ucy;":"у","&udarr;":"⇅","&udblac;":"ű","&udhar;":"⥮","&ufisht;":"⥾","&ufr;":"𝔲","&ugrave":"ù","&ugrave;":"ù","&uharl;":"↿","&uharr;":"↾","&uhblk;":"▀","&ulcorn;":"⌜","&ulcorner;":"⌜","&ulcrop;":"⌏","&ultri;":"◸","&umacr;":"ū","&uml":"¨","&uml;":"¨","&uogon;":"ų","&uopf;":"𝕦","&uparrow;":"↑","&updownarrow;":"↕","&upharpoonleft;":"↿","&upharpoonright;":"↾","&uplus;":"⊎","&upsi;":"υ","&upsih;":"ϒ","&upsilon;":"υ","&upuparrows;":"⇈","&urcorn;":"⌝","&urcorner;":"⌝","&urcrop;":"⌎","&uring;":"ů","&urtri;":"◹","&uscr;":"𝓊","&utdot;":"⋰","&utilde;":"ũ","&utri;":"▵","&utrif;":"▴","&uuarr;":"⇈","&uuml":"ü","&uuml;":"ü","&uwangle;":"⦧","&vArr;":"⇕","&vBar;":"⫨","&vBarv;":"⫩","&vDash;":"⊨","&vangrt;":"⦜","&varepsilon;":"ϵ","&varkappa;":"ϰ","&varnothing;":"∅","&varphi;":"ϕ","&varpi;":"ϖ","&varpropto;":"∝","&varr;":"↕","&varrho;":"ϱ","&varsigma;":"ς","&varsubsetneq;":"⊊︀","&varsubsetneqq;":"⫋︀","&varsupsetneq;":"⊋︀","&varsupsetneqq;":"⫌︀","&vartheta;":"ϑ","&vartriangleleft;":"⊲","&vartriangleright;":"⊳","&vcy;":"в","&vdash;":"⊢","&vee;":"∨","&veebar;":"⊻","&veeeq;":"≚","&vellip;":"⋮","&verbar;":"|","&vert;":"|","&vfr;":"𝔳","&vltri;":"⊲","&vnsub;":"⊂⃒","&vnsup;":"⊃⃒","&vopf;":"𝕧","&vprop;":"∝","&vrtri;":"⊳","&vscr;":"𝓋","&vsubnE;":"⫋︀","&vsubne;":"⊊︀","&vsupnE;":"⫌︀","&vsupne;":"⊋︀","&vzigzag;":"⦚","&wcirc;":"ŵ","&wedbar;":"⩟","&wedge;":"∧","&wedgeq;":"≙","&weierp;":"℘","&wfr;":"𝔴","&wopf;":"𝕨","&wp;":"℘","&wr;":"≀","&wreath;":"≀","&wscr;":"𝓌","&xcap;":"⋂","&xcirc;":"◯","&xcup;":"⋃","&xdtri;":"▽","&xfr;":"𝔵","&xhArr;":"⟺","&xharr;":"⟷","&xi;":"ξ","&xlArr;":"⟸","&xlarr;":"⟵","&xmap;":"⟼","&xnis;":"⋻","&xodot;":"⨀","&xopf;":"𝕩","&xoplus;":"⨁","&xotime;":"⨂","&xrArr;":"⟹","&xrarr;":"⟶","&xscr;":"𝓍","&xsqcup;":"⨆","&xuplus;":"⨄","&xutri;":"△","&xvee;":"⋁","&xwedge;":"⋀","&yacute":"ý","&yacute;":"ý","&yacy;":"я","&ycirc;":"ŷ","&ycy;":"ы","&yen":"¥","&yen;":"¥","&yfr;":"𝔶","&yicy;":"ї","&yopf;":"𝕪","&yscr;":"𝓎","&yucy;":"ю","&yuml":"ÿ","&yuml;":"ÿ","&zacute;":"ź","&zcaron;":"ž","&zcy;":"з","&zdot;":"ż","&zeetrf;":"ℨ","&zeta;":"ζ","&zfr;":"𝔷","&zhcy;":"ж","&zigrarr;":"⇝","&zopf;":"𝕫","&zscr;":"𝓏","&zwj;":"‍","&zwnj;":"‌"},characters:{"Æ":"&AElig;","&":"&amp;","Á":"&Aacute;","Ă":"&Abreve;","Â":"&Acirc;","А":"&Acy;","𝔄":"&Afr;","À":"&Agrave;","Α":"&Alpha;","Ā":"&Amacr;","⩓":"&And;","Ą":"&Aogon;","𝔸":"&Aopf;","⁡":"&af;","Å":"&angst;","𝒜":"&Ascr;","≔":"&coloneq;","Ã":"&Atilde;","Ä":"&Auml;","∖":"&ssetmn;","⫧":"&Barv;","⌆":"&doublebarwedge;","Б":"&Bcy;","∵":"&because;","ℬ":"&bernou;","Β":"&Beta;","𝔅":"&Bfr;","𝔹":"&Bopf;","˘":"&breve;","≎":"&bump;","Ч":"&CHcy;","©":"&copy;","Ć":"&Cacute;","⋒":"&Cap;","ⅅ":"&DD;","ℭ":"&Cfr;","Č":"&Ccaron;","Ç":"&Ccedil;","Ĉ":"&Ccirc;","∰":"&Cconint;","Ċ":"&Cdot;","¸":"&cedil;","·":"&middot;","Χ":"&Chi;","⊙":"&odot;","⊖":"&ominus;","⊕":"&oplus;","⊗":"&otimes;","∲":"&cwconint;","”":"&rdquor;","’":"&rsquor;","∷":"&Proportion;","⩴":"&Colone;","≡":"&equiv;","∯":"&DoubleContourIntegral;","∮":"&oint;","ℂ":"&complexes;","∐":"&coprod;","∳":"&awconint;","⨯":"&Cross;","𝒞":"&Cscr;","⋓":"&Cup;","≍":"&asympeq;","⤑":"&DDotrahd;","Ђ":"&DJcy;","Ѕ":"&DScy;","Џ":"&DZcy;","‡":"&ddagger;","↡":"&Darr;","⫤":"&DoubleLeftTee;","Ď":"&Dcaron;","Д":"&Dcy;","∇":"&nabla;","Δ":"&Delta;","𝔇":"&Dfr;","´":"&acute;","˙":"&dot;","˝":"&dblac;","`":"&grave;","˜":"&tilde;","⋄":"&diamond;","ⅆ":"&dd;","𝔻":"&Dopf;","¨":"&uml;","⃜":"&DotDot;","≐":"&esdot;","⇓":"&dArr;","⇐":"&lArr;","⇔":"&iff;","⟸":"&xlArr;","⟺":"&xhArr;","⟹":"&xrArr;","⇒":"&rArr;","⊨":"&vDash;","⇑":"&uArr;","⇕":"&vArr;","∥":"&spar;","↓":"&downarrow;","⤓":"&DownArrowBar;","⇵":"&duarr;","̑":"&DownBreve;","⥐":"&DownLeftRightVector;","⥞":"&DownLeftTeeVector;","↽":"&lhard;","⥖":"&DownLeftVectorBar;","⥟":"&DownRightTeeVector;","⇁":"&rightharpoondown;","⥗":"&DownRightVectorBar;","⊤":"&top;","↧":"&mapstodown;","𝒟":"&Dscr;","Đ":"&Dstrok;","Ŋ":"&ENG;","Ð":"&ETH;","É":"&Eacute;","Ě":"&Ecaron;","Ê":"&Ecirc;","Э":"&Ecy;","Ė":"&Edot;","𝔈":"&Efr;","È":"&Egrave;","∈":"&isinv;","Ē":"&Emacr;","◻":"&EmptySmallSquare;","▫":"&EmptyVerySmallSquare;","Ę":"&Eogon;","𝔼":"&Eopf;","Ε":"&Epsilon;","⩵":"&Equal;","≂":"&esim;","⇌":"&rlhar;","ℰ":"&expectation;","⩳":"&Esim;","Η":"&Eta;","Ë":"&Euml;","∃":"&exist;","ⅇ":"&exponentiale;","Ф":"&Fcy;","𝔉":"&Ffr;","◼":"&FilledSmallSquare;","▪":"&squf;","𝔽":"&Fopf;","∀":"&forall;","ℱ":"&Fscr;","Ѓ":"&GJcy;",">":"&gt;","Γ":"&Gamma;","Ϝ":"&Gammad;","Ğ":"&Gbreve;","Ģ":"&Gcedil;","Ĝ":"&Gcirc;","Г":"&Gcy;","Ġ":"&Gdot;","𝔊":"&Gfr;","⋙":"&ggg;","𝔾":"&Gopf;","≥":"&geq;","⋛":"&gtreqless;","≧":"&geqq;","⪢":"&GreaterGreater;","≷":"&gtrless;","⩾":"&ges;","≳":"&gtrsim;","𝒢":"&Gscr;","≫":"&gg;","Ъ":"&HARDcy;","ˇ":"&caron;","^":"&Hat;","Ĥ":"&Hcirc;","ℌ":"&Poincareplane;","ℋ":"&hamilt;","ℍ":"&quaternions;","─":"&boxh;","Ħ":"&Hstrok;","≏":"&bumpeq;","Е":"&IEcy;","Ĳ":"&IJlig;","Ё":"&IOcy;","Í":"&Iacute;","Î":"&Icirc;","И":"&Icy;","İ":"&Idot;","ℑ":"&imagpart;","Ì":"&Igrave;","Ī":"&Imacr;","ⅈ":"&ii;","∬":"&Int;","∫":"&int;","⋂":"&xcap;","⁣":"&ic;","⁢":"&it;","Į":"&Iogon;","𝕀":"&Iopf;","Ι":"&Iota;","ℐ":"&imagline;","Ĩ":"&Itilde;","І":"&Iukcy;","Ï":"&Iuml;","Ĵ":"&Jcirc;","Й":"&Jcy;","𝔍":"&Jfr;","𝕁":"&Jopf;","𝒥":"&Jscr;","Ј":"&Jsercy;","Є":"&Jukcy;","Х":"&KHcy;","Ќ":"&KJcy;","Κ":"&Kappa;","Ķ":"&Kcedil;","К":"&Kcy;","𝔎":"&Kfr;","𝕂":"&Kopf;","𝒦":"&Kscr;","Љ":"&LJcy;","<":"&lt;","Ĺ":"&Lacute;","Λ":"&Lambda;","⟪":"&Lang;","ℒ":"&lagran;","↞":"&twoheadleftarrow;","Ľ":"&Lcaron;","Ļ":"&Lcedil;","Л":"&Lcy;","⟨":"&langle;","←":"&slarr;","⇤":"&larrb;","⇆":"&lrarr;","⌈":"&lceil;","⟦":"&lobrk;","⥡":"&LeftDownTeeVector;","⇃":"&downharpoonleft;","⥙":"&LeftDownVectorBar;","⌊":"&lfloor;","↔":"&leftrightarrow;","⥎":"&LeftRightVector;","⊣":"&dashv;","↤":"&mapstoleft;","⥚":"&LeftTeeVector;","⊲":"&vltri;","⧏":"&LeftTriangleBar;","⊴":"&trianglelefteq;","⥑":"&LeftUpDownVector;","⥠":"&LeftUpTeeVector;","↿":"&upharpoonleft;","⥘":"&LeftUpVectorBar;","↼":"&lharu;","⥒":"&LeftVectorBar;","⋚":"&lesseqgtr;","≦":"&leqq;","≶":"&lg;","⪡":"&LessLess;","⩽":"&les;","≲":"&lsim;","𝔏":"&Lfr;","⋘":"&Ll;","⇚":"&lAarr;","Ŀ":"&Lmidot;","⟵":"&xlarr;","⟷":"&xharr;","⟶":"&xrarr;","𝕃":"&Lopf;","↙":"&swarrow;","↘":"&searrow;","↰":"&lsh;","Ł":"&Lstrok;","≪":"&ll;","⤅":"&Map;","М":"&Mcy;"," ":"&MediumSpace;","ℳ":"&phmmat;","𝔐":"&Mfr;","∓":"&mp;","𝕄":"&Mopf;","Μ":"&Mu;","Њ":"&NJcy;","Ń":"&Nacute;","Ň":"&Ncaron;","Ņ":"&Ncedil;","Н":"&Ncy;","​":"&ZeroWidthSpace;","\n":"&NewLine;","𝔑":"&Nfr;","⁠":"&NoBreak;"," ":"&nbsp;","ℕ":"&naturals;","⫬":"&Not;","≢":"&nequiv;","≭":"&NotCupCap;","∦":"&nspar;","∉":"&notinva;","≠":"&ne;","≂̸":"&nesim;","∄":"&nexists;","≯":"&ngtr;","≱":"&ngeq;","≧̸":"&ngeqq;","≫̸":"&nGtv;","≹":"&ntgl;","⩾̸":"&nges;","≵":"&ngsim;","≎̸":"&nbump;","≏̸":"&nbumpe;","⋪":"&ntriangleleft;","⧏̸":"&NotLeftTriangleBar;","⋬":"&ntrianglelefteq;","≮":"&nlt;","≰":"&nleq;","≸":"&ntlg;","≪̸":"&nLtv;","⩽̸":"&nles;","≴":"&nlsim;","⪢̸":"&NotNestedGreaterGreater;","⪡̸":"&NotNestedLessLess;","⊀":"&nprec;","⪯̸":"&npreceq;","⋠":"&nprcue;","∌":"&notniva;","⋫":"&ntriangleright;","⧐̸":"&NotRightTriangleBar;","⋭":"&ntrianglerighteq;","⊏̸":"&NotSquareSubset;","⋢":"&nsqsube;","⊐̸":"&NotSquareSuperset;","⋣":"&nsqsupe;","⊂⃒":"&vnsub;","⊈":"&nsubseteq;","⊁":"&nsucc;","⪰̸":"&nsucceq;","⋡":"&nsccue;","≿̸":"&NotSucceedsTilde;","⊃⃒":"&vnsup;","⊉":"&nsupseteq;","≁":"&nsim;","≄":"&nsimeq;","≇":"&ncong;","≉":"&napprox;","∤":"&nsmid;","𝒩":"&Nscr;","Ñ":"&Ntilde;","Ν":"&Nu;","Œ":"&OElig;","Ó":"&Oacute;","Ô":"&Ocirc;","О":"&Ocy;","Ő":"&Odblac;","𝔒":"&Ofr;","Ò":"&Ograve;","Ō":"&Omacr;","Ω":"&ohm;","Ο":"&Omicron;","𝕆":"&Oopf;","“":"&ldquo;","‘":"&lsquo;","⩔":"&Or;","𝒪":"&Oscr;","Ø":"&Oslash;","Õ":"&Otilde;","⨷":"&Otimes;","Ö":"&Ouml;","‾":"&oline;","⏞":"&OverBrace;","⎴":"&tbrk;","⏜":"&OverParenthesis;","∂":"&part;","П":"&Pcy;","𝔓":"&Pfr;","Φ":"&Phi;","Π":"&Pi;","±":"&pm;","ℙ":"&primes;","⪻":"&Pr;","≺":"&prec;","⪯":"&preceq;","≼":"&preccurlyeq;","≾":"&prsim;","″":"&Prime;","∏":"&prod;","∝":"&vprop;","𝒫":"&Pscr;","Ψ":"&Psi;",'"':"&quot;","𝔔":"&Qfr;","ℚ":"&rationals;","𝒬":"&Qscr;","⤐":"&drbkarow;","®":"&reg;","Ŕ":"&Racute;","⟫":"&Rang;","↠":"&twoheadrightarrow;","⤖":"&Rarrtl;","Ř":"&Rcaron;","Ŗ":"&Rcedil;","Р":"&Rcy;","ℜ":"&realpart;","∋":"&niv;","⇋":"&lrhar;","⥯":"&duhar;","Ρ":"&Rho;","⟩":"&rangle;","→":"&srarr;","⇥":"&rarrb;","⇄":"&rlarr;","⌉":"&rceil;","⟧":"&robrk;","⥝":"&RightDownTeeVector;","⇂":"&downharpoonright;","⥕":"&RightDownVectorBar;","⌋":"&rfloor;","⊢":"&vdash;","↦":"&mapsto;","⥛":"&RightTeeVector;","⊳":"&vrtri;","⧐":"&RightTriangleBar;","⊵":"&trianglerighteq;","⥏":"&RightUpDownVector;","⥜":"&RightUpTeeVector;","↾":"&upharpoonright;","⥔":"&RightUpVectorBar;","⇀":"&rightharpoonup;","⥓":"&RightVectorBar;","ℝ":"&reals;","⥰":"&RoundImplies;","⇛":"&rAarr;","ℛ":"&realine;","↱":"&rsh;","⧴":"&RuleDelayed;","Щ":"&SHCHcy;","Ш":"&SHcy;","Ь":"&SOFTcy;","Ś":"&Sacute;","⪼":"&Sc;","Š":"&Scaron;","Ş":"&Scedil;","Ŝ":"&Scirc;","С":"&Scy;","𝔖":"&Sfr;","↑":"&uparrow;","Σ":"&Sigma;","∘":"&compfn;","𝕊":"&Sopf;","√":"&radic;","□":"&square;","⊓":"&sqcap;","⊏":"&sqsubset;","⊑":"&sqsubseteq;","⊐":"&sqsupset;","⊒":"&sqsupseteq;","⊔":"&sqcup;","𝒮":"&Sscr;","⋆":"&sstarf;","⋐":"&Subset;","⊆":"&subseteq;","≻":"&succ;","⪰":"&succeq;","≽":"&succcurlyeq;","≿":"&succsim;","∑":"&sum;","⋑":"&Supset;","⊃":"&supset;","⊇":"&supseteq;","Þ":"&THORN;","™":"&trade;","Ћ":"&TSHcy;","Ц":"&TScy;","\t":"&Tab;","Τ":"&Tau;","Ť":"&Tcaron;","Ţ":"&Tcedil;","Т":"&Tcy;","𝔗":"&Tfr;","∴":"&therefore;","Θ":"&Theta;","  ":"&ThickSpace;"," ":"&thinsp;","∼":"&thksim;","≃":"&simeq;","≅":"&cong;","≈":"&thkap;","𝕋":"&Topf;","⃛":"&tdot;","𝒯":"&Tscr;","Ŧ":"&Tstrok;","Ú":"&Uacute;","↟":"&Uarr;","⥉":"&Uarrocir;","Ў":"&Ubrcy;","Ŭ":"&Ubreve;","Û":"&Ucirc;","У":"&Ucy;","Ű":"&Udblac;","𝔘":"&Ufr;","Ù":"&Ugrave;","Ū":"&Umacr;",_:"&lowbar;","⏟":"&UnderBrace;","⎵":"&bbrk;","⏝":"&UnderParenthesis;","⋃":"&xcup;","⊎":"&uplus;","Ų":"&Uogon;","𝕌":"&Uopf;","⤒":"&UpArrowBar;","⇅":"&udarr;","↕":"&varr;","⥮":"&udhar;","⊥":"&perp;","↥":"&mapstoup;","↖":"&nwarrow;","↗":"&nearrow;","ϒ":"&upsih;","Υ":"&Upsilon;","Ů":"&Uring;","𝒰":"&Uscr;","Ũ":"&Utilde;","Ü":"&Uuml;","⊫":"&VDash;","⫫":"&Vbar;","В":"&Vcy;","⊩":"&Vdash;","⫦":"&Vdashl;","⋁":"&xvee;","‖":"&Vert;","∣":"&smid;","|":"&vert;","❘":"&VerticalSeparator;","≀":"&wreath;"," ":"&hairsp;","𝔙":"&Vfr;","𝕍":"&Vopf;","𝒱":"&Vscr;","⊪":"&Vvdash;","Ŵ":"&Wcirc;","⋀":"&xwedge;","𝔚":"&Wfr;","𝕎":"&Wopf;","𝒲":"&Wscr;","𝔛":"&Xfr;","Ξ":"&Xi;","𝕏":"&Xopf;","𝒳":"&Xscr;","Я":"&YAcy;","Ї":"&YIcy;","Ю":"&YUcy;","Ý":"&Yacute;","Ŷ":"&Ycirc;","Ы":"&Ycy;","𝔜":"&Yfr;","𝕐":"&Yopf;","𝒴":"&Yscr;","Ÿ":"&Yuml;","Ж":"&ZHcy;","Ź":"&Zacute;","Ž":"&Zcaron;","З":"&Zcy;","Ż":"&Zdot;","Ζ":"&Zeta;","ℨ":"&zeetrf;","ℤ":"&integers;","𝒵":"&Zscr;","á":"&aacute;","ă":"&abreve;","∾":"&mstpos;","∾̳":"&acE;","∿":"&acd;","â":"&acirc;","а":"&acy;","æ":"&aelig;","𝔞":"&afr;","à":"&agrave;","ℵ":"&aleph;","α":"&alpha;","ā":"&amacr;","⨿":"&amalg;","∧":"&wedge;","⩕":"&andand;","⩜":"&andd;","⩘":"&andslope;","⩚":"&andv;","∠":"&angle;","⦤":"&ange;","∡":"&measuredangle;","⦨":"&angmsdaa;","⦩":"&angmsdab;","⦪":"&angmsdac;","⦫":"&angmsdad;","⦬":"&angmsdae;","⦭":"&angmsdaf;","⦮":"&angmsdag;","⦯":"&angmsdah;","∟":"&angrt;","⊾":"&angrtvb;","⦝":"&angrtvbd;","∢":"&angsph;","⍼":"&angzarr;","ą":"&aogon;","𝕒":"&aopf;","⩰":"&apE;","⩯":"&apacir;","≊":"&approxeq;","≋":"&apid;","'":"&apos;","å":"&aring;","𝒶":"&ascr;","*":"&midast;","ã":"&atilde;","ä":"&auml;","⨑":"&awint;","⫭":"&bNot;","≌":"&bcong;","϶":"&bepsi;","‵":"&bprime;","∽":"&bsim;","⋍":"&bsime;","⊽":"&barvee;","⌅":"&barwedge;","⎶":"&bbrktbrk;","б":"&bcy;","„":"&ldquor;","⦰":"&bemptyv;","β":"&beta;","ℶ":"&beth;","≬":"&twixt;","𝔟":"&bfr;","◯":"&xcirc;","⨀":"&xodot;","⨁":"&xoplus;","⨂":"&xotime;","⨆":"&xsqcup;","★":"&starf;","▽":"&xdtri;","△":"&xutri;","⨄":"&xuplus;","⤍":"&rbarr;","⧫":"&lozf;","▴":"&utrif;","▾":"&dtrif;","◂":"&ltrif;","▸":"&rtrif;","␣":"&blank;","▒":"&blk12;","░":"&blk14;","▓":"&blk34;","█":"&block;","=⃥":"&bne;","≡⃥":"&bnequiv;","⌐":"&bnot;","𝕓":"&bopf;","⋈":"&bowtie;","╗":"&boxDL;","╔":"&boxDR;","╖":"&boxDl;","╓":"&boxDr;","═":"&boxH;","╦":"&boxHD;","╩":"&boxHU;","╤":"&boxHd;","╧":"&boxHu;","╝":"&boxUL;","╚":"&boxUR;","╜":"&boxUl;","╙":"&boxUr;","║":"&boxV;","╬":"&boxVH;","╣":"&boxVL;","╠":"&boxVR;","╫":"&boxVh;","╢":"&boxVl;","╟":"&boxVr;","⧉":"&boxbox;","╕":"&boxdL;","╒":"&boxdR;","┐":"&boxdl;","┌":"&boxdr;","╥":"&boxhD;","╨":"&boxhU;","┬":"&boxhd;","┴":"&boxhu;","⊟":"&minusb;","⊞":"&plusb;","⊠":"&timesb;","╛":"&boxuL;","╘":"&boxuR;","┘":"&boxul;","└":"&boxur;","│":"&boxv;","╪":"&boxvH;","╡":"&boxvL;","╞":"&boxvR;","┼":"&boxvh;","┤":"&boxvl;","├":"&boxvr;","¦":"&brvbar;","𝒷":"&bscr;","⁏":"&bsemi;","\\":"&bsol;","⧅":"&bsolb;","⟈":"&bsolhsub;","•":"&bullet;","⪮":"&bumpE;","ć":"&cacute;","∩":"&cap;","⩄":"&capand;","⩉":"&capbrcup;","⩋":"&capcap;","⩇":"&capcup;","⩀":"&capdot;","∩︀":"&caps;","⁁":"&caret;","⩍":"&ccaps;","č":"&ccaron;","ç":"&ccedil;","ĉ":"&ccirc;","⩌":"&ccups;","⩐":"&ccupssm;","ċ":"&cdot;","⦲":"&cemptyv;","¢":"&cent;","𝔠":"&cfr;","ч":"&chcy;","✓":"&checkmark;","χ":"&chi;","○":"&cir;","⧃":"&cirE;","ˆ":"&circ;","≗":"&cire;","↺":"&olarr;","↻":"&orarr;","Ⓢ":"&oS;","⊛":"&oast;","⊚":"&ocir;","⊝":"&odash;","⨐":"&cirfnint;","⫯":"&cirmid;","⧂":"&cirscir;","♣":"&clubsuit;",":":"&colon;",",":"&comma;","@":"&commat;","∁":"&complement;","⩭":"&congdot;","𝕔":"&copf;","℗":"&copysr;","↵":"&crarr;","✗":"&cross;","𝒸":"&cscr;","⫏":"&csub;","⫑":"&csube;","⫐":"&csup;","⫒":"&csupe;","⋯":"&ctdot;","⤸":"&cudarrl;","⤵":"&cudarrr;","⋞":"&curlyeqprec;","⋟":"&curlyeqsucc;","↶":"&curvearrowleft;","⤽":"&cularrp;","∪":"&cup;","⩈":"&cupbrcap;","⩆":"&cupcap;","⩊":"&cupcup;","⊍":"&cupdot;","⩅":"&cupor;","∪︀":"&cups;","↷":"&curvearrowright;","⤼":"&curarrm;","⋎":"&cuvee;","⋏":"&cuwed;","¤":"&curren;","∱":"&cwint;","⌭":"&cylcty;","⥥":"&dHar;","†":"&dagger;","ℸ":"&daleth;","‐":"&hyphen;","⤏":"&rBarr;","ď":"&dcaron;","д":"&dcy;","⇊":"&downdownarrows;","⩷":"&eDDot;","°":"&deg;","δ":"&delta;","⦱":"&demptyv;","⥿":"&dfisht;","𝔡":"&dfr;","♦":"&diams;","ϝ":"&gammad;","⋲":"&disin;","÷":"&divide;","⋇":"&divonx;","ђ":"&djcy;","⌞":"&llcorner;","⌍":"&dlcrop;",$:"&dollar;","𝕕":"&dopf;","≑":"&eDot;","∸":"&minusd;","∔":"&plusdo;","⊡":"&sdotb;","⌟":"&lrcorner;","⌌":"&drcrop;","𝒹":"&dscr;","ѕ":"&dscy;","⧶":"&dsol;","đ":"&dstrok;","⋱":"&dtdot;","▿":"&triangledown;","⦦":"&dwangle;","џ":"&dzcy;","⟿":"&dzigrarr;","é":"&eacute;","⩮":"&easter;","ě":"&ecaron;","≖":"&eqcirc;","ê":"&ecirc;","≕":"&eqcolon;","э":"&ecy;","ė":"&edot;","≒":"&fallingdotseq;","𝔢":"&efr;","⪚":"&eg;","è":"&egrave;","⪖":"&eqslantgtr;","⪘":"&egsdot;","⪙":"&el;","⏧":"&elinters;","ℓ":"&ell;","⪕":"&eqslantless;","⪗":"&elsdot;","ē":"&emacr;","∅":"&varnothing;"," ":"&emsp13;"," ":"&emsp14;"," ":"&emsp;","ŋ":"&eng;"," ":"&ensp;","ę":"&eogon;","𝕖":"&eopf;","⋕":"&epar;","⧣":"&eparsl;","⩱":"&eplus;","ε":"&epsilon;","ϵ":"&varepsilon;","=":"&equals;","≟":"&questeq;","⩸":"&equivDD;","⧥":"&eqvparsl;","≓":"&risingdotseq;","⥱":"&erarr;","ℯ":"&escr;","η":"&eta;","ð":"&eth;","ë":"&euml;","€":"&euro;","!":"&excl;","ф":"&fcy;","♀":"&female;","ﬃ":"&ffilig;","ﬀ":"&fflig;","ﬄ":"&ffllig;","𝔣":"&ffr;","ﬁ":"&filig;",fj:"&fjlig;","♭":"&flat;","ﬂ":"&fllig;","▱":"&fltns;","ƒ":"&fnof;","𝕗":"&fopf;","⋔":"&pitchfork;","⫙":"&forkv;","⨍":"&fpartint;","½":"&half;","⅓":"&frac13;","¼":"&frac14;","⅕":"&frac15;","⅙":"&frac16;","⅛":"&frac18;","⅔":"&frac23;","⅖":"&frac25;","¾":"&frac34;","⅗":"&frac35;","⅜":"&frac38;","⅘":"&frac45;","⅚":"&frac56;","⅝":"&frac58;","⅞":"&frac78;","⁄":"&frasl;","⌢":"&sfrown;","𝒻":"&fscr;","⪌":"&gtreqqless;","ǵ":"&gacute;","γ":"&gamma;","⪆":"&gtrapprox;","ğ":"&gbreve;","ĝ":"&gcirc;","г":"&gcy;","ġ":"&gdot;","⪩":"&gescc;","⪀":"&gesdot;","⪂":"&gesdoto;","⪄":"&gesdotol;","⋛︀":"&gesl;","⪔":"&gesles;","𝔤":"&gfr;","ℷ":"&gimel;","ѓ":"&gjcy;","⪒":"&glE;","⪥":"&gla;","⪤":"&glj;","≩":"&gneqq;","⪊":"&gnapprox;","⪈":"&gneq;","⋧":"&gnsim;","𝕘":"&gopf;","ℊ":"&gscr;","⪎":"&gsime;","⪐":"&gsiml;","⪧":"&gtcc;","⩺":"&gtcir;","⋗":"&gtrdot;","⦕":"&gtlPar;","⩼":"&gtquest;","⥸":"&gtrarr;","≩︀":"&gvnE;","ъ":"&hardcy;","⥈":"&harrcir;","↭":"&leftrightsquigarrow;","ℏ":"&plankv;","ĥ":"&hcirc;","♥":"&heartsuit;","…":"&mldr;","⊹":"&hercon;","𝔥":"&hfr;","⤥":"&searhk;","⤦":"&swarhk;","⇿":"&hoarr;","∻":"&homtht;","↩":"&larrhk;","↪":"&rarrhk;","𝕙":"&hopf;","―":"&horbar;","𝒽":"&hscr;","ħ":"&hstrok;","⁃":"&hybull;","í":"&iacute;","î":"&icirc;","и":"&icy;","е":"&iecy;","¡":"&iexcl;","𝔦":"&ifr;","ì":"&igrave;","⨌":"&qint;","∭":"&tint;","⧜":"&iinfin;","℩":"&iiota;","ĳ":"&ijlig;","ī":"&imacr;","ı":"&inodot;","⊷":"&imof;","Ƶ":"&imped;","℅":"&incare;","∞":"&infin;","⧝":"&infintie;","⊺":"&intercal;","⨗":"&intlarhk;","⨼":"&iprod;","ё":"&iocy;","į":"&iogon;","𝕚":"&iopf;","ι":"&iota;","¿":"&iquest;","𝒾":"&iscr;","⋹":"&isinE;","⋵":"&isindot;","⋴":"&isins;","⋳":"&isinsv;","ĩ":"&itilde;","і":"&iukcy;","ï":"&iuml;","ĵ":"&jcirc;","й":"&jcy;","𝔧":"&jfr;","ȷ":"&jmath;","𝕛":"&jopf;","𝒿":"&jscr;","ј":"&jsercy;","є":"&jukcy;","κ":"&kappa;","ϰ":"&varkappa;","ķ":"&kcedil;","к":"&kcy;","𝔨":"&kfr;","ĸ":"&kgreen;","х":"&khcy;","ќ":"&kjcy;","𝕜":"&kopf;","𝓀":"&kscr;","⤛":"&lAtail;","⤎":"&lBarr;","⪋":"&lesseqqgtr;","⥢":"&lHar;","ĺ":"&lacute;","⦴":"&laemptyv;","λ":"&lambda;","⦑":"&langd;","⪅":"&lessapprox;","«":"&laquo;","⤟":"&larrbfs;","⤝":"&larrfs;","↫":"&looparrowleft;","⤹":"&larrpl;","⥳":"&larrsim;","↢":"&leftarrowtail;","⪫":"&lat;","⤙":"&latail;","⪭":"&late;","⪭︀":"&lates;","⤌":"&lbarr;","❲":"&lbbrk;","{":"&lcub;","[":"&lsqb;","⦋":"&lbrke;","⦏":"&lbrksld;","⦍":"&lbrkslu;","ľ":"&lcaron;","ļ":"&lcedil;","л":"&lcy;","⤶":"&ldca;","⥧":"&ldrdhar;","⥋":"&ldrushar;","↲":"&ldsh;","≤":"&leq;","⇇":"&llarr;","⋋":"&lthree;","⪨":"&lescc;","⩿":"&lesdot;","⪁":"&lesdoto;","⪃":"&lesdotor;","⋚︀":"&lesg;","⪓":"&lesges;","⋖":"&ltdot;","⥼":"&lfisht;","𝔩":"&lfr;","⪑":"&lgE;","⥪":"&lharul;","▄":"&lhblk;","љ":"&ljcy;","⥫":"&llhard;","◺":"&lltri;","ŀ":"&lmidot;","⎰":"&lmoustache;","≨":"&lneqq;","⪉":"&lnapprox;","⪇":"&lneq;","⋦":"&lnsim;","⟬":"&loang;","⇽":"&loarr;","⟼":"&xmap;","↬":"&rarrlp;","⦅":"&lopar;","𝕝":"&lopf;","⨭":"&loplus;","⨴":"&lotimes;","∗":"&lowast;","◊":"&lozenge;","(":"&lpar;","⦓":"&lparlt;","⥭":"&lrhard;","‎":"&lrm;","⊿":"&lrtri;","‹":"&lsaquo;","𝓁":"&lscr;","⪍":"&lsime;","⪏":"&lsimg;","‚":"&sbquo;","ł":"&lstrok;","⪦":"&ltcc;","⩹":"&ltcir;","⋉":"&ltimes;","⥶":"&ltlarr;","⩻":"&ltquest;","⦖":"&ltrPar;","◃":"&triangleleft;","⥊":"&lurdshar;","⥦":"&luruhar;","≨︀":"&lvnE;","∺":"&mDDot;","¯":"&strns;","♂":"&male;","✠":"&maltese;","▮":"&marker;","⨩":"&mcomma;","м":"&mcy;","—":"&mdash;","𝔪":"&mfr;","℧":"&mho;","µ":"&micro;","⫰":"&midcir;","−":"&minus;","⨪":"&minusdu;","⫛":"&mlcp;","⊧":"&models;","𝕞":"&mopf;","𝓂":"&mscr;","μ":"&mu;","⊸":"&mumap;","⋙̸":"&nGg;","≫⃒":"&nGt;","⇍":"&nlArr;","⇎":"&nhArr;","⋘̸":"&nLl;","≪⃒":"&nLt;","⇏":"&nrArr;","⊯":"&nVDash;","⊮":"&nVdash;","ń":"&nacute;","∠⃒":"&nang;","⩰̸":"&napE;","≋̸":"&napid;","ŉ":"&napos;","♮":"&natural;","⩃":"&ncap;","ň":"&ncaron;","ņ":"&ncedil;","⩭̸":"&ncongdot;","⩂":"&ncup;","н":"&ncy;","–":"&ndash;","⇗":"&neArr;","⤤":"&nearhk;","≐̸":"&nedot;","⤨":"&toea;","𝔫":"&nfr;","↮":"&nleftrightarrow;","⫲":"&nhpar;","⋼":"&nis;","⋺":"&nisd;","њ":"&njcy;","≦̸":"&nleqq;","↚":"&nleftarrow;","‥":"&nldr;","𝕟":"&nopf;","¬":"&not;","⋹̸":"&notinE;","⋵̸":"&notindot;","⋷":"&notinvb;","⋶":"&notinvc;","⋾":"&notnivb;","⋽":"&notnivc;","⫽⃥":"&nparsl;","∂̸":"&npart;","⨔":"&npolint;","↛":"&nrightarrow;","⤳̸":"&nrarrc;","↝̸":"&nrarrw;","𝓃":"&nscr;","⊄":"&nsub;","⫅̸":"&nsubseteqq;","⊅":"&nsup;","⫆̸":"&nsupseteqq;","ñ":"&ntilde;","ν":"&nu;","#":"&num;","№":"&numero;"," ":"&numsp;","⊭":"&nvDash;","⤄":"&nvHarr;","≍⃒":"&nvap;","⊬":"&nvdash;","≥⃒":"&nvge;",">⃒":"&nvgt;","⧞":"&nvinfin;","⤂":"&nvlArr;","≤⃒":"&nvle;","<⃒":"&nvlt;","⊴⃒":"&nvltrie;","⤃":"&nvrArr;","⊵⃒":"&nvrtrie;","∼⃒":"&nvsim;","⇖":"&nwArr;","⤣":"&nwarhk;","⤧":"&nwnear;","ó":"&oacute;","ô":"&ocirc;","о":"&ocy;","ő":"&odblac;","⨸":"&odiv;","⦼":"&odsold;","œ":"&oelig;","⦿":"&ofcir;","𝔬":"&ofr;","˛":"&ogon;","ò":"&ograve;","⧁":"&ogt;","⦵":"&ohbar;","⦾":"&olcir;","⦻":"&olcross;","⧀":"&olt;","ō":"&omacr;","ω":"&omega;","ο":"&omicron;","⦶":"&omid;","𝕠":"&oopf;","⦷":"&opar;","⦹":"&operp;","∨":"&vee;","⩝":"&ord;","ℴ":"&oscr;","ª":"&ordf;","º":"&ordm;","⊶":"&origof;","⩖":"&oror;","⩗":"&orslope;","⩛":"&orv;","ø":"&oslash;","⊘":"&osol;","õ":"&otilde;","⨶":"&otimesas;","ö":"&ouml;","⌽":"&ovbar;","¶":"&para;","⫳":"&parsim;","⫽":"&parsl;","п":"&pcy;","%":"&percnt;",".":"&period;","‰":"&permil;","‱":"&pertenk;","𝔭":"&pfr;","φ":"&phi;","ϕ":"&varphi;","☎":"&phone;","π":"&pi;","ϖ":"&varpi;","ℎ":"&planckh;","+":"&plus;","⨣":"&plusacir;","⨢":"&pluscir;","⨥":"&plusdu;","⩲":"&pluse;","⨦":"&plussim;","⨧":"&plustwo;","⨕":"&pointint;","𝕡":"&popf;","£":"&pound;","⪳":"&prE;","⪷":"&precapprox;","⪹":"&prnap;","⪵":"&prnE;","⋨":"&prnsim;","′":"&prime;","⌮":"&profalar;","⌒":"&profline;","⌓":"&profsurf;","⊰":"&prurel;","𝓅":"&pscr;","ψ":"&psi;"," ":"&puncsp;","𝔮":"&qfr;","𝕢":"&qopf;","⁗":"&qprime;","𝓆":"&qscr;","⨖":"&quatint;","?":"&quest;","⤜":"&rAtail;","⥤":"&rHar;","∽̱":"&race;","ŕ":"&racute;","⦳":"&raemptyv;","⦒":"&rangd;","⦥":"&range;","»":"&raquo;","⥵":"&rarrap;","⤠":"&rarrbfs;","⤳":"&rarrc;","⤞":"&rarrfs;","⥅":"&rarrpl;","⥴":"&rarrsim;","↣":"&rightarrowtail;","↝":"&rightsquigarrow;","⤚":"&ratail;","∶":"&ratio;","❳":"&rbbrk;","}":"&rcub;","]":"&rsqb;","⦌":"&rbrke;","⦎":"&rbrksld;","⦐":"&rbrkslu;","ř":"&rcaron;","ŗ":"&rcedil;","р":"&rcy;","⤷":"&rdca;","⥩":"&rdldhar;","↳":"&rdsh;","▭":"&rect;","⥽":"&rfisht;","𝔯":"&rfr;","⥬":"&rharul;","ρ":"&rho;","ϱ":"&varrho;","⇉":"&rrarr;","⋌":"&rthree;","˚":"&ring;","‏":"&rlm;","⎱":"&rmoustache;","⫮":"&rnmid;","⟭":"&roang;","⇾":"&roarr;","⦆":"&ropar;","𝕣":"&ropf;","⨮":"&roplus;","⨵":"&rotimes;",")":"&rpar;","⦔":"&rpargt;","⨒":"&rppolint;","›":"&rsaquo;","𝓇":"&rscr;","⋊":"&rtimes;","▹":"&triangleright;","⧎":"&rtriltri;","⥨":"&ruluhar;","℞":"&rx;","ś":"&sacute;","⪴":"&scE;","⪸":"&succapprox;","š":"&scaron;","ş":"&scedil;","ŝ":"&scirc;","⪶":"&succneqq;","⪺":"&succnapprox;","⋩":"&succnsim;","⨓":"&scpolint;","с":"&scy;","⋅":"&sdot;","⩦":"&sdote;","⇘":"&seArr;","§":"&sect;",";":"&semi;","⤩":"&tosa;","✶":"&sext;","𝔰":"&sfr;","♯":"&sharp;","щ":"&shchcy;","ш":"&shcy;","­":"&shy;","σ":"&sigma;","ς":"&varsigma;","⩪":"&simdot;","⪞":"&simg;","⪠":"&simgE;","⪝":"&siml;","⪟":"&simlE;","≆":"&simne;","⨤":"&simplus;","⥲":"&simrarr;","⨳":"&smashp;","⧤":"&smeparsl;","⌣":"&ssmile;","⪪":"&smt;","⪬":"&smte;","⪬︀":"&smtes;","ь":"&softcy;","/":"&sol;","⧄":"&solb;","⌿":"&solbar;","𝕤":"&sopf;","♠":"&spadesuit;","⊓︀":"&sqcaps;","⊔︀":"&sqcups;","𝓈":"&sscr;","☆":"&star;","⊂":"&subset;","⫅":"&subseteqq;","⪽":"&subdot;","⫃":"&subedot;","⫁":"&submult;","⫋":"&subsetneqq;","⊊":"&subsetneq;","⪿":"&subplus;","⥹":"&subrarr;","⫇":"&subsim;","⫕":"&subsub;","⫓":"&subsup;","♪":"&sung;","¹":"&sup1;","²":"&sup2;","³":"&sup3;","⫆":"&supseteqq;","⪾":"&supdot;","⫘":"&supdsub;","⫄":"&supedot;","⟉":"&suphsol;","⫗":"&suphsub;","⥻":"&suplarr;","⫂":"&supmult;","⫌":"&supsetneqq;","⊋":"&supsetneq;","⫀":"&supplus;","⫈":"&supsim;","⫔":"&supsub;","⫖":"&supsup;","⇙":"&swArr;","⤪":"&swnwar;","ß":"&szlig;","⌖":"&target;","τ":"&tau;","ť":"&tcaron;","ţ":"&tcedil;","т":"&tcy;","⌕":"&telrec;","𝔱":"&tfr;","θ":"&theta;","ϑ":"&vartheta;","þ":"&thorn;","×":"&times;","⨱":"&timesbar;","⨰":"&timesd;","⌶":"&topbot;","⫱":"&topcir;","𝕥":"&topf;","⫚":"&topfork;","‴":"&tprime;","▵":"&utri;","≜":"&trie;","◬":"&tridot;","⨺":"&triminus;","⨹":"&triplus;","⧍":"&trisb;","⨻":"&tritime;","⏢":"&trpezium;","𝓉":"&tscr;","ц":"&tscy;","ћ":"&tshcy;","ŧ":"&tstrok;","⥣":"&uHar;","ú":"&uacute;","ў":"&ubrcy;","ŭ":"&ubreve;","û":"&ucirc;","у":"&ucy;","ű":"&udblac;","⥾":"&ufisht;","𝔲":"&ufr;","ù":"&ugrave;","▀":"&uhblk;","⌜":"&ulcorner;","⌏":"&ulcrop;","◸":"&ultri;","ū":"&umacr;","ų":"&uogon;","𝕦":"&uopf;","υ":"&upsilon;","⇈":"&uuarr;","⌝":"&urcorner;","⌎":"&urcrop;","ů":"&uring;","◹":"&urtri;","𝓊":"&uscr;","⋰":"&utdot;","ũ":"&utilde;","ü":"&uuml;","⦧":"&uwangle;","⫨":"&vBar;","⫩":"&vBarv;","⦜":"&vangrt;","⊊︀":"&vsubne;","⫋︀":"&vsubnE;","⊋︀":"&vsupne;","⫌︀":"&vsupnE;","в":"&vcy;","⊻":"&veebar;","≚":"&veeeq;","⋮":"&vellip;","𝔳":"&vfr;","𝕧":"&vopf;","𝓋":"&vscr;","⦚":"&vzigzag;","ŵ":"&wcirc;","⩟":"&wedbar;","≙":"&wedgeq;","℘":"&wp;","𝔴":"&wfr;","𝕨":"&wopf;","𝓌":"&wscr;","𝔵":"&xfr;","ξ":"&xi;","⋻":"&xnis;","𝕩":"&xopf;","𝓍":"&xscr;","ý":"&yacute;","я":"&yacy;","ŷ":"&ycirc;","ы":"&ycy;","¥":"&yen;","𝔶":"&yfr;","ї":"&yicy;","𝕪":"&yopf;","𝓎":"&yscr;","ю":"&yucy;","ÿ":"&yuml;","ź":"&zacute;","ž":"&zcaron;","з":"&zcy;","ż":"&zdot;","ζ":"&zeta;","𝔷":"&zfr;","ж":"&zhcy;","⇝":"&zigrarr;","𝕫":"&zopf;","𝓏":"&zscr;","‍":"&zwj;","‌":"&zwnj;"}}};

/***/ }),

/***/ "./node_modules/html-entities/lib/numeric-unicode-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/html-entities/lib/numeric-unicode-map.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.numericUnicodeMap={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376};

/***/ }),

/***/ "./node_modules/html-entities/lib/surrogate-pairs.js":
/*!***********************************************************!*\
  !*** ./node_modules/html-entities/lib/surrogate-pairs.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.fromCodePoint=String.fromCodePoint||function(astralCodePoint){return String.fromCharCode(Math.floor((astralCodePoint-65536)/1024)+55296,(astralCodePoint-65536)%1024+56320)};exports.getCodePoint=String.prototype.codePointAt?function(input,position){return input.codePointAt(position)}:function(input,position){return(input.charCodeAt(position)-55296)*1024+input.charCodeAt(position+1)-56320+65536};exports.highSurrogateFrom=55296;exports.highSurrogateTo=56319;

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Virtual Keyboard</title>\n  </head>\n  <body>\n    <!-- \n    <div class=\"wrapper\">\n      <div class=\"text-area\">\n        <textarea autofocus></textarea>\n      </div>\n      <div class=\"keys\">\n        <div class=\"row\">\n          <div class=\"key\">\n            <kbd>A</kbd>\n          </div>\n          <div class=\"key\">\n            <kbd>A</kbd>\n          </div>\n          <div class=\"key\">\n            <kbd>A</kbd>\n          </div>\n        </div>\n      </div>\n    </div>\n-->\n  </body>\n</html>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js":
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WebSocketClient; }
/* harmony export */ });
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var WebSocketClient = /*#__PURE__*/function () {
  /**
   * @param {string} url
   */
  function WebSocketClient(url) {
    _classCallCheck(this, WebSocketClient);

    this.client = new WebSocket(url);

    this.client.onerror = function (error) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_0__.log.error(error);
    };
  }
  /**
   * @param {(...args: any[]) => void} f
   */


  _createClass(WebSocketClient, [{
    key: "onOpen",
    value: function onOpen(f) {
      this.client.onopen = f;
    }
    /**
     * @param {(...args: any[]) => void} f
     */

  }, {
    key: "onClose",
    value: function onClose(f) {
      this.client.onclose = f;
    } // call f with the message string as the first argument

    /**
     * @param {(...args: any[]) => void} f
     */

  }, {
    key: "onMessage",
    value: function onMessage(f) {
      this.client.onmessage = function (e) {
        f(e.data);
      };
    }
  }]);

  return WebSocketClient;
}();



/***/ }),

/***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&reconnect=10":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&reconnect=10 ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
var __resourceQuery = "?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&reconnect=10";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/log.js */ "./node_modules/webpack/hot/log.js");
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/stripAnsi.js */ "./node_modules/webpack-dev-server/client/utils/stripAnsi.js");
/* harmony import */ var _utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/parseURL.js */ "./node_modules/webpack-dev-server/client/utils/parseURL.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.js */ "./node_modules/webpack-dev-server/client/socket.js");
/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.js */ "./node_modules/webpack-dev-server/client/overlay.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/sendMessage.js */ "./node_modules/webpack-dev-server/client/utils/sendMessage.js");
/* harmony import */ var _utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/reloadApp.js */ "./node_modules/webpack-dev-server/client/utils/reloadApp.js");
/* harmony import */ var _utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/createSocketURL.js */ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js");
/* global __resourceQuery, __webpack_hash__ */
/// <reference types="webpack/module" />









/**
 * @typedef {Object} Options
 * @property {boolean} hot
 * @property {boolean} liveReload
 * @property {boolean} progress
 * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay
 * @property {string} [logging]
 * @property {number} [reconnect]
 */

/**
 * @typedef {Object} Status
 * @property {boolean} isUnloading
 * @property {string} currentHash
 * @property {string} [previousHash]
 */

/**
 * @type {Status}
 */

var status = {
  isUnloading: false,
  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement
  // eslint-disable-next-line camelcase
  currentHash:  true ? __webpack_require__.h() : 0
};
/** @type {Options} */

var options = {
  hot: false,
  liveReload: false,
  progress: false,
  overlay: false
};
var parsedResourceQuery = (0,_utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__["default"])(__resourceQuery);

if (parsedResourceQuery.hot === "true") {
  options.hot = true;
  _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Hot Module Replacement enabled.");
}

if (parsedResourceQuery["live-reload"] === "true") {
  options.liveReload = true;
  _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Live Reloading enabled.");
}

if (parsedResourceQuery.logging) {
  options.logging = parsedResourceQuery.logging;
}

if (typeof parsedResourceQuery.reconnect !== "undefined") {
  options.reconnect = Number(parsedResourceQuery.reconnect);
}
/**
 * @param {string} level
 */


function setAllLogLevel(level) {
  // This is needed because the HMR logger operate separately from dev server logger
  webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(level === "verbose" || level === "log" ? "info" : level);
  (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.setLogLevel)(level);
}

if (options.logging) {
  setAllLogLevel(options.logging);
}

self.addEventListener("beforeunload", function () {
  status.isUnloading = true;
});
var onSocketMessage = {
  hot: function hot() {
    if (parsedResourceQuery.hot === "false") {
      return;
    }

    options.hot = true;
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Hot Module Replacement enabled.");
  },
  liveReload: function liveReload() {
    if (parsedResourceQuery["live-reload"] === "false") {
      return;
    }

    options.liveReload = true;
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Live Reloading enabled.");
  },
  invalid: function invalid() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Invalid");
  },

  /**
   * @param {string} hash
   */
  hash: function hash(_hash) {
    status.previousHash = status.currentHash;
    status.currentHash = _hash;
  },
  logging: setAllLogLevel,

  /**
   * @param {boolean} value
   */
  overlay: function overlay(value) {
    if (typeof document === "undefined") {
      return;
    }

    options.overlay = value;
  },

  /**
   * @param {number} value
   */
  reconnect: function reconnect(value) {
    if (parsedResourceQuery.reconnect === "false") {
      return;
    }

    options.reconnect = value;
  },

  /**
   * @param {boolean} value
   */
  progress: function progress(value) {
    options.progress = value;
  },

  /**
   * @param {{ pluginName?: string, percent: number, msg: string }} data
   */
  "progress-update": function progressUpdate(data) {
    if (options.progress) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Progress", data);
  },
  "still-ok": function stillOk() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Nothing changed.");

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("StillOk");
  },
  ok: function ok() {
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Ok");

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
  },
  // TODO: remove in v5 in favor of 'static-changed'

  /**
   * @param {string} file
   */
  "content-changed": function contentChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },

  /**
   * @param {string} file
   */
  "static-changed": function staticChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },

  /**
   * @param {Error[]} warnings
   * @param {any} params
   */
  warnings: function warnings(_warnings, params) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn("Warnings while compiling.");

    var printableWarnings = _warnings.map(function (error) {
      var _formatProblem = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("warning", error),
          header = _formatProblem.header,
          body = _formatProblem.body;

      return "".concat(header, "\n").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body));
    });

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Warnings", printableWarnings);

    for (var i = 0; i < printableWarnings.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(printableWarnings[i]);
    }

    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;

    if (needShowOverlayForWarnings) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)("warning", _warnings);
    }

    if (params && params.preventReloading) {
      return;
    }

    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
  },

  /**
   * @param {Error[]} errors
   */
  errors: function errors(_errors) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error("Errors while compiling. Reload prevented.");

    var printableErrors = _errors.map(function (error) {
      var _formatProblem2 = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("error", error),
          header = _formatProblem2.header,
          body = _formatProblem2.body;

      return "".concat(header, "\n").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body));
    });

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Errors", printableErrors);

    for (var i = 0; i < printableErrors.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(printableErrors[i]);
    }

    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;

    if (needShowOverlayForErrors) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)("error", _errors);
    }
  },

  /**
   * @param {Error} error
   */
  error: function error(_error) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(_error);
  },
  close: function close() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Disconnected!");

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Close");
  }
};
var socketURL = (0,_utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__["default"])(parsedResourceQuery);
(0,_socket_js__WEBPACK_IMPORTED_MODULE_3__["default"])(socketURL, onSocketMessage, options.reconnect);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/modules/logger/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/modules/logger/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client-src/modules/logger/SyncBailHookFake.js":
/*!*******************************************************!*\
  !*** ./client-src/modules/logger/SyncBailHookFake.js ***!
  \*******************************************************/
/***/ (function(module) {


/**
 * Client stub for tapable SyncBailHook
 */

module.exports = function clientTapableSyncBailHook() {
  return {
    call: function call() {}
  };
};

/***/ }),

/***/ "./node_modules/webpack/lib/logging/Logger.js":
/*!****************************************************!*\
  !*** ./node_modules/webpack/lib/logging/Logger.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
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
    Object.defineProperty(target, descriptor.key, descriptor);
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

var LogType = Object.freeze({
  error:
  /** @type {"error"} */
  "error",
  // message, c style arguments
  warn:
  /** @type {"warn"} */
  "warn",
  // message, c style arguments
  info:
  /** @type {"info"} */
  "info",
  // message, c style arguments
  log:
  /** @type {"log"} */
  "log",
  // message, c style arguments
  debug:
  /** @type {"debug"} */
  "debug",
  // message, c style arguments
  trace:
  /** @type {"trace"} */
  "trace",
  // no arguments
  group:
  /** @type {"group"} */
  "group",
  // [label]
  groupCollapsed:
  /** @type {"groupCollapsed"} */
  "groupCollapsed",
  // [label]
  groupEnd:
  /** @type {"groupEnd"} */
  "groupEnd",
  // [label]
  profile:
  /** @type {"profile"} */
  "profile",
  // [profileName]
  profileEnd:
  /** @type {"profileEnd"} */
  "profileEnd",
  // [profileName]
  time:
  /** @type {"time"} */
  "time",
  // name, time as [seconds, nanoseconds]
  clear:
  /** @type {"clear"} */
  "clear",
  // no arguments
  status:
  /** @type {"status"} */
  "status" // message, arguments

});
exports.LogType = LogType;
/** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */

var LOG_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger raw log method");
var TIMERS_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger times");
var TIMERS_AGGREGATES_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger aggregated times");

var WebpackLogger = /*#__PURE__*/function () {
  /**
   * @param {function(LogTypeEnum, any[]=): void} log log function
   * @param {function(string | function(): string): WebpackLogger} getChildLogger function to create child logger
   */
  function WebpackLogger(log, getChildLogger) {
    _classCallCheck(this, WebpackLogger);

    this[LOG_SYMBOL] = log;
    this.getChildLogger = getChildLogger;
  }

  _createClass(WebpackLogger, [{
    key: "error",
    value: function error() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this[LOG_SYMBOL](LogType.error, args);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this[LOG_SYMBOL](LogType.warn, args);
    }
  }, {
    key: "info",
    value: function info() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this[LOG_SYMBOL](LogType.info, args);
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      this[LOG_SYMBOL](LogType.log, args);
    }
  }, {
    key: "debug",
    value: function debug() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      this[LOG_SYMBOL](LogType.debug, args);
    }
  }, {
    key: "assert",
    value: function assert(assertion) {
      if (!assertion) {
        for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          args[_key6 - 1] = arguments[_key6];
        }

        this[LOG_SYMBOL](LogType.error, args);
      }
    }
  }, {
    key: "trace",
    value: function trace() {
      this[LOG_SYMBOL](LogType.trace, ["Trace"]);
    }
  }, {
    key: "clear",
    value: function clear() {
      this[LOG_SYMBOL](LogType.clear);
    }
  }, {
    key: "status",
    value: function status() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      this[LOG_SYMBOL](LogType.status, args);
    }
  }, {
    key: "group",
    value: function group() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      this[LOG_SYMBOL](LogType.group, args);
    }
  }, {
    key: "groupCollapsed",
    value: function groupCollapsed() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      this[LOG_SYMBOL](LogType.groupCollapsed, args);
    }
  }, {
    key: "groupEnd",
    value: function groupEnd() {
      for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }

      this[LOG_SYMBOL](LogType.groupEnd, args);
    }
  }, {
    key: "profile",
    value: function profile(label) {
      this[LOG_SYMBOL](LogType.profile, [label]);
    }
  }, {
    key: "profileEnd",
    value: function profileEnd(label) {
      this[LOG_SYMBOL](LogType.profileEnd, [label]);
    }
  }, {
    key: "time",
    value: function time(label) {
      this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();
      this[TIMERS_SYMBOL].set(label, process.hrtime());
    }
  }, {
    key: "timeLog",
    value: function timeLog(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeLog()"));
      }

      var time = process.hrtime(prev);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }
  }, {
    key: "timeEnd",
    value: function timeEnd(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeEnd()"));
      }

      var time = process.hrtime(prev);
      this[TIMERS_SYMBOL].delete(label);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }
  }, {
    key: "timeAggregate",
    value: function timeAggregate(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeAggregate()"));
      }

      var time = process.hrtime(prev);
      this[TIMERS_SYMBOL].delete(label);
      this[TIMERS_AGGREGATES_SYMBOL] = this[TIMERS_AGGREGATES_SYMBOL] || new Map();
      var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);

      if (current !== undefined) {
        if (time[1] + current[1] > 1e9) {
          time[0] += current[0] + 1;
          time[1] = time[1] - 1e9 + current[1];
        } else {
          time[0] += current[0];
          time[1] += current[1];
        }
      }

      this[TIMERS_AGGREGATES_SYMBOL].set(label, time);
    }
  }, {
    key: "timeAggregateEnd",
    value: function timeAggregateEnd(label) {
      if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;
      var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);
      if (time === undefined) return;
      this[TIMERS_AGGREGATES_SYMBOL].delete(label);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }
  }]);

  return WebpackLogger;
}();

exports.Logger = WebpackLogger;

/***/ }),

/***/ "./node_modules/webpack/lib/logging/createConsoleLogger.js":
/*!*****************************************************************!*\
  !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_10785__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var _require = __nested_webpack_require_10785__(/*! ./Logger */ "./node_modules/webpack/lib/logging/Logger.js"),
    LogType = _require.LogType;
/** @typedef {import("../../declarations/WebpackOptions").FilterItemTypes} FilterItemTypes */

/** @typedef {import("../../declarations/WebpackOptions").FilterTypes} FilterTypes */

/** @typedef {import("./Logger").LogTypeEnum} LogTypeEnum */

/** @typedef {function(string): boolean} FilterFunction */

/**
 * @typedef {Object} LoggerConsole
 * @property {function(): void} clear
 * @property {function(): void} trace
 * @property {(...args: any[]) => void} info
 * @property {(...args: any[]) => void} log
 * @property {(...args: any[]) => void} warn
 * @property {(...args: any[]) => void} error
 * @property {(...args: any[]) => void=} debug
 * @property {(...args: any[]) => void=} group
 * @property {(...args: any[]) => void=} groupCollapsed
 * @property {(...args: any[]) => void=} groupEnd
 * @property {(...args: any[]) => void=} status
 * @property {(...args: any[]) => void=} profile
 * @property {(...args: any[]) => void=} profileEnd
 * @property {(...args: any[]) => void=} logTime
 */

/**
 * @typedef {Object} LoggerOptions
 * @property {false|true|"none"|"error"|"warn"|"info"|"log"|"verbose"} level loglevel
 * @property {FilterTypes|boolean} debug filter for debug logging
 * @property {LoggerConsole} console the console to log to
 */

/**
 * @param {FilterItemTypes} item an input item
 * @returns {FilterFunction} filter function
 */


var filterToFunction = function filterToFunction(item) {
  if (typeof item === "string") {
    var regExp = new RegExp("[\\\\/]".concat(item.replace( // eslint-disable-next-line no-useless-escape
    /[-[\]{}()*+?.\\^$|]/g, "\\$&"), "([\\\\/]|$|!|\\?)"));
    return function (ident) {
      return regExp.test(ident);
    };
  }

  if (item && typeof item === "object" && typeof item.test === "function") {
    return function (ident) {
      return item.test(ident);
    };
  }

  if (typeof item === "function") {
    return item;
  }

  if (typeof item === "boolean") {
    return function () {
      return item;
    };
  }
};
/**
 * @enum {number}
 */


var LogLevel = {
  none: 6,
  false: 6,
  error: 5,
  warn: 4,
  info: 3,
  log: 2,
  true: 2,
  verbose: 1
};
/**
 * @param {LoggerOptions} options options object
 * @returns {function(string, LogTypeEnum, any[]): void} logging function
 */

module.exports = function (_ref) {
  var _ref$level = _ref.level,
      level = _ref$level === void 0 ? "info" : _ref$level,
      _ref$debug = _ref.debug,
      debug = _ref$debug === void 0 ? false : _ref$debug,
      console = _ref.console;
  var debugFilters = typeof debug === "boolean" ? [function () {
    return debug;
  }] :
  /** @type {FilterItemTypes[]} */
  [].concat(debug).map(filterToFunction);
  /** @type {number} */

  var loglevel = LogLevel["".concat(level)] || 0;
  /**
   * @param {string} name name of the logger
   * @param {LogTypeEnum} type type of the log entry
   * @param {any[]} args arguments of the log entry
   * @returns {void}
   */

  var logger = function logger(name, type, args) {
    var labeledArgs = function labeledArgs() {
      if (Array.isArray(args)) {
        if (args.length > 0 && typeof args[0] === "string") {
          return ["[".concat(name, "] ").concat(args[0])].concat(_toConsumableArray(args.slice(1)));
        } else {
          return ["[".concat(name, "]")].concat(_toConsumableArray(args));
        }
      } else {
        return [];
      }
    };

    var debug = debugFilters.some(function (f) {
      return f(name);
    });

    switch (type) {
      case LogType.debug:
        if (!debug) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

        if (typeof console.debug === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.debug.apply(console, _toConsumableArray(labeledArgs()));
        } else {
          console.log.apply(console, _toConsumableArray(labeledArgs()));
        }

        break;

      case LogType.log:
        if (!debug && loglevel > LogLevel.log) return;
        console.log.apply(console, _toConsumableArray(labeledArgs()));
        break;

      case LogType.info:
        if (!debug && loglevel > LogLevel.info) return;
        console.info.apply(console, _toConsumableArray(labeledArgs()));
        break;

      case LogType.warn:
        if (!debug && loglevel > LogLevel.warn) return;
        console.warn.apply(console, _toConsumableArray(labeledArgs()));
        break;

      case LogType.error:
        if (!debug && loglevel > LogLevel.error) return;
        console.error.apply(console, _toConsumableArray(labeledArgs()));
        break;

      case LogType.trace:
        if (!debug) return;
        console.trace();
        break;

      case LogType.groupCollapsed:
        if (!debug && loglevel > LogLevel.log) return;

        if (!debug && loglevel > LogLevel.verbose) {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          if (typeof console.groupCollapsed === "function") {
            // eslint-disable-next-line node/no-unsupported-features/node-builtins
            console.groupCollapsed.apply(console, _toConsumableArray(labeledArgs()));
          } else {
            console.log.apply(console, _toConsumableArray(labeledArgs()));
          }

          break;
        }

      // falls through

      case LogType.group:
        if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

        if (typeof console.group === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.group.apply(console, _toConsumableArray(labeledArgs()));
        } else {
          console.log.apply(console, _toConsumableArray(labeledArgs()));
        }

        break;

      case LogType.groupEnd:
        if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

        if (typeof console.groupEnd === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.groupEnd();
        }

        break;

      case LogType.time:
        {
          if (!debug && loglevel > LogLevel.log) return;
          var ms = args[1] * 1000 + args[2] / 1000000;
          var msg = "[".concat(name, "] ").concat(args[0], ": ").concat(ms, " ms");

          if (typeof console.logTime === "function") {
            console.logTime(msg);
          } else {
            console.log(msg);
          }

          break;
        }

      case LogType.profile:
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        if (typeof console.profile === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.profile.apply(console, _toConsumableArray(labeledArgs()));
        }

        break;

      case LogType.profileEnd:
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        if (typeof console.profileEnd === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.profileEnd.apply(console, _toConsumableArray(labeledArgs()));
        }

        break;

      case LogType.clear:
        if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

        if (typeof console.clear === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.clear();
        }

        break;

      case LogType.status:
        if (!debug && loglevel > LogLevel.info) return;

        if (typeof console.status === "function") {
          if (args.length === 0) {
            console.status();
          } else {
            console.status.apply(console, _toConsumableArray(labeledArgs()));
          }
        } else {
          if (args.length !== 0) {
            console.info.apply(console, _toConsumableArray(labeledArgs()));
          }
        }

        break;

      default:
        throw new Error("Unexpected LogType ".concat(type));
    }
  };

  return logger;
};

/***/ }),

/***/ "./node_modules/webpack/lib/logging/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/webpack/lib/logging/runtime.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_20872__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var SyncBailHook = __nested_webpack_require_20872__(/*! tapable/lib/SyncBailHook */ "./client-src/modules/logger/SyncBailHookFake.js");

var _require = __nested_webpack_require_20872__(/*! ./Logger */ "./node_modules/webpack/lib/logging/Logger.js"),
    Logger = _require.Logger;

var createConsoleLogger = __nested_webpack_require_20872__(/*! ./createConsoleLogger */ "./node_modules/webpack/lib/logging/createConsoleLogger.js");
/** @type {createConsoleLogger.LoggerOptions} */


var currentDefaultLoggerOptions = {
  level: "info",
  debug: false,
  console: console
};
var currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
/**
 * @param {string} name name of the logger
 * @returns {Logger} a logger
 */

exports.getLogger = function (name) {
  return new Logger(function (type, args) {
    if (exports.hooks.log.call(name, type, args) === undefined) {
      currentDefaultLogger(name, type, args);
    }
  }, function (childName) {
    return exports.getLogger("".concat(name, "/").concat(childName));
  });
};
/**
 * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options
 * @returns {void}
 */


exports.configureDefaultLogger = function (options) {
  _extends(currentDefaultLoggerOptions, options);

  currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
};

exports.hooks = {
  log: new SyncBailHook(["origin", "type", "args"])
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_22988__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_22988__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_22988__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_22988__.o(definition, key) && !__nested_webpack_require_22988__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_22988__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_22988__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************************!*\
  !*** ./client-src/modules/logger/index.js ***!
  \********************************************/
__nested_webpack_require_22988__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_22988__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport default export from named module */ webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__; }
/* harmony export */ });
/* harmony import */ var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_22988__(/*! webpack/lib/logging/runtime.js */ "./node_modules/webpack/lib/logging/runtime.js");

}();
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay.js":
/*!***********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatProblem": function() { return /* binding */ formatProblem; },
/* harmony export */   "hide": function() { return /* binding */ hide; },
/* harmony export */   "show": function() { return /* binding */ show; }
/* harmony export */ });
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-html-community */ "./node_modules/ansi-html-community/index.js");
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_html_community__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/lib/index.js");
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_1__);
// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)
// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).


var colors = {
  reset: ["transparent", "transparent"],
  black: "181818",
  red: "E36049",
  green: "B3CB74",
  yellow: "FFD080",
  blue: "7CAFC2",
  magenta: "7FACCA",
  cyan: "C3C2EF",
  lightgrey: "EBE7E3",
  darkgrey: "6D7891"
};
/** @type {HTMLIFrameElement | null | undefined} */

var iframeContainerElement;
/** @type {HTMLDivElement | null | undefined} */

var containerElement;
/** @type {Array<(element: HTMLDivElement) => void>} */

var onLoadQueue = [];
ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default().setColors(colors);

function createContainer() {
  iframeContainerElement = document.createElement("iframe");
  iframeContainerElement.id = "webpack-dev-server-client-overlay";
  iframeContainerElement.src = "about:blank";
  iframeContainerElement.style.position = "fixed";
  iframeContainerElement.style.left = 0;
  iframeContainerElement.style.top = 0;
  iframeContainerElement.style.right = 0;
  iframeContainerElement.style.bottom = 0;
  iframeContainerElement.style.width = "100vw";
  iframeContainerElement.style.height = "100vh";
  iframeContainerElement.style.border = "none";
  iframeContainerElement.style.zIndex = 9999999999;

  iframeContainerElement.onload = function () {
    containerElement =
    /** @type {Document} */

    /** @type {HTMLIFrameElement} */
    iframeContainerElement.contentDocument.createElement("div");
    containerElement.id = "webpack-dev-server-client-overlay-div";
    containerElement.style.position = "fixed";
    containerElement.style.boxSizing = "border-box";
    containerElement.style.left = 0;
    containerElement.style.top = 0;
    containerElement.style.right = 0;
    containerElement.style.bottom = 0;
    containerElement.style.width = "100vw";
    containerElement.style.height = "100vh";
    containerElement.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
    containerElement.style.color = "#E8E8E8";
    containerElement.style.fontFamily = "Menlo, Consolas, monospace";
    containerElement.style.fontSize = "large";
    containerElement.style.padding = "2rem";
    containerElement.style.lineHeight = "1.2";
    containerElement.style.whiteSpace = "pre-wrap";
    containerElement.style.overflow = "auto";
    var headerElement = document.createElement("span");
    headerElement.innerText = "Compiled with problems:";
    var closeButtonElement = document.createElement("button");
    closeButtonElement.innerText = "X";
    closeButtonElement.style.background = "transparent";
    closeButtonElement.style.border = "none";
    closeButtonElement.style.fontSize = "20px";
    closeButtonElement.style.fontWeight = "bold";
    closeButtonElement.style.color = "white";
    closeButtonElement.style.cursor = "pointer";
    closeButtonElement.style.cssFloat = "right"; // @ts-ignore

    closeButtonElement.style.styleFloat = "right";
    closeButtonElement.addEventListener("click", function () {
      hide();
    });
    containerElement.appendChild(headerElement);
    containerElement.appendChild(closeButtonElement);
    containerElement.appendChild(document.createElement("br"));
    containerElement.appendChild(document.createElement("br"));
    /** @type {Document} */

    /** @type {HTMLIFrameElement} */
    iframeContainerElement.contentDocument.body.appendChild(containerElement);
    onLoadQueue.forEach(function (onLoad) {
      onLoad(
      /** @type {HTMLDivElement} */
      containerElement);
    });
    onLoadQueue = [];
    /** @type {HTMLIFrameElement} */

    iframeContainerElement.onload = null;
  };

  document.body.appendChild(iframeContainerElement);
}
/**
 * @param {(element: HTMLDivElement) => void} callback
 */


function ensureOverlayExists(callback) {
  if (containerElement) {
    // Everything is ready, call the callback right away.
    callback(containerElement);
    return;
  }

  onLoadQueue.push(callback);

  if (iframeContainerElement) {
    return;
  }

  createContainer();
} // Successful compilation.


function hide() {
  if (!iframeContainerElement) {
    return;
  } // Clean up and reset internal state.


  document.body.removeChild(iframeContainerElement);
  iframeContainerElement = null;
  containerElement = null;
}
/**
 * @param {string} type
 * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string }} item
 * @returns {{ header: string, body: string }}
 */


function formatProblem(type, item) {
  var header = type === "warning" ? "WARNING" : "ERROR";
  var body = "";

  if (typeof item === "string") {
    body += item;
  } else {
    var file = item.file || ""; // eslint-disable-next-line no-nested-ternary

    var moduleName = item.moduleName ? item.moduleName.indexOf("!") !== -1 ? "".concat(item.moduleName.replace(/^(\s|\S)*!/, ""), " (").concat(item.moduleName, ")") : "".concat(item.moduleName) : "";
    var loc = item.loc;
    header += "".concat(moduleName || file ? " in ".concat(moduleName ? "".concat(moduleName).concat(file ? " (".concat(file, ")") : "") : file).concat(loc ? " ".concat(loc) : "") : "");
    body += item.message || "";
  }

  return {
    header: header,
    body: body
  };
} // Compilation with errors (e.g. syntax error or missing modules).

/**
 * @param {string} type
 * @param {Array<string  | { file?: string, moduleName?: string, loc?: string, message?: string }>} messages
 */


function show(type, messages) {
  ensureOverlayExists(function () {
    messages.forEach(function (message) {
      var entryElement = document.createElement("div");
      var typeElement = document.createElement("span");

      var _formatProblem = formatProblem(type, message),
          header = _formatProblem.header,
          body = _formatProblem.body;

      typeElement.innerText = header;
      typeElement.style.color = "#".concat(colors.red); // Make it look similar to our terminal.

      var text = ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default()((0,html_entities__WEBPACK_IMPORTED_MODULE_1__.encode)(body));
      var messageTextNode = document.createElement("div");
      messageTextNode.innerHTML = text;
      entryElement.appendChild(typeElement);
      entryElement.appendChild(document.createElement("br"));
      entryElement.appendChild(document.createElement("br"));
      entryElement.appendChild(messageTextNode);
      entryElement.appendChild(document.createElement("br"));
      entryElement.appendChild(document.createElement("br"));
      /** @type {HTMLDivElement} */

      containerElement.appendChild(entryElement);
    });
  });
}



/***/ }),

/***/ "./node_modules/webpack-dev-server/client/socket.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/socket.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "client": function() { return /* binding */ client; }
/* harmony export */ });
/* harmony import */ var _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__(/*! ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* global __webpack_dev_server_client__ */

 // this WebsocketClient is here as a default fallback, in case the client is not injected

/* eslint-disable camelcase */

var Client = // eslint-disable-next-line no-nested-ternary
typeof __webpack_dev_server_client__ !== "undefined" ? typeof __webpack_dev_server_client__.default !== "undefined" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* eslint-enable camelcase */

var retries = 0;
var maxRetries = 10; // Initialized client is exported so external consumers can utilize the same instance
// It is mutable to enforce singleton
// eslint-disable-next-line import/no-mutable-exports

var client = null;
/**
 * @param {string} url
 * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers
 * @param {number} [reconnect]
 */

var socket = function initSocket(url, handlers, reconnect) {
  client = new Client(url);
  client.onOpen(function () {
    retries = 0;

    if (typeof reconnect !== "undefined") {
      maxRetries = reconnect;
    }
  });
  client.onClose(function () {
    if (retries === 0) {
      handlers.close();
    } // Try to reconnect.


    client = null; // After 10 retries stop trying, to prevent logspam.

    if (retries < maxRetries) {
      // Exponentially increase timeout to reconnect.
      // Respectfully copied from the package `got`.
      // eslint-disable-next-line no-restricted-properties
      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
      retries += 1;
      _utils_log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("Trying to reconnect...");
      setTimeout(function () {
        socket(url, handlers, reconnect);
      }, retryInMs);
    }
  });
  client.onMessage(
  /**
   * @param {any} data
   */
  function (data) {
    var message = JSON.parse(data);

    if (handlers[message.type]) {
      handlers[message.type](message.data, message.params);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (socket);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/createSocketURL.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @param {{ protocol?: string, auth?: string, hostname?: string, port?: string, pathname?: string, search?: string, hash?: string, slashes?: boolean }} objURL
 * @returns {string}
 */
function format(objURL) {
  var protocol = objURL.protocol || "";

  if (protocol && !protocol.endsWith(":")) {
    protocol += ":";
  }

  var auth = objURL.auth || "";

  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ":");
    auth += "@";
  }

  var host = "";

  if (objURL.hostname) {
    host = auth + (objURL.hostname.indexOf(":") === -1 ? objURL.hostname : "[".concat(objURL.hostname, "]"));

    if (objURL.port) {
      host += ":".concat(objURL.port);
    }
  }

  var pathname = objURL.pathname || "";

  if (objURL.slashes) {
    host = "//".concat(host || "");

    if (pathname && pathname.charAt(0) !== "/") {
      pathname = "/".concat(pathname);
    }
  } else if (!host) {
    host = "";
  }

  var search = objURL.search || "";

  if (search && search.charAt(0) !== "?") {
    search = "?".concat(search);
  }

  var hash = objURL.hash || "";

  if (hash && hash.charAt(0) !== "#") {
    hash = "#".concat(hash);
  }

  pathname = pathname.replace(/[?#]/g,
  /**
   * @param {string} match
   * @returns {string}
   */
  function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace("#", "%23");
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}
/**
 * @param {URL & { fromCurrentScript?: boolean }} parsedURL
 * @returns {string}
 */


function createSocketURL(parsedURL) {
  var hostname = parsedURL.hostname; // Node.js module parses it as `::`
  // `new URL(urlString, [baseURLString])` parses it as '[::]'

  var isInAddrAny = hostname === "0.0.0.0" || hostname === "::" || hostname === "[::]"; // why do we need this check?
  // hostname n/a for file protocol (example, when using electron, ionic)
  // see: https://github.com/webpack/webpack-dev-server/pull/384

  if (isInAddrAny && self.location.hostname && self.location.protocol.indexOf("http") === 0) {
    hostname = self.location.hostname;
  }

  var socketURLProtocol = parsedURL.protocol || self.location.protocol; // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.

  if (socketURLProtocol === "auto:" || hostname && isInAddrAny && self.location.protocol === "https:") {
    socketURLProtocol = self.location.protocol;
  }

  socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, "ws");
  var socketURLAuth = ""; // `new URL(urlString, [baseURLstring])` doesn't have `auth` property
  // Parse authentication credentials in case we need them

  if (parsedURL.username) {
    socketURLAuth = parsedURL.username; // Since HTTP basic authentication does not allow empty username,
    // we only include password if the username is not empty.

    if (parsedURL.password) {
      // Result: <username>:<password>
      socketURLAuth = socketURLAuth.concat(":", parsedURL.password);
    }
  } // In case the host is a raw IPv6 address, it can be enclosed in
  // the brackets as the brackets are needed in the final URL string.
  // Need to remove those as url.format blindly adds its own set of brackets
  // if the host string contains colons. That would lead to non-working
  // double brackets (e.g. [[::]]) host
  //
  // All of these web socket url params are optionally passed in through resourceQuery,
  // so we need to fall back to the default if they are not provided


  var socketURLHostname = (hostname || self.location.hostname || "localhost").replace(/^\[(.*)\]$/, "$1");
  var socketURLPort = parsedURL.port;

  if (!socketURLPort || socketURLPort === "0") {
    socketURLPort = self.location.port;
  } // If path is provided it'll be passed in via the resourceQuery as a
  // query param so it has to be parsed out of the querystring in order for the
  // client to open the socket to the correct location.


  var socketURLPathname = "/ws";

  if (parsedURL.pathname && !parsedURL.fromCurrentScript) {
    socketURLPathname = parsedURL.pathname;
  }

  return format({
    protocol: socketURLProtocol,
    auth: socketURLAuth,
    hostname: socketURLHostname,
    port: socketURLPort,
    pathname: socketURLPathname,
    slashes: true
  });
}

/* harmony default export */ __webpack_exports__["default"] = (createSocketURL);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js":
/*!********************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @returns {string}
 */
function getCurrentScriptSource() {
  // `document.currentScript` is the most accurate way to find the current script,
  // but is not supported in all browsers.
  if (document.currentScript) {
    return document.currentScript.getAttribute("src");
  } // Fallback to getting all scripts running in the document.


  var scriptElements = document.scripts || [];
  var scriptElementsWithSrc = Array.prototype.filter.call(scriptElements, function (element) {
    return element.getAttribute("src");
  });

  if (scriptElementsWithSrc.length > 0) {
    var currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];
    return currentScript.getAttribute("src");
  } // Fail as there was no script to use.


  throw new Error("[webpack-dev-server] Failed to get current script source.");
}

/* harmony default export */ __webpack_exports__["default"] = (getCurrentScriptSource);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/log.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": function() { return /* binding */ log; },
/* harmony export */   "setLogLevel": function() { return /* binding */ setLogLevel; }
/* harmony export */ });
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logger/index.js */ "./node_modules/webpack-dev-server/client/modules/logger/index.js");
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__);

var name = "webpack-dev-server"; // default level is set on the client side, so it does not need
// to be set by the CLI or API

var defaultLevel = "info"; // options new options, merge with old options

/**
 * @param {false | true | "none" | "error" | "warn" | "info" | "log" | "verbose"} level
 * @returns {void}
 */

function setLogLevel(level) {
  _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().configureDefaultLogger({
    level: level
  });
}

setLogLevel(defaultLevel);
var log = _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().getLogger(name);


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/parseURL.js":
/*!******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/parseURL.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentScriptSource.js */ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js");

/**
 * @param {string} resourceQuery
 * @returns {{ [key: string]: string | boolean }}
 */

function parseURL(resourceQuery) {
  /** @type {{ [key: string]: string }} */
  var options = {};

  if (typeof resourceQuery === "string" && resourceQuery !== "") {
    var searchParams = resourceQuery.slice(1).split("&");

    for (var i = 0; i < searchParams.length; i++) {
      var pair = searchParams[i].split("=");
      options[pair[0]] = decodeURIComponent(pair[1]);
    }
  } else {
    // Else, get the url from the <script> this file was called with.
    var scriptSource = (0,_getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    var scriptSourceURL;

    try {
      // The placeholder `baseURL` with `window.location.href`,
      // is to allow parsing of path-relative or protocol-relative URLs,
      // and will have no effect if `scriptSource` is a fully valid URL.
      scriptSourceURL = new URL(scriptSource, self.location.href);
    } catch (error) {// URL parsing failed, do nothing.
      // We will still proceed to see if we can recover using `resourceQuery`
    }

    if (scriptSourceURL) {
      options = scriptSourceURL;
      options.fromCurrentScript = true;
    }
  }

  return options;
}

/* harmony default export */ __webpack_exports__["default"] = (parseURL);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/reloadApp.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/reloadApp.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/emitter.js */ "./node_modules/webpack/hot/emitter.js");
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");


/** @typedef {import("../index").Options} Options
/** @typedef {import("../index").Status} Status

/**
 * @param {Options} options
 * @param {Status} status
 */

function reloadApp(_ref, status) {
  var hot = _ref.hot,
      liveReload = _ref.liveReload;

  if (status.isUnloading) {
    return;
  }

  var currentHash = status.currentHash,
      previousHash = status.previousHash;
  var isInitial = currentHash.indexOf(
  /** @type {string} */
  previousHash) >= 0;

  if (isInitial) {
    return;
  }
  /**
   * @param {Window} rootWindow
   * @param {number} intervalId
   */


  function applyReload(rootWindow, intervalId) {
    clearInterval(intervalId);
    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App updated. Reloading...");
    rootWindow.location.reload();
  }

  var search = self.location.search.toLowerCase();
  var allowToHot = search.indexOf("webpack-dev-server-hot=false") === -1;
  var allowToLiveReload = search.indexOf("webpack-dev-server-live-reload=false") === -1;

  if (hot && allowToHot) {
    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App hot update...");
    webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().emit("webpackHotUpdate", status.currentHash);

    if (typeof self !== "undefined" && self.window) {
      // broadcast update to window
      self.postMessage("webpackHotUpdate".concat(status.currentHash), "*");
    }
  } // allow refreshing the page only if liveReload isn't disabled
  else if (liveReload && allowToLiveReload) {
    var rootWindow = self; // use parent window for reload (in case we're in an iframe with no valid src)

    var intervalId = self.setInterval(function () {
      if (rootWindow.location.protocol !== "about:") {
        // reload immediately if protocol is valid
        applyReload(rootWindow, intervalId);
      } else {
        rootWindow = rootWindow.parent;

        if (rootWindow.parent === rootWindow) {
          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways
          applyReload(rootWindow, intervalId);
        }
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reloadApp);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/sendMessage.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* global __resourceQuery WorkerGlobalScope */
// Send messages to the outside, so plugins can consume it.

/**
 * @param {string} type
 * @param {any} [data]
 */
function sendMsg(type, data) {
  if (typeof self !== "undefined" && (typeof WorkerGlobalScope === "undefined" || !(self instanceof WorkerGlobalScope))) {
    self.postMessage({
      type: "webpack".concat(type),
      data: data
    }, "*");
  }
}

/* harmony default export */ __webpack_exports__["default"] = (sendMsg);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/stripAnsi.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/stripAnsi.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ansiRegex = new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"), "g");
/**
 *
 * Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) from a string.
 * Adapted from code originally released by Sindre Sorhus
 * Licensed the MIT License
 *
 * @param {string} string
 * @return {string}
 */

function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a `string`, got `".concat(typeof string, "`"));
  }

  return string.replace(ansiRegex, "");
}

/* harmony default export */ __webpack_exports__["default"] = (stripAnsi);

/***/ }),

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!************************************************!*\
  !*** ./node_modules/webpack/hot/dev-server.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/* globals __webpack_hash__ */
if (true) {
	var lastHash;
	var upToDate = function upToDate() {
		return lastHash.indexOf(__webpack_require__.h()) >= 0;
	};
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");
	var check = function check() {
		module.hot
			.check(true)
			.then(function (updatedModules) {
				if (!updatedModules) {
					log("warning", "[HMR] Cannot find update. Need to do a full reload!");
					log(
						"warning",
						"[HMR] (Probably because of restarting the webpack-dev-server)"
					);
					window.location.reload();
					return;
				}

				if (!upToDate()) {
					check();
				}

				__webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);

				if (upToDate()) {
					log("info", "[HMR] App is up to date.");
				}
			})
			.catch(function (err) {
				var status = module.hot.status();
				if (["abort", "fail"].indexOf(status) >= 0) {
					log(
						"warning",
						"[HMR] Cannot apply update. Need to do a full reload!"
					);
					log("warning", "[HMR] " + log.formatError(err));
					window.location.reload();
				} else {
					log("warning", "[HMR] Update failed: " + log.formatError(err));
				}
			});
	};
	var hotEmitter = __webpack_require__(/*! ./emitter */ "./node_modules/webpack/hot/emitter.js");
	hotEmitter.on("webpackHotUpdate", function (currentHash) {
		lastHash = currentHash;
		if (!upToDate() && module.hot.status() === "idle") {
			log("info", "[HMR] Checking for updates on the server...");
			check();
		}
	});
	log("info", "[HMR] Waiting for update signal from WDS...");
} else {}


/***/ }),

/***/ "./node_modules/webpack/hot/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/webpack/hot/emitter.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
module.exports = new EventEmitter();


/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function (updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function (moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	if (unacceptedModules.length > 0) {
		log(
			"warning",
			"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
		);
		unacceptedModules.forEach(function (moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if (!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function (moduleId) {
			if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function (moduleId) {
			return typeof moduleId === "number";
		});
		if (numberIds)
			log(
				"info",
				'[HMR] Consider using the optimization.moduleIds: "named" for module names.'
			);
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ (function(module) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function (level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function (level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function (level) {
	logLevel = level;
};

module.exports.formatError = function (err) {
	var message = err.message;
	var stack = err.stack;
	if (!stack) {
		return message;
	} else if (stack.indexOf(message) < 0) {
		return message + "\n" + stack;
	} else {
		return stack;
	}
};


/***/ }),

/***/ "./src/assets/kayboard-bg.jpg":
/*!************************************!*\
  !*** ./src/assets/kayboard-bg.jpg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "14c5b0e73e1ecd33038d.jpg";

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "index." + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "2aeaa9f0f64459eb9bbc"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "salazarsdf-virtual_keyboard:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatesalazarsdf_virtual_keyboard"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&reconnect=10");
/******/ 	__webpack_require__("./node_modules/webpack/hot/dev-server.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVVFRSxPQUFPLEVBQUU7QUFWWCxDQWJGLEVBeUJFO0VBQ0VKLElBQUksRUFBRSxRQURSO0VBRUVDLE1BQU0sRUFBRTtJQUNOQyxPQUFPLEVBQUUsR0FESDtJQUVOVixLQUFLLEVBQUU7RUFGRCxDQUZWO0VBTUVXLE9BQU8sRUFBRTtJQUNQWCxLQUFLLEVBQUUsR0FEQTtJQUVQVSxPQUFPLEVBQUU7RUFGRixDQU5YO0VBVUVFLE9BQU8sRUFBRTtBQVZYLENBekJGLEVBcUNFO0VBQ0VKLElBQUksRUFBRSxRQURSO0VBRUVDLE1BQU0sRUFBRTtJQUNOQyxPQUFPLEVBQUUsR0FESDtJQUVOVixLQUFLLEVBQUU7RUFGRCxDQUZWO0VBTUVXLE9BQU8sRUFBRTtJQUNQWCxLQUFLLEVBQUUsR0FEQTtJQUVQVSxPQUFPLEVBQUU7RUFGRixDQU5YO0VBVUVFLE9BQU8sRUFBRTtBQVZYLENBckNGLEVBaURFO0VBQ0VKLElBQUksRUFBRSxRQURSO0VBRUVDLE1BQU0sRUFBRTtJQUNOQyxPQUFPLEVBQUUsR0FESDtJQUVOVixLQUFLLEVBQUU7RUFGRCxDQUZWO0VBTUVXLE9BQU8sRUFBRTtJQUNQWCxLQUFLLEVBQUUsR0FEQTtJQUVQVSxPQUFPLEVBQUU7RUFGRixDQU5YO0VBVUVFLE9BQU8sRUFBRTtBQVZYLENBakRGLEVBNkRFO0VBQ0VKLElBQUksRUFBRSxRQURSO0VBRUVDLE1BQU0sRUFBRTtJQUNOQyxPQUFPLEVBQUUsR0FESDtJQUVOVixLQUFLLEVBQUU7RUFGRCxDQUZWO0VBTUVXLE9BQU8sRUFBRTtJQUNQWCxLQUFLLEVBQUUsR0FEQTtJQUVQVSxPQUFPLEVBQUU7RUFGRixDQU5YO0VBVUVFLE9BQU8sRUFBRTtBQVZYLENBN0RGLEVBeUVFO0VBQ0VKLElBQUksRUFBRSxRQURSO0VBRUVDLE1BQU0sRUFBRTtJQUNOQyxPQUFPLEVBQUUsR0FESDtJQUVOVixLQUFLLEVBQUU7RUFGRCxDQUZWO0VBTUVXLE9BQU8sRUFBRTtJQUNQWCxLQUFLLEVBQUUsR0FEQTtJQUVQVSxPQUFPLEVBQUU7RUFGRixDQU5YO0VB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SUFFUFUsT0FBTyxFQUFFO0VBRkYsQ0FOWDtFQVVFRSxPQUFPLEVBQUU7QUFWWCxDQTFCRixFQXNDRTtFQUNFSixJQUFJLEVBQUUsTUFEUjtFQUVFQyxNQUFNLEVBQUU7SUFDTkMsT0FBTyxFQUFFLEdBREg7SUFFTlYsS0FBSyxFQUFFO0VBRkQsQ0FGVjtFQU1FVyxPQUFPLEVBQUU7SUFDUFgsS0FBSyxFQUFFLEdBREE7SUFFUFUsT0FBTyxFQUFFO0VBRkYsQ0FOWDtFQVVFRSxPQUFPLEVBQUU7QUFWWCxDQXRDRixFQWtERTtFQUNFSixJQUFJLEVBQUUsTUFEUjtFQUVFQyxNQUFNLEVBQUU7SUFDTkMsT0FBTyxFQUFFLEdBREg7SUFFTlYsS0FBSyxFQUFFO0VBRkQsQ0FGVjtFQU1FVyxPQUFPLEVBQUU7SUFDUFgsS0FBSyxFQUFFLEdBREE7SUFFUFUsT0FBTyxFQUFFO0VBRkYsQ0FOWDtFQVVFRSxPQUFPLEVBQUU7QUFWWCxDQWxERixFQThERTtFQUNFSixJQUFJLEVBQUUsTUFEUjtFQUVFQyxNQUFNLEVBQUU7SUFDTkMsT0FBTyxFQUFFLEdBREg7SUFFTlYsS0FBSyxFQUFFO0VBRkQsQ0FGVjtFQU1FVyxPQUFPLEVBQUU7SUFDUFgsS0FBSyxFQUFFLEdBREE7SUFFUFUsT0FBTyxFQUFFO0VBRkYsQ0FOWDtFQVVFRSxPQUFPLEVBQUU7QUFWWCxDQTlERixFQTBFRTtFQUNFSixJQUFJLEVBQUUsTUFEUjtFQUVFQyxNQUFNLEVBQUU7SUFDTkMsT0FBTyxFQUFFLEdBREg7SUFFTlYsS0FBSyxFQUFFO0VBRkQsQ0FGVjtFQU1FVyxPQUFPLEVBQUU7SUFDUFgsS0FBSyxFQUFFLEdBREE7SUFFUFUsT0FBTyxFQUFFO0VBRkYsQ0FOWDtFQVVFRSxPQUFPLEVBQUU7QUFWWCxDQTFFRixFQXNGRTtFQUNFSixJQUFJLEVBQUUsTUFEUjtFQUVFQyxNQUFNLEVBQUU7SUFDTkMsT0FBTyxFQUFFLEdBREg7SUFFTlYsS0FBSyxFQUFFO0VBRkQsQ0FGVjtFQU1FVyxPQUFPLEVBQUU7SUFDUFgsS0FBSyxFQUFFLEdBREE7SUFFUFUsT0FBTyxFQUFFO0VBRkYsQ0FOWDtFQVVFRSxPQUFPLEVBQUU7QUFWWCxDQXRGRixFQWtHRTtFQUNFSixJQUFJLEVBQUUsTUFEUjtFQUVFQyxNQUFNLEVBQUU7SUFDTkMsT0FBTyxFQUFFLEdBREg7SUFFTlYsS0FBSyxFQUFFO0VBRkQsQ0FGVjtFQU1FVyxPQUFPLEVBQUU7SUFDUFgsS0FBSyxFQUFFLEdBREE7SUFFUFUsT0FBTyxFQUFFO0VBRkYsQ0FOWDtFQVVFRSxPQUFPLEVBQUU7QUFWWCxDQWxHRixFQThHRTtFQUNFSixJQUFJLEVBQUUsTUFEUjtFQUVFQyxNQUFNLEVBQUU7SUFDTkMsT0FBTyxFQUFFLEdBREg7SUFFTlYsS0FBSyxFQUFFO0VBRkQsQ0FGVjtFQU1FVyxPQUFPLEVBQUU7SUFDUFgsS0FBSyxFQUFFLEdBREE7SUFFUFUsT0FBTyxFQUFFO0VBRkYsQ0FOWDtFQVVFRSxPQUFPLEVBQUU7QUFWWCxDQTlHRixFQTBIRTtFQUNFSixJQUFJLEVBQUUsTUFEUjtFQUVFQyxNQUFNLEVBQUU7SUFDTkMsT0FBTyxFQUFFLEdBREg7SUFFTlYsS0FBSyxFQUFFO0VBRkQsQ0FGVjtFQU1FVyxPQUFPLEVBQUU7SUFDUFgsS0FBSyxFQUFFLEdBREE7SUFFUFUsT0FBTyxFQUFFO0VBRkYsQ0FOWDtFQVVFRSxPQUFPLEVBQUU7QUFWWCxDQTFIRixFQXNJRTtFQUNFSixJQUFJLEVBQUUsYUFEUjtFQUVFQyxNQUFNLEVBQUU7SUFDTkMsT0FBTyxFQUFFLEdBREg7SUFFTlYsS0FBSyxFQUFFO0VBRkQsQ0FGVjtFQU1FVyxPQUFPLEVBQUU7SUFDUFgsS0FBSyxFQUFFLEdBREE7SUFFUFUsT0FBTyxFQUFFO0VBRkYsQ0FOWDtFQVVFRSxPQUFPLEVBQUU7QUFWWCxDQXRJRixFQWtKRTtFQUNFSixJQUFJLEVBQUUsY0FEUjtFQUVFQyxNQUFNLEVBQUU7SUFDTkMsT0FBTyxFQUFFLEdBREg7SUFFTlYsS0FBSyxFQUFFO0VBRkQsQ0FGVjtFQU1FVyxPQUFPLEVBQUU7SUFDUFgsS0FBSyxFQUFFLEdBREE7SUFFUFUsT0FBTyxFQUFFO0VBRkYsQ0FOWDtFQVVFRSxPQUFPLEVBQUU7QUFWWCxDQWxKRixFQThKRTtFQUNFSixJQUFJLEVBQUUsV0FEUjtFQUVFQyxNQUFNLEVBQUU7SUFDTkMsT0FBTyxFQUFFLElBREg7SUFFTlYsS0FBSyxFQUFFO0VBRkQsQ0FGVjtFQU1FVyxPQUFPLEVBQUU7SUFDUFgsS0FBSyxFQUFFLEdBREE7SUFFUFUsT0FBTyxFQUFFO0VBRkYsQ0FOWDtFQVVFRSxPQUFPLEVBQUU7QUFWWCxDQTlKRixDQTNLYyxFQXNWZCxDQUNFO0VBQ0VKLElBQUksRUFBRSxVQURSO0VBRUVDLE1BQU0sRUFBRTtJQUNOQyxPQUFPLEVBQUUsU0FESDtJQUVOVixLQUFLLEVBQUU7RUFGRCxDQUZWO0VBTUVXLE9BQU8sRUFBRTtJQUNQRCxPQUFPLEVBQUUsU0FERjtJQUVQVixLQUFLLEVBQUU7RUFGQSxDQU5YO0VBVUVZLE9BQU8sRUFBRTtBQVZYLENBREYsRUFhRTtFQUNFSixJQUFJLEVBQUUsTUFEUjtFQUVFQyxNQUFNLEVBQUU7SUFDTkMsT0FBTyxFQUFFLEdBREg7SUFFTlYsS0FBSyxFQUFFO0VBRkQsQ0FGVjtFQU1FVyxPQUFPLEVBQUU7SUFDUEQsT0FBTyxFQUFFLEdBREY7SUFFUFYsS0FBSyxFQUFFO0VBRkEsQ0FOWDtFQVVFWSxPQUFPLEVBQUU7QUFWWCxDQWJGLEVBeUJFO0VBQ0VKLElBQUksRUFBRSxNQURSO0VBRUVDLE1BQU0sRUFBRTtJQUNOQyxPQUFPLEVBQUUsR0FESDtJQUVOVixLQUFLLEVBQUU7RUFGRCxDQUZWO0VBTUVXLE9BQU8sRUFBRTtJQUNQRCxPQUFPLEVBQUUsR0FERjtJQUVQVixLQUFLLEVBQUU7RUFGQSxDQU5YO0VBVUVZLE9BQU8sRUFBRTtBQVZYLENBekJGLEVBcUNFO0VBQ0VKLElBQUksRUFBRSxNQURSO0VBRUVDLE1BQU0sRUFBRTtJQUNOQyxPQUFPLEVBQUUsR0FESDtJQUVOVixLQUFLLEVBQUU7RUFGRCxDQUZWO0VBTUVXLE9BQU8sRUFBRTtJQUNQRCxPQUFPLEVBQUUsR0FERjtJQUVQVixLQUFLLEVBQUU7RUFGQSxDQU5YO0VBVUVZLE9BQU8sRUFBRTtBQVZYLENBckNGLEVBaURFO0VBQ0VKLElBQUksRUFBRSxNQURSO0VBRUVDLE1BQU0sRUFBRTtJQUNOVCxLQUFLLEVBQUUsR0FERDtJQUVOVSxPQUFPLEVBQUU7RUFGSCxDQUZWO0VBTUVDLE9BQU8sRUFBRTtJQUNQWCxLQUFLLEVBQUUsR0FEQTtJQUVQVSxPQUFPLEVBQUU7RUFGRixDQU5YO0VBVUVFLE9BQU8sRUFBRTtBQVZYLENBakRGLEVBNkRFO0VBQ0VKLElBQUksRUFBRSxNQURSO0VBRUVDLE1BQU0sRUFBRTtJQUNOVCxLQUFLLEVBQUUsR0FERDtJQUVOVSxPQUFPLEVBQUU7RUFGSCxDQUZWO0VBTUVDLE9BQU8sRUFBRTtJQUNQWCxLQUFLLEVBQUUsR0FEQTtJQUVQVSxPQUFPLEVBQUU7RUFGRixDQU5YO0VBVUVFLE9BQU8sRUFBRTtBQVZYLENBN0RGLEVBeUVFO0VBQ0VKLElBQUksRUFBRSxNQURSO0VBRUVDLE1BQU0sRUFBRTtJQUNOVCxLQUFLLEVBQUUsR0FERDtJQUVOVSxPQUFPLEVBQUU7RUFGSCxDQUZWO0VBTUVDLE9BQU8sRUFBRTtJQUNQWCxLQUFLLEVBQUUsR0FEQTtJQUVQVSxPQUFPLEVBQUU7RUFGRixDQU5YO0VBVUVFLE9BQU8sRUFBRTtBQVZYLENBekVGLEVBcUZFO0VBQ0VKLElBQUksRUFBRSxNQURSO0VBRUVDLE1BQU0sRUFBRTtJQUNOVCxLQUFLLEVBQUUsR0FERDtJQUVOVSxPQUFPLEVBQUU7RUFGSCxDQUZWO0VBTUVDLE9BQU8sRUFBRTtJQUNQWCxLQUFLLEVBQUUsR0FEQTtJQUVQVSxPQUFPLEVBQUU7RUFGRixDQU5YO0VBVUVFLE9BQU8sRUFBRTtBQVZYLENBckZGLEVBaUdFO0VBQ0VKLElBQUksRUFBRSxNQURSO0VBRUVDLE1BQU0sRUFBRTtJQUNOVCxLQUFLLEVBQUUsR0FERDtJQUVOVSxPQUFPLEVBQUU7RUFGSCxDQUZWO0VBTUVDLE9BQU8sRUFBRTtJQUNQWCxLQUFLLEVB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LE9BQU8sRUFBRTtFQUZGLENBTlg7RUFVRUUsT0FBTyxFQUFFO0FBVlgsQ0E3REYsRUF5RUU7RUFDRUosSUFBSSxFQUFFLE1BRFI7RUFFRUMsTUFBTSxFQUFFO0lBQ05ULEtBQUssRUFBRSxHQUREO0lBRU5VLE9BQU8sRUFBRTtFQUZILENBRlY7RUFNRUMsT0FBTyxFQUFFO0lBQ1BYLEtBQUssRUFBRSxHQURBO0lBRVBVLE9BQU8sRUFBRTtFQUZGLENBTlg7RUFVRUUsT0FBTyxFQUFFO0FBVlgsQ0F6RUYsRUFxRkU7RUFDRUosSUFBSSxFQUFFLE1BRFI7RUFFRUMsTUFBTSxFQUFFO0lBQ05ULEtBQUssRUFBRSxHQUREO0lBRU5VLE9BQU8sRUFBRTtFQUZILENBRlY7RUFNRUMsT0FBTyxFQUFFO0lBQ1BYLEtBQUssRUFBRSxHQURBO0lBRVBVLE9BQU8sRUFBRTtFQUZGLENBTlg7RUFVRUUsT0FBTyxFQUFFO0FBVlgsQ0FyRkYsRUFpR0U7RUFDRUosSUFBSSxFQUFFLE9BRFI7RUFFRUMsTUFBTSxFQUFFO0lBQ05ULEtBQUssRUFBRSxHQUREO0lBRU5VLE9BQU8sRUFBRTtFQUZILENBRlY7RUFNRUMsT0FBTyxFQUFFO0lBQ1BYLEtBQUssRUFBRSxHQURBO0lBRVBVLE9BQU8sRUFBRTtFQUZGLENBTlg7RUFVRUUsT0FBTyxFQUFFO0FBVlgsQ0FqR0YsRUE2R0U7RUFDRUosSUFBSSxFQUFFLFFBRFI7RUFFRUMsTUFBTSxFQUFFO0lBQ05ULEtBQUssRUFBRSxHQUREO0lBRU5VLE9BQU8sRUFBRTtFQUZILENBRlY7RUFNRUMsT0FBTyxFQUFFO0lBQ1BYLEtBQUssRUFBRSxHQURBO0lBRVBVLE9BQU8sRUFBRTtFQUZGLENBTlg7RUFVRUUsT0FBTyxFQUFFO0FBVlgsQ0E3R0YsRUF5SEU7RUFDRUosSUFBSSxFQUFFLE9BRFI7RUFFRUMsTUFBTSxFQUFFO0lBQ05ULEtBQUssRUFBRSxHQUREO0lBRU5VLE9BQU8sRUFBRTtFQUZILENBRlY7RUFNRUMsT0FBTyxFQUFFO0lBQ1BYLEtBQUssRUFBRSxHQURBO0lBRVBVLE9BQU8sRUFBRTtFQUZGLENBTlg7RUFVRUUsT0FBTyxFQUFFO0FBVlgsQ0F6SEYsRUFxSUU7RUFDRUosSUFBSSxFQUFFLFlBRFI7RUFFRUMsTUFBTSxFQUFFO0lBQ05ULEtBQUssRUFBRSxRQUREO0lBRU5VLE9BQU8sRUFBRTtFQUZILENBRlY7RUFNRUMsT0FBTyxFQUFFO0lBQ1BYLEtBQUssRUFBRSxRQURBO0lBRVBVLE9BQU8sRUFBRTtFQUZGLENBTlg7RUFVRUUsT0FBTyxFQUFFO0FBVlgsQ0FySUYsRUFpSkU7RUFDRUosSUFBSSxFQUFFLFNBRFI7RUFFRUMsTUFBTSxFQUFFO0lBQ05ULEtBQUssRUFBRSxHQUREO0lBRU5VLE9BQU8sRUFBRTtFQUZILENBRlY7RUFNRUMsT0FBTyxFQUFFO0lBQ1BYLEtBQUssRUFBRSxHQURBO0lBRVBVLE9BQU8sRUFBRTtFQUZGLENBTlg7RUFVRUUsT0FBTyxFQUFFO0FBVlgsQ0FqSkYsQ0FuZmMsRUFpcEJkLENBQ0U7RUFDRUosSUFBSSxFQUFFLGFBRFI7RUFFRUMsTUFBTSxFQUFFO0lBQ05ULEtBQUssRUFBRSxTQUREO0lBRU5VLE9BQU8sRUFBRTtFQUZILENBRlY7RUFNRUMsT0FBTyxFQUFFO0lBQ1BYLEtBQUssRUFBRSxTQURBO0lBRVBVLE9BQU8sRUFBRTtFQUZGLENBTlg7RUFVRUUsT0FBTyxFQUFFO0FBVlgsQ0FERixFQWFFO0VBQ0VKLElBQUksRUFBRSxTQURSO0VBRUVDLE1BQU0sRUFBRTtJQUNOVCxLQUFLLEVBQUUsS0FERDtJQUVOVSxPQUFPLEVBQUU7RUFGSCxDQUZWO0VBTUVDLE9BQU8sRUFBRTtJQUNQWCxLQUFLLEVBQUUsS0FEQTtJQUVQVSxPQUFPLEVBQUU7RUFGRixDQU5YO0VBVUVFLE9BQU8sRUFBRTtBQVZYLENBYkYsRUF5QkU7RUFDRUosSUFBSSxFQUFFLE9BRFI7RUFFRUMsTUFBTSxFQUFFO0lBQ05ULEtBQUssRUFBRSxPQUREO0lBRU5VLE9BQU8sRUFBRTtFQUZILENBRlY7RUFNRUMsT0FBTyxFQUFFO0lBQ1BYLEtBQUssRUFBRSxPQURBO0lBRVBVLE9BQU8sRUFBRTtFQUZGLENBTlg7RUFVRUUsT0FBTyxFQUFFO0FBVlgsQ0F6QkYsRUFxQ0U7RUFDRUosSUFBSSxFQUFFLFVBRFI7RUFFRUMsTUFBTSxFQUFFO0lBQ05ULEtBQUssRUFBRSxLQUREO0lBRU5VLE9BQU8sRUFBRTtFQUZILENBRlY7RUFNRUMsT0FBTyxFQUFFO0lBQ1BYLEtBQUssRUFBRSxLQURBO0lBRVBVLE9BQU8sRUFBRTtFQUZGLENBTlg7RUFVRUUsT0FBTyxFQUFFO0FBVlgsQ0FyQ0YsRUFpREU7RUFDRUosSUFBSSxFQUFFLGNBRFI7RUFFRUMsTUFBTSxFQUFFO0lBQ05ULEtBQUssRUFBRSxTQUREO0lBRU5VLE9BQU8sRUFBRTtFQUZILENBRlY7RUFNRUMsT0FBTyxFQUFFO0lBQ1BYLEtBQUssRUFBRSxTQURBO0lBRVBVLE9BQU8sRUFBRTtFQUZGLENBTlg7RUFVRUUsT0FBTyxFQUFFO0FBVlgsQ0FqREYsRUE2REU7RUFDRUosSUFBSSxFQUFFLFdBRFI7RUFFRUMsTUFBTSxFQUFFO0lBQ05ULEtBQUssRUFBRSxHQUREO0lBRU5VLE9BQU8sRUFBRTtFQUZILENBRlY7RUFNRUMsT0FBTyxFQUFFO0lBQ1BYLEtBQUssRUFBRSxHQURBO0lBRVBVLE9BQU8sRUFBRTtFQUZGLENBTlg7RUFVRUUsT0FBTyxFQUFFO0FBVlgsQ0E3REYsRUF5RUU7RUFDRUosSUFBSSxFQUFFLFdBRFI7RUFFRUMsTUFBTSxFQUFFO0lBQ05ULEtBQUssRUFBRSxHQUREO0lBRU5VLE9BQU8sRUFBRTtFQUZILENBRlY7RUFNRUMsT0FBTyxFQUFFO0lBQ1BYLEtBQUssRUFBRSxHQURBO0lBRVBVLE9BQU8sRUFBRTtFQUZGLENBTlg7RUFVRUUsT0FBTyxFQUFFO0FBVlgsQ0F6RUYsRUFxRkU7RUFDRUosSUFBSSxFQUFFLFlBRFI7RUFFRUMsTUFBTSxFQUFFO0lBQ05ULEtBQUssRUFBRSxHQUREO0lBRU5VLE9BQU8sRUFBRTtFQUZILENBRlY7RUFNRUMsT0FBTyxFQUFFO0lBQ1BYLEtBQUssRUFBRSxH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QUFTO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUEsa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixp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YSxhQUFhLGNBQWMsZUFBZSxhQUFhLGFBQWEsY0FBYyxjQUFjLGVBQWUsZUFBZSxhQUFhLGFBQWEsWUFBWSxlQUFlLGNBQWMsZUFBZSxjQUFjLE1BQU0sYUFBYSxXQUFXLGFBQWEsY0FBYyxhQUFhLGNBQWMsZUFBZSxZQUFZLGVBQWUsYUFBYSxZQUFZLGFBQWEsYUFBYSxjQUFjLFlBQVksWUFBWSxZQUFZLGFBQWEsWUFBWSxlQUFlLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxlQUFlLGNBQWMsYUFBYSxhQUFhLGNBQWMsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsY0FBYyxlQUFlLGFBQWEsY0FBYyxjQUFjLGVBQWUsZUFBZSxlQUFlLGNBQWMsYUFBYSxlQUFlLGVBQWUsY0FBYyxhQUFhLFlBQVksZUFBZSxlQUFlLGVBQWUsY0FBYyxlQUFlLGFBQWEsY0FBYyxlQUFlLGVBQWUsZUFBZSxjQUFjLGFBQWEsZUFBZSxjQUFjLGNBQWMsZUFBZSxlQUFlLGNBQWMsZUFBZSxhQUFhLGNBQWMsY0FBYyxlQUFlLGVBQWUsZUFBZSxjQUFjLGFBQWEsZUFBZSxlQUFlLGNBQWMsYUFBYSxZQUFZLGVBQWUsZUFBZSxlQUFlLGNBQWMsZUFBZSxhQUFhLGVBQWUsZUFBZSxlQUFlLGVBQWUsY0FBYyxhQUFhLGVBQWUsY0FBYyxhQUFhLGFBQWEsWUFBWSxXQUFXLFdBQVcsY0FBYyxjQUFjLGVBQWUsZUFBZSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsZUFBZSxhQUFhLFlBQVksWUFBWSxZQUFZLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsYUFBYSxhQUFhLGNBQWMsYUFBYSxjQUFjLGNBQWMsZ0JBQWdCLGFBQWEsWUFBWSxjQUFjLGFBQWEsY0FBYyxlQUFlLFdBQVcsV0FBVyxXQUFXLGdCQUFnQixXQUFXLFlBQVksY0FBYyxZQUFZLGdCQUFnQixZQUFZLFlBQVksWUFBWSxjQUFjLGNBQWMsYUFBYSxjQUFjLGNBQWMsZ0JBQWdCLGFBQWEs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Z0IsYUFBYSxpQkFBaUIsZUFBZSxlQUFlLGVBQWUsZUFBZSxjQUFjLGdCQUFnQixZQUFZLGFBQWEsc0JBQXNCLGFBQWEsV0FBVyxlQUFlLG1CQUFtQixlQUFlLFdBQVcsaUJBQWlCLFlBQVksb0JBQW9CLGVBQWUsY0FBYyxtQkFBbUIsZUFBZSxlQUFlLGFBQWEsWUFBWSxhQUFhLGNBQWMsY0FBYyxhQUFhLGVBQWUsY0FBYyxnQkFBZ0IsbUJBQW1CLGVBQWUsZ0JBQWdCLGdCQUFnQixpQkFBaUIscUJBQXFCLGNBQWMsYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxlQUFlLGVBQWUsY0FBYyxlQUFlLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsY0FBYyxrQkFBa0IsY0FBYyxpQkFBaUIsYUFBYSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsY0FBYyxlQUFlLGNBQWMsbUJBQW1CLGVBQWUsY0FBYyxrQkFBa0IsZUFBZSxjQUFjLFlBQVksYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLGlCQUFpQixjQUFjLGVBQWUsYUFBYSxjQUFjLGFBQWEsWUFBWSxZQUFZLFlBQVksY0FBYyxpQkFBaUIsYUFBYSxjQUFjLGNBQWMsYUFBYSxjQUFjLGNBQWMsYUFBYSxjQUFjLGVBQWUsZUFBZSxnQkFBZ0IsZUFBZSxjQUFjLGVBQWUsZ0JBQWdCLDRCQUE0QixlQUFlLGNBQWMsa0JBQWtCLGFBQWEsZUFBZSxhQUFhLGVBQWUsZUFBZSxjQUFjLGVBQWUsZUFBZSxlQUFlLGNBQWMsZUFBZSxjQUFjLGVBQWUsZUFBZSxlQUFlLGNBQWMsWUFBWSxhQUFhLGNBQWMsYUFBYSxlQUFlLGFBQWEsYUFBYSxlQUFlLGNBQWMsY0FBYyxjQUFjLGVBQWUsYUFBYSxjQUFjLGVBQWUsY0FBYyxpQkFBaUIsaUJBQWlCLGlCQUFpQixjQUFjLGFBQWEsY0FBYyxjQUFjLGFBQWEsZUFBZSxjQUFjLGNBQWMsZ0JBQWdCLGNBQWMsZUFBZSxlQUFlLGNBQWMsYUFBYSxjQUFjLFlBQVksYUFBYSxjQUFjLGNBQWMsY0FBYyxlQUFlLGNBQWMsY0FBYyxpQkFBaUIsZUFBZSxZQUFZLGFBQWEsZUFBZSxhQUFhLGFBQWEsY0FBYyxjQUFjLGVBQWUsY0FBYyxtQkFBbUIsYUFBYSxlQUFlLGlCQUFpQixlQUFlLGNBQWMsbUJBQW1CLGNBQWMsZ0JBQWdCLGVBQWUsc0JBQXNCLGVBQWUsZ0JBQWdCLHNCQUFzQixZQUFZLGVBQWUsYUFBYSxlQUFlLGNBQWMsY0FBYyxJQUFJLFNBQVMsYUFBYSxjQUFjLGdCQUFnQixnQkFBZ0IsZUFBZSxlQUFlLFlBQVksYUFBYSxnQkFBZ0IsaUJBQWlCLGFBQWEsWUFBWSxjQUFjLGVBQWUsY0FBYyxlQUFlLGdCQUFnQixpQkFBaUIsY0FBYyxlQUFlLGNBQWMsZUFBZSxhQUFhLFlBQVksZUFBZSxjQUFjLGFBQWEsZUFBZSxjQUFjLGVBQWUsbUJBQW1CLGNBQWMsaUJBQWlCLGFBQWEsY0FBYyxjQUFjLGNBQWMsYUFBYSxlQUFlLGNBQWMsY0FBYyxlQUFlLGdCQUFnQixlQUFlLGdCQUFnQixhQUFhLGVBQWUsZUFBZSxZQUFZLGNBQWMsZUFBZSxjQUFjLGNBQWMsY0FBYyxjQUFjLGVBQWUsYUFBYSxjQUFjLGVBQWUsZUFBZSxnQkFBZ0IsZUFBZSxxQkFBcUIsaUJBQWlCLGdCQUFnQixjQUFjLGNBQWMsY0FBYyxhQUFhLGdCQUFnQixlQUFlLGVBQWUsWUFBWSxjQUFjLGFBQWEsWUFBWSxjQUFjLGVBQWUsY0FBYyxnQkFBZ0IsYUFBYSxlQUFlLGNBQWMsY0FBYyxXQUFXLGNBQWMsYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLGFBQWEsY0FBYyxlQUFlLGVBQWUsZUFBZSxjQUFjLGNBQWMsZUFBZSxjQUFjLGdCQUFnQixhQUFhLGVBQWUsZUFBZSxrQkFBa0IsYUFBYSxZQUFZLGNBQWMsY0FBYyxlQUFlLGVBQWUsYUFBYSxhQUFhLHdCQUF3QixjQUFjLFlBQVksYUFBYSxhQUFhLGVBQWUsbUJBQW1CLGFBQWEsY0FBYyxZQUFZLGdCQUFnQixrQkFBa0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixlQUFlLGdCQUFnQixvQkFBb0IsZ0JBQWdCLGdCQUFnQixjQUFjLGFBQWEsb0JBQW9CLGFBQWEsb0JBQW9CLGVBQWUsV0FBVyxZQUFZLGVBQWUsY0FBYyxlQUFlLGVBQWUsY0FBYyxlQUFlLGNBQWMsY0FBYyxnQkFBZ0IsZUFBZSxjQUFjLGNBQWMsaUJBQWlCLGVBQWUsaUJBQWlCLGVBQWUsY0FBYyxlQUFlLGVBQWUsZUFBZSxjQUFjLFlBQVksZUFBZSxhQUFhLGVBQWUsY0FBYyxjQUFjLGFBQWEsYUFBYSxlQUFlLFlBQVksY0FBYyxjQUFjLGdCQUFnQixZQUFZLGNBQWMsY0FBYyxnQkFBZ0IsYUFBYSxjQUFjLGFBQWEsY0FBYyxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsZUFBZSxhQUFhLGdCQUFnQixZQUFZLGVBQWUsYUFBYSxlQUFlLGlCQUFpQixhQUFhLGNBQWMsYUFBYSxlQUFlLGNBQWMsWUFBWSxlQUFlLGVBQWUsZUFBZSxnQkFBZ0IsYUFBYSxZQUFZLGVBQWUsY0FBYyxXQUFXLGNBQWMsZ0JBQWdCLGFBQWEsaUJBQWlCLGdCQUFnQixlQUFlLGNBQWMsZ0JBQWdCLGdCQUFnQixpQkFBaUIsY0FBYyxjQUFjLFlBQVksbUJBQW1CLGNBQWMsYUFBYSxlQUFlLGNBQWMsaUJBQWlCLGlCQUFpQixpQkFBaUIsZUFBZSxjQUFjLFlBQVksZUFBZSxhQUFhLGNBQWMsZUFBZSxjQUFjLGdCQUFnQixjQUFjLGVBQWUsYUFBYSxjQUFjLGVBQWUsaUJBQWlCLGNBQWMsY0FBYyxjQUFjLGVBQWUsZ0JBQWdCLGNBQWMsZUFBZSxlQUFlLGdCQUFnQix1QkFBdUIsd0JBQXdCLGVBQWUsY0FBYyxjQUFjLElBQUksU0FBUyxhQUFhLGNBQWMsZ0JBQWdCLGdCQUFnQixlQUFlLGVBQWUsWUFBWSxhQUFhLGdCQUFnQixhQUFhLGFBQWEsZUFBZSxhQUFhLGVBQWUsWUFBWSxlQUFlLGNBQWMsZUFBZSxhQUFhLFlBQVksbUJBQW1CLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxlQUFlLGdCQUFnQixhQUFhLGVBQWUsaUJBQWlCLGVBQWUsY0FBYyxlQUFlLHNCQUFzQixpQkFBaUIsZ0JBQWdCLFdBQVcsZUFBZSxZQUFZLG1CQUFtQixlQUFlLGVBQWUsY0FBYyxpQkFBaUIsb0JBQW9CLGlCQUFpQixpQkFBaUIsWUFBWSxhQUFhLGNBQWMsY0FBYyxhQUFhLElBQUksU0FBUyxhQUFhLGFBQWEsYUFBYSxjQUFjLGVBQWUsYUFBYSxZQUFZLGNBQWMsaUJBQWlCLGVBQWUsYUFBYSxjQUFjLGFBQWEsY0FBYyxjQUFjLGdCQUFnQixnQkFBZ0IsZUFBZSxpQkFBaUIsZUFBZSxZQUFZLGFBQWEsZUFBZSxlQUFlLFlBQVksYUFBYSxlQUFlLGNBQWMsa0JBQWtCLGdCQUFnQixnQkFBZ0IsY0FBYyxhQUFhLGVBQWUsa0JBQWtCLGVBQWUsZ0JBQWdCLGdCQUFnQixtQkFBbUIsa0JBQWtCLGdCQUFnQixnQkFBZ0IsZUFBZSxlQUFlLGVBQWUsYUFBYSxhQUFhLGFBQWEsYUFBYSxrQkFBa0IsZUFBZSxnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixtQkFBbUIsa0JBQWtCLGdCQUFnQixlQUFlLGVBQWUsZUFBZSxjQUFjLGVBQWUsY0FBYyxlQUFlLFlBQVksZUFBZSxlQUFlLFlBQVksZUFBZSxhQUFhLGNBQWMsaUJBQWlCLGNBQWMsY0FBYyxpQkFBaUIsZUFBZSxlQUFlLGVBQWUsY0FBYyxnQkFBZ0IsZUFBZSxhQUFhLGFBQWEsZUFBZSxpQkFBaUIsZ0JBQWdCLGNBQWMsZ0JBQWdCLGlCQUFpQixjQUFjLGFBQWEsY0FBYyxlQUFlLGFBQWEsZUFBZSxjQUFjLGVBQWUsY0FBYyxZQUFZLGVBQWUsZUFBZSxhQUFhLGVBQWUsY0FBYyxpQkFBaUIsZUFBZSxjQUFjLGNBQWMsY0FBYyxjQUFjLGdCQUFnQixjQUFjLGlCQUFpQixlQUFlLGNBQWMsY0FBYyxjQUFjLGNBQWMsZUFBZSxhQUFhLGdCQUFnQixhQUFhLGNBQWMsZUFBZSxnQkFBZ0IsZ0JBQWdC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Q0E7QUFDQSw2RUFBNkUsZUFBZTtBQUM1RjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDZFQUE2RSxlQUFlO0FBQzVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtR0FBbUcsZUFBZTtBQUNsSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkVBQTZFLGVBQWU7QUFDNUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSw2RUFBNkUsZUFBZTtBQUM1RjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDZFQUE2RSxlQUFlO0FBQzVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0ZBQWdGLGlCQUFpQjtBQUNqRztBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsT0FBTzs7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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLG1CQUFtQiwyQkFBMkI7V0FDOUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0Esa0JBQWtCLGNBQWM7V0FDaEM7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsTUFBTTtXQUNwQjtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsYUFBYTtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGlCQUFpQiw0QkFBNEI7V0FDN0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0EsZ0JBQWdCLDRCQUE0QjtXQUM1QztXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQSxnQkFBZ0IsNEJBQTRCO1dBQzVDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtCQUFrQix1Q0FBdUM7V0FDekQ7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQSxtQkFBbUIsaUNBQWlDO1dBQ3BEO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzQkFBc0IsdUNBQXVDO1dBQzdEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNCQUFzQixzQkFBc0I7V0FDNUM7V0FDQTtXQUNBLFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsV0FBVztXQUNYLFdBQVc7V0FDWDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFlBQVk7V0FDWjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxVQUFVO1dBQ1Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsV0FBVztXQUNYO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0EsbUJBQW1CLHdDQUF3QztXQUMzRDtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsUUFBUTtXQUNSLFFBQVE7V0FDUjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxTQUFTO1dBQ1Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsT0FBTztXQUNQO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxRQUFRO1dBQ1I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUUsSUFBSTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxzQ0FBc0M7V0FDdEM7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTs7V0FFQTs7Ozs7VUU5ZkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Fuc2ktaHRtbC1jb21tdW5pdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC8uL3NyYy9qcy9icmFpbkNlbnRlci5qcyIsIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvLi9zcmMvanMvYnV0dG9uc1RlbXBsYXRlLmpzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC8uL3NyYy9qcy9tYWtlQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvLi9zcmMvanMvbWFrZUtleWJvYXJkLmpzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC8uL3NyYy9qcy9tYWtlVGV4dEFyZWEuanMiLCJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvLi9ub2RlX21vZHVsZXMvaHRtbC1lbnRpdGllcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkLy4vbm9kZV9tb2R1bGVzL2h0bWwtZW50aXRpZXMvbGliL25hbWVkLXJlZmVyZW5jZXMuanMiLCJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkLy4vbm9kZV9tb2R1bGVzL2h0bWwtZW50aXRpZXMvbGliL251bWVyaWMtdW5pY29kZS1tYXAuanMiLCJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkLy4vbm9kZV9tb2R1bGVzL2h0bWwtZW50aXRpZXMvbGliL3N1cnJvZ2F0ZS1wYWlycy5qcyIsIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/NGMzNyIsIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L2NsaWVudHMvV2ViU29ja2V0Q2xpZW50LmpzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L21vZHVsZXMvbG9nZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L292ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvc29ja2V0LmpzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L3V0aWxzL2NyZWF0ZVNvY2tldFVSTC5qcyIsIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC91dGlscy9nZXRDdXJyZW50U2NyaXB0U291cmNlLmpzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L3V0aWxzL2xvZy5qcyIsIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC91dGlscy9wYXJzZVVSTC5qcyIsIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC91dGlscy9yZWxvYWRBcHAuanMiLCJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvdXRpbHMvc2VuZE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvdXRpbHMvc3RyaXBBbnNpLmpzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9kZXYtc2VydmVyLmpzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9lbWl0dGVyLmpzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2ctYXBwbHktcmVzdWx0LmpzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanMiLCJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2V0IHVwZGF0ZSBtYW5pZmVzdCBmaWxlbmFtZSIsIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuc2lIVE1MXG5cbi8vIFJlZmVyZW5jZSB0byBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2Fuc2ktcmVnZXhcbnZhciBfcmVnQU5TSSA9IC8oPzooPzpcXHUwMDFiXFxbKXxcXHUwMDliKSg/Oig/OlswLTldezEsM30pPyg/Oig/OjtbMC05XXswLDN9KSopP1tBLU18Zi1tXSl8XFx1MDAxYltBLU1dL1xuXG52YXIgX2RlZkNvbG9ycyA9IHtcbiAgcmVzZXQ6IFsnZmZmJywgJzAwMCddLCAvLyBbRk9SRUdST1VEX0NPTE9SLCBCQUNLR1JPVU5EX0NPTE9SXVxuICBibGFjazogJzAwMCcsXG4gIHJlZDogJ2ZmMDAwMCcsXG4gIGdyZWVuOiAnMjA5ODA1JyxcbiAgeWVsbG93OiAnZThiZjAzJyxcbiAgYmx1ZTogJzAwMDBmZicsXG4gIG1hZ2VudGE6ICdmZjAwZmYnLFxuICBjeWFuOiAnMDBmZmVlJyxcbiAgbGlnaHRncmV5OiAnZjBmMGYwJyxcbiAgZGFya2dyZXk6ICc4ODgnXG59XG52YXIgX3N0eWxlcyA9IHtcbiAgMzA6ICdibGFjaycsXG4gIDMxOiAncmVkJyxcbiAgMzI6ICdncmVlbicsXG4gIDMzOiAneWVsbG93JyxcbiAgMzQ6ICdibHVlJyxcbiAgMzU6ICdtYWdlbnRhJyxcbiAgMzY6ICdjeWFuJyxcbiAgMzc6ICdsaWdodGdyZXknXG59XG52YXIgX29wZW5UYWdzID0ge1xuICAnMSc6ICdmb250LXdlaWdodDpib2xkJywgLy8gYm9sZFxuICAnMic6ICdvcGFjaXR5OjAuNScsIC8vIGRpbVxuICAnMyc6ICc8aT4nLCAvLyBpdGFsaWNcbiAgJzQnOiAnPHU+JywgLy8gdW5kZXJzY29yZVxuICAnOCc6ICdkaXNwbGF5Om5vbmUnLCAvLyBoaWRkZW5cbiAgJzknOiAnPGRlbD4nIC8vIGRlbGV0ZVxufVxudmFyIF9jbG9zZVRhZ3MgPSB7XG4gICcyMyc6ICc8L2k+JywgLy8gcmVzZXQgaXRhbGljXG4gICcyNCc6ICc8L3U+JywgLy8gcmVzZXQgdW5kZXJzY29yZVxuICAnMjknOiAnPC9kZWw+JyAvLyByZXNldCBkZWxldGVcbn1cblxuO1swLCAyMSwgMjIsIDI3LCAyOCwgMzksIDQ5XS5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gIF9jbG9zZVRhZ3Nbbl0gPSAnPC9zcGFuPidcbn0pXG5cbi8qKlxuICogQ29udmVydHMgdGV4dCB3aXRoIEFOU0kgY29sb3IgY29kZXMgdG8gSFRNTCBtYXJrdXAuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIGFuc2lIVE1MICh0ZXh0KSB7XG4gIC8vIFJldHVybnMgdGhlIHRleHQgaWYgdGhlIHN0cmluZyBoYXMgbm8gQU5TSSBlc2NhcGUgY29kZS5cbiAgaWYgKCFfcmVnQU5TSS50ZXN0KHRleHQpKSB7XG4gICAgcmV0dXJuIHRleHRcbiAgfVxuXG4gIC8vIENhY2hlIG9wZW5lZCBzZXF1ZW5jZS5cbiAgdmFyIGFuc2lDb2RlcyA9IFtdXG4gIC8vIFJlcGxhY2Ugd2l0aCBtYXJrdXAuXG4gIHZhciByZXQgPSB0ZXh0LnJlcGxhY2UoL1xcMDMzXFxbKFxcZCspbS9nLCBmdW5jdGlvbiAobWF0Y2gsIHNlcSkge1xuICAgIHZhciBvdCA9IF9vcGVuVGFnc1tzZXFdXG4gICAgaWYgKG90KSB7XG4gICAgICAvLyBJZiBjdXJyZW50IHNlcXVlbmNlIGhhcyBiZWVuIG9wZW5lZCwgY2xvc2UgaXQuXG4gICAgICBpZiAoISF+YW5zaUNvZGVzLmluZGV4T2Yoc2VxKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV4dHJhLWJvb2xlYW4tY2FzdFxuICAgICAgICBhbnNpQ29kZXMucG9wKClcbiAgICAgICAgcmV0dXJuICc8L3NwYW4+J1xuICAgICAgfVxuICAgICAgLy8gT3BlbiB0YWcuXG4gICAgICBhbnNpQ29kZXMucHVzaChzZXEpXG4gICAgICByZXR1cm4gb3RbMF0gPT09ICc8JyA/IG90IDogJzxzcGFuIHN0eWxlPVwiJyArIG90ICsgJztcIj4nXG4gICAgfVxuXG4gICAgdmFyIGN0ID0gX2Nsb3NlVGFnc1tzZXFdXG4gICAgaWYgKGN0KSB7XG4gICAgICAvLyBQb3Agc2VxdWVuY2VcbiAgICAgIGFuc2lDb2Rlcy5wb3AoKVxuICAgICAgcmV0dXJuIGN0XG4gICAgfVxuICAgIHJldHVybiAnJ1xuICB9KVxuXG4gIC8vIE1ha2Ugc3VyZSB0YWdzIGFyZSBjbG9zZWQuXG4gIHZhciBsID0gYW5zaUNvZGVzLmxlbmd0aFxuICA7KGwgPiAwKSAmJiAocmV0ICs9IEFycmF5KGwgKyAxKS5qb2luKCc8L3NwYW4+JykpXG5cbiAgcmV0dXJuIHJldFxufVxuXG4vKipcbiAqIEN1c3RvbWl6ZSBjb2xvcnMuXG4gKiBAcGFyYW0ge09iamVjdH0gY29sb3JzIHJlZmVyZW5jZSB0byBfZGVmQ29sb3JzXG4gKi9cbmFuc2lIVE1MLnNldENvbG9ycyA9IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgaWYgKHR5cGVvZiBjb2xvcnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgY29sb3JzYCBwYXJhbWV0ZXIgbXVzdCBiZSBhbiBPYmplY3QuJylcbiAgfVxuXG4gIHZhciBfZmluYWxDb2xvcnMgPSB7fVxuICBmb3IgKHZhciBrZXkgaW4gX2RlZkNvbG9ycykge1xuICAgIHZhciBoZXggPSBjb2xvcnMuaGFzT3duUHJvcGVydHkoa2V5KSA/IGNvbG9yc1trZXldIDogbnVsbFxuICAgIGlmICghaGV4KSB7XG4gICAgICBfZmluYWxDb2xvcnNba2V5XSA9IF9kZWZDb2xvcnNba2V5XVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKCdyZXNldCcgPT09IGtleSkge1xuICAgICAgaWYgKHR5cGVvZiBoZXggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGhleCA9IFtoZXhdXG4gICAgICB9XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaGV4KSB8fCBoZXgubGVuZ3RoID09PSAwIHx8IGhleC5zb21lKGZ1bmN0aW9uIChoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgaCAhPT0gJ3N0cmluZydcbiAgICAgIH0pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHZhbHVlIG9mIGAnICsga2V5ICsgJ2AgcHJvcGVydHkgbXVzdCBiZSBhbiBBcnJheSBhbmQgZWFjaCBpdGVtIGNvdWxkIG9ubHkgYmUgYSBoZXggc3RyaW5nLCBlLmcuOiBGRjAwMDAnKVxuICAgICAgfVxuICAgICAgdmFyIGRlZkhleENvbG9yID0gX2RlZkNvbG9yc1trZXldXG4gICAgICBpZiAoIWhleFswXSkge1xuICAgICAgICBoZXhbMF0gPSBkZWZIZXhDb2xvclswXVxuICAgICAgfVxuICAgICAgaWYgKGhleC5sZW5ndGggPT09IDEgfHwgIWhleFsxXSkge1xuICAgICAgICBoZXggPSBbaGV4WzBdXVxuICAgICAgICBoZXgucHVzaChkZWZIZXhDb2xvclsxXSlcbiAgICAgIH1cblxuICAgICAgaGV4ID0gaGV4LnNsaWNlKDAsIDIpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaGV4ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdmFsdWUgb2YgYCcgKyBrZXkgKyAnYCBwcm9wZXJ0eSBtdXN0IGJlIGEgaGV4IHN0cmluZywgZS5nLjogRkYwMDAwJylcbiAgICB9XG4gICAgX2ZpbmFsQ29sb3JzW2tleV0gPSBoZXhcbiAgfVxuICBfc2V0VGFncyhfZmluYWxDb2xvcnMpXG59XG5cbi8qKlxuICogUmVzZXQgY29sb3JzLlxuICovXG5hbnNpSFRNTC5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgX3NldFRhZ3MoX2RlZkNvbG9ycylcbn1cblxuLyoqXG4gKiBFeHBvc2UgdGFncywgaW5jbHVkaW5nIG9wZW4gYW5kIGNsb3NlLlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuYW5zaUhUTUwudGFncyA9IHt9XG5cbmlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFuc2lIVE1MLnRhZ3MsICdvcGVuJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX29wZW5UYWdzIH1cbiAgfSlcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFuc2lIVE1MLnRhZ3MsICdjbG9zZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9jbG9zZVRhZ3MgfVxuICB9KVxufSBlbHNlIHtcbiAgYW5zaUhUTUwudGFncy5vcGVuID0gX29wZW5UYWdzXG4gIGFuc2lIVE1MLnRhZ3MuY2xvc2UgPSBfY2xvc2VUYWdzXG59XG5cbmZ1bmN0aW9uIF9zZXRUYWdzIChjb2xvcnMpIHtcbiAgLy8gcmVzZXQgYWxsXG4gIF9vcGVuVGFnc1snMCddID0gJ2ZvbnQtd2VpZ2h0Om5vcm1hbDtvcGFjaXR5OjE7Y29sb3I6IycgKyBjb2xvcnMucmVzZXRbMF0gKyAnO2JhY2tncm91bmQ6IycgKyBjb2xvcnMucmVzZXRbMV1cbiAgLy8gaW52ZXJzZVxuICBfb3BlblRhZ3NbJzcnXSA9ICdjb2xvcjojJyArIGNvbG9ycy5yZXNldFsxXSArICc7YmFja2dyb3VuZDojJyArIGNvbG9ycy5yZXNldFswXVxuICAvLyBkYXJrIGdyZXlcbiAgX29wZW5UYWdzWyc5MCddID0gJ2NvbG9yOiMnICsgY29sb3JzLmRhcmtncmV5XG5cbiAgZm9yICh2YXIgY29kZSBpbiBfc3R5bGVzKSB7XG4gICAgdmFyIGNvbG9yID0gX3N0eWxlc1tjb2RlXVxuICAgIHZhciBvcmlDb2xvciA9IGNvbG9yc1tjb2xvcl0gfHwgJzAwMCdcbiAgICBfb3BlblRhZ3NbY29kZV0gPSAnY29sb3I6IycgKyBvcmlDb2xvclxuICAgIGNvZGUgPSBwYXJzZUludChjb2RlKVxuICAgIF9vcGVuVGFnc1soY29kZSArIDEwKS50b1N0cmluZygpXSA9ICdiYWNrZ3JvdW5kOiMnICsgb3JpQ29sb3JcbiAgfVxufVxuXG5hbnNpSFRNTC5yZXNldCgpXG4iLCJpbXBvcnQgXCIuL2luZGV4Lmh0bWxcIjtcbmltcG9ydCBcIi4uL3NyYy9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi4vc3JjL2pzL21ha2VCdXR0b25zLmpzXCI7XG5pbXBvcnQgXCIuLi9zcmMvanMvYnV0dG9uc1RlbXBsYXRlLmpzXCI7XG5pbXBvcnQgXCIuLi9zcmMvanMvbWFrZUtleWJvYXJkLmpzXCI7XG5cbmltcG9ydCBcIi4uL3NyYy9qcy9icmFpbkNlbnRlci5qc1wiO1xuIiwiaW1wb3J0IHsgbWFrZVRleHRBcmVhLCB0ZXh0QXJlYUJyYWluIH0gZnJvbSBcIi4vbWFrZVRleHRBcmVhXCI7XG5pbXBvcnQgbWFrZUtleWJvYXJkIGZyb20gXCIuL21ha2VLZXlib2FyZFwiO1xuaW1wb3J0IHsga2V5QW5pbWF0aW9uIH0gZnJvbSBcIi4vbWFrZUJ1dHRvbnNcIjtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgbGV0IHNoaWZ0ID0gZmFsc2U7XG4gIGxldCBsYW5nID0gXCJsYW5nRW5nXCI7XG4gIG1ha2VUZXh0QXJlYSgpO1xuICBtYWtlS2V5Ym9hcmQoc2hpZnQsIGxhbmcpO1xufVxuXG5mdW5jdGlvbiBrZXlQdXNoKGUpIHtcbiAga2V5QW5pbWF0aW9uKGUpO1xuICB0ZXh0QXJlYUJyYWluKGUpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5UHVzaCk7XG53aW5kb3cub25sb2FkID0gaW5pdCgpO1xuLy93aW5kb3cub25sb2FkID0gbWFrZVRleHRBcmVhKCk7XG4vL2RvY3VtZW50LkRPTUNvbnRlbnRMb2FkZWQgPSBpbml0KCk7XG4iLCJjb25zdCBhbGxLZXlzID0gW1xuICBbXG4gICAge1xuICAgICAgY29kZTogXCJCYWNrcXVvdGVcIixcbiAgICAgIGxhbmdSdToge1xuICAgICAgICB1blNoaWZ0OiBcItGRXCIsXG4gICAgICAgIHNoaWZ0OiBcItCBXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCJgXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwiflwiLFxuICAgICAgfSxcbiAgICAgIGtleUNvZGU6IFwiMTkyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIkRpZ2l0MVwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHVuU2hpZnQ6IFwiMVwiLFxuICAgICAgICBzaGlmdDogXCIhXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCIxXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwiIVwiLFxuICAgICAgfSxcbiAgICAgIGtleUNvZGU6IFwiNDlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6IFwiRGlnaXQyXCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgdW5TaGlmdDogXCIyXCIsXG4gICAgICAgIHNoaWZ0OiAnXCInLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgc2hpZnQ6IFwiMlwiLFxuICAgICAgICB1blNoaWZ0OiBcIkBcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjUwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIkRpZ2l0M1wiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHVuU2hpZnQ6IFwiM1wiLFxuICAgICAgICBzaGlmdDogXCLihJZcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIjNcIixcbiAgICAgICAgdW5TaGlmdDogXCIjXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCI1MVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJEaWdpdDRcIixcbiAgICAgIGxhbmdSdToge1xuICAgICAgICB1blNoaWZ0OiBcIjRcIixcbiAgICAgICAgc2hpZnQ6IFwiO1wiLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgc2hpZnQ6IFwiNFwiLFxuICAgICAgICB1blNoaWZ0OiBcIiRcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjUyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIkRpZ2l0NVwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHVuU2hpZnQ6IFwiNVwiLFxuICAgICAgICBzaGlmdDogXCIlXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCI1XCIsXG4gICAgICAgIHVuU2hpZnQ6IFwiJVwiLFxuICAgICAgfSxcbiAgICAgIGtleUNvZGU6IFwiNTNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6IFwiRGlnaXQ2XCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgdW5TaGlmdDogXCI2XCIsXG4gICAgICAgIHNoaWZ0OiBcIjpcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIjZcIixcbiAgICAgICAgdW5TaGlmdDogXCJeXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCI1NFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJEaWdpdDdcIixcbiAgICAgIGxhbmdSdToge1xuICAgICAgICB1blNoaWZ0OiBcIjdcIixcbiAgICAgICAgc2hpZnQ6IFwiP1wiLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgc2hpZnQ6IFwiN1wiLFxuICAgICAgICB1blNoaWZ0OiBcIiZcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjU1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIkRpZ2l0OFwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHVuU2hpZnQ6IFwiOFwiLFxuICAgICAgICBzaGlmdDogXCIqXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCI4XCIsXG4gICAgICAgIHVuU2hpZnQ6IFwiKlwiLFxuICAgICAgfSxcbiAgICAgIGtleUNvZGU6IFwiNTZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6IFwiRGlnaXQ5XCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgdW5TaGlmdDogXCI5XCIsXG4gICAgICAgIHNoaWZ0OiBcIihcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIjlcIixcbiAgICAgICAgdW5TaGlmdDogXCIoXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCI1N1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJEaWdpdDBcIixcbiAgICAgIGxhbmdSdToge1xuICAgICAgICB1blNoaWZ0OiBcIjBcIixcbiAgICAgICAgc2hpZnQ6IFwiKVwiLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgc2hpZnQ6IFwiMFwiLFxuICAgICAgICB1blNoaWZ0OiBcIilcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjQ4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIk1pbnVzXCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgdW5TaGlmdDogXCItXCIsXG4gICAgICAgIHNoaWZ0OiBcIl9cIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIi1cIixcbiAgICAgICAgdW5TaGlmdDogXCJfXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCIxNzNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6IFwiRXF1YWxcIixcbiAgICAgIGxhbmdSdToge1xuICAgICAgICB1blNoaWZ0OiBcIj1cIixcbiAgICAgICAgc2hpZnQ6IFwiK1wiLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgc2hpZnQ6IFwiPVwiLFxuICAgICAgICB1blNoaWZ0OiBcIitcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjYxXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIkJhY2tzcGFjZVwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHVuU2hpZnQ6IFwi4oyrXCIsXG4gICAgICAgIHNoaWZ0OiBcIuKMq1wiLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgdW5TaGlmdDogXCLijKtcIixcbiAgICAgICAgc2hpZnQ6IFwi4oyrXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCI4XCIsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIGNvZGU6IFwiVGFiXCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgdW5TaGlmdDogXCLihrkgVGFiXCIsXG4gICAgICAgIHNoaWZ0OiBcIuKGuSBUYWJcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHVuU2hpZnQ6IFwi4oa5IFRhYlwiLFxuICAgICAgICBzaGlmdDogXCLihrkgVGFiXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCI5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIktleVFcIixcbiAgICAgIGZ1bmM6IGZhbHNlLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHVuU2hpZnQ6IFwi0LlcIixcbiAgICAgICAgc2hpZnQ6IFwi0JlcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIlFcIixcbiAgICAgICAgdW5TaGlmdDogXCJxXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCI4MVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJLZXlXXCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgdW5TaGlmdDogXCLRhlwiLFxuICAgICAgICBzaGlmdDogXCLQplwiLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgc2hpZnQ6IFwiV1wiLFxuICAgICAgICB1blNoaWZ0OiBcIndcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjg3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIktleUVcIixcbiAgICAgIGxhbmdSdToge1xuICAgICAgICB1blNoaWZ0OiBcItGDXCIsXG4gICAgICAgIHNoaWZ0OiBcItCjXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCJFXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwiZVwiLFxuICAgICAgfSxcbiAgICAgIGtleUNvZGU6IFwiNjlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6IFwiS2V5UlwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHVuU2hpZnQ6IFwi0LpcIixcbiAgICAgICAgc2hpZnQ6IFwi0JpcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIlJcIixcbiAgICAgICAgdW5TaGlmdDogXCJyXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCI4MlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJLZXlUXCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgdW5TaGlmdDogXCLQtVwiLFxuICAgICAgICBzaGlmdDogXCLQlVwiLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgc2hpZnQ6IFwiVFwiLFxuICAgICAgICB1blNoaWZ0OiBcInRcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjg0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIktleVlcIixcbiAgICAgIGxhbmdSdToge1xuICAgICAgICB1blNoaWZ0OiBcItC9XCIsXG4gICAgICAgIHNoaWZ0OiBcItCdXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCJZXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwieVwiLFxuICAgICAgfSxcbiAgICAgIGtleUNvZGU6IFwiODlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6IFwiS2V5VVwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHVuU2hpZnQ6IFwi0LNcIixcbiAgICAgICAgc2hpZnQ6IFwi0JNcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIlVcIixcbiAgICAgICAgdW5TaGlmdDogXCJ1XCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCI4NVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJLZXlJXCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgdW5TaGlmdDogXCLRiFwiLFxuICAgICAgICBzaGlmdDogXCLQqFwiLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgc2hpZnQ6IFwiSVwiLFxuICAgICAgICB1blNoaWZ0OiBcImlcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjczXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIktleU9cIixcbiAgICAgIGxhbmdSdToge1xuICAgICAgICB1blNoaWZ0OiBcItGJXCIsXG4gICAgICAgIHNoaWZ0OiBcItCpXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCJPXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwib1wiLFxuICAgICAgfSxcbiAgICAgIGtleUNvZGU6IFwiNzlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6IFwiS2V5UFwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHVuU2hpZnQ6IFwi0LdcIixcbiAgICAgICAgc2hpZnQ6IFwi0JdcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIlBcIixcbiAgICAgICAgdW5TaGlmdDogXCJwXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCI4MFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJCcmFja2V0TGVmdFwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHVuU2hpZnQ6IFwieFwiLFxuICAgICAgICBzaGlmdDogXCJYXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCJ7XCIsXG4gICAgICAgIHVuU2hpZnQ6IFwiW1wiLFxuICAgICAgfSxcbiAgICAgIGtleUNvZGU6IFwiMjE5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIkJyYWNrZXRSaWdodFwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHVuU2hpZnQ6IFwi0YpcIixcbiAgICAgICAgc2hpZnQ6IFwi0KpcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIn1cIixcbiAgICAgICAgdW5TaGlmdDogXCJdXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCIyMjFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6IFwiQmFja3NsYXNoXCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgdW5TaGlmdDogXCJcXFxcXCIsXG4gICAgICAgIHNoaWZ0OiBcIi9cIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcInxcIixcbiAgICAgICAgdW5TaGlmdDogXCJcXFxcXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCIyMjBcIixcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgY29kZTogXCJDYXBzTG9ja1wiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHVuU2hpZnQ6IFwi8J+FsCBDYXBzXCIsXG4gICAgICAgIHNoaWZ0OiBcIvCfhbAgQ2Fwc1wiLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgdW5TaGlmdDogXCLwn4WwIENhcHNcIixcbiAgICAgICAgc2hpZnQ6IFwi8J+FsCBDYXBzXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCIwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIktleUFcIixcbiAgICAgIGxhbmdSdToge1xuICAgICAgICB1blNoaWZ0OiBcItGEXCIsXG4gICAgICAgIHNoaWZ0OiBcItCkXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICB1blNoaWZ0OiBcImFcIixcbiAgICAgICAgc2hpZnQ6IFwiQVwiLFxuICAgICAgfSxcbiAgICAgIGtleUNvZGU6IFwiNjVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6IFwiS2V5U1wiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHVuU2hpZnQ6IFwi0YtcIixcbiAgICAgICAgc2hpZnQ6IFwi0KtcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHVuU2hpZnQ6IFwic1wiLFxuICAgICAgICBzaGlmdDogXCJTXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCI4M1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJLZXlEXCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgdW5TaGlmdDogXCLQslwiLFxuICAgICAgICBzaGlmdDogXCLQklwiLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgdW5TaGlmdDogXCJkXCIsXG4gICAgICAgIHNoaWZ0OiBcIkRcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjY4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIktleUZcIixcbiAgICAgIGxhbmdSdToge1xuICAgICAgICBzaGlmdDogXCLQkFwiLFxuICAgICAgICB1blNoaWZ0OiBcItCwXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCJGXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwiZlwiLFxuICAgICAgfSxcbiAgICAgIGtleUNvZGU6IFwiNzBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6IFwiS2V5R1wiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHNoaWZ0OiBcItCfXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwi0L9cIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIkdcIixcbiAgICAgICAgdW5TaGlmdDogXCJnXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCI3MVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJLZXlIXCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgc2hpZnQ6IFwi0KBcIixcbiAgICAgICAgdW5TaGlmdDogXCLRgFwiLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgc2hpZnQ6IFwiSFwiLFxuICAgICAgICB1blNoaWZ0OiBcImhcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjcyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIktleUpcIixcbiAgICAgIGxhbmdSdToge1xuICAgICAgICBzaGlmdDogXCLQnlwiLFxuICAgICAgICB1blNoaWZ0OiBcItC+XCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCJKXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwialwiLFxuICAgICAgfSxcbiAgICAgIGtleUNvZGU6IFwiNzRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6IFwiS2V5S1wiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHNoaWZ0OiBcItCbXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwi0LtcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIktcIixcbiAgICAgICAgdW5TaGlmdDogXCJrXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCI3NVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJLZXlMXCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgc2hpZnQ6IFwi0JRcIixcbiAgICAgICAgdW5TaGlmdDogXCLQtFwiLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgc2hpZnQ6IFwiTFwiLFxuICAgICAgICB1blNoaWZ0OiBcImxcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjc2XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIlNlbWljb2xvblwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHNoaWZ0OiBcItCWXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwi0LZcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIjpcIixcbiAgICAgICAgdW5TaGlmdDogXCI7XCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCI1OVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJRdW90ZVwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHNoaWZ0OiBcItCtXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwi0Y1cIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiAnXCInLFxuICAgICAgICB1blNoaWZ0OiBcIidcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjIyMlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJFbnRlclwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHNoaWZ0OiBcIkVudGVyXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCJFbnRlclwiLFxuICAgICAgICB1blNoaWZ0OiBcIkVudGVyXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCIxM1wiLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICBjb2RlOiBcIlNoaWZ0TGVmdFwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHNoaWZ0OiBcIuKHp1NoaWZ0XCIsXG4gICAgICAgIHVuU2hpZnQ6IFwi4oenU2hpZnRcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIuKHp1NoaWZ0XCIsXG4gICAgICAgIHVuU2hpZnQ6IFwi4oenU2hpZnRcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjE2XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIktleVpcIixcbiAgICAgIGxhbmdSdToge1xuICAgICAgICBzaGlmdDogXCLQr1wiLFxuICAgICAgICB1blNoaWZ0OiBcItGPXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCJaXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwielwiLFxuICAgICAgfSxcbiAgICAgIGtleUNvZGU6IFwiOTBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6IFwiS2V5WFwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHNoaWZ0OiBcItCnXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwi0YdcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIlhcIixcbiAgICAgICAgdW5TaGlmdDogXCJ4XCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCI4OFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJLZXlDXCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgc2hpZnQ6IFwiQ1wiLFxuICAgICAgICB1blNoaWZ0OiBcImNcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIkNcIixcbiAgICAgICAgdW5TaGlmdDogXCJjXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCI2N1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJLZXlWXCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgc2hpZnQ6IFwi0JxcIixcbiAgICAgICAgdW5TaGlmdDogXCLQvFwiLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgc2hpZnQ6IFwiVlwiLFxuICAgICAgICB1blNoaWZ0OiBcInZcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjg2XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIktleUJcIixcbiAgICAgIGxhbmdSdToge1xuICAgICAgICBzaGlmdDogXCLQmFwiLFxuICAgICAgICB1blNoaWZ0OiBcItC4XCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCJCXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwiYlwiLFxuICAgICAgfSxcbiAgICAgIGtleUNvZGU6IFwiNjZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6IFwiS2V5TlwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHNoaWZ0OiBcItCiXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwi0YJcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIk5cIixcbiAgICAgICAgdW5TaGlmdDogXCJuXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCI3OFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJLZXlNXCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgc2hpZnQ6IFwi0KxcIixcbiAgICAgICAgdW5TaGlmdDogXCLRjFwiLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgc2hpZnQ6IFwiTVwiLFxuICAgICAgICB1blNoaWZ0OiBcIm1cIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjc3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIkNvbW1hXCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgc2hpZnQ6IFwi0JFcIixcbiAgICAgICAgdW5TaGlmdDogXCLQsVwiLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgc2hpZnQ6IFwiPFwiLFxuICAgICAgICB1blNoaWZ0OiBcIixcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjE4OFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJQZXJpb2RcIixcbiAgICAgIGxhbmdSdToge1xuICAgICAgICBzaGlmdDogXCLQrlwiLFxuICAgICAgICB1blNoaWZ0OiBcItGOXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCI+XCIsXG4gICAgICAgIHVuU2hpZnQ6IFwiLlwiLFxuICAgICAgfSxcbiAgICAgIGtleUNvZGU6IFwiMTkwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIlNsYXNoXCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgc2hpZnQ6IFwiLFwiLFxuICAgICAgICB1blNoaWZ0OiBcIixcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIj9cIixcbiAgICAgICAgdW5TaGlmdDogXCIvXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCIxOTFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6IFwiU2hpZnRSaWdodFwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHNoaWZ0OiBcIuKHp1NoaWZ0XCIsXG4gICAgICAgIHVuU2hpZnQ6IFwi4oenU2hpZnRcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIuKHp1NoaWZ0XCIsXG4gICAgICAgIHVuU2hpZnQ6IFwi4oenU2hpZnRcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjE2XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIkFycm93VXBcIixcbiAgICAgIGxhbmdSdToge1xuICAgICAgICBzaGlmdDogXCLir4VcIixcbiAgICAgICAgdW5TaGlmdDogXCLir4VcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIuKvhVwiLFxuICAgICAgICB1blNoaWZ0OiBcIuKvhVwiLFxuICAgICAgfSxcbiAgICAgIGtleUNvZGU6IFwiMzhcIixcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgY29kZTogXCJDb250cm9sTGVmdFwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHNoaWZ0OiBcIkNvbnRyb2xcIixcbiAgICAgICAgdW5TaGlmdDogXCJDb250cm9sXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCJDb250cm9sXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwiQ29udHJvbFwiLFxuICAgICAgfSxcbiAgICAgIGtleUNvZGU6IFwiMTdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6IFwiQWx0TGVmdFwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHNoaWZ0OiBcIkFsdFwiLFxuICAgICAgICB1blNoaWZ0OiBcIkFsdFwiLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgc2hpZnQ6IFwiQWx0XCIsXG4gICAgICAgIHVuU2hpZnQ6IFwiQWx0XCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCIxOFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJTcGFjZVwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHNoaWZ0OiBcIlNwYWNlXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwiU3BhY2VcIixcbiAgICAgIH0sXG4gICAgICBsYW5nRW5nOiB7XG4gICAgICAgIHNoaWZ0OiBcIlNwYWNlXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwiU3BhY2VcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjMyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIkFsdFJpZ2h0XCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgc2hpZnQ6IFwiQWx0XCIsXG4gICAgICAgIHVuU2hpZnQ6IFwiQWx0XCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCJBbHRcIixcbiAgICAgICAgdW5TaGlmdDogXCJBbHRcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjE4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIkNvbnRyb2xSaWdodFwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHNoaWZ0OiBcIkNvbnRyb2xcIixcbiAgICAgICAgdW5TaGlmdDogXCJDb250cm9sXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCJDb250cm9sXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwiQ29udHJvbFwiLFxuICAgICAgfSxcbiAgICAgIGtleUNvZGU6IFwiMTdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvZGU6IFwiQXJyb3dMZWZ0XCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgc2hpZnQ6IFwi4q+HXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwi4q+HXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCLir4dcIixcbiAgICAgICAgdW5TaGlmdDogXCLir4dcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjM3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2RlOiBcIkFycm93RG93blwiLFxuICAgICAgbGFuZ1J1OiB7XG4gICAgICAgIHNoaWZ0OiBcIuKvhlwiLFxuICAgICAgICB1blNoaWZ0OiBcIuKvhlwiLFxuICAgICAgfSxcbiAgICAgIGxhbmdFbmc6IHtcbiAgICAgICAgc2hpZnQ6IFwi4q+GXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwi4q+GXCIsXG4gICAgICB9LFxuICAgICAga2V5Q29kZTogXCI0MFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgY29kZTogXCJBcnJvd1JpZ2h0XCIsXG4gICAgICBsYW5nUnU6IHtcbiAgICAgICAgc2hpZnQ6IFwi4q+IXCIsXG4gICAgICAgIHVuU2hpZnQ6IFwi4q+IXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ0VuZzoge1xuICAgICAgICBzaGlmdDogXCLir4hcIixcbiAgICAgICAgdW5TaGlmdDogXCLir4hcIixcbiAgICAgIH0sXG4gICAgICBrZXlDb2RlOiBcIjM5XCIsXG4gICAgfSxcbiAgXSxcbl07XG5cbmV4cG9ydCB7IGFsbEtleXMgfTtcblxuLy9jb25zb2xlLmxvZyhhbGxLZXlzKTtcbi8vbGV0IHJvdzEgPSBcIjE5MiA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiA1NyA0OCAxNzMgNjEgOFwiO1xuLy9sZXQgcm93MiA9IFwiOSA4MSA4NyA2OSA4MiA4NCA4OSA4NSA3MyA3OSA4MCAyMTkgMjIxIDIyMFwiO1xuLy9sZXQgcm93MyA9IFwiMCA2NSA4MyA2OCA3MCA3MSA3MiA3NCA3NSA3NiA1OSAyMjIgMTNcIjtcbi8vbGV0IHJvdzQgPSBcIjE2IDkwIDg4IDY3IDg2IDY2IDc4IDc3IDE4OCAxOTAgMTkxIDE2IDM4XCI7XG4vL2xldCByb3c1ID0gXCIxNyAxOCAzMiAxOCAxNyAzNyA0MCAzOVwiO1xuXG4vL3JvdzEgPSByb3cxLnNwbGl0KFwiIFwiKTtcbi8vcm93MiA9IHJvdzIuc3BsaXQoXCIgXCIpO1xuLy9yb3czID0gcm93My5zcGxpdChcIiBcIik7XG4vL3JvdzQgPSByb3c0LnNwbGl0KFwiIFwiKTtcbi8vcm93NSA9IHJvdzUuc3BsaXQoXCIgXCIpO1xuLy9sZXQgYWxsUm93cyA9IFtyb3cxLCByb3cyLCByb3czLCByb3c0LCByb3c1XTtcblxuLy9mb3IgKGxldCBpID0gMDsgaSA8IGFsbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgLy9mb3IgKGxldCBqID0gMDsgaiA8IGFsbEtleXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAvL2FsbEtleXNbaV1bal1bXCJrZXlDb2RlXCJdID0gYWxsUm93c1tpXVtqXTtcbiAgLy99XG4vL31cblxuIiwiaW1wb3J0IHsgYWxsS2V5cyB9IGZyb20gXCIuL2J1dHRvbnNUZW1wbGF0ZVwiO1xuXG4vL2tleS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgcmVtb3ZlVHJhbnNpdGlvbikpO1xuZnVuY3Rpb24gcmVtb3ZlVHJhbnNpdGlvbihlKSB7XG4gIGlmIChlLnByb3BlcnR5TmFtZSAhPT0gXCJ0cmFuc2Zvcm1cIikgcmV0dXJuO1xuICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbn1cbmZ1bmN0aW9uIG1ha2VCdXR0b25zKGFsbEtleXMsIGxhbmcsIHNoaWZ0KSB7XG4gIGxldCBrZXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAga2V5cy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImtleXNcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicm93XCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsS2V5c1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBrZXkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJrZXlcIik7XG4gICAgICBrZXkuc2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIiwgYWxsS2V5c1tpXVtqXVtcImtleUNvZGVcIl0pO1xuICAgICAga2V5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHJlbW92ZVRyYW5zaXRpb24pO1xuICAgICAgbGV0IGtiZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJrYmRcIik7XG4gICAgICBrYmQuaW5uZXJIVE1MID0gYWxsS2V5c1tpXVtqXVtsYW5nXVtzaGlmdF07XG4gICAgICBrZXkuYXBwZW5kKGtiZCk7XG4gICAgICByb3cuYXBwZW5kKGtleSk7XG4gICAgfVxuICAgIGtleXMuYXBwZW5kKHJvdyk7XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIGtleUFuaW1hdGlvbihlKSB7XG4gIGNvbnN0IGtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGRpdltkYXRhLWtleT1cIiR7ZS5rZXlDb2RlfVwiXWApO1xuICBpZiAoIWtleSkgcmV0dXJuO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleS5sZW5ndGg7IGkrKykge1xuICAgIGtleVtpXS5jbGFzc0xpc3QudG9nZ2xlKFwiY2xpY2tlZFwiKTtcbiAgfVxufVxuXG5sZXQgbGFuZ0VuZ1NoaWZ0ID0gbWFrZUJ1dHRvbnMoYWxsS2V5cywgXCJsYW5nRW5nXCIsIFwic2hpZnRcIik7XG5sZXQgbGFuZ0VuZ1VuU2hpZnQgPSBtYWtlQnV0dG9ucyhhbGxLZXlzLCBcImxhbmdFbmdcIiwgXCJ1blNoaWZ0XCIpO1xubGV0IGxhbmdSdVNoaWZ0ID0gbWFrZUJ1dHRvbnMoYWxsS2V5cywgXCJsYW5nUnVcIiwgXCJzaGlmdFwiKTtcbmxldCBsYW5nUnVVblNoaWZ0ID0gbWFrZUJ1dHRvbnMoYWxsS2V5cywgXCJsYW5nUnVcIiwgXCJ1blNoaWZ0XCIpO1xuXG4vL2xldCBrZXlzRG9tID0gW2xhbmdFbmdTaGlmdCwgbGFuZ0VuZ1VuU2hpZnQsIGxhbmdSdVNoaWZ0LCBsYW5nUnVVblNoaWZ0XTtcblxuZXhwb3J0IHsgbGFuZ0VuZ1NoaWZ0LCBsYW5nRW5nVW5TaGlmdCwgbGFuZ1J1U2hpZnQsIGxhbmdSdVVuU2hpZnQsIGtleUFuaW1hdGlvbiB9O1xuIiwiaW1wb3J0IHtcbiAgbGFuZ0VuZ1NoaWZ0LFxuICBsYW5nRW5nVW5TaGlmdCxcbiAgbGFuZ1J1U2hpZnQsXG4gIGxhbmdSdVVuU2hpZnQsXG59IGZyb20gXCIuL21ha2VCdXR0b25zXCI7XG5cbmZ1bmN0aW9uIG1ha2VLZXlib2FyZChzaGlmdCA9IGZhbHNlLCBsYW5nID0gXCJsYW5nRW5nXCIpIHtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgaWYgKCFzaGlmdCAmJiBsYW5nID09PSBcImxhbmdFbmdcIikge1xuICAgIGJvZHkuYXBwZW5kKGxhbmdFbmdVblNoaWZ0KTtcbiAgfSBlbHNlIGlmIChzaGlmdCAmJiBsYW5nID09PSBcImxhbmdFbmdcIikge1xuICAgIGJvZHkuYXBwZW5kKGxhbmdFbmdTaGlmdCk7XG4gIH0gZWxzZSBpZiAoIXNoaWZ0ICYmIGxhbmcgPT09IFwibGFuZ1J1XCIpIHtcbiAgICBib2R5LmFwcGVuZChsYW5nUnVVblNoaWZ0KTtcbiAgfSBlbHNlIGlmIChzaGlmdCAmJiBsYW5nID09PSBcImxhbmdSdVwiKSB7XG4gICAgYm9keS5hcHBlbmQobGFuZ1J1U2hpZnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VLZXlib2FyZDtcbiIsImZ1bmN0aW9uIG1ha2VUZXh0QXJlYSgpIHtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwid3JhcHBlclwiKTtcbiAgbGV0IHRleHRhcmVhQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRleHRhcmVhQ29udC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRleHQtYXJlYVwiKTtcbiAgbGV0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0ZXh0YXJlYUNvbnQuYXBwZW5kKHRleHRBcmVhKTtcbiAgd3JhcHBlci5hcHBlbmQodGV4dGFyZWFDb250KTtcbiAgYm9keS5hcHBlbmQod3JhcHBlcik7XG59XG5cbmZ1bmN0aW9uIHRleHRBcmVhQnJhaW4oZSkge1xuICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKTtcbiAgdGV4dGFyZWEuZm9jdXMoKTtcbiAgaWYgKGUua2V5Q29kZSA9PSA5KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRleHRhcmVhLnZhbHVlICs9IFwiICAgIFwiO1xuICB9XG59XG5leHBvcnQge21ha2VUZXh0QXJlYSwgdGV4dEFyZWFCcmFpbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2theWJvYXJkLWJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBib3R0b20gY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuYm9keSwgaHRtbCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ua2V5cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ua2V5IHtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4wN3MgZWFzZTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAwLjVyZW0gYmxhY2s7XFxufVxcblxcbi5rZXk6aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmtleTphY3RpdmUsXFxuLmtleS5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA3M2ZmO1xcbiAgYm94LXNoYWRvdzogMCAwIDFyZW0gIzAwNzNmZjtcXG59XFxuXFxua2JkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY2xpY2tlZCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBib3JkZXItY29sb3I6ICMwMDczZmY7XFxuICBib3gtc2hhZG93OiAwIDAgMXJlbSAjMDA3M2ZmO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDI1dmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcmVzaXplOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3NldHRpbmdzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fa2V5cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19pbnB1dC1hcmVhLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxpRUFBQTtFQUNBLHNCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QUNSQTtFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURVRjs7QUNSQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBRFdGOztBQ1JBO0VBQ0UsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7QURXRjs7QUNSQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBRFdGOztBQ1RBOztFQUVFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBRFlGOztBQ1RBO0VBQ0UsY0FBQTtBRFlGOztBQ1RBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FEWUY7O0FFeERBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBRjJERlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvL2theWJvYXJkLWJnLmpwZ1xcbmh0bWwge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMva2F5Ym9hcmQtYmcuanBnJykgYm90dG9tIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmJvZHksaHRtbCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cIixcImh0bWwge1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9hc3NldHMva2F5Ym9hcmQtYmcuanBnXFxcIikgYm90dG9tIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmJvZHksIGh0bWwge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLmtleXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmtleSB7XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwLjVyZW07XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMDdzIGVhc2U7XFxuICB3aWR0aDogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHRleHQtc2hhZG93OiAwIDAgMC41cmVtIGJsYWNrO1xcbn1cXG5cXG4ua2V5OmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5rZXk6YWN0aXZlLFxcbi5rZXkuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJvcmRlci1jb2xvcjogIzAwNzNmZjtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcmVtICMwMDczZmY7XFxufVxcblxcbmtiZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNsaWNrZWQge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA3M2ZmO1xcbiAgYm94LXNoYWRvdzogMCAwIDFyZW0gIzAwNzNmZjtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAyNXZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cIixcIi5rZXlzIHtcXG4gIC8vZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5rZXkge1xcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBtYXJnaW46IDFyZW0gMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjA3cyBlYXNlO1xcbiAgd2lkdGg6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDAuNXJlbSBibGFjaztcXG59XFxuXFxuLmtleTpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ua2V5OmFjdGl2ZSxcXG4ua2V5LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBib3JkZXItY29sb3I6ICMwMDczZmY7XFxuICBib3gtc2hhZG93OiAwIDAgMXJlbSAjMDA3M2ZmO1xcbn1cXG5cXG5rYmQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jbGlja2VkIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJvcmRlci1jb2xvcjogIzAwNzNmZjtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcmVtICMwMDczZmY7XFxufVxcblwiLFwidGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAyNXZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xubW9kdWxlLmV4cG9ydHMub25jZSA9IG9uY2U7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gX2dldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBvbmNlKGVtaXR0ZXIsIG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmdW5jdGlvbiBlcnJvckxpc3RlbmVyKGVycikge1xuICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihuYW1lLCByZXNvbHZlcik7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlcigpIHtcbiAgICAgIGlmICh0eXBlb2YgZW1pdHRlci5yZW1vdmVMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG5cbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgcmVzb2x2ZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBpZiAobmFtZSAhPT0gJ2Vycm9yJykge1xuICAgICAgYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgZXJyb3JMaXN0ZW5lciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGhhbmRsZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCAnZXJyb3InLCBoYW5kbGVyLCBmbGFncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIGxpc3RlbmVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgZW1pdHRlci5vbmNlKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1pdHRlci5vbihuYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBFdmVudFRhcmdldCBkb2VzIG5vdCBoYXZlIGBlcnJvcmAgZXZlbnQgc2VtYW50aWNzIGxpa2UgTm9kZVxuICAgIC8vIEV2ZW50RW1pdHRlcnMsIHdlIGRvIG5vdCBsaXN0ZW4gZm9yIGBlcnJvcmAgZXZlbnRzIGhlcmUuXG4gICAgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZ1bmN0aW9uIHdyYXBMaXN0ZW5lcihhcmcpIHtcbiAgICAgIC8vIElFIGRvZXMgbm90IGhhdmUgYnVpbHRpbiBgeyBvbmNlOiB0cnVlIH1gIHN1cHBvcnQgc28gd2VcbiAgICAgIC8vIGhhdmUgdG8gZG8gaXQgbWFudWFsbHkuXG4gICAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgd3JhcExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIGxpc3RlbmVyKGFyZyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwiZW1pdHRlclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBFdmVudEVtaXR0ZXIuIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBlbWl0dGVyKTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG5hbWVkX3JlZmVyZW5jZXNfMSA9IHJlcXVpcmUoXCIuL25hbWVkLXJlZmVyZW5jZXNcIik7XG52YXIgbnVtZXJpY191bmljb2RlX21hcF8xID0gcmVxdWlyZShcIi4vbnVtZXJpYy11bmljb2RlLW1hcFwiKTtcbnZhciBzdXJyb2dhdGVfcGFpcnNfMSA9IHJlcXVpcmUoXCIuL3N1cnJvZ2F0ZS1wYWlyc1wiKTtcbnZhciBhbGxOYW1lZFJlZmVyZW5jZXMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbmFtZWRfcmVmZXJlbmNlc18xLm5hbWVkUmVmZXJlbmNlcyksIHsgYWxsOiBuYW1lZF9yZWZlcmVuY2VzXzEubmFtZWRSZWZlcmVuY2VzLmh0bWw1IH0pO1xudmFyIGVuY29kZVJlZ0V4cHMgPSB7XG4gICAgc3BlY2lhbENoYXJzOiAvWzw+J1wiJl0vZyxcbiAgICBub25Bc2NpaTogLyg/Ols8PidcIiZcXHUwMDgwLVxcdUQ3RkZcXHVFMDAwLVxcdUZGRkZdfFtcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl18W1xcdUQ4MDAtXFx1REJGRl0oPyFbXFx1REMwMC1cXHVERkZGXSl8KD86W15cXHVEODAwLVxcdURCRkZdfF4pW1xcdURDMDAtXFx1REZGRl0pL2csXG4gICAgbm9uQXNjaWlQcmludGFibGU6IC8oPzpbPD4nXCImXFx4MDEtXFx4MDhcXHgxMS1cXHgxNVxceDE3LVxceDFGXFx4N2YtXFx1RDdGRlxcdUUwMDAtXFx1RkZGRl18W1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXSkvZyxcbiAgICBleHRlbnNpdmU6IC8oPzpbXFx4MDEtXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDJjXFx4MmUtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4N2RcXHg3Zi1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKS9nXG59O1xudmFyIGRlZmF1bHRFbmNvZGVPcHRpb25zID0ge1xuICAgIG1vZGU6ICdzcGVjaWFsQ2hhcnMnLFxuICAgIGxldmVsOiAnYWxsJyxcbiAgICBudW1lcmljOiAnZGVjaW1hbCdcbn07XG4vKiogRW5jb2RlcyBhbGwgdGhlIG5lY2Vzc2FyeSAoc3BlY2lmaWVkIGJ5IGBsZXZlbGApIGNoYXJhY3RlcnMgaW4gdGhlIHRleHQgKi9cbmZ1bmN0aW9uIGVuY29kZSh0ZXh0LCBfYSkge1xuICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyBkZWZhdWx0RW5jb2RlT3B0aW9ucyA6IF9hLCBfYyA9IF9iLm1vZGUsIG1vZGUgPSBfYyA9PT0gdm9pZCAwID8gJ3NwZWNpYWxDaGFycycgOiBfYywgX2QgPSBfYi5udW1lcmljLCBudW1lcmljID0gX2QgPT09IHZvaWQgMCA/ICdkZWNpbWFsJyA6IF9kLCBfZSA9IF9iLmxldmVsLCBsZXZlbCA9IF9lID09PSB2b2lkIDAgPyAnYWxsJyA6IF9lO1xuICAgIGlmICghdGV4dCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciBlbmNvZGVSZWdFeHAgPSBlbmNvZGVSZWdFeHBzW21vZGVdO1xuICAgIHZhciByZWZlcmVuY2VzID0gYWxsTmFtZWRSZWZlcmVuY2VzW2xldmVsXS5jaGFyYWN0ZXJzO1xuICAgIHZhciBpc0hleCA9IG51bWVyaWMgPT09ICdoZXhhZGVjaW1hbCc7XG4gICAgZW5jb2RlUmVnRXhwLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIF9iID0gZW5jb2RlUmVnRXhwLmV4ZWModGV4dCk7XG4gICAgdmFyIF9jO1xuICAgIGlmIChfYikge1xuICAgICAgICBfYyA9ICcnO1xuICAgICAgICB2YXIgX2QgPSAwO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoX2QgIT09IF9iLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgX2MgKz0gdGV4dC5zdWJzdHJpbmcoX2QsIF9iLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfZSA9IF9iWzBdO1xuICAgICAgICAgICAgdmFyIHJlc3VsdF8xID0gcmVmZXJlbmNlc1tfZV07XG4gICAgICAgICAgICBpZiAoIXJlc3VsdF8xKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGVfMSA9IF9lLmxlbmd0aCA+IDEgPyBzdXJyb2dhdGVfcGFpcnNfMS5nZXRDb2RlUG9pbnQoX2UsIDApIDogX2UuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgICAgICByZXN1bHRfMSA9IChpc0hleCA/ICcmI3gnICsgY29kZV8xLnRvU3RyaW5nKDE2KSA6ICcmIycgKyBjb2RlXzEpICsgJzsnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2MgKz0gcmVzdWx0XzE7XG4gICAgICAgICAgICBfZCA9IF9iLmluZGV4ICsgX2UubGVuZ3RoO1xuICAgICAgICB9IHdoaWxlICgoX2IgPSBlbmNvZGVSZWdFeHAuZXhlYyh0ZXh0KSkpO1xuICAgICAgICBpZiAoX2QgIT09IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBfYyArPSB0ZXh0LnN1YnN0cmluZyhfZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIF9jID1cbiAgICAgICAgICAgIHRleHQ7XG4gICAgfVxuICAgIHJldHVybiBfYztcbn1cbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlO1xudmFyIGRlZmF1bHREZWNvZGVPcHRpb25zID0ge1xuICAgIHNjb3BlOiAnYm9keScsXG4gICAgbGV2ZWw6ICdhbGwnXG59O1xudmFyIHN0cmljdCA9IC8mKD86I1xcZCt8I1t4WF1bXFxkYS1mQS1GXSt8WzAtOWEtekEtWl0rKTsvZztcbnZhciBhdHRyaWJ1dGUgPSAvJig/OiNcXGQrfCNbeFhdW1xcZGEtZkEtRl0rfFswLTlhLXpBLVpdKylbOz1dPy9nO1xudmFyIGJhc2VEZWNvZGVSZWdFeHBzID0ge1xuICAgIHhtbDoge1xuICAgICAgICBzdHJpY3Q6IHN0cmljdCxcbiAgICAgICAgYXR0cmlidXRlOiBhdHRyaWJ1dGUsXG4gICAgICAgIGJvZHk6IG5hbWVkX3JlZmVyZW5jZXNfMS5ib2R5UmVnRXhwcy54bWxcbiAgICB9LFxuICAgIGh0bWw0OiB7XG4gICAgICAgIHN0cmljdDogc3RyaWN0LFxuICAgICAgICBhdHRyaWJ1dGU6IGF0dHJpYnV0ZSxcbiAgICAgICAgYm9keTogbmFtZWRfcmVmZXJlbmNlc18xLmJvZHlSZWdFeHBzLmh0bWw0XG4gICAgfSxcbiAgICBodG1sNToge1xuICAgICAgICBzdHJpY3Q6IHN0cmljdCxcbiAgICAgICAgYXR0cmlidXRlOiBhdHRyaWJ1dGUsXG4gICAgICAgIGJvZHk6IG5hbWVkX3JlZmVyZW5jZXNfMS5ib2R5UmVnRXhwcy5odG1sNVxuICAgIH1cbn07XG52YXIgZGVjb2RlUmVnRXhwcyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBiYXNlRGVjb2RlUmVnRXhwcyksIHsgYWxsOiBiYXNlRGVjb2RlUmVnRXhwcy5odG1sNSB9KTtcbnZhciBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xudmFyIG91dE9mQm91bmRzQ2hhciA9IGZyb21DaGFyQ29kZSg2NTUzMyk7XG52YXIgZGVmYXVsdERlY29kZUVudGl0eU9wdGlvbnMgPSB7XG4gICAgbGV2ZWw6ICdhbGwnXG59O1xuLyoqIERlY29kZXMgYSBzaW5nbGUgZW50aXR5ICovXG5mdW5jdGlvbiBkZWNvZGVFbnRpdHkoZW50aXR5LCBfYSkge1xuICAgIHZhciBfYiA9IChfYSA9PT0gdm9pZCAwID8gZGVmYXVsdERlY29kZUVudGl0eU9wdGlvbnMgOiBfYSkubGV2ZWwsIGxldmVsID0gX2IgPT09IHZvaWQgMCA/ICdhbGwnIDogX2I7XG4gICAgaWYgKCFlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgX2IgPSBlbnRpdHk7XG4gICAgdmFyIGRlY29kZUVudGl0eUxhc3RDaGFyXzEgPSBlbnRpdHlbZW50aXR5Lmxlbmd0aCAtIDFdO1xuICAgIGlmIChmYWxzZVxuICAgICAgICAmJiBkZWNvZGVFbnRpdHlMYXN0Q2hhcl8xID09PSAnPScpIHtcbiAgICAgICAgX2IgPVxuICAgICAgICAgICAgZW50aXR5O1xuICAgIH1cbiAgICBlbHNlIGlmIChmYWxzZVxuICAgICAgICAmJiBkZWNvZGVFbnRpdHlMYXN0Q2hhcl8xICE9PSAnOycpIHtcbiAgICAgICAgX2IgPVxuICAgICAgICAgICAgZW50aXR5O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGRlY29kZVJlc3VsdEJ5UmVmZXJlbmNlXzEgPSBhbGxOYW1lZFJlZmVyZW5jZXNbbGV2ZWxdLmVudGl0aWVzW2VudGl0eV07XG4gICAgICAgIGlmIChkZWNvZGVSZXN1bHRCeVJlZmVyZW5jZV8xKSB7XG4gICAgICAgICAgICBfYiA9IGRlY29kZVJlc3VsdEJ5UmVmZXJlbmNlXzE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZW50aXR5WzBdID09PSAnJicgJiYgZW50aXR5WzFdID09PSAnIycpIHtcbiAgICAgICAgICAgIHZhciBkZWNvZGVTZWNvbmRDaGFyXzEgPSBlbnRpdHlbMl07XG4gICAgICAgICAgICB2YXIgZGVjb2RlQ29kZV8xID0gZGVjb2RlU2Vjb25kQ2hhcl8xID09ICd4JyB8fCBkZWNvZGVTZWNvbmRDaGFyXzEgPT0gJ1gnXG4gICAgICAgICAgICAgICAgPyBwYXJzZUludChlbnRpdHkuc3Vic3RyKDMpLCAxNilcbiAgICAgICAgICAgICAgICA6IHBhcnNlSW50KGVudGl0eS5zdWJzdHIoMikpO1xuICAgICAgICAgICAgX2IgPVxuICAgICAgICAgICAgICAgIGRlY29kZUNvZGVfMSA+PSAweDEwZmZmZlxuICAgICAgICAgICAgICAgICAgICA/IG91dE9mQm91bmRzQ2hhclxuICAgICAgICAgICAgICAgICAgICA6IGRlY29kZUNvZGVfMSA+IDY1NTM1XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHN1cnJvZ2F0ZV9wYWlyc18xLmZyb21Db2RlUG9pbnQoZGVjb2RlQ29kZV8xKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBmcm9tQ2hhckNvZGUobnVtZXJpY191bmljb2RlX21hcF8xLm51bWVyaWNVbmljb2RlTWFwW2RlY29kZUNvZGVfMV0gfHwgZGVjb2RlQ29kZV8xKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX2I7XG59XG5leHBvcnRzLmRlY29kZUVudGl0eSA9IGRlY29kZUVudGl0eTtcbi8qKiBEZWNvZGVzIGFsbCBlbnRpdGllcyBpbiB0aGUgdGV4dCAqL1xuZnVuY3Rpb24gZGVjb2RlKHRleHQsIF9hKSB7XG4gICAgdmFyIGRlY29kZVNlY29uZENoYXJfMSA9IF9hID09PSB2b2lkIDAgPyBkZWZhdWx0RGVjb2RlT3B0aW9ucyA6IF9hLCBkZWNvZGVDb2RlXzEgPSBkZWNvZGVTZWNvbmRDaGFyXzEubGV2ZWwsIGxldmVsID0gZGVjb2RlQ29kZV8xID09PSB2b2lkIDAgPyAnYWxsJyA6IGRlY29kZUNvZGVfMSwgX2IgPSBkZWNvZGVTZWNvbmRDaGFyXzEuc2NvcGUsIHNjb3BlID0gX2IgPT09IHZvaWQgMCA/IGxldmVsID09PSAneG1sJyA/ICdzdHJpY3QnIDogJ2JvZHknIDogX2I7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIGRlY29kZVJlZ0V4cCA9IGRlY29kZVJlZ0V4cHNbbGV2ZWxdW3Njb3BlXTtcbiAgICB2YXIgcmVmZXJlbmNlcyA9IGFsbE5hbWVkUmVmZXJlbmNlc1tsZXZlbF0uZW50aXRpZXM7XG4gICAgdmFyIGlzQXR0cmlidXRlID0gc2NvcGUgPT09ICdhdHRyaWJ1dGUnO1xuICAgIHZhciBpc1N0cmljdCA9IHNjb3BlID09PSAnc3RyaWN0JztcbiAgICBkZWNvZGVSZWdFeHAubGFzdEluZGV4ID0gMDtcbiAgICB2YXIgcmVwbGFjZU1hdGNoXzEgPSBkZWNvZGVSZWdFeHAuZXhlYyh0ZXh0KTtcbiAgICB2YXIgcmVwbGFjZVJlc3VsdF8xO1xuICAgIGlmIChyZXBsYWNlTWF0Y2hfMSkge1xuICAgICAgICByZXBsYWNlUmVzdWx0XzEgPSAnJztcbiAgICAgICAgdmFyIHJlcGxhY2VMYXN0SW5kZXhfMSA9IDA7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChyZXBsYWNlTGFzdEluZGV4XzEgIT09IHJlcGxhY2VNYXRjaF8xLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVJlc3VsdF8xICs9IHRleHQuc3Vic3RyaW5nKHJlcGxhY2VMYXN0SW5kZXhfMSwgcmVwbGFjZU1hdGNoXzEuaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlcGxhY2VJbnB1dF8xID0gcmVwbGFjZU1hdGNoXzFbMF07XG4gICAgICAgICAgICB2YXIgZGVjb2RlUmVzdWx0XzEgPSByZXBsYWNlSW5wdXRfMTtcbiAgICAgICAgICAgIHZhciBkZWNvZGVFbnRpdHlMYXN0Q2hhcl8yID0gcmVwbGFjZUlucHV0XzFbcmVwbGFjZUlucHV0XzEubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAoaXNBdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAmJiBkZWNvZGVFbnRpdHlMYXN0Q2hhcl8yID09PSAnPScpIHtcbiAgICAgICAgICAgICAgICBkZWNvZGVSZXN1bHRfMSA9IHJlcGxhY2VJbnB1dF8xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNTdHJpY3RcbiAgICAgICAgICAgICAgICAmJiBkZWNvZGVFbnRpdHlMYXN0Q2hhcl8yICE9PSAnOycpIHtcbiAgICAgICAgICAgICAgICBkZWNvZGVSZXN1bHRfMSA9IHJlcGxhY2VJbnB1dF8xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlY29kZVJlc3VsdEJ5UmVmZXJlbmNlXzIgPSByZWZlcmVuY2VzW3JlcGxhY2VJbnB1dF8xXTtcbiAgICAgICAgICAgICAgICBpZiAoZGVjb2RlUmVzdWx0QnlSZWZlcmVuY2VfMikge1xuICAgICAgICAgICAgICAgICAgICBkZWNvZGVSZXN1bHRfMSA9IGRlY29kZVJlc3VsdEJ5UmVmZXJlbmNlXzI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcGxhY2VJbnB1dF8xWzBdID09PSAnJicgJiYgcmVwbGFjZUlucHV0XzFbMV0gPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVjb2RlU2Vjb25kQ2hhcl8yID0gcmVwbGFjZUlucHV0XzFbMl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWNvZGVDb2RlXzIgPSBkZWNvZGVTZWNvbmRDaGFyXzIgPT0gJ3gnIHx8IGRlY29kZVNlY29uZENoYXJfMiA9PSAnWCdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcGFyc2VJbnQocmVwbGFjZUlucHV0XzEuc3Vic3RyKDMpLCAxNilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcGFyc2VJbnQocmVwbGFjZUlucHV0XzEuc3Vic3RyKDIpKTtcbiAgICAgICAgICAgICAgICAgICAgZGVjb2RlUmVzdWx0XzEgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlQ29kZV8yID49IDB4MTBmZmZmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvdXRPZkJvdW5kc0NoYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZUNvZGVfMiA+IDY1NTM1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc3Vycm9nYXRlX3BhaXJzXzEuZnJvbUNvZGVQb2ludChkZWNvZGVDb2RlXzIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZnJvbUNoYXJDb2RlKG51bWVyaWNfdW5pY29kZV9tYXBfMS5udW1lcmljVW5pY29kZU1hcFtkZWNvZGVDb2RlXzJdIHx8IGRlY29kZUNvZGVfMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVwbGFjZVJlc3VsdF8xICs9IGRlY29kZVJlc3VsdF8xO1xuICAgICAgICAgICAgcmVwbGFjZUxhc3RJbmRleF8xID0gcmVwbGFjZU1hdGNoXzEuaW5kZXggKyByZXBsYWNlSW5wdXRfMS5sZW5ndGg7XG4gICAgICAgIH0gd2hpbGUgKChyZXBsYWNlTWF0Y2hfMSA9IGRlY29kZVJlZ0V4cC5leGVjKHRleHQpKSk7XG4gICAgICAgIGlmIChyZXBsYWNlTGFzdEluZGV4XzEgIT09IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXBsYWNlUmVzdWx0XzEgKz0gdGV4dC5zdWJzdHJpbmcocmVwbGFjZUxhc3RJbmRleF8xKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVwbGFjZVJlc3VsdF8xID1cbiAgICAgICAgICAgIHRleHQ7XG4gICAgfVxuICAgIHJldHVybiByZXBsYWNlUmVzdWx0XzE7XG59XG5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbiIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTp0cnVlfSk7ZXhwb3J0cy5ib2R5UmVnRXhwcz17eG1sOi8mKD86I1xcZCt8I1t4WF1bXFxkYS1mQS1GXSt8WzAtOWEtekEtWl0rKTs/L2csaHRtbDQ6LyYoPzpuYnNwfGlleGNsfGNlbnR8cG91bmR8Y3VycmVufHllbnxicnZiYXJ8c2VjdHx1bWx8Y29weXxvcmRmfGxhcXVvfG5vdHxzaHl8cmVnfG1hY3J8ZGVnfHBsdXNtbnxzdXAyfHN1cDN8YWN1dGV8bWljcm98cGFyYXxtaWRkb3R8Y2VkaWx8c3VwMXxvcmRtfHJhcXVvfGZyYWMxNHxmcmFjMTJ8ZnJhYzM0fGlxdWVzdHxBZ3JhdmV8QWFjdXRlfEFjaXJjfEF0aWxkZXxBdW1sfEFyaW5nfEFFbGlnfENjZWRpbHxFZ3JhdmV8RWFjdXRlfEVjaXJjfEV1bWx8SWdyYXZlfElhY3V0ZXxJY2lyY3xJdW1sfEVUSHxOdGlsZGV8T2dyYXZlfE9hY3V0ZXxPY2lyY3xPdGlsZGV8T3VtbHx0aW1lc3xPc2xhc2h8VWdyYXZlfFVhY3V0ZXxVY2lyY3xVdW1sfFlhY3V0ZXxUSE9STnxzemxpZ3xhZ3JhdmV8YWFjdXRlfGFjaXJjfGF0aWxkZXxhdW1sfGFyaW5nfGFlbGlnfGNjZWRpbHxlZ3JhdmV8ZWFjdXRlfGVjaXJjfGV1bWx8aWdyYXZlfGlhY3V0ZXxpY2lyY3xpdW1sfGV0aHxudGlsZGV8b2dyYXZlfG9hY3V0ZXxvY2lyY3xvdGlsZGV8b3VtbHxkaXZpZGV8b3NsYXNofHVncmF2ZXx1YWN1dGV8dWNpcmN8dXVtbHx5YWN1dGV8dGhvcm58eXVtbHxxdW90fGFtcHxsdHxndHwjXFxkK3wjW3hYXVtcXGRhLWZBLUZdK3xbMC05YS16QS1aXSspOz8vZyxodG1sNTovJig/OkFFbGlnfEFNUHxBYWN1dGV8QWNpcmN8QWdyYXZlfEFyaW5nfEF0aWxkZXxBdW1sfENPUFl8Q2NlZGlsfEVUSHxFYWN1dGV8RWNpcmN8RWdyYXZlfEV1bWx8R1R8SWFjdXRlfEljaXJjfElncmF2ZXxJdW1sfExUfE50aWxkZXxPYWN1dGV8T2NpcmN8T2dyYXZlfE9zbGFzaHxPdGlsZGV8T3VtbHxRVU9UfFJFR3xUSE9STnxVYWN1dGV8VWNpcmN8VWdyYXZlfFV1bWx8WWFjdXRlfGFhY3V0ZXxhY2lyY3xhY3V0ZXxhZWxpZ3xhZ3JhdmV8YW1wfGFyaW5nfGF0aWxkZXxhdW1sfGJydmJhcnxjY2VkaWx8Y2VkaWx8Y2VudHxjb3B5fGN1cnJlbnxkZWd8ZGl2aWRlfGVhY3V0ZXxlY2lyY3xlZ3JhdmV8ZXRofGV1bWx8ZnJhYzEyfGZyYWMxNHxmcmFjMzR8Z3R8aWFjdXRlfGljaXJjfGlleGNsfGlncmF2ZXxpcXVlc3R8aXVtbHxsYXF1b3xsdHxtYWNyfG1pY3JvfG1pZGRvdHxuYnNwfG5vdHxudGlsZGV8b2FjdXRlfG9jaXJjfG9ncmF2ZXxvcmRmfG9yZG18b3NsYXNofG90aWxkZXxvdW1sfHBhcmF8cGx1c21ufHBvdW5kfHF1b3R8cmFxdW98cmVnfHNlY3R8c2h5fHN1cDF8c3VwMnxzdXAzfHN6bGlnfHRob3JufHRpbWVzfHVhY3V0ZXx1Y2lyY3x1Z3JhdmV8dW1sfHV1bWx8eWFjdXRlfHllbnx5dW1sfCNcXGQrfCNbeFhdW1xcZGEtZkEtRl0rfFswLTlhLXpBLVpdKyk7Py9nfTtleHBvcnRzLm5hbWVkUmVmZXJlbmNlcz17eG1sOntlbnRpdGllczp7XCImbHQ7XCI6XCI8XCIsXCImZ3Q7XCI6XCI+XCIsXCImcXVvdDtcIjonXCInLFwiJmFwb3M7XCI6XCInXCIsXCImYW1wO1wiOlwiJlwifSxjaGFyYWN0ZXJzOntcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIiwnXCInOlwiJnF1b3Q7XCIsXCInXCI6XCImYXBvcztcIixcIiZcIjpcIiZhbXA7XCJ9fSxodG1sNDp7ZW50aXRpZXM6e1wiJmFwb3M7XCI6XCInXCIsXCImbmJzcFwiOlwiwqBcIixcIiZuYnNwO1wiOlwiwqBcIixcIiZpZXhjbFwiOlwiwqFcIixcIiZpZXhjbDtcIjpcIsKhXCIsXCImY2VudFwiOlwiwqJcIixcIiZjZW50O1wiOlwiwqJcIixcIiZwb3VuZFwiOlwiwqNcIixcIiZwb3VuZDtcIjpcIsKjXCIsXCImY3VycmVuXCI6XCLCpFwiLFwiJmN1cnJlbjtcIjpcIsKkXCIsXCImeWVuXCI6XCLCpVwiLFwiJnllbjtcIjpcIsKlXCIsXCImYnJ2YmFyXCI6XCLCplwiLFwiJmJydmJhcjtcIjpcIsKmXCIsXCImc2VjdFwiOlwiwqdcIixcIiZzZWN0O1wiOlwiwqdcIixcIiZ1bWxcIjpcIsKoXCIsXCImdW1sO1wiOlwiwqhcIixcIiZjb3B5XCI6XCLCqVwiLFwiJmNvcHk7XCI6XCLCqVwiLFwiJm9yZGZcIjpcIsKqXCIsXCImb3JkZjtcIjpcIsKqXCIsXCImbGFxdW9cIjpcIsKrXCIsXCImbGFxdW87XCI6XCLCq1wiLFwiJm5vdFwiOlwiwqxcIixcIiZub3Q7XCI6XCLCrFwiLFwiJnNoeVwiOlwiwq1cIixcIiZzaHk7XCI6XCLCrVwiLFwiJnJlZ1wiOlwiwq5cIixcIiZyZWc7XCI6XCLCrlwiLFwiJm1hY3JcIjpcIsKvXCIsXCImbWFjcjtcIjpcIsKvXCIsXCImZGVnXCI6XCLCsFwiLFwiJmRlZztcIjpcIsKwXCIsXCImcGx1c21uXCI6XCLCsVwiLFwiJnBsdXNtbjtcIjpcIsKxXCIsXCImc3VwMlwiOlwiwrJcIixcIiZzdXAyO1wiOlwiwrJcIixcIiZzdXAzXCI6XCLCs1wiLFwiJnN1cDM7XCI6XCLCs1wiLFwiJmFjdXRlXCI6XCLCtFwiLFwiJmFjdXRlO1wiOlwiwrRcIixcIiZtaWNyb1wiOlwiwrVcIixcIiZtaWNybztcIjpcIsK1XCIsXCImcGFyYVwiOlwiwrZcIixcIiZwYXJhO1wiOlwiwrZcIixcIiZtaWRkb3RcIjpcIsK3XCIsXCImbWlkZG90O1wiOlwiwrdcIixcIiZjZWRpbFwiOlwiwrhcIixcIiZjZWRpbDtcIjpcIsK4XCIsXCImc3VwMVwiOlwiwrlcIixcIiZzdXAxO1wiOlwiwrlcIixcIiZvcmRtXCI6XCLCulwiLFwiJm9yZG07XCI6XCLCulwiLFwiJnJhcXVvXCI6XCLCu1wiLFwiJnJhcXVvO1wiOlwiwrtcIixcIiZmcmFjMTRcIjpcIsK8XCIsXCImZnJhYzE0O1wiOlwiwrxcIixcIiZmcmFjMTJcIjpcIsK9XCIsXCImZnJhYzEyO1wiOlwiwr1cIixcIiZmcmFjMzRcIjpcIsK+XCIsXCImZnJhYzM0O1wiOlwiwr5cIixcIiZpcXVlc3RcIjpcIsK/XCIsXCImaXF1ZXN0O1wiOlwiwr9cIixcIiZBZ3JhdmVcIjpcIsOAXCIsXCImQWdyYXZlO1wiOlwiw4BcIixcIiZBYWN1dGVcIjpcIsOBXCIsXCImQWFjdXRlO1wiOlwiw4FcIixcIiZBY2lyY1wiOlwiw4JcIixcIiZBY2lyYztcIjpcIsOCXCIsXCImQXRpbGRlXCI6XCLDg1wiLFwiJkF0aWxkZTtcIjpcIsODXCIsXCImQXVtbFwiOlwiw4RcIixcIiZBdW1sO1wiOlwiw4RcIixcIiZBcmluZ1wiOlwiw4VcIixcIiZBcmluZztcIjpcIsOFXCIsXCImQUVsaWdcIjpcIsOGXCIsXCImQUVsaWc7XCI6XCLDhlwiLFwiJkNjZWRpbFwiOlwiw4dcIixcIiZDY2VkaWw7XCI6XCLDh1wiLFwiJkVncmF2ZVwiOlwiw4hcIixcIiZFZ3JhdmU7XCI6XCLDiFwiLFwiJkVhY3V0ZVwiOlwiw4lcIixcIiZFYWN1dGU7XCI6XCLDiVwiLFwiJkVjaXJjXCI6XCLDilwiLFwiJkVjaXJjO1wiOlwiw4pcIixcIiZFdW1sXCI6XCLDi1wiLFwiJkV1bWw7XCI6XCLDi1wiLFwiJklncmF2ZVwiOlwiw4xcIixcIiZJZ3JhdmU7XCI6XCLDjFwiLFwiJklhY3V0ZVwiOlwiw41cIixcIiZJYWN1dGU7XCI6XCLDjVwiLFwiJkljaXJjXCI6XCLDjlwiLFwiJkljaXJjO1wiOlwiw45cIixcIiZJdW1sXCI6XCLDj1wiLFwiJkl1bWw7XCI6XCLDj1wiLFwiJkVUSFwiOlwiw5BcIixcIiZFVEg7XCI6XCLDkFwiLFwiJk50aWxkZVwiOlwiw5FcIixcIiZOdGlsZGU7XCI6XCLDkVwiLFwiJk9ncmF2ZVwiOlwiw5JcIixcIiZPZ3JhdmU7XCI6XCLDklwiLFwiJk9hY3V0ZVwiOlwiw5NcIixcIiZPYWN1dGU7XCI6XCLDk1wiLFwiJk9jaXJjXCI6XCLDlFwiLFwiJk9jaXJjO1wiOlwiw5RcIixcIiZPdGlsZGVcIjpcIsOVXCIsXCImT3RpbGRlO1wiOlwiw5VcIixcIiZPdW1sXCI6XCLDllwiLFwiJk91bWw7XCI6XCLDllwiLFwiJnRpbWVzXCI6XCLDl1wiLFwiJnRpbWVzO1wiOlwiw5dcIixcIiZPc2xhc2hcIjpcIsOYXCIsXCImT3NsYXNoO1wiOlwiw5hcIixcIiZVZ3JhdmVcIjpcIsOZXCIsXCImVWdyYXZlO1wiOlwiw5lcIixcIiZVYWN1dGVcIjpcIsOaXCIsXCImVWFjdXRlO1wiOlwiw5pcIixcIiZVY2lyY1wiOlwiw5tcIixcIiZVY2lyYztcIjpcIsObXCIsXCImVXVtbFwiOlwiw5xcIixcIiZVdW1sO1wiOlwiw5xcIixcIiZZYWN1dGVcIjpcIsOdXCIsXCImWWFjdXRlO1wiOlwiw51cIixcIiZUSE9STlwiOlwiw55cIixcIiZUSE9STjtcIjpcIsOeXCIsXCImc3psaWdcIjpcIsOfXCIsXCImc3psaWc7XCI6XCLDn1wiLFwiJmFncmF2ZVwiOlwiw6BcIixcIiZhZ3JhdmU7XCI6XCLDoFwiLFwiJmFhY3V0ZVwiOlwiw6FcIixcIiZhYWN1dGU7XCI6XCLDoVwiLFwiJmFjaXJjXCI6XCLDolwiLFwiJmFjaXJjO1wiOlwiw6JcIixcIiZhdGlsZGVcIjpcIsOjXCIsXCImYXRpbGRlO1wiOlwiw6NcIixcIiZhdW1sXCI6XCLDpFwiLFwiJmF1bWw7XCI6XCLDpFwiLFwiJmFyaW5nXCI6XCLDpVwiLFwiJmFyaW5nO1wiOlwiw6VcIixcIiZhZWxpZ1wiOlwiw6ZcIixcIiZhZWxpZztcIjpcIsOmXCIsXCImY2NlZGlsXCI6XCLDp1wiLFwiJmNjZWRpbDtcIjpcIsOnXCIsXCImZWdyYXZlXCI6XCLDqFwiLFwiJmVncmF2ZTtcIjpcIsOoXCIsXCImZWFjdXRlXCI6XCLDqVwiLFwiJmVhY3V0ZTtcIjpcIsOpXCIsXCImZWNpcmNcIjpcIsOqXCIsXCImZWNpcmM7XCI6XCLDqlwiLFwiJmV1bWxcIjpcIsOrXCIsXCImZXVtbDtcIjpcIsOrXCIsXCImaWdyYXZlXCI6XCLDrFwiLFwiJmlncmF2ZTtcIjpcIsOsXCIsXCImaWFjdXRlXCI6XCLDrVwiLFwiJmlhY3V0ZTtcIjpcIsOtXCIsXCImaWNpcmNcIjpcIsOuXCIsXCImaWNpcmM7XCI6XCLDrlwiLFwiJml1bWxcIjpcIsOvXCIsXCImaXVtbDtcIjpcIsOvXCIsXCImZXRoXCI6XCLDsFwiLFwiJmV0aDtcIjpcIsOwXCIsXCImbnRpbGRlXCI6XCLDsVwiLFwiJm50aWxkZTtcIjpcIsOxXCIsXCImb2dyYXZlXCI6XCLDslwiLFwiJm9ncmF2ZTtcIjpcIsOyXCIsXCImb2FjdXRlXCI6XCLDs1wiLFwiJm9hY3V0ZTtcIjpcIsOzXCIsXCImb2NpcmNcIjpcIsO0XCIsXCImb2NpcmM7XCI6XCLDtFwiLFwiJm90aWxkZVwiOlwiw7VcIixcIiZvdGlsZGU7XCI6XCLDtVwiLFwiJm91bWxcIjpcIsO2XCIsXCImb3VtbDtcIjpcIsO2XCIsXCImZGl2aWRlXCI6XCLDt1wiLFwiJmRpdmlkZTtcIjpcIsO3XCIsXCImb3NsYXNoXCI6XCLDuFwiLFwiJm9zbGFzaDtcIjpcIsO4XCIsXCImdWdyYXZlXCI6XCLDuVwiLFwiJnVncmF2ZTtcIjpcIsO5XCIsXCImdWFjdXRlXCI6XCLDulwiLFwiJnVhY3V0ZTtcIjpcIsO6XCIsXCImdWNpcmNcIjpcIsO7XCIsXCImdWNpcmM7XCI6XCLDu1wiLFwiJnV1bWxcIjpcIsO8XCIsXCImdXVtbDtcIjpcIsO8XCIsXCImeWFjdXRlXCI6XCLDvVwiLFwiJnlhY3V0ZTtcIjpcIsO9XCIsXCImdGhvcm5cIjpcIsO+XCIsXCImdGhvcm47XCI6XCLDvlwiLFwiJnl1bWxcIjpcIsO/XCIsXCImeXVtbDtcIjpcIsO/XCIsXCImcXVvdFwiOidcIicsXCImcXVvdDtcIjonXCInLFwiJmFtcFwiOlwiJlwiLFwiJmFtcDtcIjpcIiZcIixcIiZsdFwiOlwiPFwiLFwiJmx0O1wiOlwiPFwiLFwiJmd0XCI6XCI+XCIsXCImZ3Q7XCI6XCI+XCIsXCImT0VsaWc7XCI6XCLFklwiLFwiJm9lbGlnO1wiOlwixZNcIixcIiZTY2Fyb247XCI6XCLFoFwiLFwiJnNjYXJvbjtcIjpcIsWhXCIsXCImWXVtbDtcIjpcIsW4XCIsXCImY2lyYztcIjpcIsuGXCIsXCImdGlsZGU7XCI6XCLLnFwiLFwiJmVuc3A7XCI6XCLigIJcIixcIiZlbXNwO1wiOlwi4oCDXCIsXCImdGhpbnNwO1wiOlwi4oCJXCIsXCImenduajtcIjpcIuKAjFwiLFwiJnp3ajtcIjpcIuKAjVwiLFwiJmxybTtcIjpcIuKAjlwiLFwiJnJsbTtcIjpcIuKAj1wiLFwiJm5kYXNoO1wiOlwi4oCTXCIsXCImbWRhc2g7XCI6XCLigJRcIixcIiZsc3F1bztcIjpcIuKAmFwiLFwiJnJzcXVvO1wiOlwi4oCZXCIsXCImc2JxdW87XCI6XCLigJpcIixcIiZsZHF1bztcIjpcIuKAnFwiLFwiJnJkcXVvO1wiOlwi4oCdXCIsXCImYmRxdW87XCI6XCLigJ5cIixcIiZkYWdnZXI7XCI6XCLigKBcIixcIiZEYWdnZXI7XCI6XCLigKFcIixcIiZwZXJtaWw7XCI6XCLigLBcIixcIiZsc2FxdW87XCI6XCLigLlcIixcIiZyc2FxdW87XCI6XCLigLpcIixcIiZldXJvO1wiOlwi4oKsXCIsXCImZm5vZjtcIjpcIsaSXCIsXCImQWxwaGE7XCI6XCLOkVwiLFwiJkJldGE7XCI6XCLOklwiLFwiJkdhbW1hO1wiOlwizpNcIixcIiZEZWx0YTtcIjpcIs6UXCIsXCImRXBzaWxvbjtcIjpcIs6VXCIsXCImWmV0YTtcIjpcIs6WXCIsXCImRXRhO1wiOlwizpdcIixcIiZUaGV0YTtcIjpcIs6YXCIsXCImSW90YTtcIjpcIs6ZXCIsXCImS2FwcGE7XCI6XCLOmlwiLFwiJkxhbWJkYTtcIjpcIs6bXCIsXCImTXU7XCI6XCLOnFwiLFwiJk51O1wiOlwizp1cIixcIiZYaTtcIjpcIs6eXCIsXCImT21pY3JvbjtcIjpcIs6fXCIsXCImUGk7XCI6XCLOoFwiLFwiJlJobztcIjpcIs6hXCIsXCImU2lnbWE7XCI6XCLOo1wiLFwiJlRhdTtcIjpcIs6kXCIsXCImVXBzaWxvbjtcIjpcIs6lXCIsXCImUGhpO1wiOlwizqZcIixcIiZDaGk7XCI6XCLOp1wiLFwiJlBzaTtcIjpcIs6oXCIsXCImT21lZ2E7XCI6XCLOqVwiLFwiJmFscGhhO1wiOlwizrFcIixcIiZiZXRhO1wiOlwizrJcIixcIiZnYW1tYTtcIjpcIs6zXCIsXCImZGVsdGE7XCI6XCLOtFwiLFwiJmVwc2lsb247XCI6XCLOtVwiLFwiJnpldGE7XCI6XCLOtlwiLFwiJmV0YTtcIjpcIs63XCIsXCImdGhldGE7XCI6XCLOuFwiLFwiJmlvdGE7XCI6XCLOuVwiLFwiJmthcHBhO1wiOlwizrpcIixcIiZsYW1iZGE7XCI6XCLOu1wiLFwiJm11O1wiOlwizrxcIixcIiZudTtcIjpcIs69XCIsXCImeGk7XCI6XCLOvlwiLFwiJm9taWNyb247XCI6XCLOv1wiLFwiJnBpO1wiOlwiz4BcIixcIiZyaG87XCI6XCLPgVwiLFwiJnNpZ21hZjtcIjpcIs+CXCIsXCImc2lnbWE7XCI6XCLPg1wiLFwiJnRhdTtcIjpcIs+EXCIsXCImdXBzaWxvbjtcIjpcIs+FXCIsXCImcGhpO1wiOlwiz4ZcIixcIiZjaGk7XCI6XCLPh1wiLFwiJnBzaTtcIjpcIs+IXCIsXCImb21lZ2E7XCI6XCLPiVwiLFwiJnRoZXRhc3ltO1wiOlwiz5FcIixcIiZ1cHNpaDtcIjpcIs+SXCIsXCImcGl2O1wiOlwiz5ZcIixcIiZidWxsO1wiOlwi4oCiXCIsXCImaGVsbGlwO1wiOlwi4oCmXCIsXCImcHJpbWU7XCI6XCLigLJcIixcIiZQcmltZTtcIjpcIuKAs1wiLFwiJm9saW5lO1wiOlwi4oC+XCIsXCImZnJhc2w7XCI6XCLigYRcIixcIiZ3ZWllcnA7XCI6XCLihJhcIixcIiZpbWFnZTtcIjpcIuKEkVwiLFwiJnJlYWw7XCI6XCLihJxcIixcIiZ0cmFkZTtcIjpcIuKEolwiLFwiJmFsZWZzeW07XCI6XCLihLVcIixcIiZsYXJyO1wiOlwi4oaQXCIsXCImdWFycjtcIjpcIuKGkVwiLFwiJnJhcnI7XCI6XCLihpJcIixcIiZkYXJyO1wiOlwi4oaTXCIsXCImaGFycjtcIjpcIuKGlFwiLFwiJmNyYXJyO1wiOlwi4oa1XCIsXCImbEFycjtcIjpcIuKHkFwiLFwiJnVBcnI7XCI6XCLih5FcIixcIiZyQXJyO1wiOlwi4oeSXCIsXCImZEFycjtcIjpcIuKHk1wiLFwiJmhBcnI7XCI6XCLih5RcIixcIiZmb3JhbGw7XCI6XCLiiIBcIixcIiZwYXJ0O1wiOlwi4oiCXCIsXCImZXhpc3Q7XCI6XCLiiINcIixcIiZlbXB0eTtcIjpcIuKIhVwiLFwiJm5hYmxhO1wiOlwi4oiHXCIsXCImaXNpbjtcIjpcIuKIiFwiLFwiJm5vdGluO1wiOlwi4oiJXCIsXCImbmk7XCI6XCLiiItcIixcIiZwcm9kO1wiOlwi4oiPXCIsXCImc3VtO1wiOlwi4oiRXCIsXCImbWludXM7XCI6XCLiiJJcIixcIiZsb3dhc3Q7XCI6XCLiiJdcIixcIiZyYWRpYztcIjpcIuKImlwiLFwiJnByb3A7XCI6XCLiiJ1cIixcIiZpbmZpbjtcIjpcIuKInlwiLFwiJmFuZztcIjpcIuKIoFwiLFwiJmFuZDtcIjpcIuKIp1wiLFwiJm9yO1wiOlwi4oioXCIsXCImY2FwO1wiOlwi4oipXCIsXCImY3VwO1wiOlwi4oiqXCIsXCImaW50O1wiOlwi4oirXCIsXCImdGhlcmU0O1wiOlwi4oi0XCIsXCImc2ltO1wiOlwi4oi8XCIsXCImY29uZztcIjpcIuKJhVwiLFwiJmFzeW1wO1wiOlwi4omIXCIsXCImbmU7XCI6XCLiiaBcIixcIiZlcXVpdjtcIjpcIuKJoVwiLFwiJmxlO1wiOlwi4omkXCIsXCImZ2U7XCI6XCLiiaVcIixcIiZzdWI7XCI6XCLiioJcIixcIiZzdXA7XCI6XCLiioNcIixcIiZuc3ViO1wiOlwi4oqEXCIsXCImc3ViZTtcIjpcIuKKhlwiLFwiJnN1cGU7XCI6XCLiiodcIixcIiZvcGx1cztcIjpcIuKKlVwiLFwiJm90aW1lcztcIjpcIuKKl1wiLFwiJnBlcnA7XCI6XCLiiqVcIixcIiZzZG90O1wiOlwi4ouFXCIsXCImbGNlaWw7XCI6XCLijIhcIixcIiZyY2VpbDtcIjpcIuKMiVwiLFwiJmxmbG9vcjtcIjpcIuKMilwiLFwiJnJmbG9vcjtcIjpcIuKMi1wiLFwiJmxhbmc7XCI6XCLijKlcIixcIiZyYW5nO1wiOlwi4oyqXCIsXCImbG96O1wiOlwi4peKXCIsXCImc3BhZGVzO1wiOlwi4pmgXCIsXCImY2x1YnM7XCI6XCLimaNcIixcIiZoZWFydHM7XCI6XCLimaVcIixcIiZkaWFtcztcIjpcIuKZplwifSxjaGFyYWN0ZXJzOntcIidcIjpcIiZhcG9zO1wiLFwiwqBcIjpcIiZuYnNwO1wiLFwiwqFcIjpcIiZpZXhjbDtcIixcIsKiXCI6XCImY2VudDtcIixcIsKjXCI6XCImcG91bmQ7XCIsXCLCpFwiOlwiJmN1cnJlbjtcIixcIsKlXCI6XCImeWVuO1wiLFwiwqZcIjpcIiZicnZiYXI7XCIsXCLCp1wiOlwiJnNlY3Q7XCIsXCLCqFwiOlwiJnVtbDtcIixcIsKpXCI6XCImY29weTtcIixcIsKqXCI6XCImb3JkZjtcIixcIsKrXCI6XCImbGFxdW87XCIsXCLCrFwiOlwiJm5vdDtcIixcIsKtXCI6XCImc2h5O1wiLFwiwq5cIjpcIiZyZWc7XCIsXCLCr1wiOlwiJm1hY3I7XCIsXCLCsFwiOlwiJmRlZztcIixcIsKxXCI6XCImcGx1c21uO1wiLFwiwrJcIjpcIiZzdXAyO1wiLFwiwrNcIjpcIiZzdXAzO1wiLFwiwrRcIjpcIiZhY3V0ZTtcIixcIsK1XCI6XCImbWljcm87XCIsXCLCtlwiOlwiJnBhcmE7XCIsXCLCt1wiOlwiJm1pZGRvdDtcIixcIsK4XCI6XCImY2VkaWw7XCIsXCLCuVwiOlwiJnN1cDE7XCIsXCLCulwiOlwiJm9yZG07XCIsXCLCu1wiOlwiJnJhcXVvO1wiLFwiwrxcIjpcIiZmcmFjMTQ7XCIsXCLCvVwiOlwiJmZyYWMxMjtcIixcIsK+XCI6XCImZnJhYzM0O1wiLFwiwr9cIjpcIiZpcXVlc3Q7XCIsXCLDgFwiOlwiJkFncmF2ZTtcIixcIsOBXCI6XCImQWFjdXRlO1wiLFwiw4JcIjpcIiZBY2lyYztcIixcIsODXCI6XCImQXRpbGRlO1wiLFwiw4RcIjpcIiZBdW1sO1wiLFwiw4VcIjpcIiZBcmluZztcIixcIsOGXCI6XCImQUVsaWc7XCIsXCLDh1wiOlwiJkNjZWRpbDtcIixcIsOIXCI6XCImRWdyYXZlO1wiLFwiw4lcIjpcIiZFYWN1dGU7XCIsXCLDilwiOlwiJkVjaXJjO1wiLFwiw4tcIjpcIiZFdW1sO1wiLFwiw4xcIjpcIiZJZ3JhdmU7XCIsXCLDjVwiOlwiJklhY3V0ZTtcIixcIsOOXCI6XCImSWNpcmM7XCIsXCLDj1wiOlwiJkl1bWw7XCIsXCLDkFwiOlwiJkVUSDtcIixcIsORXCI6XCImTnRpbGRlO1wiLFwiw5JcIjpcIiZPZ3JhdmU7XCIsXCLDk1wiOlwiJk9hY3V0ZTtcIixcIsOUXCI6XCImT2NpcmM7XCIsXCLDlVwiOlwiJk90aWxkZTtcIixcIsOWXCI6XCImT3VtbDtcIixcIsOXXCI6XCImdGltZXM7XCIsXCLDmFwiOlwiJk9zbGFzaDtcIixcIsOZXCI6XCImVWdyYXZlO1wiLFwiw5pcIjpcIiZVYWN1dGU7XCIsXCLDm1wiOlwiJlVjaXJjO1wiLFwiw5xcIjpcIiZVdW1sO1wiLFwiw51cIjpcIiZZYWN1dGU7XCIsXCLDnlwiOlwiJlRIT1JOO1wiLFwiw59cIjpcIiZzemxpZztcIixcIsOgXCI6XCImYWdyYXZlO1wiLFwiw6FcIjpcIiZhYWN1dGU7XCIsXCLDolwiOlwiJmFjaXJjO1wiLFwiw6NcIjpcIiZhdGlsZGU7XCIsXCLDpFwiOlwiJmF1bWw7XCIsXCLDpVwiOlwiJmFyaW5nO1wiLFwiw6ZcIjpcIiZhZWxpZztcIixcIsOnXCI6XCImY2NlZGlsO1wiLFwiw6hcIjpcIiZlZ3JhdmU7XCIsXCLDqVwiOlwiJmVhY3V0ZTtcIixcIsOqXCI6XCImZWNpcmM7XCIsXCLDq1wiOlwiJmV1bWw7XCIsXCLDrFwiOlwiJmlncmF2ZTtcIixcIsOtXCI6XCImaWFjdXRlO1wiLFwiw65cIjpcIiZpY2lyYztcIixcIsOvXCI6XCImaXVtbDtcIixcIsOwXCI6XCImZXRoO1wiLFwiw7FcIjpcIiZudGlsZGU7XCIsXCLDslwiOlwiJm9ncmF2ZTtcIixcIsOzXCI6XCImb2FjdXRlO1wiLFwiw7RcIjpcIiZvY2lyYztcIixcIsO1XCI6XCImb3RpbGRlO1wiLFwiw7ZcIjpcIiZvdW1sO1wiLFwiw7dcIjpcIiZkaXZpZGU7XCIsXCLDuFwiOlwiJm9zbGFzaDtcIixcIsO5XCI6XCImdWdyYXZlO1wiLFwiw7pcIjpcIiZ1YWN1dGU7XCIsXCLDu1wiOlwiJnVjaXJjO1wiLFwiw7xcIjpcIiZ1dW1sO1wiLFwiw71cIjpcIiZ5YWN1dGU7XCIsXCLDvlwiOlwiJnRob3JuO1wiLFwiw79cIjpcIiZ5dW1sO1wiLCdcIic6XCImcXVvdDtcIixcIiZcIjpcIiZhbXA7XCIsXCI8XCI6XCImbHQ7XCIsXCI+XCI6XCImZ3Q7XCIsXCLFklwiOlwiJk9FbGlnO1wiLFwixZNcIjpcIiZvZWxpZztcIixcIsWgXCI6XCImU2Nhcm9uO1wiLFwixaFcIjpcIiZzY2Fyb247XCIsXCLFuFwiOlwiJll1bWw7XCIsXCLLhlwiOlwiJmNpcmM7XCIsXCLLnFwiOlwiJnRpbGRlO1wiLFwi4oCCXCI6XCImZW5zcDtcIixcIuKAg1wiOlwiJmVtc3A7XCIsXCLigIlcIjpcIiZ0aGluc3A7XCIsXCLigIxcIjpcIiZ6d25qO1wiLFwi4oCNXCI6XCImendqO1wiLFwi4oCOXCI6XCImbHJtO1wiLFwi4oCPXCI6XCImcmxtO1wiLFwi4oCTXCI6XCImbmRhc2g7XCIsXCLigJRcIjpcIiZtZGFzaDtcIixcIuKAmFwiOlwiJmxzcXVvO1wiLFwi4oCZXCI6XCImcnNxdW87XCIsXCLigJpcIjpcIiZzYnF1bztcIixcIuKAnFwiOlwiJmxkcXVvO1wiLFwi4oCdXCI6XCImcmRxdW87XCIsXCLigJ5cIjpcIiZiZHF1bztcIixcIuKAoFwiOlwiJmRhZ2dlcjtcIixcIuKAoVwiOlwiJkRhZ2dlcjtcIixcIuKAsFwiOlwiJnBlcm1pbDtcIixcIuKAuVwiOlwiJmxzYXF1bztcIixcIuKAulwiOlwiJnJzYXF1bztcIixcIuKCrFwiOlwiJmV1cm87XCIsXCLGklwiOlwiJmZub2Y7XCIsXCLOkVwiOlwiJkFscGhhO1wiLFwizpJcIjpcIiZCZXRhO1wiLFwizpNcIjpcIiZHYW1tYTtcIixcIs6UXCI6XCImRGVsdGE7XCIsXCLOlVwiOlwiJkVwc2lsb247XCIsXCLOllwiOlwiJlpldGE7XCIsXCLOl1wiOlwiJkV0YTtcIixcIs6YXCI6XCImVGhldGE7XCIsXCLOmVwiOlwiJklvdGE7XCIsXCLOmlwiOlwiJkthcHBhO1wiLFwizptcIjpcIiZMYW1iZGE7XCIsXCLOnFwiOlwiJk11O1wiLFwizp1cIjpcIiZOdTtcIixcIs6eXCI6XCImWGk7XCIsXCLOn1wiOlwiJk9taWNyb247XCIsXCLOoFwiOlwiJlBpO1wiLFwizqFcIjpcIiZSaG87XCIsXCLOo1wiOlwiJlNpZ21hO1wiLFwizqRcIjpcIiZUYXU7XCIsXCLOpVwiOlwiJlVwc2lsb247XCIsXCLOplwiOlwiJlBoaTtcIixcIs6nXCI6XCImQ2hpO1wiLFwizqhcIjpcIiZQc2k7XCIsXCLOqVwiOlwiJk9tZWdhO1wiLFwizrFcIjpcIiZhbHBoYTtcIixcIs6yXCI6XCImYmV0YTtcIixcIs6zXCI6XCImZ2FtbWE7XCIsXCLOtFwiOlwiJmRlbHRhO1wiLFwizrVcIjpcIiZlcHNpbG9uO1wiLFwizrZcIjpcIiZ6ZXRhO1wiLFwizrdcIjpcIiZldGE7XCIsXCLOuFwiOlwiJnRoZXRhO1wiLFwizrlcIjpcIiZpb3RhO1wiLFwizrpcIjpcIiZrYXBwYTtcIixcIs67XCI6XCImbGFtYmRhO1wiLFwizrxcIjpcIiZtdTtcIixcIs69XCI6XCImbnU7XCIsXCLOvlwiOlwiJnhpO1wiLFwizr9cIjpcIiZvbWljcm9uO1wiLFwiz4BcIjpcIiZwaTtcIixcIs+BXCI6XCImcmhvO1wiLFwiz4JcIjpcIiZzaWdtYWY7XCIsXCLPg1wiOlwiJnNpZ21hO1wiLFwiz4RcIjpcIiZ0YXU7XCIsXCLPhVwiOlwiJnVwc2lsb247XCIsXCLPhlwiOlwiJnBoaTtcIixcIs+HXCI6XCImY2hpO1wiLFwiz4hcIjpcIiZwc2k7XCIsXCLPiVwiOlwiJm9tZWdhO1wiLFwiz5FcIjpcIiZ0aGV0YXN5bTtcIixcIs+SXCI6XCImdXBzaWg7XCIsXCLPllwiOlwiJnBpdjtcIixcIuKAolwiOlwiJmJ1bGw7XCIsXCLigKZcIjpcIiZoZWxsaXA7XCIsXCLigLJcIjpcIiZwcmltZTtcIixcIuKAs1wiOlwiJlByaW1lO1wiLFwi4oC+XCI6XCImb2xpbmU7XCIsXCLigYRcIjpcIiZmcmFzbDtcIixcIuKEmFwiOlwiJndlaWVycDtcIixcIuKEkVwiOlwiJmltYWdlO1wiLFwi4oScXCI6XCImcmVhbDtcIixcIuKEolwiOlwiJnRyYWRlO1wiLFwi4oS1XCI6XCImYWxlZnN5bTtcIixcIuKGkFwiOlwiJmxhcnI7XCIsXCLihpFcIjpcIiZ1YXJyO1wiLFwi4oaSXCI6XCImcmFycjtcIixcIuKGk1wiOlwiJmRhcnI7XCIsXCLihpRcIjpcIiZoYXJyO1wiLFwi4oa1XCI6XCImY3JhcnI7XCIsXCLih5BcIjpcIiZsQXJyO1wiLFwi4oeRXCI6XCImdUFycjtcIixcIuKHklwiOlwiJnJBcnI7XCIsXCLih5NcIjpcIiZkQXJyO1wiLFwi4oeUXCI6XCImaEFycjtcIixcIuKIgFwiOlwiJmZvcmFsbDtcIixcIuKIglwiOlwiJnBhcnQ7XCIsXCLiiINcIjpcIiZleGlzdDtcIixcIuKIhVwiOlwiJmVtcHR5O1wiLFwi4oiHXCI6XCImbmFibGE7XCIsXCLiiIhcIjpcIiZpc2luO1wiLFwi4oiJXCI6XCImbm90aW47XCIsXCLiiItcIjpcIiZuaTtcIixcIuKIj1wiOlwiJnByb2Q7XCIsXCLiiJFcIjpcIiZzdW07XCIsXCLiiJJcIjpcIiZtaW51cztcIixcIuKIl1wiOlwiJmxvd2FzdDtcIixcIuKImlwiOlwiJnJhZGljO1wiLFwi4oidXCI6XCImcHJvcDtcIixcIuKInlwiOlwiJmluZmluO1wiLFwi4oigXCI6XCImYW5nO1wiLFwi4oinXCI6XCImYW5kO1wiLFwi4oioXCI6XCImb3I7XCIsXCLiiKlcIjpcIiZjYXA7XCIsXCLiiKpcIjpcIiZjdXA7XCIsXCLiiKtcIjpcIiZpbnQ7XCIsXCLiiLRcIjpcIiZ0aGVyZTQ7XCIsXCLiiLxcIjpcIiZzaW07XCIsXCLiiYVcIjpcIiZjb25nO1wiLFwi4omIXCI6XCImYXN5bXA7XCIsXCLiiaBcIjpcIiZuZTtcIixcIuKJoVwiOlwiJmVxdWl2O1wiLFwi4omkXCI6XCImbGU7XCIsXCLiiaVcIjpcIiZnZTtcIixcIuKKglwiOlwiJnN1YjtcIixcIuKKg1wiOlwiJnN1cDtcIixcIuKKhFwiOlwiJm5zdWI7XCIsXCLiioZcIjpcIiZzdWJlO1wiLFwi4oqHXCI6XCImc3VwZTtcIixcIuKKlVwiOlwiJm9wbHVzO1wiLFwi4oqXXCI6XCImb3RpbWVzO1wiLFwi4oqlXCI6XCImcGVycDtcIixcIuKLhVwiOlwiJnNkb3Q7XCIsXCLijIhcIjpcIiZsY2VpbDtcIixcIuKMiVwiOlwiJnJjZWlsO1wiLFwi4oyKXCI6XCImbGZsb29yO1wiLFwi4oyLXCI6XCImcmZsb29yO1wiLFwi4oypXCI6XCImbGFuZztcIixcIuKMqlwiOlwiJnJhbmc7XCIsXCLil4pcIjpcIiZsb3o7XCIsXCLimaBcIjpcIiZzcGFkZXM7XCIsXCLimaNcIjpcIiZjbHVicztcIixcIuKZpVwiOlwiJmhlYXJ0cztcIixcIuKZplwiOlwiJmRpYW1zO1wifX0saHRtbDU6e2VudGl0aWVzOntcIiZBRWxpZ1wiOlwiw4ZcIixcIiZBRWxpZztcIjpcIsOGXCIsXCImQU1QXCI6XCImXCIsXCImQU1QO1wiOlwiJlwiLFwiJkFhY3V0ZVwiOlwiw4FcIixcIiZBYWN1dGU7XCI6XCLDgVwiLFwiJkFicmV2ZTtcIjpcIsSCXCIsXCImQWNpcmNcIjpcIsOCXCIsXCImQWNpcmM7XCI6XCLDglwiLFwiJkFjeTtcIjpcItCQXCIsXCImQWZyO1wiOlwi8J2UhFwiLFwiJkFncmF2ZVwiOlwiw4BcIixcIiZBZ3JhdmU7XCI6XCLDgFwiLFwiJkFscGhhO1wiOlwizpFcIixcIiZBbWFjcjtcIjpcIsSAXCIsXCImQW5kO1wiOlwi4qmTXCIsXCImQW9nb247XCI6XCLEhFwiLFwiJkFvcGY7XCI6XCLwnZS4XCIsXCImQXBwbHlGdW5jdGlvbjtcIjpcIuKBoVwiLFwiJkFyaW5nXCI6XCLDhVwiLFwiJkFyaW5nO1wiOlwiw4VcIixcIiZBc2NyO1wiOlwi8J2SnFwiLFwiJkFzc2lnbjtcIjpcIuKJlFwiLFwiJkF0aWxkZVwiOlwiw4NcIixcIiZBdGlsZGU7XCI6XCLDg1wiLFwiJkF1bWxcIjpcIsOEXCIsXCImQXVtbDtcIjpcIsOEXCIsXCImQmFja3NsYXNoO1wiOlwi4oiWXCIsXCImQmFydjtcIjpcIuKrp1wiLFwiJkJhcndlZDtcIjpcIuKMhlwiLFwiJkJjeTtcIjpcItCRXCIsXCImQmVjYXVzZTtcIjpcIuKItVwiLFwiJkJlcm5vdWxsaXM7XCI6XCLihKxcIixcIiZCZXRhO1wiOlwizpJcIixcIiZCZnI7XCI6XCLwnZSFXCIsXCImQm9wZjtcIjpcIvCdlLlcIixcIiZCcmV2ZTtcIjpcIsuYXCIsXCImQnNjcjtcIjpcIuKErFwiLFwiJkJ1bXBlcTtcIjpcIuKJjlwiLFwiJkNIY3k7XCI6XCLQp1wiLFwiJkNPUFlcIjpcIsKpXCIsXCImQ09QWTtcIjpcIsKpXCIsXCImQ2FjdXRlO1wiOlwixIZcIixcIiZDYXA7XCI6XCLii5JcIixcIiZDYXBpdGFsRGlmZmVyZW50aWFsRDtcIjpcIuKFhVwiLFwiJkNheWxleXM7XCI6XCLihK1cIixcIiZDY2Fyb247XCI6XCLEjFwiLFwiJkNjZWRpbFwiOlwiw4dcIixcIiZDY2VkaWw7XCI6XCLDh1wiLFwiJkNjaXJjO1wiOlwixIhcIixcIiZDY29uaW50O1wiOlwi4oiwXCIsXCImQ2RvdDtcIjpcIsSKXCIsXCImQ2VkaWxsYTtcIjpcIsK4XCIsXCImQ2VudGVyRG90O1wiOlwiwrdcIixcIiZDZnI7XCI6XCLihK1cIixcIiZDaGk7XCI6XCLOp1wiLFwiJkNpcmNsZURvdDtcIjpcIuKKmVwiLFwiJkNpcmNsZU1pbnVzO1wiOlwi4oqWXCIsXCImQ2lyY2xlUGx1cztcIjpcIuKKlVwiLFwiJkNpcmNsZVRpbWVzO1wiOlwi4oqXXCIsXCImQ2xvY2t3aXNlQ29udG91ckludGVncmFsO1wiOlwi4oiyXCIsXCImQ2xvc2VDdXJseURvdWJsZVF1b3RlO1wiOlwi4oCdXCIsXCImQ2xvc2VDdXJseVF1b3RlO1wiOlwi4oCZXCIsXCImQ29sb247XCI6XCLiiLdcIixcIiZDb2xvbmU7XCI6XCLiqbRcIixcIiZDb25ncnVlbnQ7XCI6XCLiiaFcIixcIiZDb25pbnQ7XCI6XCLiiK9cIixcIiZDb250b3VySW50ZWdyYWw7XCI6XCLiiK5cIixcIiZDb3BmO1wiOlwi4oSCXCIsXCImQ29wcm9kdWN0O1wiOlwi4oiQXCIsXCImQ291bnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbDtcIjpcIuKIs1wiLFwiJkNyb3NzO1wiOlwi4qivXCIsXCImQ3NjcjtcIjpcIvCdkp5cIixcIiZDdXA7XCI6XCLii5NcIixcIiZDdXBDYXA7XCI6XCLiiY1cIixcIiZERDtcIjpcIuKFhVwiLFwiJkREb3RyYWhkO1wiOlwi4qSRXCIsXCImREpjeTtcIjpcItCCXCIsXCImRFNjeTtcIjpcItCFXCIsXCImRFpjeTtcIjpcItCPXCIsXCImRGFnZ2VyO1wiOlwi4oChXCIsXCImRGFycjtcIjpcIuKGoVwiLFwiJkRhc2h2O1wiOlwi4qukXCIsXCImRGNhcm9uO1wiOlwixI5cIixcIiZEY3k7XCI6XCLQlFwiLFwiJkRlbDtcIjpcIuKIh1wiLFwiJkRlbHRhO1wiOlwizpRcIixcIiZEZnI7XCI6XCLwnZSHXCIsXCImRGlhY3JpdGljYWxBY3V0ZTtcIjpcIsK0XCIsXCImRGlhY3JpdGljYWxEb3Q7XCI6XCLLmVwiLFwiJkRpYWNyaXRpY2FsRG91YmxlQWN1dGU7XCI6XCLLnVwiLFwiJkRpYWNyaXRpY2FsR3JhdmU7XCI6XCJgXCIsXCImRGlhY3JpdGljYWxUaWxkZTtcIjpcIsucXCIsXCImRGlhbW9uZDtcIjpcIuKLhFwiLFwiJkRpZmZlcmVudGlhbEQ7XCI6XCLihYZcIixcIiZEb3BmO1wiOlwi8J2Uu1wiLFwiJkRvdDtcIjpcIsKoXCIsXCImRG90RG90O1wiOlwi4oOcXCIsXCImRG90RXF1YWw7XCI6XCLiiZBcIixcIiZEb3VibGVDb250b3VySW50ZWdyYWw7XCI6XCLiiK9cIixcIiZEb3VibGVEb3Q7XCI6XCLCqFwiLFwiJkRvdWJsZURvd25BcnJvdztcIjpcIuKHk1wiLFwiJkRvdWJsZUxlZnRBcnJvdztcIjpcIuKHkFwiLFwiJkRvdWJsZUxlZnRSaWdodEFycm93O1wiOlwi4oeUXCIsXCImRG91YmxlTGVmdFRlZTtcIjpcIuKrpFwiLFwiJkRvdWJsZUxvbmdMZWZ0QXJyb3c7XCI6XCLin7hcIixcIiZEb3VibGVMb25nTGVmdFJpZ2h0QXJyb3c7XCI6XCLin7pcIixcIiZEb3VibGVMb25nUmlnaHRBcnJvdztcIjpcIuKfuVwiLFwiJkRvdWJsZVJpZ2h0QXJyb3c7XCI6XCLih5JcIixcIiZEb3VibGVSaWdodFRlZTtcIjpcIuKKqFwiLFwiJkRvdWJsZVVwQXJyb3c7XCI6XCLih5FcIixcIiZEb3VibGVVcERvd25BcnJvdztcIjpcIuKHlVwiLFwiJkRvdWJsZVZlcnRpY2FsQmFyO1wiOlwi4oilXCIsXCImRG93bkFycm93O1wiOlwi4oaTXCIsXCImRG93bkFycm93QmFyO1wiOlwi4qSTXCIsXCImRG93bkFycm93VXBBcnJvdztcIjpcIuKHtVwiLFwiJkRvd25CcmV2ZTtcIjpcIsyRXCIsXCImRG93bkxlZnRSaWdodFZlY3RvcjtcIjpcIuKlkFwiLFwiJkRvd25MZWZ0VGVlVmVjdG9yO1wiOlwi4qWeXCIsXCImRG93bkxlZnRWZWN0b3I7XCI6XCLihr1cIixcIiZEb3duTGVmdFZlY3RvckJhcjtcIjpcIuKlllwiLFwiJkRvd25SaWdodFRlZVZlY3RvcjtcIjpcIuKln1wiLFwiJkRvd25SaWdodFZlY3RvcjtcIjpcIuKHgVwiLFwiJkRvd25SaWdodFZlY3RvckJhcjtcIjpcIuKll1wiLFwiJkRvd25UZWU7XCI6XCLiiqRcIixcIiZEb3duVGVlQXJyb3c7XCI6XCLihqdcIixcIiZEb3duYXJyb3c7XCI6XCLih5NcIixcIiZEc2NyO1wiOlwi8J2Sn1wiLFwiJkRzdHJvaztcIjpcIsSQXCIsXCImRU5HO1wiOlwixYpcIixcIiZFVEhcIjpcIsOQXCIsXCImRVRIO1wiOlwiw5BcIixcIiZFYWN1dGVcIjpcIsOJXCIsXCImRWFjdXRlO1wiOlwiw4lcIixcIiZFY2Fyb247XCI6XCLEmlwiLFwiJkVjaXJjXCI6XCLDilwiLFwiJkVjaXJjO1wiOlwiw4pcIixcIiZFY3k7XCI6XCLQrVwiLFwiJkVkb3Q7XCI6XCLEllwiLFwiJkVmcjtcIjpcIvCdlIhcIixcIiZFZ3JhdmVcIjpcIsOIXCIsXCImRWdyYXZlO1wiOlwiw4hcIixcIiZFbGVtZW50O1wiOlwi4oiIXCIsXCImRW1hY3I7XCI6XCLEklwiLFwiJkVtcHR5U21hbGxTcXVhcmU7XCI6XCLil7tcIixcIiZFbXB0eVZlcnlTbWFsbFNxdWFyZTtcIjpcIuKWq1wiLFwiJkVvZ29uO1wiOlwixJhcIixcIiZFb3BmO1wiOlwi8J2UvFwiLFwiJkVwc2lsb247XCI6XCLOlVwiLFwiJkVxdWFsO1wiOlwi4qm1XCIsXCImRXF1YWxUaWxkZTtcIjpcIuKJglwiLFwiJkVxdWlsaWJyaXVtO1wiOlwi4oeMXCIsXCImRXNjcjtcIjpcIuKEsFwiLFwiJkVzaW07XCI6XCLiqbNcIixcIiZFdGE7XCI6XCLOl1wiLFwiJkV1bWxcIjpcIsOLXCIsXCImRXVtbDtcIjpcIsOLXCIsXCImRXhpc3RzO1wiOlwi4oiDXCIsXCImRXhwb25lbnRpYWxFO1wiOlwi4oWHXCIsXCImRmN5O1wiOlwi0KRcIixcIiZGZnI7XCI6XCLwnZSJXCIsXCImRmlsbGVkU21hbGxTcXVhcmU7XCI6XCLil7xcIixcIiZGaWxsZWRWZXJ5U21hbGxTcXVhcmU7XCI6XCLilqpcIixcIiZGb3BmO1wiOlwi8J2UvVwiLFwiJkZvckFsbDtcIjpcIuKIgFwiLFwiJkZvdXJpZXJ0cmY7XCI6XCLihLFcIixcIiZGc2NyO1wiOlwi4oSxXCIsXCImR0pjeTtcIjpcItCDXCIsXCImR1RcIjpcIj5cIixcIiZHVDtcIjpcIj5cIixcIiZHYW1tYTtcIjpcIs6TXCIsXCImR2FtbWFkO1wiOlwiz5xcIixcIiZHYnJldmU7XCI6XCLEnlwiLFwiJkdjZWRpbDtcIjpcIsSiXCIsXCImR2NpcmM7XCI6XCLEnFwiLFwiJkdjeTtcIjpcItCTXCIsXCImR2RvdDtcIjpcIsSgXCIsXCImR2ZyO1wiOlwi8J2UilwiLFwiJkdnO1wiOlwi4ouZXCIsXCImR29wZjtcIjpcIvCdlL5cIixcIiZHcmVhdGVyRXF1YWw7XCI6XCLiiaVcIixcIiZHcmVhdGVyRXF1YWxMZXNzO1wiOlwi4oubXCIsXCImR3JlYXRlckZ1bGxFcXVhbDtcIjpcIuKJp1wiLFwiJkdyZWF0ZXJHcmVhdGVyO1wiOlwi4qqiXCIsXCImR3JlYXRlckxlc3M7XCI6XCLiibdcIixcIiZHcmVhdGVyU2xhbnRFcXVhbDtcIjpcIuKpvlwiLFwiJkdyZWF0ZXJUaWxkZTtcIjpcIuKJs1wiLFwiJkdzY3I7XCI6XCLwnZKiXCIsXCImR3Q7XCI6XCLiiatcIixcIiZIQVJEY3k7XCI6XCLQqlwiLFwiJkhhY2VrO1wiOlwiy4dcIixcIiZIYXQ7XCI6XCJeXCIsXCImSGNpcmM7XCI6XCLEpFwiLFwiJkhmcjtcIjpcIuKEjFwiLFwiJkhpbGJlcnRTcGFjZTtcIjpcIuKEi1wiLFwiJkhvcGY7XCI6XCLihI1cIixcIiZIb3Jpem9udGFsTGluZTtcIjpcIuKUgFwiLFwiJkhzY3I7XCI6XCLihItcIixcIiZIc3Ryb2s7XCI6XCLEplwiLFwiJkh1bXBEb3duSHVtcDtcIjpcIuKJjlwiLFwiJkh1bXBFcXVhbDtcIjpcIuKJj1wiLFwiJklFY3k7XCI6XCLQlVwiLFwiJklKbGlnO1wiOlwixLJcIixcIiZJT2N5O1wiOlwi0IFcIixcIiZJYWN1dGVcIjpcIsONXCIsXCImSWFjdXRlO1wiOlwiw41cIixcIiZJY2lyY1wiOlwiw45cIixcIiZJY2lyYztcIjpcIsOOXCIsXCImSWN5O1wiOlwi0JhcIixcIiZJZG90O1wiOlwixLBcIixcIiZJZnI7XCI6XCLihJFcIixcIiZJZ3JhdmVcIjpcIsOMXCIsXCImSWdyYXZlO1wiOlwiw4xcIixcIiZJbTtcIjpcIuKEkVwiLFwiJkltYWNyO1wiOlwixKpcIixcIiZJbWFnaW5hcnlJO1wiOlwi4oWIXCIsXCImSW1wbGllcztcIjpcIuKHklwiLFwiJkludDtcIjpcIuKIrFwiLFwiJkludGVncmFsO1wiOlwi4oirXCIsXCImSW50ZXJzZWN0aW9uO1wiOlwi4ouCXCIsXCImSW52aXNpYmxlQ29tbWE7XCI6XCLigaNcIixcIiZJbnZpc2libGVUaW1lcztcIjpcIuKBolwiLFwiJklvZ29uO1wiOlwixK5cIixcIiZJb3BmO1wiOlwi8J2VgFwiLFwiJklvdGE7XCI6XCLOmVwiLFwiJklzY3I7XCI6XCLihJBcIixcIiZJdGlsZGU7XCI6XCLEqFwiLFwiJkl1a2N5O1wiOlwi0IZcIixcIiZJdW1sXCI6XCLDj1wiLFwiJkl1bWw7XCI6XCLDj1wiLFwiJkpjaXJjO1wiOlwixLRcIixcIiZKY3k7XCI6XCLQmVwiLFwiJkpmcjtcIjpcIvCdlI1cIixcIiZKb3BmO1wiOlwi8J2VgVwiLFwiJkpzY3I7XCI6XCLwnZKlXCIsXCImSnNlcmN5O1wiOlwi0IhcIixcIiZKdWtjeTtcIjpcItCEXCIsXCImS0hjeTtcIjpcItClXCIsXCImS0pjeTtcIjpcItCMXCIsXCImS2FwcGE7XCI6XCLOmlwiLFwiJktjZWRpbDtcIjpcIsS2XCIsXCImS2N5O1wiOlwi0JpcIixcIiZLZnI7XCI6XCLwnZSOXCIsXCImS29wZjtcIjpcIvCdlYJcIixcIiZLc2NyO1wiOlwi8J2SplwiLFwiJkxKY3k7XCI6XCLQiVwiLFwiJkxUXCI6XCI8XCIsXCImTFQ7XCI6XCI8XCIsXCImTGFjdXRlO1wiOlwixLlcIixcIiZMYW1iZGE7XCI6XCLOm1wiLFwiJkxhbmc7XCI6XCLin6pcIixcIiZMYXBsYWNldHJmO1wiOlwi4oSSXCIsXCImTGFycjtcIjpcIuKGnlwiLFwiJkxjYXJvbjtcIjpcIsS9XCIsXCImTGNlZGlsO1wiOlwixLtcIixcIiZMY3k7XCI6XCLQm1wiLFwiJkxlZnRBbmdsZUJyYWNrZXQ7XCI6XCLin6hcIixcIiZMZWZ0QXJyb3c7XCI6XCLihpBcIixcIiZMZWZ0QXJyb3dCYXI7XCI6XCLih6RcIixcIiZMZWZ0QXJyb3dSaWdodEFycm93O1wiOlwi4oeGXCIsXCImTGVmdENlaWxpbmc7XCI6XCLijIhcIixcIiZMZWZ0RG91YmxlQnJhY2tldDtcIjpcIuKfplwiLFwiJkxlZnREb3duVGVlVmVjdG9yO1wiOlwi4qWhXCIsXCImTGVmdERvd25WZWN0b3I7XCI6XCLih4NcIixcIiZMZWZ0RG93blZlY3RvckJhcjtcIjpcIuKlmVwiLFwiJkxlZnRGbG9vcjtcIjpcIuKMilwiLFwiJkxlZnRSaWdodEFycm93O1wiOlwi4oaUXCIsXCImTGVmdFJpZ2h0VmVjdG9yO1wiOlwi4qWOXCIsXCImTGVmdFRlZTtcIjpcIuKKo1wiLFwiJkxlZnRUZWVBcnJvdztcIjpcIuKGpFwiLFwiJkxlZnRUZWVWZWN0b3I7XCI6XCLipZpcIixcIiZMZWZ0VHJpYW5nbGU7XCI6XCLiirJcIixcIiZMZWZ0VHJpYW5nbGVCYXI7XCI6XCLip49cIixcIiZMZWZ0VHJpYW5nbGVFcXVhbDtcIjpcIuKKtFwiLFwiJkxlZnRVcERvd25WZWN0b3I7XCI6XCLipZFcIixcIiZMZWZ0VXBUZWVWZWN0b3I7XCI6XCLipaBcIixcIiZMZWZ0VXBWZWN0b3I7XCI6XCLihr9cIixcIiZMZWZ0VXBWZWN0b3JCYXI7XCI6XCLipZhcIixcIiZMZWZ0VmVjdG9yO1wiOlwi4oa8XCIsXCImTGVmdFZlY3RvckJhcjtcIjpcIuKlklwiLFwiJkxlZnRhcnJvdztcIjpcIuKHkFwiLFwiJkxlZnRyaWdodGFycm93O1wiOlwi4oeUXCIsXCImTGVzc0VxdWFsR3JlYXRlcjtcIjpcIuKLmlwiLFwiJkxlc3NGdWxsRXF1YWw7XCI6XCLiiaZcIixcIiZMZXNzR3JlYXRlcjtcIjpcIuKJtlwiLFwiJkxlc3NMZXNzO1wiOlwi4qqhXCIsXCImTGVzc1NsYW50RXF1YWw7XCI6XCLiqb1cIixcIiZMZXNzVGlsZGU7XCI6XCLiibJcIixcIiZMZnI7XCI6XCLwnZSPXCIsXCImTGw7XCI6XCLii5hcIixcIiZMbGVmdGFycm93O1wiOlwi4oeaXCIsXCImTG1pZG90O1wiOlwixL9cIixcIiZMb25nTGVmdEFycm93O1wiOlwi4p+1XCIsXCImTG9uZ0xlZnRSaWdodEFycm93O1wiOlwi4p+3XCIsXCImTG9uZ1JpZ2h0QXJyb3c7XCI6XCLin7ZcIixcIiZMb25nbGVmdGFycm93O1wiOlwi4p+4XCIsXCImTG9uZ2xlZnRyaWdodGFycm93O1wiOlwi4p+6XCIsXCImTG9uZ3JpZ2h0YXJyb3c7XCI6XCLin7lcIixcIiZMb3BmO1wiOlwi8J2Vg1wiLFwiJkxvd2VyTGVmdEFycm93O1wiOlwi4oaZXCIsXCImTG93ZXJSaWdodEFycm93O1wiOlwi4oaYXCIsXCImTHNjcjtcIjpcIuKEklwiLFwiJkxzaDtcIjpcIuKGsFwiLFwiJkxzdHJvaztcIjpcIsWBXCIsXCImTHQ7XCI6XCLiiapcIixcIiZNYXA7XCI6XCLipIVcIixcIiZNY3k7XCI6XCLQnFwiLFwiJk1lZGl1bVNwYWNlO1wiOlwi4oGfXCIsXCImTWVsbGludHJmO1wiOlwi4oSzXCIsXCImTWZyO1wiOlwi8J2UkFwiLFwiJk1pbnVzUGx1cztcIjpcIuKIk1wiLFwiJk1vcGY7XCI6XCLwnZWEXCIsXCImTXNjcjtcIjpcIuKEs1wiLFwiJk11O1wiOlwizpxcIixcIiZOSmN5O1wiOlwi0IpcIixcIiZOYWN1dGU7XCI6XCLFg1wiLFwiJk5jYXJvbjtcIjpcIsWHXCIsXCImTmNlZGlsO1wiOlwixYVcIixcIiZOY3k7XCI6XCLQnVwiLFwiJk5lZ2F0aXZlTWVkaXVtU3BhY2U7XCI6XCLigItcIixcIiZOZWdhdGl2ZVRoaWNrU3BhY2U7XCI6XCLigItcIixcIiZOZWdhdGl2ZVRoaW5TcGFjZTtcIjpcIuKAi1wiLFwiJk5lZ2F0aXZlVmVyeVRoaW5TcGFjZTtcIjpcIuKAi1wiLFwiJk5lc3RlZEdyZWF0ZXJHcmVhdGVyO1wiOlwi4omrXCIsXCImTmVzdGVkTGVzc0xlc3M7XCI6XCLiiapcIixcIiZOZXdMaW5lO1wiOlwiXFxuXCIsXCImTmZyO1wiOlwi8J2UkVwiLFwiJk5vQnJlYWs7XCI6XCLigaBcIixcIiZOb25CcmVha2luZ1NwYWNlO1wiOlwiwqBcIixcIiZOb3BmO1wiOlwi4oSVXCIsXCImTm90O1wiOlwi4qusXCIsXCImTm90Q29uZ3J1ZW50O1wiOlwi4omiXCIsXCImTm90Q3VwQ2FwO1wiOlwi4omtXCIsXCImTm90RG91YmxlVmVydGljYWxCYXI7XCI6XCLiiKZcIixcIiZOb3RFbGVtZW50O1wiOlwi4oiJXCIsXCImTm90RXF1YWw7XCI6XCLiiaBcIixcIiZOb3RFcXVhbFRpbGRlO1wiOlwi4omCzLhcIixcIiZOb3RFeGlzdHM7XCI6XCLiiIRcIixcIiZOb3RHcmVhdGVyO1wiOlwi4omvXCIsXCImTm90R3JlYXRlckVxdWFsO1wiOlwi4omxXCIsXCImTm90R3JlYXRlckZ1bGxFcXVhbDtcIjpcIuKJp8y4XCIsXCImTm90R3JlYXRlckdyZWF0ZXI7XCI6XCLiiavMuFwiLFwiJk5vdEdyZWF0ZXJMZXNzO1wiOlwi4om5XCIsXCImTm90R3JlYXRlclNsYW50RXF1YWw7XCI6XCLiqb7MuFwiLFwiJk5vdEdyZWF0ZXJUaWxkZTtcIjpcIuKJtVwiLFwiJk5vdEh1bXBEb3duSHVtcDtcIjpcIuKJjsy4XCIsXCImTm90SHVtcEVxdWFsO1wiOlwi4omPzLhcIixcIiZOb3RMZWZ0VHJpYW5nbGU7XCI6XCLii6pcIixcIiZOb3RMZWZ0VHJpYW5nbGVCYXI7XCI6XCLip4/MuFwiLFwiJk5vdExlZnRUcmlhbmdsZUVxdWFsO1wiOlwi4ousXCIsXCImTm90TGVzcztcIjpcIuKJrlwiLFwiJk5vdExlc3NFcXVhbDtcIjpcIuKJsFwiLFwiJk5vdExlc3NHcmVhdGVyO1wiOlwi4om4XCIsXCImTm90TGVzc0xlc3M7XCI6XCLiiarMuFwiLFwiJk5vdExlc3NTbGFudEVxdWFsO1wiOlwi4qm9zLhcIixcIiZOb3RMZXNzVGlsZGU7XCI6XCLiibRcIixcIiZOb3ROZXN0ZWRHcmVhdGVyR3JlYXRlcjtcIjpcIuKqosy4XCIsXCImTm90TmVzdGVkTGVzc0xlc3M7XCI6XCLiqqHMuFwiLFwiJk5vdFByZWNlZGVzO1wiOlwi4oqAXCIsXCImTm90UHJlY2VkZXNFcXVhbDtcIjpcIuKqr8y4XCIsXCImTm90UHJlY2VkZXNTbGFudEVxdWFsO1wiOlwi4ougXCIsXCImTm90UmV2ZXJzZUVsZW1lbnQ7XCI6XCLiiIxcIixcIiZOb3RSaWdodFRyaWFuZ2xlO1wiOlwi4ourXCIsXCImTm90UmlnaHRUcmlhbmdsZUJhcjtcIjpcIuKnkMy4XCIsXCImTm90UmlnaHRUcmlhbmdsZUVxdWFsO1wiOlwi4outXCIsXCImTm90U3F1YXJlU3Vic2V0O1wiOlwi4oqPzLhcIixcIiZOb3RTcXVhcmVTdWJzZXRFcXVhbDtcIjpcIuKLolwiLFwiJk5vdFNxdWFyZVN1cGVyc2V0O1wiOlwi4oqQzLhcIixcIiZOb3RTcXVhcmVTdXBlcnNldEVxdWFsO1wiOlwi4oujXCIsXCImTm90U3Vic2V0O1wiOlwi4oqC4oOSXCIsXCImTm90U3Vic2V0RXF1YWw7XCI6XCLiiohcIixcIiZOb3RTdWNjZWVkcztcIjpcIuKKgVwiLFwiJk5vdFN1Y2NlZWRzRXF1YWw7XCI6XCLiqrDMuFwiLFwiJk5vdFN1Y2NlZWRzU2xhbnRFcXVhbDtcIjpcIuKLoVwiLFwiJk5vdFN1Y2NlZWRzVGlsZGU7XCI6XCLiib/MuFwiLFwiJk5vdFN1cGVyc2V0O1wiOlwi4oqD4oOSXCIsXCImTm90U3VwZXJzZXRFcXVhbDtcIjpcIuKKiVwiLFwiJk5vdFRpbGRlO1wiOlwi4omBXCIsXCImTm90VGlsZGVFcXVhbDtcIjpcIuKJhFwiLFwiJk5vdFRpbGRlRnVsbEVxdWFsO1wiOlwi4omHXCIsXCImTm90VGlsZGVUaWxkZTtcIjpcIuKJiVwiLFwiJk5vdFZlcnRpY2FsQmFyO1wiOlwi4oikXCIsXCImTnNjcjtcIjpcIvCdkqlcIixcIiZOdGlsZGVcIjpcIsORXCIsXCImTnRpbGRlO1wiOlwiw5FcIixcIiZOdTtcIjpcIs6dXCIsXCImT0VsaWc7XCI6XCLFklwiLFwiJk9hY3V0ZVwiOlwiw5NcIixcIiZPYWN1dGU7XCI6XCLDk1wiLFwiJk9jaXJjXCI6XCLDlFwiLFwiJk9jaXJjO1wiOlwiw5RcIixcIiZPY3k7XCI6XCLQnlwiLFwiJk9kYmxhYztcIjpcIsWQXCIsXCImT2ZyO1wiOlwi8J2UklwiLFwiJk9ncmF2ZVwiOlwiw5JcIixcIiZPZ3JhdmU7XCI6XCLDklwiLFwiJk9tYWNyO1wiOlwixYxcIixcIiZPbWVnYTtcIjpcIs6pXCIsXCImT21pY3JvbjtcIjpcIs6fXCIsXCImT29wZjtcIjpcIvCdlYZcIixcIiZPcGVuQ3VybHlEb3VibGVRdW90ZTtcIjpcIuKAnFwiLFwiJk9wZW5DdXJseVF1b3RlO1wiOlwi4oCYXCIsXCImT3I7XCI6XCLiqZRcIixcIiZPc2NyO1wiOlwi8J2SqlwiLFwiJk9zbGFzaFwiOlwiw5hcIixcIiZPc2xhc2g7XCI6XCLDmFwiLFwiJk90aWxkZVwiOlwiw5VcIixcIiZPdGlsZGU7XCI6XCLDlVwiLFwiJk90aW1lcztcIjpcIuKot1wiLFwiJk91bWxcIjpcIsOWXCIsXCImT3VtbDtcIjpcIsOWXCIsXCImT3ZlckJhcjtcIjpcIuKAvlwiLFwiJk92ZXJCcmFjZTtcIjpcIuKPnlwiLFwiJk92ZXJCcmFja2V0O1wiOlwi4o60XCIsXCImT3ZlclBhcmVudGhlc2lzO1wiOlwi4o+cXCIsXCImUGFydGlhbEQ7XCI6XCLiiIJcIixcIiZQY3k7XCI6XCLQn1wiLFwiJlBmcjtcIjpcIvCdlJNcIixcIiZQaGk7XCI6XCLOplwiLFwiJlBpO1wiOlwizqBcIixcIiZQbHVzTWludXM7XCI6XCLCsVwiLFwiJlBvaW5jYXJlcGxhbmU7XCI6XCLihIxcIixcIiZQb3BmO1wiOlwi4oSZXCIsXCImUHI7XCI6XCLiqrtcIixcIiZQcmVjZWRlcztcIjpcIuKJulwiLFwiJlByZWNlZGVzRXF1YWw7XCI6XCLiqq9cIixcIiZQcmVjZWRlc1NsYW50RXF1YWw7XCI6XCLiibxcIixcIiZQcmVjZWRlc1RpbGRlO1wiOlwi4om+XCIsXCImUHJpbWU7XCI6XCLigLNcIixcIiZQcm9kdWN0O1wiOlwi4oiPXCIsXCImUHJvcG9ydGlvbjtcIjpcIuKIt1wiLFwiJlByb3BvcnRpb25hbDtcIjpcIuKInVwiLFwiJlBzY3I7XCI6XCLwnZKrXCIsXCImUHNpO1wiOlwizqhcIixcIiZRVU9UXCI6J1wiJyxcIiZRVU9UO1wiOidcIicsXCImUWZyO1wiOlwi8J2UlFwiLFwiJlFvcGY7XCI6XCLihJpcIixcIiZRc2NyO1wiOlwi8J2SrFwiLFwiJlJCYXJyO1wiOlwi4qSQXCIsXCImUkVHXCI6XCLCrlwiLFwiJlJFRztcIjpcIsKuXCIsXCImUmFjdXRlO1wiOlwixZRcIixcIiZSYW5nO1wiOlwi4p+rXCIsXCImUmFycjtcIjpcIuKGoFwiLFwiJlJhcnJ0bDtcIjpcIuKkllwiLFwiJlJjYXJvbjtcIjpcIsWYXCIsXCImUmNlZGlsO1wiOlwixZZcIixcIiZSY3k7XCI6XCLQoFwiLFwiJlJlO1wiOlwi4oScXCIsXCImUmV2ZXJzZUVsZW1lbnQ7XCI6XCLiiItcIixcIiZSZXZlcnNlRXF1aWxpYnJpdW07XCI6XCLih4tcIixcIiZSZXZlcnNlVXBFcXVpbGlicml1bTtcIjpcIuKlr1wiLFwiJlJmcjtcIjpcIuKEnFwiLFwiJlJobztcIjpcIs6hXCIsXCImUmlnaHRBbmdsZUJyYWNrZXQ7XCI6XCLin6lcIixcIiZSaWdodEFycm93O1wiOlwi4oaSXCIsXCImUmlnaHRBcnJvd0JhcjtcIjpcIuKHpVwiLFwiJlJpZ2h0QXJyb3dMZWZ0QXJyb3c7XCI6XCLih4RcIixcIiZSaWdodENlaWxpbmc7XCI6XCLijIlcIixcIiZSaWdodERvdWJsZUJyYWNrZXQ7XCI6XCLin6dcIixcIiZSaWdodERvd25UZWVWZWN0b3I7XCI6XCLipZ1cIixcIiZSaWdodERvd25WZWN0b3I7XCI6XCLih4JcIixcIiZSaWdodERvd25WZWN0b3JCYXI7XCI6XCLipZVcIixcIiZSaWdodEZsb29yO1wiOlwi4oyLXCIsXCImUmlnaHRUZWU7XCI6XCLiiqJcIixcIiZSaWdodFRlZUFycm93O1wiOlwi4oamXCIsXCImUmlnaHRUZWVWZWN0b3I7XCI6XCLipZtcIixcIiZSaWdodFRyaWFuZ2xlO1wiOlwi4oqzXCIsXCImUmlnaHRUcmlhbmdsZUJhcjtcIjpcIuKnkFwiLFwiJlJpZ2h0VHJpYW5nbGVFcXVhbDtcIjpcIuKKtVwiLFwiJlJpZ2h0VXBEb3duVmVjdG9yO1wiOlwi4qWPXCIsXCImUmlnaHRVcFRlZVZlY3RvcjtcIjpcIuKlnFwiLFwiJlJpZ2h0VXBWZWN0b3I7XCI6XCLihr5cIixcIiZSaWdodFVwVmVjdG9yQmFyO1wiOlwi4qWUXCIsXCImUmlnaHRWZWN0b3I7XCI6XCLih4BcIixcIiZSaWdodFZlY3RvckJhcjtcIjpcIuKlk1wiLFwiJlJpZ2h0YXJyb3c7XCI6XCLih5JcIixcIiZSb3BmO1wiOlwi4oSdXCIsXCImUm91bmRJbXBsaWVzO1wiOlwi4qWwXCIsXCImUnJpZ2h0YXJyb3c7XCI6XCLih5tcIixcIiZSc2NyO1wiOlwi4oSbXCIsXCImUnNoO1wiOlwi4oaxXCIsXCImUnVsZURlbGF5ZWQ7XCI6XCLip7RcIixcIiZTSENIY3k7XCI6XCLQqVwiLFwiJlNIY3k7XCI6XCLQqFwiLFwiJlNPRlRjeTtcIjpcItCsXCIsXCImU2FjdXRlO1wiOlwixZpcIixcIiZTYztcIjpcIuKqvFwiLFwiJlNjYXJvbjtcIjpcIsWgXCIsXCImU2NlZGlsO1wiOlwixZ5cIixcIiZTY2lyYztcIjpcIsWcXCIsXCImU2N5O1wiOlwi0KFcIixcIiZTZnI7XCI6XCLwnZSWXCIsXCImU2hvcnREb3duQXJyb3c7XCI6XCLihpNcIixcIiZTaG9ydExlZnRBcnJvdztcIjpcIuKGkFwiLFwiJlNob3J0UmlnaHRBcnJvdztcIjpcIuKGklwiLFwiJlNob3J0VXBBcnJvdztcIjpcIuKGkVwiLFwiJlNpZ21hO1wiOlwizqNcIixcIiZTbWFsbENpcmNsZTtcIjpcIuKImFwiLFwiJlNvcGY7XCI6XCLwnZWKXCIsXCImU3FydDtcIjpcIuKImlwiLFwiJlNxdWFyZTtcIjpcIuKWoVwiLFwiJlNxdWFyZUludGVyc2VjdGlvbjtcIjpcIuKKk1wiLFwiJlNxdWFyZVN1YnNldDtcIjpcIuKKj1wiLFwiJlNxdWFyZVN1YnNldEVxdWFsO1wiOlwi4oqRXCIsXCImU3F1YXJlU3VwZXJzZXQ7XCI6XCLiipBcIixcIiZTcXVhcmVTdXBlcnNldEVxdWFsO1wiOlwi4oqSXCIsXCImU3F1YXJlVW5pb247XCI6XCLiipRcIixcIiZTc2NyO1wiOlwi8J2SrlwiLFwiJlN0YXI7XCI6XCLii4ZcIixcIiZTdWI7XCI6XCLii5BcIixcIiZTdWJzZXQ7XCI6XCLii5BcIixcIiZTdWJzZXRFcXVhbDtcIjpcIuKKhlwiLFwiJlN1Y2NlZWRzO1wiOlwi4om7XCIsXCImU3VjY2VlZHNFcXVhbDtcIjpcIuKqsFwiLFwiJlN1Y2NlZWRzU2xhbnRFcXVhbDtcIjpcIuKJvVwiLFwiJlN1Y2NlZWRzVGlsZGU7XCI6XCLiib9cIixcIiZTdWNoVGhhdDtcIjpcIuKIi1wiLFwiJlN1bTtcIjpcIuKIkVwiLFwiJlN1cDtcIjpcIuKLkVwiLFwiJlN1cGVyc2V0O1wiOlwi4oqDXCIsXCImU3VwZXJzZXRFcXVhbDtcIjpcIuKKh1wiLFwiJlN1cHNldDtcIjpcIuKLkVwiLFwiJlRIT1JOXCI6XCLDnlwiLFwiJlRIT1JOO1wiOlwiw55cIixcIiZUUkFERTtcIjpcIuKEolwiLFwiJlRTSGN5O1wiOlwi0ItcIixcIiZUU2N5O1wiOlwi0KZcIixcIiZUYWI7XCI6XCJcXHRcIixcIiZUYXU7XCI6XCLOpFwiLFwiJlRjYXJvbjtcIjpcIsWkXCIsXCImVGNlZGlsO1wiOlwixaJcIixcIiZUY3k7XCI6XCLQolwiLFwiJlRmcjtcIjpcIvCdlJdcIixcIiZUaGVyZWZvcmU7XCI6XCLiiLRcIixcIiZUaGV0YTtcIjpcIs6YXCIsXCImVGhpY2tTcGFjZTtcIjpcIuKBn+KAilwiLFwiJlRoaW5TcGFjZTtcIjpcIuKAiVwiLFwiJlRpbGRlO1wiOlwi4oi8XCIsXCImVGlsZGVFcXVhbDtcIjpcIuKJg1wiLFwiJlRpbGRlRnVsbEVxdWFsO1wiOlwi4omFXCIsXCImVGlsZGVUaWxkZTtcIjpcIuKJiFwiLFwiJlRvcGY7XCI6XCLwnZWLXCIsXCImVHJpcGxlRG90O1wiOlwi4oObXCIsXCImVHNjcjtcIjpcIvCdkq9cIixcIiZUc3Ryb2s7XCI6XCLFplwiLFwiJlVhY3V0ZVwiOlwiw5pcIixcIiZVYWN1dGU7XCI6XCLDmlwiLFwiJlVhcnI7XCI6XCLihp9cIixcIiZVYXJyb2NpcjtcIjpcIuKliVwiLFwiJlVicmN5O1wiOlwi0I5cIixcIiZVYnJldmU7XCI6XCLFrFwiLFwiJlVjaXJjXCI6XCLDm1wiLFwiJlVjaXJjO1wiOlwiw5tcIixcIiZVY3k7XCI6XCLQo1wiLFwiJlVkYmxhYztcIjpcIsWwXCIsXCImVWZyO1wiOlwi8J2UmFwiLFwiJlVncmF2ZVwiOlwiw5lcIixcIiZVZ3JhdmU7XCI6XCLDmVwiLFwiJlVtYWNyO1wiOlwixapcIixcIiZVbmRlckJhcjtcIjpcIl9cIixcIiZVbmRlckJyYWNlO1wiOlwi4o+fXCIsXCImVW5kZXJCcmFja2V0O1wiOlwi4o61XCIsXCImVW5kZXJQYXJlbnRoZXNpcztcIjpcIuKPnVwiLFwiJlVuaW9uO1wiOlwi4ouDXCIsXCImVW5pb25QbHVzO1wiOlwi4oqOXCIsXCImVW9nb247XCI6XCLFslwiLFwiJlVvcGY7XCI6XCLwnZWMXCIsXCImVXBBcnJvdztcIjpcIuKGkVwiLFwiJlVwQXJyb3dCYXI7XCI6XCLipJJcIixcIiZVcEFycm93RG93bkFycm93O1wiOlwi4oeFXCIsXCImVXBEb3duQXJyb3c7XCI6XCLihpVcIixcIiZVcEVxdWlsaWJyaXVtO1wiOlwi4qWuXCIsXCImVXBUZWU7XCI6XCLiiqVcIixcIiZVcFRlZUFycm93O1wiOlwi4oalXCIsXCImVXBhcnJvdztcIjpcIuKHkVwiLFwiJlVwZG93bmFycm93O1wiOlwi4oeVXCIsXCImVXBwZXJMZWZ0QXJyb3c7XCI6XCLihpZcIixcIiZVcHBlclJpZ2h0QXJyb3c7XCI6XCLihpdcIixcIiZVcHNpO1wiOlwiz5JcIixcIiZVcHNpbG9uO1wiOlwizqVcIixcIiZVcmluZztcIjpcIsWuXCIsXCImVXNjcjtcIjpcIvCdkrBcIixcIiZVdGlsZGU7XCI6XCLFqFwiLFwiJlV1bWxcIjpcIsOcXCIsXCImVXVtbDtcIjpcIsOcXCIsXCImVkRhc2g7XCI6XCLiiqtcIixcIiZWYmFyO1wiOlwi4qurXCIsXCImVmN5O1wiOlwi0JJcIixcIiZWZGFzaDtcIjpcIuKKqVwiLFwiJlZkYXNobDtcIjpcIuKrplwiLFwiJlZlZTtcIjpcIuKLgVwiLFwiJlZlcmJhcjtcIjpcIuKAllwiLFwiJlZlcnQ7XCI6XCLigJZcIixcIiZWZXJ0aWNhbEJhcjtcIjpcIuKIo1wiLFwiJlZlcnRpY2FsTGluZTtcIjpcInxcIixcIiZWZXJ0aWNhbFNlcGFyYXRvcjtcIjpcIuKdmFwiLFwiJlZlcnRpY2FsVGlsZGU7XCI6XCLiiYBcIixcIiZWZXJ5VGhpblNwYWNlO1wiOlwi4oCKXCIsXCImVmZyO1wiOlwi8J2UmVwiLFwiJlZvcGY7XCI6XCLwnZWNXCIsXCImVnNjcjtcIjpcIvCdkrFcIixcIiZWdmRhc2g7XCI6XCLiiqpcIixcIiZXY2lyYztcIjpcIsW0XCIsXCImV2VkZ2U7XCI6XCLii4BcIixcIiZXZnI7XCI6XCLwnZSaXCIsXCImV29wZjtcIjpcIvCdlY5cIixcIiZXc2NyO1wiOlwi8J2SslwiLFwiJlhmcjtcIjpcIvCdlJtcIixcIiZYaTtcIjpcIs6eXCIsXCImWG9wZjtcIjpcIvCdlY9cIixcIiZYc2NyO1wiOlwi8J2Ss1wiLFwiJllBY3k7XCI6XCLQr1wiLFwiJllJY3k7XCI6XCLQh1wiLFwiJllVY3k7XCI6XCLQrlwiLFwiJllhY3V0ZVwiOlwiw51cIixcIiZZYWN1dGU7XCI6XCLDnVwiLFwiJlljaXJjO1wiOlwixbZcIixcIiZZY3k7XCI6XCLQq1wiLFwiJllmcjtcIjpcIvCdlJxcIixcIiZZb3BmO1wiOlwi8J2VkFwiLFwiJllzY3I7XCI6XCLwnZK0XCIsXCImWXVtbDtcIjpcIsW4XCIsXCImWkhjeTtcIjpcItCWXCIsXCImWmFjdXRlO1wiOlwixblcIixcIiZaY2Fyb247XCI6XCLFvVwiLFwiJlpjeTtcIjpcItCXXCIsXCImWmRvdDtcIjpcIsW7XCIsXCImWmVyb1dpZHRoU3BhY2U7XCI6XCLigItcIixcIiZaZXRhO1wiOlwizpZcIixcIiZaZnI7XCI6XCLihKhcIixcIiZab3BmO1wiOlwi4oSkXCIsXCImWnNjcjtcIjpcIvCdkrVcIixcIiZhYWN1dGVcIjpcIsOhXCIsXCImYWFjdXRlO1wiOlwiw6FcIixcIiZhYnJldmU7XCI6XCLEg1wiLFwiJmFjO1wiOlwi4oi+XCIsXCImYWNFO1wiOlwi4oi+zLNcIixcIiZhY2Q7XCI6XCLiiL9cIixcIiZhY2lyY1wiOlwiw6JcIixcIiZhY2lyYztcIjpcIsOiXCIsXCImYWN1dGVcIjpcIsK0XCIsXCImYWN1dGU7XCI6XCLCtFwiLFwiJmFjeTtcIjpcItCwXCIsXCImYWVsaWdcIjpcIsOmXCIsXCImYWVsaWc7XCI6XCLDplwiLFwiJmFmO1wiOlwi4oGhXCIsXCImYWZyO1wiOlwi8J2UnlwiLFwiJmFncmF2ZVwiOlwiw6BcIixcIiZhZ3JhdmU7XCI6XCLDoFwiLFwiJmFsZWZzeW07XCI6XCLihLVcIixcIiZhbGVwaDtcIjpcIuKEtVwiLFwiJmFscGhhO1wiOlwizrFcIixcIiZhbWFjcjtcIjpcIsSBXCIsXCImYW1hbGc7XCI6XCLiqL9cIixcIiZhbXBcIjpcIiZcIixcIiZhbXA7XCI6XCImXCIsXCImYW5kO1wiOlwi4oinXCIsXCImYW5kYW5kO1wiOlwi4qmVXCIsXCImYW5kZDtcIjpcIuKpnFwiLFwiJmFuZHNsb3BlO1wiOlwi4qmYXCIsXCImYW5kdjtcIjpcIuKpmlwiLFwiJmFuZztcIjpcIuKIoFwiLFwiJmFuZ2U7XCI6XCLipqRcIixcIiZhbmdsZTtcIjpcIuKIoFwiLFwiJmFuZ21zZDtcIjpcIuKIoVwiLFwiJmFuZ21zZGFhO1wiOlwi4qaoXCIsXCImYW5nbXNkYWI7XCI6XCLipqlcIixcIiZhbmdtc2RhYztcIjpcIuKmqlwiLFwiJmFuZ21zZGFkO1wiOlwi4qarXCIsXCImYW5nbXNkYWU7XCI6XCLipqxcIixcIiZhbmdtc2RhZjtcIjpcIuKmrVwiLFwiJmFuZ21zZGFnO1wiOlwi4qauXCIsXCImYW5nbXNkYWg7XCI6XCLipq9cIixcIiZhbmdydDtcIjpcIuKIn1wiLFwiJmFuZ3J0dmI7XCI6XCLiir5cIixcIiZhbmdydHZiZDtcIjpcIuKmnVwiLFwiJmFuZ3NwaDtcIjpcIuKIolwiLFwiJmFuZ3N0O1wiOlwiw4VcIixcIiZhbmd6YXJyO1wiOlwi4o28XCIsXCImYW9nb247XCI6XCLEhVwiLFwiJmFvcGY7XCI6XCLwnZWSXCIsXCImYXA7XCI6XCLiiYhcIixcIiZhcEU7XCI6XCLiqbBcIixcIiZhcGFjaXI7XCI6XCLiqa9cIixcIiZhcGU7XCI6XCLiiYpcIixcIiZhcGlkO1wiOlwi4omLXCIsXCImYXBvcztcIjpcIidcIixcIiZhcHByb3g7XCI6XCLiiYhcIixcIiZhcHByb3hlcTtcIjpcIuKJilwiLFwiJmFyaW5nXCI6XCLDpVwiLFwiJmFyaW5nO1wiOlwiw6VcIixcIiZhc2NyO1wiOlwi8J2StlwiLFwiJmFzdDtcIjpcIipcIixcIiZhc3ltcDtcIjpcIuKJiFwiLFwiJmFzeW1wZXE7XCI6XCLiiY1cIixcIiZhdGlsZGVcIjpcIsOjXCIsXCImYXRpbGRlO1wiOlwiw6NcIixcIiZhdW1sXCI6XCLDpFwiLFwiJmF1bWw7XCI6XCLDpFwiLFwiJmF3Y29uaW50O1wiOlwi4oizXCIsXCImYXdpbnQ7XCI6XCLiqJFcIixcIiZiTm90O1wiOlwi4qutXCIsXCImYmFja2Nvbmc7XCI6XCLiiYxcIixcIiZiYWNrZXBzaWxvbjtcIjpcIs+2XCIsXCImYmFja3ByaW1lO1wiOlwi4oC1XCIsXCImYmFja3NpbTtcIjpcIuKIvVwiLFwiJmJhY2tzaW1lcTtcIjpcIuKLjVwiLFwiJmJhcnZlZTtcIjpcIuKKvVwiLFwiJmJhcndlZDtcIjpcIuKMhVwiLFwiJmJhcndlZGdlO1wiOlwi4oyFXCIsXCImYmJyaztcIjpcIuKOtVwiLFwiJmJicmt0YnJrO1wiOlwi4o62XCIsXCImYmNvbmc7XCI6XCLiiYxcIixcIiZiY3k7XCI6XCLQsVwiLFwiJmJkcXVvO1wiOlwi4oCeXCIsXCImYmVjYXVzO1wiOlwi4oi1XCIsXCImYmVjYXVzZTtcIjpcIuKItVwiLFwiJmJlbXB0eXY7XCI6XCLiprBcIixcIiZiZXBzaTtcIjpcIs+2XCIsXCImYmVybm91O1wiOlwi4oSsXCIsXCImYmV0YTtcIjpcIs6yXCIsXCImYmV0aDtcIjpcIuKEtlwiLFwiJmJldHdlZW47XCI6XCLiiaxcIixcIiZiZnI7XCI6XCLwnZSfXCIsXCImYmlnY2FwO1wiOlwi4ouCXCIsXCImYmlnY2lyYztcIjpcIuKXr1wiLFwiJmJpZ2N1cDtcIjpcIuKLg1wiLFwiJmJpZ29kb3Q7XCI6XCLiqIBcIixcIiZiaWdvcGx1cztcIjpcIuKogVwiLFwiJmJpZ290aW1lcztcIjpcIuKoglwiLFwiJmJpZ3NxY3VwO1wiOlwi4qiGXCIsXCImYmlnc3RhcjtcIjpcIuKYhVwiLFwiJmJpZ3RyaWFuZ2xlZG93bjtcIjpcIuKWvVwiLFwiJmJpZ3RyaWFuZ2xldXA7XCI6XCLilrNcIixcIiZiaWd1cGx1cztcIjpcIuKohFwiLFwiJmJpZ3ZlZTtcIjpcIuKLgVwiLFwiJmJpZ3dlZGdlO1wiOlwi4ouAXCIsXCImYmthcm93O1wiOlwi4qSNXCIsXCImYmxhY2tsb3plbmdlO1wiOlwi4qerXCIsXCImYmxhY2tzcXVhcmU7XCI6XCLilqpcIixcIiZibGFja3RyaWFuZ2xlO1wiOlwi4pa0XCIsXCImYmxhY2t0cmlhbmdsZWRvd247XCI6XCLilr5cIixcIiZibGFja3RyaWFuZ2xlbGVmdDtcIjpcIuKXglwiLFwiJmJsYWNrdHJpYW5nbGVyaWdodDtcIjpcIuKWuFwiLFwiJmJsYW5rO1wiOlwi4pCjXCIsXCImYmxrMTI7XCI6XCLilpJcIixcIiZibGsxNDtcIjpcIuKWkVwiLFwiJmJsazM0O1wiOlwi4paTXCIsXCImYmxvY2s7XCI6XCLilohcIixcIiZibmU7XCI6XCI94oOlXCIsXCImYm5lcXVpdjtcIjpcIuKJoeKDpVwiLFwiJmJub3Q7XCI6XCLijJBcIixcIiZib3BmO1wiOlwi8J2Vk1wiLFwiJmJvdDtcIjpcIuKKpVwiLFwiJmJvdHRvbTtcIjpcIuKKpVwiLFwiJmJvd3RpZTtcIjpcIuKLiFwiLFwiJmJveERMO1wiOlwi4pWXXCIsXCImYm94RFI7XCI6XCLilZRcIixcIiZib3hEbDtcIjpcIuKVllwiLFwiJmJveERyO1wiOlwi4pWTXCIsXCImYm94SDtcIjpcIuKVkFwiLFwiJmJveEhEO1wiOlwi4pWmXCIsXCImYm94SFU7XCI6XCLilalcIixcIiZib3hIZDtcIjpcIuKVpFwiLFwiJmJveEh1O1wiOlwi4pWnXCIsXCImYm94VUw7XCI6XCLilZ1cIixcIiZib3hVUjtcIjpcIuKVmlwiLFwiJmJveFVsO1wiOlwi4pWcXCIsXCImYm94VXI7XCI6XCLilZlcIixcIiZib3hWO1wiOlwi4pWRXCIsXCImYm94Vkg7XCI6XCLilaxcIixcIiZib3hWTDtcIjpcIuKVo1wiLFwiJmJveFZSO1wiOlwi4pWgXCIsXCImYm94Vmg7XCI6XCLilatcIixcIiZib3hWbDtcIjpcIuKVolwiLFwiJmJveFZyO1wiOlwi4pWfXCIsXCImYm94Ym94O1wiOlwi4qeJXCIsXCImYm94ZEw7XCI6XCLilZVcIixcIiZib3hkUjtcIjpcIuKVklwiLFwiJmJveGRsO1wiOlwi4pSQXCIsXCImYm94ZHI7XCI6XCLilIxcIixcIiZib3hoO1wiOlwi4pSAXCIsXCImYm94aEQ7XCI6XCLilaVcIixcIiZib3hoVTtcIjpcIuKVqFwiLFwiJmJveGhkO1wiOlwi4pSsXCIsXCImYm94aHU7XCI6XCLilLRcIixcIiZib3htaW51cztcIjpcIuKKn1wiLFwiJmJveHBsdXM7XCI6XCLiip5cIixcIiZib3h0aW1lcztcIjpcIuKKoFwiLFwiJmJveHVMO1wiOlwi4pWbXCIsXCImYm94dVI7XCI6XCLilZhcIixcIiZib3h1bDtcIjpcIuKUmFwiLFwiJmJveHVyO1wiOlwi4pSUXCIsXCImYm94djtcIjpcIuKUglwiLFwiJmJveHZIO1wiOlwi4pWqXCIsXCImYm94dkw7XCI6XCLilaFcIixcIiZib3h2UjtcIjpcIuKVnlwiLFwiJmJveHZoO1wiOlwi4pS8XCIsXCImYm94dmw7XCI6XCLilKRcIixcIiZib3h2cjtcIjpcIuKUnFwiLFwiJmJwcmltZTtcIjpcIuKAtVwiLFwiJmJyZXZlO1wiOlwiy5hcIixcIiZicnZiYXJcIjpcIsKmXCIsXCImYnJ2YmFyO1wiOlwiwqZcIixcIiZic2NyO1wiOlwi8J2St1wiLFwiJmJzZW1pO1wiOlwi4oGPXCIsXCImYnNpbTtcIjpcIuKIvVwiLFwiJmJzaW1lO1wiOlwi4ouNXCIsXCImYnNvbDtcIjpcIlxcXFxcIixcIiZic29sYjtcIjpcIuKnhVwiLFwiJmJzb2xoc3ViO1wiOlwi4p+IXCIsXCImYnVsbDtcIjpcIuKAolwiLFwiJmJ1bGxldDtcIjpcIuKAolwiLFwiJmJ1bXA7XCI6XCLiiY5cIixcIiZidW1wRTtcIjpcIuKqrlwiLFwiJmJ1bXBlO1wiOlwi4omPXCIsXCImYnVtcGVxO1wiOlwi4omPXCIsXCImY2FjdXRlO1wiOlwixIdcIixcIiZjYXA7XCI6XCLiiKlcIixcIiZjYXBhbmQ7XCI6XCLiqYRcIixcIiZjYXBicmN1cDtcIjpcIuKpiVwiLFwiJmNhcGNhcDtcIjpcIuKpi1wiLFwiJmNhcGN1cDtcIjpcIuKph1wiLFwiJmNhcGRvdDtcIjpcIuKpgFwiLFwiJmNhcHM7XCI6XCLiiKnvuIBcIixcIiZjYXJldDtcIjpcIuKBgVwiLFwiJmNhcm9uO1wiOlwiy4dcIixcIiZjY2FwcztcIjpcIuKpjVwiLFwiJmNjYXJvbjtcIjpcIsSNXCIsXCImY2NlZGlsXCI6XCLDp1wiLFwiJmNjZWRpbDtcIjpcIsOnXCIsXCImY2NpcmM7XCI6XCLEiVwiLFwiJmNjdXBzO1wiOlwi4qmMXCIsXCImY2N1cHNzbTtcIjpcIuKpkFwiLFwiJmNkb3Q7XCI6XCLEi1wiLFwiJmNlZGlsXCI6XCLCuFwiLFwiJmNlZGlsO1wiOlwiwrhcIixcIiZjZW1wdHl2O1wiOlwi4qayXCIsXCImY2VudFwiOlwiwqJcIixcIiZjZW50O1wiOlwiwqJcIixcIiZjZW50ZXJkb3Q7XCI6XCLCt1wiLFwiJmNmcjtcIjpcIvCdlKBcIixcIiZjaGN5O1wiOlwi0YdcIixcIiZjaGVjaztcIjpcIuKck1wiLFwiJmNoZWNrbWFyaztcIjpcIuKck1wiLFwiJmNoaTtcIjpcIs+HXCIsXCImY2lyO1wiOlwi4peLXCIsXCImY2lyRTtcIjpcIuKng1wiLFwiJmNpcmM7XCI6XCLLhlwiLFwiJmNpcmNlcTtcIjpcIuKJl1wiLFwiJmNpcmNsZWFycm93bGVmdDtcIjpcIuKGulwiLFwiJmNpcmNsZWFycm93cmlnaHQ7XCI6XCLihrtcIixcIiZjaXJjbGVkUjtcIjpcIsKuXCIsXCImY2lyY2xlZFM7XCI6XCLik4hcIixcIiZjaXJjbGVkYXN0O1wiOlwi4oqbXCIsXCImY2lyY2xlZGNpcmM7XCI6XCLiippcIixcIiZjaXJjbGVkZGFzaDtcIjpcIuKKnVwiLFwiJmNpcmU7XCI6XCLiiZdcIixcIiZjaXJmbmludDtcIjpcIuKokFwiLFwiJmNpcm1pZDtcIjpcIuKrr1wiLFwiJmNpcnNjaXI7XCI6XCLip4JcIixcIiZjbHVicztcIjpcIuKZo1wiLFwiJmNsdWJzdWl0O1wiOlwi4pmjXCIsXCImY29sb247XCI6XCI6XCIsXCImY29sb25lO1wiOlwi4omUXCIsXCImY29sb25lcTtcIjpcIuKJlFwiLFwiJmNvbW1hO1wiOlwiLFwiLFwiJmNvbW1hdDtcIjpcIkBcIixcIiZjb21wO1wiOlwi4oiBXCIsXCImY29tcGZuO1wiOlwi4oiYXCIsXCImY29tcGxlbWVudDtcIjpcIuKIgVwiLFwiJmNvbXBsZXhlcztcIjpcIuKEglwiLFwiJmNvbmc7XCI6XCLiiYVcIixcIiZjb25nZG90O1wiOlwi4qmtXCIsXCImY29uaW50O1wiOlwi4oiuXCIsXCImY29wZjtcIjpcIvCdlZRcIixcIiZjb3Byb2Q7XCI6XCLiiJBcIixcIiZjb3B5XCI6XCLCqVwiLFwiJmNvcHk7XCI6XCLCqVwiLFwiJmNvcHlzcjtcIjpcIuKEl1wiLFwiJmNyYXJyO1wiOlwi4oa1XCIsXCImY3Jvc3M7XCI6XCLinJdcIixcIiZjc2NyO1wiOlwi8J2SuFwiLFwiJmNzdWI7XCI6XCLiq49cIixcIiZjc3ViZTtcIjpcIuKrkVwiLFwiJmNzdXA7XCI6XCLiq5BcIixcIiZjc3VwZTtcIjpcIuKrklwiLFwiJmN0ZG90O1wiOlwi4ouvXCIsXCImY3VkYXJybDtcIjpcIuKkuFwiLFwiJmN1ZGFycnI7XCI6XCLipLVcIixcIiZjdWVwcjtcIjpcIuKLnlwiLFwiJmN1ZXNjO1wiOlwi4oufXCIsXCImY3VsYXJyO1wiOlwi4oa2XCIsXCImY3VsYXJycDtcIjpcIuKkvVwiLFwiJmN1cDtcIjpcIuKIqlwiLFwiJmN1cGJyY2FwO1wiOlwi4qmIXCIsXCImY3VwY2FwO1wiOlwi4qmGXCIsXCImY3VwY3VwO1wiOlwi4qmKXCIsXCImY3VwZG90O1wiOlwi4oqNXCIsXCImY3Vwb3I7XCI6XCLiqYVcIixcIiZjdXBzO1wiOlwi4oiq77iAXCIsXCImY3VyYXJyO1wiOlwi4oa3XCIsXCImY3VyYXJybTtcIjpcIuKkvFwiLFwiJmN1cmx5ZXFwcmVjO1wiOlwi4oueXCIsXCImY3VybHllcXN1Y2M7XCI6XCLii59cIixcIiZjdXJseXZlZTtcIjpcIuKLjlwiLFwiJmN1cmx5d2VkZ2U7XCI6XCLii49cIixcIiZjdXJyZW5cIjpcIsKkXCIsXCImY3VycmVuO1wiOlwiwqRcIixcIiZjdXJ2ZWFycm93bGVmdDtcIjpcIuKGtlwiLFwiJmN1cnZlYXJyb3dyaWdodDtcIjpcIuKGt1wiLFwiJmN1dmVlO1wiOlwi4ouOXCIsXCImY3V3ZWQ7XCI6XCLii49cIixcIiZjd2NvbmludDtcIjpcIuKIslwiLFwiJmN3aW50O1wiOlwi4oixXCIsXCImY3lsY3R5O1wiOlwi4oytXCIsXCImZEFycjtcIjpcIuKHk1wiLFwiJmRIYXI7XCI6XCLipaVcIixcIiZkYWdnZXI7XCI6XCLigKBcIixcIiZkYWxldGg7XCI6XCLihLhcIixcIiZkYXJyO1wiOlwi4oaTXCIsXCImZGFzaDtcIjpcIuKAkFwiLFwiJmRhc2h2O1wiOlwi4oqjXCIsXCImZGJrYXJvdztcIjpcIuKkj1wiLFwiJmRibGFjO1wiOlwiy51cIixcIiZkY2Fyb247XCI6XCLEj1wiLFwiJmRjeTtcIjpcItC0XCIsXCImZGQ7XCI6XCLihYZcIixcIiZkZGFnZ2VyO1wiOlwi4oChXCIsXCImZGRhcnI7XCI6XCLih4pcIixcIiZkZG90c2VxO1wiOlwi4qm3XCIsXCImZGVnXCI6XCLCsFwiLFwiJmRlZztcIjpcIsKwXCIsXCImZGVsdGE7XCI6XCLOtFwiLFwiJmRlbXB0eXY7XCI6XCLiprFcIixcIiZkZmlzaHQ7XCI6XCLipb9cIixcIiZkZnI7XCI6XCLwnZShXCIsXCImZGhhcmw7XCI6XCLih4NcIixcIiZkaGFycjtcIjpcIuKHglwiLFwiJmRpYW07XCI6XCLii4RcIixcIiZkaWFtb25kO1wiOlwi4ouEXCIsXCImZGlhbW9uZHN1aXQ7XCI6XCLimaZcIixcIiZkaWFtcztcIjpcIuKZplwiLFwiJmRpZTtcIjpcIsKoXCIsXCImZGlnYW1tYTtcIjpcIs+dXCIsXCImZGlzaW47XCI6XCLii7JcIixcIiZkaXY7XCI6XCLDt1wiLFwiJmRpdmlkZVwiOlwiw7dcIixcIiZkaXZpZGU7XCI6XCLDt1wiLFwiJmRpdmlkZW9udGltZXM7XCI6XCLii4dcIixcIiZkaXZvbng7XCI6XCLii4dcIixcIiZkamN5O1wiOlwi0ZJcIixcIiZkbGNvcm47XCI6XCLijJ5cIixcIiZkbGNyb3A7XCI6XCLijI1cIixcIiZkb2xsYXI7XCI6XCIkXCIsXCImZG9wZjtcIjpcIvCdlZVcIixcIiZkb3Q7XCI6XCLLmVwiLFwiJmRvdGVxO1wiOlwi4omQXCIsXCImZG90ZXFkb3Q7XCI6XCLiiZFcIixcIiZkb3RtaW51cztcIjpcIuKIuFwiLFwiJmRvdHBsdXM7XCI6XCLiiJRcIixcIiZkb3RzcXVhcmU7XCI6XCLiiqFcIixcIiZkb3VibGViYXJ3ZWRnZTtcIjpcIuKMhlwiLFwiJmRvd25hcnJvdztcIjpcIuKGk1wiLFwiJmRvd25kb3duYXJyb3dzO1wiOlwi4oeKXCIsXCImZG93bmhhcnBvb25sZWZ0O1wiOlwi4oeDXCIsXCImZG93bmhhcnBvb25yaWdodDtcIjpcIuKHglwiLFwiJmRyYmthcm93O1wiOlwi4qSQXCIsXCImZHJjb3JuO1wiOlwi4oyfXCIsXCImZHJjcm9wO1wiOlwi4oyMXCIsXCImZHNjcjtcIjpcIvCdkrlcIixcIiZkc2N5O1wiOlwi0ZVcIixcIiZkc29sO1wiOlwi4qe2XCIsXCImZHN0cm9rO1wiOlwixJFcIixcIiZkdGRvdDtcIjpcIuKLsVwiLFwiJmR0cmk7XCI6XCLilr9cIixcIiZkdHJpZjtcIjpcIuKWvlwiLFwiJmR1YXJyO1wiOlwi4oe1XCIsXCImZHVoYXI7XCI6XCLipa9cIixcIiZkd2FuZ2xlO1wiOlwi4qamXCIsXCImZHpjeTtcIjpcItGfXCIsXCImZHppZ3JhcnI7XCI6XCLin79cIixcIiZlRERvdDtcIjpcIuKpt1wiLFwiJmVEb3Q7XCI6XCLiiZFcIixcIiZlYWN1dGVcIjpcIsOpXCIsXCImZWFjdXRlO1wiOlwiw6lcIixcIiZlYXN0ZXI7XCI6XCLiqa5cIixcIiZlY2Fyb247XCI6XCLEm1wiLFwiJmVjaXI7XCI6XCLiiZZcIixcIiZlY2lyY1wiOlwiw6pcIixcIiZlY2lyYztcIjpcIsOqXCIsXCImZWNvbG9uO1wiOlwi4omVXCIsXCImZWN5O1wiOlwi0Y1cIixcIiZlZG90O1wiOlwixJdcIixcIiZlZTtcIjpcIuKFh1wiLFwiJmVmRG90O1wiOlwi4omSXCIsXCImZWZyO1wiOlwi8J2UolwiLFwiJmVnO1wiOlwi4qqaXCIsXCImZWdyYXZlXCI6XCLDqFwiLFwiJmVncmF2ZTtcIjpcIsOoXCIsXCImZWdzO1wiOlwi4qqWXCIsXCImZWdzZG90O1wiOlwi4qqYXCIsXCImZWw7XCI6XCLiqplcIixcIiZlbGludGVycztcIjpcIuKPp1wiLFwiJmVsbDtcIjpcIuKEk1wiLFwiJmVscztcIjpcIuKqlVwiLFwiJmVsc2RvdDtcIjpcIuKql1wiLFwiJmVtYWNyO1wiOlwixJNcIixcIiZlbXB0eTtcIjpcIuKIhVwiLFwiJmVtcHR5c2V0O1wiOlwi4oiFXCIsXCImZW1wdHl2O1wiOlwi4oiFXCIsXCImZW1zcDEzO1wiOlwi4oCEXCIsXCImZW1zcDE0O1wiOlwi4oCFXCIsXCImZW1zcDtcIjpcIuKAg1wiLFwiJmVuZztcIjpcIsWLXCIsXCImZW5zcDtcIjpcIuKAglwiLFwiJmVvZ29uO1wiOlwixJlcIixcIiZlb3BmO1wiOlwi8J2VllwiLFwiJmVwYXI7XCI6XCLii5VcIixcIiZlcGFyc2w7XCI6XCLip6NcIixcIiZlcGx1cztcIjpcIuKpsVwiLFwiJmVwc2k7XCI6XCLOtVwiLFwiJmVwc2lsb247XCI6XCLOtVwiLFwiJmVwc2l2O1wiOlwiz7VcIixcIiZlcWNpcmM7XCI6XCLiiZZcIixcIiZlcWNvbG9uO1wiOlwi4omVXCIsXCImZXFzaW07XCI6XCLiiYJcIixcIiZlcXNsYW50Z3RyO1wiOlwi4qqWXCIsXCImZXFzbGFudGxlc3M7XCI6XCLiqpVcIixcIiZlcXVhbHM7XCI6XCI9XCIsXCImZXF1ZXN0O1wiOlwi4omfXCIsXCImZXF1aXY7XCI6XCLiiaFcIixcIiZlcXVpdkREO1wiOlwi4qm4XCIsXCImZXF2cGFyc2w7XCI6XCLip6VcIixcIiZlckRvdDtcIjpcIuKJk1wiLFwiJmVyYXJyO1wiOlwi4qWxXCIsXCImZXNjcjtcIjpcIuKEr1wiLFwiJmVzZG90O1wiOlwi4omQXCIsXCImZXNpbTtcIjpcIuKJglwiLFwiJmV0YTtcIjpcIs63XCIsXCImZXRoXCI6XCLDsFwiLFwiJmV0aDtcIjpcIsOwXCIsXCImZXVtbFwiOlwiw6tcIixcIiZldW1sO1wiOlwiw6tcIixcIiZldXJvO1wiOlwi4oKsXCIsXCImZXhjbDtcIjpcIiFcIixcIiZleGlzdDtcIjpcIuKIg1wiLFwiJmV4cGVjdGF0aW9uO1wiOlwi4oSwXCIsXCImZXhwb25lbnRpYWxlO1wiOlwi4oWHXCIsXCImZmFsbGluZ2RvdHNlcTtcIjpcIuKJklwiLFwiJmZjeTtcIjpcItGEXCIsXCImZmVtYWxlO1wiOlwi4pmAXCIsXCImZmZpbGlnO1wiOlwi76yDXCIsXCImZmZsaWc7XCI6XCLvrIBcIixcIiZmZmxsaWc7XCI6XCLvrIRcIixcIiZmZnI7XCI6XCLwnZSjXCIsXCImZmlsaWc7XCI6XCLvrIFcIixcIiZmamxpZztcIjpcImZqXCIsXCImZmxhdDtcIjpcIuKZrVwiLFwiJmZsbGlnO1wiOlwi76yCXCIsXCImZmx0bnM7XCI6XCLilrFcIixcIiZmbm9mO1wiOlwixpJcIixcIiZmb3BmO1wiOlwi8J2Vl1wiLFwiJmZvcmFsbDtcIjpcIuKIgFwiLFwiJmZvcms7XCI6XCLii5RcIixcIiZmb3JrdjtcIjpcIuKrmVwiLFwiJmZwYXJ0aW50O1wiOlwi4qiNXCIsXCImZnJhYzEyXCI6XCLCvVwiLFwiJmZyYWMxMjtcIjpcIsK9XCIsXCImZnJhYzEzO1wiOlwi4oWTXCIsXCImZnJhYzE0XCI6XCLCvFwiLFwiJmZyYWMxNDtcIjpcIsK8XCIsXCImZnJhYzE1O1wiOlwi4oWVXCIsXCImZnJhYzE2O1wiOlwi4oWZXCIsXCImZnJhYzE4O1wiOlwi4oWbXCIsXCImZnJhYzIzO1wiOlwi4oWUXCIsXCImZnJhYzI1O1wiOlwi4oWWXCIsXCImZnJhYzM0XCI6XCLCvlwiLFwiJmZyYWMzNDtcIjpcIsK+XCIsXCImZnJhYzM1O1wiOlwi4oWXXCIsXCImZnJhYzM4O1wiOlwi4oWcXCIsXCImZnJhYzQ1O1wiOlwi4oWYXCIsXCImZnJhYzU2O1wiOlwi4oWaXCIsXCImZnJhYzU4O1wiOlwi4oWdXCIsXCImZnJhYzc4O1wiOlwi4oWeXCIsXCImZnJhc2w7XCI6XCLigYRcIixcIiZmcm93bjtcIjpcIuKMolwiLFwiJmZzY3I7XCI6XCLwnZK7XCIsXCImZ0U7XCI6XCLiiadcIixcIiZnRWw7XCI6XCLiqoxcIixcIiZnYWN1dGU7XCI6XCLHtVwiLFwiJmdhbW1hO1wiOlwizrNcIixcIiZnYW1tYWQ7XCI6XCLPnVwiLFwiJmdhcDtcIjpcIuKqhlwiLFwiJmdicmV2ZTtcIjpcIsSfXCIsXCImZ2NpcmM7XCI6XCLEnVwiLFwiJmdjeTtcIjpcItCzXCIsXCImZ2RvdDtcIjpcIsShXCIsXCImZ2U7XCI6XCLiiaVcIixcIiZnZWw7XCI6XCLii5tcIixcIiZnZXE7XCI6XCLiiaVcIixcIiZnZXFxO1wiOlwi4omnXCIsXCImZ2Vxc2xhbnQ7XCI6XCLiqb5cIixcIiZnZXM7XCI6XCLiqb5cIixcIiZnZXNjYztcIjpcIuKqqVwiLFwiJmdlc2RvdDtcIjpcIuKqgFwiLFwiJmdlc2RvdG87XCI6XCLiqoJcIixcIiZnZXNkb3RvbDtcIjpcIuKqhFwiLFwiJmdlc2w7XCI6XCLii5vvuIBcIixcIiZnZXNsZXM7XCI6XCLiqpRcIixcIiZnZnI7XCI6XCLwnZSkXCIsXCImZ2c7XCI6XCLiiatcIixcIiZnZ2c7XCI6XCLii5lcIixcIiZnaW1lbDtcIjpcIuKEt1wiLFwiJmdqY3k7XCI6XCLRk1wiLFwiJmdsO1wiOlwi4om3XCIsXCImZ2xFO1wiOlwi4qqSXCIsXCImZ2xhO1wiOlwi4qqlXCIsXCImZ2xqO1wiOlwi4qqkXCIsXCImZ25FO1wiOlwi4ompXCIsXCImZ25hcDtcIjpcIuKqilwiLFwiJmduYXBwcm94O1wiOlwi4qqKXCIsXCImZ25lO1wiOlwi4qqIXCIsXCImZ25lcTtcIjpcIuKqiFwiLFwiJmduZXFxO1wiOlwi4ompXCIsXCImZ25zaW07XCI6XCLii6dcIixcIiZnb3BmO1wiOlwi8J2VmFwiLFwiJmdyYXZlO1wiOlwiYFwiLFwiJmdzY3I7XCI6XCLihIpcIixcIiZnc2ltO1wiOlwi4omzXCIsXCImZ3NpbWU7XCI6XCLiqo5cIixcIiZnc2ltbDtcIjpcIuKqkFwiLFwiJmd0XCI6XCI+XCIsXCImZ3Q7XCI6XCI+XCIsXCImZ3RjYztcIjpcIuKqp1wiLFwiJmd0Y2lyO1wiOlwi4qm6XCIsXCImZ3Rkb3Q7XCI6XCLii5dcIixcIiZndGxQYXI7XCI6XCLippVcIixcIiZndHF1ZXN0O1wiOlwi4qm8XCIsXCImZ3RyYXBwcm94O1wiOlwi4qqGXCIsXCImZ3RyYXJyO1wiOlwi4qW4XCIsXCImZ3RyZG90O1wiOlwi4ouXXCIsXCImZ3RyZXFsZXNzO1wiOlwi4oubXCIsXCImZ3RyZXFxbGVzcztcIjpcIuKqjFwiLFwiJmd0cmxlc3M7XCI6XCLiibdcIixcIiZndHJzaW07XCI6XCLiibNcIixcIiZndmVydG5lcXE7XCI6XCLiianvuIBcIixcIiZndm5FO1wiOlwi4omp77iAXCIsXCImaEFycjtcIjpcIuKHlFwiLFwiJmhhaXJzcDtcIjpcIuKAilwiLFwiJmhhbGY7XCI6XCLCvVwiLFwiJmhhbWlsdDtcIjpcIuKEi1wiLFwiJmhhcmRjeTtcIjpcItGKXCIsXCImaGFycjtcIjpcIuKGlFwiLFwiJmhhcnJjaXI7XCI6XCLipYhcIixcIiZoYXJydztcIjpcIuKGrVwiLFwiJmhiYXI7XCI6XCLihI9cIixcIiZoY2lyYztcIjpcIsSlXCIsXCImaGVhcnRzO1wiOlwi4pmlXCIsXCImaGVhcnRzdWl0O1wiOlwi4pmlXCIsXCImaGVsbGlwO1wiOlwi4oCmXCIsXCImaGVyY29uO1wiOlwi4oq5XCIsXCImaGZyO1wiOlwi8J2UpVwiLFwiJmhrc2Vhcm93O1wiOlwi4qSlXCIsXCImaGtzd2Fyb3c7XCI6XCLipKZcIixcIiZob2FycjtcIjpcIuKHv1wiLFwiJmhvbXRodDtcIjpcIuKIu1wiLFwiJmhvb2tsZWZ0YXJyb3c7XCI6XCLihqlcIixcIiZob29rcmlnaHRhcnJvdztcIjpcIuKGqlwiLFwiJmhvcGY7XCI6XCLwnZWZXCIsXCImaG9yYmFyO1wiOlwi4oCVXCIsXCImaHNjcjtcIjpcIvCdkr1cIixcIiZoc2xhc2g7XCI6XCLihI9cIixcIiZoc3Ryb2s7XCI6XCLEp1wiLFwiJmh5YnVsbDtcIjpcIuKBg1wiLFwiJmh5cGhlbjtcIjpcIuKAkFwiLFwiJmlhY3V0ZVwiOlwiw61cIixcIiZpYWN1dGU7XCI6XCLDrVwiLFwiJmljO1wiOlwi4oGjXCIsXCImaWNpcmNcIjpcIsOuXCIsXCImaWNpcmM7XCI6XCLDrlwiLFwiJmljeTtcIjpcItC4XCIsXCImaWVjeTtcIjpcItC1XCIsXCImaWV4Y2xcIjpcIsKhXCIsXCImaWV4Y2w7XCI6XCLCoVwiLFwiJmlmZjtcIjpcIuKHlFwiLFwiJmlmcjtcIjpcIvCdlKZcIixcIiZpZ3JhdmVcIjpcIsOsXCIsXCImaWdyYXZlO1wiOlwiw6xcIixcIiZpaTtcIjpcIuKFiFwiLFwiJmlpaWludDtcIjpcIuKojFwiLFwiJmlpaW50O1wiOlwi4oitXCIsXCImaWluZmluO1wiOlwi4qecXCIsXCImaWlvdGE7XCI6XCLihKlcIixcIiZpamxpZztcIjpcIsSzXCIsXCImaW1hY3I7XCI6XCLEq1wiLFwiJmltYWdlO1wiOlwi4oSRXCIsXCImaW1hZ2xpbmU7XCI6XCLihJBcIixcIiZpbWFncGFydDtcIjpcIuKEkVwiLFwiJmltYXRoO1wiOlwixLFcIixcIiZpbW9mO1wiOlwi4oq3XCIsXCImaW1wZWQ7XCI6XCLGtVwiLFwiJmluO1wiOlwi4oiIXCIsXCImaW5jYXJlO1wiOlwi4oSFXCIsXCImaW5maW47XCI6XCLiiJ5cIixcIiZpbmZpbnRpZTtcIjpcIuKnnVwiLFwiJmlub2RvdDtcIjpcIsSxXCIsXCImaW50O1wiOlwi4oirXCIsXCImaW50Y2FsO1wiOlwi4oq6XCIsXCImaW50ZWdlcnM7XCI6XCLihKRcIixcIiZpbnRlcmNhbDtcIjpcIuKKulwiLFwiJmludGxhcmhrO1wiOlwi4qiXXCIsXCImaW50cHJvZDtcIjpcIuKovFwiLFwiJmlvY3k7XCI6XCLRkVwiLFwiJmlvZ29uO1wiOlwixK9cIixcIiZpb3BmO1wiOlwi8J2VmlwiLFwiJmlvdGE7XCI6XCLOuVwiLFwiJmlwcm9kO1wiOlwi4qi8XCIsXCImaXF1ZXN0XCI6XCLCv1wiLFwiJmlxdWVzdDtcIjpcIsK/XCIsXCImaXNjcjtcIjpcIvCdkr5cIixcIiZpc2luO1wiOlwi4oiIXCIsXCImaXNpbkU7XCI6XCLii7lcIixcIiZpc2luZG90O1wiOlwi4ou1XCIsXCImaXNpbnM7XCI6XCLii7RcIixcIiZpc2luc3Y7XCI6XCLii7NcIixcIiZpc2ludjtcIjpcIuKIiFwiLFwiJml0O1wiOlwi4oGiXCIsXCImaXRpbGRlO1wiOlwixKlcIixcIiZpdWtjeTtcIjpcItGWXCIsXCImaXVtbFwiOlwiw69cIixcIiZpdW1sO1wiOlwiw69cIixcIiZqY2lyYztcIjpcIsS1XCIsXCImamN5O1wiOlwi0LlcIixcIiZqZnI7XCI6XCLwnZSnXCIsXCImam1hdGg7XCI6XCLIt1wiLFwiJmpvcGY7XCI6XCLwnZWbXCIsXCImanNjcjtcIjpcIvCdkr9cIixcIiZqc2VyY3k7XCI6XCLRmFwiLFwiJmp1a2N5O1wiOlwi0ZRcIixcIiZrYXBwYTtcIjpcIs66XCIsXCIma2FwcGF2O1wiOlwiz7BcIixcIiZrY2VkaWw7XCI6XCLEt1wiLFwiJmtjeTtcIjpcItC6XCIsXCIma2ZyO1wiOlwi8J2UqFwiLFwiJmtncmVlbjtcIjpcIsS4XCIsXCIma2hjeTtcIjpcItGFXCIsXCIma2pjeTtcIjpcItGcXCIsXCIma29wZjtcIjpcIvCdlZxcIixcIiZrc2NyO1wiOlwi8J2TgFwiLFwiJmxBYXJyO1wiOlwi4oeaXCIsXCImbEFycjtcIjpcIuKHkFwiLFwiJmxBdGFpbDtcIjpcIuKkm1wiLFwiJmxCYXJyO1wiOlwi4qSOXCIsXCImbEU7XCI6XCLiiaZcIixcIiZsRWc7XCI6XCLiqotcIixcIiZsSGFyO1wiOlwi4qWiXCIsXCImbGFjdXRlO1wiOlwixLpcIixcIiZsYWVtcHR5djtcIjpcIuKmtFwiLFwiJmxhZ3JhbjtcIjpcIuKEklwiLFwiJmxhbWJkYTtcIjpcIs67XCIsXCImbGFuZztcIjpcIuKfqFwiLFwiJmxhbmdkO1wiOlwi4qaRXCIsXCImbGFuZ2xlO1wiOlwi4p+oXCIsXCImbGFwO1wiOlwi4qqFXCIsXCImbGFxdW9cIjpcIsKrXCIsXCImbGFxdW87XCI6XCLCq1wiLFwiJmxhcnI7XCI6XCLihpBcIixcIiZsYXJyYjtcIjpcIuKHpFwiLFwiJmxhcnJiZnM7XCI6XCLipJ9cIixcIiZsYXJyZnM7XCI6XCLipJ1cIixcIiZsYXJyaGs7XCI6XCLihqlcIixcIiZsYXJybHA7XCI6XCLihqtcIixcIiZsYXJycGw7XCI6XCLipLlcIixcIiZsYXJyc2ltO1wiOlwi4qWzXCIsXCImbGFycnRsO1wiOlwi4oaiXCIsXCImbGF0O1wiOlwi4qqrXCIsXCImbGF0YWlsO1wiOlwi4qSZXCIsXCImbGF0ZTtcIjpcIuKqrVwiLFwiJmxhdGVzO1wiOlwi4qqt77iAXCIsXCImbGJhcnI7XCI6XCLipIxcIixcIiZsYmJyaztcIjpcIuKdslwiLFwiJmxicmFjZTtcIjpcIntcIixcIiZsYnJhY2s7XCI6XCJbXCIsXCImbGJya2U7XCI6XCLipotcIixcIiZsYnJrc2xkO1wiOlwi4qaPXCIsXCImbGJya3NsdTtcIjpcIuKmjVwiLFwiJmxjYXJvbjtcIjpcIsS+XCIsXCImbGNlZGlsO1wiOlwixLxcIixcIiZsY2VpbDtcIjpcIuKMiFwiLFwiJmxjdWI7XCI6XCJ7XCIsXCImbGN5O1wiOlwi0LtcIixcIiZsZGNhO1wiOlwi4qS2XCIsXCImbGRxdW87XCI6XCLigJxcIixcIiZsZHF1b3I7XCI6XCLigJ5cIixcIiZsZHJkaGFyO1wiOlwi4qWnXCIsXCImbGRydXNoYXI7XCI6XCLipYtcIixcIiZsZHNoO1wiOlwi4oayXCIsXCImbGU7XCI6XCLiiaRcIixcIiZsZWZ0YXJyb3c7XCI6XCLihpBcIixcIiZsZWZ0YXJyb3d0YWlsO1wiOlwi4oaiXCIsXCImbGVmdGhhcnBvb25kb3duO1wiOlwi4oa9XCIsXCImbGVmdGhhcnBvb251cDtcIjpcIuKGvFwiLFwiJmxlZnRsZWZ0YXJyb3dzO1wiOlwi4oeHXCIsXCImbGVmdHJpZ2h0YXJyb3c7XCI6XCLihpRcIixcIiZsZWZ0cmlnaHRhcnJvd3M7XCI6XCLih4ZcIixcIiZsZWZ0cmlnaHRoYXJwb29ucztcIjpcIuKHi1wiLFwiJmxlZnRyaWdodHNxdWlnYXJyb3c7XCI6XCLihq1cIixcIiZsZWZ0dGhyZWV0aW1lcztcIjpcIuKLi1wiLFwiJmxlZztcIjpcIuKLmlwiLFwiJmxlcTtcIjpcIuKJpFwiLFwiJmxlcXE7XCI6XCLiiaZcIixcIiZsZXFzbGFudDtcIjpcIuKpvVwiLFwiJmxlcztcIjpcIuKpvVwiLFwiJmxlc2NjO1wiOlwi4qqoXCIsXCImbGVzZG90O1wiOlwi4qm/XCIsXCImbGVzZG90bztcIjpcIuKqgVwiLFwiJmxlc2RvdG9yO1wiOlwi4qqDXCIsXCImbGVzZztcIjpcIuKLmu+4gFwiLFwiJmxlc2dlcztcIjpcIuKqk1wiLFwiJmxlc3NhcHByb3g7XCI6XCLiqoVcIixcIiZsZXNzZG90O1wiOlwi4ouWXCIsXCImbGVzc2VxZ3RyO1wiOlwi4ouaXCIsXCImbGVzc2VxcWd0cjtcIjpcIuKqi1wiLFwiJmxlc3NndHI7XCI6XCLiibZcIixcIiZsZXNzc2ltO1wiOlwi4omyXCIsXCImbGZpc2h0O1wiOlwi4qW8XCIsXCImbGZsb29yO1wiOlwi4oyKXCIsXCImbGZyO1wiOlwi8J2UqVwiLFwiJmxnO1wiOlwi4om2XCIsXCImbGdFO1wiOlwi4qqRXCIsXCImbGhhcmQ7XCI6XCLihr1cIixcIiZsaGFydTtcIjpcIuKGvFwiLFwiJmxoYXJ1bDtcIjpcIuKlqlwiLFwiJmxoYmxrO1wiOlwi4paEXCIsXCImbGpjeTtcIjpcItGZXCIsXCImbGw7XCI6XCLiiapcIixcIiZsbGFycjtcIjpcIuKHh1wiLFwiJmxsY29ybmVyO1wiOlwi4oyeXCIsXCImbGxoYXJkO1wiOlwi4qWrXCIsXCImbGx0cmk7XCI6XCLil7pcIixcIiZsbWlkb3Q7XCI6XCLFgFwiLFwiJmxtb3VzdDtcIjpcIuKOsFwiLFwiJmxtb3VzdGFjaGU7XCI6XCLijrBcIixcIiZsbkU7XCI6XCLiiahcIixcIiZsbmFwO1wiOlwi4qqJXCIsXCImbG5hcHByb3g7XCI6XCLiqolcIixcIiZsbmU7XCI6XCLiqodcIixcIiZsbmVxO1wiOlwi4qqHXCIsXCImbG5lcXE7XCI6XCLiiahcIixcIiZsbnNpbTtcIjpcIuKLplwiLFwiJmxvYW5nO1wiOlwi4p+sXCIsXCImbG9hcnI7XCI6XCLih71cIixcIiZsb2JyaztcIjpcIuKfplwiLFwiJmxvbmdsZWZ0YXJyb3c7XCI6XCLin7VcIixcIiZsb25nbGVmdHJpZ2h0YXJyb3c7XCI6XCLin7dcIixcIiZsb25nbWFwc3RvO1wiOlwi4p+8XCIsXCImbG9uZ3JpZ2h0YXJyb3c7XCI6XCLin7ZcIixcIiZsb29wYXJyb3dsZWZ0O1wiOlwi4oarXCIsXCImbG9vcGFycm93cmlnaHQ7XCI6XCLihqxcIixcIiZsb3BhcjtcIjpcIuKmhVwiLFwiJmxvcGY7XCI6XCLwnZWdXCIsXCImbG9wbHVzO1wiOlwi4qitXCIsXCImbG90aW1lcztcIjpcIuKotFwiLFwiJmxvd2FzdDtcIjpcIuKIl1wiLFwiJmxvd2JhcjtcIjpcIl9cIixcIiZsb3o7XCI6XCLil4pcIixcIiZsb3plbmdlO1wiOlwi4peKXCIsXCImbG96ZjtcIjpcIuKnq1wiLFwiJmxwYXI7XCI6XCIoXCIsXCImbHBhcmx0O1wiOlwi4qaTXCIsXCImbHJhcnI7XCI6XCLih4ZcIixcIiZscmNvcm5lcjtcIjpcIuKMn1wiLFwiJmxyaGFyO1wiOlwi4oeLXCIsXCImbHJoYXJkO1wiOlwi4qWtXCIsXCImbHJtO1wiOlwi4oCOXCIsXCImbHJ0cmk7XCI6XCLiir9cIixcIiZsc2FxdW87XCI6XCLigLlcIixcIiZsc2NyO1wiOlwi8J2TgVwiLFwiJmxzaDtcIjpcIuKGsFwiLFwiJmxzaW07XCI6XCLiibJcIixcIiZsc2ltZTtcIjpcIuKqjVwiLFwiJmxzaW1nO1wiOlwi4qqPXCIsXCImbHNxYjtcIjpcIltcIixcIiZsc3F1bztcIjpcIuKAmFwiLFwiJmxzcXVvcjtcIjpcIuKAmlwiLFwiJmxzdHJvaztcIjpcIsWCXCIsXCImbHRcIjpcIjxcIixcIiZsdDtcIjpcIjxcIixcIiZsdGNjO1wiOlwi4qqmXCIsXCImbHRjaXI7XCI6XCLiqblcIixcIiZsdGRvdDtcIjpcIuKLllwiLFwiJmx0aHJlZTtcIjpcIuKLi1wiLFwiJmx0aW1lcztcIjpcIuKLiVwiLFwiJmx0bGFycjtcIjpcIuKltlwiLFwiJmx0cXVlc3Q7XCI6XCLiqbtcIixcIiZsdHJQYXI7XCI6XCLippZcIixcIiZsdHJpO1wiOlwi4peDXCIsXCImbHRyaWU7XCI6XCLiirRcIixcIiZsdHJpZjtcIjpcIuKXglwiLFwiJmx1cmRzaGFyO1wiOlwi4qWKXCIsXCImbHVydWhhcjtcIjpcIuKlplwiLFwiJmx2ZXJ0bmVxcTtcIjpcIuKJqO+4gFwiLFwiJmx2bkU7XCI6XCLiiajvuIBcIixcIiZtRERvdDtcIjpcIuKIulwiLFwiJm1hY3JcIjpcIsKvXCIsXCImbWFjcjtcIjpcIsKvXCIsXCImbWFsZTtcIjpcIuKZglwiLFwiJm1hbHQ7XCI6XCLinKBcIixcIiZtYWx0ZXNlO1wiOlwi4pygXCIsXCImbWFwO1wiOlwi4oamXCIsXCImbWFwc3RvO1wiOlwi4oamXCIsXCImbWFwc3RvZG93bjtcIjpcIuKGp1wiLFwiJm1hcHN0b2xlZnQ7XCI6XCLihqRcIixcIiZtYXBzdG91cDtcIjpcIuKGpVwiLFwiJm1hcmtlcjtcIjpcIuKWrlwiLFwiJm1jb21tYTtcIjpcIuKoqVwiLFwiJm1jeTtcIjpcItC8XCIsXCImbWRhc2g7XCI6XCLigJRcIixcIiZtZWFzdXJlZGFuZ2xlO1wiOlwi4oihXCIsXCImbWZyO1wiOlwi8J2UqlwiLFwiJm1obztcIjpcIuKEp1wiLFwiJm1pY3JvXCI6XCLCtVwiLFwiJm1pY3JvO1wiOlwiwrVcIixcIiZtaWQ7XCI6XCLiiKNcIixcIiZtaWRhc3Q7XCI6XCIqXCIsXCImbWlkY2lyO1wiOlwi4quwXCIsXCImbWlkZG90XCI6XCLCt1wiLFwiJm1pZGRvdDtcIjpcIsK3XCIsXCImbWludXM7XCI6XCLiiJJcIixcIiZtaW51c2I7XCI6XCLiip9cIixcIiZtaW51c2Q7XCI6XCLiiLhcIixcIiZtaW51c2R1O1wiOlwi4qiqXCIsXCImbWxjcDtcIjpcIuKrm1wiLFwiJm1sZHI7XCI6XCLigKZcIixcIiZtbnBsdXM7XCI6XCLiiJNcIixcIiZtb2RlbHM7XCI6XCLiiqdcIixcIiZtb3BmO1wiOlwi8J2VnlwiLFwiJm1wO1wiOlwi4oiTXCIsXCImbXNjcjtcIjpcIvCdk4JcIixcIiZtc3Rwb3M7XCI6XCLiiL5cIixcIiZtdTtcIjpcIs68XCIsXCImbXVsdGltYXA7XCI6XCLiirhcIixcIiZtdW1hcDtcIjpcIuKKuFwiLFwiJm5HZztcIjpcIuKLmcy4XCIsXCImbkd0O1wiOlwi4omr4oOSXCIsXCImbkd0djtcIjpcIuKJq8y4XCIsXCImbkxlZnRhcnJvdztcIjpcIuKHjVwiLFwiJm5MZWZ0cmlnaHRhcnJvdztcIjpcIuKHjlwiLFwiJm5MbDtcIjpcIuKLmMy4XCIsXCImbkx0O1wiOlwi4omq4oOSXCIsXCImbkx0djtcIjpcIuKJqsy4XCIsXCImblJpZ2h0YXJyb3c7XCI6XCLih49cIixcIiZuVkRhc2g7XCI6XCLiiq9cIixcIiZuVmRhc2g7XCI6XCLiiq5cIixcIiZuYWJsYTtcIjpcIuKIh1wiLFwiJm5hY3V0ZTtcIjpcIsWEXCIsXCImbmFuZztcIjpcIuKIoOKDklwiLFwiJm5hcDtcIjpcIuKJiVwiLFwiJm5hcEU7XCI6XCLiqbDMuFwiLFwiJm5hcGlkO1wiOlwi4omLzLhcIixcIiZuYXBvcztcIjpcIsWJXCIsXCImbmFwcHJveDtcIjpcIuKJiVwiLFwiJm5hdHVyO1wiOlwi4pmuXCIsXCImbmF0dXJhbDtcIjpcIuKZrlwiLFwiJm5hdHVyYWxzO1wiOlwi4oSVXCIsXCImbmJzcFwiOlwiwqBcIixcIiZuYnNwO1wiOlwiwqBcIixcIiZuYnVtcDtcIjpcIuKJjsy4XCIsXCImbmJ1bXBlO1wiOlwi4omPzLhcIixcIiZuY2FwO1wiOlwi4qmDXCIsXCImbmNhcm9uO1wiOlwixYhcIixcIiZuY2VkaWw7XCI6XCLFhlwiLFwiJm5jb25nO1wiOlwi4omHXCIsXCImbmNvbmdkb3Q7XCI6XCLiqa3MuFwiLFwiJm5jdXA7XCI6XCLiqYJcIixcIiZuY3k7XCI6XCLQvVwiLFwiJm5kYXNoO1wiOlwi4oCTXCIsXCImbmU7XCI6XCLiiaBcIixcIiZuZUFycjtcIjpcIuKHl1wiLFwiJm5lYXJoaztcIjpcIuKkpFwiLFwiJm5lYXJyO1wiOlwi4oaXXCIsXCImbmVhcnJvdztcIjpcIuKGl1wiLFwiJm5lZG90O1wiOlwi4omQzLhcIixcIiZuZXF1aXY7XCI6XCLiiaJcIixcIiZuZXNlYXI7XCI6XCLipKhcIixcIiZuZXNpbTtcIjpcIuKJgsy4XCIsXCImbmV4aXN0O1wiOlwi4oiEXCIsXCImbmV4aXN0cztcIjpcIuKIhFwiLFwiJm5mcjtcIjpcIvCdlKtcIixcIiZuZ0U7XCI6XCLiiafMuFwiLFwiJm5nZTtcIjpcIuKJsVwiLFwiJm5nZXE7XCI6XCLiibFcIixcIiZuZ2VxcTtcIjpcIuKJp8y4XCIsXCImbmdlcXNsYW50O1wiOlwi4qm+zLhcIixcIiZuZ2VzO1wiOlwi4qm+zLhcIixcIiZuZ3NpbTtcIjpcIuKJtVwiLFwiJm5ndDtcIjpcIuKJr1wiLFwiJm5ndHI7XCI6XCLiia9cIixcIiZuaEFycjtcIjpcIuKHjlwiLFwiJm5oYXJyO1wiOlwi4oauXCIsXCImbmhwYXI7XCI6XCLiq7JcIixcIiZuaTtcIjpcIuKIi1wiLFwiJm5pcztcIjpcIuKLvFwiLFwiJm5pc2Q7XCI6XCLii7pcIixcIiZuaXY7XCI6XCLiiItcIixcIiZuamN5O1wiOlwi0ZpcIixcIiZubEFycjtcIjpcIuKHjVwiLFwiJm5sRTtcIjpcIuKJpsy4XCIsXCImbmxhcnI7XCI6XCLihppcIixcIiZubGRyO1wiOlwi4oClXCIsXCImbmxlO1wiOlwi4omwXCIsXCImbmxlZnRhcnJvdztcIjpcIuKGmlwiLFwiJm5sZWZ0cmlnaHRhcnJvdztcIjpcIuKGrlwiLFwiJm5sZXE7XCI6XCLiibBcIixcIiZubGVxcTtcIjpcIuKJpsy4XCIsXCImbmxlcXNsYW50O1wiOlwi4qm9zLhcIixcIiZubGVzO1wiOlwi4qm9zLhcIixcIiZubGVzcztcIjpcIuKJrlwiLFwiJm5sc2ltO1wiOlwi4om0XCIsXCImbmx0O1wiOlwi4omuXCIsXCImbmx0cmk7XCI6XCLii6pcIixcIiZubHRyaWU7XCI6XCLii6xcIixcIiZubWlkO1wiOlwi4oikXCIsXCImbm9wZjtcIjpcIvCdlZ9cIixcIiZub3RcIjpcIsKsXCIsXCImbm90O1wiOlwiwqxcIixcIiZub3RpbjtcIjpcIuKIiVwiLFwiJm5vdGluRTtcIjpcIuKLucy4XCIsXCImbm90aW5kb3Q7XCI6XCLii7XMuFwiLFwiJm5vdGludmE7XCI6XCLiiIlcIixcIiZub3RpbnZiO1wiOlwi4ou3XCIsXCImbm90aW52YztcIjpcIuKLtlwiLFwiJm5vdG5pO1wiOlwi4oiMXCIsXCImbm90bml2YTtcIjpcIuKIjFwiLFwiJm5vdG5pdmI7XCI6XCLii75cIixcIiZub3RuaXZjO1wiOlwi4ou9XCIsXCImbnBhcjtcIjpcIuKIplwiLFwiJm5wYXJhbGxlbDtcIjpcIuKIplwiLFwiJm5wYXJzbDtcIjpcIuKrveKDpVwiLFwiJm5wYXJ0O1wiOlwi4oiCzLhcIixcIiZucG9saW50O1wiOlwi4qiUXCIsXCImbnByO1wiOlwi4oqAXCIsXCImbnByY3VlO1wiOlwi4ougXCIsXCImbnByZTtcIjpcIuKqr8y4XCIsXCImbnByZWM7XCI6XCLiioBcIixcIiZucHJlY2VxO1wiOlwi4qqvzLhcIixcIiZuckFycjtcIjpcIuKHj1wiLFwiJm5yYXJyO1wiOlwi4oabXCIsXCImbnJhcnJjO1wiOlwi4qSzzLhcIixcIiZucmFycnc7XCI6XCLihp3MuFwiLFwiJm5yaWdodGFycm93O1wiOlwi4oabXCIsXCImbnJ0cmk7XCI6XCLii6tcIixcIiZucnRyaWU7XCI6XCLii61cIixcIiZuc2M7XCI6XCLiioFcIixcIiZuc2NjdWU7XCI6XCLii6FcIixcIiZuc2NlO1wiOlwi4qqwzLhcIixcIiZuc2NyO1wiOlwi8J2Tg1wiLFwiJm5zaG9ydG1pZDtcIjpcIuKIpFwiLFwiJm5zaG9ydHBhcmFsbGVsO1wiOlwi4oimXCIsXCImbnNpbTtcIjpcIuKJgVwiLFwiJm5zaW1lO1wiOlwi4omEXCIsXCImbnNpbWVxO1wiOlwi4omEXCIsXCImbnNtaWQ7XCI6XCLiiKRcIixcIiZuc3BhcjtcIjpcIuKIplwiLFwiJm5zcXN1YmU7XCI6XCLii6JcIixcIiZuc3FzdXBlO1wiOlwi4oujXCIsXCImbnN1YjtcIjpcIuKKhFwiLFwiJm5zdWJFO1wiOlwi4quFzLhcIixcIiZuc3ViZTtcIjpcIuKKiFwiLFwiJm5zdWJzZXQ7XCI6XCLiioLig5JcIixcIiZuc3Vic2V0ZXE7XCI6XCLiiohcIixcIiZuc3Vic2V0ZXFxO1wiOlwi4quFzLhcIixcIiZuc3VjYztcIjpcIuKKgVwiLFwiJm5zdWNjZXE7XCI6XCLiqrDMuFwiLFwiJm5zdXA7XCI6XCLiioVcIixcIiZuc3VwRTtcIjpcIuKrhsy4XCIsXCImbnN1cGU7XCI6XCLiiolcIixcIiZuc3Vwc2V0O1wiOlwi4oqD4oOSXCIsXCImbnN1cHNldGVxO1wiOlwi4oqJXCIsXCImbnN1cHNldGVxcTtcIjpcIuKrhsy4XCIsXCImbnRnbDtcIjpcIuKJuVwiLFwiJm50aWxkZVwiOlwiw7FcIixcIiZudGlsZGU7XCI6XCLDsVwiLFwiJm50bGc7XCI6XCLiibhcIixcIiZudHJpYW5nbGVsZWZ0O1wiOlwi4ouqXCIsXCImbnRyaWFuZ2xlbGVmdGVxO1wiOlwi4ousXCIsXCImbnRyaWFuZ2xlcmlnaHQ7XCI6XCLii6tcIixcIiZudHJpYW5nbGVyaWdodGVxO1wiOlwi4outXCIsXCImbnU7XCI6XCLOvVwiLFwiJm51bTtcIjpcIiNcIixcIiZudW1lcm87XCI6XCLihJZcIixcIiZudW1zcDtcIjpcIuKAh1wiLFwiJm52RGFzaDtcIjpcIuKKrVwiLFwiJm52SGFycjtcIjpcIuKkhFwiLFwiJm52YXA7XCI6XCLiiY3ig5JcIixcIiZudmRhc2g7XCI6XCLiiqxcIixcIiZudmdlO1wiOlwi4oml4oOSXCIsXCImbnZndDtcIjpcIj7ig5JcIixcIiZudmluZmluO1wiOlwi4qeeXCIsXCImbnZsQXJyO1wiOlwi4qSCXCIsXCImbnZsZTtcIjpcIuKJpOKDklwiLFwiJm52bHQ7XCI6XCI84oOSXCIsXCImbnZsdHJpZTtcIjpcIuKKtOKDklwiLFwiJm52ckFycjtcIjpcIuKkg1wiLFwiJm52cnRyaWU7XCI6XCLiirXig5JcIixcIiZudnNpbTtcIjpcIuKIvOKDklwiLFwiJm53QXJyO1wiOlwi4oeWXCIsXCImbndhcmhrO1wiOlwi4qSjXCIsXCImbndhcnI7XCI6XCLihpZcIixcIiZud2Fycm93O1wiOlwi4oaWXCIsXCImbnduZWFyO1wiOlwi4qSnXCIsXCImb1M7XCI6XCLik4hcIixcIiZvYWN1dGVcIjpcIsOzXCIsXCImb2FjdXRlO1wiOlwiw7NcIixcIiZvYXN0O1wiOlwi4oqbXCIsXCImb2NpcjtcIjpcIuKKmlwiLFwiJm9jaXJjXCI6XCLDtFwiLFwiJm9jaXJjO1wiOlwiw7RcIixcIiZvY3k7XCI6XCLQvlwiLFwiJm9kYXNoO1wiOlwi4oqdXCIsXCImb2RibGFjO1wiOlwixZFcIixcIiZvZGl2O1wiOlwi4qi4XCIsXCImb2RvdDtcIjpcIuKKmVwiLFwiJm9kc29sZDtcIjpcIuKmvFwiLFwiJm9lbGlnO1wiOlwixZNcIixcIiZvZmNpcjtcIjpcIuKmv1wiLFwiJm9mcjtcIjpcIvCdlKxcIixcIiZvZ29uO1wiOlwiy5tcIixcIiZvZ3JhdmVcIjpcIsOyXCIsXCImb2dyYXZlO1wiOlwiw7JcIixcIiZvZ3Q7XCI6XCLip4FcIixcIiZvaGJhcjtcIjpcIuKmtVwiLFwiJm9obTtcIjpcIs6pXCIsXCImb2ludDtcIjpcIuKIrlwiLFwiJm9sYXJyO1wiOlwi4oa6XCIsXCImb2xjaXI7XCI6XCLipr5cIixcIiZvbGNyb3NzO1wiOlwi4qa7XCIsXCImb2xpbmU7XCI6XCLigL5cIixcIiZvbHQ7XCI6XCLip4BcIixcIiZvbWFjcjtcIjpcIsWNXCIsXCImb21lZ2E7XCI6XCLPiVwiLFwiJm9taWNyb247XCI6XCLOv1wiLFwiJm9taWQ7XCI6XCLiprZcIixcIiZvbWludXM7XCI6XCLiipZcIixcIiZvb3BmO1wiOlwi8J2VoFwiLFwiJm9wYXI7XCI6XCLiprdcIixcIiZvcGVycDtcIjpcIuKmuVwiLFwiJm9wbHVzO1wiOlwi4oqVXCIsXCImb3I7XCI6XCLiiKhcIixcIiZvcmFycjtcIjpcIuKGu1wiLFwiJm9yZDtcIjpcIuKpnVwiLFwiJm9yZGVyO1wiOlwi4oS0XCIsXCImb3JkZXJvZjtcIjpcIuKEtFwiLFwiJm9yZGZcIjpcIsKqXCIsXCImb3JkZjtcIjpcIsKqXCIsXCImb3JkbVwiOlwiwrpcIixcIiZvcmRtO1wiOlwiwrpcIixcIiZvcmlnb2Y7XCI6XCLiirZcIixcIiZvcm9yO1wiOlwi4qmWXCIsXCImb3JzbG9wZTtcIjpcIuKpl1wiLFwiJm9ydjtcIjpcIuKpm1wiLFwiJm9zY3I7XCI6XCLihLRcIixcIiZvc2xhc2hcIjpcIsO4XCIsXCImb3NsYXNoO1wiOlwiw7hcIixcIiZvc29sO1wiOlwi4oqYXCIsXCImb3RpbGRlXCI6XCLDtVwiLFwiJm90aWxkZTtcIjpcIsO1XCIsXCImb3RpbWVzO1wiOlwi4oqXXCIsXCImb3RpbWVzYXM7XCI6XCLiqLZcIixcIiZvdW1sXCI6XCLDtlwiLFwiJm91bWw7XCI6XCLDtlwiLFwiJm92YmFyO1wiOlwi4oy9XCIsXCImcGFyO1wiOlwi4oilXCIsXCImcGFyYVwiOlwiwrZcIixcIiZwYXJhO1wiOlwiwrZcIixcIiZwYXJhbGxlbDtcIjpcIuKIpVwiLFwiJnBhcnNpbTtcIjpcIuKrs1wiLFwiJnBhcnNsO1wiOlwi4qu9XCIsXCImcGFydDtcIjpcIuKIglwiLFwiJnBjeTtcIjpcItC/XCIsXCImcGVyY250O1wiOlwiJVwiLFwiJnBlcmlvZDtcIjpcIi5cIixcIiZwZXJtaWw7XCI6XCLigLBcIixcIiZwZXJwO1wiOlwi4oqlXCIsXCImcGVydGVuaztcIjpcIuKAsVwiLFwiJnBmcjtcIjpcIvCdlK1cIixcIiZwaGk7XCI6XCLPhlwiLFwiJnBoaXY7XCI6XCLPlVwiLFwiJnBobW1hdDtcIjpcIuKEs1wiLFwiJnBob25lO1wiOlwi4piOXCIsXCImcGk7XCI6XCLPgFwiLFwiJnBpdGNoZm9yaztcIjpcIuKLlFwiLFwiJnBpdjtcIjpcIs+WXCIsXCImcGxhbmNrO1wiOlwi4oSPXCIsXCImcGxhbmNraDtcIjpcIuKEjlwiLFwiJnBsYW5rdjtcIjpcIuKEj1wiLFwiJnBsdXM7XCI6XCIrXCIsXCImcGx1c2FjaXI7XCI6XCLiqKNcIixcIiZwbHVzYjtcIjpcIuKKnlwiLFwiJnBsdXNjaXI7XCI6XCLiqKJcIixcIiZwbHVzZG87XCI6XCLiiJRcIixcIiZwbHVzZHU7XCI6XCLiqKVcIixcIiZwbHVzZTtcIjpcIuKpslwiLFwiJnBsdXNtblwiOlwiwrFcIixcIiZwbHVzbW47XCI6XCLCsVwiLFwiJnBsdXNzaW07XCI6XCLiqKZcIixcIiZwbHVzdHdvO1wiOlwi4qinXCIsXCImcG07XCI6XCLCsVwiLFwiJnBvaW50aW50O1wiOlwi4qiVXCIsXCImcG9wZjtcIjpcIvCdlaFcIixcIiZwb3VuZFwiOlwiwqNcIixcIiZwb3VuZDtcIjpcIsKjXCIsXCImcHI7XCI6XCLiibpcIixcIiZwckU7XCI6XCLiqrNcIixcIiZwcmFwO1wiOlwi4qq3XCIsXCImcHJjdWU7XCI6XCLiibxcIixcIiZwcmU7XCI6XCLiqq9cIixcIiZwcmVjO1wiOlwi4om6XCIsXCImcHJlY2FwcHJveDtcIjpcIuKqt1wiLFwiJnByZWNjdXJseWVxO1wiOlwi4om8XCIsXCImcHJlY2VxO1wiOlwi4qqvXCIsXCImcHJlY25hcHByb3g7XCI6XCLiqrlcIixcIiZwcmVjbmVxcTtcIjpcIuKqtVwiLFwiJnByZWNuc2ltO1wiOlwi4ouoXCIsXCImcHJlY3NpbTtcIjpcIuKJvlwiLFwiJnByaW1lO1wiOlwi4oCyXCIsXCImcHJpbWVzO1wiOlwi4oSZXCIsXCImcHJuRTtcIjpcIuKqtVwiLFwiJnBybmFwO1wiOlwi4qq5XCIsXCImcHJuc2ltO1wiOlwi4ouoXCIsXCImcHJvZDtcIjpcIuKIj1wiLFwiJnByb2ZhbGFyO1wiOlwi4oyuXCIsXCImcHJvZmxpbmU7XCI6XCLijJJcIixcIiZwcm9mc3VyZjtcIjpcIuKMk1wiLFwiJnByb3A7XCI6XCLiiJ1cIixcIiZwcm9wdG87XCI6XCLiiJ1cIixcIiZwcnNpbTtcIjpcIuKJvlwiLFwiJnBydXJlbDtcIjpcIuKKsFwiLFwiJnBzY3I7XCI6XCLwnZOFXCIsXCImcHNpO1wiOlwiz4hcIixcIiZwdW5jc3A7XCI6XCLigIhcIixcIiZxZnI7XCI6XCLwnZSuXCIsXCImcWludDtcIjpcIuKojFwiLFwiJnFvcGY7XCI6XCLwnZWiXCIsXCImcXByaW1lO1wiOlwi4oGXXCIsXCImcXNjcjtcIjpcIvCdk4ZcIixcIiZxdWF0ZXJuaW9ucztcIjpcIuKEjVwiLFwiJnF1YXRpbnQ7XCI6XCLiqJZcIixcIiZxdWVzdDtcIjpcIj9cIixcIiZxdWVzdGVxO1wiOlwi4omfXCIsXCImcXVvdFwiOidcIicsXCImcXVvdDtcIjonXCInLFwiJnJBYXJyO1wiOlwi4oebXCIsXCImckFycjtcIjpcIuKHklwiLFwiJnJBdGFpbDtcIjpcIuKknFwiLFwiJnJCYXJyO1wiOlwi4qSPXCIsXCImckhhcjtcIjpcIuKlpFwiLFwiJnJhY2U7XCI6XCLiiL3MsVwiLFwiJnJhY3V0ZTtcIjpcIsWVXCIsXCImcmFkaWM7XCI6XCLiiJpcIixcIiZyYWVtcHR5djtcIjpcIuKms1wiLFwiJnJhbmc7XCI6XCLin6lcIixcIiZyYW5nZDtcIjpcIuKmklwiLFwiJnJhbmdlO1wiOlwi4qalXCIsXCImcmFuZ2xlO1wiOlwi4p+pXCIsXCImcmFxdW9cIjpcIsK7XCIsXCImcmFxdW87XCI6XCLCu1wiLFwiJnJhcnI7XCI6XCLihpJcIixcIiZyYXJyYXA7XCI6XCLipbVcIixcIiZyYXJyYjtcIjpcIuKHpVwiLFwiJnJhcnJiZnM7XCI6XCLipKBcIixcIiZyYXJyYztcIjpcIuKks1wiLFwiJnJhcnJmcztcIjpcIuKknlwiLFwiJnJhcnJoaztcIjpcIuKGqlwiLFwiJnJhcnJscDtcIjpcIuKGrFwiLFwiJnJhcnJwbDtcIjpcIuKlhVwiLFwiJnJhcnJzaW07XCI6XCLipbRcIixcIiZyYXJydGw7XCI6XCLihqNcIixcIiZyYXJydztcIjpcIuKGnVwiLFwiJnJhdGFpbDtcIjpcIuKkmlwiLFwiJnJhdGlvO1wiOlwi4oi2XCIsXCImcmF0aW9uYWxzO1wiOlwi4oSaXCIsXCImcmJhcnI7XCI6XCLipI1cIixcIiZyYmJyaztcIjpcIuKds1wiLFwiJnJicmFjZTtcIjpcIn1cIixcIiZyYnJhY2s7XCI6XCJdXCIsXCImcmJya2U7XCI6XCLipoxcIixcIiZyYnJrc2xkO1wiOlwi4qaOXCIsXCImcmJya3NsdTtcIjpcIuKmkFwiLFwiJnJjYXJvbjtcIjpcIsWZXCIsXCImcmNlZGlsO1wiOlwixZdcIixcIiZyY2VpbDtcIjpcIuKMiVwiLFwiJnJjdWI7XCI6XCJ9XCIsXCImcmN5O1wiOlwi0YBcIixcIiZyZGNhO1wiOlwi4qS3XCIsXCImcmRsZGhhcjtcIjpcIuKlqVwiLFwiJnJkcXVvO1wiOlwi4oCdXCIsXCImcmRxdW9yO1wiOlwi4oCdXCIsXCImcmRzaDtcIjpcIuKGs1wiLFwiJnJlYWw7XCI6XCLihJxcIixcIiZyZWFsaW5lO1wiOlwi4oSbXCIsXCImcmVhbHBhcnQ7XCI6XCLihJxcIixcIiZyZWFscztcIjpcIuKEnVwiLFwiJnJlY3Q7XCI6XCLilq1cIixcIiZyZWdcIjpcIsKuXCIsXCImcmVnO1wiOlwiwq5cIixcIiZyZmlzaHQ7XCI6XCLipb1cIixcIiZyZmxvb3I7XCI6XCLijItcIixcIiZyZnI7XCI6XCLwnZSvXCIsXCImcmhhcmQ7XCI6XCLih4FcIixcIiZyaGFydTtcIjpcIuKHgFwiLFwiJnJoYXJ1bDtcIjpcIuKlrFwiLFwiJnJobztcIjpcIs+BXCIsXCImcmhvdjtcIjpcIs+xXCIsXCImcmlnaHRhcnJvdztcIjpcIuKGklwiLFwiJnJpZ2h0YXJyb3d0YWlsO1wiOlwi4oajXCIsXCImcmlnaHRoYXJwb29uZG93bjtcIjpcIuKHgVwiLFwiJnJpZ2h0aGFycG9vbnVwO1wiOlwi4oeAXCIsXCImcmlnaHRsZWZ0YXJyb3dzO1wiOlwi4oeEXCIsXCImcmlnaHRsZWZ0aGFycG9vbnM7XCI6XCLih4xcIixcIiZyaWdodHJpZ2h0YXJyb3dzO1wiOlwi4oeJXCIsXCImcmlnaHRzcXVpZ2Fycm93O1wiOlwi4oadXCIsXCImcmlnaHR0aHJlZXRpbWVzO1wiOlwi4ouMXCIsXCImcmluZztcIjpcIsuaXCIsXCImcmlzaW5nZG90c2VxO1wiOlwi4omTXCIsXCImcmxhcnI7XCI6XCLih4RcIixcIiZybGhhcjtcIjpcIuKHjFwiLFwiJnJsbTtcIjpcIuKAj1wiLFwiJnJtb3VzdDtcIjpcIuKOsVwiLFwiJnJtb3VzdGFjaGU7XCI6XCLijrFcIixcIiZybm1pZDtcIjpcIuKrrlwiLFwiJnJvYW5nO1wiOlwi4p+tXCIsXCImcm9hcnI7XCI6XCLih75cIixcIiZyb2JyaztcIjpcIuKfp1wiLFwiJnJvcGFyO1wiOlwi4qaGXCIsXCImcm9wZjtcIjpcIvCdlaNcIixcIiZyb3BsdXM7XCI6XCLiqK5cIixcIiZyb3RpbWVzO1wiOlwi4qi1XCIsXCImcnBhcjtcIjpcIilcIixcIiZycGFyZ3Q7XCI6XCLippRcIixcIiZycHBvbGludDtcIjpcIuKoklwiLFwiJnJyYXJyO1wiOlwi4oeJXCIsXCImcnNhcXVvO1wiOlwi4oC6XCIsXCImcnNjcjtcIjpcIvCdk4dcIixcIiZyc2g7XCI6XCLihrFcIixcIiZyc3FiO1wiOlwiXVwiLFwiJnJzcXVvO1wiOlwi4oCZXCIsXCImcnNxdW9yO1wiOlwi4oCZXCIsXCImcnRocmVlO1wiOlwi4ouMXCIsXCImcnRpbWVzO1wiOlwi4ouKXCIsXCImcnRyaTtcIjpcIuKWuVwiLFwiJnJ0cmllO1wiOlwi4oq1XCIsXCImcnRyaWY7XCI6XCLilrhcIixcIiZydHJpbHRyaTtcIjpcIuKnjlwiLFwiJnJ1bHVoYXI7XCI6XCLipahcIixcIiZyeDtcIjpcIuKEnlwiLFwiJnNhY3V0ZTtcIjpcIsWbXCIsXCImc2JxdW87XCI6XCLigJpcIixcIiZzYztcIjpcIuKJu1wiLFwiJnNjRTtcIjpcIuKqtFwiLFwiJnNjYXA7XCI6XCLiqrhcIixcIiZzY2Fyb247XCI6XCLFoVwiLFwiJnNjY3VlO1wiOlwi4om9XCIsXCImc2NlO1wiOlwi4qqwXCIsXCImc2NlZGlsO1wiOlwixZ9cIixcIiZzY2lyYztcIjpcIsWdXCIsXCImc2NuRTtcIjpcIuKqtlwiLFwiJnNjbmFwO1wiOlwi4qq6XCIsXCImc2Nuc2ltO1wiOlwi4oupXCIsXCImc2Nwb2xpbnQ7XCI6XCLiqJNcIixcIiZzY3NpbTtcIjpcIuKJv1wiLFwiJnNjeTtcIjpcItGBXCIsXCImc2RvdDtcIjpcIuKLhVwiLFwiJnNkb3RiO1wiOlwi4oqhXCIsXCImc2RvdGU7XCI6XCLiqaZcIixcIiZzZUFycjtcIjpcIuKHmFwiLFwiJnNlYXJoaztcIjpcIuKkpVwiLFwiJnNlYXJyO1wiOlwi4oaYXCIsXCImc2VhcnJvdztcIjpcIuKGmFwiLFwiJnNlY3RcIjpcIsKnXCIsXCImc2VjdDtcIjpcIsKnXCIsXCImc2VtaTtcIjpcIjtcIixcIiZzZXN3YXI7XCI6XCLipKlcIixcIiZzZXRtaW51cztcIjpcIuKIllwiLFwiJnNldG1uO1wiOlwi4oiWXCIsXCImc2V4dDtcIjpcIuKctlwiLFwiJnNmcjtcIjpcIvCdlLBcIixcIiZzZnJvd247XCI6XCLijKJcIixcIiZzaGFycDtcIjpcIuKZr1wiLFwiJnNoY2hjeTtcIjpcItGJXCIsXCImc2hjeTtcIjpcItGIXCIsXCImc2hvcnRtaWQ7XCI6XCLiiKNcIixcIiZzaG9ydHBhcmFsbGVsO1wiOlwi4oilXCIsXCImc2h5XCI6XCLCrVwiLFwiJnNoeTtcIjpcIsKtXCIsXCImc2lnbWE7XCI6XCLPg1wiLFwiJnNpZ21hZjtcIjpcIs+CXCIsXCImc2lnbWF2O1wiOlwiz4JcIixcIiZzaW07XCI6XCLiiLxcIixcIiZzaW1kb3Q7XCI6XCLiqapcIixcIiZzaW1lO1wiOlwi4omDXCIsXCImc2ltZXE7XCI6XCLiiYNcIixcIiZzaW1nO1wiOlwi4qqeXCIsXCImc2ltZ0U7XCI6XCLiqqBcIixcIiZzaW1sO1wiOlwi4qqdXCIsXCImc2ltbEU7XCI6XCLiqp9cIixcIiZzaW1uZTtcIjpcIuKJhlwiLFwiJnNpbXBsdXM7XCI6XCLiqKRcIixcIiZzaW1yYXJyO1wiOlwi4qWyXCIsXCImc2xhcnI7XCI6XCLihpBcIixcIiZzbWFsbHNldG1pbnVzO1wiOlwi4oiWXCIsXCImc21hc2hwO1wiOlwi4qizXCIsXCImc21lcGFyc2w7XCI6XCLip6RcIixcIiZzbWlkO1wiOlwi4oijXCIsXCImc21pbGU7XCI6XCLijKNcIixcIiZzbXQ7XCI6XCLiqqpcIixcIiZzbXRlO1wiOlwi4qqsXCIsXCImc210ZXM7XCI6XCLiqqzvuIBcIixcIiZzb2Z0Y3k7XCI6XCLRjFwiLFwiJnNvbDtcIjpcIi9cIixcIiZzb2xiO1wiOlwi4qeEXCIsXCImc29sYmFyO1wiOlwi4oy/XCIsXCImc29wZjtcIjpcIvCdlaRcIixcIiZzcGFkZXM7XCI6XCLimaBcIixcIiZzcGFkZXN1aXQ7XCI6XCLimaBcIixcIiZzcGFyO1wiOlwi4oilXCIsXCImc3FjYXA7XCI6XCLiipNcIixcIiZzcWNhcHM7XCI6XCLiipPvuIBcIixcIiZzcWN1cDtcIjpcIuKKlFwiLFwiJnNxY3VwcztcIjpcIuKKlO+4gFwiLFwiJnNxc3ViO1wiOlwi4oqPXCIsXCImc3FzdWJlO1wiOlwi4oqRXCIsXCImc3FzdWJzZXQ7XCI6XCLiio9cIixcIiZzcXN1YnNldGVxO1wiOlwi4oqRXCIsXCImc3FzdXA7XCI6XCLiipBcIixcIiZzcXN1cGU7XCI6XCLiipJcIixcIiZzcXN1cHNldDtcIjpcIuKKkFwiLFwiJnNxc3Vwc2V0ZXE7XCI6XCLiipJcIixcIiZzcXU7XCI6XCLilqFcIixcIiZzcXVhcmU7XCI6XCLilqFcIixcIiZzcXVhcmY7XCI6XCLilqpcIixcIiZzcXVmO1wiOlwi4paqXCIsXCImc3JhcnI7XCI6XCLihpJcIixcIiZzc2NyO1wiOlwi8J2TiFwiLFwiJnNzZXRtbjtcIjpcIuKIllwiLFwiJnNzbWlsZTtcIjpcIuKMo1wiLFwiJnNzdGFyZjtcIjpcIuKLhlwiLFwiJnN0YXI7XCI6XCLimIZcIixcIiZzdGFyZjtcIjpcIuKYhVwiLFwiJnN0cmFpZ2h0ZXBzaWxvbjtcIjpcIs+1XCIsXCImc3RyYWlnaHRwaGk7XCI6XCLPlVwiLFwiJnN0cm5zO1wiOlwiwq9cIixcIiZzdWI7XCI6XCLiioJcIixcIiZzdWJFO1wiOlwi4quFXCIsXCImc3ViZG90O1wiOlwi4qq9XCIsXCImc3ViZTtcIjpcIuKKhlwiLFwiJnN1YmVkb3Q7XCI6XCLiq4NcIixcIiZzdWJtdWx0O1wiOlwi4quBXCIsXCImc3VibkU7XCI6XCLiq4tcIixcIiZzdWJuZTtcIjpcIuKKilwiLFwiJnN1YnBsdXM7XCI6XCLiqr9cIixcIiZzdWJyYXJyO1wiOlwi4qW5XCIsXCImc3Vic2V0O1wiOlwi4oqCXCIsXCImc3Vic2V0ZXE7XCI6XCLiioZcIixcIiZzdWJzZXRlcXE7XCI6XCLiq4VcIixcIiZzdWJzZXRuZXE7XCI6XCLiiopcIixcIiZzdWJzZXRuZXFxO1wiOlwi4quLXCIsXCImc3Vic2ltO1wiOlwi4quHXCIsXCImc3Vic3ViO1wiOlwi4quVXCIsXCImc3Vic3VwO1wiOlwi4quTXCIsXCImc3VjYztcIjpcIuKJu1wiLFwiJnN1Y2NhcHByb3g7XCI6XCLiqrhcIixcIiZzdWNjY3VybHllcTtcIjpcIuKJvVwiLFwiJnN1Y2NlcTtcIjpcIuKqsFwiLFwiJnN1Y2NuYXBwcm94O1wiOlwi4qq6XCIsXCImc3VjY25lcXE7XCI6XCLiqrZcIixcIiZzdWNjbnNpbTtcIjpcIuKLqVwiLFwiJnN1Y2NzaW07XCI6XCLiib9cIixcIiZzdW07XCI6XCLiiJFcIixcIiZzdW5nO1wiOlwi4pmqXCIsXCImc3VwMVwiOlwiwrlcIixcIiZzdXAxO1wiOlwiwrlcIixcIiZzdXAyXCI6XCLCslwiLFwiJnN1cDI7XCI6XCLCslwiLFwiJnN1cDNcIjpcIsKzXCIsXCImc3VwMztcIjpcIsKzXCIsXCImc3VwO1wiOlwi4oqDXCIsXCImc3VwRTtcIjpcIuKrhlwiLFwiJnN1cGRvdDtcIjpcIuKqvlwiLFwiJnN1cGRzdWI7XCI6XCLiq5hcIixcIiZzdXBlO1wiOlwi4oqHXCIsXCImc3VwZWRvdDtcIjpcIuKrhFwiLFwiJnN1cGhzb2w7XCI6XCLin4lcIixcIiZzdXBoc3ViO1wiOlwi4quXXCIsXCImc3VwbGFycjtcIjpcIuKlu1wiLFwiJnN1cG11bHQ7XCI6XCLiq4JcIixcIiZzdXBuRTtcIjpcIuKrjFwiLFwiJnN1cG5lO1wiOlwi4oqLXCIsXCImc3VwcGx1cztcIjpcIuKrgFwiLFwiJnN1cHNldDtcIjpcIuKKg1wiLFwiJnN1cHNldGVxO1wiOlwi4oqHXCIsXCImc3Vwc2V0ZXFxO1wiOlwi4quGXCIsXCImc3Vwc2V0bmVxO1wiOlwi4oqLXCIsXCImc3Vwc2V0bmVxcTtcIjpcIuKrjFwiLFwiJnN1cHNpbTtcIjpcIuKriFwiLFwiJnN1cHN1YjtcIjpcIuKrlFwiLFwiJnN1cHN1cDtcIjpcIuKrllwiLFwiJnN3QXJyO1wiOlwi4oeZXCIsXCImc3dhcmhrO1wiOlwi4qSmXCIsXCImc3dhcnI7XCI6XCLihplcIixcIiZzd2Fycm93O1wiOlwi4oaZXCIsXCImc3dud2FyO1wiOlwi4qSqXCIsXCImc3psaWdcIjpcIsOfXCIsXCImc3psaWc7XCI6XCLDn1wiLFwiJnRhcmdldDtcIjpcIuKMllwiLFwiJnRhdTtcIjpcIs+EXCIsXCImdGJyaztcIjpcIuKOtFwiLFwiJnRjYXJvbjtcIjpcIsWlXCIsXCImdGNlZGlsO1wiOlwixaNcIixcIiZ0Y3k7XCI6XCLRglwiLFwiJnRkb3Q7XCI6XCLig5tcIixcIiZ0ZWxyZWM7XCI6XCLijJVcIixcIiZ0ZnI7XCI6XCLwnZSxXCIsXCImdGhlcmU0O1wiOlwi4oi0XCIsXCImdGhlcmVmb3JlO1wiOlwi4oi0XCIsXCImdGhldGE7XCI6XCLOuFwiLFwiJnRoZXRhc3ltO1wiOlwiz5FcIixcIiZ0aGV0YXY7XCI6XCLPkVwiLFwiJnRoaWNrYXBwcm94O1wiOlwi4omIXCIsXCImdGhpY2tzaW07XCI6XCLiiLxcIixcIiZ0aGluc3A7XCI6XCLigIlcIixcIiZ0aGthcDtcIjpcIuKJiFwiLFwiJnRoa3NpbTtcIjpcIuKIvFwiLFwiJnRob3JuXCI6XCLDvlwiLFwiJnRob3JuO1wiOlwiw75cIixcIiZ0aWxkZTtcIjpcIsucXCIsXCImdGltZXNcIjpcIsOXXCIsXCImdGltZXM7XCI6XCLDl1wiLFwiJnRpbWVzYjtcIjpcIuKKoFwiLFwiJnRpbWVzYmFyO1wiOlwi4qixXCIsXCImdGltZXNkO1wiOlwi4qiwXCIsXCImdGludDtcIjpcIuKIrVwiLFwiJnRvZWE7XCI6XCLipKhcIixcIiZ0b3A7XCI6XCLiiqRcIixcIiZ0b3Bib3Q7XCI6XCLijLZcIixcIiZ0b3BjaXI7XCI6XCLiq7FcIixcIiZ0b3BmO1wiOlwi8J2VpVwiLFwiJnRvcGZvcms7XCI6XCLiq5pcIixcIiZ0b3NhO1wiOlwi4qSpXCIsXCImdHByaW1lO1wiOlwi4oC0XCIsXCImdHJhZGU7XCI6XCLihKJcIixcIiZ0cmlhbmdsZTtcIjpcIuKWtVwiLFwiJnRyaWFuZ2xlZG93bjtcIjpcIuKWv1wiLFwiJnRyaWFuZ2xlbGVmdDtcIjpcIuKXg1wiLFwiJnRyaWFuZ2xlbGVmdGVxO1wiOlwi4oq0XCIsXCImdHJpYW5nbGVxO1wiOlwi4omcXCIsXCImdHJpYW5nbGVyaWdodDtcIjpcIuKWuVwiLFwiJnRyaWFuZ2xlcmlnaHRlcTtcIjpcIuKKtVwiLFwiJnRyaWRvdDtcIjpcIuKXrFwiLFwiJnRyaWU7XCI6XCLiiZxcIixcIiZ0cmltaW51cztcIjpcIuKoulwiLFwiJnRyaXBsdXM7XCI6XCLiqLlcIixcIiZ0cmlzYjtcIjpcIuKnjVwiLFwiJnRyaXRpbWU7XCI6XCLiqLtcIixcIiZ0cnBleml1bTtcIjpcIuKPolwiLFwiJnRzY3I7XCI6XCLwnZOJXCIsXCImdHNjeTtcIjpcItGGXCIsXCImdHNoY3k7XCI6XCLRm1wiLFwiJnRzdHJvaztcIjpcIsWnXCIsXCImdHdpeHQ7XCI6XCLiiaxcIixcIiZ0d29oZWFkbGVmdGFycm93O1wiOlwi4oaeXCIsXCImdHdvaGVhZHJpZ2h0YXJyb3c7XCI6XCLihqBcIixcIiZ1QXJyO1wiOlwi4oeRXCIsXCImdUhhcjtcIjpcIuKlo1wiLFwiJnVhY3V0ZVwiOlwiw7pcIixcIiZ1YWN1dGU7XCI6XCLDulwiLFwiJnVhcnI7XCI6XCLihpFcIixcIiZ1YnJjeTtcIjpcItGeXCIsXCImdWJyZXZlO1wiOlwixa1cIixcIiZ1Y2lyY1wiOlwiw7tcIixcIiZ1Y2lyYztcIjpcIsO7XCIsXCImdWN5O1wiOlwi0YNcIixcIiZ1ZGFycjtcIjpcIuKHhVwiLFwiJnVkYmxhYztcIjpcIsWxXCIsXCImdWRoYXI7XCI6XCLipa5cIixcIiZ1ZmlzaHQ7XCI6XCLipb5cIixcIiZ1ZnI7XCI6XCLwnZSyXCIsXCImdWdyYXZlXCI6XCLDuVwiLFwiJnVncmF2ZTtcIjpcIsO5XCIsXCImdWhhcmw7XCI6XCLihr9cIixcIiZ1aGFycjtcIjpcIuKGvlwiLFwiJnVoYmxrO1wiOlwi4paAXCIsXCImdWxjb3JuO1wiOlwi4oycXCIsXCImdWxjb3JuZXI7XCI6XCLijJxcIixcIiZ1bGNyb3A7XCI6XCLijI9cIixcIiZ1bHRyaTtcIjpcIuKXuFwiLFwiJnVtYWNyO1wiOlwixatcIixcIiZ1bWxcIjpcIsKoXCIsXCImdW1sO1wiOlwiwqhcIixcIiZ1b2dvbjtcIjpcIsWzXCIsXCImdW9wZjtcIjpcIvCdlaZcIixcIiZ1cGFycm93O1wiOlwi4oaRXCIsXCImdXBkb3duYXJyb3c7XCI6XCLihpVcIixcIiZ1cGhhcnBvb25sZWZ0O1wiOlwi4oa/XCIsXCImdXBoYXJwb29ucmlnaHQ7XCI6XCLihr5cIixcIiZ1cGx1cztcIjpcIuKKjlwiLFwiJnVwc2k7XCI6XCLPhVwiLFwiJnVwc2loO1wiOlwiz5JcIixcIiZ1cHNpbG9uO1wiOlwiz4VcIixcIiZ1cHVwYXJyb3dzO1wiOlwi4oeIXCIsXCImdXJjb3JuO1wiOlwi4oydXCIsXCImdXJjb3JuZXI7XCI6XCLijJ1cIixcIiZ1cmNyb3A7XCI6XCLijI5cIixcIiZ1cmluZztcIjpcIsWvXCIsXCImdXJ0cmk7XCI6XCLil7lcIixcIiZ1c2NyO1wiOlwi8J2TilwiLFwiJnV0ZG90O1wiOlwi4ouwXCIsXCImdXRpbGRlO1wiOlwixalcIixcIiZ1dHJpO1wiOlwi4pa1XCIsXCImdXRyaWY7XCI6XCLilrRcIixcIiZ1dWFycjtcIjpcIuKHiFwiLFwiJnV1bWxcIjpcIsO8XCIsXCImdXVtbDtcIjpcIsO8XCIsXCImdXdhbmdsZTtcIjpcIuKmp1wiLFwiJnZBcnI7XCI6XCLih5VcIixcIiZ2QmFyO1wiOlwi4quoXCIsXCImdkJhcnY7XCI6XCLiq6lcIixcIiZ2RGFzaDtcIjpcIuKKqFwiLFwiJnZhbmdydDtcIjpcIuKmnFwiLFwiJnZhcmVwc2lsb247XCI6XCLPtVwiLFwiJnZhcmthcHBhO1wiOlwiz7BcIixcIiZ2YXJub3RoaW5nO1wiOlwi4oiFXCIsXCImdmFycGhpO1wiOlwiz5VcIixcIiZ2YXJwaTtcIjpcIs+WXCIsXCImdmFycHJvcHRvO1wiOlwi4oidXCIsXCImdmFycjtcIjpcIuKGlVwiLFwiJnZhcnJobztcIjpcIs+xXCIsXCImdmFyc2lnbWE7XCI6XCLPglwiLFwiJnZhcnN1YnNldG5lcTtcIjpcIuKKiu+4gFwiLFwiJnZhcnN1YnNldG5lcXE7XCI6XCLiq4vvuIBcIixcIiZ2YXJzdXBzZXRuZXE7XCI6XCLiiovvuIBcIixcIiZ2YXJzdXBzZXRuZXFxO1wiOlwi4quM77iAXCIsXCImdmFydGhldGE7XCI6XCLPkVwiLFwiJnZhcnRyaWFuZ2xlbGVmdDtcIjpcIuKKslwiLFwiJnZhcnRyaWFuZ2xlcmlnaHQ7XCI6XCLiirNcIixcIiZ2Y3k7XCI6XCLQslwiLFwiJnZkYXNoO1wiOlwi4oqiXCIsXCImdmVlO1wiOlwi4oioXCIsXCImdmVlYmFyO1wiOlwi4oq7XCIsXCImdmVlZXE7XCI6XCLiiZpcIixcIiZ2ZWxsaXA7XCI6XCLii65cIixcIiZ2ZXJiYXI7XCI6XCJ8XCIsXCImdmVydDtcIjpcInxcIixcIiZ2ZnI7XCI6XCLwnZSzXCIsXCImdmx0cmk7XCI6XCLiirJcIixcIiZ2bnN1YjtcIjpcIuKKguKDklwiLFwiJnZuc3VwO1wiOlwi4oqD4oOSXCIsXCImdm9wZjtcIjpcIvCdladcIixcIiZ2cHJvcDtcIjpcIuKInVwiLFwiJnZydHJpO1wiOlwi4oqzXCIsXCImdnNjcjtcIjpcIvCdk4tcIixcIiZ2c3VibkU7XCI6XCLiq4vvuIBcIixcIiZ2c3VibmU7XCI6XCLiiorvuIBcIixcIiZ2c3VwbkU7XCI6XCLiq4zvuIBcIixcIiZ2c3VwbmU7XCI6XCLiiovvuIBcIixcIiZ2emlnemFnO1wiOlwi4qaaXCIsXCImd2NpcmM7XCI6XCLFtVwiLFwiJndlZGJhcjtcIjpcIuKpn1wiLFwiJndlZGdlO1wiOlwi4oinXCIsXCImd2VkZ2VxO1wiOlwi4omZXCIsXCImd2VpZXJwO1wiOlwi4oSYXCIsXCImd2ZyO1wiOlwi8J2UtFwiLFwiJndvcGY7XCI6XCLwnZWoXCIsXCImd3A7XCI6XCLihJhcIixcIiZ3cjtcIjpcIuKJgFwiLFwiJndyZWF0aDtcIjpcIuKJgFwiLFwiJndzY3I7XCI6XCLwnZOMXCIsXCImeGNhcDtcIjpcIuKLglwiLFwiJnhjaXJjO1wiOlwi4pevXCIsXCImeGN1cDtcIjpcIuKLg1wiLFwiJnhkdHJpO1wiOlwi4pa9XCIsXCImeGZyO1wiOlwi8J2UtVwiLFwiJnhoQXJyO1wiOlwi4p+6XCIsXCImeGhhcnI7XCI6XCLin7dcIixcIiZ4aTtcIjpcIs6+XCIsXCImeGxBcnI7XCI6XCLin7hcIixcIiZ4bGFycjtcIjpcIuKftVwiLFwiJnhtYXA7XCI6XCLin7xcIixcIiZ4bmlzO1wiOlwi4ou7XCIsXCImeG9kb3Q7XCI6XCLiqIBcIixcIiZ4b3BmO1wiOlwi8J2VqVwiLFwiJnhvcGx1cztcIjpcIuKogVwiLFwiJnhvdGltZTtcIjpcIuKoglwiLFwiJnhyQXJyO1wiOlwi4p+5XCIsXCImeHJhcnI7XCI6XCLin7ZcIixcIiZ4c2NyO1wiOlwi8J2TjVwiLFwiJnhzcWN1cDtcIjpcIuKohlwiLFwiJnh1cGx1cztcIjpcIuKohFwiLFwiJnh1dHJpO1wiOlwi4pazXCIsXCImeHZlZTtcIjpcIuKLgVwiLFwiJnh3ZWRnZTtcIjpcIuKLgFwiLFwiJnlhY3V0ZVwiOlwiw71cIixcIiZ5YWN1dGU7XCI6XCLDvVwiLFwiJnlhY3k7XCI6XCLRj1wiLFwiJnljaXJjO1wiOlwixbdcIixcIiZ5Y3k7XCI6XCLRi1wiLFwiJnllblwiOlwiwqVcIixcIiZ5ZW47XCI6XCLCpVwiLFwiJnlmcjtcIjpcIvCdlLZcIixcIiZ5aWN5O1wiOlwi0ZdcIixcIiZ5b3BmO1wiOlwi8J2VqlwiLFwiJnlzY3I7XCI6XCLwnZOOXCIsXCImeXVjeTtcIjpcItGOXCIsXCImeXVtbFwiOlwiw79cIixcIiZ5dW1sO1wiOlwiw79cIixcIiZ6YWN1dGU7XCI6XCLFulwiLFwiJnpjYXJvbjtcIjpcIsW+XCIsXCImemN5O1wiOlwi0LdcIixcIiZ6ZG90O1wiOlwixbxcIixcIiZ6ZWV0cmY7XCI6XCLihKhcIixcIiZ6ZXRhO1wiOlwizrZcIixcIiZ6ZnI7XCI6XCLwnZS3XCIsXCImemhjeTtcIjpcItC2XCIsXCImemlncmFycjtcIjpcIuKHnVwiLFwiJnpvcGY7XCI6XCLwnZWrXCIsXCImenNjcjtcIjpcIvCdk49cIixcIiZ6d2o7XCI6XCLigI1cIixcIiZ6d25qO1wiOlwi4oCMXCJ9LGNoYXJhY3RlcnM6e1wiw4ZcIjpcIiZBRWxpZztcIixcIiZcIjpcIiZhbXA7XCIsXCLDgVwiOlwiJkFhY3V0ZTtcIixcIsSCXCI6XCImQWJyZXZlO1wiLFwiw4JcIjpcIiZBY2lyYztcIixcItCQXCI6XCImQWN5O1wiLFwi8J2UhFwiOlwiJkFmcjtcIixcIsOAXCI6XCImQWdyYXZlO1wiLFwizpFcIjpcIiZBbHBoYTtcIixcIsSAXCI6XCImQW1hY3I7XCIsXCLiqZNcIjpcIiZBbmQ7XCIsXCLEhFwiOlwiJkFvZ29uO1wiLFwi8J2UuFwiOlwiJkFvcGY7XCIsXCLigaFcIjpcIiZhZjtcIixcIsOFXCI6XCImYW5nc3Q7XCIsXCLwnZKcXCI6XCImQXNjcjtcIixcIuKJlFwiOlwiJmNvbG9uZXE7XCIsXCLDg1wiOlwiJkF0aWxkZTtcIixcIsOEXCI6XCImQXVtbDtcIixcIuKIllwiOlwiJnNzZXRtbjtcIixcIuKrp1wiOlwiJkJhcnY7XCIsXCLijIZcIjpcIiZkb3VibGViYXJ3ZWRnZTtcIixcItCRXCI6XCImQmN5O1wiLFwi4oi1XCI6XCImYmVjYXVzZTtcIixcIuKErFwiOlwiJmJlcm5vdTtcIixcIs6SXCI6XCImQmV0YTtcIixcIvCdlIVcIjpcIiZCZnI7XCIsXCLwnZS5XCI6XCImQm9wZjtcIixcIsuYXCI6XCImYnJldmU7XCIsXCLiiY5cIjpcIiZidW1wO1wiLFwi0KdcIjpcIiZDSGN5O1wiLFwiwqlcIjpcIiZjb3B5O1wiLFwixIZcIjpcIiZDYWN1dGU7XCIsXCLii5JcIjpcIiZDYXA7XCIsXCLihYVcIjpcIiZERDtcIixcIuKErVwiOlwiJkNmcjtcIixcIsSMXCI6XCImQ2Nhcm9uO1wiLFwiw4dcIjpcIiZDY2VkaWw7XCIsXCLEiFwiOlwiJkNjaXJjO1wiLFwi4oiwXCI6XCImQ2NvbmludDtcIixcIsSKXCI6XCImQ2RvdDtcIixcIsK4XCI6XCImY2VkaWw7XCIsXCLCt1wiOlwiJm1pZGRvdDtcIixcIs6nXCI6XCImQ2hpO1wiLFwi4oqZXCI6XCImb2RvdDtcIixcIuKKllwiOlwiJm9taW51cztcIixcIuKKlVwiOlwiJm9wbHVzO1wiLFwi4oqXXCI6XCImb3RpbWVzO1wiLFwi4oiyXCI6XCImY3djb25pbnQ7XCIsXCLigJ1cIjpcIiZyZHF1b3I7XCIsXCLigJlcIjpcIiZyc3F1b3I7XCIsXCLiiLdcIjpcIiZQcm9wb3J0aW9uO1wiLFwi4qm0XCI6XCImQ29sb25lO1wiLFwi4omhXCI6XCImZXF1aXY7XCIsXCLiiK9cIjpcIiZEb3VibGVDb250b3VySW50ZWdyYWw7XCIsXCLiiK5cIjpcIiZvaW50O1wiLFwi4oSCXCI6XCImY29tcGxleGVzO1wiLFwi4oiQXCI6XCImY29wcm9kO1wiLFwi4oizXCI6XCImYXdjb25pbnQ7XCIsXCLiqK9cIjpcIiZDcm9zcztcIixcIvCdkp5cIjpcIiZDc2NyO1wiLFwi4ouTXCI6XCImQ3VwO1wiLFwi4omNXCI6XCImYXN5bXBlcTtcIixcIuKkkVwiOlwiJkREb3RyYWhkO1wiLFwi0IJcIjpcIiZESmN5O1wiLFwi0IVcIjpcIiZEU2N5O1wiLFwi0I9cIjpcIiZEWmN5O1wiLFwi4oChXCI6XCImZGRhZ2dlcjtcIixcIuKGoVwiOlwiJkRhcnI7XCIsXCLiq6RcIjpcIiZEb3VibGVMZWZ0VGVlO1wiLFwixI5cIjpcIiZEY2Fyb247XCIsXCLQlFwiOlwiJkRjeTtcIixcIuKIh1wiOlwiJm5hYmxhO1wiLFwizpRcIjpcIiZEZWx0YTtcIixcIvCdlIdcIjpcIiZEZnI7XCIsXCLCtFwiOlwiJmFjdXRlO1wiLFwiy5lcIjpcIiZkb3Q7XCIsXCLLnVwiOlwiJmRibGFjO1wiLFwiYFwiOlwiJmdyYXZlO1wiLFwiy5xcIjpcIiZ0aWxkZTtcIixcIuKLhFwiOlwiJmRpYW1vbmQ7XCIsXCLihYZcIjpcIiZkZDtcIixcIvCdlLtcIjpcIiZEb3BmO1wiLFwiwqhcIjpcIiZ1bWw7XCIsXCLig5xcIjpcIiZEb3REb3Q7XCIsXCLiiZBcIjpcIiZlc2RvdDtcIixcIuKHk1wiOlwiJmRBcnI7XCIsXCLih5BcIjpcIiZsQXJyO1wiLFwi4oeUXCI6XCImaWZmO1wiLFwi4p+4XCI6XCImeGxBcnI7XCIsXCLin7pcIjpcIiZ4aEFycjtcIixcIuKfuVwiOlwiJnhyQXJyO1wiLFwi4oeSXCI6XCImckFycjtcIixcIuKKqFwiOlwiJnZEYXNoO1wiLFwi4oeRXCI6XCImdUFycjtcIixcIuKHlVwiOlwiJnZBcnI7XCIsXCLiiKVcIjpcIiZzcGFyO1wiLFwi4oaTXCI6XCImZG93bmFycm93O1wiLFwi4qSTXCI6XCImRG93bkFycm93QmFyO1wiLFwi4oe1XCI6XCImZHVhcnI7XCIsXCLMkVwiOlwiJkRvd25CcmV2ZTtcIixcIuKlkFwiOlwiJkRvd25MZWZ0UmlnaHRWZWN0b3I7XCIsXCLipZ5cIjpcIiZEb3duTGVmdFRlZVZlY3RvcjtcIixcIuKGvVwiOlwiJmxoYXJkO1wiLFwi4qWWXCI6XCImRG93bkxlZnRWZWN0b3JCYXI7XCIsXCLipZ9cIjpcIiZEb3duUmlnaHRUZWVWZWN0b3I7XCIsXCLih4FcIjpcIiZyaWdodGhhcnBvb25kb3duO1wiLFwi4qWXXCI6XCImRG93blJpZ2h0VmVjdG9yQmFyO1wiLFwi4oqkXCI6XCImdG9wO1wiLFwi4oanXCI6XCImbWFwc3RvZG93bjtcIixcIvCdkp9cIjpcIiZEc2NyO1wiLFwixJBcIjpcIiZEc3Ryb2s7XCIsXCLFilwiOlwiJkVORztcIixcIsOQXCI6XCImRVRIO1wiLFwiw4lcIjpcIiZFYWN1dGU7XCIsXCLEmlwiOlwiJkVjYXJvbjtcIixcIsOKXCI6XCImRWNpcmM7XCIsXCLQrVwiOlwiJkVjeTtcIixcIsSWXCI6XCImRWRvdDtcIixcIvCdlIhcIjpcIiZFZnI7XCIsXCLDiFwiOlwiJkVncmF2ZTtcIixcIuKIiFwiOlwiJmlzaW52O1wiLFwixJJcIjpcIiZFbWFjcjtcIixcIuKXu1wiOlwiJkVtcHR5U21hbGxTcXVhcmU7XCIsXCLilqtcIjpcIiZFbXB0eVZlcnlTbWFsbFNxdWFyZTtcIixcIsSYXCI6XCImRW9nb247XCIsXCLwnZS8XCI6XCImRW9wZjtcIixcIs6VXCI6XCImRXBzaWxvbjtcIixcIuKptVwiOlwiJkVxdWFsO1wiLFwi4omCXCI6XCImZXNpbTtcIixcIuKHjFwiOlwiJnJsaGFyO1wiLFwi4oSwXCI6XCImZXhwZWN0YXRpb247XCIsXCLiqbNcIjpcIiZFc2ltO1wiLFwizpdcIjpcIiZFdGE7XCIsXCLDi1wiOlwiJkV1bWw7XCIsXCLiiINcIjpcIiZleGlzdDtcIixcIuKFh1wiOlwiJmV4cG9uZW50aWFsZTtcIixcItCkXCI6XCImRmN5O1wiLFwi8J2UiVwiOlwiJkZmcjtcIixcIuKXvFwiOlwiJkZpbGxlZFNtYWxsU3F1YXJlO1wiLFwi4paqXCI6XCImc3F1ZjtcIixcIvCdlL1cIjpcIiZGb3BmO1wiLFwi4oiAXCI6XCImZm9yYWxsO1wiLFwi4oSxXCI6XCImRnNjcjtcIixcItCDXCI6XCImR0pjeTtcIixcIj5cIjpcIiZndDtcIixcIs6TXCI6XCImR2FtbWE7XCIsXCLPnFwiOlwiJkdhbW1hZDtcIixcIsSeXCI6XCImR2JyZXZlO1wiLFwixKJcIjpcIiZHY2VkaWw7XCIsXCLEnFwiOlwiJkdjaXJjO1wiLFwi0JNcIjpcIiZHY3k7XCIsXCLEoFwiOlwiJkdkb3Q7XCIsXCLwnZSKXCI6XCImR2ZyO1wiLFwi4ouZXCI6XCImZ2dnO1wiLFwi8J2UvlwiOlwiJkdvcGY7XCIsXCLiiaVcIjpcIiZnZXE7XCIsXCLii5tcIjpcIiZndHJlcWxlc3M7XCIsXCLiiadcIjpcIiZnZXFxO1wiLFwi4qqiXCI6XCImR3JlYXRlckdyZWF0ZXI7XCIsXCLiibdcIjpcIiZndHJsZXNzO1wiLFwi4qm+XCI6XCImZ2VzO1wiLFwi4omzXCI6XCImZ3Ryc2ltO1wiLFwi8J2SolwiOlwiJkdzY3I7XCIsXCLiiatcIjpcIiZnZztcIixcItCqXCI6XCImSEFSRGN5O1wiLFwiy4dcIjpcIiZjYXJvbjtcIixcIl5cIjpcIiZIYXQ7XCIsXCLEpFwiOlwiJkhjaXJjO1wiLFwi4oSMXCI6XCImUG9pbmNhcmVwbGFuZTtcIixcIuKEi1wiOlwiJmhhbWlsdDtcIixcIuKEjVwiOlwiJnF1YXRlcm5pb25zO1wiLFwi4pSAXCI6XCImYm94aDtcIixcIsSmXCI6XCImSHN0cm9rO1wiLFwi4omPXCI6XCImYnVtcGVxO1wiLFwi0JVcIjpcIiZJRWN5O1wiLFwixLJcIjpcIiZJSmxpZztcIixcItCBXCI6XCImSU9jeTtcIixcIsONXCI6XCImSWFjdXRlO1wiLFwiw45cIjpcIiZJY2lyYztcIixcItCYXCI6XCImSWN5O1wiLFwixLBcIjpcIiZJZG90O1wiLFwi4oSRXCI6XCImaW1hZ3BhcnQ7XCIsXCLDjFwiOlwiJklncmF2ZTtcIixcIsSqXCI6XCImSW1hY3I7XCIsXCLihYhcIjpcIiZpaTtcIixcIuKIrFwiOlwiJkludDtcIixcIuKIq1wiOlwiJmludDtcIixcIuKLglwiOlwiJnhjYXA7XCIsXCLigaNcIjpcIiZpYztcIixcIuKBolwiOlwiJml0O1wiLFwixK5cIjpcIiZJb2dvbjtcIixcIvCdlYBcIjpcIiZJb3BmO1wiLFwizplcIjpcIiZJb3RhO1wiLFwi4oSQXCI6XCImaW1hZ2xpbmU7XCIsXCLEqFwiOlwiJkl0aWxkZTtcIixcItCGXCI6XCImSXVrY3k7XCIsXCLDj1wiOlwiJkl1bWw7XCIsXCLEtFwiOlwiJkpjaXJjO1wiLFwi0JlcIjpcIiZKY3k7XCIsXCLwnZSNXCI6XCImSmZyO1wiLFwi8J2VgVwiOlwiJkpvcGY7XCIsXCLwnZKlXCI6XCImSnNjcjtcIixcItCIXCI6XCImSnNlcmN5O1wiLFwi0IRcIjpcIiZKdWtjeTtcIixcItClXCI6XCImS0hjeTtcIixcItCMXCI6XCImS0pjeTtcIixcIs6aXCI6XCImS2FwcGE7XCIsXCLEtlwiOlwiJktjZWRpbDtcIixcItCaXCI6XCImS2N5O1wiLFwi8J2UjlwiOlwiJktmcjtcIixcIvCdlYJcIjpcIiZLb3BmO1wiLFwi8J2SplwiOlwiJktzY3I7XCIsXCLQiVwiOlwiJkxKY3k7XCIsXCI8XCI6XCImbHQ7XCIsXCLEuVwiOlwiJkxhY3V0ZTtcIixcIs6bXCI6XCImTGFtYmRhO1wiLFwi4p+qXCI6XCImTGFuZztcIixcIuKEklwiOlwiJmxhZ3JhbjtcIixcIuKGnlwiOlwiJnR3b2hlYWRsZWZ0YXJyb3c7XCIsXCLEvVwiOlwiJkxjYXJvbjtcIixcIsS7XCI6XCImTGNlZGlsO1wiLFwi0JtcIjpcIiZMY3k7XCIsXCLin6hcIjpcIiZsYW5nbGU7XCIsXCLihpBcIjpcIiZzbGFycjtcIixcIuKHpFwiOlwiJmxhcnJiO1wiLFwi4oeGXCI6XCImbHJhcnI7XCIsXCLijIhcIjpcIiZsY2VpbDtcIixcIuKfplwiOlwiJmxvYnJrO1wiLFwi4qWhXCI6XCImTGVmdERvd25UZWVWZWN0b3I7XCIsXCLih4NcIjpcIiZkb3duaGFycG9vbmxlZnQ7XCIsXCLipZlcIjpcIiZMZWZ0RG93blZlY3RvckJhcjtcIixcIuKMilwiOlwiJmxmbG9vcjtcIixcIuKGlFwiOlwiJmxlZnRyaWdodGFycm93O1wiLFwi4qWOXCI6XCImTGVmdFJpZ2h0VmVjdG9yO1wiLFwi4oqjXCI6XCImZGFzaHY7XCIsXCLihqRcIjpcIiZtYXBzdG9sZWZ0O1wiLFwi4qWaXCI6XCImTGVmdFRlZVZlY3RvcjtcIixcIuKKslwiOlwiJnZsdHJpO1wiLFwi4qePXCI6XCImTGVmdFRyaWFuZ2xlQmFyO1wiLFwi4oq0XCI6XCImdHJpYW5nbGVsZWZ0ZXE7XCIsXCLipZFcIjpcIiZMZWZ0VXBEb3duVmVjdG9yO1wiLFwi4qWgXCI6XCImTGVmdFVwVGVlVmVjdG9yO1wiLFwi4oa/XCI6XCImdXBoYXJwb29ubGVmdDtcIixcIuKlmFwiOlwiJkxlZnRVcFZlY3RvckJhcjtcIixcIuKGvFwiOlwiJmxoYXJ1O1wiLFwi4qWSXCI6XCImTGVmdFZlY3RvckJhcjtcIixcIuKLmlwiOlwiJmxlc3NlcWd0cjtcIixcIuKJplwiOlwiJmxlcXE7XCIsXCLiibZcIjpcIiZsZztcIixcIuKqoVwiOlwiJkxlc3NMZXNzO1wiLFwi4qm9XCI6XCImbGVzO1wiLFwi4omyXCI6XCImbHNpbTtcIixcIvCdlI9cIjpcIiZMZnI7XCIsXCLii5hcIjpcIiZMbDtcIixcIuKHmlwiOlwiJmxBYXJyO1wiLFwixL9cIjpcIiZMbWlkb3Q7XCIsXCLin7VcIjpcIiZ4bGFycjtcIixcIuKft1wiOlwiJnhoYXJyO1wiLFwi4p+2XCI6XCImeHJhcnI7XCIsXCLwnZWDXCI6XCImTG9wZjtcIixcIuKGmVwiOlwiJnN3YXJyb3c7XCIsXCLihphcIjpcIiZzZWFycm93O1wiLFwi4oawXCI6XCImbHNoO1wiLFwixYFcIjpcIiZMc3Ryb2s7XCIsXCLiiapcIjpcIiZsbDtcIixcIuKkhVwiOlwiJk1hcDtcIixcItCcXCI6XCImTWN5O1wiLFwi4oGfXCI6XCImTWVkaXVtU3BhY2U7XCIsXCLihLNcIjpcIiZwaG1tYXQ7XCIsXCLwnZSQXCI6XCImTWZyO1wiLFwi4oiTXCI6XCImbXA7XCIsXCLwnZWEXCI6XCImTW9wZjtcIixcIs6cXCI6XCImTXU7XCIsXCLQilwiOlwiJk5KY3k7XCIsXCLFg1wiOlwiJk5hY3V0ZTtcIixcIsWHXCI6XCImTmNhcm9uO1wiLFwixYVcIjpcIiZOY2VkaWw7XCIsXCLQnVwiOlwiJk5jeTtcIixcIuKAi1wiOlwiJlplcm9XaWR0aFNwYWNlO1wiLFwiXFxuXCI6XCImTmV3TGluZTtcIixcIvCdlJFcIjpcIiZOZnI7XCIsXCLigaBcIjpcIiZOb0JyZWFrO1wiLFwiwqBcIjpcIiZuYnNwO1wiLFwi4oSVXCI6XCImbmF0dXJhbHM7XCIsXCLiq6xcIjpcIiZOb3Q7XCIsXCLiiaJcIjpcIiZuZXF1aXY7XCIsXCLiia1cIjpcIiZOb3RDdXBDYXA7XCIsXCLiiKZcIjpcIiZuc3BhcjtcIixcIuKIiVwiOlwiJm5vdGludmE7XCIsXCLiiaBcIjpcIiZuZTtcIixcIuKJgsy4XCI6XCImbmVzaW07XCIsXCLiiIRcIjpcIiZuZXhpc3RzO1wiLFwi4omvXCI6XCImbmd0cjtcIixcIuKJsVwiOlwiJm5nZXE7XCIsXCLiiafMuFwiOlwiJm5nZXFxO1wiLFwi4omrzLhcIjpcIiZuR3R2O1wiLFwi4om5XCI6XCImbnRnbDtcIixcIuKpvsy4XCI6XCImbmdlcztcIixcIuKJtVwiOlwiJm5nc2ltO1wiLFwi4omOzLhcIjpcIiZuYnVtcDtcIixcIuKJj8y4XCI6XCImbmJ1bXBlO1wiLFwi4ouqXCI6XCImbnRyaWFuZ2xlbGVmdDtcIixcIuKnj8y4XCI6XCImTm90TGVmdFRyaWFuZ2xlQmFyO1wiLFwi4ousXCI6XCImbnRyaWFuZ2xlbGVmdGVxO1wiLFwi4omuXCI6XCImbmx0O1wiLFwi4omwXCI6XCImbmxlcTtcIixcIuKJuFwiOlwiJm50bGc7XCIsXCLiiarMuFwiOlwiJm5MdHY7XCIsXCLiqb3MuFwiOlwiJm5sZXM7XCIsXCLiibRcIjpcIiZubHNpbTtcIixcIuKqosy4XCI6XCImTm90TmVzdGVkR3JlYXRlckdyZWF0ZXI7XCIsXCLiqqHMuFwiOlwiJk5vdE5lc3RlZExlc3NMZXNzO1wiLFwi4oqAXCI6XCImbnByZWM7XCIsXCLiqq/MuFwiOlwiJm5wcmVjZXE7XCIsXCLii6BcIjpcIiZucHJjdWU7XCIsXCLiiIxcIjpcIiZub3RuaXZhO1wiLFwi4ourXCI6XCImbnRyaWFuZ2xlcmlnaHQ7XCIsXCLip5DMuFwiOlwiJk5vdFJpZ2h0VHJpYW5nbGVCYXI7XCIsXCLii61cIjpcIiZudHJpYW5nbGVyaWdodGVxO1wiLFwi4oqPzLhcIjpcIiZOb3RTcXVhcmVTdWJzZXQ7XCIsXCLii6JcIjpcIiZuc3FzdWJlO1wiLFwi4oqQzLhcIjpcIiZOb3RTcXVhcmVTdXBlcnNldDtcIixcIuKLo1wiOlwiJm5zcXN1cGU7XCIsXCLiioLig5JcIjpcIiZ2bnN1YjtcIixcIuKKiFwiOlwiJm5zdWJzZXRlcTtcIixcIuKKgVwiOlwiJm5zdWNjO1wiLFwi4qqwzLhcIjpcIiZuc3VjY2VxO1wiLFwi4ouhXCI6XCImbnNjY3VlO1wiLFwi4om/zLhcIjpcIiZOb3RTdWNjZWVkc1RpbGRlO1wiLFwi4oqD4oOSXCI6XCImdm5zdXA7XCIsXCLiiolcIjpcIiZuc3Vwc2V0ZXE7XCIsXCLiiYFcIjpcIiZuc2ltO1wiLFwi4omEXCI6XCImbnNpbWVxO1wiLFwi4omHXCI6XCImbmNvbmc7XCIsXCLiiYlcIjpcIiZuYXBwcm94O1wiLFwi4oikXCI6XCImbnNtaWQ7XCIsXCLwnZKpXCI6XCImTnNjcjtcIixcIsORXCI6XCImTnRpbGRlO1wiLFwizp1cIjpcIiZOdTtcIixcIsWSXCI6XCImT0VsaWc7XCIsXCLDk1wiOlwiJk9hY3V0ZTtcIixcIsOUXCI6XCImT2NpcmM7XCIsXCLQnlwiOlwiJk9jeTtcIixcIsWQXCI6XCImT2RibGFjO1wiLFwi8J2UklwiOlwiJk9mcjtcIixcIsOSXCI6XCImT2dyYXZlO1wiLFwixYxcIjpcIiZPbWFjcjtcIixcIs6pXCI6XCImb2htO1wiLFwizp9cIjpcIiZPbWljcm9uO1wiLFwi8J2VhlwiOlwiJk9vcGY7XCIsXCLigJxcIjpcIiZsZHF1bztcIixcIuKAmFwiOlwiJmxzcXVvO1wiLFwi4qmUXCI6XCImT3I7XCIsXCLwnZKqXCI6XCImT3NjcjtcIixcIsOYXCI6XCImT3NsYXNoO1wiLFwiw5VcIjpcIiZPdGlsZGU7XCIsXCLiqLdcIjpcIiZPdGltZXM7XCIsXCLDllwiOlwiJk91bWw7XCIsXCLigL5cIjpcIiZvbGluZTtcIixcIuKPnlwiOlwiJk92ZXJCcmFjZTtcIixcIuKOtFwiOlwiJnRicms7XCIsXCLij5xcIjpcIiZPdmVyUGFyZW50aGVzaXM7XCIsXCLiiIJcIjpcIiZwYXJ0O1wiLFwi0J9cIjpcIiZQY3k7XCIsXCLwnZSTXCI6XCImUGZyO1wiLFwizqZcIjpcIiZQaGk7XCIsXCLOoFwiOlwiJlBpO1wiLFwiwrFcIjpcIiZwbTtcIixcIuKEmVwiOlwiJnByaW1lcztcIixcIuKqu1wiOlwiJlByO1wiLFwi4om6XCI6XCImcHJlYztcIixcIuKqr1wiOlwiJnByZWNlcTtcIixcIuKJvFwiOlwiJnByZWNjdXJseWVxO1wiLFwi4om+XCI6XCImcHJzaW07XCIsXCLigLNcIjpcIiZQcmltZTtcIixcIuKIj1wiOlwiJnByb2Q7XCIsXCLiiJ1cIjpcIiZ2cHJvcDtcIixcIvCdkqtcIjpcIiZQc2NyO1wiLFwizqhcIjpcIiZQc2k7XCIsJ1wiJzpcIiZxdW90O1wiLFwi8J2UlFwiOlwiJlFmcjtcIixcIuKEmlwiOlwiJnJhdGlvbmFscztcIixcIvCdkqxcIjpcIiZRc2NyO1wiLFwi4qSQXCI6XCImZHJia2Fyb3c7XCIsXCLCrlwiOlwiJnJlZztcIixcIsWUXCI6XCImUmFjdXRlO1wiLFwi4p+rXCI6XCImUmFuZztcIixcIuKGoFwiOlwiJnR3b2hlYWRyaWdodGFycm93O1wiLFwi4qSWXCI6XCImUmFycnRsO1wiLFwixZhcIjpcIiZSY2Fyb247XCIsXCLFllwiOlwiJlJjZWRpbDtcIixcItCgXCI6XCImUmN5O1wiLFwi4oScXCI6XCImcmVhbHBhcnQ7XCIsXCLiiItcIjpcIiZuaXY7XCIsXCLih4tcIjpcIiZscmhhcjtcIixcIuKlr1wiOlwiJmR1aGFyO1wiLFwizqFcIjpcIiZSaG87XCIsXCLin6lcIjpcIiZyYW5nbGU7XCIsXCLihpJcIjpcIiZzcmFycjtcIixcIuKHpVwiOlwiJnJhcnJiO1wiLFwi4oeEXCI6XCImcmxhcnI7XCIsXCLijIlcIjpcIiZyY2VpbDtcIixcIuKfp1wiOlwiJnJvYnJrO1wiLFwi4qWdXCI6XCImUmlnaHREb3duVGVlVmVjdG9yO1wiLFwi4oeCXCI6XCImZG93bmhhcnBvb25yaWdodDtcIixcIuKllVwiOlwiJlJpZ2h0RG93blZlY3RvckJhcjtcIixcIuKMi1wiOlwiJnJmbG9vcjtcIixcIuKKolwiOlwiJnZkYXNoO1wiLFwi4oamXCI6XCImbWFwc3RvO1wiLFwi4qWbXCI6XCImUmlnaHRUZWVWZWN0b3I7XCIsXCLiirNcIjpcIiZ2cnRyaTtcIixcIuKnkFwiOlwiJlJpZ2h0VHJpYW5nbGVCYXI7XCIsXCLiirVcIjpcIiZ0cmlhbmdsZXJpZ2h0ZXE7XCIsXCLipY9cIjpcIiZSaWdodFVwRG93blZlY3RvcjtcIixcIuKlnFwiOlwiJlJpZ2h0VXBUZWVWZWN0b3I7XCIsXCLihr5cIjpcIiZ1cGhhcnBvb25yaWdodDtcIixcIuKllFwiOlwiJlJpZ2h0VXBWZWN0b3JCYXI7XCIsXCLih4BcIjpcIiZyaWdodGhhcnBvb251cDtcIixcIuKlk1wiOlwiJlJpZ2h0VmVjdG9yQmFyO1wiLFwi4oSdXCI6XCImcmVhbHM7XCIsXCLipbBcIjpcIiZSb3VuZEltcGxpZXM7XCIsXCLih5tcIjpcIiZyQWFycjtcIixcIuKEm1wiOlwiJnJlYWxpbmU7XCIsXCLihrFcIjpcIiZyc2g7XCIsXCLip7RcIjpcIiZSdWxlRGVsYXllZDtcIixcItCpXCI6XCImU0hDSGN5O1wiLFwi0KhcIjpcIiZTSGN5O1wiLFwi0KxcIjpcIiZTT0ZUY3k7XCIsXCLFmlwiOlwiJlNhY3V0ZTtcIixcIuKqvFwiOlwiJlNjO1wiLFwixaBcIjpcIiZTY2Fyb247XCIsXCLFnlwiOlwiJlNjZWRpbDtcIixcIsWcXCI6XCImU2NpcmM7XCIsXCLQoVwiOlwiJlNjeTtcIixcIvCdlJZcIjpcIiZTZnI7XCIsXCLihpFcIjpcIiZ1cGFycm93O1wiLFwizqNcIjpcIiZTaWdtYTtcIixcIuKImFwiOlwiJmNvbXBmbjtcIixcIvCdlYpcIjpcIiZTb3BmO1wiLFwi4oiaXCI6XCImcmFkaWM7XCIsXCLilqFcIjpcIiZzcXVhcmU7XCIsXCLiipNcIjpcIiZzcWNhcDtcIixcIuKKj1wiOlwiJnNxc3Vic2V0O1wiLFwi4oqRXCI6XCImc3FzdWJzZXRlcTtcIixcIuKKkFwiOlwiJnNxc3Vwc2V0O1wiLFwi4oqSXCI6XCImc3FzdXBzZXRlcTtcIixcIuKKlFwiOlwiJnNxY3VwO1wiLFwi8J2SrlwiOlwiJlNzY3I7XCIsXCLii4ZcIjpcIiZzc3RhcmY7XCIsXCLii5BcIjpcIiZTdWJzZXQ7XCIsXCLiioZcIjpcIiZzdWJzZXRlcTtcIixcIuKJu1wiOlwiJnN1Y2M7XCIsXCLiqrBcIjpcIiZzdWNjZXE7XCIsXCLiib1cIjpcIiZzdWNjY3VybHllcTtcIixcIuKJv1wiOlwiJnN1Y2NzaW07XCIsXCLiiJFcIjpcIiZzdW07XCIsXCLii5FcIjpcIiZTdXBzZXQ7XCIsXCLiioNcIjpcIiZzdXBzZXQ7XCIsXCLiiodcIjpcIiZzdXBzZXRlcTtcIixcIsOeXCI6XCImVEhPUk47XCIsXCLihKJcIjpcIiZ0cmFkZTtcIixcItCLXCI6XCImVFNIY3k7XCIsXCLQplwiOlwiJlRTY3k7XCIsXCJcXHRcIjpcIiZUYWI7XCIsXCLOpFwiOlwiJlRhdTtcIixcIsWkXCI6XCImVGNhcm9uO1wiLFwixaJcIjpcIiZUY2VkaWw7XCIsXCLQolwiOlwiJlRjeTtcIixcIvCdlJdcIjpcIiZUZnI7XCIsXCLiiLRcIjpcIiZ0aGVyZWZvcmU7XCIsXCLOmFwiOlwiJlRoZXRhO1wiLFwi4oGf4oCKXCI6XCImVGhpY2tTcGFjZTtcIixcIuKAiVwiOlwiJnRoaW5zcDtcIixcIuKIvFwiOlwiJnRoa3NpbTtcIixcIuKJg1wiOlwiJnNpbWVxO1wiLFwi4omFXCI6XCImY29uZztcIixcIuKJiFwiOlwiJnRoa2FwO1wiLFwi8J2Vi1wiOlwiJlRvcGY7XCIsXCLig5tcIjpcIiZ0ZG90O1wiLFwi8J2Sr1wiOlwiJlRzY3I7XCIsXCLFplwiOlwiJlRzdHJvaztcIixcIsOaXCI6XCImVWFjdXRlO1wiLFwi4oafXCI6XCImVWFycjtcIixcIuKliVwiOlwiJlVhcnJvY2lyO1wiLFwi0I5cIjpcIiZVYnJjeTtcIixcIsWsXCI6XCImVWJyZXZlO1wiLFwiw5tcIjpcIiZVY2lyYztcIixcItCjXCI6XCImVWN5O1wiLFwixbBcIjpcIiZVZGJsYWM7XCIsXCLwnZSYXCI6XCImVWZyO1wiLFwiw5lcIjpcIiZVZ3JhdmU7XCIsXCLFqlwiOlwiJlVtYWNyO1wiLF86XCImbG93YmFyO1wiLFwi4o+fXCI6XCImVW5kZXJCcmFjZTtcIixcIuKOtVwiOlwiJmJicms7XCIsXCLij51cIjpcIiZVbmRlclBhcmVudGhlc2lzO1wiLFwi4ouDXCI6XCImeGN1cDtcIixcIuKKjlwiOlwiJnVwbHVzO1wiLFwixbJcIjpcIiZVb2dvbjtcIixcIvCdlYxcIjpcIiZVb3BmO1wiLFwi4qSSXCI6XCImVXBBcnJvd0JhcjtcIixcIuKHhVwiOlwiJnVkYXJyO1wiLFwi4oaVXCI6XCImdmFycjtcIixcIuKlrlwiOlwiJnVkaGFyO1wiLFwi4oqlXCI6XCImcGVycDtcIixcIuKGpVwiOlwiJm1hcHN0b3VwO1wiLFwi4oaWXCI6XCImbndhcnJvdztcIixcIuKGl1wiOlwiJm5lYXJyb3c7XCIsXCLPklwiOlwiJnVwc2loO1wiLFwizqVcIjpcIiZVcHNpbG9uO1wiLFwixa5cIjpcIiZVcmluZztcIixcIvCdkrBcIjpcIiZVc2NyO1wiLFwixahcIjpcIiZVdGlsZGU7XCIsXCLDnFwiOlwiJlV1bWw7XCIsXCLiiqtcIjpcIiZWRGFzaDtcIixcIuKrq1wiOlwiJlZiYXI7XCIsXCLQklwiOlwiJlZjeTtcIixcIuKKqVwiOlwiJlZkYXNoO1wiLFwi4qumXCI6XCImVmRhc2hsO1wiLFwi4ouBXCI6XCImeHZlZTtcIixcIuKAllwiOlwiJlZlcnQ7XCIsXCLiiKNcIjpcIiZzbWlkO1wiLFwifFwiOlwiJnZlcnQ7XCIsXCLinZhcIjpcIiZWZXJ0aWNhbFNlcGFyYXRvcjtcIixcIuKJgFwiOlwiJndyZWF0aDtcIixcIuKAilwiOlwiJmhhaXJzcDtcIixcIvCdlJlcIjpcIiZWZnI7XCIsXCLwnZWNXCI6XCImVm9wZjtcIixcIvCdkrFcIjpcIiZWc2NyO1wiLFwi4oqqXCI6XCImVnZkYXNoO1wiLFwixbRcIjpcIiZXY2lyYztcIixcIuKLgFwiOlwiJnh3ZWRnZTtcIixcIvCdlJpcIjpcIiZXZnI7XCIsXCLwnZWOXCI6XCImV29wZjtcIixcIvCdkrJcIjpcIiZXc2NyO1wiLFwi8J2Um1wiOlwiJlhmcjtcIixcIs6eXCI6XCImWGk7XCIsXCLwnZWPXCI6XCImWG9wZjtcIixcIvCdkrNcIjpcIiZYc2NyO1wiLFwi0K9cIjpcIiZZQWN5O1wiLFwi0IdcIjpcIiZZSWN5O1wiLFwi0K5cIjpcIiZZVWN5O1wiLFwiw51cIjpcIiZZYWN1dGU7XCIsXCLFtlwiOlwiJlljaXJjO1wiLFwi0KtcIjpcIiZZY3k7XCIsXCLwnZScXCI6XCImWWZyO1wiLFwi8J2VkFwiOlwiJllvcGY7XCIsXCLwnZK0XCI6XCImWXNjcjtcIixcIsW4XCI6XCImWXVtbDtcIixcItCWXCI6XCImWkhjeTtcIixcIsW5XCI6XCImWmFjdXRlO1wiLFwixb1cIjpcIiZaY2Fyb247XCIsXCLQl1wiOlwiJlpjeTtcIixcIsW7XCI6XCImWmRvdDtcIixcIs6WXCI6XCImWmV0YTtcIixcIuKEqFwiOlwiJnplZXRyZjtcIixcIuKEpFwiOlwiJmludGVnZXJzO1wiLFwi8J2StVwiOlwiJlpzY3I7XCIsXCLDoVwiOlwiJmFhY3V0ZTtcIixcIsSDXCI6XCImYWJyZXZlO1wiLFwi4oi+XCI6XCImbXN0cG9zO1wiLFwi4oi+zLNcIjpcIiZhY0U7XCIsXCLiiL9cIjpcIiZhY2Q7XCIsXCLDolwiOlwiJmFjaXJjO1wiLFwi0LBcIjpcIiZhY3k7XCIsXCLDplwiOlwiJmFlbGlnO1wiLFwi8J2UnlwiOlwiJmFmcjtcIixcIsOgXCI6XCImYWdyYXZlO1wiLFwi4oS1XCI6XCImYWxlcGg7XCIsXCLOsVwiOlwiJmFscGhhO1wiLFwixIFcIjpcIiZhbWFjcjtcIixcIuKov1wiOlwiJmFtYWxnO1wiLFwi4oinXCI6XCImd2VkZ2U7XCIsXCLiqZVcIjpcIiZhbmRhbmQ7XCIsXCLiqZxcIjpcIiZhbmRkO1wiLFwi4qmYXCI6XCImYW5kc2xvcGU7XCIsXCLiqZpcIjpcIiZhbmR2O1wiLFwi4oigXCI6XCImYW5nbGU7XCIsXCLipqRcIjpcIiZhbmdlO1wiLFwi4oihXCI6XCImbWVhc3VyZWRhbmdsZTtcIixcIuKmqFwiOlwiJmFuZ21zZGFhO1wiLFwi4qapXCI6XCImYW5nbXNkYWI7XCIsXCLipqpcIjpcIiZhbmdtc2RhYztcIixcIuKmq1wiOlwiJmFuZ21zZGFkO1wiLFwi4qasXCI6XCImYW5nbXNkYWU7XCIsXCLipq1cIjpcIiZhbmdtc2RhZjtcIixcIuKmrlwiOlwiJmFuZ21zZGFnO1wiLFwi4qavXCI6XCImYW5nbXNkYWg7XCIsXCLiiJ9cIjpcIiZhbmdydDtcIixcIuKKvlwiOlwiJmFuZ3J0dmI7XCIsXCLipp1cIjpcIiZhbmdydHZiZDtcIixcIuKIolwiOlwiJmFuZ3NwaDtcIixcIuKNvFwiOlwiJmFuZ3phcnI7XCIsXCLEhVwiOlwiJmFvZ29uO1wiLFwi8J2VklwiOlwiJmFvcGY7XCIsXCLiqbBcIjpcIiZhcEU7XCIsXCLiqa9cIjpcIiZhcGFjaXI7XCIsXCLiiYpcIjpcIiZhcHByb3hlcTtcIixcIuKJi1wiOlwiJmFwaWQ7XCIsXCInXCI6XCImYXBvcztcIixcIsOlXCI6XCImYXJpbmc7XCIsXCLwnZK2XCI6XCImYXNjcjtcIixcIipcIjpcIiZtaWRhc3Q7XCIsXCLDo1wiOlwiJmF0aWxkZTtcIixcIsOkXCI6XCImYXVtbDtcIixcIuKokVwiOlwiJmF3aW50O1wiLFwi4qutXCI6XCImYk5vdDtcIixcIuKJjFwiOlwiJmJjb25nO1wiLFwiz7ZcIjpcIiZiZXBzaTtcIixcIuKAtVwiOlwiJmJwcmltZTtcIixcIuKIvVwiOlwiJmJzaW07XCIsXCLii41cIjpcIiZic2ltZTtcIixcIuKKvVwiOlwiJmJhcnZlZTtcIixcIuKMhVwiOlwiJmJhcndlZGdlO1wiLFwi4o62XCI6XCImYmJya3Ricms7XCIsXCLQsVwiOlwiJmJjeTtcIixcIuKAnlwiOlwiJmxkcXVvcjtcIixcIuKmsFwiOlwiJmJlbXB0eXY7XCIsXCLOslwiOlwiJmJldGE7XCIsXCLihLZcIjpcIiZiZXRoO1wiLFwi4omsXCI6XCImdHdpeHQ7XCIsXCLwnZSfXCI6XCImYmZyO1wiLFwi4pevXCI6XCImeGNpcmM7XCIsXCLiqIBcIjpcIiZ4b2RvdDtcIixcIuKogVwiOlwiJnhvcGx1cztcIixcIuKoglwiOlwiJnhvdGltZTtcIixcIuKohlwiOlwiJnhzcWN1cDtcIixcIuKYhVwiOlwiJnN0YXJmO1wiLFwi4pa9XCI6XCImeGR0cmk7XCIsXCLilrNcIjpcIiZ4dXRyaTtcIixcIuKohFwiOlwiJnh1cGx1cztcIixcIuKkjVwiOlwiJnJiYXJyO1wiLFwi4qerXCI6XCImbG96ZjtcIixcIuKWtFwiOlwiJnV0cmlmO1wiLFwi4pa+XCI6XCImZHRyaWY7XCIsXCLil4JcIjpcIiZsdHJpZjtcIixcIuKWuFwiOlwiJnJ0cmlmO1wiLFwi4pCjXCI6XCImYmxhbms7XCIsXCLilpJcIjpcIiZibGsxMjtcIixcIuKWkVwiOlwiJmJsazE0O1wiLFwi4paTXCI6XCImYmxrMzQ7XCIsXCLilohcIjpcIiZibG9jaztcIixcIj3ig6VcIjpcIiZibmU7XCIsXCLiiaHig6VcIjpcIiZibmVxdWl2O1wiLFwi4oyQXCI6XCImYm5vdDtcIixcIvCdlZNcIjpcIiZib3BmO1wiLFwi4ouIXCI6XCImYm93dGllO1wiLFwi4pWXXCI6XCImYm94REw7XCIsXCLilZRcIjpcIiZib3hEUjtcIixcIuKVllwiOlwiJmJveERsO1wiLFwi4pWTXCI6XCImYm94RHI7XCIsXCLilZBcIjpcIiZib3hIO1wiLFwi4pWmXCI6XCImYm94SEQ7XCIsXCLilalcIjpcIiZib3hIVTtcIixcIuKVpFwiOlwiJmJveEhkO1wiLFwi4pWnXCI6XCImYm94SHU7XCIsXCLilZ1cIjpcIiZib3hVTDtcIixcIuKVmlwiOlwiJmJveFVSO1wiLFwi4pWcXCI6XCImYm94VWw7XCIsXCLilZlcIjpcIiZib3hVcjtcIixcIuKVkVwiOlwiJmJveFY7XCIsXCLilaxcIjpcIiZib3hWSDtcIixcIuKVo1wiOlwiJmJveFZMO1wiLFwi4pWgXCI6XCImYm94VlI7XCIsXCLilatcIjpcIiZib3hWaDtcIixcIuKVolwiOlwiJmJveFZsO1wiLFwi4pWfXCI6XCImYm94VnI7XCIsXCLip4lcIjpcIiZib3hib3g7XCIsXCLilZVcIjpcIiZib3hkTDtcIixcIuKVklwiOlwiJmJveGRSO1wiLFwi4pSQXCI6XCImYm94ZGw7XCIsXCLilIxcIjpcIiZib3hkcjtcIixcIuKVpVwiOlwiJmJveGhEO1wiLFwi4pWoXCI6XCImYm94aFU7XCIsXCLilKxcIjpcIiZib3hoZDtcIixcIuKUtFwiOlwiJmJveGh1O1wiLFwi4oqfXCI6XCImbWludXNiO1wiLFwi4oqeXCI6XCImcGx1c2I7XCIsXCLiiqBcIjpcIiZ0aW1lc2I7XCIsXCLilZtcIjpcIiZib3h1TDtcIixcIuKVmFwiOlwiJmJveHVSO1wiLFwi4pSYXCI6XCImYm94dWw7XCIsXCLilJRcIjpcIiZib3h1cjtcIixcIuKUglwiOlwiJmJveHY7XCIsXCLilapcIjpcIiZib3h2SDtcIixcIuKVoVwiOlwiJmJveHZMO1wiLFwi4pWeXCI6XCImYm94dlI7XCIsXCLilLxcIjpcIiZib3h2aDtcIixcIuKUpFwiOlwiJmJveHZsO1wiLFwi4pScXCI6XCImYm94dnI7XCIsXCLCplwiOlwiJmJydmJhcjtcIixcIvCdkrdcIjpcIiZic2NyO1wiLFwi4oGPXCI6XCImYnNlbWk7XCIsXCJcXFxcXCI6XCImYnNvbDtcIixcIuKnhVwiOlwiJmJzb2xiO1wiLFwi4p+IXCI6XCImYnNvbGhzdWI7XCIsXCLigKJcIjpcIiZidWxsZXQ7XCIsXCLiqq5cIjpcIiZidW1wRTtcIixcIsSHXCI6XCImY2FjdXRlO1wiLFwi4oipXCI6XCImY2FwO1wiLFwi4qmEXCI6XCImY2FwYW5kO1wiLFwi4qmJXCI6XCImY2FwYnJjdXA7XCIsXCLiqYtcIjpcIiZjYXBjYXA7XCIsXCLiqYdcIjpcIiZjYXBjdXA7XCIsXCLiqYBcIjpcIiZjYXBkb3Q7XCIsXCLiiKnvuIBcIjpcIiZjYXBzO1wiLFwi4oGBXCI6XCImY2FyZXQ7XCIsXCLiqY1cIjpcIiZjY2FwcztcIixcIsSNXCI6XCImY2Nhcm9uO1wiLFwiw6dcIjpcIiZjY2VkaWw7XCIsXCLEiVwiOlwiJmNjaXJjO1wiLFwi4qmMXCI6XCImY2N1cHM7XCIsXCLiqZBcIjpcIiZjY3Vwc3NtO1wiLFwixItcIjpcIiZjZG90O1wiLFwi4qayXCI6XCImY2VtcHR5djtcIixcIsKiXCI6XCImY2VudDtcIixcIvCdlKBcIjpcIiZjZnI7XCIsXCLRh1wiOlwiJmNoY3k7XCIsXCLinJNcIjpcIiZjaGVja21hcms7XCIsXCLPh1wiOlwiJmNoaTtcIixcIuKXi1wiOlwiJmNpcjtcIixcIuKng1wiOlwiJmNpckU7XCIsXCLLhlwiOlwiJmNpcmM7XCIsXCLiiZdcIjpcIiZjaXJlO1wiLFwi4oa6XCI6XCImb2xhcnI7XCIsXCLihrtcIjpcIiZvcmFycjtcIixcIuKTiFwiOlwiJm9TO1wiLFwi4oqbXCI6XCImb2FzdDtcIixcIuKKmlwiOlwiJm9jaXI7XCIsXCLiip1cIjpcIiZvZGFzaDtcIixcIuKokFwiOlwiJmNpcmZuaW50O1wiLFwi4quvXCI6XCImY2lybWlkO1wiLFwi4qeCXCI6XCImY2lyc2NpcjtcIixcIuKZo1wiOlwiJmNsdWJzdWl0O1wiLFwiOlwiOlwiJmNvbG9uO1wiLFwiLFwiOlwiJmNvbW1hO1wiLFwiQFwiOlwiJmNvbW1hdDtcIixcIuKIgVwiOlwiJmNvbXBsZW1lbnQ7XCIsXCLiqa1cIjpcIiZjb25nZG90O1wiLFwi8J2VlFwiOlwiJmNvcGY7XCIsXCLihJdcIjpcIiZjb3B5c3I7XCIsXCLihrVcIjpcIiZjcmFycjtcIixcIuKcl1wiOlwiJmNyb3NzO1wiLFwi8J2SuFwiOlwiJmNzY3I7XCIsXCLiq49cIjpcIiZjc3ViO1wiLFwi4quRXCI6XCImY3N1YmU7XCIsXCLiq5BcIjpcIiZjc3VwO1wiLFwi4quSXCI6XCImY3N1cGU7XCIsXCLii69cIjpcIiZjdGRvdDtcIixcIuKkuFwiOlwiJmN1ZGFycmw7XCIsXCLipLVcIjpcIiZjdWRhcnJyO1wiLFwi4oueXCI6XCImY3VybHllcXByZWM7XCIsXCLii59cIjpcIiZjdXJseWVxc3VjYztcIixcIuKGtlwiOlwiJmN1cnZlYXJyb3dsZWZ0O1wiLFwi4qS9XCI6XCImY3VsYXJycDtcIixcIuKIqlwiOlwiJmN1cDtcIixcIuKpiFwiOlwiJmN1cGJyY2FwO1wiLFwi4qmGXCI6XCImY3VwY2FwO1wiLFwi4qmKXCI6XCImY3VwY3VwO1wiLFwi4oqNXCI6XCImY3VwZG90O1wiLFwi4qmFXCI6XCImY3Vwb3I7XCIsXCLiiKrvuIBcIjpcIiZjdXBzO1wiLFwi4oa3XCI6XCImY3VydmVhcnJvd3JpZ2h0O1wiLFwi4qS8XCI6XCImY3VyYXJybTtcIixcIuKLjlwiOlwiJmN1dmVlO1wiLFwi4ouPXCI6XCImY3V3ZWQ7XCIsXCLCpFwiOlwiJmN1cnJlbjtcIixcIuKIsVwiOlwiJmN3aW50O1wiLFwi4oytXCI6XCImY3lsY3R5O1wiLFwi4qWlXCI6XCImZEhhcjtcIixcIuKAoFwiOlwiJmRhZ2dlcjtcIixcIuKEuFwiOlwiJmRhbGV0aDtcIixcIuKAkFwiOlwiJmh5cGhlbjtcIixcIuKkj1wiOlwiJnJCYXJyO1wiLFwixI9cIjpcIiZkY2Fyb247XCIsXCLQtFwiOlwiJmRjeTtcIixcIuKHilwiOlwiJmRvd25kb3duYXJyb3dzO1wiLFwi4qm3XCI6XCImZUREb3Q7XCIsXCLCsFwiOlwiJmRlZztcIixcIs60XCI6XCImZGVsdGE7XCIsXCLiprFcIjpcIiZkZW1wdHl2O1wiLFwi4qW/XCI6XCImZGZpc2h0O1wiLFwi8J2UoVwiOlwiJmRmcjtcIixcIuKZplwiOlwiJmRpYW1zO1wiLFwiz51cIjpcIiZnYW1tYWQ7XCIsXCLii7JcIjpcIiZkaXNpbjtcIixcIsO3XCI6XCImZGl2aWRlO1wiLFwi4ouHXCI6XCImZGl2b254O1wiLFwi0ZJcIjpcIiZkamN5O1wiLFwi4oyeXCI6XCImbGxjb3JuZXI7XCIsXCLijI1cIjpcIiZkbGNyb3A7XCIsJDpcIiZkb2xsYXI7XCIsXCLwnZWVXCI6XCImZG9wZjtcIixcIuKJkVwiOlwiJmVEb3Q7XCIsXCLiiLhcIjpcIiZtaW51c2Q7XCIsXCLiiJRcIjpcIiZwbHVzZG87XCIsXCLiiqFcIjpcIiZzZG90YjtcIixcIuKMn1wiOlwiJmxyY29ybmVyO1wiLFwi4oyMXCI6XCImZHJjcm9wO1wiLFwi8J2SuVwiOlwiJmRzY3I7XCIsXCLRlVwiOlwiJmRzY3k7XCIsXCLip7ZcIjpcIiZkc29sO1wiLFwixJFcIjpcIiZkc3Ryb2s7XCIsXCLii7FcIjpcIiZkdGRvdDtcIixcIuKWv1wiOlwiJnRyaWFuZ2xlZG93bjtcIixcIuKmplwiOlwiJmR3YW5nbGU7XCIsXCLRn1wiOlwiJmR6Y3k7XCIsXCLin79cIjpcIiZkemlncmFycjtcIixcIsOpXCI6XCImZWFjdXRlO1wiLFwi4qmuXCI6XCImZWFzdGVyO1wiLFwixJtcIjpcIiZlY2Fyb247XCIsXCLiiZZcIjpcIiZlcWNpcmM7XCIsXCLDqlwiOlwiJmVjaXJjO1wiLFwi4omVXCI6XCImZXFjb2xvbjtcIixcItGNXCI6XCImZWN5O1wiLFwixJdcIjpcIiZlZG90O1wiLFwi4omSXCI6XCImZmFsbGluZ2RvdHNlcTtcIixcIvCdlKJcIjpcIiZlZnI7XCIsXCLiqppcIjpcIiZlZztcIixcIsOoXCI6XCImZWdyYXZlO1wiLFwi4qqWXCI6XCImZXFzbGFudGd0cjtcIixcIuKqmFwiOlwiJmVnc2RvdDtcIixcIuKqmVwiOlwiJmVsO1wiLFwi4o+nXCI6XCImZWxpbnRlcnM7XCIsXCLihJNcIjpcIiZlbGw7XCIsXCLiqpVcIjpcIiZlcXNsYW50bGVzcztcIixcIuKql1wiOlwiJmVsc2RvdDtcIixcIsSTXCI6XCImZW1hY3I7XCIsXCLiiIVcIjpcIiZ2YXJub3RoaW5nO1wiLFwi4oCEXCI6XCImZW1zcDEzO1wiLFwi4oCFXCI6XCImZW1zcDE0O1wiLFwi4oCDXCI6XCImZW1zcDtcIixcIsWLXCI6XCImZW5nO1wiLFwi4oCCXCI6XCImZW5zcDtcIixcIsSZXCI6XCImZW9nb247XCIsXCLwnZWWXCI6XCImZW9wZjtcIixcIuKLlVwiOlwiJmVwYXI7XCIsXCLip6NcIjpcIiZlcGFyc2w7XCIsXCLiqbFcIjpcIiZlcGx1cztcIixcIs61XCI6XCImZXBzaWxvbjtcIixcIs+1XCI6XCImdmFyZXBzaWxvbjtcIixcIj1cIjpcIiZlcXVhbHM7XCIsXCLiiZ9cIjpcIiZxdWVzdGVxO1wiLFwi4qm4XCI6XCImZXF1aXZERDtcIixcIuKnpVwiOlwiJmVxdnBhcnNsO1wiLFwi4omTXCI6XCImcmlzaW5nZG90c2VxO1wiLFwi4qWxXCI6XCImZXJhcnI7XCIsXCLihK9cIjpcIiZlc2NyO1wiLFwizrdcIjpcIiZldGE7XCIsXCLDsFwiOlwiJmV0aDtcIixcIsOrXCI6XCImZXVtbDtcIixcIuKCrFwiOlwiJmV1cm87XCIsXCIhXCI6XCImZXhjbDtcIixcItGEXCI6XCImZmN5O1wiLFwi4pmAXCI6XCImZmVtYWxlO1wiLFwi76yDXCI6XCImZmZpbGlnO1wiLFwi76yAXCI6XCImZmZsaWc7XCIsXCLvrIRcIjpcIiZmZmxsaWc7XCIsXCLwnZSjXCI6XCImZmZyO1wiLFwi76yBXCI6XCImZmlsaWc7XCIsZmo6XCImZmpsaWc7XCIsXCLima1cIjpcIiZmbGF0O1wiLFwi76yCXCI6XCImZmxsaWc7XCIsXCLilrFcIjpcIiZmbHRucztcIixcIsaSXCI6XCImZm5vZjtcIixcIvCdlZdcIjpcIiZmb3BmO1wiLFwi4ouUXCI6XCImcGl0Y2hmb3JrO1wiLFwi4quZXCI6XCImZm9ya3Y7XCIsXCLiqI1cIjpcIiZmcGFydGludDtcIixcIsK9XCI6XCImaGFsZjtcIixcIuKFk1wiOlwiJmZyYWMxMztcIixcIsK8XCI6XCImZnJhYzE0O1wiLFwi4oWVXCI6XCImZnJhYzE1O1wiLFwi4oWZXCI6XCImZnJhYzE2O1wiLFwi4oWbXCI6XCImZnJhYzE4O1wiLFwi4oWUXCI6XCImZnJhYzIzO1wiLFwi4oWWXCI6XCImZnJhYzI1O1wiLFwiwr5cIjpcIiZmcmFjMzQ7XCIsXCLihZdcIjpcIiZmcmFjMzU7XCIsXCLihZxcIjpcIiZmcmFjMzg7XCIsXCLihZhcIjpcIiZmcmFjNDU7XCIsXCLihZpcIjpcIiZmcmFjNTY7XCIsXCLihZ1cIjpcIiZmcmFjNTg7XCIsXCLihZ5cIjpcIiZmcmFjNzg7XCIsXCLigYRcIjpcIiZmcmFzbDtcIixcIuKMolwiOlwiJnNmcm93bjtcIixcIvCdkrtcIjpcIiZmc2NyO1wiLFwi4qqMXCI6XCImZ3RyZXFxbGVzcztcIixcIse1XCI6XCImZ2FjdXRlO1wiLFwizrNcIjpcIiZnYW1tYTtcIixcIuKqhlwiOlwiJmd0cmFwcHJveDtcIixcIsSfXCI6XCImZ2JyZXZlO1wiLFwixJ1cIjpcIiZnY2lyYztcIixcItCzXCI6XCImZ2N5O1wiLFwixKFcIjpcIiZnZG90O1wiLFwi4qqpXCI6XCImZ2VzY2M7XCIsXCLiqoBcIjpcIiZnZXNkb3Q7XCIsXCLiqoJcIjpcIiZnZXNkb3RvO1wiLFwi4qqEXCI6XCImZ2VzZG90b2w7XCIsXCLii5vvuIBcIjpcIiZnZXNsO1wiLFwi4qqUXCI6XCImZ2VzbGVzO1wiLFwi8J2UpFwiOlwiJmdmcjtcIixcIuKEt1wiOlwiJmdpbWVsO1wiLFwi0ZNcIjpcIiZnamN5O1wiLFwi4qqSXCI6XCImZ2xFO1wiLFwi4qqlXCI6XCImZ2xhO1wiLFwi4qqkXCI6XCImZ2xqO1wiLFwi4ompXCI6XCImZ25lcXE7XCIsXCLiqopcIjpcIiZnbmFwcHJveDtcIixcIuKqiFwiOlwiJmduZXE7XCIsXCLii6dcIjpcIiZnbnNpbTtcIixcIvCdlZhcIjpcIiZnb3BmO1wiLFwi4oSKXCI6XCImZ3NjcjtcIixcIuKqjlwiOlwiJmdzaW1lO1wiLFwi4qqQXCI6XCImZ3NpbWw7XCIsXCLiqqdcIjpcIiZndGNjO1wiLFwi4qm6XCI6XCImZ3RjaXI7XCIsXCLii5dcIjpcIiZndHJkb3Q7XCIsXCLippVcIjpcIiZndGxQYXI7XCIsXCLiqbxcIjpcIiZndHF1ZXN0O1wiLFwi4qW4XCI6XCImZ3RyYXJyO1wiLFwi4omp77iAXCI6XCImZ3ZuRTtcIixcItGKXCI6XCImaGFyZGN5O1wiLFwi4qWIXCI6XCImaGFycmNpcjtcIixcIuKGrVwiOlwiJmxlZnRyaWdodHNxdWlnYXJyb3c7XCIsXCLihI9cIjpcIiZwbGFua3Y7XCIsXCLEpVwiOlwiJmhjaXJjO1wiLFwi4pmlXCI6XCImaGVhcnRzdWl0O1wiLFwi4oCmXCI6XCImbWxkcjtcIixcIuKKuVwiOlwiJmhlcmNvbjtcIixcIvCdlKVcIjpcIiZoZnI7XCIsXCLipKVcIjpcIiZzZWFyaGs7XCIsXCLipKZcIjpcIiZzd2FyaGs7XCIsXCLih79cIjpcIiZob2FycjtcIixcIuKIu1wiOlwiJmhvbXRodDtcIixcIuKGqVwiOlwiJmxhcnJoaztcIixcIuKGqlwiOlwiJnJhcnJoaztcIixcIvCdlZlcIjpcIiZob3BmO1wiLFwi4oCVXCI6XCImaG9yYmFyO1wiLFwi8J2SvVwiOlwiJmhzY3I7XCIsXCLEp1wiOlwiJmhzdHJvaztcIixcIuKBg1wiOlwiJmh5YnVsbDtcIixcIsOtXCI6XCImaWFjdXRlO1wiLFwiw65cIjpcIiZpY2lyYztcIixcItC4XCI6XCImaWN5O1wiLFwi0LVcIjpcIiZpZWN5O1wiLFwiwqFcIjpcIiZpZXhjbDtcIixcIvCdlKZcIjpcIiZpZnI7XCIsXCLDrFwiOlwiJmlncmF2ZTtcIixcIuKojFwiOlwiJnFpbnQ7XCIsXCLiiK1cIjpcIiZ0aW50O1wiLFwi4qecXCI6XCImaWluZmluO1wiLFwi4oSpXCI6XCImaWlvdGE7XCIsXCLEs1wiOlwiJmlqbGlnO1wiLFwixKtcIjpcIiZpbWFjcjtcIixcIsSxXCI6XCImaW5vZG90O1wiLFwi4oq3XCI6XCImaW1vZjtcIixcIsa1XCI6XCImaW1wZWQ7XCIsXCLihIVcIjpcIiZpbmNhcmU7XCIsXCLiiJ5cIjpcIiZpbmZpbjtcIixcIuKnnVwiOlwiJmluZmludGllO1wiLFwi4oq6XCI6XCImaW50ZXJjYWw7XCIsXCLiqJdcIjpcIiZpbnRsYXJoaztcIixcIuKovFwiOlwiJmlwcm9kO1wiLFwi0ZFcIjpcIiZpb2N5O1wiLFwixK9cIjpcIiZpb2dvbjtcIixcIvCdlZpcIjpcIiZpb3BmO1wiLFwizrlcIjpcIiZpb3RhO1wiLFwiwr9cIjpcIiZpcXVlc3Q7XCIsXCLwnZK+XCI6XCImaXNjcjtcIixcIuKLuVwiOlwiJmlzaW5FO1wiLFwi4ou1XCI6XCImaXNpbmRvdDtcIixcIuKLtFwiOlwiJmlzaW5zO1wiLFwi4ouzXCI6XCImaXNpbnN2O1wiLFwixKlcIjpcIiZpdGlsZGU7XCIsXCLRllwiOlwiJml1a2N5O1wiLFwiw69cIjpcIiZpdW1sO1wiLFwixLVcIjpcIiZqY2lyYztcIixcItC5XCI6XCImamN5O1wiLFwi8J2Up1wiOlwiJmpmcjtcIixcIsi3XCI6XCImam1hdGg7XCIsXCLwnZWbXCI6XCImam9wZjtcIixcIvCdkr9cIjpcIiZqc2NyO1wiLFwi0ZhcIjpcIiZqc2VyY3k7XCIsXCLRlFwiOlwiJmp1a2N5O1wiLFwizrpcIjpcIiZrYXBwYTtcIixcIs+wXCI6XCImdmFya2FwcGE7XCIsXCLEt1wiOlwiJmtjZWRpbDtcIixcItC6XCI6XCIma2N5O1wiLFwi8J2UqFwiOlwiJmtmcjtcIixcIsS4XCI6XCIma2dyZWVuO1wiLFwi0YVcIjpcIiZraGN5O1wiLFwi0ZxcIjpcIiZramN5O1wiLFwi8J2VnFwiOlwiJmtvcGY7XCIsXCLwnZOAXCI6XCIma3NjcjtcIixcIuKkm1wiOlwiJmxBdGFpbDtcIixcIuKkjlwiOlwiJmxCYXJyO1wiLFwi4qqLXCI6XCImbGVzc2VxcWd0cjtcIixcIuKlolwiOlwiJmxIYXI7XCIsXCLEulwiOlwiJmxhY3V0ZTtcIixcIuKmtFwiOlwiJmxhZW1wdHl2O1wiLFwizrtcIjpcIiZsYW1iZGE7XCIsXCLippFcIjpcIiZsYW5nZDtcIixcIuKqhVwiOlwiJmxlc3NhcHByb3g7XCIsXCLCq1wiOlwiJmxhcXVvO1wiLFwi4qSfXCI6XCImbGFycmJmcztcIixcIuKknVwiOlwiJmxhcnJmcztcIixcIuKGq1wiOlwiJmxvb3BhcnJvd2xlZnQ7XCIsXCLipLlcIjpcIiZsYXJycGw7XCIsXCLipbNcIjpcIiZsYXJyc2ltO1wiLFwi4oaiXCI6XCImbGVmdGFycm93dGFpbDtcIixcIuKqq1wiOlwiJmxhdDtcIixcIuKkmVwiOlwiJmxhdGFpbDtcIixcIuKqrVwiOlwiJmxhdGU7XCIsXCLiqq3vuIBcIjpcIiZsYXRlcztcIixcIuKkjFwiOlwiJmxiYXJyO1wiLFwi4p2yXCI6XCImbGJicms7XCIsXCJ7XCI6XCImbGN1YjtcIixcIltcIjpcIiZsc3FiO1wiLFwi4qaLXCI6XCImbGJya2U7XCIsXCLipo9cIjpcIiZsYnJrc2xkO1wiLFwi4qaNXCI6XCImbGJya3NsdTtcIixcIsS+XCI6XCImbGNhcm9uO1wiLFwixLxcIjpcIiZsY2VkaWw7XCIsXCLQu1wiOlwiJmxjeTtcIixcIuKktlwiOlwiJmxkY2E7XCIsXCLipadcIjpcIiZsZHJkaGFyO1wiLFwi4qWLXCI6XCImbGRydXNoYXI7XCIsXCLihrJcIjpcIiZsZHNoO1wiLFwi4omkXCI6XCImbGVxO1wiLFwi4oeHXCI6XCImbGxhcnI7XCIsXCLii4tcIjpcIiZsdGhyZWU7XCIsXCLiqqhcIjpcIiZsZXNjYztcIixcIuKpv1wiOlwiJmxlc2RvdDtcIixcIuKqgVwiOlwiJmxlc2RvdG87XCIsXCLiqoNcIjpcIiZsZXNkb3RvcjtcIixcIuKLmu+4gFwiOlwiJmxlc2c7XCIsXCLiqpNcIjpcIiZsZXNnZXM7XCIsXCLii5ZcIjpcIiZsdGRvdDtcIixcIuKlvFwiOlwiJmxmaXNodDtcIixcIvCdlKlcIjpcIiZsZnI7XCIsXCLiqpFcIjpcIiZsZ0U7XCIsXCLipapcIjpcIiZsaGFydWw7XCIsXCLiloRcIjpcIiZsaGJsaztcIixcItGZXCI6XCImbGpjeTtcIixcIuKlq1wiOlwiJmxsaGFyZDtcIixcIuKXulwiOlwiJmxsdHJpO1wiLFwixYBcIjpcIiZsbWlkb3Q7XCIsXCLijrBcIjpcIiZsbW91c3RhY2hlO1wiLFwi4omoXCI6XCImbG5lcXE7XCIsXCLiqolcIjpcIiZsbmFwcHJveDtcIixcIuKqh1wiOlwiJmxuZXE7XCIsXCLii6ZcIjpcIiZsbnNpbTtcIixcIuKfrFwiOlwiJmxvYW5nO1wiLFwi4oe9XCI6XCImbG9hcnI7XCIsXCLin7xcIjpcIiZ4bWFwO1wiLFwi4oasXCI6XCImcmFycmxwO1wiLFwi4qaFXCI6XCImbG9wYXI7XCIsXCLwnZWdXCI6XCImbG9wZjtcIixcIuKorVwiOlwiJmxvcGx1cztcIixcIuKotFwiOlwiJmxvdGltZXM7XCIsXCLiiJdcIjpcIiZsb3dhc3Q7XCIsXCLil4pcIjpcIiZsb3plbmdlO1wiLFwiKFwiOlwiJmxwYXI7XCIsXCLippNcIjpcIiZscGFybHQ7XCIsXCLipa1cIjpcIiZscmhhcmQ7XCIsXCLigI5cIjpcIiZscm07XCIsXCLiir9cIjpcIiZscnRyaTtcIixcIuKAuVwiOlwiJmxzYXF1bztcIixcIvCdk4FcIjpcIiZsc2NyO1wiLFwi4qqNXCI6XCImbHNpbWU7XCIsXCLiqo9cIjpcIiZsc2ltZztcIixcIuKAmlwiOlwiJnNicXVvO1wiLFwixYJcIjpcIiZsc3Ryb2s7XCIsXCLiqqZcIjpcIiZsdGNjO1wiLFwi4qm5XCI6XCImbHRjaXI7XCIsXCLii4lcIjpcIiZsdGltZXM7XCIsXCLipbZcIjpcIiZsdGxhcnI7XCIsXCLiqbtcIjpcIiZsdHF1ZXN0O1wiLFwi4qaWXCI6XCImbHRyUGFyO1wiLFwi4peDXCI6XCImdHJpYW5nbGVsZWZ0O1wiLFwi4qWKXCI6XCImbHVyZHNoYXI7XCIsXCLipaZcIjpcIiZsdXJ1aGFyO1wiLFwi4omo77iAXCI6XCImbHZuRTtcIixcIuKIulwiOlwiJm1ERG90O1wiLFwiwq9cIjpcIiZzdHJucztcIixcIuKZglwiOlwiJm1hbGU7XCIsXCLinKBcIjpcIiZtYWx0ZXNlO1wiLFwi4pauXCI6XCImbWFya2VyO1wiLFwi4qipXCI6XCImbWNvbW1hO1wiLFwi0LxcIjpcIiZtY3k7XCIsXCLigJRcIjpcIiZtZGFzaDtcIixcIvCdlKpcIjpcIiZtZnI7XCIsXCLihKdcIjpcIiZtaG87XCIsXCLCtVwiOlwiJm1pY3JvO1wiLFwi4quwXCI6XCImbWlkY2lyO1wiLFwi4oiSXCI6XCImbWludXM7XCIsXCLiqKpcIjpcIiZtaW51c2R1O1wiLFwi4qubXCI6XCImbWxjcDtcIixcIuKKp1wiOlwiJm1vZGVscztcIixcIvCdlZ5cIjpcIiZtb3BmO1wiLFwi8J2TglwiOlwiJm1zY3I7XCIsXCLOvFwiOlwiJm11O1wiLFwi4oq4XCI6XCImbXVtYXA7XCIsXCLii5nMuFwiOlwiJm5HZztcIixcIuKJq+KDklwiOlwiJm5HdDtcIixcIuKHjVwiOlwiJm5sQXJyO1wiLFwi4oeOXCI6XCImbmhBcnI7XCIsXCLii5jMuFwiOlwiJm5MbDtcIixcIuKJquKDklwiOlwiJm5MdDtcIixcIuKHj1wiOlwiJm5yQXJyO1wiLFwi4oqvXCI6XCImblZEYXNoO1wiLFwi4oquXCI6XCImblZkYXNoO1wiLFwixYRcIjpcIiZuYWN1dGU7XCIsXCLiiKDig5JcIjpcIiZuYW5nO1wiLFwi4qmwzLhcIjpcIiZuYXBFO1wiLFwi4omLzLhcIjpcIiZuYXBpZDtcIixcIsWJXCI6XCImbmFwb3M7XCIsXCLima5cIjpcIiZuYXR1cmFsO1wiLFwi4qmDXCI6XCImbmNhcDtcIixcIsWIXCI6XCImbmNhcm9uO1wiLFwixYZcIjpcIiZuY2VkaWw7XCIsXCLiqa3MuFwiOlwiJm5jb25nZG90O1wiLFwi4qmCXCI6XCImbmN1cDtcIixcItC9XCI6XCImbmN5O1wiLFwi4oCTXCI6XCImbmRhc2g7XCIsXCLih5dcIjpcIiZuZUFycjtcIixcIuKkpFwiOlwiJm5lYXJoaztcIixcIuKJkMy4XCI6XCImbmVkb3Q7XCIsXCLipKhcIjpcIiZ0b2VhO1wiLFwi8J2Uq1wiOlwiJm5mcjtcIixcIuKGrlwiOlwiJm5sZWZ0cmlnaHRhcnJvdztcIixcIuKrslwiOlwiJm5ocGFyO1wiLFwi4ou8XCI6XCImbmlzO1wiLFwi4ou6XCI6XCImbmlzZDtcIixcItGaXCI6XCImbmpjeTtcIixcIuKJpsy4XCI6XCImbmxlcXE7XCIsXCLihppcIjpcIiZubGVmdGFycm93O1wiLFwi4oClXCI6XCImbmxkcjtcIixcIvCdlZ9cIjpcIiZub3BmO1wiLFwiwqxcIjpcIiZub3Q7XCIsXCLii7nMuFwiOlwiJm5vdGluRTtcIixcIuKLtcy4XCI6XCImbm90aW5kb3Q7XCIsXCLii7dcIjpcIiZub3RpbnZiO1wiLFwi4ou2XCI6XCImbm90aW52YztcIixcIuKLvlwiOlwiJm5vdG5pdmI7XCIsXCLii71cIjpcIiZub3RuaXZjO1wiLFwi4qu94oOlXCI6XCImbnBhcnNsO1wiLFwi4oiCzLhcIjpcIiZucGFydDtcIixcIuKolFwiOlwiJm5wb2xpbnQ7XCIsXCLihptcIjpcIiZucmlnaHRhcnJvdztcIixcIuKks8y4XCI6XCImbnJhcnJjO1wiLFwi4oadzLhcIjpcIiZucmFycnc7XCIsXCLwnZODXCI6XCImbnNjcjtcIixcIuKKhFwiOlwiJm5zdWI7XCIsXCLiq4XMuFwiOlwiJm5zdWJzZXRlcXE7XCIsXCLiioVcIjpcIiZuc3VwO1wiLFwi4quGzLhcIjpcIiZuc3Vwc2V0ZXFxO1wiLFwiw7FcIjpcIiZudGlsZGU7XCIsXCLOvVwiOlwiJm51O1wiLFwiI1wiOlwiJm51bTtcIixcIuKEllwiOlwiJm51bWVybztcIixcIuKAh1wiOlwiJm51bXNwO1wiLFwi4oqtXCI6XCImbnZEYXNoO1wiLFwi4qSEXCI6XCImbnZIYXJyO1wiLFwi4omN4oOSXCI6XCImbnZhcDtcIixcIuKKrFwiOlwiJm52ZGFzaDtcIixcIuKJpeKDklwiOlwiJm52Z2U7XCIsXCI+4oOSXCI6XCImbnZndDtcIixcIuKnnlwiOlwiJm52aW5maW47XCIsXCLipIJcIjpcIiZudmxBcnI7XCIsXCLiiaTig5JcIjpcIiZudmxlO1wiLFwiPOKDklwiOlwiJm52bHQ7XCIsXCLiirTig5JcIjpcIiZudmx0cmllO1wiLFwi4qSDXCI6XCImbnZyQXJyO1wiLFwi4oq14oOSXCI6XCImbnZydHJpZTtcIixcIuKIvOKDklwiOlwiJm52c2ltO1wiLFwi4oeWXCI6XCImbndBcnI7XCIsXCLipKNcIjpcIiZud2FyaGs7XCIsXCLipKdcIjpcIiZud25lYXI7XCIsXCLDs1wiOlwiJm9hY3V0ZTtcIixcIsO0XCI6XCImb2NpcmM7XCIsXCLQvlwiOlwiJm9jeTtcIixcIsWRXCI6XCImb2RibGFjO1wiLFwi4qi4XCI6XCImb2RpdjtcIixcIuKmvFwiOlwiJm9kc29sZDtcIixcIsWTXCI6XCImb2VsaWc7XCIsXCLipr9cIjpcIiZvZmNpcjtcIixcIvCdlKxcIjpcIiZvZnI7XCIsXCLLm1wiOlwiJm9nb247XCIsXCLDslwiOlwiJm9ncmF2ZTtcIixcIuKngVwiOlwiJm9ndDtcIixcIuKmtVwiOlwiJm9oYmFyO1wiLFwi4qa+XCI6XCImb2xjaXI7XCIsXCLiprtcIjpcIiZvbGNyb3NzO1wiLFwi4qeAXCI6XCImb2x0O1wiLFwixY1cIjpcIiZvbWFjcjtcIixcIs+JXCI6XCImb21lZ2E7XCIsXCLOv1wiOlwiJm9taWNyb247XCIsXCLiprZcIjpcIiZvbWlkO1wiLFwi8J2VoFwiOlwiJm9vcGY7XCIsXCLiprdcIjpcIiZvcGFyO1wiLFwi4qa5XCI6XCImb3BlcnA7XCIsXCLiiKhcIjpcIiZ2ZWU7XCIsXCLiqZ1cIjpcIiZvcmQ7XCIsXCLihLRcIjpcIiZvc2NyO1wiLFwiwqpcIjpcIiZvcmRmO1wiLFwiwrpcIjpcIiZvcmRtO1wiLFwi4oq2XCI6XCImb3JpZ29mO1wiLFwi4qmWXCI6XCImb3JvcjtcIixcIuKpl1wiOlwiJm9yc2xvcGU7XCIsXCLiqZtcIjpcIiZvcnY7XCIsXCLDuFwiOlwiJm9zbGFzaDtcIixcIuKKmFwiOlwiJm9zb2w7XCIsXCLDtVwiOlwiJm90aWxkZTtcIixcIuKotlwiOlwiJm90aW1lc2FzO1wiLFwiw7ZcIjpcIiZvdW1sO1wiLFwi4oy9XCI6XCImb3ZiYXI7XCIsXCLCtlwiOlwiJnBhcmE7XCIsXCLiq7NcIjpcIiZwYXJzaW07XCIsXCLiq71cIjpcIiZwYXJzbDtcIixcItC/XCI6XCImcGN5O1wiLFwiJVwiOlwiJnBlcmNudDtcIixcIi5cIjpcIiZwZXJpb2Q7XCIsXCLigLBcIjpcIiZwZXJtaWw7XCIsXCLigLFcIjpcIiZwZXJ0ZW5rO1wiLFwi8J2UrVwiOlwiJnBmcjtcIixcIs+GXCI6XCImcGhpO1wiLFwiz5VcIjpcIiZ2YXJwaGk7XCIsXCLimI5cIjpcIiZwaG9uZTtcIixcIs+AXCI6XCImcGk7XCIsXCLPllwiOlwiJnZhcnBpO1wiLFwi4oSOXCI6XCImcGxhbmNraDtcIixcIitcIjpcIiZwbHVzO1wiLFwi4qijXCI6XCImcGx1c2FjaXI7XCIsXCLiqKJcIjpcIiZwbHVzY2lyO1wiLFwi4qilXCI6XCImcGx1c2R1O1wiLFwi4qmyXCI6XCImcGx1c2U7XCIsXCLiqKZcIjpcIiZwbHVzc2ltO1wiLFwi4qinXCI6XCImcGx1c3R3bztcIixcIuKolVwiOlwiJnBvaW50aW50O1wiLFwi8J2VoVwiOlwiJnBvcGY7XCIsXCLCo1wiOlwiJnBvdW5kO1wiLFwi4qqzXCI6XCImcHJFO1wiLFwi4qq3XCI6XCImcHJlY2FwcHJveDtcIixcIuKquVwiOlwiJnBybmFwO1wiLFwi4qq1XCI6XCImcHJuRTtcIixcIuKLqFwiOlwiJnBybnNpbTtcIixcIuKAslwiOlwiJnByaW1lO1wiLFwi4oyuXCI6XCImcHJvZmFsYXI7XCIsXCLijJJcIjpcIiZwcm9mbGluZTtcIixcIuKMk1wiOlwiJnByb2ZzdXJmO1wiLFwi4oqwXCI6XCImcHJ1cmVsO1wiLFwi8J2ThVwiOlwiJnBzY3I7XCIsXCLPiFwiOlwiJnBzaTtcIixcIuKAiFwiOlwiJnB1bmNzcDtcIixcIvCdlK5cIjpcIiZxZnI7XCIsXCLwnZWiXCI6XCImcW9wZjtcIixcIuKBl1wiOlwiJnFwcmltZTtcIixcIvCdk4ZcIjpcIiZxc2NyO1wiLFwi4qiWXCI6XCImcXVhdGludDtcIixcIj9cIjpcIiZxdWVzdDtcIixcIuKknFwiOlwiJnJBdGFpbDtcIixcIuKlpFwiOlwiJnJIYXI7XCIsXCLiiL3MsVwiOlwiJnJhY2U7XCIsXCLFlVwiOlwiJnJhY3V0ZTtcIixcIuKms1wiOlwiJnJhZW1wdHl2O1wiLFwi4qaSXCI6XCImcmFuZ2Q7XCIsXCLipqVcIjpcIiZyYW5nZTtcIixcIsK7XCI6XCImcmFxdW87XCIsXCLipbVcIjpcIiZyYXJyYXA7XCIsXCLipKBcIjpcIiZyYXJyYmZzO1wiLFwi4qSzXCI6XCImcmFycmM7XCIsXCLipJ5cIjpcIiZyYXJyZnM7XCIsXCLipYVcIjpcIiZyYXJycGw7XCIsXCLipbRcIjpcIiZyYXJyc2ltO1wiLFwi4oajXCI6XCImcmlnaHRhcnJvd3RhaWw7XCIsXCLihp1cIjpcIiZyaWdodHNxdWlnYXJyb3c7XCIsXCLipJpcIjpcIiZyYXRhaWw7XCIsXCLiiLZcIjpcIiZyYXRpbztcIixcIuKds1wiOlwiJnJiYnJrO1wiLFwifVwiOlwiJnJjdWI7XCIsXCJdXCI6XCImcnNxYjtcIixcIuKmjFwiOlwiJnJicmtlO1wiLFwi4qaOXCI6XCImcmJya3NsZDtcIixcIuKmkFwiOlwiJnJicmtzbHU7XCIsXCLFmVwiOlwiJnJjYXJvbjtcIixcIsWXXCI6XCImcmNlZGlsO1wiLFwi0YBcIjpcIiZyY3k7XCIsXCLipLdcIjpcIiZyZGNhO1wiLFwi4qWpXCI6XCImcmRsZGhhcjtcIixcIuKGs1wiOlwiJnJkc2g7XCIsXCLilq1cIjpcIiZyZWN0O1wiLFwi4qW9XCI6XCImcmZpc2h0O1wiLFwi8J2Ur1wiOlwiJnJmcjtcIixcIuKlrFwiOlwiJnJoYXJ1bDtcIixcIs+BXCI6XCImcmhvO1wiLFwiz7FcIjpcIiZ2YXJyaG87XCIsXCLih4lcIjpcIiZycmFycjtcIixcIuKLjFwiOlwiJnJ0aHJlZTtcIixcIsuaXCI6XCImcmluZztcIixcIuKAj1wiOlwiJnJsbTtcIixcIuKOsVwiOlwiJnJtb3VzdGFjaGU7XCIsXCLiq65cIjpcIiZybm1pZDtcIixcIuKfrVwiOlwiJnJvYW5nO1wiLFwi4oe+XCI6XCImcm9hcnI7XCIsXCLipoZcIjpcIiZyb3BhcjtcIixcIvCdlaNcIjpcIiZyb3BmO1wiLFwi4qiuXCI6XCImcm9wbHVzO1wiLFwi4qi1XCI6XCImcm90aW1lcztcIixcIilcIjpcIiZycGFyO1wiLFwi4qaUXCI6XCImcnBhcmd0O1wiLFwi4qiSXCI6XCImcnBwb2xpbnQ7XCIsXCLigLpcIjpcIiZyc2FxdW87XCIsXCLwnZOHXCI6XCImcnNjcjtcIixcIuKLilwiOlwiJnJ0aW1lcztcIixcIuKWuVwiOlwiJnRyaWFuZ2xlcmlnaHQ7XCIsXCLip45cIjpcIiZydHJpbHRyaTtcIixcIuKlqFwiOlwiJnJ1bHVoYXI7XCIsXCLihJ5cIjpcIiZyeDtcIixcIsWbXCI6XCImc2FjdXRlO1wiLFwi4qq0XCI6XCImc2NFO1wiLFwi4qq4XCI6XCImc3VjY2FwcHJveDtcIixcIsWhXCI6XCImc2Nhcm9uO1wiLFwixZ9cIjpcIiZzY2VkaWw7XCIsXCLFnVwiOlwiJnNjaXJjO1wiLFwi4qq2XCI6XCImc3VjY25lcXE7XCIsXCLiqrpcIjpcIiZzdWNjbmFwcHJveDtcIixcIuKLqVwiOlwiJnN1Y2Nuc2ltO1wiLFwi4qiTXCI6XCImc2Nwb2xpbnQ7XCIsXCLRgVwiOlwiJnNjeTtcIixcIuKLhVwiOlwiJnNkb3Q7XCIsXCLiqaZcIjpcIiZzZG90ZTtcIixcIuKHmFwiOlwiJnNlQXJyO1wiLFwiwqdcIjpcIiZzZWN0O1wiLFwiO1wiOlwiJnNlbWk7XCIsXCLipKlcIjpcIiZ0b3NhO1wiLFwi4py2XCI6XCImc2V4dDtcIixcIvCdlLBcIjpcIiZzZnI7XCIsXCLima9cIjpcIiZzaGFycDtcIixcItGJXCI6XCImc2hjaGN5O1wiLFwi0YhcIjpcIiZzaGN5O1wiLFwiwq1cIjpcIiZzaHk7XCIsXCLPg1wiOlwiJnNpZ21hO1wiLFwiz4JcIjpcIiZ2YXJzaWdtYTtcIixcIuKpqlwiOlwiJnNpbWRvdDtcIixcIuKqnlwiOlwiJnNpbWc7XCIsXCLiqqBcIjpcIiZzaW1nRTtcIixcIuKqnVwiOlwiJnNpbWw7XCIsXCLiqp9cIjpcIiZzaW1sRTtcIixcIuKJhlwiOlwiJnNpbW5lO1wiLFwi4qikXCI6XCImc2ltcGx1cztcIixcIuKlslwiOlwiJnNpbXJhcnI7XCIsXCLiqLNcIjpcIiZzbWFzaHA7XCIsXCLip6RcIjpcIiZzbWVwYXJzbDtcIixcIuKMo1wiOlwiJnNzbWlsZTtcIixcIuKqqlwiOlwiJnNtdDtcIixcIuKqrFwiOlwiJnNtdGU7XCIsXCLiqqzvuIBcIjpcIiZzbXRlcztcIixcItGMXCI6XCImc29mdGN5O1wiLFwiL1wiOlwiJnNvbDtcIixcIuKnhFwiOlwiJnNvbGI7XCIsXCLijL9cIjpcIiZzb2xiYXI7XCIsXCLwnZWkXCI6XCImc29wZjtcIixcIuKZoFwiOlwiJnNwYWRlc3VpdDtcIixcIuKKk++4gFwiOlwiJnNxY2FwcztcIixcIuKKlO+4gFwiOlwiJnNxY3VwcztcIixcIvCdk4hcIjpcIiZzc2NyO1wiLFwi4piGXCI6XCImc3RhcjtcIixcIuKKglwiOlwiJnN1YnNldDtcIixcIuKrhVwiOlwiJnN1YnNldGVxcTtcIixcIuKqvVwiOlwiJnN1YmRvdDtcIixcIuKrg1wiOlwiJnN1YmVkb3Q7XCIsXCLiq4FcIjpcIiZzdWJtdWx0O1wiLFwi4quLXCI6XCImc3Vic2V0bmVxcTtcIixcIuKKilwiOlwiJnN1YnNldG5lcTtcIixcIuKqv1wiOlwiJnN1YnBsdXM7XCIsXCLipblcIjpcIiZzdWJyYXJyO1wiLFwi4quHXCI6XCImc3Vic2ltO1wiLFwi4quVXCI6XCImc3Vic3ViO1wiLFwi4quTXCI6XCImc3Vic3VwO1wiLFwi4pmqXCI6XCImc3VuZztcIixcIsK5XCI6XCImc3VwMTtcIixcIsKyXCI6XCImc3VwMjtcIixcIsKzXCI6XCImc3VwMztcIixcIuKrhlwiOlwiJnN1cHNldGVxcTtcIixcIuKqvlwiOlwiJnN1cGRvdDtcIixcIuKrmFwiOlwiJnN1cGRzdWI7XCIsXCLiq4RcIjpcIiZzdXBlZG90O1wiLFwi4p+JXCI6XCImc3VwaHNvbDtcIixcIuKrl1wiOlwiJnN1cGhzdWI7XCIsXCLipbtcIjpcIiZzdXBsYXJyO1wiLFwi4quCXCI6XCImc3VwbXVsdDtcIixcIuKrjFwiOlwiJnN1cHNldG5lcXE7XCIsXCLiiotcIjpcIiZzdXBzZXRuZXE7XCIsXCLiq4BcIjpcIiZzdXBwbHVzO1wiLFwi4quIXCI6XCImc3Vwc2ltO1wiLFwi4quUXCI6XCImc3Vwc3ViO1wiLFwi4quWXCI6XCImc3Vwc3VwO1wiLFwi4oeZXCI6XCImc3dBcnI7XCIsXCLipKpcIjpcIiZzd253YXI7XCIsXCLDn1wiOlwiJnN6bGlnO1wiLFwi4oyWXCI6XCImdGFyZ2V0O1wiLFwiz4RcIjpcIiZ0YXU7XCIsXCLFpVwiOlwiJnRjYXJvbjtcIixcIsWjXCI6XCImdGNlZGlsO1wiLFwi0YJcIjpcIiZ0Y3k7XCIsXCLijJVcIjpcIiZ0ZWxyZWM7XCIsXCLwnZSxXCI6XCImdGZyO1wiLFwizrhcIjpcIiZ0aGV0YTtcIixcIs+RXCI6XCImdmFydGhldGE7XCIsXCLDvlwiOlwiJnRob3JuO1wiLFwiw5dcIjpcIiZ0aW1lcztcIixcIuKosVwiOlwiJnRpbWVzYmFyO1wiLFwi4qiwXCI6XCImdGltZXNkO1wiLFwi4oy2XCI6XCImdG9wYm90O1wiLFwi4quxXCI6XCImdG9wY2lyO1wiLFwi8J2VpVwiOlwiJnRvcGY7XCIsXCLiq5pcIjpcIiZ0b3Bmb3JrO1wiLFwi4oC0XCI6XCImdHByaW1lO1wiLFwi4pa1XCI6XCImdXRyaTtcIixcIuKJnFwiOlwiJnRyaWU7XCIsXCLil6xcIjpcIiZ0cmlkb3Q7XCIsXCLiqLpcIjpcIiZ0cmltaW51cztcIixcIuKouVwiOlwiJnRyaXBsdXM7XCIsXCLip41cIjpcIiZ0cmlzYjtcIixcIuKou1wiOlwiJnRyaXRpbWU7XCIsXCLij6JcIjpcIiZ0cnBleml1bTtcIixcIvCdk4lcIjpcIiZ0c2NyO1wiLFwi0YZcIjpcIiZ0c2N5O1wiLFwi0ZtcIjpcIiZ0c2hjeTtcIixcIsWnXCI6XCImdHN0cm9rO1wiLFwi4qWjXCI6XCImdUhhcjtcIixcIsO6XCI6XCImdWFjdXRlO1wiLFwi0Z5cIjpcIiZ1YnJjeTtcIixcIsWtXCI6XCImdWJyZXZlO1wiLFwiw7tcIjpcIiZ1Y2lyYztcIixcItGDXCI6XCImdWN5O1wiLFwixbFcIjpcIiZ1ZGJsYWM7XCIsXCLipb5cIjpcIiZ1ZmlzaHQ7XCIsXCLwnZSyXCI6XCImdWZyO1wiLFwiw7lcIjpcIiZ1Z3JhdmU7XCIsXCLiloBcIjpcIiZ1aGJsaztcIixcIuKMnFwiOlwiJnVsY29ybmVyO1wiLFwi4oyPXCI6XCImdWxjcm9wO1wiLFwi4pe4XCI6XCImdWx0cmk7XCIsXCLFq1wiOlwiJnVtYWNyO1wiLFwixbNcIjpcIiZ1b2dvbjtcIixcIvCdlaZcIjpcIiZ1b3BmO1wiLFwiz4VcIjpcIiZ1cHNpbG9uO1wiLFwi4oeIXCI6XCImdXVhcnI7XCIsXCLijJ1cIjpcIiZ1cmNvcm5lcjtcIixcIuKMjlwiOlwiJnVyY3JvcDtcIixcIsWvXCI6XCImdXJpbmc7XCIsXCLil7lcIjpcIiZ1cnRyaTtcIixcIvCdk4pcIjpcIiZ1c2NyO1wiLFwi4ouwXCI6XCImdXRkb3Q7XCIsXCLFqVwiOlwiJnV0aWxkZTtcIixcIsO8XCI6XCImdXVtbDtcIixcIuKmp1wiOlwiJnV3YW5nbGU7XCIsXCLiq6hcIjpcIiZ2QmFyO1wiLFwi4qupXCI6XCImdkJhcnY7XCIsXCLippxcIjpcIiZ2YW5ncnQ7XCIsXCLiiorvuIBcIjpcIiZ2c3VibmU7XCIsXCLiq4vvuIBcIjpcIiZ2c3VibkU7XCIsXCLiiovvuIBcIjpcIiZ2c3VwbmU7XCIsXCLiq4zvuIBcIjpcIiZ2c3VwbkU7XCIsXCLQslwiOlwiJnZjeTtcIixcIuKKu1wiOlwiJnZlZWJhcjtcIixcIuKJmlwiOlwiJnZlZWVxO1wiLFwi4ouuXCI6XCImdmVsbGlwO1wiLFwi8J2Us1wiOlwiJnZmcjtcIixcIvCdladcIjpcIiZ2b3BmO1wiLFwi8J2Ti1wiOlwiJnZzY3I7XCIsXCLipppcIjpcIiZ2emlnemFnO1wiLFwixbVcIjpcIiZ3Y2lyYztcIixcIuKpn1wiOlwiJndlZGJhcjtcIixcIuKJmVwiOlwiJndlZGdlcTtcIixcIuKEmFwiOlwiJndwO1wiLFwi8J2UtFwiOlwiJndmcjtcIixcIvCdlahcIjpcIiZ3b3BmO1wiLFwi8J2TjFwiOlwiJndzY3I7XCIsXCLwnZS1XCI6XCImeGZyO1wiLFwizr5cIjpcIiZ4aTtcIixcIuKLu1wiOlwiJnhuaXM7XCIsXCLwnZWpXCI6XCImeG9wZjtcIixcIvCdk41cIjpcIiZ4c2NyO1wiLFwiw71cIjpcIiZ5YWN1dGU7XCIsXCLRj1wiOlwiJnlhY3k7XCIsXCLFt1wiOlwiJnljaXJjO1wiLFwi0YtcIjpcIiZ5Y3k7XCIsXCLCpVwiOlwiJnllbjtcIixcIvCdlLZcIjpcIiZ5ZnI7XCIsXCLRl1wiOlwiJnlpY3k7XCIsXCLwnZWqXCI6XCImeW9wZjtcIixcIvCdk45cIjpcIiZ5c2NyO1wiLFwi0Y5cIjpcIiZ5dWN5O1wiLFwiw79cIjpcIiZ5dW1sO1wiLFwixbpcIjpcIiZ6YWN1dGU7XCIsXCLFvlwiOlwiJnpjYXJvbjtcIixcItC3XCI6XCImemN5O1wiLFwixbxcIjpcIiZ6ZG90O1wiLFwizrZcIjpcIiZ6ZXRhO1wiLFwi8J2Ut1wiOlwiJnpmcjtcIixcItC2XCI6XCImemhjeTtcIixcIuKHnVwiOlwiJnppZ3JhcnI7XCIsXCLwnZWrXCI6XCImem9wZjtcIixcIvCdk49cIjpcIiZ6c2NyO1wiLFwi4oCNXCI6XCImendqO1wiLFwi4oCMXCI6XCImenduajtcIn19fTsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6dHJ1ZX0pO2V4cG9ydHMubnVtZXJpY1VuaWNvZGVNYXA9ezA6NjU1MzMsMTI4OjgzNjQsMTMwOjgyMTgsMTMxOjQwMiwxMzI6ODIyMiwxMzM6ODIzMCwxMzQ6ODIyNCwxMzU6ODIyNSwxMzY6NzEwLDEzNzo4MjQwLDEzODozNTIsMTM5OjgyNDksMTQwOjMzOCwxNDI6MzgxLDE0NTo4MjE2LDE0Njo4MjE3LDE0Nzo4MjIwLDE0ODo4MjIxLDE0OTo4MjI2LDE1MDo4MjExLDE1MTo4MjEyLDE1Mjo3MzIsMTUzOjg0ODIsMTU0OjM1MywxNTU6ODI1MCwxNTY6MzM5LDE1ODozODIsMTU5OjM3Nn07IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOnRydWV9KTtleHBvcnRzLmZyb21Db2RlUG9pbnQ9U3RyaW5nLmZyb21Db2RlUG9pbnR8fGZ1bmN0aW9uKGFzdHJhbENvZGVQb2ludCl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoTWF0aC5mbG9vcigoYXN0cmFsQ29kZVBvaW50LTY1NTM2KS8xMDI0KSs1NTI5NiwoYXN0cmFsQ29kZVBvaW50LTY1NTM2KSUxMDI0KzU2MzIwKX07ZXhwb3J0cy5nZXRDb2RlUG9pbnQ9U3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdD9mdW5jdGlvbihpbnB1dCxwb3NpdGlvbil7cmV0dXJuIGlucHV0LmNvZGVQb2ludEF0KHBvc2l0aW9uKX06ZnVuY3Rpb24oaW5wdXQscG9zaXRpb24pe3JldHVybihpbnB1dC5jaGFyQ29kZUF0KHBvc2l0aW9uKS01NTI5NikqMTAyNCtpbnB1dC5jaGFyQ29kZUF0KHBvc2l0aW9uKzEpLTU2MzIwKzY1NTM2fTtleHBvcnRzLmhpZ2hTdXJyb2dhdGVGcm9tPTU1Mjk2O2V4cG9ydHMuaGlnaFN1cnJvZ2F0ZVRvPTU2MzE5OyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG4gIDxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCIgLz5cXG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIiAvPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCIgLz5cXG4gICAgPHRpdGxlPlZpcnR1YWwgS2V5Ym9hcmQ8L3RpdGxlPlxcbiAgPC9oZWFkPlxcbiAgPGJvZHk+XFxuICAgIDwhLS0gXFxuICAgIDxkaXYgY2xhc3M9XFxcIndyYXBwZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtYXJlYVxcXCI+XFxuICAgICAgICA8dGV4dGFyZWEgYXV0b2ZvY3VzPjwvdGV4dGFyZWE+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwia2V5c1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJrZXlcXFwiPlxcbiAgICAgICAgICAgIDxrYmQ+QTwva2JkPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwia2V5XFxcIj5cXG4gICAgICAgICAgICA8a2JkPkE8L2tiZD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImtleVxcXCI+XFxuICAgICAgICAgICAgPGtiZD5BPC9rYmQ+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2Plxcbi0tPlxcbiAgPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmltcG9ydCB7IGxvZyB9IGZyb20gXCIuLi91dGlscy9sb2cuanNcIjtcblxudmFyIFdlYlNvY2tldENsaWVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBmdW5jdGlvbiBXZWJTb2NrZXRDbGllbnQodXJsKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdlYlNvY2tldENsaWVudCk7XG5cbiAgICB0aGlzLmNsaWVudCA9IG5ldyBXZWJTb2NrZXQodXJsKTtcblxuICAgIHRoaXMuY2xpZW50Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGxvZy5lcnJvcihlcnJvcik7XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHsoLi4uYXJnczogYW55W10pID0+IHZvaWR9IGZcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoV2ViU29ja2V0Q2xpZW50LCBbe1xuICAgIGtleTogXCJvbk9wZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25PcGVuKGYpIHtcbiAgICAgIHRoaXMuY2xpZW50Lm9ub3BlbiA9IGY7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkfSBmXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvbkNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xvc2UoZikge1xuICAgICAgdGhpcy5jbGllbnQub25jbG9zZSA9IGY7XG4gICAgfSAvLyBjYWxsIGYgd2l0aCB0aGUgbWVzc2FnZSBzdHJpbmcgYXMgdGhlIGZpcnN0IGFyZ3VtZW50XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZH0gZlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25NZXNzYWdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTWVzc2FnZShmKSB7XG4gICAgICB0aGlzLmNsaWVudC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBmKGUuZGF0YSk7XG4gICAgICB9O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXZWJTb2NrZXRDbGllbnQ7XG59KCk7XG5cbmV4cG9ydCB7IFdlYlNvY2tldENsaWVudCBhcyBkZWZhdWx0IH07IiwiLyogZ2xvYmFsIF9fcmVzb3VyY2VRdWVyeSwgX193ZWJwYWNrX2hhc2hfXyAqL1xuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ3ZWJwYWNrL21vZHVsZVwiIC8+XG5pbXBvcnQgd2VicGFja0hvdExvZyBmcm9tIFwid2VicGFjay9ob3QvbG9nLmpzXCI7XG5pbXBvcnQgc3RyaXBBbnNpIGZyb20gXCIuL3V0aWxzL3N0cmlwQW5zaS5qc1wiO1xuaW1wb3J0IHBhcnNlVVJMIGZyb20gXCIuL3V0aWxzL3BhcnNlVVJMLmpzXCI7XG5pbXBvcnQgc29ja2V0IGZyb20gXCIuL3NvY2tldC5qc1wiO1xuaW1wb3J0IHsgZm9ybWF0UHJvYmxlbSwgc2hvdywgaGlkZSB9IGZyb20gXCIuL292ZXJsYXkuanNcIjtcbmltcG9ydCB7IGxvZywgc2V0TG9nTGV2ZWwgfSBmcm9tIFwiLi91dGlscy9sb2cuanNcIjtcbmltcG9ydCBzZW5kTWVzc2FnZSBmcm9tIFwiLi91dGlscy9zZW5kTWVzc2FnZS5qc1wiO1xuaW1wb3J0IHJlbG9hZEFwcCBmcm9tIFwiLi91dGlscy9yZWxvYWRBcHAuanNcIjtcbmltcG9ydCBjcmVhdGVTb2NrZXRVUkwgZnJvbSBcIi4vdXRpbHMvY3JlYXRlU29ja2V0VVJMLmpzXCI7XG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaG90XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGxpdmVSZWxvYWRcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcHJvZ3Jlc3NcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IHsgd2FybmluZ3M/OiBib29sZWFuLCBlcnJvcnM/OiBib29sZWFuIH19IG92ZXJsYXlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbbG9nZ2luZ11cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbcmVjb25uZWN0XVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU3RhdHVzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzVW5sb2FkaW5nXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY3VycmVudEhhc2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbcHJldmlvdXNIYXNoXVxuICovXG5cbi8qKlxuICogQHR5cGUge1N0YXR1c31cbiAqL1xuXG52YXIgc3RhdHVzID0ge1xuICBpc1VubG9hZGluZzogZmFsc2UsXG4gIC8vIFRPRE8gV29ya2Fyb3VuZCBmb3Igd2VicGFjayB2NCwgYF9fd2VicGFja19oYXNoX19gIGlzIG5vdCByZXBsYWNlZCB3aXRob3V0IEhvdE1vZHVsZVJlcGxhY2VtZW50XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgY3VycmVudEhhc2g6IHR5cGVvZiBfX3dlYnBhY2tfaGFzaF9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX2hhc2hfXyA6IFwiXCJcbn07XG4vKiogQHR5cGUge09wdGlvbnN9ICovXG5cbnZhciBvcHRpb25zID0ge1xuICBob3Q6IGZhbHNlLFxuICBsaXZlUmVsb2FkOiBmYWxzZSxcbiAgcHJvZ3Jlc3M6IGZhbHNlLFxuICBvdmVybGF5OiBmYWxzZVxufTtcbnZhciBwYXJzZWRSZXNvdXJjZVF1ZXJ5ID0gcGFyc2VVUkwoX19yZXNvdXJjZVF1ZXJ5KTtcblxuaWYgKHBhcnNlZFJlc291cmNlUXVlcnkuaG90ID09PSBcInRydWVcIikge1xuICBvcHRpb25zLmhvdCA9IHRydWU7XG4gIGxvZy5pbmZvKFwiSG90IE1vZHVsZSBSZXBsYWNlbWVudCBlbmFibGVkLlwiKTtcbn1cblxuaWYgKHBhcnNlZFJlc291cmNlUXVlcnlbXCJsaXZlLXJlbG9hZFwiXSA9PT0gXCJ0cnVlXCIpIHtcbiAgb3B0aW9ucy5saXZlUmVsb2FkID0gdHJ1ZTtcbiAgbG9nLmluZm8oXCJMaXZlIFJlbG9hZGluZyBlbmFibGVkLlwiKTtcbn1cblxuaWYgKHBhcnNlZFJlc291cmNlUXVlcnkubG9nZ2luZykge1xuICBvcHRpb25zLmxvZ2dpbmcgPSBwYXJzZWRSZXNvdXJjZVF1ZXJ5LmxvZ2dpbmc7XG59XG5cbmlmICh0eXBlb2YgcGFyc2VkUmVzb3VyY2VRdWVyeS5yZWNvbm5lY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgb3B0aW9ucy5yZWNvbm5lY3QgPSBOdW1iZXIocGFyc2VkUmVzb3VyY2VRdWVyeS5yZWNvbm5lY3QpO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWxcbiAqL1xuXG5cbmZ1bmN0aW9uIHNldEFsbExvZ0xldmVsKGxldmVsKSB7XG4gIC8vIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIEhNUiBsb2dnZXIgb3BlcmF0ZSBzZXBhcmF0ZWx5IGZyb20gZGV2IHNlcnZlciBsb2dnZXJcbiAgd2VicGFja0hvdExvZy5zZXRMb2dMZXZlbChsZXZlbCA9PT0gXCJ2ZXJib3NlXCIgfHwgbGV2ZWwgPT09IFwibG9nXCIgPyBcImluZm9cIiA6IGxldmVsKTtcbiAgc2V0TG9nTGV2ZWwobGV2ZWwpO1xufVxuXG5pZiAob3B0aW9ucy5sb2dnaW5nKSB7XG4gIHNldEFsbExvZ0xldmVsKG9wdGlvbnMubG9nZ2luZyk7XG59XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gIHN0YXR1cy5pc1VubG9hZGluZyA9IHRydWU7XG59KTtcbnZhciBvblNvY2tldE1lc3NhZ2UgPSB7XG4gIGhvdDogZnVuY3Rpb24gaG90KCkge1xuICAgIGlmIChwYXJzZWRSZXNvdXJjZVF1ZXJ5LmhvdCA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3B0aW9ucy5ob3QgPSB0cnVlO1xuICAgIGxvZy5pbmZvKFwiSG90IE1vZHVsZSBSZXBsYWNlbWVudCBlbmFibGVkLlwiKTtcbiAgfSxcbiAgbGl2ZVJlbG9hZDogZnVuY3Rpb24gbGl2ZVJlbG9hZCgpIHtcbiAgICBpZiAocGFyc2VkUmVzb3VyY2VRdWVyeVtcImxpdmUtcmVsb2FkXCJdID09PSBcImZhbHNlXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvcHRpb25zLmxpdmVSZWxvYWQgPSB0cnVlO1xuICAgIGxvZy5pbmZvKFwiTGl2ZSBSZWxvYWRpbmcgZW5hYmxlZC5cIik7XG4gIH0sXG4gIGludmFsaWQ6IGZ1bmN0aW9uIGludmFsaWQoKSB7XG4gICAgbG9nLmluZm8oXCJBcHAgdXBkYXRlZC4gUmVjb21waWxpbmcuLi5cIik7IC8vIEZpeGVzICMxMDQyLiBvdmVybGF5IGRvZXNuJ3QgY2xlYXIgaWYgZXJyb3JzIGFyZSBmaXhlZCBidXQgd2FybmluZ3MgcmVtYWluLlxuXG4gICAgaWYgKG9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgaGlkZSgpO1xuICAgIH1cblxuICAgIHNlbmRNZXNzYWdlKFwiSW52YWxpZFwiKTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICovXG4gIGhhc2g6IGZ1bmN0aW9uIGhhc2goX2hhc2gpIHtcbiAgICBzdGF0dXMucHJldmlvdXNIYXNoID0gc3RhdHVzLmN1cnJlbnRIYXNoO1xuICAgIHN0YXR1cy5jdXJyZW50SGFzaCA9IF9oYXNoO1xuICB9LFxuICBsb2dnaW5nOiBzZXRBbGxMb2dMZXZlbCxcblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgb3ZlcmxheTogZnVuY3Rpb24gb3ZlcmxheSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvcHRpb25zLm92ZXJsYXkgPSB2YWx1ZTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAqL1xuICByZWNvbm5lY3Q6IGZ1bmN0aW9uIHJlY29ubmVjdCh2YWx1ZSkge1xuICAgIGlmIChwYXJzZWRSZXNvdXJjZVF1ZXJ5LnJlY29ubmVjdCA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3B0aW9ucy5yZWNvbm5lY3QgPSB2YWx1ZTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgcHJvZ3Jlc3M6IGZ1bmN0aW9uIHByb2dyZXNzKHZhbHVlKSB7XG4gICAgb3B0aW9ucy5wcm9ncmVzcyA9IHZhbHVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3sgcGx1Z2luTmFtZT86IHN0cmluZywgcGVyY2VudDogbnVtYmVyLCBtc2c6IHN0cmluZyB9fSBkYXRhXG4gICAqL1xuICBcInByb2dyZXNzLXVwZGF0ZVwiOiBmdW5jdGlvbiBwcm9ncmVzc1VwZGF0ZShkYXRhKSB7XG4gICAgaWYgKG9wdGlvbnMucHJvZ3Jlc3MpIHtcbiAgICAgIGxvZy5pbmZvKFwiXCIuY29uY2F0KGRhdGEucGx1Z2luTmFtZSA/IFwiW1wiLmNvbmNhdChkYXRhLnBsdWdpbk5hbWUsIFwiXSBcIikgOiBcIlwiKS5jb25jYXQoZGF0YS5wZXJjZW50LCBcIiUgLSBcIikuY29uY2F0KGRhdGEubXNnLCBcIi5cIikpO1xuICAgIH1cblxuICAgIHNlbmRNZXNzYWdlKFwiUHJvZ3Jlc3NcIiwgZGF0YSk7XG4gIH0sXG4gIFwic3RpbGwtb2tcIjogZnVuY3Rpb24gc3RpbGxPaygpIHtcbiAgICBsb2cuaW5mbyhcIk5vdGhpbmcgY2hhbmdlZC5cIik7XG5cbiAgICBpZiAob3B0aW9ucy5vdmVybGF5KSB7XG4gICAgICBoaWRlKCk7XG4gICAgfVxuXG4gICAgc2VuZE1lc3NhZ2UoXCJTdGlsbE9rXCIpO1xuICB9LFxuICBvazogZnVuY3Rpb24gb2soKSB7XG4gICAgc2VuZE1lc3NhZ2UoXCJPa1wiKTtcblxuICAgIGlmIChvcHRpb25zLm92ZXJsYXkpIHtcbiAgICAgIGhpZGUoKTtcbiAgICB9XG5cbiAgICByZWxvYWRBcHAob3B0aW9ucywgc3RhdHVzKTtcbiAgfSxcbiAgLy8gVE9ETzogcmVtb3ZlIGluIHY1IGluIGZhdm9yIG9mICdzdGF0aWMtY2hhbmdlZCdcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVcbiAgICovXG4gIFwiY29udGVudC1jaGFuZ2VkXCI6IGZ1bmN0aW9uIGNvbnRlbnRDaGFuZ2VkKGZpbGUpIHtcbiAgICBsb2cuaW5mbyhcIlwiLmNvbmNhdChmaWxlID8gXCJcXFwiXCIuY29uY2F0KGZpbGUsIFwiXFxcIlwiKSA6IFwiQ29udGVudFwiLCBcIiBmcm9tIHN0YXRpYyBkaXJlY3Rvcnkgd2FzIGNoYW5nZWQuIFJlbG9hZGluZy4uLlwiKSk7XG4gICAgc2VsZi5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVcbiAgICovXG4gIFwic3RhdGljLWNoYW5nZWRcIjogZnVuY3Rpb24gc3RhdGljQ2hhbmdlZChmaWxlKSB7XG4gICAgbG9nLmluZm8oXCJcIi5jb25jYXQoZmlsZSA/IFwiXFxcIlwiLmNvbmNhdChmaWxlLCBcIlxcXCJcIikgOiBcIkNvbnRlbnRcIiwgXCIgZnJvbSBzdGF0aWMgZGlyZWN0b3J5IHdhcyBjaGFuZ2VkLiBSZWxvYWRpbmcuLi5cIikpO1xuICAgIHNlbGYubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXJyb3JbXX0gd2FybmluZ3NcbiAgICogQHBhcmFtIHthbnl9IHBhcmFtc1xuICAgKi9cbiAgd2FybmluZ3M6IGZ1bmN0aW9uIHdhcm5pbmdzKF93YXJuaW5ncywgcGFyYW1zKSB7XG4gICAgbG9nLndhcm4oXCJXYXJuaW5ncyB3aGlsZSBjb21waWxpbmcuXCIpO1xuXG4gICAgdmFyIHByaW50YWJsZVdhcm5pbmdzID0gX3dhcm5pbmdzLm1hcChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIHZhciBfZm9ybWF0UHJvYmxlbSA9IGZvcm1hdFByb2JsZW0oXCJ3YXJuaW5nXCIsIGVycm9yKSxcbiAgICAgICAgICBoZWFkZXIgPSBfZm9ybWF0UHJvYmxlbS5oZWFkZXIsXG4gICAgICAgICAgYm9keSA9IF9mb3JtYXRQcm9ibGVtLmJvZHk7XG5cbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChoZWFkZXIsIFwiXFxuXCIpLmNvbmNhdChzdHJpcEFuc2koYm9keSkpO1xuICAgIH0pO1xuXG4gICAgc2VuZE1lc3NhZ2UoXCJXYXJuaW5nc1wiLCBwcmludGFibGVXYXJuaW5ncyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByaW50YWJsZVdhcm5pbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsb2cud2FybihwcmludGFibGVXYXJuaW5nc1tpXSk7XG4gICAgfVxuXG4gICAgdmFyIG5lZWRTaG93T3ZlcmxheUZvcldhcm5pbmdzID0gdHlwZW9mIG9wdGlvbnMub3ZlcmxheSA9PT0gXCJib29sZWFuXCIgPyBvcHRpb25zLm92ZXJsYXkgOiBvcHRpb25zLm92ZXJsYXkgJiYgb3B0aW9ucy5vdmVybGF5Lndhcm5pbmdzO1xuXG4gICAgaWYgKG5lZWRTaG93T3ZlcmxheUZvcldhcm5pbmdzKSB7XG4gICAgICBzaG93KFwid2FybmluZ1wiLCBfd2FybmluZ3MpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByZXZlbnRSZWxvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZWxvYWRBcHAob3B0aW9ucywgc3RhdHVzKTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtFcnJvcltdfSBlcnJvcnNcbiAgICovXG4gIGVycm9yczogZnVuY3Rpb24gZXJyb3JzKF9lcnJvcnMpIHtcbiAgICBsb2cuZXJyb3IoXCJFcnJvcnMgd2hpbGUgY29tcGlsaW5nLiBSZWxvYWQgcHJldmVudGVkLlwiKTtcblxuICAgIHZhciBwcmludGFibGVFcnJvcnMgPSBfZXJyb3JzLm1hcChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIHZhciBfZm9ybWF0UHJvYmxlbTIgPSBmb3JtYXRQcm9ibGVtKFwiZXJyb3JcIiwgZXJyb3IpLFxuICAgICAgICAgIGhlYWRlciA9IF9mb3JtYXRQcm9ibGVtMi5oZWFkZXIsXG4gICAgICAgICAgYm9keSA9IF9mb3JtYXRQcm9ibGVtMi5ib2R5O1xuXG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQoaGVhZGVyLCBcIlxcblwiKS5jb25jYXQoc3RyaXBBbnNpKGJvZHkpKTtcbiAgICB9KTtcblxuICAgIHNlbmRNZXNzYWdlKFwiRXJyb3JzXCIsIHByaW50YWJsZUVycm9ycyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByaW50YWJsZUVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgbG9nLmVycm9yKHByaW50YWJsZUVycm9yc1tpXSk7XG4gICAgfVxuXG4gICAgdmFyIG5lZWRTaG93T3ZlcmxheUZvckVycm9ycyA9IHR5cGVvZiBvcHRpb25zLm92ZXJsYXkgPT09IFwiYm9vbGVhblwiID8gb3B0aW9ucy5vdmVybGF5IDogb3B0aW9ucy5vdmVybGF5ICYmIG9wdGlvbnMub3ZlcmxheS5lcnJvcnM7XG5cbiAgICBpZiAobmVlZFNob3dPdmVybGF5Rm9yRXJyb3JzKSB7XG4gICAgICBzaG93KFwiZXJyb3JcIiwgX2Vycm9ycyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Vycm9yfSBlcnJvclxuICAgKi9cbiAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKF9lcnJvcikge1xuICAgIGxvZy5lcnJvcihfZXJyb3IpO1xuICB9LFxuICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgbG9nLmluZm8oXCJEaXNjb25uZWN0ZWQhXCIpO1xuXG4gICAgaWYgKG9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgaGlkZSgpO1xuICAgIH1cblxuICAgIHNlbmRNZXNzYWdlKFwiQ2xvc2VcIik7XG4gIH1cbn07XG52YXIgc29ja2V0VVJMID0gY3JlYXRlU29ja2V0VVJMKHBhcnNlZFJlc291cmNlUXVlcnkpO1xuc29ja2V0KHNvY2tldFVSTCwgb25Tb2NrZXRNZXNzYWdlLCBvcHRpb25zLnJlY29ubmVjdCk7IiwiLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdFwidXNlIHN0cmljdFwiO1xuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIFwiLi9jbGllbnQtc3JjL21vZHVsZXMvbG9nZ2VyL1N5bmNCYWlsSG9va0Zha2UuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9jbGllbnQtc3JjL21vZHVsZXMvbG9nZ2VyL1N5bmNCYWlsSG9va0Zha2UuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cblxuLyoqXG4gKiBDbGllbnQgc3R1YiBmb3IgdGFwYWJsZSBTeW5jQmFpbEhvb2tcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNsaWVudFRhcGFibGVTeW5jQmFpbEhvb2soKSB7XG4gIHJldHVybiB7XG4gICAgY2FsbDogZnVuY3Rpb24gY2FsbCgpIHt9XG4gIH07XG59O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL0xvZ2dlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL0xvZ2dlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cykge1xuXG4vKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyWyh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG52YXIgTG9nVHlwZSA9IE9iamVjdC5mcmVlemUoe1xuICBlcnJvcjpcbiAgLyoqIEB0eXBlIHtcImVycm9yXCJ9ICovXG4gIFwiZXJyb3JcIixcbiAgLy8gbWVzc2FnZSwgYyBzdHlsZSBhcmd1bWVudHNcbiAgd2FybjpcbiAgLyoqIEB0eXBlIHtcIndhcm5cIn0gKi9cbiAgXCJ3YXJuXCIsXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG4gIGluZm86XG4gIC8qKiBAdHlwZSB7XCJpbmZvXCJ9ICovXG4gIFwiaW5mb1wiLFxuICAvLyBtZXNzYWdlLCBjIHN0eWxlIGFyZ3VtZW50c1xuICBsb2c6XG4gIC8qKiBAdHlwZSB7XCJsb2dcIn0gKi9cbiAgXCJsb2dcIixcbiAgLy8gbWVzc2FnZSwgYyBzdHlsZSBhcmd1bWVudHNcbiAgZGVidWc6XG4gIC8qKiBAdHlwZSB7XCJkZWJ1Z1wifSAqL1xuICBcImRlYnVnXCIsXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG4gIHRyYWNlOlxuICAvKiogQHR5cGUge1widHJhY2VcIn0gKi9cbiAgXCJ0cmFjZVwiLFxuICAvLyBubyBhcmd1bWVudHNcbiAgZ3JvdXA6XG4gIC8qKiBAdHlwZSB7XCJncm91cFwifSAqL1xuICBcImdyb3VwXCIsXG4gIC8vIFtsYWJlbF1cbiAgZ3JvdXBDb2xsYXBzZWQ6XG4gIC8qKiBAdHlwZSB7XCJncm91cENvbGxhcHNlZFwifSAqL1xuICBcImdyb3VwQ29sbGFwc2VkXCIsXG4gIC8vIFtsYWJlbF1cbiAgZ3JvdXBFbmQ6XG4gIC8qKiBAdHlwZSB7XCJncm91cEVuZFwifSAqL1xuICBcImdyb3VwRW5kXCIsXG4gIC8vIFtsYWJlbF1cbiAgcHJvZmlsZTpcbiAgLyoqIEB0eXBlIHtcInByb2ZpbGVcIn0gKi9cbiAgXCJwcm9maWxlXCIsXG4gIC8vIFtwcm9maWxlTmFtZV1cbiAgcHJvZmlsZUVuZDpcbiAgLyoqIEB0eXBlIHtcInByb2ZpbGVFbmRcIn0gKi9cbiAgXCJwcm9maWxlRW5kXCIsXG4gIC8vIFtwcm9maWxlTmFtZV1cbiAgdGltZTpcbiAgLyoqIEB0eXBlIHtcInRpbWVcIn0gKi9cbiAgXCJ0aW1lXCIsXG4gIC8vIG5hbWUsIHRpbWUgYXMgW3NlY29uZHMsIG5hbm9zZWNvbmRzXVxuICBjbGVhcjpcbiAgLyoqIEB0eXBlIHtcImNsZWFyXCJ9ICovXG4gIFwiY2xlYXJcIixcbiAgLy8gbm8gYXJndW1lbnRzXG4gIHN0YXR1czpcbiAgLyoqIEB0eXBlIHtcInN0YXR1c1wifSAqL1xuICBcInN0YXR1c1wiIC8vIG1lc3NhZ2UsIGFyZ3VtZW50c1xuXG59KTtcbmV4cG9ydHMuTG9nVHlwZSA9IExvZ1R5cGU7XG4vKiogQHR5cGVkZWYge3R5cGVvZiBMb2dUeXBlW2tleW9mIHR5cGVvZiBMb2dUeXBlXX0gTG9nVHlwZUVudW0gKi9cblxudmFyIExPR19TWU1CT0wgPSAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KShcIndlYnBhY2sgbG9nZ2VyIHJhdyBsb2cgbWV0aG9kXCIpO1xudmFyIFRJTUVSU19TWU1CT0wgPSAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KShcIndlYnBhY2sgbG9nZ2VyIHRpbWVzXCIpO1xudmFyIFRJTUVSU19BR0dSRUdBVEVTX1NZTUJPTCA9ICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pKFwid2VicGFjayBsb2dnZXIgYWdncmVnYXRlZCB0aW1lc1wiKTtcblxudmFyIFdlYnBhY2tMb2dnZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHBhcmFtIHtmdW5jdGlvbihMb2dUeXBlRW51bSwgYW55W109KTogdm9pZH0gbG9nIGxvZyBmdW5jdGlvblxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyB8IGZ1bmN0aW9uKCk6IHN0cmluZyk6IFdlYnBhY2tMb2dnZXJ9IGdldENoaWxkTG9nZ2VyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBjaGlsZCBsb2dnZXJcbiAgICovXG4gIGZ1bmN0aW9uIFdlYnBhY2tMb2dnZXIobG9nLCBnZXRDaGlsZExvZ2dlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXZWJwYWNrTG9nZ2VyKTtcblxuICAgIHRoaXNbTE9HX1NZTUJPTF0gPSBsb2c7XG4gICAgdGhpcy5nZXRDaGlsZExvZ2dlciA9IGdldENoaWxkTG9nZ2VyO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFdlYnBhY2tMb2dnZXIsIFt7XG4gICAga2V5OiBcImVycm9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5lcnJvciwgYXJncyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIndhcm5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2FybigpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS53YXJuLCBhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW5mb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbmZvKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgIH1cblxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmluZm8sIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2dcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9nKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgIH1cblxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmxvZywgYXJncyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlYnVnXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgICAgIH1cblxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmRlYnVnLCBhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXNzZXJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFzc2VydChhc3NlcnRpb24pIHtcbiAgICAgIGlmICghYXNzZXJ0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNiA+IDEgPyBfbGVuNiAtIDEgOiAwKSwgX2tleTYgPSAxOyBfa2V5NiA8IF9sZW42OyBfa2V5NisrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5NiAtIDFdID0gYXJndW1lbnRzW19rZXk2XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5lcnJvciwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRyYWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyYWNlKCkge1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLnRyYWNlLCBbXCJUcmFjZVwiXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsZWFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmNsZWFyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdHVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXR1cygpIHtcbiAgICAgIGZvciAodmFyIF9sZW43ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNyksIF9rZXk3ID0gMDsgX2tleTcgPCBfbGVuNzsgX2tleTcrKykge1xuICAgICAgICBhcmdzW19rZXk3XSA9IGFyZ3VtZW50c1tfa2V5N107XG4gICAgICB9XG5cbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5zdGF0dXMsIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJncm91cFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBncm91cCgpIHtcbiAgICAgIGZvciAodmFyIF9sZW44ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuOCksIF9rZXk4ID0gMDsgX2tleTggPCBfbGVuODsgX2tleTgrKykge1xuICAgICAgICBhcmdzW19rZXk4XSA9IGFyZ3VtZW50c1tfa2V5OF07XG4gICAgICB9XG5cbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5ncm91cCwgYXJncyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdyb3VwQ29sbGFwc2VkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdyb3VwQ29sbGFwc2VkKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjkgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW45KSwgX2tleTkgPSAwOyBfa2V5OSA8IF9sZW45OyBfa2V5OSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTldID0gYXJndW1lbnRzW19rZXk5XTtcbiAgICAgIH1cblxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmdyb3VwQ29sbGFwc2VkLCBhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ3JvdXBFbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ3JvdXBFbmQoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMTAgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4xMCksIF9rZXkxMCA9IDA7IF9rZXkxMCA8IF9sZW4xMDsgX2tleTEwKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MTBdID0gYXJndW1lbnRzW19rZXkxMF07XG4gICAgICB9XG5cbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5ncm91cEVuZCwgYXJncyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInByb2ZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJvZmlsZShsYWJlbCkge1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLnByb2ZpbGUsIFtsYWJlbF0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwcm9maWxlRW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByb2ZpbGVFbmQobGFiZWwpIHtcbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5wcm9maWxlRW5kLCBbbGFiZWxdKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0aW1lKGxhYmVsKSB7XG4gICAgICB0aGlzW1RJTUVSU19TWU1CT0xdID0gdGhpc1tUSU1FUlNfU1lNQk9MXSB8fCBuZXcgTWFwKCk7XG4gICAgICB0aGlzW1RJTUVSU19TWU1CT0xdLnNldChsYWJlbCwgcHJvY2Vzcy5ocnRpbWUoKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRpbWVMb2dcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGltZUxvZyhsYWJlbCkge1xuICAgICAgdmFyIHByZXYgPSB0aGlzW1RJTUVSU19TWU1CT0xdICYmIHRoaXNbVElNRVJTX1NZTUJPTF0uZ2V0KGxhYmVsKTtcblxuICAgICAgaWYgKCFwcmV2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHN1Y2ggbGFiZWwgJ1wiLmNvbmNhdChsYWJlbCwgXCInIGZvciBXZWJwYWNrTG9nZ2VyLnRpbWVMb2coKVwiKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0aW1lID0gcHJvY2Vzcy5ocnRpbWUocHJldik7XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUudGltZSwgW2xhYmVsXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHRpbWUpKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRpbWVFbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGltZUVuZChsYWJlbCkge1xuICAgICAgdmFyIHByZXYgPSB0aGlzW1RJTUVSU19TWU1CT0xdICYmIHRoaXNbVElNRVJTX1NZTUJPTF0uZ2V0KGxhYmVsKTtcblxuICAgICAgaWYgKCFwcmV2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHN1Y2ggbGFiZWwgJ1wiLmNvbmNhdChsYWJlbCwgXCInIGZvciBXZWJwYWNrTG9nZ2VyLnRpbWVFbmQoKVwiKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0aW1lID0gcHJvY2Vzcy5ocnRpbWUocHJldik7XG4gICAgICB0aGlzW1RJTUVSU19TWU1CT0xdLmRlbGV0ZShsYWJlbCk7XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUudGltZSwgW2xhYmVsXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHRpbWUpKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRpbWVBZ2dyZWdhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGltZUFnZ3JlZ2F0ZShsYWJlbCkge1xuICAgICAgdmFyIHByZXYgPSB0aGlzW1RJTUVSU19TWU1CT0xdICYmIHRoaXNbVElNRVJTX1NZTUJPTF0uZ2V0KGxhYmVsKTtcblxuICAgICAgaWYgKCFwcmV2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHN1Y2ggbGFiZWwgJ1wiLmNvbmNhdChsYWJlbCwgXCInIGZvciBXZWJwYWNrTG9nZ2VyLnRpbWVBZ2dyZWdhdGUoKVwiKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0aW1lID0gcHJvY2Vzcy5ocnRpbWUocHJldik7XG4gICAgICB0aGlzW1RJTUVSU19TWU1CT0xdLmRlbGV0ZShsYWJlbCk7XG4gICAgICB0aGlzW1RJTUVSU19BR0dSRUdBVEVTX1NZTUJPTF0gPSB0aGlzW1RJTUVSU19BR0dSRUdBVEVTX1NZTUJPTF0gfHwgbmV3IE1hcCgpO1xuICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzW1RJTUVSU19BR0dSRUdBVEVTX1NZTUJPTF0uZ2V0KGxhYmVsKTtcblxuICAgICAgaWYgKGN1cnJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodGltZVsxXSArIGN1cnJlbnRbMV0gPiAxZTkpIHtcbiAgICAgICAgICB0aW1lWzBdICs9IGN1cnJlbnRbMF0gKyAxO1xuICAgICAgICAgIHRpbWVbMV0gPSB0aW1lWzFdIC0gMWU5ICsgY3VycmVudFsxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aW1lWzBdICs9IGN1cnJlbnRbMF07XG4gICAgICAgICAgdGltZVsxXSArPSBjdXJyZW50WzFdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXNbVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MXS5zZXQobGFiZWwsIHRpbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0aW1lQWdncmVnYXRlRW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRpbWVBZ2dyZWdhdGVFbmQobGFiZWwpIHtcbiAgICAgIGlmICh0aGlzW1RJTUVSU19BR0dSRUdBVEVTX1NZTUJPTF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgdmFyIHRpbWUgPSB0aGlzW1RJTUVSU19BR0dSRUdBVEVTX1NZTUJPTF0uZ2V0KGxhYmVsKTtcbiAgICAgIGlmICh0aW1lID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgIHRoaXNbVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MXS5kZWxldGUobGFiZWwpO1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLnRpbWUsIFtsYWJlbF0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSh0aW1lKSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXZWJwYWNrTG9nZ2VyO1xufSgpO1xuXG5leHBvcnRzLkxvZ2dlciA9IFdlYnBhY2tMb2dnZXI7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvY3JlYXRlQ29uc29sZUxvZ2dlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9jcmVhdGVDb25zb2xlTG9nZ2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyWyh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbnZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTG9nZ2VyICovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9Mb2dnZXIuanNcIiksXG4gICAgTG9nVHlwZSA9IF9yZXF1aXJlLkxvZ1R5cGU7XG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4uLy4uL2RlY2xhcmF0aW9ucy9XZWJwYWNrT3B0aW9uc1wiKS5GaWx0ZXJJdGVtVHlwZXN9IEZpbHRlckl0ZW1UeXBlcyAqL1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4uLy4uL2RlY2xhcmF0aW9ucy9XZWJwYWNrT3B0aW9uc1wiKS5GaWx0ZXJUeXBlc30gRmlsdGVyVHlwZXMgKi9cblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoXCIuL0xvZ2dlclwiKS5Mb2dUeXBlRW51bX0gTG9nVHlwZUVudW0gKi9cblxuLyoqIEB0eXBlZGVmIHtmdW5jdGlvbihzdHJpbmcpOiBib29sZWFufSBGaWx0ZXJGdW5jdGlvbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IExvZ2dlckNvbnNvbGVcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb24oKTogdm9pZH0gY2xlYXJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb24oKTogdm9pZH0gdHJhY2VcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkfSBpbmZvXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZH0gbG9nXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZH0gd2FyblxuICogQHByb3BlcnR5IHsoLi4uYXJnczogYW55W10pID0+IHZvaWR9IGVycm9yXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZD19IGRlYnVnXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZD19IGdyb3VwXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZD19IGdyb3VwQ29sbGFwc2VkXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZD19IGdyb3VwRW5kXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZD19IHN0YXR1c1xuICogQHByb3BlcnR5IHsoLi4uYXJnczogYW55W10pID0+IHZvaWQ9fSBwcm9maWxlXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZD19IHByb2ZpbGVFbmRcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gbG9nVGltZVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gTG9nZ2VyT3B0aW9uc1xuICogQHByb3BlcnR5IHtmYWxzZXx0cnVlfFwibm9uZVwifFwiZXJyb3JcInxcIndhcm5cInxcImluZm9cInxcImxvZ1wifFwidmVyYm9zZVwifSBsZXZlbCBsb2dsZXZlbFxuICogQHByb3BlcnR5IHtGaWx0ZXJUeXBlc3xib29sZWFufSBkZWJ1ZyBmaWx0ZXIgZm9yIGRlYnVnIGxvZ2dpbmdcbiAqIEBwcm9wZXJ0eSB7TG9nZ2VyQ29uc29sZX0gY29uc29sZSB0aGUgY29uc29sZSB0byBsb2cgdG9cbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7RmlsdGVySXRlbVR5cGVzfSBpdGVtIGFuIGlucHV0IGl0ZW1cbiAqIEByZXR1cm5zIHtGaWx0ZXJGdW5jdGlvbn0gZmlsdGVyIGZ1bmN0aW9uXG4gKi9cblxuXG52YXIgZmlsdGVyVG9GdW5jdGlvbiA9IGZ1bmN0aW9uIGZpbHRlclRvRnVuY3Rpb24oaXRlbSkge1xuICBpZiAodHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICB2YXIgcmVnRXhwID0gbmV3IFJlZ0V4cChcIltcXFxcXFxcXC9dXCIuY29uY2F0KGl0ZW0ucmVwbGFjZSggLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICAgL1stW1xcXXt9KCkqKz8uXFxcXF4kfF0vZywgXCJcXFxcJCZcIiksIFwiKFtcXFxcXFxcXC9dfCR8IXxcXFxcPylcIikpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoaWRlbnQpIHtcbiAgICAgIHJldHVybiByZWdFeHAudGVzdChpZGVudCk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBpdGVtLnRlc3QgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoaWRlbnQpIHtcbiAgICAgIHJldHVybiBpdGVtLnRlc3QoaWRlbnQpO1xuICAgIH07XG4gIH1cblxuICBpZiAodHlwZW9mIGl0ZW0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpdGVtID09PSBcImJvb2xlYW5cIikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9O1xuICB9XG59O1xuLyoqXG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG5cblxudmFyIExvZ0xldmVsID0ge1xuICBub25lOiA2LFxuICBmYWxzZTogNixcbiAgZXJyb3I6IDUsXG4gIHdhcm46IDQsXG4gIGluZm86IDMsXG4gIGxvZzogMixcbiAgdHJ1ZTogMixcbiAgdmVyYm9zZTogMVxufTtcbi8qKlxuICogQHBhcmFtIHtMb2dnZXJPcHRpb25zfSBvcHRpb25zIG9wdGlvbnMgb2JqZWN0XG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oc3RyaW5nLCBMb2dUeXBlRW51bSwgYW55W10pOiB2b2lkfSBsb2dnaW5nIGZ1bmN0aW9uXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgX3JlZiRsZXZlbCA9IF9yZWYubGV2ZWwsXG4gICAgICBsZXZlbCA9IF9yZWYkbGV2ZWwgPT09IHZvaWQgMCA/IFwiaW5mb1wiIDogX3JlZiRsZXZlbCxcbiAgICAgIF9yZWYkZGVidWcgPSBfcmVmLmRlYnVnLFxuICAgICAgZGVidWcgPSBfcmVmJGRlYnVnID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGVidWcsXG4gICAgICBjb25zb2xlID0gX3JlZi5jb25zb2xlO1xuICB2YXIgZGVidWdGaWx0ZXJzID0gdHlwZW9mIGRlYnVnID09PSBcImJvb2xlYW5cIiA/IFtmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRlYnVnO1xuICB9XSA6XG4gIC8qKiBAdHlwZSB7RmlsdGVySXRlbVR5cGVzW119ICovXG4gIFtdLmNvbmNhdChkZWJ1ZykubWFwKGZpbHRlclRvRnVuY3Rpb24pO1xuICAvKiogQHR5cGUge251bWJlcn0gKi9cblxuICB2YXIgbG9nbGV2ZWwgPSBMb2dMZXZlbFtcIlwiLmNvbmNhdChsZXZlbCldIHx8IDA7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBsb2dnZXJcbiAgICogQHBhcmFtIHtMb2dUeXBlRW51bX0gdHlwZSB0eXBlIG9mIHRoZSBsb2cgZW50cnlcbiAgICogQHBhcmFtIHthbnlbXX0gYXJncyBhcmd1bWVudHMgb2YgdGhlIGxvZyBlbnRyeVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG5cbiAgdmFyIGxvZ2dlciA9IGZ1bmN0aW9uIGxvZ2dlcihuYW1lLCB0eXBlLCBhcmdzKSB7XG4gICAgdmFyIGxhYmVsZWRBcmdzID0gZnVuY3Rpb24gbGFiZWxlZEFyZ3MoKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgcmV0dXJuIFtcIltcIi5jb25jYXQobmFtZSwgXCJdIFwiKS5jb25jYXQoYXJnc1swXSldLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYXJncy5zbGljZSgxKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBbXCJbXCIuY29uY2F0KG5hbWUsIFwiXVwiKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhcmdzKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGRlYnVnID0gZGVidWdGaWx0ZXJzLnNvbWUoZnVuY3Rpb24gKGYpIHtcbiAgICAgIHJldHVybiBmKG5hbWUpO1xuICAgIH0pO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIExvZ1R5cGUuZGVidWc6XG4gICAgICAgIGlmICghZGVidWcpIHJldHVybjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5kZWJ1ZyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTG9nVHlwZS5sb2c6XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5sb2cpIHJldHVybjtcbiAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTG9nVHlwZS5pbmZvOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwuaW5mbykgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmluZm8uYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTG9nVHlwZS53YXJuOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwud2FybikgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTG9nVHlwZS5lcnJvcjpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLmVycm9yKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUuZXJyb3IuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTG9nVHlwZS50cmFjZTpcbiAgICAgICAgaWYgKCFkZWJ1ZykgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIExvZ1R5cGUuZ3JvdXBDb2xsYXBzZWQ6XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5sb2cpIHJldHVybjtcblxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwudmVyYm9zZSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZC5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcblxuICAgICAgY2FzZSBMb2dUeXBlLmdyb3VwOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUuZ3JvdXAgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgICBjb25zb2xlLmdyb3VwLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIExvZ1R5cGUuZ3JvdXBFbmQ6XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5sb2cpIHJldHVybjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5ncm91cEVuZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIExvZ1R5cGUudGltZTpcbiAgICAgICAge1xuICAgICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5sb2cpIHJldHVybjtcbiAgICAgICAgICB2YXIgbXMgPSBhcmdzWzFdICogMTAwMCArIGFyZ3NbMl0gLyAxMDAwMDAwO1xuICAgICAgICAgIHZhciBtc2cgPSBcIltcIi5jb25jYXQobmFtZSwgXCJdIFwiKS5jb25jYXQoYXJnc1swXSwgXCI6IFwiKS5jb25jYXQobXMsIFwiIG1zXCIpO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmxvZ1RpbWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2dUaW1lKG1zZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBMb2dUeXBlLnByb2ZpbGU6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnByb2ZpbGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgICBjb25zb2xlLnByb2ZpbGUuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIExvZ1R5cGUucHJvZmlsZUVuZDpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUucHJvZmlsZUVuZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICAgICAgICAgIGNvbnNvbGUucHJvZmlsZUVuZC5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTG9nVHlwZS5jbGVhcjpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLmxvZykgcmV0dXJuOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmNsZWFyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTG9nVHlwZS5zdGF0dXM6XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5pbmZvKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnN0YXR1cyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLnN0YXR1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLnN0YXR1cy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mby5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIExvZ1R5cGUgXCIuY29uY2F0KHR5cGUpKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxvZ2dlcjtcbn07XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvcnVudGltZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9ydW50aW1lLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbnZhciBTeW5jQmFpbEhvb2sgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISB0YXBhYmxlL2xpYi9TeW5jQmFpbEhvb2sgKi8gXCIuL2NsaWVudC1zcmMvbW9kdWxlcy9sb2dnZXIvU3luY0JhaWxIb29rRmFrZS5qc1wiKTtcblxudmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9Mb2dnZXIgKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL0xvZ2dlci5qc1wiKSxcbiAgICBMb2dnZXIgPSBfcmVxdWlyZS5Mb2dnZXI7XG5cbnZhciBjcmVhdGVDb25zb2xlTG9nZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jcmVhdGVDb25zb2xlTG9nZ2VyICovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9jcmVhdGVDb25zb2xlTG9nZ2VyLmpzXCIpO1xuLyoqIEB0eXBlIHtjcmVhdGVDb25zb2xlTG9nZ2VyLkxvZ2dlck9wdGlvbnN9ICovXG5cblxudmFyIGN1cnJlbnREZWZhdWx0TG9nZ2VyT3B0aW9ucyA9IHtcbiAgbGV2ZWw6IFwiaW5mb1wiLFxuICBkZWJ1ZzogZmFsc2UsXG4gIGNvbnNvbGU6IGNvbnNvbGVcbn07XG52YXIgY3VycmVudERlZmF1bHRMb2dnZXIgPSBjcmVhdGVDb25zb2xlTG9nZ2VyKGN1cnJlbnREZWZhdWx0TG9nZ2VyT3B0aW9ucyk7XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGxvZ2dlclxuICogQHJldHVybnMge0xvZ2dlcn0gYSBsb2dnZXJcbiAqL1xuXG5leHBvcnRzLmdldExvZ2dlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBuZXcgTG9nZ2VyKGZ1bmN0aW9uICh0eXBlLCBhcmdzKSB7XG4gICAgaWYgKGV4cG9ydHMuaG9va3MubG9nLmNhbGwobmFtZSwgdHlwZSwgYXJncykgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY3VycmVudERlZmF1bHRMb2dnZXIobmFtZSwgdHlwZSwgYXJncyk7XG4gICAgfVxuICB9LCBmdW5jdGlvbiAoY2hpbGROYW1lKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZ2V0TG9nZ2VyKFwiXCIuY29uY2F0KG5hbWUsIFwiL1wiKS5jb25jYXQoY2hpbGROYW1lKSk7XG4gIH0pO1xufTtcbi8qKlxuICogQHBhcmFtIHtjcmVhdGVDb25zb2xlTG9nZ2VyLkxvZ2dlck9wdGlvbnN9IG9wdGlvbnMgbmV3IG9wdGlvbnMsIG1lcmdlIHdpdGggb2xkIG9wdGlvbnNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5cblxuZXhwb3J0cy5jb25maWd1cmVEZWZhdWx0TG9nZ2VyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgX2V4dGVuZHMoY3VycmVudERlZmF1bHRMb2dnZXJPcHRpb25zLCBvcHRpb25zKTtcblxuICBjdXJyZW50RGVmYXVsdExvZ2dlciA9IGNyZWF0ZUNvbnNvbGVMb2dnZXIoY3VycmVudERlZmF1bHRMb2dnZXJPcHRpb25zKTtcbn07XG5cbmV4cG9ydHMuaG9va3MgPSB7XG4gIGxvZzogbmV3IFN5bmNCYWlsSG9vayhbXCJvcmlnaW5cIiwgXCJ0eXBlXCIsIFwiYXJnc1wiXSlcbn07XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcbi8qKioqKiovIFx0XHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcbi8qKioqKiovIFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0oKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQgKi9cbi8qKioqKiovIFx0IWZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH1cbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuLy8gVGhpcyBlbnRyeSBuZWVkIHRvIGJlIHdyYXBwZWQgaW4gYW4gSUlGRSBiZWNhdXNlIGl0IG5lZWQgdG8gYmUgaXNvbGF0ZWQgYWdhaW5zdCBvdGhlciBtb2R1bGVzIGluIHRoZSBjaHVuay5cbiFmdW5jdGlvbigpIHtcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vY2xpZW50LXNyYy9tb2R1bGVzL2xvZ2dlci9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuLyogaGFybW9ueSBleHBvcnQgKi8gICBcImRlZmF1bHRcIjogZnVuY3Rpb24oKSB7IHJldHVybiAvKiByZWV4cG9ydCBkZWZhdWx0IGV4cG9ydCBmcm9tIG5hbWVkIG1vZHVsZSAqLyB3ZWJwYWNrX2xpYl9sb2dnaW5nX3J1bnRpbWVfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXzsgfVxuLyogaGFybW9ueSBleHBvcnQgKi8gfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgd2VicGFja19saWJfbG9nZ2luZ19ydW50aW1lX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISB3ZWJwYWNrL2xpYi9sb2dnaW5nL3J1bnRpbWUuanMgKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL3J1bnRpbWUuanNcIik7XG5cbn0oKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0X3RhcmdldF9fID0gZXhwb3J0cztcbmZvcih2YXIgaSBpbiBfX3dlYnBhY2tfZXhwb3J0c19fKSBfX3dlYnBhY2tfZXhwb3J0X3RhcmdldF9fW2ldID0gX193ZWJwYWNrX2V4cG9ydHNfX1tpXTtcbmlmKF9fd2VicGFja19leHBvcnRzX18uX19lc01vZHVsZSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fd2VicGFja19leHBvcnRfdGFyZ2V0X18sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gfSkoKVxuOyIsIi8vIFRoZSBlcnJvciBvdmVybGF5IGlzIGluc3BpcmVkIChhbmQgbW9zdGx5IGNvcGllZCkgZnJvbSBDcmVhdGUgUmVhY3QgQXBwIChodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2tpbmN1YmF0b3IvY3JlYXRlLXJlYWN0LWFwcClcbi8vIFRoZXksIGluIHR1cm4sIGdvdCBpbnNwaXJlZCBieSB3ZWJwYWNrLWhvdC1taWRkbGV3YXJlIChodHRwczovL2dpdGh1Yi5jb20vZ2xlbmphbWluL3dlYnBhY2staG90LW1pZGRsZXdhcmUpLlxuaW1wb3J0IGFuc2lIVE1MIGZyb20gXCJhbnNpLWh0bWwtY29tbXVuaXR5XCI7XG5pbXBvcnQgeyBlbmNvZGUgfSBmcm9tIFwiaHRtbC1lbnRpdGllc1wiO1xudmFyIGNvbG9ycyA9IHtcbiAgcmVzZXQ6IFtcInRyYW5zcGFyZW50XCIsIFwidHJhbnNwYXJlbnRcIl0sXG4gIGJsYWNrOiBcIjE4MTgxOFwiLFxuICByZWQ6IFwiRTM2MDQ5XCIsXG4gIGdyZWVuOiBcIkIzQ0I3NFwiLFxuICB5ZWxsb3c6IFwiRkZEMDgwXCIsXG4gIGJsdWU6IFwiN0NBRkMyXCIsXG4gIG1hZ2VudGE6IFwiN0ZBQ0NBXCIsXG4gIGN5YW46IFwiQzNDMkVGXCIsXG4gIGxpZ2h0Z3JleTogXCJFQkU3RTNcIixcbiAgZGFya2dyZXk6IFwiNkQ3ODkxXCJcbn07XG4vKiogQHR5cGUge0hUTUxJRnJhbWVFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gKi9cblxudmFyIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQ7XG4vKiogQHR5cGUge0hUTUxEaXZFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gKi9cblxudmFyIGNvbnRhaW5lckVsZW1lbnQ7XG4vKiogQHR5cGUge0FycmF5PChlbGVtZW50OiBIVE1MRGl2RWxlbWVudCkgPT4gdm9pZD59ICovXG5cbnZhciBvbkxvYWRRdWV1ZSA9IFtdO1xuYW5zaUhUTUwuc2V0Q29sb3JzKGNvbG9ycyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcigpIHtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuaWQgPSBcIndlYnBhY2stZGV2LXNlcnZlci1jbGllbnQtb3ZlcmxheVwiO1xuICBpZnJhbWVDb250YWluZXJFbGVtZW50LnNyYyA9IFwiYWJvdXQ6YmxhbmtcIjtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zdHlsZS5sZWZ0ID0gMDtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zdHlsZS50b3AgPSAwO1xuICBpZnJhbWVDb250YWluZXJFbGVtZW50LnN0eWxlLnJpZ2h0ID0gMDtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zdHlsZS5ib3R0b20gPSAwO1xuICBpZnJhbWVDb250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoID0gXCIxMDB2d1wiO1xuICBpZnJhbWVDb250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zdHlsZS56SW5kZXggPSA5OTk5OTk5OTk5O1xuXG4gIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnRhaW5lckVsZW1lbnQgPVxuICAgIC8qKiBAdHlwZSB7RG9jdW1lbnR9ICovXG5cbiAgICAvKiogQHR5cGUge0hUTUxJRnJhbWVFbGVtZW50fSAqL1xuICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuY29udGVudERvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyRWxlbWVudC5pZCA9IFwid2VicGFjay1kZXYtc2VydmVyLWNsaWVudC1vdmVybGF5LWRpdlwiO1xuICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmxlZnQgPSAwO1xuICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUudG9wID0gMDtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLnJpZ2h0ID0gMDtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmJvdHRvbSA9IDA7XG4gICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IFwiMTAwdndcIjtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjg1KVwiO1xuICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY29sb3IgPSBcIiNFOEU4RThcIjtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmZvbnRGYW1pbHkgPSBcIk1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlXCI7XG4gICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IFwibGFyZ2VcIjtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSBcIjJyZW1cIjtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmxpbmVIZWlnaHQgPSBcIjEuMlwiO1xuICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUud2hpdGVTcGFjZSA9IFwicHJlLXdyYXBcIjtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG4gICAgdmFyIGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBoZWFkZXJFbGVtZW50LmlubmVyVGV4dCA9IFwiQ29tcGlsZWQgd2l0aCBwcm9ibGVtczpcIjtcbiAgICB2YXIgY2xvc2VCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjbG9zZUJ1dHRvbkVsZW1lbnQuaW5uZXJUZXh0ID0gXCJYXCI7XG4gICAgY2xvc2VCdXR0b25FbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgY2xvc2VCdXR0b25FbGVtZW50LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuICAgIGNsb3NlQnV0dG9uRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgIGNsb3NlQnV0dG9uRWxlbWVudC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgY2xvc2VCdXR0b25FbGVtZW50LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGNsb3NlQnV0dG9uRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBjbG9zZUJ1dHRvbkVsZW1lbnQuc3R5bGUuY3NzRmxvYXQgPSBcInJpZ2h0XCI7IC8vIEB0cy1pZ25vcmVcblxuICAgIGNsb3NlQnV0dG9uRWxlbWVudC5zdHlsZS5zdHlsZUZsb2F0ID0gXCJyaWdodFwiO1xuICAgIGNsb3NlQnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaGlkZSgpO1xuICAgIH0pO1xuICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRWxlbWVudCk7XG4gICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbkVsZW1lbnQpO1xuICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgLyoqIEB0eXBlIHtEb2N1bWVudH0gKi9cblxuICAgIC8qKiBAdHlwZSB7SFRNTElGcmFtZUVsZW1lbnR9ICovXG4gICAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5jb250ZW50RG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXJFbGVtZW50KTtcbiAgICBvbkxvYWRRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChvbkxvYWQpIHtcbiAgICAgIG9uTG9hZChcbiAgICAgIC8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnR9ICovXG4gICAgICBjb250YWluZXJFbGVtZW50KTtcbiAgICB9KTtcbiAgICBvbkxvYWRRdWV1ZSA9IFtdO1xuICAgIC8qKiBAdHlwZSB7SFRNTElGcmFtZUVsZW1lbnR9ICovXG5cbiAgICBpZnJhbWVDb250YWluZXJFbGVtZW50Lm9ubG9hZCA9IG51bGw7XG4gIH07XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWVDb250YWluZXJFbGVtZW50KTtcbn1cbi8qKlxuICogQHBhcmFtIHsoZWxlbWVudDogSFRNTERpdkVsZW1lbnQpID0+IHZvaWR9IGNhbGxiYWNrXG4gKi9cblxuXG5mdW5jdGlvbiBlbnN1cmVPdmVybGF5RXhpc3RzKGNhbGxiYWNrKSB7XG4gIGlmIChjb250YWluZXJFbGVtZW50KSB7XG4gICAgLy8gRXZlcnl0aGluZyBpcyByZWFkeSwgY2FsbCB0aGUgY2FsbGJhY2sgcmlnaHQgYXdheS5cbiAgICBjYWxsYmFjayhjb250YWluZXJFbGVtZW50KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBvbkxvYWRRdWV1ZS5wdXNoKGNhbGxiYWNrKTtcblxuICBpZiAoaWZyYW1lQ29udGFpbmVyRWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRhaW5lcigpO1xufSAvLyBTdWNjZXNzZnVsIGNvbXBpbGF0aW9uLlxuXG5cbmZ1bmN0aW9uIGhpZGUoKSB7XG4gIGlmICghaWZyYW1lQ29udGFpbmVyRWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBDbGVhbiB1cCBhbmQgcmVzZXQgaW50ZXJuYWwgc3RhdGUuXG5cblxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZUNvbnRhaW5lckVsZW1lbnQpO1xuICBpZnJhbWVDb250YWluZXJFbGVtZW50ID0gbnVsbDtcbiAgY29udGFpbmVyRWxlbWVudCA9IG51bGw7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge3N0cmluZyAgfCB7IGZpbGU/OiBzdHJpbmcsIG1vZHVsZU5hbWU/OiBzdHJpbmcsIGxvYz86IHN0cmluZywgbWVzc2FnZT86IHN0cmluZyB9fSBpdGVtXG4gKiBAcmV0dXJucyB7eyBoZWFkZXI6IHN0cmluZywgYm9keTogc3RyaW5nIH19XG4gKi9cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9ibGVtKHR5cGUsIGl0ZW0pIHtcbiAgdmFyIGhlYWRlciA9IHR5cGUgPT09IFwid2FybmluZ1wiID8gXCJXQVJOSU5HXCIgOiBcIkVSUk9SXCI7XG4gIHZhciBib2R5ID0gXCJcIjtcblxuICBpZiAodHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICBib2R5ICs9IGl0ZW07XG4gIH0gZWxzZSB7XG4gICAgdmFyIGZpbGUgPSBpdGVtLmZpbGUgfHwgXCJcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG5cbiAgICB2YXIgbW9kdWxlTmFtZSA9IGl0ZW0ubW9kdWxlTmFtZSA/IGl0ZW0ubW9kdWxlTmFtZS5pbmRleE9mKFwiIVwiKSAhPT0gLTEgPyBcIlwiLmNvbmNhdChpdGVtLm1vZHVsZU5hbWUucmVwbGFjZSgvXihcXHN8XFxTKSohLywgXCJcIiksIFwiIChcIikuY29uY2F0KGl0ZW0ubW9kdWxlTmFtZSwgXCIpXCIpIDogXCJcIi5jb25jYXQoaXRlbS5tb2R1bGVOYW1lKSA6IFwiXCI7XG4gICAgdmFyIGxvYyA9IGl0ZW0ubG9jO1xuICAgIGhlYWRlciArPSBcIlwiLmNvbmNhdChtb2R1bGVOYW1lIHx8IGZpbGUgPyBcIiBpbiBcIi5jb25jYXQobW9kdWxlTmFtZSA/IFwiXCIuY29uY2F0KG1vZHVsZU5hbWUpLmNvbmNhdChmaWxlID8gXCIgKFwiLmNvbmNhdChmaWxlLCBcIilcIikgOiBcIlwiKSA6IGZpbGUpLmNvbmNhdChsb2MgPyBcIiBcIi5jb25jYXQobG9jKSA6IFwiXCIpIDogXCJcIik7XG4gICAgYm9keSArPSBpdGVtLm1lc3NhZ2UgfHwgXCJcIjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgYm9keTogYm9keVxuICB9O1xufSAvLyBDb21waWxhdGlvbiB3aXRoIGVycm9ycyAoZS5nLiBzeW50YXggZXJyb3Igb3IgbWlzc2luZyBtb2R1bGVzKS5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtBcnJheTxzdHJpbmcgIHwgeyBmaWxlPzogc3RyaW5nLCBtb2R1bGVOYW1lPzogc3RyaW5nLCBsb2M/OiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcgfT59IG1lc3NhZ2VzXG4gKi9cblxuXG5mdW5jdGlvbiBzaG93KHR5cGUsIG1lc3NhZ2VzKSB7XG4gIGVuc3VyZU92ZXJsYXlFeGlzdHMoZnVuY3Rpb24gKCkge1xuICAgIG1lc3NhZ2VzLmZvckVhY2goZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIHZhciBlbnRyeUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdmFyIHR5cGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICAgIHZhciBfZm9ybWF0UHJvYmxlbSA9IGZvcm1hdFByb2JsZW0odHlwZSwgbWVzc2FnZSksXG4gICAgICAgICAgaGVhZGVyID0gX2Zvcm1hdFByb2JsZW0uaGVhZGVyLFxuICAgICAgICAgIGJvZHkgPSBfZm9ybWF0UHJvYmxlbS5ib2R5O1xuXG4gICAgICB0eXBlRWxlbWVudC5pbm5lclRleHQgPSBoZWFkZXI7XG4gICAgICB0eXBlRWxlbWVudC5zdHlsZS5jb2xvciA9IFwiI1wiLmNvbmNhdChjb2xvcnMucmVkKTsgLy8gTWFrZSBpdCBsb29rIHNpbWlsYXIgdG8gb3VyIHRlcm1pbmFsLlxuXG4gICAgICB2YXIgdGV4dCA9IGFuc2lIVE1MKGVuY29kZShib2R5KSk7XG4gICAgICB2YXIgbWVzc2FnZVRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG1lc3NhZ2VUZXh0Tm9kZS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgZW50cnlFbGVtZW50LmFwcGVuZENoaWxkKHR5cGVFbGVtZW50KTtcbiAgICAgIGVudHJ5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgICAgZW50cnlFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgICBlbnRyeUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZVRleHROb2RlKTtcbiAgICAgIGVudHJ5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgICAgZW50cnlFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgICAvKiogQHR5cGUge0hUTUxEaXZFbGVtZW50fSAqL1xuXG4gICAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGVudHJ5RWxlbWVudCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBmb3JtYXRQcm9ibGVtLCBzaG93LCBoaWRlIH07IiwiLyogZ2xvYmFsIF9fd2VicGFja19kZXZfc2VydmVyX2NsaWVudF9fICovXG5pbXBvcnQgV2ViU29ja2V0Q2xpZW50IGZyb20gXCIuL2NsaWVudHMvV2ViU29ja2V0Q2xpZW50LmpzXCI7XG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwiLi91dGlscy9sb2cuanNcIjsgLy8gdGhpcyBXZWJzb2NrZXRDbGllbnQgaXMgaGVyZSBhcyBhIGRlZmF1bHQgZmFsbGJhY2ssIGluIGNhc2UgdGhlIGNsaWVudCBpcyBub3QgaW5qZWN0ZWRcblxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5cbnZhciBDbGllbnQgPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbnR5cGVvZiBfX3dlYnBhY2tfZGV2X3NlcnZlcl9jbGllbnRfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBfX3dlYnBhY2tfZGV2X3NlcnZlcl9jbGllbnRfXy5kZWZhdWx0ICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX2Rldl9zZXJ2ZXJfY2xpZW50X18uZGVmYXVsdCA6IF9fd2VicGFja19kZXZfc2VydmVyX2NsaWVudF9fIDogV2ViU29ja2V0Q2xpZW50O1xuLyogZXNsaW50LWVuYWJsZSBjYW1lbGNhc2UgKi9cblxudmFyIHJldHJpZXMgPSAwO1xudmFyIG1heFJldHJpZXMgPSAxMDsgLy8gSW5pdGlhbGl6ZWQgY2xpZW50IGlzIGV4cG9ydGVkIHNvIGV4dGVybmFsIGNvbnN1bWVycyBjYW4gdXRpbGl6ZSB0aGUgc2FtZSBpbnN0YW5jZVxuLy8gSXQgaXMgbXV0YWJsZSB0byBlbmZvcmNlIHNpbmdsZXRvblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcblxuZXhwb3J0IHZhciBjbGllbnQgPSBudWxsO1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge3sgW2hhbmRsZXI6IHN0cmluZ106IChkYXRhPzogYW55LCBwYXJhbXM/OiBhbnkpID0+IGFueSB9fSBoYW5kbGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IFtyZWNvbm5lY3RdXG4gKi9cblxudmFyIHNvY2tldCA9IGZ1bmN0aW9uIGluaXRTb2NrZXQodXJsLCBoYW5kbGVycywgcmVjb25uZWN0KSB7XG4gIGNsaWVudCA9IG5ldyBDbGllbnQodXJsKTtcbiAgY2xpZW50Lm9uT3BlbihmdW5jdGlvbiAoKSB7XG4gICAgcmV0cmllcyA9IDA7XG5cbiAgICBpZiAodHlwZW9mIHJlY29ubmVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgbWF4UmV0cmllcyA9IHJlY29ubmVjdDtcbiAgICB9XG4gIH0pO1xuICBjbGllbnQub25DbG9zZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJldHJpZXMgPT09IDApIHtcbiAgICAgIGhhbmRsZXJzLmNsb3NlKCk7XG4gICAgfSAvLyBUcnkgdG8gcmVjb25uZWN0LlxuXG5cbiAgICBjbGllbnQgPSBudWxsOyAvLyBBZnRlciAxMCByZXRyaWVzIHN0b3AgdHJ5aW5nLCB0byBwcmV2ZW50IGxvZ3NwYW0uXG5cbiAgICBpZiAocmV0cmllcyA8IG1heFJldHJpZXMpIHtcbiAgICAgIC8vIEV4cG9uZW50aWFsbHkgaW5jcmVhc2UgdGltZW91dCB0byByZWNvbm5lY3QuXG4gICAgICAvLyBSZXNwZWN0ZnVsbHkgY29waWVkIGZyb20gdGhlIHBhY2thZ2UgYGdvdGAuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1wcm9wZXJ0aWVzXG4gICAgICB2YXIgcmV0cnlJbk1zID0gMTAwMCAqIE1hdGgucG93KDIsIHJldHJpZXMpICsgTWF0aC5yYW5kb20oKSAqIDEwMDtcbiAgICAgIHJldHJpZXMgKz0gMTtcbiAgICAgIGxvZy5pbmZvKFwiVHJ5aW5nIHRvIHJlY29ubmVjdC4uLlwiKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzb2NrZXQodXJsLCBoYW5kbGVycywgcmVjb25uZWN0KTtcbiAgICAgIH0sIHJldHJ5SW5Ncyk7XG4gICAgfVxuICB9KTtcbiAgY2xpZW50Lm9uTWVzc2FnZShcbiAgLyoqXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhXG4gICAqL1xuICBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBtZXNzYWdlID0gSlNPTi5wYXJzZShkYXRhKTtcblxuICAgIGlmIChoYW5kbGVyc1ttZXNzYWdlLnR5cGVdKSB7XG4gICAgICBoYW5kbGVyc1ttZXNzYWdlLnR5cGVdKG1lc3NhZ2UuZGF0YSwgbWVzc2FnZS5wYXJhbXMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzb2NrZXQ7IiwiLyoqXG4gKiBAcGFyYW0ge3sgcHJvdG9jb2w/OiBzdHJpbmcsIGF1dGg/OiBzdHJpbmcsIGhvc3RuYW1lPzogc3RyaW5nLCBwb3J0Pzogc3RyaW5nLCBwYXRobmFtZT86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCBoYXNoPzogc3RyaW5nLCBzbGFzaGVzPzogYm9vbGVhbiB9fSBvYmpVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZvcm1hdChvYmpVUkwpIHtcbiAgdmFyIHByb3RvY29sID0gb2JqVVJMLnByb3RvY29sIHx8IFwiXCI7XG5cbiAgaWYgKHByb3RvY29sICYmICFwcm90b2NvbC5lbmRzV2l0aChcIjpcIikpIHtcbiAgICBwcm90b2NvbCArPSBcIjpcIjtcbiAgfVxuXG4gIHZhciBhdXRoID0gb2JqVVJMLmF1dGggfHwgXCJcIjtcblxuICBpZiAoYXV0aCkge1xuICAgIGF1dGggPSBlbmNvZGVVUklDb21wb25lbnQoYXV0aCk7XG4gICAgYXV0aCA9IGF1dGgucmVwbGFjZSgvJTNBL2ksIFwiOlwiKTtcbiAgICBhdXRoICs9IFwiQFwiO1xuICB9XG5cbiAgdmFyIGhvc3QgPSBcIlwiO1xuXG4gIGlmIChvYmpVUkwuaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArIChvYmpVUkwuaG9zdG5hbWUuaW5kZXhPZihcIjpcIikgPT09IC0xID8gb2JqVVJMLmhvc3RuYW1lIDogXCJbXCIuY29uY2F0KG9ialVSTC5ob3N0bmFtZSwgXCJdXCIpKTtcblxuICAgIGlmIChvYmpVUkwucG9ydCkge1xuICAgICAgaG9zdCArPSBcIjpcIi5jb25jYXQob2JqVVJMLnBvcnQpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwYXRobmFtZSA9IG9ialVSTC5wYXRobmFtZSB8fCBcIlwiO1xuXG4gIGlmIChvYmpVUkwuc2xhc2hlcykge1xuICAgIGhvc3QgPSBcIi8vXCIuY29uY2F0KGhvc3QgfHwgXCJcIik7XG5cbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWUuY2hhckF0KDApICE9PSBcIi9cIikge1xuICAgICAgcGF0aG5hbWUgPSBcIi9cIi5jb25jYXQocGF0aG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSBcIlwiO1xuICB9XG5cbiAgdmFyIHNlYXJjaCA9IG9ialVSTC5zZWFyY2ggfHwgXCJcIjtcblxuICBpZiAoc2VhcmNoICYmIHNlYXJjaC5jaGFyQXQoMCkgIT09IFwiP1wiKSB7XG4gICAgc2VhcmNoID0gXCI/XCIuY29uY2F0KHNlYXJjaCk7XG4gIH1cblxuICB2YXIgaGFzaCA9IG9ialVSTC5oYXNoIHx8IFwiXCI7XG5cbiAgaWYgKGhhc2ggJiYgaGFzaC5jaGFyQXQoMCkgIT09IFwiI1wiKSB7XG4gICAgaGFzaCA9IFwiI1wiLmNvbmNhdChoYXNoKTtcbiAgfVxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLFxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGNoXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KG1hdGNoKTtcbiAgfSk7XG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKFwiI1wiLCBcIiUyM1wiKTtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHByb3RvY29sKS5jb25jYXQoaG9zdCkuY29uY2F0KHBhdGhuYW1lKS5jb25jYXQoc2VhcmNoKS5jb25jYXQoaGFzaCk7XG59XG4vKipcbiAqIEBwYXJhbSB7VVJMICYgeyBmcm9tQ3VycmVudFNjcmlwdD86IGJvb2xlYW4gfX0gcGFyc2VkVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlU29ja2V0VVJMKHBhcnNlZFVSTCkge1xuICB2YXIgaG9zdG5hbWUgPSBwYXJzZWRVUkwuaG9zdG5hbWU7IC8vIE5vZGUuanMgbW9kdWxlIHBhcnNlcyBpdCBhcyBgOjpgXG4gIC8vIGBuZXcgVVJMKHVybFN0cmluZywgW2Jhc2VVUkxTdHJpbmddKWAgcGFyc2VzIGl0IGFzICdbOjpdJ1xuXG4gIHZhciBpc0luQWRkckFueSA9IGhvc3RuYW1lID09PSBcIjAuMC4wLjBcIiB8fCBob3N0bmFtZSA9PT0gXCI6OlwiIHx8IGhvc3RuYW1lID09PSBcIls6Ol1cIjsgLy8gd2h5IGRvIHdlIG5lZWQgdGhpcyBjaGVjaz9cbiAgLy8gaG9zdG5hbWUgbi9hIGZvciBmaWxlIHByb3RvY29sIChleGFtcGxlLCB3aGVuIHVzaW5nIGVsZWN0cm9uLCBpb25pYylcbiAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay93ZWJwYWNrLWRldi1zZXJ2ZXIvcHVsbC8zODRcblxuICBpZiAoaXNJbkFkZHJBbnkgJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAmJiBzZWxmLmxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpID09PSAwKSB7XG4gICAgaG9zdG5hbWUgPSBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lO1xuICB9XG5cbiAgdmFyIHNvY2tldFVSTFByb3RvY29sID0gcGFyc2VkVVJMLnByb3RvY29sIHx8IHNlbGYubG9jYXRpb24ucHJvdG9jb2w7IC8vIFdoZW4gaHR0cHMgaXMgdXNlZCBpbiB0aGUgYXBwLCBzZWN1cmUgd2ViIHNvY2tldHMgYXJlIGFsd2F5cyBuZWNlc3NhcnkgYmVjYXVzZSB0aGUgYnJvd3NlciBkb2Vzbid0IGFjY2VwdCBub24tc2VjdXJlIHdlYiBzb2NrZXRzLlxuXG4gIGlmIChzb2NrZXRVUkxQcm90b2NvbCA9PT0gXCJhdXRvOlwiIHx8IGhvc3RuYW1lICYmIGlzSW5BZGRyQW55ICYmIHNlbGYubG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIpIHtcbiAgICBzb2NrZXRVUkxQcm90b2NvbCA9IHNlbGYubG9jYXRpb24ucHJvdG9jb2w7XG4gIH1cblxuICBzb2NrZXRVUkxQcm90b2NvbCA9IHNvY2tldFVSTFByb3RvY29sLnJlcGxhY2UoL14oPzpodHRwfC4rLWV4dGVuc2lvbnxmaWxlKS9pLCBcIndzXCIpO1xuICB2YXIgc29ja2V0VVJMQXV0aCA9IFwiXCI7IC8vIGBuZXcgVVJMKHVybFN0cmluZywgW2Jhc2VVUkxzdHJpbmddKWAgZG9lc24ndCBoYXZlIGBhdXRoYCBwcm9wZXJ0eVxuICAvLyBQYXJzZSBhdXRoZW50aWNhdGlvbiBjcmVkZW50aWFscyBpbiBjYXNlIHdlIG5lZWQgdGhlbVxuXG4gIGlmIChwYXJzZWRVUkwudXNlcm5hbWUpIHtcbiAgICBzb2NrZXRVUkxBdXRoID0gcGFyc2VkVVJMLnVzZXJuYW1lOyAvLyBTaW5jZSBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uIGRvZXMgbm90IGFsbG93IGVtcHR5IHVzZXJuYW1lLFxuICAgIC8vIHdlIG9ubHkgaW5jbHVkZSBwYXNzd29yZCBpZiB0aGUgdXNlcm5hbWUgaXMgbm90IGVtcHR5LlxuXG4gICAgaWYgKHBhcnNlZFVSTC5wYXNzd29yZCkge1xuICAgICAgLy8gUmVzdWx0OiA8dXNlcm5hbWU+OjxwYXNzd29yZD5cbiAgICAgIHNvY2tldFVSTEF1dGggPSBzb2NrZXRVUkxBdXRoLmNvbmNhdChcIjpcIiwgcGFyc2VkVVJMLnBhc3N3b3JkKTtcbiAgICB9XG4gIH0gLy8gSW4gY2FzZSB0aGUgaG9zdCBpcyBhIHJhdyBJUHY2IGFkZHJlc3MsIGl0IGNhbiBiZSBlbmNsb3NlZCBpblxuICAvLyB0aGUgYnJhY2tldHMgYXMgdGhlIGJyYWNrZXRzIGFyZSBuZWVkZWQgaW4gdGhlIGZpbmFsIFVSTCBzdHJpbmcuXG4gIC8vIE5lZWQgdG8gcmVtb3ZlIHRob3NlIGFzIHVybC5mb3JtYXQgYmxpbmRseSBhZGRzIGl0cyBvd24gc2V0IG9mIGJyYWNrZXRzXG4gIC8vIGlmIHRoZSBob3N0IHN0cmluZyBjb250YWlucyBjb2xvbnMuIFRoYXQgd291bGQgbGVhZCB0byBub24td29ya2luZ1xuICAvLyBkb3VibGUgYnJhY2tldHMgKGUuZy4gW1s6Ol1dKSBob3N0XG4gIC8vXG4gIC8vIEFsbCBvZiB0aGVzZSB3ZWIgc29ja2V0IHVybCBwYXJhbXMgYXJlIG9wdGlvbmFsbHkgcGFzc2VkIGluIHRocm91Z2ggcmVzb3VyY2VRdWVyeSxcbiAgLy8gc28gd2UgbmVlZCB0byBmYWxsIGJhY2sgdG8gdGhlIGRlZmF1bHQgaWYgdGhleSBhcmUgbm90IHByb3ZpZGVkXG5cblxuICB2YXIgc29ja2V0VVJMSG9zdG5hbWUgPSAoaG9zdG5hbWUgfHwgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSB8fCBcImxvY2FsaG9zdFwiKS5yZXBsYWNlKC9eXFxbKC4qKVxcXSQvLCBcIiQxXCIpO1xuICB2YXIgc29ja2V0VVJMUG9ydCA9IHBhcnNlZFVSTC5wb3J0O1xuXG4gIGlmICghc29ja2V0VVJMUG9ydCB8fCBzb2NrZXRVUkxQb3J0ID09PSBcIjBcIikge1xuICAgIHNvY2tldFVSTFBvcnQgPSBzZWxmLmxvY2F0aW9uLnBvcnQ7XG4gIH0gLy8gSWYgcGF0aCBpcyBwcm92aWRlZCBpdCdsbCBiZSBwYXNzZWQgaW4gdmlhIHRoZSByZXNvdXJjZVF1ZXJ5IGFzIGFcbiAgLy8gcXVlcnkgcGFyYW0gc28gaXQgaGFzIHRvIGJlIHBhcnNlZCBvdXQgb2YgdGhlIHF1ZXJ5c3RyaW5nIGluIG9yZGVyIGZvciB0aGVcbiAgLy8gY2xpZW50IHRvIG9wZW4gdGhlIHNvY2tldCB0byB0aGUgY29ycmVjdCBsb2NhdGlvbi5cblxuXG4gIHZhciBzb2NrZXRVUkxQYXRobmFtZSA9IFwiL3dzXCI7XG5cbiAgaWYgKHBhcnNlZFVSTC5wYXRobmFtZSAmJiAhcGFyc2VkVVJMLmZyb21DdXJyZW50U2NyaXB0KSB7XG4gICAgc29ja2V0VVJMUGF0aG5hbWUgPSBwYXJzZWRVUkwucGF0aG5hbWU7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHtcbiAgICBwcm90b2NvbDogc29ja2V0VVJMUHJvdG9jb2wsXG4gICAgYXV0aDogc29ja2V0VVJMQXV0aCxcbiAgICBob3N0bmFtZTogc29ja2V0VVJMSG9zdG5hbWUsXG4gICAgcG9ydDogc29ja2V0VVJMUG9ydCxcbiAgICBwYXRobmFtZTogc29ja2V0VVJMUGF0aG5hbWUsXG4gICAgc2xhc2hlczogdHJ1ZVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU29ja2V0VVJMOyIsIi8qKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdFNvdXJjZSgpIHtcbiAgLy8gYGRvY3VtZW50LmN1cnJlbnRTY3JpcHRgIGlzIHRoZSBtb3N0IGFjY3VyYXRlIHdheSB0byBmaW5kIHRoZSBjdXJyZW50IHNjcmlwdCxcbiAgLy8gYnV0IGlzIG5vdCBzdXBwb3J0ZWQgaW4gYWxsIGJyb3dzZXJzLlxuICBpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LmdldEF0dHJpYnV0ZShcInNyY1wiKTtcbiAgfSAvLyBGYWxsYmFjayB0byBnZXR0aW5nIGFsbCBzY3JpcHRzIHJ1bm5pbmcgaW4gdGhlIGRvY3VtZW50LlxuXG5cbiAgdmFyIHNjcmlwdEVsZW1lbnRzID0gZG9jdW1lbnQuc2NyaXB0cyB8fCBbXTtcbiAgdmFyIHNjcmlwdEVsZW1lbnRzV2l0aFNyYyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChzY3JpcHRFbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XG4gIH0pO1xuXG4gIGlmIChzY3JpcHRFbGVtZW50c1dpdGhTcmMubGVuZ3RoID4gMCkge1xuICAgIHZhciBjdXJyZW50U2NyaXB0ID0gc2NyaXB0RWxlbWVudHNXaXRoU3JjW3NjcmlwdEVsZW1lbnRzV2l0aFNyYy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gY3VycmVudFNjcmlwdC5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XG4gIH0gLy8gRmFpbCBhcyB0aGVyZSB3YXMgbm8gc2NyaXB0IHRvIHVzZS5cblxuXG4gIHRocm93IG5ldyBFcnJvcihcIlt3ZWJwYWNrLWRldi1zZXJ2ZXJdIEZhaWxlZCB0byBnZXQgY3VycmVudCBzY3JpcHQgc291cmNlLlwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q3VycmVudFNjcmlwdFNvdXJjZTsiLCJpbXBvcnQgbG9nZ2VyIGZyb20gXCIuLi9tb2R1bGVzL2xvZ2dlci9pbmRleC5qc1wiO1xudmFyIG5hbWUgPSBcIndlYnBhY2stZGV2LXNlcnZlclwiOyAvLyBkZWZhdWx0IGxldmVsIGlzIHNldCBvbiB0aGUgY2xpZW50IHNpZGUsIHNvIGl0IGRvZXMgbm90IG5lZWRcbi8vIHRvIGJlIHNldCBieSB0aGUgQ0xJIG9yIEFQSVxuXG52YXIgZGVmYXVsdExldmVsID0gXCJpbmZvXCI7IC8vIG9wdGlvbnMgbmV3IG9wdGlvbnMsIG1lcmdlIHdpdGggb2xkIG9wdGlvbnNcblxuLyoqXG4gKiBAcGFyYW0ge2ZhbHNlIHwgdHJ1ZSB8IFwibm9uZVwiIHwgXCJlcnJvclwiIHwgXCJ3YXJuXCIgfCBcImluZm9cIiB8IFwibG9nXCIgfCBcInZlcmJvc2VcIn0gbGV2ZWxcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5cbmZ1bmN0aW9uIHNldExvZ0xldmVsKGxldmVsKSB7XG4gIGxvZ2dlci5jb25maWd1cmVEZWZhdWx0TG9nZ2VyKHtcbiAgICBsZXZlbDogbGV2ZWxcbiAgfSk7XG59XG5cbnNldExvZ0xldmVsKGRlZmF1bHRMZXZlbCk7XG52YXIgbG9nID0gbG9nZ2VyLmdldExvZ2dlcihuYW1lKTtcbmV4cG9ydCB7IGxvZywgc2V0TG9nTGV2ZWwgfTsiLCJpbXBvcnQgZ2V0Q3VycmVudFNjcmlwdFNvdXJjZSBmcm9tIFwiLi9nZXRDdXJyZW50U2NyaXB0U291cmNlLmpzXCI7XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXNvdXJjZVF1ZXJ5XG4gKiBAcmV0dXJucyB7eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBib29sZWFuIH19XG4gKi9cblxuZnVuY3Rpb24gcGFyc2VVUkwocmVzb3VyY2VRdWVyeSkge1xuICAvKiogQHR5cGUge3sgW2tleTogc3RyaW5nXTogc3RyaW5nIH19ICovXG4gIHZhciBvcHRpb25zID0ge307XG5cbiAgaWYgKHR5cGVvZiByZXNvdXJjZVF1ZXJ5ID09PSBcInN0cmluZ1wiICYmIHJlc291cmNlUXVlcnkgIT09IFwiXCIpIHtcbiAgICB2YXIgc2VhcmNoUGFyYW1zID0gcmVzb3VyY2VRdWVyeS5zbGljZSgxKS5zcGxpdChcIiZcIik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlYXJjaFBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBhaXIgPSBzZWFyY2hQYXJhbXNbaV0uc3BsaXQoXCI9XCIpO1xuICAgICAgb3B0aW9uc1twYWlyWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gRWxzZSwgZ2V0IHRoZSB1cmwgZnJvbSB0aGUgPHNjcmlwdD4gdGhpcyBmaWxlIHdhcyBjYWxsZWQgd2l0aC5cbiAgICB2YXIgc2NyaXB0U291cmNlID0gZ2V0Q3VycmVudFNjcmlwdFNvdXJjZSgpO1xuICAgIHZhciBzY3JpcHRTb3VyY2VVUkw7XG5cbiAgICB0cnkge1xuICAgICAgLy8gVGhlIHBsYWNlaG9sZGVyIGBiYXNlVVJMYCB3aXRoIGB3aW5kb3cubG9jYXRpb24uaHJlZmAsXG4gICAgICAvLyBpcyB0byBhbGxvdyBwYXJzaW5nIG9mIHBhdGgtcmVsYXRpdmUgb3IgcHJvdG9jb2wtcmVsYXRpdmUgVVJMcyxcbiAgICAgIC8vIGFuZCB3aWxsIGhhdmUgbm8gZWZmZWN0IGlmIGBzY3JpcHRTb3VyY2VgIGlzIGEgZnVsbHkgdmFsaWQgVVJMLlxuICAgICAgc2NyaXB0U291cmNlVVJMID0gbmV3IFVSTChzY3JpcHRTb3VyY2UsIHNlbGYubG9jYXRpb24uaHJlZik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsvLyBVUkwgcGFyc2luZyBmYWlsZWQsIGRvIG5vdGhpbmcuXG4gICAgICAvLyBXZSB3aWxsIHN0aWxsIHByb2NlZWQgdG8gc2VlIGlmIHdlIGNhbiByZWNvdmVyIHVzaW5nIGByZXNvdXJjZVF1ZXJ5YFxuICAgIH1cblxuICAgIGlmIChzY3JpcHRTb3VyY2VVUkwpIHtcbiAgICAgIG9wdGlvbnMgPSBzY3JpcHRTb3VyY2VVUkw7XG4gICAgICBvcHRpb25zLmZyb21DdXJyZW50U2NyaXB0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VVUkw7IiwiaW1wb3J0IGhvdEVtaXR0ZXIgZnJvbSBcIndlYnBhY2svaG90L2VtaXR0ZXIuanNcIjtcbmltcG9ydCB7IGxvZyB9IGZyb20gXCIuL2xvZy5qc1wiO1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoXCIuLi9pbmRleFwiKS5PcHRpb25zfSBPcHRpb25zXG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4uL2luZGV4XCIpLlN0YXR1c30gU3RhdHVzXG5cbi8qKlxuICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zXG4gKiBAcGFyYW0ge1N0YXR1c30gc3RhdHVzXG4gKi9cblxuZnVuY3Rpb24gcmVsb2FkQXBwKF9yZWYsIHN0YXR1cykge1xuICB2YXIgaG90ID0gX3JlZi5ob3QsXG4gICAgICBsaXZlUmVsb2FkID0gX3JlZi5saXZlUmVsb2FkO1xuXG4gIGlmIChzdGF0dXMuaXNVbmxvYWRpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY3VycmVudEhhc2ggPSBzdGF0dXMuY3VycmVudEhhc2gsXG4gICAgICBwcmV2aW91c0hhc2ggPSBzdGF0dXMucHJldmlvdXNIYXNoO1xuICB2YXIgaXNJbml0aWFsID0gY3VycmVudEhhc2guaW5kZXhPZihcbiAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gIHByZXZpb3VzSGFzaCkgPj0gMDtcblxuICBpZiAoaXNJbml0aWFsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge1dpbmRvd30gcm9vdFdpbmRvd1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW50ZXJ2YWxJZFxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGFwcGx5UmVsb2FkKHJvb3RXaW5kb3csIGludGVydmFsSWQpIHtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgIGxvZy5pbmZvKFwiQXBwIHVwZGF0ZWQuIFJlbG9hZGluZy4uLlwiKTtcbiAgICByb290V2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG5cbiAgdmFyIHNlYXJjaCA9IHNlbGYubG9jYXRpb24uc2VhcmNoLnRvTG93ZXJDYXNlKCk7XG4gIHZhciBhbGxvd1RvSG90ID0gc2VhcmNoLmluZGV4T2YoXCJ3ZWJwYWNrLWRldi1zZXJ2ZXItaG90PWZhbHNlXCIpID09PSAtMTtcbiAgdmFyIGFsbG93VG9MaXZlUmVsb2FkID0gc2VhcmNoLmluZGV4T2YoXCJ3ZWJwYWNrLWRldi1zZXJ2ZXItbGl2ZS1yZWxvYWQ9ZmFsc2VcIikgPT09IC0xO1xuXG4gIGlmIChob3QgJiYgYWxsb3dUb0hvdCkge1xuICAgIGxvZy5pbmZvKFwiQXBwIGhvdCB1cGRhdGUuLi5cIik7XG4gICAgaG90RW1pdHRlci5lbWl0KFwid2VicGFja0hvdFVwZGF0ZVwiLCBzdGF0dXMuY3VycmVudEhhc2gpO1xuXG4gICAgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYud2luZG93KSB7XG4gICAgICAvLyBicm9hZGNhc3QgdXBkYXRlIHRvIHdpbmRvd1xuICAgICAgc2VsZi5wb3N0TWVzc2FnZShcIndlYnBhY2tIb3RVcGRhdGVcIi5jb25jYXQoc3RhdHVzLmN1cnJlbnRIYXNoKSwgXCIqXCIpO1xuICAgIH1cbiAgfSAvLyBhbGxvdyByZWZyZXNoaW5nIHRoZSBwYWdlIG9ubHkgaWYgbGl2ZVJlbG9hZCBpc24ndCBkaXNhYmxlZFxuICBlbHNlIGlmIChsaXZlUmVsb2FkICYmIGFsbG93VG9MaXZlUmVsb2FkKSB7XG4gICAgdmFyIHJvb3RXaW5kb3cgPSBzZWxmOyAvLyB1c2UgcGFyZW50IHdpbmRvdyBmb3IgcmVsb2FkIChpbiBjYXNlIHdlJ3JlIGluIGFuIGlmcmFtZSB3aXRoIG5vIHZhbGlkIHNyYylcblxuICAgIHZhciBpbnRlcnZhbElkID0gc2VsZi5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocm9vdFdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCAhPT0gXCJhYm91dDpcIikge1xuICAgICAgICAvLyByZWxvYWQgaW1tZWRpYXRlbHkgaWYgcHJvdG9jb2wgaXMgdmFsaWRcbiAgICAgICAgYXBwbHlSZWxvYWQocm9vdFdpbmRvdywgaW50ZXJ2YWxJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb290V2luZG93ID0gcm9vdFdpbmRvdy5wYXJlbnQ7XG5cbiAgICAgICAgaWYgKHJvb3RXaW5kb3cucGFyZW50ID09PSByb290V2luZG93KSB7XG4gICAgICAgICAgLy8gaWYgcGFyZW50IGVxdWFscyBjdXJyZW50IHdpbmRvdyB3ZSd2ZSByZWFjaGVkIHRoZSByb290IHdoaWNoIHdvdWxkIGNvbnRpbnVlIGZvcmV2ZXIsIHNvIHRyaWdnZXIgYSByZWxvYWQgYW55d2F5c1xuICAgICAgICAgIGFwcGx5UmVsb2FkKHJvb3RXaW5kb3csIGludGVydmFsSWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVsb2FkQXBwOyIsIi8qIGdsb2JhbCBfX3Jlc291cmNlUXVlcnkgV29ya2VyR2xvYmFsU2NvcGUgKi9cbi8vIFNlbmQgbWVzc2FnZXMgdG8gdGhlIG91dHNpZGUsIHNvIHBsdWdpbnMgY2FuIGNvbnN1bWUgaXQuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7YW55fSBbZGF0YV1cbiAqL1xuZnVuY3Rpb24gc2VuZE1zZyh0eXBlLCBkYXRhKSB7XG4gIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiAodHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlID09PSBcInVuZGVmaW5lZFwiIHx8ICEoc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlKSkpIHtcbiAgICBzZWxmLnBvc3RNZXNzYWdlKHtcbiAgICAgIHR5cGU6IFwid2VicGFja1wiLmNvbmNhdCh0eXBlKSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9LCBcIipcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VuZE1zZzsiLCJ2YXIgYW5zaVJlZ2V4ID0gbmV3IFJlZ0V4cChbXCJbXFxcXHUwMDFCXFxcXHUwMDlCXVtbXFxcXF0oKSM7P10qKD86KD86KD86KD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKykqfFthLXpBLVpcXFxcZF0rKD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKikqKT9cXFxcdTAwMDcpXCIsIFwiKD86KD86XFxcXGR7MSw0fSg/OjtcXFxcZHswLDR9KSopP1tcXFxcZEEtUFItVFpjZi1ucS11eT0+PH5dKSlcIl0uam9pbihcInxcIiksIFwiZ1wiKTtcbi8qKlxuICpcbiAqIFN0cmlwIFtBTlNJIGVzY2FwZSBjb2Rlc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSkgZnJvbSBhIHN0cmluZy5cbiAqIEFkYXB0ZWQgZnJvbSBjb2RlIG9yaWdpbmFsbHkgcmVsZWFzZWQgYnkgU2luZHJlIFNvcmh1c1xuICogTGljZW5zZWQgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHN0cmlwQW5zaShzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09IFwic3RyaW5nXCIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYSBgc3RyaW5nYCwgZ290IGBcIi5jb25jYXQodHlwZW9mIHN0cmluZywgXCJgXCIpKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShhbnNpUmVnZXgsIFwiXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpcEFuc2k7IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8qIGdsb2JhbHMgX193ZWJwYWNrX2hhc2hfXyAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcblx0dmFyIGxhc3RIYXNoO1xuXHR2YXIgdXBUb0RhdGUgPSBmdW5jdGlvbiB1cFRvRGF0ZSgpIHtcblx0XHRyZXR1cm4gbGFzdEhhc2guaW5kZXhPZihfX3dlYnBhY2tfaGFzaF9fKSA+PSAwO1xuXHR9O1xuXHR2YXIgbG9nID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuXHR2YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjaygpIHtcblx0XHRtb2R1bGUuaG90XG5cdFx0XHQuY2hlY2sodHJ1ZSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGVkTW9kdWxlcykge1xuXHRcdFx0XHRpZiAoIXVwZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIENhbm5vdCBmaW5kIHVwZGF0ZS4gTmVlZCB0byBkbyBhIGZ1bGwgcmVsb2FkIVwiKTtcblx0XHRcdFx0XHRsb2coXG5cdFx0XHRcdFx0XHRcIndhcm5pbmdcIixcblx0XHRcdFx0XHRcdFwiW0hNUl0gKFByb2JhYmx5IGJlY2F1c2Ugb2YgcmVzdGFydGluZyB0aGUgd2VicGFjay1kZXYtc2VydmVyKVwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCF1cFRvRGF0ZSgpKSB7XG5cdFx0XHRcdFx0Y2hlY2soKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlcXVpcmUoXCIuL2xvZy1hcHBseS1yZXN1bHRcIikodXBkYXRlZE1vZHVsZXMsIHVwZGF0ZWRNb2R1bGVzKTtcblxuXHRcdFx0XHRpZiAodXBUb0RhdGUoKSkge1xuXHRcdFx0XHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSBBcHAgaXMgdXAgdG8gZGF0ZS5cIik7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuXHRcdFx0XHR2YXIgc3RhdHVzID0gbW9kdWxlLmhvdC5zdGF0dXMoKTtcblx0XHRcdFx0aWYgKFtcImFib3J0XCIsIFwiZmFpbFwiXS5pbmRleE9mKHN0YXR1cykgPj0gMCkge1xuXHRcdFx0XHRcdGxvZyhcblx0XHRcdFx0XHRcdFwid2FybmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJbSE1SXSBDYW5ub3QgYXBwbHkgdXBkYXRlLiBOZWVkIHRvIGRvIGEgZnVsbCByZWxvYWQhXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSBcIiArIGxvZy5mb3JtYXRFcnJvcihlcnIpKTtcblx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFVwZGF0ZSBmYWlsZWQ6IFwiICsgbG9nLmZvcm1hdEVycm9yKGVycikpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fTtcblx0dmFyIGhvdEVtaXR0ZXIgPSByZXF1aXJlKFwiLi9lbWl0dGVyXCIpO1xuXHRob3RFbWl0dGVyLm9uKFwid2VicGFja0hvdFVwZGF0ZVwiLCBmdW5jdGlvbiAoY3VycmVudEhhc2gpIHtcblx0XHRsYXN0SGFzaCA9IGN1cnJlbnRIYXNoO1xuXHRcdGlmICghdXBUb0RhdGUoKSAmJiBtb2R1bGUuaG90LnN0YXR1cygpID09PSBcImlkbGVcIikge1xuXHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIENoZWNraW5nIGZvciB1cGRhdGVzIG9uIHRoZSBzZXJ2ZXIuLi5cIik7XG5cdFx0XHRjaGVjaygpO1xuXHRcdH1cblx0fSk7XG5cdGxvZyhcImluZm9cIiwgXCJbSE1SXSBXYWl0aW5nIGZvciB1cGRhdGUgc2lnbmFsIGZyb20gV0RTLi4uXCIpO1xufSBlbHNlIHtcblx0dGhyb3cgbmV3IEVycm9yKFwiW0hNUl0gSG90IE1vZHVsZSBSZXBsYWNlbWVudCBpcyBkaXNhYmxlZC5cIik7XG59XG4iLCJ2YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZShcImV2ZW50c1wiKTtcbm1vZHVsZS5leHBvcnRzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVwZGF0ZWRNb2R1bGVzLCByZW5ld2VkTW9kdWxlcykge1xuXHR2YXIgdW5hY2NlcHRlZE1vZHVsZXMgPSB1cGRhdGVkTW9kdWxlcy5maWx0ZXIoZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0cmV0dXJuIHJlbmV3ZWRNb2R1bGVzICYmIHJlbmV3ZWRNb2R1bGVzLmluZGV4T2YobW9kdWxlSWQpIDwgMDtcblx0fSk7XG5cdHZhciBsb2cgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5cblx0aWYgKHVuYWNjZXB0ZWRNb2R1bGVzLmxlbmd0aCA+IDApIHtcblx0XHRsb2coXG5cdFx0XHRcIndhcm5pbmdcIixcblx0XHRcdFwiW0hNUl0gVGhlIGZvbGxvd2luZyBtb2R1bGVzIGNvdWxkbid0IGJlIGhvdCB1cGRhdGVkOiAoVGhleSB3b3VsZCBuZWVkIGEgZnVsbCByZWxvYWQhKVwiXG5cdFx0KTtcblx0XHR1bmFjY2VwdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdICAtIFwiICsgbW9kdWxlSWQpO1xuXHRcdH0pO1xuXHR9XG5cblx0aWYgKCFyZW5ld2VkTW9kdWxlcyB8fCByZW5ld2VkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gTm90aGluZyBob3QgdXBkYXRlZC5cIik7XG5cdH0gZWxzZSB7XG5cdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIFVwZGF0ZWQgbW9kdWxlczpcIik7XG5cdFx0cmVuZXdlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdGlmICh0eXBlb2YgbW9kdWxlSWQgPT09IFwic3RyaW5nXCIgJiYgbW9kdWxlSWQuaW5kZXhPZihcIiFcIikgIT09IC0xKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IG1vZHVsZUlkLnNwbGl0KFwiIVwiKTtcblx0XHRcdFx0bG9nLmdyb3VwQ29sbGFwc2VkKFwiaW5mb1wiLCBcIltITVJdICAtIFwiICsgcGFydHMucG9wKCkpO1xuXHRcdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVJZCk7XG5cdFx0XHRcdGxvZy5ncm91cEVuZChcImluZm9cIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVJZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dmFyIG51bWJlcklkcyA9IHJlbmV3ZWRNb2R1bGVzLmV2ZXJ5KGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiBtb2R1bGVJZCA9PT0gXCJudW1iZXJcIjtcblx0XHR9KTtcblx0XHRpZiAobnVtYmVySWRzKVxuXHRcdFx0bG9nKFxuXHRcdFx0XHRcImluZm9cIixcblx0XHRcdFx0J1tITVJdIENvbnNpZGVyIHVzaW5nIHRoZSBvcHRpbWl6YXRpb24ubW9kdWxlSWRzOiBcIm5hbWVkXCIgZm9yIG1vZHVsZSBuYW1lcy4nXG5cdFx0XHQpO1xuXHR9XG59O1xuIiwidmFyIGxvZ0xldmVsID0gXCJpbmZvXCI7XG5cbmZ1bmN0aW9uIGR1bW15KCkge31cblxuZnVuY3Rpb24gc2hvdWxkTG9nKGxldmVsKSB7XG5cdHZhciBzaG91bGRMb2cgPVxuXHRcdChsb2dMZXZlbCA9PT0gXCJpbmZvXCIgJiYgbGV2ZWwgPT09IFwiaW5mb1wiKSB8fFxuXHRcdChbXCJpbmZvXCIsIFwid2FybmluZ1wiXS5pbmRleE9mKGxvZ0xldmVsKSA+PSAwICYmIGxldmVsID09PSBcIndhcm5pbmdcIikgfHxcblx0XHQoW1wiaW5mb1wiLCBcIndhcm5pbmdcIiwgXCJlcnJvclwiXS5pbmRleE9mKGxvZ0xldmVsKSA+PSAwICYmIGxldmVsID09PSBcImVycm9yXCIpO1xuXHRyZXR1cm4gc2hvdWxkTG9nO1xufVxuXG5mdW5jdGlvbiBsb2dHcm91cChsb2dGbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGxldmVsLCBtc2cpIHtcblx0XHRpZiAoc2hvdWxkTG9nKGxldmVsKSkge1xuXHRcdFx0bG9nRm4obXNnKTtcblx0XHR9XG5cdH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxldmVsLCBtc2cpIHtcblx0aWYgKHNob3VsZExvZyhsZXZlbCkpIHtcblx0XHRpZiAobGV2ZWwgPT09IFwiaW5mb1wiKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhtc2cpO1xuXHRcdH0gZWxzZSBpZiAobGV2ZWwgPT09IFwid2FybmluZ1wiKSB7XG5cdFx0XHRjb25zb2xlLndhcm4obXNnKTtcblx0XHR9IGVsc2UgaWYgKGxldmVsID09PSBcImVycm9yXCIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IobXNnKTtcblx0XHR9XG5cdH1cbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGlucyAqL1xudmFyIGdyb3VwID0gY29uc29sZS5ncm91cCB8fCBkdW1teTtcbnZhciBncm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQgfHwgZHVtbXk7XG52YXIgZ3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kIHx8IGR1bW15O1xuLyogZXNsaW50LWVuYWJsZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnMgKi9cblxubW9kdWxlLmV4cG9ydHMuZ3JvdXAgPSBsb2dHcm91cChncm91cCk7XG5cbm1vZHVsZS5leHBvcnRzLmdyb3VwQ29sbGFwc2VkID0gbG9nR3JvdXAoZ3JvdXBDb2xsYXBzZWQpO1xuXG5tb2R1bGUuZXhwb3J0cy5ncm91cEVuZCA9IGxvZ0dyb3VwKGdyb3VwRW5kKTtcblxubW9kdWxlLmV4cG9ydHMuc2V0TG9nTGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwpIHtcblx0bG9nTGV2ZWwgPSBsZXZlbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzLmZvcm1hdEVycm9yID0gZnVuY3Rpb24gKGVycikge1xuXHR2YXIgbWVzc2FnZSA9IGVyci5tZXNzYWdlO1xuXHR2YXIgc3RhY2sgPSBlcnIuc3RhY2s7XG5cdGlmICghc3RhY2spIHtcblx0XHRyZXR1cm4gbWVzc2FnZTtcblx0fSBlbHNlIGlmIChzdGFjay5pbmRleE9mKG1lc3NhZ2UpIDwgMCkge1xuXHRcdHJldHVybiBtZXNzYWdlICsgXCJcXG5cIiArIHN0YWNrO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBzdGFjaztcblx0fVxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoY2FjaGVkTW9kdWxlLmVycm9yICE9PSB1bmRlZmluZWQpIHRocm93IGNhY2hlZE1vZHVsZS5lcnJvcjtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0dHJ5IHtcblx0XHR2YXIgZXhlY09wdGlvbnMgPSB7IGlkOiBtb2R1bGVJZCwgbW9kdWxlOiBtb2R1bGUsIGZhY3Rvcnk6IF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLCByZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fIH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikgeyBoYW5kbGVyKGV4ZWNPcHRpb25zKTsgfSk7XG5cdFx0bW9kdWxlID0gZXhlY09wdGlvbnMubW9kdWxlO1xuXHRcdGV4ZWNPcHRpb25zLmZhY3RvcnkuY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgZXhlY09wdGlvbnMucmVxdWlyZSk7XG5cdH0gY2F0Y2goZSkge1xuXHRcdG1vZHVsZS5lcnJvciA9IGU7XG5cdFx0dGhyb3cgZTtcblx0fVxuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRvclxuX193ZWJwYWNrX3JlcXVpcmVfXy5pID0gW107XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiaW5kZXguXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiOyB9OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIyYWVhYTlmMGY2NDQ1OWViOWJiY1wiOyB9IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwic2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSBmdW5jdGlvbih1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24ocHJldiwgZXZlbnQpIHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKGZ1bmN0aW9uKGZuKSB7IHJldHVybiBmbihldmVudCk7IH0pO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHQ7XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuLy8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG52YXIgY3VycmVudENoaWxkTW9kdWxlO1xudmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG5cbi8vIHN0YXR1c1xudmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xudmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcblxuLy8gd2hpbGUgZG93bmxvYWRpbmdcbnZhciBibG9ja2luZ1Byb21pc2VzID0gMDtcbnZhciBibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXG4vLyBUaGUgdXBkYXRlIGluZm9cbnZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbnZhciBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJEID0gY3VycmVudE1vZHVsZURhdGE7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaS5wdXNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHZhciBtb2R1bGUgPSBvcHRpb25zLm1vZHVsZTtcblx0dmFyIHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKG9wdGlvbnMucmVxdWlyZSwgb3B0aW9ucy5pZCk7XG5cdG1vZHVsZS5ob3QgPSBjcmVhdGVNb2R1bGVIb3RPYmplY3Qob3B0aW9ucy5pZCwgbW9kdWxlKTtcblx0bW9kdWxlLnBhcmVudHMgPSBjdXJyZW50UGFyZW50cztcblx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdG9wdGlvbnMucmVxdWlyZSA9IHJlcXVpcmU7XG59KTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkgPSB7fTtcblxuZnVuY3Rpb24gY3JlYXRlUmVxdWlyZShyZXF1aXJlLCBtb2R1bGVJZCkge1xuXHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblx0aWYgKCFtZSkgcmV0dXJuIHJlcXVpcmU7XG5cdHZhciBmbiA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcblx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRzID0gaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzO1xuXHRcdFx0XHRpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRwYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG5cdFx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcblx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG5cdFx0XHRcdFx0cmVxdWVzdCArXG5cdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcblx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0KTtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdFx0fVxuXHRcdHJldHVybiByZXF1aXJlKHJlcXVlc3QpO1xuXHR9O1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZVtuYW1lXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXF1aXJlW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0Zm9yICh2YXIgbmFtZSBpbiByZXF1aXJlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXF1aXJlLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSkpO1xuXHRcdH1cblx0fVxuXHRmbi5lID0gZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRyZXR1cm4gdHJhY2tCbG9ja2luZ1Byb21pc2UocmVxdWlyZS5lKGNodW5rSWQpKTtcblx0fTtcblx0cmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2R1bGVIb3RPYmplY3QobW9kdWxlSWQsIG1lKSB7XG5cdHZhciBfbWFpbiA9IGN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQ7XG5cdHZhciBob3QgPSB7XG5cdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuXHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG5cdFx0X2FjY2VwdGVkRXJyb3JIYW5kbGVyczoge30sXG5cdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcblx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcblx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcblx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcblx0XHRfbWFpbjogX21haW4sXG5cdFx0X3JlcXVpcmVTZWxmOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IG1lLnBhcmVudHMuc2xpY2UoKTtcblx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IF9tYWluID8gdW5kZWZpbmVkIDogbW9kdWxlSWQ7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcblx0XHR9LFxuXG5cdFx0Ly8gTW9kdWxlIEFQSVxuXHRcdGFjdGl2ZTogdHJ1ZSxcblx0XHRhY2NlcHQ6IGZ1bmN0aW9uIChkZXAsIGNhbGxiYWNrLCBlcnJvckhhbmRsZXIpIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwW2ldXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcF0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZWNsaW5lOiBmdW5jdGlvbiAoZGVwKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuXHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuXHRcdH0sXG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG5cdFx0XHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG5cdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuXHRcdFx0XHRcdChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2goXG5cdFx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuXHRcdGNoZWNrOiBob3RDaGVjayxcblx0XHRhcHBseTogaG90QXBwbHksXG5cdFx0c3RhdHVzOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0aWYgKCFsKSByZXR1cm4gY3VycmVudFN0YXR1cztcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHZhciBpZHggPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcblx0XHRcdGlmIChpZHggPj0gMCkgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cblx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcblx0XHRkYXRhOiBjdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cblx0fTtcblx0Y3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuXHRyZXR1cm4gaG90O1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XG5cdGN1cnJlbnRTdGF0dXMgPSBuZXdTdGF0dXM7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG5cdFx0cmVzdWx0c1tpXSA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpO1xufVxuXG5mdW5jdGlvbiB1bmJsb2NrKCkge1xuXHRpZiAoLS1ibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0c2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdFx0XHR2YXIgbGlzdCA9IGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nO1xuXHRcdFx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsaXN0W2ldKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHQvKiBmYWxsdGhyb3VnaCAqL1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzKys7XG5cdFx0XHRwcm9taXNlLnRoZW4odW5ibG9jaywgdW5ibG9jayk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHJldHVybiBmbigpO1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZy5wdXNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlc29sdmUoZm4oKSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBob3RDaGVjayhhcHBseU9uVXBkYXRlKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcImlkbGVcIikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuXHR9XG5cdHJldHVybiBzZXRTdGF0dXMoXCJjaGVja1wiKVxuXHRcdC50aGVuKF9fd2VicGFja19yZXF1aXJlX18uaG1yTSlcblx0XHQudGhlbihmdW5jdGlvbiAodXBkYXRlKSB7XG5cdFx0XHRpZiAoIXVwZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIikudGhlbihcblx0XHRcdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJwcmVwYXJlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgdXBkYXRlZE1vZHVsZXMgPSBbXTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDKS5yZWR1Y2UoZnVuY3Rpb24gKFxuXHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRrZXlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUuYyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlLnIsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0W10pXG5cdFx0XHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwicmVhZHlcIikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXMgKHN0YXRlOiBcIiArXG5cdFx0XHRcdFx0Y3VycmVudFN0YXR1cyArXG5cdFx0XHRcdFx0XCIpXCJcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiYWJvcnRcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0dmFyIGRpc3Bvc2VQcm9taXNlID0gc2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHR2YXIgYXBwbHlQcm9taXNlID0gc2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cblx0dmFyIGVycm9yO1xuXHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG5cdH07XG5cblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuYXBwbHkpIHtcblx0XHRcdHZhciBtb2R1bGVzID0gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcblx0XHRcdGlmIChtb2R1bGVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW2Rpc3Bvc2VQcm9taXNlLCBhcHBseVByb21pc2VdKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImZhaWxcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJpZGxlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgfHwge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG52YXIgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdDtcbnZhciB3YWl0aW5nVXBkYXRlUmVzb2x2ZXMgPSB7fTtcbmZ1bmN0aW9uIGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpIHtcblx0Y3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCA9IHVwZGF0ZWRNb2R1bGVzTGlzdDtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHJlc29sdmU7XG5cdFx0Ly8gc3RhcnQgdXBkYXRlIGNodW5rIGxvYWRpbmdcblx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5odShjaHVua0lkKTtcblx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0dmFyIGxvYWRpbmdFbmRlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHRcdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkXG5cdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBob3QgdXBkYXRlIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkKTtcblx0fSk7XG59XG5cbnNlbGZbXCJ3ZWJwYWNrSG90VXBkYXRlc2FsYXphcnNkZl92aXJ0dWFsX2tleWJvYXJkXCJdID0gZnVuY3Rpb24oY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpIHtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QpIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG5cdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgbW9kdWxlLmlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG5cdFx0KTtcblx0fTtcblxuXHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRcdHZhciBuZXdNb2R1bGVGYWN0b3J5ID0gY3VycmVudFVwZGF0ZVttb2R1bGVJZF07XG5cdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKG5ld01vZHVsZUZhY3RvcnkpIHtcblx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdCA9IHtcblx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuXHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcblx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG5cdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcblx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcblx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRlcnJvcjogYWJvcnRFcnJvclxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvQXBwbHkpIHtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcblx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG5cdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcblx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdGlmIChcblx0XHRcdG1vZHVsZSAmJlxuXHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCB8fCBtb2R1bGUuaG90Ll9tYWluKSAmJlxuXHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuXHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG5cdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuXHRcdFx0IW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuXHRcdCkge1xuXHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuXHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdHJlcXVpcmU6IG1vZHVsZS5ob3QuX3JlcXVpcmVTZWxmLFxuXHRcdFx0XHRlcnJvckhhbmRsZXI6IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuXG5cdHJldHVybiB7XG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0fSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dmFyIGlkeDtcblx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG5cdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuXHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcblx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuXG5cdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG5cdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG5cdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG5cdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG5cdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcblx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcblx0XHRcdC8vIGluc2VydCBuZXcgY29kZVxuXHRcdFx0Zm9yICh2YXIgdXBkYXRlTW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVt1cGRhdGVNb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBydW4gbmV3IHJ1bnRpbWUgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50VXBkYXRlUnVudGltZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZVtpXShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgYWNjZXB0Q2FsbGJhY2sgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVyID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdGlmIChhY2NlcHRDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChhY2NlcHRDYWxsYmFjayk7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVycy5wdXNoKGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzW2tdLmNhbGwobnVsbCwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGVycm9ySGFuZGxlcnNba10gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyc1trXShlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tvXTtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aXRlbS5yZXF1aXJlKG1vZHVsZUlkKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fVxuXHR9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLmpzb25wID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG5cdGlmICghY3VycmVudFVwZGF0ZSkge1xuXHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcblx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG5cdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdH1cblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuXHR9XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLmpzb25wID0gZnVuY3Rpb24gKFxuXHRjaHVua0lkcyxcblx0cmVtb3ZlZENodW5rcyxcblx0cmVtb3ZlZE1vZHVsZXMsXG5cdHByb21pc2VzLFxuXHRhcHBseUhhbmRsZXJzLFxuXHR1cGRhdGVkTW9kdWxlc0xpc3Rcbikge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHt9O1xuXHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG5cdGN1cnJlbnRVcGRhdGUgPSByZW1vdmVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG5cdFx0b2JqW2tleV0gPSBmYWxzZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdGNodW5rSWRzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHQpIHtcblx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkpO1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yID0gZnVuY3Rpb24gKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgJiZcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGVDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRcdCFjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdXG5cdFx0XHQpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkpO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0gPSBmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikgdGhyb3cgbmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0OiBuZWVkIGZldGNoIEFQSVwiKTtcblx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0aWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybjsgLy8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuXHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9pbmRleC5qcz9wcm90b2NvbD13cyUzQSZob3N0bmFtZT0wLjAuMC4wJnBvcnQ9ODA4MCZwYXRobmFtZT0lMkZ3cyZsb2dnaW5nPWluZm8mcmVjb25uZWN0PTEwXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2Rldi1zZXJ2ZXIuanNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJtYWtlVGV4dEFyZWEiLCJ0ZXh0QXJlYUJyYWluIiwibWFrZUtleWJvYXJkIiwia2V5QW5pbWF0aW9uIiwiaW5pdCIsInNoaWZ0IiwibGFuZyIsImtleVB1c2giLCJlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ubG9hZCIsImFsbEtleXMiLCJjb2RlIiwibGFuZ1J1IiwidW5TaGlmdCIsImxhbmdFbmciLCJrZXlDb2RlIiwiZnVuYyIsInJlbW92ZVRyYW5zaXRpb24iLCJwcm9wZXJ0eU5hbWUiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJtYWtlQnV0dG9ucyIsImtleXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpIiwicm93IiwiaiIsImxlbmd0aCIsImtleSIsImtiZCIsImlubmVySFRNTCIsImFwcGVuZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b2dnbGUiLCJsYW5nRW5nU2hpZnQiLCJsYW5nRW5nVW5TaGlmdCIsImxhbmdSdVNoaWZ0IiwibGFuZ1J1VW5TaGlmdCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwid3JhcHBlciIsInRleHRhcmVhQ29udCIsInRleHRBcmVhIiwidGV4dGFyZWEiLCJmb2N1cyIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9