function getSum(arr){
    return arr.reduce((acc, cur) => acc + cur, 0);
}

function solution(queue1, queue2) {
    const arr = [...queue1, ...queue2];
    const total = getSum(arr);
    
    if(total % 2 !== 0) return -1
    const mid = total / 2;
    let queue1Sum = getSum(queue1);
    let base = 0;
    let answer = 0;
    for(let i=queue1.length; i<arr.length; i+=1){
        if(queue1Sum === mid) {
            return answer;
        }
        while(queue1Sum > mid){
            queue1Sum -= arr[base];
            base += 1;
            answer += 1;
        }        
        if(queue1Sum === mid) {
            return answer;
        }
        queue1Sum += arr[i];
        answer += 1;
    }
    return -1;
}
