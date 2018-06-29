function checkMagazine(mag, note) {
  const hash = {};
  mag.split(' ').forEach(word => hash[word] = (hash[word] || 0) + 1);
  return note.split(' ').every(word => {
    if(!hash[word]) {
      return false;
    }
    hash[word]--;
    return true; 
  });
}

describe('find words in magazine', function() {
  const assert = require('assert');

  it('should return true', function() {
    const magazine = 'give me one grand today night';
    assert.equal(checkMagazine(magazine, 'give one grand today'), true);
  });

  it('should return false', function() {
    const magazine = 'two times three is not four';
    assert.equal(checkMagazine(magazine, 'two times two is four'), false);
  });
});

