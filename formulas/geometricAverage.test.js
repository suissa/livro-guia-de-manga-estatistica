const expect = require('chai').expect;
const geometricAverage = require('./geometricAverage');

describe('geometricAverage', () => {
  it('deve retornar a média geométrica correta para um array de números positivos', () => {
    expect(geometricAverage([1, 2, 3])).to.equal(Math.cbrt(6));
  });

  it('deve retornar 0 para um array que contenha o número zero', () => {
    expect(geometricAverage([1, 0, 3])).to.equal(0);
  });

  it('deve retornar 0 para um array composto apenas por zeros', () => {
    expect(geometricAverage([0, 0, 0])).to.equal(0);
  });

  it('deve retornar 0 para um array vazio', () => {
    expect(geometricAverage([])).to.equal(0);
  });
});
