import Slider from './modules/Slider.js';
import TiltFx from './modules/TiltFx.js';

let App = {
	
	init() {
		this.$el       = $('body');
		this.$linkTo   = this.$el.find('.js-link-to');
		this.nav 	   = this.$el.find('.main-nav');		
		this.$previews = this.$el.find('.js-preview');
		this.$slider   = this.$el.find('.js-slider');
		this.$skills   = this.$el.find('.js-skills-content');
		this.$bands    = this.$el.find('.js-band');

		this.UserSee   = true;
		this.skillsOn  = false;

		this.sr 	   = ScrollReveal({ reset: false });

		//init Slider 
		if (this.$slider.length) {
			this.autoplay = new Slider;
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

	viewIsActive() {
		window.onfocus = () => {
		    this.UserSee = true;
		  };

		window.onblur = () => {
		    this.UserSee = false;
		  };
		setInterval( () => {
		    if (!this.UserSee) this.autoplay.stop();
		}, 1000);
	},

	linkTo() {
		this.$linkTo.on('click touch', (e) => {
			let target   = $(e.currentTarget).attr('href');
			let $section = this.$el.find(target);
			this.$el.animate({
		        scrollTop: $section.offset().top
		    }, 1000);
		})
	}, 

	isVisible(element) {
		let $element        = $(element);
		let topElement 	    = $element.offset().top;
		let bottomElement 	= ($element.offset().top + $element.height() ) ;
		let scrolltop 	    = $(window).scrollTop();
		let scrollBottom 	= scrolltop + $(window).height();
		let isVisible       = false;

		if ( topElement > scrolltop && bottomElement < scrollBottom ) {
			isVisible = true;
		} else {
			isVisible = false;
		}
		return isVisible ;
	},

	scroll() {
		let step1 = this.$el.find('#about').offset().top;
		$(window).scrollTop() >= step1-100 ? this.nav.addClass('fixy') : this.nav.removeClass('fixy');
		$(window).scrollTop() >= step1 ? this.nav.addClass('active') : this.nav.removeClass('active');

		$(window).on('scroll', () => {
			let currentScroll = $(window).scrollTop();

			currentScroll >= 80 ? this.nav.css('top', '-61px') : this.nav.css('top', '0px');
			currentScroll >= step1-100 ? this.nav.addClass('fixy') : this.nav.removeClass('fixy');
			currentScroll >= step1 ? this.nav.addClass('active') : this.nav.removeClass('active');

			//init slider 		
			if (this.$slider.length) {				
				if (this.isVisible(this.$slider)) {
					this.autoplay.play()
				} else {
					this.autoplay.stop()
				}
			} 

			if (this.$skills.length) {				
				if (this.isVisible(this.$skills[0])) {	
					this.showSkills();				
				}
			}

			if (this.$bands.length) {								
				this.showBands();				
			}  
		}); 
	
	},

	reval() {
		//left to right
		this.sr.reveal('.js-reval-left', { distance: '100px', origin: 'left', scale: 1, duration:500});
		this.sr.reveal('.js-reval-left-delay', { distance: '100px', origin: 'left', scale: 1, delay: 500, duration:500});
		this.sr.reveal('.js-reval-left-long-delay', { distance: '100px', origin: 'left', scale: 1, delay: 1500, duration:500});
		//right to left
		this.sr.reveal('.js-reval-right', { distance: '100px', origin: 'right', scale: 1, duration:500});
		this.sr.reveal('.js-reval-right-delay', { distance: '100px', origin: 'right', scale: 1, delay: 500, duration:500});
		this.sr.reveal('.js-reval-right-long-delay', { distance: '100px', origin: 'right', scale: 1, delay: 1500, duration:500});
		//bottom to top 
		this.sr.reveal('.js-reval-top', { distance: '100px', origin: 'bottom', scale: 1, duration:500});
		this.sr.reveal('.js-reval-top-delay', { distance: '100px', origin: 'bottom', scale: 1, delay: 500, duration:500});
		this.sr.reveal('.js-reval-top-long-delay', { distance: '100px', origin: 'bottom', scale: 1, delay: 1500, duration:500});

	},

	showSkills() {

		if(!this.skillsOn) {
			let $skills = this.$el.find('.js-percent');
			$skills.each( (index, current) => {
				let _percent = $(current).attr('data-percent')+'%';
				$(current).css('width', _percent);
			} )
		}
	},

	showBands() {
		this.$bands.each( (i, current) => {
			let _band = $(current);

			if(this.isVisible(current)) {
				_band.hasClass('js-band-right') ? _band.css('right', 0) : _band.css('left', 0) 
			}
		})
	},

	preload() {
		this.$previews.each((idx, container) => {
			let $container = $(container);
			let _url       = $container.data('image-url');
			let img        = new Image();

			img.src        = _url;

	        // if we have this image already cached, we don't have
	        // to wait for the onload callback and can remove the
	        // preview image immediately
	        if(this.imgComplete(img)) {
	        	this.removePreview($container, _url);
	        } else {
	        	img.onload = () => {
	        		this.removePreview($container, _url);
	        	};
	        }
	    });
	},

	imgComplete(img) {
        return img.complete || img.width + img.height > 0;
    },
  
    removePreview($container, url) {
        $container.css({'background-image': 'url("' + url + '")'});
        $container.removeClass('js-preview preview');
    },

    initPortfolioPreview() {
		let idx = 0;
		[].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) { 
			idx = pos%2 === 0 ? idx+1 : idx;
			new TiltFx(el, tiltSettings[idx-1]);
		});
	}

}

$(window).ready(App.init.bind(App));