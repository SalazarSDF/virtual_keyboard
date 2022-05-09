import makeKeyboard from "./makeKeyboard";
function changeKeyboard(e) {
  if (e.type === "keydown") {
    if ((e.keyCode === 17 && e.altKey) || (e.keyCode === 18 && e.ctrlKey)) {
      // ctrl+ alt
      let lang = localStorage.getItem("lang");
      lang = lang === "langEng" ? "langRu" : "langEng";
      localStorage.setItem("lang", lang);
      makeKeyboard(JSON.parse(localStorage.shift), lang);
    }
    if (e.keyCode === 16) {
      // shift
      let shift = JSON.parse(localStorage.shift);
      shift = shift ? false : true;
      localStorage.setItem("shift", JSON.stringify(shift));
      makeKeyboard(JSON.parse(localStorage.shift), localStorage.lang);
    }
    if (e.keyCode === 0 || e.keyCode === 20) {
      let shift = JSON.parse(localStorage.shift);
      shift = shift ? false : true;
      localStorage.setItem("shift", JSON.stringify(shift));
      makeKeyboard(shift, localStorage.lang);
    }
  }
  if (e.type === "keyup") {
    if (e.keyCode !== 16) return;
    else if (e.keyCode === 16) {
      let shift = JSON.parse(localStorage.shift);
      shift = shift ? false : true;
      localStorage.setItem("shift", JSON.stringify(shift));
      makeKeyboard(shift, localStorage.lang);
    }
  }
}

export default changeKeyboard;
