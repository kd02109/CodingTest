function solution(sequence, k) {
    let answer = [0, sequence.length];
    let sum = 0;
    let start = 0;
    
    for(let i=0; i<sequence.length; i+=1){
        sum += sequence[i];
        while(sum > k && start < sequence.length){
            sum -= sequence[start];
            start += 1;
        }
        if(sum === k){
            if(answer[1] - answer[0] > i-start) answer = [start,i];
        }
    }
    return answer
}