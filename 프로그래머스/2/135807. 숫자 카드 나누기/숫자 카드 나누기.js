function solution(arrayA, arrayB) {
    let answer = 0;
    const GCD = (a,b) => b===0 ? a : GCD(b, a%b);
    const gcdA = arrayA.reduce((acc,cur) => GCD(acc,cur));
    const gcdB = arrayB.reduce((acc,cur) => GCD(acc,cur));
    
    if(gcdA === 1 && gcdB === 1) return 0;
    if(gcdA !== 1 && arrayB.filter(num => num%gcdA !==0).length === arrayB.length) answer = gcdA
    if(gcdB !== 1 && arrayA.filter(num => num%gcdB !==0).length === arrayA.length) answer = Math.max(gcdB, answer)
    return answer;
}