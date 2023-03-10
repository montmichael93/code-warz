function createPhoneNumber(numbers){
 
  let randomNumber = Math.floor(Math.random() * numbers.length);
  let digit = numbers[randomNumber];
  let areaCode = '';
  let prefix = '';
  let lineNumber = '';
  
  
  while (areaCode.length < 3) {
    areaCode += Math.floor(Math.random() * numbers.length);
  }  
    while (prefix.length < 3) {
    prefix += Math.floor(Math.random() * numbers.length);
  }
    while (lineNumber.length < 4) {
    lineNumber += Math.floor(Math.random() * numbers.length);
  }
  return '(' + areaCode + ')' + ' ' + prefix + '-' + lineNumber;
  
}






console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/*
function createPhoneNumber(numbers){
   let areaCode;
  let prefix;
  let lineNumber;
 areaCode = '(' + numbers[0] + numbers[1] + numbers[2] + ') ';
 prefix =   '' + numbers[3] + '' + numbers[4] + '' + numbers[5] + '-';
 lineNumber = numbers[6] + '' + numbers[7] + '' + numbers[8] + '' + numbers[9];

  return areaCode + prefix + lineNumber

}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); */
