Tinytest.add(
    'validators - empty string',
    function (test) {        
        test.equal(APP.Validators.isEmptyString(""), true);
    }
);

Tinytest.add(
    'validators - not empty string',
    function (test) {        
        test.equal(APP.Validators.isEmptyString("notempty"), false);
    }
);