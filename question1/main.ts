export function isValidWalk(walk: string[]) {
    let ns = 0,
      ew = 0;
    if (walk.length === 10) {
      walk.map((eachWalk) => {
        if (eachWalk == "n") ns += 1;
        if (eachWalk == "s") ns -= 1;
        if (eachWalk == "e") ew += 1;
        if (eachWalk == "w") ew -= 1;
      });
    } else return false;
    return ns === 0 && ew === 0;
  }
  