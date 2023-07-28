const { expect } = require('chai');
const ruleOfSturges = require('./ruleOfSturges');

describe('rule of Sturges', () => {
  it('should return 5 for length 20', () => {
    
    const data = Array.from({length: 20}, () => Math.floor(Math.random() * 1000));

    expect(ruleOfSturges(data)).equal(5);
  });
  it('should return 6 for length 25', () => {
    
    const data = Array.from({length: 25}, () => Math.floor(Math.random() * 1000));

    expect(ruleOfSturges(data)).equal(6);
  });

  it('should return 7 for length 50', () => {
    
    const data = Array.from({length: 50}, () => Math.floor(Math.random() * 1000));

    expect(ruleOfSturges(data)).equal(7);
  });

  it('should return 9 for length 250', () => {
    
    const data = Array.from({length: 250}, () => Math.floor(Math.random() * 1000));

    expect(ruleOfSturges(data)).equal(9);
  });


  it('should return 10 for length 500', () => {
    
    const data = Array.from({length: 500}, () => Math.floor(Math.random() * 1000));

    expect(ruleOfSturges(data)).equal(10);
  });

  it('should return 11 for length 1000', () => {
    
    const data = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000));

    expect(ruleOfSturges(data)).equal(11);
  });

});