const expect = require('chai').expect;
const harmonicAverage = require('./harmonicAverage');

describe('harmonicAverage', () => {
  it('deve retornar a média harmônica correta para um array de números positivos', () => {
    expect(harmonicAverage([1, 2, 3])).to.equal(1.6363636363636365);
  });

  it('deve retornar a média harmônica correta para um array que contenha o número zero', () => {
    expect(harmonicAverage([1, 0, 3])).to.equal(0);
  });

  it('deve retornar Infinity para um array composto apenas por zeros', () => {
    expect(harmonicAverage([0, 0, 0])).to.equal(Infinity);
  });

  it('deve retornar Infinity para um array vazio', () => {
    expect(harmonicAverage([])).to.equal(Infinity);
  });
});
