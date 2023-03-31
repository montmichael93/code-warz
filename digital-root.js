function digitalRoot(n) {
  // ...
 let digits = n.toString().split('').map(Number);
 let sumTotal = digits.reduce((accumulator, currentValue) => accumulator + currentValue);
  if (sumTotal < 10 ) {
    return sumTotal;
  } else {
    return digitalRoot(sumTotal);
  } 
  return digits;  
}  
