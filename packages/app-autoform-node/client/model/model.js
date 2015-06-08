AutoForm.addInputType("nodeSearch", {
  template: "afNodeSearch",
  valueOut: function () {
    var val = {};

    val.name = this.val();
    val.geoJSONPoint = {
      type: "Point",
      coordinates: this.attr("coords").split(",")
    };

    return val;
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
    if (context.value === true) {
      context.atts.checked = "";
    }
    return context;
  }
});