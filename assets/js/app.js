import Slider from './modules/Slider.js';

let App = {
	
	init() {
		this.$el       = $('body');
		this.$linkTo   = this.$el.find('.js-link-to');
		this.nav 	   = this.$el.find('.main-nav');		
		this.$previews = this.$el.find('.js-preview');
		this.$slider   = this.$el.find('.js-slider');

		this.sr 	   = ScrollReveal({ reset: true });

		// linkTo function if links exist 
		if (this.$linkTo.length) this.linkTo();

		// scroll for top menu nav 
		this.scroll();

		// function reval 
		this.reval();	

		//preload img 
		if (this.$previews.length) this.preload();	

		//init slider 
		if (this.$slider.length) Slider.init(this.$slider)
		
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

	scroll() {
		let step1 = this.$el.find('#about').offset().top;
		$(window).scrollTop() >= step1-100 ? this.nav.addClass('fixy') : this.nav.removeClass('fixy');
		$(window).scrollTop() >= step1 ? this.nav.addClass('active') : this.nav.removeClass('active');

		$(window).on('scroll', () => {
			let currentScroll = $(window).scrollTop();

			currentScroll >= 80 ? this.nav.css('top', '-61px') : this.nav.css('top', '0px');
			currentScroll >= step1-100 ? this.nav.addClass('fixy') : this.nav.removeClass('fixy');
			currentScroll >= step1 ? this.nav.addClass('active') : this.nav.removeClass('active');
		}); 
		
	},

	reval() {
		//left to right
		this.sr.reveal('.js-reval-left', { distance: '100px', origin: 'left', scale: 1, duration:500});
		this.sr.reveal('.js-reval-left-delay', { distance: '100px', origin: 'left', scale: 1, delay: 500, duration:500});
		//right to left
		this.sr.reveal('.js-reval-right', { distance: '100px', origin: 'right', scale: 1, duration:500});
		this.sr.reveal('.js-reval-right-delay', { distance: '100px', origin: 'right', scale: 1, delay: 500, duration:500});
		//bottom to top 
		this.sr.reveal('.js-reval-top', { distance: '100px', origin: 'bottom', scale: 1, duration:500});
		this.sr.reveal('.js-reval-top-delay', { distance: '100px', origin: 'bottom', scale: 1, delay: 500, duration:500});

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
    }

}

$(window).ready(App.init.bind(App));