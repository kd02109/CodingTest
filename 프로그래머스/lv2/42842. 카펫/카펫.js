function solution(brown, yellow) {
    const sqrt = Math.floor(Math.sqrt(yellow))
    const answer = []
    for(let i=1; i<=sqrt; i++){
        if(yellow % i === 0){
            let value1 = yellow / i 
            let value2 = i
            const sum = (value1 * 2) + ((value2+2)*2)
            if(sum === brown){
                answer.push(value1+2)
                answer.push(value2+2)
            }
        }
    }
    
    answer.sort((a,b) => b-a)
    return answer;
}