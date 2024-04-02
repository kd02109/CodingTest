function getFactorial(len){
    let factorial = 1;
    for(let i=1; i<=len; i+=1){
        factorial *= i;
    }
    return factorial;
}

function solution(n, k) {
    const num = Array.from({length:n}, (_,idx)=> idx+1);
    const answer = [];
    let idx = k-1
    while(answer.length !== n){
        const factorial = getFactorial(num.length-1);
        const curIdx = Math.floor(idx/factorial);
        idx = idx%factorial;
        answer.push(num[curIdx]);
        num.splice(curIdx, 1);
    }
    return answer;
}
