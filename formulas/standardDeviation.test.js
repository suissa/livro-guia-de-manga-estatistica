const { expect } = require('chai');
const standardDeviation = require('./standardDeviation');
const {
  teamA,
  teamB,
  teamC
} = require('./data.team');

const history = [
  73, 61, 14, 41, 49, 87, 69, 65, 36, 7, 53, 100, 57, 45, 56, 34, 37, 70
]

const biology = [
  59,  73,  47,  38,  63,  56,  15,  53,  80,  50,  41,  62,  44,  26,  91,  35,  53,  68
]

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


  it('should return 22,7 for standard deviation of History', () => {
    expect( Number(standardDeviation(history).toFixed(1)) ).equal(22.7);
  });
  it('should return 18,3 for standard deviation of Biology', () => {
    expect( Number(standardDeviation(biology).toFixed(1)) ).equal(18.3);
  });
});