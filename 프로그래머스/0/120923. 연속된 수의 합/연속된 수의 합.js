function solution(num, total) {
    let start = -100;
    let answer = [];
    while(true){
        let sum = 0;
        let base = start;
        for(let i=0; i<num; i+=1){
            sum += base;
            answer.push(base);
            base += 1;
        }
        if(sum === total) break;
        answer = []
        start += 1;
    }
    return answer
}   