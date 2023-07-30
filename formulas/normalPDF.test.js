const { expect } = require('chai');
const calculateNormalPDF = require('./normalPDF');

describe('calculateNormalPDF', () => {
  it('deve retornar o valor correto para uma distribuição normal padrão (média = 0, desvio padrão = 1)', () => {
    const data = [-1, 0, 1];
    const x = 0;
    const result = calculateNormalPDF(x, data);
    expect(result).to.be.closeTo(0.3989422804014337, 1e-15);
  });


  it('deve retornar 0 para um array vazio', () => {
    const data = [];
    const x = 0;
    const result = calculateNormalPDF(x, data);
    expect(result).to.equal(0);
  });

  it('deve lidar com um array contendo apenas valores idênticos', () => {
    const data = [3, 3, 3];
    const x = 3;
    const result = calculateNormalPDF(x, data);
    expect(result).to.be.closeTo(0.0, 0.0000000000000001); // O valor esperado aqui é 0.0
  
  });

  it('deve retornar valores corretos para diferentes médias e desvios padrão', () => {
    const data = [1, 2, 3, 4, 5];
    const x = 3;

    // Média = 3, Desvio padrão = 1
    let result = calculateNormalPDF(x, data, 3, 1);
    expect(result).to.be.closeTo(0.24197072451914337, 0.0000000000000001);

    // Média = 3, Desvio padrão = 2
    result = calculateNormalPDF(x, data, 3, 2);
    expect(result).to.be.closeTo(0.12098536225957169, 0.00000000000000005);

    // Média = 2, Desvio padrão = 1
    result = calculateNormalPDF(x, data, 2, 1);
    expect(result).to.be.closeTo(0.05399096651318806, 0.0000000000000001);
  });

  it('deve retornar 0 para um valor de x fora do alcance dos dados', () => {
    const data = [1, 2, 3, 4, 5];
    const x = 10;
    const result = calculateNormalPDF(x, data);
    expect(result).to.equal(0);
  });

  it('deve retornar 0 para um valor de desvio padrão não positivo', () => {
    const data = [1, 2, 3, 4, 5];
    const x = 3;
    const result = calculateNormalPDF(x, data, 3, 0);
    expect(result).to.equal(0);
  });

  // Mais testes relevantes podem ser adicionados aqui...
});
