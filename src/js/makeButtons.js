import { allKeys } from "./buttonsTemplate";

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
      let kbd = document.createElement("kbd");
      kbd.innerHTML = allKeys[i][j][lang][shift];
      key.append(kbd);
      row.append(key);
    }
    keys.append(row);
  }
  return keys;
}

function keyAnimationPush(e) {
  let allKeys = [langEngShift, langEngUnShift, langRuShift, langRuUnShift];
  if (e.keyCode === 0) {
    allKeys.forEach((el) => {
      el.querySelector(`div[data-key="${e.keyCode}"]`).classList.toggle(
        "clicked"
      );
    });
  } else {
    allKeys.forEach((el) => {
      let jopa = el.querySelectorAll(`div[data-key="${e.keyCode}"]`);
      for (let i = 0; i < jopa.length; i++) {
        jopa[i].classList.add("clicked");
      }
    });
  }
}
function keyAnimationPushUp(e) {
  if (e.keyCode === 0) return;
  let allKeys = [langEngShift, langEngUnShift, langRuShift, langRuUnShift];
  allKeys.forEach((el) => {
    let jopa = el.querySelectorAll(`div[data-key="${e.keyCode}"]`);
    for (let i = 0; i < jopa.length; i++) {
      jopa[i].classList.remove("clicked");
    }
  });
}
//let arr = [];
// add DEL;
function keyAnimationClick(e) {
  let key = e.target.closest(".key");
  //  arr.push(key.dataset.key);
  //console.log(arr);
  if (!key) return;
  let keyTextCont = key.lastElementChild.textContent;
  window.dispatchEvent(
    new KeyboardEvent("keydown", {
      keyCode: key.dataset.key,
      key: keyTextCont,
    })
  );
  window.dispatchEvent(
    new KeyboardEvent("keyup", { keyCode: key.dataset.key, key: keyTextCont })
  );
}

let langEngShift = makeButtons(allKeys, "langEng", "shift");
let langEngUnShift = makeButtons(allKeys, "langEng", "unShift");
let langRuShift = makeButtons(allKeys, "langRu", "shift");
let langRuUnShift = makeButtons(allKeys, "langRu", "unShift");

export {
  langEngShift,
  langEngUnShift,
  langRuShift,
  langRuUnShift,
  keyAnimationPush,
  keyAnimationPushUp,
  keyAnimationClick,
};
