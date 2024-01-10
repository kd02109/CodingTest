function solution(numlist, n) {
    numlist.sort((a,b)=> {
        const aToN = Math.abs(n-a);
        const bToN = Math.abs(n-b);
        if(aToN === bToN) return b-a
        return aToN-bToN
    })
    return numlist
}