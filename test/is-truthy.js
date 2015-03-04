var test = require('tape');
var isTruthy = require('../is-truthy');

test('isTruthy', function (t) {
  t.plan(8);

  t.false(isTruthy(''));
  t.false(isTruthy(0));
  t.false(isTruthy(null));
  t.false(isTruthy(undefined));
  t.true(isTruthy(1));
  t.true(isTruthy({}));
  t.true(isTruthy([]));
  t.true(isTruthy(function() { }));
});
