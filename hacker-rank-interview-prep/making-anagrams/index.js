function calcCharRemove(str1, str2) {
  const hash = {};
  str1.split('').forEach(ch => {
    if(!hash[ch]) {
     return hash[ch] = 1; 
    }
    hash[ch]++;
  }); 
  str2.split('').forEach(ch => { hash[ch] = (hash[ch] || 0) - 1}); 

  return Object.keys(hash).reduce((count, ch) => { return count = count + Math.abs(hash[ch]) }, 0);
}

describe('calculate chars required to be removed for anagrams', function() {
  const assert = require('assert');

  it('should return 4', function() {
    assert.equal(calcCharRemove('cde', 'abc'), 4);
  });

  it('should return 30', function() {
    assert.equal(calcCharRemove('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'), 30);
  });
});

