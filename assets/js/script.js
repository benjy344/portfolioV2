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

		this.sr = ScrollReveal({ reset: true });

		// linkTo function if links exist 
		if (this.$linkTo.length) this.linkTo();

		// scroll for top menu nav 
		this.scroll();

		// function reval 
		this.reval();

		//preload img 
		if (this.$previews.length) this.preload();

		//init slider 
		if (this.$slider.length) _Slider2.default.init(this.$slider);
	},
	linkTo: function linkTo() {
		var _this = this;

		this.$linkTo.on('click touch', function (e) {
			var target = $(e.currentTarget).attr('href');
			var $section = _this.$el.find(target);
			_this.$el.animate({
				scrollTop: $section.offset().top
			}, 1000);
		});
	},
	scroll: function scroll() {
		var _this2 = this;

		var step1 = this.$el.find('#about').offset().top;
		$(window).scrollTop() >= step1 - 100 ? this.nav.addClass('fixy') : this.nav.removeClass('fixy');
		$(window).scrollTop() >= step1 ? this.nav.addClass('active') : this.nav.removeClass('active');

		$(window).on('scroll', function () {
			var currentScroll = $(window).scrollTop();

			currentScroll >= 80 ? _this2.nav.css('top', '-61px') : _this2.nav.css('top', '0px');
			currentScroll >= step1 - 100 ? _this2.nav.addClass('fixy') : _this2.nav.removeClass('fixy');
			currentScroll >= step1 ? _this2.nav.addClass('active') : _this2.nav.removeClass('active');
		});
	},
	reval: function reval() {
		//left to right
		this.sr.reveal('.js-reval-left', { distance: '100px', origin: 'left', scale: 1, duration: 500 });
		this.sr.reveal('.js-reval-left-delay', { distance: '100px', origin: 'left', scale: 1, delay: 500, duration: 500 });
		//right to left
		this.sr.reveal('.js-reval-right', { distance: '100px', origin: 'right', scale: 1, duration: 500 });
		this.sr.reveal('.js-reval-right-delay', { distance: '100px', origin: 'right', scale: 1, delay: 500, duration: 500 });
		//bottom to top 
		this.sr.reveal('.js-reval-top', { distance: '100px', origin: 'bottom', scale: 1, duration: 500 });
		this.sr.reveal('.js-reval-top-delay', { distance: '100px', origin: 'bottom', scale: 1, delay: 500, duration: 500 });
	},
	preload: function preload() {
		var _this3 = this;

		this.$previews.each(function (idx, container) {
			var $container = $(container);
			var _url = $container.data('image-url');
			var img = new Image();

			img.src = _url;

			// if we have this image already cached, we don't have
			// to wait for the onload callback and can remove the
			// preview image immediately
			if (_this3.imgComplete(img)) {
				_this3.removePreview($container, _url);
			} else {
				img.onload = function () {
					_this3.removePreview($container, _url);
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
	}
};

$(window).ready(App.init.bind(App));

},{"./modules/Slider.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Slider = {
	init: function init(el) {
		var _this = this;

		this.$el = $(el);
		this.$container = this.$el.find('ul');
		this.$sliders = this.$container.find('li');
		this.nomberSlide = this.$sliders.length;
		this.width = 300;
		this.left = -this.width;
		this.duration = 2000;
		this.currentIndex = 0;

		this.$container.css('width', this.nomberSlide * this.width + 'px');

		this.timer = setInterval(this.slider.bind(this), this.duration);

		this.$el.hover(function () {
			clearInterval(_this.timer);
		}, function () {
			_this.timer = setInterval(_this.slider.bind(_this), _this.duration);
		});
	},
	slider: function slider() {
		var _this2 = this;

		this.$container.animate({
			left: this.left + 'px'
		}, 200, function () {

			if (_this2.left > (_this2.nomberSlide - 1) * -_this2.width) {
				_this2.left = _this2.left - _this2.width;
				_this2.currentIndex++;
			} else {
				_this2.left = 0;
				_this2.currentIndex = 0;
			}

			console.log($(_this2.$sliders[_this2.currentIndex]));
		});
	}
};

exports.default = Slider;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvYXBwLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvU2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUEsSUFBSSxNQUFNO0FBRVQsS0FGUyxrQkFFRjtBQUNOLE9BQUssR0FBTCxHQUFpQixFQUFFLE1BQUYsQ0FBakI7QUFDQSxPQUFLLE9BQUwsR0FBaUIsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGFBQWQsQ0FBakI7QUFDQSxPQUFLLEdBQUwsR0FBZSxLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsV0FBZCxDQUFmO0FBQ0EsT0FBSyxTQUFMLEdBQWlCLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxhQUFkLENBQWpCO0FBQ0EsT0FBSyxPQUFMLEdBQWlCLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxZQUFkLENBQWpCOztBQUVBLE9BQUssRUFBTCxHQUFjLGFBQWEsRUFBRSxPQUFPLElBQVQsRUFBYixDQUFkOztBQUVBO0FBQ0EsTUFBSSxLQUFLLE9BQUwsQ0FBYSxNQUFqQixFQUF5QixLQUFLLE1BQUw7O0FBRXpCO0FBQ0EsT0FBSyxNQUFMOztBQUVBO0FBQ0EsT0FBSyxLQUFMOztBQUVBO0FBQ0EsTUFBSSxLQUFLLFNBQUwsQ0FBZSxNQUFuQixFQUEyQixLQUFLLE9BQUw7O0FBRTNCO0FBQ0EsTUFBSSxLQUFLLE9BQUwsQ0FBYSxNQUFqQixFQUF5QixpQkFBTyxJQUFQLENBQVksS0FBSyxPQUFqQjtBQUV6QixFQTFCUTtBQTRCVCxPQTVCUyxvQkE0QkE7QUFBQTs7QUFDUixPQUFLLE9BQUwsQ0FBYSxFQUFiLENBQWdCLGFBQWhCLEVBQStCLFVBQUMsQ0FBRCxFQUFPO0FBQ3JDLE9BQUksU0FBVyxFQUFFLEVBQUUsYUFBSixFQUFtQixJQUFuQixDQUF3QixNQUF4QixDQUFmO0FBQ0EsT0FBSSxXQUFXLE1BQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxNQUFkLENBQWY7QUFDQSxTQUFLLEdBQUwsQ0FBUyxPQUFULENBQWlCO0FBQ1YsZUFBVyxTQUFTLE1BQVQsR0FBa0I7QUFEbkIsSUFBakIsRUFFTSxJQUZOO0FBR0EsR0FORDtBQU9BLEVBcENRO0FBc0NULE9BdENTLG9CQXNDQTtBQUFBOztBQUNSLE1BQUksUUFBUSxLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsUUFBZCxFQUF3QixNQUF4QixHQUFpQyxHQUE3QztBQUNBLElBQUUsTUFBRixFQUFVLFNBQVYsTUFBeUIsUUFBTSxHQUEvQixHQUFxQyxLQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLE1BQWxCLENBQXJDLEdBQWlFLEtBQUssR0FBTCxDQUFTLFdBQVQsQ0FBcUIsTUFBckIsQ0FBakU7QUFDQSxJQUFFLE1BQUYsRUFBVSxTQUFWLE1BQXlCLEtBQXpCLEdBQWlDLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsUUFBbEIsQ0FBakMsR0FBK0QsS0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixRQUFyQixDQUEvRDs7QUFFQSxJQUFFLE1BQUYsRUFBVSxFQUFWLENBQWEsUUFBYixFQUF1QixZQUFNO0FBQzVCLE9BQUksZ0JBQWdCLEVBQUUsTUFBRixFQUFVLFNBQVYsRUFBcEI7O0FBRUEsb0JBQWlCLEVBQWpCLEdBQXNCLE9BQUssR0FBTCxDQUFTLEdBQVQsQ0FBYSxLQUFiLEVBQW9CLE9BQXBCLENBQXRCLEdBQXFELE9BQUssR0FBTCxDQUFTLEdBQVQsQ0FBYSxLQUFiLEVBQW9CLEtBQXBCLENBQXJEO0FBQ0Esb0JBQWlCLFFBQU0sR0FBdkIsR0FBNkIsT0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixNQUFsQixDQUE3QixHQUF5RCxPQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLE1BQXJCLENBQXpEO0FBQ0Esb0JBQWlCLEtBQWpCLEdBQXlCLE9BQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsUUFBbEIsQ0FBekIsR0FBdUQsT0FBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixRQUFyQixDQUF2RDtBQUNBLEdBTkQ7QUFRQSxFQW5EUTtBQXFEVCxNQXJEUyxtQkFxREQ7QUFDUDtBQUNBLE9BQUssRUFBTCxDQUFRLE1BQVIsQ0FBZSxnQkFBZixFQUFpQyxFQUFFLFVBQVUsT0FBWixFQUFxQixRQUFRLE1BQTdCLEVBQXFDLE9BQU8sQ0FBNUMsRUFBK0MsVUFBUyxHQUF4RCxFQUFqQztBQUNBLE9BQUssRUFBTCxDQUFRLE1BQVIsQ0FBZSxzQkFBZixFQUF1QyxFQUFFLFVBQVUsT0FBWixFQUFxQixRQUFRLE1BQTdCLEVBQXFDLE9BQU8sQ0FBNUMsRUFBK0MsT0FBTyxHQUF0RCxFQUEyRCxVQUFTLEdBQXBFLEVBQXZDO0FBQ0E7QUFDQSxPQUFLLEVBQUwsQ0FBUSxNQUFSLENBQWUsaUJBQWYsRUFBa0MsRUFBRSxVQUFVLE9BQVosRUFBcUIsUUFBUSxPQUE3QixFQUFzQyxPQUFPLENBQTdDLEVBQWdELFVBQVMsR0FBekQsRUFBbEM7QUFDQSxPQUFLLEVBQUwsQ0FBUSxNQUFSLENBQWUsdUJBQWYsRUFBd0MsRUFBRSxVQUFVLE9BQVosRUFBcUIsUUFBUSxPQUE3QixFQUFzQyxPQUFPLENBQTdDLEVBQWdELE9BQU8sR0FBdkQsRUFBNEQsVUFBUyxHQUFyRSxFQUF4QztBQUNBO0FBQ0EsT0FBSyxFQUFMLENBQVEsTUFBUixDQUFlLGVBQWYsRUFBZ0MsRUFBRSxVQUFVLE9BQVosRUFBcUIsUUFBUSxRQUE3QixFQUF1QyxPQUFPLENBQTlDLEVBQWlELFVBQVMsR0FBMUQsRUFBaEM7QUFDQSxPQUFLLEVBQUwsQ0FBUSxNQUFSLENBQWUscUJBQWYsRUFBc0MsRUFBRSxVQUFVLE9BQVosRUFBcUIsUUFBUSxRQUE3QixFQUF1QyxPQUFPLENBQTlDLEVBQWlELE9BQU8sR0FBeEQsRUFBNkQsVUFBUyxHQUF0RSxFQUF0QztBQUVBLEVBaEVRO0FBa0VULFFBbEVTLHFCQWtFQztBQUFBOztBQUNULE9BQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsVUFBQyxHQUFELEVBQU0sU0FBTixFQUFvQjtBQUN2QyxPQUFJLGFBQWEsRUFBRSxTQUFGLENBQWpCO0FBQ0EsT0FBSSxPQUFhLFdBQVcsSUFBWCxDQUFnQixXQUFoQixDQUFqQjtBQUNBLE9BQUksTUFBYSxJQUFJLEtBQUosRUFBakI7O0FBRUEsT0FBSSxHQUFKLEdBQWlCLElBQWpCOztBQUVNO0FBQ0E7QUFDQTtBQUNBLE9BQUcsT0FBSyxXQUFMLENBQWlCLEdBQWpCLENBQUgsRUFBMEI7QUFDekIsV0FBSyxhQUFMLENBQW1CLFVBQW5CLEVBQStCLElBQS9CO0FBQ0EsSUFGRCxNQUVPO0FBQ04sUUFBSSxNQUFKLEdBQWEsWUFBTTtBQUNsQixZQUFLLGFBQUwsQ0FBbUIsVUFBbkIsRUFBK0IsSUFBL0I7QUFDQSxLQUZEO0FBR0E7QUFDSixHQWpCSjtBQWtCQSxFQXJGUTtBQXVGVCxZQXZGUyx1QkF1RkcsR0F2RkgsRUF1RlE7QUFDVixTQUFPLElBQUksUUFBSixJQUFnQixJQUFJLEtBQUosR0FBWSxJQUFJLE1BQWhCLEdBQXlCLENBQWhEO0FBQ0gsRUF6Rks7QUEyRk4sY0EzRk0seUJBMkZRLFVBM0ZSLEVBMkZvQixHQTNGcEIsRUEyRnlCO0FBQzNCLGFBQVcsR0FBWCxDQUFlLEVBQUMsb0JBQW9CLFVBQVUsR0FBVixHQUFnQixJQUFyQyxFQUFmO0FBQ0EsYUFBVyxXQUFYLENBQXVCLG9CQUF2QjtBQUNIO0FBOUZLLENBQVY7O0FBa0dBLEVBQUUsTUFBRixFQUFVLEtBQVYsQ0FBZ0IsSUFBSSxJQUFKLENBQVMsSUFBVCxDQUFjLEdBQWQsQ0FBaEI7Ozs7Ozs7O0FDcEdBLElBQUksU0FBUztBQUVaLEtBRlksZ0JBRVAsRUFGTyxFQUVIO0FBQUE7O0FBQ1IsT0FBSyxHQUFMLEdBQW9CLEVBQUUsRUFBRixDQUFwQjtBQUNBLE9BQUssVUFBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsSUFBZCxDQUFwQjtBQUNBLE9BQUssUUFBTCxHQUFvQixLQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBcEI7QUFDQSxPQUFLLFdBQUwsR0FBb0IsS0FBSyxRQUFMLENBQWMsTUFBbEM7QUFDQSxPQUFLLEtBQUwsR0FBb0IsR0FBcEI7QUFDQSxPQUFLLElBQUwsR0FBb0IsQ0FBQyxLQUFLLEtBQTFCO0FBQ0EsT0FBSyxRQUFMLEdBQW1CLElBQW5CO0FBQ0EsT0FBSyxZQUFMLEdBQW9CLENBQXBCOztBQUdBLE9BQUssVUFBTCxDQUFnQixHQUFoQixDQUFvQixPQUFwQixFQUE2QixLQUFLLFdBQUwsR0FBaUIsS0FBSyxLQUF0QixHQUE0QixJQUF6RDs7QUFFQSxPQUFLLEtBQUwsR0FBYSxZQUFZLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsSUFBakIsQ0FBWixFQUFvQyxLQUFLLFFBQXpDLENBQWI7O0FBRUEsT0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLFlBQU07QUFBRSxpQkFBYyxNQUFLLEtBQW5CO0FBQTJCLEdBQWxELEVBQW9ELFlBQU07QUFBQyxTQUFLLEtBQUwsR0FBYSxZQUFZLE1BQUssTUFBTCxDQUFZLElBQVosT0FBWixFQUFvQyxNQUFLLFFBQXpDLENBQWI7QUFBaUUsR0FBNUg7QUFDQSxFQWxCVztBQW9CWixPQXBCWSxvQkFvQkg7QUFBQTs7QUFDUixPQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBd0I7QUFDckIsU0FBTyxLQUFLLElBQUwsR0FBVTtBQURJLEdBQXhCLEVBRUssR0FGTCxFQUVVLFlBQU07O0FBRWIsT0FBSSxPQUFLLElBQUwsR0FBWSxDQUFDLE9BQUssV0FBTCxHQUFpQixDQUFsQixJQUFxQixDQUFFLE9BQUssS0FBNUMsRUFBb0Q7QUFDbkQsV0FBSyxJQUFMLEdBQVksT0FBSyxJQUFMLEdBQVUsT0FBSyxLQUEzQjtBQUNBLFdBQUssWUFBTDtBQUNBLElBSEQsTUFHTztBQUNOLFdBQUssSUFBTCxHQUFZLENBQVo7QUFDQSxXQUFLLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQTs7QUFHRCxXQUFRLEdBQVIsQ0FBWSxFQUFFLE9BQUssUUFBTCxDQUFjLE9BQUssWUFBbkIsQ0FBRixDQUFaO0FBQ0EsR0FkSDtBQWVBO0FBcENXLENBQWI7O2tCQXdDZSxNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBTbGlkZXIgZnJvbSAnLi9tb2R1bGVzL1NsaWRlci5qcyc7XG5cbmxldCBBcHAgPSB7XG5cdFxuXHRpbml0KCkge1xuXHRcdHRoaXMuJGVsICAgICAgID0gJCgnYm9keScpO1xuXHRcdHRoaXMuJGxpbmtUbyAgID0gdGhpcy4kZWwuZmluZCgnLmpzLWxpbmstdG8nKTtcblx0XHR0aGlzLm5hdiBcdCAgID0gdGhpcy4kZWwuZmluZCgnLm1haW4tbmF2Jyk7XHRcdFxuXHRcdHRoaXMuJHByZXZpZXdzID0gdGhpcy4kZWwuZmluZCgnLmpzLXByZXZpZXcnKTtcblx0XHR0aGlzLiRzbGlkZXIgICA9IHRoaXMuJGVsLmZpbmQoJy5qcy1zbGlkZXInKTtcblxuXHRcdHRoaXMuc3IgXHQgICA9IFNjcm9sbFJldmVhbCh7IHJlc2V0OiB0cnVlIH0pO1xuXG5cdFx0Ly8gbGlua1RvIGZ1bmN0aW9uIGlmIGxpbmtzIGV4aXN0IFxuXHRcdGlmICh0aGlzLiRsaW5rVG8ubGVuZ3RoKSB0aGlzLmxpbmtUbygpO1xuXG5cdFx0Ly8gc2Nyb2xsIGZvciB0b3AgbWVudSBuYXYgXG5cdFx0dGhpcy5zY3JvbGwoKTtcblxuXHRcdC8vIGZ1bmN0aW9uIHJldmFsIFxuXHRcdHRoaXMucmV2YWwoKTtcdFxuXG5cdFx0Ly9wcmVsb2FkIGltZyBcblx0XHRpZiAodGhpcy4kcHJldmlld3MubGVuZ3RoKSB0aGlzLnByZWxvYWQoKTtcdFxuXG5cdFx0Ly9pbml0IHNsaWRlciBcblx0XHRpZiAodGhpcy4kc2xpZGVyLmxlbmd0aCkgU2xpZGVyLmluaXQodGhpcy4kc2xpZGVyKVxuXHRcdFxuXHR9LFxuXG5cdGxpbmtUbygpIHtcblx0XHR0aGlzLiRsaW5rVG8ub24oJ2NsaWNrIHRvdWNoJywgKGUpID0+IHtcblx0XHRcdGxldCB0YXJnZXQgICA9ICQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCdocmVmJyk7XG5cdFx0XHRsZXQgJHNlY3Rpb24gPSB0aGlzLiRlbC5maW5kKHRhcmdldCk7XG5cdFx0XHR0aGlzLiRlbC5hbmltYXRlKHtcblx0XHQgICAgICAgIHNjcm9sbFRvcDogJHNlY3Rpb24ub2Zmc2V0KCkudG9wXG5cdFx0ICAgIH0sIDEwMDApO1xuXHRcdH0pXG5cdH0sIFxuXG5cdHNjcm9sbCgpIHtcblx0XHRsZXQgc3RlcDEgPSB0aGlzLiRlbC5maW5kKCcjYWJvdXQnKS5vZmZzZXQoKS50b3A7XG5cdFx0JCh3aW5kb3cpLnNjcm9sbFRvcCgpID49IHN0ZXAxLTEwMCA/IHRoaXMubmF2LmFkZENsYXNzKCdmaXh5JykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnZml4eScpO1xuXHRcdCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSBzdGVwMSA/IHRoaXMubmF2LmFkZENsYXNzKCdhY3RpdmUnKSA6IHRoaXMubmF2LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdCQod2luZG93KS5vbignc2Nyb2xsJywgKCkgPT4ge1xuXHRcdFx0bGV0IGN1cnJlbnRTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cblx0XHRcdGN1cnJlbnRTY3JvbGwgPj0gODAgPyB0aGlzLm5hdi5jc3MoJ3RvcCcsICctNjFweCcpIDogdGhpcy5uYXYuY3NzKCd0b3AnLCAnMHB4Jyk7XG5cdFx0XHRjdXJyZW50U2Nyb2xsID49IHN0ZXAxLTEwMCA/IHRoaXMubmF2LmFkZENsYXNzKCdmaXh5JykgOiB0aGlzLm5hdi5yZW1vdmVDbGFzcygnZml4eScpO1xuXHRcdFx0Y3VycmVudFNjcm9sbCA+PSBzdGVwMSA/IHRoaXMubmF2LmFkZENsYXNzKCdhY3RpdmUnKSA6IHRoaXMubmF2LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHR9KTsgXG5cdFx0XG5cdH0sXG5cblx0cmV2YWwoKSB7XG5cdFx0Ly9sZWZ0IHRvIHJpZ2h0XG5cdFx0dGhpcy5zci5yZXZlYWwoJy5qcy1yZXZhbC1sZWZ0JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnbGVmdCcsIHNjYWxlOiAxLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLWxlZnQtZGVsYXknLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdsZWZ0Jywgc2NhbGU6IDEsIGRlbGF5OiA1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdC8vcmlnaHQgdG8gbGVmdFxuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtcmlnaHQnLCB7IGRpc3RhbmNlOiAnMTAwcHgnLCBvcmlnaW46ICdyaWdodCcsIHNjYWxlOiAxLCBkdXJhdGlvbjo1MDB9KTtcblx0XHR0aGlzLnNyLnJldmVhbCgnLmpzLXJldmFsLXJpZ2h0LWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAncmlnaHQnLCBzY2FsZTogMSwgZGVsYXk6IDUwMCwgZHVyYXRpb246NTAwfSk7XG5cdFx0Ly9ib3R0b20gdG8gdG9wIFxuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtdG9wJywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnYm90dG9tJywgc2NhbGU6IDEsIGR1cmF0aW9uOjUwMH0pO1xuXHRcdHRoaXMuc3IucmV2ZWFsKCcuanMtcmV2YWwtdG9wLWRlbGF5JywgeyBkaXN0YW5jZTogJzEwMHB4Jywgb3JpZ2luOiAnYm90dG9tJywgc2NhbGU6IDEsIGRlbGF5OiA1MDAsIGR1cmF0aW9uOjUwMH0pO1xuXG5cdH0sXG5cblx0cHJlbG9hZCgpIHtcblx0XHR0aGlzLiRwcmV2aWV3cy5lYWNoKChpZHgsIGNvbnRhaW5lcikgPT4ge1xuXHRcdFx0bGV0ICRjb250YWluZXIgPSAkKGNvbnRhaW5lcik7XG5cdFx0XHRsZXQgX3VybCAgICAgICA9ICRjb250YWluZXIuZGF0YSgnaW1hZ2UtdXJsJyk7XG5cdFx0XHRsZXQgaW1nICAgICAgICA9IG5ldyBJbWFnZSgpO1xuXG5cdFx0XHRpbWcuc3JjICAgICAgICA9IF91cmw7XG5cblx0ICAgICAgICAvLyBpZiB3ZSBoYXZlIHRoaXMgaW1hZ2UgYWxyZWFkeSBjYWNoZWQsIHdlIGRvbid0IGhhdmVcblx0ICAgICAgICAvLyB0byB3YWl0IGZvciB0aGUgb25sb2FkIGNhbGxiYWNrIGFuZCBjYW4gcmVtb3ZlIHRoZVxuXHQgICAgICAgIC8vIHByZXZpZXcgaW1hZ2UgaW1tZWRpYXRlbHlcblx0ICAgICAgICBpZih0aGlzLmltZ0NvbXBsZXRlKGltZykpIHtcblx0ICAgICAgICBcdHRoaXMucmVtb3ZlUHJldmlldygkY29udGFpbmVyLCBfdXJsKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIFx0aW1nLm9ubG9hZCA9ICgpID0+IHtcblx0ICAgICAgICBcdFx0dGhpcy5yZW1vdmVQcmV2aWV3KCRjb250YWluZXIsIF91cmwpO1xuXHQgICAgICAgIFx0fTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblx0fSxcblxuXHRpbWdDb21wbGV0ZShpbWcpIHtcbiAgICAgICAgcmV0dXJuIGltZy5jb21wbGV0ZSB8fCBpbWcud2lkdGggKyBpbWcuaGVpZ2h0ID4gMDtcbiAgICB9LFxuICBcbiAgICByZW1vdmVQcmV2aWV3KCRjb250YWluZXIsIHVybCkge1xuICAgICAgICAkY29udGFpbmVyLmNzcyh7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKFwiJyArIHVybCArICdcIiknfSk7XG4gICAgICAgICRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2pzLXByZXZpZXcgcHJldmlldycpO1xuICAgIH1cblxufVxuXG4kKHdpbmRvdykucmVhZHkoQXBwLmluaXQuYmluZChBcHApKTsiLCJsZXQgU2xpZGVyID0geyBcblxuXHRpbml0KGVsKSB7XG5cdFx0dGhpcy4kZWwgICAgICAgICAgPSAkKGVsKTtcblx0XHR0aGlzLiRjb250YWluZXIgICA9IHRoaXMuJGVsLmZpbmQoJ3VsJyk7XG5cdFx0dGhpcy4kc2xpZGVycyAgICAgPSB0aGlzLiRjb250YWluZXIuZmluZCgnbGknKTtcblx0XHR0aGlzLm5vbWJlclNsaWRlICA9IHRoaXMuJHNsaWRlcnMubGVuZ3RoO1xuXHRcdHRoaXMud2lkdGggICAgICAgID0gMzAwO1xuXHRcdHRoaXMubGVmdCAgICAgICAgID0gLXRoaXMud2lkdGg7XG5cdFx0dGhpcy5kdXJhdGlvbiBcdCAgPSAyMDAwO1xuXHRcdHRoaXMuY3VycmVudEluZGV4ID0gMDtcblx0XHRcblxuXHRcdHRoaXMuJGNvbnRhaW5lci5jc3MoJ3dpZHRoJywgdGhpcy5ub21iZXJTbGlkZSp0aGlzLndpZHRoKydweCcpO1xuXG5cdFx0dGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMuc2xpZGVyLmJpbmQodGhpcyksIHRoaXMuZHVyYXRpb24pO1xuXG5cdFx0dGhpcy4kZWwuaG92ZXIoKCkgPT4geyBjbGVhckludGVydmFsKHRoaXMudGltZXIpO30sICgpID0+IHt0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5zbGlkZXIuYmluZCh0aGlzKSwgdGhpcy5kdXJhdGlvbik7fSApO1x0XHRcblx0fSxcblxuXHRzbGlkZXIoKSB7XG5cdFx0dGhpcy4kY29udGFpbmVyLmFuaW1hdGUoe1xuXHRcdFx0XHRcdGxlZnQgOiB0aGlzLmxlZnQrJ3B4J1xuXHRcdFx0XHR9LCAyMDAsICgpID0+IHtcblxuXHRcdFx0XHRcdGlmICh0aGlzLmxlZnQgPiAodGhpcy5ub21iZXJTbGlkZS0xKSotKHRoaXMud2lkdGgpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxlZnQgPSB0aGlzLmxlZnQtdGhpcy53aWR0aDtcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEluZGV4Kys7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMubGVmdCA9IDA7XG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG5cdFx0XHRcdFx0fVxuXG5cblx0XHRcdFx0XHRjb25zb2xlLmxvZygkKHRoaXMuJHNsaWRlcnNbdGhpcy5jdXJyZW50SW5kZXhdKSlcblx0XHRcdFx0fSk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7Il19
