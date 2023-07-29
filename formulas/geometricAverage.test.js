const expect = require('chai').expect;
const geometricAverage = require('./geometricAverage');

describe('geometricAverage', () => {
  it('should return the correct geometric average for an array of positive numbers', () => {
    expect(geometricAverage([1, 2, 3])).to.equal(Math.cbrt(6));
  });

  it('should return 0 for an array with zero', () => {
    expect(geometricAverage([1, 0, 3])).to.equal(0);
  });

  it('should return 0 for an array of all zeros', () => {
    expect(geometricAverage([0, 0, 0])).to.equal(0);
  });

  it('should return 0 for an empty array', () => {
    expect(geometricAverage([])).to.equal(0);
  });
});
