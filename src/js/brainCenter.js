import { makeTextArea, textAreaBrain } from "./makeTextArea";
import makeKeyboard from "./makeKeyboard";
import { keyAnimationClick, keyAnimationPush, keyAnimationPushUp } from "./makeButtons";
import changeKeyboard from "./changeKeyBoard";

function init() {
  makeTextArea();
  let [shift, lang] = storage();
  makeKeyboard(shift, lang);
}

function storage(shift, lang) {
  shift = JSON.parse(localStorage.getItem('shift')) || false;
  if(shift){
    // color for shift after update;
    window.dispatchEvent(new KeyboardEvent('keydown', {'keyCode': 0}));
  }
  lang = localStorage.getItem('lang') || "langEng";
  localStorage.setItem("shift", JSON.stringify(shift));
  localStorage.setItem("lang", lang);
  return [shift, lang];
}

function keyPush(e) {
  e.preventDefault();
  textAreaBrain(e);
  changeKeyboard(e);
  keyAnimationPush(e);
}
function keyPushUp(e) {
  changeKeyboard(e);
  keyAnimationPushUp(e);
}

window.addEventListener("keydown", keyPush);
window.addEventListener("keyup", keyPushUp);
window.addEventListener('click', keyAnimationClick);
window.onload = init();
