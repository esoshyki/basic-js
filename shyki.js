function repeater(str, options) {
  const {
    repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator
  } = options

  const createString = ({string, repeatTimes, separator}) => {
    return Array(repeatTimes || 1).fill(string).join(separator || '')
  }

  const part = createString({
    string: str + (addition ? addition : ''),
    repeatTimes: additionRepeatTimes,
    separator: additionSeparator
  })

  console.log(part)

  console.log(part)

  return createString({
    string: part,
    repeatTimes: repeatTimes,
    separator: separator
  })
 
};
  
console.log(repeater('la', { repeatTimes: 3 }))