const CustomError = require("../extensions/custom-error");

const noDate = 'Unable to determine the time of year!';
  
const getSeasonByMonth = month => {
  if (month > 10 || month < 2) return 'winter';
  if (month > 1 && month < 5) return 'spring';
  if (month > 4 && month < 8) return 'summer';
  if (month > 7 && month < 11) return 'autumn'; 
}


module.exports = function getSeason(date) {

  if (!date) return noDate

  if (!date.setDate) {
    throw new Error()}

  if (date.getDate !== Date.prototype.getDate) {
    throw new Error()
  }

  const month = date.getMonth();
  return getSeasonByMonth(month)
};
