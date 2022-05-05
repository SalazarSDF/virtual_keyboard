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
      key.addEventListener('click', keyAnimation);
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
/******/ 	__webpack_require__.h = function() { return "fabb112c77a6544ef07c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNzQzZmU0ZjNhNTVhMDJiY2ZhMTMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXdCO0VBQ3RCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNEOztBQUVELFNBQVNHLFdBQVQsQ0FBcUJMLE9BQXJCLEVBQThCTSxJQUE5QixFQUFvQ0MsS0FBcEMsRUFBMkM7RUFDekMsSUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtFQUNBRixJQUFJLENBQUNHLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsTUFBM0I7O0VBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0lBQzFCLElBQUlDLEdBQUcsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVY7SUFDQUcsR0FBRyxDQUFDRixZQUFKLENBQWlCLE9BQWpCLEVBQTBCLEtBQTFCOztJQUNBLEtBQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2QsT0FBTyxDQUFDWSxDQUFELENBQVAsQ0FBV0csTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7TUFDMUMsSUFBSUUsR0FBRyxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtNQUNBTSxHQUFHLENBQUNDLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCaEIsWUFBOUI7TUFDQWUsR0FBRyxDQUFDTCxZQUFKLENBQWlCLE9BQWpCLEVBQTBCLEtBQTFCO01BQ0EsSUFBSU8sR0FBRyxHQUFHVCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtNQUNBUSxHQUFHLENBQUNDLFNBQUosR0FBZ0JuQixPQUFPLENBQUNZLENBQUQsQ0FBUCxDQUFXRSxDQUFYLEVBQWNSLElBQWQsRUFBb0JDLEtBQXBCLENBQWhCO01BQ0FTLEdBQUcsQ0FBQ0ksTUFBSixDQUFXRixHQUFYO01BQ0FMLEdBQUcsQ0FBQ08sTUFBSixDQUFXSixHQUFYO0lBQ0Q7O0lBQ0RSLElBQUksQ0FBQ1ksTUFBTCxDQUFZUCxHQUFaO0VBQ0Q7O0VBQ0QsT0FBT0wsSUFBUDtBQUNELEVBRUQ7OztBQUNBLElBQUlhLFlBQVksR0FBR2hCLFdBQVcsQ0FBQ0wscURBQUQsRUFBVSxTQUFWLEVBQXFCLE9BQXJCLENBQTlCO0FBQ0EsSUFBSXNCLGNBQWMsR0FBR2pCLFdBQVcsQ0FBQ0wscURBQUQsRUFBVSxTQUFWLEVBQXFCLFNBQXJCLENBQWhDO0FBQ0EsSUFBSXVCLFdBQVcsR0FBR2xCLFdBQVcsQ0FBQ0wscURBQUQsRUFBVSxRQUFWLEVBQW9CLE9BQXBCLENBQTdCO0FBQ0EsSUFBSXdCLGFBQWEsR0FBR25CLFdBQVcsQ0FBQ0wscURBQUQsRUFBVSxRQUFWLEVBQW9CLFNBQXBCLENBQS9CO0FBRUEsSUFBSXlCLE9BQU8sR0FBRyxDQUFDSixZQUFELEVBQWVDLGNBQWYsRUFBK0JDLFdBQS9CLEVBQTRDQyxhQUE1QyxDQUFkO0FBRUFyQixPQUFPLENBQUNDLEdBQVIsQ0FBWXFCLE9BQVo7Ozs7Ozs7OztVQ2xDQSxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWxhemFyc2RmLXZpcnR1YWxfa2V5Ym9hcmQvLi9zcmMvanMvbWFrZUJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vc2FsYXphcnNkZi12aXJ0dWFsX2tleWJvYXJkL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGxLZXlzIH0gZnJvbSBcIi4vYnV0dG9uc1RlbXBsYXRlXCI7XG5cbmZ1bmN0aW9uIGtleUFuaW1hdGlvbihlKXtcbiAgY29uc29sZS5sb2coZSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VCdXR0b25zKGFsbEtleXMsIGxhbmcsIHNoaWZ0KSB7XG4gIGxldCBrZXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAga2V5cy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImtleXNcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicm93XCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsS2V5c1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBrZXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBrZXlBbmltYXRpb24pO1xuICAgICAga2V5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwia2V5XCIpO1xuICAgICAgbGV0IGtiZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJrYmRcIik7XG4gICAgICBrYmQuaW5uZXJIVE1MID0gYWxsS2V5c1tpXVtqXVtsYW5nXVtzaGlmdF07XG4gICAgICBrZXkuYXBwZW5kKGtiZCk7XG4gICAgICByb3cuYXBwZW5kKGtleSk7XG4gICAgfVxuICAgIGtleXMuYXBwZW5kKHJvdyk7XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59XG5cbi8vLy8vLy8vLy8gbWF5YmUgZXhwb3J0IHtsYW5nLi4uICwgbGFuZywgLi5ldGN9PyA/ICA/XG5sZXQgbGFuZ0VuZ1NoaWZ0ID0gbWFrZUJ1dHRvbnMoYWxsS2V5cywgXCJsYW5nRW5nXCIsIFwic2hpZnRcIik7XG5sZXQgbGFuZ0VuZ1VuU2hpZnQgPSBtYWtlQnV0dG9ucyhhbGxLZXlzLCBcImxhbmdFbmdcIiwgXCJ1blNoaWZ0XCIpO1xubGV0IGxhbmdSdVNoaWZ0ID0gbWFrZUJ1dHRvbnMoYWxsS2V5cywgXCJsYW5nUnVcIiwgXCJzaGlmdFwiKTtcbmxldCBsYW5nUnVVblNoaWZ0ID0gbWFrZUJ1dHRvbnMoYWxsS2V5cywgXCJsYW5nUnVcIiwgXCJ1blNoaWZ0XCIpO1xuXG5sZXQga2V5c0RvbSA9IFtsYW5nRW5nU2hpZnQsIGxhbmdFbmdVblNoaWZ0LCBsYW5nUnVTaGlmdCwgbGFuZ1J1VW5TaGlmdF07XG5cbmNvbnNvbGUubG9nKGtleXNEb20pO1xuZXhwb3J0IHsga2V5c0RvbSB9O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImZhYmIxMTJjNzdhNjU0NGVmMDdjXCI7IH0iXSwibmFtZXMiOlsiYWxsS2V5cyIsImtleUFuaW1hdGlvbiIsImUiLCJjb25zb2xlIiwibG9nIiwibWFrZUJ1dHRvbnMiLCJsYW5nIiwic2hpZnQiLCJrZXlzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaSIsInJvdyIsImoiLCJsZW5ndGgiLCJrZXkiLCJhZGRFdmVudExpc3RlbmVyIiwia2JkIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwibGFuZ0VuZ1NoaWZ0IiwibGFuZ0VuZ1VuU2hpZnQiLCJsYW5nUnVTaGlmdCIsImxhbmdSdVVuU2hpZnQiLCJrZXlzRG9tIl0sInNvdXJjZVJvb3QiOiIifQ==