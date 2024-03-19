function solution(number, k) {
    const stack = []
    const numbers = number.split('').map(Number);
    
    for(let i=0; i<numbers.length; i+=1){
        const num = numbers[i];
        while(stack.length && stack[stack.length-1] < num && k>0){
            stack.pop();
            k -=1;
        }
        stack.push(num)
    }
   
    return stack.slice(0,stack.length-k).join('')
}


