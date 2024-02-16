function solution(number, k) {
    const arr = number.split('').map(item => Number(item));
    const answer = []
    arr.forEach((num)=>{
        while(k>0 && answer.length >0 && answer[answer.length-1] < num ){
            k -= 1;
            answer.pop();
        }
        answer.push(num);
    })
    console.log(answer)
    return answer.join('').slice(0, number.length-k)
}


