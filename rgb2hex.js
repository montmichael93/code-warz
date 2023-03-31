function rgb(r, g, b){
  // complete this function 
  let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
 
  let rQuotient;
  let rRemainder;
  let rsecondQuotient;
  let rsecondRemainder;
  
  let gQuotient;
  let gRemainder;
  let gsecondQuotient;
  let gsecondRemainder;
  
  let bQuotient;
  let bRemainder;
  let bsecondQuotient;
  let bsecondRemainder;

  
   if (r > 255) {
    r = 'FF';
  }
  
  if (r <= 0) {
    r = '00';
   
  } else if (!isNaN(r)) {
    rQuotient = Math.floor(r/16);
    rRemainder = r % 16;
    
    if (rQuotient >= 16) {
      rsecondQuotient = Math.floor(rQuotient / 16)
      rsecondRemainder = Math.floor(rQuotient % 16)
      r = hex[rsecondQuotient] + hex[rsecondRemainder]
    } else {
      r = hex[rQuotient] + hex[rRemainder]
    }
    
    
  }  
  
  //return r
    if (g > 255) {
    g = 'FF';
  }
  
   if (g <= 0) {
    g = '00';
   
  } else if (!isNaN(g)) {
    gQuotient = Math.floor(g/16);
    gRemainder =  g % 16;
    
    if(gQuotient >= 16) {
      gsecondQuotient = Math.floor(gQuotient / 16)
      gsecondRemainder = Math.floor(gQuotient % 16)
      g = hex[gsecondQuotient] + hex[gsecondRemainder]
    } else {
      g = hex[gQuotient] + hex[gRemainder]
    }   
  }  
 
  //return g
  
  if (b > 255) {
    b = 'FF';
  }
  
   if (b <= 0) {
    b = '00';
     
  } else if (!isNaN(b)) {
    bQuotient = Math.floor(b/16);
    bRemainder = b % 16;
    
    if (bQuotient >= 16) {
      bsecondQuotient = Math.floor(bQuotient / 16)
      bsecondRemainder = Math.floor(bQuotient % 16)
      b = hex[bsecondQuotient] + hex[bsecondRemainder]
    } else {
      b = hex[bQuotient] + hex[bRemainder]
    }
    
    
  }  
  

 
  
  return r + g + b
  
}
