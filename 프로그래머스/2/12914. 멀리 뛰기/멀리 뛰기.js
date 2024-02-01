function solution(n) {
    const boxes = Array.from({length:n+1}, ()=>0);
    boxes[0] = 1;
    boxes[1] = 1;
    for(let i=2; i<=n; i++){
        boxes[i] = (boxes[i-2]+boxes[i-1])%1234567
    }
    return boxes[n]
}