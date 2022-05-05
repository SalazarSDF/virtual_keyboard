"use strict";
self["webpackHotUpdatesalazarsdf_virtual_keyboard"]("index",{

/***/ "./src/js/makeButtons.js":
/*!*******************************!*\
  !*** ./src/js/makeButtons.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keysDom": function() { return /* binding */ keysDom; }
/* harmony export */ });
/* harmony import */ var _buttonsTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonsTemplate */ "./src/js/buttonsTemplate.js");


function keyAnimation(e) {
  console.log(e);
}

function makeButtons(allKeys, lang, shift) {
  var keys = document.createElement("div");
  keys.setAttribute("class", "keys");

  for (var i = 0; i < 5; i++) {
    var row = document.createElement("div");
    row.setAttribute("class", "row");

    for (var j = 0; j < allKeys[i].length; j++) {
      var key = document.createElement("div");
      key.setAttribute("class", "key");
      var kbd = document.createElement("kbd");
      kbd.innerHTML = allKeys[i][j][lang][shift];
      key.append(kbd);
      row.append(key);
    }

    keys.append(row);
  }

  return keys;
} ////////// maybe export {lang... , lang, ..etc}? ?  ?


var langEngShift = makeButtons(_buttonsTemplate__WEBPACK_IMPORTED_MODULE_0__.allKeys, "langEng", "shift");
var langEngUnShift = makeButtons(_buttonsTemplate__WEBPACK_IMPORTED_MODULE_0__.allKeys, "langEng", "unShift");
var langRuShift = makeButtons(_buttonsTemplate__WEBPACK_IMPORTED_MODULE_0__.allKeys, "langRu", "shift");
var langRuUnShift = makeButtons(_buttonsTemplate__WEBPACK_IMPORTED_MODULE_0__.allKeys, "langRu", "unShift");
var keysDom = [langEngShift, langEngUnShift, langRuShift, langRuUnShift];
console.log(keysDom);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "743fe4f3a55a02bcfa13"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNzY5YWUzNzc3NDM3Zjk5ZGI4MzQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXdCO0VBQ3RCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNEOztBQUVELFNBQVNHLFdBQVQsQ0FBcUJMLE9BQXJCLEVBQThCTSxJQUE5QixFQUFvQ0MsS0FBcEMsRUFBMkM7RUFDekMsSUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtFQUNBRixJQUFJLENBQUNHLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsTUFBM0I7O0VBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0lBQzFCLElBQUlDLEdBQUcsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVY7SUFDQUcsR0FBRyxDQUFDRixZQUFKLENBQWlCLE9BQWpCLEVBQTBCLEtBQTFCOztJQUNBLEtBQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2QsT0FBTyxDQUFDWSxDQUFELENBQVAsQ0FBV0csTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7TUFDMUMsSUFBSUUsR0FBRyxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtNQUVBTSxHQUFHLENBQUNMLFlBQUosQ0FBaUIsT0FBakIsRUFBMEIsS0FBMUI7TUFDQSxJQUFJTSxHQUFHLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFWO01BQ0FPLEdBQUcsQ0FBQ0MsU0FBSixHQUFnQmxCLE9BQU8sQ0FBQ1ksQ0FBRCxDQUFQLENBQVdFLENBQVgsRUFBY1IsSUFBZCxFQUFvQkMsS0FBcEIsQ0FBaEI7TUFDQVMsR0FBRyxDQUFDRyxNQUFKLENBQVdGLEdBQVg7TUFDQUosR0FBRyxDQUFDTSxNQUFKLENBQVdILEdBQVg7SUFDRDs7SUFDRFIsSUFBSSxDQUFDVyxNQUFMLENBQVlOLEdBQVo7RUFDRDs7RUFDRCxPQUFPTCxJQUFQO0FBQ0QsRUFFRDs7O0FBQ0EsSUFBSVksWUFBWSxHQUFHZixXQUFXLENBQUNMLHFEQUFELEVBQVUsU0FBVixFQUFxQixPQUFyQixDQUE5QjtBQUNBLElBQUlxQixjQUFjLEdBQUdoQixXQUFXLENBQUNMLHFEQUFELEVBQVUsU0FBVixFQUFxQixTQUFyQixDQUFoQztBQUNBLElBQUlzQixXQUFXLEdBQUdqQixXQUFXLENBQUNMLHFEQUFELEVBQVUsUUFBVixFQUFvQixPQUFwQixDQUE3QjtBQUNBLElBQUl1QixhQUFhLEdBQUdsQixXQUFXLENBQUNMLHFEQUFELEVBQVUsUUFBVixFQUFvQixTQUFwQixDQUEvQjtBQUVBLElBQUl3QixPQUFPLEdBQUcsQ0FBQ0osWUFBRCxFQUFlQyxjQUFmLEVBQStCQyxXQUEvQixFQUE0Q0MsYUFBNUMsQ0FBZDtBQUVBcEIsT0FBTyxDQUFDQyxHQUFSLENBQVlvQixPQUFaOzs7Ozs7Ozs7VUNsQ0EscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkLy4vc3JjL2pzL21ha2VCdXR0b25zLmpzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsS2V5cyB9IGZyb20gXCIuL2J1dHRvbnNUZW1wbGF0ZVwiO1xuXG5mdW5jdGlvbiBrZXlBbmltYXRpb24oZSl7XG4gIGNvbnNvbGUubG9nKGUpO1xufVxuXG5mdW5jdGlvbiBtYWtlQnV0dG9ucyhhbGxLZXlzLCBsYW5nLCBzaGlmdCkge1xuICBsZXQga2V5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGtleXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJrZXlzXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJvd1wiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbEtleXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBrZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBrZXkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJrZXlcIik7XG4gICAgICBsZXQga2JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImtiZFwiKTtcbiAgICAgIGtiZC5pbm5lckhUTUwgPSBhbGxLZXlzW2ldW2pdW2xhbmddW3NoaWZ0XTtcbiAgICAgIGtleS5hcHBlbmQoa2JkKTtcbiAgICAgIHJvdy5hcHBlbmQoa2V5KTtcbiAgICB9XG4gICAga2V5cy5hcHBlbmQocm93KTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn1cblxuLy8vLy8vLy8vLyBtYXliZSBleHBvcnQge2xhbmcuLi4gLCBsYW5nLCAuLmV0Y30/ID8gID9cbmxldCBsYW5nRW5nU2hpZnQgPSBtYWtlQnV0dG9ucyhhbGxLZXlzLCBcImxhbmdFbmdcIiwgXCJzaGlmdFwiKTtcbmxldCBsYW5nRW5nVW5TaGlmdCA9IG1ha2VCdXR0b25zKGFsbEtleXMsIFwibGFuZ0VuZ1wiLCBcInVuU2hpZnRcIik7XG5sZXQgbGFuZ1J1U2hpZnQgPSBtYWtlQnV0dG9ucyhhbGxLZXlzLCBcImxhbmdSdVwiLCBcInNoaWZ0XCIpO1xubGV0IGxhbmdSdVVuU2hpZnQgPSBtYWtlQnV0dG9ucyhhbGxLZXlzLCBcImxhbmdSdVwiLCBcInVuU2hpZnRcIik7XG5cbmxldCBrZXlzRG9tID0gW2xhbmdFbmdTaGlmdCwgbGFuZ0VuZ1VuU2hpZnQsIGxhbmdSdVNoaWZ0LCBsYW5nUnVVblNoaWZ0XTtcblxuY29uc29sZS5sb2coa2V5c0RvbSk7XG5leHBvcnQgeyBrZXlzRG9tIH07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNzQzZmU0ZjNhNTVhMDJiY2ZhMTNcIjsgfSJdLCJuYW1lcyI6WyJhbGxLZXlzIiwia2V5QW5pbWF0aW9uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJtYWtlQnV0dG9ucyIsImxhbmciLCJzaGlmdCIsImtleXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpIiwicm93IiwiaiIsImxlbmd0aCIsImtleSIsImtiZCIsImlubmVySFRNTCIsImFwcGVuZCIsImxhbmdFbmdTaGlmdCIsImxhbmdFbmdVblNoaWZ0IiwibGFuZ1J1U2hpZnQiLCJsYW5nUnVVblNoaWZ0Iiwia2V5c0RvbSJdLCJzb3VyY2VSb290IjoiIn0=