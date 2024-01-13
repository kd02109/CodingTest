function solution(number, limit, power) {
    let answer = 0
    for(let i=1; i<=number; i++){
        let count = 0
        for (let j=1; j<=Math.sqrt(i); j++){
            if(Math.sqrt(i) === j) count += 1;
            else if (i%j ===0) count +=2;
            if(count > limit) break;
        }
        count > limit? answer+=power : answer += count;
    }
    return answer;
}

