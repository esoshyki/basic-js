const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catsCount = 0;
  const catsInArray = array => array.reduce((acc, cur) => cur === '^^' ? acc + 1 : acc , 0);
  matrix.forEach(el => {
    catsCount += catsInArray(el)
  })
  return catsCount
};
