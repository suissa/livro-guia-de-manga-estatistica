const logBase = (base, number) => Math.log(number) / Math.log(base)
const ruleOfSturges = (data) => Math.round(logBase(10, data.length) / logBase(10, 2) + 1)

module.exports = ruleOfSturges;