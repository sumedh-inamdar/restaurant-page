/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/background2.jpg */ "./src/assets/images/background2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Amita:wght@400;700&family=Sorts+Mill+Goudy&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    color: #eae2b7;\n    font-family: 'Amita', cursive;\n    background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\nbody, \nheader, \n.container,\n#content {\n    display: flex;\n    align-items: center;\n}\n.text {\n    font-size: 22px;\n    white-space: pre-line;\n}\nbody {\n    flex-direction: column;\n    position: relative;\n    height: 100vh;\n    margin: 0px;\n}\n\nheader {\n    flex: 0 0 150px;\n    flex-direction: row;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.2);\n}\n.title {\n    text-align: center;\n    font-weight: 700;\n    font-size: 3em;\n    width: 100%;\n    height: min-content;\n    padding: 0px 50px;\n    color: #eae2b7;\n}\n\n.navBar {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    height: min-content;\n    padding: 20px 0px;\n    padding-right: 10px;\n    justify-content:right;\n}\n\n.tab {\n    font-size: 32px;\n    padding: 5px 10px;\n    margin: 0px 10px;\n    cursor: pointer;\n}\n.tab:hover {\n    color: hsl(51, 55%, 99%);\n    transition: color 0.5s;\n}\n\n#content {\n    flex: 1 0 auto;\n    justify-content: center;\n    flex-direction: column;\n    max-width: 1000px;\n}\n\n.container {\n    flex-direction: column;\n    width: 85%;\n    min-width: 760px;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.4);\n    padding: 10px 30px;               \n}\n.menuHeading {\n    width: 100%;\n    text-align: left;\n}\nhr {\n    color: white;\n}\n\n.menuContainerRow {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(60px, 1fr));\n    grid-gap: 10px;\n}\n\n.menuItem {\n    background-color: rgba(202, 103, 2, 0.8);\n    border-radius: 15px;\n    /* border: 1px solid white; */\n    padding: 15px 25px 0px;\n}\n.foodPic {\n    /* border: 1px solid white; */\n    border-radius: 15px;\n}\n\n.contactSection {\n}\nfooter {\n    flex: 0 0 2rem;\n    font-family: inherit;\n    font-weight: 400;\n    font-size: 18px;\n    text-align: center;\n    width: 98%;\n    min-width: 300px;\n}\n  \nfooter input {\n    display: inline;\n    height: 20px;\n    transition: transform 1s;\n}\n  \nfooter input:hover {\n    transform: scale(3) translate(0, -5px);\n}\n\n@media screen and (max-width: 504px) {\n    .container {\n        min-width:unset;\n    }\n    header {\n        flex-direction: column;\n        height: min-content;\n    }\n    .navBar {\n        justify-content: center;\n    }\n\n    .title {\n        font-size: 2.2em;\n        padding: 0px 20px;\n    }\n    .menuContainerRow {\n        grid-template-columns: 1fr;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,cAAc;IACd,6BAA6B;IAC7B,gFAA+E;IAC/E,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;AAC1B;AACA;;;;IAII,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,qBAAqB;AACzB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,WAAW;AACf;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,oCAAoC;AACxC;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,wBAAwB;IACxB,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,uBAAuB;IACvB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,gBAAgB;IAChB,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mDAAmD;IACnD,cAAc;AAClB;;AAEA;IACI,wCAAwC;IACxC,mBAAmB;IACnB,6BAA6B;IAC7B,sBAAsB;AAC1B;AACA;IACI,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;AACA;AACA;IACI,cAAc;IACd,oBAAoB;IACpB,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI;QACI,eAAe;IACnB;IACA;QACI,sBAAsB;QACtB,mBAAmB;IACvB;IACA;QACI,uBAAuB;IAC3B;;IAEA;QACI,gBAAgB;QAChB,iBAAiB;IACrB;IACA;QACI,0BAA0B;IAC9B;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Amita:wght@400;700&family=Sorts+Mill+Goudy&display=swap');\n\nhtml {\n    color: #eae2b7;\n    font-family: 'Amita', cursive;\n    background:url('./assets/images/background2.jpg') no-repeat center center fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\nbody, \nheader, \n.container,\n#content {\n    display: flex;\n    align-items: center;\n}\n.text {\n    font-size: 22px;\n    white-space: pre-line;\n}\nbody {\n    flex-direction: column;\n    position: relative;\n    height: 100vh;\n    margin: 0px;\n}\n\nheader {\n    flex: 0 0 150px;\n    flex-direction: row;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.2);\n}\n.title {\n    text-align: center;\n    font-weight: 700;\n    font-size: 3em;\n    width: 100%;\n    height: min-content;\n    padding: 0px 50px;\n    color: #eae2b7;\n}\n\n.navBar {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    height: min-content;\n    padding: 20px 0px;\n    padding-right: 10px;\n    justify-content:right;\n}\n\n.tab {\n    font-size: 32px;\n    padding: 5px 10px;\n    margin: 0px 10px;\n    cursor: pointer;\n}\n.tab:hover {\n    color: hsl(51, 55%, 99%);\n    transition: color 0.5s;\n}\n\n#content {\n    flex: 1 0 auto;\n    justify-content: center;\n    flex-direction: column;\n    max-width: 1000px;\n}\n\n.container {\n    flex-direction: column;\n    width: 85%;\n    min-width: 760px;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.4);\n    padding: 10px 30px;               \n}\n.menuHeading {\n    width: 100%;\n    text-align: left;\n}\nhr {\n    color: white;\n}\n\n.menuContainerRow {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(60px, 1fr));\n    grid-gap: 10px;\n}\n\n.menuItem {\n    background-color: rgba(202, 103, 2, 0.8);\n    border-radius: 15px;\n    /* border: 1px solid white; */\n    padding: 15px 25px 0px;\n}\n.foodPic {\n    /* border: 1px solid white; */\n    border-radius: 15px;\n}\n\n.contactSection {\n}\nfooter {\n    flex: 0 0 2rem;\n    font-family: inherit;\n    font-weight: 400;\n    font-size: 18px;\n    text-align: center;\n    width: 98%;\n    min-width: 300px;\n}\n  \nfooter input {\n    display: inline;\n    height: 20px;\n    transition: transform 1s;\n}\n  \nfooter input:hover {\n    transform: scale(3) translate(0, -5px);\n}\n\n@media screen and (max-width: 504px) {\n    .container {\n        min-width:unset;\n    }\n    header {\n        flex-direction: column;\n        height: min-content;\n    }\n    .navBar {\n        justify-content: center;\n    }\n\n    .title {\n        font-size: 2.2em;\n        padding: 0px 20px;\n    }\n    .menuContainerRow {\n        grid-template-columns: 1fr;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeContent": () => (/* binding */ homeContent),
/* harmony export */   "menuContent": () => (/* binding */ menuContent),
/* harmony export */   "contactContent": () => (/* binding */ contactContent)
/* harmony export */ });
/* harmony import */ var _assets_images_ksr_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/ksr.jpg */ "./src/assets/images/ksr.jpg");
/* harmony import */ var _assets_images_pfctp_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/pfctp.jpeg */ "./src/assets/images/pfctp.jpeg");
/* harmony import */ var _assets_images_cc_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/cc.jpeg */ "./src/assets/images/cc.jpeg");
/* harmony import */ var _assets_images_cm_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/cm.jpeg */ "./src/assets/images/cm.jpeg");
/* harmony import */ var _assets_images_icc_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/icc.jpeg */ "./src/assets/images/icc.jpeg");
/* harmony import */ var _assets_images_nzl_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/nzl.jpeg */ "./src/assets/images/nzl.jpeg");
/* harmony import */ var _assets_images_vm_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/vm.jpeg */ "./src/assets/images/vm.jpeg");
/* harmony import */ var _assets_images_pfsgt_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/pfsgt.jpeg */ "./src/assets/images/pfsgt.jpeg");
/* harmony import */ var _assets_images_hfn_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/hfn.jpeg */ "./src/assets/images/hfn.jpeg");
/* harmony import */ var _assets_images_fic_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/fic.jpeg */ "./src/assets/images/fic.jpeg");
/* harmony import */ var _assets_images_bbm_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/bbm.jpeg */ "./src/assets/images/bbm.jpeg");
/* harmony import */ var _assets_images_rtm_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/images/rtm.jpeg */ "./src/assets/images/rtm.jpeg");
/* harmony import */ var _assets_images_loc_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/images/loc.jpeg */ "./src/assets/images/loc.jpeg");














const homeContent = [ {
    'el': 'p',
    'text': 'Manchurian Delight balances traditional Indo-chinese cuisine with a contemporary atmosphere. A local legacy for nearly 35 years, our menu is prepared fresh daily from ingredients selected with an eye towards sustainability and a focus on local purveyors. A curated collection of contemporary Indian and Chinese art sets the stage for an experience rooted in tradition and delivered with a fresh approach.',
    'class': 'text'
    }
];

const menuContent = {
    'Appetizers': '',
    'Mains': '',
    'Desserts': '',
    'Cocktails': ''
};
menuContent.Appetizers = [ 
    {
        'el': 'h1',
        'text':'Appetizers',
        'class': 'menuHeading'
    },
    {
        'el': 'hr'
    },
    {
        'name': 'Keema Spring Rolls',
        'description': 'delicious crispy rolls stuffed with slow cooked keema (ground lamb)',
        'price': '$6 (4 rolls)',
        'class': 'menuItem',
        'pic': _assets_images_ksr_jpg__WEBPACK_IMPORTED_MODULE_0__
    },
    {
        'name': 'Pan Fried Chili Tofu/Paneer',
        'description': 'tofu/Paneer, scallion, red &green pepper, chili paste',
        'price': '$11',
        'class': 'menuItem',
        'pic': _assets_images_pfctp_jpeg__WEBPACK_IMPORTED_MODULE_1__
    },
    {
        'name': 'Dry Chili Chicken',
        'description': 'chicken, onions, scallions, celery, ginger, garlic, thai chilli',
        'price': '$13',
        'class': 'menuItem',
        'pic': _assets_images_cc_jpeg__WEBPACK_IMPORTED_MODULE_2__
    },
    {
        'name': 'Dry Cauliflower Manchurian',
        'description': 'cilantro, onions, scallion, soy sauce, ginger, garlic',
        'price': '$11',
        'class': 'menuItem',
        'pic': _assets_images_cm_jpeg__WEBPACK_IMPORTED_MODULE_3__
    }
];
menuContent.Mains = [
    {
        'el': 'h1',
        'text':'Mains',
        'class': 'menuHeading'
    },
    {
        'el': 'hr'
    },
    {
        'name': 'Hot Garlic New Zealand Lamb',
        'description': 'onions, green pepper, garlic',
        'price': '$21',
        'class': 'menuItem',
        'pic': _assets_images_nzl_jpeg__WEBPACK_IMPORTED_MODULE_5__
    },
    {
        'name': 'Indo Chinese Chicken',
        'description': 'sliced chicken, mushroom, in black bean sauce ',
        'price': '$19',
        'class': 'menuItem',
        'pic': _assets_images_icc_jpeg__WEBPACK_IMPORTED_MODULE_4__
    },
    {
        'name': 'Vegetable Manchurian',
        'description': 'air fried mixed vegetable balls smothered with spicy indo-chinese gravy',
        'price': '$17',
        'class': 'menuItem',
        'pic': _assets_images_vm_jpeg__WEBPACK_IMPORTED_MODULE_6__
    },
    {
        'name': 'Pan Fried Sesame Garlic Tofu',
        'description': 'crispy pan-fried sesame garlic tofu garnished with shallots',
        'price': '$16',
        'class': 'menuItem',
        'pic': _assets_images_pfsgt_jpeg__WEBPACK_IMPORTED_MODULE_7__
    }
];
menuContent.Desserts = [
    {
        'el': 'h1',
        'text':'Desserts',
        'class': 'menuHeading'
    },
    {
        'el': 'hr'
    },
    {
        'name': 'Honey Fried Noodles',
        'description': 'crispy noodles, tossed with sugar and honey, served with vanilla ice cream',
        'price': '$9',
        'class': 'menuItem',
        'pic': _assets_images_hfn_jpeg__WEBPACK_IMPORTED_MODULE_8__
    },
    {
        'name': 'Fried Ice Cream',
        'description': 'vanilla ice cream battered and fried to perfection ',
        'price': '$9',
        'class': 'menuItem',
        'pic': _assets_images_fic_jpeg__WEBPACK_IMPORTED_MODULE_9__
    }
];
menuContent.Cocktails = [
    {
        'el': 'h1',
        'text':'Cocktails',
        'class': 'menuHeading'
    },
    {
        'el': 'hr'
    },
    {
        'name': 'Blazing Buddha Margarita',
        'description': 'chili flake and sugared rim, tequila sake, lime juice, simple syrup and splash of orange juice',
        'price': '$11',
        'class': 'menuItem',
        'pic': _assets_images_bbm_jpeg__WEBPACK_IMPORTED_MODULE_10__
    },
    {
        'name': 'Red Tara Mojito',
        'description': 'rum sake, strawberry puree, muddled lime and mint, fresh lime juice and soda',
        'price': '$10',
        'class': 'menuItem',
        'pic': _assets_images_rtm_jpeg__WEBPACK_IMPORTED_MODULE_11__
    }
];

const contactContent = {
    'Location': '',
    'Hours': '',
    'Phone Number': '',
    'Email': '',
    'pic': _assets_images_loc_jpeg__WEBPACK_IMPORTED_MODULE_12__
}
contactContent.Location = [
    {
        'el': 'h2',
        'text': 'Location',
        'class': 'menuHeading'
    },
    {
        'el': 'hr'
    },
    {
        'el': 'p',
        'text': '1234 Sunset Blvd, San Francisco, CA',
        'class': 'text'
    },
    {
        'el': 'p',
        'text': '(415) 555-1234',
        'class': 'text'
    },
    {
        'el': 'p',
        'text': 'contact@example.com',
        'class': 'text'

    }
];
contactContent.Hours = [
    {
        'el': 'h2',
        'text': 'Hours',
        'class':'menuHeading'
    },
    {
        'el': 'hr'
    },
    {
        'el': 'p',
        'text': 'Monday: Closed \r\n Tuesday: 11AM to 9PM \r\n Wednesday: 11AM to 9PM \r\n Thursday: 11AM to 9PM \r\n Friday: 11AM to 11PM \r\n Saturday: 11AM to 11PM \r\n Sunday: 2PM to 8PM',
        'class': 'text'
    }
];



/***/ }),

/***/ "./src/pageRender.js":
/*!***************************!*\
  !*** ./src/pageRender.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialPageLoad": () => (/* binding */ initialPageLoad)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Octocat_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Octocat.png */ "./src/Octocat.png");
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.js */ "./src/content.js");




function initialPageLoad() {
    
    // Create Title
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Manchurian Delight';

    // Create Navigation Bar with Tabs
    const navBar = document.createElement('div');
    navBar.classList.add('navBar');
    navBar.appendChild(createTab('Home'));
    navBar.appendChild(createTab('Menu'));
    navBar.appendChild(createTab('Contact'));

    // Append Title and Navigation Bar to Header
    document.querySelector('header').append(title, navBar);

    // Create footer
    createFooter();

    // Load Home
    loadContent('Home');

}

function createTab(tabName) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = tabName;
    tab.addEventListener('click', event => loadContent(event.target.textContent));
    return tab;
}

function loadContent(page) {
    
    const content = document.getElementById('content');
    
    // Clear content
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    switch(page) {

        case 'Home':
            // Create and add home content
            content.appendChild(createContainer(_content_js__WEBPACK_IMPORTED_MODULE_2__.homeContent));
            break;

        case 'Menu':
            //Create and add menu content
            content.appendChild(createMenuContainer(_content_js__WEBPACK_IMPORTED_MODULE_2__.menuContent.Appetizers));
            content.appendChild(createMenuContainer(_content_js__WEBPACK_IMPORTED_MODULE_2__.menuContent.Mains));
            content.appendChild(createMenuContainer(_content_js__WEBPACK_IMPORTED_MODULE_2__.menuContent.Desserts));
            content.appendChild(createMenuContainer(_content_js__WEBPACK_IMPORTED_MODULE_2__.menuContent.Cocktails));
            break;
        case 'Contact':

            //load contact content
            content.appendChild(createContactContainer(_content_js__WEBPACK_IMPORTED_MODULE_2__.contactContent));
            break;
    }
}

// Returns container with food items listed in array
function createMenuContainer(foodItems) {
    const menuCont = document.createElement('div');
    menuCont.classList.add('container');

    //Add menu section title and line <hr> 
    menuCont.appendChild(makeElement(foodItems[0])).appendChild(makeElement(foodItems[1]));

    //Add food items 
    const gridCont = document.createElement('div');
    gridCont.classList.add('menuContainerRow');
    foodItems.slice(2).forEach(item => {
        gridCont.appendChild(createFoodItem(item));
    });
    menuCont.appendChild(gridCont);

    return menuCont;
}

function createFoodItem(item) {
    // container for food item
    const foodItem = document.createElement('div');
    foodItem.classList.add('menuItem');
    
    // picture element
    const foodPic = new Image(300, 250);
    foodPic.classList.add('foodPic');
    foodPic.src = item.pic;

    // add name
    const foodName = document.createElement('h2');
    foodName.textContent = item.name;

    // add description
    const foodDesc = document.createElement('p');
    foodDesc.textContent = item.description;

    // add price
    const foodPrice = document.createElement('h3');
    foodPrice.textContent = item.price;

    foodItem.append(foodPic, foodName, foodDesc, foodPrice);

    return foodItem;
}
function createContactContainer(contactObj) {
    const container = document.createElement('div');
    container.classList.add('container');

    const subCont = document.createElement('div');
    subCont.classList.add('menuContainerRow');
    
    // Add location info (left)
    const left = document.createElement('div');
    left.classList.add('contactSection');
    contactObj.Location.forEach(obj => {
        left.appendChild(makeElement(obj));
    });
    // left.appendChild(makeElement(contactObj.Location[0]));
    // left.appendChild(makeElement(contactObj.Location[1]));
    const locImg = new Image(300, 300);
    locImg.src = contactObj.pic;
    left.appendChild(locImg);

    // Add Hours, phone number, email (right)
    const right = document.createElement('div');
    right.classList.add('contactSection');
    contactObj.Hours.forEach(obj => {
        right.appendChild(makeElement(obj));
    });
    
    subCont.append(left, right);
    container.appendChild(subCont);
    return container;
}
// Returns container with objects contained in array 'content'
function createContainer(content) {
    const container = document.createElement('div');
    container.classList.add('container');
    content.forEach(obj => {
        container.appendChild(makeElement(obj));
    })
    return container;
}

function makeElement(item) {
    const element = document.createElement(item.el);
    if (item.text) element.textContent = item.text;
    if (item.class) element.classList.add(item.class);
    if (item.child) item.child.forEach(child => {
        element.appendChild(makeElement(child));
    });
    return element;
}

function createFooter() {
    const footer = document.querySelector('footer');
    const text = document.createElement('small');
    const link = document.createElement('a');
    const img = document.createElement('input');
    
    text.textContent = `\u00A9 Copyright `;
    text.textContent += new Date().getFullYear();
    text.textContent += ', sumedh-inamdar';

    link.href = 'https://github.com/sumedh-inamdar';
    link.target = '_blank';
    link.title = 'Link to personal Github';

    img.type = "image";
    img.alt = "Github";
    img.src = _Octocat_png__WEBPACK_IMPORTED_MODULE_1__;
    link.appendChild(img);

    footer.append(text, link);
}



/***/ }),

/***/ "./src/Octocat.png":
/*!*************************!*\
  !*** ./src/Octocat.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "983e7d4b457c979a95aa.png";

/***/ }),

/***/ "./src/assets/images/background2.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/background2.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48859677f2e09cecd579.jpg";

/***/ }),

/***/ "./src/assets/images/bbm.jpeg":
/*!************************************!*\
  !*** ./src/assets/images/bbm.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6aa38e1b19fb30511308.jpeg";

/***/ }),

/***/ "./src/assets/images/cc.jpeg":
/*!***********************************!*\
  !*** ./src/assets/images/cc.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b80bcdb0502a15f59185.jpeg";

/***/ }),

/***/ "./src/assets/images/cm.jpeg":
/*!***********************************!*\
  !*** ./src/assets/images/cm.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a7df10272f4dc787199.jpeg";

/***/ }),

/***/ "./src/assets/images/fic.jpeg":
/*!************************************!*\
  !*** ./src/assets/images/fic.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d84ea4afbb74fce50ca9.jpeg";

/***/ }),

/***/ "./src/assets/images/hfn.jpeg":
/*!************************************!*\
  !*** ./src/assets/images/hfn.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5f1c04a59bb945a6fe8.jpeg";

/***/ }),

/***/ "./src/assets/images/icc.jpeg":
/*!************************************!*\
  !*** ./src/assets/images/icc.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "161f144670672f7f9117.jpeg";

/***/ }),

/***/ "./src/assets/images/ksr.jpg":
/*!***********************************!*\
  !*** ./src/assets/images/ksr.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2c2377639329248435f.jpg";

/***/ }),

/***/ "./src/assets/images/loc.jpeg":
/*!************************************!*\
  !*** ./src/assets/images/loc.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5885480744a7f09a98fa.jpeg";

/***/ }),

/***/ "./src/assets/images/nzl.jpeg":
/*!************************************!*\
  !*** ./src/assets/images/nzl.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d4aa8a092a5e64821fd.jpeg";

/***/ }),

/***/ "./src/assets/images/pfctp.jpeg":
/*!**************************************!*\
  !*** ./src/assets/images/pfctp.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d39c4527bb6f148d51d.jpeg";

/***/ }),

/***/ "./src/assets/images/pfsgt.jpeg":
/*!**************************************!*\
  !*** ./src/assets/images/pfsgt.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef5be331820c48e02563.jpeg";

/***/ }),

/***/ "./src/assets/images/rtm.jpeg":
/*!************************************!*\
  !*** ./src/assets/images/rtm.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "513d325b3db3b4763eed.jpeg";

/***/ }),

/***/ "./src/assets/images/vm.jpeg":
/*!***********************************!*\
  !*** ./src/assets/images/vm.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f55677f74fe61c728bd3.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageRender_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageRender.js */ "./src/pageRender.js");


// setup html
document.body.appendChild(document.createElement('header'));
const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);
document.body.appendChild(document.createElement('footer'));

(0,_pageRender_js__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQSxjQUFjLHlDQUFPO0FBQ3JCOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkxBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7QUNyQmtEOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZVJlbmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtaXRhOndnaHRANDAwOzcwMCZmYW1pbHk9U29ydHMrTWlsbCtHb3VkeSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAgIGNvbG9yOiAjZWFlMmI3O1xcbiAgICBmb250LWZhbWlseTogJ0FtaXRhJywgY3Vyc2l2ZTtcXG4gICAgYmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuYm9keSwgXFxuaGVhZGVyLCBcXG4uY29udGFpbmVyLFxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRleHQge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuYm9keSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGZsZXg6IDAgMCAxNTBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLnRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDBweCA1MHB4O1xcbiAgICBjb2xvcjogI2VhZTJiNztcXG59XFxuXFxuLm5hdkJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OnJpZ2h0O1xcbn1cXG5cXG4udGFiIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgbWFyZ2luOiAwcHggMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFiOmhvdmVyIHtcXG4gICAgY29sb3I6IGhzbCg1MSwgNTUlLCA5OSUpO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBtaW4td2lkdGg6IDc2MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4OyAgICAgICAgICAgICAgIFxcbn1cXG4ubWVudUhlYWRpbmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuaHIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51Q29udGFpbmVyUm93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDYwcHgsIDFmcikpO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG59XFxuXFxuLm1lbnVJdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDIsIDEwMywgMiwgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxuICAgIHBhZGRpbmc6IDE1cHggMjVweCAwcHg7XFxufVxcbi5mb29kUGljIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5jb250YWN0U2VjdGlvbiB7XFxufVxcbmZvb3RlciB7XFxuICAgIGZsZXg6IDAgMCAycmVtO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5OCU7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxufVxcbiAgXFxuZm9vdGVyIGlucHV0IHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcXG59XFxuICBcXG5mb290ZXIgaW5wdXQ6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMpIHRyYW5zbGF0ZSgwLCAtNXB4KTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTA0cHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBtaW4td2lkdGg6dW5zZXQ7XFxuICAgIH1cXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB9XFxuICAgIC5uYXZCYXIge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4yZW07XFxuICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcXG4gICAgfVxcbiAgICAubWVudUNvbnRhaW5lclJvdyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksY0FBYztJQUNkLDZCQUE2QjtJQUM3QixnRkFBK0U7SUFDL0UsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCO0FBQ0E7Ozs7SUFJSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbURBQW1EO0lBQ25ELGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtaXRhOndnaHRANDAwOzcwMCZmYW1pbHk9U29ydHMrTWlsbCtHb3VkeSZkaXNwbGF5PXN3YXAnKTtcXG5cXG5odG1sIHtcXG4gICAgY29sb3I6ICNlYWUyYjc7XFxuICAgIGZvbnQtZmFtaWx5OiAnQW1pdGEnLCBjdXJzaXZlO1xcbiAgICBiYWNrZ3JvdW5kOnVybCgnLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQyLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuYm9keSwgXFxuaGVhZGVyLCBcXG4uY29udGFpbmVyLFxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRleHQge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuYm9keSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGZsZXg6IDAgMCAxNTBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLnRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDBweCA1MHB4O1xcbiAgICBjb2xvcjogI2VhZTJiNztcXG59XFxuXFxuLm5hdkJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OnJpZ2h0O1xcbn1cXG5cXG4udGFiIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgbWFyZ2luOiAwcHggMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFiOmhvdmVyIHtcXG4gICAgY29sb3I6IGhzbCg1MSwgNTUlLCA5OSUpO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBtaW4td2lkdGg6IDc2MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4OyAgICAgICAgICAgICAgIFxcbn1cXG4ubWVudUhlYWRpbmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuaHIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51Q29udGFpbmVyUm93IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDYwcHgsIDFmcikpO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG59XFxuXFxuLm1lbnVJdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDIsIDEwMywgMiwgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxuICAgIHBhZGRpbmc6IDE1cHggMjVweCAwcHg7XFxufVxcbi5mb29kUGljIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5jb250YWN0U2VjdGlvbiB7XFxufVxcbmZvb3RlciB7XFxuICAgIGZsZXg6IDAgMCAycmVtO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5OCU7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxufVxcbiAgXFxuZm9vdGVyIGlucHV0IHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcXG59XFxuICBcXG5mb290ZXIgaW5wdXQ6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMpIHRyYW5zbGF0ZSgwLCAtNXB4KTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTA0cHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBtaW4td2lkdGg6dW5zZXQ7XFxuICAgIH1cXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB9XFxuICAgIC5uYXZCYXIge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4yZW07XFxuICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcXG4gICAgfVxcbiAgICAubWVudUNvbnRhaW5lclJvdyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGtzciBmcm9tICcuL2Fzc2V0cy9pbWFnZXMva3NyLmpwZyc7XG5pbXBvcnQgcGZjdHAgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3BmY3RwLmpwZWcnO1xuaW1wb3J0IGNjIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9jYy5qcGVnJztcbmltcG9ydCBjbSBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvY20uanBlZyc7XG5pbXBvcnQgaWNjIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9pY2MuanBlZyc7XG5pbXBvcnQgbnpsIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9uemwuanBlZyc7XG5pbXBvcnQgdm0gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3ZtLmpwZWcnO1xuaW1wb3J0IHBmc2d0IGZyb20gJy4vYXNzZXRzL2ltYWdlcy9wZnNndC5qcGVnJztcbmltcG9ydCBoZm4gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2hmbi5qcGVnJztcbmltcG9ydCBmaWMgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2ZpYy5qcGVnJztcbmltcG9ydCBiYm0gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2JibS5qcGVnJztcbmltcG9ydCBydG0gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3J0bS5qcGVnJztcbmltcG9ydCBsb2MgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2xvYy5qcGVnJztcblxuY29uc3QgaG9tZUNvbnRlbnQgPSBbIHtcbiAgICAnZWwnOiAncCcsXG4gICAgJ3RleHQnOiAnTWFuY2h1cmlhbiBEZWxpZ2h0IGJhbGFuY2VzIHRyYWRpdGlvbmFsIEluZG8tY2hpbmVzZSBjdWlzaW5lIHdpdGggYSBjb250ZW1wb3JhcnkgYXRtb3NwaGVyZS4gQSBsb2NhbCBsZWdhY3kgZm9yIG5lYXJseSAzNSB5ZWFycywgb3VyIG1lbnUgaXMgcHJlcGFyZWQgZnJlc2ggZGFpbHkgZnJvbSBpbmdyZWRpZW50cyBzZWxlY3RlZCB3aXRoIGFuIGV5ZSB0b3dhcmRzIHN1c3RhaW5hYmlsaXR5IGFuZCBhIGZvY3VzIG9uIGxvY2FsIHB1cnZleW9ycy4gQSBjdXJhdGVkIGNvbGxlY3Rpb24gb2YgY29udGVtcG9yYXJ5IEluZGlhbiBhbmQgQ2hpbmVzZSBhcnQgc2V0cyB0aGUgc3RhZ2UgZm9yIGFuIGV4cGVyaWVuY2Ugcm9vdGVkIGluIHRyYWRpdGlvbiBhbmQgZGVsaXZlcmVkIHdpdGggYSBmcmVzaCBhcHByb2FjaC4nLFxuICAgICdjbGFzcyc6ICd0ZXh0J1xuICAgIH1cbl07XG5cbmNvbnN0IG1lbnVDb250ZW50ID0ge1xuICAgICdBcHBldGl6ZXJzJzogJycsXG4gICAgJ01haW5zJzogJycsXG4gICAgJ0Rlc3NlcnRzJzogJycsXG4gICAgJ0NvY2t0YWlscyc6ICcnXG59O1xubWVudUNvbnRlbnQuQXBwZXRpemVycyA9IFsgXG4gICAge1xuICAgICAgICAnZWwnOiAnaDEnLFxuICAgICAgICAndGV4dCc6J0FwcGV0aXplcnMnLFxuICAgICAgICAnY2xhc3MnOiAnbWVudUhlYWRpbmcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdlbCc6ICdocidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ25hbWUnOiAnS2VlbWEgU3ByaW5nIFJvbGxzJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ2RlbGljaW91cyBjcmlzcHkgcm9sbHMgc3R1ZmZlZCB3aXRoIHNsb3cgY29va2VkIGtlZW1hIChncm91bmQgbGFtYiknLFxuICAgICAgICAncHJpY2UnOiAnJDYgKDQgcm9sbHMpJyxcbiAgICAgICAgJ2NsYXNzJzogJ21lbnVJdGVtJyxcbiAgICAgICAgJ3BpYyc6IGtzclxuICAgIH0sXG4gICAge1xuICAgICAgICAnbmFtZSc6ICdQYW4gRnJpZWQgQ2hpbGkgVG9mdS9QYW5lZXInLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAndG9mdS9QYW5lZXIsIHNjYWxsaW9uLCByZWQgJmdyZWVuIHBlcHBlciwgY2hpbGkgcGFzdGUnLFxuICAgICAgICAncHJpY2UnOiAnJDExJyxcbiAgICAgICAgJ2NsYXNzJzogJ21lbnVJdGVtJyxcbiAgICAgICAgJ3BpYyc6IHBmY3RwXG4gICAgfSxcbiAgICB7XG4gICAgICAgICduYW1lJzogJ0RyeSBDaGlsaSBDaGlja2VuJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ2NoaWNrZW4sIG9uaW9ucywgc2NhbGxpb25zLCBjZWxlcnksIGdpbmdlciwgZ2FybGljLCB0aGFpIGNoaWxsaScsXG4gICAgICAgICdwcmljZSc6ICckMTMnLFxuICAgICAgICAnY2xhc3MnOiAnbWVudUl0ZW0nLFxuICAgICAgICAncGljJzogY2NcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ25hbWUnOiAnRHJ5IENhdWxpZmxvd2VyIE1hbmNodXJpYW4nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnY2lsYW50cm8sIG9uaW9ucywgc2NhbGxpb24sIHNveSBzYXVjZSwgZ2luZ2VyLCBnYXJsaWMnLFxuICAgICAgICAncHJpY2UnOiAnJDExJyxcbiAgICAgICAgJ2NsYXNzJzogJ21lbnVJdGVtJyxcbiAgICAgICAgJ3BpYyc6IGNtXG4gICAgfVxuXTtcbm1lbnVDb250ZW50Lk1haW5zID0gW1xuICAgIHtcbiAgICAgICAgJ2VsJzogJ2gxJyxcbiAgICAgICAgJ3RleHQnOidNYWlucycsXG4gICAgICAgICdjbGFzcyc6ICdtZW51SGVhZGluZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2VsJzogJ2hyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICAnbmFtZSc6ICdIb3QgR2FybGljIE5ldyBaZWFsYW5kIExhbWInLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnb25pb25zLCBncmVlbiBwZXBwZXIsIGdhcmxpYycsXG4gICAgICAgICdwcmljZSc6ICckMjEnLFxuICAgICAgICAnY2xhc3MnOiAnbWVudUl0ZW0nLFxuICAgICAgICAncGljJzogbnpsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICduYW1lJzogJ0luZG8gQ2hpbmVzZSBDaGlja2VuJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ3NsaWNlZCBjaGlja2VuLCBtdXNocm9vbSwgaW4gYmxhY2sgYmVhbiBzYXVjZSAnLFxuICAgICAgICAncHJpY2UnOiAnJDE5JyxcbiAgICAgICAgJ2NsYXNzJzogJ21lbnVJdGVtJyxcbiAgICAgICAgJ3BpYyc6IGljY1xuICAgIH0sXG4gICAge1xuICAgICAgICAnbmFtZSc6ICdWZWdldGFibGUgTWFuY2h1cmlhbicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdhaXIgZnJpZWQgbWl4ZWQgdmVnZXRhYmxlIGJhbGxzIHNtb3RoZXJlZCB3aXRoIHNwaWN5IGluZG8tY2hpbmVzZSBncmF2eScsXG4gICAgICAgICdwcmljZSc6ICckMTcnLFxuICAgICAgICAnY2xhc3MnOiAnbWVudUl0ZW0nLFxuICAgICAgICAncGljJzogdm1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ25hbWUnOiAnUGFuIEZyaWVkIFNlc2FtZSBHYXJsaWMgVG9mdScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdjcmlzcHkgcGFuLWZyaWVkIHNlc2FtZSBnYXJsaWMgdG9mdSBnYXJuaXNoZWQgd2l0aCBzaGFsbG90cycsXG4gICAgICAgICdwcmljZSc6ICckMTYnLFxuICAgICAgICAnY2xhc3MnOiAnbWVudUl0ZW0nLFxuICAgICAgICAncGljJzogcGZzZ3RcbiAgICB9XG5dO1xubWVudUNvbnRlbnQuRGVzc2VydHMgPSBbXG4gICAge1xuICAgICAgICAnZWwnOiAnaDEnLFxuICAgICAgICAndGV4dCc6J0Rlc3NlcnRzJyxcbiAgICAgICAgJ2NsYXNzJzogJ21lbnVIZWFkaW5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgICAnZWwnOiAnaHInXG4gICAgfSxcbiAgICB7XG4gICAgICAgICduYW1lJzogJ0hvbmV5IEZyaWVkIE5vb2RsZXMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnY3Jpc3B5IG5vb2RsZXMsIHRvc3NlZCB3aXRoIHN1Z2FyIGFuZCBob25leSwgc2VydmVkIHdpdGggdmFuaWxsYSBpY2UgY3JlYW0nLFxuICAgICAgICAncHJpY2UnOiAnJDknLFxuICAgICAgICAnY2xhc3MnOiAnbWVudUl0ZW0nLFxuICAgICAgICAncGljJzogaGZuXG4gICAgfSxcbiAgICB7XG4gICAgICAgICduYW1lJzogJ0ZyaWVkIEljZSBDcmVhbScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICd2YW5pbGxhIGljZSBjcmVhbSBiYXR0ZXJlZCBhbmQgZnJpZWQgdG8gcGVyZmVjdGlvbiAnLFxuICAgICAgICAncHJpY2UnOiAnJDknLFxuICAgICAgICAnY2xhc3MnOiAnbWVudUl0ZW0nLFxuICAgICAgICAncGljJzogZmljXG4gICAgfVxuXTtcbm1lbnVDb250ZW50LkNvY2t0YWlscyA9IFtcbiAgICB7XG4gICAgICAgICdlbCc6ICdoMScsXG4gICAgICAgICd0ZXh0JzonQ29ja3RhaWxzJyxcbiAgICAgICAgJ2NsYXNzJzogJ21lbnVIZWFkaW5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgICAnZWwnOiAnaHInXG4gICAgfSxcbiAgICB7XG4gICAgICAgICduYW1lJzogJ0JsYXppbmcgQnVkZGhhIE1hcmdhcml0YScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdjaGlsaSBmbGFrZSBhbmQgc3VnYXJlZCByaW0sIHRlcXVpbGEgc2FrZSwgbGltZSBqdWljZSwgc2ltcGxlIHN5cnVwIGFuZCBzcGxhc2ggb2Ygb3JhbmdlIGp1aWNlJyxcbiAgICAgICAgJ3ByaWNlJzogJyQxMScsXG4gICAgICAgICdjbGFzcyc6ICdtZW51SXRlbScsXG4gICAgICAgICdwaWMnOiBiYm1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ25hbWUnOiAnUmVkIFRhcmEgTW9qaXRvJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ3J1bSBzYWtlLCBzdHJhd2JlcnJ5IHB1cmVlLCBtdWRkbGVkIGxpbWUgYW5kIG1pbnQsIGZyZXNoIGxpbWUganVpY2UgYW5kIHNvZGEnLFxuICAgICAgICAncHJpY2UnOiAnJDEwJyxcbiAgICAgICAgJ2NsYXNzJzogJ21lbnVJdGVtJyxcbiAgICAgICAgJ3BpYyc6IHJ0bVxuICAgIH1cbl07XG5cbmNvbnN0IGNvbnRhY3RDb250ZW50ID0ge1xuICAgICdMb2NhdGlvbic6ICcnLFxuICAgICdIb3Vycyc6ICcnLFxuICAgICdQaG9uZSBOdW1iZXInOiAnJyxcbiAgICAnRW1haWwnOiAnJyxcbiAgICAncGljJzogbG9jXG59XG5jb250YWN0Q29udGVudC5Mb2NhdGlvbiA9IFtcbiAgICB7XG4gICAgICAgICdlbCc6ICdoMicsXG4gICAgICAgICd0ZXh0JzogJ0xvY2F0aW9uJyxcbiAgICAgICAgJ2NsYXNzJzogJ21lbnVIZWFkaW5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgICAnZWwnOiAnaHInXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdlbCc6ICdwJyxcbiAgICAgICAgJ3RleHQnOiAnMTIzNCBTdW5zZXQgQmx2ZCwgU2FuIEZyYW5jaXNjbywgQ0EnLFxuICAgICAgICAnY2xhc3MnOiAndGV4dCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2VsJzogJ3AnLFxuICAgICAgICAndGV4dCc6ICcoNDE1KSA1NTUtMTIzNCcsXG4gICAgICAgICdjbGFzcyc6ICd0ZXh0J1xuICAgIH0sXG4gICAge1xuICAgICAgICAnZWwnOiAncCcsXG4gICAgICAgICd0ZXh0JzogJ2NvbnRhY3RAZXhhbXBsZS5jb20nLFxuICAgICAgICAnY2xhc3MnOiAndGV4dCdcblxuICAgIH1cbl07XG5jb250YWN0Q29udGVudC5Ib3VycyA9IFtcbiAgICB7XG4gICAgICAgICdlbCc6ICdoMicsXG4gICAgICAgICd0ZXh0JzogJ0hvdXJzJyxcbiAgICAgICAgJ2NsYXNzJzonbWVudUhlYWRpbmcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdlbCc6ICdocidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2VsJzogJ3AnLFxuICAgICAgICAndGV4dCc6ICdNb25kYXk6IENsb3NlZCBcXHJcXG4gVHVlc2RheTogMTFBTSB0byA5UE0gXFxyXFxuIFdlZG5lc2RheTogMTFBTSB0byA5UE0gXFxyXFxuIFRodXJzZGF5OiAxMUFNIHRvIDlQTSBcXHJcXG4gRnJpZGF5OiAxMUFNIHRvIDExUE0gXFxyXFxuIFNhdHVyZGF5OiAxMUFNIHRvIDExUE0gXFxyXFxuIFN1bmRheTogMlBNIHRvIDhQTScsXG4gICAgICAgICdjbGFzcyc6ICd0ZXh0J1xuICAgIH1cbl07XG5cbmV4cG9ydCB7IGhvbWVDb250ZW50LCBtZW51Q29udGVudCwgY29udGFjdENvbnRlbnQgfTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBvY3RvY2F0IGZyb20gJy4vT2N0b2NhdC5wbmcnO1xuaW1wb3J0IHsgaG9tZUNvbnRlbnQsIG1lbnVDb250ZW50LCBjb250YWN0Q29udGVudCB9IGZyb20gJy4vY29udGVudC5qcyc7XG5cbmZ1bmN0aW9uIGluaXRpYWxQYWdlTG9hZCgpIHtcbiAgICBcbiAgICAvLyBDcmVhdGUgVGl0bGVcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnTWFuY2h1cmlhbiBEZWxpZ2h0JztcblxuICAgIC8vIENyZWF0ZSBOYXZpZ2F0aW9uIEJhciB3aXRoIFRhYnNcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2QmFyJyk7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGNyZWF0ZVRhYignSG9tZScpKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFiKCdNZW51JykpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjcmVhdGVUYWIoJ0NvbnRhY3QnKSk7XG5cbiAgICAvLyBBcHBlbmQgVGl0bGUgYW5kIE5hdmlnYXRpb24gQmFyIHRvIEhlYWRlclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmFwcGVuZCh0aXRsZSwgbmF2QmFyKTtcblxuICAgIC8vIENyZWF0ZSBmb290ZXJcbiAgICBjcmVhdGVGb290ZXIoKTtcblxuICAgIC8vIExvYWQgSG9tZVxuICAgIGxvYWRDb250ZW50KCdIb21lJyk7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFiKHRhYk5hbWUpIHtcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgdGFiLnRleHRDb250ZW50ID0gdGFiTmFtZTtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBsb2FkQ29udGVudChldmVudC50YXJnZXQudGV4dENvbnRlbnQpKTtcbiAgICByZXR1cm4gdGFiO1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGVudChwYWdlKSB7XG4gICAgXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgXG4gICAgLy8gQ2xlYXIgY29udGVudFxuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN3aXRjaChwYWdlKSB7XG5cbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICAvLyBDcmVhdGUgYW5kIGFkZCBob21lIGNvbnRlbnRcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFpbmVyKGhvbWVDb250ZW50KSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdNZW51JzpcbiAgICAgICAgICAgIC8vQ3JlYXRlIGFuZCBhZGQgbWVudSBjb250ZW50XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVDb250YWluZXIobWVudUNvbnRlbnQuQXBwZXRpemVycykpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51Q29udGFpbmVyKG1lbnVDb250ZW50Lk1haW5zKSk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVDb250YWluZXIobWVudUNvbnRlbnQuRGVzc2VydHMpKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNvbnRhaW5lcihtZW51Q29udGVudC5Db2NrdGFpbHMpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDb250YWN0JzpcblxuICAgICAgICAgICAgLy9sb2FkIGNvbnRhY3QgY29udGVudFxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0Q29udGFpbmVyKGNvbnRhY3RDb250ZW50KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbi8vIFJldHVybnMgY29udGFpbmVyIHdpdGggZm9vZCBpdGVtcyBsaXN0ZWQgaW4gYXJyYXlcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDb250YWluZXIoZm9vZEl0ZW1zKSB7XG4gICAgY29uc3QgbWVudUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgIC8vQWRkIG1lbnUgc2VjdGlvbiB0aXRsZSBhbmQgbGluZSA8aHI+IFxuICAgIG1lbnVDb250LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KGZvb2RJdGVtc1swXSkpLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KGZvb2RJdGVtc1sxXSkpO1xuXG4gICAgLy9BZGQgZm9vZCBpdGVtcyBcbiAgICBjb25zdCBncmlkQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWRDb250LmNsYXNzTGlzdC5hZGQoJ21lbnVDb250YWluZXJSb3cnKTtcbiAgICBmb29kSXRlbXMuc2xpY2UoMikuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgZ3JpZENvbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZEl0ZW0oaXRlbSkpO1xuICAgIH0pO1xuICAgIG1lbnVDb250LmFwcGVuZENoaWxkKGdyaWRDb250KTtcblxuICAgIHJldHVybiBtZW51Q29udDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vZEl0ZW0oaXRlbSkge1xuICAgIC8vIGNvbnRhaW5lciBmb3IgZm9vZCBpdGVtXG4gICAgY29uc3QgZm9vZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kSXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbScpO1xuICAgIFxuICAgIC8vIHBpY3R1cmUgZWxlbWVudFxuICAgIGNvbnN0IGZvb2RQaWMgPSBuZXcgSW1hZ2UoMzAwLCAyNTApO1xuICAgIGZvb2RQaWMuY2xhc3NMaXN0LmFkZCgnZm9vZFBpYycpO1xuICAgIGZvb2RQaWMuc3JjID0gaXRlbS5waWM7XG5cbiAgICAvLyBhZGQgbmFtZVxuICAgIGNvbnN0IGZvb2ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBmb29kTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcblxuICAgIC8vIGFkZCBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGZvb2REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb2REZXNjLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcblxuICAgIC8vIGFkZCBwcmljZVxuICAgIGNvbnN0IGZvb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZm9vZFByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcblxuICAgIGZvb2RJdGVtLmFwcGVuZChmb29kUGljLCBmb29kTmFtZSwgZm9vZERlc2MsIGZvb2RQcmljZSk7XG5cbiAgICByZXR1cm4gZm9vZEl0ZW07XG59XG5mdW5jdGlvbiBjcmVhdGVDb250YWN0Q29udGFpbmVyKGNvbnRhY3RPYmopIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBzdWJDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViQ29udC5jbGFzc0xpc3QuYWRkKCdtZW51Q29udGFpbmVyUm93Jyk7XG4gICAgXG4gICAgLy8gQWRkIGxvY2F0aW9uIGluZm8gKGxlZnQpXG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnQuY2xhc3NMaXN0LmFkZCgnY29udGFjdFNlY3Rpb24nKTtcbiAgICBjb250YWN0T2JqLkxvY2F0aW9uLmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgbGVmdC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudChvYmopKTtcbiAgICB9KTtcbiAgICAvLyBsZWZ0LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KGNvbnRhY3RPYmouTG9jYXRpb25bMF0pKTtcbiAgICAvLyBsZWZ0LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KGNvbnRhY3RPYmouTG9jYXRpb25bMV0pKTtcbiAgICBjb25zdCBsb2NJbWcgPSBuZXcgSW1hZ2UoMzAwLCAzMDApO1xuICAgIGxvY0ltZy5zcmMgPSBjb250YWN0T2JqLnBpYztcbiAgICBsZWZ0LmFwcGVuZENoaWxkKGxvY0ltZyk7XG5cbiAgICAvLyBBZGQgSG91cnMsIHBob25lIG51bWJlciwgZW1haWwgKHJpZ2h0KVxuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHQuY2xhc3NMaXN0LmFkZCgnY29udGFjdFNlY3Rpb24nKTtcbiAgICBjb250YWN0T2JqLkhvdXJzLmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQob2JqKSk7XG4gICAgfSk7XG4gICAgXG4gICAgc3ViQ29udC5hcHBlbmQobGVmdCwgcmlnaHQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJDb250KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuLy8gUmV0dXJucyBjb250YWluZXIgd2l0aCBvYmplY3RzIGNvbnRhaW5lZCBpbiBhcnJheSAnY29udGVudCdcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcihjb250ZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRlbnQuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQob2JqKSk7XG4gICAgfSlcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBtYWtlRWxlbWVudChpdGVtKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXRlbS5lbCk7XG4gICAgaWYgKGl0ZW0udGV4dCkgZWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW0udGV4dDtcbiAgICBpZiAoaXRlbS5jbGFzcykgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGl0ZW0uY2xhc3MpO1xuICAgIGlmIChpdGVtLmNoaWxkKSBpdGVtLmNoaWxkLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KGNoaWxkKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKTtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgXG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGBcXHUwMEE5IENvcHlyaWdodCBgO1xuICAgIHRleHQudGV4dENvbnRlbnQgKz0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIHRleHQudGV4dENvbnRlbnQgKz0gJywgc3VtZWRoLWluYW1kYXInO1xuXG4gICAgbGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9zdW1lZGgtaW5hbWRhcic7XG4gICAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBsaW5rLnRpdGxlID0gJ0xpbmsgdG8gcGVyc29uYWwgR2l0aHViJztcblxuICAgIGltZy50eXBlID0gXCJpbWFnZVwiO1xuICAgIGltZy5hbHQgPSBcIkdpdGh1YlwiO1xuICAgIGltZy5zcmMgPSBvY3RvY2F0O1xuICAgIGxpbmsuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIGZvb3Rlci5hcHBlbmQodGV4dCwgbGluayk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxQYWdlTG9hZCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHsgaW5pdGlhbFBhZ2VMb2FkIH0gZnJvbSAnLi9wYWdlUmVuZGVyLmpzJztcblxuLy8gc2V0dXAgaHRtbFxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKSk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJykpO1xuXG5pbml0aWFsUGFnZUxvYWQoKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=