const checkPrime = (num) => {
    const sqrt = Math.sqrt(num);
    for(let i=2; i<=sqrt; i+=1){
        if(num%i === 0) return false;
    }
    return true
}

function solution(n, k) {
    const num = n.toString(k)
    const arr = String(num).split('0').filter(item => Number(item) !== 1 && Number(item) !==0).map(item => Number(item))
    let answer = 0;
    arr.forEach(item => {
        if(checkPrime(item)) answer += 1;
    })
    return answer
}

