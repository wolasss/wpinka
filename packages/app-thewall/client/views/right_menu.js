var radius = new ReactiveVar(APP.TheWall.radius.get());

Template.appTheWallRightMenu.rendered = function() {

	var slider = this.find('.slider-distance');
	var $slider = $(slider);

	$slider.noUiSlider({
		start: APP.TheWall.config.minRadius,
		step: APP.TheWall.config.stepRadius,
		range: {
			'min': APP.TheWall.config.minRadius,
			'max': APP.TheWall.config.maxRadius
		}
	});

	$slider.val(APP.TheWall.radius.get());

	$slider.on('slide', function(){
		var val = parseInt($slider.val(),10);
		radius.set(val);
	});

	$slider.on('change', function(r){
		var val = parseInt($slider.val(),10);

		if(parseInt(APP.TheWall.radius.get(),10) != val,10) {
			APP.TheWall.radius.set(val);
			radius.set(val);
		}
	});
	
};

Template.appTheWallRightMenu.helpers({
	radius: function() {
		return radius.get();
	}
});