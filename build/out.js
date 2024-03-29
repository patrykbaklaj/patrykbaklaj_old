/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

$(document).ready(function() {

  pageFucntionsInit();


  function pageFucntionsInit() {
    // for setting image size while resizing
    setWindowHeight();
    $(window).on("load resize", function () {
      setWindowHeight();
    });
    // for animation purpose
    $("body").fadeIn('fast', animateH1);
    // scrollspy for navbar
    $('body, html').scrollspy({
      target: '#navbar',
      offset: 150
    });
    // scrolling effects for menu
      $('nav a, #to-top').bind('click', function() {
        $('html, body').stop().animate({
          scrollTop: $($(this).attr('href')).offset().top - 50
        }, 1400, 'easeInExpo');
        event.preventDefault();
      })
      // scrolling effects for arrow
      $('.arrow').bind('click', function() {
        $('html, body').stop().animate({
          scrollTop: $('#about').offset().top - 78
        }, 1000, 'easeInExpo');
        event.preventDefault();
      })

      // wow animation init
      new WOW().init();

      // hover Effects init
      hoverEffects();
  }

  // Functions
  function setWindowHeight() {
    $(".fill-screen").css("height", window.innerHeight);
  }


  // first section animation
  function animateH1 (){
    $(".hello-text").delay(600)
    .fadeIn("slow")
    .delay(1500)
    .fadeOut("400", function(){
      $(this).text("Want to know me?");
    })
    .fadeIn()
    .delay(1500)
    .fadeOut("400", function(){
      $('.welcome').addClass('background-welcome parallax');
      // $(this).html("<a href='#'>Let's get started!</a>");
      $(this).text("Let's get started!");
      $(this).addClass("hello-text-after")
    })
    .fadeIn("400", showArrow);
  };

  function showArrow(){
    $(".arrow, #navbar").fadeIn("600");
  }

  function hoverEffects(){
    $('.project-item').on('mouseenter', function() {
      $(this).addClass('effect');
      $(this).find('figcaption').stop().fadeIn('slow');
    })
    $('.project-item').on('mouseleave', function() {
      $(this).removeClass('effect');
      $(this).find('figcaption').stop().fadeOut('slow');
    })
  }

});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);