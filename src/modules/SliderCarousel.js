class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev,
    slide,
    style,
    px = false,
    slideCounter,
    currentCount,
    totalCount,
    loop = false,
    pagination = false,
    dotsList,
    position = 0,
    showCenter = false,
    showCurrent = false,
    autoplay = false,
    time = 3000,
    slidesToShow = 3,
    resetDefault = false,
    responsive = []
  }) {
    const
      wrapElem = document.querySelector(wrap),
      slideCounterElem = document.querySelector(slideCounter);

    this.example = 1;
    this.main = main ? document.querySelector(main) : (() => {
      const main = document.createElement('div');

      wrapElem.parentElement.insertBefore(main, wrapElem);
      main.append(wrapElem);
      return main;
    })();
    this.wrap = loop ? {
      master: wrapElem,
      slave: wrapElem.cloneNode(true)
    } : wrapElem;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.dotsList = document.querySelector(dotsList);
    this.dots = this.dotsList ? [...this.dotsList.children] : [];
    this.slidesToShow = slidesToShow;
    this.interval = 0,
    this.responsive = responsive;
    this.slides = loop ? {
      master: slide ? [...this.wrap.master.querySelectorAll(slide)] : [...this.wrap.master.children],
      slave: slide ? [...this.wrap.slave.querySelectorAll(slide)] : [...this.wrap.slave.children]
    } : slide ? [...this.wrap.master.querySelectorAll(slide)] : [...this.wrap.children];
    this.options = {
      position: loop ? {
        master: position,
        slave: this.slides.master.length + position
      } : position,
      showCenter,
      showCurrent,
      resetDefault,
      slideCounter: slideCounterElem,
      currentCount: slideCounterElem ? slideCounterElem.querySelector(currentCount) : null,
      totalCount: slideCounterElem ? slideCounterElem.querySelector(totalCount) : null,
      style,
      loop,
      px,
      pagination,
      autoplay: loop ? autoplay : loop,
      time,
      widthSlide: px ? px : Math.floor(100 / this.slidesToShow),
      maxPosition: (loop ? this.slides.master.length : this.slides.length) - this.slidesToShow
    };
  }
  init() {
    this.checkExample();
    if (!this.next || !this.prev) {
      this.addArrow();
    }
    this.addGloClass();
    this.addStyle();
    if (this.options.pagination)
      this.dots.push(...this.addPagination());
    this.controlSlider();
    if (this.options.loop)
      this.main.insertBefore(this.wrap.slave, this.wrap.master.nextElementSibling);
    if (this.options.autoplay) {
      this.startSlider();
      this.main.addEventListener('mouseover', event =>
        (event.target.matches(`.glo-${this.example}-slider__buttons, .dot`) ? this.stopSlider() : null));
      this.main.addEventListener('mouseout', event =>
        (event.target.matches(`.glo-${this.example}-slider__buttons, .dot`) ? this.startSlider() : null));
    }
    if (this.responsive) this.responsiveInit();
    this.setStartPosition();
    if (this.options.slideCounter) this.setSlideCounter();
    if (this.options.showCenter) this.options.showCenter[0](this.getCenterElem());
    if (this.options.showCurrent) this.options.showCurrent[0](this.getCurrentElem());
  }
  checkExample() {
    while (document.querySelector(`.glo-${this.example}-slider`)) {
      ++this.example;
    }
  }
  startSlider() {
    this.interval = setInterval(this.nextSlide.bind(this), this.options.time);
  }
  stopSlider() {
    clearInterval(this.interval);
  }
  setStartPosition() {
    if (this.options.loop) {
      if (this.options.position.master >= 2 * this.slides.master.length - this.slidesToShow - 1) {
        this.main.prepend(this.wrap.master);
        this.options.position.master = -this.slidesToShow -
        (2 * this.slides.master.length - this.slidesToShow - this.options.position.master);
      }
      if (this.options.position.master <= -this.slides.master.length + 1) {
        this.main.prepend(this.wrap.master);
        this.options.position.master = this.slides.master.length +
        (this.slides.master.length + this.options.position.master);
      }
      this.wrap.master.style.transform = `translateX(${-this.options.widthSlide * this.options.position.master}${
        this.options.px ? 'px' : '%'})`;
      this.wrap.slave.style.transform = `translateX(${-this.options.widthSlide * this.options.position.slave}${
        this.options.px ? 'px' : '%'})`;
    } else {
      if (this.options.position === 0) this.prev.style.display = 'none';
      else this.prev.style.display = 'flex';
      if (this.options.position === this.slides.length - this.slidesToShow) this.next.style.display = 'none';
      else this.next.style.display = 'flex';
      this.wrap.style.transform = `translateX(${-this.options.widthSlide * this.options.position}${
        this.options.px ? 'px' : '%'})`;
    }
  }
  addGloClass() {
    this.main.classList.add(`glo-${this.example}-slider`);
    if (this.options.loop) {
      this.wrap.master.classList.add(`glo-${this.example}-slider__wrap`);
      this.wrap.master.classList.add(`glo-${this.example}-slider__wrap_master`);
      this.wrap.slave.classList.add(`glo-${this.example}-slider__wrap`);
      this.wrap.slave.classList.add(`glo-${this.example}-slider__wrap_slave`);
      this.slides.master.forEach(item => item.classList.add(`glo-${this.example}-slider__item`));
      this.slides.slave.forEach(item => item.classList.add(`glo-${this.example}-slider__item`));
    } else {
      this.wrap.classList.add(`glo-${this.example}-slider__wrap`);
      this.wrap.classList.add(`glo-${this.example}-slider__wrap_master`);
      this.slides.forEach(item => item.classList.add(`glo-${this.example}-slider__item`));
    }
    this.prev.classList.add(`glo-${this.example}-slider__buttons`);
    this.next.classList.add(`glo-${this.example}-slider__buttons`);
  }
  addStyle() {
    if (this.options.style) {
      this.options.style(this.example, this.options.widthSlide, !!this.dots);
    } else {
      const style =  document.getElementById(`glo-${this.example}-slider-style`) || document.createElement('style');

      style.id = `glo-${this.example}-slider-style`;
      document.body.append(style);
      style.textContent =
        ` .glo-${this.example}-slider {
            overflow: hidden !important;
            position: relative !important;
          }
          .glo-${this.example}-slider__wrap {
            position: relative !important;
            display: flex !important;
            width: 100% !important;
            transition: transform 0.5s !important;
            will-change: transform !important;
            overflow: initial !important;
          }
          .glo-${this.example}-slider__wrap.glo-${this.example}-slider__wrap_slave {
            position: absolute !important;
            top: 0 !important;
          }
          .glo-${this.example}-slider__item {
            display: flex !important;
            flex: 0 0 ${this.options.widthSlide}${this.options.px ? 'px' : '%'} !important;
            position: static !important;
            transform: translate(0, 0) !important;
            width: 100% !important;
            transition: none !important;
            justify-content: flex-start !important;
          }
          .glo-${this.example}-slider__next,
          .glo-${this.example}-slider__prev {
            position: absolute;
            transform: translate(0, -50%);
            top: 50%;
            border: 20px solid transparent;
            background: transparent;
            cursor: pointer;
            z-index: 10;
          }
          .glo-${this.example}-slider__next {
            right: 5px;
            border-left-color: #19b5fe;
          }
          .glo-${this.example}-slider__prev {
            left: 5px;
            border-right-color: #19b5fe;
          }
          @media (max-width: 690px) {
            .glo-${this.example}-slider__next,
            .glo-${this.example}-slider__prev {
              border: 15px solid transparent;
            }
            .glo-${this.example}-slider__next {
              right: 5px;
              border-left-color: #19b5fe;
            }
            .glo-${this.example}-slider__prev {
              left: 5px;
              border-right-color: #19b5fe;
            }
          }
          @media (max-width: 448px) {
            .glo-${this.example}-slider__next,
            .glo-${this.example}-slider__prev {
              border: 10px solid transparent;
            }
            .glo-${this.example}-slider__next {
              right: 5px;
              border-left-color: #19b5fe;
            }
            .glo-${this.example}-slider__prev {
              left: 5px;
              border-right-color: #19b5fe;
            }
          }
        `;
      if (this.dots) {
        style.textContent +=
          ` .glo-${this.example}-slider__dots {
              position: absolute;
              bottom: 20px;
              width: 100%;
              margin: 20px auto 0;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              justify-content: center;
              z-index: 5;
            }
            .glo-${this.example}-slider__dots .dot {
              cursor: pointer;
              height: 16px;
              width: 16px;
              margin: 0 10px;
              border-radius: 50%;
              border: solid #fff;
              display: inline-block;
              transition: background-color, transform 0.4s, -webkit-transform 0.4s;
            }
            .glo-${this.example}-slider__dots .dot-active {
              background-color: #19b5fe;
              transform: scale(1.2);
            }
            .glo-${this.example}-slider__dots .dot:hover {
              background-color: #53c6fe;
              transform: scale(1.2);
            }`;
      }
    }
  }
  controlSlider() {
    this.prev.addEventListener('click', event => this.prevSlide(event), false);
    this.next.addEventListener('click', event => this.nextSlide(event), false);
  }
  getCenterElem() {
    return this.options.loop ? (this.options.position.master >= -Math.floor(this.slidesToShow / 2) &&
      this.options.position.master < this.slides.master.length - Math.floor(this.slidesToShow / 2) ?
      this.slides.master[this.options.position.master + Math.floor(this.slidesToShow / 2)] :
      this.slides.slave[this.options.position.slave + Math.floor(this.slidesToShow / 2)]) :
      this.slides[this.options.position + Math.floor(this.slidesToShow / 2)];
  }
  getCurrentElem() {
    return this.options.loop ? (this.options.position.master >= 0 &&
        this.options.position.master < this.slides.master.length ?
      this.slides.master[this.options.position.master] :
      this.slides.slave[this.options.position.slave]) :
      this.slides[this.options.position];
  }
  nextSlide(event) {
    event ? event.preventDefault() : null;

    if (this.options.pagination) this.changeDot(false);
    if (this.options.showCenter) this.options.showCenter[1](this.getCenterElem());
    if (this.options.showCurrent) this.options.showCurrent[1](this.getCurrentElem());
    if (this.options.loop) {
      ++this.options.position.master;
      ++this.options.position.slave;
      if (this.options.position.master >= 2 * this.slides.master.length - this.slidesToShow - 1) {
        this.main.prepend(this.wrap.master);
        this.options.position.master = -this.slidesToShow -
        (2 * this.slides.master.length - this.slidesToShow - this.options.position.master);
      }
      if (this.options.position.slave >= 2 * this.slides.slave.length - this.slidesToShow - 1) {
        this.main.prepend(this.wrap.slave);
        this.options.position.slave = -this.slidesToShow -
        (2 * this.slides.slave.length - this.slidesToShow - this.options.position.slave);
      }
      this.wrap.master.style.transform = `translateX(${-this.options.widthSlide * this.options.position.master}${
        this.options.px ? 'px' : '%'})`;
      this.wrap.slave.style.transform = `translateX(${-this.options.widthSlide * this.options.position.slave}${
        this.options.px ? 'px' : '%'})`;
    } else {
      if (this.options.position <= this.slides.length - this.slidesToShow) {
        ++this.options.position;
        this.wrap.style.transform = `translateX(${-this.options.widthSlide * this.options.position}${
          this.options.px ? 'px' : '%'})`;
        if (this.options.position > 0 && this.prev.style.display === 'none') this.prev.style.display = 'flex';
        if (this.options.position === this.slides.length - this.slidesToShow) this.next.style.display = 'none';
      }
    }
    if (this.options.showCenter) this.options.showCenter[0](this.getCenterElem());
    if (this.options.showCurrent) this.options.showCurrent[0](this.getCurrentElem());
    if (this.options.slideCounter) this.setSlideCounter();
    if (this.options.pagination) this.changeDot(true);
  }
  setSlideCounter() {
    if (this.options.loop) {
      this.options.currentCount.textContent = 1 +
        this.options.position.master >= 0 && this.options.position.master < this.slides.master.length ?
        this.options.position.master : this.options.position.slave;
      this.options.totalCount = this.slides.master.length;
    } else {
      this.options.currentCount.textContent = 1 + this.options.position;
      this.options.totalCount.textContent = this.slides.length;
    }
  }
  changeDot(add) {
    if (this.options.loop)
      this.dots[this.options.position.master >= 0 && this.options.position.master < this.slides.master.length ?
        this.options.position.master : this.options.position.slave].classList[add ? 'add' : 'remove']('dot_active');
    else this.dots[this.options.position].classList[add ? 'add' : 'remove']('dot_active');
  }
  prevSlide(event) {
    event ? event.preventDefault() : null;

    if (this.options.pagination) this.changeDot(false);
    if (this.options.showCenter) this.options.showCenter[1](this.getCenterElem());
    if (this.options.showCurrent) this.options.showCurrent[1](this.getCurrentElem());
    if (this.options.loop) {
      --this.options.position.master;
      --this.options.position.slave;
      if (this.options.position.master <= -this.slides.master.length + 1) {
        this.main.prepend(this.wrap.master);
        this.options.position.master = this.slides.master.length +
        (this.slides.master.length + this.options.position.master);
      }
      if (this.options.position.slave <= -this.slides.slave.length + 1) {
        this.main.prepend(this.wrap.slave);
        this.options.position.slave = this.slides.master.length +
        (this.slides.slave.length + this.options.position.slave);
      }
      this.wrap.master.style.transform = `translateX(${-this.options.widthSlide * this.options.position.master}${
        this.options.px ? 'px' : '%'})`;
      this.wrap.slave.style.transform = `translateX(${-this.options.widthSlide * this.options.position.slave}${
        this.options.px ? 'px' : '%'})`;
    } else {
      if (this.options.position >= 0) {
        --this.options.position;
        this.wrap.style.transform = `translateX(${-this.options.widthSlide * this.options.position}${
          this.options.px ? 'px' : '%'})`;
        if (this.options.position < this.slides.length - this.slidesToShow && this.next.style.display === 'none')
          this.next.style.display = 'flex';
        if (this.options.position === 0) this.prev.style.display = 'none';
      }
    }
    if (this.options.showCenter) this.options.showCenter[0](this.getCenterElem());
    if (this.options.showCurrent) this.options.showCurrent[0](this.getCurrentElem());
    if (this.options.slideCounter) this.setSlideCounter();
    if (this.options.pagination) this.changeDot(true);
  }
  addArrow() {
    this.prev = document.createElement('div');
    this.next = document.createElement('div');
    this.prev.className = `glo-${this.example}-slider__prev`;
    this.next.className = `glo-${this.example}-slider__next`;
    this.main.append(this.prev);
    this.main.append(this.next);
  }
  addPagination() {
    const dotsList = this.dotsList || this.main.appendChild(document.createElement('div'));

    if (!dotsList.className) {
      dotsList.classList.add(`glo-${this.example}-slider__dots`);
      this.slides.master.forEach((elem, index) =>
        (dotsList.innerHTML += `<li class="dot${index === this.options.position.master ?
          ' dot_active' : ''}" id="dot${index}""></li>`));
    } else {
      dotsList.style.display = 'flex';
      [...dotsList.children].forEach((item, index) => {
        item.id = `dot${index}`;
        item.classList.remove('dot_active');
      });
      this.changeDot(true);
    }
    dotsList.addEventListener('click',  event => {
      if (!event.target.matches('.dot')) {
        return;
      }
      const delta = this.options.loop ?
        (this.options.position.master >= 0 && this.options.position.master < this.slides.master.length ?
          +event.target.id.slice(3) - this.options.position.master :
          +event.target.id.slice(3) - this.options.position.slave) :
        +event.target.id.slice(3) - this.options.position;
      if (delta) {
        this.changeDot(false);
        if (delta > 0) {
          if (this.options.loop) {
            this.options.position.master += delta - 1;
            this.options.position.slave += delta - 1;
          } else this.options.position += delta - 1;
          this.nextSlide(event);
        } else {
          if (this.options.loop) {
            this.options.position.master += delta + 1;
            this.options.position.slave += delta + 1;
          } else this.options.position += delta + 1;
          this.prevSlide(event);
        }
      }
    });
    return dotsList.querySelectorAll('.dot');
  }
  responsiveInit() {
    const
      slidersToShowDefault = this.slidesToShow,
      allResponse = this.responsive.map(item => item.breakpoint),
      maxResponse = Math.max(...allResponse),
      checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (this.interval) {
          this.stopSlider();
        }
        if (widthWindow < maxResponse) {
          allResponse.forEach((item, index) => {
            if (widthWindow < item) {
              this.slidesToShow = this.responsive[index].slidesToShow;
              this.options.widthSlide = this.options.px ? this.options.px : Math.floor(100 / this.slidesToShow);
              // replace with universally solution
              if (this.options.px) this.options.position = 0;
              this.addStyle();
            }
          });
        } else {
          this.slidesToShow = slidersToShowDefault;
          this.options.widthSlide = this.options.px ? this.options.px : Math.floor(100 / this.slidesToShow);
          // replace with universally solution
          if (this.options.px) this.options.position = 0;
          if (this.options.resetDefault)
            this.options.loop ? this.options.position.master = 0 : this.options.position = 0;
          this.addStyle();
        }
        this.setStartPosition();

        if (this.options.showCenter) {
          if (this.options.loop) {
            this.slides.master.forEach(this.options.showCenter[1]);
            this.slides.slave.forEach(this.options.showCenter[1]);
          } else {
            this.slides.forEach(this.options.showCenter[1]);
          }
          this.options.showCenter[0](this.getCenterElem());
        }
        if (this.options.showCurrent) {
          if (this.options.loop) {
            this.slides.master.forEach(this.options.showCurrent[1]);
            this.slides.slave.forEach(this.options.showCurrent[1]);
          } else {
            this.slides.forEach(this.options.showCurrent[1]);
          }
          this.options.showCurrent[0](this.getCenterElem());
        }
        this.resetSlider();
        if (this.options.autoplay) {
          this.startSlider();
        }
      };

    checkResponse();
    window.addEventListener('resize', () => checkResponse());
  }
  resetSlider() {
    if (this.options.loop) {
      this.main.prepend(this.wrap.slave);
      this.main.prepend(this.wrap.master);
    } else {
      this.main.prepend(this.wrap);
    }
  }
}

export default SliderCarousel;
