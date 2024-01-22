function solution(n){
    let total = n;
    let answer = 0;
    
    while(total >0){
        if(total%2 ===0){
            total /= 2;
        }else{
            total -= 1;
            answer += 1;
        }
    }
    return answer;
}
