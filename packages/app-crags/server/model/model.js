SearchSource.defineSource('crags', function(searchText, options) {
  //var options = {sort: {isoScore: -1}, limit: 10};
  
  //TODO filter published fields

  console.log("search text: [",searchText,"]", options);
  if(searchText) {
    var regExp = buildRegExp(searchText);
    var selector = {};

    if(options && options.filters && options.filters.country) {

      var countryNode = APP.CragsCollection.findOne({countryID: searchText});
      if(countryNode) {

        selector = {$or: [
          {parentID: countryNode.id}
        ]};
      
      }
    } else if(options && options.filters && options.filters.distance && options.currentPosition) {

      selector = {
        "geometry.geoJSONPoint": { $near: {
          $geometry: options.currentPosition,
          $maxDistance: 900000
        }}
      };

      if(options.filters.distance.minDistance) selector["geometry.geoJSONPoint"].$near.$minDistance = options.filters.distance.minDistance*1000;
      if(options.filters.distance.maxDistance) selector["geometry.geoJSONPoint"].$near.$maxDistance = options.filters.distance.maxDistance*1000;
    } else {
      selector = {$or: [
        {asciName: regExp},
        {urlStub: regExp},
        {urlAncestorStub: regExp}
      ]};
    }

    return APP.CragsCollection.find(selector, {limit: 25}).fetch();
  } else {
    if(!options.currentPosition) return [];

    return APP.CragsCollection.find({
      "geometry.geoJSONPoint": { $near: {
        $geometry: options.currentPosition,
        $maxDistance: 900000
      }}
    }, {limit: 10}).fetch();
  }
});

function buildRegExp(searchText) {
  // this is a dumb implementation
  var parts = searchText.trim().split(/[ \-\:]+/);
  return new RegExp("(" + parts.join('|') + ")", "img");
}