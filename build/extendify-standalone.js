var through = require('through2');
var browserPack = require('browser-pack');
var xtend = require('xtend');

var template = '$1.$2 = $1.$2 || {};' +
  'var moduleExports = $3();' +
  'for (var key in moduleExports) {' +
  'if (moduleExports.hasOwnProperty(key)) {' +
  '$1.$2[key] = moduleExports[key];' +
  '}}';

module.exports = function apply(b, opts) {
  opts = opts || {};
  var namespace = opts.namespace || opts.n;

  if (!namespace) {
    throw new Error('extendify-standalone requires a --namespace argument');
  }

  if (typeof namespace !== 'string' || namespace === '') {
    throw new Error('--namespace argument must not be empty');
  }

  var options = xtend(b._options, {
    standalone: '__' + namespace + '__',
    raw: true
  });

  var re = new RegExp('(\\S)\\.__(' + namespace + ')__\\s?=\\s?(\\S)\\(\\)');

  var bpack = b._bpack = browserPack(options);

  b.pipeline.get('pack').splice(0, 1, bpack);

  b.pipeline.get('wrap').push(through(function(chunk, enc, next) {
    this.push(chunk.toString().replace(re, template));
    next();
  }));
};
