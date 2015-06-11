AutoForm.addInputType("nodeIntermediary", {
  template: "afNodeIntermediary",
  valueOut: function () {
    return "";
  },
  valueConverters: {
    "boolean": function (val) {
      if (val === "true") {
        return true;
      } else if (val === "false") {
        return false;
      }
      return val;
    },
    "string": function (val) {
      if (val === true) {
        return "TRUE";
      } else if (val === false) {
        return "FALSE";
      }
      return val;
    },
    "object": function(val) {
      return val;
    },
    "stringArray": function (val) {
      if (val === true) {
        return ["TRUE"];
      } else if (val === false) {
        return ["FALSE"];
      }
      return val;
    },
    "number": function (val) {
      if (val === true) {
        return 1;
      } else if (val === false) {
        return 0;
      }
      return val;
    },
    "numberArray": function (val) {
      if (val === true) {
        return [1];
      } else if (val === false) {
        return [0];
      }
      return val;
    }
  },
  contextAdjust: function (context) {
    return context;
  }
});