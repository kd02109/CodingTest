function fact(n){
    let sum = 1;
    for(let i=1; i<=n; i+=1){
        sum *= i;
    }
    return sum;
}


function solution(n, k) {
    let arr = Array.from({length : n}, (_, idx)=>idx+1);
    const answer = [];
    let idx = k-1;
    while(arr.length){
        const factorial = fact(arr.length-1);
        const q = Math.floor(idx/factorial);
        answer.push(arr[q]);
        arr.splice(q,1);
        idx = idx%factorial
    }
    return answer;
}
