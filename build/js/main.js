/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/SliderCarousel.js":
/*!***********************************!*\
  !*** ./modules/SliderCarousel.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
        _ref$px = _ref.px,
        px = _ref$px === void 0 ? false : _ref$px,
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
        _ref$showCurrent = _ref.showCurrent,
        showCurrent = _ref$showCurrent === void 0 ? false : _ref$showCurrent,
        _ref$autoplay = _ref.autoplay,
        autoplay = _ref$autoplay === void 0 ? false : _ref$autoplay,
        _ref$time = _ref.time,
        time = _ref$time === void 0 ? 3000 : _ref$time,
        _ref$slidesToShow = _ref.slidesToShow,
        slidesToShow = _ref$slidesToShow === void 0 ? 3 : _ref$slidesToShow,
        _ref$resetDefault = _ref.resetDefault,
        resetDefault = _ref$resetDefault === void 0 ? false : _ref$resetDefault,
        _ref$responsive = _ref.responsive,
        responsive = _ref$responsive === void 0 ? [] : _ref$responsive;

    _classCallCheck(this, SliderCarousel);

    var wrapElem = document.querySelector(wrap),
        slideCounterElem = document.querySelector(slideCounter);
    this.example = 1;
    this.main = main ? document.querySelector(main) : function () {
      var main = document.createElement('div');
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
      showCurrent: showCurrent,
      resetDefault: resetDefault,
      slideCounter: slideCounterElem,
      currentCount: slideCounterElem ? slideCounterElem.querySelector(currentCount) : null,
      totalCount: slideCounterElem ? slideCounterElem.querySelector(totalCount) : null,
      style: style,
      loop: loop,
      px: px,
      pagination: pagination,
      autoplay: loop ? autoplay : loop,
      time: time,
      widthSlide: px ? px : Math.floor(100 / this.slidesToShow),
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
      if (this.options.showCurrent) this.options.showCurrent[0](this.getCurrentElem());
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

        this.wrap.master.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position.master).concat(this.options.px ? 'px' : '%', ")");
        this.wrap.slave.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position.slave).concat(this.options.px ? 'px' : '%', ")");
      } else {
        if (this.options.position === 0) this.prev.style.display = 'none';else this.prev.style.display = 'flex';
        if (this.options.position === this.slides.length - this.slidesToShow) this.next.style.display = 'none';else this.next.style.display = 'flex';
        this.wrap.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position).concat(this.options.px ? 'px' : '%', ")");
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
        style.textContent = " .glo-".concat(this.example, "-slider {\n            overflow: hidden !important;\n            position: relative !important;\n          }\n          .glo-").concat(this.example, "-slider__wrap {\n            position: relative !important;\n            display: flex !important;\n            width: 100% !important;\n            transition: transform 0.5s !important;\n            will-change: transform !important;\n            overflow: initial !important;\n          }\n          .glo-").concat(this.example, "-slider__wrap.glo-").concat(this.example, "-slider__wrap_slave {\n            position: absolute !important;\n            top: 0 !important;\n          }\n          .glo-").concat(this.example, "-slider__item {\n            display: flex !important;\n            flex: 0 0 ").concat(this.options.widthSlide).concat(this.options.px ? 'px' : '%', " !important;\n            position: static !important;\n            transform: translate(0, 0) !important;\n            width: 100% !important;\n            transition: none !important;\n            justify-content: flex-start !important;\n          }\n          .glo-").concat(this.example, "-slider__next,\n          .glo-").concat(this.example, "-slider__prev {\n            position: absolute;\n            transform: translate(0, -50%);\n            top: 50%;\n            border: 20px solid transparent;\n            background: transparent;\n            cursor: pointer;\n            z-index: 10;\n          }\n          .glo-").concat(this.example, "-slider__next {\n            right: 5px;\n            border-left-color: #19b5fe;\n          }\n          .glo-").concat(this.example, "-slider__prev {\n            left: 5px;\n            border-right-color: #19b5fe;\n          }\n          @media (max-width: 690px) {\n            .glo-").concat(this.example, "-slider__next,\n            .glo-").concat(this.example, "-slider__prev {\n              border: 15px solid transparent;\n            }\n            .glo-").concat(this.example, "-slider__next {\n              right: 5px;\n              border-left-color: #19b5fe;\n            }\n            .glo-").concat(this.example, "-slider__prev {\n              left: 5px;\n              border-right-color: #19b5fe;\n            }\n          }\n          @media (max-width: 448px) {\n            .glo-").concat(this.example, "-slider__next,\n            .glo-").concat(this.example, "-slider__prev {\n              border: 10px solid transparent;\n            }\n            .glo-").concat(this.example, "-slider__next {\n              right: 5px;\n              border-left-color: #19b5fe;\n            }\n            .glo-").concat(this.example, "-slider__prev {\n              left: 5px;\n              border-right-color: #19b5fe;\n            }\n          }\n        ");

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
      }, false);
      this.next.addEventListener('click', function (event) {
        return _this3.nextSlide(event);
      }, false);
    }
  }, {
    key: "getCenterElem",
    value: function getCenterElem() {
      return this.options.loop ? this.options.position.master >= -Math.floor(this.slidesToShow / 2) && this.options.position.master < this.slides.master.length - Math.floor(this.slidesToShow / 2) ? this.slides.master[this.options.position.master + Math.floor(this.slidesToShow / 2)] : this.slides.slave[this.options.position.slave + Math.floor(this.slidesToShow / 2)] : this.slides[this.options.position + Math.floor(this.slidesToShow / 2)];
    }
  }, {
    key: "getCurrentElem",
    value: function getCurrentElem() {
      return this.options.loop ? this.options.position.master >= 0 && this.options.position.master < this.slides.master.length ? this.slides.master[this.options.position.master] : this.slides.slave[this.options.position.slave] : this.slides[this.options.position];
    }
  }, {
    key: "nextSlide",
    value: function nextSlide(event) {
      event ? event.preventDefault() : null;
      if (this.options.pagination) this.changeDot(false);
      if (this.options.showCenter) this.options.showCenter[1](this.getCenterElem());
      if (this.options.showCurrent) this.options.showCurrent[1](this.getCurrentElem());

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

        this.wrap.master.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position.master).concat(this.options.px ? 'px' : '%', ")");
        this.wrap.slave.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position.slave).concat(this.options.px ? 'px' : '%', ")");
      } else {
        if (this.options.position <= this.slides.length - this.slidesToShow) {
          ++this.options.position;
          this.wrap.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position).concat(this.options.px ? 'px' : '%', ")");
          if (this.options.position > 0 && this.prev.style.display === 'none') this.prev.style.display = 'flex';
          if (this.options.position === this.slides.length - this.slidesToShow) this.next.style.display = 'none';
        }
      }

      if (this.options.showCenter) this.options.showCenter[0](this.getCenterElem());
      if (this.options.showCurrent) this.options.showCurrent[0](this.getCurrentElem());
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
      if (this.options.showCurrent) this.options.showCurrent[1](this.getCurrentElem());

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

        this.wrap.master.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position.master).concat(this.options.px ? 'px' : '%', ")");
        this.wrap.slave.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position.slave).concat(this.options.px ? 'px' : '%', ")");
      } else {
        if (this.options.position >= 0) {
          --this.options.position;
          this.wrap.style.transform = "translateX(".concat(-this.options.widthSlide * this.options.position).concat(this.options.px ? 'px' : '%', ")");
          if (this.options.position < this.slides.length - this.slidesToShow && this.next.style.display === 'none') this.next.style.display = 'flex';
          if (this.options.position === 0) this.prev.style.display = 'none';
        }
      }

      if (this.options.showCenter) this.options.showCenter[0](this.getCenterElem());
      if (this.options.showCurrent) this.options.showCurrent[0](this.getCurrentElem());
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
              _this5.options.widthSlide = _this5.options.px ? _this5.options.px : Math.floor(100 / _this5.slidesToShow); // replace with universally solution

              if (_this5.options.px) _this5.options.position = 0;

              _this5.addStyle();
            }
          });
        } else {
          _this5.slidesToShow = slidersToShowDefault;
          _this5.options.widthSlide = _this5.options.px ? _this5.options.px : Math.floor(100 / _this5.slidesToShow); // replace with universally solution

          if (_this5.options.px) _this5.options.position = 0;
          if (_this5.options.resetDefault) _this5.options.loop ? _this5.options.position.master = 0 : _this5.options.position = 0;

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

        if (_this5.options.showCurrent) {
          if (_this5.options.loop) {
            _this5.slides.master.forEach(_this5.options.showCurrent[1]);

            _this5.slides.slave.forEach(_this5.options.showCurrent[1]);
          } else {
            _this5.slides.forEach(_this5.options.showCurrent[1]);
          }

          _this5.options.showCurrent[0](_this5.getCenterElem());
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

"use strict";
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

/***/ "./modules/dataHandlerPopupRepairTypes.js":
/*!************************************************!*\
  !*** ./modules/dataHandlerPopupRepairTypes.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _dataRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataRequest */ "./modules/dataRequest.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var dataHandlerPopupRepairTypes = function dataHandlerPopupRepairTypes() {
  var indexCurrentItem = 0,
      sum = 0,
      indexNewItem = 0;

  var popupRepairTypes = document.querySelector('.popup-repair-types'),
      navListRepair = popupRepairTypes.querySelector('.nav-list-popup-repair'),
      navItems = [],
      sizesNavItems = [0],
      prevNavItems = document.getElementById('nav-arrow-popup-repair_left'),
      nextNavItems = document.getElementById('nav-arrow-popup-repair_right'),
      getData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var index,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              index = _args.length > 0 && _args[0] !== undefined ? _args[0] : 0;
              _context.next = 3;
              return (0,_dataRequest__WEBPACK_IMPORTED_MODULE_0__["default"])(navItems[index].textContent.trim());

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getData() {
      return _ref.apply(this, arguments);
    };
  }(),
      getTypes = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0,_dataRequest__WEBPACK_IMPORTED_MODULE_0__["default"])();

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getTypes() {
      return _ref2.apply(this, arguments);
    };
  }(),
      renderNav = function renderNav() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var navList, nav;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              navList = popupRepairTypes.querySelector('.nav-list-popup-repair');
              _context3.next = 3;
              return getTypes();

            case 3:
              nav = _context3.sent;
              navList.textContent = '';
              nav.forEach(function (item, index) {
                var newItem = document.createElement('button');
                newItem.className = "button_o popup-repair-types-nav__item ".concat(index ? '' : 'active');
                newItem.textContent = item;
                navItems.push(navList.appendChild(newItem));
              });

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
      renderTable = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(index) {
      var data, table, itemList;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return getData(index);

            case 2:
              data = _context4.sent;
              table = popupRepairTypes.querySelector('.popup-repair-types-content-table');
              itemList = document.createElement('table');
              itemList.className = 'popup-repair-types-content-table__list';
              itemList.innerHTML = "<tbody>";
              data.forEach(function (item) {
                itemList.innerHTML += "\n            <tr class=\"mobile-row showHide\">\n              <td class=\"repair-types-name\">\n                ".concat(item.name, "\n              </td>\n              <td class=\"mobile-col-title tablet-hide desktop-hide\">\n                \u0415\u0434.\u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F\n              </td>\n              <td class=\"mobile-col-title tablet-hide desktop-hide\">\n                \u0426\u0435\u043D\u0430 \u0437\u0430 \u0435\u0434.\n              </td>\n              <td class=\"repair-types-value\">").concat(item.units === 'м2' ? 'м<sup>2' : item.units, "</sup></td>\n              <td class=\"repair-types-value\">").concat(item.cost, " \u0440\u0443\u0431.</td>\n            </tr>\n        ");
              });
              itemList.innerHTML += "</tbody>";
              table.textContent = '';
              table.append(itemList);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function renderTable(_x) {
      return _ref4.apply(this, arguments);
    };
  }(),
      showHideArrow = function showHideArrow() {
    if (indexNewItem === 0) prevNavItems.style.display = 'none';
    if (indexNewItem === navItems.length - 1) nextNavItems.style.display = 'none';
    if (prevNavItems.style.display === 'none' && indexNewItem > 0) prevNavItems.style.display = 'block';
    if (nextNavItems.style.display === 'none' && indexNewItem < navItems.length - 1) nextNavItems.style.display = 'block';
  };

  _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return renderNav();

          case 2:
            _context5.next = 4;
            return renderTable(indexCurrentItem);

          case 4:
            navItems.forEach(function (item) {
              sum += item.offsetWidth + 20;
              sizesNavItems.push(sum);
            });
            sum -= 20;

            if (innerWidth <= 1024) {
              navListRepair.style.minWidth = "".concat(sum, "px");
              showHideArrow();
            }

            popupRepairTypes.addEventListener('click', function (_ref6) {
              var target = _ref6.target;
              var item = target.closest('.popup-repair-types-nav__item');

              if (target.matches('#nav-arrow-popup-repair_right, #nav-arrow-popup-repair_left')) {
                if (target.matches('#nav-arrow-popup-repair_right')) {
                  if (indexNewItem < navItems.length - 1) ++indexNewItem;
                } else {
                  if (indexNewItem > 0) --indexNewItem;
                }

                item = navItems[indexNewItem];
              }

              if (item) {
                indexNewItem = navItems.indexOf(item);

                if (innerWidth <= 1024) {
                  navListRepair.style.transform = "translateX(".concat(-sizesNavItems[indexNewItem], "px)");
                  showHideArrow();
                }

                navItems[indexCurrentItem].classList.remove('active');
                navItems[indexNewItem].classList.add('active');
                indexCurrentItem = indexNewItem;
                renderTable(indexCurrentItem);
              }
            });
            window.addEventListener('resize', function () {
              if (innerWidth <= 1024) {
                navListRepair.style.minWidth = "".concat(sum, "px");
                showHideArrow();
              } else {
                navListRepair.style.minWidth = '';
                nextNavItems.style.display = '';
                prevNavItems.style.display = '';
              }
            });

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }))();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataHandlerPopupRepairTypes);

/***/ }),

/***/ "./modules/dataRequest.js":
/*!********************************!*\
  !*** ./modules/dataRequest.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var dataRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(type) {
    var response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('./crm-backend/db.json', {
              method: 'GET',
              mode: 'same-origin'
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;

            if (!type) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", data.reduce(function (newData, item) {
              if (item.type === type) {
                newData.push(item);
              }

              return newData;
            }, []));

          case 10:
            return _context.abrupt("return", data.reduce(function (newData, item) {
              if (!newData.includes(item.type)) {
                newData.push(item.type);
              }

              return newData;
            }, []));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function dataRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataRequest);

/***/ }),

/***/ "./modules/faqAccordion.js":
/*!*********************************!*\
  !*** ./modules/faqAccordion.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./modules/formInputHandler.js":
/*!*************************************!*\
  !*** ./modules/formInputHandler.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
var formInputHandler = function formInputHandler() {
  document.addEventListener('input', function (_ref) {
    var target = _ref.target;

    if (!target.matches('input[name="name"], input[name="phone"]')) {
      return;
    } else {
      if (target.matches('input[name="name"]')) {
        target.value = target.value.replace(/[^а-яё\s]+/gi, '');

        if (target.classList.contains('invalid')) {
          if (target.value.length < 2) {
            if (target.previousElementSibling) {
              target.previousElementSibling.innerHTML = "\n                  <sup>*</sup>\n                  \u041D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 2\u0445 \u0431\u0443\u043A\u0432...\n                ";
            }
          } else {
            target.classList.remove('invalid');

            if (target.previousElementSibling) {
              target.previousElementSibling.innerHTML = "\n                  <sup>*</sup>\n                  \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F:\n                ";
              target.previousElementSibling.style.color = '';
              target.previousElementSibling.style.borderBottom = '';
            }
          }
        }
      }

      if (target.matches('input[name="phone"]')) {
        if (target.classList.contains('invalid')) {
          if (target.value.trim().length < 18) {
            if (target.previousElementSibling) {
              target.previousElementSibling.innerHTML = "\n                  <sup>*</sup>\n                  \u041D\u0435 \u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442...\n                ";
            }
          } else {
            target.classList.remove('invalid');

            if (target.previousElementSibling) {
              target.previousElementSibling.innerHTML = "\n                  <sup>*</sup>\n                  \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043D\u043E\u043C\u0435\u0440:\n                ";
              target.previousElementSibling.style.color = '';
              target.previousElementSibling.style.borderBottom = '';
            }
          }
        }
      }
    }
  });
  document.addEventListener('change', function (_ref2) {
    var target = _ref2.target;

    if (!target.matches('input[name="name"], input.checkbox__input')) {
      return;
    }

    if (target.matches('input[name="name"]')) {
      target.value = target.value.replace(/([-()@_.!~*'])(?=[-()@_.!~*']*\1)/g, '').replace(/([\s])(?=[\s]*\1)/g, '').replace(/^([\s-]*)|([\s-]*)$/g, '').replace(/[^-\s]+/gi, function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      });
    }

    if (target.matches('input.checkbox__input')) {
      var checkBtn = target.closest('input.checkbox__input');

      if (target.closest('input.checkbox__input:checked')) {
        checkBtn.nextElementSibling.style.border = '';
        checkBtn.classList.remove('invalid');
      }
    }
  }, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formInputHandler);

/***/ }),

/***/ "./modules/formulaPopupDesktop.js":
/*!****************************************!*\
  !*** ./modules/formulaPopupDesktop.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

    if (target.matches('.portfolio-slider__slide-frame')) {
      document.querySelector('.popup-portfolio').style.visibility = 'visible';
    }

    if (target.matches('.close') && target.closest('.popup')) {
      var popup = target.closest('.popup');
      if (!popup.matches('.popup-dialog-menu')) popup.style.visibility = 'hidden';
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupControl);

/***/ }),

/***/ "./modules/repairTypesControl.js":
/*!***************************************!*\
  !*** ./modules/repairTypesControl.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

var repairTypesControl = function repairTypesControl(Slider, style) {
  var position = 0,
      sum = 0;

  var repairTypes = document.querySelector('.repair-types'),
      navListRepair = repairTypes.querySelector('.nav-list-repair'),
      navItems = _toConsumableArray(navListRepair.children),
      typesRepairItems = _toConsumableArray(repairTypes.querySelector('.repair-types-slider').children),
      nextNavItems = document.getElementById('nav-arrow-repair-right_base'),
      prevNavItems = document.getElementById('nav-arrow-repair-left_base'),
      slidersLastPosition = [],
      sizesNavItems = [0],
      showHideArrow = function showHideArrow() {
    if (position === 0) prevNavItems.style.display = 'none';
    if (position === navItems.length - 1) nextNavItems.style.display = 'none';
    if (prevNavItems.style.display === 'none' && position > 0) prevNavItems.style.display = 'block';
    if (nextNavItems.style.display === 'none' && position < navItems.length - 1) nextNavItems.style.display = 'block';
  };

  showHideArrow();
  navItems.forEach(function (item, index) {
    if (item.classList.contains('active')) typesRepairItems[index].classList.add('active-slider');
    slidersLastPosition.push(0);
    sum += item.offsetWidth + 10;
    sizesNavItems.push(sum);
  });
  var repairTypesSlider = new Slider({
    main: '.repair-types-slider',
    wrap: '.active-slider',
    prev: '#repair-types-arrow_left',
    next: '#repair-types-arrow_right',
    slideCounter: '#repair-counter',
    currentCount: '.slider-counter-content__current',
    totalCount: '.slider-counter-content__total',
    style: style,
    position: position,
    slidesToShow: 1
  });
  repairTypesSlider.init();
  typesRepairItems.forEach(function (item) {
    repairTypesSlider.wrap = item;
    repairTypesSlider.slides = _toConsumableArray(repairTypesSlider.wrap.children);
    repairTypesSlider.addGloClass();
  });
  repairTypesSlider.wrap = repairTypes.querySelector('.active-slider');
  repairTypesSlider.slides = _toConsumableArray(repairTypesSlider.wrap.children);
  repairTypes.addEventListener('click', function (_ref) {
    var target = _ref.target;
    var repairTypesNavItem = target.closest('.repair-types-nav__item');

    if (target.matches('#nav-arrow-repair-right_base, #nav-arrow-repair-left_base')) {
      if (target.matches('#nav-arrow-repair-right_base')) {
        if (position < navItems.length - 1) ++position;
      } else {
        if (position > 0) --position;
      }

      repairTypesNavItem = navItems[position];
    }

    if (repairTypesNavItem) {
      if (!repairTypesNavItem.classList.contains('active')) {
        var indexCurrentItem = navItems.indexOf(repairTypes.querySelector('.active')),
            indexNewItem = navItems.indexOf(repairTypesNavItem);
        position = indexNewItem;

        if (innerWidth <= 1024) {
          navListRepair.style.transform = "translateX(".concat(-sizesNavItems[position], "px)");
          showHideArrow();
        }

        navItems[indexCurrentItem].classList.remove('active');
        typesRepairItems[indexCurrentItem].classList.remove('active-slider');
        repairTypesNavItem.classList.add('active');
        typesRepairItems[indexNewItem].classList.add('active-slider');
        slidersLastPosition[indexCurrentItem] = repairTypesSlider.options.position;
        repairTypesSlider.options.position = slidersLastPosition[indexNewItem];
        repairTypesSlider.wrap = repairTypes.querySelector('.active-slider');
        repairTypesSlider.slides = _toConsumableArray(repairTypesSlider.wrap.children);
        repairTypesSlider.setStartPosition();
        repairTypesSlider.setSlideCounter();
      }
    }
  });
  window.addEventListener('resize', function () {
    if (innerWidth > 1024) {
      nextNavItems.style.display = '';
      prevNavItems.style.display = '';
      navListRepair.style.transform = '';
    } else {
      navListRepair.style.transform = "translateX(".concat(-sizesNavItems[position], "px)");
      showHideArrow();
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (repairTypesControl);

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    var form = event.target,
        formData = new FormData(form),
        body = {};
    var dataValidation = true,
        focusInput = false;
    event.preventDefault();
    formData.forEach(function (value, key) {
      var input = form.querySelector("input[name=\"".concat(key, "\"]"));

      if (key === 'name' && value.trim().length < 2) {
        dataValidation = false;
        input.classList.add('invalid');

        if (value.trim().length < 2 && value.trim()) {
          if (input.previousElementSibling) {
            input.previousElementSibling.innerHTML = "\n              <sup>*</sup>\n              \u041D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 2\u0445 \u0431\u0443\u043A\u0432...\n            ";
          }
        }

        if (input.previousElementSibling) {
          input.previousElementSibling.style.color = 'rgb(244, 137, 34)';
          input.previousElementSibling.style.borderBottom = '1px solid';
        }
      }

      if (key === 'phone' && value.trim().length < 18) {
        dataValidation = false;
        input.classList.add('invalid');

        if (value.trim().length < 18 && value.trim()) {
          if (input.previousElementSibling) {
            input.previousElementSibling.innerHTML = "\n                <sup>*</sup>\n                \u041D\u0435 \u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442...\n              ";
          }
        }

        if (input.previousElementSibling) {
          input.previousElementSibling.style.color = 'rgb(244, 137, 34)';
          input.previousElementSibling.style.borderBottom = '1px solid';
        }
      }

      if (!dataValidation && !focusInput) {
        form.querySelector("input[name=\"".concat(key, "\"]")).focus();
        focusInput = true;
      }

      body[key] = value;
    });
    if (!dataValidation) return;

    if (checkFormData(form)) {
      var checkBtn = form.querySelector('input.checkbox__input');
      checkBtn.classList.add('invalid');
      checkBtn.nextElementSibling.style.border = '3px solid #f48922';
      return;
    }

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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setTransparencyPosition": function() { return /* binding */ setTransparencyPosition; },
/* harmony export */   "setPortfolioPosition": function() { return /* binding */ setPortfolioPosition; }
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var setPortfolioPosition = function setPortfolioPosition(slider) {
  var indexLast = 0;

  var portfolio = document.getElementById('portfolio'),
      slideFrameList = _toConsumableArray(portfolio.querySelectorAll('.portfolio-slider__slide-frame')),
      popupPortfolioTextList = _toConsumableArray(document.querySelectorAll('.popup-portfolio-text')),
      nextPopupBtn = document.getElementById('popup_portfolio_right'),
      prevPopupBtn = document.getElementById('popup_portfolio_left'),
      showText = function showText(indexCurrent) {
    popupPortfolioTextList[indexLast].style.display = 'none';
    popupPortfolioTextList[indexCurrent].style.display = 'flex';
    indexLast = indexCurrent;
  };

  portfolio.addEventListener('click', function (_ref2) {
    var target = _ref2.target;
    var item = target.closest('.portfolio-slider__slide-frame');

    if (item) {
      var indexCurrent = slideFrameList.indexOf(item) % (slideFrameList.length / 2);
      showText(indexCurrent);
      slider.options.position = indexCurrent;
      slider.setStartPosition();
      slider.resetSlider();
      slider.setSlideCounter();
    }
  });
  nextPopupBtn.addEventListener('click', function () {
    return showText(slider.options.position);
  });
  prevPopupBtn.addEventListener('click', function () {
    return showText(slider.options.position);
  });
};



/***/ }),

/***/ "./modules/sliderStyles.js":
/*!*********************************!*\
  !*** ./modules/sliderStyles.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transparencySliderStyles": function() { return /* binding */ transparencySliderStyles; },
/* harmony export */   "repairTypesSliderStyles": function() { return /* binding */ repairTypesSliderStyles; },
/* harmony export */   "mobilePortfolioSliderStyles": function() { return /* binding */ mobilePortfolioSliderStyles; },
/* harmony export */   "portfolioSliderStyles": function() { return /* binding */ portfolioSliderStyles; }
/* harmony export */ });
var transparencySliderStyles = function transparencySliderStyles(example, widthSlide) {
  var style = document.getElementById("glo-".concat(example, "-slider-style")) || document.createElement('style');
  style.id = "glo-".concat(example, "-slider-style");
  document.body.append(style);
  style.textContent = " .glo-".concat(example, "-slider {\n        display: flex !important;\n        overflow: hidden !important;\n      }\n      .glo-").concat(example, "-slider__wrap {\n        position: relative !important;\n        display: flex !important;\n        flex-wrap: nowrap !important;\n        width: 100% !important;\n        transition: transform 0.5s !important;\n        will-change: transform !important;\n        overflow: initial !important;\n      }\n      .glo-").concat(example, "-slider__item {\n        display: flex !important;\n        flex: 0 0 ").concat(widthSlide, "% !important;\n        position: static !important;\n        transform: translate(0, 0) !important;\n        width: 100% !important;\n        transition: none !important;\n        justify-content: flex-start !important;\n      }");
};

var repairTypesSliderStyles = function repairTypesSliderStyles(example, widthSlide) {
  var style = document.getElementById("glo-".concat(example, "-slider-style")) || document.createElement('style');
  style.id = "glo-".concat(example, "-slider-style");
  document.body.append(style);
  style.textContent = " .glo-".concat(example, "-slider {\n        overflow: hidden !important;\n        position: relative !important;\n      }\n      .glo-").concat(example, "-slider__wrap {\n        position: absolute !important;\n        display: flex !important;\n        width: 100% !important;\n        transition: 0.5s !important;\n        will-change: opacity, transform !important;\n        overflow: initial !important;\n        opacity: 0;\n      }\n      .glo-").concat(example, "-slider__wrap.active-slider {\n        opacity: 1;\n      }\n      .glo-").concat(example, "-slider__wrap.glo-").concat(example, "-slider__wrap_slave {\n        position: absolute !important;\n        top: 0 !important;\n      }\n      .glo-").concat(example, "-slider__item {\n        display: flex !important;\n        flex: 0 0 ").concat(widthSlide, "% !important;\n        position: static !important;\n        transform: translate(0, 0) !important;\n        width: 100% !important;\n        transition: none !important;\n        justify-content: flex-start !important;\n      }");
};

var mobilePortfolioSliderStyles = function mobilePortfolioSliderStyles(example, widthSlide) {
  var style = document.getElementById("glo-".concat(example, "-slider-style")) || document.createElement('style');
  style.id = "glo-".concat(example, "-slider-style");
  document.body.append(style);
  style.textContent = " @media (max-width: 575px) {\n        .glo-".concat(example, "-slider {\n          overflow: hidden !important;\n          position: relative !important;\n          border-radius: 20px;\n          height: 210px;\n        }\n        .glo-").concat(example, "-slider__wrap {\n          position: absolute !important;\n          display: flex !important;\n          width: 100% !important;\n          transition: 0.5s !important;\n          will-change: opacity, transform !important;\n          overflow: initial !important;\n        }\n        .glo-").concat(example, "-slider__wrap.active-slider {\n          opacity: 1;\n        }\n        .glo-").concat(example, "-slider__wrap.glo-").concat(example, "-slider__wrap_slave {\n          position: absolute !important;\n          top: 0 !important;\n        }\n        .glo-").concat(example, "-slider__item {\n          display: flex !important;\n          flex: 0 0 ").concat(widthSlide, "% !important;\n          position: static !important;\n          transform: translate(0, 0) !important;\n          width: 100% !important;\n          transition: none !important;\n          justify-content: flex-start !important;\n        }\n      }");
};

var portfolioSliderStyles = function portfolioSliderStyles(example, widthSlide) {
  var style = document.getElementById("glo-".concat(example, "-slider-style")) || document.createElement('style');
  style.id = "glo-".concat(example, "-slider-style");
  document.body.append(style);
  style.textContent = " .glo-".concat(example, "-slider {\n        overflow: hidden !important;\n        position: relative !important;\n        width: 1056px !important;\n        border-radius: 20px !important;\n        margin-left: auto;\n        margin-right: auto;\n      }\n      .glo-").concat(example, "-slider__wrap {\n        position: relative !important;\n        width: 100% !important;\n        transition: 0.5s !important;\n        will-change: opacity, transform !important;\n        overflow: initial !important;\n      }\n      .glo-").concat(example, "-slider__item {\n        display: flex !important;\n        flex: 0 0 ").concat(widthSlide, "px !important;\n      }\n      @media (max-width: 1140px) {\n        .glo-").concat(example, "-slider {\n          width: 704px !important;\n        }\n      }\n      @media (max-width: 900px) {\n        .glo-").concat(example, "-slider {\n          width: 352px !important;\n        }\n      }\n      @media (max-width: 575px) {\n        .glo-").concat(example, "-slider__buttons {\n          display: none !important;\n        }\n      }");
};



/***/ }),

/***/ "./modules/successMessage.js":
/*!***********************************!*\
  !*** ./modules/successMessage.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../node_modules/regenerator-runtime/runtime.js":
/*!******************************************************!*\
  !*** ../node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./css/style.css");
/* harmony import */ var _modules_headerContactsAccord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/headerContactsAccord */ "./modules/headerContactsAccord.js");
/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/burgerMenu */ "./modules/burgerMenu.js");
/* harmony import */ var _modules_popupControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/popupControl */ "./modules/popupControl.js");
/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/maskPhone */ "./modules/maskPhone.js");
/* harmony import */ var _modules_formulaPopupDesktop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/formulaPopupDesktop */ "./modules/formulaPopupDesktop.js");
/* harmony import */ var _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/SliderCarousel */ "./modules/SliderCarousel.js");
/* harmony import */ var _modules_sliderStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sliderStyles */ "./modules/sliderStyles.js");
/* harmony import */ var _modules_formulaPopupSlider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/formulaPopupSlider */ "./modules/formulaPopupSlider.js");
/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/sendForm */ "./modules/sendForm.js");
/* harmony import */ var _modules_messageSendForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/messageSendForm */ "./modules/messageSendForm.js");
/* harmony import */ var _modules_successMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/successMessage */ "./modules/successMessage.js");
/* harmony import */ var _modules_faqAccordion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/faqAccordion */ "./modules/faqAccordion.js");
/* harmony import */ var _modules_setSlidersPosition__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/setSlidersPosition */ "./modules/setSlidersPosition.js");
/* harmony import */ var _modules_repairTypesControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/repairTypesControl */ "./modules/repairTypesControl.js");
/* harmony import */ var _modules_dataHandlerPopupRepairTypes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/dataHandlerPopupRepairTypes */ "./modules/dataHandlerPopupRepairTypes.js");
/* harmony import */ var _modules_formInputHandler__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/formInputHandler */ "./modules/formInputHandler.js");

















 // Phone List Active

(0,_modules_headerContactsAccord__WEBPACK_IMPORTED_MODULE_2__["default"])(); // Burger Menu Active

(0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Popup Repair Types Active

(0,_modules_popupControl__WEBPACK_IMPORTED_MODULE_4__["default"])(); // Mask Phone

(0,_modules_maskPhone__WEBPACK_IMPORTED_MODULE_5__["default"])('input[name="phone"]'); // Formula Popup Desktop

(0,_modules_formulaPopupDesktop__WEBPACK_IMPORTED_MODULE_6__["default"])(); // Formula Popup Slider

var formulaSlider = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_7__["default"]({
  main: '.formula-slider-wrap',
  wrap: '.formula-slider',
  prev: '#formula-arrow_left',
  next: '#formula-arrow_right',
  loop: true,
  showCenter: [_modules_formulaPopupSlider__WEBPACK_IMPORTED_MODULE_9__.addHighlightStyle, _modules_formulaPopupSlider__WEBPACK_IMPORTED_MODULE_9__.removeHighlightStyle],
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

(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_10__["default"])(_modules_messageSendForm__WEBPACK_IMPORTED_MODULE_11__.loadMessage, _modules_successMessage__WEBPACK_IMPORTED_MODULE_12__["default"], _modules_messageSendForm__WEBPACK_IMPORTED_MODULE_11__.errorMassage); // FAQ Accordion (undefined: Maximize & Minimize All, true: Single Minimize All, false: Single)

(0,_modules_faqAccordion__WEBPACK_IMPORTED_MODULE_13__["default"])(false); // Reviews Slider

var reviewsSlider = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_7__["default"]({
  wrap: '.reviews-slider',
  prev: '#reviews-arrow_left',
  next: '#reviews-arrow_right',
  dotsList: '.slider-dots-reviews',
  position: 1,
  pagination: true,
  slidesToShow: 1
});
reviewsSlider.init(); // Transparency Slider

var transparencySlider = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_7__["default"]({
  wrap: '.transparency-slider',
  prev: '#transparency-arrow_left',
  next: '#transparency-arrow_right',
  style: _modules_sliderStyles__WEBPACK_IMPORTED_MODULE_8__.transparencySliderStyles,
  position: 0,
  slidesToShow: 3,
  resetDefault: true,
  responsive: [{
    breakpoint: 1090,
    slidesToShow: 1
  }]
});
transparencySlider.init(); //Popup Transparency Slider

var popupTransparencySlider = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_7__["default"]({
  wrap: '.popup-transparency-slider',
  prev: '#transparency_left',
  next: '#transparency_right',
  style: _modules_sliderStyles__WEBPACK_IMPORTED_MODULE_8__.transparencySliderStyles,
  slideCounter: '#transparency-popup-counter',
  currentCount: '.slider-counter-content__current',
  totalCount: '.slider-counter-content__total',
  position: 0,
  slidesToShow: 1
});
popupTransparencySlider.init();
(0,_modules_setSlidersPosition__WEBPACK_IMPORTED_MODULE_14__.setTransparencyPosition)(popupTransparencySlider); // Repair Types Control

(0,_modules_repairTypesControl__WEBPACK_IMPORTED_MODULE_15__["default"])(_modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_7__["default"], _modules_sliderStyles__WEBPACK_IMPORTED_MODULE_8__.repairTypesSliderStyles); // Popup Portfolio Slider

var popupPortfolioSlider = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_7__["default"]({
  wrap: '.popup-portfolio-slider',
  prev: '#popup_portfolio_left',
  next: '#popup_portfolio_right',
  slideCounter: '#popup-portfolio-counter',
  currentCount: '.slider-counter-content__current',
  totalCount: '.slider-counter-content__total',
  position: 0,
  slidesToShow: 1
});
popupPortfolioSlider.init();
(0,_modules_setSlidersPosition__WEBPACK_IMPORTED_MODULE_14__.setPortfolioPosition)(popupPortfolioSlider); // Portfolio Slider

var portfolioSlider = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_7__["default"]({
  wrap: '.portfolio-slider',
  prev: '#portfolio-arrow_left',
  next: '#portfolio-arrow_right',
  style: _modules_sliderStyles__WEBPACK_IMPORTED_MODULE_8__.portfolioSliderStyles,
  position: 0,
  px: 352,
  slidesToShow: 3,
  responsive: [{
    breakpoint: 1140,
    slidesToShow: 2
  }, {
    breakpoint: 900,
    slidesToShow: 1
  }]
});
portfolioSlider.init(); // Mobile Portfolio Slider

var mobilePortfolioSlider = new _modules_SliderCarousel__WEBPACK_IMPORTED_MODULE_7__["default"]({
  wrap: '.portfolio-slider-mobile',
  prev: '#portfolio-arrow-mobile_left',
  next: '#portfolio-arrow-mobile_right',
  slideCounter: '#portfolio-counter',
  style: _modules_sliderStyles__WEBPACK_IMPORTED_MODULE_8__.mobilePortfolioSliderStyles,
  currentCount: '.slider-counter-content__current',
  totalCount: '.slider-counter-content__total',
  position: 0,
  slidesToShow: 1
});
mobilePortfolioSlider.init(); // Data Handler Popup Repair Types

(0,_modules_dataHandlerPopupRepairTypes__WEBPACK_IMPORTED_MODULE_16__["default"])(); // formInputHandler

(0,_modules_formInputHandler__WEBPACK_IMPORTED_MODULE_17__["default"])();
}();
/******/ })()
;
//# sourceMappingURL=main.js.map