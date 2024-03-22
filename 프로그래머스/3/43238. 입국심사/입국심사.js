function solution(n, times) {
    let min = 1;
    let max = n * Math.max(...times);
    let answer = max;
    while(min <= max){
        const mid = Math.floor((min+max)/2)

        let people = 0;
        times.forEach(time => {
            people += Math.floor(mid/time);
        })
        
        if(people >= n){
            answer = mid;
            max = mid - 1;
        }else{
            min = mid + 1;
        }
    }
    return answer;
}

