const { expect } = require('chai');
const relative_frequency = require('./relative_frequency');


describe('relative_frequency', () => {
  it('should return the relative frequency of a class', () => {
    const data_class = [1, 2, 3];
    const data_total = [1, 2, 3, 4, 5];

    expect(relative_frequency(data_class, data_total)).equal(3 / 5);
  });

  it('should return 0 if the class is empty', () => {
    const data_class = [];
    const data_total = [1, 2, 3, 4, 5];

    expect(relative_frequency(data_class, data_total)).equal(0);
  });

  it('should return 1 if the class is the same as the total data', () => {
    const data_class = [1, 2, 3, 4, 5];
    const data_total = [1, 2, 3, 4, 5];

    expect(relative_frequency(data_class, data_total)).equal(1);
  });
});