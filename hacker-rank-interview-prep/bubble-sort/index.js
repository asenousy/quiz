function bubble(arr) {
  let swap = false;
  let count = 0;
  let lastUnsorted = arr.length-1;
  do {
    swap = false;
    for(let i=0; i<lastUnsorted; i++) {
      if (arr[i] > arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swap = true;
        count++;
      }
    }
    lastUnsorted--;
  } while(swap);
  return { swaps: count, first: arr[0], last: arr[arr.length-1] };
}

describe('bubble sort', function() {
  const assert = require('assert');

  it('should return', function() {
    assert.deepEqual(bubble([3, 2, 1]), { swaps:3, first: 1, last: 3 });
  });
});

