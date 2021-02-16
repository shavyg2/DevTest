function isValidWalk(walk) {
  
  let person = [0, 0]
  
  let finalDestination = [0, 0]
  let north = [0, 1]
  let east = [1, 0]
  let south = [0, -1]
  let west = [-1, 0]
 
  for (let i = 0; i <= 10; i++) {
    
    if (walk[i] === "n") {      
      person[0]++;
    }
    
    if (walk[i] === "e") { 
      person[1]++;
    }
   
    if (walk[i] === "s") { 
       person[0]--;
    }
   
    if (walk[i] === "w") { 
      person[1]--;
    }
  }

  if (person[0] === finalDestination[0] &&
    person[1] === finalDestination[1]) {
    return true;
  }
  else {
    return false;
  }
}
