const CustomError = require("../extensions/custom-error");

const sequences = [
  '--discard-next',
  '--discard-prev',
  '--double-prev' ,
  '--double-next'
]

const reducer = (acc, cur, idx, array) => {

  if (array[idx - 1] === '--discard-next' && array[idx + 1] === '--double-prev') {
    return acc
  }

  if (array[idx - 1] === '--discard-next' && array[idx + 1] === '--discard-prev') {
    return acc
  }

  if (array[idx - 1] === '--double-next' && array[idx + 1] === '--double-prev') {
    return [...acc, cur, cur, cur]
  }

  if (array[idx - 1] === '--double-next' && array[idx + 1] === '--discard-prev') {
    return [...acc, cur]
  }

  if (array[idx + 1] === '--discard-prev') {
    return acc
  }
  if (array[idx + 1] === '--double-prev') {
    return [...acc, cur, cur]
  }
  if (array[idx - 1] === '--discard-next') {
    return acc
  }
  if (array[idx - 1] === '--double-next') {
    return [...acc, cur, cur]
  }
  if (sequences.includes(cur)) {
    return acc
  }
  return [...acc, cur]
}

module.exports = function transform( arr ) {
  const ans = arr.reduce(reducer, [])
  return ans
};
