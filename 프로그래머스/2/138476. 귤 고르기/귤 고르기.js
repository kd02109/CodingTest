function solution(k, tangerine) {
    const map = new Map();
    tangerine.forEach(kg => {
        if(map.has(kg)) map.set(kg, map.get(kg)+1);
        else map.set(kg, 1)
    })
    const arr = [...map].sort((a,b)=> b[1]-a[1]);
    
    let answer = 0;
    let count = 0;
    for(let i=0; i<arr.length; i++){
        count += arr[i][1];
        answer += 1;
        if(count >= k) break;
    }
    return answer;
}