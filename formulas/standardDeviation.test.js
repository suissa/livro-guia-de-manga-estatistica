const { expect } = require('chai');
const standardDeviation = require('./standardDeviation');
const {
  teamA,
  teamB,
  teamC
} = require('./data.team');

describe('standardDeviation', () => {
  it('should return the standard deviation of teamA', () => {
    expect( Number(standardDeviation(teamA).toFixed(1)) ).equal(27.5);
  });

  it('should return the standard deviation of teamB', () => {
    expect( Number(standardDeviation(teamB).toFixed(1)) ).equal(9.5);
  });

  it('should return the standard deviation of teamC', () => {
    expect( Number(standardDeviation(teamC).toFixed(1)) ).equal(57.5);
  });
});