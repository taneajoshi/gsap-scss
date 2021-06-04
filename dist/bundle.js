/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/app.scss */ \"./src/sass/app.scss\");\n // <============= HEADER Tweens ===========>\n// color change on scroll\n\n$(function () {\n  $(window).on(\"scroll\", function () {\n    if ($(window).scrollTop() > 50) {\n      $(\"header\").addClass(\"header-active\");\n      $(\".menu-burger-icon\").addClass('after');\n    } else {\n      //remove the background property so it comes transparent again (defined in your css)\n      $(\"header\").removeClass(\"header-active\");\n      $(\".menu-burger-icon\").removeClass('after');\n    }\n  });\n}); // Tween for hamberger icon\n\n$('.menu-burger-icon').hover(function () {\n  gsap.to('.menu-burger-icon--line:first-child', 0.2, {\n    x: -10\n  });\n  gsap.to('.menu-burger-icon--line:last-child', 0.2, {\n    x: 10\n  });\n}, function () {\n  gsap.to('.menu-burger-icon--line:first-child', 0.2, {\n    x: 0\n  });\n  gsap.to('.menu-burger-icon--line:last-child', 0.2, {\n    x: 0\n  });\n}); // MENU Timeline\n\nvar tlMenu = gsap.timeline({\n  paused: true\n});\ntlMenu.to('.banner-section h1, .banner-section h2', {\n  autoAlpha: 0\n}).to('.banner-section--svg', 1, {\n  height: 2200,\n  ease: Linear.easeOut\n}).to('nav', {\n  autoAlpha: 1\n}).staggerFromTo('nav li', 0.5, {\n  y: 100,\n  opacity: 0\n}, {\n  y: 0,\n  opacity: 1\n}, 0.1);\nvar tlafterMenu = gsap.timeline({\n  paused: true\n});\ntlafterMenu.to('nav', {\n  autoAlpha: 1\n}).staggerFromTo('nav li', 0.5, {\n  y: 100,\n  opacity: 0\n}, {\n  y: 0,\n  opacity: 1\n}, 0.1);\n$(function () {\n  $('.menu-burger-icon').click(function () {\n    if ($(this).hasClass('after')) {\n      console.log('Yes');\n      $('.menu-burger-icon').click(function () {\n        tlafterMenu.play(0);\n        $('body').addClass('no-scroll');\n      });\n    } else {\n      console.log(\"No\");\n      $('.menu-burger-icon').click(function () {\n        tlMenu.play(0);\n        $('body').addClass('no-scroll');\n      });\n    }\n  });\n});\n$('.menu-close-btn').click(function () {\n  tlMenu.reverse(0);\n  $('body').removeClass('no-scroll');\n}); // <===============  BANNER TWEENS ==============>\n\ngsap.fromTo('.banner-section .container h1', 0.6, {\n  y: 400,\n  opacity: 0\n}, {\n  y: 0,\n  opacity: 1,\n  delay: 0.7\n});\ngsap.fromTo('.banner-section .container h2', 1.2, {\n  y: 400,\n  opacity: 0\n}, {\n  y: 0,\n  opacity: 1,\n  delay: 1.3,\n  ease: Back.easeOut\n}); // <============== ABOUT SECTION ====================>\n\ngsap.from('.about-section--box', 0.6, {\n  scrollTrigger: {\n    trigger: '.about-section',\n    toggleActions: 'restart'\n  },\n  x: -200,\n  y: 500,\n  opacity: 0,\n  stagger: 0.3\n});\n$('.about-section--box').hover(function () {\n  gsap.to(this, {\n    x: -2,\n    y: -10,\n    boxShadow: '2px 12px 20px 0px #4b4a4a',\n    scale: 1.002\n  });\n}, function () {\n  gsap.to(this, {\n    x: 0,\n    y: 0,\n    boxShadow: '0 8px 6px -6px #4b4a4a',\n    scale: 1\n  });\n}); // <==============  ARTICLE SECTION ====================>\n\ngsap.to('.flex-box--img i', 6, {\n  rotation: 360,\n  repeat: -1,\n  ease: Linear.easeNone\n});\ngsap.to('.flex-box--img i:last-child', 6, {\n  rotation: -360,\n  repeat: -1,\n  ease: Linear.easeNone\n}); // <==============  TIMELINE SECTION ====================>\n\ngsap.to('.line-to-be-animated', 1, {\n  scrollTrigger: {\n    trigger: \".timeline-section\",\n    start: 'top top',\n    scrub: true,\n    toggleActions: 'restart pause reverse pause '\n  },\n  height: 2150\n});\ngsap.to('.timeline-section--box--img.one', 1, {\n  scrollTrigger: {\n    trigger: \".timeline-section\",\n    start: 'top top',\n    scrub: false,\n    toggleActions: 'play complete reverse+=300 reset'\n  },\n  scale: 0.9,\n  ease: Back.easeOut\n});\ngsap.to('.timeline-section--box--img.two', 1, {\n  scrollTrigger: {\n    trigger: \".timeline-section--box--text.two\",\n    start: \"top center\",\n    scrub: false,\n    toggleActions: 'play complete reverse+=300 reset'\n  },\n  scale: 0.9\n});\ngsap.to('.timeline-section--box--img.three', 1, {\n  scrollTrigger: {\n    trigger: \".timeline-section--box--text.three\",\n    start: \"top bottom-=300\",\n    scrub: false,\n    toggleActions: 'play complete reverse+=300 reset'\n  },\n  scale: 0.9\n});\ngsap.to('.timeline-section--box--img.four', 1, {\n  scrollTrigger: {\n    trigger: \".timeline-section--box--text.four\",\n    start: \"top bottom-=300\",\n    scrub: false,\n    toggleActions: 'play complete reverse+=300 reset'\n  },\n  scale: 0.9\n});\ngsap.to('.timeline-section--box--img.five', 1, {\n  scrollTrigger: {\n    trigger: \".timeline-section--box--text.five\",\n    start: \"top bottom-=300r\",\n    scrub: false,\n    toggleActions: 'play complete reverse+=300 reset'\n  },\n  scale: 0.9\n});\ngsap.to('.timeline-section--box--img.six', 1, {\n  scrollTrigger: {\n    trigger: \".timeline-section--box--img.five\",\n    start: \"top bottom+-100\",\n    scrub: false,\n    toggleActions: 'play complete reverse+=300 reset'\n  },\n  scale: 0.9\n}); // Timeline text\n\ngsap.from($('.timeline-section--box--text'), {\n  scrollTrigger: '.timeline-section--box',\n  autoAlpha: 1,\n  x: -500\n});\n\n//# sourceURL=webpack://gsa-demo/./src/js/main.js?");

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gsa-demo/./src/sass/app.scss?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;