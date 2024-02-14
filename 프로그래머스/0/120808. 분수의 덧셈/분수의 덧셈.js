function solution(numer1, denom1, numer2, denom2) {
    const lcd  = denom1 * denom2/GCD(denom1, denom2)
    const numer = numer1*(lcd/denom1) + numer2*(lcd/denom2)
    const lastGcd = GCD(lcd,numer)
    
    return [numer/lastGcd,lcd/lastGcd]
}

const GCD = (a,b) => b===0? a : GCD(b, a%b);