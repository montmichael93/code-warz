
function rot13(message){
  //your code here

  let cipher = '';
  let rot;
  
  for (let i = 0; i < message.length; i++) {
    
       rot = message.charCodeAt(i);
    
   if (rot >= 65  && rot <= 90) {
    cipher += String.fromCharCode((rot - 65 + 13) % 26 + 65);
  } 
 
  else if (rot >= 97  && rot <= 122) {
    cipher += String.fromCharCode((rot - 97 + 13) % 26 + 97);
  }
    if (rot < 65 || rot > 122) {
      cipher  += String.fromCharCode(rot)
    } else if (rot >= 91 && rot <=96) {
      cipher  += String.fromCharCode(rot)
    } 
  }
  return cipher
}
