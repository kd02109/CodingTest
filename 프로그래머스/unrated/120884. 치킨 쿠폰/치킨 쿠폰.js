function solution(chicken) {
    let rest = 0
    let answer = 0 
    
    while(chicken >=10){
        rest = chicken%10;
        chicken = Math.floor(chicken/10);
        answer += chicken;
        chicken +=rest
    }
    return answer
}