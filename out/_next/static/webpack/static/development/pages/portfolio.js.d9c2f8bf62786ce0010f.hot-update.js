webpackHotUpdate("static\\development\\pages\\portfolio.js",{

/***/ "./components/ProjectCard.js":
/*!***********************************!*\
  !*** ./components/ProjectCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _data_sizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/sizes */ "./data/sizes.js");
var _jsxFileName = "C:\\Users\\kamdu\\Documents\\web-development\\personal-projects\\homepage\\homepage\\components\\ProjectCard.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ProjectCard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "ProjectCard",
  componentId: "sc-83c9a3-0"
})(["display:flex;flex-wrap:wrap;.image-content{display:flex;flex-direction:column;align-items:center;img{border:40px solid black;border-radius:15px;@media (max-width:", "){border-width:20px;}@media (max-width:", "){border-width:2px;max-width:90%;}}a{margin-top:30px;color:black;font-size:2.2rem;&:visited{color:gray;}}}.text-content{width:360px;padding:0 20px;display:flex;@media (max-width:", "){width:100%;padding:0 2.5%;}flex-direction:column;justify-content:space-around;& > *{padding-bottom:60px;&:last-child{padding-bottom:10px;}}& >  p{text-align:center;}}.tech{h2,li{font-family:'Nova Flat','sans serif';}text-align:center;h2{margin-bottom:1rem;}li{font-size:2rem;list-style-type:none;}}&>div{padding:30px;@media (max-width:", "){padding-left:0;padding-right:0;}}"], _data_sizes__WEBPACK_IMPORTED_MODULE_2__["default"].tablet, _data_sizes__WEBPACK_IMPORTED_MODULE_2__["default"].mobile, _data_sizes__WEBPACK_IMPORTED_MODULE_2__["default"].mobile, _data_sizes__WEBPACK_IMPORTED_MODULE_2__["default"].mobile);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$project = _ref.project,
      name = _ref$project.name,
      description = _ref$project.description,
      technology = _ref$project.technology,
      url = _ref$project.url,
      img = _ref$project.img;
  var srcsetAttrib = Object.entries(img).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        width = _ref3[0],
        src = _ref3[1];

    return "/static/".concat(src, " ").concat(width, "w");
  }).join(', ');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectCard, {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "tech",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Technology"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, technology.map(function (tech, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, tech);
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    srcset: srcsetAttrib,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Visit")));
});

/***/ })

})
//# sourceMappingURL=portfolio.js.d9c2f8bf62786ce0010f.hot-update.js.map