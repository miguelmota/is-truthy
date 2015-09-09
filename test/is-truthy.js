var test = require('tape');
var isTruthy = require('../is-truthy');

test('isTruthy', function (t) {
  t.plan(11);

  t.false(isTruthy(false));
  t.false(isTruthy(''));
  t.false(isTruthy(0));
  t.false(isTruthy(null));
  t.false(isTruthy(undefined));
  t.false(isTruthy(NaN));
  t.true(isTruthy(true));
  t.true(isTruthy(1));
  t.true(isTruthy({}));
  t.true(isTruthy([]));
  t.true(isTruthy(function() { }));
});
