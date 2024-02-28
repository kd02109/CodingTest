function solution(numbers) {
    const answer = Array.from({length:numbers.length}, ()=>-1);
    const stack = [];
    for(let i=0; i<numbers.length; i+=1){
        while(stack.length && stack[stack.length-1][0] < numbers[i]){
            const [value, idx] = stack.pop();
            answer[idx] = numbers[i];
        }
        stack.push([numbers[i], i]);
    }
    return answer
}