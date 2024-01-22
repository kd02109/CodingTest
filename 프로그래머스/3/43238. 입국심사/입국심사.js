function solution(n, times) {
    times.sort((a,b)=> a-b)
    let min = times[0]
    let max = times[times.length-1]*n
    
    while(min <= max){
        const mid = Math.floor((min+max)/2)
        let count = 0;
        
        times.forEach(time => {
            count += Math.floor(mid/time)
        })
        
        if(count >= n){
            max = mid-1
        }else{
            min = mid+1
        }
    }
    return max+1
}