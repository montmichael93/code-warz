function findOutlier(integers){
  //your code here
  let evenTotal = [];
  let oddTotal = [];
  
  for (let num of integers) {
    if (num % 2 === 0) {
      evenTotal.push(num)
    } if (num % 2 > 0 || num % 2 <0) {
      oddTotal.push(num)
    }
  }
  if (evenTotal.length === 1) {
    return evenTotal[0]
  } else if (oddTotal.length === 1) {
    return oddTotal[0]
  }
}
