function oddOrEven(array) {
   //enter code here
 let sum = 0;
  for (let item of array) {
    sum += item
  }
  
  if(sum % 2 === 0 || sum === 0) {
    return 'even'
  } else {
    return 'odd'
  } 
}
