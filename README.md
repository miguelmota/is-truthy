# is-truthy

Predicate that returns true for *truthy* values.

# Install

```bash
npm install is-truthy
```

```bash
bower install is-truthy
```

# Usage

```javascript
var isTruthy = require('is-truthy');

console.log(isTruthy('')); // false
console.log(isTruthy(0)); // false
console.log(isTruthy(null)); // false
console.log(isTruthy(undefined)); // false
console.log(isTruthy(1)); // true
console.log(isTruthy({})); // true
console.log(isTruthy([])); // true
console.log(isTruthy(function() { })); // true
```

# License

MIT
