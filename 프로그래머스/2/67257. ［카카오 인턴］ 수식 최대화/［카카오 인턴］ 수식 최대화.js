function solution(expression) {
    const priors = [
        ["-", "+" , "*"],
        ["-", "*" , "+"],
        ["+", "-" , "*"],
        ["+", "*" , "-"],
        ["*", "-" , "+"],
        ["*", "+" , "-"],
    ]    

    let answer = 0;
    
    priors.forEach(prior => {
        // 핵심
        let temp = expression.split(/(\D)/)
        prior.forEach(cal => {
            while(temp.includes(cal)){
                const idx = temp.indexOf(cal)
                let num = 0
                if(cal === "+") num = Number(temp[idx-1]) + Number(temp[idx+1])
                if(cal === "-") num = Number(temp[idx-1]) - Number(temp[idx+1])
                if(cal === "*") num = Number(temp[idx-1]) * Number(temp[idx+1])   
                temp = [...temp.slice(0,idx-1), num, ...temp.slice(idx+2)]
            }
        })
        answer = Math.max(answer, Math.abs(temp[0]));
    })
 

    return answer;
}