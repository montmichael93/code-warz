function humanReadable (seconds) {
  //return '';
  let minutes;
  let hour;
  let secondsunderminute = seconds % 60
  
  minutes = Math.floor((seconds % 3600) / 60);
  hour = Math.floor(seconds / 3600);
  
  if (hour < 10) {
    hour = '0' + hour;
  }
  
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  
    if (secondsunderminute < 10) {
   secondsunderminute = '0' + secondsunderminute;
  }
 
 return hour + ':' + minutes + ':' + secondsunderminute
  
} 
