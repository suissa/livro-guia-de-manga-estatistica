const { expect } = require('chai');
const ruleOfSturges = require('./ruleOfSturges');

describe('regra de Sturges', () => {
  it('deve retornar 5 para um comprimento de 20', () => {
    const data = Array.from({ length: 20 }, () => Math.floor(Math.random() * 1000));
    expect(ruleOfSturges(data)).equal(5);
  });

  it('deve retornar 6 para um comprimento de 25', () => {
    const data = Array.from({ length: 25 }, () => Math.floor(Math.random() * 1000));
    expect(ruleOfSturges(data)).equal(6);
  });

  it('deve retornar 7 para um comprimento de 50', () => {
    const data = Array.from({ length: 50 }, () => Math.floor(Math.random() * 1000));
    expect(ruleOfSturges(data)).equal(7);
  });

  it('deve retornar 9 para um comprimento de 250', () => {
    const data = Array.from({ length: 250 }, () => Math.floor(Math.random() * 1000));
    expect(ruleOfSturges(data)).equal(9);
  });

  it('deve retornar 10 para um comprimento de 500', () => {
    const data = Array.from({ length: 500 }, () => Math.floor(Math.random() * 1000));
    expect(ruleOfSturges(data)).equal(10);
  });

  it('deve retornar 11 para um comprimento de 1000', () => {
    const data = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
    expect(ruleOfSturges(data)).equal(11);
  });
});
