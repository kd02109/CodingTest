function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const priceMap = prices.map((item, idx)=> [item,idx]);
    const stack = [];
    
    for(let i=0; i<priceMap.length; i+=1){
        while(stack.length && stack[stack.length-1][0] > priceMap[i][0]){
            const [item,idx] = stack.pop();
            answer[idx] = priceMap[i][1] - idx;
        }
        stack.push(priceMap[i])
    }
    
      while (stack.length > 0) {
        const [_,idx] = stack.pop();
        answer[idx] = priceMap.length - (idx + 1);
      }
    return answer;
}