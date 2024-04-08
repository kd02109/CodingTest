function solution(targets) {
    targets.sort((a,b) => b[0] - a[0]);
    
    let start = targets[0][0];
    let answer = 1;
    
    for(let i=1; i<targets.length; i+=1){
        const [nextStart, nextEnd] = targets[i];
        if(start >= nextEnd){
            answer +=1;
            start = nextStart;
        }    
    }
    return answer
}