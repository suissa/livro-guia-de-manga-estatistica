const { expect } = require('chai');
const median = require('./median');

const teamA = [38, 73, 86, 90, 111, 124];
const teamB = [71, 84, 85, 89, 90, 103];
const teamC = [59, 70, 77, 88, 95, 229];

describe('mediana', () => {
  it('deve retornar a mediana de um array com tamanho ímpar', () => {
    const data = [1, 2, 3, 4, 5];

    expect(median(data)).equal(3);
  });

  it('deve retornar a mediana de um array com tamanho par', () => {
    const data = [1, 2, 3, 4];

    expect(median(data)).equal(2.5);
  });

  it('deve retornar undefined para um array vazio', () => {
    const data = [];

    expect(median(data)).equal(undefined);
  });

  it('deve retornar a mediana da equipe A', () => {
    expect(median(teamA)).equal(88);
  });

  it('deve retornar a mediana da equipe B', () => {
    expect(median(teamB)).equal(87);
  });

  it('deve retornar a mediana da equipe C', () => {
    expect(median(teamC)).equal(82.5);
  });
});
