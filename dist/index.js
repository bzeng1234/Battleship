/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n}\n\nheader {\n    height: 100px;\n    background-color: #2563eb;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 35px;\n}\n\n.header-title {\n    font-size: 40px;\n    color: white;\n}\n\n.game-status {\n    text-align: center;\n}\n\n.title {\n    display: flex;\n    justify-content: space-around;\n}\n\n.gameboard {\n    display: flex;\n    justify-content: space-around;\n}\n\n.player-gameboard,\n.ai-gameboard {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    gap: 0;\n}\n\n.cell {\n    border: 1px solid black;\n}\n\n.cell:hover {\n    cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;;IAEI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;IACpC,MAAM;AACV;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n}\n\nheader {\n    height: 100px;\n    background-color: #2563eb;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 35px;\n}\n\n.header-title {\n    font-size: 40px;\n    color: white;\n}\n\n.game-status {\n    text-align: center;\n}\n\n.title {\n    display: flex;\n    justify-content: space-around;\n}\n\n.gameboard {\n    display: flex;\n    justify-content: space-around;\n}\n\n.player-gameboard,\n.ai-gameboard {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    gap: 0;\n}\n\n.cell {\n    border: 1px solid black;\n}\n\n.cell:hover {\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

"use strict";


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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let ship = __webpack_require__(/*! ./ship */ "./src/factories/ship.js");

function gameboard() {
    let board = Array(10).fill().map(() => Array(10).fill(0));
    let ships = [];
    let missedShot = true;

    let addShip = (ship,coord,direction) => {
        if(direction === 'horizontal') {
            for(let i = coord[1]; i < ship.length + coord[1];i++) {
                board[coord[0]][i] = ship.id;
            }
        } else if (direction === 'vertical') {
            for(let i = coord[0];i < ship.length + coord[0];i++) {
                board[i][coord[1]] = ship.id;
            }
        }
        ships.push(ship);
    };

    let receiveAttack = (row,column) => {
        if(board[row][column] !== 0 && board[row][column] !== 'X' && board[row][column] !== '-') {
            let id = board[row][column];
            ships[ships.length-id].numHits++;
            missedShot = false;
        } else {
            missedShot = true;
        }
        board[row][column] = (missedShot === false) ? 'X' : '-';
        return missedShot;
    }

    let areAllShipsSunk = () => {
        for(let i = 0; i < ship.length;i++) {
            if(ships[i].numHits !== ships[i].length)
                return false;
        }
        return true;
    };

    let autoPlaceShips = () => {
        let shipSize = 5;
        while(shipSize > 0) {
            let directionValue = Math.floor(Math.random()*2);
            let row = Math.floor(Math.random() * board.length);
            let column = Math.floor(Math.random() * board.length);

            if(directionValue === 1) {
                //check if there adqueate space for placement
                if(board.length - row >= shipSize && checkIfOccupied(row, column, shipSize, directionValue)) {
                    //we place ship on board
                    let currShip = ship(shipSize, shipSize);
                    addShip(currShip,[row,column], "vertical");
                    shipSize--;
                }
            } else if(directionValue === 0) {
                if(board[0].length - column >= shipSize && checkIfOccupied(row, column, shipSize, directionValue)) {
                    //we place ship on board
                    let currShip = ship(shipSize, shipSize);
                    addShip(currShip,[row,column], "horizontal");
                    shipSize--;
                }
            }
        }
    };
    
    let checkIfOccupied = (row, column, shipSize, directionValue) => {
        if(directionValue === 1) {
            for(let i = row;i < shipSize + row;i++) {
                if(board[i][column] !== 0)
                return false;
            }
            return true;
        } else {
            for(let i = column;i < shipSize + column;i++) {
                //check if all the spaces are not occupied by a ship already
                //if it is, return 0 and loop again
                if(board[row][i] !== 0)
                    return false;
            }
            return true;
        }
    }

    return {board,addShip,receiveAttack,areAllShipsSunk,autoPlaceShips}
}

module.exports = gameboard;

/***/ }),

/***/ "./src/factories/main.js":
/*!*******************************!*\
  !*** ./src/factories/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ main)
/* harmony export */ });
let gameboard = __webpack_require__(/*! ./gameboard */ "./src/factories/gameboard.js");
let ship = __webpack_require__(/*! ./ship */ "./src/factories/ship.js");
let player = __webpack_require__(/*! ./player */ "./src/factories/player.js");

function main() {
    let players = [];
    let boards = [];

    let initialize = (playerName) => {
        players.push(player(playerName));
        boards.push(gameboard());
        players.push(player("AI"));
        boards.push(gameboard());
        boards[1].autoPlaceShips();   
    }

    return {players, boards, initialize};
}

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let gameboard = __webpack_require__(/*! ./gameboard */ "./src/factories/gameboard.js");

function player(name) {
    let pastMoves = [];

    let makeRandomMove = () => {
        let row = Math.floor(Math.random() * 10);
        let column = Math.floor(Math.random() * 10);

        //while(noRepeat(row, column) !== true) {
        //    makeRandomMove();
        //}
        //pastMoves.push([row,column]);
        return [row,column];
    }

    let makeMove = (row, column) => {
        if(noRepeat(row, column) === true) {
            pastMoves.push([row,column]);
            return true;
        } else
        return false;
    }

    let noRepeat = (row, column) => {
        for(let i = 0; i < pastMoves.length; i++) {
            if(pastMoves[i][0] == row && pastMoves[i][1] == column) {
                return false;
            } else {
                return true;
            }
        }
        return true;
    }

    return {name, pastMoves,makeMove, makeRandomMove};
}

module.exports = player;

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((module) => {

function ship(id,length) {
    let numHits = 0;
    let sunk = false;
    let hit = () => numHits++;
    let isSunk = () => (numHits === length) ? true : false;
    return {id,length,numHits,hit,isSunk};
}

module.exports = ship;

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factories_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/main */ "./src/factories/main.js");
/* harmony import */ var _factories_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/ship */ "./src/factories/ship.js");
/* harmony import */ var _factories_ship__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_factories_ship__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




let game = (0,_factories_main__WEBPACK_IMPORTED_MODULE_0__["default"])();
game.initialize("Brandon");

let directionValue = "vertical";
let shipSize = [5,4,3,2,1];

let directionBtn = document.querySelector('.direction');
directionBtn.addEventListener('click', () => {
    if(directionBtn.value === "vertical") {
        directionBtn.value = "horizontal";
        directionBtn.textContent = "Horizontal";
        directionValue = directionBtn.value;
    } else {
        directionBtn.value = "vertical";
        directionBtn.textContent = "Vertical";
        directionValue = directionBtn.value;
    }
});

let gameStatusElem = document.querySelector('.game-status');

let cellBtnList = document.querySelectorAll('.player-gameboard > .cell');
    cellBtnList.forEach(cell => {
        cell.addEventListener('mouseover', cover);
        cell.addEventListener('mouseout', uncover);
        cell.addEventListener('click', addship);
    });
let oppCellBtnList = document.querySelectorAll('.ai-gameboard > .cell');

function cover(e) {
    let column = Number(e.target.attributes[1].value);
    let row = Number(e.target.attributes[2].value);

    let colList = document.querySelectorAll(`.player-gameboard > .cell[data-x=\"${column}\"]`);
    let rowList = document.querySelectorAll(`.player-gameboard > .cell[data-y=\"${row}\"]`);

    if(directionValue === "vertical") {
        if(rowList.length - row >= shipSize[0]) {
            let shipsize = shipSize[0];
            for(let i = row;i < shipsize + row;i++) {
                if(colList[i].getAttribute('id') === 'ship')
                    return
            }
            for(let i = row;i < shipsize + row;i++) {
                if(colList[i].getAttribute('id') !== 'ship')
                    colList[i].style.background = "blue";
            }
        } else {
            for(let i = row;i < colList.length;i++) {
                if(colList[i].getAttribute('id') !== 'ship')
                    colList[i].style.background = "red";
            }
        }
    } else if(directionValue === "horizontal") {
        if(colList.length - column >= shipSize[0]) {
            let shipsize = shipSize[0];
            for(let i = column;i < shipsize + column;i++) {
                if(rowList[i].getAttribute('id') === 'ship')
                    return
            }
            for(let i = column;i < shipsize + column;i++) {
                if(rowList[i].getAttribute('id') !== 'ship')
                    rowList[i].style.background = "blue";
            }
        } else {
            for(let i = column;i < rowList.length;i++) {
                if(rowList[i].getAttribute('id') !== 'ship')
                rowList[i].style.background = "red";
            }
        }
    }
}

function uncover(e) {
    let column = Number(e.target.attributes[1].value);
    let row = Number(e.target.attributes[2].value);

    let colList = document.querySelectorAll(`.player-gameboard > .cell[data-x=\"${column}\"]`);
    let rowList = document.querySelectorAll(`.player-gameboard > .cell[data-y=\"${row}\"]`);

    if(directionValue === "vertical") {
        for(let i = row;i < colList.length;i++) {
            if(colList[i].getAttribute('id') !== 'ship')
                colList[i].style.background = "white";
        }
    } else if(directionValue === "horizontal") {
        for(let i = column;i < rowList.length;i++) {
            if(rowList[i].getAttribute('id') !== 'ship')
                rowList[i].style.background = "white";
        }
    }
}

function addship(e) {
    let column = Number(e.target.attributes[1].value);
    let row = Number(e.target.attributes[2].value);

    let colList = document.querySelectorAll(`.player-gameboard > .cell[data-x=\"${column}\"]`);
    let rowList = document.querySelectorAll(`.player-gameboard > .cell[data-y=\"${row}\"]`);

    if(directionValue === "vertical") {
        if(rowList.length - row >= shipSize[0]) {
            for(let i = row;i < shipSize[0] + row;i++) {
                if(colList[i].getAttribute('id') === 'ship')
                    return
            }
            let shipsize = shipSize.shift();
            for(let i = row;i < row + shipsize;i++) {
                colList[i].setAttribute('id', 'ship');
                colList[i].style.background = "green";
            }
            let currShip = _factories_ship__WEBPACK_IMPORTED_MODULE_1___default()(shipsize, shipsize);
            game.boards[0].addShip(currShip,[row,column], directionValue);
        }
    } else if(directionValue === "horizontal") {
        if(colList.length - column >= shipSize[0]) {
            for(let i = column;i < shipSize[0] + column;i++) {
                if(rowList[i].getAttribute('id') === 'ship')
                    return
            }
            let shipsize = shipSize.shift();
            for(let i = column;i < column + shipsize;i++) {
                rowList[i].setAttribute('id', 'ship');
                rowList[i].style.background = "green";
            }
            let currShip = _factories_ship__WEBPACK_IMPORTED_MODULE_1___default()(shipsize, shipsize);
            game.boards[0].addShip(currShip,[row,column], directionValue);
        }
    }

    if(shipSize.length === 0) {
        console.log(game.boards[0].board);
        console.log(game.boards[1].board);
        cellBtnList.forEach(cell => {
            cell.removeEventListener('mouseover', cover);
            cell.removeEventListener('mouseout', uncover);
            cell.removeEventListener('click', addship);
        });
        gameStatusElem.textContent = "Play Game!";
        oppCellBtnList.forEach(cell => {
            cell.addEventListener('click', makeMove);
        })
    }
}

function makeMove(e) {
    let column = Number(e.target.attributes[1].value);
    let row = Number(e.target.attributes[2].value);

    if(game.players[0].makeMove(row, column)) {
        //we hit
        if(game.boards[1].receiveAttack(row, column) === false) {
            e.target.style.background = "red";
            gameStatusElem.textContent = "Hit!"
        } else {
            e.target.style.background  = "#71717a";
            gameStatusElem.textContent = "Missed!"
        }
        
        if(game.boards[1].areAllShipsSunk() === true) {
            gameStatusElem.textContent = "You Won!";
        }

        let aiMove = game.players[1].makeRandomMove();
        let cellElem = document.querySelector(`.player-gameboard > .cell[data-x=\"${aiMove[1]}\"][data-y=\"${aiMove[0]}\"`)
        if(game.boards[0].receiveAttack(aiMove[0],aiMove[1]) === false) {
            cellElem.style.background = "red";
        } else {
            cellElem.style.background = "#71717a";
        }
        if(game.boards[0].areAllShipsSunk() === true) {
            gameStatusElem.textContent = "AI Won!";
        }
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9GQUFvRixVQUFVLGVBQWUsVUFBVTtBQUN2SDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL21haW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU2M2ViO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZ2FtZS1zdGF0dXMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5wbGF5ZXItZ2FtZWJvYXJkLFxcbi5haS1nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gICAgZ2FwOiAwO1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG9DQUFvQztJQUNwQyxNQUFNO0FBQ1Y7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTYzZWI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5nYW1lLXN0YXR1cyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnBsYXllci1nYW1lYm9hcmQsXFxuLmFpLWdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgICBnYXA6IDA7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jZWxsOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgc2hpcCA9IHJlcXVpcmUoJy4vc2hpcCcpO1xuXG5mdW5jdGlvbiBnYW1lYm9hcmQoKSB7XG4gICAgbGV0IGJvYXJkID0gQXJyYXkoMTApLmZpbGwoKS5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwoMCkpO1xuICAgIGxldCBzaGlwcyA9IFtdO1xuICAgIGxldCBtaXNzZWRTaG90ID0gdHJ1ZTtcblxuICAgIGxldCBhZGRTaGlwID0gKHNoaXAsY29vcmQsZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSBjb29yZFsxXTsgaSA8IHNoaXAubGVuZ3RoICsgY29vcmRbMV07aSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbY29vcmRbMF1dW2ldID0gc2hpcC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IGNvb3JkWzBdO2kgPCBzaGlwLmxlbmd0aCArIGNvb3JkWzBdO2krKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW2ldW2Nvb3JkWzFdXSA9IHNoaXAuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICB9O1xuXG4gICAgbGV0IHJlY2VpdmVBdHRhY2sgPSAocm93LGNvbHVtbikgPT4ge1xuICAgICAgICBpZihib2FyZFtyb3ddW2NvbHVtbl0gIT09IDAgJiYgYm9hcmRbcm93XVtjb2x1bW5dICE9PSAnWCcgJiYgYm9hcmRbcm93XVtjb2x1bW5dICE9PSAnLScpIHtcbiAgICAgICAgICAgIGxldCBpZCA9IGJvYXJkW3Jvd11bY29sdW1uXTtcbiAgICAgICAgICAgIHNoaXBzW3NoaXBzLmxlbmd0aC1pZF0ubnVtSGl0cysrO1xuICAgICAgICAgICAgbWlzc2VkU2hvdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWlzc2VkU2hvdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYm9hcmRbcm93XVtjb2x1bW5dID0gKG1pc3NlZFNob3QgPT09IGZhbHNlKSA/ICdYJyA6ICctJztcbiAgICAgICAgcmV0dXJuIG1pc3NlZFNob3Q7XG4gICAgfVxuXG4gICAgbGV0IGFyZUFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgaWYoc2hpcHNbaV0ubnVtSGl0cyAhPT0gc2hpcHNbaV0ubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgbGV0IGF1dG9QbGFjZVNoaXBzID0gKCkgPT4ge1xuICAgICAgICBsZXQgc2hpcFNpemUgPSA1O1xuICAgICAgICB3aGlsZShzaGlwU2l6ZSA+IDApIHtcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25WYWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKTtcbiAgICAgICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIGlmKGRpcmVjdGlvblZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgLy9jaGVjayBpZiB0aGVyZSBhZHF1ZWF0ZSBzcGFjZSBmb3IgcGxhY2VtZW50XG4gICAgICAgICAgICAgICAgaWYoYm9hcmQubGVuZ3RoIC0gcm93ID49IHNoaXBTaXplICYmIGNoZWNrSWZPY2N1cGllZChyb3csIGNvbHVtbiwgc2hpcFNpemUsIGRpcmVjdGlvblZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAvL3dlIHBsYWNlIHNoaXAgb24gYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJTaGlwID0gc2hpcChzaGlwU2l6ZSwgc2hpcFNpemUpO1xuICAgICAgICAgICAgICAgICAgICBhZGRTaGlwKGN1cnJTaGlwLFtyb3csY29sdW1uXSwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcFNpemUtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYoZGlyZWN0aW9uVmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZihib2FyZFswXS5sZW5ndGggLSBjb2x1bW4gPj0gc2hpcFNpemUgJiYgY2hlY2tJZk9jY3VwaWVkKHJvdywgY29sdW1uLCBzaGlwU2l6ZSwgZGlyZWN0aW9uVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vd2UgcGxhY2Ugc2hpcCBvbiBib2FyZFxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyclNoaXAgPSBzaGlwKHNoaXBTaXplLCBzaGlwU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGFkZFNoaXAoY3VyclNoaXAsW3Jvdyxjb2x1bW5dLCBcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBTaXplLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBsZXQgY2hlY2tJZk9jY3VwaWVkID0gKHJvdywgY29sdW1uLCBzaGlwU2l6ZSwgZGlyZWN0aW9uVmFsdWUpID0+IHtcbiAgICAgICAgaWYoZGlyZWN0aW9uVmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHJvdztpIDwgc2hpcFNpemUgKyByb3c7aSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoYm9hcmRbaV1bY29sdW1uXSAhPT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IGNvbHVtbjtpIDwgc2hpcFNpemUgKyBjb2x1bW47aSsrKSB7XG4gICAgICAgICAgICAgICAgLy9jaGVjayBpZiBhbGwgdGhlIHNwYWNlcyBhcmUgbm90IG9jY3VwaWVkIGJ5IGEgc2hpcCBhbHJlYWR5XG4gICAgICAgICAgICAgICAgLy9pZiBpdCBpcywgcmV0dXJuIDAgYW5kIGxvb3AgYWdhaW5cbiAgICAgICAgICAgICAgICBpZihib2FyZFtyb3ddW2ldICE9PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7Ym9hcmQsYWRkU2hpcCxyZWNlaXZlQXR0YWNrLGFyZUFsbFNoaXBzU3VuayxhdXRvUGxhY2VTaGlwc31cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnYW1lYm9hcmQ7IiwibGV0IGdhbWVib2FyZCA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5sZXQgc2hpcCA9IHJlcXVpcmUoJy4vc2hpcCcpO1xubGV0IHBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oKSB7XG4gICAgbGV0IHBsYXllcnMgPSBbXTtcbiAgICBsZXQgYm9hcmRzID0gW107XG5cbiAgICBsZXQgaW5pdGlhbGl6ZSA9IChwbGF5ZXJOYW1lKSA9PiB7XG4gICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXIocGxheWVyTmFtZSkpO1xuICAgICAgICBib2FyZHMucHVzaChnYW1lYm9hcmQoKSk7XG4gICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXIoXCJBSVwiKSk7XG4gICAgICAgIGJvYXJkcy5wdXNoKGdhbWVib2FyZCgpKTtcbiAgICAgICAgYm9hcmRzWzFdLmF1dG9QbGFjZVNoaXBzKCk7ICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHtwbGF5ZXJzLCBib2FyZHMsIGluaXRpYWxpemV9O1xufSIsImxldCBnYW1lYm9hcmQgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xuXG5mdW5jdGlvbiBwbGF5ZXIobmFtZSkge1xuICAgIGxldCBwYXN0TW92ZXMgPSBbXTtcblxuICAgIGxldCBtYWtlUmFuZG9tTW92ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgbGV0IGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgICAgICAvL3doaWxlKG5vUmVwZWF0KHJvdywgY29sdW1uKSAhPT0gdHJ1ZSkge1xuICAgICAgICAvLyAgICBtYWtlUmFuZG9tTW92ZSgpO1xuICAgICAgICAvL31cbiAgICAgICAgLy9wYXN0TW92ZXMucHVzaChbcm93LGNvbHVtbl0pO1xuICAgICAgICByZXR1cm4gW3Jvdyxjb2x1bW5dO1xuICAgIH1cblxuICAgIGxldCBtYWtlTW92ZSA9IChyb3csIGNvbHVtbikgPT4ge1xuICAgICAgICBpZihub1JlcGVhdChyb3csIGNvbHVtbikgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBhc3RNb3Zlcy5wdXNoKFtyb3csY29sdW1uXSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgbm9SZXBlYXQgPSAocm93LCBjb2x1bW4pID0+IHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBhc3RNb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYocGFzdE1vdmVzW2ldWzBdID09IHJvdyAmJiBwYXN0TW92ZXNbaV1bMV0gPT0gY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge25hbWUsIHBhc3RNb3ZlcyxtYWtlTW92ZSwgbWFrZVJhbmRvbU1vdmV9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllcjsiLCJmdW5jdGlvbiBzaGlwKGlkLGxlbmd0aCkge1xuICAgIGxldCBudW1IaXRzID0gMDtcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuICAgIGxldCBoaXQgPSAoKSA9PiBudW1IaXRzKys7XG4gICAgbGV0IGlzU3VuayA9ICgpID0+IChudW1IaXRzID09PSBsZW5ndGgpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHJldHVybiB7aWQsbGVuZ3RoLG51bUhpdHMsaGl0LGlzU3Vua307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hpcDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbWFpbiBmcm9tICcuL2ZhY3Rvcmllcy9tYWluJztcbmltcG9ydCBzaGlwIGZyb20gJy4vZmFjdG9yaWVzL3NoaXAnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5cbmxldCBnYW1lID0gbWFpbigpO1xuZ2FtZS5pbml0aWFsaXplKFwiQnJhbmRvblwiKTtcblxubGV0IGRpcmVjdGlvblZhbHVlID0gXCJ2ZXJ0aWNhbFwiO1xubGV0IHNoaXBTaXplID0gWzUsNCwzLDIsMV07XG5cbmxldCBkaXJlY3Rpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlyZWN0aW9uJyk7XG5kaXJlY3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYoZGlyZWN0aW9uQnRuLnZhbHVlID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgZGlyZWN0aW9uQnRuLnZhbHVlID0gXCJob3Jpem9udGFsXCI7XG4gICAgICAgIGRpcmVjdGlvbkJ0bi50ZXh0Q29udGVudCA9IFwiSG9yaXpvbnRhbFwiO1xuICAgICAgICBkaXJlY3Rpb25WYWx1ZSA9IGRpcmVjdGlvbkJ0bi52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaXJlY3Rpb25CdG4udmFsdWUgPSBcInZlcnRpY2FsXCI7XG4gICAgICAgIGRpcmVjdGlvbkJ0bi50ZXh0Q29udGVudCA9IFwiVmVydGljYWxcIjtcbiAgICAgICAgZGlyZWN0aW9uVmFsdWUgPSBkaXJlY3Rpb25CdG4udmFsdWU7XG4gICAgfVxufSk7XG5cbmxldCBnYW1lU3RhdHVzRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXR1cycpO1xuXG5sZXQgY2VsbEJ0bkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLWdhbWVib2FyZCA+IC5jZWxsJyk7XG4gICAgY2VsbEJ0bkxpc3QuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBjb3Zlcik7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB1bmNvdmVyKTtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZHNoaXApO1xuICAgIH0pO1xubGV0IG9wcENlbGxCdG5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFpLWdhbWVib2FyZCA+IC5jZWxsJyk7XG5cbmZ1bmN0aW9uIGNvdmVyKGUpIHtcbiAgICBsZXQgY29sdW1uID0gTnVtYmVyKGUudGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWUpO1xuICAgIGxldCByb3cgPSBOdW1iZXIoZS50YXJnZXQuYXR0cmlidXRlc1syXS52YWx1ZSk7XG5cbiAgICBsZXQgY29sTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wbGF5ZXItZ2FtZWJvYXJkID4gLmNlbGxbZGF0YS14PVxcXCIke2NvbHVtbn1cXFwiXWApO1xuICAgIGxldCByb3dMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnBsYXllci1nYW1lYm9hcmQgPiAuY2VsbFtkYXRhLXk9XFxcIiR7cm93fVxcXCJdYCk7XG5cbiAgICBpZihkaXJlY3Rpb25WYWx1ZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGlmKHJvd0xpc3QubGVuZ3RoIC0gcm93ID49IHNoaXBTaXplWzBdKSB7XG4gICAgICAgICAgICBsZXQgc2hpcHNpemUgPSBzaGlwU2l6ZVswXTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHJvdztpIDwgc2hpcHNpemUgKyByb3c7aSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoY29sTGlzdFtpXS5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdzaGlwJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IobGV0IGkgPSByb3c7aSA8IHNoaXBzaXplICsgcm93O2krKykge1xuICAgICAgICAgICAgICAgIGlmKGNvbExpc3RbaV0uZ2V0QXR0cmlidXRlKCdpZCcpICE9PSAnc2hpcCcpXG4gICAgICAgICAgICAgICAgICAgIGNvbExpc3RbaV0uc3R5bGUuYmFja2dyb3VuZCA9IFwiYmx1ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gcm93O2kgPCBjb2xMaXN0Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgICAgICBpZihjb2xMaXN0W2ldLmdldEF0dHJpYnV0ZSgnaWQnKSAhPT0gJ3NoaXAnKVxuICAgICAgICAgICAgICAgICAgICBjb2xMaXN0W2ldLnN0eWxlLmJhY2tncm91bmQgPSBcInJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmKGRpcmVjdGlvblZhbHVlID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBpZihjb2xMaXN0Lmxlbmd0aCAtIGNvbHVtbiA+PSBzaGlwU2l6ZVswXSkge1xuICAgICAgICAgICAgbGV0IHNoaXBzaXplID0gc2hpcFNpemVbMF07XG4gICAgICAgICAgICBmb3IobGV0IGkgPSBjb2x1bW47aSA8IHNoaXBzaXplICsgY29sdW1uO2krKykge1xuICAgICAgICAgICAgICAgIGlmKHJvd0xpc3RbaV0uZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnc2hpcCcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yKGxldCBpID0gY29sdW1uO2kgPCBzaGlwc2l6ZSArIGNvbHVtbjtpKyspIHtcbiAgICAgICAgICAgICAgICBpZihyb3dMaXN0W2ldLmdldEF0dHJpYnV0ZSgnaWQnKSAhPT0gJ3NoaXAnKVxuICAgICAgICAgICAgICAgICAgICByb3dMaXN0W2ldLnN0eWxlLmJhY2tncm91bmQgPSBcImJsdWVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IGNvbHVtbjtpIDwgcm93TGlzdC5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICAgICAgaWYocm93TGlzdFtpXS5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09ICdzaGlwJylcbiAgICAgICAgICAgICAgICByb3dMaXN0W2ldLnN0eWxlLmJhY2tncm91bmQgPSBcInJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1bmNvdmVyKGUpIHtcbiAgICBsZXQgY29sdW1uID0gTnVtYmVyKGUudGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWUpO1xuICAgIGxldCByb3cgPSBOdW1iZXIoZS50YXJnZXQuYXR0cmlidXRlc1syXS52YWx1ZSk7XG5cbiAgICBsZXQgY29sTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wbGF5ZXItZ2FtZWJvYXJkID4gLmNlbGxbZGF0YS14PVxcXCIke2NvbHVtbn1cXFwiXWApO1xuICAgIGxldCByb3dMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnBsYXllci1nYW1lYm9hcmQgPiAuY2VsbFtkYXRhLXk9XFxcIiR7cm93fVxcXCJdYCk7XG5cbiAgICBpZihkaXJlY3Rpb25WYWx1ZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IHJvdztpIDwgY29sTGlzdC5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZihjb2xMaXN0W2ldLmdldEF0dHJpYnV0ZSgnaWQnKSAhPT0gJ3NoaXAnKVxuICAgICAgICAgICAgICAgIGNvbExpc3RbaV0uc3R5bGUuYmFja2dyb3VuZCA9IFwid2hpdGVcIjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZihkaXJlY3Rpb25WYWx1ZSA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgZm9yKGxldCBpID0gY29sdW1uO2kgPCByb3dMaXN0Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGlmKHJvd0xpc3RbaV0uZ2V0QXR0cmlidXRlKCdpZCcpICE9PSAnc2hpcCcpXG4gICAgICAgICAgICAgICAgcm93TGlzdFtpXS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ3aGl0ZVwiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRzaGlwKGUpIHtcbiAgICBsZXQgY29sdW1uID0gTnVtYmVyKGUudGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWUpO1xuICAgIGxldCByb3cgPSBOdW1iZXIoZS50YXJnZXQuYXR0cmlidXRlc1syXS52YWx1ZSk7XG5cbiAgICBsZXQgY29sTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wbGF5ZXItZ2FtZWJvYXJkID4gLmNlbGxbZGF0YS14PVxcXCIke2NvbHVtbn1cXFwiXWApO1xuICAgIGxldCByb3dMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnBsYXllci1nYW1lYm9hcmQgPiAuY2VsbFtkYXRhLXk9XFxcIiR7cm93fVxcXCJdYCk7XG5cbiAgICBpZihkaXJlY3Rpb25WYWx1ZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGlmKHJvd0xpc3QubGVuZ3RoIC0gcm93ID49IHNoaXBTaXplWzBdKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSByb3c7aSA8IHNoaXBTaXplWzBdICsgcm93O2krKykge1xuICAgICAgICAgICAgICAgIGlmKGNvbExpc3RbaV0uZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnc2hpcCcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNoaXBzaXplID0gc2hpcFNpemUuc2hpZnQoKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHJvdztpIDwgcm93ICsgc2hpcHNpemU7aSsrKSB7XG4gICAgICAgICAgICAgICAgY29sTGlzdFtpXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXAnKTtcbiAgICAgICAgICAgICAgICBjb2xMaXN0W2ldLnN0eWxlLmJhY2tncm91bmQgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY3VyclNoaXAgPSBzaGlwKHNoaXBzaXplLCBzaGlwc2l6ZSk7XG4gICAgICAgICAgICBnYW1lLmJvYXJkc1swXS5hZGRTaGlwKGN1cnJTaGlwLFtyb3csY29sdW1uXSwgZGlyZWN0aW9uVmFsdWUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmKGRpcmVjdGlvblZhbHVlID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBpZihjb2xMaXN0Lmxlbmd0aCAtIGNvbHVtbiA+PSBzaGlwU2l6ZVswXSkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gY29sdW1uO2kgPCBzaGlwU2l6ZVswXSArIGNvbHVtbjtpKyspIHtcbiAgICAgICAgICAgICAgICBpZihyb3dMaXN0W2ldLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ3NoaXAnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzaGlwc2l6ZSA9IHNoaXBTaXplLnNoaWZ0KCk7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSBjb2x1bW47aSA8IGNvbHVtbiArIHNoaXBzaXplO2krKykge1xuICAgICAgICAgICAgICAgIHJvd0xpc3RbaV0uc2V0QXR0cmlidXRlKCdpZCcsICdzaGlwJyk7XG4gICAgICAgICAgICAgICAgcm93TGlzdFtpXS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJncmVlblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGN1cnJTaGlwID0gc2hpcChzaGlwc2l6ZSwgc2hpcHNpemUpO1xuICAgICAgICAgICAgZ2FtZS5ib2FyZHNbMF0uYWRkU2hpcChjdXJyU2hpcCxbcm93LGNvbHVtbl0sIGRpcmVjdGlvblZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKHNoaXBTaXplLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhnYW1lLmJvYXJkc1swXS5ib2FyZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGdhbWUuYm9hcmRzWzFdLmJvYXJkKTtcbiAgICAgICAgY2VsbEJ0bkxpc3QuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgY292ZXIpO1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHVuY292ZXIpO1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZHNoaXApO1xuICAgICAgICB9KTtcbiAgICAgICAgZ2FtZVN0YXR1c0VsZW0udGV4dENvbnRlbnQgPSBcIlBsYXkgR2FtZSFcIjtcbiAgICAgICAgb3BwQ2VsbEJ0bkxpc3QuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlTW92ZSk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlTW92ZShlKSB7XG4gICAgbGV0IGNvbHVtbiA9IE51bWJlcihlLnRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlKTtcbiAgICBsZXQgcm93ID0gTnVtYmVyKGUudGFyZ2V0LmF0dHJpYnV0ZXNbMl0udmFsdWUpO1xuXG4gICAgaWYoZ2FtZS5wbGF5ZXJzWzBdLm1ha2VNb3ZlKHJvdywgY29sdW1uKSkge1xuICAgICAgICAvL3dlIGhpdFxuICAgICAgICBpZihnYW1lLmJvYXJkc1sxXS5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcInJlZFwiO1xuICAgICAgICAgICAgZ2FtZVN0YXR1c0VsZW0udGV4dENvbnRlbnQgPSBcIkhpdCFcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCAgPSBcIiM3MTcxN2FcIjtcbiAgICAgICAgICAgIGdhbWVTdGF0dXNFbGVtLnRleHRDb250ZW50ID0gXCJNaXNzZWQhXCJcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoZ2FtZS5ib2FyZHNbMV0uYXJlQWxsU2hpcHNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGdhbWVTdGF0dXNFbGVtLnRleHRDb250ZW50ID0gXCJZb3UgV29uIVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFpTW92ZSA9IGdhbWUucGxheWVyc1sxXS5tYWtlUmFuZG9tTW92ZSgpO1xuICAgICAgICBsZXQgY2VsbEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyLWdhbWVib2FyZCA+IC5jZWxsW2RhdGEteD1cXFwiJHthaU1vdmVbMV19XFxcIl1bZGF0YS15PVxcXCIke2FpTW92ZVswXX1cXFwiYClcbiAgICAgICAgaWYoZ2FtZS5ib2FyZHNbMF0ucmVjZWl2ZUF0dGFjayhhaU1vdmVbMF0sYWlNb3ZlWzFdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNlbGxFbGVtLnN0eWxlLmJhY2tncm91bmQgPSBcInJlZFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2VsbEVsZW0uc3R5bGUuYmFja2dyb3VuZCA9IFwiIzcxNzE3YVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmKGdhbWUuYm9hcmRzWzBdLmFyZUFsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBnYW1lU3RhdHVzRWxlbS50ZXh0Q29udGVudCA9IFwiQUkgV29uIVwiO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==