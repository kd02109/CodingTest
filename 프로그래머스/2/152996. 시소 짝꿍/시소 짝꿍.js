function solution(weights) {
    const obj = {};
    const cases = [1,2,3/2,4/3];
    let answer = 0;
    weights.sort((a,b)=>b-a);
    weights.forEach(weight=>{
        cases.forEach(cal => {
            if(obj[weight*cal]) answer += obj[weight*cal];
        })
        if(obj[weight]) obj[weight] += 1;
        else obj[weight] = 1;
    })
    return answer;
}

