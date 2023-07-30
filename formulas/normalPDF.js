const mean = require('./mean')
const standardDeviation = require('./standardDeviation')

// Função de Densidade de Probabilidade Normal
// const calculateNormalPDF = (x, mean, standardDeviation) => {
const calculateNormalPDF = (x, data) => {
  const π = Math.PI;
  const e = Math.E;
  const meanValue = mean(data)
  const standardDeviationValue = standardDeviation(data)
  const coefficient = 1 / (standardDeviationValue * Math.sqrt(2 * π));
  const exponent = -((x - meanValue) ** 2) / (2 * standardDeviationValue ** 2);

  return coefficient * Math.pow(e, exponent);
}


module.exports = calculateNormalPDF

