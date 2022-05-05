const allKeys = [
  [
    {
      code: "Backquote",
      langRu: {
        unShift: "ё",
        shift: "Ё",
      },
      langEng: {
        shift: "`",
        unShift: "~",
      },
    },
    {
      code: "Digit1",
      langRu: {
        unShift: "1",
        shift: "!",
      },
      langEng: {
        shift: "1",
        unShift: "!",
      },
    },
    {
      code: "Digit2",
      langRu: {
        unShift: "2",
        shift: '"',
      },
      langEng: {
        shift: "2",
        unShift: "@",
      },
    },
    {
      code: "Digit3",
      langRu: {
        unShift: "3",
        shift: "№",
      },
      langEng: {
        shift: "3",
        unShift: "#",
      },
    },
    {
      code: "Digit4",
      langRu: {
        unShift: "4",
        shift: ";",
      },
      langEng: {
        shift: "4",
        unShift: "$",
      },
    },
    {
      code: "Digit5",
      langRu: {
        unShift: "5",
        shift: "%",
      },
      langEng: {
        shift: "5",
        unShift: "%",
      },
    },
    {
      code: "Digit6",
      langRu: {
        unShift: "6",
        shift: ":",
      },
      langEng: {
        shift: "6",
        unShift: "^",
      },
    },
    {
      code: "Digit7",
      langRu: {
        unShift: "7",
        shift: "?",
      },
      langEng: {
        shift: "7",
        unShift: "&",
      },
    },
    {
      code: "Digit8",
      langRu: {
        unShift: "8",
        shift: "*",
      },
      langEng: {
        shift: "8",
        unShift: "*",
      },
    },
    {
      code: "Digit9",
      langRu: {
        unShift: "9",
        shift: "(",
      },
      langEng: {
        shift: "9",
        unShift: "(",
      },
    },
    {
      code: "Digit0",
      langRu: {
        unShift: "0",
        shift: ")",
      },
      langEng: {
        shift: "0",
        unShift: ")",
      },
    },
    {
      code: "Minus",
      langRu: {
        unShift: "-",
        shift: "_",
      },
      langEng: {
        shift: "-",
        unShift: "_",
      },
    },
    {
      code: "Equal",
      langRu: {
        unShift: "=",
        shift: "+",
      },
      langEng: {
        shift: "=",
        unShift: "+",
      },
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
    },
  ],
  [
    {
      code: "CapsLock",
      langRu: {
        unShift: "🅰 Caps",
        shift: "🅰 Caps",
      },
      langEng: {
        unShift: "🅰 Caps",
        shift: "🅰 Caps",
      },
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
    },
    {
      code: "Enter",
      langRu: {
        shift: "Enter",
      },
      langEng: {
        shift: "Enter",
        unShift: "Enter",
      },
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
    },
  ],
];
export {allKeys};

//let bigRu = ["Control", "Alt", "Space", "Alt", "Control", "⯇", "⯆", "⯈"];
//let smallRu = ["Control", "Alt", "Space", "Alt", "Control", "⯇", "⯆", "⯈"];
//let smallEng =
//let bigEng = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|"];

///console.log(bigRu.split(" "));
///console.log(smallRu.split(" "));
//console.log(bigEng.split(" "));
//console.log(smallEng.split(" "));

//for (let i = 1; i < allKeys[1].length; i++) {
////delete allKeys[4][i]["lang"];
////delete allKeys[4][i]["width"];
////delete allKeys[4][i]["func"];

////allKeys[4][i]["langRu"] = { shift: bigRu[i], unShift: smallRu[i] };
//allKeys[1][i]["langEng"] = { shift: bigEng[i - 1], unShift: smallEng[i - 1] };
//}

//console.log(allKeys[1]);
