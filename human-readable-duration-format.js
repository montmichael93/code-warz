function formatDuration (seconds) {
  // Complete this function
  let minutes;
  let hour;
  let secondsunderminute = seconds % 60
  let days;
  let years;
  
  minutes = Math.floor((seconds % 3600) / 60);
  hour = Math.floor(seconds / 3600);
  days = Math.floor(hour / 24)
  years = Math.floor(days / 365)
  
  
  
  
  if (seconds === 0) {
    return 'now'
  }
    
  if (hour === 0 && minutes === 0 && seconds > 1 && seconds < 60 ) {
    return seconds + ' seconds'
  } // 00:00:02
  
  if (hour === 0 && minutes === 0 && seconds === 1 ) {
    return seconds + ' second'
  } // 00:00:01
  
  

  
  if (hour === 0 && minutes < 59 && minutes > 1 && secondsunderminute === 0) {
    return minutes + ' minutes'
  } // 00:02:00
  
  
  if (hour === 0 && minutes === 1 && secondsunderminute === 0) {
    return minutes + ' minute'
  } // 00:01:00
  
  
    if (hour < 24 && hour > 1 && minutes === 0 && secondsunderminute === 0) {
    return hour + ' hours'
  }  // 02:00:00
  
  
  
  
  if (hour === 1 && minutes === 0 && secondsunderminute === 0) {
    return hour + ' hour'
  } // 01:00:00
  
  
  
  

  
  
 
  
   if (hour === 0 && minutes === 1  && secondsunderminute === 1 ) {
    return  minutes + ' minute ' + 'and ' + secondsunderminute + ' second'
  } // 00:01:01
  
  
  if (hour === 0 && minutes < 60 && minutes > 1  && secondsunderminute === 1) {
    return minutes + ' minutes' + ' and ' + secondsunderminute + ' second'
  } // 00:02:01
  
    if (hour === 0 && minutes === 1 && secondsunderminute  < 60 && secondsunderminute > 1) {
    return minutes + ' minute' + ' and ' + secondsunderminute + ' seconds'
  } // 00:01:02
  
    if (hour === 0 && minutes < 60 && minutes > 1 && secondsunderminute  < 60 && secondsunderminute > 1) {
    return minutes + ' minutes' + ' and ' + secondsunderminute + ' seconds'
  }  // 00:02:02
  
  
  
  
  
  
  if (hour === 1 && minutes === 1 && secondsunderminute === 1) {
    return hour + ' hour' + minutes + ' minute' + ' and ' + secondsunderminute + ' second'
  } // 01:01:01
  
     
  
  if (hour > 1 && hour < 24 && minutes === 1 && secondsunderminute === 1) {
    return hour + ' hours' + minutes + ' minute' + ' and ' + secondsunderminute + ' second'
  } // 02:01:01
  
   if (hour > 1 && hour < 24  && minutes > 1 && minutes < 60  && secondsunderminute === 1) {
    return hour + ' hours' + minutes + ' minutes' + ' and ' + secondsunderminute + ' second'
  } // 02:02:01
  
   
     if (hour > 1 && hour < 24  && minutes > 1 && minutes < 60  && secondsunderminute < 60 && secondsunderminute > 1) {
    return hour + ' hours, ' + minutes + ' minutes' + ' and ' + secondsunderminute + ' seconds'
  } //02:02:02
  
  
  
       if (hour === 1  && minutes === 1   && secondsunderminute < 60 && secondsunderminute > 1) {
    return hour + ' hour' + ', ' + minutes + ' minute' + ' and ' + secondsunderminute + ' seconds'
  } //01:01:02
  
  
  
  
  

           if ( days === 1 && hour > 1 && hour > 24 && hour % 24 > 1  && minutes > 1 && minutes < 60  && secondsunderminute < 60 && secondsunderminute > 1) {
    return days + ' day, ' + hour % 24 + ' hours, ' + minutes + ' minutes '  + 'and ' + secondsunderminute + ' seconds'
  }
  

  
       if ( days < 365 && hour > 1 && hour > 24 && hour % 24 === 1  && minutes > 1 && minutes < 60  && secondsunderminute < 60 && secondsunderminute > 1) {
    return days + ' days, ' + hour % 24 + ' hour, ' + minutes + ' minutes ' + 'and ' + secondsunderminute + ' seconds'
  }
   
         if ( days < 365 && hour > 1 && hour > 24 && hour % 24 > 1  && minutes > 1 && minutes < 60  && secondsunderminute < 60 && secondsunderminute > 1) {
    return days + ' days, ' + hour % 24 + ' hours, ' + minutes + ' minutes '  + 'and ' + secondsunderminute + ' seconds'
  }
  
  if ( days >= 1 && hour > 1 && hour > 24 && hour % 24 > 1  && minutes === 1  && secondsunderminute < 60 && secondsunderminute > 1) {
    return days + ' days, ' + hour % 24 + ' hours, ' + minutes + ' minute '  + 'and ' + secondsunderminute + ' seconds'
  }
  
  
  
   if ( days >= 1 && hour > 1 && hour > 24 && hour % 24 > 1  && minutes === 1  && secondsunderminute < 60 && secondsunderminute > 1) {
    return days + ' days, ' + hour % 24 + ' hours, ' + minutes + ' minute '  + 'and ' + secondsunderminute + ' seconds'
  }
  
  
  
  
    if ( years === 0 && days > 1 && hour > 24 && hour % 24 > 0  && minutes > 1  && secondsunderminute < 60 && secondsunderminute > 0) {
   return days + ' days, ' + hour % 24 + ' hours, ' + minutes + ' minutes '  + 'and ' + secondsunderminute + ' second'
  }
  

  
  

         if ( years === 0 &&  hour % 24 === 0  && minutes > 1 && minutes < 60  && secondsunderminute < 60 && secondsunderminute > 1) {
    return days + ' days, ' + minutes + ' minutes ' + 'and ' + secondsunderminute + ' seconds'
  }
  
  
     if ( years === 0 && hour > 1 && hour > 24 && hour % 24 === 0  && minutes > 1 && minutes < 60  && secondsunderminute < 60 && secondsunderminute > 1) {
    return days + ' days, ' + minutes + ' minutes ' + 'and ' + secondsunderminute + ' seconds'
  }
    
   if ( years === 0 && days < 365 && hour % 24 === 0  && minutes > 1 && minutes < 60  && secondsunderminute === 0) {
    return days + ' days ' +  'and ' + minutes + ' minutes'
    
  }
  
   if ( years === 0 && hour > 1 && hour > 24  && minutes > 1 && minutes < 60  && secondsunderminute === 0) {
    return days + ' days, ' + hour % 24 + ' hours' + ' and ' + minutes + ' minutes'
    
  }
  
    if ( years === 0 && hour > 1 && hour > 24  && minutes > 1 && minutes < 60  && secondsunderminute === 0) {
    return days + ' days, ' + hour % 24 + ' hours' + ' and ' + minutes + ' minutes'
    
  }
  
  
  
    if ( years === 0 && hour > 1 && hour > 24  && minutes === 0  && secondsunderminute > 0) {
    return days + ' days, ' + hour % 24 + ' hours' + ' and ' + secondsunderminute + ' seconds'
    
  }
  
  
  
  
  
          if ( years > 1  && days > 365  && hour > 1 && hour > 24 && hour % 24 > 1  && minutes > 1 && minutes < 60  && secondsunderminute < 60 && secondsunderminute > 1) {
  return  years + ' years, '+ days % 365  + ' days, ' + hour % 24 + ' hours, ' + minutes + ' minutes '  + 'and ' + secondsunderminute + ' seconds'
  
  }
  
  
      if ( years === 1 ||days > 365  && hour > 1 && hour > 24 && hour % 24 > 1  && minutes > 1 && minutes < 60  && secondsunderminute < 60 && secondsunderminute > 1) {
   return  years + ' year, '+ days % 365  + ' days, ' + hour % 24 + ' hours, ' + minutes + ' minutes '  + 'and ' + secondsunderminute + ' seconds'
  
  }
  
  
 
  
  
  
      if ( years > 1 && days > 365 &&  hour > 1 && hour > 24 && hour % 24 > 1  && minutes > 1 && minutes < 60  && secondsunderminute === 0) {
    return  years + ' years, ' +  days % 365 + ' days, ' + hour % 24 + ' hours ' + 'and ' + minutes + ' minutes'
  }
  
  
  
  
  
    if ( years > 1 && days < 365 &&  hour > 1 && hour > 24 && hour % 24 > 1  && minutes > 1 && minutes < 60  && secondsunderminute === 0) {
    return  years + ' years, ' +  days + ' days, ' + hour % 24 + ' hours ' + 'and ' + minutes + ' minutes '
  }
  
    
    if ( years > 1 && days > 365 &&  hour > 1 && hour < 24  && minutes > 1 && minutes < 60  && secondsunderminute === 0) {
    return  years + ' years, ' +  days % 365 + ' days, ' + hour % 24 + ' hours ' + 'and ' + minutes + ' minutes '
  }
  
  
    if ( years > 1 && days > 365 &&  hour > 1 && hour > 24  && minutes > 1 && minutes < 60  && secondsunderminute === 0) {
    return  years + ' years, ' +  days % 365 + ' days, ' + hour % 24 + ' hours ' + 'and ' + minutes + ' minutes'
  }
  
  
  
  
   if ( years > 1 && days > 365 &&  hour > 1 && hour > 24 && hour % 24 > 1  && minutes > 1 && minutes < 60  && secondsunderminute > 0) {
    return  years + ' years, ' +  days % 365 + ' days, ' + hour % 24 + ' hours, ' + minutes + ' minutes' + ' and ' + secondsunderminute + ' second'
  }
  
  
   if ( years > 1 && days > 365 &&  hour > 1 && hour > 24 && hour % 24 === 1  && minutes > 1 && minutes < 60  && secondsunderminute > 0) {
    return  years + ' years, ' +  days % 365 + ' days, ' + hour % 24 + ' hour, ' + minutes + ' minutes' + ' and ' + secondsunderminute + ' seconds'
  }
 
}
