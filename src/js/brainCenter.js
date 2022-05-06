import { makeTextArea, textAreaBrain } from "./makeTextArea";
import makeKeyboard from "./makeKeyboard";
import { keyAnimation } from "./makeButtons";

function init() {
  let shift = false;
  let lang = "langEng";
  makeTextArea();
  makeKeyboard(shift, lang);
}

function keyPush(e) {
  keyAnimation(e);
  textAreaBrain(e);
}

window.addEventListener("keydown", keyPush);
window.onload = init();
//window.onload = makeTextArea();
//document.DOMContentLoaded = init();
