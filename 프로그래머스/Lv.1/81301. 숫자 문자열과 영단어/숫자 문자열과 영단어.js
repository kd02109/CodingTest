function solution(s) {
    const strNum = ["zero","one", "two", "three", "four", "five" ,"six", "seven", "eight", "nine"];
    let answer = s;
    for(let i=0; i<strNum.length; i++){
        let arr = answer.split(strNum[i]);
        answer = arr.join(i);
    }
    return Number(answer)
}