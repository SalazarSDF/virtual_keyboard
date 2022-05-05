"use strict";
self["webpackHotUpdatesalazarsdf_virtual_keyboard"]("index",{

/***/ "./src/js/makeKeyboard.js":
/*!********************************!*\
  !*** ./src/js/makeKeyboard.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makeButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeButtons */ "./src/js/makeButtons.js");


function makeKeyboard(keysDom) {
  var body = document.querySelector("body");
  var wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  var textareaCont = document.createElement("div");
  textareaCont.setAttribute("class", "text-area");
  var textArea = document.createElement("textarea");
  textareaCont.append(textArea);
  wrapper.append(textareaCont);
  var keys = keysDom[3];
  body.append(wrapper);
  body.append(keys);
} //window.onload(makeKeyboard(keysDom));


document.DOMContentLoaded = makeKeyboard(_makeButtons__WEBPACK_IMPORTED_MODULE_0__.keysDom);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "769ae3777437f99db834"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMzMzYmJjYmY1MDg4NjM3NGQxZjMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNDLFlBQVQsQ0FBc0JELE9BQXRCLEVBQStCO0VBQzdCLElBQUlFLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQVg7RUFDQSxJQUFJQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixLQUF2QixDQUFkO0VBQ0FELE9BQU8sQ0FBQ0UsWUFBUixDQUFxQixPQUFyQixFQUE4QixTQUE5QjtFQUNBLElBQUlDLFlBQVksR0FBR0wsUUFBUSxDQUFDRyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0VBQ0FFLFlBQVksQ0FBQ0QsWUFBYixDQUEwQixPQUExQixFQUFtQyxXQUFuQztFQUNBLElBQUlFLFFBQVEsR0FBR04sUUFBUSxDQUFDRyxhQUFULENBQXVCLFVBQXZCLENBQWY7RUFDQUUsWUFBWSxDQUFDRSxNQUFiLENBQW9CRCxRQUFwQjtFQUNBSixPQUFPLENBQUNLLE1BQVIsQ0FBZUYsWUFBZjtFQUNBLElBQUlHLElBQUksR0FBR1gsT0FBTyxDQUFDLENBQUQsQ0FBbEI7RUFDQUUsSUFBSSxDQUFDUSxNQUFMLENBQVlMLE9BQVo7RUFDQUgsSUFBSSxDQUFDUSxNQUFMLENBQVlDLElBQVo7QUFDRCxFQUVEOzs7QUFDQVIsUUFBUSxDQUFDUyxnQkFBVCxHQUE0QlgsWUFBWSxDQUFDRCxpREFBRCxDQUF4Qzs7Ozs7Ozs7VUNqQkEscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkLy4vc3JjL2pzL21ha2VLZXlib2FyZC5qcyIsIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGtleXNEb20gfSBmcm9tIFwiLi9tYWtlQnV0dG9uc1wiO1xuXG5mdW5jdGlvbiBtYWtlS2V5Ym9hcmQoa2V5c0RvbSkge1xuICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ3cmFwcGVyXCIpO1xuICBsZXQgdGV4dGFyZWFDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGV4dGFyZWFDb250LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGV4dC1hcmVhXCIpO1xuICBsZXQgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRleHRhcmVhQ29udC5hcHBlbmQodGV4dEFyZWEpO1xuICB3cmFwcGVyLmFwcGVuZCh0ZXh0YXJlYUNvbnQpO1xuICBsZXQga2V5cyA9IGtleXNEb21bM107XG4gIGJvZHkuYXBwZW5kKHdyYXBwZXIpO1xuICBib2R5LmFwcGVuZChrZXlzKTtcbn1cblxuLy93aW5kb3cub25sb2FkKG1ha2VLZXlib2FyZChrZXlzRG9tKSk7XG5kb2N1bWVudC5ET01Db250ZW50TG9hZGVkID0gbWFrZUtleWJvYXJkKGtleXNEb20pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjc2OWFlMzc3NzQzN2Y5OWRiODM0XCI7IH0iXSwibmFtZXMiOlsia2V5c0RvbSIsIm1ha2VLZXlib2FyZCIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3cmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRleHRhcmVhQ29udCIsInRleHRBcmVhIiwiYXBwZW5kIiwia2V5cyIsIkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9