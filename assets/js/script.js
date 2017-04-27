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
			_this2.$el.animate({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvYXBwLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvU2xpZGVyLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvVGlsdEZ4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLE1BQU07QUFHVCxLQUhTLGtCQUdGO0FBQ04sT0FBSyxHQUFMLEdBQWlCLEVBQUUsTUFBRixDQUFqQjtBQUNBLE9BQUssT0FBTCxHQUFpQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsYUFBZCxDQUFqQjtBQUNBLE9BQUssR0FBTCxHQUFlLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxXQUFkLENBQWY7QUFDQSxPQUFLLFNBQUwsR0FBaUIsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGFBQWQsQ0FBakI7QUFDQSxPQUFLLE9BQUwsR0FBaUIsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLFlBQWQsQ0FBakI7QUFDQSxPQUFLLE9BQUwsR0FBaUIsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLG9CQUFkLENBQWpCO0FBQ0EsT0FBSyxNQUFMLEdBQWlCLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxVQUFkLENBQWpCO0FBQ0EsT0FBSyxZQUFMLEdBQW9CLENBQ25CLEVBRG1CLEVBRW5CO0FBQ0MsYUFBVTtBQUNULGdCQUFhO0FBQ1osa0JBQWMsRUFBQyxHQUFHLEVBQUosRUFBUSxHQUFHLEVBQVgsRUFBZSxHQUFHLEVBQWxCLEVBREY7QUFFWixlQUFXLEVBQUMsR0FBRyxDQUFKLEVBQU8sR0FBRyxDQUFDLEVBQVgsRUFBZSxHQUFHLENBQWxCLEVBRkM7QUFHWix1QkFBbUIsRUFBQyxVQUFXLEdBQVosRUFBaUIsUUFBUyxhQUExQjtBQUhQLEtBREo7QUFNVCxXQUFRO0FBQ1Asa0JBQWMsRUFBQyxHQUFHLEVBQUosRUFBUSxHQUFHLEVBQVgsRUFBZSxH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V0FBWCxDQUF1QixDQUF2QyxHQUEyQyxpQkFBM0MsR0FBK0QsV0FBVyxXQUFYLENBQXVCLENBQXRGLEdBQTBGLGlCQUExRixHQUE4RyxXQUFXLFdBQVgsQ0FBdUIsQ0FBckksR0FBeUksY0FBekksR0FBMEosV0FBVyxRQUFYLENBQW9CLENBQTlLLEdBQWtMLGVBQWxMLEdBQW9NLFdBQVcsUUFBWCxDQUFvQixDQUF4TixHQUE0TixlQUE1TixHQUE4TyxXQUFXLFFBQVgsQ0FBb0IsQ0FBbFEsR0FBc1EsTUFBbFc7QUFDQTtBQUNEOzs7MkJBRVMsRyxFQUFLO0FBQ2QsUUFBSSxJQUFJLENBQVIsSUFBYSxHQUFiLEVBQWtCO0FBQ2pCLFFBQUksSUFBSSxDQUFKLEtBQVUsU0FBZCxFQUEwQjtBQUN6QixTQUFJLENBQUosSUFBUyxDQUFDLENBQUQsRUFBRyxDQUFILENBQVQ7QUFDQSxLQUZELE1BR0ssSUFBSSxPQUFPLElBQUksQ0FBSixDQUFQLEtBQWtCLFFBQXRCLEVBQWlDO0FBQ3JDLFNBQUksQ0FBSixJQUFTLENBQUMsQ0FBQyxDQUFELEdBQUcsSUFBSSxDQUFKLENBQUosRUFBVyxJQUFJLENBQUosQ0FBWCxDQUFUO0FBQ0E7QUFDRDtBQUNEOzs7Ozs7a0JBSWEsTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgU2xpZGVyIGZyb20gJy4vbW9kdWxlcy9TbGlkZXIuanMnO1xuaW1wb3J0IFRpbHRGeCBmcm9tICcuL21vZHVsZXMvVGlsdEZ4LmpzJztcblxubGV0IEFwcCA9IHtcblxuXHRcblx0aW5pdCgpIHtcblx0XHR0aGlzLiRlbCAgICAgICA9ICQoJ2JvZHknKTtcblx0XHR0aGlzLiRsaW5rVG8gICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1saW5rLXRvJyk7XG5cdFx0dGhpcy5uYXYgXHQgICA9IHRoaXMuJGVsLmZpbmQoJy5tYWluLW5hdicpO1x0XHRcblx0XHR0aGlzLiRwcmV2aWV3cyA9IHRoaXMuJGVsLmZpbmQoJy5qcy1wcmV2aWV3Jyk7XG5cdFx0dGhpcy4kc2xpZGVyICAgPSB0aGlzLiRlbC5maW5kKCcuanMtc2xpZGVyJyk7XG5cdFx0dGhpcy4kc2tpbGxzICAgPSB0aGlzLiRlbC5maW5kKCcuanMtc2tpbGxzLWNvbnRlbnQnKTtcblx0XHR0aGlzLiRiYW5kcyAgICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1iYW5kJyk7XG5cdFx0dGhpcy50aWx0U2V0dGluZ3MgPSBbXG5cdFx0XHR7fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRpbWdXcmFwcGVyIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IDEwLCB6OiAzMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAtMTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGxpbmVzIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IDEwLCB6OiBbMCw3MF19LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogLTJ9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogMn0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMjAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YWQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAtMTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMCwgeTogMCwgejogMn0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMjAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAwLCB5OiAxMDAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IC01LCB5OiAxMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogOTAwLCBlYXNpbmcgOiAnZWFzZU91dEN1YmljJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAzMCwgeTogMzAsIHo6IFswLDQwXX0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiBbMCwxNV0sIHk6IDAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEyMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IDEwLCB6OiBbMCwyMF19LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEwMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwMCwgeTogMTAwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA5MDAsIGVhc2luZyA6ICdlYXNlT3V0Q3ViaWMnfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRpbWdXcmFwcGVyIDoge1xuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogLTUsIHk6IDEwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA1MCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhcHRpb24gOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAyMCwgeTogMjAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFkJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG92ZXJsYXkgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1LCB5OiAtNSwgejogMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiA2fSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMDAwLCBlYXNpbmcgOiAnZWFzZU91dFF1YWQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1MCwgeTogNTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDUwLCBlYXNpbmcgOiAnZWFzZU91dFF1YWQnfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRpbWdXcmFwcGVyIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMCwgeTogLTgsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogMywgeTogMywgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTIwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGxpbmVzIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTUsIHk6IDE1LCB6OiBbMCwxNV19LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEyMDAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvdmVybGF5IDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMCwgeTogOCwgejogMH0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogNjAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwLCB5OiAtMTUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDkwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNoaW5lIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNTAsIHk6IDUwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMjAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bW92ZW1lbnQ6IHtcblx0XHRcdFx0XHRsaW5lcyA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IC01LCB5OiA1LCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxMDAwLCBlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDE1LCB5OiAxNSwgejogMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAzfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxNTAwLCBlYXNpbmcgOiAnZWFzZU91dEVsYXN0aWMnLCBlbGFzdGljaXR5IDogNzAwfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDE1LCB5OiAtMTUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDUwMCxlYXNpbmcgOiAnZWFzZU91dEV4cG8nfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1MCwgeTogNTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDUwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0aW1nV3JhcHBlciA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDUsIHk6IDUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDgwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFydCd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYXB0aW9uIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IDEwLCB6OiBbMCw1MF19LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDEwMDAsIGVhc2luZyA6ICdlYXNlT3V0UXVhcnQnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiA1MCwgeTogNTAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtkdXJhdGlvbiA6IDgwMCwgZWFzaW5nIDogJ2Vhc2VPdXRRdWFydCd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtb3ZlbWVudDoge1xuXHRcdFx0XHRcdGxpbmVzIDoge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNDAsIHk6IDQwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiAxNTAwLCBlYXNpbmcgOiAnZWFzZU91dEVsYXN0aWMnfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDIwLCB5OiAyMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAtNX0sXG5cdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge2R1cmF0aW9uIDogMTAwMCwgZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ31cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG92ZXJsYXkgOiB7XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAtMzAsIHk6IC0zMCwgejogMH0sXG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA6IHt4OiAwLCB5OiAwLCB6OiAzfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA3NTAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzaGluZSA6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uIDoge3g6IDEwMCwgeTogMTAwLCB6OiAwfSxcblx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7ZHVyYXRpb24gOiA3NTAsIGVhc2luZyA6ICdlYXNlT3V0RXhwbyd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XTtcblxuXHRcdHRoaXMuVXNlclNlZSAgID0gdHJ1ZTtcblx0XHR0aGlzLnNraWxsc09uICA9IGZhbHNlO1xuXG5cdFx0dGhpcy5zciBcdCAgID0gU2Nyb2xsUmV2ZWFsKHsgcmVzZXQ6IGZhbHNlIH0pO1xuXG5cdFx0Ly9pbml0IFNsaWRlciBcblx0XHRpZiAodGhpcy4kc2xpZGVyLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5hdXRvcGxheSA9IG5ldyBTbGlkZXI7XG5cdFx0XHR0aGlzLmF1dG9wbGF5LmluaXQodGhpcy4kc2xpZGVyKTtcblx0XHR9XG5cdFx0dGhpcy52aWV3SXNBY3RpdmUoKTsgXHRcblxuXHRcdC8vIGxpbmtUbyBmdW5jdGlvbiBpZiBsaW5rcyBleGlzdCBcblx0XHRpZiAodGhpcy4kbGlua1RvLmxlbmd0aCkgdGhpcy5saW5rVG8oKTtcblxuXHRcdC8vIHNjcm9sbCBmb3IgdG9wIG1lbnUgbmF2IFxuXHRcdHRoaXMuc2Nyb2xsKCk7XG5cblx0XHQvLyBmdW5jdGlvbiByZXZhbCBcblx0XHR0aGlzLnJldmFsKCk7XHRcblxuXHRcdC8vcHJlbG9hZCBpbWcgXG5cdFx0aWYgKHRoaXMuJHByZXZpZXdzLmxlbmd0aCkgdGhpcy5wcmVsb2FkKCk7XHRcblxuXHRcdC8vcHJlbG9hZCBpbWcgcHJldmlldyBcblx0XHR0aGlzLmluaXRQb3J0Zm9saW9QcmV2aWV3KCk7XG5cdFx0XG5cdH0sXG5cblx0dmlld0lzQWN0aXZlKCkge1xuXHRcdHdpbmRvdy5vbmZvY3VzID0gKCkgPT4ge1xuXHRcdCAgICB0aGlzLlVzZXJTZWUgPSB0cnVlO1xuXHRcdCAgfTtcblxuXHRcdHdpbmRvdy5vbmJsdXIgPSAoKSA9PiB7XG5cdFx0ICAgIHRoaXMuVXNlclNlZSA9IGZhbHNlO1xuXHRcdCAgfTtcblx0XHRzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdCAgICBpZiAoIXRoaXMuVXNlclNlZSkgdGhpcy5hdXRvcGxheS5zdG9wKCk7XG5cdFx0fSwgMTAwMCk7XG5cdH0sXG5cblx0bGlua1RvKCkge1xuXHRcdHRoaXMuJGxpbmtUby5vbignY2xpY2sgdG91Y2gnLCAoZSkgPT4ge1xuXHRcdFx0bGV0IHRhcmdldCAgID0gJChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdGxldCAkc2VjdGlvbiA9IHRoaXMuJGVsLmZpbmQodGFyZ2V0KTtcblx0XHRcdHRoaXMuJGVsLmFuaW1hdGUoe1xuXHRcdCAgICAgICAgc2Nyb2xsVG9wOiAkc2VjdGlvbi5vZmZzZXQoKS50b3Bcblx0XHQgICAgfSwgMTAwMCk7XG5cdFx0fSlcblx0fSwgXG5cblx0aXNWaXNpYmxlKGVsZW1lbnQpIHtcblx0XHRsZXQgJGVsZW1lbnQgICAgICAgID0gJChlbGVtZW50KTtcblx0XHRsZXQgdG9wRWxlbWVudCBcdCAgICA9ICRlbGVtZW50Lm9mZnNldCgpLnRvcDtcblx0XHRsZXQgYm90dG9tRWxlbWVudCBcdD0gKCRlbGVtZW50Lm9mZnNldCgpLnRvcCArICRlbGVtZW50LmhlaWdodCgpICkgO1xuXHRcdGxldCBzY3JvbGx0b3AgXHQgICAgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0bGV0IHNjcm9sbEJvdHRvbSBcdD0gc2Nyb2xsdG9wICsgJCh3aW5kb3cpLmhlaWdodCgpO1xuXHRcdGxldCBpc1Zpc2libGUgICAgICAgPSBmYWxzZTtcblxuXHRcdGlmICggdG9wRWxlbWVudCA+IHNjcm9sbHRvcCAmJiBib3R0b21FbGVtZW50IDwgc2Nyb2xsQm90dG9tICkge1xuXHRcdFx0aXNWaXNpYmxlID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aXNWaXNpYmxlID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBpc1Zpc2libGUgO1xuXHR9LFxuXG5cdHNjcm9sbCgpIHtcblx0XHRsZXQgc3RlcDEgPSB0aGlzLiRlbC5maW5kKCcjYWJvdXQnKS5vZmZzZXQoKS50b3A7XG5cdFx0JCh3aW5kb3cpLnNjcm9sbFRvcCgpID49IHN0ZXAxLTEwMCA/IHRoaXMubmF2LmFkZENsYXNzKCdmaXh5JykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnZml4eScpO1xuXHRcdCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSBzdGVwMSA/IHRoaXMubmF2LmFkZENsYXNzKCdhY3RpdmUnKSA6IHRoaXMubmF2LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdCQod2luZG93KS5vbignc2Nyb2xsJywgKCkgPT4ge1xuXHRcdFx0bGV0IGN1cnJlbnRTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cblx0XHRcdGN1cnJlbnRTY3JvbGwgPj0gODAgPyB0aGlzLm5hdi5jc3MoJ3RvcCcsICctNjFweCcpIDogdGhpcy5uYXYuY3NzKCd0b3AnLCAnMHB4Jyk7XG5cdFx0XHRjdXJyZW50U2Nyb2xsID49IHN0ZXAxLTEwMCA/IHRoaXMubmF2LmFkZENsYXNzKCdmaXh5JykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnZml4eScpO1xuXHRcdFx0Y3VycmVudFNjcm9sbCA+PSBzdGVwMSA/IHRoaXMubmF2LmFkZENsYXNzKCdhY3RpdmUnKSA6IHRoaXMubmF2LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0Ly9pbml0IHNsaWRlciBcdFx0XG5cdFx0XHRpZiAodGhpcy4kc2xpZGVyLmxlbmd0aCkge1x0XHRcdFx0XG5cdFx0XHRcdGlmICh0aGlzLmlzVmlzaWJsZSh0aGlzLiRzbGlkZXIpKSB7XG5cdFx0XHRcdFx0dGhpcy5hdXRvcGxheS5wbGF5KClcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmF1dG9wbGF5LnN0b3AoKVxuXHRcdFx0XHR9XG5cdFx0XHR9IFxuXG5cdFx0XHRpZiAodGhpcy4kc2tpbGxzLmxlbmd0aCkge1x0XHRcdFx0XG5cdFx0XHRcdGlmICh0aGlzLmlzVmlzaWJsZSh0aGlzLiRza2lsbHNbMF0pKSB7XHRcblx0XHRcdFx0XHR0aGlzLnNob3dTa2lsbHMoKTtcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLiRiYW5kcy5sZW5ndGgpIHtcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdHRoaXMuc2hvd0JhbmRzKCk7XHRcdFx0XHRcblx0XHRcdH0gIFxuXHRcdH0pOyBcblx0XG5cdH0sXG5cblx0cmV2YWwoKSB7XG5cdFx0Ly9sZWZ0IHRvIHJpZ2h0XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1sZWZ0JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnbGVmdCcsIHNjYWxlOiAxLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLWxlZnQtZGVsYXknLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdsZWZ0Jywgc2NhbGU6IDEsIGRlbGF5OiA1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtbGVmdC1sb25nLWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnbGVmdCcsIHNjYWxlOiAxLCBkZWxheTogMTUwMCwgZHVyYXRpb246NTAwfSk7XG5cdFx0Ly9yaWdodCB0byBsZWZ0XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1yaWdodCcsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ3JpZ2h0Jywgc2NhbGU6IDEsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtcmlnaHQtZGVsYXknLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdyaWdodCcsIHNjYWxlOiAxLCBkZWxheTogNTAwLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXJpZ2h0LWxvbmctZGVsYXknLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdyaWdodCcsIHNjYWxlOiAxLCBkZWxheTogMTUwMCwgZHVyYXRpb246NTAwfSk7XG5cdFx0Ly9ib3R0b20gdG8gdG9wIFxuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtdG9wJywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnYm90dG9tJywgc2NhbGU6IDEsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtdG9wLWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnYm90dG9tJywgc2NhbGU6IDEsIGRlbGF5OiA1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtdG9wLWxvbmctZGVsYXknLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdib3R0b20nLCBzY2FsZTogMSwgZGVsYXk6IDE1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXG5cdH0sXG5cblx0c2hvd1NraWxscygpIHtcblxuXHRcdGlmKCF0aGlzLnNraWxsc09uKSB7XG5cdFx0XHRsZXQgJHNraWxscyA9IHRoaXMuJGVsLmZpbmQoJy5qcy1wZXJjZW50Jyk7XG5cdFx0XHQkc2tpbGxzLmVhY2goIChpbmRleCwgY3VycmVudCkgPT4ge1xuXHRcdFx0XHRsZXQgX3BlcmNlbnQgPSAkKGN1cnJlbnQpLmF0dHIoJ2RhdGEtcGVyY2VudCcpKyclJztcblx0XHRcdFx0JChjdXJyZW50KS5jc3MoJ3dpZHRoJywgX3BlcmNlbnQpO1xuXHRcdFx0fSApXG5cdFx0fVxuXHR9LFxuXG5cdHNob3dCYW5kcygpIHtcblx0XHR0aGlzLiRiYW5kcy5lYWNoKCAoaSwgY3VycmVudCkgPT4ge1xuXHRcdFx0bGV0IF9iYW5kID0gJChjdXJyZW50KTtcblxuXHRcdFx0aWYodGhpcy5pc1Zpc2libGUoY3VycmVudCkpIHtcblx0XHRcdFx0X2JhbmQuaGFzQ2xhc3MoJ2pzLWJhbmQtcmlnaHQnKSA/IF9iYW5kLmNzcygncmlnaHQnLCAwKSA6IF9iYW5kLmNzcygnbGVmdCcsIDApIFxuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cblx0cHJlbG9hZCgpIHtcblx0XHR0aGlzLiRwcmV2aWV3cy5lYWNoKChpZHgsIGNvbnRhaW5lcikgPT4ge1xuXHRcdFx0bGV0ICRjb250YWluZXIgPSAkKGNvbnRhaW5lcik7XG5cdFx0XHRsZXQgX3VybCAgICAgICA9ICRjb250YWluZXIuZGF0YSgnaW1hZ2UtdXJsJyk7XG5cdFx0XHRsZXQgaW1nICAgICAgICA9IG5ldyBJbWFnZSgpO1xuXG5cdFx0XHRpbWcuc3JjICAgICAgICA9IF91cmw7XG5cblx0ICAgICAgICAvLyBpZiB3ZSBoYXZlIHRoaXMgaW1hZ2UgYWxyZWFkeSBjYWNoZWQsIHdlIGRvbid0IGhhdmVcblx0ICAgICAgICAvLyB0byB3YWl0IGZvciB0aGUgb25sb2FkIGNhbGxiYWNrIGFuZCBjYW4gcmVtb3ZlIHRoZVxuXHQgICAgICAgIC8vIHByZXZpZXcgaW1hZ2UgaW1tZWRpYXRlbHlcblx0ICAgICAgICBpZih0aGlzLmltZ0NvbXBsZXRlKGltZykpIHtcblx0ICAgICAgICBcdHRoaXMucmVtb3ZlUHJldmlldygkY29udGFpbmVyLCBfdXJsKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIFx0aW1nLm9ubG9hZCA9ICgpID0+IHtcblx0ICAgICAgICBcdFx0dGhpcy5yZW1vdmVQcmV2aWV3KCRjb250YWluZXIsIF91cmwpO1xuXHQgICAgICAgIFx0fTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblx0fSxcblxuXHRpbWdDb21wbGV0ZShpbWcpIHtcbiAgICAgICAgcmV0dXJuIGltZy5jb21wbGV0ZSB8fCBpbWcud2lkdGggKyBpbWcuaGVpZ2h0ID4gMDtcbiAgICB9LFxuICBcbiAgICByZW1vdmVQcmV2aWV3KCRjb250YWluZXIsIHVybCkge1xuICAgICAgICAkY29udGFpbmVyLmNzcyh7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKFwiJyArIHVybCArICdcIiknfSk7XG4gICAgICAgICRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2pzLXByZXZpZXcgcHJldmlldycpO1xuICAgIH0sXG5cbiAgICBpbml0UG9ydGZvbGlvUHJldmlldygpIHtcblx0XHRsZXQgaWR4ID0gMDtcblx0XHRbXS5zbGljZS5jYWxsKCQoJ2EudGlsdGVyJykpLmZvckVhY2goKGVsLCBwb3MpID0+IHsgXG5cdFx0XHRpZHggPSBwb3MlMiA9PT0gMCA/IGlkeCsxIDogaWR4O1xuXHRcdFx0bGV0IF9UaWx0RnggPSBuZXcgVGlsdEZ4O1xuXHRcdFx0X1RpbHRGeC5pbml0KGVsLCBBcHAudGlsdFNldHRpbmdzW2lkeC0xXSk7XG5cdFx0fSk7XG5cblx0XHRsZXQgcGF0ZXIgICAgPSB0aGlzLiRlbC5maW5kKCcucGF0ZXInKTtcblx0XHRsZXRcdHBhdGVyU1ZHID0gcGF0ZXIuZmluZCgnLnBhdGVyX19zdmcnKTtcblx0XHRsZXRcdHBhdGhFbCAgID0gcGF0ZXJTVkcuZmluZCgncGF0aCcpO1xuXHRcdGxldFx0cGF0aHMgICAgPSB7ZGVmYXVsdDogcGF0aEVsLmF0dHIoJ2QnKSwgYWN0aXZlOiBwYXRlclNWRy5hdHRyKCdkYXRhLXBhdGgtaG92ZXInKX07XG5cblx0XHRwYXRlci5vbignbW91c2VlbnRlcicsICgpID0+IHtcblx0XHRcdGFuaW1lLnJlbW92ZShwYXRoRWwpO1xuXHRcdFx0YW5pbWUoe1xuXHRcdFx0XHR0YXJnZXRzOiBwYXRoRWwsXG5cdFx0XHRcdGQ6IHBhdGhzLmFjdGl2ZSxcblx0XHRcdFx0ZHVyYXRpb246IDQwMCxcblx0XHRcdFx0ZWFzaW5nOiAnZWFzZU91dFF1YWQnXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHBhdGVyLm9uKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuXHRcdFx0YW5pbWUucmVtb3ZlKHBhdGhFbCk7XG5cdFx0XHRhbmltZSh7XG5cdFx0XHRcdHRhcmdldHM6IHBhdGhFbCxcblx0XHRcdFx0ZDogcGF0aHMuZGVmYXVsdCxcblx0XHRcdFx0ZHVyYXRpb246IDQwMCxcblx0XHRcdFx0ZWFzaW5nOiAnZWFzZU91dEV4cG8nXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG59XG5cbiQod2luZG93KS5yZWFkeShBcHAuaW5pdC5iaW5kKEFwcCkpOyIsImNsYXNzIFNsaWRlciB7IFxuXG5cdGluaXQoZWwpIHtcblx0XHR0aGlzLiRlbCAgICAgICAgICA9ICQoZWwpO1xuXHRcdHRoaXMuJGNvbnRhaW5lciAgID0gdGhpcy4kZWwuZmluZCgndWwnKTtcblx0XHR0aGlzLiRzbGlkZXJzICAgICA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCdsaScpO1xuXHRcdHRoaXMubm9tYmVyU2xpZGUgID0gdGhpcy4kc2xpZGVycy5sZW5ndGg7XG5cdFx0dGhpcy53aWR0aCAgICAgICAgPSAzMDA7XG5cdFx0dGhpcy5sZWZ0ICAgICAgICAgPSAtdGhpcy53aWR0aDtcblx0XHR0aGlzLmR1cmF0aW9uIFx0ICA9IDM1MDA7XG5cdFx0dGhpcy5jdXJyZW50SW5kZXggPSAxO1xuXHRcdHRoaXMuaXNQbGF5aW5nICAgID0gZmFsc2U7XG5cdFx0XG5cblx0XHR0aGlzLiRjb250YWluZXIuY3NzKCd3aWR0aCcsIHRoaXMubm9tYmVyU2xpZGUqdGhpcy53aWR0aCsncHgnKTtcblx0XHQkKHRoaXMuJHNsaWRlcnNbMF0pLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXHRcdHRoaXMuJGVsLmhvdmVyKCgpID0+IHsgdGhpcy5zdG9wKCkgfSwgKCkgPT4geyB0aGlzLnBsYXkoKSB9ICk7XHRcdFxuXG5cdH1cblxuXHRzbGlkZXIoKSB7XG5cdFx0dGhpcy4kY29udGFpbmVyLmFuaW1hdGUoe1xuXHRcdFx0XHRcdGxlZnQgOiB0aGlzLmxlZnQrJ3B4J1xuXHRcdFx0XHR9LCAyMDAsICgpID0+IHtcblx0XHRcdFx0XHQkKHRoaXMuJHNsaWRlcnMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkKHRoaXMuJHNsaWRlcnNbdGhpcy5jdXJyZW50SW5kZXhdKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0aWYgKHRoaXMubGVmdCA+ICh0aGlzLm5vbWJlclNsaWRlLTEpKi0odGhpcy53aWR0aCkpIHtcblx0XHRcdFx0XHRcdHRoaXMubGVmdCA9IHRoaXMubGVmdC10aGlzLndpZHRoO1xuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SW5kZXgrKztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5sZWZ0ID0gMDtcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEluZGV4ID0gMDtcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxuXHRcdFx0XHR9KTtcblx0fVxuXG5cdHBsYXkoKSB7XG5cdFx0XG5cdFx0aWYgKCF0aGlzLmlzUGxheWluZykge1xuXHRcdFx0dGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMuc2xpZGVyLmJpbmQodGhpcyksIHRoaXMuZHVyYXRpb24pO1xuXHRcdFx0dGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuXHRcdH1cblx0XHRcblx0fVxuXG5cdHN0b3AoKSB7XG5cdFx0aWYgKHRoaXMuaXNQbGF5aW5nKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuXHRcdFx0dGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7IiwiY2xhc3MgVGlsdEZ4IHtcblxuXHQvLyBIZWxwZXIgdmFycyBhbmQgZnVuY3Rpb25zLlxuXHRleHRlbmQoIGEsIGIgKSB7XG5cdFx0Zm9yKCBsZXQga2V5IGluIGIgKSB7IFxuXHRcdFx0aWYoIGIuaGFzT3duUHJvcGVydHkoIGtleSApICkge1xuXHRcdFx0XHRhW2tleV0gPSBiW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBhO1xuXHR9XG5cblx0Z2V0TW91c2VQb3MoZSkge1xuXHRcdGxldCBwb3N4ID0gMDtcblx0XHRsZXQgcG9zeSA9IDA7XG5cblx0XHRpZiAoIWUpIHtsZXQgZSA9IHdpbmRvdy5ldmVudH1cblx0XHRpZiAoZS5wYWdlWCB8fCBlLnBhZ2VZKSBcdHtcblx0XHRcdHBvc3ggPSBlLnBhZ2VYO1xuXHRcdFx0cG9zeSA9IGUucGFnZVk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGUuY2xpZW50WCB8fCBlLmNsaWVudFkpIFx0e1xuXHRcdFx0cG9zeCA9IGUuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuXHRcdFx0cG9zeSA9IGUuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0XHR9XG5cdFx0cmV0dXJuIHsgeCA6IHBvc3gsIHkgOiBwb3N5IH1cblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0LlxuXHQgKi9cblx0aW5pdChlbCwgb3B0aW9ucykge1xuXHRcdHRoaXMuRE9NICAgICAgICAgICAgICAgICAgICAgICA9IHt9O1xuXHRcdHRoaXMuRE9NLmVsICAgICAgICAgICAgICAgICAgICA9IGVsO1xuXHRcdHRoaXMub3B0aW9ucyAgICAgICAgICAgICAgICAgICA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vdmVtZW50OiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltZ1dyYXBwZXIgOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMCwgeTogMCwgejogMH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm90YXRpb24gOiB7eDogLTUsIHk6IDUsIHo6IDB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDEyMDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgOiAnZWFzZU91dEVsYXN0aWMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxhc3RpY2l0eSA6IDYwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZXMgOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogMTAsIHk6IDEwLCB6OiBbMCwxMF19LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDEwMDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgOiAnZWFzZU91dEV4cG8nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxhc3RpY2l0eSA6IDYwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FwdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAyMCwgeTogMjAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvdGF0aW9uIDoge3g6IDAsIHk6IDAsIHo6IDB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldmVyc2VBbmltYXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDE1MDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgOiAnZWFzZU91dEVsYXN0aWMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxhc3RpY2l0eSA6IDYwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lypcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmxheSA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbiA6IHt4OiAxMCwgeTogMTAsIHo6IFswLDUwXX0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV2ZXJzZUFuaW1hdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogNTAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWFzaW5nIDogJ2Vhc2VPdXRFeHBvJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hpbmUgOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNsYXRpb24gOiB7eDogNTAsIHk6IDUwLCB6OiAwfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXZlcnNlQW5pbWF0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb24gOiAxMjAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWFzaW5nIDogJ2Vhc2VPdXRFbGFzdGljJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsYXN0aWNpdHk6IDYwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0dGhpcy5leHRlbmQodGhpcy5vcHRpb25zLCBvcHRpb25zKTtcdFx0XG5cdFx0dGhpcy5ET00uYW5pbWF0YWJsZSAgICAgICAgICAgID0ge307XG5cdFx0dGhpcy5ET00uYW5pbWF0YWJsZS5pbWdXcmFwcGVyID0gdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLnRpbHRlcl9fZmlndXJlJyk7XG5cdFx0dGhpcy5ET00uYW5pbWF0YWJsZS5saW5lcyAgICAgID0gdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLnRpbHRlcl9fZGVjby0tbGluZXMnKTtcblx0XHR0aGlzLkRPTS5hbmltYXRhYmxlLmNhcHRpb24gICAgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKCcudGlsdGVyX19jYXB0aW9uJyk7XG5cdFx0dGhpcy5ET00uYW5pbWF0YWJsZS5vdmVybGF5ICAgID0gdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcignLnRpbHRlcl9fZGVjby0tb3ZlcmxheScpO1xuXHRcdHRoaXMuRE9NLmFuaW1hdGFibGUuc2hpbmUgICAgICA9IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoJy50aWx0ZXJfX2RlY28tLXNoaW5lID4gZGl2Jyk7XG5cdFx0dGhpcy5pbml0RXZlbnRzKCk7XG5cdH1cblxuXHRpbml0RXZlbnRzKCkge1x0XHRcblxuXHRcdCQodGhpcy5ET00uZWwpLm9uKCdtb3VzZW1vdmUnLCAgKGUpID0+IHt0aGlzLm1vdXNlbW92ZUZuKGUpfSk7XG5cdFx0JCh0aGlzLkRPTS5lbCkub24oJ21vdXNlbGVhdmUnLCAoZSkgPT4ge3RoaXMubW91c2VsZWF2ZUZuKGUpfSk7XG5cdFx0JCh0aGlzLkRPTS5lbCkub24oJ21vdXNlZW50ZXInLCAoICkgPT4ge3RoaXMubW91c2VlbnRlckZuKCl9KTtcblx0fVxuXG5cdG1vdXNlbW92ZUZuKGV2KSB7XHRcdFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7IHRoaXMubGF5b3V0KGV2KTsgfSk7XG5cdH1cblxuXHRtb3VzZWVudGVyRm4oKSB7XHRcdFxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuRE9NLmFuaW1hdGFibGUpIHtcblx0XHRcdGFuaW1lLnJlbW92ZSh0aGlzLkRPTS5hbmltYXRhYmxlW2tleV0pO1xuXHRcdH1cblx0fVxuXG5cdG1vdXNlbGVhdmVGbihldikge1x0XHRcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5ET00uYW5pbWF0YWJsZSkge1xuXHRcdFx0XHRpZiggdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0gPT0gdW5kZWZpbmVkICkge2NvbnRpbnVlO31cblx0XHRcdFx0YW5pbWUoe1xuXHRcdFx0XHRcdHRhcmdldHM6IHRoaXMuRE9NLmFuaW1hdGFibGVba2V5XSxcblx0XHRcdFx0XHRkdXJhdGlvbjogdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucmV2ZXJzZUFuaW1hdGlvbiAhPSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uLmR1cmF0aW9uIHx8IDAgOiAxLFxuXHRcdFx0XHRcdGVhc2luZzogdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucmV2ZXJzZUFuaW1hdGlvbiAhPSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS5yZXZlcnNlQW5pbWF0aW9uLmVhc2luZyB8fCAnbGluZWFyJyA6ICdsaW5lYXInLFxuXHRcdFx0XHRcdGVsYXN0aWNpdHk6IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnJldmVyc2VBbmltYXRpb24gIT0gdW5kZWZpbmVkID8gdGhpcy5vcHRpb25zLm1vdmVtZW50W2tleV0ucmV2ZXJzZUFuaW1hdGlvbi5lbGFzdGljaXR5IHx8IG51bGwgOiBudWxsLFxuXHRcdFx0XHRcdHNjYWxlWDogMSxcblx0XHRcdFx0XHRzY2FsZVk6IDEsXG5cdFx0XHRcdFx0c2NhbGVaOiAxLFxuXHRcdFx0XHRcdHRyYW5zbGF0ZVg6IDAsXG5cdFx0XHRcdFx0dHJhbnNsYXRlWTogMCxcblx0XHRcdFx0XHR0cmFuc2xhdGVaOiAwLFxuXHRcdFx0XHRcdHJvdGF0ZVg6IDAsXG5cdFx0XHRcdFx0cm90YXRlWTogMCxcblx0XHRcdFx0XHRyb3RhdGVaOiAwXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0bGF5b3V0KGV2KSB7XG5cdFx0Ly8gTW91c2UgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50LlxuXHRcdGxldCBtb3VzZXBvcyA9IHRoaXMuZ2V0TW91c2VQb3MoZXYpO1xuXHRcdFx0Ly8gRG9jdW1lbnQgc2Nyb2xscy5cblx0XHRsZXRcdGRvY1Njcm9sbHMgPSB7bGVmdCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LCB0b3AgOiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3B9O1xuXHRcdGxldFx0Ym91bmRzID0gdGhpcy5ET00uZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHQvLyBNb3VzZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgbWFpbiBlbGVtZW50ICh0aGlzLkRPTS5lbCkuXG5cdFx0bGV0XHRyZWxtb3VzZXBvcyA9IHsgeCA6IG1vdXNlcG9zLnggLSBib3VuZHMubGVmdCAtIGRvY1Njcm9sbHMubGVmdCwgeSA6IG1vdXNlcG9zLnkgLSBib3VuZHMudG9wIC0gZG9jU2Nyb2xscy50b3AgfTtcblxuXHRcdC8vIE1vdmVtZW50IHNldHRpbmdzIGZvciB0aGUgYW5pbWF0YWJsZSBlbGVtZW50cy5cblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLkRPTS5hbmltYXRhYmxlKSB7XG5cdFx0XHRpZiggdGhpcy5ET00uYW5pbWF0YWJsZVtrZXldID09IHVuZGVmaW5lZCB8fCB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XSA9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHQgPSB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XSAhPSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMubW92ZW1lbnRba2V5XS50cmFuc2xhdGlvbiB8fCB7eDowLHk6MCx6OjB9IDoge3g6MCx5OjAsejowfTtcblx0XHRcdGxldFx0ciA9IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5tb3ZlbWVudFtrZXldLnJvdGF0aW9uIHx8IHt4OjAseTowLHo6MH0gOiB7eDowLHk6MCx6OjB9O1xuXG5cdFx0XHR0aGlzLnNldFJhbmdlKHQpO1xuXHRcdFx0dGhpcy5zZXRSYW5nZShyKTtcblx0XHRcdFxuXHRcdFx0bGV0IHRyYW5zZm9ybXMgPSB7XG5cdFx0XHRcdHRyYW5zbGF0aW9uIDoge1xuXHRcdFx0XHRcdHg6ICh0LnhbMV0tdC54WzBdKS9ib3VuZHMud2lkdGgqcmVsbW91c2Vwb3MueCArIHQueFswXSxcblx0XHRcdFx0XHR5OiAodC55WzFdLXQueVswXSkvYm91bmRzLmhlaWdodCpyZWxtb3VzZXBvcy55ICsgdC55WzBdLFxuXHRcdFx0XHRcdHo6ICh0LnpbMV0tdC56WzBdKS9ib3VuZHMuaGVpZ2h0KnJlbG1vdXNlcG9zLnkgKyB0LnpbMF0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJvdGF0aW9uIDoge1xuXHRcdFx0XHRcdHg6IChyLnhbMV0tci54WzBdKS9ib3VuZHMuaGVpZ2h0KnJlbG1vdXNlcG9zLnkgKyByLnhbMF0sXG5cdFx0XHRcdFx0eTogKHIueVsxXS1yLnlbMF0pL2JvdW5kcy53aWR0aCpyZWxtb3VzZXBvcy54ICsgci55WzBdLFxuXHRcdFx0XHRcdHo6IChyLnpbMV0tci56WzBdKS9ib3VuZHMud2lkdGgqcmVsbW91c2Vwb3MueCArIHIuelswXVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLkRPTS5hbmltYXRhYmxlW2tleV0uc3R5bGUuV2Via2l0VHJhbnNmb3JtID0gdGhpcy5ET00uYW5pbWF0YWJsZVtrZXldLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyB0cmFuc2Zvcm1zLnRyYW5zbGF0aW9uLnggKyAncHgpIHRyYW5zbGF0ZVkoJyArIHRyYW5zZm9ybXMudHJhbnNsYXRpb24ueSArICdweCkgdHJhbnNsYXRlWignICsgdHJhbnNmb3Jtcy50cmFuc2xhdGlvbi56ICsgJ3B4KSByb3RhdGVYKCcgKyB0cmFuc2Zvcm1zLnJvdGF0aW9uLnggKyAnZGVnKSByb3RhdGVZKCcgKyB0cmFuc2Zvcm1zLnJvdGF0aW9uLnkgKyAnZGVnKSByb3RhdGVaKCcgKyB0cmFuc2Zvcm1zLnJvdGF0aW9uLnogKyAnZGVnKSc7XG5cdFx0fVxuXHR9XG5cblx0c2V0UmFuZ2UgKG9iaikge1xuXHRcdGZvcihsZXQgayBpbiBvYmopIHtcblx0XHRcdGlmKCBvYmpba10gPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRvYmpba10gPSBbMCwwXTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYoIHR5cGVvZiBvYmpba10gPT09ICdudW1iZXInICkge1xuXHRcdFx0XHRvYmpba10gPSBbLTEqb2JqW2tdLG9ialtrXV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGlsdEZ4OyJdfQ==
