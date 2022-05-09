"use strict";
self["webpackHotUpdatesalazarsdf_virtual_keyboard"]("index",{

/***/ "./src/js/brainCenter.js":
/*!*******************************!*\
  !*** ./src/js/brainCenter.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _makeDiscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeDiscription */ "./src/js/makeDiscription.js");
/* harmony import */ var _makeTextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeTextArea */ "./src/js/makeTextArea.js");
/* harmony import */ var _makeKeyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./makeKeyboard */ "./src/js/makeKeyboard.js");
/* harmony import */ var _makeButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeButtons */ "./src/js/makeButtons.js");
/* harmony import */ var _changeKeyBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changeKeyBoard */ "./src/js/changeKeyBoard.js");







function init() {
  (0,_makeDiscription__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_makeTextArea__WEBPACK_IMPORTED_MODULE_2__.makeTextArea)();

  var _storage = storage(),
      _storage2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_storage, 2),
      shift = _storage2[0],
      lang = _storage2[1];

  (0,_makeKeyboard__WEBPACK_IMPORTED_MODULE_3__["default"])(shift, lang);
}

function storage(shift, lang) {
  shift = JSON.parse(localStorage.getItem("shift")) || false;

  if (shift) {
    // color for shift after update;
    //window.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 0 }));
    keyPush(new KeyboardEvent("keydown", {
      keyCode: 0
    }));
  }

  lang = localStorage.getItem("lang") || "langEng";
  localStorage.setItem("shift", JSON.stringify(shift));
  localStorage.setItem("lang", lang);
  return [shift, lang];
}

function keyPush(e) {
  e.preventDefault();
  (0,_makeTextArea__WEBPACK_IMPORTED_MODULE_2__.textAreaBrain)(e);
  (0,_changeKeyBoard__WEBPACK_IMPORTED_MODULE_5__["default"])(e);
  (0,_makeButtons__WEBPACK_IMPORTED_MODULE_4__.keyAnimationPush)(e);
}

function keyPushUp(e) {
  (0,_changeKeyBoard__WEBPACK_IMPORTED_MODULE_5__["default"])(e);
  (0,_makeButtons__WEBPACK_IMPORTED_MODULE_4__.keyAnimationPushUp)(e);
}

window.addEventListener("keydown", keyPush);
window.addEventListener("keyup", keyPushUp);
window.addEventListener("click", _makeButtons__WEBPACK_IMPORTED_MODULE_4__.keyAnimationClick);
window.onload = init();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "5070f6611871688e762f"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNDI1OTI3MjQzYzFmNjliM2E2MTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBRUEsU0FBU1EsSUFBVCxHQUFnQjtFQUNkUiw0REFBZTtFQUNmQywyREFBWTs7RUFDWixlQUFvQlEsT0FBTyxFQUEzQjtFQUFBO0VBQUEsSUFBS0MsS0FBTDtFQUFBLElBQVlDLElBQVo7O0VBQ0FSLHlEQUFZLENBQUNPLEtBQUQsRUFBUUMsSUFBUixDQUFaO0FBQ0Q7O0FBRUQsU0FBU0YsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0JDLElBQXhCLEVBQThCO0VBQzVCRCxLQUFLLEdBQUdFLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBWCxLQUE2QyxLQUFyRDs7RUFDQSxJQUFJTCxLQUFKLEVBQVc7SUFDVDtJQUNBO0lBQ0FNLE9BQU8sQ0FBQyxJQUFJQyxhQUFKLENBQWtCLFNBQWxCLEVBQTZCO01BQUVDLE9BQU8sRUFBRTtJQUFYLENBQTdCLENBQUQsQ0FBUDtFQUNEOztFQUNEUCxJQUFJLEdBQUdHLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixLQUFnQyxTQUF2QztFQUNBRCxZQUFZLENBQUNLLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJQLElBQUksQ0FBQ1EsU0FBTCxDQUFlVixLQUFmLENBQTlCO0VBQ0FJLFlBQVksQ0FBQ0ssT0FBYixDQUFxQixNQUFyQixFQUE2QlIsSUFBN0I7RUFDQSxPQUFPLENBQUNELEtBQUQsRUFBUUMsSUFBUixDQUFQO0FBQ0Q7O0FBRUQsU0FBU0ssT0FBVCxDQUFpQkssQ0FBakIsRUFBb0I7RUFDbEJBLENBQUMsQ0FBQ0MsY0FBRjtFQUNBcEIsNERBQWEsQ0FBQ21CLENBQUQsQ0FBYjtFQUNBZCwyREFBYyxDQUFDYyxDQUFELENBQWQ7RUFDQWhCLDhEQUFnQixDQUFDZ0IsQ0FBRCxDQUFoQjtBQUNEOztBQUNELFNBQVNFLFNBQVQsQ0FBbUJGLENBQW5CLEVBQXNCO0VBQ3BCZCwyREFBYyxDQUFDYyxDQUFELENBQWQ7RUFDQWYsZ0VBQWtCLENBQUNlLENBQUQsQ0FBbEI7QUFDRDs7QUFFREcsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQ1QsT0FBbkM7QUFDQVEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0YsU0FBakM7QUFDQUMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ3JCLDJEQUFqQztBQUNBb0IsTUFBTSxDQUFDRSxNQUFQLEdBQWdCbEIsSUFBSSxFQUFwQjs7Ozs7Ozs7VUM1Q0EscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkLy4vc3JjL2pzL2JyYWluQ2VudGVyLmpzIiwid2VicGFjazovL3NhbGF6YXJzZGYtdmlydHVhbF9rZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1ha2VEZXNjcmlwdGlvbiBmcm9tIFwiLi9tYWtlRGlzY3JpcHRpb25cIjtcbmltcG9ydCB7IG1ha2VUZXh0QXJlYSwgdGV4dEFyZWFCcmFpbiB9IGZyb20gXCIuL21ha2VUZXh0QXJlYVwiO1xuaW1wb3J0IG1ha2VLZXlib2FyZCBmcm9tIFwiLi9tYWtlS2V5Ym9hcmRcIjtcbmltcG9ydCB7XG4gIGtleUFuaW1hdGlvbkNsaWNrLFxuICBrZXlBbmltYXRpb25QdXNoLFxuICBrZXlBbmltYXRpb25QdXNoVXAsXG59IGZyb20gXCIuL21ha2VCdXR0b25zXCI7XG5pbXBvcnQgY2hhbmdlS2V5Ym9hcmQgZnJvbSBcIi4vY2hhbmdlS2V5Qm9hcmRcIjtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgbWFrZURlc2NyaXB0aW9uKCk7XG4gIG1ha2VUZXh0QXJlYSgpO1xuICBsZXQgW3NoaWZ0LCBsYW5nXSA9IHN0b3JhZ2UoKTtcbiAgbWFrZUtleWJvYXJkKHNoaWZ0LCBsYW5nKTtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZShzaGlmdCwgbGFuZykge1xuICBzaGlmdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaGlmdFwiKSkgfHwgZmFsc2U7XG4gIGlmIChzaGlmdCkge1xuICAgIC8vIGNvbG9yIGZvciBzaGlmdCBhZnRlciB1cGRhdGU7XG4gICAgLy93aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIiwgeyBrZXlDb2RlOiAwIH0pKTtcbiAgICBrZXlQdXNoKG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLCB7IGtleUNvZGU6IDAgfSkpO1xuICB9XG4gIGxhbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhbmdcIikgfHwgXCJsYW5nRW5nXCI7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2hpZnRcIiwgSlNPTi5zdHJpbmdpZnkoc2hpZnQpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYW5nXCIsIGxhbmcpO1xuICByZXR1cm4gW3NoaWZ0LCBsYW5nXTtcbn1cblxuZnVuY3Rpb24ga2V5UHVzaChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdGV4dEFyZWFCcmFpbihlKTtcbiAgY2hhbmdlS2V5Ym9hcmQoZSk7XG4gIGtleUFuaW1hdGlvblB1c2goZSk7XG59XG5mdW5jdGlvbiBrZXlQdXNoVXAoZSkge1xuICBjaGFuZ2VLZXlib2FyZChlKTtcbiAga2V5QW5pbWF0aW9uUHVzaFVwKGUpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5UHVzaCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVB1c2hVcCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGtleUFuaW1hdGlvbkNsaWNrKTtcbndpbmRvdy5vbmxvYWQgPSBpbml0KCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNTA3MGY2NjExODcxNjg4ZTc2MmZcIjsgfSJdLCJuYW1lcyI6WyJtYWtlRGVzY3JpcHRpb24iLCJtYWtlVGV4dEFyZWEiLCJ0ZXh0QXJlYUJyYWluIiwibWFrZUtleWJvYXJkIiwia2V5QW5pbWF0aW9uQ2xpY2siLCJrZXlBbmltYXRpb25QdXNoIiwia2V5QW5pbWF0aW9uUHVzaFVwIiwiY2hhbmdlS2V5Ym9hcmQiLCJpbml0Iiwic3RvcmFnZSIsInNoaWZ0IiwibGFuZyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJrZXlQdXNoIiwiS2V5Ym9hcmRFdmVudCIsImtleUNvZGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZSIsInByZXZlbnREZWZhdWx0Iiwia2V5UHVzaFVwIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ubG9hZCJdLCJzb3VyY2VSb290IjoiIn0=