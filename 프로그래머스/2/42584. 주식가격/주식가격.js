function solution(prices) {
    const answer = Array.from({length: prices.length}, ()=> 0);
    const stack = [];
    for(let i=0; i<prices.length; i+=1){
        while(stack.length && prices[i] < prices[stack[stack.length-1]]){
            const idx = stack.pop();
            answer[idx] = i-idx;
        }
        stack.push(i)
    }
    
    return answer.map((val, idx)=> {
        if(val !== 0) return val
        return prices.length - (idx+1)
    })
}