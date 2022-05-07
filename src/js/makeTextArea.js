let codesArr = [
  192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 173, 61, 81, 87, 69, 82, 84, 89,
  85, 73, 79, 80, 219, 221, 220, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 222,
  90, 88, 67, 86, 66, 78, 77, 188, 190, 191,
];

function makeTextArea() {
  let body = document.querySelector("body");
  let wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  let textareaCont = document.createElement("div");
  textareaCont.setAttribute("class", "text-area");
  let textArea = document.createElement("textarea");
  textareaCont.append(textArea);
  wrapper.append(textareaCont);
  body.append(wrapper);
}

function textAreaBrain(e) {
  const body = document.querySelector("body");
  const textarea = document.querySelector("textarea");
  textarea.focus();

  if (e.target === body || e.target === textarea) {
    //add from push
    if (codesArr.includes(e.keyCode)) {
      let findKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
      textarea.value += findKey.lastElementChild.textContent;
    }
  } else if (codesArr.includes(e.keyCode)) {
    // add from click
    textarea.value += e.key;
  }
  if (e.keyCode == 9) {
    //tab
    e.preventDefault();
    textarea.value += "    ";
  }
  // Arrows
  if (e.keyCode == 37) {
    //left
    textarea.selectionStart--;
    textarea.selectionEnd--;
  }
  if (e.keyCode == 39) {
    //right
    textarea.selectionStart++;
  }
  if (e.keyCode == 38) {
    // up
    textarea.selectionStart = 0;
    textarea.selectionEnd = 0;
  }
  if (e.keyCode == 40) {
    //down
    textarea.selectionStart = textarea.textLength;
    textarea.selectionEnd = textarea.textLength;
  }
  if (e.keyCode == 8) {
    textarea.value =
      textarea.value.slice(0, textarea.selectionStart - 1) +
      textarea.value.slice(textarea.selectionEnd);
  }
  if (e.keyCode == 32) {
    textarea.value += " ";
  }
  console.log(e.keyCode);
}
export { makeTextArea, textAreaBrain };
