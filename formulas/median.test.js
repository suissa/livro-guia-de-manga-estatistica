const { expect } = require('chai');
const median = require('./median');

const teamA = [38, 73, 86, 90, 111, 124]
const teamB = [71, 84, 85, 89, 90, 103]
const teamC = [59, 70, 77, 88, 95, 229]

describe('median', () => {
  it('should return the median of an array with odd length', () => {
    const data = [1, 2, 3, 4, 5];

    expect(median(data)).equal(3);
  });

  it('should return the median of an array with even length', () => {
    const data = [1, 2, 3, 4];

    expect(median(data)).equal(2.5);
  });

  it('should return the median of an empty array', () => {
    const data = [];

    expect(median(data)).equal(undefined);
  });


  it('should return the median of teamA', () => {
    expect(median(teamA)).equal(88);
  });

  it('should return the median of teamB', () => {
    expect(median(teamB)).equal(87);
  });

  it('should return the median of teamC', () => {
    expect(median(teamC)).equal(82.5);
  });
});