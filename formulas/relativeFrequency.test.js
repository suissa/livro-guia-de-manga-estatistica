const { expect } = require('chai');
const relative_frequency = require('./relativeFrequency');

describe('relative_frequency', () => {
  it('deve retornar a frequência relativa de uma classe', () => {
    const data_class = [1, 2, 3];
    const data_total = [1, 2, 3, 4, 5];

    expect(relative_frequency(data_class, data_total)).equal(3 / 5);
  });

  it('deve retornar 0 se a classe estiver vazia', () => {
    const data_class = [];
    const data_total = [1, 2, 3, 4, 5];

    expect(relative_frequency(data_class, data_total)).equal(0);
  });

  it('deve retornar 1 se a classe for igual aos dados totais', () => {
    const data_class = [1, 2, 3, 4, 5];
    const data_total = [1, 2, 3, 4, 5];

    expect(relative_frequency(data_class, data_total)).equal(1);
  });
});
