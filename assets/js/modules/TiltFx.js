class TiltFx {

	// Helper vars and functions.
	extend( a, b ) {
		for( let key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	getMousePos(e) {
		let posx = 0;
		let posy = 0;

		if (!e) {let e = window.event}
		if (e.pageX || e.pageY) 	{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		return { x : posx, y : posy }
	}

	/**
	 * Init.
	 */
	init(el, options) {
		this.DOM                       = {};
		this.DOM.el                    = el;
		this.options                   = {
												movement: {
													imgWrapper : {
														translation : {x: 0, y: 0, z: 0},
														rotation : {x: -5, y: 5, z: 0},
														reverseAnimation : {
															duration : 1200,
															easing : 'easeOutElastic',
															elasticity : 600
														}
													},
													lines : {
														translation : {x: 10, y: 10, z: [0,10]},
														reverseAnimation : {
															duration : 1000,
															easing : 'easeOutExpo',
															elasticity : 600
														}
													},
													caption : {
														translation : {x: 20, y: 20, z: 0},
														rotation : {x: 0, y: 0, z: 0},
														reverseAnimation : {
															duration : 1500,
															easing : 'easeOutElastic',
															elasticity : 600
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
													shine : {
														translation : {x: 50, y: 50, z: 0},
														reverseAnimation : {
															duration : 1200,
															easing : 'easeOutElastic',
															elasticity: 600
														}
													}
												}
											};
		this.extend(this.options, options);		
		this.DOM.animatable            = {};
		this.DOM.animatable.imgWrapper = this.DOM.el.querySelector('.tilter__figure');
		this.DOM.animatable.lines      = this.DOM.el.querySelector('.tilter__deco--lines');
		this.DOM.animatable.caption    = this.DOM.el.querySelector('.tilter__caption');
		this.DOM.animatable.overlay    = this.DOM.el.querySelector('.tilter__deco--overlay');
		this.DOM.animatable.shine      = this.DOM.el.querySelector('.tilter__deco--shine > div');
		this.initEvents();
	}

	initEvents() {		

		$(this.DOM.el).on('mousemove',  (e) => {this.mousemoveFn(e)});
		$(this.DOM.el).on('mouseleave', (e) => {this.mouseleaveFn(e)});
		$(this.DOM.el).on('mouseenter', ( ) => {this.mouseenterFn()});
	}

	mousemoveFn(ev) {		
		requestAnimationFrame(() => { this.layout(ev); });
	}

	mouseenterFn() {		
		for(let key in this.DOM.animatable) {
			anime.remove(this.DOM.animatable[key]);
		}
	}

	mouseleaveFn(ev) {		
		requestAnimationFrame(() => {
			for(let key in this.DOM.animatable) {
				if( this.options.movement[key] == undefined ) {continue;}
				anime({
					targets: this.DOM.animatable[key],
					duration: this.options.movement[key].reverseAnimation != undefined ? this.options.movement[key].reverseAnimation.duration || 0 : 1,
					easing: this.options.movement[key].reverseAnimation != undefined ? this.options.movement[key].reverseAnimation.easing || 'linear' : 'linear',
					elasticity: this.options.movement[key].reverseAnimation != undefined ? this.options.movement[key].reverseAnimation.elasticity || null : null,
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

	layout(ev) {
		// Mouse position relative to the document.
		let mousepos = this.getMousePos(ev);
			// Document scrolls.
		let	docScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft, top : document.body.scrollTop + document.documentElement.scrollTop};
		let	bounds = this.DOM.el.getBoundingClientRect();
			// Mouse position relative to the main element (this.DOM.el).
		let	relmousepos = { x : mousepos.x - bounds.left - docScrolls.left, y : mousepos.y - bounds.top - docScrolls.top };

		// Movement settings for the animatable elements.
		for(let key in this.DOM.animatable) {
			if( this.DOM.animatable[key] == undefined || this.options.movement[key] == undefined ) {
				continue;
			}
			let t = this.options.movement[key] != undefined ? this.options.movement[key].translation || {x:0,y:0,z:0} : {x:0,y:0,z:0};
			let	r = this.options.movement[key] != undefined ? this.options.movement[key].rotation || {x:0,y:0,z:0} : {x:0,y:0,z:0};

			this.setRange(t);
			this.setRange(r);
			
			let transforms = {
				translation : {
					x: (t.x[1]-t.x[0])/bounds.width*relmousepos.x + t.x[0],
					y: (t.y[1]-t.y[0])/bounds.height*relmousepos.y + t.y[0],
					z: (t.z[1]-t.z[0])/bounds.height*relmousepos.y + t.z[0],
				},
				rotation : {
					x: (r.x[1]-r.x[0])/bounds.height*relmousepos.y + r.x[0],
					y: (r.y[1]-r.y[0])/bounds.width*relmousepos.x + r.y[0],
					z: (r.z[1]-r.z[0])/bounds.width*relmousepos.x + r.z[0]
				}
			};

			this.DOM.animatable[key].style.WebkitTransform = this.DOM.animatable[key].style.transform = 'translateX(' + transforms.translation.x + 'px) translateY(' + transforms.translation.y + 'px) translateZ(' + transforms.translation.z + 'px) rotateX(' + transforms.rotation.x + 'deg) rotateY(' + transforms.rotation.y + 'deg) rotateZ(' + transforms.rotation.z + 'deg)';
		}
	}

	setRange (obj) {
		for(let k in obj) {
			if( obj[k] == undefined ) {
				obj[k] = [0,0];
			}
			else if( typeof obj[k] === 'number' ) {
				obj[k] = [-1*obj[k],obj[k]];
			}
		}
	}

}

export default TiltFx;