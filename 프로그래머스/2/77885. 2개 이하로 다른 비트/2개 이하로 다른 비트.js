function solution(numbers) {
    const answers =[];
    numbers.forEach(num => {
        if(num%2 === 1) {
            const bit = num.toString(2);
            const zeroIdx = bit.lastIndexOf("0")
            
            if(zeroIdx === -1){
                answers.push(Number.parseInt("10"+bit.slice(1),2))    
            }else{
                answers.push(Number.parseInt(bit.slice(0,zeroIdx)+"10"+bit.slice(zeroIdx+2),2))    
            }
        }
        else {
            answers.push(num + 1);
        }
    })
    
    return answers;
}
