var radius = new ReactiveVar(APP.Market_local.radius.get());

Template.distanceSlider.rendered = function() {

	var slider = this.find('.slider-distance');
	var $slider = $(slider);

	$slider.noUiSlider({
		start: APP.Market_local.config.minRadius,
		step: APP.Market_local.config.stepRadius,
		range: {
			'min': APP.Market_local.config.minRadius,
			'max': APP.Market_local.config.maxRadius
		}
	});

	$slider.val(APP.Market_local.radius.get());

	$slider.on('slide', function(){
		var val = parseInt($slider.val(),10);
		radius.set(val);
	});

	$slider.on('change', _.debounce(function(r){
		var val = parseInt($slider.val(),10);

		if(parseInt(APP.Market_local.radius.get(),10) != val,10) {
			APP.Market_local.radius.set(val);
			radius.set(val);
		}
	}, 500));
	
};

Template.appMarketRightMenu.helpers({
	categories: function() {
		return APP.Market.getCategoryOptiones();
	},
	isActiveFeed: function(f) {
		return ( f == APP.Market.feed.get() ? "active" : "" );
	}
});

Template.distanceSlider.helpers({
	radius: function() {
		return radius.get();
	}
})