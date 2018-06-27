function maxHourGlass(arr) {
  function hourGlass(row, col) {
    if(row+2>=arr.length || col+2>=arr[0].length) {
      return Number.NEGATIVE_INFINITY;
    }
    let sum = 0; 
    for(let i=0; i<3; i=i+2) {
      for(let j=0; j<3; j++) {
        sum += arr[row+i][col+j]; 
      }
    }
    sum += arr[row+1][col+1];
    return sum;
  }

  let max = Number.NEGATIVE_INFINITY;
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr[0].length; j++) {
      max = Math.max(max, hourGlass(i, j)); 
    }
  }
  return max;
}

describe('return highest hour glass', function () {
  const assert = require('assert');
  it('should return 13', function () {
    const arr = [
      [ 1, 1, 1, 0, 0, 0 ],
      [ 0, 1, 0, 0, 0, 0 ],
      [ 1, 1, 1, 0, 0, 0 ],
      [ 0, 9, 2, -4, -4, 0 ],
      [ 0, 0, 0, -2, 0, 0 ],
      [ 0, 0, -1, -2, -4, 0 ]
    ];
    assert.equal(maxHourGlass(arr), 13);
  });

  it('should return 28', function () {
    const arr = [
      [ -9, -9, -9, 1, 1, 1 ],
      [ 0, -9, 0, 4, 3, 2 ],
      [ -9, -9, -9, 1, 2, 3 ],
      [ 0, 0, 8, 6, 6, 0 ],
      [ 0, 0, 0, -2, 0, 0 ],
      [ 0, 0, 1, 2, 4, 0 ]
    ];
    assert.equal(maxHourGlass(arr), 28);
  });
  
  it('should return -6', function () {
    const arr = [
      [ -1, -1, 0, -9, -2, -2 ],
      [ -2, -1, -6, -8, -2, -5 ],
      [ -1, -1, -1, -2, -3, -4 ],
      [ -1, -9, -2, -4, -4, -5 ],
      [ -7, -3, -3, -2, -9, -9 ],
      [ -1, -3, -1, -2, -4, -5 ]
    ];
    assert.equal(maxHourGlass(arr), -6);
  });
});
