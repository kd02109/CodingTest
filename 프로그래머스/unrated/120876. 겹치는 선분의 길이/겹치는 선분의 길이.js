function solution(lines) {
    const answer = Array.from({length: 200} ,()=>0)
    lines.forEach(line => {
        const [start, last] = line
        for(let i=start; i<last; i++){
            answer[i+100] +=1
        }
    })
    return answer.filter(value => value>1).length
}