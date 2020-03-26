/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */

const extendedTypeOf = function(obj) {
  const result = typeof obj;
  if ((obj == null)) {
    return 'null';
  } else if ((result === 'object') && (obj.constructor === Array)) {
    return 'array';
  } else {
    return result;
  }
};

module.exports = { extendedTypeOf };
