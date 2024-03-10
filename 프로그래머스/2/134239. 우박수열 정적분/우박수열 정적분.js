function float(num){
    return Number.parseFloat(num).toFixed(1);
}

function solution(k, ranges) {
    const arr = [];
    const aria = [];
    const answer = [];
    while(true){
        arr.push(k)
        if(k===1)break;
        if(k%2 ===0){
            k = k/2;
        }
        else{
            k = k*3 + 1;
        }
    }
    
    for(let i=1; i<arr.length; i+=1){
        const sum = arr[i] + (arr[i-1]-arr[i])/2
        aria.push(sum)
    }
    
    const len = arr.length - 1;
    ranges.forEach(range => {
        let [x1,x2] = [range[0], len + range[1]];
        if(x1 > x2) answer.push(-1);
        else if(x1 === x2) answer.push(0);
        else {
            let sum = 0.0;
            for(let i=x1; i<x2; i+=1){
                sum += aria[i]
            }
            answer.push(sum)
        }
    })
    return answer
}