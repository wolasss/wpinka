var _points = new ReactiveVar([]);

Template.afNodeIntermediary.helpers({
	points: function() {
		return _points.get();
	},
	getName: function() {
		return ""+this;
	},
	pointsSchema: function(){
		return new SimpleSchema({
			"1": {
				type: String,
				label: TAPi18n.__("viaInput"),
				autoform: {
					type: "nodeSearch",
					label: false
				}
			},
			"2": {
				type: String,
				label: TAPi18n.__("viaInput"),
				autoform: {
					type: "nodeSearch",
					label: false
				}
			},
			"3": {
				type: String,
				label: TAPi18n.__("viaInput"),
				autoform: {
					type: "nodeSearch",
					label: false
				}
			},
			"4": {
				type: String,
				label: TAPi18n.__("viaInput"),
				autoform: {
					type: "nodeSearch",
					label: false
				}
			},
			"5": {
				type: String,
				label: TAPi18n.__("viaInput"),
				autoform: {
					type: "nodeSearch",
					label: false
				}
			}
		});
	}
});

Template.afNodeIntermediary.events({
	'click .adder' : function(e, t) {
		console.log("clicked", _points)
		if(_points.get().length < 5) {
			var arr = _points.get();
			arr.push(arr.length+1);
			_points.set(arr);
		} else {
			//show info
		}
	},
	'click .remove': function(e, t) {
		var arr = _points.get();
		arr = _.without(arr, Number(this));
		_points.set(arr);
	}
});