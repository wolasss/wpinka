Tinytest.add(
    'validators - test@test.pl',
    function (test) {        
        test.equal(APP.Validators.email("test@test.pl"), true);
    }
);

Tinytest.add(
    'validators - test@',
    function (test) {        
        test.equal(APP.Validators.email("test@"), false);
    }
);

Tinytest.add(
    'validators - test',
    function (test) {        
        test.equal(APP.Validators.email("test"), false);
    }
);

Tinytest.add(
    'validators - test@@test.pl',
    function (test) {        
        test.equal(APP.Validators.email("test@@test.pl"), false);
    }
);

Tinytest.add(
    'validators - test@test',
    function (test) {        
        test.equal(APP.Validators.email("test@test"), false);
    }
);

Tinytest.add(
    'validators - test.test@test.test.pl',
    function (test) {        
        test.equal(APP.Validators.email("test.test@test.test.pl"), true);
    }
);