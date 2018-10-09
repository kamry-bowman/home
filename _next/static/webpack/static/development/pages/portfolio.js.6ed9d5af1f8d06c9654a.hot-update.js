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



var ProjectCard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.attrs({
  className: function className(props) {
    return props.className || undefined;
  }
}).withConfig({
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
  return console.log(className) || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectCard, {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "tech",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Technology"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, technology.map(function (tech, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, tech);
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/".concat(img),
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Visit")));
});

/***/ }),

/***/ "./data/projects.js":
/*!**************************!*\
  !*** ./data/projects.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: 'S & J Architecture',
  description: 'A responsive small business website',
  technology: ['HTML', 'CSS', 'Javascript'],
  url: 'https://kbowman-architecture.nelify.com',
  img: 'assets/arch-bw-300x350.gif'
}, {
  name: 'Lambda Notes',
  description: 'Note Managment System',
  technology: ['React', 'Styled Components', 'Redux', 'Express', 'Postgresql'],
  url: 'https://nervous-leakey-9c1090.netlify.com',
  img: 'assets/notes-bw-300x350.gif'
}]);

/***/ })

})
//# sourceMappingURL=portfolio.js.6ed9d5af1f8d06c9654a.hot-update.js.map