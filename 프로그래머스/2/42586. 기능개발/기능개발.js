function solution(progresses, speeds) {
    const days = progresses.map((item,idx) => {
        const speed = speeds[idx]
        return Math.ceil((100-item)/speed)
    })
    const answer = [];
    let sum = 1;
    let max = days[0];
    for(let i=1; i<days.length; i+=1){
        const day = days[i];
        if(max >= day){
            sum += 1;
        }else{
            answer.push(sum);
            sum = 1;
            max = day;
        }
    }
    answer.push(sum);
    return answer
}