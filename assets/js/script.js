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

		//scrollto mobile 
		this.$el.find('.js-readmore-mobile').on('touchstart', function (e) {});
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
		var $wrapper = App.$el.find('.js-gallery-wrapper');
		var target = $(e.target).attr('href');
		var $current = $wrapper.find(target);
		var $close = $wrapper.find('.js-close-galery');
		console.log($wrapper, target, $current);
		if ($current.length) {
			$wrapper.addClass('open');
			App.$el.addClass('overflow-hidden');
			$current.css('display', 'block');
			setTimeout(function () {
				$current.addClass('visible');
				$current.find('.left, .right').css('height', $current.find('.left').outerHeight());
			}, 700);
			$current.find('.js-read-more').on('click touch', function (e) {
				$current.addClass('show-more');
			});
			$close.on('click touch', App.closeGalery);
		}
	},
	closeGalery: function closeGalery() {
		var $wrapper = App.$el.find('.js-gallery-wrapper');
		var $visible = $wrapper.find('.visible');

		if ($visible.length) {
			$visible.animate({ scrollTop: 0 }, '100');
			$visible.removeClass('visible show-more');
			setTimeout(function () {
				$visible.css('display', 'none');
				$wrapper.removeClass('open');
				App.$el.removeClass('overflow-hidden');
			}, 700);
		}
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
			$form.find('textarea').each(function () {
				var $this = $(this);
				var regex = new RegExp("^[a-zA-ZÀ-úÀ-ÿ0-9$€. ]+$");

				if (regex.test(this.value)) {
					$this.addClass('focused');
					$('.msg-box label').css({ 'color': 'transparent' });
					$('.msg-box .js-check').css({ 'opacity': 1 });
					$('.msg-box .js-error').css({ 'opacity': 0 });
					checkForm[0] = true;
				} else if (this.value === '') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvYXBwLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvU2xpZGVyLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvVGlsdEZ4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLE1BQU07QUFHVCxLQUhTLGtCQUdGO0FBQ04sT0FBSyxHQUFMLEdBQW9CLEVBQUUsTUFBRixDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsYUFBZCxDQUFwQjtBQUNBLE9BQUssR0FBTCxHQUFrQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsV0FBZCxDQUFsQjtBQUNBLE9BQUssU0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsYUFBZCxDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsWUFBZCxDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsb0JBQWQsQ0FBcEI7QUFDQSxPQUFLLE1BQUwsR0FBb0IsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLFVBQWQsQ0FBcEI7QUFDQSxPQUFLLFdBQUwsR0FBb0IsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGlCQUFkLENBQXBCO0FBQ0EsT0FBSyxLQUFMLEdBQW9CLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxVQUFkLENBQXBCO0FBQ0EsT0FBSyxZQUFMLEdBQW9CLENBQ25CLEVBRG1CLEVBRW5CO0FBQ0MsYUFBVTtBQUNULGdCQUFhO0FBQ1osa0JBQWMsRUFBQyxHQUFHLEVBQUosRUFBUSxHQUFHLEVBQVgsRUFBZSxHQUFHLEVBQWxCLEVBREY7QUFFWixlQUFXLEVBQUMsR0FBRyxDQUFKLEVBQU8sR0FBRyxDQUFDLEVBQVgsRUFBZSxHQUFHLENBQWxC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QVUsU0FBZCxFQUEwQjtBQUN6QixTQUFJLENBQUosSUFBUyxDQUFDLENBQUQsRUFBRyxDQUFILENBQVQ7QUFDQSxLQUZELE1BR0ssSUFBSSxPQUFPLElBQUksQ0FBSixDQUFQLEtBQWtCLFFBQXRCLEVBQWlDO0FBQ3JDLFNBQUksQ0FBSixJQUFTLENBQUMsQ0FBQyxDQUFELEdBQUcsSUFBSSxDQUFKLENBQUosRUFBVyxJQUFJLENBQUosQ0FBWCxDQUFUO0FBQ0E7QUFDRDtBQUNEOzs7Ozs7a0JBSWEsTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgU2xpZGVyIGZyb20gJy4vbW9kdWxlcy9TbGlkZXIuanMnO1xuaW1wb3J0IFRpbHRGeCBmcm9tICcuL21vZHVsZXMvVGlsdEZ4LmpzJztcblxubGV0IEFwcCA9IHtcblxuXHRcblx0aW5pdCgpIHtcblx0XHR0aGlzLiRlbCAgICAgICAgICA9ICQoJ2JvZHknKTtcblx0XHR0aGlzLiRsaW5rVG8gICAgICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1saW5rLXRvJyk7XG5cdFx0dGhpcy5uYXYgXHQgICAgICA9IHRoaXMuJGVsLmZpbmQoJy5tYWluLW5hdicpO1x0XHRcblx0XHR0aGlzLiRwcmV2aWV3cyAgICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1wcmV2aWV3Jyk7XG5cdFx0dGhpcy4kc2xpZGVyICAgICAgPSB0aGlzLiRlbC5maW5kKCcuanMtc2xpZGVyJyk7XG5cdFx0dGhpcy4kc2tpbGxzICAgICAgPSB0aGlzLiRlbC5maW5kKCcuanMtc2tpbGxzLWNvbnRlbnQnKTtcblx0XHR0aGlzLiRiYW5kcyAgICAgICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1iYW5kJyk7XG5cdFx0dGhpcy4kb3BlbkdhbGVyeSAgPSB0aGlzLiRlbC5maW5kKCcuanMtb3Blbi1nYWxlcnknKTtcblx0XHR0aGlzLiRmb3JtICAgICAgICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1mb3JtJyk7XG5cdFx0dGhpcy50aWx0U2V0dGluZ3MgPSBbXG5cdFx0XHR7fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRpbWdXcmFwcGVyIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IDEwLCB6OiAzMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAtMTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGxpbmVzIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IDEwLCB6OiBbMCw3MF19LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogLTJ9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogMn0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMjAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YWQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAtMTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogMn0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMjAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAwLCB5OiAxMDAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IC01LCB5OiAxMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogOTAwLCBlYXNpbmcgOiAnZWFzZU91dEN1YmljJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAzMCwgeTogMzAsIHo6IFswLDQwXX0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiBbMCwxNV0sIHk6IDAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEyMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IDEwLCB6OiBbMCwyMF19LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEwMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwMCwgeTogMTAwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA5MDAsIGVhc2luZyA6ICdlYXNlT3V0Q3ViaWMnfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRpbWdXcmFwcGVyIDoge1xuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogLTUsIHk6IDEwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA1MCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAyMCwgeTogMjAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG92ZXJsYXkgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1LCB5OiAtNSwgejogMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiA2fSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMDAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YWQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1MCwgeTogNTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDUwLCBlYXNpbmcgOiAnZWFzZU91dFF1YWQnfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRpbWdXcmFwcGVyIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMCwgeTogLTgsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMywgeTogMywgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGxpbmVzIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTUsIHk6IDE1LCB6OiBbMCwxNV19LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEyMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMCwgeTogOCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNjAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAtMTUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDkwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNTAsIHk6IDUwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMjAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRsaW5lcyA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IC01LCB5OiA1LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMDAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDE1LCB5OiAxNSwgejogMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAzfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxNTAwLCBlYXNpbmcgOiAnZWFzZU91dEVsYXN0aWMnLCBlbGFzdGljaXR5IDogNzAwfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDE1LCB5OiAtMTUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDUwMCxlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1MCwgeTogNTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDUwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDUsIHk6IDUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDgwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFydCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IDEwLCB6OiBbMCw1MF19LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEwMDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhcnQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1MCwgeTogNTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDgwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFydCd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdGxpbmVzIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNDAsIHk6IDQwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxNTAwLCBlYXNpbmcgOiAnZWFzZU91dEVsYXN0aWMnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDIwLCB5OiAyMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAtNX0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG92ZXJsYXkgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAtMzAsIHk6IC0zMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAzfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA3NTAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwMCwgeTogMTAwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA3NTAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XTtcblxuXHRcdHRoaXMuVXNlclNlZSAgID0gdHJ1ZTtcblx0XHR0aGlzLnNraWxsc09uICA9IGZhbHNlO1xuXG5cdFx0dGhpcy5zciBcdCAgID0gU2Nyb2xsUmV2ZWFsKHsgcmVzZXQ6IGZhbHNlIH0pO1xuXG5cdFx0Ly9pbml0IFNsaWRlciBcblx0XHRpZiAodGhpcy4kc2xpZGVyLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5hdXRvcGxheSA9IG5ldyBTbGlkZXI7XG5cdFx0XHR0aGlzLmF1dG9wbGF5LmluaXQodGhpcy4kc2xpZGVyKTtcblx0XHR9XG5cdFx0dGhpcy52aWV3SXNBY3RpdmUoKTsgXHRcblxuXHRcdC8vIGxpbmtUbyBmdW5jdGlvbiBpZiBsaW5rcyBleGlzdCBcblx0XHRpZiAodGhpcy4kbGlua1RvLmxlbmd0aCkgdGhpcy5saW5rVG8oKTtcblxuXHRcdC8vIHNjcm9sbCBmb3IgdG9wIG1lbnUgbmF2IFxuXHRcdHRoaXMuc2Nyb2xsKCk7XG5cblx0XHQvLyBmdW5jdGlvbiByZXZhbCBcblx0XHR0aGlzLnJldmFsKCk7XHRcblxuXHRcdC8vb3BlbiBnYWxlcnkgXG5cdFx0dGhpcy4kb3BlbkdhbGVyeS5vbignY2xpY2snLCB0aGlzLm9wZW5HYWxlcnkpXG5cblx0XHQvL3ByZWxvYWQgaW1nIFxuXHRcdGlmICh0aGlzLiRwcmV2aWV3cy5sZW5ndGgpIHRoaXMucHJlbG9hZCgpO1x0XG5cblx0XHQvL3ByZWxvYWQgaW1nIHByZXZpZXcgXG5cdFx0dGhpcy5pbml0UG9ydGZvbGlvUHJldmlldygpO1xuXG5cdFx0Ly9pbml0IGZvcm0gXG5cdFx0aWYgKHRoaXMuJGZvcm0ubGVuZ3RoKSB0aGlzLmluaXRGb3JtKCk7XG5cblx0XHQvL3Njcm9sbHRvIG1vYmlsZSBcblx0XHR0aGlzLiRlbC5maW5kKCcuanMtcmVhZG1vcmUtbW9iaWxlJykub24oJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuXG5cdFx0fSlcblx0XHRcblx0fSxcblxuXHR2aWV3SXNBY3RpdmUoKSB7XG5cdFx0d2luZG93Lm9uZm9jdXMgPSAoKSA9PiB7XG5cdFx0ICAgIHRoaXMuVXNlclNlZSA9IHRydWU7XG5cdFx0ICB9O1xuXG5cdFx0d2luZG93Lm9uYmx1ciA9ICgpID0+IHtcblx0XHQgICAgdGhpcy5Vc2VyU2VlID0gZmFsc2U7XG5cdFx0ICB9O1xuXHRcdHNldEludGVydmFsKCAoKSA9PiB7XG5cdFx0ICAgIGlmICghdGhpcy5Vc2VyU2VlKSB0aGlzLmF1dG9wbGF5LnN0b3AoKTtcblx0XHR9LCAxMDAwKTtcblx0fSxcblxuXHRsaW5rVG8oKSB7XG5cdFx0dGhpcy4kbGlua1RvLm9uKCdjbGljayB0b3VjaCcsIChlKSA9PiB7XG5cdFx0XHRsZXQgdGFyZ2V0ICAgPSAkKGUuY3VycmVudFRhcmdldCkuYXR0cignaHJlZicpO1xuXHRcdFx0bGV0ICRzZWN0aW9uID0gdGhpcy4kZWwuZmluZCh0YXJnZXQpO1xuXHRcdFx0JCgnYm9keSwgaHRtbCcpLmFuaW1hdGUoe1xuXHRcdCAgICAgICAgc2Nyb2xsVG9wOiAkc2VjdGlvbi5vZmZzZXQoKS50b3Bcblx0XHQgICAgfSwgMTAwMCk7XG5cdFx0fSlcblx0fSwgXG5cblx0aXNWaXNpYmxlKGVsZW1lbnQpIHtcblx0XHRsZXQgJGVsZW1lbnQgICAgICAgID0gJChlbGVtZW50KTtcblx0XHRsZXQgdG9wRWxlbWVudCBcdCAgICA9ICRlbGVtZW50Lm9mZnNldCgpLnRvcDtcblx0XHRsZXQgYm90dG9tRWxlbWVudCBcdD0gKCRlbGVtZW50Lm9mZnNldCgpLnRvcCArICRlbGVtZW50LmhlaWdodCgpICkgO1xuXHRcdGxldCBzY3JvbGx0b3AgXHQgICAgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0bGV0IHNjcm9sbEJvdHRvbSBcdD0gc2Nyb2xsdG9wICsgJCh3aW5kb3cpLmhlaWdodCgpO1xuXHRcdGxldCBpc1Zpc2libGUgICAgICAgPSBmYWxzZTtcblxuXHRcdGlmICggdG9wRWxlbWVudCA+IHNjcm9sbHRvcCAmJiBib3R0b21FbGVtZW50IDwgc2Nyb2xsQm90dG9tICkge1xuXHRcdFx0aXNWaXNpYmxlID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aXNWaXNpYmxlID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBpc1Zpc2libGUgO1xuXHR9LFxuXG5cdG9wZW5HYWxlcnkoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgJHdyYXBwZXIgICA9IEFwcC4kZWwuZmluZCgnLmpzLWdhbGxlcnktd3JhcHBlcicpO1xuXHRcdGxldCB0YXJnZXQgICAgID0gJChlLnRhcmdldCkuYXR0cignaHJlZicpO1xuXHRcdGxldCAkY3VycmVudCAgID0gJHdyYXBwZXIuZmluZCh0YXJnZXQpO1xuXHRcdGxldCAkY2xvc2UgICAgID0gJHdyYXBwZXIuZmluZCgnLmpzLWNsb3NlLWdhbGVyeScpO1xuXHRcdGNvbnNvbGUubG9nKCR3cmFwcGVyLCB0YXJnZXQsICRjdXJyZW50KVxuXHRcdGlmKCRjdXJyZW50Lmxlbmd0aCkge1xuXHRcdFx0JHdyYXBwZXIuYWRkQ2xhc3MoJ29wZW4nKTtcdFx0XHRcblx0XHRcdEFwcC4kZWwuYWRkQ2xhc3MoJ292ZXJmbG93LWhpZGRlbicpO1xuXHRcdFx0JGN1cnJlbnQuY3NzKCAnZGlzcGxheScsICdibG9jaycgKTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHQkY3VycmVudC5hZGRDbGFzcygndmlzaWJsZScpO1xuXHRcdFx0XHQkY3VycmVudC5maW5kKCcubGVmdCwgLnJpZ2h0JykuY3NzKCdoZWlnaHQnLCAkY3VycmVudC5maW5kKCcubGVmdCcpLm91dGVySGVpZ2h0KCkpO1xuXHRcdFx0fSwgNzAwKVxuXHRcdFx0JGN1cnJlbnQuZmluZCgnLmpzLXJlYWQtbW9yZScpLm9uKCdjbGljayB0b3VjaCcsIChlKT0+IHtcblx0XHRcdFx0JGN1cnJlbnQuYWRkQ2xhc3MoJ3Nob3ctbW9yZScpO1xuXHRcdFx0fSlcblx0XHRcdCRjbG9zZS5vbignY2xpY2sgdG91Y2gnLCBBcHAuY2xvc2VHYWxlcnkpXG5cdFx0fVxuXHR9LFxuXG5cdGNsb3NlR2FsZXJ5KCkge1xuXHRcdGxldCAkd3JhcHBlciAgID0gQXBwLiRlbC5maW5kKCcuanMtZ2FsbGVyeS13cmFwcGVyJyk7XHRcdFxuXHRcdGxldCAkdmlzaWJsZSAgID0gJHdyYXBwZXIuZmluZCgnLnZpc2libGUnKTtcblx0XHRcblx0XHRpZigkdmlzaWJsZS5sZW5ndGgpIHtcblx0XHQgICAgJHZpc2libGUuYW5pbWF0ZSh7c2Nyb2xsVG9wOjB9LCAnMTAwJyk7XHRcdFx0XG5cdFx0XHQkdmlzaWJsZS5yZW1vdmVDbGFzcygndmlzaWJsZSBzaG93LW1vcmUnKTtcdFx0XHRcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1x0XHRcdFx0XG5cdFx0XHRcdCR2aXNpYmxlLmNzcyggJ2Rpc3BsYXknLCAnbm9uZScgKTtcblx0XHRcdFx0JHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblx0XHRcdFx0QXBwLiRlbC5yZW1vdmVDbGFzcygnb3ZlcmZsb3ctaGlkZGVuJyk7XHRcdFx0XHRcblx0XHRcdH0sIDcwMCk7XG5cdFx0fVxuXHR9LFxuXG5cdHNjcm9sbCgpIHtcblx0XHRsZXQgc3RlcDEgPSB0aGlzLiRlbC5maW5kKCcjYWJvdXQnKS5vZmZzZXQoKS50b3A7XG5cdFx0JCh3aW5kb3cpLnNjcm9sbFRvcCgpID49IHN0ZXAxLTEwMCA/IHRoaXMubmF2LmFkZENsYXNzKCdmaXh5JykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnZml4eScpO1xuXHRcdCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSBzdGVwMSA/IHRoaXMubmF2LmFkZENsYXNzKCdhY3RpdmUnKSA6IHRoaXMubmF2LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdCQod2luZG93KS5vbignc2Nyb2xsJywgKCkgPT4ge1xuXHRcdFx0bGV0IGN1cnJlbnRTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cblx0XHRcdGN1cnJlbnRTY3JvbGwgPj0gODAgPyB0aGlzLm5hdi5jc3MoJ3RvcCcsICctNjFweCcpIDogdGhpcy5uYXYuY3NzKCd0b3AnLCAnMHB4Jyk7XG5cdFx0XHRjdXJyZW50U2Nyb2xsID49IHN0ZXAxLTEwMCA/IHRoaXMubmF2LmFkZENsYXNzKCdmaXh5JykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnZml4eScpO1xuXHRcdFx0Y3VycmVudFNjcm9sbCA+PSBzdGVwMSA/IHRoaXMubmF2LmFkZENsYXNzKCdhY3RpdmUnKSA6IHRoaXMubmF2LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0Ly9pbml0IHNsaWRlciBcdFx0XG5cdFx0XHRpZiAodGhpcy4kc2xpZGVyLmxlbmd0aCkge1x0XHRcdFx0XG5cdFx0XHRcdGlmICh0aGlzLmlzVmlzaWJsZSh0aGlzLiRzbGlkZXIpKSB7XG5cdFx0XHRcdFx0dGhpcy5hdXRvcGxheS5wbGF5KClcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmF1dG9wbGF5LnN0b3AoKVxuXHRcdFx0XHR9XG5cdFx0XHR9IFxuXG5cdFx0XHRpZiAodGhpcy4kc2tpbGxzLmxlbmd0aCkge1x0XHRcdFx0XG5cdFx0XHRcdGlmICh0aGlzLmlzVmlzaWJsZSh0aGlzLiRza2lsbHNbMF0pKSB7XHRcblx0XHRcdFx0XHR0aGlzLnNob3dTa2lsbHMoKTtcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLiRiYW5kcy5sZW5ndGgpIHtcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdHRoaXMuc2hvd0JhbmRzKCk7XHRcdFx0XHRcblx0XHRcdH0gIFxuXHRcdH0pOyBcblx0XG5cdH0sXG5cblx0cmV2YWwoKSB7XG5cdFx0Ly9sZWZ0IHRvIHJpZ2h0XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1sZWZ0JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnbGVmdCcsIHNjYWxlOiAxLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLWxlZnQtZGVsYXknLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdsZWZ0Jywgc2NhbGU6IDEsIGRlbGF5OiA1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtbGVmdC1sb25nLWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnbGVmdCcsIHNjYWxlOiAxLCBkZWxheTogMTUwMCwgZHVyYXRpb246NTAwfSk7XG5cdFx0Ly9yaWdodCB0byBsZWZ0XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1yaWdodCcsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ3JpZ2h0Jywgc2NhbGU6IDEsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtcmlnaHQtZGVsYXknLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdyaWdodCcsIHNjYWxlOiAxLCBkZWxheTogNTAwLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXJpZ2h0LWxvbmctZGVsYXknLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdyaWdodCcsIHNjYWxlOiAxLCBkZWxheTogMTUwMCwgZHVyYXRpb246NTAwfSk7XG5cdFx0Ly9ib3R0b20gdG8gdG9wIFxuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtdG9wJywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnYm90dG9tJywgc2NhbGU6IDEsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtdG9wLWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnYm90dG9tJywgc2NhbGU6IDEsIGRlbGF5OiA1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtdG9wLWxvbmctZGVsYXknLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdib3R0b20nLCBzY2FsZTogMSwgZGVsYXk6IDE1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXG5cdH0sXG5cblx0c2hvd1NraWxscygpIHtcblxuXHRcdGlmKCF0aGlzLnNraWxsc09uKSB7XG5cdFx0XHRsZXQgJHNraWxscyA9IHRoaXMuJGVsLmZpbmQoJy5qcy1wZXJjZW50Jyk7XG5cdFx0XHQkc2tpbGxzLmVhY2goIChpbmRleCwgY3VycmVudCkgPT4ge1xuXHRcdFx0XHRsZXQgX3BlcmNlbnQgPSAkKGN1cnJlbnQpLmF0dHIoJ2RhdGEtcGVyY2VudCcpKyclJztcblx0XHRcdFx0JChjdXJyZW50KS5jc3MoJ3dpZHRoJywgX3BlcmNlbnQpO1xuXHRcdFx0fSApXG5cdFx0fVxuXHR9LFxuXG5cdHNob3dCYW5kcygpIHtcblx0XHR0aGlzLiRiYW5kcy5lYWNoKCAoaSwgY3VycmVudCkgPT4ge1xuXHRcdFx0bGV0IF9iYW5kID0gJChjdXJyZW50KTtcblxuXHRcdFx0aWYodGhpcy5pc1Zpc2libGUoY3VycmVudCkpIHtcblx0XHRcdFx0X2JhbmQuaGFzQ2xhc3MoJ2pzLWJhbmQtcmlnaHQnKSA/IF9iYW5kLmNzcygncmlnaHQnLCAwKSA6IF9iYW5kLmNzcygnbGVmdCcsIDApO1xuXHRcdFx0XHRpZihfYmFuZC5oYXNDbGFzcygnanMtbGFzdC1iYW5kJykpIHRoaXMuJGZvcm0uYWRkQ2xhc3MoJ3Zpc2libGUnKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXG5cdHByZWxvYWQoKSB7XG5cdFx0dGhpcy4kcHJldmlld3MuZWFjaCgoaWR4LCBjb250YWluZXIpID0+IHtcblx0XHRcdGxldCAkY29udGFpbmVyID0gJChjb250YWluZXIpO1xuXHRcdFx0bGV0IF91cmwgICAgICAgPSAkY29udGFpbmVyLmRhdGEoJ2ltYWdlLXVybCcpO1xuXHRcdFx0bGV0IGltZyAgICAgICAgPSBuZXcgSW1hZ2UoKTtcblxuXHRcdFx0aW1nLnNyYyAgICAgICAgPSBfdXJsO1xuXG5cdCAgICAgICAgLy8gaWYgd2UgaGF2ZSB0aGlzIGltYWdlIGFscmVhZHkgY2FjaGVkLCB3ZSBkb24ndCBoYXZlXG5cdCAgICAgICAgLy8gdG8gd2FpdCBmb3IgdGhlIG9ubG9hZCBjYWxsYmFjayBhbmQgY2FuIHJlbW92ZSB0aGVcblx0ICAgICAgICAvLyBwcmV2aWV3IGltYWdlIGltbWVkaWF0ZWx5XG5cdCAgICAgICAgaWYodGhpcy5pbWdDb21wbGV0ZShpbWcpKSB7XG5cdCAgICAgICAgXHR0aGlzLnJlbW92ZVByZXZpZXcoJGNvbnRhaW5lciwgX3VybCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBcdGltZy5vbmxvYWQgPSAoKSA9PiB7XG5cdCAgICAgICAgXHRcdHRoaXMucmVtb3ZlUHJldmlldygkY29udGFpbmVyLCBfdXJsKTtcblx0ICAgICAgICBcdH07XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cdH0sXG5cblx0aW1nQ29tcGxldGUoaW1nKSB7XG4gICAgICAgIHJldHVybiBpbWcuY29tcGxldGUgfHwgaW1nLndpZHRoICsgaW1nLmhlaWdodCA+IDA7XG4gICAgfSxcbiAgXG4gICAgcmVtb3ZlUHJldmlldygkY29udGFpbmVyLCB1cmwpIHtcbiAgICAgICAgJGNvbnRhaW5lci5jc3MoeydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybChcIicgKyB1cmwgKyAnXCIpJ30pO1xuICAgICAgICAkY29udGFpbmVyLnJlbW92ZUNsYXNzKCdqcy1wcmV2aWV3IHByZXZpZXcnKTtcbiAgICB9LFxuXG4gICAgaW5pdFBvcnRmb2xpb1ByZXZpZXcoKSB7XG5cblx0XHRsZXQgaWR4ID0gMDtcblx0XHRbXS5zbGljZS5jYWxsKCQoJ2EudGlsdGVyJykpLmZvckVhY2goKGVsLCBwb3MpID0+IHsgXG5cdFx0XHRpZHggPSBwb3MlMiA9PT0gMCA/IGlkeCsxIDogaWR4O1xuXHRcdFx0bGV0IF9UaWx0RnggPSBuZXcgVGlsdEZ4O1xuXHRcdFx0X1RpbHRGeC5pbml0KGVsLCBBcHAudGlsdFNldHRpbmdzW2lkeC0xXSk7XG5cdFx0fSk7XG5cblx0XHRsZXQgcGF0ZXIgICAgPSB0aGlzLiRlbC5maW5kKCcucGF0ZXInKTtcblx0XHRsZXRcdHBhdGVyU1ZHID0gcGF0ZXIuZmluZCgnLnBhdGVyX19zdmcnKTtcblx0XHRsZXRcdHBhdGhFbCAgID0gcGF0ZXJTVkcuZmluZCgncGF0aCcpO1xuXHRcdGxldFx0cGF0aHMgICAgPSB7ZGVmYXVsdDogcGF0aEVsLmF0dHIoJ2QnKSwgYWN0aXZlOiBwYXRlclNWRy5hdHRyKCdkYXRhLXBhdGgtaG92ZXInKX07XG5cblx0XHRwYXRlci5vbignbW91c2VlbnRlcicsICgpID0+IHtcblx0XHRcdGFuaW1lLnJlbW92ZShwYXRoRWwpO1xuXHRcdFx0YW5pbWUoe1xuXHRcdFx0XHR0YXJnZXRzOiBwYXRoRWwsXG5cdFx0XHRcdGQ6IHBhdGhzLmFjdGl2ZSxcblx0XHRcdFx0ZHVyYXRpb246IDQwMCxcblx0XHRcdFx0ZWFzaW5nOiAnZWFzZU91dFF1YWQnXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHBhdGVyLm9uKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuXHRcdFx0YW5pbWUucmVtb3ZlKHBhdGhFbCk7XG5cdFx0XHRhbmltZSh7XG5cdFx0XHRcdHRhcmdldHM6IHBhdGhFbCxcblx0XHRcdFx0ZDogcGF0aHMuZGVmYXVsdCxcblx0XHRcdFx0ZHVyYXRpb246IDQwMCxcblx0XHRcdFx0ZWFzaW5nOiAnZWFzZU91dEV4cG8nXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSxcblxuXHRpbml0Rm9ybSgpIHtcblxuXHRcdGxldCAkZm9ybSA9IHRoaXMuJGZvcm07IFxuXHRcdGxldCBjaGVja0Zvcm0gPSBbIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xuXG5cdFx0JGZvcm0uZmluZCgndGV4dGFyZWEnKS5ibHVyKGZ1bmN0aW9uICgpIHtcblx0XHQgICAgJGZvcm0uZmluZCgndGV4dGFyZWEnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQgICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XG5cdFx0ICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKFwiXlthLXpBLVrDgC3DusOALcO/MC05JOKCrC4gXSskXCIpO1xuXG5cdFx0ICAgICAgICBpZiAocmVnZXgudGVzdCh0aGlzLnZhbHVlKSApIHtcblx0XHQgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgICAgICQoJy5tc2ctYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAndHJhbnNwYXJlbnQnfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm1zZy1ib3ggLmpzLWNoZWNrJykuY3NzKHsnb3BhY2l0eSc6IDF9KTtcblx0XHQgICAgICAgICAgXHQkKCcubXNnLWJveCAuanMtZXJyb3InKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVswXSA9IHRydWU7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICBlbHNlIGlmICh0aGlzLnZhbHVlID09PSAnJykge1xuXHRcdCAgICAgICAgICBcdCR0aGlzLnJlbW92ZUNsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm1zZy1ib3ggbGFiZWwnKS5jc3Moeydjb2xvcic6ICd3aGl0ZSd9KTtcblx0XHQgICAgICAgICAgXHQkKCcubXNnLWJveCBpbnB1dCArIGxhYmVsICsgc3BhbicpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm1zZy1ib3ggLmpzLWNoZWNrJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHQkKCcubXNnLWJveCAuanMtZXJyb3InKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVswXSA9IGZhbHNlO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAgZWxzZSB7XG5cdFx0ICAgICAgICBcdCR0aGlzLmFkZENsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICBcdCQoJy5tc2ctYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAndHJhbnNwYXJlbnQnfSk7XG5cdFx0ICAgICAgICBcdCQoJy5tc2ctYm94IC5qcy1jaGVjaycpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm1zZy1ib3ggLmpzLWVycm9yJykuY3NzKHsnb3BhY2l0eSc6IDF9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMF0gPSBmYWxzZTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgfSk7XG5cdFx0fSk7XG5cblx0XHQkZm9ybS5maW5kKCcubmFtZS1ib3ggaW5wdXQnKS5ibHVyKGZ1bmN0aW9uICgpIHtcblxuXHRcdCAgICAkZm9ybS5maW5kKCcubmFtZS1ib3ggaW5wdXQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQgICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XG5cdFx0ICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKFwiXlthLXpBLVrDgC3DusOALcO/IF0qJFwiKTtcblxuXHRcdCAgICAgICAgaWYgKHJlZ2V4LnRlc3QodGhpcy52YWx1ZSkgKSB7XG5cdFx0ICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgICAgICAkKCcubmFtZS1ib3ggbGFiZWwnKS5jc3Moeydjb2xvcic6ICd0cmFuc3BhcmVudCd9KTtcblx0XHQgICAgICAgICAgXHQkKCcubmFtZS1ib3ggLmpzLWNoZWNrJykuY3NzKHsnb3BhY2l0eSc6IDF9KTtcblx0XHQgICAgICAgICAgXHQkKCcubmFtZS1ib3ggLmpzLWVycm9yJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMV0gPSB0cnVlO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAgZWxzZSBpZiAodGhpcy52YWx1ZSA9PT0gJycpIHtcblx0XHQgICAgICAgICAgXHQkdGhpcy5yZW1vdmVDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgICBcdCQoJy5uYW1lLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3doaXRlJ30pO1xuXHRcdCAgICAgICAgICBcdCQoJy5uYW1lLWJveCBpbnB1dCArIGxhYmVsICsgc3BhbicpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0Y2hlY2tGb3JtWzFdID0gZmFsc2U7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICBlbHNlIHtcblx0XHQgICAgICAgIFx0JHRoaXMuYWRkQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgIFx0JCgnLm5hbWUtYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAndHJhbnNwYXJlbnQnfSk7XG5cdFx0ICAgICAgICBcdCQoJy5uYW1lLWJveCAuanMtY2hlY2snKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdCQoJy5uYW1lLWJveCAuanMtZXJyb3InKS5jc3MoeydvcGFjaXR5JzogMX0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVsxXSA9IGZhbHNlO1xuXHRcdCAgICAgICAgfVxuXG5cdFx0ICAgIH0pO1xuXG5cdFx0fSk7XG5cblx0XHQkZm9ybS5maW5kKCcuZW1haWwtYm94IGlucHV0JykuYmx1cihmdW5jdGlvbiAoKSB7XG5cdFx0ICAgICRmb3JtLmZpbmQoJy5lbWFpbC1ib3ggaW5wdXQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQgICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XG5cdFx0ICAgICAgICBsZXQgcmVnZXggPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcblxuXHRcdCAgICAgICAgaWYgKHJlZ2V4LnRlc3QodGhpcy52YWx1ZSkgKSB7XG5cdFx0ICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgICAgICAkKCcuZW1haWwtYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAndHJhbnNwYXJlbnQnfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLmVtYWlsLWJveCAuanMtY2hlY2snKS5jc3MoeydvcGFjaXR5JzogMX0pO1xuXHRcdCAgICAgICAgICBcdCQoJy5lbWFpbC1ib3ggLmpzLWVycm9yJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMl0gPSB0cnVlO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAgZWxzZSBpZiAodGhpcy52YWx1ZSA9PT0gJycpIHtcblx0XHQgICAgICAgICAgXHQkdGhpcy5yZW1vdmVDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgICBcdCQoJy5lbWFpbC1ib3ggbGFiZWwnKS5jc3Moeydjb2xvcic6ICd3aGl0ZSd9KTtcblx0XHQgICAgICAgICAgXHQkKCcuZW1haWwtYm94IGlucHV0ICsgbGFiZWwgKyBzcGFuJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMl0gPSBmYWxzZTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICAgIGVsc2Uge1xuXHRcdCAgICAgICAgXHQkdGhpcy5hZGRDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgXHQkKCcuZW1haWwtYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAndHJhbnNwYXJlbnQnfSk7XG5cdFx0ICAgICAgICBcdCQoJy5lbWFpbC1ib3ggLmpzLWNoZWNrJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHQkKCcuZW1haWwtYm94IC5qcy1lcnJvcicpLmNzcyh7J29wYWNpdHknOiAxfSk7XG5cdFx0ICAgICAgICAgIFx0Y2hlY2tGb3JtWzJdID0gZmFsc2U7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgIH0pO1xuXHRcdH0pO1xuXG5cdFx0JGZvcm0ub24oJ3N1Ym1pdCcsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRsZXQgJGVycm9yTXNnICAgPSB0aGlzLiRlbC5maW5kKCcuanMtZXJyb3ItbWVzc2FnZScpO1xuXHRcdFx0bGV0ICRzdWNjZXNzTXNnID0gdGhpcy4kZWwuZmluZCgnLmpzLXN1Y2Nlc3MtbWVzc2FnZScpO1xuXHRcdFx0bGV0IGNoZWNrICAgICAgID0gMDsgXG5cblx0XHRcdGNoZWNrRm9ybS5mb3JFYWNoKCAoZWxlbWVudCwgaW5kZXgpID0+IHtcdFx0XHRcdFxuXHRcdFx0XHRpZihlbGVtZW50KSBjaGVjaysrO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmICggY2hlY2sgPT09IDMgKSB7XG5cdFx0XHRcdC8vY2FuIHNlbmQgZm9ybVxuXG5cdFx0XHRcdGxldCBzID0gJGZvcm0uc2VyaWFsaXplKCk7XG5cblx0XHRcdFx0JC5hamF4KHtcblx0ICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuXHQgICAgICAgICAgICAgICAgdXJsOiBcIi4uL21haWwucGhwXCIsXG5cdCAgICAgICAgICAgICAgICBkYXRhOiBzLFxuXHQgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcblx0ICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucHJlcGVuZCgnPGRpdiBzdHlsZT1cInBvc2l0aW9uOmZpeGVkOyB0b3A6NTAlOyB6LWluZGV4OjIwMDA7XCIgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+Vm90cmUgZW1haWwgw6AgYmllbiDDqXTDqSB0cmFuc21pcyAhPC9kaXY+Jylcblx0ICAgICAgICAgICAgICAgICAgICAuaGlkZSgpXG5cdCAgICAgICAgICAgICAgICAgICAgLmZhZGVJbigxNTAwKTsgICAgICAgICAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgICAgICAgICAgIFx0JCgnYm9keScpLnByZXBlbmQoJzxkaXYgc3R5bGU9XCJwb3NpdGlvbjpmaXhlZDsgdG9wOjUwJTsgei1pbmRleDoyMDAwO1wiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+TFxcJ2Vudm9pIGR1IG1haWwgYSDDqWNob3XDqSwgdmV1aWxsZXogcsOpZXNzYXllciBTVlA8L2Rpdj4nKVxuXHQgICAgICAgICAgICAgICAgICAgIC5oaWRlKClcblx0ICAgICAgICAgICAgICAgICAgICAuZmFkZUluKDE1MDApO1xuXHQgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgXHR9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cbn1cblxuJCh3aW5kb3cpLnJlYWR5KEFwcC5pbml0LmJpbmQoQXBwKSk7IiwiY2xhc3MgU2xpZGVyIHsgXG5cblx0aW5pdChlbCkge1xuXHRcdHRoaXMuJGVsICAgICAgICAgID0gJChlbCk7XG5cdFx0dGhpcy4kY29udGFpbmVyICAgPSB0aGlzLiRlbC5maW5kKCd1bCcpO1xuXHRcdHRoaXMuJHNsaWRlcnMgICAgID0gdGhpcy4kY29udGFpbmVyLmZpbmQoJ2xpJyk7XG5cdFx0dGhpcy5ub21iZXJTbGlkZSAgPSB0aGlzLiRzbGlkZXJzLmxlbmd0aDtcblx0XHR0aGlzLndpZHRoICAgICAgICA9IDMwMDtcblx0XHR0aGlzLmxlZnQgICAgICAgICA9IC10aGlzLndpZHRoO1xuXHRcdHRoaXMuZHVyYXRpb24gXHQgID0gMzUwMDtcblx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IDE7XG5cdFx0dGhpcy5pc1BsYXlpbmcgICAgPSBmYWxzZTtcblx0XHRcblxuXHRcdHRoaXMuJGNvbnRhaW5lci5jc3MoJ3dpZHRoJywgdGhpcy5ub21iZXJTbGlkZSp0aGlzLndpZHRoKydweCcpO1xuXHRcdCQodGhpcy4kc2xpZGVyc1swXSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0dGhpcy4kZWwuaG92ZXIoKCkgPT4geyB0aGlzLnN0b3AoKSB9LCAoKSA9PiB7IHRoaXMucGxheSgpIH0gKTtcdFx0XG5cblx0fVxuXG5cdHNsaWRlcigpIHtcblx0XHR0aGlzLiRjb250YWluZXIuYW5pbWF0ZSh7XG5cdFx0XHRcdFx0bGVmdCA6IHRoaXMubGVmdCsncHgnXG5cdFx0XHRcdH0sIDIwMCwgKCkgPT4ge1xuXHRcdFx0XHRcdCQodGhpcy4kc2xpZGVycykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdCQodGhpcy4kc2xpZGVyc1t0aGlzLmN1cnJlbnRJbmRleF0pLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRpZiAodGhpcy5sZWZ0ID4gKHRoaXMubm9tYmVyU2xpZGUtMSkqLSh0aGlzLndpZHRoKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5sZWZ0ID0gdGhpcy5sZWZ0LXRoaXMud2lkdGg7XG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCsrO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxlZnQgPSAwO1xuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SW5kZXggPSAwO1xuXHRcdFx0XHRcdH1cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHR9XG5cblx0cGxheSgpIHtcblx0XHRcblx0XHRpZiAoIXRoaXMuaXNQbGF5aW5nKSB7XG5cdFx0XHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5zbGlkZXIuYmluZCh0aGlzKSwgdGhpcy5kdXJhdGlvbik7XG5cdFx0XHR0aGlzLmlzUGxheWluZyA9IHRydWU7XG5cdFx0fVxuXHRcdFxuXHR9XG5cblx0c3RvcCgpIHtcblx0XHRpZiAodGhpcy5pc1BsYXlpbmcpIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG5cdFx0XHR0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjsiLCJjbGFzcyBUaWx0Rngge1xuXG5cdC8vIEhlbHBlciB2YXJzIGFuZCBmdW5jdGlvbnMuXG5cdGV4dGVuZCggYSwgYiApIHtcblx0XHRmb3IoIGxldCBrZXkgaW4gYiApIHsgXG5cdFx0XHRpZiggYi5oYXNPd25Qcm9wZXJ0eSgga2V5ICkgKSB7XG5cdFx0XHRcdGFba2V5XSA9IGJba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGE7XG5cdH1cblxuXHRnZXRNb3VzZVBvcyhlKSB7XG5cdFx0bGV0IHBvc3ggPSAwO1xuXHRcdGxldCBwb3N5ID0gMDtcblxuXHRcdGlmICghZSkge2xldCBlID0gd2luZG93LmV2ZW50fVxuXHRcdGlmIChlLnBhZ2VYIHx8IGUucGFnZVkpIFx0e1xuXHRcdFx0cG9zeCA9IGUucGFnZVg7XG5cdFx0XHRwb3N5ID0gZS5wYWdlWTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoZS5jbGllbnRYIHx8IGUuY2xpZW50WSkgXHR7XG5cdFx0XHRwb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG5cdFx0XHRwb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRcdH1cblx0XHRyZXR1cm4geyB4IDogcG9zeCwgeSA6IHBvc3kgfVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQuXG5cdCAqL1xuXHRpbml0KGVsLCBvcHRpb25zKSB7XG5cdFx0dGhpcy5ET00gICAgICAgICAgICAgICAgICAgICAgID0ge307XG5cdFx0dGhpcy5ET00uZWwgICAgICAgICAgICAgICAgICAgID0gZWw7XG5cdFx0dGhpcy5vcHRpb25zICAgICAgICAgICAgICAgICAgID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAwfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAtNSwgeTogNSwgejogMH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMTIwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA6ICdlYXNlT3V0RWxhc3RpYycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbGFzdGljaXR5IDogNjAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaW5lcyA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogMTAsIHo6IFswLDEwXX0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMTAwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA6ICdlYXNlT3V0RXhwbycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbGFzdGljaXR5IDogNjAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDIwLCB5OiAyMCwgejogMH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogMH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMTUwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA6ICdlYXNlT3V0RWxhc3RpYycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbGFzdGljaXR5IDogNjAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAxMCwgejogWzAsNTBdfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb24gOiA1MDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgOiAnZWFzZU91dEV4cG8nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1MCwgeTogNTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDEyMDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgOiAnZWFzZU91dEVsYXN0aWMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxhc3RpY2l0eTogNjAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcblx0XHR0aGlzLmV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1x0XHRcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlICAgICAgICAgICAgPSB7fTtcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlLmltZ1dyYXBwZXIgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcudGlsdGVyX19maWd1cmUnKTtcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlLmxpbmVzICAgICAgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcudGlsdGVyX19kZWNvLS1saW5lcycpO1xuXHRcdHRoaXMuRE9NLmFuaW1hdGFibGUuY2FwdGlvbiAgICA9IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoJy50aWx0ZXJfX2NhcHRpb24nKTtcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlLm92ZXJsYXkgICAgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcudGlsdGVyX19kZWNvLS1vdmVybGF5Jyk7XG5cdFx0dGhpcy5ET00uYW5pbWF0YWJsZS5zaGluZSAgICAgID0gdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLnRpbHRlcl9fZGVjby0tc2hpbmUgPiBkaXYnKTtcblx0XHR0aGlzLmluaXRFdmVudHMoKTtcblx0fVxuXG5cdGluaXRFdmVudHMoKSB7XHRcdFxuXG5cdFx0JCh0aGlzLkRPTS5lbCkub24oJ21vdXNlbW92ZScsICAoZSkgPT4ge3RoaXMubW91c2Vtb3ZlRm4oZSl9KTtcblx0XHQkKHRoaXMuRE9NLmVsKS5vbignbW91c2VsZWF2ZScsIChlKSA9PiB7dGhpcy5tb3VzZWxlYXZlRm4oZSl9KTtcblx0XHQkKHRoaXMuRE9NLmVsKS5vbignbW91c2VlbnRlcicsICggKSA9PiB7dGhpcy5tb3VzZWVudGVyRm4oKX0pO1xuXHR9XG5cblx0bW91c2Vtb3ZlRm4oZXYpIHtcdFx0XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHsgdGhpcy5sYXlvdXQoZXYpOyB9KTtcblx0fVxuXG5cdG1vdXNlZW50ZXJGbigpIHtcdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5ET00uYW5pbWF0YWJsZSkge1xuXHRcdFx0YW5pbWUucmVtb3ZlKHRoaXMuRE9NLmFuaW1hdGFibGVba2V5XSk7XG5cdFx0fVxuXHR9XG5cblx0bW91c2VsZWF2ZUZuKGV2KSB7XHRcdFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHRmb3IobGV0IGtleSBpbiB0aGlzLkRPTS5hbmltYXRhYmxlKSB7XG5cdFx0XHRcdGlmKCB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XSA9PSB1bmRlZmluZWQgKSB7Y29udGludWU7fVxuXHRcdFx0XHRhbmltZSh7XG5cdFx0XHRcdFx0dGFyZ2V0czogdGhpcy5ET00uYW5pbWF0YWJsZVtrZXldLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnJldmVyc2VBbmltYXRpb24uZHVyYXRpb24gfHwgMCA6IDEsXG5cdFx0XHRcdFx0ZWFzaW5nOiB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnJldmVyc2VBbmltYXRpb24uZWFzaW5nIHx8ICdsaW5lYXInIDogJ2xpbmVhcicsXG5cdFx0XHRcdFx0ZWxhc3RpY2l0eTogdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucmV2ZXJzZUFuaW1hdGlvbiAhPSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uLmVsYXN0aWNpdHkgfHwgbnVsbCA6IG51bGwsXG5cdFx0XHRcdFx0c2NhbGVYOiAxLFxuXHRcdFx0XHRcdHNjYWxlWTogMSxcblx0XHRcdFx0XHRzY2FsZVo6IDEsXG5cdFx0XHRcdFx0dHJhbnNsYXRlWDogMCxcblx0XHRcdFx0XHR0cmFuc2xhdGVZOiAwLFxuXHRcdFx0XHRcdHRyYW5zbGF0ZVo6IDAsXG5cdFx0XHRcdFx0cm90YXRlWDogMCxcblx0XHRcdFx0XHRyb3RhdGVZOiAwLFxuXHRcdFx0XHRcdHJvdGF0ZVo6IDBcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRsYXlvdXQoZXYpIHtcblx0XHQvLyBNb3VzZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnQuXG5cdFx0bGV0IG1vdXNlcG9zID0gdGhpcy5nZXRNb3VzZVBvcyhldik7XG5cdFx0XHQvLyBEb2N1bWVudCBzY3JvbGxzLlxuXHRcdGxldFx0ZG9jU2Nyb2xscyA9IHtsZWZ0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsIHRvcCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcH07XG5cdFx0bGV0XHRib3VuZHMgPSB0aGlzLkRPTS5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdC8vIE1vdXNlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBtYWluIGVsZW1lbnQgKHRoaXMuRE9NLmVsKS5cblx0XHRsZXRcdHJlbG1vdXNlcG9zID0geyB4IDogbW91c2Vwb3MueCAtIGJvdW5kcy5sZWZ0IC0gZG9jU2Nyb2xscy5sZWZ0LCB5IDogbW91c2Vwb3MueSAtIGJvdW5kcy50b3AgLSBkb2NTY3JvbGxzLnRvcCB9O1xuXG5cdFx0Ly8gTW92ZW1lbnQgc2V0dGluZ3MgZm9yIHRoZSBhbmltYXRhYmxlIGVsZW1lbnRzLlxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuRE9NLmFuaW1hdGFibGUpIHtcblx0XHRcdGlmKCB0aGlzLkRPTS5hbmltYXRhYmxlW2tleV0gPT0gdW5kZWZpbmVkIHx8IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldID09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRsZXQgdCA9IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnRyYW5zbGF0aW9uIHx8IHt4OjAseTowLHo6MH0gOiB7eDowLHk6MCx6OjB9O1xuXHRcdFx0bGV0XHRyID0gdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0gIT0gdW5kZWZpbmVkID8gdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucm90YXRpb24gfHwge3g6MCx5OjAsejowfSA6IHt4OjAseTowLHo6MH07XG5cblx0XHRcdHRoaXMuc2V0UmFuZ2UodCk7XG5cdFx0XHR0aGlzLnNldFJhbmdlKHIpO1xuXHRcdFx0XG5cdFx0XHRsZXQgdHJhbnNmb3JtcyA9IHtcblx0XHRcdFx0dHJhbnNsYXRpb24gOiB7XG5cdFx0XHRcdFx0eDogKHQueFsxXS10LnhbMF0pL2JvdW5kcy53aWR0aCpyZWxtb3VzZXBvcy54ICsgdC54WzBdLFxuXHRcdFx0XHRcdHk6ICh0LnlbMV0tdC55WzBdKS9ib3VuZHMuaGVpZ2h0KnJlbG1vdXNlcG9zLnkgKyB0LnlbMF0sXG5cdFx0XHRcdFx0ejogKHQuelsxXS10LnpbMF0pL2JvdW5kcy5oZWlnaHQqcmVsbW91c2Vwb3MueSArIHQuelswXSxcblx0XHRcdFx0fSxcblx0XHRcdFx0cm90YXRpb24gOiB7XG5cdFx0XHRcdFx0eDogKHIueFsxXS1yLnhbMF0pL2JvdW5kcy5oZWlnaHQqcmVsbW91c2Vwb3MueSArIHIueFswXSxcblx0XHRcdFx0XHR5OiAoci55WzFdLXIueVswXSkvYm91bmRzLndpZHRoKnJlbG1vdXNlcG9zLnggKyByLnlbMF0sXG5cdFx0XHRcdFx0ejogKHIuelsxXS1yLnpbMF0pL2JvdW5kcy53aWR0aCpyZWxtb3VzZXBvcy54ICsgci56WzBdXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHRoaXMuRE9NLmFuaW1hdGFibGVba2V5XS5zdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSB0aGlzLkRPTS5hbmltYXRhYmxlW2tleV0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHRyYW5zZm9ybXMudHJhbnNsYXRpb24ueCArICdweCkgdHJhbnNsYXRlWSgnICsgdHJhbnNmb3Jtcy50cmFuc2xhdGlvbi55ICsgJ3B4KSB0cmFuc2xhdGVaKCcgKyB0cmFuc2Zvcm1zLnRyYW5zbGF0aW9uLnogKyAncHgpIHJvdGF0ZVgoJyArIHRyYW5zZm9ybXMucm90YXRpb24ueCArICdkZWcpIHJvdGF0ZVkoJyArIHRyYW5zZm9ybXMucm90YXRpb24ueSArICdkZWcpIHJvdGF0ZVooJyArIHRyYW5zZm9ybXMucm90YXRpb24ueiArICdkZWcpJztcblx0XHR9XG5cdH1cblxuXHRzZXRSYW5nZSAob2JqKSB7XG5cdFx0Zm9yKGxldCBrIGluIG9iaikge1xuXHRcdFx0aWYoIG9ialtrXSA9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdG9ialtrXSA9IFswLDBdO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiggdHlwZW9mIG9ialtrXSA9PT0gJ251bWJlcicgKSB7XG5cdFx0XHRcdG9ialtrXSA9IFstMSpvYmpba10sb2JqW2tdXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUaWx0Rng7Il19
