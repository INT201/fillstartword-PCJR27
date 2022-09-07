 const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
 if(word === null || word === undefined){
  return undefined
 }else if(word === startWord){
  return word
 }else
 return startWord+word
 
}
console.log(fillStartWord('1-2565-','Hello World'))
console.log(fillStartWord('first',null))
console.log(fillStartWord('first','firststep'))

module.exports = fillStartWord
