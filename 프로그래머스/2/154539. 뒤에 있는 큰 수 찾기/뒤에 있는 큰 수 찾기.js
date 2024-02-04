function solution(numbers) {
    const answer = Array.from({length:numbers.length},()=>-1)
    const stack = []
    
    for(let i=0; i<numbers.length; i+=1){
        while(stack.length>0 && numbers[stack[stack.length-1]] < numbers[i]){
            const idx = stack.pop();
            answer[idx] = numbers[i];
        }
        stack.push(i)
    }
    return answer;
}