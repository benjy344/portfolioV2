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
		this.$openGalery = this.$el.find('.js-open-galery');
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

		//open galery 
		this.$openGalery.on('click', this.openGalery);

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
	openGalery: function openGalery(e) {
		e.preventDefault();

		var target = $(e.target).attr('href');
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
		var _this6 = this;

		var $form = this.$form;
		var checkForm = [false, false, false];

		$form.find('textarea').blur(function () {
			console.log('blur');
			$form.find('textarea').each(function () {
				console.log('value', this.value === '');
				var $this = $(this);
				var regex = new RegExp("^[a-zA-ZÀ-úÀ-ÿ0-9$€. ]+$");

				if (regex.test(this.value)) {
					console.log('regex');
					$this.addClass('focused');
					$('.msg-box label').css({ 'color': 'transparent' });
					$('.msg-box .js-check').css({ 'opacity': 1 });
					$('.msg-box .js-error').css({ 'opacity': 0 });
					checkForm[0] = true;
				} else if (this.value === '') {
					console.log('coucuo');
					$this.removeClass('focused');
					$('.msg-box label').css({ 'color': 'white' });
					$('.msg-box input + label + span').css({ 'opacity': 0 });
					$('.msg-box .js-check').css({ 'opacity': 0 });
					$('.msg-box .js-error').css({ 'opacity': 0 });
					checkForm[0] = false;
				} else {
					$this.addClass('focused');
					$('.msg-box label').css({ 'color': 'transparent' });
					$('.msg-box .js-check').css({ 'opacity': 0 });
					$('.msg-box .js-error').css({ 'opacity': 1 });
					checkForm[0] = false;
				}
			});
		});

		$form.find('.name-box input').blur(function () {

			$form.find('.name-box input').each(function () {
				var $this = $(this);
				var regex = new RegExp("^[a-zA-ZÀ-úÀ-ÿ ]*$");

				if (regex.test(this.value)) {
					$this.addClass('focused');
					$('.name-box label').css({ 'color': 'transparent' });
					$('.name-box .js-check').css({ 'opacity': 1 });
					$('.name-box .js-error').css({ 'opacity': 0 });
					checkForm[1] = true;
				} else if (this.value === '') {
					$this.removeClass('focused');
					$('.name-box label').css({ 'color': 'white' });
					$('.name-box input + label + span').css({ 'opacity': 0 });
					checkForm[1] = false;
				} else {
					$this.addClass('focused');
					$('.name-box label').css({ 'color': 'transparent' });
					$('.name-box .js-check').css({ 'opacity': 0 });
					$('.name-box .js-error').css({ 'opacity': 1 });
					checkForm[1] = false;
				}
			});
		});

		$form.find('.email-box input').blur(function () {
			$form.find('.email-box input').each(function () {
				var $this = $(this);
				var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

				if (regex.test(this.value)) {
					$this.addClass('focused');
					$('.email-box label').css({ 'color': 'transparent' });
					$('.email-box .js-check').css({ 'opacity': 1 });
					$('.email-box .js-error').css({ 'opacity': 0 });
					checkForm[2] = true;
				} else if (this.value === '') {
					$this.removeClass('focused');
					$('.email-box label').css({ 'color': 'white' });
					$('.email-box input + label + span').css({ 'opacity': 0 });
					checkForm[2] = false;
				} else {
					$this.addClass('focused');
					$('.email-box label').css({ 'color': 'transparent' });
					$('.email-box .js-check').css({ 'opacity': 0 });
					$('.email-box .js-error').css({ 'opacity': 1 });
					checkForm[2] = false;
				}
			});
		});

		$form.on('submit', function (e) {
			e.preventDefault();
			var $errorMsg = _this6.$el.find('.js-error-message');
			var $successMsg = _this6.$el.find('.js-success-message');
			var check = 0;

			checkForm.forEach(function (element, index) {
				if (element) check++;
			});

			if (check === 3) {
				//can send form

				var s = $form.serialize();

				$.ajax({
					type: "POST",
					url: "../mail.php",
					data: s,
					success: function success() {
						$('body').prepend('<div style="position:fixed; top:50%; z-index:2000;" class="alert alert-success">Votre email à bien été transmis !</div>').hide().fadeIn(1500);
					},
					error: function error() {
						$('body').prepend('<div style="position:fixed; top:50%; z-index:2000;" class="alert alert-danger">L\'envoi du mail a échoué, veuillez réessayer SVP</div>').hide().fadeIn(1500);
					}
				});
				return false;
			} else {}
			console.log(check);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvYXBwLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvU2xpZGVyLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvVGlsdEZ4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLE1BQU07QUFHVCxLQUhTLGtCQUdGO0FBQ04sT0FBSyxHQUFMLEdBQW9CLEVBQUUsTUFBRixDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsYUFBZCxDQUFwQjtBQUNBLE9BQUssR0FBTCxHQUFrQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsV0FBZCxDQUFsQjtBQUNBLE9BQUssU0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsYUFBZCxDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsWUFBZCxDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsb0JBQWQsQ0FBcEI7QUFDQSxPQUFLLE1BQUwsR0FBb0IsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLFVBQWQsQ0FBcEI7QUFDQSxPQUFLLFdBQUwsR0FBb0IsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGlCQUFkLENBQXBCO0FBQ0EsT0FBSyxLQUFMLEdBQW9CLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxVQUFkLENBQXBCO0FBQ0EsT0FBSyxZQUFMLEdBQW9CLENBQ25CLEVBRG1CLEVBRW5CO0FBQ0MsYUFBVTtBQUNULGdCQUFhO0FBQ1osa0JBQWMsRUFBQyxHQUFHLEVBQUosRUFBUSxHQUFHLEVBQVgsRUFBZSxHQUFHLEVBQWxCLEVBREY7QUFFWixlQUFXLEVBQUMsR0FBRyxDQUFKLEVBQU8sR0FBRyxDQUFDLEVBQVgsRUFBZSxHQUFHLENBQWxC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QUcsQ0FBSCxDQUFUO0FBQ0EsS0FGRCxNQUdLLElBQUksT0FBTyxJQUFJLENBQUosQ0FBUCxLQUFrQixRQUF0QixFQUFpQztBQUNyQyxTQUFJLENBQUosSUFBUyxDQUFDLENBQUMsQ0FBRCxHQUFHLElBQUksQ0FBSixDQUFKLEVBQVcsSUFBSSxDQUFKLENBQVgsQ0FBVDtBQUNBO0FBQ0Q7QUFDRDs7Ozs7O2tCQUlhLE0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFNsaWRlciBmcm9tICcuL21vZHVsZXMvU2xpZGVyLmpzJztcbmltcG9ydCBUaWx0RnggZnJvbSAnLi9tb2R1bGVzL1RpbHRGeC5qcyc7XG5cbmxldCBBcHAgPSB7XG5cblx0XG5cdGluaXQoKSB7XG5cdFx0dGhpcy4kZWwgICAgICAgICAgPSAkKCdib2R5Jyk7XG5cdFx0dGhpcy4kbGlua1RvICAgICAgPSB0aGlzLiRlbC5maW5kKCcuanMtbGluay10bycpO1xuXHRcdHRoaXMubmF2IFx0ICAgICAgPSB0aGlzLiRlbC5maW5kKCcubWFpbi1uYXYnKTtcdFx0XG5cdFx0dGhpcy4kcHJldmlld3MgICAgPSB0aGlzLiRlbC5maW5kKCcuanMtcHJldmlldycpO1xuXHRcdHRoaXMuJHNsaWRlciAgICAgID0gdGhpcy4kZWwuZmluZCgnLmpzLXNsaWRlcicpO1xuXHRcdHRoaXMuJHNraWxscyAgICAgID0gdGhpcy4kZWwuZmluZCgnLmpzLXNraWxscy1jb250ZW50Jyk7XG5cdFx0dGhpcy4kYmFuZHMgICAgICAgPSB0aGlzLiRlbC5maW5kKCcuanMtYmFuZCcpO1xuXHRcdHRoaXMuJG9wZW5HYWxlcnkgID0gdGhpcy4kZWwuZmluZCgnLmpzLW9wZW4tZ2FsZXJ5Jyk7XG5cdFx0dGhpcy4kZm9ybSAgICAgICAgPSB0aGlzLiRlbC5maW5kKCcuanMtZm9ybScpO1xuXHRcdHRoaXMudGlsdFNldHRpbmdzID0gW1xuXHRcdFx0e30sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAxMCwgejogMzB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogLTEwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAyMDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRsaW5lcyA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAxMCwgejogWzAsNzBdfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IC0yfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAyMDAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IDJ9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG92ZXJsYXkgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogLTEwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IDJ9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwMCwgeTogMTAwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAyMDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdGltZ1dyYXBwZXIgOiB7XG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAtNSwgeTogMTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDkwMCwgZWFzaW5nIDogJ2Vhc2VPdXRDdWJpYyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMzAsIHk6IDMwLCB6OiBbMCw0MF19LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogWzAsMTVdLCB5OiAwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMjAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAxMCwgejogWzAsMjBdfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMDAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMDAsIHk6IDEwMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogOTAwLCBlYXNpbmcgOiAnZWFzZU91dEN1YmljJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IC01LCB5OiAxMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNTAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMjAsIHk6IDIwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAyMDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNSwgeTogLTUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogNn0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNTAsIHk6IDUwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA1MCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDAsIHk6IC04LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDMsIHk6IDMsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEyMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRsaW5lcyA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDE1LCB5OiAxNSwgejogWzAsMTVdfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMjAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDAsIHk6IDgsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDYwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogLTE1LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA5MDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDUwLCB5OiA1MCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0bGluZXMgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAtNSwgeTogNSwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxNSwgeTogMTUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogM30sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTUwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFbGFzdGljJywgZWxhc3RpY2l0eSA6IDcwMH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG92ZXJsYXkgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxNSwgeTogLTE1LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA1MDAsZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNTAsIHk6IDUwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA1MDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdGltZ1dyYXBwZXIgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1LCB5OiA1LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA4MDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhcnQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAxMCwgejogWzAsNTBdfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMDAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YXJ0J31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNTAsIHk6IDUwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA4MDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhcnQnfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRsaW5lcyA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDQwLCB5OiA0MCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTUwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFbGFzdGljJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAyMCwgeTogMjAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogLTV9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEwMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogLTMwLCB5OiAtMzAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogM30sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNzUwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMDAsIHk6IDEwMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNzUwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fV07XG5cblx0XHR0aGlzLlVzZXJTZWUgICA9IHRydWU7XG5cdFx0dGhpcy5za2lsbHNPbiAgPSBmYWxzZTtcblxuXHRcdHRoaXMuc3IgXHQgICA9IFNjcm9sbFJldmVhbCh7IHJlc2V0OiBmYWxzZSB9KTtcblxuXHRcdC8vaW5pdCBTbGlkZXIgXG5cdFx0aWYgKHRoaXMuJHNsaWRlci5sZW5ndGgpIHtcblx0XHRcdHRoaXMuYXV0b3BsYXkgPSBuZXcgU2xpZGVyO1xuXHRcdFx0dGhpcy5hdXRvcGxheS5pbml0KHRoaXMuJHNsaWRlcik7XG5cdFx0fVxuXHRcdHRoaXMudmlld0lzQWN0aXZlKCk7IFx0XG5cblx0XHQvLyBsaW5rVG8gZnVuY3Rpb24gaWYgbGlua3MgZXhpc3QgXG5cdFx0aWYgKHRoaXMuJGxpbmtUby5sZW5ndGgpIHRoaXMubGlua1RvKCk7XG5cblx0XHQvLyBzY3JvbGwgZm9yIHRvcCBtZW51IG5hdiBcblx0XHR0aGlzLnNjcm9sbCgpO1xuXG5cdFx0Ly8gZnVuY3Rpb24gcmV2YWwgXG5cdFx0dGhpcy5yZXZhbCgpO1x0XG5cblx0XHQvL29wZW4gZ2FsZXJ5IFxuXHRcdHRoaXMuJG9wZW5HYWxlcnkub24oJ2NsaWNrJywgdGhpcy5vcGVuR2FsZXJ5KVxuXG5cdFx0Ly9wcmVsb2FkIGltZyBcblx0XHRpZiAodGhpcy4kcHJldmlld3MubGVuZ3RoKSB0aGlzLnByZWxvYWQoKTtcdFxuXG5cdFx0Ly9wcmVsb2FkIGltZyBwcmV2aWV3IFxuXHRcdHRoaXMuaW5pdFBvcnRmb2xpb1ByZXZpZXcoKTtcblxuXHRcdC8vaW5pdCBmb3JtIFxuXHRcdGlmICh0aGlzLiRmb3JtLmxlbmd0aCkgdGhpcy5pbml0Rm9ybSgpO1xuXHRcdFxuXHR9LFxuXG5cdHZpZXdJc0FjdGl2ZSgpIHtcblx0XHR3aW5kb3cub25mb2N1cyA9ICgpID0+IHtcblx0XHQgICAgdGhpcy5Vc2VyU2VlID0gdHJ1ZTtcblx0XHQgIH07XG5cblx0XHR3aW5kb3cub25ibHVyID0gKCkgPT4ge1xuXHRcdCAgICB0aGlzLlVzZXJTZWUgPSBmYWxzZTtcblx0XHQgIH07XG5cdFx0c2V0SW50ZXJ2YWwoICgpID0+IHtcblx0XHQgICAgaWYgKCF0aGlzLlVzZXJTZWUpIHRoaXMuYXV0b3BsYXkuc3RvcCgpO1xuXHRcdH0sIDEwMDApO1xuXHR9LFxuXG5cdGxpbmtUbygpIHtcblx0XHR0aGlzLiRsaW5rVG8ub24oJ2NsaWNrIHRvdWNoJywgKGUpID0+IHtcblx0XHRcdGxldCB0YXJnZXQgICA9ICQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCdocmVmJyk7XG5cdFx0XHRsZXQgJHNlY3Rpb24gPSB0aGlzLiRlbC5maW5kKHRhcmdldCk7XG5cdFx0XHQkKCdib2R5LCBodG1sJykuYW5pbWF0ZSh7XG5cdFx0ICAgICAgICBzY3JvbGxUb3A6ICRzZWN0aW9uLm9mZnNldCgpLnRvcFxuXHRcdCAgICB9LCAxMDAwKTtcblx0XHR9KVxuXHR9LCBcblxuXHRpc1Zpc2libGUoZWxlbWVudCkge1xuXHRcdGxldCAkZWxlbWVudCAgICAgICAgPSAkKGVsZW1lbnQpO1xuXHRcdGxldCB0b3BFbGVtZW50IFx0ICAgID0gJGVsZW1lbnQub2Zmc2V0KCkudG9wO1xuXHRcdGxldCBib3R0b21FbGVtZW50IFx0PSAoJGVsZW1lbnQub2Zmc2V0KCkudG9wICsgJGVsZW1lbnQuaGVpZ2h0KCkgKSA7XG5cdFx0bGV0IHNjcm9sbHRvcCBcdCAgICA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblx0XHRsZXQgc2Nyb2xsQm90dG9tIFx0PSBzY3JvbGx0b3AgKyAkKHdpbmRvdykuaGVpZ2h0KCk7XG5cdFx0bGV0IGlzVmlzaWJsZSAgICAgICA9IGZhbHNlO1xuXG5cdFx0aWYgKCB0b3BFbGVtZW50ID4gc2Nyb2xsdG9wICYmIGJvdHRvbUVsZW1lbnQgPCBzY3JvbGxCb3R0b20gKSB7XG5cdFx0XHRpc1Zpc2libGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpc1Zpc2libGUgPSBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIGlzVmlzaWJsZSA7XG5cdH0sXG5cblx0b3BlbkdhbGVyeShlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0bGV0IHRhcmdldCA9ICQoZS50YXJnZXQpLmF0dHIoJ2hyZWYnKTtcblx0XHRcblx0fSxcblxuXHRzY3JvbGwoKSB7XG5cdFx0bGV0IHN0ZXAxID0gdGhpcy4kZWwuZmluZCgnI2Fib3V0Jykub2Zmc2V0KCkudG9wO1xuXHRcdCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSBzdGVwMS0xMDAgPyB0aGlzLm5hdi5hZGRDbGFzcygnZml4eScpIDogdGhpcy5uYXYucmVtb3ZlQ2xhc3MoJ2ZpeHknKTtcblx0XHQkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPj0gc3RlcDEgPyB0aGlzLm5hdi5hZGRDbGFzcygnYWN0aXZlJykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHQkKHdpbmRvdykub24oJ3Njcm9sbCcsICgpID0+IHtcblx0XHRcdGxldCBjdXJyZW50U2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0XHRjdXJyZW50U2Nyb2xsID49IDgwID8gdGhpcy5uYXYuY3NzKCd0b3AnLCAnLTYxcHgnKSA6IHRoaXMubmF2LmNzcygndG9wJywgJzBweCcpO1xuXHRcdFx0Y3VycmVudFNjcm9sbCA+PSBzdGVwMS0xMDAgPyB0aGlzLm5hdi5hZGRDbGFzcygnZml4eScpIDogdGhpcy5uYXYucmVtb3ZlQ2xhc3MoJ2ZpeHknKTtcblx0XHRcdGN1cnJlbnRTY3JvbGwgPj0gc3RlcDEgPyB0aGlzLm5hdi5hZGRDbGFzcygnYWN0aXZlJykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHRcdC8vaW5pdCBzbGlkZXIgXHRcdFxuXHRcdFx0aWYgKHRoaXMuJHNsaWRlci5sZW5ndGgpIHtcdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy5pc1Zpc2libGUodGhpcy4kc2xpZGVyKSkge1xuXHRcdFx0XHRcdHRoaXMuYXV0b3BsYXkucGxheSgpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5hdXRvcGxheS5zdG9wKClcblx0XHRcdFx0fVxuXHRcdFx0fSBcblxuXHRcdFx0aWYgKHRoaXMuJHNraWxscy5sZW5ndGgpIHtcdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy5pc1Zpc2libGUodGhpcy4kc2tpbGxzWzBdKSkge1x0XG5cdFx0XHRcdFx0dGhpcy5zaG93U2tpbGxzKCk7XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy4kYmFuZHMubGVuZ3RoKSB7XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnNob3dCYW5kcygpO1x0XHRcdFx0XG5cdFx0XHR9ICBcblx0XHR9KTsgXG5cdFxuXHR9LFxuXG5cdHJldmFsKCkge1xuXHRcdC8vbGVmdCB0byByaWdodFxuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtbGVmdCcsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2xlZnQnLCBzY2FsZTogMSwgZHVyYXRpb246NTAwfSk7XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1sZWZ0LWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnbGVmdCcsIHNjYWxlOiAxLCBkZWxheTogNTAwLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLWxlZnQtbG9uZy1kZWxheScsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2xlZnQnLCBzY2FsZTogMSwgZGVsYXk6IDE1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdC8vcmlnaHQgdG8gbGVmdFxuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtcmlnaHQnLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdyaWdodCcsIHNjYWxlOiAxLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXJpZ2h0LWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAncmlnaHQnLCBzY2FsZTogMSwgZGVsYXk6IDUwMCwgZHVyYXRpb246NTAwfSk7XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1yaWdodC1sb25nLWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAncmlnaHQnLCBzY2FsZTogMSwgZGVsYXk6IDE1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdC8vYm90dG9tIHRvIHRvcCBcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXRvcCcsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2JvdHRvbScsIHNjYWxlOiAxLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXRvcC1kZWxheScsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2JvdHRvbScsIHNjYWxlOiAxLCBkZWxheTogNTAwLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXRvcC1sb25nLWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnYm90dG9tJywgc2NhbGU6IDEsIGRlbGF5OiAxNTAwLCBkdXJhdGlvbjo1MDB9KTtcblxuXHR9LFxuXG5cdHNob3dTa2lsbHMoKSB7XG5cblx0XHRpZighdGhpcy5za2lsbHNPbikge1xuXHRcdFx0bGV0ICRza2lsbHMgPSB0aGlzLiRlbC5maW5kKCcuanMtcGVyY2VudCcpO1xuXHRcdFx0JHNraWxscy5lYWNoKCAoaW5kZXgsIGN1cnJlbnQpID0+IHtcblx0XHRcdFx0bGV0IF9wZXJjZW50ID0gJChjdXJyZW50KS5hdHRyKCdkYXRhLXBlcmNlbnQnKSsnJSc7XG5cdFx0XHRcdCQoY3VycmVudCkuY3NzKCd3aWR0aCcsIF9wZXJjZW50KTtcblx0XHRcdH0gKVxuXHRcdH1cblx0fSxcblxuXHRzaG93QmFuZHMoKSB7XG5cdFx0dGhpcy4kYmFuZHMuZWFjaCggKGksIGN1cnJlbnQpID0+IHtcblx0XHRcdGxldCBfYmFuZCA9ICQoY3VycmVudCk7XG5cblx0XHRcdGlmKHRoaXMuaXNWaXNpYmxlKGN1cnJlbnQpKSB7XG5cdFx0XHRcdF9iYW5kLmhhc0NsYXNzKCdqcy1iYW5kLXJpZ2h0JykgPyBfYmFuZC5jc3MoJ3JpZ2h0JywgMCkgOiBfYmFuZC5jc3MoJ2xlZnQnLCAwKTtcblx0XHRcdFx0aWYoX2JhbmQuaGFzQ2xhc3MoJ2pzLWxhc3QtYmFuZCcpKSB0aGlzLiRmb3JtLmFkZENsYXNzKCd2aXNpYmxlJyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblxuXHRwcmVsb2FkKCkge1xuXHRcdHRoaXMuJHByZXZpZXdzLmVhY2goKGlkeCwgY29udGFpbmVyKSA9PiB7XG5cdFx0XHRsZXQgJGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcblx0XHRcdGxldCBfdXJsICAgICAgID0gJGNvbnRhaW5lci5kYXRhKCdpbWFnZS11cmwnKTtcblx0XHRcdGxldCBpbWcgICAgICAgID0gbmV3IEltYWdlKCk7XG5cblx0XHRcdGltZy5zcmMgICAgICAgID0gX3VybDtcblxuXHQgICAgICAgIC8vIGlmIHdlIGhhdmUgdGhpcyBpbWFnZSBhbHJlYWR5IGNhY2hlZCwgd2UgZG9uJ3QgaGF2ZVxuXHQgICAgICAgIC8vIHRvIHdhaXQgZm9yIHRoZSBvbmxvYWQgY2FsbGJhY2sgYW5kIGNhbiByZW1vdmUgdGhlXG5cdCAgICAgICAgLy8gcHJldmlldyBpbWFnZSBpbW1lZGlhdGVseVxuXHQgICAgICAgIGlmKHRoaXMuaW1nQ29tcGxldGUoaW1nKSkge1xuXHQgICAgICAgIFx0dGhpcy5yZW1vdmVQcmV2aWV3KCRjb250YWluZXIsIF91cmwpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgXHRpbWcub25sb2FkID0gKCkgPT4ge1xuXHQgICAgICAgIFx0XHR0aGlzLnJlbW92ZVByZXZpZXcoJGNvbnRhaW5lciwgX3VybCk7XG5cdCAgICAgICAgXHR9O1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXHR9LFxuXG5cdGltZ0NvbXBsZXRlKGltZykge1xuICAgICAgICByZXR1cm4gaW1nLmNvbXBsZXRlIHx8IGltZy53aWR0aCArIGltZy5oZWlnaHQgPiAwO1xuICAgIH0sXG4gIFxuICAgIHJlbW92ZVByZXZpZXcoJGNvbnRhaW5lciwgdXJsKSB7XG4gICAgICAgICRjb250YWluZXIuY3NzKHsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoXCInICsgdXJsICsgJ1wiKSd9KTtcbiAgICAgICAgJGNvbnRhaW5lci5yZW1vdmVDbGFzcygnanMtcHJldmlldyBwcmV2aWV3Jyk7XG4gICAgfSxcblxuICAgIGluaXRQb3J0Zm9saW9QcmV2aWV3KCkge1xuXHRcdGxldCBpZHggPSAwO1xuXHRcdFtdLnNsaWNlLmNhbGwoJCgnYS50aWx0ZXInKSkuZm9yRWFjaCgoZWwsIHBvcykgPT4geyBcblx0XHRcdGlkeCA9IHBvcyUyID09PSAwID8gaWR4KzEgOiBpZHg7XG5cdFx0XHRsZXQgX1RpbHRGeCA9IG5ldyBUaWx0Rng7XG5cdFx0XHRfVGlsdEZ4LmluaXQoZWwsIEFwcC50aWx0U2V0dGluZ3NbaWR4LTFdKTtcblx0XHR9KTtcblxuXHRcdGxldCBwYXRlciAgICA9IHRoaXMuJGVsLmZpbmQoJy5wYXRlcicpO1xuXHRcdGxldFx0cGF0ZXJTVkcgPSBwYXRlci5maW5kKCcucGF0ZXJfX3N2ZycpO1xuXHRcdGxldFx0cGF0aEVsICAgPSBwYXRlclNWRy5maW5kKCdwYXRoJyk7XG5cdFx0bGV0XHRwYXRocyAgICA9IHtkZWZhdWx0OiBwYXRoRWwuYXR0cignZCcpLCBhY3RpdmU6IHBhdGVyU1ZHLmF0dHIoJ2RhdGEtcGF0aC1ob3ZlcicpfTtcblxuXHRcdHBhdGVyLm9uKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuXHRcdFx0YW5pbWUucmVtb3ZlKHBhdGhFbCk7XG5cdFx0XHRhbmltZSh7XG5cdFx0XHRcdHRhcmdldHM6IHBhdGhFbCxcblx0XHRcdFx0ZDogcGF0aHMuYWN0aXZlLFxuXHRcdFx0XHRkdXJhdGlvbjogNDAwLFxuXHRcdFx0XHRlYXNpbmc6ICdlYXNlT3V0UXVhZCdcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0cGF0ZXIub24oJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG5cdFx0XHRhbmltZS5yZW1vdmUocGF0aEVsKTtcblx0XHRcdGFuaW1lKHtcblx0XHRcdFx0dGFyZ2V0czogcGF0aEVsLFxuXHRcdFx0XHRkOiBwYXRocy5kZWZhdWx0LFxuXHRcdFx0XHRkdXJhdGlvbjogNDAwLFxuXHRcdFx0XHRlYXNpbmc6ICdlYXNlT3V0RXhwbydcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxuXG5cdGluaXRGb3JtKCkge1xuXG5cdFx0bGV0ICRmb3JtID0gdGhpcy4kZm9ybTsgXG5cdFx0bGV0IGNoZWNrRm9ybSA9IFsgZmFsc2UsIGZhbHNlLCBmYWxzZV07XG5cblx0XHQkZm9ybS5maW5kKCd0ZXh0YXJlYScpLmJsdXIoZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2JsdXInKVxuXHRcdCAgICAkZm9ybS5maW5kKCd0ZXh0YXJlYScpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCAgICBcdGNvbnNvbGUubG9nKCd2YWx1ZScsIHRoaXMudmFsdWUgPT09ICcnKVxuXHRcdCAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcblx0XHQgICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoXCJeW2EtekEtWsOALcO6w4Atw78wLTkk4oKsLiBdKyRcIik7XG5cblx0XHQgICAgICAgIGlmIChyZWdleC50ZXN0KHRoaXMudmFsdWUpICkge1xuXHRcdCAgICAgICAgXHRjb25zb2xlLmxvZygncmVnZXgnKTtcblx0XHQgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgICAgICQoJy5tc2ctYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAndHJhbnNwYXJlbnQnfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm1zZy1ib3ggLmpzLWNoZWNrJykuY3NzKHsnb3BhY2l0eSc6IDF9KTtcblx0XHQgICAgICAgICAgXHQkKCcubXNnLWJveCAuanMtZXJyb3InKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVswXSA9IHRydWU7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICBlbHNlIGlmICh0aGlzLnZhbHVlID09PSAnJykge1xuXHRcdCAgICAgICAgXHRjb25zb2xlLmxvZygnY291Y3VvJylcblx0XHQgICAgICAgICAgXHQkdGhpcy5yZW1vdmVDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgICBcdCQoJy5tc2ctYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAnd2hpdGUnfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm1zZy1ib3ggaW5wdXQgKyBsYWJlbCArIHNwYW4nKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdCQoJy5tc2ctYm94IC5qcy1jaGVjaycpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm1zZy1ib3ggLmpzLWVycm9yJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMF0gPSBmYWxzZTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICAgIGVsc2Uge1xuXHRcdCAgICAgICAgXHQkdGhpcy5hZGRDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgXHQkKCcubXNnLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3RyYW5zcGFyZW50J30pO1xuXHRcdCAgICAgICAgXHQkKCcubXNnLWJveCAuanMtY2hlY2snKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdCQoJy5tc2ctYm94IC5qcy1lcnJvcicpLmNzcyh7J29wYWNpdHknOiAxfSk7XG5cdFx0ICAgICAgICAgIFx0Y2hlY2tGb3JtWzBdID0gZmFsc2U7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgIH0pO1xuXHRcdH0pO1xuXG5cdFx0JGZvcm0uZmluZCgnLm5hbWUtYm94IGlucHV0JykuYmx1cihmdW5jdGlvbiAoKSB7XG5cblx0XHQgICAgJGZvcm0uZmluZCgnLm5hbWUtYm94IGlucHV0JykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0ICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuXHRcdCAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIl5bYS16QS1aw4Atw7rDgC3DvyBdKiRcIik7XG5cblx0XHQgICAgICAgIGlmIChyZWdleC50ZXN0KHRoaXMudmFsdWUpICkge1xuXHRcdCAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICAgICAgJCgnLm5hbWUtYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAndHJhbnNwYXJlbnQnfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm5hbWUtYm94IC5qcy1jaGVjaycpLmNzcyh7J29wYWNpdHknOiAxfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm5hbWUtYm94IC5qcy1lcnJvcicpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0Y2hlY2tGb3JtWzFdID0gdHJ1ZTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICAgIGVsc2UgaWYgKHRoaXMudmFsdWUgPT09ICcnKSB7XG5cdFx0ICAgICAgICAgIFx0JHRoaXMucmVtb3ZlQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgICAgXHQkKCcubmFtZS1ib3ggbGFiZWwnKS5jc3Moeydjb2xvcic6ICd3aGl0ZSd9KTtcblx0XHQgICAgICAgICAgXHQkKCcubmFtZS1ib3ggaW5wdXQgKyBsYWJlbCArIHNwYW4nKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVsxXSA9IGZhbHNlO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAgZWxzZSB7XG5cdFx0ICAgICAgICBcdCR0aGlzLmFkZENsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICBcdCQoJy5uYW1lLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3RyYW5zcGFyZW50J30pO1xuXHRcdCAgICAgICAgXHQkKCcubmFtZS1ib3ggLmpzLWNoZWNrJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHQkKCcubmFtZS1ib3ggLmpzLWVycm9yJykuY3NzKHsnb3BhY2l0eSc6IDF9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMV0gPSBmYWxzZTtcblx0XHQgICAgICAgIH1cblxuXHRcdCAgICB9KTtcblxuXHRcdH0pO1xuXG5cdFx0JGZvcm0uZmluZCgnLmVtYWlsLWJveCBpbnB1dCcpLmJsdXIoZnVuY3Rpb24gKCkge1xuXHRcdCAgICAkZm9ybS5maW5kKCcuZW1haWwtYm94IGlucHV0JykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0ICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuXHRcdCAgICAgICAgbGV0IHJlZ2V4ID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cblx0XHQgICAgICAgIGlmIChyZWdleC50ZXN0KHRoaXMudmFsdWUpICkge1xuXHRcdCAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICAgICAgJCgnLmVtYWlsLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3RyYW5zcGFyZW50J30pO1xuXHRcdCAgICAgICAgICBcdCQoJy5lbWFpbC1ib3ggLmpzLWNoZWNrJykuY3NzKHsnb3BhY2l0eSc6IDF9KTtcblx0XHQgICAgICAgICAgXHQkKCcuZW1haWwtYm94IC5qcy1lcnJvcicpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0Y2hlY2tGb3JtWzJdID0gdHJ1ZTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICAgIGVsc2UgaWYgKHRoaXMudmFsdWUgPT09ICcnKSB7XG5cdFx0ICAgICAgICAgIFx0JHRoaXMucmVtb3ZlQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgICAgXHQkKCcuZW1haWwtYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAnd2hpdGUnfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLmVtYWlsLWJveCBpbnB1dCArIGxhYmVsICsgc3BhbicpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0Y2hlY2tGb3JtWzJdID0gZmFsc2U7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICBlbHNlIHtcblx0XHQgICAgICAgIFx0JHRoaXMuYWRkQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgIFx0JCgnLmVtYWlsLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3RyYW5zcGFyZW50J30pO1xuXHRcdCAgICAgICAgXHQkKCcuZW1haWwtYm94IC5qcy1jaGVjaycpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLmVtYWlsLWJveCAuanMtZXJyb3InKS5jc3MoeydvcGFjaXR5JzogMX0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVsyXSA9IGZhbHNlO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICB9KTtcblx0XHR9KTtcblxuXHRcdCRmb3JtLm9uKCdzdWJtaXQnLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0bGV0ICRlcnJvck1zZyAgID0gdGhpcy4kZWwuZmluZCgnLmpzLWVycm9yLW1lc3NhZ2UnKTtcblx0XHRcdGxldCAkc3VjY2Vzc01zZyA9IHRoaXMuJGVsLmZpbmQoJy5qcy1zdWNjZXNzLW1lc3NhZ2UnKTtcblx0XHRcdGxldCBjaGVjayAgICAgICA9IDA7IFxuXG5cdFx0XHRjaGVja0Zvcm0uZm9yRWFjaCggKGVsZW1lbnQsIGluZGV4KSA9PiB7XHRcdFx0XHRcblx0XHRcdFx0aWYoZWxlbWVudCkgY2hlY2srKztcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoIGNoZWNrID09PSAzICkge1xuXHRcdFx0XHQvL2NhbiBzZW5kIGZvcm1cblxuXHRcdFx0XHRsZXQgcyA9ICRmb3JtLnNlcmlhbGl6ZSgpO1xuXG5cdFx0XHRcdCQuYWpheCh7XG5cdCAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcblx0ICAgICAgICAgICAgICAgIHVybDogXCIuLi9tYWlsLnBocFwiLFxuXHQgICAgICAgICAgICAgICAgZGF0YTogcyxcblx0ICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnByZXBlbmQoJzxkaXYgc3R5bGU9XCJwb3NpdGlvbjpmaXhlZDsgdG9wOjUwJTsgei1pbmRleDoyMDAwO1wiIGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlZvdHJlIGVtYWlsIMOgIGJpZW4gw6l0w6kgdHJhbnNtaXMgITwvZGl2PicpXG5cdCAgICAgICAgICAgICAgICAgICAgLmhpZGUoKVxuXHQgICAgICAgICAgICAgICAgICAgIC5mYWRlSW4oMTUwMCk7ICAgICAgICAgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuXHQgICAgICAgICAgICAgICAgICBcdCQoJ2JvZHknKS5wcmVwZW5kKCc8ZGl2IHN0eWxlPVwicG9zaXRpb246Zml4ZWQ7IHRvcDo1MCU7IHotaW5kZXg6MjAwMDtcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPkxcXCdlbnZvaSBkdSBtYWlsIGEgw6ljaG91w6ksIHZldWlsbGV6IHLDqWVzc2F5ZXIgU1ZQPC9kaXY+Jylcblx0ICAgICAgICAgICAgICAgICAgICAuaGlkZSgpXG5cdCAgICAgICAgICAgICAgICAgICAgLmZhZGVJbigxNTAwKTtcblx0ICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgIFx0fSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHR9XG5cdFx0XHRjb25zb2xlLmxvZyhjaGVjaylcblx0XHR9KVxuXHR9XG5cbn1cblxuJCh3aW5kb3cpLnJlYWR5KEFwcC5pbml0LmJpbmQoQXBwKSk7IiwiY2xhc3MgU2xpZGVyIHsgXG5cblx0aW5pdChlbCkge1xuXHRcdHRoaXMuJGVsICAgICAgICAgID0gJChlbCk7XG5cdFx0dGhpcy4kY29udGFpbmVyICAgPSB0aGlzLiRlbC5maW5kKCd1bCcpO1xuXHRcdHRoaXMuJHNsaWRlcnMgICAgID0gdGhpcy4kY29udGFpbmVyLmZpbmQoJ2xpJyk7XG5cdFx0dGhpcy5ub21iZXJTbGlkZSAgPSB0aGlzLiRzbGlkZXJzLmxlbmd0aDtcblx0XHR0aGlzLndpZHRoICAgICAgICA9IDMwMDtcblx0XHR0aGlzLmxlZnQgICAgICAgICA9IC10aGlzLndpZHRoO1xuXHRcdHRoaXMuZHVyYXRpb24gXHQgID0gMzUwMDtcblx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IDE7XG5cdFx0dGhpcy5pc1BsYXlpbmcgICAgPSBmYWxzZTtcblx0XHRcblxuXHRcdHRoaXMuJGNvbnRhaW5lci5jc3MoJ3dpZHRoJywgdGhpcy5ub21iZXJTbGlkZSp0aGlzLndpZHRoKydweCcpO1xuXHRcdCQodGhpcy4kc2xpZGVyc1swXSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0dGhpcy4kZWwuaG92ZXIoKCkgPT4geyB0aGlzLnN0b3AoKSB9LCAoKSA9PiB7IHRoaXMucGxheSgpIH0gKTtcdFx0XG5cblx0fVxuXG5cdHNsaWRlcigpIHtcblx0XHR0aGlzLiRjb250YWluZXIuYW5pbWF0ZSh7XG5cdFx0XHRcdFx0bGVmdCA6IHRoaXMubGVmdCsncHgnXG5cdFx0XHRcdH0sIDIwMCwgKCkgPT4ge1xuXHRcdFx0XHRcdCQodGhpcy4kc2xpZGVycykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdCQodGhpcy4kc2xpZGVyc1t0aGlzLmN1cnJlbnRJbmRleF0pLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRpZiAodGhpcy5sZWZ0ID4gKHRoaXMubm9tYmVyU2xpZGUtMSkqLSh0aGlzLndpZHRoKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5sZWZ0ID0gdGhpcy5sZWZ0LXRoaXMud2lkdGg7XG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCsrO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxlZnQgPSAwO1xuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SW5kZXggPSAwO1xuXHRcdFx0XHRcdH1cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHR9XG5cblx0cGxheSgpIHtcblx0XHRcblx0XHRpZiAoIXRoaXMuaXNQbGF5aW5nKSB7XG5cdFx0XHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5zbGlkZXIuYmluZCh0aGlzKSwgdGhpcy5kdXJhdGlvbik7XG5cdFx0XHR0aGlzLmlzUGxheWluZyA9IHRydWU7XG5cdFx0fVxuXHRcdFxuXHR9XG5cblx0c3RvcCgpIHtcblx0XHRpZiAodGhpcy5pc1BsYXlpbmcpIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG5cdFx0XHR0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjsiLCJjbGFzcyBUaWx0Rngge1xuXG5cdC8vIEhlbHBlciB2YXJzIGFuZCBmdW5jdGlvbnMuXG5cdGV4dGVuZCggYSwgYiApIHtcblx0XHRmb3IoIGxldCBrZXkgaW4gYiApIHsgXG5cdFx0XHRpZiggYi5oYXNPd25Qcm9wZXJ0eSgga2V5ICkgKSB7XG5cdFx0XHRcdGFba2V5XSA9IGJba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGE7XG5cdH1cblxuXHRnZXRNb3VzZVBvcyhlKSB7XG5cdFx0bGV0IHBvc3ggPSAwO1xuXHRcdGxldCBwb3N5ID0gMDtcblxuXHRcdGlmICghZSkge2xldCBlID0gd2luZG93LmV2ZW50fVxuXHRcdGlmIChlLnBhZ2VYIHx8IGUucGFnZVkpIFx0e1xuXHRcdFx0cG9zeCA9IGUucGFnZVg7XG5cdFx0XHRwb3N5ID0gZS5wYWdlWTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoZS5jbGllbnRYIHx8IGUuY2xpZW50WSkgXHR7XG5cdFx0XHRwb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG5cdFx0XHRwb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRcdH1cblx0XHRyZXR1cm4geyB4IDogcG9zeCwgeSA6IHBvc3kgfVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQuXG5cdCAqL1xuXHRpbml0KGVsLCBvcHRpb25zKSB7XG5cdFx0dGhpcy5ET00gICAgICAgICAgICAgICAgICAgICAgID0ge307XG5cdFx0dGhpcy5ET00uZWwgICAgICAgICAgICAgICAgICAgID0gZWw7XG5cdFx0dGhpcy5vcHRpb25zICAgICAgICAgICAgICAgICAgID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAwfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAtNSwgeTogNSwgejogMH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMTIwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA6ICdlYXNlT3V0RWxhc3RpYycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbGFzdGljaXR5IDogNjAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaW5lcyA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogMTAsIHo6IFswLDEwXX0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMTAwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA6ICdlYXNlT3V0RXhwbycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbGFzdGljaXR5IDogNjAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDIwLCB5OiAyMCwgejogMH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogMH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMTUwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA6ICdlYXNlT3V0RWxhc3RpYycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbGFzdGljaXR5IDogNjAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAxMCwgejogWzAsNTBdfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb24gOiA1MDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgOiAnZWFzZU91dEV4cG8nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1MCwgeTogNTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDEyMDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgOiAnZWFzZU91dEVsYXN0aWMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxhc3RpY2l0eTogNjAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcblx0XHR0aGlzLmV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1x0XHRcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlICAgICAgICAgICAgPSB7fTtcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlLmltZ1dyYXBwZXIgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcudGlsdGVyX19maWd1cmUnKTtcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlLmxpbmVzICAgICAgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcudGlsdGVyX19kZWNvLS1saW5lcycpO1xuXHRcdHRoaXMuRE9NLmFuaW1hdGFibGUuY2FwdGlvbiAgICA9IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoJy50aWx0ZXJfX2NhcHRpb24nKTtcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlLm92ZXJsYXkgICAgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcudGlsdGVyX19kZWNvLS1vdmVybGF5Jyk7XG5cdFx0dGhpcy5ET00uYW5pbWF0YWJsZS5zaGluZSAgICAgID0gdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLnRpbHRlcl9fZGVjby0tc2hpbmUgPiBkaXYnKTtcblx0XHR0aGlzLmluaXRFdmVudHMoKTtcblx0fVxuXG5cdGluaXRFdmVudHMoKSB7XHRcdFxuXG5cdFx0JCh0aGlzLkRPTS5lbCkub24oJ21vdXNlbW92ZScsICAoZSkgPT4ge3RoaXMubW91c2Vtb3ZlRm4oZSl9KTtcblx0XHQkKHRoaXMuRE9NLmVsKS5vbignbW91c2VsZWF2ZScsIChlKSA9PiB7dGhpcy5tb3VzZWxlYXZlRm4oZSl9KTtcblx0XHQkKHRoaXMuRE9NLmVsKS5vbignbW91c2VlbnRlcicsICggKSA9PiB7dGhpcy5tb3VzZWVudGVyRm4oKX0pO1xuXHR9XG5cblx0bW91c2Vtb3ZlRm4oZXYpIHtcdFx0XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHsgdGhpcy5sYXlvdXQoZXYpOyB9KTtcblx0fVxuXG5cdG1vdXNlZW50ZXJGbigpIHtcdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5ET00uYW5pbWF0YWJsZSkge1xuXHRcdFx0YW5pbWUucmVtb3ZlKHRoaXMuRE9NLmFuaW1hdGFibGVba2V5XSk7XG5cdFx0fVxuXHR9XG5cblx0bW91c2VsZWF2ZUZuKGV2KSB7XHRcdFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHRmb3IobGV0IGtleSBpbiB0aGlzLkRPTS5hbmltYXRhYmxlKSB7XG5cdFx0XHRcdGlmKCB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XSA9PSB1bmRlZmluZWQgKSB7Y29udGludWU7fVxuXHRcdFx0XHRhbmltZSh7XG5cdFx0XHRcdFx0dGFyZ2V0czogdGhpcy5ET00uYW5pbWF0YWJsZVtrZXldLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnJldmVyc2VBbmltYXRpb24uZHVyYXRpb24gfHwgMCA6IDEsXG5cdFx0XHRcdFx0ZWFzaW5nOiB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnJldmVyc2VBbmltYXRpb24uZWFzaW5nIHx8ICdsaW5lYXInIDogJ2xpbmVhcicsXG5cdFx0XHRcdFx0ZWxhc3RpY2l0eTogdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucmV2ZXJzZUFuaW1hdGlvbiAhPSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uLmVsYXN0aWNpdHkgfHwgbnVsbCA6IG51bGwsXG5cdFx0XHRcdFx0c2NhbGVYOiAxLFxuXHRcdFx0XHRcdHNjYWxlWTogMSxcblx0XHRcdFx0XHRzY2FsZVo6IDEsXG5cdFx0XHRcdFx0dHJhbnNsYXRlWDogMCxcblx0XHRcdFx0XHR0cmFuc2xhdGVZOiAwLFxuXHRcdFx0XHRcdHRyYW5zbGF0ZVo6IDAsXG5cdFx0XHRcdFx0cm90YXRlWDogMCxcblx0XHRcdFx0XHRyb3RhdGVZOiAwLFxuXHRcdFx0XHRcdHJvdGF0ZVo6IDBcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRsYXlvdXQoZXYpIHtcblx0XHQvLyBNb3VzZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnQuXG5cdFx0bGV0IG1vdXNlcG9zID0gdGhpcy5nZXRNb3VzZVBvcyhldik7XG5cdFx0XHQvLyBEb2N1bWVudCBzY3JvbGxzLlxuXHRcdGxldFx0ZG9jU2Nyb2xscyA9IHtsZWZ0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsIHRvcCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcH07XG5cdFx0bGV0XHRib3VuZHMgPSB0aGlzLkRPTS5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdC8vIE1vdXNlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBtYWluIGVsZW1lbnQgKHRoaXMuRE9NLmVsKS5cblx0XHRsZXRcdHJlbG1vdXNlcG9zID0geyB4IDogbW91c2Vwb3MueCAtIGJvdW5kcy5sZWZ0IC0gZG9jU2Nyb2xscy5sZWZ0LCB5IDogbW91c2Vwb3MueSAtIGJvdW5kcy50b3AgLSBkb2NTY3JvbGxzLnRvcCB9O1xuXG5cdFx0Ly8gTW92ZW1lbnQgc2V0dGluZ3MgZm9yIHRoZSBhbmltYXRhYmxlIGVsZW1lbnRzLlxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuRE9NLmFuaW1hdGFibGUpIHtcblx0XHRcdGlmKCB0aGlzLkRPTS5hbmltYXRhYmxlW2tleV0gPT0gdW5kZWZpbmVkIHx8IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldID09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRsZXQgdCA9IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnRyYW5zbGF0aW9uIHx8IHt4OjAseTowLHo6MH0gOiB7eDowLHk6MCx6OjB9O1xuXHRcdFx0bGV0XHRyID0gdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0gIT0gdW5kZWZpbmVkID8gdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucm90YXRpb24gfHwge3g6MCx5OjAsejowfSA6IHt4OjAseTowLHo6MH07XG5cblx0XHRcdHRoaXMuc2V0UmFuZ2UodCk7XG5cdFx0XHR0aGlzLnNldFJhbmdlKHIpO1xuXHRcdFx0XG5cdFx0XHRsZXQgdHJhbnNmb3JtcyA9IHtcblx0XHRcdFx0dHJhbnNsYXRpb24gOiB7XG5cdFx0XHRcdFx0eDogKHQueFsxXS10LnhbMF0pL2JvdW5kcy53aWR0aCpyZWxtb3VzZXBvcy54ICsgdC54WzBdLFxuXHRcdFx0XHRcdHk6ICh0LnlbMV0tdC55WzBdKS9ib3VuZHMuaGVpZ2h0KnJlbG1vdXNlcG9zLnkgKyB0LnlbMF0sXG5cdFx0XHRcdFx0ejogKHQuelsxXS10LnpbMF0pL2JvdW5kcy5oZWlnaHQqcmVsbW91c2Vwb3MueSArIHQuelswXSxcblx0XHRcdFx0fSxcblx0XHRcdFx0cm90YXRpb24gOiB7XG5cdFx0XHRcdFx0eDogKHIueFsxXS1yLnhbMF0pL2JvdW5kcy5oZWlnaHQqcmVsbW91c2Vwb3MueSArIHIueFswXSxcblx0XHRcdFx0XHR5OiAoci55WzFdLXIueVswXSkvYm91bmRzLndpZHRoKnJlbG1vdXNlcG9zLnggKyByLnlbMF0sXG5cdFx0XHRcdFx0ejogKHIuelsxXS1yLnpbMF0pL2JvdW5kcy53aWR0aCpyZWxtb3VzZXBvcy54ICsgci56WzBdXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHRoaXMuRE9NLmFuaW1hdGFibGVba2V5XS5zdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSB0aGlzLkRPTS5hbmltYXRhYmxlW2tleV0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHRyYW5zZm9ybXMudHJhbnNsYXRpb24ueCArICdweCkgdHJhbnNsYXRlWSgnICsgdHJhbnNmb3Jtcy50cmFuc2xhdGlvbi55ICsgJ3B4KSB0cmFuc2xhdGVaKCcgKyB0cmFuc2Zvcm1zLnRyYW5zbGF0aW9uLnogKyAncHgpIHJvdGF0ZVgoJyArIHRyYW5zZm9ybXMucm90YXRpb24ueCArICdkZWcpIHJvdGF0ZVkoJyArIHRyYW5zZm9ybXMucm90YXRpb24ueSArICdkZWcpIHJvdGF0ZVooJyArIHRyYW5zZm9ybXMucm90YXRpb24ueiArICdkZWcpJztcblx0XHR9XG5cdH1cblxuXHRzZXRSYW5nZSAob2JqKSB7XG5cdFx0Zm9yKGxldCBrIGluIG9iaikge1xuXHRcdFx0aWYoIG9ialtrXSA9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdG9ialtrXSA9IFswLDBdO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiggdHlwZW9mIG9ialtrXSA9PT0gJ251bWJlcicgKSB7XG5cdFx0XHRcdG9ialtrXSA9IFstMSpvYmpba10sb2JqW2tdXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUaWx0Rng7Il19
