/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/burgerMenu.js":
/*!*******************************!*\
  !*** ./modules/burgerMenu.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
var smoothScrollOfLink = function smoothScrollOfLink(event) {
  var target = event.target.tagName === 'A' ? event.target : event.target.closest('a');

  if (target) {
    var href = target.getAttribute('href'),
        domRect = href !== '#' ? document.querySelector(href).getBoundingClientRect() : 0;
    event.preventDefault();
    scrollTo({
      top: domRect ? domRect.top + window.pageYOffset : 0,
      behavior: "smooth"
    });
  }
},
    burgerMenu = function burgerMenu() {
  var popupDialogMenu = document.querySelector('.popup-dialog-menu');
  window.addEventListener('resize', function () {
    if (popupDialogMenu.style.transform !== 'translate3d(0px, 0px, 0px)') {
      popupDialogMenu.parentElement.append(popupDialogMenu);
      screen.width > 576 ? popupDialogMenu.style.transform = 'translate3d(555px, 0, 0)' : popupDialogMenu.style.transform = 'translate3d(0, -100vh, 0)';
    }
  });
  document.addEventListener('click', function (event) {
    var target = event.target;

    if (target.closest('.menu__icon')) {
      popupDialogMenu.style.transform = 'translate3d(0, 0, 0)';
    } else {
      if (!target.closest('.popup-dialog-menu') || target.matches('.close-menu, .menu-link')) {
        screen.width > 576 ? popupDialogMenu.style.transform = 'translate3d(555px, 0, 0)' : popupDialogMenu.style.transform = 'translate3d(0, -100vh, 0)';

        if (target.matches('.menu-link')) {
          smoothScrollOfLink(event);
        }
      }

      if (target.closest('.button-footer')) {
        smoothScrollOfLink(event);
      }
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);

/***/ }),

/***/ "./modules/headerContactsAccord.js":
/*!*****************************************!*\
  !*** ./modules/headerContactsAccord.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
var headerContactsAccord = function headerContactsAccord() {
  document.querySelector(".header-contacts__arrow").addEventListener("click", function (event) {
    var phoneNumberAccord = document.querySelector(".header-contacts__phone-number-accord");

    if (phoneNumberAccord) {
      phoneNumberAccord.style.position = "relative";
      phoneNumberAccord.firstElementChild.style.opacity = 1;
      event.currentTarget.style.opacity = 0;
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerContactsAccord);

/***/ }),

/***/ "./modules/popupRepairTypes.js":
/*!*************************************!*\
  !*** ./modules/popupRepairTypes.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
var popupRepairTypes = function popupRepairTypes() {
  document.addEventListener('click', function (event) {
    var target = event.target,
        popup = document.querySelector('.popup-repair-types');

    if (target.matches('.link-list>a')) {
      popup.style.visibility = 'visible';
    }

    if (target.matches('.popup-repair-types>.close')) {
      popup.style.visibility = 'hidden';
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupRepairTypes);

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./css/style.css");
/* harmony import */ var _modules_headerContactsAccord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/headerContactsAccord */ "./modules/headerContactsAccord.js");
/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/burgerMenu */ "./modules/burgerMenu.js");
/* harmony import */ var _modules_popupRepairTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popupRepairTypes */ "./modules/popupRepairTypes.js");



 // Phone List Active

(0,_modules_headerContactsAccord__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Burger Menu Active

(0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_2__["default"])(); // Popup Repair Types Active

(0,_modules_popupRepairTypes__WEBPACK_IMPORTED_MODULE_3__["default"])();
}();
/******/ })()
;
//# sourceMappingURL=main.js.map