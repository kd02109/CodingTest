function solution(n) {
    const answer = []
    for(let i=2; i<=n; i++){
        while(n%i===0){
            n /= i;
            answer.push(i)
        }
    }
    return [...new Set(answer)]
}