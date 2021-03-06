import src.Entity.GameObject as GameObject;

var Square = Class(GameObject, function(supr) {

	this.init = function(x, y, width, height, backgroundColor, opts) {
		supr(this, "init", [opts]);

		this.updateOpts({
			x: x,
			y: y,
			width: width,
			height: height,
			backgroundColor: backgroundColor
		});

		this.setup();
	};

	this.setup = function() {
	};

});

exports = Square;
