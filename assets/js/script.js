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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvYXBwLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvU2xpZGVyLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvVGlsdEZ4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLE1BQU07QUFHVCxLQUhTLGtCQUdGO0FBQ04sT0FBSyxHQUFMLEdBQW9CLEVBQUUsTUFBRixDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsYUFBZCxDQUFwQjtBQUNBLE9BQUssR0FBTCxHQUFrQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsV0FBZCxDQUFsQjtBQUNBLE9BQUssU0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsYUFBZCxDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsWUFBZCxDQUFwQjtBQUNBLE9BQUssT0FBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsb0JBQWQsQ0FBcEI7QUFDQSxPQUFLLE1BQUwsR0FBb0IsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLFVBQWQsQ0FBcEI7QUFDQSxPQUFLLFdBQUwsR0FBb0IsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGlCQUFkLENBQXBCO0FBQ0EsT0FBSyxLQUFMLEdBQW9CLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxVQUFkLENBQXBCO0FBQ0EsT0FBSyxZQUFMLEdBQW9CLENBQ25CLEVBRG1CLEVBRW5CO0FBQ0MsYUFBVTtBQUNULGdCQUFhO0FBQ1osa0JBQWMsRUFBQyxHQUFHLEVBQUosRUFBUSxHQUFHLEVBQVgsRUFBZSxHQUFHLEVBQWxCLEVBREY7QUFFWixlQUFXLEVBQUMsR0FBRyxDQUFKLEVBQU8sR0FBRyxDQUFDLEVBQVgsRUFBZSxHQUFHLENBQWxC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ZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBTbGlkZXIgZnJvbSAnLi9tb2R1bGVzL1NsaWRlci5qcyc7XG5pbXBvcnQgVGlsdEZ4IGZyb20gJy4vbW9kdWxlcy9UaWx0RnguanMnO1xuXG5sZXQgQXBwID0ge1xuXG5cdFxuXHRpbml0KCkge1xuXHRcdHRoaXMuJGVsICAgICAgICAgID0gJCgnYm9keScpO1xuXHRcdHRoaXMuJGxpbmtUbyAgICAgID0gdGhpcy4kZWwuZmluZCgnLmpzLWxpbmstdG8nKTtcblx0XHR0aGlzLm5hdiBcdCAgICAgID0gdGhpcy4kZWwuZmluZCgnLm1haW4tbmF2Jyk7XHRcdFxuXHRcdHRoaXMuJHByZXZpZXdzICAgID0gdGhpcy4kZWwuZmluZCgnLmpzLXByZXZpZXcnKTtcblx0XHR0aGlzLiRzbGlkZXIgICAgICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1zbGlkZXInKTtcblx0XHR0aGlzLiRza2lsbHMgICAgICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1za2lsbHMtY29udGVudCcpO1xuXHRcdHRoaXMuJGJhbmRzICAgICAgID0gdGhpcy4kZWwuZmluZCgnLmpzLWJhbmQnKTtcblx0XHR0aGlzLiRvcGVuR2FsZXJ5ICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1vcGVuLWdhbGVyeScpO1xuXHRcdHRoaXMuJGZvcm0gICAgICAgID0gdGhpcy4kZWwuZmluZCgnLmpzLWZvcm0nKTtcblx0XHR0aGlzLnRpbHRTZXR0aW5ncyA9IFtcblx0XHRcdHt9LFxuXHRcdFx0e1xuXHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdGltZ1dyYXBwZXIgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogMTAsIHo6IDMwfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IC0xMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMjAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YWQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bGluZXMgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogMTAsIHo6IFswLDcwXX0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAtMn0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMjAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAyfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAyMDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IC0xMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAyfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAyMDAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMDAsIHk6IDEwMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMjAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YWQnfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRpbWdXcmFwcGVyIDoge1xuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogLTUsIHk6IDEwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA5MDAsIGVhc2luZyA6ICdlYXNlT3V0Q3ViaWMnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDMwLCB5OiAzMCwgejogWzAsNDBdfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IFswLDE1XSwgeTogMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG92ZXJsYXkgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogMTAsIHo6IFswLDIwXX0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAwLCB5OiAxMDAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDkwMCwgZWFzaW5nIDogJ2Vhc2VPdXRDdWJpYyd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdGltZ1dyYXBwZXIgOiB7XG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAtNSwgeTogMTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDUwLCBlYXNpbmcgOiAnZWFzZU91dFF1YWQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDIwLCB5OiAyMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMjAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YWQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDUsIHk6IC01LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IDZ9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEwMDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDUwLCB5OiA1MCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNTAsIGVhc2luZyA6ICdlYXNlT3V0UXVhZCd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdGltZ1dyYXBwZXIgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAwLCB5OiAtOCwgejogMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAzLCB5OiAzLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMjAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bGluZXMgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxNSwgeTogMTUsIHo6IFswLDE1XX0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG92ZXJsYXkgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAwLCB5OiA4LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA2MDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IC0xNSwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogOTAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1MCwgeTogNTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEyMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdGxpbmVzIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogLTUsIHk6IDUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEwMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTUsIHk6IDE1LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IDN9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDE1MDAsIGVhc2luZyA6ICdlYXNlT3V0RWxhc3RpYycsIGVsYXN0aWNpdHkgOiA3MDB9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTUsIHk6IC0xNSwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNTAwLGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDUwLCB5OiA1MCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNTAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRpbWdXcmFwcGVyIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNSwgeTogNSwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogODAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YXJ0J31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogMTAsIHo6IFswLDUwXX0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFydCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDUwLCB5OiA1MCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogODAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YXJ0J31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0bGluZXMgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA0MCwgeTogNDAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDE1MDAsIGVhc2luZyA6ICdlYXNlT3V0RWxhc3RpYyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMjAsIHk6IDIwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IC01fSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMDAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IC0zMCwgeTogLTMwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IDN9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDc1MCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAwLCB5OiAxMDAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDc1MCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1dO1xuXG5cdFx0dGhpcy5Vc2VyU2VlICAgPSB0cnVlO1xuXHRcdHRoaXMuc2tpbGxzT24gID0gZmFsc2U7XG5cblx0XHR0aGlzLnNyIFx0ICAgPSBTY3JvbGxSZXZlYWwoeyByZXNldDogZmFsc2UgfSk7XG5cblx0XHQvL2luaXQgU2xpZGVyIFxuXHRcdGlmICh0aGlzLiRzbGlkZXIubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmF1dG9wbGF5ID0gbmV3IFNsaWRlcjtcblx0XHRcdHRoaXMuYXV0b3BsYXkuaW5pdCh0aGlzLiRzbGlkZXIpO1xuXHRcdH1cblx0XHR0aGlzLnZpZXdJc0FjdGl2ZSgpOyBcdFxuXG5cdFx0Ly8gbGlua1RvIGZ1bmN0aW9uIGlmIGxpbmtzIGV4aXN0IFxuXHRcdGlmICh0aGlzLiRsaW5rVG8ubGVuZ3RoKSB0aGlzLmxpbmtUbygpO1xuXG5cdFx0Ly8gc2Nyb2xsIGZvciB0b3AgbWVudSBuYXYgXG5cdFx0dGhpcy5zY3JvbGwoKTtcblxuXHRcdC8vIGZ1bmN0aW9uIHJldmFsIFxuXHRcdHRoaXMucmV2YWwoKTtcdFxuXG5cdFx0Ly9vcGVuIGdhbGVyeSBcblx0XHR0aGlzLiRvcGVuR2FsZXJ5Lm9uKCdjbGljaycsIHRoaXMub3BlbkdhbGVyeSlcblxuXHRcdC8vcHJlbG9hZCBpbWcgXG5cdFx0aWYgKHRoaXMuJHByZXZpZXdzLmxlbmd0aCkgdGhpcy5wcmVsb2FkKCk7XHRcblxuXHRcdC8vcHJlbG9hZCBpbWcgcHJldmlldyBcblx0XHR0aGlzLmluaXRQb3J0Zm9saW9QcmV2aWV3KCk7XG5cblx0XHQvL2luaXQgZm9ybSBcblx0XHRpZiAodGhpcy4kZm9ybS5sZW5ndGgpIHRoaXMuaW5pdEZvcm0oKTtcblx0XHRcblx0fSxcblxuXHR2aWV3SXNBY3RpdmUoKSB7XG5cdFx0d2luZG93Lm9uZm9jdXMgPSAoKSA9PiB7XG5cdFx0ICAgIHRoaXMuVXNlclNlZSA9IHRydWU7XG5cdFx0ICB9O1xuXG5cdFx0d2luZG93Lm9uYmx1ciA9ICgpID0+IHtcblx0XHQgICAgdGhpcy5Vc2VyU2VlID0gZmFsc2U7XG5cdFx0ICB9O1xuXHRcdHNldEludGVydmFsKCAoKSA9PiB7XG5cdFx0ICAgIGlmICghdGhpcy5Vc2VyU2VlKSB0aGlzLmF1dG9wbGF5LnN0b3AoKTtcblx0XHR9LCAxMDAwKTtcblx0fSxcblxuXHRsaW5rVG8oKSB7XG5cdFx0dGhpcy4kbGlua1RvLm9uKCdjbGljayB0b3VjaCcsIChlKSA9PiB7XG5cdFx0XHRsZXQgdGFyZ2V0ICAgPSAkKGUuY3VycmVudFRhcmdldCkuYXR0cignaHJlZicpO1xuXHRcdFx0bGV0ICRzZWN0aW9uID0gdGhpcy4kZWwuZmluZCh0YXJnZXQpO1xuXHRcdFx0JCgnYm9keSwgaHRtbCcpLmFuaW1hdGUoe1xuXHRcdCAgICAgICAgc2Nyb2xsVG9wOiAkc2VjdGlvbi5vZmZzZXQoKS50b3Bcblx0XHQgICAgfSwgMTAwMCk7XG5cdFx0fSlcblx0fSwgXG5cblx0aXNWaXNpYmxlKGVsZW1lbnQpIHtcblx0XHRsZXQgJGVsZW1lbnQgICAgICAgID0gJChlbGVtZW50KTtcblx0XHRsZXQgdG9wRWxlbWVudCBcdCAgICA9ICRlbGVtZW50Lm9mZnNldCgpLnRvcDtcblx0XHRsZXQgYm90dG9tRWxlbWVudCBcdD0gKCRlbGVtZW50Lm9mZnNldCgpLnRvcCArICRlbGVtZW50LmhlaWdodCgpICkgO1xuXHRcdGxldCBzY3JvbGx0b3AgXHQgICAgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0bGV0IHNjcm9sbEJvdHRvbSBcdD0gc2Nyb2xsdG9wICsgJCh3aW5kb3cpLmhlaWdodCgpO1xuXHRcdGxldCBpc1Zpc2libGUgICAgICAgPSBmYWxzZTtcblxuXHRcdGlmICggdG9wRWxlbWVudCA+IHNjcm9sbHRvcCAmJiBib3R0b21FbGVtZW50IDwgc2Nyb2xsQm90dG9tICkge1xuXHRcdFx0aXNWaXNpYmxlID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aXNWaXNpYmxlID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBpc1Zpc2libGUgO1xuXHR9LFxuXG5cdG9wZW5HYWxlcnkoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgJHdyYXBwZXIgICA9IEFwcC4kZWwuZmluZCgnLmpzLWdhbGxlcnktd3JhcHBlcicpO1xuXHRcdGxldCB0YXJnZXQgICAgID0gJChlLnRhcmdldCkuYXR0cignaHJlZicpO1xuXHRcdGxldCAkY3VycmVudCAgID0gJHdyYXBwZXIuZmluZCh0YXJnZXQpO1xuXHRcdGxldCAkY2xvc2UgICAgID0gJHdyYXBwZXIuZmluZCgnLmpzLWNsb3NlLWdhbGVyeScpO1xuXHRcdFxuXHRcdGlmKCRjdXJyZW50Lmxlbmd0aCkge1xuXHRcdFx0JHdyYXBwZXIuYWRkQ2xhc3MoJ29wZW4nKTtcblx0XHRcdEFwcC4kZWwuYWRkQ2xhc3MoJ292ZXJmbG93LWhpZGRlbicpO1xuXHRcdFx0JGN1cnJlbnQuY3NzKCAnZGlzcGxheScsICdibG9jaycgKTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHQkY3VycmVudC5hZGRDbGFzcygndmlzaWJsZScpO1xuXHRcdFx0fSwgNzAwKVxuXHRcdFx0JGN1cnJlbnQuZmluZCgnLmpzLXJlYWQtbW9yZScpLm9uKCdjbGljayB0b3VjaCcsIChlKT0+IHtcblx0XHRcdFx0JGN1cnJlbnQuYWRkQ2xhc3MoJ3Nob3ctbW9yZScpO1xuXHRcdFx0fSlcblx0XHRcdCRjbG9zZS5vbignY2xpY2sgdG91Y2gnLCBBcHAuY2xvc2VHYWxlcnkpXG5cdFx0fVxuXHR9LFxuXG5cdGNsb3NlR2FsZXJ5KCkge1xuXHRcdGxldCAkd3JhcHBlciAgID0gQXBwLiRlbC5maW5kKCcuanMtZ2FsbGVyeS13cmFwcGVyJyk7XHRcdFxuXHRcdGxldCAkdmlzaWJsZSAgID0gJHdyYXBwZXIuZmluZCgnLnZpc2libGUnKTtcblx0XHRcblx0XHRpZigkdmlzaWJsZS5sZW5ndGgpIHtcdFx0XHRcblx0XHRcdCR2aXNpYmxlLnJlbW92ZUNsYXNzKCd2aXNpYmxlIHNob3ctbW9yZScpO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdCR2aXNpYmxlLmNzcyggJ2Rpc3BsYXknLCAnbm9uZScgKTtcblx0XHRcdFx0JHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblx0XHRcdFx0QXBwLiRlbC5yZW1vdmVDbGFzcygnb3ZlcmZsb3ctaGlkZGVuJyk7XG5cdFx0XHR9LCA3MDApO1xuXHRcdH1cblx0fSxcblxuXHRzY3JvbGwoKSB7XG5cdFx0bGV0IHN0ZXAxID0gdGhpcy4kZWwuZmluZCgnI2Fib3V0Jykub2Zmc2V0KCkudG9wO1xuXHRcdCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSBzdGVwMS0xMDAgPyB0aGlzLm5hdi5hZGRDbGFzcygnZml4eScpIDogdGhpcy5uYXYucmVtb3ZlQ2xhc3MoJ2ZpeHknKTtcblx0XHQkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPj0gc3RlcDEgPyB0aGlzLm5hdi5hZGRDbGFzcygnYWN0aXZlJykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHQkKHdpbmRvdykub24oJ3Njcm9sbCcsICgpID0+IHtcblx0XHRcdGxldCBjdXJyZW50U2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0XHRjdXJyZW50U2Nyb2xsID49IDgwID8gdGhpcy5uYXYuY3NzKCd0b3AnLCAnLTYxcHgnKSA6IHRoaXMubmF2LmNzcygndG9wJywgJzBweCcpO1xuXHRcdFx0Y3VycmVudFNjcm9sbCA+PSBzdGVwMS0xMDAgPyB0aGlzLm5hdi5hZGRDbGFzcygnZml4eScpIDogdGhpcy5uYXYucmVtb3ZlQ2xhc3MoJ2ZpeHknKTtcblx0XHRcdGN1cnJlbnRTY3JvbGwgPj0gc3RlcDEgPyB0aGlzLm5hdi5hZGRDbGFzcygnYWN0aXZlJykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHRcdC8vaW5pdCBzbGlkZXIgXHRcdFxuXHRcdFx0aWYgKHRoaXMuJHNsaWRlci5sZW5ndGgpIHtcdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy5pc1Zpc2libGUodGhpcy4kc2xpZGVyKSkge1xuXHRcdFx0XHRcdHRoaXMuYXV0b3BsYXkucGxheSgpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5hdXRvcGxheS5zdG9wKClcblx0XHRcdFx0fVxuXHRcdFx0fSBcblxuXHRcdFx0aWYgKHRoaXMuJHNraWxscy5sZW5ndGgpIHtcdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy5pc1Zpc2libGUodGhpcy4kc2tpbGxzWzBdKSkge1x0XG5cdFx0XHRcdFx0dGhpcy5zaG93U2tpbGxzKCk7XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy4kYmFuZHMubGVuZ3RoKSB7XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnNob3dCYW5kcygpO1x0XHRcdFx0XG5cdFx0XHR9ICBcblx0XHR9KTsgXG5cdFxuXHR9LFxuXG5cdHJldmFsKCkge1xuXHRcdC8vbGVmdCB0byByaWdodFxuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtbGVmdCcsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2xlZnQnLCBzY2FsZTogMSwgZHVyYXRpb246NTAwfSk7XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1sZWZ0LWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnbGVmdCcsIHNjYWxlOiAxLCBkZWxheTogNTAwLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLWxlZnQtbG9uZy1kZWxheScsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2xlZnQnLCBzY2FsZTogMSwgZGVsYXk6IDE1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdC8vcmlnaHQgdG8gbGVmdFxuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtcmlnaHQnLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdyaWdodCcsIHNjYWxlOiAxLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXJpZ2h0LWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAncmlnaHQnLCBzY2FsZTogMSwgZGVsYXk6IDUwMCwgZHVyYXRpb246NTAwfSk7XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1yaWdodC1sb25nLWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAncmlnaHQnLCBzY2FsZTogMSwgZGVsYXk6IDE1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdC8vYm90dG9tIHRvIHRvcCBcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXRvcCcsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2JvdHRvbScsIHNjYWxlOiAxLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXRvcC1kZWxheScsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ2JvdHRvbScsIHNjYWxlOiAxLCBkZWxheTogNTAwLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXRvcC1sb25nLWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnYm90dG9tJywgc2NhbGU6IDEsIGRlbGF5OiAxNTAwLCBkdXJhdGlvbjo1MDB9KTtcblxuXHR9LFxuXG5cdHNob3dTa2lsbHMoKSB7XG5cblx0XHRpZighdGhpcy5za2lsbHNPbikge1xuXHRcdFx0bGV0ICRza2lsbHMgPSB0aGlzLiRlbC5maW5kKCcuanMtcGVyY2VudCcpO1xuXHRcdFx0JHNraWxscy5lYWNoKCAoaW5kZXgsIGN1cnJlbnQpID0+IHtcblx0XHRcdFx0bGV0IF9wZXJjZW50ID0gJChjdXJyZW50KS5hdHRyKCdkYXRhLXBlcmNlbnQnKSsnJSc7XG5cdFx0XHRcdCQoY3VycmVudCkuY3NzKCd3aWR0aCcsIF9wZXJjZW50KTtcblx0XHRcdH0gKVxuXHRcdH1cblx0fSxcblxuXHRzaG93QmFuZHMoKSB7XG5cdFx0dGhpcy4kYmFuZHMuZWFjaCggKGksIGN1cnJlbnQpID0+IHtcblx0XHRcdGxldCBfYmFuZCA9ICQoY3VycmVudCk7XG5cblx0XHRcdGlmKHRoaXMuaXNWaXNpYmxlKGN1cnJlbnQpKSB7XG5cdFx0XHRcdF9iYW5kLmhhc0NsYXNzKCdqcy1iYW5kLXJpZ2h0JykgPyBfYmFuZC5jc3MoJ3JpZ2h0JywgMCkgOiBfYmFuZC5jc3MoJ2xlZnQnLCAwKTtcblx0XHRcdFx0aWYoX2JhbmQuaGFzQ2xhc3MoJ2pzLWxhc3QtYmFuZCcpKSB0aGlzLiRmb3JtLmFkZENsYXNzKCd2aXNpYmxlJyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblxuXHRwcmVsb2FkKCkge1xuXHRcdHRoaXMuJHByZXZpZXdzLmVhY2goKGlkeCwgY29udGFpbmVyKSA9PiB7XG5cdFx0XHRsZXQgJGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcblx0XHRcdGxldCBfdXJsICAgICAgID0gJGNvbnRhaW5lci5kYXRhKCdpbWFnZS11cmwnKTtcblx0XHRcdGxldCBpbWcgICAgICAgID0gbmV3IEltYWdlKCk7XG5cblx0XHRcdGltZy5zcmMgICAgICAgID0gX3VybDtcblxuXHQgICAgICAgIC8vIGlmIHdlIGhhdmUgdGhpcyBpbWFnZSBhbHJlYWR5IGNhY2hlZCwgd2UgZG9uJ3QgaGF2ZVxuXHQgICAgICAgIC8vIHRvIHdhaXQgZm9yIHRoZSBvbmxvYWQgY2FsbGJhY2sgYW5kIGNhbiByZW1vdmUgdGhlXG5cdCAgICAgICAgLy8gcHJldmlldyBpbWFnZSBpbW1lZGlhdGVseVxuXHQgICAgICAgIGlmKHRoaXMuaW1nQ29tcGxldGUoaW1nKSkge1xuXHQgICAgICAgIFx0dGhpcy5yZW1vdmVQcmV2aWV3KCRjb250YWluZXIsIF91cmwpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgXHRpbWcub25sb2FkID0gKCkgPT4ge1xuXHQgICAgICAgIFx0XHR0aGlzLnJlbW92ZVByZXZpZXcoJGNvbnRhaW5lciwgX3VybCk7XG5cdCAgICAgICAgXHR9O1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXHR9LFxuXG5cdGltZ0NvbXBsZXRlKGltZykge1xuICAgICAgICByZXR1cm4gaW1nLmNvbXBsZXRlIHx8IGltZy53aWR0aCArIGltZy5oZWlnaHQgPiAwO1xuICAgIH0sXG4gIFxuICAgIHJlbW92ZVByZXZpZXcoJGNvbnRhaW5lciwgdXJsKSB7XG4gICAgICAgICRjb250YWluZXIuY3NzKHsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoXCInICsgdXJsICsgJ1wiKSd9KTtcbiAgICAgICAgJGNvbnRhaW5lci5yZW1vdmVDbGFzcygnanMtcHJldmlldyBwcmV2aWV3Jyk7XG4gICAgfSxcblxuICAgIGluaXRQb3J0Zm9saW9QcmV2aWV3KCkge1xuXHRcdGxldCBpZHggPSAwO1xuXHRcdFtdLnNsaWNlLmNhbGwoJCgnYS50aWx0ZXInKSkuZm9yRWFjaCgoZWwsIHBvcykgPT4geyBcblx0XHRcdGlkeCA9IHBvcyUyID09PSAwID8gaWR4KzEgOiBpZHg7XG5cdFx0XHRsZXQgX1RpbHRGeCA9IG5ldyBUaWx0Rng7XG5cdFx0XHRfVGlsdEZ4LmluaXQoZWwsIEFwcC50aWx0U2V0dGluZ3NbaWR4LTFdKTtcblx0XHR9KTtcblxuXHRcdGxldCBwYXRlciAgICA9IHRoaXMuJGVsLmZpbmQoJy5wYXRlcicpO1xuXHRcdGxldFx0cGF0ZXJTVkcgPSBwYXRlci5maW5kKCcucGF0ZXJfX3N2ZycpO1xuXHRcdGxldFx0cGF0aEVsICAgPSBwYXRlclNWRy5maW5kKCdwYXRoJyk7XG5cdFx0bGV0XHRwYXRocyAgICA9IHtkZWZhdWx0OiBwYXRoRWwuYXR0cignZCcpLCBhY3RpdmU6IHBhdGVyU1ZHLmF0dHIoJ2RhdGEtcGF0aC1ob3ZlcicpfTtcblxuXHRcdHBhdGVyLm9uKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuXHRcdFx0YW5pbWUucmVtb3ZlKHBhdGhFbCk7XG5cdFx0XHRhbmltZSh7XG5cdFx0XHRcdHRhcmdldHM6IHBhdGhFbCxcblx0XHRcdFx0ZDogcGF0aHMuYWN0aXZlLFxuXHRcdFx0XHRkdXJhdGlvbjogNDAwLFxuXHRcdFx0XHRlYXNpbmc6ICdlYXNlT3V0UXVhZCdcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0cGF0ZXIub24oJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG5cdFx0XHRhbmltZS5yZW1vdmUocGF0aEVsKTtcblx0XHRcdGFuaW1lKHtcblx0XHRcdFx0dGFyZ2V0czogcGF0aEVsLFxuXHRcdFx0XHRkOiBwYXRocy5kZWZhdWx0LFxuXHRcdFx0XHRkdXJhdGlvbjogNDAwLFxuXHRcdFx0XHRlYXNpbmc6ICdlYXNlT3V0RXhwbydcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxuXG5cdGluaXRGb3JtKCkge1xuXG5cdFx0bGV0ICRmb3JtID0gdGhpcy4kZm9ybTsgXG5cdFx0bGV0IGNoZWNrRm9ybSA9IFsgZmFsc2UsIGZhbHNlLCBmYWxzZV07XG5cblx0XHQkZm9ybS5maW5kKCd0ZXh0YXJlYScpLmJsdXIoZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2JsdXInKVxuXHRcdCAgICAkZm9ybS5maW5kKCd0ZXh0YXJlYScpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcblx0XHQgICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoXCJeW2EtekEtWsOALcO6w4Atw78wLTkk4oKsLiBdKyRcIik7XG5cblx0XHQgICAgICAgIGlmIChyZWdleC50ZXN0KHRoaXMudmFsdWUpICkge1xuXHRcdCAgICAgICAgXHRjb25zb2xlLmxvZygncmVnZXgnKTtcblx0XHQgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgICAgICQoJy5tc2ctYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAndHJhbnNwYXJlbnQnfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm1zZy1ib3ggLmpzLWNoZWNrJykuY3NzKHsnb3BhY2l0eSc6IDF9KTtcblx0XHQgICAgICAgICAgXHQkKCcubXNnLWJveCAuanMtZXJyb3InKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVswXSA9IHRydWU7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICBlbHNlIGlmICh0aGlzLnZhbHVlID09PSAnJykge1xuXHRcdCAgICAgICAgICBcdCR0aGlzLnJlbW92ZUNsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm1zZy1ib3ggbGFiZWwnKS5jc3Moeydjb2xvcic6ICd3aGl0ZSd9KTtcblx0XHQgICAgICAgICAgXHQkKCcubXNnLWJveCBpbnB1dCArIGxhYmVsICsgc3BhbicpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm1zZy1ib3ggLmpzLWNoZWNrJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHQkKCcubXNnLWJveCAuanMtZXJyb3InKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVswXSA9IGZhbHNlO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAgZWxzZSB7XG5cdFx0ICAgICAgICBcdCR0aGlzLmFkZENsYXNzKCdmb2N1c2VkJyk7XG5cdFx0ICAgICAgICBcdCQoJy5tc2ctYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAndHJhbnNwYXJlbnQnfSk7XG5cdFx0ICAgICAgICBcdCQoJy5tc2ctYm94IC5qcy1jaGVjaycpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLm1zZy1ib3ggLmpzLWVycm9yJykuY3NzKHsnb3BhY2l0eSc6IDF9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMF0gPSBmYWxzZTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgfSk7XG5cdFx0fSk7XG5cblx0XHQkZm9ybS5maW5kKCcubmFtZS1ib3ggaW5wdXQnKS5ibHVyKGZ1bmN0aW9uICgpIHtcblxuXHRcdCAgICAkZm9ybS5maW5kKCcubmFtZS1ib3ggaW5wdXQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQgICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XG5cdFx0ICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKFwiXlthLXpBLVrDgC3DusOALcO/IF0qJFwiKTtcblxuXHRcdCAgICAgICAgaWYgKHJlZ2V4LnRlc3QodGhpcy52YWx1ZSkgKSB7XG5cdFx0ICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgICAgICAkKCcubmFtZS1ib3ggbGFiZWwnKS5jc3Moeydjb2xvcic6ICd0cmFuc3BhcmVudCd9KTtcblx0XHQgICAgICAgICAgXHQkKCcubmFtZS1ib3ggLmpzLWNoZWNrJykuY3NzKHsnb3BhY2l0eSc6IDF9KTtcblx0XHQgICAgICAgICAgXHQkKCcubmFtZS1ib3ggLmpzLWVycm9yJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMV0gPSB0cnVlO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAgZWxzZSBpZiAodGhpcy52YWx1ZSA9PT0gJycpIHtcblx0XHQgICAgICAgICAgXHQkdGhpcy5yZW1vdmVDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgICBcdCQoJy5uYW1lLWJveCBsYWJlbCcpLmNzcyh7J2NvbG9yJzogJ3doaXRlJ30pO1xuXHRcdCAgICAgICAgICBcdCQoJy5uYW1lLWJveCBpbnB1dCArIGxhYmVsICsgc3BhbicpLmNzcyh7J29wYWNpdHknOiAwfSk7XG5cdFx0ICAgICAgICAgIFx0Y2hlY2tGb3JtWzFdID0gZmFsc2U7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgICBlbHNlIHtcblx0XHQgICAgICAgIFx0JHRoaXMuYWRkQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgIFx0JCgnLm5hbWUtYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAndHJhbnNwYXJlbnQnfSk7XG5cdFx0ICAgICAgICBcdCQoJy5uYW1lLWJveCAuanMtY2hlY2snKS5jc3MoeydvcGFjaXR5JzogMH0pO1xuXHRcdCAgICAgICAgICBcdCQoJy5uYW1lLWJveCAuanMtZXJyb3InKS5jc3MoeydvcGFjaXR5JzogMX0pO1xuXHRcdCAgICAgICAgICBcdGNoZWNrRm9ybVsxXSA9IGZhbHNlO1xuXHRcdCAgICAgICAgfVxuXG5cdFx0ICAgIH0pO1xuXG5cdFx0fSk7XG5cblx0XHQkZm9ybS5maW5kKCcuZW1haWwtYm94IGlucHV0JykuYmx1cihmdW5jdGlvbiAoKSB7XG5cdFx0ICAgICRmb3JtLmZpbmQoJy5lbWFpbC1ib3ggaW5wdXQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQgICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XG5cdFx0ICAgICAgICBsZXQgcmVnZXggPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcblxuXHRcdCAgICAgICAgaWYgKHJlZ2V4LnRlc3QodGhpcy52YWx1ZSkgKSB7XG5cdFx0ICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2ZvY3VzZWQnKTtcblx0XHQgICAgICAgICAgICAkKCcuZW1haWwtYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAndHJhbnNwYXJlbnQnfSk7XG5cdFx0ICAgICAgICAgIFx0JCgnLmVtYWlsLWJveCAuanMtY2hlY2snKS5jc3MoeydvcGFjaXR5JzogMX0pO1xuXHRcdCAgICAgICAgICBcdCQoJy5lbWFpbC1ib3ggLmpzLWVycm9yJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMl0gPSB0cnVlO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgICAgZWxzZSBpZiAodGhpcy52YWx1ZSA9PT0gJycpIHtcblx0XHQgICAgICAgICAgXHQkdGhpcy5yZW1vdmVDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgICBcdCQoJy5lbWFpbC1ib3ggbGFiZWwnKS5jc3Moeydjb2xvcic6ICd3aGl0ZSd9KTtcblx0XHQgICAgICAgICAgXHQkKCcuZW1haWwtYm94IGlucHV0ICsgbGFiZWwgKyBzcGFuJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHRjaGVja0Zvcm1bMl0gPSBmYWxzZTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICAgIGVsc2Uge1xuXHRcdCAgICAgICAgXHQkdGhpcy5hZGRDbGFzcygnZm9jdXNlZCcpO1xuXHRcdCAgICAgICAgXHQkKCcuZW1haWwtYm94IGxhYmVsJykuY3NzKHsnY29sb3InOiAndHJhbnNwYXJlbnQnfSk7XG5cdFx0ICAgICAgICBcdCQoJy5lbWFpbC1ib3ggLmpzLWNoZWNrJykuY3NzKHsnb3BhY2l0eSc6IDB9KTtcblx0XHQgICAgICAgICAgXHQkKCcuZW1haWwtYm94IC5qcy1lcnJvcicpLmNzcyh7J29wYWNpdHknOiAxfSk7XG5cdFx0ICAgICAgICAgIFx0Y2hlY2tGb3JtWzJdID0gZmFsc2U7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgIH0pO1xuXHRcdH0pO1xuXG5cdFx0JGZvcm0ub24oJ3N1Ym1pdCcsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRsZXQgJGVycm9yTXNnICAgPSB0aGlzLiRlbC5maW5kKCcuanMtZXJyb3ItbWVzc2FnZScpO1xuXHRcdFx0bGV0ICRzdWNjZXNzTXNnID0gdGhpcy4kZWwuZmluZCgnLmpzLXN1Y2Nlc3MtbWVzc2FnZScpO1xuXHRcdFx0bGV0IGNoZWNrICAgICAgID0gMDsgXG5cblx0XHRcdGNoZWNrRm9ybS5mb3JFYWNoKCAoZWxlbWVudCwgaW5kZXgpID0+IHtcdFx0XHRcdFxuXHRcdFx0XHRpZihlbGVtZW50KSBjaGVjaysrO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmICggY2hlY2sgPT09IDMgKSB7XG5cdFx0XHRcdC8vY2FuIHNlbmQgZm9ybVxuXG5cdFx0XHRcdGxldCBzID0gJGZvcm0uc2VyaWFsaXplKCk7XG5cblx0XHRcdFx0JC5hamF4KHtcblx0ICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuXHQgICAgICAgICAgICAgICAgdXJsOiBcIi4uL21haWwucGhwXCIsXG5cdCAgICAgICAgICAgICAgICBkYXRhOiBzLFxuXHQgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcblx0ICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucHJlcGVuZCgnPGRpdiBzdHlsZT1cInBvc2l0aW9uOmZpeGVkOyB0b3A6NTAlOyB6LWluZGV4OjIwMDA7XCIgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+Vm90cmUgZW1haWwgw6AgYmllbiDDqXTDqSB0cmFuc21pcyAhPC9kaXY+Jylcblx0ICAgICAgICAgICAgICAgICAgICAuaGlkZSgpXG5cdCAgICAgICAgICAgICAgICAgICAgLmZhZGVJbigxNTAwKTsgICAgICAgICAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgICAgICAgICAgIFx0JCgnYm9keScpLnByZXBlbmQoJzxkaXYgc3R5bGU9XCJwb3NpdGlvbjpmaXhlZDsgdG9wOjUwJTsgei1pbmRleDoyMDAwO1wiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+TFxcJ2Vudm9pIGR1IG1haWwgYSDDqWNob3XDqSwgdmV1aWxsZXogcsOpZXNzYXllciBTVlA8L2Rpdj4nKVxuXHQgICAgICAgICAgICAgICAgICAgIC5oaWRlKClcblx0ICAgICAgICAgICAgICAgICAgICAuZmFkZUluKDE1MDApO1xuXHQgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgXHR9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cbn1cblxuJCh3aW5kb3cpLnJlYWR5KEFwcC5pbml0LmJpbmQoQXBwKSk7IiwiY2xhc3MgU2xpZGVyIHsgXG5cblx0aW5pdChlbCkge1xuXHRcdHRoaXMuJGVsICAgICAgICAgID0gJChlbCk7XG5cdFx0dGhpcy4kY29udGFpbmVyICAgPSB0aGlzLiRlbC5maW5kKCd1bCcpO1xuXHRcdHRoaXMuJHNsaWRlcnMgICAgID0gdGhpcy4kY29udGFpbmVyLmZpbmQoJ2xpJyk7XG5cdFx0dGhpcy5ub21iZXJTbGlkZSAgPSB0aGlzLiRzbGlkZXJzLmxlbmd0aDtcblx0XHR0aGlzLndpZHRoICAgICAgICA9IDMwMDtcblx0XHR0aGlzLmxlZnQgICAgICAgICA9IC10aGlzLndpZHRoO1xuXHRcdHRoaXMuZHVyYXRpb24gXHQgID0gMzUwMDtcblx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IDE7XG5cdFx0dGhpcy5pc1BsYXlpbmcgICAgPSBmYWxzZTtcblx0XHRcblxuXHRcdHRoaXMuJGNvbnRhaW5lci5jc3MoJ3dpZHRoJywgdGhpcy5ub21iZXJTbGlkZSp0aGlzLndpZHRoKydweCcpO1xuXHRcdCQodGhpcy4kc2xpZGVyc1swXSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0dGhpcy4kZWwuaG92ZXIoKCkgPT4geyB0aGlzLnN0b3AoKSB9LCAoKSA9PiB7IHRoaXMucGxheSgpIH0gKTtcdFx0XG5cblx0fVxuXG5cdHNsaWRlcigpIHtcblx0XHR0aGlzLiRjb250YWluZXIuYW5pbWF0ZSh7XG5cdFx0XHRcdFx0bGVmdCA6IHRoaXMubGVmdCsncHgnXG5cdFx0XHRcdH0sIDIwMCwgKCkgPT4ge1xuXHRcdFx0XHRcdCQodGhpcy4kc2xpZGVycykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcdCQodGhpcy4kc2xpZGVyc1t0aGlzLmN1cnJlbnRJbmRleF0pLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRpZiAodGhpcy5sZWZ0ID4gKHRoaXMubm9tYmVyU2xpZGUtMSkqLSh0aGlzLndpZHRoKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5sZWZ0ID0gdGhpcy5sZWZ0LXRoaXMud2lkdGg7XG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCsrO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxlZnQgPSAwO1xuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SW5kZXggPSAwO1xuXHRcdFx0XHRcdH1cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHR9XG5cblx0cGxheSgpIHtcblx0XHRcblx0XHRpZiAoIXRoaXMuaXNQbGF5aW5nKSB7XG5cdFx0XHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5zbGlkZXIuYmluZCh0aGlzKSwgdGhpcy5kdXJhdGlvbik7XG5cdFx0XHR0aGlzLmlzUGxheWluZyA9IHRydWU7XG5cdFx0fVxuXHRcdFxuXHR9XG5cblx0c3RvcCgpIHtcblx0XHRpZiAodGhpcy5pc1BsYXlpbmcpIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG5cdFx0XHR0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjsiLCJjbGFzcyBUaWx0Rngge1xuXG5cdC8vIEhlbHBlciB2YXJzIGFuZCBmdW5jdGlvbnMuXG5cdGV4dGVuZCggYSwgYiApIHtcblx0XHRmb3IoIGxldCBrZXkgaW4gYiApIHsgXG5cdFx0XHRpZiggYi5oYXNPd25Qcm9wZXJ0eSgga2V5ICkgKSB7XG5cdFx0XHRcdGFba2V5XSA9IGJba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGE7XG5cdH1cblxuXHRnZXRNb3VzZVBvcyhlKSB7XG5cdFx0bGV0IHBvc3ggPSAwO1xuXHRcdGxldCBwb3N5ID0gMDtcblxuXHRcdGlmICghZSkge2xldCBlID0gd2luZG93LmV2ZW50fVxuXHRcdGlmIChlLnBhZ2VYIHx8IGUucGFnZVkpIFx0e1xuXHRcdFx0cG9zeCA9IGUucGFnZVg7XG5cdFx0XHRwb3N5ID0gZS5wYWdlWTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoZS5jbGllbnRYIHx8IGUuY2xpZW50WSkgXHR7XG5cdFx0XHRwb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG5cdFx0XHRwb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRcdH1cblx0XHRyZXR1cm4geyB4IDogcG9zeCwgeSA6IHBvc3kgfVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQuXG5cdCAqL1xuXHRpbml0KGVsLCBvcHRpb25zKSB7XG5cdFx0dGhpcy5ET00gICAgICAgICAgICAgICAgICAgICAgID0ge307XG5cdFx0dGhpcy5ET00uZWwgICAgICAgICAgICAgICAgICAgID0gZWw7XG5cdFx0dGhpcy5vcHRpb25zICAgICAgICAgICAgICAgICAgID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAwfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAtNSwgeTogNSwgejogMH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMTIwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA6ICdlYXNlT3V0RWxhc3RpYycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbGFzdGljaXR5IDogNjAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsaW5lcyA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogMTAsIHo6IFswLDEwXX0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMTAwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA6ICdlYXNlT3V0RXhwbycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbGFzdGljaXR5IDogNjAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDIwLCB5OiAyMCwgejogMH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogMH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMTUwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA6ICdlYXNlT3V0RWxhc3RpYycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbGFzdGljaXR5IDogNjAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAxMCwgejogWzAsNTBdfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb24gOiA1MDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgOiAnZWFzZU91dEV4cG8nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1MCwgeTogNTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDEyMDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgOiAnZWFzZU91dEVsYXN0aWMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxhc3RpY2l0eTogNjAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcblx0XHR0aGlzLmV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1x0XHRcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlICAgICAgICAgICAgPSB7fTtcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlLmltZ1dyYXBwZXIgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcudGlsdGVyX19maWd1cmUnKTtcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlLmxpbmVzICAgICAgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcudGlsdGVyX19kZWNvLS1saW5lcycpO1xuXHRcdHRoaXMuRE9NLmFuaW1hdGFibGUuY2FwdGlvbiAgICA9IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoJy50aWx0ZXJfX2NhcHRpb24nKTtcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlLm92ZXJsYXkgICAgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcudGlsdGVyX19kZWNvLS1vdmVybGF5Jyk7XG5cdFx0dGhpcy5ET00uYW5pbWF0YWJsZS5zaGluZSAgICAgID0gdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLnRpbHRlcl9fZGVjby0tc2hpbmUgPiBkaXYnKTtcblx0XHR0aGlzLmluaXRFdmVudHMoKTtcblx0fVxuXG5cdGluaXRFdmVudHMoKSB7XHRcdFxuXG5cdFx0JCh0aGlzLkRPTS5lbCkub24oJ21vdXNlbW92ZScsICAoZSkgPT4ge3RoaXMubW91c2Vtb3ZlRm4oZSl9KTtcblx0XHQkKHRoaXMuRE9NLmVsKS5vbignbW91c2VsZWF2ZScsIChlKSA9PiB7dGhpcy5tb3VzZWxlYXZlRm4oZSl9KTtcblx0XHQkKHRoaXMuRE9NLmVsKS5vbignbW91c2VlbnRlcicsICggKSA9PiB7dGhpcy5tb3VzZWVudGVyRm4oKX0pO1xuXHR9XG5cblx0bW91c2Vtb3ZlRm4oZXYpIHtcdFx0XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHsgdGhpcy5sYXlvdXQoZXYpOyB9KTtcblx0fVxuXG5cdG1vdXNlZW50ZXJGbigpIHtcdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5ET00uYW5pbWF0YWJsZSkge1xuXHRcdFx0YW5pbWUucmVtb3ZlKHRoaXMuRE9NLmFuaW1hdGFibGVba2V5XSk7XG5cdFx0fVxuXHR9XG5cblx0bW91c2VsZWF2ZUZuKGV2KSB7XHRcdFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHRmb3IobGV0IGtleSBpbiB0aGlzLkRPTS5hbmltYXRhYmxlKSB7XG5cdFx0XHRcdGlmKCB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XSA9PSB1bmRlZmluZWQgKSB7Y29udGludWU7fVxuXHRcdFx0XHRhbmltZSh7XG5cdFx0XHRcdFx0dGFyZ2V0czogdGhpcy5ET00uYW5pbWF0YWJsZVtrZXldLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnJldmVyc2VBbmltYXRpb24uZHVyYXRpb24gfHwgMCA6IDEsXG5cdFx0XHRcdFx0ZWFzaW5nOiB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnJldmVyc2VBbmltYXRpb24uZWFzaW5nIHx8ICdsaW5lYXInIDogJ2xpbmVhcicsXG5cdFx0XHRcdFx0ZWxhc3RpY2l0eTogdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucmV2ZXJzZUFuaW1hdGlvbiAhPSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uLmVsYXN0aWNpdHkgfHwgbnVsbCA6IG51bGwsXG5cdFx0XHRcdFx0c2NhbGVYOiAxLFxuXHRcdFx0XHRcdHNjYWxlWTogMSxcblx0XHRcdFx0XHRzY2FsZVo6IDEsXG5cdFx0XHRcdFx0dHJhbnNsYXRlWDogMCxcblx0XHRcdFx0XHR0cmFuc2xhdGVZOiAwLFxuXHRcdFx0XHRcdHRyYW5zbGF0ZVo6IDAsXG5cdFx0XHRcdFx0cm90YXRlWDogMCxcblx0XHRcdFx0XHRyb3RhdGVZOiAwLFxuXHRcdFx0XHRcdHJvdGF0ZVo6IDBcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRsYXlvdXQoZXYpIHtcblx0XHQvLyBNb3VzZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgZG9jdW1lbnQuXG5cdFx0bGV0IG1vdXNlcG9zID0gdGhpcy5nZXRNb3VzZVBvcyhldik7XG5cdFx0XHQvLyBEb2N1bWVudCBzY3JvbGxzLlxuXHRcdGxldFx0ZG9jU2Nyb2xscyA9IHtsZWZ0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsIHRvcCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcH07XG5cdFx0bGV0XHRib3VuZHMgPSB0aGlzLkRPTS5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdC8vIE1vdXNlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBtYWluIGVsZW1lbnQgKHRoaXMuRE9NLmVsKS5cblx0XHRsZXRcdHJlbG1vdXNlcG9zID0geyB4IDogbW91c2Vwb3MueCAtIGJvdW5kcy5sZWZ0IC0gZG9jU2Nyb2xscy5sZWZ0LCB5IDogbW91c2Vwb3MueSAtIGJvdW5kcy50b3AgLSBkb2NTY3JvbGxzLnRvcCB9O1xuXG5cdFx0Ly8gTW92ZW1lbnQgc2V0dGluZ3MgZm9yIHRoZSBhbmltYXRhYmxlIGVsZW1lbnRzLlxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuRE9NLmFuaW1hdGFibGUpIHtcblx0XHRcdGlmKCB0aGlzLkRPTS5hbmltYXRhYmxlW2tleV0gPT0gdW5kZWZpbmVkIHx8IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldID09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRsZXQgdCA9IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnRyYW5zbGF0aW9uIHx8IHt4OjAseTowLHo6MH0gOiB7eDowLHk6MCx6OjB9O1xuXHRcdFx0bGV0XHRyID0gdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0gIT0gdW5kZWZpbmVkID8gdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucm90YXRpb24gfHwge3g6MCx5OjAsejowfSA6IHt4OjAseTowLHo6MH07XG5cblx0XHRcdHRoaXMuc2V0UmFuZ2UodCk7XG5cdFx0XHR0aGlzLnNldFJhbmdlKHIpO1xuXHRcdFx0XG5cdFx0XHRsZXQgdHJhbnNmb3JtcyA9IHtcblx0XHRcdFx0dHJhbnNsYXRpb24gOiB7XG5cdFx0XHRcdFx0eDogKHQueFsxXS10LnhbMF0pL2JvdW5kcy53aWR0aCpyZWxtb3VzZXBvcy54ICsgdC54WzBdLFxuXHRcdFx0XHRcdHk6ICh0LnlbMV0tdC55WzBdKS9ib3VuZHMuaGVpZ2h0KnJlbG1vdXNlcG9zLnkgKyB0LnlbMF0sXG5cdFx0XHRcdFx0ejogKHQuelsxXS10LnpbMF0pL2JvdW5kcy5oZWlnaHQqcmVsbW91c2Vwb3MueSArIHQuelswXSxcblx0XHRcdFx0fSxcblx0XHRcdFx0cm90YXRpb24gOiB7XG5cdFx0XHRcdFx0eDogKHIueFsxXS1yLnhbMF0pL2JvdW5kcy5oZWlnaHQqcmVsbW91c2Vwb3MueSArIHIueFswXSxcblx0XHRcdFx0XHR5OiAoci55WzFdLXIueVswXSkvYm91bmRzLndpZHRoKnJlbG1vdXNlcG9zLnggKyByLnlbMF0sXG5cdFx0XHRcdFx0ejogKHIuelsxXS1yLnpbMF0pL2JvdW5kcy53aWR0aCpyZWxtb3VzZXBvcy54ICsgci56WzBdXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHRoaXMuRE9NLmFuaW1hdGFibGVba2V5XS5zdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSB0aGlzLkRPTS5hbmltYXRhYmxlW2tleV0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHRyYW5zZm9ybXMudHJhbnNsYXRpb24ueCArICdweCkgdHJhbnNsYXRlWSgnICsgdHJhbnNmb3Jtcy50cmFuc2xhdGlvbi55ICsgJ3B4KSB0cmFuc2xhdGVaKCcgKyB0cmFuc2Zvcm1zLnRyYW5zbGF0aW9uLnogKyAncHgpIHJvdGF0ZVgoJyArIHRyYW5zZm9ybXMucm90YXRpb24ueCArICdkZWcpIHJvdGF0ZVkoJyArIHRyYW5zZm9ybXMucm90YXRpb24ueSArICdkZWcpIHJvdGF0ZVooJyArIHRyYW5zZm9ybXMucm90YXRpb24ueiArICdkZWcpJztcblx0XHR9XG5cdH1cblxuXHRzZXRSYW5nZSAob2JqKSB7XG5cdFx0Zm9yKGxldCBrIGluIG9iaikge1xuXHRcdFx0aWYoIG9ialtrXSA9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdG9ialtrXSA9IFswLDBdO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiggdHlwZW9mIG9ialtrXSA9PT0gJ251bWJlcicgKSB7XG5cdFx0XHRcdG9ialtrXSA9IFstMSpvYmpba10sb2JqW2tdXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUaWx0Rng7Il19
