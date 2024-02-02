function solution(n, k) {
    const change = n.toString(k);
    let answer = 0;
    const arr = change.split('0').map(item => Number(item)).filter(item => item !==1 && item !==0);
    arr.forEach(item => {
        if(checkPrime(item)) answer += 1
    })
    return answer
}

function checkPrime(num){  
    const sqrt = Math.sqrt(num);
    for(let i=2; i<=sqrt; i+=1){
        if(num%i === 0) return false;
    }
    return true;
}