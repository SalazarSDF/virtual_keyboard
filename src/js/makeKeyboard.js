import {
  langEngShift,
  langEngUnShift,
  langRuShift,
  langRuUnShift,
} from "./makeButtons";

function makeKeyboard(shift = false, lang = "langEng") {
  let keys = document.querySelector('.keys');
  if(keys) keys.remove();
  let body = document.querySelector("body");
  if (!shift && lang === "langEng") {
    body.append(langEngUnShift);
  } else if (shift && lang === "langEng") {
    body.append(langEngShift);
  } else if (!shift && lang === "langRu") {
    body.append(langRuUnShift);
  } else if (shift && lang === "langRu") {
    body.append(langRuShift);
  }
}

export default makeKeyboard;
