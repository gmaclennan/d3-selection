var tape = require("tape"),
    amdRequire = require("requirejs");

amdRequire.config = {
  baseUrl: __dirname,
  nodeRequire: require
};

tape("can load uncompressed as AMD module", function(test) {
  amdRequire(["d3-selection.js"], function(d3Selection) {
    console.log(d3Selection.select);
    test.ok(d3Selection);
    test.end();
  });
});

tape("can load compressed as AMD module", function(test) {
  amdRequire(["d3-selection.min.js"], function(d3Selection) {
    test.ok(d3Selection.select);
    test.end();
  });
});
