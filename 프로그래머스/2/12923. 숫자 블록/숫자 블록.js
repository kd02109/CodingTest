function solution(begin, end) {
    var answer = [];
    function checkdivisor(num){
        if(num === 1) return 0;
        const divisors = [];
        const sqrt = Math.sqrt(num);
        for(let i=2; i<=sqrt; i+=1){
            if(num%i === 0){
                divisors.push(i);
                if(num/i <= 10 ** 7) return num/i;
            }
        }
        if(divisors.length) return Math.max(...divisors)
        return 1;
    }
        
    for(let i=begin; i<=end; i+=1){
        const divisor = checkdivisor(i);
        answer.push(divisor);
    }
    return answer;
}