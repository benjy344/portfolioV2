class Slider { 

	init(el) {
		this.$el          = $(el);
		this.$container   = this.$el.find('ul');
		this.$sliders     = this.$container.find('li');
		this.nomberSlide  = this.$sliders.length;
		this.width        = 300;
		this.left         = -this.width;
		this.duration 	  = 3500;
		this.currentIndex = 1;
		this.isPlaying    = false;
		

		this.$container.css('width', this.nomberSlide*this.width+'px');
		$(this.$sliders[0]).addClass('active');

		this.$el.hover(() => { this.stop() }, () => { this.play() } );		

	}

	slider() {
		this.$container.animate({
					left : this.left+'px'
				}, 200, () => {
					$(this.$sliders).removeClass('active');
					$(this.$sliders[this.currentIndex]).addClass('active');
					if (this.left > (this.nomberSlide-1)*-(this.width)) {
						this.left = this.left-this.width;
						this.currentIndex++;
					} else {
						this.left = 0;
						this.currentIndex = 0;
					}					
				});
	}

	play() {
		
		if (!this.isPlaying) {
			this.timer = setInterval(this.slider.bind(this), this.duration);
			this.isPlaying = true;
		}
		
	}

	stop() {
		if (this.isPlaying) {
			clearInterval(this.timer);
			this.isPlaying = false;
		}
	}

}

export default Slider;