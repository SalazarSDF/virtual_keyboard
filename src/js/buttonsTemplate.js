const allKeys = [
  [
    {
      code: "Backquote",
      langRu: {
        unShift: "ё",
        shift: "Ё",
      },
      langEng: {
        shift: "~",
        unShift: "`",
      },
      keyCode: "192",
    },
    {
      code: "Digit1",
      langRu: {
        unShift: "1",
        shift: "!",
      },
      langEng: {
        shift: "!",
        unShift: "1",
      },
      keyCode: "49",
    },
    {
      code: "Digit2",
      langRu: {
        unShift: "2",
        shift: '"',
      },
      langEng: {
        shift: "@",
        unShift: "2",
      },
      keyCode: "50",
    },
    {
      code: "Digit3",
      langRu: {
        unShift: "3",
        shift: "№",
      },
      langEng: {
        shift: "#",
        unShift: "3",
      },
      keyCode: "51",
    },
    {
      code: "Digit4",
      langRu: {
        unShift: "4",
        shift: ";",
      },
      langEng: {
        shift: "$",
        unShift: "4",
      },
      keyCode: "52",
    },
    {
      code: "Digit5",
      langRu: {
        unShift: "5",
        shift: "%",
      },
      langEng: {
        shift: "%",
        unShift: "5",
      },
      keyCode: "53",
    },
    {
      code: "Digit6",
      langRu: {
        unShift: "6",
        shift: ":",
      },
      langEng: {
        shift: "^",
        unShift: "6",
      },
      keyCode: "54",
    },
    {
      code: "Digit7",
      langRu: {
        unShift: "7",
        shift: "?",
      },
      langEng: {
        shift: "&",
        unShift: "7",
      },
      keyCode: "55",
    },
    {
      code: "Digit8",
      langRu: {
        unShift: "8",
        shift: "*",
      },
      langEng: {
        shift: "*",
        unShift: "8",
      },
      keyCode: "56",
    },
    {
      code: "Digit9",
      langRu: {
        unShift: "9",
        shift: "(",
      },
      langEng: {
        shift: "(",
        unShift: "9",
      },
      keyCode: "57",
    },
    {
      code: "Digit0",
      langRu: {
        unShift: "0",
        shift: ")",
      },
      langEng: {
        shift: ")",
        unShift: "0",
      },
      keyCode: "48",
    },
    {
      code: "Minus",
      langRu: {
        unShift: "-",
        shift: "_",
      },
      langEng: {
        shift: "_",
        unShift: "-",
      },
      keyCode: "173",
    },
    {
      code: "Equal",
      langRu: {
        unShift: "=",
        shift: "+",
      },
      langEng: {
        shift: "+",
        unShift: "=",
      },
      keyCode: "61",
    },
    {
      code: "Backspace",
      langRu: {
        unShift: "⌫",
        shift: "⌫",
      },
      langEng: {
        unShift: "⌫",
        shift: "⌫",
      },
      keyCode: "8",
    },
  ],
  [
    {
      code: "Tab",
      langRu: {
        unShift: "↹ Tab",
        shift: "↹ Tab",
      },
      langEng: {
        unShift: "↹ Tab",
        shift: "↹ Tab",
      },
      keyCode: "9",
    },
    {
      code: "KeyQ",
      func: false,
      langRu: {
        unShift: "й",
        shift: "Й",
      },
      langEng: {
        shift: "Q",
        unShift: "q",
      },
      keyCode: "81",
    },
    {
      code: "KeyW",
      langRu: {
        unShift: "ц",
        shift: "Ц",
      },
      langEng: {
        shift: "W",
        unShift: "w",
      },
      keyCode: "87",
    },
    {
      code: "KeyE",
      langRu: {
        unShift: "у",
        shift: "У",
      },
      langEng: {
        shift: "E",
        unShift: "e",
      },
      keyCode: "69",
    },
    {
      code: "KeyR",
      langRu: {
        unShift: "к",
        shift: "К",
      },
      langEng: {
        shift: "R",
        unShift: "r",
      },
      keyCode: "82",
    },
    {
      code: "KeyT",
      langRu: {
        unShift: "е",
        shift: "Е",
      },
      langEng: {
        shift: "T",
        unShift: "t",
      },
      keyCode: "84",
    },
    {
      code: "KeyY",
      langRu: {
        unShift: "н",
        shift: "Н",
      },
      langEng: {
        shift: "Y",
        unShift: "y",
      },
      keyCode: "89",
    },
    {
      code: "KeyU",
      langRu: {
        unShift: "г",
        shift: "Г",
      },
      langEng: {
        shift: "U",
        unShift: "u",
      },
      keyCode: "85",
    },
    {
      code: "KeyI",
      langRu: {
        unShift: "ш",
        shift: "Ш",
      },
      langEng: {
        shift: "I",
        unShift: "i",
      },
      keyCode: "73",
    },
    {
      code: "KeyO",
      langRu: {
        unShift: "щ",
        shift: "Щ",
      },
      langEng: {
        shift: "O",
        unShift: "o",
      },
      keyCode: "79",
    },
    {
      code: "KeyP",
      langRu: {
        unShift: "з",
        shift: "З",
      },
      langEng: {
        shift: "P",
        unShift: "p",
      },
      keyCode: "80",
    },
    {
      code: "BracketLeft",
      langRu: {
        unShift: "x",
        shift: "X",
      },
      langEng: {
        shift: "{",
        unShift: "[",
      },
      keyCode: "219",
    },
    {
      code: "BracketRight",
      langRu: {
        unShift: "ъ",
        shift: "Ъ",
      },
      langEng: {
        shift: "}",
        unShift: "]",
      },
      keyCode: "221",
    },
    {
      code: "Backslash",
      langRu: {
        unShift: "\\",
        shift: "/",
      },
      langEng: {
        shift: "|",
        unShift: "\\",
      },
      keyCode: "220",
    },
    {
      code: "Delete",
      langRu: {
        unShift: "del",
        shift: "del",
      },
      langEng: {
        shift: "del",
        unShift: "del",
      },
      keyCode: "46",
    },
  ],
  [
    {
      code: "CapsLock",
      langRu: {
        unShift: "Caps lock",
        shift: "Caps lock",
      },
      langEng: {
        unShift: "Caps lock",
        shift: "Caps lock",
      },
      keyCode: "0",
    },
    {
      code: "KeyA",
      langRu: {
        unShift: "ф",
        shift: "Ф",
      },
      langEng: {
        unShift: "a",
        shift: "A",
      },
      keyCode: "65",
    },
    {
      code: "KeyS",
      langRu: {
        unShift: "ы",
        shift: "Ы",
      },
      langEng: {
        unShift: "s",
        shift: "S",
      },
      keyCode: "83",
    },
    {
      code: "KeyD",
      langRu: {
        unShift: "в",
        shift: "В",
      },
      langEng: {
        unShift: "d",
        shift: "D",
      },
      keyCode: "68",
    },
    {
      code: "KeyF",
      langRu: {
        shift: "А",
        unShift: "а",
      },
      langEng: {
        shift: "F",
        unShift: "f",
      },
      keyCode: "70",
    },
    {
      code: "KeyG",
      langRu: {
        shift: "П",
        unShift: "п",
      },
      langEng: {
        shift: "G",
        unShift: "g",
      },
      keyCode: "71",
    },
    {
      code: "KeyH",
      langRu: {
        shift: "Р",
        unShift: "р",
      },
      langEng: {
        shift: "H",
        unShift: "h",
      },
      keyCode: "72",
    },
    {
      code: "KeyJ",
      langRu: {
        shift: "О",
        unShift: "о",
      },
      langEng: {
        shift: "J",
        unShift: "j",
      },
      keyCode: "74",
    },
    {
      code: "KeyK",
      langRu: {
        shift: "Л",
        unShift: "л",
      },
      langEng: {
        shift: "K",
        unShift: "k",
      },
      keyCode: "75",
    },
    {
      code: "KeyL",
      langRu: {
        shift: "Д",
        unShift: "д",
      },
      langEng: {
        shift: "L",
        unShift: "l",
      },
      keyCode: "76",
    },
    {
      code: "Semicolon",
      langRu: {
        shift: "Ж",
        unShift: "ж",
      },
      langEng: {
        shift: ":",
        unShift: ";",
      },
      keyCode: "59",
    },
    {
      code: "Quote",
      langRu: {
        shift: "Э",
        unShift: "э",
      },
      langEng: {
        shift: '"',
        unShift: "'",
      },
      keyCode: "222",
    },
    {
      code: "Enter",
      langRu: {
        shift: "Enter",
        unShift: "Enter",
      },
      langEng: {
        shift: "Enter",
        unShift: "Enter",
      },
      keyCode: "13",
    },
  ],
  [
    {
      code: "ShiftLeft",
      langRu: {
        shift: "⇧Shift",
        unShift: "⇧Shift",
      },
      langEng: {
        shift: "⇧Shift",
        unShift: "⇧Shift",
      },
      keyCode: "16",
    },
    {
      code: "KeyZ",
      langRu: {
        shift: "Я",
        unShift: "я",
      },
      langEng: {
        shift: "Z",
        unShift: "z",
      },
      keyCode: "90",
    },
    {
      code: "KeyX",
      langRu: {
        shift: "Ч",
        unShift: "ч",
      },
      langEng: {
        shift: "X",
        unShift: "x",
      },
      keyCode: "88",
    },
    {
      code: "KeyC",
      langRu: {
        shift: "C",
        unShift: "c",
      },
      langEng: {
        shift: "C",
        unShift: "c",
      },
      keyCode: "67",
    },
    {
      code: "KeyV",
      langRu: {
        shift: "М",
        unShift: "м",
      },
      langEng: {
        shift: "V",
        unShift: "v",
      },
      keyCode: "86",
    },
    {
      code: "KeyB",
      langRu: {
        shift: "И",
        unShift: "и",
      },
      langEng: {
        shift: "B",
        unShift: "b",
      },
      keyCode: "66",
    },
    {
      code: "KeyN",
      langRu: {
        shift: "Т",
        unShift: "т",
      },
      langEng: {
        shift: "N",
        unShift: "n",
      },
      keyCode: "78",
    },
    {
      code: "KeyM",
      langRu: {
        shift: "Ь",
        unShift: "ь",
      },
      langEng: {
        shift: "M",
        unShift: "m",
      },
      keyCode: "77",
    },
    {
      code: "Comma",
      langRu: {
        shift: "Б",
        unShift: "б",
      },
      langEng: {
        shift: "<",
        unShift: ",",
      },
      keyCode: "188",
    },
    {
      code: "Period",
      langRu: {
        shift: "Ю",
        unShift: "ю",
      },
      langEng: {
        shift: ">",
        unShift: ".",
      },
      keyCode: "190",
    },
    {
      code: "Slash",
      langRu: {
        shift: ",",
        unShift: ",",
      },
      langEng: {
        shift: "?",
        unShift: "/",
      },
      keyCode: "191",
    },
    {
      code: "ShiftRight",
      langRu: {
        shift: "⇧Shift",
        unShift: "⇧Shift",
      },
      langEng: {
        shift: "⇧Shift",
        unShift: "⇧Shift",
      },
      keyCode: "16",
    },
    {
      code: "ArrowUp",
      langRu: {
        shift: "⯅",
        unShift: "⯅",
      },
      langEng: {
        shift: "⯅",
        unShift: "⯅",
      },
      keyCode: "38",
    },
  ],
  [
    {
      code: "ControlLeft",
      langRu: {
        shift: "Control",
        unShift: "Control",
      },
      langEng: {
        shift: "Control",
        unShift: "Control",
      },
      keyCode: "17",
    },
    {
      code: "AltLeft",
      langRu: {
        shift: "Alt",
        unShift: "Alt",
      },
      langEng: {
        shift: "Alt",
        unShift: "Alt",
      },
      keyCode: "18",
    },
    {
      code: "Space",
      langRu: {
        shift: "Space",
        unShift: "Space",
      },
      langEng: {
        shift: "Space",
        unShift: "Space",
      },
      keyCode: "32",
    },
    {
      code: "AltRight",
      langRu: {
        shift: "Alt",
        unShift: "Alt",
      },
      langEng: {
        shift: "Alt",
        unShift: "Alt",
      },
      keyCode: "18",
    },
    {
      code: "ControlRight",
      langRu: {
        shift: "Control",
        unShift: "Control",
      },
      langEng: {
        shift: "Control",
        unShift: "Control",
      },
      keyCode: "17",
    },
    {
      code: "ArrowLeft",
      langRu: {
        shift: "⯇",
        unShift: "⯇",
      },
      langEng: {
        shift: "⯇",
        unShift: "⯇",
      },
      keyCode: "37",
    },
    {
      code: "ArrowDown",
      langRu: {
        shift: "⯆",
        unShift: "⯆",
      },
      langEng: {
        shift: "⯆",
        unShift: "⯆",
      },
      keyCode: "40",
    },
    {
      code: "ArrowRight",
      langRu: {
        shift: "⯈",
        unShift: "⯈",
      },
      langEng: {
        shift: "⯈",
        unShift: "⯈",
      },
      keyCode: "39",
    },
  ],
];

export { allKeys };

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
