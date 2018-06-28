function rotate(arr, shift) {
  const newArray = [];
  for(let i=0; i<arr.length; i++) {
    newArray[i] = arr[(i+shift)%arr.length];
  }
  return newArray;
}

describe('rotating array left', function() {
  const assert = require('assert');
  it('should rotate left by 4', function() {
    const arr = [ 1, 2, 3, 4, 5 ];
    assert.deepEqual(rotate(arr, 4), [ 5, 1, 2, 3, 4 ]);
  });

  it('should rotate left by 10', function() {
    const arr = [ 41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51 ];
    assert.deepEqual(rotate(arr, 10), [ 77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84, 77 ]);
  });
});
