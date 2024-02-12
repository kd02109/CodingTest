function solution(n) {
    const num = ["4","1","2"];
    let answer = ''
    while(n > 0){
        answer =  num[n%3] + answer
        if(n%3 === 0){
            n = Math.floor(n/3)-1
        }else{
            n = Math.floor(n/3)
        }
    }
    return answer
}
