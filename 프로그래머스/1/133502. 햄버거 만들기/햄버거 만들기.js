function solution(ingredient) {
    const stack = []
    let answer = 0;
    
    for(let i=0; i<ingredient.length; i++){
        stack.push(ingredient[i])
        const hamberger = stack.slice(-4).join('')
        if(hamberger === '1231'){
            answer +=1;
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
        }
    }
    return answer
}