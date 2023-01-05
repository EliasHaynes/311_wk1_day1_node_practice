const split = (str, delim) => {
  // write code for strings.split
  const theSplit = str.split(delim)
  return theSplit;
}

const pairs = (str) => {
  // write code for strings.pairs
  let splitPairs =[];
  for (let i =0; i < str.length; i += 2) {
    splitPairs.push(str[i] + str[i+1])

  }
  return splitPairs
}

const reverse = (str) => {
  
  // write code for strings.reverse
  let reverseArr = str.split('')
  reverseArr.reverse();
  let reversed = reverseArr.join('')
  return reversed;
}

module.exports = {
  split,
  pairs,
  reverse
}