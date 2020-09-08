const CustomError = require("../extensions/custom-error");

const isLetter = char => char.charCodeAt() >= 65 && char.charCodeAt() <= 90

class VigenereCipheringMachine {

  constructor (isDirect) {
    this.isDirect = isDirect === false ? false : true
  }

  encrypt(_text, _key) {
    const startCharCode = 'A'.charCodeAt();
    const text = _text.toUpperCase();
    const key = _key.toUpperCase();
    const keylength = key.length;
    let indexCorrect = 0;
  
    const res = text.split('').map((char, idx) => {
      if (char === ' ') {
        indexCorrect -= 1;
        return char
      }
      if (!isLetter(char)) {
        return char }

      const textCharCode = char.charCodeAt() - startCharCode;
      const keyCharCode = key[(idx + indexCorrect) % keylength].charCodeAt() - startCharCode;
      const newCharCode = startCharCode + ((textCharCode + keyCharCode) % 26); // (cipher - key + 26) % 26;
      return String.fromCharCode(newCharCode)
    }).join('')
    return this.isDirect ? res : res.split('').reverse().join('')
  }    
  decrypt(_text, _key) {
    const endCharCode = 'Z'.charCodeAt();
    const startCharCode = 'A'.charCodeAt();
    const text = _text
    const key = _key.toUpperCase()
    const keylength = key.length;
    let indexCorrect = 0;
  
    const res = text.split('').map((char, idx) => {
      if (char === ' ') {
        indexCorrect -= 1;
        return char
      }
      if (!isLetter(char)) {
        return char }
      const textCharCode = char.charCodeAt() - startCharCode;
      const keyCharCode = key[(idx + indexCorrect) % keylength].charCodeAt() - startCharCode;
      const between = textCharCode - keyCharCode
      if (between === 0) return 'A'

      const newCharCode = between >= 0 ? startCharCode + between  : endCharCode + between + 1;
      return String.fromCharCode(newCharCode)
    }).join('')
    return this.isDirect ? res : res.split('').reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
