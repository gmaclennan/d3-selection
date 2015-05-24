var tape = require("tape");

tape("can load as npm module", function(test) {
  var d3 = require("../../d3-selection");
  test.ok(d3.select);
  test.end();
})
