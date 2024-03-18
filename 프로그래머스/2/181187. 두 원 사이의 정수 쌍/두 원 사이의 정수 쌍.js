function solution(r1, r2) {
    let answer = 0;
    for(let i=1; i<=r2; i+=1){
        let min = Math.ceil(Math.sqrt(r1**2 - i**2));
        let max = Math.floor(Math.sqrt(r2**2 - i**2));
        if(i > r1) min = 0;
        answer += max - min + 1;
    }
    return answer * 4;
}