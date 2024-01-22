function solution(sequence, k) {
    const answer = [0,sequence.length];
    let start = 0;
    let end = 0;
    let sum = 0;
    for(end; end<sequence.length; end+=1){
        sum +=sequence[end]
        while(sum > k){
            sum -= sequence[start];
            start += 1
        }
        if(sum === k){
            const [prevStart, prevEnd] = answer;
            if(end-start <prevEnd-prevStart){
                answer[0] = start;
                answer[1] = end;
            }
        }
    }
    return answer;
}