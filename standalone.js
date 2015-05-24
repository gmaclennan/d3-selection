var event = require("./lib/d3/event"),
    namespace = require("./lib/d3/namespace"),
    selection = require("./lib/d3/selection");

exports.mouse = event.mouse;
exports.touch = event.touch;
exports.touches = event.touches;
exports.namespace = namespace.prefix;
exports.selection = selection;
exports.select = selection.select;
exports.selectAll = selection.selectAll;

// Deprecated aliases for backwards-compatibility with 3.x:
exports.ns = namespace;
selection.prototype.on = selection.prototype.event;
selection.prototype.insert = selection.prototype.append;
selection.prototype.classed = selection.prototype.class;
