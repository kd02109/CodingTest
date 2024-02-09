function solution(numbers) {
    const answer = numbers.map(num=> `${num}`).sort((a,b)=>{
        return (b+a) - (a+b)
    })
    return answer[0] === "0"? "0" : answer.join('')
}
