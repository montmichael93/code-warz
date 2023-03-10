function count (string) {  
  // The function code should be here
   let freqCount;
  let frequency = {};
  let sum = 0;
  let total = [];
  
  if (string.length === 0) {
    return {};
  } else {
  for (let i = 0; i < string.length; i++) {
   let character = string[i];
    if (!isNaN(character) || /[a-zA-Z]/.test(character)) {
      character = character.toLowerCase();
     frequency[character] = (frequency[character] || 0) + 1;
      
    }
    
    }
  }
  
  return frequency
}
