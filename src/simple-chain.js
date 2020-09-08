const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(value);
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      this.chain = [];
      throw new Error('')}
    const index = position - 1;
    if (index < 0 || position > this.getLength()) {
      this.chain = [];
      throw new Error('')}

    this.chain.splice(index, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const string = this.chain.reduce((acc, cur, idx) => {
      if (idx === 0) {
        return acc += `( ${cur} )`
      }
      if (idx === this.getLength() - 1) {
        return acc += `~~( ${cur} )`
      } else {
        return acc += `~~( ${cur} )`
      }
    }, '');
    this.chain = [];
    return string
  }
  
};

module.exports = chainMaker;
