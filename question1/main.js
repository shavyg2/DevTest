function isValidWalk() {
    // create an empty array to contain the walking directions
    walk = [];
    // generate a random number between 1 - 15, this will be the amount of directions pushed to the walk array
    var randomLength = Math.floor(Math.random() * 10) + 1;
    //console.log('random length = ' + randomLength);

    for( var i= 0; i < randomLength; i++ ){
      var j = Math.floor(Math.random() * 4) + 1;
      //console.log('random J = ' + j);
      if (j === 1){
        walk.push('n');
      } else if (j === 2){
        walk.push('s');
      } else if (j === 3){
        walk.push('e');
      } else if (j === 4){
        walk.push('w');
      }
    }
    console.log(walk);

    var longitude = 0;
    var latitude = 0;
    var results = false;

    if(walk.length == 10){
      results = true;
      console.log(results);
      return results;
      } else {

      for(var k = 0; k < walk.length; k++ ){

          if(walk[k] === 'n'){
            // 'n' or north will be +1
          latitude++;
          } else if(walk[k] === 's'){
            // 's' or south will be -1
          latitude--;
          } else if(walk[k] === 'w'){
            // 'w' or west will be +1
          longitude++;
          } else if(walk[k] === 'e'){
            // 'e' or east will be -1
          longitude--;          }
      }
      results = false
      console.log(results)
    }
}

isValidWalk()