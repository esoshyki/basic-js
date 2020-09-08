const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const minTurns = 2 ** disksNumber - 1;
  const hours = minTurns / turnsSpeed;
  const seconds = Math.floor(hours * 60 * 60);
  return { turns: minTurns, seconds: seconds}
};
