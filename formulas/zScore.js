const mean = require('./mean')
const standardDeviation = require('./standardDeviation')
// valor-padrão
const zScore = (data) => {
  const meanValue = mean(data)
  const standardDeviationValue = standardDeviation(data)
  const zScoreValue = 
    (standardDeviationValue == 0)
      ? data.map(() => 0)
      : data.map((value) => (value - meanValue) / standardDeviationValue)
  return zScoreValue
}

module.exports = zScore
