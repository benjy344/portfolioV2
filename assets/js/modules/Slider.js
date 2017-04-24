let Slider = { 

	init(el) {
		this.$el          = $(el);
		this.$container   = this.$el.find('ul');
		this.$sliders     = this.$container.find('li');
		this.nomberSlide  = this.$sliders.length;
		this.width        = 300;
		this.left         = -this.width;
		this.duration 	  = 2000;
		this.currentIndex = 0;
		

		this.$container.css('width', this.nomberSlide*this.width+'px');

		this.timer = setInterval(this.slider.bind(this), this.duration);

		this.$el.hover(() => { clearInterval(this.timer);}, () => {this.timer = setInterval(this.slider.bind(this), this.duration);} );		
	},

	slider() {
		this.$container.animate({
					left : this.left+'px'
				}, 200, () => {

					if (this.left > (this.nomberSlide-1)*-(this.width)) {
						this.left = this.left-this.width;
						this.currentIndex++;
					} else {
						this.left = 0;
						this.currentIndex = 0;
					}


					console.log($(this.$sliders[this.currentIndex]))
				});
	}

}

export default Slider;