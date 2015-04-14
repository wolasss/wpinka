var options = {
	keepHistory: 1000 * 60 * 5,
	localSearch: true
};

var fields = ['asciiName', 'urlStub', 'urlAncestorStub'];

APP.CragsList = new SearchSource('crags', fields, options);