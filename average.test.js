const { expect } = require('chai');
const average = require('./average');


describe('average', () => {
  it('should return the average of an empty array', () => {
    const data = [];

    expect(average(data)).equal(0);
  });

  it('should return the average of an array with one element', () => {
    const data = [1];

    expect(average(data)).equal(1);
  });

  it('should return the average of an array with multiple elements', () => {
    const data = [1, 2, 3, 4, 5];

    expect(average(data)).equal(3);
  });
});