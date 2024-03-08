function solution(n) {
    const num = ["4", "1", "2"];
    let answer = "";
    while(n > 0){
        const idx = n % 3
        answer = num[idx] + answer;
        n = Math.floor(n/3);
        if( idx === 0) n = n - 1;
    }
    return answer;
}
