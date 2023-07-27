const { expect } = require('chai');
const mean = require('./mean');
const {
  data,
  class1,
  class2,
  class3,
  class4,
  class5
} = require('./data.restaurants');

describe('mean', () => {
  it('should return the mean of an empty array', () => {
    const data = [];

    expect(mean(data)).equal(0);
  });

  it('should return the mean of an array with one element', () => {
    const data = [1];

    expect(mean(data)).equal(1);
  });

  it('should return the mean of an array with multiple elements', () => {
    const data = [1, 2, 3, 4, 5];

    expect(mean(data)).equal(3);
  });
});


describe('pisos', () => {
  it('should return the mean of class1', () => {
    const min = Math.min(...class1)
    const max = Math.max(...class1)

    expect(mean([min, max])).equal(545);
  });

  it('should return the mean of class2', () => {
    const min = Math.min(...class2)
    const max = Math.max(...class2)

    expect(mean([min, max])).equal(640);
  });

  it('should return the mean of class3', () => {
    const min = Math.min(...class3)
    const max = Math.max(...class3)

    expect(mean([min, max])).equal(745);
  });

  it('should return the mean of class4', () => {
    const min = Math.min(...class4)
    const max = Math.max(...class4)

    expect(mean([min, max])).equal(845);
  });

  it('should return the mean of class5', () => {
    const min = Math.min(...class5)
    const max = Math.max(...class5)

    expect(mean([min, max])).equal(940);
  });
});