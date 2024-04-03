function solution(k, ranges) {
    const collatz = [k];
    
    while(k !== 1){
        if(k%2 === 0){
             k/=2;
        }else{
            k = k*3 + 1
        }
        collatz.push(k);
    }
    
    // 넓이 구하기 
    const sum = [0];
    for(let i=1; i<collatz.length; i+=1){
        sum.push(sum[i-1]+collatz[i] + (collatz[i-1]-collatz[i])/2)
    }
    
    // 정답 구하기
    const answer = [];
    ranges.forEach(range => {
        let [start, end] = range;
        end += collatz.length-1;
        if(start > end) answer.push(-1)
        else answer.push(sum[end] - sum[start])
    })

    return answer
}