function firstNonRepeatingLetter(s) {
  // Add your code here
  let frequency = {};
  let character;
  let upperCharacter;

  if (s.length === 0) {
    return '';
  } else {
    for (let i = 0; i < s.length; i++) {
       character = s[i]
       upperCharacter = s[i].toUpperCase();
      if (!isNaN(character) || /[a-zA-Z]/.test(character) || /[a-zA-Z]/.test(upperCharacter) || /[^\w\s]/g.test(character)) {
      // frequency[character] = (frequency[character] || 0) + 1;
        frequency[upperCharacter] = (frequency[upperCharacter] || 0) + 1;
      }
    }
    for (let i = 0; i < s.length; i++) {
      character = s[i]
       upperCharacter = s[i].toUpperCase();
      if (frequency[character] === 1 || frequency[upperCharacter] === 1) {
        return character;
      }
    }
    return '';
  }
}
