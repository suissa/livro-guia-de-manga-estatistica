const geometricAverage = (data) => Math.pow(data.reduce((a, b) => a * b), 1 / data.length)

module.exports = geometricAverage