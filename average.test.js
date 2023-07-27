const { expect } = require('chai');
const average = require('./average');
const {
  data,
  class1,
  class2,
  class3,
  class4,
  class5
} = require('./data.restaurants');

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


describe('pisos', () => {
  it('should return the average of class1', () => {
    const min = Math.min(...class1)
    const max = Math.max(...class1)

    expect(average([min, max])).equal(545);
  });

  it('should return the average of class2', () => {
    const min = Math.min(...class2)
    const max = Math.max(...class2)

    expect(average([min, max])).equal(640);
  });

  it('should return the average of class3', () => {
    const min = Math.min(...class3)
    const max = Math.max(...class3)

    expect(average([min, max])).equal(745);
  });

  it('should return the average of class4', () => {
    const min = Math.min(...class4)
    const max = Math.max(...class4)

    expect(average([min, max])).equal(845);
  });

  it('should return the average of class5', () => {
    const min = Math.min(...class5)
    const max = Math.max(...class5)

    expect(average([min, max])).equal(940);
  });
});