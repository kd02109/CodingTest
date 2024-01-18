function solution(s){
    const stack = []
    for(let i = 0; i<s.length; i+=1){
        if(stack[stack.length-1] === "(" && s[i]===")") stack.pop();
        else{
          stack.push(s[i]);
        }
        if(stack[stack.length-1] === ")") return false;
    }
    return stack.length === 0 ? true : false
}


