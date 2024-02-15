function solution(n, m, section) {
    let answer = 0;
    let max = 0;
    section.forEach(blank => {
        if(max === 0){
            max = blank + m - 1;
            answer += 1;
        }
        if(blank > max){
            answer += 1;
            max = blank + m -1;
        }
    })
    return answer
}