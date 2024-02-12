function solution(weights) {
    const obj = {};
    const cals = [1,3/2, 2 , 4/3];
    let answer = 0;
    
    weights.sort((a,b)=>b-a).forEach((weight,idx)=>{
        cals.forEach(cal => {
            if(obj[weight*cal]) answer += obj[weight*cal]
        })
        if(obj[weight]) obj[weight] += 1;
        if(!obj[weight]) obj[weight] = 1;
    })
    
    return answer;
}

