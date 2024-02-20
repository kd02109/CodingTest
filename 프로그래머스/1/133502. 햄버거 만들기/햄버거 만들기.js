function solution(ingredient) {
    let answer = 0;
    const stack = []
    const reversedIngredient = ingredient.reverse()
    while(ingredient.length){
        stack.push(ingredient.pop());
        if(stack.length >=4 && stack.slice(stack.length-4).join('') === "1231"){
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            answer += 1;
        }
    }
    return answer;
}