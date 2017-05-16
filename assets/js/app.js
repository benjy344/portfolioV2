import Slider from './modules/Slider.js';
import TiltFx from './modules/TiltFx.js';

let App = {

	
	init() {
		this.$el          = $('body');
		this.$linkTo      = this.$el.find('.js-link-to');
		this.nav 	      = this.$el.find('.main-nav');		
		this.$previews    = this.$el.find('.js-preview');
		this.$slider      = this.$el.find('.js-slider');
		this.$skills      = this.$el.find('.js-skills-content');
		this.$bands       = this.$el.find('.js-band');
		this.$openGalery  = this.$el.find('.js-open-galery');
		this.$form        = this.$el.find('.js-form');
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

		//open galery 
		this.$openGalery.on('click', this.openGalery)

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

	openGalery(e) {
		e.preventDefault();
		let $wrapper   = App.$el.find('.js-gallery-wrapper');
		let target     = $(e.target).attr('href');
		let $current   = $wrapper.find(target);
		let $close     = $wrapper.find('.js-close-galery');
		
		if($current.length) {
			$wrapper.addClass('open');
			App.$el.addClass('overflow-hidden');
			$current.css( 'display', 'block' );
			setTimeout(() => {
				$current.addClass('visible');
			}, 700)
			$current.find('.js-read-more').on('click touch', (e)=> {
				$current.addClass('show-more');
			})
			$close.on('click touch', App.closeGalery)
		}
	},

	closeGalery() {
		let $wrapper   = App.$el.find('.js-gallery-wrapper');		
		let $visible   = $wrapper.find('.visible');
		
		if($visible.length) {			
			$visible.removeClass('visible show-more');
			setTimeout(() => {
				$visible.css( 'display', 'none' );
				$wrapper.removeClass('open');
				App.$el.removeClass('overflow-hidden');
			}, 700);
		}
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

		let $form = this.$form; 
		let checkForm = [ false, false, false];

		$form.find('textarea').blur(function () {
			console.log('blur')
		    $form.find('textarea').each(function () {
		        let $this = $(this);
		        let regex = new RegExp("^[a-zA-ZÀ-úÀ-ÿ0-9$€. ]+$");

		        if (regex.test(this.value) ) {
		        	console.log('regex');
		            $this.addClass('focused');
		            $('.msg-box label').css({'color': 'transparent'});
		          	$('.msg-box .js-check').css({'opacity': 1});
		          	$('.msg-box .js-error').css({'opacity': 0});
		          	checkForm[0] = true;
		        }
		        else if (this.value === '') {
		          	$this.removeClass('focused');
		          	$('.msg-box label').css({'color': 'white'});
		          	$('.msg-box input + label + span').css({'opacity': 0});
		          	$('.msg-box .js-check').css({'opacity': 0});
		          	$('.msg-box .js-error').css({'opacity': 0});
		          	checkForm[0] = false;
		        }
		        else {
		        	$this.addClass('focused');
		        	$('.msg-box label').css({'color': 'transparent'});
		        	$('.msg-box .js-check').css({'opacity': 0});
		          	$('.msg-box .js-error').css({'opacity': 1});
		          	checkForm[0] = false;
		        }
		    });
		});

		$form.find('.name-box input').blur(function () {

		    $form.find('.name-box input').each(function () {
		        let $this = $(this);
		        let regex = new RegExp("^[a-zA-ZÀ-úÀ-ÿ ]*$");

		        if (regex.test(this.value) ) {
		            $this.addClass('focused');
		            $('.name-box label').css({'color': 'transparent'});
		          	$('.name-box .js-check').css({'opacity': 1});
		          	$('.name-box .js-error').css({'opacity': 0});
		          	checkForm[1] = true;
		        }
		        else if (this.value === '') {
		          	$this.removeClass('focused');
		          	$('.name-box label').css({'color': 'white'});
		          	$('.name-box input + label + span').css({'opacity': 0});
		          	checkForm[1] = false;
		        }
		        else {
		        	$this.addClass('focused');
		        	$('.name-box label').css({'color': 'transparent'});
		        	$('.name-box .js-check').css({'opacity': 0});
		          	$('.name-box .js-error').css({'opacity': 1});
		          	checkForm[1] = false;
		        }

		    });

		});

		$form.find('.email-box input').blur(function () {
		    $form.find('.email-box input').each(function () {
		        let $this = $(this);
		        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		        if (regex.test(this.value) ) {
		            $this.addClass('focused');
		            $('.email-box label').css({'color': 'transparent'});
		          	$('.email-box .js-check').css({'opacity': 1});
		          	$('.email-box .js-error').css({'opacity': 0});
		          	checkForm[2] = true;
		        }
		        else if (this.value === '') {
		          	$this.removeClass('focused');
		          	$('.email-box label').css({'color': 'white'});
		          	$('.email-box input + label + span').css({'opacity': 0});
		          	checkForm[2] = false;
		        }
		        else {
		        	$this.addClass('focused');
		        	$('.email-box label').css({'color': 'transparent'});
		        	$('.email-box .js-check').css({'opacity': 0});
		          	$('.email-box .js-error').css({'opacity': 1});
		          	checkForm[2] = false;
		        }
		    });
		});

		$form.on('submit', (e) => {
			e.preventDefault();
			let $errorMsg   = this.$el.find('.js-error-message');
			let $successMsg = this.$el.find('.js-success-message');
			let check       = 0; 

			checkForm.forEach( (element, index) => {				
				if(element) check++;
			});

			if ( check === 3 ) {
				//can send form

				let s = $form.serialize();

				$.ajax({
	                type: "POST",
	                url: "../mail.php",
	                data: s,
	                  success: function() {
	                    $('body').prepend('<div style="position:fixed; top:50%; z-index:2000;" class="alert alert-success">Votre email à bien été transmis !</div>')
	                    .hide()
	                    .fadeIn(1500);                    
	                  },
	                  error: function() {
	                  	$('body').prepend('<div style="position:fixed; top:50%; z-index:2000;" class="alert alert-danger">L\'envoi du mail a échoué, veuillez réessayer SVP</div>')
	                    .hide()
	                    .fadeIn(1500);
	                  }
	           	});
                return false;

			} else {

			}
		})
	}

}

$(window).ready(App.init.bind(App));