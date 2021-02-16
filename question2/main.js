function findOutlier(arr){
    let checker = {even:[],odd:[]}
    arr.forEach((item) => item%2==0 ? checker['even'].push(item) : checker['odd'].push(item));
    console.log(checker['even'].length < checker['odd'].length ? checker['even'][0] : checker['odd'][0]);
    }
    
findOutlier([2, 4, 0, 100, 4, 12, 17, 2602, 36])
