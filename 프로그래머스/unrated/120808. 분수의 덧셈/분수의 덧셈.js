function solution(numer1, denom1, numer2, denom2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    
    const denom = lcm(denom1,denom2)
    const numer = numer1 * (denom/denom1) + numer2 * (denom/denom2)
    
    const lastGCD = gcd(denom,numer);

    return [numer/lastGCD,denom/lastGCD]
}