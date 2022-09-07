 const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
 if(word === null || word === undefined){
  return undefined
 }else if(word === startWord){
  return word
 }else
 return startWord+word
 
}

module.exports = fillStartWord
