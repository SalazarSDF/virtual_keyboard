import { allKeys } from "./buttonsTemplate";

function keyAnimation(e){
  console.log(e);
}

function makeButtons(allKeys, lang, shift) {
  let keys = document.createElement("div");
  keys.setAttribute("class", "keys");
  for (let i = 0; i < 5; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < allKeys[i].length; j++) {
      let key = document.createElement("div");
      key.addEventListener('click', keyAnimation);
      key.setAttribute("class", "key");
      let kbd = document.createElement("kbd");
      kbd.innerHTML = allKeys[i][j][lang][shift];
      key.append(kbd);
      row.append(key);
    }
    keys.append(row);
  }
  return keys;
}

////////// maybe export {lang... , lang, ..etc}? ?  ?
let langEngShift = makeButtons(allKeys, "langEng", "shift");
let langEngUnShift = makeButtons(allKeys, "langEng", "unShift");
let langRuShift = makeButtons(allKeys, "langRu", "shift");
let langRuUnShift = makeButtons(allKeys, "langRu", "unShift");

let keysDom = [langEngShift, langEngUnShift, langRuShift, langRuUnShift];

console.log(keysDom);
export { keysDom };
