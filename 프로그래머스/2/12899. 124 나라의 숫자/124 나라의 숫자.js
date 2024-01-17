function solution(n) {
    const arr = ["4","1", "2"]
    const answer = []
    while(n != 0){
        const idx = n%3;
        n = Math.floor(n/3);
        if(idx === 0){
            n -= 1;
        }
        answer.push(arr[idx]);
        
    }
    return answer.reverse().join('')
}

