function solution(arr) {
    const GCD = (a,b) => b === 0? a : GCD(b, a%b);
    return arr.reduce((acc, cur)=>   acc*cur/GCD(acc,cur), 1)
}


