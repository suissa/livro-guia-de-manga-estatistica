const average = (data) => data.reduce((a, b) => a + b, 0) / (data.length || 1)

module.exports = average