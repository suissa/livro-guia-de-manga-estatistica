const chai = require('chai');
const expect = chai.expect;
const zScore = require('./zScore');

describe('zScore', () => {
  // Teste para verificar o cálculo do Z-score
  it('calcula corretamente o Z-score', () => {
    const data = [10, 20, 30, 40, 50];

    // Chamar a função e verificar o resultado
    const result = zScore(data);

    // Verificar se a média dos Z-scores é próxima de zero
    const meanZScore = result.reduce((acc, val) => acc + val, 0) / result.length;
    expect(meanZScore).to.be.closeTo(0, 0.0001);

    // Verificar se o desvio padrão dos Z-scores é próximo de um
    const squaredDifferences = result.map((z) => Math.pow(z - meanZScore, 2));
    const stdDevZScore = Math.sqrt(squaredDifferences.reduce((acc, val) => acc + val, 0) / result.length);
    expect(stdDevZScore).to.be.closeTo(1, 0.0001);
  });

  // Teste para verificar o Z-score em caso de desvio padrão igual a zero (para evitar divisão por zero)
  it('retorna um array de zeros quando o desvio padrão é igual a zero', () => {
    const data = [10, 10, 10, 10, 10]; // Todos os elementos são iguais, resultando em desvio padrão zero

    // Chamar a função e verificar o resultado
    const result = zScore(data);
    const expectedZScore = data.map(() => 0); // Espera-se que todos os valores do Z-score sejam iguais a 0
    expect(result).to.deep.equal(expectedZScore);
  });

  // Teste para verificar o cálculo do Z-score em um array vazio
  it('retorna um array vazio para um array vazio', () => {
    const data = [];

    // Chamar a função e verificar o resultado
    const result = zScore(data);
    const expectedZScore = [];
    expect(result).to.deep.equal(expectedZScore);
  });

  // Teste para verificar o cálculo do Z-score em um array com um único elemento
  it('retorna um array com um único elemento igual a zero quando o array possui apenas um elemento', () => {
    const data = [42];

    // Chamar a função e verificar o resultado
    const result = zScore(data);
    const expectedZScore = [0]; // O Z-score de um único elemento é sempre 0
    expect(result).to.deep.equal(expectedZScore);
  });

  // Teste para verificar o cálculo do Z-score com valores negativos
  it('calcula corretamente o Z-score para um array com valores negativos', () => {
    const data = [-10, -5, 0, 5, 10];

    // Chamar a função e verificar o resultado
    const result = zScore(data);

    // Verificar se a média dos Z-scores é próxima de zero
    const meanZScore = result.reduce((acc, val) => acc + val, 0) / result.length;
    expect(meanZScore).to.be.closeTo(0, 0.0001);

    // Verificar se o desvio padrão dos Z-scores é próximo de um
    const squaredDifferences = result.map((z) => Math.pow(z - meanZScore, 2));
    const stdDevZScore = Math.sqrt(squaredDifferences.reduce((acc, val) => acc + val, 0) / result.length);
    expect(stdDevZScore).to.be.closeTo(1, 0.0001);
  });

  // Teste para verificar o cálculo do Z-score com um grande número de elementos
  it('calcula corretamente o Z-score para um grande número de elementos', () => {
    // Criar um array com 100000 elementos, todos iguais a 1000
    const data = new Array(100000).fill(1000);

    // Chamar a função e verificar o resultado
    const result = zScore(data);

    // Verificar se todos os elementos do Z-score são iguais a zero
    const expectedZScore = new Array(100000).fill(0);
    expect(result).to.deep.equal(expectedZScore);
  });

});
