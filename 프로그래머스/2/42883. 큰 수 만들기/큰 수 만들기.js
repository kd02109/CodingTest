function solution(number, k) {
    const nums = number.split('').map(item => Number(item));
    const answer = [];
    
    nums.forEach(num => {
        while(answer.length && k>0 && answer[answer.length-1] < num){
            answer.pop();
            k -= 1;
        }
        answer.push(num);
    })
    return answer.slice(0, number.length-k).join('');
}


