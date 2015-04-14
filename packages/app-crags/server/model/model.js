SearchSource.defineSource('crags', function(searchText, options) {
  //var options = {sort: {isoScore: -1}, limit: 10};
  
  //TODO filter published fields

  console.log("search text: [",searchText,"]", options);
  if(searchText) {
    var regExp = buildRegExp(searchText);
    
    var selector = {$or: [
      {asciName: regExp},
      {urlStub: regExp},
      {urlAncestorStub: regExp}
    ]};
    console.log(selector)
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