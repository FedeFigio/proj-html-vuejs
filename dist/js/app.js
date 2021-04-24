/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/js/menu.js");
/* harmony import */ var _courses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses.js */ "./src/js/courses.js");
/* harmony import */ var _social_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social.js */ "./src/js/social.js");
/* harmony import */ var _category_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.js */ "./src/js/category.js");
Vue.config.devtools = true;




var app = new Vue({
  el: "#root",
  data: function data() {
    return {
      menu: _menu_js__WEBPACK_IMPORTED_MODULE_0__.default,
      courses: _courses_js__WEBPACK_IMPORTED_MODULE_1__.default,
      social: _social_js__WEBPACK_IMPORTED_MODULE_2__.default,
      category: _category_js__WEBPACK_IMPORTED_MODULE_3__.default,
      developmentCourses: [],
      filteredCourses: _courses_js__WEBPACK_IMPORTED_MODULE_1__.default,
      categorySet: 0
    };
  },
  methods: {
    setCategory: function setCategory(cat) {
      var _this = this;

      this.categorySet = cat.category;
      console.log(this.categorySet);
      this.filteredCourses = [];
      this.courses.forEach(function (element) {
        if (cat.category == 0) {
          _this.filteredCourses.push(element);
        }

        if (element.category == _this.categorySet) {
          _this.filteredCourses.push(element);
        }
      });
    },
    getStars: function getStars(vote) {
      var starsHTML = '';

      for (var i = 1; i <= 5; i++) {
        if (i <= Math.ceil(vote / 2)) {
          starsHTML += '<img src="dist/img/starfull.svg" alt="">';
        } else {
          starsHTML += '<img src="dist/img/staremptyl.svg" alt="">';
        }
      }

      return starsHTML;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    // push dei corsi development in un array
    this.courses.forEach(function (element) {
      if (element.category == 1) {
        _this2.developmentCourses.push(element);
      }
    });
  }
});

/***/ }),

/***/ "./src/js/category.js":
/*!****************************!*\
  !*** ./src/js/category.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var category = [{
  name: "All Courses",
  category: "0"
}, {
  name: "Developement",
  category: "1"
}, {
  name: "Business",
  category: "2"
}, {
  name: "Design",
  category: "3"
}, {
  name: "IT & Software",
  category: "4"
}, {
  name: "Lifestyle",
  category: "5"
}, {
  name: "Marketing",
  category: "6"
}, {
  name: "Office Productivity",
  category: "7"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (category);

/***/ }),

/***/ "./src/js/courses.js":
/*!***************************!*\
  !*** ./src/js/courses.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var courses = []; // create arrai courses

for (var i = 1; i <= 16; i++) {
  var course = {
    cover: "".concat(i, ".jpg"),
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    vote: getRandomIntInclusive(1, 5),
    popoularity: getRandomIntInclusive(1, 5),
    category: getRandomIntInclusive(1, 7),
    price: getRandomIntInclusive(1, 150),
    discount: getRandomIntInclusive(1, 20)
  };
  courses.push(course);
} // generate random number in range


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (courses);

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var menu = [{
  name: "Home",
  link: ""
}, {
  name: "Pages",
  link: ""
}, {
  name: "Course Formats",
  link: ""
}, {
  name: "Courses",
  link: ""
}, {
  name: "Demos",
  link: ""
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/js/social.js":
/*!**************************!*\
  !*** ./src/js/social.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var social = [{
  name: "Facebook",
  link: "",
  icon: "fab fa-facebook",
  bgColor: "bg-azure"
}, {
  name: "Twitter",
  link: "",
  icon: "fab fa-twitter",
  bgColor: "bg-halfBakedLight"
}, {
  name: "Instagram",
  link: "",
  icon: "fab fa-instagram",
  bgColor: "bg-azure"
}, {
  name: "Linkedin",
  link: "",
  icon: "fab fa-linkedin",
  bgColor: "bg-bostonBlue"
}, {
  name: "Google+",
  link: "",
  icon: "fab fa-google-plus",
  bgColor: "bg-vesuvius"
}, {
  name: "YouTube",
  link: "",
  icon: "fab fa-youtube",
  bgColor: "bg-azure"
}, {
  name: "Pinterest",
  link: "",
  icon: "fab fa-pinterest",
  bgColor: "bg-amaranth"
}, {
  name: "Dribble",
  link: "",
  icon: "fab fa-dribbble",
  bgColor: "bg-sundown"
}, {
  name: "Skype",
  link: "",
  icon: "fab fa-skype",
  bgColor: "bg-halfBakedLight"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (social);

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;