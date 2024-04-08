function solution(n) {
    if(n%2 === 1) return 0;
    const arr = Array.from({length:n+1}, ()=>0);
    const NUMBER = 1_000_000_007;
    arr[2] = 3;
    
    for(let i=4; i<=n; i+=2){
        arr[i] = arr[i-2] * 3 + 2;
        for(let j=2; j<i-2; j+=2 ){
            arr[i] += arr[j]*2;
        }
        arr[i] = arr[i] % NUMBER;
    }

    return arr[n];
}