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
		var $wrapper = App.$el.find('.js-gallery-wrapper');
		var target = $(e.target).attr('href');
		var $current = $wrapper.find(target);
		var $close = $wrapper.find('.js-close-galery');

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
			console.log('blur');
			$form.find('textarea').each(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvYXBwLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvU2xpZGVyLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvVGlsdEZ4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLE1BQU07QUFHVCxLQUhTLGtCQUdGO0FBQ04sT0FBSyxHQUFMLEdBQW9CLEVBQUUsTUFBRixDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsYUFBZCxDQUFwQjtBQUNBLE9BQUssR0FBTCxHQUFrQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsV0FBZCxDQUFsQjtBQUNBLE9BQUssU0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsYUFBZCxDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsWUFBZCxDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsb0JBQWQsQ0FBcEI7QUFDQSxPQUFLLE1BQUwsR0FBb0IsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLFVBQWQsQ0FBcEI7QUFDQSxPQUFLLFdBQUwsR0FBb0IsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGlCQUFkLENBQXBCO0FBQ0EsT0FBSyxLQUFMLEdBQW9CLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxVQUFkLENBQXBCO0FBQ0EsT0FBSyxZQUFMLEdBQW9CLENBQ25CLEVBRG1CLEVBRW5CO0FBQ0MsYUFBVTtBQUNULGdCQUFhO0FBQ1osa0JBQWMsRUFBQyxHQUFHLEVBQUosRUFBUSxHQUFHLEVBQVgsRUFBZSxHQUFHLEVBQWxCLEVBREY7QUFFWixlQUFXLEVBQUMsR0FBRyxDQUFKLEVBQU8sR0FBRyxDQUFDLEVBQVgsRUFBZSxHQUFHLENBQWxC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QUFQLEtBQWtCLFFBQXRCLEVBQWlDO0FBQ3JDLFNBQUksQ0FBSixJQUFTLENBQUMsQ0FBQyxDQUFELEdBQUcsSUFBSSxDQUFKLENBQUosRUFBVyxJQUFJLENBQUosQ0FBWCxDQUFUO0FBQ0E7QUFDRDtBQUNEOzs7Ozs7a0JBSWEsTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgU2xpZGVyIGZyb20gJy4vbW9kdWxlcy9TbGlkZXIuanMnO1xuaW1wb3J0IFRpbHRGeCBmcm9tICcuL21vZHVsZXMvVGlsdEZ4LmpzJztcblxubGV0IEFwcCA9IHtcblxuXHRcblx0aW5pdCgpIHtcblx0XHR0aGlzLiRlbCAgICAgICAgICA9ICQoJ2JvZHknKTtcblx0XHR0aGlzLiRsaW5rVG8gICAgICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1saW5rLXRvJyk7XG5cdFx0dGhpcy5uYXYgXHQgICAgICA9IHRoaXMuJGVsLmZpbmQoJy5tYWluLW5hdicpO1x0XHRcblx0XHR0aGlzLiRwcmV2aWV3cyAgICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1wcmV2aWV3Jyk7XG5cdFx0dGhpcy4kc2xpZGVyICAgICAgPSB0aGlzLiRlbC5maW5kKCcuanMtc2xpZGVyJyk7XG5cdFx0dGhpcy4kc2tpbGxzICAgICAgPSB0aGlzLiRlbC5maW5kKCcuanMtc2tpbGxzLWNvbnRlbnQnKTtcblx0XHR0aGlzLiRiYW5kcyAgICAgICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1iYW5kJyk7XG5cdFx0dGhpcy4kb3BlbkdhbGVyeSAgPSB0aGlzLiRlbC5maW5kKCcuanMtb3Blbi1nYWxlcnknKTtcblx0XHR0aGlzLiRmb3JtICAgICAgICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1mb3JtJyk7XG5cdFx0dGhpcy50aWx0U2V0dGluZ3MgPSBbXG5cdFx0XHR7fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRpbWdXcmFwcGVyIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IDEwLCB6OiAzMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAtMTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGxpbmVzIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IDEwLCB6OiBbMCw3MF19LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogLTJ9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogMn0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMjAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YWQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAtMTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogMn0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMjAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAwLCB5OiAxMDAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IC01LCB5OiAxMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogOTAwLCBlYXNpbmcgOiAnZWFzZU91dEN1YmljJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAzMCwgeTogMzAsIHo6IFswLDQwXX0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiBbMCwxNV0sIHk6IDAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEyMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IDEwLCB6OiBbMCwyMF19LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEwMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwMCwgeTogMTAwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA5MDAsIGVhc2luZyA6ICdlYXNlT3V0Q3ViaWMnfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRpbWdXcmFwcGVyIDoge1xuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogLTUsIHk6IDEwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA1MCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAyMCwgeTogMjAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG92ZXJsYXkgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1LCB5OiAtNSwgejogMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiA2fSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMDAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YWQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1MCwgeTogNTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDUwLCBlYXNpbmcgOiAnZWFzZU91dFF1YWQnfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRpbWdXcmFwcGVyIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMCwgeTogLTgsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMywgeTogMywgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGxpbmVzIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTUsIHk6IDE1LCB6OiBbMCwxNV19LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEyMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMCwgeTogOCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNjAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAtMTUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDkwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNTAsIHk6IDUwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMjAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRsaW5lcyA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IC01LCB5OiA1LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMDAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDE1LCB5OiAxNSwgejogMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAzfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxNTAwLCBlYXNpbmcgOiAnZWFzZU91dEVsYXN0aWMnLCBlbGFzdGljaXR5IDogNzAwfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDE1LCB5OiAtMTUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDUwMCxlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1MCwgeTogNTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDUwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDUsIHk6IDUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDgwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFydCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IDEwLCB6OiBbMCw1MF19LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEwMDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhcnQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1MCwgeTogNTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDgwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFydCd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdGxpbmVzIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNDAsIHk6IDQwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxNTAwLCBlYXNpbmcgOiAnZWFzZU91dEVsYXN0aWMnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDIwLCB5OiAyMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAtNX0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG92ZXJsYXkgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAtMzAsIHk6IC0zMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAzfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA3NTAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwMCwgeTogMTAwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA3NTAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XTtcblxuXHRcdHRoaXMuVXNlclNlZSAgID0gdHJ1ZTtcblx0XHR0aGlzLnNraWxsc09uICA9IGZhbHNlO1xuXG5cdFx0dGhpcy5zciBcdCAgID0gU2Nyb2xsUmV2ZWFsKHsgcmVzZXQ6IGZhbHNlIH0pO1xuXG5cdFx0Ly9pbml0IFNsaWRlciBcblx0XHRpZiAodGhpcy4kc2xpZGVyLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5hdXRvcGxheSA9IG5ldyBTbGlkZXI7XG5cdFx0XHR0aGlzLmF1dG9wbGF5LmluaXQodGhpcy4kc2xpZGVyKTtcblx0XHR9XG5cdFx0dGhpcy52aWV3SXNBY3RpdmUoKTsgXHRcblxuXHRcdC8vIGxpbmtUbyBmdW5jdGlvbiBpZiBsaW5rcyBleGlzdCBcblx0XHRpZiAodGhpcy4kbGlua1RvLmxlbmd0aCkgdGhpcy5saW5rVG8oKTtcblxuXHRcdC8vIHNjcm9sbCBmb3IgdG9wIG1lbnUgbmF2IFxuXHRcdHRoaXMuc2Nyb2xsKCk7XG5cblx0XHQvLyBmdW5jdGlvbiByZXZhbCBcblx0XHR0aGlzLnJldmFsKCk7XHRcblxuXHRcdC8vb3BlbiBnYWxlcnkgXG5cdFx0dGhpcy4kb3BlbkdhbGVyeS5vbignY2xpY2snLCB0aGlzLm9wZW5HYWxlcnkpXG5cblx0XHQvL3ByZWxvYWQgaW1nIFxuXHRcdGlmICh0aGlzLiRwcmV2aWV3cy5sZW5ndGgpIHRoaXMucHJlbG9hZCgpO1x0XG5cblx0XHQvL3ByZWxvYWQgaW1nIHByZXZpZXcgXG5cdFx0dGhpcy5pbml0UG9ydGZvbGlvUHJldmlldygpO1xuXG5cdFx0Ly9pbml0IGZvcm0gXG5cdFx0aWYgKHRoaXMuJGZvcm0ubGVuZ3RoKSB0aGlzLmluaXRGb3JtKCk7XG5cdFx0XG5cdH0sXG5cblx0dmlld0lzQWN0aXZlKCkge1xuXHRcdHdpbmRvdy5vbmZvY3VzID0gKCkgPT4ge1xuXHRcdCAgICB0aGlzLlVzZXJTZWUgPSB0cnVlO1xuXHRcdCAgfTtcblxuXHRcdHdpbmRvdy5vbmJsdXIgPSAoKSA9PiB7XG5cdFx0ICAgIHRoaXMuVXNlclNlZSA9IGZhbHNlO1xuXHRcdCAgfTtcblx0XHRzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdCAgICBpZiAoIXRoaXMuVXNlclNlZSkgdGhpcy5hdXRvcGxheS5zdG9wKCk7XG5cdFx0fSwgMTAwMCk7XG5cdH0sXG5cblx0bGlua1RvKCkge1xuXHRcdHRoaXMuJGxpbmtUby5vbignY2xpY2sgdG91Y2gnLCAoZSkgPT4ge1xuXHRcdFx0bGV0IHRhcmdldCAgID0gJChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdGxldCAkc2VjdGlvbiA9IHRoaXMuJGVsLmZpbmQodGFyZ2V0KTtcblx0XHRcdCQoJ2JvZHksIGh0bWwnKS5hbmltYXRlKHtcblx0XHQgICAgICAgIHNjcm9sbFRvcDogJHNlY3Rpb24ub2Zmc2V0KCkudG9wXG5cdFx0ICAgIH0sIDEwMDApO1xuXHRcdH0pXG5cdH0sIFxuXG5cdGlzVmlzaWJsZShlbGVtZW50KSB7XG5cdFx0bGV0ICRlbGVtZW50ICAgICAgICA9ICQoZWxlbWVudCk7XG5cdFx0bGV0IHRvcEVsZW1lbnQgXHQgICAgPSAkZWxlbWVudC5vZmZzZXQoKS50b3A7XG5cdFx0bGV0IGJvdHRvbUVsZW1lbnQgXHQ9ICgkZWxlbWVudC5vZmZzZXQoKS50b3AgKyAkZWxlbWVudC5oZWlnaHQoKSApIDtcblx0XHRsZXQgc2Nyb2xsdG9wIFx0ICAgID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXHRcdGxldCBzY3JvbGxCb3R0b20gXHQ9IHNjcm9sbHRvcCArICQod2luZG93KS5oZWlnaHQoKTtcblx0XHRsZXQgaXNWaXNpYmxlICAgICAgID0gZmFsc2U7XG5cblx0XHRpZiAoIHRvcEVsZW1lbnQgPiBzY3JvbGx0b3AgJiYgYm90dG9tRWxlbWVudCA8IHNjcm9sbEJvdHRvbSApIHtcblx0XHRcdGlzVmlzaWJsZSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlzVmlzaWJsZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gaXNWaXNpYmxlIDtcblx0fSxcblxuXHRvcGVuR2FsZXJ5KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0ICR3cmFwcGVyICAgPSBBcHAuJGVsLmZpbmQoJy5qcy1nYWxsZXJ5LXdyYXBwZXInKTtcblx0XHRsZXQgdGFyZ2V0ICAgICA9ICQoZS50YXJnZXQpLmF0dHIoJ2hyZWYnKTtcblx0XHRsZXQgJGN1cnJlbnQgICA9ICR3cmFwcGVyLmZpbmQodGFyZ2V0KTtcblx0XHRsZXQgJGNsb3NlICAgICA9ICR3cmFwcGVyLmZpbmQoJy5qcy1jbG9zZS1nYWxlcnknKTtcblx0XHRcblx0XHRpZigkY3VycmVudC5sZW5ndGgpIHtcblx0XHRcdCR3cmFwcGVyLmFkZENsYXNzKCdvcGVuJyk7XHRcdFx0XG5cdFx0XHRBcHAuJGVsLmFkZENsYXNzKCdvdmVyZmxvdy1oaWRkZW4nKTtcblx0XHRcdCRjdXJyZW50LmNzcyggJ2Rpc3BsYXknLCAnYmxvY2snICk7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0JGN1cnJlbnQuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcblx0XHRcdFx0JGN1cnJlbnQuZmluZCgnLmxlZnQsIC5yaWdodCcpLmNzcygnaGVpZ2h0JywgJGN1cnJlbnQuZmluZCgnLmxlZnQnKS5vdXRlckhlaWdodCgpKTtcblx0XHRcdH0sIDcwMClcblx0XHRcdCRjdXJyZW50LmZpbmQoJy5qcy1yZWFkLW1vcmUnKS5vbignY2xpY2sgdG91Y2gnLCAoZSk9PiB7XG5cdFx0XHRcdCRjdXJyZW50LmFkZENsYXNzKCdzaG93LW1vcmUnKTtcblx0XHRcdH0pXG5cdFx0XHQkY2xvc2Uub24oJ2NsaWNrIHRvdWNoJywgQXBwLmNsb3NlR2FsZXJ5KVxuXHRcdH1cblx0fSxcblxuXHRjbG9zZUdhbGVyeSgpIHtcblx0XHRsZXQgJHdyYXBwZXIgICA9IEFwcC4kZWwuZmluZCgnLmpzLWdhbGxlcnktd3JhcHBlcicpO1x0XHRcblx0XHRsZXQgJHZpc2libGUgICA9ICR3cmFwcGVyLmZpbmQoJy52aXNpYmxlJyk7XG5cdFx0XG5cdFx0aWYoJHZpc2libGUubGVuZ3RoKSB7XG5cdFx0ICAgICR2aXNpYmxlLmFuaW1hdGUoe3Njcm9sbFRvcDowfSwgJzEwMCcpO1x0XHRcdFxuXHRcdFx0JHZpc2libGUucmVtb3ZlQ2xhc3MoJ3Zpc2libGUgc2hvdy1tb3JlJyk7XHRcdFx0XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcdFx0XHRcdFxuXHRcdFx0XHQkdmlzaWJsZS5jc3MoICdkaXNwbGF5JywgJ25vbmUnICk7XG5cdFx0XHRcdCR3cmFwcGVyLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cdFx0XHRcdEFwcC4kZWwucmVtb3ZlQ2xhc3MoJ292ZXJmbG93LWhpZGRlbicpO1x0XHRcdFx0XG5cdFx0XHR9LCA3MDApO1xuXHRcdH1cblx0fSxcblxuXHRzY3JvbGwoKSB7XG5cdFx0bGV0IHN0ZXAxID0gdGhpcy4kZWwuZmluZCgnI2Fib3V0Jykub2Zmc2V0KCkudG9wO1xuXHRcdCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSBzdGVwMS0xMDAgPyB0aGlzLm5hdi5hZGRDbGFzcygnZml4eScpIDogdGhpcy5uYXYucmVtb3ZlQ2xhc3MoJ2ZpeHknKTtcblx0XHQkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPj0gc3RlcDEgPyB0aGlzLm5hdi5hZGRDbGFzcygnYWN0aXZlJykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHQkKHdpbmRvdykub24oJ3Njcm9sbCcsICgpID0+IHtcblx0XHRcdGxldCBjdXJyZW50U2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0XHRjdXJyZW50U2Nyb2xsID49IDgwID8gdGhpcy5uYXYuY3NzKCd0b3AnLCAnLTYxcHgnKSA6IHRoaXMubmF2LmNzcygndG9wJywgJzBweCcpO1xuXHRcdFx0Y3VycmVudFNjcm9sbCA+PSBzdGVwMS0xMDAgPyB0aGlzLm5hdi5hZGRDbGFzcygnZml4eScpIDogdGhpcy5uYXYucmVtb3ZlQ2xhc3MoJ2ZpeHknKTtcblx0XHRcdGN1cnJlbnRTY3JvbGwgPj0gc3RlcDEgPyB0aGlzLm5hdi5hZGRDbGFzcygnYWN0aXZlJykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHRcdC8vaW5pdCBzbGlkZXIgXHRcdFxuXHRcdFx0aWYgKHRoaXMuJHNsaWRlci5sZW5ndGgpIHtcdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy5pc1Zpc2libGUodGhpcy4kc2xpZGVyKSkge1xuXHRcdFx0XHRcdHRoaXMuYXV0b3BsYXkucGxheSgpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5hdXRvcGxheS5zdG9wKClcblx0XHRcdFx0fVxuXHRcdFx0fSBcblxuXHRcdFx0aWYgKHRoaXMuJHNraWxscy5sZW5ndGgpIHtcdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy5pc1Zpc2libGUodGhpcy4kc2tpbGxzWzBdKSkge1x0XG5cdFx0XHRcdFx0dGhpcy5zaG93U2tpbGxzKCk7XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy4kYmFuZHMubGVuZ3RoKSB7XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnNob3dCYW5kcygpO1x0XHRcdFx0XG5cdFx0XHR9ICBcblx0XHR9KTsgXG5cdFxuXHR9LFxuXG5cdHJldmFsKCkge1xuXHRcdC8vbGVmdCB0byByaWdodFxuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtbGVmdCcsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2xlZnQnLCBzY2FsZTogMSwgZHVyYXRpb246NTAwfSk7XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1sZWZ0LWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnbGVmdCcsIHNjYWxlOiAxLCBkZWxheTogNTAwLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLWxlZnQtbG9uZy1kZWxheScsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2xlZnQnLCBzY2FsZTogMSwgZGVsYXk6IDE1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdC8vcmlnaHQgdG8gbGVmdFxuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtcmlnaHQnLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdyaWdodCcsIHNjYWxlOiAxLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXJpZ2h0LWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAncmlnaHQnLCBzY2FsZTogMSwgZGVsYXk6IDUwMCwgZHVyYXRpb246NTAwfSk7XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1yaWdodC1sb25nLWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAncmlnaHQnLCBzY2FsZTogMSwgZGVsYXk6IDE1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdC8vYm90dG9tIHRvIHRvcCBcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXRvcCcsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2JvdHRvbScsIHNjYWxlOiAxLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXRvcC1kZWxheScsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2JvdHRvbScsIHNjYWxlOiAxLCBkZWxheTogNTAwLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXRvcC1sb25nLWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnYm90dG9tJywgc2NhbGU6IDEsIGRlbGF5OiAxNTAwLCBkdXJhdGlvbjo1MDB9KTtcblxuXHR9LFxuXG5cdHNob3dTa2lsbHMoKSB7XG5cblx0XHRpZighdGhpcy5za2lsbHNPbikge1xuXHRcdFx0bGV0ICRza2lsbHMgPSB0aGlzLiRlbC5maW5kKCcuanMtcGVyY2VudCcpO1xuXHRcdFx0JHNraWxscy5lYWNoKCAoaW5kZXgsIGN1cnJlbnQpID0+IHtcblx0XHRcdFx0bGV0IF9wZXJjZW50ID0gJChjdXJyZW50KS5hdHRyKCdkYXRhLXBlcmNlbnQnKSsnJSc7XG5cdFx0XHRcdCQoY3VycmVudCkuY3NzKCd3aWR0aCcsIF9wZXJjZW50KTtcblx0XHRcdH0gKVxuXHRcdH1cblx0fSxcblxuXHRzaG93QmFuZHMoKSB7XG5cdFx0dGhpcy4kYmFuZHMuZWFjaCggKGksIGN1cnJlbnQpID0+IHtcblx0XHRcdGxldCBfYmFuZCA9ICQoY3VycmVudCk7XG5cblx0XHRcdGlmKHRoaXMuaXNWaXNpYmxlKGN1cnJlbnQpKSB7XG5cdFx0XHRcdF9iYW5kLmhhc0NsYXNzKCdqcy1iYW5kLXJpZ2h0JykgPyBfYmFuZC5jc3MoJ3JpZ2h0JywgMCkgOiBfYmFuZC5jc3MoJ2xlZnQnLCAwKTtcblx0XHRcdFx0aWYoX2JhbmQuaGFzQ2xhc3MoJ2pzLWxhc3QtYmFuZCcpKSB0aGlzLiRmb3JtLmFkZENsYXNzKCd2aXNpYmxlJyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblxuXHRwcmVsb2FkKCkge1xuXHRcdHRoaXMuJHByZXZpZXdzLmVhY2goKGlkeCwgY29udGFpbmVyKSA9PiB7XG5cdFx0XHRsZXQgJGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcblx0XHRcdGxldCBfdXJsICAgICAgID0gJGNvbnRhaW5lci5kYXRhKCdpbWFnZS11cmwnKTtcblx0XHRcdGxldCBpbWcgICAgICAgID0gbmV3IEltYWdlKCk7XG5cblx0XHRcdGltZy5zcmMgICAgICAgID0gX3VybDtcblxuXHQgICAgICAgIC8vIGlmIHdlIGhhdmUgdGhpcyBpbWFnZSBhbHJlYWR5IGNhY2hlZCwgd2UgZG9uJ3QgaGF2ZVxuXHQgICAgICAgIC8vIHRvIHdhaXQgZm9yIHRoZSBvbmxvYWQgY2FsbGJhY2sgYW5kIGNhbiByZW1vdmUgdGhlXG5cdCAgICAgICAgLy8gcHJldmlldyBpbWFnZSBpbW1lZGlhdGVseVxuXHQgICAgICAgIGlmKHRoaXMuaW1nQ29tcGxldGUoaW1nKSkge1xuXHQgICAgICAgIFx0dGhpcy5yZW1vdmVQcmV2aWV3KCRjb250YWluZXIsIF91cmwpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgXHRpbWcub25sb2FkID0gKCkgPT4ge1xuXHQgICAgICAgIFx0XHR0aGlzLnJlbW92ZVByZXZpZXcoJGNvbnRhaW5lciwgX3VybCk7XG5cdCAgICAgICAgXHR9O1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXHR9LFxuXG5cdGltZ0NvbXBsZXRlKGltZykge1xuICAgICAgICByZXR1cm4gaW1nLmNvbXBsZXRlIHx8IGltZy53aWR0aCArIGltZy5oZWlnaHQgPiAwO1xuICAgIH0sXG4gIFxuICAgIHJlbW92ZVByZXZpZXcoJGNvbnRhaW5lciwgdXJsKSB7XG4gICAgICAgICRjb250YWluZXIuY3NzKHsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoXCInICsgdXJsICsgJ1wiKSd9KTtcbiAgICAgICAgJGNvbnRhaW5lci5yZW1vdmVDbGFzcygnanMtcHJldmlldyBwcmV2aWV3Jyk7XG4gICAgfSxcblxuICAgIGluaXRQb3J0Zm9saW9QcmV2aWV3KCkge1xuXG5cdFx0bGV0IGlkeCA9IDA7XG5cdFx0W10uc2xpY2UuY2FsbCgkKCdhLnRpbHRlcicpKS5mb3JFYWNoKChlbCwgcG9zKSA9PiB7IFxuXHRcdFx0aWR4ID0gcG9zJTIgPT09IDAgPyBpZHgrMSA6IGlkeDtcblx0XHRcdGxldCBfVGlsdEZ4ID0gbmV3IFRpbHRGeDtcblx0XHRcdF9UaWx0RnguaW5pdChlbCwgQXBwLnRpbHRTZXR0aW5nc1tpZHgtMV0pO1xuXHRcdH0pO1xuXG5cdFx0bGV0IHBhdGVyICAgID0gdGhpcy4kZWwuZmluZCgnLnBhdGVyJyk7XG5cdFx0bGV0XHRwYXRlclNWRyA9IHBhdGVyLmZpbmQoJy5wYXRlcl9fc3ZnJyk7XG5cdFx0bGV0XHRwYXRoRWwgICA9IHBhdGVyU1ZHLmZpbmQoJ3BhdGgnKTtcblx0XHRsZXRcdHBhdGhzICAgID0ge2RlZmF1bHQ6IHBhdGhFbC5hdHRyKCdkJyksIGFjdGl2ZTogcGF0ZXJTVkcuYXR0cignZGF0YS1wYXRoLWhvdmVyJyl9O1xuXG5cdFx0cGF0ZXIub24oJ21vdXNlZW50ZXInLCAoKSA9PiB7XG5cdFx0XHRhbmltZS5yZW1vdmUocGF0aEVsKTtcblx0XHRcdGFuaW1lKHtcblx0XHRcdFx0dGFyZ2V0czogcGF0aEVsLFxuXHRcdFx0XHRkOiBwYXRocy5hY3RpdmUsXG5cdFx0XHRcdGR1cmF0aW9uOiA0MDAsXG5cdFx0XHRcdGVhc2luZzogJ2Vhc2VPdXRRdWFkJ1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRwYXRlci5vbignbW91c2VsZWF2ZScsICgpID0+IHtcblx0XHRcdGFuaW1lLnJlbW92ZShwYXRoRWwpO1xuXHRcdFx0YW5pbWUoe1xuXHRcdFx0XHR0YXJnZXRzOiBwYXRoRWwsXG5cdFx0XHRcdGQ6IHBhdGhzLmRlZmF1bHQsXG5cdFx0XHRcdGR1cmF0aW9uOiA0MDAsXG5cdFx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJ1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG5cblx0aW5pdEZvcm0oKSB7XG5cblx0XHRsZXQgJGZvcm0gPSB0aGlzLiRmb3JtOyBcblx0XHRsZXQgY2hlY2tGb3JtID0gWyBmYWxzZSwgZmFsc2UsIGZhbHNlXTtcblxuXHRcdCRmb3JtLmZpbmQoJ3RleHRhcmVhJykuYmx1cihmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnYmx1cicpXG5cdFx0ICAgICRmb3JtLmZpbmQoJ3RleHRhcmVhJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0ICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuXHRcdCAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIl5bYS16QS1aw4Atw7rDgC3DvzAtOSTigqwuIF0rJFwiKTtcblxuXHRcdCAgICAgICAgaWYgKHJlZ2V4LnRlc3QodGhpcy52YWx1ZSkgKSB7XG5cdFx0ICAgICAgICBcdGNvbnNvbGUubG9nKCdyZWdleCcpO1xuXHRcdCAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICAgICAgJCgnLm1zZy1ib3ggbGFiZWwnKS5jc3Moeydjb2xvcic6ICd0cmFuc3BhcmVudCd9KTtcblx0XHQgICAgICAgICAgXHQkKCcubXNnLWJveCAuanMtY2hlY2snKS5jc3MoeydvcGFjaXR5JzogMX0pO1xuXHRcdCAgICAgICAgICBcdCQoJy5tc2ctYm94IC5qcy1lcnJvcicpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0Y2hlY2tGb3JtWzBdID0gdHJ1ZTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICAgIGVsc2UgaWYgKHRoaXMudmFsdWUgPT09ICcnKSB7XG5cdFx0ICAgICAgICAgIFx0JHRoaXMucmVtb3ZlQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgICAgXHQkKCcubXNnLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3doaXRlJ30pO1xuXHRcdCAgICAgICAgICBcdCQoJy5tc2ctYm94IGlucHV0ICsgbGFiZWwgKyBzcGFuJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHQkKCcubXNnLWJveCAuanMtY2hlY2snKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdCQoJy5tc2ctYm94IC5qcy1lcnJvcicpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0Y2hlY2tGb3JtWzBdID0gZmFsc2U7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICBlbHNlIHtcblx0XHQgICAgICAgIFx0JHRoaXMuYWRkQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgIFx0JCgnLm1zZy1ib3ggbGFiZWwnKS5jc3Moeydjb2xvcic6ICd0cmFuc3BhcmVudCd9KTtcblx0XHQgICAgICAgIFx0JCgnLm1zZy1ib3ggLmpzLWNoZWNrJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHQkKCcubXNnLWJveCAuanMtZXJyb3InKS5jc3MoeydvcGFjaXR5JzogMX0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVswXSA9IGZhbHNlO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICB9KTtcblx0XHR9KTtcblxuXHRcdCRmb3JtLmZpbmQoJy5uYW1lLWJveCBpbnB1dCcpLmJsdXIoZnVuY3Rpb24gKCkge1xuXG5cdFx0ICAgICRmb3JtLmZpbmQoJy5uYW1lLWJveCBpbnB1dCcpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcblx0XHQgICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoXCJeW2EtekEtWsOALcO6w4Atw78gXSokXCIpO1xuXG5cdFx0ICAgICAgICBpZiAocmVnZXgudGVzdCh0aGlzLnZhbHVlKSApIHtcblx0XHQgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgICAgICQoJy5uYW1lLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3RyYW5zcGFyZW50J30pO1xuXHRcdCAgICAgICAgICBcdCQoJy5uYW1lLWJveCAuanMtY2hlY2snKS5jc3MoeydvcGFjaXR5JzogMX0pO1xuXHRcdCAgICAgICAgICBcdCQoJy5uYW1lLWJveCAuanMtZXJyb3InKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVsxXSA9IHRydWU7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICBlbHNlIGlmICh0aGlzLnZhbHVlID09PSAnJykge1xuXHRcdCAgICAgICAgICBcdCR0aGlzLnJlbW92ZUNsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm5hbWUtYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAnd2hpdGUnfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm5hbWUtYm94IGlucHV0ICsgbGFiZWwgKyBzcGFuJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMV0gPSBmYWxzZTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICAgIGVsc2Uge1xuXHRcdCAgICAgICAgXHQkdGhpcy5hZGRDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgXHQkKCcubmFtZS1ib3ggbGFiZWwnKS5jc3Moeydjb2xvcic6ICd0cmFuc3BhcmVudCd9KTtcblx0XHQgICAgICAgIFx0JCgnLm5hbWUtYm94IC5qcy1jaGVjaycpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm5hbWUtYm94IC5qcy1lcnJvcicpLmNzcyh7J29wYWNpdHknOiAxfSk7XG5cdFx0ICAgICAgICAgIFx0Y2hlY2tGb3JtWzFdID0gZmFsc2U7XG5cdFx0ICAgICAgICB9XG5cblx0XHQgICAgfSk7XG5cblx0XHR9KTtcblxuXHRcdCRmb3JtLmZpbmQoJy5lbWFpbC1ib3ggaW5wdXQnKS5ibHVyKGZ1bmN0aW9uICgpIHtcblx0XHQgICAgJGZvcm0uZmluZCgnLmVtYWlsLWJveCBpbnB1dCcpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcblx0XHQgICAgICAgIGxldCByZWdleCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXG5cdFx0ICAgICAgICBpZiAocmVnZXgudGVzdCh0aGlzLnZhbHVlKSApIHtcblx0XHQgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgICAgICQoJy5lbWFpbC1ib3ggbGFiZWwnKS5jc3Moeydjb2xvcic6ICd0cmFuc3BhcmVudCd9KTtcblx0XHQgICAgICAgICAgXHQkKCcuZW1haWwtYm94IC5qcy1jaGVjaycpLmNzcyh7J29wYWNpdHknOiAxfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLmVtYWlsLWJveCAuanMtZXJyb3InKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVsyXSA9IHRydWU7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICBlbHNlIGlmICh0aGlzLnZhbHVlID09PSAnJykge1xuXHRcdCAgICAgICAgICBcdCR0aGlzLnJlbW92ZUNsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICAgIFx0JCgnLmVtYWlsLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3doaXRlJ30pO1xuXHRcdCAgICAgICAgICBcdCQoJy5lbWFpbC1ib3ggaW5wdXQgKyBsYWJlbCArIHNwYW4nKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVsyXSA9IGZhbHNlO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAgZWxzZSB7XG5cdFx0ICAgICAgICBcdCR0aGlzLmFkZENsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICBcdCQoJy5lbWFpbC1ib3ggbGFiZWwnKS5jc3Moeydjb2xvcic6ICd0cmFuc3BhcmVudCd9KTtcblx0XHQgICAgICAgIFx0JCgnLmVtYWlsLWJveCAuanMtY2hlY2snKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdCQoJy5lbWFpbC1ib3ggLmpzLWVycm9yJykuY3NzKHsnb3BhY2l0eSc6IDF9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMl0gPSBmYWxzZTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgfSk7XG5cdFx0fSk7XG5cblx0XHQkZm9ybS5vbignc3VibWl0JywgKGUpID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGxldCAkZXJyb3JNc2cgICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1lcnJvci1tZXNzYWdlJyk7XG5cdFx0XHRsZXQgJHN1Y2Nlc3NNc2cgPSB0aGlzLiRlbC5maW5kKCcuanMtc3VjY2Vzcy1tZXNzYWdlJyk7XG5cdFx0XHRsZXQgY2hlY2sgICAgICAgPSAwOyBcblxuXHRcdFx0Y2hlY2tGb3JtLmZvckVhY2goIChlbGVtZW50LCBpbmRleCkgPT4ge1x0XHRcdFx0XG5cdFx0XHRcdGlmKGVsZW1lbnQpIGNoZWNrKys7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKCBjaGVjayA9PT0gMyApIHtcblx0XHRcdFx0Ly9jYW4gc2VuZCBmb3JtXG5cblx0XHRcdFx0bGV0IHMgPSAkZm9ybS5zZXJpYWxpemUoKTtcblxuXHRcdFx0XHQkLmFqYXgoe1xuXHQgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG5cdCAgICAgICAgICAgICAgICB1cmw6IFwiLi4vbWFpbC5waHBcIixcblx0ICAgICAgICAgICAgICAgIGRhdGE6IHMsXG5cdCAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuXHQgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5wcmVwZW5kKCc8ZGl2IHN0eWxlPVwicG9zaXRpb246Zml4ZWQ7IHRvcDo1MCU7IHotaW5kZXg6MjAwMDtcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5Wb3RyZSBlbWFpbCDDoCBiaWVuIMOpdMOpIHRyYW5zbWlzICE8L2Rpdj4nKVxuXHQgICAgICAgICAgICAgICAgICAgIC5oaWRlKClcblx0ICAgICAgICAgICAgICAgICAgICAuZmFkZUluKDE1MDApOyAgICAgICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcblx0ICAgICAgICAgICAgICAgICAgXHQkKCdib2R5JykucHJlcGVuZCgnPGRpdiBzdHlsZT1cInBvc2l0aW9uOmZpeGVkOyB0b3A6NTAlOyB6LWluZGV4OjIwMDA7XCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5MXFwnZW52b2kgZHUgbWFpbCBhIMOpY2hvdcOpLCB2ZXVpbGxleiByw6llc3NheWVyIFNWUDwvZGl2PicpXG5cdCAgICAgICAgICAgICAgICAgICAgLmhpZGUoKVxuXHQgICAgICAgICAgICAgICAgICAgIC5mYWRlSW4oMTUwMCk7XG5cdCAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICBcdH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxufVxuXG4kKHdpbmRvdykucmVhZHkoQXBwLmluaXQuYmluZChBcHApKTsiLCJjbGFzcyBTbGlkZXIgeyBcblxuXHRpbml0KGVsKSB7XG5cdFx0dGhpcy4kZWwgICAgICAgICAgPSAkKGVsKTtcblx0XHR0aGlzLiRjb250YWluZXIgICA9IHRoaXMuJGVsLmZpbmQoJ3VsJyk7XG5cdFx0dGhpcy4kc2xpZGVycyAgICAgPSB0aGlzLiRjb250YWluZXIuZmluZCgnbGknKTtcblx0XHR0aGlzLm5vbWJlclNsaWRlICA9IHRoaXMuJHNsaWRlcnMubGVuZ3RoO1xuXHRcdHRoaXMud2lkdGggICAgICAgID0gMzAwO1xuXHRcdHRoaXMubGVmdCAgICAgICAgID0gLXRoaXMud2lkdGg7XG5cdFx0dGhpcy5kdXJhdGlvbiBcdCAgPSAzNTAwO1xuXHRcdHRoaXMuY3VycmVudEluZGV4ID0gMTtcblx0XHR0aGlzLmlzUGxheWluZyAgICA9IGZhbHNlO1xuXHRcdFxuXG5cdFx0dGhpcy4kY29udGFpbmVyLmNzcygnd2lkdGgnLCB0aGlzLm5vbWJlclNsaWRlKnRoaXMud2lkdGgrJ3B4Jyk7XG5cdFx0JCh0aGlzLiRzbGlkZXJzWzBdKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cblx0XHR0aGlzLiRlbC5ob3ZlcigoKSA9PiB7IHRoaXMuc3RvcCgpIH0sICgpID0+IHsgdGhpcy5wbGF5KCkgfSApO1x0XHRcblxuXHR9XG5cblx0c2xpZGVyKCkge1xuXHRcdHRoaXMuJGNvbnRhaW5lci5hbmltYXRlKHtcblx0XHRcdFx0XHRsZWZ0IDogdGhpcy5sZWZ0KydweCdcblx0XHRcdFx0fSwgMjAwLCAoKSA9PiB7XG5cdFx0XHRcdFx0JCh0aGlzLiRzbGlkZXJzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0JCh0aGlzLiRzbGlkZXJzW3RoaXMuY3VycmVudEluZGV4XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdGlmICh0aGlzLmxlZnQgPiAodGhpcy5ub21iZXJTbGlkZS0xKSotKHRoaXMud2lkdGgpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxlZnQgPSB0aGlzLmxlZnQtdGhpcy53aWR0aDtcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEluZGV4Kys7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMubGVmdCA9IDA7XG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcblx0XHRcdFx0fSk7XG5cdH1cblxuXHRwbGF5KCkge1xuXHRcdFxuXHRcdGlmICghdGhpcy5pc1BsYXlpbmcpIHtcblx0XHRcdHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLnNsaWRlci5iaW5kKHRoaXMpLCB0aGlzLmR1cmF0aW9uKTtcblx0XHRcdHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcblx0XHR9XG5cdFx0XG5cdH1cblxuXHRzdG9wKCkge1xuXHRcdGlmICh0aGlzLmlzUGxheWluZykge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcblx0XHRcdHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyIsImNsYXNzIFRpbHRGeCB7XG5cblx0Ly8gSGVscGVyIHZhcnMgYW5kIGZ1bmN0aW9ucy5cblx0ZXh0ZW5kKCBhLCBiICkge1xuXHRcdGZvciggbGV0IGtleSBpbiBiICkgeyBcblx0XHRcdGlmKCBiLmhhc093blByb3BlcnR5KCBrZXkgKSApIHtcblx0XHRcdFx0YVtrZXldID0gYltrZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gYTtcblx0fVxuXG5cdGdldE1vdXNlUG9zKGUpIHtcblx0XHRsZXQgcG9zeCA9IDA7XG5cdFx0bGV0IHBvc3kgPSAwO1xuXG5cdFx0aWYgKCFlKSB7bGV0IGUgPSB3aW5kb3cuZXZlbnR9XG5cdFx0aWYgKGUucGFnZVggfHwgZS5wYWdlWSkgXHR7XG5cdFx0XHRwb3N4ID0gZS5wYWdlWDtcblx0XHRcdHBvc3kgPSBlLnBhZ2VZO1xuXHRcdH1cblx0XHRlbHNlIGlmIChlLmNsaWVudFggfHwgZS5jbGllbnRZKSBcdHtcblx0XHRcdHBvc3ggPSBlLmNsaWVudFggKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcblx0XHRcdHBvc3kgPSBlLmNsaWVudFkgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cdFx0fVxuXHRcdHJldHVybiB7IHggOiBwb3N4LCB5IDogcG9zeSB9XG5cdH1cblxuXHQvKipcblx0ICogSW5pdC5cblx0ICovXG5cdGluaXQoZWwsIG9wdGlvbnMpIHtcblx0XHR0aGlzLkRPTSAgICAgICAgICAgICAgICAgICAgICAgPSB7fTtcblx0XHR0aGlzLkRPTS5lbCAgICAgICAgICAgICAgICAgICAgPSBlbDtcblx0XHR0aGlzLm9wdGlvbnMgICAgICAgICAgICAgICAgICAgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWdXcmFwcGVyIDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IC01LCB5OiA1LCB6OiAwfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb24gOiAxMjAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWFzaW5nIDogJ2Vhc2VPdXRFbGFzdGljJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsYXN0aWNpdHkgOiA2MDBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpbmVzIDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAxMCwgejogWzAsMTBdfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb24gOiAxMDAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsYXN0aWNpdHkgOiA2MDBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMjAsIHk6IDIwLCB6OiAwfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAwfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb24gOiAxNTAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWFzaW5nIDogJ2Vhc2VPdXRFbGFzdGljJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsYXN0aWNpdHkgOiA2MDBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG92ZXJsYXkgOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IDEwLCB6OiBbMCw1MF19LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDUwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA6ICdlYXNlT3V0RXhwbydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCovXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDUwLCB5OiA1MCwgejogMH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMTIwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA6ICdlYXNlT3V0RWxhc3RpYycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbGFzdGljaXR5OiA2MDBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdHRoaXMuZXh0ZW5kKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XHRcdFxuXHRcdHRoaXMuRE9NLmFuaW1hdGFibGUgICAgICAgICAgICA9IHt9O1xuXHRcdHRoaXMuRE9NLmFuaW1hdGFibGUuaW1nV3JhcHBlciA9IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoJy50aWx0ZXJfX2ZpZ3VyZScpO1xuXHRcdHRoaXMuRE9NLmFuaW1hdGFibGUubGluZXMgICAgICA9IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoJy50aWx0ZXJfX2RlY28tLWxpbmVzJyk7XG5cdFx0dGhpcy5ET00uYW5pbWF0YWJsZS5jYXB0aW9uICAgID0gdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLnRpbHRlcl9fY2FwdGlvbicpO1xuXHRcdHRoaXMuRE9NLmFuaW1hdGFibGUub3ZlcmxheSAgICA9IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoJy50aWx0ZXJfX2RlY28tLW92ZXJsYXknKTtcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlLnNoaW5lICAgICAgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcudGlsdGVyX19kZWNvLS1zaGluZSA+IGRpdicpO1xuXHRcdHRoaXMuaW5pdEV2ZW50cygpO1xuXHR9XG5cblx0aW5pdEV2ZW50cygpIHtcdFx0XG5cblx0XHQkKHRoaXMuRE9NLmVsKS5vbignbW91c2Vtb3ZlJywgIChlKSA9PiB7dGhpcy5tb3VzZW1vdmVGbihlKX0pO1xuXHRcdCQodGhpcy5ET00uZWwpLm9uKCdtb3VzZWxlYXZlJywgKGUpID0+IHt0aGlzLm1vdXNlbGVhdmVGbihlKX0pO1xuXHRcdCQodGhpcy5ET00uZWwpLm9uKCdtb3VzZWVudGVyJywgKCApID0+IHt0aGlzLm1vdXNlZW50ZXJGbigpfSk7XG5cdH1cblxuXHRtb3VzZW1vdmVGbihldikge1x0XHRcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4geyB0aGlzLmxheW91dChldik7IH0pO1xuXHR9XG5cblx0bW91c2VlbnRlckZuKCkge1x0XHRcblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLkRPTS5hbmltYXRhYmxlKSB7XG5cdFx0XHRhbmltZS5yZW1vdmUodGhpcy5ET00uYW5pbWF0YWJsZVtrZXldKTtcblx0XHR9XG5cdH1cblxuXHRtb3VzZWxlYXZlRm4oZXYpIHtcdFx0XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblx0XHRcdGZvcihsZXQga2V5IGluIHRoaXMuRE9NLmFuaW1hdGFibGUpIHtcblx0XHRcdFx0aWYoIHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldID09IHVuZGVmaW5lZCApIHtjb250aW51ZTt9XG5cdFx0XHRcdGFuaW1lKHtcblx0XHRcdFx0XHR0YXJnZXRzOiB0aGlzLkRPTS5hbmltYXRhYmxlW2tleV0sXG5cdFx0XHRcdFx0ZHVyYXRpb246IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnJldmVyc2VBbmltYXRpb24gIT0gdW5kZWZpbmVkID8gdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucmV2ZXJzZUFuaW1hdGlvbi5kdXJhdGlvbiB8fCAwIDogMSxcblx0XHRcdFx0XHRlYXNpbmc6IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnJldmVyc2VBbmltYXRpb24gIT0gdW5kZWZpbmVkID8gdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucmV2ZXJzZUFuaW1hdGlvbi5lYXNpbmcgfHwgJ2xpbmVhcicgOiAnbGluZWFyJyxcblx0XHRcdFx0XHRlbGFzdGljaXR5OiB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnJldmVyc2VBbmltYXRpb24uZWxhc3RpY2l0eSB8fCBudWxsIDogbnVsbCxcblx0XHRcdFx0XHRzY2FsZVg6IDEsXG5cdFx0XHRcdFx0c2NhbGVZOiAxLFxuXHRcdFx0XHRcdHNjYWxlWjogMSxcblx0XHRcdFx0XHR0cmFuc2xhdGVYOiAwLFxuXHRcdFx0XHRcdHRyYW5zbGF0ZVk6IDAsXG5cdFx0XHRcdFx0dHJhbnNsYXRlWjogMCxcblx0XHRcdFx0XHRyb3RhdGVYOiAwLFxuXHRcdFx0XHRcdHJvdGF0ZVk6IDAsXG5cdFx0XHRcdFx0cm90YXRlWjogMFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGxheW91dChldikge1xuXHRcdC8vIE1vdXNlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBkb2N1bWVudC5cblx0XHRsZXQgbW91c2Vwb3MgPSB0aGlzLmdldE1vdXNlUG9zKGV2KTtcblx0XHRcdC8vIERvY3VtZW50IHNjcm9sbHMuXG5cdFx0bGV0XHRkb2NTY3JvbGxzID0ge2xlZnQgOiBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCwgdG9wIDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wfTtcblx0XHRsZXRcdGJvdW5kcyA9IHRoaXMuRE9NLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0Ly8gTW91c2UgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIG1haW4gZWxlbWVudCAodGhpcy5ET00uZWwpLlxuXHRcdGxldFx0cmVsbW91c2Vwb3MgPSB7IHggOiBtb3VzZXBvcy54IC0gYm91bmRzLmxlZnQgLSBkb2NTY3JvbGxzLmxlZnQsIHkgOiBtb3VzZXBvcy55IC0gYm91bmRzLnRvcCAtIGRvY1Njcm9sbHMudG9wIH07XG5cblx0XHQvLyBNb3ZlbWVudCBzZXR0aW5ncyBmb3IgdGhlIGFuaW1hdGFibGUgZWxlbWVudHMuXG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5ET00uYW5pbWF0YWJsZSkge1xuXHRcdFx0aWYoIHRoaXMuRE9NLmFuaW1hdGFibGVba2V5XSA9PSB1bmRlZmluZWQgfHwgdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0gPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGxldCB0ID0gdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0gIT0gdW5kZWZpbmVkID8gdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0udHJhbnNsYXRpb24gfHwge3g6MCx5OjAsejowfSA6IHt4OjAseTowLHo6MH07XG5cdFx0XHRsZXRcdHIgPSB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XSAhPSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yb3RhdGlvbiB8fCB7eDowLHk6MCx6OjB9IDoge3g6MCx5OjAsejowfTtcblxuXHRcdFx0dGhpcy5zZXRSYW5nZSh0KTtcblx0XHRcdHRoaXMuc2V0UmFuZ2Uocik7XG5cdFx0XHRcblx0XHRcdGxldCB0cmFuc2Zvcm1zID0ge1xuXHRcdFx0XHR0cmFuc2xhdGlvbiA6IHtcblx0XHRcdFx0XHR4OiAodC54WzFdLXQueFswXSkvYm91bmRzLndpZHRoKnJlbG1vdXNlcG9zLnggKyB0LnhbMF0sXG5cdFx0XHRcdFx0eTogKHQueVsxXS10LnlbMF0pL2JvdW5kcy5oZWlnaHQqcmVsbW91c2Vwb3MueSArIHQueVswXSxcblx0XHRcdFx0XHR6OiAodC56WzFdLXQuelswXSkvYm91bmRzLmhlaWdodCpyZWxtb3VzZXBvcy55ICsgdC56WzBdLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRyb3RhdGlvbiA6IHtcblx0XHRcdFx0XHR4OiAoci54WzFdLXIueFswXSkvYm91bmRzLmhlaWdodCpyZWxtb3VzZXBvcy55ICsgci54WzBdLFxuXHRcdFx0XHRcdHk6IChyLnlbMV0tci55WzBdKS9ib3VuZHMud2lkdGgqcmVsbW91c2Vwb3MueCArIHIueVswXSxcblx0XHRcdFx0XHR6OiAoci56WzFdLXIuelswXSkvYm91bmRzLndpZHRoKnJlbG1vdXNlcG9zLnggKyByLnpbMF1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5ET00uYW5pbWF0YWJsZVtrZXldLnN0eWxlLldlYmtpdFRyYW5zZm9ybSA9IHRoaXMuRE9NLmFuaW1hdGFibGVba2V5XS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgdHJhbnNmb3Jtcy50cmFuc2xhdGlvbi54ICsgJ3B4KSB0cmFuc2xhdGVZKCcgKyB0cmFuc2Zvcm1zLnRyYW5zbGF0aW9uLnkgKyAncHgpIHRyYW5zbGF0ZVooJyArIHRyYW5zZm9ybXMudHJhbnNsYXRpb24ueiArICdweCkgcm90YXRlWCgnICsgdHJhbnNmb3Jtcy5yb3RhdGlvbi54ICsgJ2RlZykgcm90YXRlWSgnICsgdHJhbnNmb3Jtcy5yb3RhdGlvbi55ICsgJ2RlZykgcm90YXRlWignICsgdHJhbnNmb3Jtcy5yb3RhdGlvbi56ICsgJ2RlZyknO1xuXHRcdH1cblx0fVxuXG5cdHNldFJhbmdlIChvYmopIHtcblx0XHRmb3IobGV0IGsgaW4gb2JqKSB7XG5cdFx0XHRpZiggb2JqW2tdID09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0b2JqW2tdID0gWzAsMF07XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmKCB0eXBlb2Ygb2JqW2tdID09PSAnbnVtYmVyJyApIHtcblx0XHRcdFx0b2JqW2tdID0gWy0xKm9ialtrXSxvYmpba11dO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbHRGeDsiXX0=
