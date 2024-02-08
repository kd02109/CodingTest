function solution(numbers) {
    const answer = [];
    numbers.forEach(num => {
        if(num%2 === 0) answer.push(num+1);
        else{
            const bit = num.toString(2);
            const zeroIdx = bit.lastIndexOf('0')
            let newBit = ""
            if(zeroIdx === -1){
                newBit = "10"+bit.slice(1);
            }else{
                newBit = bit.slice(0,zeroIdx) + "10" + bit.slice(zeroIdx+2)
            }
            const changeNum = parseInt(newBit,2);
            answer.push(changeNum)
        }
    })
    return answer
}
