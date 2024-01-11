function solution(left, right) {
    let answer = 0;
    for(let i=left; i<=right; i++){
        if(i**(1/2) === Math.floor(i**(1/2))) answer -=i
        else answer +=i
    }
    return answer
}