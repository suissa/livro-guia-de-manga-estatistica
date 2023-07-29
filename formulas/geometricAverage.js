const geometricAverage = (data) => 
  (data.length === 0 || data.some((value) => value === 0))
    ? 0
    : Math.pow(data.reduce((a, b) => a * b), 1 / data.length)

module.exports = geometricAverage