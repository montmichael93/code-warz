function goodVsEvil(good, evil){
  let goodPowerLevel = [];
  let goodPowers;
  let goodKingdomStrength;
  var evilPowerLevel = [];
  let evilPowers;
  let evilEmpireStrength;
  
 if (good) {
    goodPowers = good.split(' ')
  } else {
    goodPowers = 0
  }
  
  if (evil) {
    evilPowers = evil.split(' ')
  } else {
    evilPowers = 0
  } 
  
    for (var i = 0; i < goodPowers.length; i++) {
    goodPowerLevel.push(Number(goodPowers[i]))
  }
     goodPowerLevel[0] = goodPowerLevel[0] * 1
     goodPowerLevel[1] = goodPowerLevel[1] * 2
     goodPowerLevel[2] = goodPowerLevel[2] * 3
     goodPowerLevel[3] = goodPowerLevel[3] * 3
     goodPowerLevel[4] = goodPowerLevel[4] * 4
     goodPowerLevel[5] = goodPowerLevel[5] * 10
     
   for (var x = 0; x < evilPowers.length; x++) {
    evilPowerLevel.push(Number(evilPowers[x]))
  }
  
    evilPowerLevel[0] = evilPowerLevel[0] * 1
    evilPowerLevel[1] = evilPowerLevel[1] * 2
    evilPowerLevel[2] = evilPowerLevel[2] * 2
    evilPowerLevel[3] = evilPowerLevel[3] * 2
    evilPowerLevel[4] = evilPowerLevel[4] * 3
    evilPowerLevel[5] = evilPowerLevel[5] * 5
    evilPowerLevel[6] = evilPowerLevel[6] * 10
    
 goodKingdomStrength =  goodPowerLevel.reduce((accumulator, currentValue) => accumulator + currentValue);
 evilEmpireStrength =  evilPowerLevel.reduce((accumulator, currentValue) => accumulator + currentValue);
    
   if (goodKingdomStrength > evilEmpireStrength) {
    return "Battle Result: Good triumphs over Evil"
  } else if (goodKingdomStrength < evilEmpireStrength) {
    return "Battle Result: Evil eradicates all trace of Good"
  } else {
    return "Battle Result: No victor on this battle field"
  } 
  
}

