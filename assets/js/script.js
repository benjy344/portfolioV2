(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Slider = require('./modules/Slider.js');

var _Slider2 = _interopRequireDefault(_Slider);

var _TiltFx2 = require('./modules/TiltFx.js');

var _TiltFx3 = _interopRequireDefault(_TiltFx2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = {
	init: function init() {
		this.$el = $('body');
		this.$linkTo = this.$el.find('.js-link-to');
		this.nav = this.$el.find('.main-nav');
		this.$previews = this.$el.find('.js-preview');
		this.$slider = this.$el.find('.js-slider');
		this.$skills = this.$el.find('.js-skills-content');
		this.$bands = this.$el.find('.js-band');
		this.$form = this.$el.find('.js-form');
		this.tiltSettings = [{}, {
			movement: {
				imgWrapper: {
					translation: { x: 10, y: 10, z: 30 },
					rotation: { x: 0, y: -10, z: 0 },
					reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
				},
				lines: {
					translation: { x: 10, y: 10, z: [0, 70] },
					rotation: { x: 0, y: 0, z: -2 },
					reverseAnimation: { duration: 2000, easing: 'easeOutExpo' }
				},
				caption: {
					rotation: { x: 0, y: 0, z: 2 },
					reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
				},
				overlay: {
					translation: { x: 10, y: -10, z: 0 },
					rotation: { x: 0, y: 0, z: 2 },
					reverseAnimation: { duration: 2000, easing: 'easeOutExpo' }
				},
				shine: {
					translation: { x: 100, y: 100, z: 0 },
					reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
				}
			}
		}, {
			movement: {
				imgWrapper: {
					rotation: { x: -5, y: 10, z: 0 },
					reverseAnimation: { duration: 900, easing: 'easeOutCubic' }
				},
				caption: {
					translation: { x: 30, y: 30, z: [0, 40] },
					rotation: { x: [0, 15], y: 0, z: 0 },
					reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
				},
				overlay: {
					translation: { x: 10, y: 10, z: [0, 20] },
					reverseAnimation: { duration: 1000, easing: 'easeOutExpo' }
				},
				shine: {
					translation: { x: 100, y: 100, z: 0 },
					reverseAnimation: { duration: 900, easing: 'easeOutCubic' }
				}
			}
		}, {
			movement: {
				imgWrapper: {
					rotation: { x: -5, y: 10, z: 0 },
					reverseAnimation: { duration: 50, easing: 'easeOutQuad' }
				},
				caption: {
					translation: { x: 20, y: 20, z: 0 },
					reverseAnimation: { duration: 200, easing: 'easeOutQuad' }
				},
				overlay: {
					translation: { x: 5, y: -5, z: 0 },
					rotation: { x: 0, y: 0, z: 6 },
					reverseAnimation: { duration: 1000, easing: 'easeOutQuad' }
				},
				shine: {
					translation: { x: 50, y: 50, z: 0 },
					reverseAnimation: { duration: 50, easing: 'easeOutQuad' }
				}
			}
		}, {
			movement: {
				imgWrapper: {
					translation: { x: 0, y: -8, z: 0 },
					rotation: { x: 3, y: 3, z: 0 },
					reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
				},
				lines: {
					translation: { x: 15, y: 15, z: [0, 15] },
					reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
				},
				overlay: {
					translation: { x: 0, y: 8, z: 0 },
					reverseAnimation: { duration: 600, easing: 'easeOutExpo' }
				},
				caption: {
					translation: { x: 10, y: -15, z: 0 },
					reverseAnimation: { duration: 900, easing: 'easeOutExpo' }
				},
				shine: {
					translation: { x: 50, y: 50, z: 0 },
					reverseAnimation: { duration: 1200, easing: 'easeOutExpo' }
				}
			}
		}, {
			movement: {
				lines: {
					translation: { x: -5, y: 5, z: 0 },
					reverseAnimation: { duration: 1000, easing: 'easeOutExpo' }
				},
				caption: {
					translation: { x: 15, y: 15, z: 0 },
					rotation: { x: 0, y: 0, z: 3 },
					reverseAnimation: { duration: 1500, easing: 'easeOutElastic', elasticity: 700 }
				},
				overlay: {
					translation: { x: 15, y: -15, z: 0 },
					reverseAnimation: { duration: 500, easing: 'easeOutExpo' }
				},
				shine: {
					translation: { x: 50, y: 50, z: 0 },
					reverseAnimation: { duration: 500, easing: 'easeOutExpo' }
				}
			}
		}, {
			movement: {
				imgWrapper: {
					translation: { x: 5, y: 5, z: 0 },
					reverseAnimation: { duration: 800, easing: 'easeOutQuart' }
				},
				caption: {
					translation: { x: 10, y: 10, z: [0, 50] },
					reverseAnimation: { duration: 1000, easing: 'easeOutQuart' }
				},
				shine: {
					translation: { x: 50, y: 50, z: 0 },
					reverseAnimation: { duration: 800, easing: 'easeOutQuart' }
				}
			}
		}, {
			movement: {
				lines: {
					translation: { x: 40, y: 40, z: 0 },
					reverseAnimation: { duration: 1500, easing: 'easeOutElastic' }
				},
				caption: {
					translation: { x: 20, y: 20, z: 0 },
					rotation: { x: 0, y: 0, z: -5 },
					reverseAnimation: { duration: 1000, easing: 'easeOutExpo' }
				},
				overlay: {
					translation: { x: -30, y: -30, z: 0 },
					rotation: { x: 0, y: 0, z: 3 },
					reverseAnimation: { duration: 750, easing: 'easeOutExpo' }
				},
				shine: {
					translation: { x: 100, y: 100, z: 0 },
					reverseAnimation: { duration: 750, easing: 'easeOutExpo' }
				}
			}
		}];

		this.UserSee = true;
		this.skillsOn = false;

		this.sr = ScrollReveal({ reset: false });

		//init Slider 
		if (this.$slider.length) {
			this.autoplay = new _Slider2.default();
			this.autoplay.init(this.$slider);
		}
		this.viewIsActive();

		// linkTo function if links exist 
		if (this.$linkTo.length) this.linkTo();

		// scroll for top menu nav 
		this.scroll();

		// function reval 
		this.reval();

		//preload img 
		if (this.$previews.length) this.preload();

		//preload img preview 
		this.initPortfolioPreview();

		//init form 
		if (this.$form.length) this.initForm();
	},
	viewIsActive: function viewIsActive() {
		var _this = this;

		window.onfocus = function () {
			_this.UserSee = true;
		};

		window.onblur = function () {
			_this.UserSee = false;
		};
		setInterval(function () {
			if (!_this.UserSee) _this.autoplay.stop();
		}, 1000);
	},
	linkTo: function linkTo() {
		var _this2 = this;

		this.$linkTo.on('click touch', function (e) {
			var target = $(e.currentTarget).attr('href');
			var $section = _this2.$el.find(target);
			console.log('scroll to');
			$('body, html').animate({
				scrollTop: $section.offset().top
			}, 1000);
		});
	},
	isVisible: function isVisible(element) {
		var $element = $(element);
		var topElement = $element.offset().top;
		var bottomElement = $element.offset().top + $element.height();
		var scrolltop = $(window).scrollTop();
		var scrollBottom = scrolltop + $(window).height();
		var isVisible = false;

		if (topElement > scrolltop && bottomElement < scrollBottom) {
			isVisible = true;
		} else {
			isVisible = false;
		}
		return isVisible;
	},
	scroll: function scroll() {
		var _this3 = this;

		var step1 = this.$el.find('#about').offset().top;
		$(window).scrollTop() >= step1 - 100 ? this.nav.addClass('fixy') : this.nav.removeClass('fixy');
		$(window).scrollTop() >= step1 ? this.nav.addClass('active') : this.nav.removeClass('active');

		$(window).on('scroll', function () {
			var currentScroll = $(window).scrollTop();

			currentScroll >= 80 ? _this3.nav.css('top', '-61px') : _this3.nav.css('top', '0px');
			currentScroll >= step1 - 100 ? _this3.nav.addClass('fixy') : _this3.nav.removeClass('fixy');
			currentScroll >= step1 ? _this3.nav.addClass('active') : _this3.nav.removeClass('active');

			//init slider 		
			if (_this3.$slider.length) {
				if (_this3.isVisible(_this3.$slider)) {
					_this3.autoplay.play();
				} else {
					_this3.autoplay.stop();
				}
			}

			if (_this3.$skills.length) {
				if (_this3.isVisible(_this3.$skills[0])) {
					_this3.showSkills();
				}
			}

			if (_this3.$bands.length) {
				_this3.showBands();
			}
		});
	},
	reval: function reval() {
		//left to right
		this.sr.reveal('.js-reval-left', { distance: '100px', origin: 'left', scale: 1, duration: 500 });
		this.sr.reveal('.js-reval-left-delay', { distance: '100px', origin: 'left', scale: 1, delay: 500, duration: 500 });
		this.sr.reveal('.js-reval-left-long-delay', { distance: '100px', origin: 'left', scale: 1, delay: 1500, duration: 500 });
		//right to left
		this.sr.reveal('.js-reval-right', { distance: '100px', origin: 'right', scale: 1, duration: 500 });
		this.sr.reveal('.js-reval-right-delay', { distance: '100px', origin: 'right', scale: 1, delay: 500, duration: 500 });
		this.sr.reveal('.js-reval-right-long-delay', { distance: '100px', origin: 'right', scale: 1, delay: 1500, duration: 500 });
		//bottom to top 
		this.sr.reveal('.js-reval-top', { distance: '100px', origin: 'bottom', scale: 1, duration: 500 });
		this.sr.reveal('.js-reval-top-delay', { distance: '100px', origin: 'bottom', scale: 1, delay: 500, duration: 500 });
		this.sr.reveal('.js-reval-top-long-delay', { distance: '100px', origin: 'bottom', scale: 1, delay: 1500, duration: 500 });
	},
	showSkills: function showSkills() {

		if (!this.skillsOn) {
			var $skills = this.$el.find('.js-percent');
			$skills.each(function (index, current) {
				var _percent = $(current).attr('data-percent') + '%';
				$(current).css('width', _percent);
			});
		}
	},
	showBands: function showBands() {
		var _this4 = this;

		this.$bands.each(function (i, current) {
			var _band = $(current);

			if (_this4.isVisible(current)) {
				_band.hasClass('js-band-right') ? _band.css('right', 0) : _band.css('left', 0);
				if (_band.hasClass('js-last-band')) _this4.$form.addClass('visible');
			}
		});
	},
	preload: function preload() {
		var _this5 = this;

		this.$previews.each(function (idx, container) {
			var $container = $(container);
			var _url = $container.data('image-url');
			var img = new Image();

			img.src = _url;

			// if we have this image already cached, we don't have
			// to wait for the onload callback and can remove the
			// preview image immediately
			if (_this5.imgComplete(img)) {
				_this5.removePreview($container, _url);
			} else {
				img.onload = function () {
					_this5.removePreview($container, _url);
				};
			}
		});
	},
	imgComplete: function imgComplete(img) {
		return img.complete || img.width + img.height > 0;
	},
	removePreview: function removePreview($container, url) {
		$container.css({ 'background-image': 'url("' + url + '")' });
		$container.removeClass('js-preview preview');
	},
	initPortfolioPreview: function initPortfolioPreview() {
		var idx = 0;
		[].slice.call($('a.tilter')).forEach(function (el, pos) {
			idx = pos % 2 === 0 ? idx + 1 : idx;
			var _TiltFx = new _TiltFx3.default();
			_TiltFx.init(el, App.tiltSettings[idx - 1]);
		});

		var pater = this.$el.find('.pater');
		var paterSVG = pater.find('.pater__svg');
		var pathEl = paterSVG.find('path');
		var paths = { default: pathEl.attr('d'), active: paterSVG.attr('data-path-hover') };

		pater.on('mouseenter', function () {
			anime.remove(pathEl);
			anime({
				targets: pathEl,
				d: paths.active,
				duration: 400,
				easing: 'easeOutQuad'
			});
		});

		pater.on('mouseleave', function () {
			anime.remove(pathEl);
			anime({
				targets: pathEl,
				d: paths.default,
				duration: 400,
				easing: 'easeOutExpo'
			});
		});
	},
	initForm: function initForm() {

		$('textarea').blur(function () {
			$('#hire textarea').each(function () {
				var $this = $(this);
				console.log(this.value);
				if (this.value != '') {
					$this.addClass('focused');
					$('textarea + label + span').css({ 'opacity': 1 });
				} else {
					$this.removeClass('focused');
					$('textarea + label + span').css({ 'opacity': 0 });
				}
			});
		});

		$('#hire .field:first-child input').blur(function () {
			$('#hire .field:first-child input').each(function () {
				var $this = $(this);
				console.log(this.value);
				if (this.value != '') {
					$this.addClass('focused');
					$('.field:first-child input + label + span').css({ 'opacity': 1 });
				} else {
					$this.removeClass('focused');
					$('.field:first-child input + label + span').css({ 'opacity': 0 });
				}
			});
		});

		$('#hire .field:nth-child(2) input').blur(function () {
			$('#hire .field:nth-child(2) input').each(function () {
				var $this = $(this);
				console.log(this.value);
				if (this.value != '') {
					$this.addClass('focused');
					$('.field:nth-child(2) input + label + span').css({ 'opacity': 1 });
				} else {
					$this.removeClass('focused');
					$('.field:nth-child(2) input + label + span').css({ 'opacity': 0 });
				}
			});
		});
	}
};

$(window).ready(App.init.bind(App));

},{"./modules/Slider.js":2,"./modules/TiltFx.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
	function Slider() {
		_classCallCheck(this, Slider);
	}

	_createClass(Slider, [{
		key: 'init',
		value: function init(el) {
			var _this = this;

			this.$el = $(el);
			this.$container = this.$el.find('ul');
			this.$sliders = this.$container.find('li');
			this.nomberSlide = this.$sliders.length;
			this.width = 300;
			this.left = -this.width;
			this.duration = 3500;
			this.currentIndex = 1;
			this.isPlaying = false;

			this.$container.css('width', this.nomberSlide * this.width + 'px');
			$(this.$sliders[0]).addClass('active');

			this.$el.hover(function () {
				_this.stop();
			}, function () {
				_this.play();
			});
		}
	}, {
		key: 'slider',
		value: function slider() {
			var _this2 = this;

			this.$container.animate({
				left: this.left + 'px'
			}, 200, function () {
				$(_this2.$sliders).removeClass('active');
				$(_this2.$sliders[_this2.currentIndex]).addClass('active');
				if (_this2.left > (_this2.nomberSlide - 1) * -_this2.width) {
					_this2.left = _this2.left - _this2.width;
					_this2.currentIndex++;
				} else {
					_this2.left = 0;
					_this2.currentIndex = 0;
				}
			});
		}
	}, {
		key: 'play',
		value: function play() {

			if (!this.isPlaying) {
				this.timer = setInterval(this.slider.bind(this), this.duration);
				this.isPlaying = true;
			}
		}
	}, {
		key: 'stop',
		value: function stop() {
			if (this.isPlaying) {
				clearInterval(this.timer);
				this.isPlaying = false;
			}
		}
	}]);

	return Slider;
}();

exports.default = Slider;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TiltFx = function () {
	function TiltFx() {
		_classCallCheck(this, TiltFx);
	}

	_createClass(TiltFx, [{
		key: 'extend',


		// Helper vars and functions.
		value: function extend(a, b) {
			for (var key in b) {
				if (b.hasOwnProperty(key)) {
					a[key] = b[key];
				}
			}
			return a;
		}
	}, {
		key: 'getMousePos',
		value: function getMousePos(e) {
			var posx = 0;
			var posy = 0;

			if (!e) {
				var _e = window.event;
			}
			if (e.pageX || e.pageY) {
				posx = e.pageX;
				posy = e.pageY;
			} else if (e.clientX || e.clientY) {
				posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
				posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
			}
			return { x: posx, y: posy };
		}

		/**
   * Init.
   */

	}, {
		key: 'init',
		value: function init(el, options) {
			this.DOM = {};
			this.DOM.el = el;
			this.options = {
				movement: {
					imgWrapper: {
						translation: { x: 0, y: 0, z: 0 },
						rotation: { x: -5, y: 5, z: 0 },
						reverseAnimation: {
							duration: 1200,
							easing: 'easeOutElastic',
							elasticity: 600
						}
					},
					lines: {
						translation: { x: 10, y: 10, z: [0, 10] },
						reverseAnimation: {
							duration: 1000,
							easing: 'easeOutExpo',
							elasticity: 600
						}
					},
					caption: {
						translation: { x: 20, y: 20, z: 0 },
						rotation: { x: 0, y: 0, z: 0 },
						reverseAnimation: {
							duration: 1500,
							easing: 'easeOutElastic',
							elasticity: 600
						}
					},
					/*
     overlay : {
     	translation : {x: 10, y: 10, z: [0,50]},
     	reverseAnimation : {
     		duration : 500,
     		easing : 'easeOutExpo'
     	}
     },
     */
					shine: {
						translation: { x: 50, y: 50, z: 0 },
						reverseAnimation: {
							duration: 1200,
							easing: 'easeOutElastic',
							elasticity: 600
						}
					}
				}
			};
			this.extend(this.options, options);
			this.DOM.animatable = {};
			this.DOM.animatable.imgWrapper = this.DOM.el.querySelector('.tilter__figure');
			this.DOM.animatable.lines = this.DOM.el.querySelector('.tilter__deco--lines');
			this.DOM.animatable.caption = this.DOM.el.querySelector('.tilter__caption');
			this.DOM.animatable.overlay = this.DOM.el.querySelector('.tilter__deco--overlay');
			this.DOM.animatable.shine = this.DOM.el.querySelector('.tilter__deco--shine > div');
			this.initEvents();
		}
	}, {
		key: 'initEvents',
		value: function initEvents() {
			var _this = this;

			$(this.DOM.el).on('mousemove', function (e) {
				_this.mousemoveFn(e);
			});
			$(this.DOM.el).on('mouseleave', function (e) {
				_this.mouseleaveFn(e);
			});
			$(this.DOM.el).on('mouseenter', function () {
				_this.mouseenterFn();
			});
		}
	}, {
		key: 'mousemoveFn',
		value: function mousemoveFn(ev) {
			var _this2 = this;

			requestAnimationFrame(function () {
				_this2.layout(ev);
			});
		}
	}, {
		key: 'mouseenterFn',
		value: function mouseenterFn() {
			for (var key in this.DOM.animatable) {
				anime.remove(this.DOM.animatable[key]);
			}
		}
	}, {
		key: 'mouseleaveFn',
		value: function mouseleaveFn(ev) {
			var _this3 = this;

			requestAnimationFrame(function () {
				for (var key in _this3.DOM.animatable) {
					if (_this3.options.movement[key] == undefined) {
						continue;
					}
					anime({
						targets: _this3.DOM.animatable[key],
						duration: _this3.options.movement[key].reverseAnimation != undefined ? _this3.options.movement[key].reverseAnimation.duration || 0 : 1,
						easing: _this3.options.movement[key].reverseAnimation != undefined ? _this3.options.movement[key].reverseAnimation.easing || 'linear' : 'linear',
						elasticity: _this3.options.movement[key].reverseAnimation != undefined ? _this3.options.movement[key].reverseAnimation.elasticity || null : null,
						scaleX: 1,
						scaleY: 1,
						scaleZ: 1,
						translateX: 0,
						translateY: 0,
						translateZ: 0,
						rotateX: 0,
						rotateY: 0,
						rotateZ: 0
					});
				}
			});
		}
	}, {
		key: 'layout',
		value: function layout(ev) {
			// Mouse position relative to the document.
			var mousepos = this.getMousePos(ev);
			// Document scrolls.
			var docScrolls = { left: document.body.scrollLeft + document.documentElement.scrollLeft, top: document.body.scrollTop + document.documentElement.scrollTop };
			var bounds = this.DOM.el.getBoundingClientRect();
			// Mouse position relative to the main element (this.DOM.el).
			var relmousepos = { x: mousepos.x - bounds.left - docScrolls.left, y: mousepos.y - bounds.top - docScrolls.top };

			// Movement settings for the animatable elements.
			for (var key in this.DOM.animatable) {
				if (this.DOM.animatable[key] == undefined || this.options.movement[key] == undefined) {
					continue;
				}
				var t = this.options.movement[key] != undefined ? this.options.movement[key].translation || { x: 0, y: 0, z: 0 } : { x: 0, y: 0, z: 0 };
				var r = this.options.movement[key] != undefined ? this.options.movement[key].rotation || { x: 0, y: 0, z: 0 } : { x: 0, y: 0, z: 0 };

				this.setRange(t);
				this.setRange(r);

				var transforms = {
					translation: {
						x: (t.x[1] - t.x[0]) / bounds.width * relmousepos.x + t.x[0],
						y: (t.y[1] - t.y[0]) / bounds.height * relmousepos.y + t.y[0],
						z: (t.z[1] - t.z[0]) / bounds.height * relmousepos.y + t.z[0]
					},
					rotation: {
						x: (r.x[1] - r.x[0]) / bounds.height * relmousepos.y + r.x[0],
						y: (r.y[1] - r.y[0]) / bounds.width * relmousepos.x + r.y[0],
						z: (r.z[1] - r.z[0]) / bounds.width * relmousepos.x + r.z[0]
					}
				};

				this.DOM.animatable[key].style.WebkitTransform = this.DOM.animatable[key].style.transform = 'translateX(' + transforms.translation.x + 'px) translateY(' + transforms.translation.y + 'px) translateZ(' + transforms.translation.z + 'px) rotateX(' + transforms.rotation.x + 'deg) rotateY(' + transforms.rotation.y + 'deg) rotateZ(' + transforms.rotation.z + 'deg)';
			}
		}
	}, {
		key: 'setRange',
		value: function setRange(obj) {
			for (var k in obj) {
				if (obj[k] == undefined) {
					obj[k] = [0, 0];
				} else if (typeof obj[k] === 'number') {
					obj[k] = [-1 * obj[k], obj[k]];
				}
			}
		}
	}]);

	return TiltFx;
}();

exports.default = TiltFx;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvYXBwLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvU2xpZGVyLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvVGlsdEZ4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLE1BQU07QUFHVCxLQUhTLGtCQUdGO0FBQ04sT0FBSyxHQUFMLEdBQWlCLEVBQUUsTUFBRixDQUFqQjtBQUNBLE9BQUssT0FBTCxHQUFpQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsYUFBZCxDQUFqQjtBQUNBLE9BQUssR0FBTCxHQUFlLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxXQUFkLENBQWY7QUFDQSxPQUFLLFNBQUwsR0FBaUIsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGFBQWQsQ0FBakI7QUFDQSxPQUFLLE9BQUwsR0FBaUIsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLFlBQWQsQ0FBakI7QUFDQSxPQUFLLE9BQUwsR0FBaUIsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLG9CQUFkLENBQWpCO0FBQ0EsT0FBSyxNQUFMLEdBQWlCLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxVQUFkLENBQWpCO0FBQ0EsT0FBSyxLQUFMLEdBQWlCLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxVQUFkLENBQWpCO0FBQ0EsT0FBSyxZQUFMLEdBQW9CLENBQ25CLEVBRG1CLEVBRW5CO0FBQ0MsYUFBVTtBQUNULGdCQUFhO0FBQ1osa0JBQWMsRUFBQyxHQUFHLEVBQUosRUFBUSxHQUFHLEVBQVgsRUFBZSxHQUFHLEVBQWxCLEVBREY7QUFFWixlQUFXLEVBQUMsR0FBRyxDQUFKLEVBQU8sR0FBRyxDQUFDLEVBQVgsRUFBZSxHQUFHLENBQWxCLEVBRkM7QUFHWix1QkFBbUIsRUFBQyxVQUFXLEdBQVosRUFBaUIsUUFBUyxhQUExQjtBQUhQLEtBREo7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QUFrQixRQUF0QixFQUFpQztBQUNyQyxTQUFJLENBQUosSUFBUyxDQUFDLENBQUMsQ0FBRCxHQUFHLElBQUksQ0FBSixDQUFKLEVBQVcsSUFBSSxDQUFKLENBQVgsQ0FBVDtBQUNBO0FBQ0Q7QUFDRDs7Ozs7O2tCQUlhLE0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFNsaWRlciBmcm9tICcuL21vZHVsZXMvU2xpZGVyLmpzJztcbmltcG9ydCBUaWx0RnggZnJvbSAnLi9tb2R1bGVzL1RpbHRGeC5qcyc7XG5cbmxldCBBcHAgPSB7XG5cblx0XG5cdGluaXQoKSB7XG5cdFx0dGhpcy4kZWwgICAgICAgPSAkKCdib2R5Jyk7XG5cdFx0dGhpcy4kbGlua1RvICAgPSB0aGlzLiRlbC5maW5kKCcuanMtbGluay10bycpO1xuXHRcdHRoaXMubmF2IFx0ICAgPSB0aGlzLiRlbC5maW5kKCcubWFpbi1uYXYnKTtcdFx0XG5cdFx0dGhpcy4kcHJldmlld3MgPSB0aGlzLiRlbC5maW5kKCcuanMtcHJldmlldycpO1xuXHRcdHRoaXMuJHNsaWRlciAgID0gdGhpcy4kZWwuZmluZCgnLmpzLXNsaWRlcicpO1xuXHRcdHRoaXMuJHNraWxscyAgID0gdGhpcy4kZWwuZmluZCgnLmpzLXNraWxscy1jb250ZW50Jyk7XG5cdFx0dGhpcy4kYmFuZHMgICAgPSB0aGlzLiRlbC5maW5kKCcuanMtYmFuZCcpO1xuXHRcdHRoaXMuJGZvcm0gICAgID0gdGhpcy4kZWwuZmluZCgnLmpzLWZvcm0nKTtcblx0XHR0aGlzLnRpbHRTZXR0aW5ncyA9IFtcblx0XHRcdHt9LFxuXHRcdFx0e1xuXHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdGltZ1dyYXBwZXIgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogMTAsIHo6IDMwfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IC0xMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMjAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YWQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bGluZXMgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogMTAsIHo6IFswLDcwXX0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAtMn0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMjAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAyfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAyMDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IC0xMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAyfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAyMDAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMDAsIHk6IDEwMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMjAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YWQnfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRpbWdXcmFwcGVyIDoge1xuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogLTUsIHk6IDEwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA5MDAsIGVhc2luZyA6ICdlYXNlT3V0Q3ViaWMnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDMwLCB5OiAzMCwgejogWzAsNDBdfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IFswLDE1XSwgeTogMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG92ZXJsYXkgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogMTAsIHo6IFswLDIwXX0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAwLCB5OiAxMDAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDkwMCwgZWFzaW5nIDogJ2Vhc2VPdXRDdWJpYyd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdGltZ1dyYXBwZXIgOiB7XG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAtNSwgeTogMTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDUwLCBlYXNpbmcgOiAnZWFzZU91dFF1YWQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDIwLCB5OiAyMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMjAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YWQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDUsIHk6IC01LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IDZ9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEwMDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDUwLCB5OiA1MCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNTAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdGltZ1dyYXBwZXIgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAwLCB5OiAtOCwgejogMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAzLCB5OiAzLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMjAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bGluZXMgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxNSwgeTogMTUsIHo6IFswLDE1XX0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG92ZXJsYXkgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAwLCB5OiA4LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA2MDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IC0xNSwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogOTAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1MCwgeTogNTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEyMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdGxpbmVzIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogLTUsIHk6IDUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEwMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTUsIHk6IDE1LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IDN9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDE1MDAsIGVhc2luZyA6ICdlYXNlT3V0RWxhc3RpYycsIGVsYXN0aWNpdHkgOiA3MDB9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTUsIHk6IC0xNSwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNTAwLGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDUwLCB5OiA1MCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNTAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRpbWdXcmFwcGVyIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNSwgeTogNSwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogODAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YXJ0J31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogMTAsIHo6IFswLDUwXX0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFydCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDUwLCB5OiA1MCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogODAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YXJ0J31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0bGluZXMgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA0MCwgeTogNDAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDE1MDAsIGVhc2luZyA6ICdlYXNlT3V0RWxhc3RpYyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMjAsIHk6IDIwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IC01fSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMDAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IC0zMCwgeTogLTMwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IDN9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDc1MCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAwLCB5OiAxMDAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDc1MCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1dO1xuXG5cdFx0dGhpcy5Vc2VyU2VlICAgPSB0cnVlO1xuXHRcdHRoaXMuc2tpbGxzT24gID0gZmFsc2U7XG5cblx0XHR0aGlzLnNyIFx0ICAgPSBTY3JvbGxSZXZlYWwoeyByZXNldDogZmFsc2UgfSk7XG5cblx0XHQvL2luaXQgU2xpZGVyIFxuXHRcdGlmICh0aGlzLiRzbGlkZXIubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmF1dG9wbGF5ID0gbmV3IFNsaWRlcjtcblx0XHRcdHRoaXMuYXV0b3BsYXkuaW5pdCh0aGlzLiRzbGlkZXIpO1xuXHRcdH1cblx0XHR0aGlzLnZpZXdJc0FjdGl2ZSgpOyBcdFxuXG5cdFx0Ly8gbGlua1RvIGZ1bmN0aW9uIGlmIGxpbmtzIGV4aXN0IFxuXHRcdGlmICh0aGlzLiRsaW5rVG8ubGVuZ3RoKSB0aGlzLmxpbmtUbygpO1xuXG5cdFx0Ly8gc2Nyb2xsIGZvciB0b3AgbWVudSBuYXYgXG5cdFx0dGhpcy5zY3JvbGwoKTtcblxuXHRcdC8vIGZ1bmN0aW9uIHJldmFsIFxuXHRcdHRoaXMucmV2YWwoKTtcdFxuXG5cdFx0Ly9wcmVsb2FkIGltZyBcblx0XHRpZiAodGhpcy4kcHJldmlld3MubGVuZ3RoKSB0aGlzLnByZWxvYWQoKTtcdFxuXG5cdFx0Ly9wcmVsb2FkIGltZyBwcmV2aWV3IFxuXHRcdHRoaXMuaW5pdFBvcnRmb2xpb1ByZXZpZXcoKTtcblxuXHRcdC8vaW5pdCBmb3JtIFxuXHRcdGlmICh0aGlzLiRmb3JtLmxlbmd0aCkgdGhpcy5pbml0Rm9ybSgpO1xuXHRcdFxuXHR9LFxuXG5cdHZpZXdJc0FjdGl2ZSgpIHtcblx0XHR3aW5kb3cub25mb2N1cyA9ICgpID0+IHtcblx0XHQgICAgdGhpcy5Vc2VyU2VlID0gdHJ1ZTtcblx0XHQgIH07XG5cblx0XHR3aW5kb3cub25ibHVyID0gKCkgPT4ge1xuXHRcdCAgICB0aGlzLlVzZXJTZWUgPSBmYWxzZTtcblx0XHQgIH07XG5cdFx0c2V0SW50ZXJ2YWwoICgpID0+IHtcblx0XHQgICAgaWYgKCF0aGlzLlVzZXJTZWUpIHRoaXMuYXV0b3BsYXkuc3RvcCgpO1xuXHRcdH0sIDEwMDApO1xuXHR9LFxuXG5cdGxpbmtUbygpIHtcblx0XHR0aGlzLiRsaW5rVG8ub24oJ2NsaWNrIHRvdWNoJywgKGUpID0+IHtcblx0XHRcdGxldCB0YXJnZXQgICA9ICQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCdocmVmJyk7XG5cdFx0XHRsZXQgJHNlY3Rpb24gPSB0aGlzLiRlbC5maW5kKHRhcmdldCk7XG5cdFx0XHRjb25zb2xlLmxvZygnc2Nyb2xsIHRvJylcblx0XHRcdCQoJ2JvZHksIGh0bWwnKS5hbmltYXRlKHtcblx0XHQgICAgICAgIHNjcm9sbFRvcDogJHNlY3Rpb24ub2Zmc2V0KCkudG9wXG5cdFx0ICAgIH0sIDEwMDApO1xuXHRcdH0pXG5cdH0sIFxuXG5cdGlzVmlzaWJsZShlbGVtZW50KSB7XG5cdFx0bGV0ICRlbGVtZW50ICAgICAgICA9ICQoZWxlbWVudCk7XG5cdFx0bGV0IHRvcEVsZW1lbnQgXHQgICAgPSAkZWxlbWVudC5vZmZzZXQoKS50b3A7XG5cdFx0bGV0IGJvdHRvbUVsZW1lbnQgXHQ9ICgkZWxlbWVudC5vZmZzZXQoKS50b3AgKyAkZWxlbWVudC5oZWlnaHQoKSApIDtcblx0XHRsZXQgc2Nyb2xsdG9wIFx0ICAgID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXHRcdGxldCBzY3JvbGxCb3R0b20gXHQ9IHNjcm9sbHRvcCArICQod2luZG93KS5oZWlnaHQoKTtcblx0XHRsZXQgaXNWaXNpYmxlICAgICAgID0gZmFsc2U7XG5cblx0XHRpZiAoIHRvcEVsZW1lbnQgPiBzY3JvbGx0b3AgJiYgYm90dG9tRWxlbWVudCA8IHNjcm9sbEJvdHRvbSApIHtcblx0XHRcdGlzVmlzaWJsZSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlzVmlzaWJsZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gaXNWaXNpYmxlIDtcblx0fSxcblxuXHRzY3JvbGwoKSB7XG5cdFx0bGV0IHN0ZXAxID0gdGhpcy4kZWwuZmluZCgnI2Fib3V0Jykub2Zmc2V0KCkudG9wO1xuXHRcdCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSBzdGVwMS0xMDAgPyB0aGlzLm5hdi5hZGRDbGFzcygnZml4eScpIDogdGhpcy5uYXYucmVtb3ZlQ2xhc3MoJ2ZpeHknKTtcblx0XHQkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPj0gc3RlcDEgPyB0aGlzLm5hdi5hZGRDbGFzcygnYWN0aXZlJykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHQkKHdpbmRvdykub24oJ3Njcm9sbCcsICgpID0+IHtcblx0XHRcdGxldCBjdXJyZW50U2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0XHRjdXJyZW50U2Nyb2xsID49IDgwID8gdGhpcy5uYXYuY3NzKCd0b3AnLCAnLTYxcHgnKSA6IHRoaXMubmF2LmNzcygndG9wJywgJzBweCcpO1xuXHRcdFx0Y3VycmVudFNjcm9sbCA+PSBzdGVwMS0xMDAgPyB0aGlzLm5hdi5hZGRDbGFzcygnZml4eScpIDogdGhpcy5uYXYucmVtb3ZlQ2xhc3MoJ2ZpeHknKTtcblx0XHRcdGN1cnJlbnRTY3JvbGwgPj0gc3RlcDEgPyB0aGlzLm5hdi5hZGRDbGFzcygnYWN0aXZlJykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHRcdC8vaW5pdCBzbGlkZXIgXHRcdFxuXHRcdFx0aWYgKHRoaXMuJHNsaWRlci5sZW5ndGgpIHtcdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy5pc1Zpc2libGUodGhpcy4kc2xpZGVyKSkge1xuXHRcdFx0XHRcdHRoaXMuYXV0b3BsYXkucGxheSgpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5hdXRvcGxheS5zdG9wKClcblx0XHRcdFx0fVxuXHRcdFx0fSBcblxuXHRcdFx0aWYgKHRoaXMuJHNraWxscy5sZW5ndGgpIHtcdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy5pc1Zpc2libGUodGhpcy4kc2tpbGxzWzBdKSkge1x0XG5cdFx0XHRcdFx0dGhpcy5zaG93U2tpbGxzKCk7XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy4kYmFuZHMubGVuZ3RoKSB7XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnNob3dCYW5kcygpO1x0XHRcdFx0XG5cdFx0XHR9ICBcblx0XHR9KTsgXG5cdFxuXHR9LFxuXG5cdHJldmFsKCkge1xuXHRcdC8vbGVmdCB0byByaWdodFxuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtbGVmdCcsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2xlZnQnLCBzY2FsZTogMSwgZHVyYXRpb246NTAwfSk7XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1sZWZ0LWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnbGVmdCcsIHNjYWxlOiAxLCBkZWxheTogNTAwLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLWxlZnQtbG9uZy1kZWxheScsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2xlZnQnLCBzY2FsZTogMSwgZGVsYXk6IDE1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdC8vcmlnaHQgdG8gbGVmdFxuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtcmlnaHQnLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdyaWdodCcsIHNjYWxlOiAxLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXJpZ2h0LWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAncmlnaHQnLCBzY2FsZTogMSwgZGVsYXk6IDUwMCwgZHVyYXRpb246NTAwfSk7XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1yaWdodC1sb25nLWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAncmlnaHQnLCBzY2FsZTogMSwgZGVsYXk6IDE1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdC8vYm90dG9tIHRvIHRvcCBcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXRvcCcsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2JvdHRvbScsIHNjYWxlOiAxLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXRvcC1kZWxheScsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2JvdHRvbScsIHNjYWxlOiAxLCBkZWxheTogNTAwLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXRvcC1sb25nLWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnYm90dG9tJywgc2NhbGU6IDEsIGRlbGF5OiAxNTAwLCBkdXJhdGlvbjo1MDB9KTtcblxuXHR9LFxuXG5cdHNob3dTa2lsbHMoKSB7XG5cblx0XHRpZighdGhpcy5za2lsbHNPbikge1xuXHRcdFx0bGV0ICRza2lsbHMgPSB0aGlzLiRlbC5maW5kKCcuanMtcGVyY2VudCcpO1xuXHRcdFx0JHNraWxscy5lYWNoKCAoaW5kZXgsIGN1cnJlbnQpID0+IHtcblx0XHRcdFx0bGV0IF9wZXJjZW50ID0gJChjdXJyZW50KS5hdHRyKCdkYXRhLXBlcmNlbnQnKSsnJSc7XG5cdFx0XHRcdCQoY3VycmVudCkuY3NzKCd3aWR0aCcsIF9wZXJjZW50KTtcblx0XHRcdH0gKVxuXHRcdH1cblx0fSxcblxuXHRzaG93QmFuZHMoKSB7XG5cdFx0dGhpcy4kYmFuZHMuZWFjaCggKGksIGN1cnJlbnQpID0+IHtcblx0XHRcdGxldCBfYmFuZCA9ICQoY3VycmVudCk7XG5cblx0XHRcdGlmKHRoaXMuaXNWaXNpYmxlKGN1cnJlbnQpKSB7XG5cdFx0XHRcdF9iYW5kLmhhc0NsYXNzKCdqcy1iYW5kLXJpZ2h0JykgPyBfYmFuZC5jc3MoJ3JpZ2h0JywgMCkgOiBfYmFuZC5jc3MoJ2xlZnQnLCAwKTtcblx0XHRcdFx0aWYoX2JhbmQuaGFzQ2xhc3MoJ2pzLWxhc3QtYmFuZCcpKSB0aGlzLiRmb3JtLmFkZENsYXNzKCd2aXNpYmxlJyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblxuXHRwcmVsb2FkKCkge1xuXHRcdHRoaXMuJHByZXZpZXdzLmVhY2goKGlkeCwgY29udGFpbmVyKSA9PiB7XG5cdFx0XHRsZXQgJGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcblx0XHRcdGxldCBfdXJsICAgICAgID0gJGNvbnRhaW5lci5kYXRhKCdpbWFnZS11cmwnKTtcblx0XHRcdGxldCBpbWcgICAgICAgID0gbmV3IEltYWdlKCk7XG5cblx0XHRcdGltZy5zcmMgICAgICAgID0gX3VybDtcblxuXHQgICAgICAgIC8vIGlmIHdlIGhhdmUgdGhpcyBpbWFnZSBhbHJlYWR5IGNhY2hlZCwgd2UgZG9uJ3QgaGF2ZVxuXHQgICAgICAgIC8vIHRvIHdhaXQgZm9yIHRoZSBvbmxvYWQgY2FsbGJhY2sgYW5kIGNhbiByZW1vdmUgdGhlXG5cdCAgICAgICAgLy8gcHJldmlldyBpbWFnZSBpbW1lZGlhdGVseVxuXHQgICAgICAgIGlmKHRoaXMuaW1nQ29tcGxldGUoaW1nKSkge1xuXHQgICAgICAgIFx0dGhpcy5yZW1vdmVQcmV2aWV3KCRjb250YWluZXIsIF91cmwpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgXHRpbWcub25sb2FkID0gKCkgPT4ge1xuXHQgICAgICAgIFx0XHR0aGlzLnJlbW92ZVByZXZpZXcoJGNvbnRhaW5lciwgX3VybCk7XG5cdCAgICAgICAgXHR9O1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXHR9LFxuXG5cdGltZ0NvbXBsZXRlKGltZykge1xuICAgICAgICByZXR1cm4gaW1nLmNvbXBsZXRlIHx8IGltZy53aWR0aCArIGltZy5oZWlnaHQgPiAwO1xuICAgIH0sXG4gIFxuICAgIHJlbW92ZVByZXZpZXcoJGNvbnRhaW5lciwgdXJsKSB7XG4gICAgICAgICRjb250YWluZXIuY3NzKHsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoXCInICsgdXJsICsgJ1wiKSd9KTtcbiAgICAgICAgJGNvbnRhaW5lci5yZW1vdmVDbGFzcygnanMtcHJldmlldyBwcmV2aWV3Jyk7XG4gICAgfSxcblxuICAgIGluaXRQb3J0Zm9saW9QcmV2aWV3KCkge1xuXHRcdGxldCBpZHggPSAwO1xuXHRcdFtdLnNsaWNlLmNhbGwoJCgnYS50aWx0ZXInKSkuZm9yRWFjaCgoZWwsIHBvcykgPT4geyBcblx0XHRcdGlkeCA9IHBvcyUyID09PSAwID8gaWR4KzEgOiBpZHg7XG5cdFx0XHRsZXQgX1RpbHRGeCA9IG5ldyBUaWx0Rng7XG5cdFx0XHRfVGlsdEZ4LmluaXQoZWwsIEFwcC50aWx0U2V0dGluZ3NbaWR4LTFdKTtcblx0XHR9KTtcblxuXHRcdGxldCBwYXRlciAgICA9IHRoaXMuJGVsLmZpbmQoJy5wYXRlcicpO1xuXHRcdGxldFx0cGF0ZXJTVkcgPSBwYXRlci5maW5kKCcucGF0ZXJfX3N2ZycpO1xuXHRcdGxldFx0cGF0aEVsICAgPSBwYXRlclNWRy5maW5kKCdwYXRoJyk7XG5cdFx0bGV0XHRwYXRocyAgICA9IHtkZWZhdWx0OiBwYXRoRWwuYXR0cignZCcpLCBhY3RpdmU6IHBhdGVyU1ZHLmF0dHIoJ2RhdGEtcGF0aC1ob3ZlcicpfTtcblxuXHRcdHBhdGVyLm9uKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuXHRcdFx0YW5pbWUucmVtb3ZlKHBhdGhFbCk7XG5cdFx0XHRhbmltZSh7XG5cdFx0XHRcdHRhcmdldHM6IHBhdGhFbCxcblx0XHRcdFx0ZDogcGF0aHMuYWN0aXZlLFxuXHRcdFx0XHRkdXJhdGlvbjogNDAwLFxuXHRcdFx0XHRlYXNpbmc6ICdlYXNlT3V0UXVhZCdcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0cGF0ZXIub24oJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG5cdFx0XHRhbmltZS5yZW1vdmUocGF0aEVsKTtcblx0XHRcdGFuaW1lKHtcblx0XHRcdFx0dGFyZ2V0czogcGF0aEVsLFxuXHRcdFx0XHRkOiBwYXRocy5kZWZhdWx0LFxuXHRcdFx0XHRkdXJhdGlvbjogNDAwLFxuXHRcdFx0XHRlYXNpbmc6ICdlYXNlT3V0RXhwbydcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxuXG5cdGluaXRGb3JtKCkge1xuXG5cdFx0JCgndGV4dGFyZWEnKS5ibHVyKGZ1bmN0aW9uICgpIHtcblx0XHQgICAgJCgnI2hpcmUgdGV4dGFyZWEnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQgICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XG5cdFx0ICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlKVxuXHRcdCAgICAgICAgaWYgKCB0aGlzLnZhbHVlICE9ICcnICkge1xuXHRcdCAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgICAkKCd0ZXh0YXJlYSArIGxhYmVsICsgc3BhbicpLmNzcyh7J29wYWNpdHknOiAxfSk7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICBlbHNlIHtcblx0XHQgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgICAgJCgndGV4dGFyZWEgKyBsYWJlbCArIHNwYW4nKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICB9KTtcblx0XHR9KTtcblxuXHRcdCQoJyNoaXJlIC5maWVsZDpmaXJzdC1jaGlsZCBpbnB1dCcpLmJsdXIoZnVuY3Rpb24gKCkge1xuXHRcdCAgICAkKCcjaGlyZSAuZmllbGQ6Zmlyc3QtY2hpbGQgaW5wdXQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQgICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XG5cdFx0ICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlKVxuXHRcdCAgICAgICAgaWYgKCB0aGlzLnZhbHVlICE9ICcnICkge1xuXHRcdCAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgICAkKCcuZmllbGQ6Zmlyc3QtY2hpbGQgaW5wdXQgKyBsYWJlbCArIHNwYW4nKS5jc3MoeydvcGFjaXR5JzogMX0pO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAgZWxzZSB7XG5cdFx0ICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICAgICQoJy5maWVsZDpmaXJzdC1jaGlsZCBpbnB1dCArIGxhYmVsICsgc3BhbicpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgIH0pO1xuXHRcdH0pO1xuXG5cdFx0JCgnI2hpcmUgLmZpZWxkOm50aC1jaGlsZCgyKSBpbnB1dCcpLmJsdXIoZnVuY3Rpb24gKCkge1xuXHRcdCAgICAkKCcjaGlyZSAuZmllbGQ6bnRoLWNoaWxkKDIpIGlucHV0JykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0ICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuXHRcdCAgICAgICAgY29uc29sZS5sb2codGhpcy52YWx1ZSlcblx0XHQgICAgICAgIGlmICggdGhpcy52YWx1ZSAhPSAnJyApIHtcblx0XHQgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgICAgJCgnLmZpZWxkOm50aC1jaGlsZCgyKSBpbnB1dCArIGxhYmVsICsgc3BhbicpLmNzcyh7J29wYWNpdHknOiAxfSk7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICBlbHNlIHtcblx0XHQgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgICAgJCgnLmZpZWxkOm50aC1jaGlsZCgyKSBpbnB1dCArIGxhYmVsICsgc3BhbicpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgIH0pO1xuXHRcdH0pO1xuXHR9XG5cbn1cblxuJCh3aW5kb3cpLnJlYWR5KEFwcC5pbml0LmJpbmQoQXBwKSk7IiwiY2xhc3MgU2xpZGVyIHsgXG5cblx0aW5pdChlbCkge1xuXHRcdHRoaXMuJGVsICAgICAgICAgID0gJChlbCk7XG5cdFx0dGhpcy4kY29udGFpbmVyICAgPSB0aGlzLiRlbC5maW5kKCd1bCcpO1xuXHRcdHRoaXMuJHNsaWRlcnMgICAgID0gdGhpcy4kY29udGFpbmVyLmZpbmQoJ2xpJyk7XG5cdFx0dGhpcy5ub21iZXJTbGlkZSAgPSB0aGlzLiRzbGlkZXJzLmxlbmd0aDtcblx0XHR0aGlzLndpZHRoICAgICAgICA9IDMwMDtcblx0XHR0aGlzLmxlZnQgICAgICAgICA9IC10aGlzLndpZHRoO1xuXHRcdHRoaXMuZHVyYXRpb24gXHQgID0gMzUwMDtcblx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IDE7XG5cdFx0dGhpcy5pc1BsYXlpbmcgICAgPSBmYWxzZTtcblx0XHRcblxuXHRcdHRoaXMuJGNvbnRhaW5lci5jc3MoJ3dpZHRoJywgdGhpcy5ub21iZXJTbGlkZSp0aGlzLndpZHRoKydweCcpO1xuXHRcdCQodGhpcy4kc2xpZGVyc1swXSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0dGhpcy4kZWwuaG92ZXIoKCkgPT4geyB0aGlzLnN0b3AoKSB9LCAoKSA9PiB7IHRoaXMucGxheSgpIH0gKTtcdFx0XG5cblx0fVxuXG5cdHNsaWRlcigpIHtcblx0XHR0aGlzLiRjb250YWluZXIuYW5pbWF0ZSh7XG5cdFx0XHRcdFx0bGVmdCA6IHRoaXMubGVmdCsncHgnXG5cdFx0XHRcdH0sIDIwMCwgKCkgPT4ge1xuXHRcdFx0XHRcdCQodGhpcy4kc2xpZGVycykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdCQodGhpcy4kc2xpZGVyc1t0aGlzLmN1cnJlbnRJbmRleF0pLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRpZiAodGhpcy5sZWZ0ID4gKHRoaXMubm9tYmVyU2xpZGUtMSkqLSh0aGlzLndpZHRoKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5sZWZ0ID0gdGhpcy5sZWZ0LXRoaXMud2lkdGg7XG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCsrO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxlZnQgPSAwO1xuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SW5kZXggPSAwO1xuXHRcdFx0XHRcdH1cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHR9XG5cblx0cGxheSgpIHtcblx0XHRcblx0XHRpZiAoIXRoaXMuaXNQbGF5aW5nKSB7XG5cdFx0XHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5zbGlkZXIuYmluZCh0aGlzKSwgdGhpcy5kdXJhdGlvbik7XG5cdFx0XHR0aGlzLmlzUGxheWluZyA9IHRydWU7XG5cdFx0fVxuXHRcdFxuXHR9XG5cblx0c3RvcCgpIHtcblx0XHRpZiAodGhpcy5pc1BsYXlpbmcpIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG5cdFx0XHR0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjsiLCJjbGFzcyBUaWx0Rngge1xuXG5cdC8vIEhlbHBlciB2YXJzIGFuZCBmdW5jdGlvbnMuXG5cdGV4dGVuZCggYSwgYiApIHtcblx0XHRmb3IoIGxldCBrZXkgaW4gYiApIHsgXG5cdFx0XHRpZiggYi5oYXNPd25Qcm9wZXJ0eSgga2V5ICkgKSB7XG5cdFx0XHRcdGFba2V5XSA9IGJba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGE7XG5cdH1cblxuXHRnZXRNb3VzZVBvcyhlKSB7XG5cdFx0bGV0IHBvc3ggPSAwO1xuXHRcdGxldCBwb3N5ID0gMDtcblxuXHRcdGlmICghZSkge2xldCBlID0gd2luZG93LmV2ZW50fVxuXHRcdGlmIChlLnBhZ2VYIHx8IGUucGFnZVkpIFx0e1xuXHRcdFx0cG9zeCA9IGUucGFnZVg7XG5cdFx0XHRwb3N5ID0gZS5wYWdlWTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoZS5jbGllbnRYIHx8IGUuY2xpZW50WSkgXHR7XG5cdFx0XHRwb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG5cdFx0XHRwb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRcdH1cblx0XHRyZXR1cm4geyB4IDogcG9zeCwgeSA6IHBvc3kgfVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQuXG5cdCAqL1xuXHRpbml0KGVsLCBvcHRpb25zKSB7XG5cdFx0dGhpcy5ET00gICAgICAgICAgICAgICAgICAgICAgID0ge307XG5cdFx0dGhpcy5ET00uZWwgICAgICAgICAgICAgICAgICAgID0gZWw7XG5cdFx0dGhpcy5vcHRpb25zICAgICAgICAgICAgICAgICAgID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAwfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAtNSwgeTogNSwgejogMH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMTIwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA6ICdlYXNlT3V0RWxhc3RpYycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbGFzdGljaXR5IDogNjAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaW5lcyA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogMTAsIHo6IFswLDEwXX0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMTAwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA6ICdlYXNlT3V0RXhwbycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbGFzdGljaXR5IDogNjAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDIwLCB5OiAyMCwgejogMH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogMH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMTUwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA6ICdlYXNlT3V0RWxhc3RpYycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbGFzdGljaXR5IDogNjAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAxMCwgejogWzAsNTBdfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb24gOiA1MDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgOiAnZWFzZU91dEV4cG8nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1MCwgeTogNTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDEyMDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgOiAnZWFzZU91dEVsYXN0aWMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxhc3RpY2l0eTogNjAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcblx0XHR0aGlzLmV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1x0XHRcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlICAgICAgICAgICAgPSB7fTtcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlLmltZ1dyYXBwZXIgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcudGlsdGVyX19maWd1cmUnKTtcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlLmxpbmVzICAgICAgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcudGlsdGVyX19kZWNvLS1saW5lcycpO1xuXHRcdHRoaXMuRE9NLmFuaW1hdGFibGUuY2FwdGlvbiAgICA9IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoJy50aWx0ZXJfX2NhcHRpb24nKTtcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlLm92ZXJsYXkgICAgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcudGlsdGVyX19kZWNvLS1vdmVybGF5Jyk7XG5cdFx0dGhpcy5ET00uYW5pbWF0YWJsZS5zaGluZSAgICAgID0gdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLnRpbHRlcl9fZGVjby0tc2hpbmUgPiBkaXYnKTtcblx0XHR0aGlzLmluaXRFdmVudHMoKTtcblx0fVxuXG5cdGluaXRFdmVudHMoKSB7XHRcdFxuXG5cdFx0JCh0aGlzLkRPTS5lbCkub24oJ21vdXNlbW92ZScsICAoZSkgPT4ge3RoaXMubW91c2Vtb3ZlRm4oZSl9KTtcblx0XHQkKHRoaXMuRE9NLmVsKS5vbignbW91c2VsZWF2ZScsIChlKSA9PiB7dGhpcy5tb3VzZWxlYXZlRm4oZSl9KTtcblx0XHQkKHRoaXMuRE9NLmVsKS5vbignbW91c2VlbnRlcicsICggKSA9PiB7dGhpcy5tb3VzZWVudGVyRm4oKX0pO1xuXHR9XG5cblx0bW91c2Vtb3ZlRm4oZXYpIHtcdFx0XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHsgdGhpcy5sYXlvdXQoZXYpOyB9KTtcblx0fVxuXG5cdG1vdXNlZW50ZXJGbigpIHtcdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5ET00uYW5pbWF0YWJsZSkge1xuXHRcdFx0YW5pbWUucmVtb3ZlKHRoaXMuRE9NLmFuaW1hdGFibGVba2V5XSk7XG5cdFx0fVxuXHR9XG5cblx0bW91c2VsZWF2ZUZuKGV2KSB7XHRcdFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHRmb3IobGV0IGtleSBpbiB0aGlzLkRPTS5hbmltYXRhYmxlKSB7XG5cdFx0XHRcdGlmKCB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XSA9PSB1bmRlZmluZWQgKSB7Y29udGludWU7fVxuXHRcdFx0XHRhbmltZSh7XG5cdFx0XHRcdFx0dGFyZ2V0czogdGhpcy5ET00uYW5pbWF0YWJsZVtrZXldLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnJldmVyc2VBbmltYXRpb24uZHVyYXRpb24gfHwgMCA6IDEsXG5cdFx0XHRcdFx0ZWFzaW5nOiB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnJldmVyc2VBbmltYXRpb24uZWFzaW5nIHx8ICdsaW5lYXInIDogJ2xpbmVhcicsXG5cdFx0XHRcdFx0ZWxhc3RpY2l0eTogdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucmV2ZXJzZUFuaW1hdGlvbiAhPSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uLmVsYXN0aWNpdHkgfHwgbnVsbCA6IG51bGwsXG5cdFx0XHRcdFx0c2NhbGVYOiAxLFxuXHRcdFx0XHRcdHNjYWxlWTogMSxcblx0XHRcdFx0XHRzY2FsZVo6IDEsXG5cdFx0XHRcdFx0dHJhbnNsYXRlWDogMCxcblx0XHRcdFx0XHR0cmFuc2xhdGVZOiAwLFxuXHRcdFx0XHRcdHRyYW5zbGF0ZVo6IDAsXG5cdFx0XHRcdFx0cm90YXRlWDogMCxcblx0XHRcdFx0XHRyb3RhdGVZOiAwLFxuXHRcdFx0XHRcdHJvdGF0ZVo6IDBcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRsYXlvdXQoZXYpIHtcblx0XHQvLyBNb3VzZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnQuXG5cdFx0bGV0IG1vdXNlcG9zID0gdGhpcy5nZXRNb3VzZVBvcyhldik7XG5cdFx0XHQvLyBEb2N1bWVudCBzY3JvbGxzLlxuXHRcdGxldFx0ZG9jU2Nyb2xscyA9IHtsZWZ0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsIHRvcCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcH07XG5cdFx0bGV0XHRib3VuZHMgPSB0aGlzLkRPTS5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdC8vIE1vdXNlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBtYWluIGVsZW1lbnQgKHRoaXMuRE9NLmVsKS5cblx0XHRsZXRcdHJlbG1vdXNlcG9zID0geyB4IDogbW91c2Vwb3MueCAtIGJvdW5kcy5sZWZ0IC0gZG9jU2Nyb2xscy5sZWZ0LCB5IDogbW91c2Vwb3MueSAtIGJvdW5kcy50b3AgLSBkb2NTY3JvbGxzLnRvcCB9O1xuXG5cdFx0Ly8gTW92ZW1lbnQgc2V0dGluZ3MgZm9yIHRoZSBhbmltYXRhYmxlIGVsZW1lbnRzLlxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuRE9NLmFuaW1hdGFibGUpIHtcblx0XHRcdGlmKCB0aGlzLkRPTS5hbmltYXRhYmxlW2tleV0gPT0gdW5kZWZpbmVkIHx8IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldID09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRsZXQgdCA9IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnRyYW5zbGF0aW9uIHx8IHt4OjAseTowLHo6MH0gOiB7eDowLHk6MCx6OjB9O1xuXHRcdFx0bGV0XHRyID0gdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0gIT0gdW5kZWZpbmVkID8gdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucm90YXRpb24gfHwge3g6MCx5OjAsejowfSA6IHt4OjAseTowLHo6MH07XG5cblx0XHRcdHRoaXMuc2V0UmFuZ2UodCk7XG5cdFx0XHR0aGlzLnNldFJhbmdlKHIpO1xuXHRcdFx0XG5cdFx0XHRsZXQgdHJhbnNmb3JtcyA9IHtcblx0XHRcdFx0dHJhbnNsYXRpb24gOiB7XG5cdFx0XHRcdFx0eDogKHQueFsxXS10LnhbMF0pL2JvdW5kcy53aWR0aCpyZWxtb3VzZXBvcy54ICsgdC54WzBdLFxuXHRcdFx0XHRcdHk6ICh0LnlbMV0tdC55WzBdKS9ib3VuZHMuaGVpZ2h0KnJlbG1vdXNlcG9zLnkgKyB0LnlbMF0sXG5cdFx0XHRcdFx0ejogKHQuelsxXS10LnpbMF0pL2JvdW5kcy5oZWlnaHQqcmVsbW91c2Vwb3MueSArIHQuelswXSxcblx0XHRcdFx0fSxcblx0XHRcdFx0cm90YXRpb24gOiB7XG5cdFx0XHRcdFx0eDogKHIueFsxXS1yLnhbMF0pL2JvdW5kcy5oZWlnaHQqcmVsbW91c2Vwb3MueSArIHIueFswXSxcblx0XHRcdFx0XHR5OiAoci55WzFdLXIueVswXSkvYm91bmRzLndpZHRoKnJlbG1vdXNlcG9zLnggKyByLnlbMF0sXG5cdFx0XHRcdFx0ejogKHIuelsxXS1yLnpbMF0pL2JvdW5kcy53aWR0aCpyZWxtb3VzZXBvcy54ICsgci56WzBdXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHRoaXMuRE9NLmFuaW1hdGFibGVba2V5XS5zdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSB0aGlzLkRPTS5hbmltYXRhYmxlW2tleV0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHRyYW5zZm9ybXMudHJhbnNsYXRpb24ueCArICdweCkgdHJhbnNsYXRlWSgnICsgdHJhbnNmb3Jtcy50cmFuc2xhdGlvbi55ICsgJ3B4KSB0cmFuc2xhdGVaKCcgKyB0cmFuc2Zvcm1zLnRyYW5zbGF0aW9uLnogKyAncHgpIHJvdGF0ZVgoJyArIHRyYW5zZm9ybXMucm90YXRpb24ueCArICdkZWcpIHJvdGF0ZVkoJyArIHRyYW5zZm9ybXMucm90YXRpb24ueSArICdkZWcpIHJvdGF0ZVooJyArIHRyYW5zZm9ybXMucm90YXRpb24ueiArICdkZWcpJztcblx0XHR9XG5cdH1cblxuXHRzZXRSYW5nZSAob2JqKSB7XG5cdFx0Zm9yKGxldCBrIGluIG9iaikge1xuXHRcdFx0aWYoIG9ialtrXSA9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdG9ialtrXSA9IFswLDBdO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiggdHlwZW9mIG9ialtrXSA9PT0gJ251bWJlcicgKSB7XG5cdFx0XHRcdG9ialtrXSA9IFstMSpvYmpba10sb2JqW2tdXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUaWx0Rng7Il19
