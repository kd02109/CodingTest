function solution(w, h) {
    const GCD = (a,b) => b===0? a : GCD(b, a%b);
    const gcd = GCD(w,h);
    return (w*h) - (w+h-gcd);
}