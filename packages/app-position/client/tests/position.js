var createPositionFunc = function(coords) {
	return function(cb) {
		cb.call(this, {
			coords: {
				latitude: coords[0],
				longitude: coords[1]
			}
		});
	};
};

Tinytest.add(
	'position - valid position change - less than epsilon',
	function (test) {
		var _gcp = navigator.geolocation.getCurrentPosition;
		var point1 = [52.4088477,16.9425888];  //chwaliszewo 64, poznan
		var point2 = [52.4068696,16.9221271]; //sw marcin, around 2,2km difference
		var epsilon = 3000; // in meters, > 2,2km

		APP.Position.epsilon = epsilon;

		test.equal(APP.Position.epsilon, epsilon);
		test.equal(APP.Position.current.get(), null);

		navigator.geolocation.getCurrentPosition = createPositionFunc(point1);
		test.equal(APP.Position.fetchCurrent(), true);
		test.isNotNull(APP.Position.getCurrent());
		test.equal(APP.Position.current.get().type, "Point");
		test.instanceOf(APP.Position.current.get().coordinates, Array);
		test.equal(APP.Position.getCurrent().coordinates[0], point1[0]);
		test.equal(APP.Position.getCurrent().coordinates[1], point1[1]);

		navigator.geolocation.getCurrentPosition = createPositionFunc(point2);
		test.equal(APP.Position.fetchCurrent(), true);
		test.isNotNull(APP.Position.getCurrent());
		test.equal(APP.Position.current.get().type, "Point");
		test.instanceOf(APP.Position.current.get().coordinates, Array);
		test.equal(APP.Position.getCurrent().coordinates[0], point1[0]);
		test.equal(APP.Position.getCurrent().coordinates[1], point1[1]);

		navigator.geolocation.getCurrentPosition = _gcp;
	}
);

Tinytest.add(
	'position - valid position change - greater than epsilon',
	function (test) {
		APP.Position.current.set(null);

		var _gcp = navigator.geolocation.getCurrentPosition;
		var point1 = [52.4088477,16.9425888];  //chwaliszewo 64, poznan
		var point2 = [52.4068696,16.9221271]; //sw marcin, around 2,2km difference
		var epsilon = 1000; // in meters, < 2,2km

		APP.Position.epsilon = epsilon;

		test.equal(APP.Position.epsilon, epsilon);
		test.equal(APP.Position.current.get(), null);

		navigator.geolocation.getCurrentPosition = createPositionFunc(point1);
		test.equal(APP.Position.fetchCurrent(), true);
		test.isNotNull(APP.Position.getCurrent());
		test.equal(APP.Position.current.get().type, "Point");
		test.instanceOf(APP.Position.current.get().coordinates, Array);
		test.equal(APP.Position.getCurrent().coordinates[0], point1[0]);
		test.equal(APP.Position.getCurrent().coordinates[1], point1[1]);

		navigator.geolocation.getCurrentPosition = createPositionFunc(point2);
		test.equal(APP.Position.fetchCurrent(), true);
		test.isNotNull(APP.Position.getCurrent());
		test.equal(APP.Position.current.get().type, "Point");
		test.instanceOf(APP.Position.current.get().coordinates, Array);
		test.equal(APP.Position.getCurrent().coordinates[0], point2[0]);
		test.equal(APP.Position.getCurrent().coordinates[1], point2[1]);

		navigator.geolocation.getCurrentPosition = _gcp;
	}
);