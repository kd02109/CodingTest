function solution(n) {
    const maxcounts = Array.from({length: n+1}, ()=>0);
    maxcounts[1] = 1
    maxcounts[2] = 2
    
    for(let i=3; i<maxcounts.length; i+=1){
        maxcounts[i] = (maxcounts[i-2] + maxcounts[i-1])%1234567 ;
    }
    return maxcounts[n];
}