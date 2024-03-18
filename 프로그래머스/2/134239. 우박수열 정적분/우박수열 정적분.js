function solution(k, ranges) {
    const collatz = [k];
    const sum = [0];
    while(k !== 1){
        if(k%2 === 1) k= k * 3 + 1;
        else k/=2;
        collatz.push(k);
    }
    for(let i=1; i<collatz.length; i+=1){
        sum[i] = sum[i-1] + ((collatz[i] + collatz[i-1])/2);
    }
    const answer = [];
    ranges.forEach(([start, end])=> {
        end += collatz.length-1;
        if(start > end) answer.push(-1);
        else answer.push(sum[end] - sum[start])  ;
    })
    return answer;
}