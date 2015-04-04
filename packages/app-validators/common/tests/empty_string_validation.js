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

Tinytest.add(
    'validators - not a string',
    function (test) {        
        test.equal(APP.Validators.isEmptyString(5), false);
    }
);