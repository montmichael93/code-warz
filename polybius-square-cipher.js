function polybius (text) {
 // TODO
  
  let cipher = '';
  
  
  for (var i = 0; i < text.length; i++ ) {
  
    if (text[i]=== ' ') {
      cipher += ' '
    }
    
     if (text[i]=== 'A') {
       cipher += '11'
     } if (text[i]=== 'B') {
       cipher += '12'
     }
     if (text[i]=== 'C') {
       cipher += '13'
     }
       if (text[i]=== 'D') {
       cipher += '14'
     } if (text[i]=== 'E') {
       cipher += '15'
     } 
      if (text[i]=== 'F') {
       cipher += '21'
     } if (text[i]=== 'G') {
       cipher += '22'
     } 
     if (text[i]=== 'H') {
       cipher += '23'
     }  if (text[i]=== 'I') {
       cipher += '24'
     } if (text[i]=== 'J') {
       cipher += '24'
     } if (text[i]=== 'K') {
       cipher += '25'
     } if (text[i]=== 'L') {
       cipher += '31'
     } if (text[i]=== 'M') {
       cipher += '32'
     } if (text[i]=== 'N') {
       cipher += '33'
     } if (text[i]=== 'O') {
       cipher += '34'
     } if (text[i]=== 'P') {
       cipher += '35'
     } if (text[i]=== 'Q') {
       cipher += '41'
     } if (text[i]=== 'R') {
       cipher += '42'
     } if (text[i]=== 'S') {
       cipher += '43'
     } if (text[i]=== 'T') {
       cipher += '44'
     } if (text[i]=== 'U') {
       cipher += '45'
     } if (text[i]=== 'V') {
       cipher += '51'
     } if (text[i]=== 'W') {
       cipher += '52'
     } if (text[i]=== 'X') {
       cipher += '53'
     } if (text[i]=== 'Y') {
       cipher += '54'
     } if (text[i]=== 'Z') {
       cipher += '55'
     } 
       
  }
  
  return cipher
  
  
}
