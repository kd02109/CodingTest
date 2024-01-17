function solution(number, k) {
    const answer = []
    for(let num of number){
        while(answer.length > 0 && k>0 && answer[answer.length-1] < num){
            answer.pop();
            k -= 1;
        }
        answer.push(num)
    }
    
    return answer.join('').slice(0, number.length-k)
}


