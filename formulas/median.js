const median = (data) => {
  data.sort((a, b) => a - b);
  const length = data.length;
  if (length === 0) return undefined;
  if (length % 2 === 0) {
    return (data[length / 2] + data[length / 2 - 1]) / 2;
  } else {
    return data[Math.floor(length / 2)];
  }
};

module.exports = median;