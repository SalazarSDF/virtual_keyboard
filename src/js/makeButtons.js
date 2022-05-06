import { allKeys } from "./buttonsTemplate";

//key.addEventListener('transitionend', removeTransition));
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("clicked");
}
function makeButtons(allKeys, lang, shift) {
  let keys = document.createElement("div");
  keys.setAttribute("class", "keys");
  for (let i = 0; i < 5; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < allKeys[i].length; j++) {
      let key = document.createElement("div");
      key.setAttribute("class", "key");
      key.setAttribute("data-key", allKeys[i][j]["keyCode"]);
      key.addEventListener("transitionend", removeTransition);
      let kbd = document.createElement("kbd");
      kbd.innerHTML = allKeys[i][j][lang][shift];
      key.append(kbd);
      row.append(key);
    }
    keys.append(row);
  }
  return keys;
}

function keyAnimation(e) {
  const key = document.querySelectorAll(`div[data-key="${e.keyCode}"]`);
  if (!key) return;
  for (let i = 0; i < key.length; i++) {
    key[i].classList.toggle("clicked");
  }
}

let langEngShift = makeButtons(allKeys, "langEng", "shift");
let langEngUnShift = makeButtons(allKeys, "langEng", "unShift");
let langRuShift = makeButtons(allKeys, "langRu", "shift");
let langRuUnShift = makeButtons(allKeys, "langRu", "unShift");

//let keysDom = [langEngShift, langEngUnShift, langRuShift, langRuUnShift];

export { langEngShift, langEngUnShift, langRuShift, langRuUnShift, keyAnimation };
