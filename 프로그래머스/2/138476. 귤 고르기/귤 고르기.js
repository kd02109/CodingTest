function solution(k, tangerine) {
    const obj = {}
    tangerine.forEach(orange => {
        if(obj[orange]) obj[orange] += 1;
        else obj[orange] = 1;
    })
    const values = Object.values(obj)
    values.sort((a,b)=> b-a);
    
    
    let sum = 0;
    let answer = 0;
    for(let i=0; i<values.length; i+=1){
        if(sum >= k) break;
        sum += values[i];
        answer += 1;
    }
    
    return answer
}