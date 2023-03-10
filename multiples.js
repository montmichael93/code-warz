function solution(number){
    let multiOfFive = 0;
  let multiOfThree = 0;
  
  for (var i = 0; i < number; i++) {
    if (i % 5 === 0) {
      multiOfFive += i
    } else if (i % 3 === 0) {
      multiOfThree += i
    } 
  }
  return multiOfFive + multiOfThree
}
