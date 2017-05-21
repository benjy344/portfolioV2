(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Slider = require('./modules/Slider.js');

var _Slider2 = _interopRequireDefault(_Slider);

var _TiltFx2 = require('./modules/TiltFx.js');

var _TiltFx3 = _interopRequireDefault(_TiltFx2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = {
	init: function init() {
		var _this = this;

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
		this.$el.find('.js-readmore-mobile').on('touch click', function (e) {
			_this.$el.animate({
				scrollTop: _this.$el.find('.second-section').offset().top
			}, 1000);
		});
	},
	viewIsActive: function viewIsActive() {
		var _this2 = this;

		window.onfocus = function () {
			_this2.UserSee = true;
		};

		window.onblur = function () {
			_this2.UserSee = false;
		};
		setInterval(function () {
			if (!_this2.UserSee) _this2.autoplay.stop();
		}, 1000);
	},
	linkTo: function linkTo() {
		var _this3 = this;

		this.$linkTo.on('click touch', function (e) {
			var target = $(e.currentTarget).attr('href');
			var $section = _this3.$el.find(target);
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
		var _this4 = this;

		var step1 = this.$el.find('#about').offset().top;
		$(window).scrollTop() >= step1 - 100 ? this.nav.addClass('fixy') : this.nav.removeClass('fixy');
		$(window).scrollTop() >= step1 ? this.nav.addClass('active') : this.nav.removeClass('active');

		$(window).on('scroll', function () {
			var currentScroll = $(window).scrollTop();

			currentScroll >= 80 ? _this4.nav.css('top', '-61px') : _this4.nav.css('top', '0px');
			currentScroll >= step1 - 100 ? _this4.nav.addClass('fixy') : _this4.nav.removeClass('fixy');
			currentScroll >= step1 ? _this4.nav.addClass('active') : _this4.nav.removeClass('active');

			//init slider 		
			if (_this4.$slider.length) {
				if (_this4.isVisible(_this4.$slider)) {
					_this4.autoplay.play();
				} else {
					_this4.autoplay.stop();
				}
			}

			if (_this4.$skills.length) {
				if (_this4.isVisible(_this4.$skills[0])) {
					_this4.showSkills();
				}
			}

			if (_this4.$bands.length) {
				_this4.showBands();
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
		var _this5 = this;

		this.$bands.each(function (i, current) {
			var _band = $(current);

			if (_this5.isVisible(current)) {
				_band.hasClass('js-band-right') ? _band.css('right', 0) : _band.css('left', 0);
				if (_band.hasClass('js-last-band')) _this5.$form.addClass('visible');
			}
		});
	},
	preload: function preload() {
		var _this6 = this;

		this.$previews.each(function (idx, container) {
			var $container = $(container);
			var _url = $container.data('image-url');
			var img = new Image();

			img.src = _url;

			// if we have this image already cached, we don't have
			// to wait for the onload callback and can remove the
			// preview image immediately
			if (_this6.imgComplete(img)) {
				_this6.removePreview($container, _url);
			} else {
				img.onload = function () {
					_this6.removePreview($container, _url);
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
		var _this7 = this;

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
			var $errorMsg = _this7.$el.find('.js-error-message');
			var $successMsg = _this7.$el.find('.js-success-message');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvYXBwLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvU2xpZGVyLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvVGlsdEZ4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLE1BQU07QUFHVCxLQUhTLGtCQUdGO0FBQUE7O0FBQ04sT0FBSyxHQUFMLEdBQW9CLEVBQUUsTUFBRixDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsYUFBZCxDQUFwQjtBQUNBLE9BQUssR0FBTCxHQUFrQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsV0FBZCxDQUFsQjtBQUNBLE9BQUssU0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsYUFBZCxDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsWUFBZCxDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsb0JBQWQsQ0FBcEI7QUFDQSxPQUFLLE1BQUwsR0FBb0IsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLFVBQWQsQ0FBcEI7QUFDQSxPQUFLLFdBQUwsR0FBb0IsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGlCQUFkLENBQXBCO0FBQ0EsT0FBSyxLQUFMLEdBQW9CLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxVQUFkLENBQXBCO0FBQ0EsT0FBSyxZQUFMLEdBQW9CLENBQ25CLEVBRG1CLEVBRW5CO0FBQ0MsYUFBVTtBQUNULGdCQUFhO0FBQ1osa0JBQWMsRUFBQyxHQUFHLEVBQUosRUFBUSxHQUFHLEVBQVgsRUFBZSxHQUFHLEVBQWxCLEVBREY7QUFFWixlQUFXLEVBQUMsR0FBRyxDQUFKLEVBQU8sR0FBRyxDQUFDLEVBQVgsRUFBZSxHQUFHLENBQWxCLEVBRkM7QUFHWix1QkFBbUIsRUFBQyxVQUFXLEdBQVosRUFBaUIsUUFBUyxhQUExQjtBQUhQLEtBREo7QUFNVCxXQUFRO0FBQ1Asa0JBQWMsRUFBQyxHQUFHLEVBQUosRUFBUSxHQUFHLEVBQVgsRUFBZSxHQUFHLENBQUMsQ0FBRCxFQUFHLEVBQUgsQ0FBbEIsRUFEUDtBQUVQLGVBQVcsRUFBQyxHQUFHLENBQUosRUFBTyxHQUFHLENBQVYsRUFBYSxHQUFHLENBQUMsQ0FBakIsRUFGSjtBQUdQLHVCQUFtQixFQUFDLFVBQVcsSUFBWixFQUFrQixRQUFTLGFBQTNCO0FBSFosS0FOQztBQVdULGFBQVU7QUFDVCxlQUFXLEVBQUMsR0FBRyxDQUFKLEVBQU8sR0FBRyxDQUFWLEVBQWEsR0FBRyxDQUFoQixFQURGO0FBRVQsdUJBQW1CLEVBQUMsVUFBVyxHQUFaLEVBQWlCLFFBQVMsYUFBMUI7QUFGVixLQVhEO0FBZVQsYUFBVTtBQUNULGtCQUFjLEVBQUMsR0FBRyxFQUFKLEVBQVEsR0FBRyxDQUFDLEVBQVosRUFBZ0IsR0FBRyxDQUFuQixFQURMO0FBRVQsZUFBVyxFQUFDLEdBQUcsQ0FBSixFQUFPLEdBQUcsQ0FBVixFQUFhLEdBQUcsQ0FBaEIsRUFGRjtBQUdULHVCQUFtQixFQUFDLFVBQVcsSUFBWixFQUFrQixRQUFTLGFBQTNCO0FBSFYsS0FmRDtBQW9CVCxXQUFRO0FBQ1Asa0JBQWMsRUFBQyxHQUFHLEdBQUosRUFBUyxHQUFHLEdBQVosRUFBaUIsR0FBRyxDQUFwQixFQURQO0FBRVAsdUJBQW1CLEVBQUMsVUFBVyxHQUFaLEVBQWlCLFFBQVMsYUFBMUI7QUFGWjtBQXBCQztBQURYLEdBRm1CLEVBNkJuQjtBQUNDLGFBQVU7QUFDVCxnQkFBYTtBQUNaLGVBQVcsRUFBQyxHQUFHLENBQUMsQ0FBTCxFQUFRLEdBQUcsRUFBWCxFQUFlLEdBQUcsQ0FBbEIsRUFEQztBQUVaLHVCQUFtQixFQUFDLFVBQVcsR0FBWixFQUFpQixRQUFTLGNBQTFCO0FBRlAsS0FESjtBQUtULGFBQVU7QUFDVCxrQkFBYyxFQUFDLEdBQUcsRUFBSixFQUFRLEdBQUcsRUFBWCxFQUFlLEdBQUcsQ0FBQyxDQUFELEVBQUcsRUFBSCxDQUFsQixFQURMO0FBRVQsZUFBVyxFQUFDLEdBQUcsQ0FBQyxDQUFELEVBQUcsRUFBSCxDQUFKLEVBQVksR0FBRyxDQUFmLEVBQWtCLEdBQUcsQ0FBckIsRUFGRjtBQUdULHVCQUFtQixFQUFDLFVBQVcsSUFBWixFQUFrQixRQUFTLGFBQTNCO0FBSFYsS0FMRDtBQVVULGFBQVU7QUFDVCxrQkFBYyxFQUFDLEdBQUcsRUFBSixFQUFRLEdBQUcsRUFBWCxFQUFlLEdBQUcsQ0FBQyxDQUFELEVBQUcsRUFBSCxDQUFsQixFQURMO0FBRVQsdUJBQW1CLEVBQUMsVUFBVyxJQUFaLEVBQWtCLFFBQVMsYUFBM0I7QUFGVixLQVZEO0FBY1QsV0FBUTtBQUNQLGtCQUFjLEVBQUMsR0FBRyxHQUFKLEVBQVMsR0FBRyxHQUFaLEVBQWlCLEdBQUcsQ0FBcEIsRUFEUDtBQUVQLHVCQUFtQixFQUFDLFVBQVcsR0FBWixFQUFpQixRQUFTLGNBQTFCO0FBRlo7QUFkQztBQURYLEdBN0JtQixFQWtEbkI7QUFDQyxhQUFVO0FBQ1QsZ0JBQWE7QUFDWixlQUFXLEVBQUMsR0FBRyxDQUFDLENBQUwsRUFBUSxHQUFHLEVBQVgsRUFBZSxHQUFHLENBQWxCLEVBREM7QUFFWix1QkFBbUIsRUFBQyxVQUFXLEVBQVosRUFBZ0IsUUFBUyxhQUF6QjtBQUZQLEtBREo7QUFLVCxhQUFVO0FBQ1Qsa0JBQWMsRUFBQyxHQUFHLEVBQUosRUFBUSxHQUFHLEVBQVgsRUFBZSxHQUFHLENBQWxCLEVBREw7QUFFVCx1QkFBbUIsRUFBQyxVQUFXLEdBQVosRUFBaUIsUUFBUyxhQUExQjtBQUZWLEtBTEQ7QUFTVCxhQUFVO0FBQ1Qsa0JBQWMsRUFBQyxHQUFHLENBQUosRUFBTyxHQUFHLENBQUMsQ0FBWCxFQUFjLEdBQUcsQ0FBakIsRUFETDtBQUVULGVBQVcsRUFBQyxHQUFHLENBQUosRUFBTyxHQUFHLENBQVYsRUFBYSxHQUFHLENBQWhCLEVBRkY7QUFHVCx1QkFBbUIsRUFBQyxVQUFXLElBQVosRUFBa0IsUUFBUyxhQUEzQjtBQUhWLEtBVEQ7QUFjVCxXQUFRO0FBQ1Asa0JBQWMsRUFBQyxHQUFHLEVBQUosRUFBUSxHQUFHLEVBQVgsRUFBZSxHQUFHLENBQWxCLEVBRFA7QUFFUCx1QkFBbUIsRUFBQyxVQUFXLEVBQVosRUFBZ0IsUUFBUyxhQUF6QjtBQUZaO0FBZEM7QUFEWCxHQWxEbUIsRUF1RW5CO0FBQ0MsYUFBVTtBQUNULGdCQUFhO0FBQ1osa0JBQWMsRUFBQyxHQUFHLENBQUosRUFBTyxHQUFHLENBQUMsQ0FBWCxFQUFjLEdBQUcsQ0FBakIsRUFERjtBQUVaLGVBQVcsRUFBQyxHQUFHLENBQUosRUFBTyxHQUFHLENBQVYsRUFBYSxHQUFHLENBQWhCLEVBRkM7QUFHWix1QkFBbUIsRUFBQyxVQUFXLElBQVosRUFBa0IsUUFBUyxhQUEzQjtBQUhQLEtBREo7QUFNVCxXQUFRO0FBQ1Asa0JBQWMsRUFBQyxHQUFHLEVBQUosRUFBUSxHQUFHLEVBQVgsRUFBZSxHQUFHLENBQUMsQ0FBRCxFQUFHLEVBQUgsQ0FBbEIsRUFEUDtBQUVQLHVCQUFtQixFQUFDLFVBQVcsSUFBWixFQUFrQixRQUFTLGFBQTNCO0FBRlosS0FOQztBQVVULGFBQVU7QUFDVCxrQkFBYyxFQUFDLEdBQUcsQ0FBSixFQUFPLEdBQUcsQ0FBVixFQUFhLEdBQUcsQ0FBaEIsRUFETDtBQUVULHVCQUFtQixFQUFDLFVBQVcsR0FBWixFQUFpQixRQUFTLGFBQTFCO0FBRlYsS0FWRDtBQWNULGFBQVU7QUFDVCxrQkFBYyxFQUFDLEdBQUcsRUFBSixFQUFRLEdBQUcsQ0FBQyxFQUFaLEVBQWdCLEdBQUcsQ0FBbkIsRUFETDtBQUVULHVCQUFtQixFQUFDLFVBQVcsR0FBWixFQUFpQixRQUFTLGFBQTFCO0FBRlYsS0FkRDtBQWtCVCxXQUFRO0FBQ1Asa0JBQWMsRUFBQyxHQUFHLEVBQUosRUFBUSxHQUFHLEVBQVgsRUFBZSxHQUFHLENBQWxCLEVBRFA7QUFFUCx1QkFBbUIsRUFBQyxVQUFXLElBQVosRUFBa0IsUUFBUyxhQUEzQjtBQUZaO0FBbEJDO0FBRFgsR0F2RW1CLEVBZ0duQjtBQUNDLGFBQVU7QUFDVCxXQUFRO0FBQ1Asa0JBQWMsRUFBQyxHQUFHLENBQUMsQ0FBTCxFQUFRLEdBQUcsQ0FBWCxFQUFjLEdBQUcsQ0FBakIsRUFEUDtBQUVQLHVCQUFtQixFQUFDLFVBQVcsSUFBWixFQUFrQixRQUFTLGFBQTNCO0FBRlosS0FEQztBQUtULGFBQVU7QUFDVCxrQkFBYyxFQUFDLEdBQUcsRUFBSixFQUFRLEdBQUcsRUFBWCxFQUFlLEdBQUcsQ0FBbEIsRUFETDtBQUVULGVBQVcsRUFBQyxHQUFHLENBQUosRUFBTyxHQUFHLENBQVYsRUFBYSxHQUFHLENBQWhCLEVBRkY7QUFHVCx1QkFBbUIsRUFBQyxVQUFXLElBQVosRUFBa0IsUUFBUyxnQkFBM0IsRUFBNkMsWUFBYSxHQUExRDtBQUhWLEtBTEQ7QUFVVCxhQUFVO0FBQ1Qsa0JBQWMsRUFBQyxHQUFHLEVBQUosRUFBUSxHQUFHLENBQUMsRUFBWixFQUFnQixHQUFHLENBQW5CLEVBREw7QUFFVCx1QkFBbUIsRUFBQyxVQUFXLEdBQVosRUFBZ0IsUUFBUyxhQUF6QjtBQUZWLEtBVkQ7QUFjVCxXQUFRO0FBQ1Asa0JBQWMsRUFBQyxHQUFHLEVBQUosRUFBUSxHQUFHLEVBQVgsRUFBZSxHQUFHLENBQWxCLEVBRFA7QUFFUCx1QkFBbUIsRUFBQyxVQUFXLEdBQVosRUFBaUIsUUFBUyxhQUExQjtBQUZaO0FBZEM7QUFEWCxHQWhHbUIsRUFxSG5CO0FBQ0MsYUFBVTtBQUNULGdCQUFhO0FBQ1osa0JBQWMsRUFBQyxHQUFHLENBQUosRUFBTyxHQUFHLENBQVYsRUFBYSxHQUFHLENBQWhCLEVBREY7QUFFWix1QkFBbUIsRUFBQyxVQUFXLEdBQVosRUFBaUIsUUFBUyxjQUExQjtBQUZQLEtBREo7QUFLVCxhQUFVO0FBQ1Qsa0JBQWMsRUFBQyxHQUFHLEVBQUosRUFBUSxHQUFHLEVBQVgsRUFBZSxHQUFHLENBQUMsQ0FBRCxFQUFHLEVBQUgsQ0FBbEIsRUFETDtBQUVULHVCQUFtQixFQUFDLFVBQVcsSUFBWixFQUFrQixRQUFTLGNBQTNCO0FBRlYsS0FMRDtBQVNULFdBQVE7QUFDUCxrQkFBYyxFQUFDLEdBQUcsRUFBSixFQUFRLEdBQUcsRUFBWCxFQUFlLEdBQUcsQ0FBbEIsRUFEUDtBQUVQLHVCQUFtQixFQUFDLFVBQVcsR0FBWixFQUFpQixRQUFTLGNBQTFCO0FBRlo7QUFUQztBQURYLEdBckhtQixFQXFJbkI7QUFDQyxhQUFVO0FBQ1QsV0FBUTtBQUNQLGtCQUFjLEVBQUMsR0FBRyxFQUFKLEVBQVEsR0FBRyxFQUFYLEVBQWUsR0FBRyxDQUFsQixFQURQO0FBRVAsdUJBQW1CLEVBQUMsVUFBVyxJQUFaLEVBQWtCLFFBQVMsZ0JBQTNCO0FBRlosS0FEQztBQUtULGFBQVU7QUFDVCxrQkFBYyxFQUFDLEdBQUcsRUFBSixFQUFRLEdBQUcsRUFBWCxFQUFlLEdBQUcsQ0FBbEIsRUFETDtBQUVULGVBQVcsRUFBQyxHQUFHLENBQUosRUFBTyxHQUFHLENBQVYsRUFBYSxHQUFHLENBQUMsQ0FBakIsRUFGRjtBQUdULHVCQUFtQixFQUFDLFVBQVcsSUFBWixFQUFrQixRQUFTLGFBQTNCO0FBSFYsS0FMRDtBQVVULGFBQVU7QUFDVCxrQkFBYyxFQUFDLEdBQUcsQ0FBQyxFQUFMLEVBQVMsR0FBRyxDQUFDLEVBQWIsRUFBaUIsR0FBRyxDQUFwQixFQURMO0FBRVQsZUFBVyxFQUFDLEdBQUcsQ0FBSixFQUFPLEdBQUcsQ0FBVixFQUFhLEdBQUcsQ0FBaEIsRUFGRjtBQUdULHVCQUFtQixFQUFDLFVBQVcsR0FBWixFQUFpQixRQUFTLGFBQTFCO0FBSFYsS0FWRDtBQWVULFdBQVE7QUFDUCxrQkFBYyxFQUFDLEdBQUcsR0FBSixFQUFTLEdBQUcsR0FBWixFQUFpQixHQUFHLENBQXBCLEVBRFA7QUFFUCx1QkFBbUIsRUFBQyxVQUFXLEdBQVosRUFBaUIsUUFBUyxhQUExQjtBQUZaO0FBZkM7QUFEWCxHQXJJbUIsQ0FBcEI7O0FBNEpBLE9BQUssT0FBTCxHQUFpQixJQUFqQjtBQUNBLE9BQUssUUFBTCxHQUFpQixLQUFqQjs7QUFFQSxPQUFLLEVBQUwsR0FBYyxhQUFhLEVBQUUsT0FBTyxLQUFULEVBQWIsQ0FBZDs7QUFFQTtBQUNBLE1BQUksS0FBSyxPQUFMLENBQWEsTUFBakIsRUFBeUI7QUFDeEIsUUFBSyxRQUFMLEdBQWdCLHNCQUFoQjtBQUNBLFFBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsS0FBSyxPQUF4QjtBQUNBO0FBQ0QsT0FBSyxZQUFMOztBQUVBO0FBQ0EsTUFBSSxLQUFLLE9BQUwsQ0FBYSxNQUFqQixFQUF5QixLQUFLLE1BQUw7O0FBRXpCO0FBQ0EsT0FBSyxNQUFMOztBQUVBO0FBQ0EsT0FBSyxLQUFMOztBQUVBO0FBQ0EsT0FBSyxXQUFMLENBQWlCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLEtBQUssVUFBbEM7O0FBRUE7QUFDQSxNQUFJLEtBQUssU0FBTCxDQUFlLE1BQW5CLEVBQTJCLEtBQUssT0FBTDs7QUFFM0I7QUFDQSxPQUFLLG9CQUFMOztBQUVBO0FBQ0EsTUFBSSxLQUFLLEtBQUwsQ0FBVyxNQUFmLEVBQXVCLEtBQUssUUFBTDs7QUFFdkI7QUFDQSxPQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMscUJBQWQsRUFBcUMsRUFBckMsQ0FBd0MsYUFBeEMsRUFBdUQsVUFBQyxDQUFELEVBQU87QUFDN0QsU0FBSyxHQUFMLENBQVMsT0FBVCxDQUFpQjtBQUNWLGVBQVcsTUFBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGlCQUFkLEVBQWlDLE1BQWpDLEdBQTBDO0FBRDNDLElBQWpCLEVBRU0sSUFGTjtBQUdBLEdBSkQ7QUFNQSxFQWpOUTtBQW1OVCxhQW5OUywwQkFtTk07QUFBQTs7QUFDZCxTQUFPLE9BQVAsR0FBaUIsWUFBTTtBQUNuQixVQUFLLE9BQUwsR0FBZSxJQUFmO0FBQ0QsR0FGSDs7QUFJQSxTQUFPLE1BQVAsR0FBZ0IsWUFBTTtBQUNsQixVQUFLLE9BQUwsR0FBZSxLQUFmO0FBQ0QsR0FGSDtBQUdBLGNBQWEsWUFBTTtBQUNmLE9BQUksQ0FBQyxPQUFLLE9BQVYsRUFBbUIsT0FBSyxRQUFMLENBQWMsSUFBZDtBQUN0QixHQUZELEVBRUcsSUFGSDtBQUdBLEVBOU5RO0FBZ09ULE9BaE9TLG9CQWdPQTtBQUFBOztBQUNSLE9BQUssT0FBTCxDQUFhLEVBQWIsQ0FBZ0IsYUFBaEIsRUFBK0IsVUFBQyxDQUFELEVBQU87QUFDckMsT0FBSSxTQUFXLEVBQUUsRUFBRSxhQUFKLEVBQW1CLElBQW5CLENBQXdCLE1BQXhCLENBQWY7QUFDQSxPQUFJLFdBQVcsT0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLE1BQWQsQ0FBZjtBQUNBLEtBQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUNqQixlQUFXLFNBQVMsTUFBVCxHQUFrQjtBQURaLElBQXhCLEVBRU0sSUFGTjtBQUdBLEdBTkQ7QUFPQSxFQXhPUTtBQTBPVCxVQTFPUyxxQkEwT0MsT0ExT0QsRUEwT1U7QUFDbEIsTUFBSSxXQUFrQixFQUFFLE9BQUYsQ0FBdEI7QUFDQSxNQUFJLGFBQWtCLFNBQVMsTUFBVCxHQUFrQixHQUF4QztBQUNBLE1BQUksZ0JBQWtCLFNBQVMsTUFBVCxHQUFrQixHQUFsQixHQUF3QixTQUFTLE1BQVQsRUFBOUM7QUFDQSxNQUFJLFlBQWlCLEVBQUUsTUFBRixFQUFVLFNBQVYsRUFBckI7QUFDQSxNQUFJLGVBQWdCLFlBQVksRUFBRSxNQUFGLEVBQVUsTUFBVixFQUFoQztBQUNBLE1BQUksWUFBa0IsS0FBdEI7O0FBRUEsTUFBSyxhQUFhLFNBQWIsSUFBMEIsZ0JBQWdCLFlBQS9DLEVBQThEO0FBQzdELGVBQVksSUFBWjtBQUNBLEdBRkQsTUFFTztBQUNOLGVBQVksS0FBWjtBQUNBO0FBQ0QsU0FBTyxTQUFQO0FBQ0EsRUF4UFE7QUEwUFQsV0ExUFMsc0JBMFBFLENBMVBGLEVBMFBLO0FBQ2IsSUFBRSxjQUFGO0FBQ0EsTUFBSSxXQUFhLElBQUksR0FBSixDQUFRLElBQVIsQ0FBYSxxQkFBYixDQUFqQjtBQUNBLE1BQUksU0FBYSxFQUFFLEVBQUUsTUFBSixFQUFZLElBQVosQ0FBaUIsTUFBakIsQ0FBakI7QUFDQSxNQUFJLFdBQWEsU0FBUyxJQUFULENBQWMsTUFBZCxDQUFqQjtBQUNBLE1BQUksU0FBYSxTQUFTLElBQVQsQ0FBYyxrQkFBZCxDQUFqQjtBQUNBLFVBQVEsR0FBUixDQUFZLFFBQVosRUFBc0IsTUFBdEIsRUFBOEIsUUFBOUI7QUFDQSxNQUFHLFNBQVMsTUFBWixFQUFvQjtBQUNuQixZQUFTLFFBQVQsQ0FBa0IsTUFBbEI7QUFDQSxPQUFJLEdBQUosQ0FBUSxRQUFSLENBQWlCLGlCQUFqQjtBQUNBLFlBQVMsR0FBVCxDQUFjLFNBQWQsRUFBeUIsT0FBekI7QUFDQSxjQUFXLFlBQU07QUFDaEIsYUFBUyxRQUFULENBQWtCLFNBQWxCO0FBQ0EsYUFBUyxJQUFULENBQWMsZUFBZCxFQUErQixHQUEvQixDQUFtQyxRQUFuQyxFQUE2QyxTQUFTLElBQVQsQ0FBYyxPQUFkLEVBQXVCLFdBQXZCLEVBQTdDO0FBQ0EsSUFIRCxFQUdHLEdBSEg7QUFJQSxZQUFTLElBQVQsQ0FBYyxlQUFkLEVBQStCLEVBQS9CLENBQWtDLGFBQWxDLEVBQWlELFVBQUMsQ0FBRCxFQUFNO0FBQ3RELGFBQVMsUUFBVCxDQUFrQixXQUFsQjtBQUNBLElBRkQ7QUFHQSxVQUFPLEVBQVAsQ0FBVSxhQUFWLEVBQXlCLElBQUksV0FBN0I7QUFDQTtBQUNELEVBOVFRO0FBZ1JULFlBaFJTLHlCQWdSSztBQUNiLE1BQUksV0FBYSxJQUFJLEdBQUosQ0FBUSxJQUFSLENBQWEscUJBQWIsQ0FBakI7QUFDQSxNQUFJLFdBQWEsU0FBUyxJQUFULENBQWMsVUFBZCxDQUFqQjs7QUFFQSxNQUFHLFNBQVMsTUFBWixFQUFvQjtBQUNoQixZQUFTLE9BQVQsQ0FBaUIsRUFBQyxXQUFVLENBQVgsRUFBakIsRUFBZ0MsS0FBaEM7QUFDSCxZQUFTLFdBQVQsQ0FBcUIsbUJBQXJCO0FBQ0EsY0FBVyxZQUFNO0FBQ2hCLGFBQVMsR0FBVCxDQUFjLFNBQWQsRUFBeUIsTUFBekI7QUFDQSxhQUFTLFdBQVQsQ0FBcUIsTUFBckI7QUFDQSxRQUFJLEdBQUosQ0FBUSxXQUFSLENBQW9CLGlCQUFwQjtBQUNBLElBSkQsRUFJRyxHQUpIO0FBS0E7QUFDRCxFQTdSUTtBQStSVCxPQS9SUyxvQkErUkE7QUFBQTs7QUFDUixNQUFJLFFBQVEsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLFFBQWQsRUFBd0IsTUFBeEIsR0FBaUMsR0FBN0M7QUFDQSxJQUFFLE1BQUYsRUFBVSxTQUFWLE1BQXlCLFFBQU0sR0FBL0IsR0FBcUMsS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixNQUFsQixDQUFyQyxHQUFpRSxLQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLE1BQXJCLENBQWpFO0FBQ0EsSUFBRSxNQUFGLEVBQVUsU0FBVixNQUF5QixLQUF6QixHQUFpQyxLQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLFFBQWxCLENBQWpDLEdBQStELEtBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsUUFBckIsQ0FBL0Q7O0FBRUEsSUFBRSxNQUFGLEVBQVUsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBTTtBQUM1QixPQUFJLGdCQUFnQixFQUFFLE1BQUYsRUFBVSxTQUFWLEVBQXBCOztBQUVBLG9CQUFpQixFQUFqQixHQUFzQixPQUFLLEdBQUwsQ0FBUyxHQUFULENBQWEsS0FBYixFQUFvQixPQUFwQixDQUF0QixHQUFxRCxPQUFLLEdBQUwsQ0FBUyxHQUFULENBQWEsS0FBYixFQUFvQixLQUFwQixDQUFyRDtBQUNBLG9CQUFpQixRQUFNLEdBQXZCLEdBQTZCLE9BQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsTUFBbEIsQ0FBN0IsR0FBeUQsT0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixNQUFyQixDQUF6RDtBQUNBLG9CQUFpQixLQUFqQixHQUF5QixPQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLFFBQWxCLENBQXpCLEdBQXVELE9BQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsUUFBckIsQ0FBdkQ7O0FBRUE7QUFDQSxPQUFJLE9BQUssT0FBTCxDQUFhLE1BQWpCLEVBQXlCO0FBQ3hCLFFBQUksT0FBSyxTQUFMLENBQWUsT0FBSyxPQUFwQixDQUFKLEVBQWtDO0FBQ2pDLFlBQUssUUFBTCxDQUFjLElBQWQ7QUFDQSxLQUZELE1BRU87QUFDTixZQUFLLFFBQUwsQ0FBYyxJQUFkO0FBQ0E7QUFDRDs7QUFFRCxPQUFJLE9BQUssT0FBTCxDQUFhLE1BQWpCLEVBQXlCO0FBQ3hCLFFBQUksT0FBSyxTQUFMLENBQWUsT0FBSyxPQUFMLENBQWEsQ0FBYixDQUFmLENBQUosRUFBcUM7QUFDcEMsWUFBSyxVQUFMO0FBQ0E7QUFDRDs7QUFFRCxPQUFJLE9BQUssTUFBTCxDQUFZLE1BQWhCLEVBQXdCO0FBQ3ZCLFdBQUssU0FBTDtBQUNBO0FBQ0QsR0F6QkQ7QUEyQkEsRUEvVFE7QUFpVVQsTUFqVVMsbUJBaVVEO0FBQ1A7QUFDQSxPQUFLLEVBQUwsQ0FBUSxNQUFSLENBQWUsZ0JBQWYsRUFBaUMsRUFBRSxVQUFVLE9BQVosRUFBcUIsUUFBUSxNQUE3QixFQUFxQyxPQUFPLENBQTVDLEVBQStDLFVBQVMsR0FBeEQsRUFBakM7QUFDQSxPQUFLLEVBQUwsQ0FBUSxNQUFSLENBQWUsc0JBQWYsRUFBdUMsRUFBRSxVQUFVLE9BQVosRUFBcUIsUUFBUSxNQUE3QixFQUFxQyxPQUFPLENBQTVDLEVBQStDLE9BQU8sR0FBdEQsRUFBMkQsVUFBUyxHQUFwRSxFQUF2QztBQUNBLE9BQUssRUFBTCxDQUFRLE1BQVIsQ0FBZSwyQkFBZixFQUE0QyxFQUFFLFVBQVUsT0FBWixFQUFxQixRQUFRLE1BQTdCLEVBQXFDLE9BQU8sQ0FBNUMsRUFBK0MsT0FBTyxJQUF0RCxFQUE0RCxVQUFTLEdBQXJFLEVBQTVDO0FBQ0E7QUFDQSxPQUFLLEVBQUwsQ0FBUSxNQUFSLENBQWUsaUJBQWYsRUFBa0MsRUFBRSxVQUFVLE9BQVosRUFBcUIsUUFBUSxPQUE3QixFQUFzQyxPQUFPLENBQTdDLEVBQWdELFVBQVMsR0FBekQsRUFBbEM7QUFDQSxPQUFLLEVBQUwsQ0FBUSxNQUFSLENBQWUsdUJBQWYsRUFBd0MsRUFBRSxVQUFVLE9BQVosRUFBcUIsUUFBUSxPQUE3QixFQUFzQyxPQUFPLENBQTdDLEVBQWdELE9BQU8sR0FBdkQsRUFBNEQsVUFBUyxHQUFyRSxFQUF4QztBQUNBLE9BQUssRUFBTCxDQUFRLE1BQVIsQ0FBZSw0QkFBZixFQUE2QyxFQUFFLFVBQVUsT0FBWixFQUFxQixRQUFRLE9BQTdCLEVBQXNDLE9BQU8sQ0FBN0MsRUFBZ0QsT0FBTyxJQUF2RCxFQUE2RCxVQUFTLEdBQXRFLEVBQTdDO0FBQ0E7QUFDQSxPQUFLLEVBQUwsQ0FBUSxNQUFSLENBQWUsZUFBZixFQUFnQyxFQUFFLFVBQVUsT0FBWixFQUFxQixRQUFRLFFBQTdCLEVBQXVDLE9BQU8sQ0FBOUMsRUFBaUQsVUFBUyxHQUExRCxFQUFoQztBQUNBLE9BQUssRUFBTCxDQUFRLE1BQVIsQ0FBZSxxQkFBZixFQUFzQyxFQUFFLFVBQVUsT0FBWixFQUFxQixRQUFRLFFBQTdCLEVBQXVDLE9BQU8sQ0FBOUMsRUFBaUQsT0FBTyxHQUF4RCxFQUE2RCxVQUFTLEdBQXRFLEVBQXRDO0FBQ0EsT0FBSyxFQUFMLENBQVEsTUFBUixDQUFlLDBCQUFmLEVBQTJDLEVBQUUsVUFBVSxPQUFaLEVBQXFCLFFBQVEsUUFBN0IsRUFBdUMsT0FBTyxDQUE5QyxFQUFpRCxPQUFPLElBQXhELEVBQThELFVBQVMsR0FBdkUsRUFBM0M7QUFFQSxFQS9VUTtBQWlWVCxXQWpWUyx3QkFpVkk7O0FBRVosTUFBRyxDQUFDLEtBQUssUUFBVCxFQUFtQjtBQUNsQixPQUFJLFVBQVUsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGFBQWQsQ0FBZDtBQUNBLFdBQVEsSUFBUixDQUFjLFVBQUMsS0FBRCxFQUFRLE9BQVIsRUFBb0I7QUFDakMsUUFBSSxXQUFXLEVBQUUsT0FBRixFQUFXLElBQVgsQ0FBZ0IsY0FBaEIsSUFBZ0MsR0FBL0M7QUFDQSxNQUFFLE9BQUYsRUFBVyxHQUFYLENBQWUsT0FBZixFQUF3QixRQUF4QjtBQUNBLElBSEQ7QUFJQTtBQUNELEVBMVZRO0FBNFZULFVBNVZTLHVCQTRWRztBQUFBOztBQUNYLE9BQUssTUFBTCxDQUFZLElBQVosQ0FBa0IsVUFBQyxDQUFELEVBQUksT0FBSixFQUFnQjtBQUNqQyxPQUFJLFFBQVEsRUFBRSxPQUFGLENBQVo7O0FBRUEsT0FBRyxPQUFLLFNBQUwsQ0FBZSxPQUFmLENBQUgsRUFBNEI7QUFDM0IsVUFBTSxRQUFOLENBQWUsZUFBZixJQUFrQyxNQUFNLEdBQU4sQ0FBVSxPQUFWLEVBQW1CLENBQW5CLENBQWxDLEdBQTBELE1BQU0sR0FBTixDQUFVLE1BQVYsRUFBa0IsQ0FBbEIsQ0FBMUQ7QUFDQSxRQUFHLE1BQU0sUUFBTixDQUFlLGNBQWYsQ0FBSCxFQUFtQyxPQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLFNBQXBCO0FBQ25DO0FBQ0QsR0FQRDtBQVFBLEVBcldRO0FBdVdULFFBdldTLHFCQXVXQztBQUFBOztBQUNULE9BQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsVUFBQyxHQUFELEVBQU0sU0FBTixFQUFvQjtBQUN2QyxPQUFJLGFBQWEsRUFBRSxTQUFGLENBQWpCO0FBQ0EsT0FBSSxPQUFhLFdBQVcsSUFBWCxDQUFnQixXQUFoQixDQUFqQjtBQUNBLE9BQUksTUFBYSxJQUFJLEtBQUosRUFBakI7O0FBRUEsT0FBSSxHQUFKLEdBQWlCLElBQWpCOztBQUVNO0FBQ0E7QUFDQTtBQUNBLE9BQUcsT0FBSyxXQUFMLENBQWlCLEdBQWpCLENBQUgsRUFBMEI7QUFDekIsV0FBSyxhQUFMLENBQW1CLFVBQW5CLEVBQStCLElBQS9CO0FBQ0EsSUFGRCxNQUVPO0FBQ04sUUFBSSxNQUFKLEdBQWEsWUFBTTtBQUNsQixZQUFLLGFBQUwsQ0FBbUIsVUFBbkIsRUFBK0IsSUFBL0I7QUFDQSxLQUZEO0FBR0E7QUFDSixHQWpCSjtBQWtCQSxFQTFYUTtBQTRYVCxZQTVYUyx1QkE0WEcsR0E1WEgsRUE0WFE7QUFDVixTQUFPLElBQUksUUFBSixJQUFnQixJQUFJLEtBQUosR0FBWSxJQUFJLE1BQWhCLEdBQXlCLENBQWhEO0FBQ0gsRUE5WEs7QUFnWU4sY0FoWU0seUJBZ1lRLFVBaFlSLEVBZ1lvQixHQWhZcEIsRUFnWXlCO0FBQzNCLGFBQVcsR0FBWCxDQUFlLEVBQUMsb0JBQW9CLFVBQVUsR0FBVixHQUFnQixJQUFyQyxFQUFmO0FBQ0EsYUFBVyxXQUFYLENBQXVCLG9CQUF2QjtBQUNILEVBbllLO0FBcVlOLHFCQXJZTSxrQ0FxWWlCOztBQUV6QixNQUFJLE1BQU0sQ0FBVjtBQUNBLEtBQUcsS0FBSCxDQUFTLElBQVQsQ0FBYyxFQUFFLFVBQUYsQ0FBZCxFQUE2QixPQUE3QixDQUFxQyxVQUFDLEVBQUQsRUFBSyxHQUFMLEVBQWE7QUFDakQsU0FBTSxNQUFJLENBQUosS0FBVSxDQUFWLEdBQWMsTUFBSSxDQUFsQixHQUFzQixHQUE1QjtBQUNBLE9BQUksVUFBVSxzQkFBZDtBQUNBLFdBQVEsSUFBUixDQUFhLEVBQWIsRUFBaUIsSUFBSSxZQUFKLENBQWlCLE1BQUksQ0FBckIsQ0FBakI7QUFDQSxHQUpEOztBQU1BLE1BQUksUUFBVyxLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsUUFBZCxDQUFmO0FBQ0EsTUFBSSxXQUFXLE1BQU0sSUFBTixDQUFXLGFBQVgsQ0FBZjtBQUNBLE1BQUksU0FBVyxTQUFTLElBQVQsQ0FBYyxNQUFkLENBQWY7QUFDQSxNQUFJLFFBQVcsRUFBQyxTQUFTLE9BQU8sSUFBUCxDQUFZLEdBQVosQ0FBVixFQUE0QixRQUFRLFNBQVMsSUFBVCxDQUFjLGlCQUFkLENBQXBDLEVBQWY7O0FBRUEsUUFBTSxFQUFOLENBQVMsWUFBVCxFQUF1QixZQUFNO0FBQzVCLFNBQU0sTUFBTixDQUFhLE1BQWI7QUFDQSxTQUFNO0FBQ0wsYUFBUyxNQURKO0FBRUwsT0FBRyxNQUFNLE1BRko7QUFHTCxjQUFVLEdBSEw7QUFJTCxZQUFRO0FBSkgsSUFBTjtBQU1BLEdBUkQ7O0FBVUEsUUFBTSxFQUFOLENBQVMsWUFBVCxFQUF1QixZQUFNO0FBQzVCLFNBQU0sTUFBTixDQUFhLE1BQWI7QUFDQSxTQUFNO0FBQ0wsYUFBUyxNQURKO0FBRUwsT0FBRyxNQUFNLE9BRko7QUFHTCxjQUFVLEdBSEw7QUFJTCxZQUFRO0FBSkgsSUFBTjtBQU1BLEdBUkQ7QUFTQSxFQXRhUTtBQXdhVCxTQXhhUyxzQkF3YUU7QUFBQTs7QUFFVixNQUFJLFFBQVEsS0FBSyxLQUFqQjtBQUNBLE1BQUksWUFBWSxDQUFFLEtBQUYsRUFBUyxLQUFULEVBQWdCLEtBQWhCLENBQWhCOztBQUVBLFFBQU0sSUFBTixDQUFXLFVBQVgsRUFBdUIsSUFBdkIsQ0FBNEIsWUFBWTtBQUNwQyxTQUFNLElBQU4sQ0FBVyxVQUFYLEVBQXVCLElBQXZCLENBQTRCLFlBQVk7QUFDcEMsUUFBSSxRQUFRLEVBQUUsSUFBRixDQUFaO0FBQ0EsUUFBSSxRQUFRLElBQUksTUFBSixDQUFXLDBCQUFYLENBQVo7O0FBRUEsUUFBSSxNQUFNLElBQU4sQ0FBVyxLQUFLLEtBQWhCLENBQUosRUFBNkI7QUFDekIsV0FBTSxRQUFOLENBQWUsU0FBZjtBQUNBLE9BQUUsZ0JBQUYsRUFBb0IsR0FBcEIsQ0FBd0IsRUFBQyxTQUFTLGFBQVYsRUFBeEI7QUFDRCxPQUFFLG9CQUFGLEVBQXdCLEdBQXhCLENBQTRCLEVBQUMsV0FBVyxDQUFaLEVBQTVCO0FBQ0EsT0FBRSxvQkFBRixFQUF3QixHQUF4QixDQUE0QixFQUFDLFdBQVcsQ0FBWixFQUE1QjtBQUNBLGVBQVUsQ0FBVixJQUFlLElBQWY7QUFDRixLQU5ELE1BT0ssSUFBSSxLQUFLLEtBQUwsS0FBZSxFQUFuQixFQUF1QjtBQUN6QixXQUFNLFdBQU4sQ0FBa0IsU0FBbEI7QUFDQSxPQUFFLGdCQUFGLEVBQW9CLEdBQXBCLENBQXdCLEVBQUMsU0FBUyxPQUFWLEVBQXhCO0FBQ0EsT0FBRSwrQkFBRixFQUFtQyxHQUFuQyxDQUF1QyxFQUFDLFdBQVcsQ0FBWixFQUF2QztBQUNBLE9BQUUsb0JBQUYsRUFBd0IsR0FBeEIsQ0FBNEIsRUFBQyxXQUFXLENBQVosRUFBNUI7QUFDQSxPQUFFLG9CQUFGLEVBQXdCLEdBQXhCLENBQTRCLEVBQUMsV0FBVyxDQUFaLEVBQTVCO0FBQ0EsZUFBVSxDQUFWLElBQWUsS0FBZjtBQUNGLEtBUEksTUFRQTtBQUNKLFdBQU0sUUFBTixDQUFlLFNBQWY7QUFDQSxPQUFFLGdCQUFGLEVBQW9CLEdBQXBCLENBQXdCLEVBQUMsU0FBUyxhQUFWLEVBQXhCO0FBQ0EsT0FBRSxvQkFBRixFQUF3QixHQUF4QixDQUE0QixFQUFDLFdBQVcsQ0FBWixFQUE1QjtBQUNFLE9BQUUsb0JBQUYsRUFBd0IsR0FBeEIsQ0FBNEIsRUFBQyxXQUFXLENBQVosRUFBNUI7QUFDQSxlQUFVLENBQVYsSUFBZSxLQUFmO0FBQ0Y7QUFDSixJQTFCRDtBQTJCSCxHQTVCRDs7QUE4QkEsUUFBTSxJQUFOLENBQVcsaUJBQVgsRUFBOEIsSUFBOUIsQ0FBbUMsWUFBWTs7QUFFM0MsU0FBTSxJQUFOLENBQVcsaUJBQVgsRUFBOEIsSUFBOUIsQ0FBbUMsWUFBWTtBQUMzQyxRQUFJLFFBQVEsRUFBRSxJQUFGLENBQVo7QUFDQSxRQUFJLFFBQVEsSUFBSSxNQUFKLENBQVcsb0JBQVgsQ0FBWjs7QUFFQSxRQUFJLE1BQU0sSUFBTixDQUFXLEtBQUssS0FBaEIsQ0FBSixFQUE2QjtBQUN6QixXQUFNLFFBQU4sQ0FBZSxTQUFmO0FBQ0EsT0FBRSxpQkFBRixFQUFxQixHQUFyQixDQUF5QixFQUFDLFNBQVMsYUFBVixFQUF6QjtBQUNELE9BQUUscUJBQUYsRUFBeUIsR0FBekIsQ0FBNkIsRUFBQyxXQUFXLENBQVosRUFBN0I7QUFDQSxPQUFFLHFCQUFGLEVBQXlCLEdBQXpCLENBQTZCLEVBQUMsV0FBVyxDQUFaLEVBQTdCO0FBQ0EsZUFBVSxDQUFWLElBQWUsSUFBZjtBQUNGLEtBTkQsTUFPSyxJQUFJLEtBQUssS0FBTCxLQUFlLEVBQW5CLEVBQXVCO0FBQ3pCLFdBQU0sV0FBTixDQUFrQixTQUFsQjtBQUNBLE9BQUUsaUJBQUYsRUFBcUIsR0FBckIsQ0FBeUIsRUFBQyxTQUFTLE9BQVYsRUFBekI7QUFDQSxPQUFFLGdDQUFGLEVBQW9DLEdBQXBDLENBQXdDLEVBQUMsV0FBVyxDQUFaLEVBQXhDO0FBQ0EsZUFBVSxDQUFWLElBQWUsS0FBZjtBQUNGLEtBTEksTUFNQTtBQUNKLFdBQU0sUUFBTixDQUFlLFNBQWY7QUFDQSxPQUFFLGlCQUFGLEVBQXFCLEdBQXJCLENBQXlCLEVBQUMsU0FBUyxhQUFWLEVBQXpCO0FBQ0EsT0FBRSxxQkFBRixFQUF5QixHQUF6QixDQUE2QixFQUFDLFdBQVcsQ0FBWixFQUE3QjtBQUNFLE9BQUUscUJBQUYsRUFBeUIsR0FBekIsQ0FBNkIsRUFBQyxXQUFXLENBQVosRUFBN0I7QUFDQSxlQUFVLENBQVYsSUFBZSxLQUFmO0FBQ0Y7QUFFSixJQXpCRDtBQTJCSCxHQTdCRDs7QUErQkEsUUFBTSxJQUFOLENBQVcsa0JBQVgsRUFBK0IsSUFBL0IsQ0FBb0MsWUFBWTtBQUM1QyxTQUFNLElBQU4sQ0FBVyxrQkFBWCxFQUErQixJQUEvQixDQUFvQyxZQUFZO0FBQzVDLFFBQUksUUFBUSxFQUFFLElBQUYsQ0FBWjtBQUNBLFFBQUksUUFBUSwySkFBWjs7QUFFQSxRQUFJLE1BQU0sSUFBTixDQUFXLEtBQUssS0FBaEIsQ0FBSixFQUE2QjtBQUN6QixXQUFNLFFBQU4sQ0FBZSxTQUFmO0FBQ0EsT0FBRSxrQkFBRixFQUFzQixHQUF0QixDQUEwQixFQUFDLFNBQVMsYUFBVixFQUExQjtBQUNELE9BQUUsc0JBQUYsRUFBMEIsR0FBMUIsQ0FBOEIsRUFBQyxXQUFXLENBQVosRUFBOUI7QUFDQSxPQUFFLHNCQUFGLEVBQTBCLEdBQTFCLENBQThCLEVBQUMsV0FBVyxDQUFaLEVBQTlCO0FBQ0EsZUFBVSxDQUFWLElBQWUsSUFBZjtBQUNGLEtBTkQsTUFPSyxJQUFJLEtBQUssS0FBTCxLQUFlLEVBQW5CLEVBQXVCO0FBQ3pCLFdBQU0sV0FBTixDQUFrQixTQUFsQjtBQUNBLE9BQUUsa0JBQUYsRUFBc0IsR0FBdEIsQ0FBMEIsRUFBQyxTQUFTLE9BQVYsRUFBMUI7QUFDQSxPQUFFLGlDQUFGLEVBQXFDLEdBQXJDLENBQXlDLEVBQUMsV0FBVyxDQUFaLEVBQXpDO0FBQ0EsZUFBVSxDQUFWLElBQWUsS0FBZjtBQUNGLEtBTEksTUFNQTtBQUNKLFdBQU0sUUFBTixDQUFlLFNBQWY7QUFDQSxPQUFFLGtCQUFGLEVBQXNCLEdBQXRCLENBQTBCLEVBQUMsU0FBUyxhQUFWLEVBQTFCO0FBQ0EsT0FBRSxzQkFBRixFQUEwQixHQUExQixDQUE4QixFQUFDLFdBQVcsQ0FBWixFQUE5QjtBQUNFLE9BQUUsc0JBQUYsRUFBMEIsR0FBMUIsQ0FBOEIsRUFBQyxXQUFXLENBQVosRUFBOUI7QUFDQSxlQUFVLENBQVYsSUFBZSxLQUFmO0FBQ0Y7QUFDSixJQXhCRDtBQXlCSCxHQTFCRDs7QUE0QkEsUUFBTSxFQUFOLENBQVMsUUFBVCxFQUFtQixVQUFDLENBQUQsRUFBTztBQUN6QixLQUFFLGNBQUY7QUFDQSxPQUFJLFlBQWMsT0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLG1CQUFkLENBQWxCO0FBQ0EsT0FBSSxjQUFjLE9BQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxxQkFBZCxDQUFsQjtBQUNBLE9BQUksUUFBYyxDQUFsQjs7QUFFQSxhQUFVLE9BQVYsQ0FBbUIsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFvQjtBQUN0QyxRQUFHLE9BQUgsRUFBWTtBQUNaLElBRkQ7O0FBSUEsT0FBSyxVQUFVLENBQWYsRUFBbUI7QUFDbEI7O0FBRUEsUUFBSSxJQUFJLE1BQU0sU0FBTixFQUFSOztBQUVBLE1BQUUsSUFBRixDQUFPO0FBQ00sV0FBTSxNQURaO0FBRU0sVUFBSyxhQUZYO0FBR00sV0FBTSxDQUhaO0FBSVEsY0FBUyxtQkFBVztBQUNsQixRQUFFLE1BQUYsRUFBVSxPQUFWLENBQWtCLHlIQUFsQixFQUNDLElBREQsR0FFQyxNQUZELENBRVEsSUFGUjtBQUdELE1BUlQ7QUFTUSxZQUFPLGlCQUFXO0FBQ2pCLFFBQUUsTUFBRixFQUFVLE9BQVYsQ0FBa0Isd0lBQWxCLEVBQ0UsSUFERixHQUVFLE1BRkYsQ0FFUyxJQUZUO0FBR0E7QUFiVCxLQUFQO0FBZVksV0FBTyxLQUFQO0FBRVosSUF0QkQsTUFzQk8sQ0FFTjtBQUNELEdBbkNEO0FBb0NBO0FBMWlCUSxDQUFWOztBQThpQkEsRUFBRSxNQUFGLEVBQVUsS0FBVixDQUFnQixJQUFJLElBQUosQ0FBUyxJQUFULENBQWMsR0FBZCxDQUFoQjs7Ozs7Ozs7Ozs7OztJQ2pqQk0sTTs7Ozs7Ozt1QkFFQSxFLEVBQUk7QUFBQTs7QUFDUixRQUFLLEdBQUwsR0FBb0IsRUFBRSxFQUFGLENBQXBCO0FBQ0EsUUFBSyxVQUFMLEdBQW9CLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxJQUFkLENBQXBCO0FBQ0EsUUFBSyxRQUFMLEdBQW9CLEtBQUssVUFBTCxDQUFnQixJQUFoQixDQUFxQixJQUFyQixDQUFwQjtBQUNBLFFBQUssV0FBTCxHQUFvQixLQUFLLFFBQUwsQ0FBYyxNQUFsQztBQUNBLFFBQUssS0FBTCxHQUFvQixHQUFwQjtBQUNBLFFBQUssSUFBTCxHQUFvQixDQUFDLEtBQUssS0FBMUI7QUFDQSxRQUFLLFFBQUwsR0FBbUIsSUFBbkI7QUFDQSxRQUFLLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxRQUFLLFNBQUwsR0FBb0IsS0FBcEI7O0FBR0EsUUFBSyxVQUFMLENBQWdCLEdBQWhCLENBQW9CLE9BQXBCLEVBQTZCLEtBQUssV0FBTCxHQUFpQixLQUFLLEtBQXRCLEdBQTRCLElBQXpEO0FBQ0EsS0FBRSxLQUFLLFFBQUwsQ0FBYyxDQUFkLENBQUYsRUFBb0IsUUFBcEIsQ0FBNkIsUUFBN0I7O0FBRUEsUUFBSyxHQUFMLENBQVMsS0FBVCxDQUFlLFlBQU07QUFBRSxVQUFLLElBQUw7QUFBYSxJQUFwQyxFQUFzQyxZQUFNO0FBQUUsVUFBSyxJQUFMO0FBQWEsSUFBM0Q7QUFFQTs7OzJCQUVRO0FBQUE7O0FBQ1IsUUFBSyxVQUFMLENBQWdCLE9BQWhCLENBQXdCO0FBQ3JCLFVBQU8sS0FBSyxJQUFMLEdBQVU7QUFESSxJQUF4QixFQUVLLEdBRkwsRUFFVSxZQUFNO0FBQ2IsTUFBRSxPQUFLLFFBQVAsRUFBaUIsV0FBakIsQ0FBNkIsUUFBN0I7QUFDQSxNQUFFLE9BQUssUUFBTCxDQUFjLE9BQUssWUFBbkIsQ0FBRixFQUFvQyxRQUFwQyxDQUE2QyxRQUE3QztBQUNBLFFBQUksT0FBSyxJQUFMLEdBQVksQ0FBQyxPQUFLLFdBQUwsR0FBaUIsQ0FBbEIsSUFBcUIsQ0FBRSxPQUFLLEtBQTVDLEVBQW9EO0FBQ25ELFlBQUssSUFBTCxHQUFZLE9BQUssSUFBTCxHQUFVLE9BQUssS0FBM0I7QUFDQSxZQUFLLFlBQUw7QUFDQSxLQUhELE1BR087QUFDTixZQUFLLElBQUwsR0FBWSxDQUFaO0FBQ0EsWUFBSyxZQUFMLEdBQW9CLENBQXBCO0FBQ0E7QUFDRCxJQVpIO0FBYUE7Ozt5QkFFTTs7QUFFTixPQUFJLENBQUMsS0FBSyxTQUFWLEVBQXFCO0FBQ3BCLFNBQUssS0FBTCxHQUFhLFlBQVksS0FBSyxNQUFMLENBQVksSUFBWixDQUFpQixJQUFqQixDQUFaLEVBQW9DLEtBQUssUUFBekMsQ0FBYjtBQUNBLFNBQUssU0FBTCxHQUFpQixJQUFqQjtBQUNBO0FBRUQ7Ozt5QkFFTTtBQUNOLE9BQUksS0FBSyxTQUFULEVBQW9CO0FBQ25CLGtCQUFjLEtBQUssS0FBbkI7QUFDQSxTQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDQTtBQUNEOzs7Ozs7a0JBSWEsTTs7Ozs7Ozs7Ozs7OztJQ3ZEVCxNOzs7Ozs7Ozs7QUFFTDt5QkFDUSxDLEVBQUcsQyxFQUFJO0FBQ2QsUUFBSyxJQUFJLEdBQVQsSUFBZ0IsQ0FBaEIsRUFBb0I7QUFDbkIsUUFBSSxFQUFFLGNBQUYsQ0FBa0IsR0FBbEIsQ0FBSixFQUE4QjtBQUM3QixPQUFFLEdBQUYsSUFBUyxFQUFFLEdBQUYsQ0FBVDtBQUNBO0FBQ0Q7QUFDRCxVQUFPLENBQVA7QUFDQTs7OzhCQUVXLEMsRUFBRztBQUNkLE9BQUksT0FBTyxDQUFYO0FBQ0EsT0FBSSxPQUFPLENBQVg7O0FBRUEsT0FBSSxDQUFDLENBQUwsRUFBUTtBQUFDLFFBQUksS0FBSSxPQUFPLEtBQWY7QUFBcUI7QUFDOUIsT0FBSSxFQUFFLEtBQUYsSUFBVyxFQUFFLEtBQWpCLEVBQXlCO0FBQ3hCLFdBQU8sRUFBRSxLQUFUO0FBQ0EsV0FBTyxFQUFFLEtBQVQ7QUFDQSxJQUhELE1BSUssSUFBSSxFQUFFLE9BQUYsSUFBYSxFQUFFLE9BQW5CLEVBQTZCO0FBQ2pDLFdBQU8sRUFBRSxPQUFGLEdBQVksU0FBUyxJQUFULENBQWMsVUFBMUIsR0FBdUMsU0FBUyxlQUFULENBQXlCLFVBQXZFO0FBQ0EsV0FBTyxFQUFFLE9BQUYsR0FBWSxTQUFTLElBQVQsQ0FBYyxTQUExQixHQUFzQyxTQUFTLGVBQVQsQ0FBeUIsU0FBdEU7QUFDQTtBQUNELFVBQU8sRUFBRSxHQUFJLElBQU4sRUFBWSxHQUFJLElBQWhCLEVBQVA7QUFDQTs7QUFFRDs7Ozs7O3VCQUdLLEUsRUFBSSxPLEVBQVM7QUFDakIsUUFBSyxHQUFMLEdBQWlDLEVBQWpDO0FBQ0EsUUFBSyxHQUFMLENBQVMsRUFBVCxHQUFpQyxFQUFqQztBQUNBLFFBQUssT0FBTCxHQUFpQztBQUN2QixjQUFVO0FBQ1QsaUJBQWE7QUFDWixtQkFBYyxFQUFDLEdBQUcsQ0FBSixFQUFPLEdBQUcsQ0FBVixFQUFhLEdBQUcsQ0FBaEIsRUFERjtBQUVaLGdCQUFXLEVBQUMsR0FBRyxDQUFDLENBQUwsRUFBUSxHQUFHLENBQVgsRUFBYyxHQUFHLENBQWpCLEVBRkM7QUFHWix3QkFBbUI7QUFDbEIsaUJBQVcsSUFETztBQUVsQixlQUFTLGdCQUZTO0FBR2xCLG1CQUFhO0FBSEs7QUFIUCxNQURKO0FBVVQsWUFBUTtBQUNQLG1CQUFjLEVBQUMsR0FBRyxFQUFKLEVBQVEsR0FBRyxFQUFYLEVBQWUsR0FBRyxDQUFDLENBQUQsRUFBRyxFQUFILENBQWxCLEVBRFA7QUFFUCx3QkFBbUI7QUFDbEIsaUJBQVcsSUFETztBQUVsQixlQUFTLGFBRlM7QUFHbEIsbUJBQWE7QUFISztBQUZaLE1BVkM7QUFrQlQsY0FBVTtBQUNULG1CQUFjLEVBQUMsR0FBRyxFQUFKLEVBQVEsR0FBRyxFQUFYLEVBQWUsR0FBRyxDQUFsQixFQURMO0FBRVQsZ0JBQVcsRUFBQyxHQUFHLENBQUosRUFBTyxHQUFHLENBQVYsRUFBYSxHQUFHLENBQWhCLEVBRkY7QUFHVCx3QkFBbUI7QUFDbEIsaUJBQVcsSUFETztBQUVsQixlQUFTLGdCQUZTO0FBR2xCLG1CQUFhO0FBSEs7QUFIVixNQWxCRDtBQTJCVDs7Ozs7Ozs7O0FBU0EsWUFBUTtBQUNQLG1CQUFjLEVBQUMsR0FBRyxFQUFKLEVBQVEsR0FBRyxFQUFYLEVBQWUsR0FBRyxDQUFsQixFQURQO0FBRVAsd0JBQW1CO0FBQ2xCLGlCQUFXLElBRE87QUFFbEIsZUFBUyxnQkFGUztBQUdsQixtQkFBWTtBQUhNO0FBRlo7QUFwQ0M7QUFEYSxJQUFqQztBQStDQSxRQUFLLE1BQUwsQ0FBWSxLQUFLLE9BQWpCLEVBQTBCLE9BQTFCO0FBQ0EsUUFBSyxHQUFMLENBQVMsVUFBVCxHQUFpQyxFQUFqQztBQUNBLFFBQUssR0FBTCxDQUFTLFVBQVQsQ0FBb0IsVUFBcEIsR0FBaUMsS0FBSyxHQUFMLENBQVMsRUFBVCxDQUFZLGFBQVosQ0FBMEIsaUJBQTFCLENBQWpDO0FBQ0EsUUFBSyxHQUFMLENBQVMsVUFBVCxDQUFvQixLQUFwQixHQUFpQyxLQUFLLEdBQUwsQ0FBUyxFQUFULENBQVksYUFBWixDQUEwQixzQkFBMUIsQ0FBakM7QUFDQSxRQUFLLEdBQUwsQ0FBUyxVQUFULENBQW9CLE9BQXBCLEdBQWlDLEtBQUssR0FBTCxDQUFTLEVBQVQsQ0FBWSxhQUFaLENBQTBCLGtCQUExQixDQUFqQztBQUNBLFFBQUssR0FBTCxDQUFTLFVBQVQsQ0FBb0IsT0FBcEIsR0FBaUMsS0FBSyxHQUFMLENBQVMsRUFBVCxDQUFZLGFBQVosQ0FBMEIsd0JBQTFCLENBQWpDO0FBQ0EsUUFBSyxHQUFMLENBQVMsVUFBVCxDQUFvQixLQUFwQixHQUFpQyxLQUFLLEdBQUwsQ0FBUyxFQUFULENBQVksYUFBWixDQUEwQiw0QkFBMUIsQ0FBakM7QUFDQSxRQUFLLFVBQUw7QUFDQTs7OytCQUVZO0FBQUE7O0FBRVosS0FBRSxLQUFLLEdBQUwsQ0FBUyxFQUFYLEVBQWUsRUFBZixDQUFrQixXQUFsQixFQUFnQyxVQUFDLENBQUQsRUFBTztBQUFDLFVBQUssV0FBTCxDQUFpQixDQUFqQjtBQUFvQixJQUE1RDtBQUNBLEtBQUUsS0FBSyxHQUFMLENBQVMsRUFBWCxFQUFlLEVBQWYsQ0FBa0IsWUFBbEIsRUFBZ0MsVUFBQyxDQUFELEVBQU87QUFBQyxVQUFLLFlBQUwsQ0FBa0IsQ0FBbEI7QUFBcUIsSUFBN0Q7QUFDQSxLQUFFLEtBQUssR0FBTCxDQUFTLEVBQVgsRUFBZSxFQUFmLENBQWtCLFlBQWxCLEVBQWdDLFlBQU87QUFBQyxVQUFLLFlBQUw7QUFBb0IsSUFBNUQ7QUFDQTs7OzhCQUVXLEUsRUFBSTtBQUFBOztBQUNmLHlCQUFzQixZQUFNO0FBQUUsV0FBSyxNQUFMLENBQVksRUFBWjtBQUFrQixJQUFoRDtBQUNBOzs7aUNBRWM7QUFDZCxRQUFJLElBQUksR0FBUixJQUFlLEtBQUssR0FBTCxDQUFTLFVBQXhCLEVBQW9DO0FBQ25DLFVBQU0sTUFBTixDQUFhLEtBQUssR0FBTCxDQUFTLFVBQVQsQ0FBb0IsR0FBcEIsQ0FBYjtBQUNBO0FBQ0Q7OzsrQkFFWSxFLEVBQUk7QUFBQTs7QUFDaEIseUJBQXNCLFlBQU07QUFDM0IsU0FBSSxJQUFJLEdBQVIsSUFBZSxPQUFLLEdBQUwsQ0FBUyxVQUF4QixFQUFvQztBQUNuQyxTQUFJLE9BQUssT0FBTCxDQUFhLFFBQWIsQ0FBc0IsR0FBdEIsS0FBOEIsU0FBbEMsRUFBOEM7QUFBQztBQUFVO0FBQ3pELFdBQU07QUFDTCxlQUFTLE9BQUssR0FBTCxDQUFTLFVBQVQsQ0FBb0IsR0FBcEIsQ0FESjtBQUVMLGdCQUFVLE9BQUssT0FBTCxDQUFhLFFBQWIsQ0FBc0IsR0FBdEIsRUFBMkIsZ0JBQTNCLElBQStDLFNBQS9DLEdBQTJELE9BQUssT0FBTCxDQUFhLFFBQWIsQ0FBc0IsR0FBdEIsRUFBMkIsZ0JBQTNCLENBQTRDLFFBQTVDLElBQXdELENBQW5ILEdBQXVILENBRjVIO0FBR0wsY0FBUSxPQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXNCLEdBQXRCLEVBQTJCLGdCQUEzQixJQUErQyxTQUEvQyxHQUEyRCxPQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXNCLEdBQXRCLEVBQTJCLGdCQUEzQixDQUE0QyxNQUE1QyxJQUFzRCxRQUFqSCxHQUE0SCxRQUgvSDtBQUlMLGtCQUFZLE9BQUssT0FBTCxDQUFhLFFBQWIsQ0FBc0IsR0FBdEIsRUFBMkIsZ0JBQTNCLElBQStDLFNBQS9DLEdBQTJELE9BQUssT0FBTCxDQUFhLFFBQWIsQ0FBc0IsR0FBdEIsRUFBMkIsZ0JBQTNCLENBQTRDLFVBQTVDLElBQTBELElBQXJILEdBQTRILElBSm5JO0FBS0wsY0FBUSxDQUxIO0FBTUwsY0FBUSxDQU5IO0FBT0wsY0FBUSxDQVBIO0FBUUwsa0JBQVksQ0FSUDtBQVNMLGtCQUFZLENBVFA7QUFVTCxrQkFBWSxDQVZQO0FBV0wsZUFBUyxDQVhKO0FBWUwsZUFBUyxDQVpKO0FBYUwsZUFBUztBQWJKLE1BQU47QUFlQTtBQUNELElBbkJEO0FBb0JBOzs7eUJBRU0sRSxFQUFJO0FBQ1Y7QUFDQSxPQUFJLFdBQVcsS0FBSyxXQUFMLENBQWlCLEVBQWpCLENBQWY7QUFDQztBQUNELE9BQUksYUFBYSxFQUFDLE1BQU8sU0FBUyxJQUFULENBQWMsVUFBZCxHQUEyQixTQUFTLGVBQVQsQ0FBeUIsVUFBNUQsRUFBd0UsS0FBTSxTQUFTLElBQVQsQ0FBYyxTQUFkLEdBQTBCLFNBQVMsZUFBVCxDQUF5QixTQUFqSSxFQUFqQjtBQUNBLE9BQUksU0FBUyxLQUFLLEdBQUwsQ0FBUyxFQUFULENBQVkscUJBQVosRUFBYjtBQUNDO0FBQ0QsT0FBSSxjQUFjLEVBQUUsR0FBSSxTQUFTLENBQVQsR0FBYSxPQUFPLElBQXBCLEdBQTJCLFdBQVcsSUFBNUMsRUFBa0QsR0FBSSxTQUFTLENBQVQsR0FBYSxPQUFPLEdBQXBCLEdBQTBCLFdBQVcsR0FBM0YsRUFBbEI7O0FBRUE7QUFDQSxRQUFJLElBQUksR0FBUixJQUFlLEtBQUssR0FBTCxDQUFTLFVBQXhCLEVBQW9DO0FBQ25DLFFBQUksS0FBSyxHQUFMLENBQVMsVUFBVCxDQUFvQixHQUFwQixLQUE0QixTQUE1QixJQUF5QyxLQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXNCLEdBQXRCLEtBQThCLFNBQTNFLEVBQXVGO0FBQ3RGO0FBQ0E7QUFDRCxRQUFJLElBQUksS0FBSyxPQUFMLENBQWEsUUFBYixDQUFzQixHQUF0QixLQUE4QixTQUE5QixHQUEwQyxLQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXNCLEdBQXRCLEVBQTJCLFdBQTNCLElBQTBDLEVBQUMsR0FBRSxDQUFILEVBQUssR0FBRSxDQUFQLEVBQVMsR0FBRSxDQUFYLEVBQXBGLEdBQW9HLEVBQUMsR0FBRSxDQUFILEVBQUssR0FBRSxDQUFQLEVBQVMsR0FBRSxDQUFYLEVBQTVHO0FBQ0EsUUFBSSxJQUFJLEtBQUssT0FBTCxDQUFhLFFBQWIsQ0FBc0IsR0FBdEIsS0FBOEIsU0FBOUIsR0FBMEMsS0FBSyxPQUFMLENBQWEsUUFBYixDQUFzQixHQUF0QixFQUEyQixRQUEzQixJQUF1QyxFQUFDLEdBQUUsQ0FBSCxFQUFLLEdBQUUsQ0FBUCxFQUFTLEdBQUUsQ0FBWCxFQUFqRixHQUFpRyxFQUFDLEdBQUUsQ0FBSCxFQUFLLEdBQUUsQ0FBUCxFQUFTLEdBQUUsQ0FBWCxFQUF6Rzs7QUFFQSxTQUFLLFFBQUwsQ0FBYyxDQUFkO0FBQ0EsU0FBSyxRQUFMLENBQWMsQ0FBZDs7QUFFQSxRQUFJLGFBQWE7QUFDaEIsa0JBQWM7QUFDYixTQUFHLENBQUMsRUFBRSxDQUFGLENBQUksQ0FBSixJQUFPLEVBQUUsQ0FBRixDQUFJLENBQUosQ0FBUixJQUFnQixPQUFPLEtBQXZCLEdBQTZCLFlBQVksQ0FBekMsR0FBNkMsRUFBRSxDQUFGLENBQUksQ0FBSixDQURuQztBQUViLFNBQUcsQ0FBQyxFQUFFLENBQUYsQ0FBSSxDQUFKLElBQU8sRUFBRSxDQUFGLENBQUksQ0FBSixDQUFSLElBQWdCLE9BQU8sTUFBdkIsR0FBOEIsWUFBWSxDQUExQyxHQUE4QyxFQUFFLENBQUYsQ0FBSSxDQUFKLENBRnBDO0FBR2IsU0FBRyxDQUFDLEVBQUUsQ0FBRixDQUFJLENBQUosSUFBTyxFQUFFLENBQUYsQ0FBSSxDQUFKLENBQVIsSUFBZ0IsT0FBTyxNQUF2QixHQUE4QixZQUFZLENBQTFDLEdBQThDLEVBQUUsQ0FBRixDQUFJLENBQUo7QUFIcEMsTUFERTtBQU1oQixlQUFXO0FBQ1YsU0FBRyxDQUFDLEVBQUUsQ0FBRixDQUFJLENBQUosSUFBTyxFQUFFLENBQUYsQ0FBSSxDQUFKLENBQVIsSUFBZ0IsT0FBTyxNQUF2QixHQUE4QixZQUFZLENBQTFDLEdBQThDLEVBQUUsQ0FBRixDQUFJLENBQUosQ0FEdkM7QUFFVixTQUFHLENBQUMsRUFBRSxDQUFGLENBQUksQ0FBSixJQUFPLEVBQUUsQ0FBRixDQUFJLENBQUosQ0FBUixJQUFnQixPQUFPLEtBQXZCLEdBQTZCLFlBQVksQ0FBekMsR0FBNkMsRUFBRSxDQUFGLENBQUksQ0FBSixDQUZ0QztBQUdWLFNBQUcsQ0FBQyxFQUFFLENBQUYsQ0FBSSxDQUFKLElBQU8sRUFBRSxDQUFGLENBQUksQ0FBSixDQUFSLElBQWdCLE9BQU8sS0FBdkIsR0FBNkIsWUFBWSxDQUF6QyxHQUE2QyxFQUFFLENBQUYsQ0FBSSxDQUFKO0FBSHRDO0FBTkssS0FBakI7O0FBYUEsU0FBSyxHQUFMLENBQVMsVUFBVCxDQUFvQixHQUFwQixFQUF5QixLQUF6QixDQUErQixlQUEvQixHQUFpRCxLQUFLLEdBQUwsQ0FBUyxVQUFULENBQW9CLEdBQXBCLEVBQXlCLEtBQXpCLENBQStCLFNBQS9CLEdBQTJDLGdCQUFnQixXQUFXLFdBQVgsQ0FBdUIsQ0FBdkMsR0FBMkMsaUJBQTNDLEdBQStELFdBQVcsV0FBWCxDQUF1QixDQUF0RixHQUEwRixpQkFBMUYsR0FBOEcsV0FBVyxXQUFYLENBQXVCLENBQXJJLEdBQXlJLGNBQXpJLEdBQTBKLFdBQVcsUUFBWCxDQUFvQixDQUE5SyxHQUFrTCxlQUFsTCxHQUFvTSxXQUFXLFFBQVgsQ0FBb0IsQ0FBeE4sR0FBNE4sZUFBNU4sR0FBOE8sV0FBVyxRQUFYLENBQW9CLENBQWxRLEdBQXNRLE1BQWxXO0FBQ0E7QUFDRDs7OzJCQUVTLEcsRUFBSztBQUNkLFFBQUksSUFBSSxDQUFSLElBQWEsR0FBYixFQUFrQjtBQUNqQixRQUFJLElBQUksQ0FBSixLQUFVLFNBQWQsRUFBMEI7QUFDekIsU0FBSSxDQUFKLElBQVMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFUO0FBQ0EsS0FGRCxNQUdLLElBQUksT0FBTyxJQUFJLENBQUosQ0FBUCxLQUFrQixRQUF0QixFQUFpQztBQUNyQyxTQUFJLENBQUosSUFBUyxDQUFDLENBQUMsQ0FBRCxHQUFHLElBQUksQ0FBSixDQUFKLEVBQVcsSUFBSSxDQUFKLENBQVgsQ0FBVDtBQUNBO0FBQ0Q7QUFDRDs7Ozs7O2tCQUlhLE0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFNsaWRlciBmcm9tICcuL21vZHVsZXMvU2xpZGVyLmpzJztcbmltcG9ydCBUaWx0RnggZnJvbSAnLi9tb2R1bGVzL1RpbHRGeC5qcyc7XG5cbmxldCBBcHAgPSB7XG5cblx0XG5cdGluaXQoKSB7XG5cdFx0dGhpcy4kZWwgICAgICAgICAgPSAkKCdib2R5Jyk7XG5cdFx0dGhpcy4kbGlua1RvICAgICAgPSB0aGlzLiRlbC5maW5kKCcuanMtbGluay10bycpO1xuXHRcdHRoaXMubmF2IFx0ICAgICAgPSB0aGlzLiRlbC5maW5kKCcubWFpbi1uYXYnKTtcdFx0XG5cdFx0dGhpcy4kcHJldmlld3MgICAgPSB0aGlzLiRlbC5maW5kKCcuanMtcHJldmlldycpO1xuXHRcdHRoaXMuJHNsaWRlciAgICAgID0gdGhpcy4kZWwuZmluZCgnLmpzLXNsaWRlcicpO1xuXHRcdHRoaXMuJHNraWxscyAgICAgID0gdGhpcy4kZWwuZmluZCgnLmpzLXNraWxscy1jb250ZW50Jyk7XG5cdFx0dGhpcy4kYmFuZHMgICAgICAgPSB0aGlzLiRlbC5maW5kKCcuanMtYmFuZCcpO1xuXHRcdHRoaXMuJG9wZW5HYWxlcnkgID0gdGhpcy4kZWwuZmluZCgnLmpzLW9wZW4tZ2FsZXJ5Jyk7XG5cdFx0dGhpcy4kZm9ybSAgICAgICAgPSB0aGlzLiRlbC5maW5kKCcuanMtZm9ybScpO1xuXHRcdHRoaXMudGlsdFNldHRpbmdzID0gW1xuXHRcdFx0e30sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAxMCwgejogMzB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogLTEwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAyMDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRsaW5lcyA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAxMCwgejogWzAsNzBdfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IC0yfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAyMDAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IDJ9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG92ZXJsYXkgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogLTEwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IDJ9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwMCwgeTogMTAwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAyMDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdGltZ1dyYXBwZXIgOiB7XG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAtNSwgeTogMTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDkwMCwgZWFzaW5nIDogJ2Vhc2VPdXRDdWJpYyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMzAsIHk6IDMwLCB6OiBbMCw0MF19LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogWzAsMTVdLCB5OiAwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMjAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAxMCwgejogWzAsMjBdfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMDAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMDAsIHk6IDEwMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogOTAwLCBlYXNpbmcgOiAnZWFzZU91dEN1YmljJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IC01LCB5OiAxMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNTAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMjAsIHk6IDIwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAyMDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNSwgeTogLTUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogNn0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNTAsIHk6IDUwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA1MCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDAsIHk6IC04LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDMsIHk6IDMsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEyMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRsaW5lcyA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDE1LCB5OiAxNSwgejogWzAsMTVdfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMjAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDAsIHk6IDgsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDYwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogLTE1LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA5MDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDUwLCB5OiA1MCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0bGluZXMgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAtNSwgeTogNSwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxNSwgeTogMTUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogM30sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTUwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFbGFzdGljJywgZWxhc3RpY2l0eSA6IDcwMH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG92ZXJsYXkgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxNSwgeTogLTE1LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA1MDAsZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNTAsIHk6IDUwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA1MDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdGltZ1dyYXBwZXIgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1LCB5OiA1LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA4MDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhcnQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAxMCwgejogWzAsNTBdfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMDAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YXJ0J31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNTAsIHk6IDUwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA4MDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhcnQnfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRsaW5lcyA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDQwLCB5OiA0MCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTUwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFbGFzdGljJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAyMCwgeTogMjAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogLTV9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEwMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogLTMwLCB5OiAtMzAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogM30sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNzUwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMDAsIHk6IDEwMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNzUwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fV07XG5cblx0XHR0aGlzLlVzZXJTZWUgICA9IHRydWU7XG5cdFx0dGhpcy5za2lsbHNPbiAgPSBmYWxzZTtcblxuXHRcdHRoaXMuc3IgXHQgICA9IFNjcm9sbFJldmVhbCh7IHJlc2V0OiBmYWxzZSB9KTtcblxuXHRcdC8vaW5pdCBTbGlkZXIgXG5cdFx0aWYgKHRoaXMuJHNsaWRlci5sZW5ndGgpIHtcblx0XHRcdHRoaXMuYXV0b3BsYXkgPSBuZXcgU2xpZGVyO1xuXHRcdFx0dGhpcy5hdXRvcGxheS5pbml0KHRoaXMuJHNsaWRlcik7XG5cdFx0fVxuXHRcdHRoaXMudmlld0lzQWN0aXZlKCk7IFx0XG5cblx0XHQvLyBsaW5rVG8gZnVuY3Rpb24gaWYgbGlua3MgZXhpc3QgXG5cdFx0aWYgKHRoaXMuJGxpbmtUby5sZW5ndGgpIHRoaXMubGlua1RvKCk7XG5cblx0XHQvLyBzY3JvbGwgZm9yIHRvcCBtZW51IG5hdiBcblx0XHR0aGlzLnNjcm9sbCgpO1xuXG5cdFx0Ly8gZnVuY3Rpb24gcmV2YWwgXG5cdFx0dGhpcy5yZXZhbCgpO1x0XG5cblx0XHQvL29wZW4gZ2FsZXJ5IFxuXHRcdHRoaXMuJG9wZW5HYWxlcnkub24oJ2NsaWNrJywgdGhpcy5vcGVuR2FsZXJ5KVxuXG5cdFx0Ly9wcmVsb2FkIGltZyBcblx0XHRpZiAodGhpcy4kcHJldmlld3MubGVuZ3RoKSB0aGlzLnByZWxvYWQoKTtcdFxuXG5cdFx0Ly9wcmVsb2FkIGltZyBwcmV2aWV3IFxuXHRcdHRoaXMuaW5pdFBvcnRmb2xpb1ByZXZpZXcoKTtcblxuXHRcdC8vaW5pdCBmb3JtIFxuXHRcdGlmICh0aGlzLiRmb3JtLmxlbmd0aCkgdGhpcy5pbml0Rm9ybSgpO1xuXG5cdFx0Ly9zY3JvbGx0byBtb2JpbGUgXG5cdFx0dGhpcy4kZWwuZmluZCgnLmpzLXJlYWRtb3JlLW1vYmlsZScpLm9uKCd0b3VjaCBjbGljaycsIChlKSA9PiB7XG5cdFx0XHR0aGlzLiRlbC5hbmltYXRlKHtcblx0XHQgICAgICAgIHNjcm9sbFRvcDogdGhpcy4kZWwuZmluZCgnLnNlY29uZC1zZWN0aW9uJykub2Zmc2V0KCkudG9wXG5cdFx0ICAgIH0sIDEwMDApO1xuXHRcdH0pXG5cdFx0XG5cdH0sXG5cblx0dmlld0lzQWN0aXZlKCkge1xuXHRcdHdpbmRvdy5vbmZvY3VzID0gKCkgPT4ge1xuXHRcdCAgICB0aGlzLlVzZXJTZWUgPSB0cnVlO1xuXHRcdCAgfTtcblxuXHRcdHdpbmRvdy5vbmJsdXIgPSAoKSA9PiB7XG5cdFx0ICAgIHRoaXMuVXNlclNlZSA9IGZhbHNlO1xuXHRcdCAgfTtcblx0XHRzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdCAgICBpZiAoIXRoaXMuVXNlclNlZSkgdGhpcy5hdXRvcGxheS5zdG9wKCk7XG5cdFx0fSwgMTAwMCk7XG5cdH0sXG5cblx0bGlua1RvKCkge1xuXHRcdHRoaXMuJGxpbmtUby5vbignY2xpY2sgdG91Y2gnLCAoZSkgPT4ge1xuXHRcdFx0bGV0IHRhcmdldCAgID0gJChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdGxldCAkc2VjdGlvbiA9IHRoaXMuJGVsLmZpbmQodGFyZ2V0KTtcblx0XHRcdCQoJ2JvZHksIGh0bWwnKS5hbmltYXRlKHtcblx0XHQgICAgICAgIHNjcm9sbFRvcDogJHNlY3Rpb24ub2Zmc2V0KCkudG9wXG5cdFx0ICAgIH0sIDEwMDApO1xuXHRcdH0pXG5cdH0sIFxuXG5cdGlzVmlzaWJsZShlbGVtZW50KSB7XG5cdFx0bGV0ICRlbGVtZW50ICAgICAgICA9ICQoZWxlbWVudCk7XG5cdFx0bGV0IHRvcEVsZW1lbnQgXHQgICAgPSAkZWxlbWVudC5vZmZzZXQoKS50b3A7XG5cdFx0bGV0IGJvdHRvbUVsZW1lbnQgXHQ9ICgkZWxlbWVudC5vZmZzZXQoKS50b3AgKyAkZWxlbWVudC5oZWlnaHQoKSApIDtcblx0XHRsZXQgc2Nyb2xsdG9wIFx0ICAgID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXHRcdGxldCBzY3JvbGxCb3R0b20gXHQ9IHNjcm9sbHRvcCArICQod2luZG93KS5oZWlnaHQoKTtcblx0XHRsZXQgaXNWaXNpYmxlICAgICAgID0gZmFsc2U7XG5cblx0XHRpZiAoIHRvcEVsZW1lbnQgPiBzY3JvbGx0b3AgJiYgYm90dG9tRWxlbWVudCA8IHNjcm9sbEJvdHRvbSApIHtcblx0XHRcdGlzVmlzaWJsZSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlzVmlzaWJsZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gaXNWaXNpYmxlIDtcblx0fSxcblxuXHRvcGVuR2FsZXJ5KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0ICR3cmFwcGVyICAgPSBBcHAuJGVsLmZpbmQoJy5qcy1nYWxsZXJ5LXdyYXBwZXInKTtcblx0XHRsZXQgdGFyZ2V0ICAgICA9ICQoZS50YXJnZXQpLmF0dHIoJ2hyZWYnKTtcblx0XHRsZXQgJGN1cnJlbnQgICA9ICR3cmFwcGVyLmZpbmQodGFyZ2V0KTtcblx0XHRsZXQgJGNsb3NlICAgICA9ICR3cmFwcGVyLmZpbmQoJy5qcy1jbG9zZS1nYWxlcnknKTtcblx0XHRjb25zb2xlLmxvZygkd3JhcHBlciwgdGFyZ2V0LCAkY3VycmVudClcblx0XHRpZigkY3VycmVudC5sZW5ndGgpIHtcblx0XHRcdCR3cmFwcGVyLmFkZENsYXNzKCdvcGVuJyk7XHRcdFx0XG5cdFx0XHRBcHAuJGVsLmFkZENsYXNzKCdvdmVyZmxvdy1oaWRkZW4nKTtcblx0XHRcdCRjdXJyZW50LmNzcyggJ2Rpc3BsYXknLCAnYmxvY2snICk7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0JGN1cnJlbnQuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcblx0XHRcdFx0JGN1cnJlbnQuZmluZCgnLmxlZnQsIC5yaWdodCcpLmNzcygnaGVpZ2h0JywgJGN1cnJlbnQuZmluZCgnLmxlZnQnKS5vdXRlckhlaWdodCgpKTtcblx0XHRcdH0sIDcwMClcblx0XHRcdCRjdXJyZW50LmZpbmQoJy5qcy1yZWFkLW1vcmUnKS5vbignY2xpY2sgdG91Y2gnLCAoZSk9PiB7XG5cdFx0XHRcdCRjdXJyZW50LmFkZENsYXNzKCdzaG93LW1vcmUnKTtcblx0XHRcdH0pXG5cdFx0XHQkY2xvc2Uub24oJ2NsaWNrIHRvdWNoJywgQXBwLmNsb3NlR2FsZXJ5KVxuXHRcdH1cblx0fSxcblxuXHRjbG9zZUdhbGVyeSgpIHtcblx0XHRsZXQgJHdyYXBwZXIgICA9IEFwcC4kZWwuZmluZCgnLmpzLWdhbGxlcnktd3JhcHBlcicpO1x0XHRcblx0XHRsZXQgJHZpc2libGUgICA9ICR3cmFwcGVyLmZpbmQoJy52aXNpYmxlJyk7XG5cdFx0XG5cdFx0aWYoJHZpc2libGUubGVuZ3RoKSB7XG5cdFx0ICAgICR2aXNpYmxlLmFuaW1hdGUoe3Njcm9sbFRvcDowfSwgJzEwMCcpO1x0XHRcdFxuXHRcdFx0JHZpc2libGUucmVtb3ZlQ2xhc3MoJ3Zpc2libGUgc2hvdy1tb3JlJyk7XHRcdFx0XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcdFx0XHRcdFxuXHRcdFx0XHQkdmlzaWJsZS5jc3MoICdkaXNwbGF5JywgJ25vbmUnICk7XG5cdFx0XHRcdCR3cmFwcGVyLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cdFx0XHRcdEFwcC4kZWwucmVtb3ZlQ2xhc3MoJ292ZXJmbG93LWhpZGRlbicpO1x0XHRcdFx0XG5cdFx0XHR9LCA3MDApO1xuXHRcdH1cblx0fSxcblxuXHRzY3JvbGwoKSB7XG5cdFx0bGV0IHN0ZXAxID0gdGhpcy4kZWwuZmluZCgnI2Fib3V0Jykub2Zmc2V0KCkudG9wO1xuXHRcdCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSBzdGVwMS0xMDAgPyB0aGlzLm5hdi5hZGRDbGFzcygnZml4eScpIDogdGhpcy5uYXYucmVtb3ZlQ2xhc3MoJ2ZpeHknKTtcblx0XHQkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPj0gc3RlcDEgPyB0aGlzLm5hdi5hZGRDbGFzcygnYWN0aXZlJykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHQkKHdpbmRvdykub24oJ3Njcm9sbCcsICgpID0+IHtcblx0XHRcdGxldCBjdXJyZW50U2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0XHRjdXJyZW50U2Nyb2xsID49IDgwID8gdGhpcy5uYXYuY3NzKCd0b3AnLCAnLTYxcHgnKSA6IHRoaXMubmF2LmNzcygndG9wJywgJzBweCcpO1xuXHRcdFx0Y3VycmVudFNjcm9sbCA+PSBzdGVwMS0xMDAgPyB0aGlzLm5hdi5hZGRDbGFzcygnZml4eScpIDogdGhpcy5uYXYucmVtb3ZlQ2xhc3MoJ2ZpeHknKTtcblx0XHRcdGN1cnJlbnRTY3JvbGwgPj0gc3RlcDEgPyB0aGlzLm5hdi5hZGRDbGFzcygnYWN0aXZlJykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHRcdC8vaW5pdCBzbGlkZXIgXHRcdFxuXHRcdFx0aWYgKHRoaXMuJHNsaWRlci5sZW5ndGgpIHtcdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy5pc1Zpc2libGUodGhpcy4kc2xpZGVyKSkge1xuXHRcdFx0XHRcdHRoaXMuYXV0b3BsYXkucGxheSgpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5hdXRvcGxheS5zdG9wKClcblx0XHRcdFx0fVxuXHRcdFx0fSBcblxuXHRcdFx0aWYgKHRoaXMuJHNraWxscy5sZW5ndGgpIHtcdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy5pc1Zpc2libGUodGhpcy4kc2tpbGxzWzBdKSkge1x0XG5cdFx0XHRcdFx0dGhpcy5zaG93U2tpbGxzKCk7XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy4kYmFuZHMubGVuZ3RoKSB7XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnNob3dCYW5kcygpO1x0XHRcdFx0XG5cdFx0XHR9ICBcblx0XHR9KTsgXG5cdFxuXHR9LFxuXG5cdHJldmFsKCkge1xuXHRcdC8vbGVmdCB0byByaWdodFxuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtbGVmdCcsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2xlZnQnLCBzY2FsZTogMSwgZHVyYXRpb246NTAwfSk7XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1sZWZ0LWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnbGVmdCcsIHNjYWxlOiAxLCBkZWxheTogNTAwLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLWxlZnQtbG9uZy1kZWxheScsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2xlZnQnLCBzY2FsZTogMSwgZGVsYXk6IDE1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdC8vcmlnaHQgdG8gbGVmdFxuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtcmlnaHQnLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdyaWdodCcsIHNjYWxlOiAxLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXJpZ2h0LWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAncmlnaHQnLCBzY2FsZTogMSwgZGVsYXk6IDUwMCwgZHVyYXRpb246NTAwfSk7XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1yaWdodC1sb25nLWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAncmlnaHQnLCBzY2FsZTogMSwgZGVsYXk6IDE1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdC8vYm90dG9tIHRvIHRvcCBcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXRvcCcsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2JvdHRvbScsIHNjYWxlOiAxLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXRvcC1kZWxheScsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2JvdHRvbScsIHNjYWxlOiAxLCBkZWxheTogNTAwLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXRvcC1sb25nLWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnYm90dG9tJywgc2NhbGU6IDEsIGRlbGF5OiAxNTAwLCBkdXJhdGlvbjo1MDB9KTtcblxuXHR9LFxuXG5cdHNob3dTa2lsbHMoKSB7XG5cblx0XHRpZighdGhpcy5za2lsbHNPbikge1xuXHRcdFx0bGV0ICRza2lsbHMgPSB0aGlzLiRlbC5maW5kKCcuanMtcGVyY2VudCcpO1xuXHRcdFx0JHNraWxscy5lYWNoKCAoaW5kZXgsIGN1cnJlbnQpID0+IHtcblx0XHRcdFx0bGV0IF9wZXJjZW50ID0gJChjdXJyZW50KS5hdHRyKCdkYXRhLXBlcmNlbnQnKSsnJSc7XG5cdFx0XHRcdCQoY3VycmVudCkuY3NzKCd3aWR0aCcsIF9wZXJjZW50KTtcblx0XHRcdH0gKVxuXHRcdH1cblx0fSxcblxuXHRzaG93QmFuZHMoKSB7XG5cdFx0dGhpcy4kYmFuZHMuZWFjaCggKGksIGN1cnJlbnQpID0+IHtcblx0XHRcdGxldCBfYmFuZCA9ICQoY3VycmVudCk7XG5cblx0XHRcdGlmKHRoaXMuaXNWaXNpYmxlKGN1cnJlbnQpKSB7XG5cdFx0XHRcdF9iYW5kLmhhc0NsYXNzKCdqcy1iYW5kLXJpZ2h0JykgPyBfYmFuZC5jc3MoJ3JpZ2h0JywgMCkgOiBfYmFuZC5jc3MoJ2xlZnQnLCAwKTtcblx0XHRcdFx0aWYoX2JhbmQuaGFzQ2xhc3MoJ2pzLWxhc3QtYmFuZCcpKSB0aGlzLiRmb3JtLmFkZENsYXNzKCd2aXNpYmxlJyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblxuXHRwcmVsb2FkKCkge1xuXHRcdHRoaXMuJHByZXZpZXdzLmVhY2goKGlkeCwgY29udGFpbmVyKSA9PiB7XG5cdFx0XHRsZXQgJGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcblx0XHRcdGxldCBfdXJsICAgICAgID0gJGNvbnRhaW5lci5kYXRhKCdpbWFnZS11cmwnKTtcblx0XHRcdGxldCBpbWcgICAgICAgID0gbmV3IEltYWdlKCk7XG5cblx0XHRcdGltZy5zcmMgICAgICAgID0gX3VybDtcblxuXHQgICAgICAgIC8vIGlmIHdlIGhhdmUgdGhpcyBpbWFnZSBhbHJlYWR5IGNhY2hlZCwgd2UgZG9uJ3QgaGF2ZVxuXHQgICAgICAgIC8vIHRvIHdhaXQgZm9yIHRoZSBvbmxvYWQgY2FsbGJhY2sgYW5kIGNhbiByZW1vdmUgdGhlXG5cdCAgICAgICAgLy8gcHJldmlldyBpbWFnZSBpbW1lZGlhdGVseVxuXHQgICAgICAgIGlmKHRoaXMuaW1nQ29tcGxldGUoaW1nKSkge1xuXHQgICAgICAgIFx0dGhpcy5yZW1vdmVQcmV2aWV3KCRjb250YWluZXIsIF91cmwpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgXHRpbWcub25sb2FkID0gKCkgPT4ge1xuXHQgICAgICAgIFx0XHR0aGlzLnJlbW92ZVByZXZpZXcoJGNvbnRhaW5lciwgX3VybCk7XG5cdCAgICAgICAgXHR9O1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXHR9LFxuXG5cdGltZ0NvbXBsZXRlKGltZykge1xuICAgICAgICByZXR1cm4gaW1nLmNvbXBsZXRlIHx8IGltZy53aWR0aCArIGltZy5oZWlnaHQgPiAwO1xuICAgIH0sXG4gIFxuICAgIHJlbW92ZVByZXZpZXcoJGNvbnRhaW5lciwgdXJsKSB7XG4gICAgICAgICRjb250YWluZXIuY3NzKHsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoXCInICsgdXJsICsgJ1wiKSd9KTtcbiAgICAgICAgJGNvbnRhaW5lci5yZW1vdmVDbGFzcygnanMtcHJldmlldyBwcmV2aWV3Jyk7XG4gICAgfSxcblxuICAgIGluaXRQb3J0Zm9saW9QcmV2aWV3KCkge1xuXG5cdFx0bGV0IGlkeCA9IDA7XG5cdFx0W10uc2xpY2UuY2FsbCgkKCdhLnRpbHRlcicpKS5mb3JFYWNoKChlbCwgcG9zKSA9PiB7IFxuXHRcdFx0aWR4ID0gcG9zJTIgPT09IDAgPyBpZHgrMSA6IGlkeDtcblx0XHRcdGxldCBfVGlsdEZ4ID0gbmV3IFRpbHRGeDtcblx0XHRcdF9UaWx0RnguaW5pdChlbCwgQXBwLnRpbHRTZXR0aW5nc1tpZHgtMV0pO1xuXHRcdH0pO1xuXG5cdFx0bGV0IHBhdGVyICAgID0gdGhpcy4kZWwuZmluZCgnLnBhdGVyJyk7XG5cdFx0bGV0XHRwYXRlclNWRyA9IHBhdGVyLmZpbmQoJy5wYXRlcl9fc3ZnJyk7XG5cdFx0bGV0XHRwYXRoRWwgICA9IHBhdGVyU1ZHLmZpbmQoJ3BhdGgnKTtcblx0XHRsZXRcdHBhdGhzICAgID0ge2RlZmF1bHQ6IHBhdGhFbC5hdHRyKCdkJyksIGFjdGl2ZTogcGF0ZXJTVkcuYXR0cignZGF0YS1wYXRoLWhvdmVyJyl9O1xuXG5cdFx0cGF0ZXIub24oJ21vdXNlZW50ZXInLCAoKSA9PiB7XG5cdFx0XHRhbmltZS5yZW1vdmUocGF0aEVsKTtcblx0XHRcdGFuaW1lKHtcblx0XHRcdFx0dGFyZ2V0czogcGF0aEVsLFxuXHRcdFx0XHRkOiBwYXRocy5hY3RpdmUsXG5cdFx0XHRcdGR1cmF0aW9uOiA0MDAsXG5cdFx0XHRcdGVhc2luZzogJ2Vhc2VPdXRRdWFkJ1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRwYXRlci5vbignbW91c2VsZWF2ZScsICgpID0+IHtcblx0XHRcdGFuaW1lLnJlbW92ZShwYXRoRWwpO1xuXHRcdFx0YW5pbWUoe1xuXHRcdFx0XHR0YXJnZXRzOiBwYXRoRWwsXG5cdFx0XHRcdGQ6IHBhdGhzLmRlZmF1bHQsXG5cdFx0XHRcdGR1cmF0aW9uOiA0MDAsXG5cdFx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJ1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG5cblx0aW5pdEZvcm0oKSB7XG5cblx0XHRsZXQgJGZvcm0gPSB0aGlzLiRmb3JtOyBcblx0XHRsZXQgY2hlY2tGb3JtID0gWyBmYWxzZSwgZmFsc2UsIGZhbHNlXTtcblxuXHRcdCRmb3JtLmZpbmQoJ3RleHRhcmVhJykuYmx1cihmdW5jdGlvbiAoKSB7XG5cdFx0ICAgICRmb3JtLmZpbmQoJ3RleHRhcmVhJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0ICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuXHRcdCAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIl5bYS16QS1aw4Atw7rDgC3DvzAtOSTigqwuIF0rJFwiKTtcblxuXHRcdCAgICAgICAgaWYgKHJlZ2V4LnRlc3QodGhpcy52YWx1ZSkgKSB7XG5cdFx0ICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgICAgICAkKCcubXNnLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3RyYW5zcGFyZW50J30pO1xuXHRcdCAgICAgICAgICBcdCQoJy5tc2ctYm94IC5qcy1jaGVjaycpLmNzcyh7J29wYWNpdHknOiAxfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm1zZy1ib3ggLmpzLWVycm9yJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMF0gPSB0cnVlO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAgZWxzZSBpZiAodGhpcy52YWx1ZSA9PT0gJycpIHtcblx0XHQgICAgICAgICAgXHQkdGhpcy5yZW1vdmVDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgICBcdCQoJy5tc2ctYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAnd2hpdGUnfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm1zZy1ib3ggaW5wdXQgKyBsYWJlbCArIHNwYW4nKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdCQoJy5tc2ctYm94IC5qcy1jaGVjaycpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm1zZy1ib3ggLmpzLWVycm9yJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMF0gPSBmYWxzZTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICAgIGVsc2Uge1xuXHRcdCAgICAgICAgXHQkdGhpcy5hZGRDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgXHQkKCcubXNnLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3RyYW5zcGFyZW50J30pO1xuXHRcdCAgICAgICAgXHQkKCcubXNnLWJveCAuanMtY2hlY2snKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdCQoJy5tc2ctYm94IC5qcy1lcnJvcicpLmNzcyh7J29wYWNpdHknOiAxfSk7XG5cdFx0ICAgICAgICAgIFx0Y2hlY2tGb3JtWzBdID0gZmFsc2U7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgIH0pO1xuXHRcdH0pO1xuXG5cdFx0JGZvcm0uZmluZCgnLm5hbWUtYm94IGlucHV0JykuYmx1cihmdW5jdGlvbiAoKSB7XG5cblx0XHQgICAgJGZvcm0uZmluZCgnLm5hbWUtYm94IGlucHV0JykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0ICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuXHRcdCAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIl5bYS16QS1aw4Atw7rDgC3DvyBdKiRcIik7XG5cblx0XHQgICAgICAgIGlmIChyZWdleC50ZXN0KHRoaXMudmFsdWUpICkge1xuXHRcdCAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICAgICAgJCgnLm5hbWUtYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAndHJhbnNwYXJlbnQnfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm5hbWUtYm94IC5qcy1jaGVjaycpLmNzcyh7J29wYWNpdHknOiAxfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm5hbWUtYm94IC5qcy1lcnJvcicpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0Y2hlY2tGb3JtWzFdID0gdHJ1ZTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICAgIGVsc2UgaWYgKHRoaXMudmFsdWUgPT09ICcnKSB7XG5cdFx0ICAgICAgICAgIFx0JHRoaXMucmVtb3ZlQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgICAgXHQkKCcubmFtZS1ib3ggbGFiZWwnKS5jc3Moeydjb2xvcic6ICd3aGl0ZSd9KTtcblx0XHQgICAgICAgICAgXHQkKCcubmFtZS1ib3ggaW5wdXQgKyBsYWJlbCArIHNwYW4nKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVsxXSA9IGZhbHNlO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAgZWxzZSB7XG5cdFx0ICAgICAgICBcdCR0aGlzLmFkZENsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICBcdCQoJy5uYW1lLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3RyYW5zcGFyZW50J30pO1xuXHRcdCAgICAgICAgXHQkKCcubmFtZS1ib3ggLmpzLWNoZWNrJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHQkKCcubmFtZS1ib3ggLmpzLWVycm9yJykuY3NzKHsnb3BhY2l0eSc6IDF9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMV0gPSBmYWxzZTtcblx0XHQgICAgICAgIH1cblxuXHRcdCAgICB9KTtcblxuXHRcdH0pO1xuXG5cdFx0JGZvcm0uZmluZCgnLmVtYWlsLWJveCBpbnB1dCcpLmJsdXIoZnVuY3Rpb24gKCkge1xuXHRcdCAgICAkZm9ybS5maW5kKCcuZW1haWwtYm94IGlucHV0JykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0ICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuXHRcdCAgICAgICAgbGV0IHJlZ2V4ID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cblx0XHQgICAgICAgIGlmIChyZWdleC50ZXN0KHRoaXMudmFsdWUpICkge1xuXHRcdCAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICAgICAgJCgnLmVtYWlsLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3RyYW5zcGFyZW50J30pO1xuXHRcdCAgICAgICAgICBcdCQoJy5lbWFpbC1ib3ggLmpzLWNoZWNrJykuY3NzKHsnb3BhY2l0eSc6IDF9KTtcblx0XHQgICAgICAgICAgXHQkKCcuZW1haWwtYm94IC5qcy1lcnJvcicpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0Y2hlY2tGb3JtWzJdID0gdHJ1ZTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICAgIGVsc2UgaWYgKHRoaXMudmFsdWUgPT09ICcnKSB7XG5cdFx0ICAgICAgICAgIFx0JHRoaXMucmVtb3ZlQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgICAgXHQkKCcuZW1haWwtYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAnd2hpdGUnfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLmVtYWlsLWJveCBpbnB1dCArIGxhYmVsICsgc3BhbicpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0Y2hlY2tGb3JtWzJdID0gZmFsc2U7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICBlbHNlIHtcblx0XHQgICAgICAgIFx0JHRoaXMuYWRkQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgIFx0JCgnLmVtYWlsLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3RyYW5zcGFyZW50J30pO1xuXHRcdCAgICAgICAgXHQkKCcuZW1haWwtYm94IC5qcy1jaGVjaycpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLmVtYWlsLWJveCAuanMtZXJyb3InKS5jc3MoeydvcGFjaXR5JzogMX0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVsyXSA9IGZhbHNlO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICB9KTtcblx0XHR9KTtcblxuXHRcdCRmb3JtLm9uKCdzdWJtaXQnLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0bGV0ICRlcnJvck1zZyAgID0gdGhpcy4kZWwuZmluZCgnLmpzLWVycm9yLW1lc3NhZ2UnKTtcblx0XHRcdGxldCAkc3VjY2Vzc01zZyA9IHRoaXMuJGVsLmZpbmQoJy5qcy1zdWNjZXNzLW1lc3NhZ2UnKTtcblx0XHRcdGxldCBjaGVjayAgICAgICA9IDA7IFxuXG5cdFx0XHRjaGVja0Zvcm0uZm9yRWFjaCggKGVsZW1lbnQsIGluZGV4KSA9PiB7XHRcdFx0XHRcblx0XHRcdFx0aWYoZWxlbWVudCkgY2hlY2srKztcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoIGNoZWNrID09PSAzICkge1xuXHRcdFx0XHQvL2NhbiBzZW5kIGZvcm1cblxuXHRcdFx0XHRsZXQgcyA9ICRmb3JtLnNlcmlhbGl6ZSgpO1xuXG5cdFx0XHRcdCQuYWpheCh7XG5cdCAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcblx0ICAgICAgICAgICAgICAgIHVybDogXCIuLi9tYWlsLnBocFwiLFxuXHQgICAgICAgICAgICAgICAgZGF0YTogcyxcblx0ICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnByZXBlbmQoJzxkaXYgc3R5bGU9XCJwb3NpdGlvbjpmaXhlZDsgdG9wOjUwJTsgei1pbmRleDoyMDAwO1wiIGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlZvdHJlIGVtYWlsIMOgIGJpZW4gw6l0w6kgdHJhbnNtaXMgITwvZGl2PicpXG5cdCAgICAgICAgICAgICAgICAgICAgLmhpZGUoKVxuXHQgICAgICAgICAgICAgICAgICAgIC5mYWRlSW4oMTUwMCk7ICAgICAgICAgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuXHQgICAgICAgICAgICAgICAgICBcdCQoJ2JvZHknKS5wcmVwZW5kKCc8ZGl2IHN0eWxlPVwicG9zaXRpb246Zml4ZWQ7IHRvcDo1MCU7IHotaW5kZXg6MjAwMDtcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPkxcXCdlbnZvaSBkdSBtYWlsIGEgw6ljaG91w6ksIHZldWlsbGV6IHLDqWVzc2F5ZXIgU1ZQPC9kaXY+Jylcblx0ICAgICAgICAgICAgICAgICAgICAuaGlkZSgpXG5cdCAgICAgICAgICAgICAgICAgICAgLmZhZGVJbigxNTAwKTtcblx0ICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgIFx0fSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG59XG5cbiQod2luZG93KS5yZWFkeShBcHAuaW5pdC5iaW5kKEFwcCkpOyIsImNsYXNzIFNsaWRlciB7IFxuXG5cdGluaXQoZWwpIHtcblx0XHR0aGlzLiRlbCAgICAgICAgICA9ICQoZWwpO1xuXHRcdHRoaXMuJGNvbnRhaW5lciAgID0gdGhpcy4kZWwuZmluZCgndWwnKTtcblx0XHR0aGlzLiRzbGlkZXJzICAgICA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCdsaScpO1xuXHRcdHRoaXMubm9tYmVyU2xpZGUgID0gdGhpcy4kc2xpZGVycy5sZW5ndGg7XG5cdFx0dGhpcy53aWR0aCAgICAgICAgPSAzMDA7XG5cdFx0dGhpcy5sZWZ0ICAgICAgICAgPSAtdGhpcy53aWR0aDtcblx0XHR0aGlzLmR1cmF0aW9uIFx0ICA9IDM1MDA7XG5cdFx0dGhpcy5jdXJyZW50SW5kZXggPSAxO1xuXHRcdHRoaXMuaXNQbGF5aW5nICAgID0gZmFsc2U7XG5cdFx0XG5cblx0XHR0aGlzLiRjb250YWluZXIuY3NzKCd3aWR0aCcsIHRoaXMubm9tYmVyU2xpZGUqdGhpcy53aWR0aCsncHgnKTtcblx0XHQkKHRoaXMuJHNsaWRlcnNbMF0pLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXHRcdHRoaXMuJGVsLmhvdmVyKCgpID0+IHsgdGhpcy5zdG9wKCkgfSwgKCkgPT4geyB0aGlzLnBsYXkoKSB9ICk7XHRcdFxuXG5cdH1cblxuXHRzbGlkZXIoKSB7XG5cdFx0dGhpcy4kY29udGFpbmVyLmFuaW1hdGUoe1xuXHRcdFx0XHRcdGxlZnQgOiB0aGlzLmxlZnQrJ3B4J1xuXHRcdFx0XHR9LCAyMDAsICgpID0+IHtcblx0XHRcdFx0XHQkKHRoaXMuJHNsaWRlcnMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkKHRoaXMuJHNsaWRlcnNbdGhpcy5jdXJyZW50SW5kZXhdKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0aWYgKHRoaXMubGVmdCA+ICh0aGlzLm5vbWJlclNsaWRlLTEpKi0odGhpcy53aWR0aCkpIHtcblx0XHRcdFx0XHRcdHRoaXMubGVmdCA9IHRoaXMubGVmdC10aGlzLndpZHRoO1xuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SW5kZXgrKztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5sZWZ0ID0gMDtcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEluZGV4ID0gMDtcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxuXHRcdFx0XHR9KTtcblx0fVxuXG5cdHBsYXkoKSB7XG5cdFx0XG5cdFx0aWYgKCF0aGlzLmlzUGxheWluZykge1xuXHRcdFx0dGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMuc2xpZGVyLmJpbmQodGhpcyksIHRoaXMuZHVyYXRpb24pO1xuXHRcdFx0dGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuXHRcdH1cblx0XHRcblx0fVxuXG5cdHN0b3AoKSB7XG5cdFx0aWYgKHRoaXMuaXNQbGF5aW5nKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuXHRcdFx0dGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7IiwiY2xhc3MgVGlsdEZ4IHtcblxuXHQvLyBIZWxwZXIgdmFycyBhbmQgZnVuY3Rpb25zLlxuXHRleHRlbmQoIGEsIGIgKSB7XG5cdFx0Zm9yKCBsZXQga2V5IGluIGIgKSB7IFxuXHRcdFx0aWYoIGIuaGFzT3duUHJvcGVydHkoIGtleSApICkge1xuXHRcdFx0XHRhW2tleV0gPSBiW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBhO1xuXHR9XG5cblx0Z2V0TW91c2VQb3MoZSkge1xuXHRcdGxldCBwb3N4ID0gMDtcblx0XHRsZXQgcG9zeSA9IDA7XG5cblx0XHRpZiAoIWUpIHtsZXQgZSA9IHdpbmRvdy5ldmVudH1cblx0XHRpZiAoZS5wYWdlWCB8fCBlLnBhZ2VZKSBcdHtcblx0XHRcdHBvc3ggPSBlLnBhZ2VYO1xuXHRcdFx0cG9zeSA9IGUucGFnZVk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGUuY2xpZW50WCB8fCBlLmNsaWVudFkpIFx0e1xuXHRcdFx0cG9zeCA9IGUuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuXHRcdFx0cG9zeSA9IGUuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0XHR9XG5cdFx0cmV0dXJuIHsgeCA6IHBvc3gsIHkgOiBwb3N5IH1cblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0LlxuXHQgKi9cblx0aW5pdChlbCwgb3B0aW9ucykge1xuXHRcdHRoaXMuRE9NICAgICAgICAgICAgICAgICAgICAgICA9IHt9O1xuXHRcdHRoaXMuRE9NLmVsICAgICAgICAgICAgICAgICAgICA9IGVsO1xuXHRcdHRoaXMub3B0aW9ucyAgICAgICAgICAgICAgICAgICA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZ1dyYXBwZXIgOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMCwgeTogMCwgejogMH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogLTUsIHk6IDUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDEyMDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgOiAnZWFzZU91dEVsYXN0aWMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxhc3RpY2l0eSA6IDYwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZXMgOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IDEwLCB6OiBbMCwxMF19LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDEwMDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgOiAnZWFzZU91dEV4cG8nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxhc3RpY2l0eSA6IDYwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAyMCwgeTogMjAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDE1MDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgOiAnZWFzZU91dEVsYXN0aWMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxhc3RpY2l0eSA6IDYwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lypcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogMTAsIHo6IFswLDUwXX0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogNTAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNTAsIHk6IDUwLCB6OiAwfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb24gOiAxMjAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWFzaW5nIDogJ2Vhc2VPdXRFbGFzdGljJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsYXN0aWNpdHk6IDYwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0dGhpcy5leHRlbmQodGhpcy5vcHRpb25zLCBvcHRpb25zKTtcdFx0XG5cdFx0dGhpcy5ET00uYW5pbWF0YWJsZSAgICAgICAgICAgID0ge307XG5cdFx0dGhpcy5ET00uYW5pbWF0YWJsZS5pbWdXcmFwcGVyID0gdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLnRpbHRlcl9fZmlndXJlJyk7XG5cdFx0dGhpcy5ET00uYW5pbWF0YWJsZS5saW5lcyAgICAgID0gdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLnRpbHRlcl9fZGVjby0tbGluZXMnKTtcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlLmNhcHRpb24gICAgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcudGlsdGVyX19jYXB0aW9uJyk7XG5cdFx0dGhpcy5ET00uYW5pbWF0YWJsZS5vdmVybGF5ICAgID0gdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLnRpbHRlcl9fZGVjby0tb3ZlcmxheScpO1xuXHRcdHRoaXMuRE9NLmFuaW1hdGFibGUuc2hpbmUgICAgICA9IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoJy50aWx0ZXJfX2RlY28tLXNoaW5lID4gZGl2Jyk7XG5cdFx0dGhpcy5pbml0RXZlbnRzKCk7XG5cdH1cblxuXHRpbml0RXZlbnRzKCkge1x0XHRcblxuXHRcdCQodGhpcy5ET00uZWwpLm9uKCdtb3VzZW1vdmUnLCAgKGUpID0+IHt0aGlzLm1vdXNlbW92ZUZuKGUpfSk7XG5cdFx0JCh0aGlzLkRPTS5lbCkub24oJ21vdXNlbGVhdmUnLCAoZSkgPT4ge3RoaXMubW91c2VsZWF2ZUZuKGUpfSk7XG5cdFx0JCh0aGlzLkRPTS5lbCkub24oJ21vdXNlZW50ZXInLCAoICkgPT4ge3RoaXMubW91c2VlbnRlckZuKCl9KTtcblx0fVxuXG5cdG1vdXNlbW92ZUZuKGV2KSB7XHRcdFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7IHRoaXMubGF5b3V0KGV2KTsgfSk7XG5cdH1cblxuXHRtb3VzZWVudGVyRm4oKSB7XHRcdFxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuRE9NLmFuaW1hdGFibGUpIHtcblx0XHRcdGFuaW1lLnJlbW92ZSh0aGlzLkRPTS5hbmltYXRhYmxlW2tleV0pO1xuXHRcdH1cblx0fVxuXG5cdG1vdXNlbGVhdmVGbihldikge1x0XHRcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5ET00uYW5pbWF0YWJsZSkge1xuXHRcdFx0XHRpZiggdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0gPT0gdW5kZWZpbmVkICkge2NvbnRpbnVlO31cblx0XHRcdFx0YW5pbWUoe1xuXHRcdFx0XHRcdHRhcmdldHM6IHRoaXMuRE9NLmFuaW1hdGFibGVba2V5XSxcblx0XHRcdFx0XHRkdXJhdGlvbjogdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucmV2ZXJzZUFuaW1hdGlvbiAhPSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uLmR1cmF0aW9uIHx8IDAgOiAxLFxuXHRcdFx0XHRcdGVhc2luZzogdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucmV2ZXJzZUFuaW1hdGlvbiAhPSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uLmVhc2luZyB8fCAnbGluZWFyJyA6ICdsaW5lYXInLFxuXHRcdFx0XHRcdGVsYXN0aWNpdHk6IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnJldmVyc2VBbmltYXRpb24gIT0gdW5kZWZpbmVkID8gdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucmV2ZXJzZUFuaW1hdGlvbi5lbGFzdGljaXR5IHx8IG51bGwgOiBudWxsLFxuXHRcdFx0XHRcdHNjYWxlWDogMSxcblx0XHRcdFx0XHRzY2FsZVk6IDEsXG5cdFx0XHRcdFx0c2NhbGVaOiAxLFxuXHRcdFx0XHRcdHRyYW5zbGF0ZVg6IDAsXG5cdFx0XHRcdFx0dHJhbnNsYXRlWTogMCxcblx0XHRcdFx0XHR0cmFuc2xhdGVaOiAwLFxuXHRcdFx0XHRcdHJvdGF0ZVg6IDAsXG5cdFx0XHRcdFx0cm90YXRlWTogMCxcblx0XHRcdFx0XHRyb3RhdGVaOiAwXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0bGF5b3V0KGV2KSB7XG5cdFx0Ly8gTW91c2UgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50LlxuXHRcdGxldCBtb3VzZXBvcyA9IHRoaXMuZ2V0TW91c2VQb3MoZXYpO1xuXHRcdFx0Ly8gRG9jdW1lbnQgc2Nyb2xscy5cblx0XHRsZXRcdGRvY1Njcm9sbHMgPSB7bGVmdCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LCB0b3AgOiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3B9O1xuXHRcdGxldFx0Ym91bmRzID0gdGhpcy5ET00uZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHQvLyBNb3VzZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgbWFpbiBlbGVtZW50ICh0aGlzLkRPTS5lbCkuXG5cdFx0bGV0XHRyZWxtb3VzZXBvcyA9IHsgeCA6IG1vdXNlcG9zLnggLSBib3VuZHMubGVmdCAtIGRvY1Njcm9sbHMubGVmdCwgeSA6IG1vdXNlcG9zLnkgLSBib3VuZHMudG9wIC0gZG9jU2Nyb2xscy50b3AgfTtcblxuXHRcdC8vIE1vdmVtZW50IHNldHRpbmdzIGZvciB0aGUgYW5pbWF0YWJsZSBlbGVtZW50cy5cblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLkRPTS5hbmltYXRhYmxlKSB7XG5cdFx0XHRpZiggdGhpcy5ET00uYW5pbWF0YWJsZVtrZXldID09IHVuZGVmaW5lZCB8fCB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XSA9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHQgPSB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XSAhPSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS50cmFuc2xhdGlvbiB8fCB7eDowLHk6MCx6OjB9IDoge3g6MCx5OjAsejowfTtcblx0XHRcdGxldFx0ciA9IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnJvdGF0aW9uIHx8IHt4OjAseTowLHo6MH0gOiB7eDowLHk6MCx6OjB9O1xuXG5cdFx0XHR0aGlzLnNldFJhbmdlKHQpO1xuXHRcdFx0dGhpcy5zZXRSYW5nZShyKTtcblx0XHRcdFxuXHRcdFx0bGV0IHRyYW5zZm9ybXMgPSB7XG5cdFx0XHRcdHRyYW5zbGF0aW9uIDoge1xuXHRcdFx0XHRcdHg6ICh0LnhbMV0tdC54WzBdKS9ib3VuZHMud2lkdGgqcmVsbW91c2Vwb3MueCArIHQueFswXSxcblx0XHRcdFx0XHR5OiAodC55WzFdLXQueVswXSkvYm91bmRzLmhlaWdodCpyZWxtb3VzZXBvcy55ICsgdC55WzBdLFxuXHRcdFx0XHRcdHo6ICh0LnpbMV0tdC56WzBdKS9ib3VuZHMuaGVpZ2h0KnJlbG1vdXNlcG9zLnkgKyB0LnpbMF0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJvdGF0aW9uIDoge1xuXHRcdFx0XHRcdHg6IChyLnhbMV0tci54WzBdKS9ib3VuZHMuaGVpZ2h0KnJlbG1vdXNlcG9zLnkgKyByLnhbMF0sXG5cdFx0XHRcdFx0eTogKHIueVsxXS1yLnlbMF0pL2JvdW5kcy53aWR0aCpyZWxtb3VzZXBvcy54ICsgci55WzBdLFxuXHRcdFx0XHRcdHo6IChyLnpbMV0tci56WzBdKS9ib3VuZHMud2lkdGgqcmVsbW91c2Vwb3MueCArIHIuelswXVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLkRPTS5hbmltYXRhYmxlW2tleV0uc3R5bGUuV2Via2l0VHJhbnNmb3JtID0gdGhpcy5ET00uYW5pbWF0YWJsZVtrZXldLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyB0cmFuc2Zvcm1zLnRyYW5zbGF0aW9uLnggKyAncHgpIHRyYW5zbGF0ZVkoJyArIHRyYW5zZm9ybXMudHJhbnNsYXRpb24ueSArICdweCkgdHJhbnNsYXRlWignICsgdHJhbnNmb3Jtcy50cmFuc2xhdGlvbi56ICsgJ3B4KSByb3RhdGVYKCcgKyB0cmFuc2Zvcm1zLnJvdGF0aW9uLnggKyAnZGVnKSByb3RhdGVZKCcgKyB0cmFuc2Zvcm1zLnJvdGF0aW9uLnkgKyAnZGVnKSByb3RhdGVaKCcgKyB0cmFuc2Zvcm1zLnJvdGF0aW9uLnogKyAnZGVnKSc7XG5cdFx0fVxuXHR9XG5cblx0c2V0UmFuZ2UgKG9iaikge1xuXHRcdGZvcihsZXQgayBpbiBvYmopIHtcblx0XHRcdGlmKCBvYmpba10gPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRvYmpba10gPSBbMCwwXTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYoIHR5cGVvZiBvYmpba10gPT09ICdudW1iZXInICkge1xuXHRcdFx0XHRvYmpba10gPSBbLTEqb2JqW2tdLG9ialtrXV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGlsdEZ4OyJdfQ==
