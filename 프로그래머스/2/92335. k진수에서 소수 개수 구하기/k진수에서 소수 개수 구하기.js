function solution(n, k) {
    let answer = 0;
    const changeNum = n.toString(k).split("0").map(item => Number(item)).filter(item => item !== 1 && item !==0)

    for(let num of changeNum){
        if(checkPrime(num)) answer+=1
    }
    return answer
}

function checkPrime(number){
    const prime = Math.sqrt(number)
    
    for(let i=2; i<=prime; i++){
       if(number % i === 0){
           return false
       }
    }
    
    return true
}