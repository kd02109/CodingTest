function solution(s) {
    let answer = 0;
    let arr = [...s]
    for(let i=0; i<arr.length; i+=1){
        if(check(arr)) answer +=1;
        arr = [...arr.slice(1),arr[0]];
    }
    return answer
}
    
function check(arr){
    const checkArr = [...arr];
    const stack = []
    while(checkArr.length){
        const value = checkArr.shift();
        if(value === "[" || value === "(" || value === "{") stack.push(value);
        else if(stack[stack.length-1] === "[" && value ==="]") stack.pop();
        else if(stack[stack.length-1] === "(" && value ===")") stack.pop();
        else if(stack[stack.length-1] === "{" && value ==="}") stack.pop();
        else{
            stack.push(value);
            break;
        }
    }
    return stack.length === 0 ? true : false;
}

