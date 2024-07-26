let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip={
  retreat(){
    console.log(retreatMessage);
},
takeOff(){
  console.log('Spim... Borp... Glix... Blastoff!')
}
}

alienShip.retreat();
alienShip.takeOff();

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  let greenEnergy=obj=>{
    obj['Fuel Type']='avocado oil';
  }
  let remotelyDisable=obj=>{
    obj.disabled=true;
  }
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  console.log(spaceship);
  
  