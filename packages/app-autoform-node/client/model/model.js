AutoForm.addInputType("nodeSearch", {
  template: "afNodeSearch",
  valueOut: function () {
    var val = {};

    val.name = this.val();
    if(this.attr("coords")) {
      val.geoJSONPoint = {
        type: "Point",
        coordinates: this.attr("coords").split(",")
      };
    }
    console.log("returned val: ", val);

    //for now return string instead of object since there is a bug in the autoform lib - posted on github
    return ""+val.name+";"+(this.attr("coords") ? this.attr("coords") : "" );
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