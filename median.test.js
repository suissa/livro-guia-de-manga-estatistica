const { expect } = require('chai');
const median = require('./median');

describe('median', () => {
  it('should return the median of an array with odd length', () => {
    const data = [1, 2, 3, 4, 5];

    expect(median(data)).equal(3);
  });

  it('should return the median of an array with even length', () => {
    const data = [1, 2, 3, 4];

    expect(median(data)).equal(2.5);
  });

  it('should return the median of an empty array', () => {
    const data = [];

    expect(median(data)).equal(undefined);
  });
});