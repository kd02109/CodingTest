function solution(s) {
    const strNum = ["zero","one", "two", "three", "four", "five" ,"six", "seven", "eight", "nine"];
    let answer = s;
    strNum.forEach((item, idx)=> {
        
        answer = answer.replaceAll(item, idx)
    })
    return Number(answer)
}