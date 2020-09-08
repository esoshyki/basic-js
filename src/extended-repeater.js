const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {
    repeatTimes=1, separator = '+', addition, additionRepeatTimes=1, additionSeparator = '|'
  } = options

  const createString = ({string, repeatTimes, separator}) => {
    return Array(repeatTimes || 1).fill(string).join(separator || '')
  }

  const additionPart = addition !== undefined ? createString({
    string: `${addition}`,
    repeatTimes: additionRepeatTimes,
    separator: additionSeparator
  }) : ''

  return createString({
    string: `${str}` + additionPart,
    repeatTimes: repeatTimes,
    separator: separator
  })
 
};
  
  