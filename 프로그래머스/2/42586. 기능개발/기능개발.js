function solution(progresses, speeds) {
    const answer = [];
    const rest = progresses.map((progress,idx) => {
        return Math.ceil((100-progress)/speeds[idx])
    })
    rest.reverse();
    let base = rest.pop();
    let count = 1
    while(rest.length > 0){
        if(rest[rest.length-1] <= base){
            count += 1;
        }else {
            answer.push(count);
            base = rest[rest.length-1];
            count = 1;
        }
        rest.pop();
    }
    answer.push(count);
    return answer
}