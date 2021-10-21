class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev,
    slide,
    loop = false,
    pagination = false,
    position = 0,
    showCenter = [],
    autoplay = false,
    time = 3000,
    slidesToShow = 3,
    responsive = []
  }) {
    const wrapElem = document.querySelector(wrap);

    this.example = 1;
    this.main = document.querySelector(main);
    this.wrap = {
      master: wrapElem,
      slave: wrapElem.cloneNode(true)
    };
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.dots = [];
    this.slidesToShow = slidesToShow;
    this.interval = 0,
    this.responsive = responsive;
    this.slides = {
      master: slide ? [...this.wrap.master.querySelectorAll(slide)] : [...this.wrap.master.children],
      slave: slide ? [...this.wrap.slave.querySelectorAll(slide)] : [...this.wrap.slave.children]
    };
    this.options = {
      position: {
        master: position,
        slave: this.slides.master.length + position
      },
      showCenter,
      loop,
      pagination,
      autoplay,
      time,
      widthSlide: Math.floor(100 / this.slidesToShow),
      maxPosition: this.slides.master.length - this.slidesToShow
    };
  }
  init() {
    this.checkExample();
    if (!this.next || !this.prev) {
      this.addArrow();
    }
    this.addGloClass();
    this.addStyle();
    if (this.options.pagination) {
      this.dots.push(...this.addPagination());
    }
    this.controlSlider();
    this.main.insertBefore(this.wrap.slave, this.wrap.master.nextElementSibling);
    if (this.options.autoplay) {
      this.startSlider();
      this.main.addEventListener('mouseover', event =>
        (event.target.matches(`.glo-${this.example}-slider__buttons, .dot`) ? this.stopSlider() : null));
      this.main.addEventListener('mouseout', event =>
        (event.target.matches(`.glo-${this.example}-slider__buttons, .dot`) ? this.startSlider(event) : null));
    }
    if (this.responsive) this.responsiveInit();
    this.setStartPosition();
    if (this.options.showCenter) this.options.showCenter[0](this.getCenterElem());
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
    this.wrap.master.style.transform = `translateX(${-this.options.widthSlide * this.options.position.master}%)`;
    this.wrap.slave.style.transform = `translateX(${-this.options.widthSlide * this.options.position.slave}%)`;
  }
  addGloClass() {
    this.main.classList.add(`glo-${this.example}-slider`);
    this.wrap.master.classList.add(`glo-${this.example}-slider__wrap`);
    this.wrap.master.classList.add(`glo-${this.example}-slider__wrap_master`);
    this.wrap.slave.classList.add(`glo-${this.example}-slider__wrap`);
    this.wrap.slave.classList.add(`glo-${this.example}-slider__wrap_slave`);
    this.slides.master.forEach(item => item.classList.add(`glo-${this.example}-slider__item`));
    this.slides.slave.forEach(item => item.classList.add(`glo-${this.example}-slider__item`));
    this.prev.classList.add(`glo-${this.example}-slider__buttons`);
    this.next.classList.add(`glo-${this.example}-slider__buttons`);
  }
  addStyle() {
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
        }
        .glo-${this.example}-slider__wrap.glo-${this.example}-slider__wrap_slave {
          position: absolute !important;
          top: 0 !important;
        }
        .glo-${this.example}-slider__item {
          display: flex !important;
          flex: 0 0 ${this.options.widthSlide}% !important;
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
  controlSlider() {
    this.prev.addEventListener('click', event => this.prevSlide(event));
    this.next.addEventListener('click', event => this.nextSlide(event));
  }
  getCenterElem() {
    return this.options.position.master >= -Math.floor(this.slidesToShow / 2) &&
      this.options.position.master < this.slides.master.length - Math.floor(this.slidesToShow / 2) ?
      this.slides.master[this.options.position.master + Math.floor(this.slidesToShow / 2)] :
      this.slides.slave[this.options.position.slave + Math.floor(this.slidesToShow / 2)];
  }
  highlightCentralElement() {
    const
      elem = this.getCenterElem(),
      item = elem.closest('.formula-item__icon'),
      slide = elem.closest('.formula-slider__slide');
    console.log(item, slide);
  }
  nextSlide(event) {
    event ? event.preventDefault() : null;

    if (this.options.pagination) this.changeDot(false);
    if (this.options.showCenter) this.options.showCenter[1](this.getCenterElem());
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
    this.wrap.master.style.transform = `translateX(${-this.options.widthSlide * this.options.position.master}%)`;
    this.wrap.slave.style.transform = `translateX(${-this.options.widthSlide * this.options.position.slave}%)`;
    if (this.options.showCenter) this.options.showCenter[0](this.getCenterElem());
    if (this.options.pagination) this.changeDot(true);
  }
  changeDot(add) {
    this.dots[this.options.position.master >= 0 && this.options.position.master < this.slides.master.length ?
      this.options.position.master : this.options.position.slave].classList[add ? 'add' : 'remove']('dot-active');
  }
  prevSlide(event) {
    event ? event.preventDefault() : null;

    if (this.options.pagination) this.changeDot(false);
    if (this.options.showCenter) this.options.showCenter[1](this.getCenterElem());
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
    this.wrap.master.style.transform = `translateX(${-this.options.widthSlide * this.options.position.master}%)`;
    this.wrap.slave.style.transform = `translateX(${-this.options.widthSlide * this.options.position.slave}%)`;
    if (this.options.showCenter) this.options.showCenter[0](this.getCenterElem());
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
    const dotsList = this.main.appendChild(document.createElement('ul'));

    dotsList.classList.add(`glo-${this.example}-slider__dots`);
    this.slides.master.forEach((elem, index) =>
      (dotsList.innerHTML += `<li class="dot${index === this.options.position.master ?
        ' dot-active' : ''}" id="dot${index}""></li>`));

    dotsList.addEventListener('click',  event => {
      if (!event.target.matches('.dot')) {
        return;
      }
      const delta = this.options.position.master >= 0 && this.options.position.master < this.slides.master.length ?
        +event.target.id.slice(3) - this.options.position.master :
        +event.target.id.slice(3) - this.options.position.slave;
      if (delta) {
        this.changeDot(false);
        if (delta > 0) {
          this.options.position.master += delta - 1;
          this.options.position.slave += delta - 1;
          this.nextSlide(event);
        } else {
          this.options.position.master += delta + 1;
          this.options.position.slave += delta + 1;
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
              this.options.widthSlide = Math.floor(100 / this.slidesToShow);
              this.addStyle();
            }
          });
        } else {
          this.slidesToShow = slidersToShowDefault;
          this.options.widthSlide = Math.floor(100 / this.slidesToShow);
          this.addStyle();
        }
        this.setStartPosition();
        this.main.prepend(this.wrap.slave);
        this.main.prepend(this.wrap.master);
        if (this.options.autoplay) {
          this.startSlider();
        }
      };

    checkResponse();
    window.addEventListener('resize', () => checkResponse());
  }
}

export default SliderCarousel;
