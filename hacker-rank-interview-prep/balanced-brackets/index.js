function isBalanced(str) {
  const complement = { '[': ']', '{': '}', '(': ')' };
  const stack = [];
  for(let i=0; i<str.length; i++) {
    if( str[i] === complement[stack[stack.length-1]]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.length === 0;
}

describe('are brackets balanced', function() {
  const assert = require('assert')
  it('should be balanced', function() {
    const str = '{[()]}';
    assert.equal(isBalanced(str), true);
  });

  it('should not be balanced', function() {
    const str = '{[(])}';
    assert.equal(isBalanced(str), false);
  });
});

