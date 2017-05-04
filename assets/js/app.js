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
		this.$form     = this.$el.find('.js-form');
		this.tiltSettings = [
			{},
			{
				movement: {
					imgWrapper : {
						translation : {x: 10, y: 10, z: 30},
						rotation : {x: 0, y: -10, z: 0},
						reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
					},
					lines : {
						translation : {x: 10, y: 10, z: [0,70]},
						rotation : {x: 0, y: 0, z: -2},
						reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
					},
					caption : {
						rotation : {x: 0, y: 0, z: 2},
						reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
					},
					overlay : {
						translation : {x: 10, y: -10, z: 0},
						rotation : {x: 0, y: 0, z: 2},
						reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
					},
					shine : {
						translation : {x: 100, y: 100, z: 0},
						reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
					}
				}
			},
			{
				movement: {
					imgWrapper : {
						rotation : {x: -5, y: 10, z: 0},
						reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
					},
					caption : {
						translation : {x: 30, y: 30, z: [0,40]},
						rotation : {x: [0,15], y: 0, z: 0},
						reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
					},
					overlay : {
						translation : {x: 10, y: 10, z: [0,20]},
						reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
					},
					shine : {
						translation : {x: 100, y: 100, z: 0},
						reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
					}
				}
			},
			{
				movement: {
					imgWrapper : {
						rotation : {x: -5, y: 10, z: 0},
						reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
					},
					caption : {
						translation : {x: 20, y: 20, z: 0},
						reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
					},
					overlay : {
						translation : {x: 5, y: -5, z: 0},
						rotation : {x: 0, y: 0, z: 6},
						reverseAnimation : {duration : 1000, easing : 'easeOutQuad'}
					},
					shine : {
						translation : {x: 50, y: 50, z: 0},
						reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
					}
				}
			},
			{
				movement: {
					imgWrapper : {
						translation : {x: 0, y: -8, z: 0},
						rotation : {x: 3, y: 3, z: 0},
						reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
					},
					lines : {
						translation : {x: 15, y: 15, z: [0,15]},
						reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
					},
					overlay : {
						translation : {x: 0, y: 8, z: 0},
						reverseAnimation : {duration : 600, easing : 'easeOutExpo'}
					},
					caption : {
						translation : {x: 10, y: -15, z: 0},
						reverseAnimation : {duration : 900, easing : 'easeOutExpo'}
					},
					shine : {
						translation : {x: 50, y: 50, z: 0},
						reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
					}
				}
			},
			{
				movement: {
					lines : {
						translation : {x: -5, y: 5, z: 0},
						reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
					},
					caption : {
						translation : {x: 15, y: 15, z: 0},
						rotation : {x: 0, y: 0, z: 3},
						reverseAnimation : {duration : 1500, easing : 'easeOutElastic', elasticity : 700}
					},
					overlay : {
						translation : {x: 15, y: -15, z: 0},
						reverseAnimation : {duration : 500,easing : 'easeOutExpo'}
					},
					shine : {
						translation : {x: 50, y: 50, z: 0},
						reverseAnimation : {duration : 500, easing : 'easeOutExpo'}
					}
				}
			},
			{
				movement: {
					imgWrapper : {
						translation : {x: 5, y: 5, z: 0},
						reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
					},
					caption : {
						translation : {x: 10, y: 10, z: [0,50]},
						reverseAnimation : {duration : 1000, easing : 'easeOutQuart'}
					},
					shine : {
						translation : {x: 50, y: 50, z: 0},
						reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
					}
				}
			},
			{
				movement: {
					lines : {
						translation : {x: 40, y: 40, z: 0},
						reverseAnimation : {duration : 1500, easing : 'easeOutElastic'}
					},
					caption : {
						translation : {x: 20, y: 20, z: 0},
						rotation : {x: 0, y: 0, z: -5},
						reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
					},
					overlay : {
						translation : {x: -30, y: -30, z: 0},
						rotation : {x: 0, y: 0, z: 3},
						reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
					},
					shine : {
						translation : {x: 100, y: 100, z: 0},
						reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
					}
				}
			}];

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

		//init form 
		if (this.$form.length) this.initForm();
		
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
			console.log('scroll to')
			$('body, html').animate({
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
				_band.hasClass('js-band-right') ? _band.css('right', 0) : _band.css('left', 0);
				if(_band.hasClass('js-last-band')) this.$form.addClass('visible');
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
		[].slice.call($('a.tilter')).forEach((el, pos) => { 
			idx = pos%2 === 0 ? idx+1 : idx;
			let _TiltFx = new TiltFx;
			_TiltFx.init(el, App.tiltSettings[idx-1]);
		});

		let pater    = this.$el.find('.pater');
		let	paterSVG = pater.find('.pater__svg');
		let	pathEl   = paterSVG.find('path');
		let	paths    = {default: pathEl.attr('d'), active: paterSVG.attr('data-path-hover')};

		pater.on('mouseenter', () => {
			anime.remove(pathEl);
			anime({
				targets: pathEl,
				d: paths.active,
				duration: 400,
				easing: 'easeOutQuad'
			});
		});

		pater.on('mouseleave', () => {
			anime.remove(pathEl);
			anime({
				targets: pathEl,
				d: paths.default,
				duration: 400,
				easing: 'easeOutExpo'
			});
		});
	},

	initForm() {

		$('textarea').blur(function () {
		    $('#hire textarea').each(function () {
		        let $this = $(this);
		        console.log(this.value)
		        if ( this.value != '' ) {
		          $this.addClass('focused');
		          $('textarea + label + span').css({'opacity': 1});
		        }
		        else {
		          $this.removeClass('focused');
		          $('textarea + label + span').css({'opacity': 0});
		        }
		    });
		});

		$('#hire .field:first-child input').blur(function () {
		    $('#hire .field:first-child input').each(function () {
		        let $this = $(this);
		        console.log(this.value)
		        if ( this.value != '' ) {
		          $this.addClass('focused');
		          $('.field:first-child input + label + span').css({'opacity': 1});
		        }
		        else {
		          $this.removeClass('focused');
		          $('.field:first-child input + label + span').css({'opacity': 0});
		        }
		    });
		});

		$('#hire .field:nth-child(2) input').blur(function () {
		    $('#hire .field:nth-child(2) input').each(function () {
		        let $this = $(this);
		        console.log(this.value)
		        if ( this.value != '' ) {
		          $this.addClass('focused');
		          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
		        }
		        else {
		          $this.removeClass('focused');
		          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
		        }
		    });
		});
	}

}

$(window).ready(App.init.bind(App));