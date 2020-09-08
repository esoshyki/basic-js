const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.depth = 0;
  }

  calculateDepth(arr) {

    let depth = 0

    if (Array.isArray(arr)) {
      depth += 1
    }

    const filtredArray = arr.filter(el => Array.isArray(el));

    if (filtredArray.length > 0) {
      return depth + filtredArray.reduce((acc, cur) => {
        const curDepth = this.calculateDepth(cur)
        if (curDepth > acc) {
          return curDepth
        } else {
          return acc
        }
      }, 0)
    } else {
      return depth
    }
  }
};