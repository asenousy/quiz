const assert = require('assert');

function maxRegion (array) {
  function block(cube, k, l) {
    let sum = 1;
    cube[k][l]=0;

    for(let i=-1; i<2; i++) {
      for(let j=-1; j<2; j++) {
        const r = k-i;
        const c = l-j;
        if (r>=0 && c>=0 && r<cube.length && c<cube[0].length && cube[r][c]) {
          sum += block(cube, r, c);
        }
      }
    }
    return sum;
  }

  let max = 0;
  for(let i=0; i<array.length; i++) {
    for(let j=0; j<array[0].length; j++) {
      if (array[i][j]) {
        max = Math.max(max, block(array, i, j)); 
      }
    }
  }
  return max;
}

describe('get max shared color', function () {
  it('should calculate 5', function () {
    const array = [
      [ 1, 1, 0, 0 ],
      [ 0, 1, 1, 0 ],
      [ 0, 0, 1, 0 ],
      [ 1, 0, 0, 0 ]
    ];
    assert.equal(maxRegion(array), 5);
  });
  
  it('should calculate 4', function () {
    const array = [
      [ 1, 1, 0, 0 ],
      [ 0, 1, 0, 0 ],
      [ 0, 0, 0, 1 ],
      [ 1, 1, 1, 0 ]
    ];
    assert.equal(maxRegion(array), 4);
  });
});

