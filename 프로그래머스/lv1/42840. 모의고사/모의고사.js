function solution(answers) {
    const one = [1,2,3,4,5]
    const two = [2,1,2,3,2,4,2,5]
    const three = [3,3,1,1,2,2,4,4,5,5]
    const score = [0,0,0]
    
    for(let i=0; i<answers.length; i++){
        one[i%one.length] ===  answers[i] ? score[0] += 1 :null
        two[i%two.length] === answers[i] ? score[1] += 1: null
        three[i%three.length] === answers[i] ? score[2] +=1 : null
    }
    const max = Math.max(...score)
    const answer = []
    for (let i=0; i<score.length; i++){
        max === score[i]? answer.push(i+1) : null
    }
    
    return answer
}