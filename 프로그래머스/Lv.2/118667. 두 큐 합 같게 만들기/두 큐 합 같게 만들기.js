function solution(queue1, queue2) {
    let qSum1 = getSum(queue1);
    let qSum2 = getSum(queue2);
    const total = [...queue1, ...queue2];
    
    if((qSum1 + qSum2)%2 !== 0 ) return -1
    
    const hSum = (qSum1 + qSum2)/2
    let start = 0
    let end = queue1.length
    let cnt = 0
    
    while(cnt <=queue1.length*3){
        if(hSum === qSum1) return cnt

        if(hSum > qSum1){
            qSum1 += total[end]
            end++
        }else{
            qSum1 -= total[start]
            start++
        }
        cnt++
    }
    return -1

}

function getSum(arr){
    return arr.reduce((acc, cur)=>acc+cur,0)
}