const expect = require('chai').expect;
const harmonicAverage = require('./harmonicAverage');

describe('harmonicAverage', () => {
  it('should return the correct harmonic average for an array of positive numbers', () => {
    expect(harmonicAverage([1, 2, 3])).to.equal(1.6363636363636365);
  });

  it('should return the correct harmonic average for an array with zero', () => {
    expect(harmonicAverage([1, 0, 3])).to.equal(0);
  });

  it('should return Infinity for an array of all zeros', () => {
    expect(harmonicAverage([0, 0, 0])).to.equal(Infinity);
  });

  it('should return Infinity for an empty array', () => {
    expect(harmonicAverage([])).to.equal(Infinity);
  });
});
