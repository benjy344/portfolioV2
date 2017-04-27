(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Slider = require('./modules/Slider.js');

var _Slider2 = _interopRequireDefault(_Slider);

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
		[].slice.call(document.querySelectorAll('a.tilter')).forEach(function (el, pos) {
			idx = pos % 2 === 0 ? idx + 1 : idx;
			new TiltFx(el, tiltSettings[idx - 1]);
		});
	}
};

$(window).ready(App.init.bind(App));

},{"./modules/Slider.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvYXBwLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvU2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUEsSUFBSSxNQUFNO0FBRVQsS0FGUyxrQkFFRjtBQUNOLE9BQUssR0FBTCxHQUFpQixFQUFFLE1BQUYsQ0FBakI7QUFDQSxPQUFLLE9BQUwsR0FBaUIsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGFBQWQsQ0FBakI7QUFDQSxPQUFLLEdBQUwsR0FBZSxLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsV0FBZCxDQUFmO0FBQ0EsT0FBSyxTQUFMLEdBQWlCLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxhQUFkLENBQWpCO0FBQ0EsT0FBSyxPQUFMLEdBQWlCLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxZQUFkLENBQWpCO0FBQ0EsT0FBSyxPQUFMLEdBQWlCLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxvQkFBZCxDQUFqQjtBQUNBLE9BQUssTUFBTCxHQUFpQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsVUFBZCxDQUFqQjs7QUFFQSxPQUFLLE9BQUwsR0FBaUIsSUFBakI7QUFDQSxPQUFLLFFBQUwsR0FBaUIsS0FBakI7O0FBRUEsT0FBSyxFQUFMLEdBQWMsYUFBYSxFQUFFLE9BQU8sS0FBVCxFQUFiLENBQWQ7O0FBRUE7QUFDQSxNQUFJLEtBQUssT0FBTCxDQUFhLE1BQWpCLEVBQXlCO0FBQ3hCLFFBQUssUUFBTCxHQUFnQixzQkFBaEI7QUFDQSxRQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLEtBQUssT0FBeEI7QUFDQTtBQUNELE9BQUssWUFBTDs7QUFFQTtBQUNBLE1BQUksS0FBSyxPQUFMLENBQWEsTUFBakIsRUFBeUIsS0FBSyxNQUFMOztBQUV6QjtBQUNBLE9BQUssTUFBTDs7QUFFQTtBQUNBLE9BQUssS0FBTDs7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OztrQkFJYSxNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBTbGlkZXIgZnJvbSAnLi9tb2R1bGVzL1NsaWRlci5qcyc7XG5cbmxldCBBcHAgPSB7XG5cdFxuXHRpbml0KCkge1xuXHRcdHRoaXMuJGVsICAgICAgID0gJCgnYm9keScpO1xuXHRcdHRoaXMuJGxpbmtUbyAgID0gdGhpcy4kZWwuZmluZCgnLmpzLWxpbmstdG8nKTtcblx0XHR0aGlzLm5hdiBcdCAgID0gdGhpcy4kZWwuZmluZCgnLm1haW4tbmF2Jyk7XHRcdFxuXHRcdHRoaXMuJHByZXZpZXdzID0gdGhpcy4kZWwuZmluZCgnLmpzLXByZXZpZXcnKTtcblx0XHR0aGlzLiRzbGlkZXIgICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1zbGlkZXInKTtcblx0XHR0aGlzLiRza2lsbHMgICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1za2lsbHMtY29udGVudCcpO1xuXHRcdHRoaXMuJGJhbmRzICAgID0gdGhpcy4kZWwuZmluZCgnLmpzLWJhbmQnKTtcblxuXHRcdHRoaXMuVXNlclNlZSAgID0gdHJ1ZTtcblx0XHR0aGlzLnNraWxsc09uICA9IGZhbHNlO1xuXG5cdFx0dGhpcy5zciBcdCAgID0gU2Nyb2xsUmV2ZWFsKHsgcmVzZXQ6IGZhbHNlIH0pO1xuXG5cdFx0Ly9pbml0IFNsaWRlciBcblx0XHRpZiAodGhpcy4kc2xpZGVyLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5hdXRvcGxheSA9IG5ldyBTbGlkZXI7XG5cdFx0XHR0aGlzLmF1dG9wbGF5LmluaXQodGhpcy4kc2xpZGVyKTtcblx0XHR9XG5cdFx0dGhpcy52aWV3SXNBY3RpdmUoKTsgXHRcblxuXHRcdC8vIGxpbmtUbyBmdW5jdGlvbiBpZiBsaW5rcyBleGlzdCBcblx0XHRpZiAodGhpcy4kbGlua1RvLmxlbmd0aCkgdGhpcy5saW5rVG8oKTtcblxuXHRcdC8vIHNjcm9sbCBmb3IgdG9wIG1lbnUgbmF2IFxuXHRcdHRoaXMuc2Nyb2xsKCk7XG5cblx0XHQvLyBmdW5jdGlvbiByZXZhbCBcblx0XHR0aGlzLnJldmFsKCk7XHRcblxuXHRcdC8vcHJlbG9hZCBpbWcgXG5cdFx0aWYgKHRoaXMuJHByZXZpZXdzLmxlbmd0aCkgdGhpcy5wcmVsb2FkKCk7XHRcblxuXHRcdC8vcHJlbG9hZCBpbWcgcHJldmlldyBcblx0XHR0aGlzLmluaXRQb3J0Zm9saW9QcmV2aWV3KCk7XG5cdFx0XG5cdH0sXG5cblx0dmlld0lzQWN0aXZlKCkge1xuXHRcdHdpbmRvdy5vbmZvY3VzID0gKCkgPT4ge1xuXHRcdCAgICB0aGlzLlVzZXJTZWUgPSB0cnVlO1xuXHRcdCAgfTtcblxuXHRcdHdpbmRvdy5vbmJsdXIgPSAoKSA9PiB7XG5cdFx0ICAgIHRoaXMuVXNlclNlZSA9IGZhbHNlO1xuXHRcdCAgfTtcblx0XHRzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdCAgICBpZiAoIXRoaXMuVXNlclNlZSkgdGhpcy5hdXRvcGxheS5zdG9wKCk7XG5cdFx0fSwgMTAwMCk7XG5cdH0sXG5cblx0bGlua1RvKCkge1xuXHRcdHRoaXMuJGxpbmtUby5vbignY2xpY2sgdG91Y2gnLCAoZSkgPT4ge1xuXHRcdFx0bGV0IHRhcmdldCAgID0gJChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdGxldCAkc2VjdGlvbiA9IHRoaXMuJGVsLmZpbmQodGFyZ2V0KTtcblx0XHRcdHRoaXMuJGVsLmFuaW1hdGUoe1xuXHRcdCAgICAgICAgc2Nyb2xsVG9wOiAkc2VjdGlvbi5vZmZzZXQoKS50b3Bcblx0XHQgICAgfSwgMTAwMCk7XG5cdFx0fSlcblx0fSwgXG5cblx0aXNWaXNpYmxlKGVsZW1lbnQpIHtcblx0XHRsZXQgJGVsZW1lbnQgICAgICAgID0gJChlbGVtZW50KTtcblx0XHRsZXQgdG9wRWxlbWVudCBcdCAgICA9ICRlbGVtZW50Lm9mZnNldCgpLnRvcDtcblx0XHRsZXQgYm90dG9tRWxlbWVudCBcdD0gKCRlbGVtZW50Lm9mZnNldCgpLnRvcCArICRlbGVtZW50LmhlaWdodCgpICkgO1xuXHRcdGxldCBzY3JvbGx0b3AgXHQgICAgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0bGV0IHNjcm9sbEJvdHRvbSBcdD0gc2Nyb2xsdG9wICsgJCh3aW5kb3cpLmhlaWdodCgpO1xuXHRcdGxldCBpc1Zpc2libGUgICAgICAgPSBmYWxzZTtcblxuXHRcdGlmICggdG9wRWxlbWVudCA+IHNjcm9sbHRvcCAmJiBib3R0b21FbGVtZW50IDwgc2Nyb2xsQm90dG9tICkge1xuXHRcdFx0aXNWaXNpYmxlID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aXNWaXNpYmxlID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBpc1Zpc2libGUgO1xuXHR9LFxuXG5cdHNjcm9sbCgpIHtcblx0XHRsZXQgc3RlcDEgPSB0aGlzLiRlbC5maW5kKCcjYWJvdXQnKS5vZmZzZXQoKS50b3A7XG5cdFx0JCh3aW5kb3cpLnNjcm9sbFRvcCgpID49IHN0ZXAxLTEwMCA/IHRoaXMubmF2LmFkZENsYXNzKCdmaXh5JykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnZml4eScpO1xuXHRcdCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSBzdGVwMSA/IHRoaXMubmF2LmFkZENsYXNzKCdhY3RpdmUnKSA6IHRoaXMubmF2LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdCQod2luZG93KS5vbignc2Nyb2xsJywgKCkgPT4ge1xuXHRcdFx0bGV0IGN1cnJlbnRTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cblx0XHRcdGN1cnJlbnRTY3JvbGwgPj0gODAgPyB0aGlzLm5hdi5jc3MoJ3RvcCcsICctNjFweCcpIDogdGhpcy5uYXYuY3NzKCd0b3AnLCAnMHB4Jyk7XG5cdFx0XHRjdXJyZW50U2Nyb2xsID49IHN0ZXAxLTEwMCA/IHRoaXMubmF2LmFkZENsYXNzKCdmaXh5JykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnZml4eScpO1xuXHRcdFx0Y3VycmVudFNjcm9sbCA+PSBzdGVwMSA/IHRoaXMubmF2LmFkZENsYXNzKCdhY3RpdmUnKSA6IHRoaXMubmF2LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0Ly9pbml0IHNsaWRlciBcdFx0XG5cdFx0XHRpZiAodGhpcy4kc2xpZGVyLmxlbmd0aCkge1x0XHRcdFx0XG5cdFx0XHRcdGlmICh0aGlzLmlzVmlzaWJsZSh0aGlzLiRzbGlkZXIpKSB7XG5cdFx0XHRcdFx0dGhpcy5hdXRvcGxheS5wbGF5KClcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmF1dG9wbGF5LnN0b3AoKVxuXHRcdFx0XHR9XG5cdFx0XHR9IFxuXG5cdFx0XHRpZiAodGhpcy4kc2tpbGxzLmxlbmd0aCkge1x0XHRcdFx0XG5cdFx0XHRcdGlmICh0aGlzLmlzVmlzaWJsZSh0aGlzLiRza2lsbHNbMF0pKSB7XHRcblx0XHRcdFx0XHR0aGlzLnNob3dTa2lsbHMoKTtcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLiRiYW5kcy5sZW5ndGgpIHtcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdHRoaXMuc2hvd0JhbmRzKCk7XHRcdFx0XHRcblx0XHRcdH0gIFxuXHRcdH0pOyBcblx0XG5cdH0sXG5cblx0cmV2YWwoKSB7XG5cdFx0Ly9sZWZ0IHRvIHJpZ2h0XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1sZWZ0JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnbGVmdCcsIHNjYWxlOiAxLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLWxlZnQtZGVsYXknLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdsZWZ0Jywgc2NhbGU6IDEsIGRlbGF5OiA1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtbGVmdC1sb25nLWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnbGVmdCcsIHNjYWxlOiAxLCBkZWxheTogMTUwMCwgZHVyYXRpb246NTAwfSk7XG5cdFx0Ly9yaWdodCB0byBsZWZ0XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1yaWdodCcsIHsgZGlzdGFuY2U6ICcxMDBweCcsIG9yaWdpbjogJ3JpZ2h0Jywgc2NhbGU6IDEsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtcmlnaHQtZGVsYXknLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdyaWdodCcsIHNjYWxlOiAxLCBkZWxheTogNTAwLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXJpZ2h0LWxvbmctZGVsYXknLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdyaWdodCcsIHNjYWxlOiAxLCBkZWxheTogMTUwMCwgZHVyYXRpb246NTAwfSk7XG5cdFx0Ly9ib3R0b20gdG8gdG9wIFxuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtdG9wJywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnYm90dG9tJywgc2NhbGU6IDEsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtdG9wLWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnYm90dG9tJywgc2NhbGU6IDEsIGRlbGF5OiA1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtdG9wLWxvbmctZGVsYXknLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdib3R0b20nLCBzY2FsZTogMSwgZGVsYXk6IDE1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXG5cdH0sXG5cblx0c2hvd1NraWxscygpIHtcblxuXHRcdGlmKCF0aGlzLnNraWxsc09uKSB7XG5cdFx0XHRsZXQgJHNraWxscyA9IHRoaXMuJGVsLmZpbmQoJy5qcy1wZXJjZW50Jyk7XG5cdFx0XHQkc2tpbGxzLmVhY2goIChpbmRleCwgY3VycmVudCkgPT4ge1xuXHRcdFx0XHRsZXQgX3BlcmNlbnQgPSAkKGN1cnJlbnQpLmF0dHIoJ2RhdGEtcGVyY2VudCcpKyclJztcblx0XHRcdFx0JChjdXJyZW50KS5jc3MoJ3dpZHRoJywgX3BlcmNlbnQpO1xuXHRcdFx0fSApXG5cdFx0fVxuXHR9LFxuXG5cdHNob3dCYW5kcygpIHtcblx0XHR0aGlzLiRiYW5kcy5lYWNoKCAoaSwgY3VycmVudCkgPT4ge1xuXHRcdFx0bGV0IF9iYW5kID0gJChjdXJyZW50KTtcblxuXHRcdFx0aWYodGhpcy5pc1Zpc2libGUoY3VycmVudCkpIHtcblx0XHRcdFx0X2JhbmQuaGFzQ2xhc3MoJ2pzLWJhbmQtcmlnaHQnKSA/IF9iYW5kLmNzcygncmlnaHQnLCAwKSA6IF9iYW5kLmNzcygnbGVmdCcsIDApIFxuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cblx0cHJlbG9hZCgpIHtcblx0XHR0aGlzLiRwcmV2aWV3cy5lYWNoKChpZHgsIGNvbnRhaW5lcikgPT4ge1xuXHRcdFx0bGV0ICRjb250YWluZXIgPSAkKGNvbnRhaW5lcik7XG5cdFx0XHRsZXQgX3VybCAgICAgICA9ICRjb250YWluZXIuZGF0YSgnaW1hZ2UtdXJsJyk7XG5cdFx0XHRsZXQgaW1nICAgICAgICA9IG5ldyBJbWFnZSgpO1xuXG5cdFx0XHRpbWcuc3JjICAgICAgICA9IF91cmw7XG5cblx0ICAgICAgICAvLyBpZiB3ZSBoYXZlIHRoaXMgaW1hZ2UgYWxyZWFkeSBjYWNoZWQsIHdlIGRvbid0IGhhdmVcblx0ICAgICAgICAvLyB0byB3YWl0IGZvciB0aGUgb25sb2FkIGNhbGxiYWNrIGFuZCBjYW4gcmVtb3ZlIHRoZVxuXHQgICAgICAgIC8vIHByZXZpZXcgaW1hZ2UgaW1tZWRpYXRlbHlcblx0ICAgICAgICBpZih0aGlzLmltZ0NvbXBsZXRlKGltZykpIHtcblx0ICAgICAgICBcdHRoaXMucmVtb3ZlUHJldmlldygkY29udGFpbmVyLCBfdXJsKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIFx0aW1nLm9ubG9hZCA9ICgpID0+IHtcblx0ICAgICAgICBcdFx0dGhpcy5yZW1vdmVQcmV2aWV3KCRjb250YWluZXIsIF91cmwpO1xuXHQgICAgICAgIFx0fTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblx0fSxcblxuXHRpbWdDb21wbGV0ZShpbWcpIHtcbiAgICAgICAgcmV0dXJuIGltZy5jb21wbGV0ZSB8fCBpbWcud2lkdGggKyBpbWcuaGVpZ2h0ID4gMDtcbiAgICB9LFxuICBcbiAgICByZW1vdmVQcmV2aWV3KCRjb250YWluZXIsIHVybCkge1xuICAgICAgICAkY29udGFpbmVyLmNzcyh7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKFwiJyArIHVybCArICdcIiknfSk7XG4gICAgICAgICRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2pzLXByZXZpZXcgcHJldmlldycpO1xuICAgIH0sXG5cbiAgICBpbml0UG9ydGZvbGlvUHJldmlldygpIHtcblx0XHRsZXQgaWR4ID0gMDtcblx0XHRbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EudGlsdGVyJykpLmZvckVhY2goZnVuY3Rpb24oZWwsIHBvcykgeyBcblx0XHRcdGlkeCA9IHBvcyUyID09PSAwID8gaWR4KzEgOiBpZHg7XG5cdFx0XHRuZXcgVGlsdEZ4KGVsLCB0aWx0U2V0dGluZ3NbaWR4LTFdKTtcblx0XHR9KTtcblx0fVxuXG59XG5cbiQod2luZG93KS5yZWFkeShBcHAuaW5pdC5iaW5kKEFwcCkpOyIsImNsYXNzIFNsaWRlciB7IFxuXG5cdGluaXQoZWwpIHtcblx0XHR0aGlzLiRlbCAgICAgICAgICA9ICQoZWwpO1xuXHRcdHRoaXMuJGNvbnRhaW5lciAgID0gdGhpcy4kZWwuZmluZCgndWwnKTtcblx0XHR0aGlzLiRzbGlkZXJzICAgICA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCdsaScpO1xuXHRcdHRoaXMubm9tYmVyU2xpZGUgID0gdGhpcy4kc2xpZGVycy5sZW5ndGg7XG5cdFx0dGhpcy53aWR0aCAgICAgICAgPSAzMDA7XG5cdFx0dGhpcy5sZWZ0ICAgICAgICAgPSAtdGhpcy53aWR0aDtcblx0XHR0aGlzLmR1cmF0aW9uIFx0ICA9IDM1MDA7XG5cdFx0dGhpcy5jdXJyZW50SW5kZXggPSAxO1xuXHRcdHRoaXMuaXNQbGF5aW5nICAgID0gZmFsc2U7XG5cdFx0XG5cblx0XHR0aGlzLiRjb250YWluZXIuY3NzKCd3aWR0aCcsIHRoaXMubm9tYmVyU2xpZGUqdGhpcy53aWR0aCsncHgnKTtcblx0XHQkKHRoaXMuJHNsaWRlcnNbMF0pLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXHRcdHRoaXMuJGVsLmhvdmVyKCgpID0+IHsgdGhpcy5zdG9wKCkgfSwgKCkgPT4geyB0aGlzLnBsYXkoKSB9ICk7XHRcdFxuXG5cdH1cblxuXHRzbGlkZXIoKSB7XG5cdFx0dGhpcy4kY29udGFpbmVyLmFuaW1hdGUoe1xuXHRcdFx0XHRcdGxlZnQgOiB0aGlzLmxlZnQrJ3B4J1xuXHRcdFx0XHR9LCAyMDAsICgpID0+IHtcblx0XHRcdFx0XHQkKHRoaXMuJHNsaWRlcnMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkKHRoaXMuJHNsaWRlcnNbdGhpcy5jdXJyZW50SW5kZXhdKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0aWYgKHRoaXMubGVmdCA+ICh0aGlzLm5vbWJlclNsaWRlLTEpKi0odGhpcy53aWR0aCkpIHtcblx0XHRcdFx0XHRcdHRoaXMubGVmdCA9IHRoaXMubGVmdC10aGlzLndpZHRoO1xuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50SW5kZXgrKztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5sZWZ0ID0gMDtcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEluZGV4ID0gMDtcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxuXHRcdFx0XHR9KTtcblx0fVxuXG5cdHBsYXkoKSB7XG5cdFx0XG5cdFx0aWYgKCF0aGlzLmlzUGxheWluZykge1xuXHRcdFx0dGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMuc2xpZGVyLmJpbmQodGhpcyksIHRoaXMuZHVyYXRpb24pO1xuXHRcdFx0dGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuXHRcdH1cblx0XHRcblx0fVxuXG5cdHN0b3AoKSB7XG5cdFx0aWYgKHRoaXMuaXNQbGF5aW5nKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuXHRcdFx0dGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7Il19
