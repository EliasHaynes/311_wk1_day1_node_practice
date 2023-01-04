const isEven = (num) => {
  // write code for numbers.isEven
  if(num % 2 == 0) {
    return true;
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  const sum = arr.reduce((acc,value) => {
    return acc + value;
  })
  return sum;
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  //compare indexOf = 0 === indexOf=1, but [0] has to be reduced and [1] is the sum we are comparing it to.
  for(let i =0; i < arr.length; i++){
    
    for(let j =0; j < arr.length; j++) {
      
      if(arr[i] + arr[j] == sum) {
        return true;
      } else {
        return false;
      }
    }
  }
}

// const comboSum = (arr, sum) => {
//   // write code for numbers.comboSum
//   //compare indexOf = 0 === indexOf=1, but [0] has to be reduced and [1] is the sum we are comparing it to.
//   for(let i =0; i < arr.length; i++){
//     for(let j =0; j < arr.length; j++) {
//       if((arr[i] + arr[j]) === sum) {
//         return true;
//       }
//     }
//   }
// }
  

module.exports = {
  isEven,
  sum,
  comboSum
}