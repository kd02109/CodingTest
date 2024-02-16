function solution(number, limit, power) {
    let answer = 0;

    for(let i=1; i<=number; i+=1){
        const sqrt = Math.sqrt(i);
        let count  =  0;
        for(let j=1; j<=sqrt; j+=1){
            if(i%j === 0){
                count = j*j === i ? count + 1 : count + 2;
            }
        }
        answer = count > limit ? answer + power : answer + count;
    }
    return answer
}

