function solution(order) {
    const stack = []
    const original = Array.from({length:order.length}, (_,idx)=>order.length - idx)
    order.reverse()
    let answer = 0;
    
    while(original.length > 0){       
        const value = original.pop();

        if(value === order[order.length-1]){

            answer += 1;
            order.pop()
        }else{
            stack.push(value);
        }
        
        while(stack.length > 0 && stack[stack.length-1] === order[order.length-1]){
              answer +=1
              stack.pop()
              order.pop()
        }
    }
    
    return answer;
}