 const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
let words =word
let stars = startWord
 if(word === null || word === undefined){
  return undefined
 }else if(words.indexOf(stars)>=0){
  return word
 }else
 return startWord+word
 
}
console.log(fillStartWord('first', 'firststep'))
console.log(fillStartWord('1-2565-', 'Hello world'))
console.log(fillStartWord('first', null))
module.exports = fillStartWord
