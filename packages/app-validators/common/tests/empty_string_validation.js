Tinytest.add(
    'validators - empty string',
    function (test) {        
        test.equal(APP.Validators.isNotEmptyString(""), false);
    }
);

Tinytest.add(
    'validators - not empty string',
    function (test) {        
        test.equal(APP.Validators.isNotEmptyString("notempty"), true);
    }
);

Tinytest.add(
    'validators - not a string',
    function (test) {        
        test.equal(APP.Validators.isNotEmptyString(5), false);
    }
);