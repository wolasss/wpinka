Tinytest.add(
  'validators - string too short',
  function (test) {        
    test.equal(APP.Validators.isContentTooShort("short one"), true);
  }
);

Tinytest.add(
  'validators - string too long',
  function (test) {
  	var content = "Jeśli więc zauważycie Państwo, że w jakiejś wypowiedzi powołam się na „sprawiedliwość społeczną” lub zażądam „wyrównywania szans” – to proszę natychmiast przestać czytać moje blogi, i napisane po tej dacie artykuły – kontentując się tymi, które napisałem, gdy byłem jeszcze przy zdrowych zmysłach! Rozmaite ingerencje Legislatywy i Egzekutywy mogą przynieść gwałtowne „ożywienie gospodarcze” – proszę położyć mrówkom kamień na ich ścieżce, a zobaczycie Państwo bardzo ożywioną przedsiębiorczość mającą na celu ...";
    test.equal(APP.Validators.isContentTooLong(content), true);
  }
);

Tinytest.add(
  'validators - string with proper length',
  function (test) {        
  	var content = "This string has proper length"
    test.equal(APP.Validators.isContentTooShort(content), false);
    test.equal(APP.Validators.isContentTooLong(content), false);
  }
);