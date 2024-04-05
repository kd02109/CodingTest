function solution(begin, end) {
    const answer = [];
    const checkBlock = (value) => {
        if(value === 1) return 0;
        
        const sqrt = Math.sqrt(value);
        const divisor = [];
        
        for(let i=2; i<=sqrt; i+=1){
            if(value % i ===0){
                divisor.push(i);
                if(value/i <= 10 ** 7) return value/i;
            }
        }
        if(divisor.length) return Math.max(...divisor);
        return 1;
    }
    
    for(let i = begin; i<=end; i+=1){
        answer.push(checkBlock(i));
    }
    
    return answer
}