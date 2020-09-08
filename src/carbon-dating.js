const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false
  const x = parseFloat(sampleActivity);
  if (x !== x) return false
  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = (Math.log(MODERN_ACTIVITY / x)) / k;
  return (t > 0 && t !== Infinity) ? Math.ceil(t) : false
};
