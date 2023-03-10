function disemvowel(str) {
  if (str.includes('a') || str.includes('A')) {
    str = str.replaceAll('a', '')
    str = str.replaceAll('A', '')
  } if (str.includes('e') || str.includes('E')) {
    str = str.replaceAll('e', '')
    str = str.replaceAll('E', '')
  } if (str.includes('i') || str.includes('I')) {
    str = str.replaceAll('i', '')
    str = str.replaceAll('I', '')
  } if (str.includes('o') || str.includes('O')) {
    str = str.replaceAll('o', '')
    str = str.replaceAll('O', '')
  } if (str.includes('u') || str.includes('U')) {
    str = str.replaceAll('u', '')
    str = str.replaceAll('U', '')
  }
  return str;
}
