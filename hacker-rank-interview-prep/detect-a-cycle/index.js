function hasCycleHash(node) {
  const set = new Set();
  while(node) {
    if(set.has(node)) return true;
    set.add(node);
    node = node.next;
  }
  return false;
}

function hasCycle(node) {
  let turtoise = node;
  let rabbit = node;
  while(turtoise.next.next != null) {
    turtoise = turtoise.next;
    rabbit = rabbit.next.next;
    if(rabbit === turtoise) return true;
  }
  return false;
}

describe('detect a cycle', function() {
  const assert = require('assert');

  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }

    add(data) {
      let current = this;
      while(current.next !== null) {
        current = current.next;
      }
      current.next = new Node(data);
      return this;
    }

    loopBack(point) {
      let current = this;
      let pointNode;
      while(current.next !== null) {
        if (current.data === point) {
          pointNode = current;
        }
        current = current.next;
      }
      current.next = pointNode;
      return this;
    }
  }

  it('should return false', function() {
    const node = new Node(0).add(1).add(2).add(3);
    assert.equal(hasCycle(node), false);
  });

  it('should return true', function() {
    const node = new Node(0).add(1).add(2).add(3).loopBack(1);
    assert.equal(hasCycle(node), true);
  });
});

