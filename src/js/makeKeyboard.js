import { keysDom } from "./makeButtons";

function makeKeyboard(keysDom) {
  let body = document.querySelector("body");
  let wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  let textareaCont = document.createElement("div");
  textareaCont.setAttribute("class", "text-area");
  let textArea = document.createElement("textarea");
  textareaCont.append(textArea);
  wrapper.append(textareaCont);
  let keys = keysDom[3];
  body.append(wrapper);
  body.append(keys);
}

//window.onload(makeKeyboard(keysDom));
document.DOMContentLoaded = makeKeyboard(keysDom);
