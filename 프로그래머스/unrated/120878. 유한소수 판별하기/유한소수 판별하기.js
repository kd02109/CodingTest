function solution(a, b) {
    const GCD = (a,b) => b === 0? a : GCD(b,a%b);
    const gcd = GCD(a,b);
    return calculate(b/gcd);
}

function calculate(num){
    while(num%2 ===0){
        num /= 2;
    }
    while(num%5 ===0){
        num /= 5;
    }
    return num === 1? 1 : 2
}