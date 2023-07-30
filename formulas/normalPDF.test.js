const expect = require('chai').expect;
const calculateNormalPDF = require('./normalPDF');

describe('calculateNormalPDF', () => {
  it('should return the correct value for a standard normal distribution (mean = 0, standard deviation = 1)', () => {
    const data = [-1, 0, 1];
    const x = 0;
    const result = calculateNormalPDF(x, data);
    expect(result).to.be.closeTo(0.3989422804014337, 0.0000000000000001);
  });

  it('should return 0 for an empty array', () => {
    const data = [];
    const x = 0;
    const result = calculateNormalPDF(x, data);
    expect(result).to.equal(0); // This test expects 0
  });

  it('should handle an array with all identical values', () => {
    const data = [3, 3, 3];
    const x = 3;
    const result = calculateNormalPDF(x, data);
    expect(result).to.equal(0); // This test expects 0
  });

  // ... other tests ...
});
