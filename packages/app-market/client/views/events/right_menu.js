var Filtering = (function(){
	var _filters = [];

	return {
		registerFilter : function(f){
			if(typeof(f) === "function")
				_filters.push(f);
		},
		rebuild : function(tpl) {
			var ret = {};

			for(var i=0, len=_filters.length; i<len; i++) {
				_.extend(ret, ret, _filters[i](tpl));
			}

			return ret;
		}
	};
})();

var buildPriceRangeFilter = function(tpl) {
	var from = parseInt($(tpl.find('.range-from')).val(),10);
	var to = parseInt($(tpl.find('.range-to')).val(),10);

	var filters = {};

	if(from && !to) {
		filters.price = {
			$gte: from
		};
	} else if(!from && to) {
		filters.price = {
			$lte: to
		};
	} else if (from && to) {
		filters.price = {
			$gte: from,
			$lte: to
		};
	}

	return filters;
};

var buildCategoryFilter = function(tpl) {
	var cat = $(tpl.find('.category-select')).val();

	return (cat && {category: cat}) || {};
};

Filtering.registerFilter(buildPriceRangeFilter);
Filtering.registerFilter(buildCategoryFilter);

Template.appMarketRightMenu.events({
	"change .range-from, change .range-to, change .category-select": function(e, tpl) {
		APP[APP.Market.getCurrentFeedName()].decorateFilters(Filtering.rebuild(tpl));
	}
});

//TODO category inserted into post should be NAME not translated VALUE 
//TODO show alert on the stream if filters are active... UX issue