function XO(str){
  let frequency = {};
  
  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    if (/[a-zA-Z]/.test(character)) {
      character = character.toLowerCase();
      frequency[character] = (frequency[character] || 0) + 1;
    }
  }
  if (frequency.o != frequency.x) {
    return false
  } else {
    return true
  }
}
