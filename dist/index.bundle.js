"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["index"],{

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* $-custom Properties-$ */\r\n:root {\r\n  --primary-color: #0ff;\r\n  --secondary-color: #6abac6d9;\r\n  --tetiary-color: #0d1f2d;\r\n  --tetiary-color-2: #0d1f2dab;\r\n}\r\n\r\n/* $-width-$ */\r\nhtml::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* $-Track-$ */\r\nhtml::-webkit-scrollbar-track {\r\n  background-color: var(--tetiary-color);\r\n}\r\n\r\n/* $-Handle-$ */\r\nhtml::-webkit-scrollbar-thumb {\r\n  background-color: var(--primary-color-);\r\n  border-radius: 8px;\r\n}\r\n\r\n/* $-Handle on hover-$ */\r\nhtml::-webkit-scrollbar-thumb:hover {\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n/* $-Css-Resets-$ */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  background-color: #6abac6b0;\r\n}\r\n\r\nbutton {\r\n  padding: 0.2em 1em;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-weight: 700;\r\n  background-color: var(--tetiary-color);\r\n  color: rgba(0, 255, 255, 0.747);\r\n}\r\n\r\nbutton:hover {\r\n  color: var(--primary-color);\r\n  transform: scale(1.2);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n/* $-Utility-Classes-$ */\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n/* $-Leaderboard-$ */\r\nspan {\r\n  font-size: large;\r\n  font-weight: 700;\r\n}\r\n\r\nh1 {\r\n  margin: 1rem;\r\n  padding: 0 0.2rem;\r\n  border-radius: 5px;\r\n  background-color: var(--secondary-color);\r\n  filter: drop-shadow(1px 1px 1px);\r\n  text-shadow: 1px 1px 1px var(--tetiary-color);\r\n  /* stylelint-disable-next-line csstree/validator */\r\n  font-size: clamp(1.5rem, 5vw, 2rem);\r\n}\r\n\r\nh1 span {\r\n  color: var(--primary-color);\r\n  /* stylelint-disable-next-line csstree/validator */\r\n  font-size: clamp(1.5rem, 5vw, 2rem);\r\n}\r\n\r\nh2 {\r\n  color: rgba(0, 255, 255, 0.774);\r\n  font-size: 3rem;\r\n  text-align: center;\r\n  position: absolute;\r\n  bottom: 25%;\r\n}\r\n\r\n.color {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.leaderboard {\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n  padding: 1rem;\r\n  filter: drop-shadow(1px 1px 1px);\r\n}\r\n\r\n/* score */\r\n.score {\r\n  max-width: 25rem;\r\n  width: 100%;\r\n}\r\n\r\n.scores {\r\n  position: relative;\r\n  margin-top: 0.5rem;\r\n  padding: 0.2rem;\r\n  background-color: var(--tetiary-color);\r\n  border-radius: 8px;\r\n  /* stylelint-disable-next-line csstree/validator */\r\n  height: clamp(13rem, 30vw, 16rem);\r\n  overflow: scroll;\r\n}\r\n\r\n.scores::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.item {\r\n  justify-content: space-between;\r\n  border-radius: 8px;\r\n  margin-bottom: 0.2rem;\r\n  padding: 0.2rem 0.5rem;\r\n  color: var(--secondary-color);\r\n}\r\n\r\n.item:nth-of-type(even) {\r\n  background-color: var(--secondary-color);\r\n  color: black;\r\n}\r\n\r\n.recent {\r\n  justify-content: space-between;\r\n}\r\n\r\n/* form */\r\n.form {\r\n  position: relative;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 10.5rem;\r\n  max-width: 25rem;\r\n}\r\n\r\n.leader {\r\n  border-radius: 5px;\r\n  border: none;\r\n  margin: 0.5rem auto;\r\n  padding: 0.5rem;\r\n  height: 2rem;\r\n  font-size: small;\r\n  font-weight: 700;\r\n  width: 100%;\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.leader:focus {\r\n  outline-color: rgba(0, 255, 255, 0.443);\r\n  border: 1px solid rgba(0, 255, 255, 0.443);\r\n}\r\n\r\n.leader::placeholder {\r\n  font-weight: 700;\r\n  color: var(--tetiary-color-2);\r\n}\r\n\r\n.submit {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: max-content;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  bottom: 1rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 2.5rem;\r\n  background-color: var(--tetiary-color);\r\n  width: calc(100% - 2rem);\r\n  margin: 0 1rem;\r\n  border-radius: 5px;\r\n  filter: drop-shadow(1px 1px 1px);\r\n}\r\n\r\n.foot {\r\n  color: var(--primary-color);\r\n  font-weight: 700;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,0BAA0B;AAC1B;EACE,qBAAqB;EACrB,4BAA4B;EAC5B,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA,cAAc;AACd;EACE,WAAW;AACb;;AAEA,cAAc;AACd;EACE,sCAAsC;AACxC;;AAEA,eAAe;AACf;EACE,uCAAuC;EACvC,kBAAkB;AACpB;;AAEA,wBAAwB;AACxB;EACE,wCAAwC;AAC1C;;AAEA,mBAAmB;AACnB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,qDAAqD;AACvD;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,sCAAsC;EACtC,+BAA+B;AACjC;;AAEA;EACE,2BAA2B;EAC3B,qBAAqB;EACrB,gCAAgC;AAClC;;AAEA,wBAAwB;AACxB;EACE,aAAa;AACf;;AAEA,oBAAoB;AACpB;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,wCAAwC;EACxC,gCAAgC;EAChC,6CAA6C;EAC7C,kDAAkD;EAClD,mCAAmC;AACrC;;AAEA;EACE,2BAA2B;EAC3B,kDAAkD;EAClD,mCAAmC;AACrC;;AAEA;EACE,+BAA+B;EAC/B,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,SAAS;EACT,aAAa;EACb,gCAAgC;AAClC;;AAEA,UAAU;AACV;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,sCAAsC;EACtC,kBAAkB;EAClB,kDAAkD;EAClD,iCAAiC;EACjC,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,wCAAwC;EACxC,YAAY;AACd;;AAEA;EACE,8BAA8B;AAChC;;AAEA,SAAS;AACT;EACE,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,uCAAuC;EACvC,0CAA0C;AAC5C;;AAEA;EACE,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;EACd,sCAAsC;EACtC,wBAAwB;EACxB,cAAc;EACd,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,2BAA2B;EAC3B,gBAAgB;AAClB","sourcesContent":["/* $-custom Properties-$ */\r\n:root {\r\n  --primary-color: #0ff;\r\n  --secondary-color: #6abac6d9;\r\n  --tetiary-color: #0d1f2d;\r\n  --tetiary-color-2: #0d1f2dab;\r\n}\r\n\r\n/* $-width-$ */\r\nhtml::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* $-Track-$ */\r\nhtml::-webkit-scrollbar-track {\r\n  background-color: var(--tetiary-color);\r\n}\r\n\r\n/* $-Handle-$ */\r\nhtml::-webkit-scrollbar-thumb {\r\n  background-color: var(--primary-color-);\r\n  border-radius: 8px;\r\n}\r\n\r\n/* $-Handle on hover-$ */\r\nhtml::-webkit-scrollbar-thumb:hover {\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n/* $-Css-Resets-$ */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  background-color: #6abac6b0;\r\n}\r\n\r\nbutton {\r\n  padding: 0.2em 1em;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-weight: 700;\r\n  background-color: var(--tetiary-color);\r\n  color: rgba(0, 255, 255, 0.747);\r\n}\r\n\r\nbutton:hover {\r\n  color: var(--primary-color);\r\n  transform: scale(1.2);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n/* $-Utility-Classes-$ */\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n/* $-Leaderboard-$ */\r\nspan {\r\n  font-size: large;\r\n  font-weight: 700;\r\n}\r\n\r\nh1 {\r\n  margin: 1rem;\r\n  padding: 0 0.2rem;\r\n  border-radius: 5px;\r\n  background-color: var(--secondary-color);\r\n  filter: drop-shadow(1px 1px 1px);\r\n  text-shadow: 1px 1px 1px var(--tetiary-color);\r\n  /* stylelint-disable-next-line csstree/validator */\r\n  font-size: clamp(1.5rem, 5vw, 2rem);\r\n}\r\n\r\nh1 span {\r\n  color: var(--primary-color);\r\n  /* stylelint-disable-next-line csstree/validator */\r\n  font-size: clamp(1.5rem, 5vw, 2rem);\r\n}\r\n\r\nh2 {\r\n  color: rgba(0, 255, 255, 0.774);\r\n  font-size: 3rem;\r\n  text-align: center;\r\n  position: absolute;\r\n  bottom: 25%;\r\n}\r\n\r\n.color {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.leaderboard {\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n  padding: 1rem;\r\n  filter: drop-shadow(1px 1px 1px);\r\n}\r\n\r\n/* score */\r\n.score {\r\n  max-width: 25rem;\r\n  width: 100%;\r\n}\r\n\r\n.scores {\r\n  position: relative;\r\n  margin-top: 0.5rem;\r\n  padding: 0.2rem;\r\n  background-color: var(--tetiary-color);\r\n  border-radius: 8px;\r\n  /* stylelint-disable-next-line csstree/validator */\r\n  height: clamp(13rem, 30vw, 16rem);\r\n  overflow: scroll;\r\n}\r\n\r\n.scores::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.item {\r\n  justify-content: space-between;\r\n  border-radius: 8px;\r\n  margin-bottom: 0.2rem;\r\n  padding: 0.2rem 0.5rem;\r\n  color: var(--secondary-color);\r\n}\r\n\r\n.item:nth-of-type(even) {\r\n  background-color: var(--secondary-color);\r\n  color: black;\r\n}\r\n\r\n.recent {\r\n  justify-content: space-between;\r\n}\r\n\r\n/* form */\r\n.form {\r\n  position: relative;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 10.5rem;\r\n  max-width: 25rem;\r\n}\r\n\r\n.leader {\r\n  border-radius: 5px;\r\n  border: none;\r\n  margin: 0.5rem auto;\r\n  padding: 0.5rem;\r\n  height: 2rem;\r\n  font-size: small;\r\n  font-weight: 700;\r\n  width: 100%;\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.leader:focus {\r\n  outline-color: rgba(0, 255, 255, 0.443);\r\n  border: 1px solid rgba(0, 255, 255, 0.443);\r\n}\r\n\r\n.leader::placeholder {\r\n  font-weight: 700;\r\n  color: var(--tetiary-color-2);\r\n}\r\n\r\n.submit {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: max-content;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  bottom: 1rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 2.5rem;\r\n  background-color: var(--tetiary-color);\r\n  width: calc(100% - 2rem);\r\n  margin: 0 1rem;\r\n  border-radius: 5px;\r\n  filter: drop-shadow(1px 1px 1px);\r\n}\r\n\r\n.foot {\r\n  color: var(--primary-color);\r\n  font-weight: 700;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getData.js */ "./src/modules/getData.js");
/* harmony import */ var _modules_postData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/postData.js */ "./src/modules/postData.js");
/* harmony import */ var _modules_renderData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/renderData.js */ "./src/modules/renderData.js");





// sending data to an api
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('.user');
  const point = document.querySelector('.point');
  const item = {
    user: name.value,
    score: point.value,
  };
  (0,_modules_postData_js__WEBPACK_IMPORTED_MODULE_2__["default"])('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2Ikon/scores/', item);
});

const refreshBtn = document.querySelector('.refresh');
refreshBtn.addEventListener('click', () => {
  const scores = document.querySelector('.scores');
  scores.firstElementChild.remove();
  scores.innerHTML = '';
  (0,_modules_getData_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
    .then((response) => response.json())
    .then((data) => { (0,_modules_renderData_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data.result); });
});

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2Ikon/scores/');
  return response;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const postData = async (url, item) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);

/***/ }),

/***/ "./src/modules/renderData.js":
/*!***********************************!*\
  !*** ./src/modules/renderData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderData = (arr) => {
  const scores = document.querySelector('.scores');
  arr.forEach((item) => {
    scores.innerHTML += `<li class="item flex"><span>${item.user}</span>
    <span>${item.score}</span></li>`;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderData);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ3NCO0FBQ0U7QUFDSTs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdFQUFRO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrREFBTztBQUNUO0FBQ0Esc0JBQXNCLGtFQUFVLGdCQUFnQjtBQUNoRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzFCRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7OztBQ0x0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ1h2QjtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsVUFBVTtBQUNqRSxZQUFZLFdBQVc7QUFDdkIsR0FBRztBQUNIOztBQUVBLGlFQUFlLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL3Bvc3REYXRhLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9yZW5kZXJEYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogJC1jdXN0b20gUHJvcGVydGllcy0kICovXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMGZmO1xcclxcbiAgLS1zZWNvbmRhcnktY29sb3I6ICM2YWJhYzZkOTtcXHJcXG4gIC0tdGV0aWFyeS1jb2xvcjogIzBkMWYyZDtcXHJcXG4gIC0tdGV0aWFyeS1jb2xvci0yOiAjMGQxZjJkYWI7XFxyXFxufVxcclxcblxcclxcbi8qICQtd2lkdGgtJCAqL1xcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAkLVRyYWNrLSQgKi9cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXRpYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogJC1IYW5kbGUtJCAqL1xcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogJC1IYW5kbGUgb24gaG92ZXItJCAqL1xcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi8qICQtQ3NzLVJlc2V0cy0kICovXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YWJhYzZiMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDAuMmVtIDFlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXRpYXJ5LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDI1NSwgMjU1LCAwLjc0Nyk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLyogJC1VdGlsaXR5LUNsYXNzZXMtJCAqL1xcclxcbi5mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi8qICQtTGVhZGVyYm9hcmQtJCAqL1xcclxcbnNwYW4ge1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAgMC4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAxcHgpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHZhcigtLXRldGlhcnktY29sb3IpO1xcclxcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGNzc3RyZWUvdmFsaWRhdG9yICovXFxyXFxuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgNXZ3LCAycmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEgc3BhbiB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3NzdHJlZS92YWxpZGF0b3IgKi9cXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCA1dncsIDJyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAyNTUsIDI1NSwgMC43NzQpO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAyNSU7XFxyXFxufVxcclxcblxcclxcbi5jb2xvciB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5sZWFkZXJib2FyZCB7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggMXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2NvcmUgKi9cXHJcXG4uc2NvcmUge1xcclxcbiAgbWF4LXdpZHRoOiAyNXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRldGlhcnktY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGNzc3RyZWUvdmFsaWRhdG9yICovXFxyXFxuICBoZWlnaHQ6IGNsYW1wKDEzcmVtLCAzMHZ3LCAxNnJlbSk7XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxyXFxuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5pdGVtOm50aC1vZi10eXBlKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5yZWNlbnQge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb3JtICovXFxyXFxuLmZvcm0ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMC41cmVtO1xcclxcbiAgbWF4LXdpZHRoOiAyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlYWRlciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBtYXJnaW46IDAuNXJlbSBhdXRvO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5sZWFkZXI6Zm9jdXMge1xcclxcbiAgb3V0bGluZS1jb2xvcjogcmdiYSgwLCAyNTUsIDI1NSwgMC40NDMpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAyNTUsIDI1NSwgMC40NDMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhZGVyOjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6IHZhcigtLXRldGlhcnktY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAxcmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXRpYXJ5LWNvbG9yKTtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXHJcXG4gIG1hcmdpbjogMCAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDFweCk7XFxyXFxufVxcclxcblxcclxcbi5mb290IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMEJBQTBCO0FBQzFCO0VBQ0UscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsNEJBQTRCO0FBQzlCOztBQUVBLGNBQWM7QUFDZDtFQUNFLFdBQVc7QUFDYjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtBQUNwQjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0QywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGdDQUFnQztBQUNsQzs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxnQ0FBZ0M7RUFDaEMsNkNBQTZDO0VBQzdDLGtEQUFrRDtFQUNsRCxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0RBQWtEO0VBQ2xELG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBLFVBQVU7QUFDVjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLGtEQUFrRDtFQUNsRCxpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUEsU0FBUztBQUNUO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHNDQUFzQztFQUN0Qyx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qICQtY3VzdG9tIFByb3BlcnRpZXMtJCAqL1xcclxcbjpyb290IHtcXHJcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzBmZjtcXHJcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjNmFiYWM2ZDk7XFxyXFxuICAtLXRldGlhcnktY29sb3I6ICMwZDFmMmQ7XFxyXFxuICAtLXRldGlhcnktY29sb3ItMjogIzBkMWYyZGFiO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAkLXdpZHRoLSQgKi9cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogJC1UcmFjay0kICovXFxyXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV0aWFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi8qICQtSGFuZGxlLSQgKi9cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi8qICQtSGFuZGxlIG9uIGhvdmVyLSQgKi9cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAkLUNzcy1SZXNldHMtJCAqL1xcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFiYWM2YjA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAwLjJlbSAxZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV0aWFyeS1jb2xvcik7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAyNTUsIDI1NSwgMC43NDcpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8qICQtVXRpbGl0eS1DbGFzc2VzLSQgKi9cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAkLUxlYWRlcmJvYXJkLSQgKi9cXHJcXG5zcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBwYWRkaW5nOiAwIDAuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggMXB4KTtcXHJcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCB2YXIoLS10ZXRpYXJ5LWNvbG9yKTtcXHJcXG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBjc3N0cmVlL3ZhbGlkYXRvciAqL1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDV2dywgMnJlbSk7XFxyXFxufVxcclxcblxcclxcbmgxIHNwYW4ge1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGNzc3RyZWUvdmFsaWRhdG9yICovXFxyXFxuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgNXZ3LCAycmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMjU1LCAyNTUsIDAuNzc0KTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMjUlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sb3Ige1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhZGVyYm9hcmQge1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDFweCk7XFxyXFxufVxcclxcblxcclxcbi8qIHNjb3JlICovXFxyXFxuLnNjb3JlIHtcXHJcXG4gIG1heC13aWR0aDogMjVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlcyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXRpYXJ5LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBjc3N0cmVlL3ZhbGlkYXRvciAqL1xcclxcbiAgaGVpZ2h0OiBjbGFtcCgxM3JlbSwgMzB2dywgMTZyZW0pO1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3Jlczo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcclxcbiAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbTpudGgtb2YtdHlwZShldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjZW50IHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9ybSAqL1xcclxcbi5mb3JtIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAuNXJlbTtcXHJcXG4gIG1heC13aWR0aDogMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5sZWFkZXIge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhZGVyOmZvY3VzIHtcXHJcXG4gIG91dGxpbmUtY29sb3I6IHJnYmEoMCwgMjU1LCAyNTUsIDAuNDQzKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMjU1LCAyNTUsIDAuNDQzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlYWRlcjo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXRpYXJ5LWNvbG9yLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV0aWFyeS1jb2xvcik7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxyXFxuICBtYXJnaW46IDAgMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAxcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdCB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdldERhdGEgZnJvbSAnLi9tb2R1bGVzL2dldERhdGEuanMnO1xuaW1wb3J0IHBvc3REYXRhIGZyb20gJy4vbW9kdWxlcy9wb3N0RGF0YS5qcyc7XG5pbXBvcnQgcmVuZGVyRGF0YSBmcm9tICcuL21vZHVsZXMvcmVuZGVyRGF0YS5qcyc7XG5cbi8vIHNlbmRpbmcgZGF0YSB0byBhbiBhcGlcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcicpO1xuICBjb25zdCBwb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2ludCcpO1xuICBjb25zdCBpdGVtID0ge1xuICAgIHVzZXI6IG5hbWUudmFsdWUsXG4gICAgc2NvcmU6IHBvaW50LnZhbHVlLFxuICB9O1xuICBwb3N0RGF0YSgnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvWmw0ZDdJVmtlbU9UVFZnMklrb24vc2NvcmVzLycsIGl0ZW0pO1xufSk7XG5cbmNvbnN0IHJlZnJlc2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVmcmVzaCcpO1xucmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3Qgc2NvcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlcycpO1xuICBzY29yZXMuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gIHNjb3Jlcy5pbm5lckhUTUwgPSAnJztcbiAgZ2V0RGF0YSgpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHsgcmVuZGVyRGF0YShkYXRhLnJlc3VsdCk7IH0pO1xufSk7IiwiY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvWmw0ZDdJVmtlbU9UVFZnMklrb24vc2NvcmVzLycpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXREYXRhOyIsImNvbnN0IHBvc3REYXRhID0gYXN5bmMgKHVybCwgaXRlbSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGl0ZW0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3REYXRhOyIsImNvbnN0IHJlbmRlckRhdGEgPSAoYXJyKSA9PiB7XG4gIGNvbnN0IHNjb3JlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZXMnKTtcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBzY29yZXMuaW5uZXJIVE1MICs9IGA8bGkgY2xhc3M9XCJpdGVtIGZsZXhcIj48c3Bhbj4ke2l0ZW0udXNlcn08L3NwYW4+XG4gICAgPHNwYW4+JHtpdGVtLnNjb3JlfTwvc3Bhbj48L2xpPmA7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRGF0YTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=