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
  const textarea = document.querySelector("textarea");
  textarea.focus();
  if (e.keyCode == 9) {
    e.preventDefault();
    textarea.value += "    ";
  }
}
export {makeTextArea, textAreaBrain};
