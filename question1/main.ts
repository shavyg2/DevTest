export function isValidWalk(walk: string[]) {
    let walkLength: number = walk.length;
    if (walkLength === 10) {
        let norths: number = walk.filter(north => north === 'n').length;
        let souths: number = walk.filter(south => south === 's').length;
        let wests: number = walk.filter(west => west === 'w').length;
        let easts: number = walk.filter(east => east === 'e').length;
        if ((norths - souths === 0) && (wests - easts === 0)) {
            return true;
        }
    }

    return false;
}

