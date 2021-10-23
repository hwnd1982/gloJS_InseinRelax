/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/SliderCarousel.js":
/*!***********************************!*\
  !*** ./modules/SliderCarousel.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SliderCarousel = /*#__PURE__*/function () {
  function SliderCarousel(_ref) {
    var main = _ref.main,
        wrap = _ref.wrap,
        next = _ref.next,
        prev = _ref.prev,
        slide = _ref.slide,
        style = _ref.style,
        slideCounter = _ref.slideCounter,
        currentCount = _ref.currentCount,
        totalCount = _ref.totalCount,
        _ref$loop = _ref.loop,
        loop = _ref$loop === void 0 ? false : _ref$loop,
        _ref$pagination = _ref.pagination,
        pagination = _ref$pagination === void 0 ? false : _ref$pagination,
        dotsList = _ref.dotsList,
        _ref$position = _ref.position,
        position = _ref$position === void 0 ? 0 : _ref$position,
        _ref$showCenter = _ref.showCenter,
        showCenter = _ref$showCenter === void 0 ? false : _ref$showCenter,
        _ref$autoplay = _ref.autoplay,
        autoplay = _ref$autoplay === void 0 ? false : _ref$autoplay,
        _ref$time = _ref.time,
        time = _ref$time === void 0 ? 3000 : _ref$time,
        _ref$slidesToShow = _ref.slidesToShow,
        slidesToShow = _ref$slidesToShow === void 0 ? 3 : _ref$slidesToShow,
        _ref$responsive = _ref.responsive,
        responsive = _ref$responsive === void 0 ? [] : _ref$responsive;

    _classCallCheck(this, SliderCarousel);

    var wrapElem = document.querySelector(wrap),
        slideCounterElem = document.querySelector(slideCounter);
    this.example = 1;
    this.main = main ? document.querySelector(main) : function () {
      var main = document.createElement('div');
      main.id = wrap.slice(1);
      wrapElem.parentElement.insertBefore(main, wrapElem);
      main.append(wrapElem);
      return main;
    }();
    this.wrap = loop ? {
      master: wrapElem,
      slave: wrapElem.cloneNode(true)
    } : wrapElem;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.dotsList = document.querySelector(dotsList);
    this.dots = this.dotsList ? _toConsumableArray(this.dotsList.children) : [];
    this.slidesToShow = slidesToShow;
    this.interval = 0, this.responsive = responsive;
    this.slides = loop ? {
      master: slide ? _toConsumableArray(this.wrap.master.querySelectorAll(slide)) : _toConsumableArray(this.wrap.master.children),
      slave: slide ? _toConsumableArray(this.wrap.slave.querySelectorAll(slide)) : _toConsumableArray(this.wrap.slave.children)
    } : slide ? _toConsumableArray(this.wrap.master.querySelectorAll(slide)) : _toConsumableArray(this.wrap.children);
    this.options = {
      position: loop ? {
        master: position,
        slave: this.slides.master.length + position
      } : position,
      showCenter: showCenter,
      slideCounter: slideCounterElem,
      currentCount: slideCounterElem ? slideCounterElem.querySelector(currentCount) : null,
      totalCount: slideCounterElem ? slideCounterElem.querySelector(totalCount) : null,
      style: style,
      loop: loop,
      pagination: pagination,
      autoplay: loop ? autoplay : loop,
      time: time,
      widthSlide: Math.floor(100 / this.slidesToShow),
      maxPosition: (loop ? this.slides.master.length : this.slides.length) - this.slidesToShow
    };
  }

  _createClass(SliderCarousel, [{
    key: "init",
    value: function init() {
      var _this$dots,
          _this = this;

      this.checkExample();

      if (!this.next || !this.prev) {
        this.addArrow();
      }

      this.addGloClass();
      this.addStyle();
      if (this.options.pagination) (_this$dots = this.dots).push.apply(_this$dots, _toConsumableArray(this.addPagination()));
      this.controlSlider();
      if (this.options.loop) this.main.insertBefore(this.wrap.slave, this.wrap.master.nextElementSibling);

      if (this.options.autoplay) {
        this.startSlider();
        this.main.addEventListener('mouseover', function (event) {
          return event.target.matches(".glo-".concat(_this.example, "-slider__buttons, .dot")) ? _this.stopSlider() : null;
        });
        this.main.addEventListener('mouseout', function (event) {
          return event.target.matches(".glo-".concat(_this.example, "-slider__buttons, .dot")) ? _this.startSlider() : null;
        });
      }

      if (this.responsive) this.responsiveInit();
      this.setStartPosition();
      if (this.options.slideCounter) this.setSlideCounter();
      if (this.options.showCenter) this.options.showCenter[0](this.getCenterElem());
    }
  }, {
    key: "checkExample",
    value: function checkExample() {
      while (document.querySelector(".glo-".concat(this.example, "-slider"))) {
        ++this.example;
      }
    }
  }, {
    key: "startSlider",
    value: function startSlider() {
      this.interval = setInterval(this.nextSlide.bind(this), this.options.time);
    }
  }, {
    key: "stopSlider",
    value: function stopSlider() {
      clearInterval(this.interval);
    }
  }, {
    key: "setStartPosition",
    value: function setStartPosition() {
      if (this.options.loop) {
        if (this.options.position.master >= 2 * this.slides.master.length - this.slidesToShow - 1) {
          this.main.prepend(this.wrap.master);
          this.options.position.master = -this.slidesToShow - (2 * this.slides.master.length - this.slidesToShow - this.options.position.master);
        }

        if (this.options.position.master <= -this.slides.master.length + 1) {
          this.main.prepend(this.wrap.master);
          this.options.position.master = this.slides.master.length + (this.slides.master.length + this.options.position.master);
        }

        this.wrap.master.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position.master, "%)");
        this.wrap.slave.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position.slave, "%)");
      } else {
        if (this.options.position === 0) this.prev.style.display = 'none';else this.prev.style.display = 'flex';
        if (this.options.position === this.slides.length - this.slidesToShow) this.next.style.display = 'none';else this.next.style.display = 'flex';
        this.wrap.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position, "%)");
      }
    }
  }, {
    key: "addGloClass",
    value: function addGloClass() {
      var _this2 = this;

      this.main.classList.add("glo-".concat(this.example, "-slider"));

      if (this.options.loop) {
        this.wrap.master.classList.add("glo-".concat(this.example, "-slider__wrap"));
        this.wrap.master.classList.add("glo-".concat(this.example, "-slider__wrap_master"));
        this.wrap.slave.classList.add("glo-".concat(this.example, "-slider__wrap"));
        this.wrap.slave.classList.add("glo-".concat(this.example, "-slider__wrap_slave"));
        this.slides.master.forEach(function (item) {
          return item.classList.add("glo-".concat(_this2.example, "-slider__item"));
        });
        this.slides.slave.forEach(function (item) {
          return item.classList.add("glo-".concat(_this2.example, "-slider__item"));
        });
      } else {
        this.wrap.classList.add("glo-".concat(this.example, "-slider__wrap"));
        this.wrap.classList.add("glo-".concat(this.example, "-slider__wrap_master"));
        this.slides.forEach(function (item) {
          return item.classList.add("glo-".concat(_this2.example, "-slider__item"));
        });
      }

      this.prev.classList.add("glo-".concat(this.example, "-slider__buttons"));
      this.next.classList.add("glo-".concat(this.example, "-slider__buttons"));
    }
  }, {
    key: "addStyle",
    value: function addStyle() {
      if (this.options.style) {
        this.options.style(this.example, this.options.widthSlide, !!this.dots);
      } else {
        var style = document.getElementById("glo-".concat(this.example, "-slider-style")) || document.createElement('style');
        style.id = "glo-".concat(this.example, "-slider-style");
        document.body.append(style);
        style.textContent = " .glo-".concat(this.example, "-slider {\n            overflow: hidden !important;\n            position: relative !important;\n          }\n          .glo-").concat(this.example, "-slider__wrap {\n            position: relative !important;\n            display: flex !important;\n            width: 100% !important;\n            transition: transform 0.5s !important;\n            will-change: transform !important;\n            overflow: initial !important;\n          }\n          .glo-").concat(this.example, "-slider__wrap.glo-").concat(this.example, "-slider__wrap_slave {\n            position: absolute !important;\n            top: 0 !important;\n          }\n          .glo-").concat(this.example, "-slider__item {\n            display: flex !important;\n            flex: 0 0 ").concat(this.options.widthSlide, "% !important;\n            position: static !important;\n            transform: translate(0, 0) !important;\n            width: 100% !important;\n            transition: none !important;\n            justify-content: flex-start !important;\n          }\n          .glo-").concat(this.example, "-slider__next,\n          .glo-").concat(this.example, "-slider__prev {\n            position: absolute;\n            transform: translate(0, -50%);\n            top: 50%;\n            border: 20px solid transparent;\n            background: transparent;\n            cursor: pointer;\n            z-index: 10;\n          }\n          .glo-").concat(this.example, "-slider__next {\n            right: 5px;\n            border-left-color: #19b5fe;\n          }\n          .glo-").concat(this.example, "-slider__prev {\n            left: 5px;\n            border-right-color: #19b5fe;\n          }\n          @media (max-width: 690px) {\n            .glo-").concat(this.example, "-slider__next,\n            .glo-").concat(this.example, "-slider__prev {\n              border: 15px solid transparent;\n            }\n            .glo-").concat(this.example, "-slider__next {\n              right: 5px;\n              border-left-color: #19b5fe;\n            }\n            .glo-").concat(this.example, "-slider__prev {\n              left: 5px;\n              border-right-color: #19b5fe;\n            }\n          }\n          @media (max-width: 448px) {\n            .glo-").concat(this.example, "-slider__next,\n            .glo-").concat(this.example, "-slider__prev {\n              border: 10px solid transparent;\n            }\n            .glo-").concat(this.example, "-slider__next {\n              right: 5px;\n              border-left-color: #19b5fe;\n            }\n            .glo-").concat(this.example, "-slider__prev {\n              left: 5px;\n              border-right-color: #19b5fe;\n            }\n          }\n        ");

        if (this.dots) {
          style.textContent += " .glo-".concat(this.example, "-slider__dots {\n              position: absolute;\n              bottom: 20px;\n              width: 100%;\n              margin: 20px auto 0;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              justify-content: center;\n              z-index: 5;\n            }\n            .glo-").concat(this.example, "-slider__dots .dot {\n              cursor: pointer;\n              height: 16px;\n              width: 16px;\n              margin: 0 10px;\n              border-radius: 50%;\n              border: solid #fff;\n              display: inline-block;\n              transition: background-color, transform 0.4s, -webkit-transform 0.4s;\n            }\n            .glo-").concat(this.example, "-slider__dots .dot-active {\n              background-color: #19b5fe;\n              transform: scale(1.2);\n            }\n            .glo-").concat(this.example, "-slider__dots .dot:hover {\n              background-color: #53c6fe;\n              transform: scale(1.2);\n            }");
        }
      }
    }
  }, {
    key: "controlSlider",
    value: function controlSlider() {
      var _this3 = this;

      this.prev.addEventListener('click', function (event) {
        return _this3.prevSlide(event);
      });
      this.next.addEventListener('click', function (event) {
        return _this3.nextSlide(event);
      });
    }
  }, {
    key: "getCenterElem",
    value: function getCenterElem() {
      return this.options.loop ? this.options.position.master >= -Math.floor(this.slidesToShow / 2) && this.options.position.master < this.slides.master.length - Math.floor(this.slidesToShow / 2) ? this.slides.master[this.options.position.master + Math.floor(this.slidesToShow / 2)] : this.slides.slave[this.options.position.slave + Math.floor(this.slidesToShow / 2)] : this.slides[this.options.position + Math.floor(this.slidesToShow / 2)];
    }
  }, {
    key: "nextSlide",
    value: function nextSlide(event) {
      event ? event.preventDefault() : null;
      if (this.options.pagination) this.changeDot(false);
      if (this.options.showCenter) this.options.showCenter[1](this.getCenterElem());

      if (this.options.loop) {
        ++this.options.position.master;
        ++this.options.position.slave;

        if (this.options.position.master >= 2 * this.slides.master.length - this.slidesToShow - 1) {
          this.main.prepend(this.wrap.master);
          this.options.position.master = -this.slidesToShow - (2 * this.slides.master.length - this.slidesToShow - this.options.position.master);
        }

        if (this.options.position.slave >= 2 * this.slides.slave.length - this.slidesToShow - 1) {
          this.main.prepend(this.wrap.slave);
          this.options.position.slave = -this.slidesToShow - (2 * this.slides.slave.length - this.slidesToShow - this.options.position.slave);
        }

        this.wrap.master.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position.master, "%)");
        this.wrap.slave.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position.slave, "%)");
      } else {
        if (this.options.position <= this.slides.length - this.slidesToShow) {
          ++this.options.position;
          this.wrap.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position, "%)");
          if (this.options.position > 0 && this.prev.style.display === 'none') this.prev.style.display = 'flex';
          if (this.options.position === this.slides.length - this.slidesToShow) this.next.style.display = 'none';
        }
      }

      if (this.options.showCenter) this.options.showCenter[0](this.getCenterElem());
      if (this.options.slideCounter) this.setSlideCounter();
      if (this.options.pagination) this.changeDot(true);
    }
  }, {
    key: "setSlideCounter",
    value: function setSlideCounter() {
      if (this.options.loop) {
        this.options.currentCount.textContent = 1 + this.options.position.master >= 0 && this.options.position.master < this.slides.master.length ? this.options.position.master : this.options.position.slave;
        this.options.totalCount = this.slides.master.length;
      } else {
        this.options.currentCount.textContent = 1 + this.options.position;
        this.options.totalCount.textContent = this.slides.length;
      }
    }
  }, {
    key: "changeDot",
    value: function changeDot(add) {
      if (this.options.loop) this.dots[this.options.position.master >= 0 && this.options.position.master < this.slides.master.length ? this.options.position.master : this.options.position.slave].classList[add ? 'add' : 'remove']('dot_active');else this.dots[this.options.position].classList[add ? 'add' : 'remove']('dot_active');
    }
  }, {
    key: "prevSlide",
    value: function prevSlide(event) {
      event ? event.preventDefault() : null;
      if (this.options.pagination) this.changeDot(false);
      if (this.options.showCenter) this.options.showCenter[1](this.getCenterElem());

      if (this.options.loop) {
        --this.options.position.master;
        --this.options.position.slave;

        if (this.options.position.master <= -this.slides.master.length + 1) {
          this.main.prepend(this.wrap.master);
          this.options.position.master = this.slides.master.length + (this.slides.master.length + this.options.position.master);
        }

        if (this.options.position.slave <= -this.slides.slave.length + 1) {
          this.main.prepend(this.wrap.slave);
          this.options.position.slave = this.slides.master.length + (this.slides.slave.length + this.options.position.slave);
        }

        this.wrap.master.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position.master, "%)");
        this.wrap.slave.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position.slave, "%)");
      } else {
        if (this.options.position >= 0) {
          --this.options.position;
          this.wrap.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position, "%)");
          if (this.options.position < this.slides.length - this.slidesToShow && this.next.style.display === 'none') this.next.style.display = 'flex';
          if (this.options.position === 0) this.prev.style.display = 'none';
        }
      }

      if (this.options.showCenter) this.options.showCenter[0](this.getCenterElem());
      if (this.options.slideCounter) this.setSlideCounter();
      if (this.options.pagination) this.changeDot(true);
    }
  }, {
    key: "addArrow",
    value: function addArrow() {
      this.prev = document.createElement('div');
      this.next = document.createElement('div');
      this.prev.className = "glo-".concat(this.example, "-slider__prev");
      this.next.className = "glo-".concat(this.example, "-slider__next");
      this.main.append(this.prev);
      this.main.append(this.next);
    }
  }, {
    key: "addPagination",
    value: function addPagination() {
      var _this4 = this;

      var dotsList = this.dotsList || this.main.appendChild(document.createElement('div'));

      if (!dotsList.className) {
        dotsList.classList.add("glo-".concat(this.example, "-slider__dots"));
        this.slides.master.forEach(function (elem, index) {
          return dotsList.innerHTML += "<li class=\"dot".concat(index === _this4.options.position.master ? ' dot_active' : '', "\" id=\"dot").concat(index, "\"\"></li>");
        });
      } else {
        dotsList.style.display = 'flex';

        _toConsumableArray(dotsList.children).forEach(function (item, index) {
          item.id = "dot".concat(index);
          item.classList.remove('dot_active');
        });

        this.changeDot(true);
      }

      dotsList.addEventListener('click', function (event) {
        if (!event.target.matches('.dot')) {
          return;
        }

        var delta = _this4.options.loop ? _this4.options.position.master >= 0 && _this4.options.position.master < _this4.slides.master.length ? +event.target.id.slice(3) - _this4.options.position.master : +event.target.id.slice(3) - _this4.options.position.slave : +event.target.id.slice(3) - _this4.options.position;

        if (delta) {
          _this4.changeDot(false);

          if (delta > 0) {
            if (_this4.options.loop) {
              _this4.options.position.master += delta - 1;
              _this4.options.position.slave += delta - 1;
            } else _this4.options.position += delta - 1;

            _this4.nextSlide(event);
          } else {
            if (_this4.options.loop) {
              _this4.options.position.master += delta + 1;
              _this4.options.position.slave += delta + 1;
            } else _this4.options.position += delta + 1;

            _this4.prevSlide(event);
          }
        }
      });
      return dotsList.querySelectorAll('.dot');
    }
  }, {
    key: "responsiveInit",
    value: function responsiveInit() {
      var _this5 = this;

      var slidersToShowDefault = this.slidesToShow,
          allResponse = this.responsive.map(function (item) {
        return item.breakpoint;
      }),
          maxResponse = Math.max.apply(Math, _toConsumableArray(allResponse)),
          checkResponse = function checkResponse() {
        var widthWindow = document.documentElement.clientWidth;

        if (_this5.interval) {
          _this5.stopSlider();
        }

        if (widthWindow < maxResponse) {
          allResponse.forEach(function (item, index) {
            if (widthWindow < item) {
              _this5.slidesToShow = _this5.responsive[index].slidesToShow;
              _this5.options.widthSlide = Math.floor(100 / _this5.slidesToShow);

              _this5.addStyle();
            }
          });
        } else {
          _this5.slidesToShow = slidersToShowDefault;
          _this5.options.widthSlide = Math.floor(100 / _this5.slidesToShow);

          _this5.addStyle();
        }

        _this5.setStartPosition();

        if (_this5.options.showCenter) {
          if (_this5.options.loop) {
            _this5.slides.master.forEach(_this5.options.showCenter[1]);

            _this5.slides.slave.forEach(_this5.options.showCenter[1]);
          } else {
            _this5.slides.forEach(_this5.options.showCenter[1]);
          }

          _this5.options.showCenter[0](_this5.getCenterElem());
        }

        _this5.resetSlider();

        if (_this5.options.autoplay) {
          _this5.startSlider();
        }
      };

      checkResponse();
      window.addEventListener('resize', function () {
        return checkResponse();
      });
    }
  }, {
    key: "resetSlider",
    value: function resetSlider() {
      if (this.options.loop) {
        this.main.prepend(this.wrap.slave);
        this.main.prepend(this.wrap.master);
      } else {
        this.main.prepend(this.wrap);
      }
    }
  }]);

  return SliderCarousel;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderCarousel);

/***/ }),

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
    innerWidth > 576 ? popupDialogMenu.style.transform = 'translate3d(100%, 0, 0)' : popupDialogMenu.style.transform = 'translate3d(0, -100vh, 0)';
    popupDialogMenu.parentElement.append(popupDialogMenu);
  });
  document.addEventListener('click', function (event) {
    var target = event.target;

    if (target.closest('.menu__icon')) {
      popupDialogMenu.style.transform = 'translate3d(0, 0, 0)';
    } else {
      if (!target.closest('.popup-dialog-menu') || target.matches('.close-menu, .menu-link')) {
        innerWidth > 576 ? popupDialogMenu.style.transform = 'translate3d(100%, 0, 0)' : popupDialogMenu.style.transform = 'translate3d(0, -100vh, 0)';

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

/***/ "./modules/faqAccordion.js":
/*!*********************************!*\
  !*** ./modules/faqAccordion.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
var faqAccordion = function faqAccordion(minimizeAll) {
  var accordion = document.querySelector('.accordion');
  accordion.addEventListener('click', function (_ref) {
    var target = _ref.target;

    if (target.matches('.title_block')) {
      if (minimizeAll === undefined) {
        target.classList.toggle('msg-active');
      } else {
        var active = accordion.querySelector('.msg-active');
        if (active) active.classList.remove('msg-active');

        if (!(minimizeAll && active === target)) {
          target.classList.add('msg-active');
        }
      }
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (faqAccordion);

/***/ }),

/***/ "./modules/formulaPopupDesktop.js":
/*!****************************************!*\
  !*** ./modules/formulaPopupDesktop.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
var formulaPopupDesktop = function formulaPopupDesktop() {
  var positionPopup = function positionPopup(target) {
    var popup = target.querySelector('.formula-item-popup'),
        popupPosition = popup.getBoundingClientRect();

    if (!popup.classList.contains('inverted')) {
      if (popupPosition.top < 10) popup.classList.add('inverted');
    } else {
      if (popupPosition.top > popupPosition.height + 100) popup.classList.remove('inverted');
    }
  },
      togglePopup = function togglePopup(_ref) {
    var target = _ref.target;
    var item = target.closest('.formula-item__icon'),
        popup = item ? item.querySelector('.formula-item-popup') : null;
    if (!item || target.closest('.formula-slider__slide')) return;
    var visible = 0;
    item.classList.toggle('visible');
    item.classList.toggle('visible-formula-item-popup');
    visible = item.classList.contains('visible') ? 1 : 0;
    item.parentElement.style.cssText = "z-index: ".concat(visible);
    positionPopup(item);
    popup.style.cssText = "opacity: ".concat(visible, "; visibility: ").concat(visible ? 'visible' : 'hidden', ";");
    item.querySelector('.formula-item__icon-inner').style.cssText = "opacity: ".concat(visible, ";");
  };

  document.querySelector('.formula').addEventListener('mouseover', togglePopup);
  document.querySelector('.formula').addEventListener('mouseout', togglePopup);
  window.addEventListener('scroll', function () {
    var item = document.querySelector('.visible-formula-item-popup');
    if (item) positionPopup(item);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formulaPopupDesktop);

/***/ }),

/***/ "./modules/formulaPopupSlider.js":
/*!***************************************!*\
  !*** ./modules/formulaPopupSlider.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addHighlightStyle": function() { return /* binding */ addHighlightStyle; },
/* harmony export */   "removeHighlightStyle": function() { return /* binding */ removeHighlightStyle; }
/* harmony export */ });
var addHighlightStyle = function addHighlightStyle(slide) {
  slide.querySelector('.formula-item-popup').style.cssText = "opacity: 1; visibility: visible;";
  slide.querySelector('.formula-item__icon-inner').style.cssText = "background: linear-gradient(90deg, #f48922 0%, #ffb015 100%);";
  slide.style.cssText = "opacity: 1;";
},
    removeHighlightStyle = function removeHighlightStyle(slide) {
  slide.querySelector('.formula-item-popup').style.cssText = "opacity: 0.4; visibility: hidden;";
  slide.querySelector('.formula-item__icon-inner').style.cssText = "background: none;";
  slide.style.cssText = "opacity: 0.4;";
};



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
      event.currentTarget.classList.toggle('phone-number-accord-show');

      if (event.currentTarget.classList.contains('phone-number-accord-show')) {
        setTimeout(function () {
          return phoneNumberAccord.style.position = "absolute";
        }, 500);
        phoneNumberAccord.firstElementChild.style.opacity = 0;
        event.currentTarget.firstElementChild.style.cssText = '';
      } else {
        phoneNumberAccord.style.position = "relative";
        phoneNumberAccord.firstElementChild.style.opacity = 1;
        event.currentTarget.firstElementChild.style.cssText = 'transform: translate(0, 30px) rotate(180deg)';
      }
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerContactsAccord);

/***/ }),

/***/ "./modules/maskPhone.js":
/*!******************************!*\
  !*** ./modules/maskPhone.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function maskPhone(selector) {
  var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+7 (___) ___-__-__';

  var elems = document.querySelectorAll(selector),
      mask = function mask(event) {
    var keyCode = event.keyCode,
        template = masked,
        def = template.replace(/\D/g, ""),
        val = event.target.value.replace(/\D/g, "");
    var i = 0,
        newValue = template.replace(/[_\d]/g, function (a) {
      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
    });
    i = newValue.indexOf("_");

    if (i !== -1) {
      newValue = newValue.slice(0, i);
    }

    var reg = template.substr(0, event.target.value.length).replace(/_+/g, function (a) {
      return "\\d{1," + a.length + "}";
    }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");

    if (!reg.test(event.target.value) || event.target.value.length < 5 || keyCode > 47 && keyCode < 58) {
      event.target.value = newValue;
    }

    if (event.type === "blur" && event.target.value.length < 5) {
      event.target.value = "";
    }
  };

  var _iterator = _createForOfIteratorHelper(elems),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elem = _step.value;
      elem.addEventListener("input", mask);
      elem.addEventListener("focus", mask);
      elem.addEventListener("blur", mask);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);

/***/ }),

/***/ "./modules/messageSendForm.js":
/*!************************************!*\
  !*** ./modules/messageSendForm.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMessage": function() { return /* binding */ loadMessage; },
/* harmony export */   "successMessage": function() { return /* binding */ successMessage; },
/* harmony export */   "errorMassage": function() { return /* binding */ errorMassage; }
/* harmony export */ });
var errorMassageColor = "#bd313e;\n            opacity: 1;\n            transform: translateY(0);\n          }\n        }\n      </style>",
    successMessageColor = "#3da35a;\n            opacity: 1;\n            transform: translateY(0);\n          }\n        }\n      </style>",
    svgAnimationByCSS = "<style>\n        svg {\n          width: 100%;\n          height: 100%;\n        }\n\n        path {\n          stroke-dasharray: 99.47578430175781;\n          stroke-dashoffset: -99.47578430175781;\n          fill: transparent;\n        }\n\n        svg.animate path {\n          animation: 1.7s ease forwards draw;\n          opacity: 1;\n        }\n\n        @keyframes draw {\n          0% {\n            opacity: 1;\n            stroke-dashoffset: -99.47578430175781;\n            fill: transparent;\n            transform: translateY(0);\n          }\n\n          50% {\n            stroke-dashoffset: 0;\n            fill: transparent;\n          }\n\n          100% {\n            fill: ",
    errorMassage = "".concat(svgAnimationByCSS + errorMassageColor, "\n\n      <svg class=\"animate\" viewbox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path\n          d=\"m6.5 22.8l2.7 2.7 6.8-6.8 6.8 6.8 2.7-2.7-6.8-6.8 6.8-6.8-2.7-2.7-6.8 6.8-6.8-6.8-2.7 2.7 6.8 6.8-6.8 6.8z\"\n          stroke=\"#bd313e\"\n          fill=\"transparent\"\n        />\n      </svg>"),
    loadMessage = "<style>\n        .sk-circle-bounce {\n          width: 100px;\n          height: 100px;\n          position: relative;\n          margin: auto;\n        }\n        .sk-child {\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          left: 0;\n          top: 0;\n        }\n        .sk-circle-bounce .sk-circle-2 {\n          transform: rotate(30deg);\n        }\n        .sk-circle-bounce .sk-circle-3 {\n          transform: rotate(60deg);\n        }\n        .sk-circle-bounce .sk-circle-4 {\n          transform: rotate(90deg);\n        }\n        .sk-circle-bounce .sk-circle-5 {\n          transform: rotate(120deg);\n        }\n        .sk-circle-bounce .sk-circle-6 {\n          transform: rotate(150deg);\n        }\n        .sk-circle-bounce .sk-circle-7 {\n          transform: rotate(180deg);\n        }\n        .sk-circle-bounce .sk-circle-8 {\n          transform: rotate(210deg);\n        }\n        .sk-circle-bounce .sk-circle-9 {\n          transform: rotate(240deg);\n        }\n        .sk-circle-bounce .sk-circle-10 {\n          transform: rotate(270deg);\n        }\n        .sk-circle-bounce .sk-circle-11 {\n          transform: rotate(300deg);\n        }\n        .sk-circle-bounce .sk-circle-12 {\n          transform: rotate(330deg);\n        }\n        .sk-circle-bounce .sk-circle-2:before {\n          animation-delay: -1.1s;\n        }\n        .sk-circle-bounce .sk-circle-3:before {\n          animation-delay: -1s;\n        }\n        .sk-circle-bounce .sk-circle-4:before {\n          animation-delay: -0.9s;\n        }\n        .sk-circle-bounce .sk-circle-5:before {\n          animation-delay: -0.8s;\n        }\n        .sk-circle-bounce .sk-circle-6:before {\n          animation-delay: -0.7s;\n        }\n        .sk-circle-bounce .sk-circle-7:before {\n          animation-delay: -0.6s;\n        }\n        .sk-circle-bounce .sk-circle-8:before {\n          animation-delay: -0.5s;\n        }\n        .sk-circle-bounce .sk-circle-9:before {\n          animation-delay: -0.4s;\n        }\n        .sk-circle-bounce .sk-circle-10:before {\n          animation-delay: -0.3s;\n        }\n        .sk-circle-bounce .sk-circle-11:before {\n          animation-delay: -0.2s;\n        }\n        .sk-circle-bounce .sk-circle-12:before {\n          animation-delay: -0.1s;\n        }\n        .sk-child:before {\n          content: \"\";\n          display: block;\n          margin: 0 auto;\n          width: 15%;\n          height: 15%;\n          background: linear-gradient(90deg, #f17c0c 0%, #fba600 100%), 50%;\n          border-radius: 100%;\n          animation: sk-circle-bounce-delay 1.2s infinite ease-in-out both;\n        }\n        @keyframes sk-circle-bounce-delay {\n          0%,\n          80%,\n          100% {\n            transform: scale(0);\n          }\n          40% {\n            transform: scale(1);\n          }\n        }\n      </style>\n      <div class=\"sk-circle-bounce\">\n        <div class=\"sk-child sk-circle-1\"></div>\n        <div class=\"sk-child sk-circle-2\"></div>\n        <div class=\"sk-child sk-circle-3\"></div>\n        <div class=\"sk-child sk-circle-4\"></div>\n        <div class=\"sk-child sk-circle-5\"></div>\n        <div class=\"sk-child sk-circle-6\"></div>\n        <div class=\"sk-child sk-circle-7\"></div>\n        <div class=\"sk-child sk-circle-8\"></div>\n        <div class=\"sk-child sk-circle-9\"></div>\n        <div class=\"sk-child sk-circle-10\"></div>\n        <div class=\"sk-child sk-circle-11\"></div>\n        <div class=\"sk-child sk-circle-12\"></div>\n      </div>",
    successMessage = "".concat(svgAnimationByCSS + successMessageColor, "\n      <svg class=\"animate\" viewbox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path\n          d=\"M 18 32.34 l -8.34 -8.34 -2.83 2.83 11.17 11.17 24 -24 -2.83 -2.83 z\"\n          d=\"M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z\"\n          d=\"M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z\"\n          stroke=\"#3da35a\"\n          fill=\"transparent\"\n        />\n      </svg>");


/***/ }),

/***/ "./modules/popupControl.js":
/*!*********************************!*\
  !*** ./modules/popupControl.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
var popupControl = function popupControl() {
  document.addEventListener('click', function (_ref) {
    var target = _ref.target;

    if (target.matches('.link-list>a')) {
      document.querySelector('.popup-repair-types').style.visibility = 'visible';
    }

    if (target.closest('.transparency-item__img')) {
      document.querySelector('.popup-transparency').style.visibility = 'visible';
    }

    if (target.matches('.link-privacy')) {
      document.querySelector('.popup-privacy').style.visibility = 'visible';
    }

    if (target.matches('.button_wide')) {
      document.querySelector('.popup-consultation').style.visibility = 'visible';
    }

    if (target.matches('.close') && target.closest('.popup')) {
      var popup = target.closest('.popup');
      if (!popup.matches('.popup-dialog-menu')) popup.style.visibility = 'hidden';
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupControl);

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var sendForm = function sendForm() {
  var loadMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Загрузка...';
  var successMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Спасибо! Мы скоро с вами свяжемся!';
  var errorMassage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Что-то пошло не так...';
  var timerLifeOfStatusMessage;

  var hideStatusMessage = function hideStatusMessage(form, statusMessage, time) {
    return setTimeout(function () {
      statusMessage.style = '';
      statusMessage.textContent = '';
    }, time);
  },
      clearForm = function clearForm(form) {
    _toConsumableArray(form.elements).forEach(function (elem) {
      elem.value = '';
      if (elem.type === 'checkbox') elem.checked = false;
      elem.classList.remove('success');
    });
  },
      outputData = function outputData(response, form, statusMessage) {
    if (response.status !== 200) {
      throw new Error('status network not 200');
    }

    successMessage instanceof Function ? successMessage() : statusMessage.innerHTML = successMessage;
    clearForm(form);
    timerLifeOfStatusMessage = hideStatusMessage(form, statusMessage, 0);
  },
      errorData = function errorData(form, statusMessage) {
    statusMessage.innerHTML = errorMassage;
    timerLifeOfStatusMessage = hideStatusMessage(form, statusMessage, 3000);
  },
      postData = function postData(body) {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      credentials: 'include'
    });
  },
      checkFormData = function checkFormData(form) {
    return !form.querySelector('input.checkbox__input:checked');
  };

  document.body.addEventListener('submit', function (event) {
    var form = event.target;
    event.preventDefault();
    if (checkFormData(form)) return;
    var formData = new FormData(form),
        body = {};
    var dataValidation = true,
        focusInput = false;
    formData.forEach(function (value, key) {
      if (!value.trim()) dataValidation = false;

      if (!dataValidation && !focusInput) {
        form.querySelector("input[name=\"".concat(key, "\"]")).focus();
        focusInput = true;
      }

      body[key] = value;
    });
    if (!dataValidation) return;
    var statusMessage = form.appendChild(document.createElement('div'));
    statusMessage.style.cssText = " \n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      height: 150px;\n    ";
    statusMessage.innerHTML = loadMessage;

    if (timerLifeOfStatusMessage) {
      clearTimeout(timerLifeOfStatusMessage);
    }

    postData(body).then(function (response) {
      return outputData(response, form, statusMessage);
    })["catch"](function () {
      return errorData(form, statusMessage);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);

/***/ }),

/***/ "./modules/setSlidersPosition.js":
/*!***************************************!*\
  !*** ./modules/setSlidersPosition.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setTransparencyPosition": function() { return /* binding */ setTransparencyPosition; }
/* harmony export */ });
var setTransparencyPosition = function setTransparencyPosition(slider) {
  var transparency = document.getElementById('transparency');
  transparency.addEventListener('click', function (_ref) {
    var target = _ref.target;

    if (target.closest('.transparency-item__img')) {
      var targetItem = target.closest('.transparency-item'),
          items = transparency.querySelectorAll('.transparency-item');
      items.forEach(function (item, index) {
        if (item === targetItem) {
          slider.options.position = index;
          slider.setStartPosition();
          slider.resetSlider();
          slider.setSlideCounter();
        }
      });
    }
  });
};



/***/ }),

/***/ "./modules/sliderStyles.js":
/*!*********************************!*\
  !*** ./modules/sliderStyles.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transparencySliderStyles": function() { return /* binding */ transparencySliderStyles; }
/* harmony export */ });
var transparencySliderStyles = function transparencySliderStyles(example, widthSlide) {
  var style = document.getElementById("glo-".concat(example, "-slider-style")) || document.createElement('style');
  style.id = "glo-".concat(example, "-slider-style");
  document.body.append(style);
  style.textContent = " .glo-".concat(example, "-slider {\n        display: flex !important;\n        overflow: hidden !important;\n      }\n      .glo-").concat(example, "-slider__wrap {\n        position: relative !important;\n        display: flex !important;\n        flex-wrap: nowrap !important;\n        width: 100% !important;\n        transition: transform 0.5s !important;\n        will-change: transform !important;\n        overflow: initial !important;\n      }\n      .glo-").concat(example, "-slider__item {\n        display: flex !important;\n        flex: 0 0 ").concat(widthSlide, "% !important;\n        position: static !important;\n        transform: translate(0, 0) !important;\n        width: 100% !important;\n        transition: none !important;\n        justify-content: flex-start !important;\n      }");
};



/***/ }),

/***/ "./modules/successMessage.js":
/*!***********************************!*\
  !*** ./modules/successMessage.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
var successMessage = function successMessage() {
  document.querySelector('.popup-thank').style.visibility = 'visible';
  document.querySelector('.popup-consultation').style.visibility = 'hidden';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (successMessage);

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
/* harmony import */ var _modules_popupControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popupControl */ "./modules/popupControl.js");
/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/maskPhone */ "./modules/maskPhone.js");
/* harmony import */ var _modules_formulaPopupDesktop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/formulaPopupDesktop */ "./modules/formulaPopupDesktop.js");
/* harmony import */ var _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/SliderCarousel */ "./modules/SliderCarousel.js");
/* harmony import */ var _modules_sliderStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sliderStyles */ "./modules/sliderStyles.js");
/* harmony import */ var _modules_formulaPopupSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/formulaPopupSlider */ "./modules/formulaPopupSlider.js");
/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sendForm */ "./modules/sendForm.js");
/* harmony import */ var _modules_messageSendForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/messageSendForm */ "./modules/messageSendForm.js");
/* harmony import */ var _modules_successMessage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/successMessage */ "./modules/successMessage.js");
/* harmony import */ var _modules_faqAccordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/faqAccordion */ "./modules/faqAccordion.js");
/* harmony import */ var _modules_setSlidersPosition__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/setSlidersPosition */ "./modules/setSlidersPosition.js");













 // Phone List Active

(0,_modules_headerContactsAccord__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Burger Menu Active

(0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_2__["default"])(); // Popup Repair Types Active

(0,_modules_popupControl__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Mask Phone

(0,_modules_maskPhone__WEBPACK_IMPORTED_MODULE_4__["default"])('input[name="phone"]'); // Formula Popup Desktop

(0,_modules_formulaPopupDesktop__WEBPACK_IMPORTED_MODULE_5__["default"])(); // Formula Popup Slider

var formulaSlider = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_6__["default"]({
  main: '.formula-slider-wrap',
  wrap: '.formula-slider',
  prev: '#formula-arrow_left',
  next: '#formula-arrow_right',
  loop: true,
  showCenter: [_modules_formulaPopupSlider__WEBPACK_IMPORTED_MODULE_8__.addHighlightStyle, _modules_formulaPopupSlider__WEBPACK_IMPORTED_MODULE_8__.removeHighlightStyle],
  autoplay: true,
  time: 5000,
  position: -1,
  slidesToShow: 3,
  responsive: [{
    breakpoint: 768,
    slidesToShow: 1
  }]
});
formulaSlider.init(); // Send Form

(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_9__["default"])(_modules_messageSendForm__WEBPACK_IMPORTED_MODULE_10__.loadMessage, _modules_successMessage__WEBPACK_IMPORTED_MODULE_11__["default"], _modules_messageSendForm__WEBPACK_IMPORTED_MODULE_10__.errorMassage); // FAQ Accordion (undefined: Maximize & Minimize All, true: Single Minimize All, false: Single)

(0,_modules_faqAccordion__WEBPACK_IMPORTED_MODULE_12__["default"])(false); // Reviews Slider

var reviewsSlider = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_6__["default"]({
  wrap: '.reviews-slider',
  prev: '#reviews-arrow_left',
  next: '#reviews-arrow_right',
  dotsList: '.slider-dots-reviews',
  position: 1,
  pagination: true,
  slidesToShow: 1
});
reviewsSlider.init(); // Transparency Slider

var transparencySlider = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_6__["default"]({
  // main: '.transparency-slider-wrap',
  wrap: '.transparency-slider',
  prev: '#transparency-arrow_left',
  next: '#transparency-arrow_right',
  style: _modules_sliderStyles__WEBPACK_IMPORTED_MODULE_7__.transparencySliderStyles,
  position: 0,
  slidesToShow: 3,
  responsive: [{
    breakpoint: 1090,
    slidesToShow: 1
  }]
});
transparencySlider.init(); //Popup Transparency Slider

var popupTransparencySlider = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_6__["default"]({
  wrap: '.popup-transparency-slider',
  prev: '#transparency_left',
  next: '#transparency_right',
  style: _modules_sliderStyles__WEBPACK_IMPORTED_MODULE_7__.transparencySliderStyles,
  slideCounter: '#transparency-popup-counter',
  currentCount: '.slider-counter-content__current',
  totalCount: '.slider-counter-content__total',
  position: 0,
  slidesToShow: 1
});
popupTransparencySlider.init();
(0,_modules_setSlidersPosition__WEBPACK_IMPORTED_MODULE_13__.setTransparencyPosition)(popupTransparencySlider);
}();
/******/ })()
;
//# sourceMappingURL=main.js.map