function findLonely(arr) {
  const set = arr.reduce(function(acc, item) {
    if (acc.has(item)) {
      acc.delete(item);
    } else {
      acc.add(item);
    }
    return acc;
  }, new Set());

  return set.values().next().value;
}

describe('should get lonely integer', function() {
  const assert = require('assert');
  it('should return ', function() {
    assert.equal(findLonely([1, 1, 2, 3, 2]), 3);
  });
});
