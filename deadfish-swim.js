// Return the output array, and ignore all non-op characters
function parse( data ){
  let strArray;
  let counter = 0;
  let deadFish= []
  let test;
  
  strArray = data.split('')
  
for (var i = 0; i < strArray.length; i++) {
  
      if (strArray[i] === 'i') {
        counter += 1
      } 
        else if (strArray[i] === 'd') {
        counter -= 1
      } 
         else if (strArray[i] === 's') {
        counter = Math.pow(counter, 2);
      } 
        else if (strArray[i] === 'o') {
        deadFish.push(counter)
      }  
}
  return deadFish
  
}
