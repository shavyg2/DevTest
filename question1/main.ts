export function isValidWalk(walk: string[]) {
  let x = 0;
  let y = 0;

  if (walk.length == 10) {
    for (let i = 0; i < walk.length; i++) {
      if (walk[i] == "n") {
        y++;
      } else if (walk[i] == "s") {
        y--;
      } else if (walk[i] == "e") {
        x++;
      } else if (walk[i] == "w") {
        x--;
      }
    }

    if (x == 0 && y == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
