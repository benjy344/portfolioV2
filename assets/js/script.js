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
			$current.css('display', 'block').delay(1000).addClass('visible');
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
			$wrapper.removeClass('open');
			App.$el.removeClass('overflow-hidden');
			$visible.removeClass('visible show-more').delay(1).css('display', 'none');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvYXBwLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvU2xpZGVyLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvVGlsdEZ4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLE1BQU07QUFHVCxLQUhTLGtCQUdGO0FBQ04sT0FBSyxHQUFMLEdBQW9CLEVBQUUsTUFBRixDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsYUFBZCxDQUFwQjtBQUNBLE9BQUssR0FBTCxHQUFrQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsV0FBZCxDQUFsQjtBQUNBLE9BQUssU0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsYUFBZCxDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsWUFBZCxDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsb0JBQWQsQ0FBcEI7QUFDQSxPQUFLLE1BQUwsR0FBb0IsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLFVBQWQsQ0FBcEI7QUFDQSxPQUFLLFdBQUwsR0FBb0IsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGlCQUFkLENBQXBCO0FBQ0EsT0FBSyxLQUFMLEdBQW9CLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxVQUFkLENBQXBCO0FBQ0EsT0FBSyxZQUFMLEdBQW9CLENBQ25CLEVBRG1CLEVBRW5CO0FBQ0MsYUFBVTtBQUNULGdCQUFhO0FBQ1osa0JBQWMsRUFBQyxHQUFHLEVBQUosRUFBUSxHQUFHLEVBQVgsRUFBZSxHQUFHLEVBQWxCLEVBREY7QUFFWixlQUFXLEVBQUMsR0FBRyxDQUFKLEVBQU8sR0FBRyxDQUFDLEVBQVgsRUFBZSxHQUFHLENBQWxC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QUFKLEVBQVcsSUFBSSxDQUFKLENBQVgsQ0FBVDtBQUNBO0FBQ0Q7QUFDRDs7Ozs7O2tCQUlhLE0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFNsaWRlciBmcm9tICcuL21vZHVsZXMvU2xpZGVyLmpzJztcbmltcG9ydCBUaWx0RnggZnJvbSAnLi9tb2R1bGVzL1RpbHRGeC5qcyc7XG5cbmxldCBBcHAgPSB7XG5cblx0XG5cdGluaXQoKSB7XG5cdFx0dGhpcy4kZWwgICAgICAgICAgPSAkKCdib2R5Jyk7XG5cdFx0dGhpcy4kbGlua1RvICAgICAgPSB0aGlzLiRlbC5maW5kKCcuanMtbGluay10bycpO1xuXHRcdHRoaXMubmF2IFx0ICAgICAgPSB0aGlzLiRlbC5maW5kKCcubWFpbi1uYXYnKTtcdFx0XG5cdFx0dGhpcy4kcHJldmlld3MgICAgPSB0aGlzLiRlbC5maW5kKCcuanMtcHJldmlldycpO1xuXHRcdHRoaXMuJHNsaWRlciAgICAgID0gdGhpcy4kZWwuZmluZCgnLmpzLXNsaWRlcicpO1xuXHRcdHRoaXMuJHNraWxscyAgICAgID0gdGhpcy4kZWwuZmluZCgnLmpzLXNraWxscy1jb250ZW50Jyk7XG5cdFx0dGhpcy4kYmFuZHMgICAgICAgPSB0aGlzLiRlbC5maW5kKCcuanMtYmFuZCcpO1xuXHRcdHRoaXMuJG9wZW5HYWxlcnkgID0gdGhpcy4kZWwuZmluZCgnLmpzLW9wZW4tZ2FsZXJ5Jyk7XG5cdFx0dGhpcy4kZm9ybSAgICAgICAgPSB0aGlzLiRlbC5maW5kKCcuanMtZm9ybScpO1xuXHRcdHRoaXMudGlsdFNldHRpbmdzID0gW1xuXHRcdFx0e30sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAxMCwgejogMzB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogLTEwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAyMDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRsaW5lcyA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAxMCwgejogWzAsNzBdfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IC0yfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAyMDAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IDJ9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG92ZXJsYXkgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogLTEwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IDJ9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwMCwgeTogMTAwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAyMDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdGltZ1dyYXBwZXIgOiB7XG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAtNSwgeTogMTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDkwMCwgZWFzaW5nIDogJ2Vhc2VPdXRDdWJpYyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMzAsIHk6IDMwLCB6OiBbMCw0MF19LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogWzAsMTVdLCB5OiAwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMjAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAxMCwgejogWzAsMjBdfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMDAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMDAsIHk6IDEwMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogOTAwLCBlYXNpbmcgOiAnZWFzZU91dEN1YmljJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IC01LCB5OiAxMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNTAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMjAsIHk6IDIwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAyMDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNSwgeTogLTUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogNn0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNTAsIHk6IDUwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA1MCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDAsIHk6IC04LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDMsIHk6IDMsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEyMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRsaW5lcyA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDE1LCB5OiAxNSwgejogWzAsMTVdfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMjAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDAsIHk6IDgsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDYwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogLTE1LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA5MDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDUwLCB5OiA1MCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0bGluZXMgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAtNSwgeTogNSwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxNSwgeTogMTUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogM30sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTUwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFbGFzdGljJywgZWxhc3RpY2l0eSA6IDcwMH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG92ZXJsYXkgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxNSwgeTogLTE1LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA1MDAsZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNTAsIHk6IDUwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA1MDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdGltZ1dyYXBwZXIgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1LCB5OiA1LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA4MDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhcnQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAxMCwgejogWzAsNTBdfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMDAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YXJ0J31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNTAsIHk6IDUwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA4MDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhcnQnfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRsaW5lcyA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDQwLCB5OiA0MCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTUwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFbGFzdGljJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAyMCwgeTogMjAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogLTV9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEwMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogLTMwLCB5OiAtMzAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogM30sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNzUwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMDAsIHk6IDEwMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNzUwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fV07XG5cblx0XHR0aGlzLlVzZXJTZWUgICA9IHRydWU7XG5cdFx0dGhpcy5za2lsbHNPbiAgPSBmYWxzZTtcblxuXHRcdHRoaXMuc3IgXHQgICA9IFNjcm9sbFJldmVhbCh7IHJlc2V0OiBmYWxzZSB9KTtcblxuXHRcdC8vaW5pdCBTbGlkZXIgXG5cdFx0aWYgKHRoaXMuJHNsaWRlci5sZW5ndGgpIHtcblx0XHRcdHRoaXMuYXV0b3BsYXkgPSBuZXcgU2xpZGVyO1xuXHRcdFx0dGhpcy5hdXRvcGxheS5pbml0KHRoaXMuJHNsaWRlcik7XG5cdFx0fVxuXHRcdHRoaXMudmlld0lzQWN0aXZlKCk7IFx0XG5cblx0XHQvLyBsaW5rVG8gZnVuY3Rpb24gaWYgbGlua3MgZXhpc3QgXG5cdFx0aWYgKHRoaXMuJGxpbmtUby5sZW5ndGgpIHRoaXMubGlua1RvKCk7XG5cblx0XHQvLyBzY3JvbGwgZm9yIHRvcCBtZW51IG5hdiBcblx0XHR0aGlzLnNjcm9sbCgpO1xuXG5cdFx0Ly8gZnVuY3Rpb24gcmV2YWwgXG5cdFx0dGhpcy5yZXZhbCgpO1x0XG5cblx0XHQvL29wZW4gZ2FsZXJ5IFxuXHRcdHRoaXMuJG9wZW5HYWxlcnkub24oJ2NsaWNrJywgdGhpcy5vcGVuR2FsZXJ5KVxuXG5cdFx0Ly9wcmVsb2FkIGltZyBcblx0XHRpZiAodGhpcy4kcHJldmlld3MubGVuZ3RoKSB0aGlzLnByZWxvYWQoKTtcdFxuXG5cdFx0Ly9wcmVsb2FkIGltZyBwcmV2aWV3IFxuXHRcdHRoaXMuaW5pdFBvcnRmb2xpb1ByZXZpZXcoKTtcblxuXHRcdC8vaW5pdCBmb3JtIFxuXHRcdGlmICh0aGlzLiRmb3JtLmxlbmd0aCkgdGhpcy5pbml0Rm9ybSgpO1xuXHRcdFxuXHR9LFxuXG5cdHZpZXdJc0FjdGl2ZSgpIHtcblx0XHR3aW5kb3cub25mb2N1cyA9ICgpID0+IHtcblx0XHQgICAgdGhpcy5Vc2VyU2VlID0gdHJ1ZTtcblx0XHQgIH07XG5cblx0XHR3aW5kb3cub25ibHVyID0gKCkgPT4ge1xuXHRcdCAgICB0aGlzLlVzZXJTZWUgPSBmYWxzZTtcblx0XHQgIH07XG5cdFx0c2V0SW50ZXJ2YWwoICgpID0+IHtcblx0XHQgICAgaWYgKCF0aGlzLlVzZXJTZWUpIHRoaXMuYXV0b3BsYXkuc3RvcCgpO1xuXHRcdH0sIDEwMDApO1xuXHR9LFxuXG5cdGxpbmtUbygpIHtcblx0XHR0aGlzLiRsaW5rVG8ub24oJ2NsaWNrIHRvdWNoJywgKGUpID0+IHtcblx0XHRcdGxldCB0YXJnZXQgICA9ICQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCdocmVmJyk7XG5cdFx0XHRsZXQgJHNlY3Rpb24gPSB0aGlzLiRlbC5maW5kKHRhcmdldCk7XG5cdFx0XHQkKCdib2R5LCBodG1sJykuYW5pbWF0ZSh7XG5cdFx0ICAgICAgICBzY3JvbGxUb3A6ICRzZWN0aW9uLm9mZnNldCgpLnRvcFxuXHRcdCAgICB9LCAxMDAwKTtcblx0XHR9KVxuXHR9LCBcblxuXHRpc1Zpc2libGUoZWxlbWVudCkge1xuXHRcdGxldCAkZWxlbWVudCAgICAgICAgPSAkKGVsZW1lbnQpO1xuXHRcdGxldCB0b3BFbGVtZW50IFx0ICAgID0gJGVsZW1lbnQub2Zmc2V0KCkudG9wO1xuXHRcdGxldCBib3R0b21FbGVtZW50IFx0PSAoJGVsZW1lbnQub2Zmc2V0KCkudG9wICsgJGVsZW1lbnQuaGVpZ2h0KCkgKSA7XG5cdFx0bGV0IHNjcm9sbHRvcCBcdCAgICA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblx0XHRsZXQgc2Nyb2xsQm90dG9tIFx0PSBzY3JvbGx0b3AgKyAkKHdpbmRvdykuaGVpZ2h0KCk7XG5cdFx0bGV0IGlzVmlzaWJsZSAgICAgICA9IGZhbHNlO1xuXG5cdFx0aWYgKCB0b3BFbGVtZW50ID4gc2Nyb2xsdG9wICYmIGJvdHRvbUVsZW1lbnQgPCBzY3JvbGxCb3R0b20gKSB7XG5cdFx0XHRpc1Zpc2libGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpc1Zpc2libGUgPSBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIGlzVmlzaWJsZSA7XG5cdH0sXG5cblx0b3BlbkdhbGVyeShlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCAkd3JhcHBlciAgID0gQXBwLiRlbC5maW5kKCcuanMtZ2FsbGVyeS13cmFwcGVyJyk7XG5cdFx0bGV0IHRhcmdldCAgICAgPSAkKGUudGFyZ2V0KS5hdHRyKCdocmVmJyk7XG5cdFx0bGV0ICRjdXJyZW50ICAgPSAkd3JhcHBlci5maW5kKHRhcmdldCk7XG5cdFx0bGV0ICRjbG9zZSAgICAgPSAkd3JhcHBlci5maW5kKCcuanMtY2xvc2UtZ2FsZXJ5Jyk7XG5cdFx0XG5cdFx0aWYoJGN1cnJlbnQubGVuZ3RoKSB7XG5cdFx0XHQkd3JhcHBlci5hZGRDbGFzcygnb3BlbicpO1xuXHRcdFx0QXBwLiRlbC5hZGRDbGFzcygnb3ZlcmZsb3ctaGlkZGVuJyk7XG5cdFx0XHQkY3VycmVudC5jc3MoICdkaXNwbGF5JywgJ2Jsb2NrJyApLmRlbGF5KCAxMDAwICkuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcblx0XHRcdCRjdXJyZW50LmZpbmQoJy5qcy1yZWFkLW1vcmUnKS5vbignY2xpY2sgdG91Y2gnLCAoZSk9PiB7XG5cdFx0XHRcdCRjdXJyZW50LmFkZENsYXNzKCdzaG93LW1vcmUnKTtcblx0XHRcdH0pXG5cdFx0XHQkY2xvc2Uub24oJ2NsaWNrIHRvdWNoJywgQXBwLmNsb3NlR2FsZXJ5KVxuXHRcdH1cblx0fSxcblxuXHRjbG9zZUdhbGVyeSgpIHtcblx0XHRsZXQgJHdyYXBwZXIgICA9IEFwcC4kZWwuZmluZCgnLmpzLWdhbGxlcnktd3JhcHBlcicpO1x0XHRcblx0XHRsZXQgJHZpc2libGUgICA9ICR3cmFwcGVyLmZpbmQoJy52aXNpYmxlJyk7XG5cdFx0XG5cdFx0aWYoJHZpc2libGUubGVuZ3RoKSB7XG5cdFx0XHQkd3JhcHBlci5yZW1vdmVDbGFzcygnb3BlbicpO1xuXHRcdFx0QXBwLiRlbC5yZW1vdmVDbGFzcygnb3ZlcmZsb3ctaGlkZGVuJyk7XG5cdFx0XHQkdmlzaWJsZS5yZW1vdmVDbGFzcygndmlzaWJsZSBzaG93LW1vcmUnKS5kZWxheSggMSApLmNzcyggJ2Rpc3BsYXknLCAnbm9uZScgKTtcblx0XHR9XG5cdH0sXG5cblx0c2Nyb2xsKCkge1xuXHRcdGxldCBzdGVwMSA9IHRoaXMuJGVsLmZpbmQoJyNhYm91dCcpLm9mZnNldCgpLnRvcDtcblx0XHQkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPj0gc3RlcDEtMTAwID8gdGhpcy5uYXYuYWRkQ2xhc3MoJ2ZpeHknKSA6IHRoaXMubmF2LnJlbW92ZUNsYXNzKCdmaXh5Jyk7XG5cdFx0JCh3aW5kb3cpLnNjcm9sbFRvcCgpID49IHN0ZXAxID8gdGhpcy5uYXYuYWRkQ2xhc3MoJ2FjdGl2ZScpIDogdGhpcy5uYXYucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCAoKSA9PiB7XG5cdFx0XHRsZXQgY3VycmVudFNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuXHRcdFx0Y3VycmVudFNjcm9sbCA+PSA4MCA/IHRoaXMubmF2LmNzcygndG9wJywgJy02MXB4JykgOiB0aGlzLm5hdi5jc3MoJ3RvcCcsICcwcHgnKTtcblx0XHRcdGN1cnJlbnRTY3JvbGwgPj0gc3RlcDEtMTAwID8gdGhpcy5uYXYuYWRkQ2xhc3MoJ2ZpeHknKSA6IHRoaXMubmF2LnJlbW92ZUNsYXNzKCdmaXh5Jyk7XG5cdFx0XHRjdXJyZW50U2Nyb2xsID49IHN0ZXAxID8gdGhpcy5uYXYuYWRkQ2xhc3MoJ2FjdGl2ZScpIDogdGhpcy5uYXYucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0XHQvL2luaXQgc2xpZGVyIFx0XHRcblx0XHRcdGlmICh0aGlzLiRzbGlkZXIubGVuZ3RoKSB7XHRcdFx0XHRcblx0XHRcdFx0aWYgKHRoaXMuaXNWaXNpYmxlKHRoaXMuJHNsaWRlcikpIHtcblx0XHRcdFx0XHR0aGlzLmF1dG9wbGF5LnBsYXkoKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuYXV0b3BsYXkuc3RvcCgpXG5cdFx0XHRcdH1cblx0XHRcdH0gXG5cblx0XHRcdGlmICh0aGlzLiRza2lsbHMubGVuZ3RoKSB7XHRcdFx0XHRcblx0XHRcdFx0aWYgKHRoaXMuaXNWaXNpYmxlKHRoaXMuJHNraWxsc1swXSkpIHtcdFxuXHRcdFx0XHRcdHRoaXMuc2hvd1NraWxscygpO1x0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuJGJhbmRzLmxlbmd0aCkge1x0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0dGhpcy5zaG93QmFuZHMoKTtcdFx0XHRcdFxuXHRcdFx0fSAgXG5cdFx0fSk7IFxuXHRcblx0fSxcblxuXHRyZXZhbCgpIHtcblx0XHQvL2xlZnQgdG8gcmlnaHRcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLWxlZnQnLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdsZWZ0Jywgc2NhbGU6IDEsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtbGVmdC1kZWxheScsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2xlZnQnLCBzY2FsZTogMSwgZGVsYXk6IDUwMCwgZHVyYXRpb246NTAwfSk7XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1sZWZ0LWxvbmctZGVsYXknLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdsZWZ0Jywgc2NhbGU6IDEsIGRlbGF5OiAxNTAwLCBkdXJhdGlvbjo1MDB9KTtcblx0XHQvL3JpZ2h0IHRvIGxlZnRcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXJpZ2h0JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAncmlnaHQnLCBzY2FsZTogMSwgZHVyYXRpb246NTAwfSk7XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1yaWdodC1kZWxheScsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ3JpZ2h0Jywgc2NhbGU6IDEsIGRlbGF5OiA1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtcmlnaHQtbG9uZy1kZWxheScsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ3JpZ2h0Jywgc2NhbGU6IDEsIGRlbGF5OiAxNTAwLCBkdXJhdGlvbjo1MDB9KTtcblx0XHQvL2JvdHRvbSB0byB0b3AgXG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC10b3AnLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdib3R0b20nLCBzY2FsZTogMSwgZHVyYXRpb246NTAwfSk7XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC10b3AtZGVsYXknLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdib3R0b20nLCBzY2FsZTogMSwgZGVsYXk6IDUwMCwgZHVyYXRpb246NTAwfSk7XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC10b3AtbG9uZy1kZWxheScsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2JvdHRvbScsIHNjYWxlOiAxLCBkZWxheTogMTUwMCwgZHVyYXRpb246NTAwfSk7XG5cblx0fSxcblxuXHRzaG93U2tpbGxzKCkge1xuXG5cdFx0aWYoIXRoaXMuc2tpbGxzT24pIHtcblx0XHRcdGxldCAkc2tpbGxzID0gdGhpcy4kZWwuZmluZCgnLmpzLXBlcmNlbnQnKTtcblx0XHRcdCRza2lsbHMuZWFjaCggKGluZGV4LCBjdXJyZW50KSA9PiB7XG5cdFx0XHRcdGxldCBfcGVyY2VudCA9ICQoY3VycmVudCkuYXR0cignZGF0YS1wZXJjZW50JykrJyUnO1xuXHRcdFx0XHQkKGN1cnJlbnQpLmNzcygnd2lkdGgnLCBfcGVyY2VudCk7XG5cdFx0XHR9IClcblx0XHR9XG5cdH0sXG5cblx0c2hvd0JhbmRzKCkge1xuXHRcdHRoaXMuJGJhbmRzLmVhY2goIChpLCBjdXJyZW50KSA9PiB7XG5cdFx0XHRsZXQgX2JhbmQgPSAkKGN1cnJlbnQpO1xuXG5cdFx0XHRpZih0aGlzLmlzVmlzaWJsZShjdXJyZW50KSkge1xuXHRcdFx0XHRfYmFuZC5oYXNDbGFzcygnanMtYmFuZC1yaWdodCcpID8gX2JhbmQuY3NzKCdyaWdodCcsIDApIDogX2JhbmQuY3NzKCdsZWZ0JywgMCk7XG5cdFx0XHRcdGlmKF9iYW5kLmhhc0NsYXNzKCdqcy1sYXN0LWJhbmQnKSkgdGhpcy4kZm9ybS5hZGRDbGFzcygndmlzaWJsZScpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cblx0cHJlbG9hZCgpIHtcblx0XHR0aGlzLiRwcmV2aWV3cy5lYWNoKChpZHgsIGNvbnRhaW5lcikgPT4ge1xuXHRcdFx0bGV0ICRjb250YWluZXIgPSAkKGNvbnRhaW5lcik7XG5cdFx0XHRsZXQgX3VybCAgICAgICA9ICRjb250YWluZXIuZGF0YSgnaW1hZ2UtdXJsJyk7XG5cdFx0XHRsZXQgaW1nICAgICAgICA9IG5ldyBJbWFnZSgpO1xuXG5cdFx0XHRpbWcuc3JjICAgICAgICA9IF91cmw7XG5cblx0ICAgICAgICAvLyBpZiB3ZSBoYXZlIHRoaXMgaW1hZ2UgYWxyZWFkeSBjYWNoZWQsIHdlIGRvbid0IGhhdmVcblx0ICAgICAgICAvLyB0byB3YWl0IGZvciB0aGUgb25sb2FkIGNhbGxiYWNrIGFuZCBjYW4gcmVtb3ZlIHRoZVxuXHQgICAgICAgIC8vIHByZXZpZXcgaW1hZ2UgaW1tZWRpYXRlbHlcblx0ICAgICAgICBpZih0aGlzLmltZ0NvbXBsZXRlKGltZykpIHtcblx0ICAgICAgICBcdHRoaXMucmVtb3ZlUHJldmlldygkY29udGFpbmVyLCBfdXJsKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIFx0aW1nLm9ubG9hZCA9ICgpID0+IHtcblx0ICAgICAgICBcdFx0dGhpcy5yZW1vdmVQcmV2aWV3KCRjb250YWluZXIsIF91cmwpO1xuXHQgICAgICAgIFx0fTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblx0fSxcblxuXHRpbWdDb21wbGV0ZShpbWcpIHtcbiAgICAgICAgcmV0dXJuIGltZy5jb21wbGV0ZSB8fCBpbWcud2lkdGggKyBpbWcuaGVpZ2h0ID4gMDtcbiAgICB9LFxuICBcbiAgICByZW1vdmVQcmV2aWV3KCRjb250YWluZXIsIHVybCkge1xuICAgICAgICAkY29udGFpbmVyLmNzcyh7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKFwiJyArIHVybCArICdcIiknfSk7XG4gICAgICAgICRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2pzLXByZXZpZXcgcHJldmlldycpO1xuICAgIH0sXG5cbiAgICBpbml0UG9ydGZvbGlvUHJldmlldygpIHtcblx0XHRsZXQgaWR4ID0gMDtcblx0XHRbXS5zbGljZS5jYWxsKCQoJ2EudGlsdGVyJykpLmZvckVhY2goKGVsLCBwb3MpID0+IHsgXG5cdFx0XHRpZHggPSBwb3MlMiA9PT0gMCA/IGlkeCsxIDogaWR4O1xuXHRcdFx0bGV0IF9UaWx0RnggPSBuZXcgVGlsdEZ4O1xuXHRcdFx0X1RpbHRGeC5pbml0KGVsLCBBcHAudGlsdFNldHRpbmdzW2lkeC0xXSk7XG5cdFx0fSk7XG5cblx0XHRsZXQgcGF0ZXIgICAgPSB0aGlzLiRlbC5maW5kKCcucGF0ZXInKTtcblx0XHRsZXRcdHBhdGVyU1ZHID0gcGF0ZXIuZmluZCgnLnBhdGVyX19zdmcnKTtcblx0XHRsZXRcdHBhdGhFbCAgID0gcGF0ZXJTVkcuZmluZCgncGF0aCcpO1xuXHRcdGxldFx0cGF0aHMgICAgPSB7ZGVmYXVsdDogcGF0aEVsLmF0dHIoJ2QnKSwgYWN0aXZlOiBwYXRlclNWRy5hdHRyKCdkYXRhLXBhdGgtaG92ZXInKX07XG5cblx0XHRwYXRlci5vbignbW91c2VlbnRlcicsICgpID0+IHtcblx0XHRcdGFuaW1lLnJlbW92ZShwYXRoRWwpO1xuXHRcdFx0YW5pbWUoe1xuXHRcdFx0XHR0YXJnZXRzOiBwYXRoRWwsXG5cdFx0XHRcdGQ6IHBhdGhzLmFjdGl2ZSxcblx0XHRcdFx0ZHVyYXRpb246IDQwMCxcblx0XHRcdFx0ZWFzaW5nOiAnZWFzZU91dFF1YWQnXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHBhdGVyLm9uKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuXHRcdFx0YW5pbWUucmVtb3ZlKHBhdGhFbCk7XG5cdFx0XHRhbmltZSh7XG5cdFx0XHRcdHRhcmdldHM6IHBhdGhFbCxcblx0XHRcdFx0ZDogcGF0aHMuZGVmYXVsdCxcblx0XHRcdFx0ZHVyYXRpb246IDQwMCxcblx0XHRcdFx0ZWFzaW5nOiAnZWFzZU91dEV4cG8nXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSxcblxuXHRpbml0Rm9ybSgpIHtcblxuXHRcdGxldCAkZm9ybSA9IHRoaXMuJGZvcm07IFxuXHRcdGxldCBjaGVja0Zvcm0gPSBbIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xuXG5cdFx0JGZvcm0uZmluZCgndGV4dGFyZWEnKS5ibHVyKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdibHVyJylcblx0XHQgICAgJGZvcm0uZmluZCgndGV4dGFyZWEnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQgICAgXHRjb25zb2xlLmxvZygndmFsdWUnLCB0aGlzLnZhbHVlID09PSAnJylcblx0XHQgICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XG5cdFx0ICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKFwiXlthLXpBLVrDgC3DusOALcO/MC05JOKCrC4gXSskXCIpO1xuXG5cdFx0ICAgICAgICBpZiAocmVnZXgudGVzdCh0aGlzLnZhbHVlKSApIHtcblx0XHQgICAgICAgIFx0Y29uc29sZS5sb2coJ3JlZ2V4Jyk7XG5cdFx0ICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgICAgICAkKCcubXNnLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3RyYW5zcGFyZW50J30pO1xuXHRcdCAgICAgICAgICBcdCQoJy5tc2ctYm94IC5qcy1jaGVjaycpLmNzcyh7J29wYWNpdHknOiAxfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm1zZy1ib3ggLmpzLWVycm9yJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMF0gPSB0cnVlO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAgZWxzZSBpZiAodGhpcy52YWx1ZSA9PT0gJycpIHtcblx0XHQgICAgICAgIFx0Y29uc29sZS5sb2coJ2NvdWN1bycpXG5cdFx0ICAgICAgICAgIFx0JHRoaXMucmVtb3ZlQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgICAgXHQkKCcubXNnLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3doaXRlJ30pO1xuXHRcdCAgICAgICAgICBcdCQoJy5tc2ctYm94IGlucHV0ICsgbGFiZWwgKyBzcGFuJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHQkKCcubXNnLWJveCAuanMtY2hlY2snKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdCQoJy5tc2ctYm94IC5qcy1lcnJvcicpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0Y2hlY2tGb3JtWzBdID0gZmFsc2U7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICBlbHNlIHtcblx0XHQgICAgICAgIFx0JHRoaXMuYWRkQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgIFx0JCgnLm1zZy1ib3ggbGFiZWwnKS5jc3Moeydjb2xvcic6ICd0cmFuc3BhcmVudCd9KTtcblx0XHQgICAgICAgIFx0JCgnLm1zZy1ib3ggLmpzLWNoZWNrJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHQkKCcubXNnLWJveCAuanMtZXJyb3InKS5jc3MoeydvcGFjaXR5JzogMX0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVswXSA9IGZhbHNlO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICB9KTtcblx0XHR9KTtcblxuXHRcdCRmb3JtLmZpbmQoJy5uYW1lLWJveCBpbnB1dCcpLmJsdXIoZnVuY3Rpb24gKCkge1xuXG5cdFx0ICAgICRmb3JtLmZpbmQoJy5uYW1lLWJveCBpbnB1dCcpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcblx0XHQgICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoXCJeW2EtekEtWsOALcO6w4Atw78gXSokXCIpO1xuXG5cdFx0ICAgICAgICBpZiAocmVnZXgudGVzdCh0aGlzLnZhbHVlKSApIHtcblx0XHQgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgICAgICQoJy5uYW1lLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3RyYW5zcGFyZW50J30pO1xuXHRcdCAgICAgICAgICBcdCQoJy5uYW1lLWJveCAuanMtY2hlY2snKS5jc3MoeydvcGFjaXR5JzogMX0pO1xuXHRcdCAgICAgICAgICBcdCQoJy5uYW1lLWJveCAuanMtZXJyb3InKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVsxXSA9IHRydWU7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICBlbHNlIGlmICh0aGlzLnZhbHVlID09PSAnJykge1xuXHRcdCAgICAgICAgICBcdCR0aGlzLnJlbW92ZUNsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm5hbWUtYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAnd2hpdGUnfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm5hbWUtYm94IGlucHV0ICsgbGFiZWwgKyBzcGFuJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMV0gPSBmYWxzZTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICAgIGVsc2Uge1xuXHRcdCAgICAgICAgXHQkdGhpcy5hZGRDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgXHQkKCcubmFtZS1ib3ggbGFiZWwnKS5jc3Moeydjb2xvcic6ICd0cmFuc3BhcmVudCd9KTtcblx0XHQgICAgICAgIFx0JCgnLm5hbWUtYm94IC5qcy1jaGVjaycpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm5hbWUtYm94IC5qcy1lcnJvcicpLmNzcyh7J29wYWNpdHknOiAxfSk7XG5cdFx0ICAgICAgICAgIFx0Y2hlY2tGb3JtWzFdID0gZmFsc2U7XG5cdFx0ICAgICAgICB9XG5cblx0XHQgICAgfSk7XG5cblx0XHR9KTtcblxuXHRcdCRmb3JtLmZpbmQoJy5lbWFpbC1ib3ggaW5wdXQnKS5ibHVyKGZ1bmN0aW9uICgpIHtcblx0XHQgICAgJGZvcm0uZmluZCgnLmVtYWlsLWJveCBpbnB1dCcpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcblx0XHQgICAgICAgIGxldCByZWdleCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXG5cdFx0ICAgICAgICBpZiAocmVnZXgudGVzdCh0aGlzLnZhbHVlKSApIHtcblx0XHQgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgICAgICQoJy5lbWFpbC1ib3ggbGFiZWwnKS5jc3Moeydjb2xvcic6ICd0cmFuc3BhcmVudCd9KTtcblx0XHQgICAgICAgICAgXHQkKCcuZW1haWwtYm94IC5qcy1jaGVjaycpLmNzcyh7J29wYWNpdHknOiAxfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLmVtYWlsLWJveCAuanMtZXJyb3InKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVsyXSA9IHRydWU7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICBlbHNlIGlmICh0aGlzLnZhbHVlID09PSAnJykge1xuXHRcdCAgICAgICAgICBcdCR0aGlzLnJlbW92ZUNsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICAgIFx0JCgnLmVtYWlsLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3doaXRlJ30pO1xuXHRcdCAgICAgICAgICBcdCQoJy5lbWFpbC1ib3ggaW5wdXQgKyBsYWJlbCArIHNwYW4nKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVsyXSA9IGZhbHNlO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAgZWxzZSB7XG5cdFx0ICAgICAgICBcdCR0aGlzLmFkZENsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICBcdCQoJy5lbWFpbC1ib3ggbGFiZWwnKS5jc3Moeydjb2xvcic6ICd0cmFuc3BhcmVudCd9KTtcblx0XHQgICAgICAgIFx0JCgnLmVtYWlsLWJveCAuanMtY2hlY2snKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdCQoJy5lbWFpbC1ib3ggLmpzLWVycm9yJykuY3NzKHsnb3BhY2l0eSc6IDF9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMl0gPSBmYWxzZTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgfSk7XG5cdFx0fSk7XG5cblx0XHQkZm9ybS5vbignc3VibWl0JywgKGUpID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGxldCAkZXJyb3JNc2cgICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1lcnJvci1tZXNzYWdlJyk7XG5cdFx0XHRsZXQgJHN1Y2Nlc3NNc2cgPSB0aGlzLiRlbC5maW5kKCcuanMtc3VjY2Vzcy1tZXNzYWdlJyk7XG5cdFx0XHRsZXQgY2hlY2sgICAgICAgPSAwOyBcblxuXHRcdFx0Y2hlY2tGb3JtLmZvckVhY2goIChlbGVtZW50LCBpbmRleCkgPT4ge1x0XHRcdFx0XG5cdFx0XHRcdGlmKGVsZW1lbnQpIGNoZWNrKys7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKCBjaGVjayA9PT0gMyApIHtcblx0XHRcdFx0Ly9jYW4gc2VuZCBmb3JtXG5cblx0XHRcdFx0bGV0IHMgPSAkZm9ybS5zZXJpYWxpemUoKTtcblxuXHRcdFx0XHQkLmFqYXgoe1xuXHQgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG5cdCAgICAgICAgICAgICAgICB1cmw6IFwiLi4vbWFpbC5waHBcIixcblx0ICAgICAgICAgICAgICAgIGRhdGE6IHMsXG5cdCAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuXHQgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5wcmVwZW5kKCc8ZGl2IHN0eWxlPVwicG9zaXRpb246Zml4ZWQ7IHRvcDo1MCU7IHotaW5kZXg6MjAwMDtcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5Wb3RyZSBlbWFpbCDDoCBiaWVuIMOpdMOpIHRyYW5zbWlzICE8L2Rpdj4nKVxuXHQgICAgICAgICAgICAgICAgICAgIC5oaWRlKClcblx0ICAgICAgICAgICAgICAgICAgICAuZmFkZUluKDE1MDApOyAgICAgICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcblx0ICAgICAgICAgICAgICAgICAgXHQkKCdib2R5JykucHJlcGVuZCgnPGRpdiBzdHlsZT1cInBvc2l0aW9uOmZpeGVkOyB0b3A6NTAlOyB6LWluZGV4OjIwMDA7XCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5MXFwnZW52b2kgZHUgbWFpbCBhIMOpY2hvdcOpLCB2ZXVpbGxleiByw6llc3NheWVyIFNWUDwvZGl2PicpXG5cdCAgICAgICAgICAgICAgICAgICAgLmhpZGUoKVxuXHQgICAgICAgICAgICAgICAgICAgIC5mYWRlSW4oMTUwMCk7XG5cdCAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICBcdH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2coY2hlY2spXG5cdFx0fSlcblx0fVxuXG59XG5cbiQod2luZG93KS5yZWFkeShBcHAuaW5pdC5iaW5kKEFwcCkpOyIsImNsYXNzIFNsaWRlciB7IFxuXG5cdGluaXQoZWwpIHtcblx0XHR0aGlzLiRlbCAgICAgICAgICA9ICQoZWwpO1xuXHRcdHRoaXMuJGNvbnRhaW5lciAgID0gdGhpcy4kZWwuZmluZCgndWwnKTtcblx0XHR0aGlzLiRzbGlkZXJzICAgICA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCdsaScpO1xuXHRcdHRoaXMubm9tYmVyU2xpZGUgID0gdGhpcy4kc2xpZGVycy5sZW5ndGg7XG5cdFx0dGhpcy53aWR0aCAgICAgICAgPSAzMDA7XG5cdFx0dGhpcy5sZWZ0ICAgICAgICAgPSAtdGhpcy53aWR0aDtcblx0XHR0aGlzLmR1cmF0aW9uIFx0ICA9IDM1MDA7XG5cdFx0dGhpcy5jdXJyZW50SW5kZXggPSAxO1xuXHRcdHRoaXMuaXNQbGF5aW5nICAgID0gZmFsc2U7XG5cdFx0XG5cblx0XHR0aGlzLiRjb250YWluZXIuY3NzKCd3aWR0aCcsIHRoaXMubm9tYmVyU2xpZGUqdGhpcy53aWR0aCsncHgnKTtcblx0XHQkKHRoaXMuJHNsaWRlcnNbMF0pLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXHRcdHRoaXMuJGVsLmhvdmVyKCgpID0+IHsgdGhpcy5zdG9wKCkgfSwgKCkgPT4geyB0aGlzLnBsYXkoKSB9ICk7XHRcdFxuXG5cdH1cblxuXHRzbGlkZXIoKSB7XG5cdFx0dGhpcy4kY29udGFpbmVyLmFuaW1hdGUoe1xuXHRcdFx0XHRcdGxlZnQgOiB0aGlzLmxlZnQrJ3B4J1xuXHRcdFx0XHR9LCAyMDAsICgpID0+IHtcblx0XHRcdFx0XHQkKHRoaXMuJHNsaWRlcnMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkKHRoaXMuJHNsaWRlcnNbdGhpcy5jdXJyZW50SW5kZXhdKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0aWYgKHRoaXMubGVmdCA+ICh0aGlzLm5vbWJlclNsaWRlLTEpKi0odGhpcy53aWR0aCkpIHtcblx0XHRcdFx0XHRcdHRoaXMubGVmdCA9IHRoaXMubGVmdC10aGlzLndpZHRoO1xuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SW5kZXgrKztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5sZWZ0ID0gMDtcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEluZGV4ID0gMDtcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxuXHRcdFx0XHR9KTtcblx0fVxuXG5cdHBsYXkoKSB7XG5cdFx0XG5cdFx0aWYgKCF0aGlzLmlzUGxheWluZykge1xuXHRcdFx0dGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMuc2xpZGVyLmJpbmQodGhpcyksIHRoaXMuZHVyYXRpb24pO1xuXHRcdFx0dGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuXHRcdH1cblx0XHRcblx0fVxuXG5cdHN0b3AoKSB7XG5cdFx0aWYgKHRoaXMuaXNQbGF5aW5nKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuXHRcdFx0dGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7IiwiY2xhc3MgVGlsdEZ4IHtcblxuXHQvLyBIZWxwZXIgdmFycyBhbmQgZnVuY3Rpb25zLlxuXHRleHRlbmQoIGEsIGIgKSB7XG5cdFx0Zm9yKCBsZXQga2V5IGluIGIgKSB7IFxuXHRcdFx0aWYoIGIuaGFzT3duUHJvcGVydHkoIGtleSApICkge1xuXHRcdFx0XHRhW2tleV0gPSBiW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBhO1xuXHR9XG5cblx0Z2V0TW91c2VQb3MoZSkge1xuXHRcdGxldCBwb3N4ID0gMDtcblx0XHRsZXQgcG9zeSA9IDA7XG5cblx0XHRpZiAoIWUpIHtsZXQgZSA9IHdpbmRvdy5ldmVudH1cblx0XHRpZiAoZS5wYWdlWCB8fCBlLnBhZ2VZKSBcdHtcblx0XHRcdHBvc3ggPSBlLnBhZ2VYO1xuXHRcdFx0cG9zeSA9IGUucGFnZVk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGUuY2xpZW50WCB8fCBlLmNsaWVudFkpIFx0e1xuXHRcdFx0cG9zeCA9IGUuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuXHRcdFx0cG9zeSA9IGUuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0XHR9XG5cdFx0cmV0dXJuIHsgeCA6IHBvc3gsIHkgOiBwb3N5IH1cblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0LlxuXHQgKi9cblx0aW5pdChlbCwgb3B0aW9ucykge1xuXHRcdHRoaXMuRE9NICAgICAgICAgICAgICAgICAgICAgICA9IHt9O1xuXHRcdHRoaXMuRE9NLmVsICAgICAgICAgICAgICAgICAgICA9IGVsO1xuXHRcdHRoaXMub3B0aW9ucyAgICAgICAgICAgICAgICAgICA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZ1dyYXBwZXIgOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMCwgeTogMCwgejogMH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogLTUsIHk6IDUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDEyMDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgOiAnZWFzZU91dEVsYXN0aWMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxhc3RpY2l0eSA6IDYwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZXMgOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IDEwLCB6OiBbMCwxMF19LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDEwMDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgOiAnZWFzZU91dEV4cG8nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxhc3RpY2l0eSA6IDYwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAyMCwgeTogMjAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDE1MDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgOiAnZWFzZU91dEVsYXN0aWMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxhc3RpY2l0eSA6IDYwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lypcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogMTAsIHo6IFswLDUwXX0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogNTAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNTAsIHk6IDUwLCB6OiAwfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb24gOiAxMjAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWFzaW5nIDogJ2Vhc2VPdXRFbGFzdGljJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsYXN0aWNpdHk6IDYwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0dGhpcy5leHRlbmQodGhpcy5vcHRpb25zLCBvcHRpb25zKTtcdFx0XG5cdFx0dGhpcy5ET00uYW5pbWF0YWJsZSAgICAgICAgICAgID0ge307XG5cdFx0dGhpcy5ET00uYW5pbWF0YWJsZS5pbWdXcmFwcGVyID0gdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLnRpbHRlcl9fZmlndXJlJyk7XG5cdFx0dGhpcy5ET00uYW5pbWF0YWJsZS5saW5lcyAgICAgID0gdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLnRpbHRlcl9fZGVjby0tbGluZXMnKTtcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlLmNhcHRpb24gICAgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcudGlsdGVyX19jYXB0aW9uJyk7XG5cdFx0dGhpcy5ET00uYW5pbWF0YWJsZS5vdmVybGF5ICAgID0gdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLnRpbHRlcl9fZGVjby0tb3ZlcmxheScpO1xuXHRcdHRoaXMuRE9NLmFuaW1hdGFibGUuc2hpbmUgICAgICA9IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoJy50aWx0ZXJfX2RlY28tLXNoaW5lID4gZGl2Jyk7XG5cdFx0dGhpcy5pbml0RXZlbnRzKCk7XG5cdH1cblxuXHRpbml0RXZlbnRzKCkge1x0XHRcblxuXHRcdCQodGhpcy5ET00uZWwpLm9uKCdtb3VzZW1vdmUnLCAgKGUpID0+IHt0aGlzLm1vdXNlbW92ZUZuKGUpfSk7XG5cdFx0JCh0aGlzLkRPTS5lbCkub24oJ21vdXNlbGVhdmUnLCAoZSkgPT4ge3RoaXMubW91c2VsZWF2ZUZuKGUpfSk7XG5cdFx0JCh0aGlzLkRPTS5lbCkub24oJ21vdXNlZW50ZXInLCAoICkgPT4ge3RoaXMubW91c2VlbnRlckZuKCl9KTtcblx0fVxuXG5cdG1vdXNlbW92ZUZuKGV2KSB7XHRcdFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7IHRoaXMubGF5b3V0KGV2KTsgfSk7XG5cdH1cblxuXHRtb3VzZWVudGVyRm4oKSB7XHRcdFxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuRE9NLmFuaW1hdGFibGUpIHtcblx0XHRcdGFuaW1lLnJlbW92ZSh0aGlzLkRPTS5hbmltYXRhYmxlW2tleV0pO1xuXHRcdH1cblx0fVxuXG5cdG1vdXNlbGVhdmVGbihldikge1x0XHRcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5ET00uYW5pbWF0YWJsZSkge1xuXHRcdFx0XHRpZiggdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0gPT0gdW5kZWZpbmVkICkge2NvbnRpbnVlO31cblx0XHRcdFx0YW5pbWUoe1xuXHRcdFx0XHRcdHRhcmdldHM6IHRoaXMuRE9NLmFuaW1hdGFibGVba2V5XSxcblx0XHRcdFx0XHRkdXJhdGlvbjogdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucmV2ZXJzZUFuaW1hdGlvbiAhPSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uLmR1cmF0aW9uIHx8IDAgOiAxLFxuXHRcdFx0XHRcdGVhc2luZzogdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucmV2ZXJzZUFuaW1hdGlvbiAhPSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uLmVhc2luZyB8fCAnbGluZWFyJyA6ICdsaW5lYXInLFxuXHRcdFx0XHRcdGVsYXN0aWNpdHk6IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnJldmVyc2VBbmltYXRpb24gIT0gdW5kZWZpbmVkID8gdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucmV2ZXJzZUFuaW1hdGlvbi5lbGFzdGljaXR5IHx8IG51bGwgOiBudWxsLFxuXHRcdFx0XHRcdHNjYWxlWDogMSxcblx0XHRcdFx0XHRzY2FsZVk6IDEsXG5cdFx0XHRcdFx0c2NhbGVaOiAxLFxuXHRcdFx0XHRcdHRyYW5zbGF0ZVg6IDAsXG5cdFx0XHRcdFx0dHJhbnNsYXRlWTogMCxcblx0XHRcdFx0XHR0cmFuc2xhdGVaOiAwLFxuXHRcdFx0XHRcdHJvdGF0ZVg6IDAsXG5cdFx0XHRcdFx0cm90YXRlWTogMCxcblx0XHRcdFx0XHRyb3RhdGVaOiAwXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0bGF5b3V0KGV2KSB7XG5cdFx0Ly8gTW91c2UgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50LlxuXHRcdGxldCBtb3VzZXBvcyA9IHRoaXMuZ2V0TW91c2VQb3MoZXYpO1xuXHRcdFx0Ly8gRG9jdW1lbnQgc2Nyb2xscy5cblx0XHRsZXRcdGRvY1Njcm9sbHMgPSB7bGVmdCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LCB0b3AgOiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3B9O1xuXHRcdGxldFx0Ym91bmRzID0gdGhpcy5ET00uZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHQvLyBNb3VzZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgbWFpbiBlbGVtZW50ICh0aGlzLkRPTS5lbCkuXG5cdFx0bGV0XHRyZWxtb3VzZXBvcyA9IHsgeCA6IG1vdXNlcG9zLnggLSBib3VuZHMubGVmdCAtIGRvY1Njcm9sbHMubGVmdCwgeSA6IG1vdXNlcG9zLnkgLSBib3VuZHMudG9wIC0gZG9jU2Nyb2xscy50b3AgfTtcblxuXHRcdC8vIE1vdmVtZW50IHNldHRpbmdzIGZvciB0aGUgYW5pbWF0YWJsZSBlbGVtZW50cy5cblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLkRPTS5hbmltYXRhYmxlKSB7XG5cdFx0XHRpZiggdGhpcy5ET00uYW5pbWF0YWJsZVtrZXldID09IHVuZGVmaW5lZCB8fCB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XSA9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHQgPSB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XSAhPSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS50cmFuc2xhdGlvbiB8fCB7eDowLHk6MCx6OjB9IDoge3g6MCx5OjAsejowfTtcblx0XHRcdGxldFx0ciA9IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnJvdGF0aW9uIHx8IHt4OjAseTowLHo6MH0gOiB7eDowLHk6MCx6OjB9O1xuXG5cdFx0XHR0aGlzLnNldFJhbmdlKHQpO1xuXHRcdFx0dGhpcy5zZXRSYW5nZShyKTtcblx0XHRcdFxuXHRcdFx0bGV0IHRyYW5zZm9ybXMgPSB7XG5cdFx0XHRcdHRyYW5zbGF0aW9uIDoge1xuXHRcdFx0XHRcdHg6ICh0LnhbMV0tdC54WzBdKS9ib3VuZHMud2lkdGgqcmVsbW91c2Vwb3MueCArIHQueFswXSxcblx0XHRcdFx0XHR5OiAodC55WzFdLXQueVswXSkvYm91bmRzLmhlaWdodCpyZWxtb3VzZXBvcy55ICsgdC55WzBdLFxuXHRcdFx0XHRcdHo6ICh0LnpbMV0tdC56WzBdKS9ib3VuZHMuaGVpZ2h0KnJlbG1vdXNlcG9zLnkgKyB0LnpbMF0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJvdGF0aW9uIDoge1xuXHRcdFx0XHRcdHg6IChyLnhbMV0tci54WzBdKS9ib3VuZHMuaGVpZ2h0KnJlbG1vdXNlcG9zLnkgKyByLnhbMF0sXG5cdFx0XHRcdFx0eTogKHIueVsxXS1yLnlbMF0pL2JvdW5kcy53aWR0aCpyZWxtb3VzZXBvcy54ICsgci55WzBdLFxuXHRcdFx0XHRcdHo6IChyLnpbMV0tci56WzBdKS9ib3VuZHMud2lkdGgqcmVsbW91c2Vwb3MueCArIHIuelswXVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLkRPTS5hbmltYXRhYmxlW2tleV0uc3R5bGUuV2Via2l0VHJhbnNmb3JtID0gdGhpcy5ET00uYW5pbWF0YWJsZVtrZXldLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyB0cmFuc2Zvcm1zLnRyYW5zbGF0aW9uLnggKyAncHgpIHRyYW5zbGF0ZVkoJyArIHRyYW5zZm9ybXMudHJhbnNsYXRpb24ueSArICdweCkgdHJhbnNsYXRlWignICsgdHJhbnNmb3Jtcy50cmFuc2xhdGlvbi56ICsgJ3B4KSByb3RhdGVYKCcgKyB0cmFuc2Zvcm1zLnJvdGF0aW9uLnggKyAnZGVnKSByb3RhdGVZKCcgKyB0cmFuc2Zvcm1zLnJvdGF0aW9uLnkgKyAnZGVnKSByb3RhdGVaKCcgKyB0cmFuc2Zvcm1zLnJvdGF0aW9uLnogKyAnZGVnKSc7XG5cdFx0fVxuXHR9XG5cblx0c2V0UmFuZ2UgKG9iaikge1xuXHRcdGZvcihsZXQgayBpbiBvYmopIHtcblx0XHRcdGlmKCBvYmpba10gPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRvYmpba10gPSBbMCwwXTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYoIHR5cGVvZiBvYmpba10gPT09ICdudW1iZXInICkge1xuXHRcdFx0XHRvYmpba10gPSBbLTEqb2JqW2tdLG9ialtrXV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGlsdEZ4OyJdfQ==
