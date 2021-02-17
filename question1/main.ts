export function isValidWalk(walk: string[]) {
    if(!walk || walk.length != 10) return false;
    let directions = ["s","n","w","e"];
    let dictDirect = {"s":"n","w":"e","n":"s","e":"w"};
    for(let i = 0; i <walk.length; i++){
        if(directions.indexOf(walk[i])<0) return false;
        let opposite = dictDirect[walk[i]];
        if(opposite != walk[walk.length-i-1]) return false;
    }
    return true;
}

