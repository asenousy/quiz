class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enQueue(value) {
    const node = { value, next: null }
    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  }

 deQueue() {
   if (!this.head || !this.tail) return;
   const value = this.head.value;
   this.head = this.head.next;
   this.head || (this.tail = null);
   return value;
 }

  peek() {
   return this.head ? this.head.value : null; 
  }

  print() {
    let temp = this.head;
    while(temp !== null) {
      console.log(temp.value + ' --> ');
      temp = temp.next;
    }
    console.log('null');
  }
}

function processData(input) {
  const queries = input.split('\n');
  queries.shift();
  const queue = new Queue();
  return queries.reduce(function (acc, q) {
    q = q.trim().split(' '); 
    switch(q[0]) {
      case '1':
       queue.enQueue(q[1]);
        break;
      case '2':
        queue.deQueue();
        break;
      case '3':
        acc.push(queue.peek());
        break;
      default:
        break;
    }
    return acc;
  }, []); 
}

describe('build queue', function() {
  const assert = require('assert');
  it('should implement queue correctly', function() {
    const input = 
        `10
        1 42
        2
        1 14
        3
        1 28
        3
        1 60
        1 78
        2
        2`;
    assert.deepEqual(processData(input), ['14', '14']);
  });
});

