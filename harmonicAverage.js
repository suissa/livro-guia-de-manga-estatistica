const harmonicAverage = (data) => data.length / data.reduce((a, b) => a + 1 / b, 0)

module.exports = harmonicAverage