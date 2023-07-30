const mean = require('./mean')
const standardDeviation = require('./standardDeviation')

// Função de Densidade de Probabilidade Normal
// const calculateNormalPDF = (x, mean, standardDeviation) => {
const calculateNormalPDF = (x, data, meanValue = 0, standardDeviationValue = 1) => {

  if (data.length == 0) {
    return 0
  }
  const π = Math.PI;
  const e = Math.E;
  // meanValue = mean(data)
  // standardDeviationValue = standardDeviation(data)
  const coefficient = 1 / (standardDeviationValue * Math.sqrt(2 * π));
  const exponent = -((x - meanValue) ** 2) / (2 * standardDeviationValue ** 2);

  return coefficient * Math.pow(e, exponent);
};


module.exports = calculateNormalPDF

// PDF(x; μ, σ) = (1 / (σ * √(2 * π))) * e^(-(x - μ)^2 / (2 * σ^2))

// Onde:

// x é o valor para o qual queremos calcular o PDF.
// μ é a média da distribuição.
// σ é o desvio padrão da distribuição.
// π é o número pi (aproximadamente 3.141592653589793).
// e é a base do logaritmo natural (aproximadamente 2.718281828459045).
