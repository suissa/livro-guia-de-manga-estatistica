const mean = require('./mean')

const standardDeviation = (data, sample = false) => {
  const meanValues = Math.floor(mean(data))
  const squaredDeviations = data.map((value) => {
    const deviation = value - meanValues
    return deviation * deviation
  })

  if (sample) return Math.sqrt(squaredDeviations.reduce((a, b) => a + b, 0) / (data.length - 1))
  return Math.sqrt(squaredDeviations.reduce((a, b) => a + b, 0) / data.length)
}

module.exports = standardDeviation


