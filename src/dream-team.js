const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  return members.reduce((acc, cur) => {
    if (typeof cur !== 'string') return acc;
    else {
      return acc + cur.trim()[0].toUpperCase()
    }
  }, '').split('').sort().join('')
};
