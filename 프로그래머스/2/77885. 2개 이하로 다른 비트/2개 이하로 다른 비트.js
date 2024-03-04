function solution(numbers) {
    const answer = [];
    numbers.forEach(num => {
        if(num%2 === 0) answer.push(num+1);
        else{
            const bit = "0"+num.toString(2);
            const zeroIdx = bit.lastIndexOf("0");
            const newBit = bit.slice(0,zeroIdx) + "10" + bit.slice(zeroIdx+2);
            const newNum = parseInt(newBit, 2);
            answer.push(newNum);
        }
    })
    return answer;
}
