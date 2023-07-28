const { expect } = require('chai');
const ruleOfSturges = require('./ruleOfSturges');

describe('rule of Sturges', () => {
  it('should return 7 for length 50', () => {
    
    const data = Array.from({length: 50}, () => Math.floor(Math.random() * 1000));

    expect(ruleOfSturges(data)).equal(7);
  });

});