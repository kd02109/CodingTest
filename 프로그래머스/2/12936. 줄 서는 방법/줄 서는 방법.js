function solution(n, k) {
    const answer = [];
    let arr = Array.from({length: n}, (_,idx)=>idx+1);

    let nth = k-1;
    
    while(answer.length !== n){
        const fact = factorial(arr.length-1);
        const index = Math.floor(nth/fact);
        answer.push(arr[index]);
        nth = nth % fact;
        arr = arr.filter((_,idx)=> idx !== index);
    }
    return answer;
}

function factorial(n){
    let sum = 1;
    for(let i=2; i<=n; i+=1){
        sum *= i;
    }
    return sum;
}