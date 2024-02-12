function solution(queue1, queue2) {
    const totalArr = [...queue1, ...queue2]
    const sum = totalArr.reduce((acc, cur)=>acc+cur)
    let division = sum/2;
    
    
    if(sum%2 !== 0) return -1
    
    let base = 0;
    let count = 0;
    let answer = Infinity
    let baseSum = queue1.reduce((acc, cur)=> acc+cur)
    
    if(baseSum === division) return 0
    
    for(let i=queue1.length; i<totalArr.length; i+=1){
        while(baseSum > division && baseSum >0){
            baseSum -= totalArr[base];
            base += 1;
            count += 1;
        }
        if(baseSum < division){
            baseSum += totalArr[i];
            count += 1;
        }
        if(baseSum === division) answer = Math.min(answer, count);
    }
    return answer === Infinity? -1 : answer;
}
