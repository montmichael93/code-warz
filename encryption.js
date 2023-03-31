function encrypt(text, rule) {
 // return null;
  let input;
  let cipher = '';
  
     if(text === '') {
     return text
   }
    
 for (let i = 0; i < text.length; i++) {
     input = text.charCodeAt(i);
    
   cipher += String.fromCharCode((input + rule) % 256);
   
 }
  return cipher
}
