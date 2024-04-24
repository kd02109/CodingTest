function solution(n, s) {
    if(n > s) return [-1];
    if(n === s) return new Array(n).fill(1);
    const answer = [];
    while(n > 0){
        const maxNum = Math.floor(s/n);
        n -= 1;
        s -= maxNum;
        answer.push(maxNum)
    }
    answer.sort((a,b) => a-b);
    return answer;
}