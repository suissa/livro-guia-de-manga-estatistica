const harmonicAverage = (data) => 
  (data.length === 0 || data.every((value) => value === 0))
    ? Infinity
    : data.length / data.reduce((a, b) => a + 1 / b, 0)

module.exports = harmonicAverage