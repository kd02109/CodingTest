function solution(n, works) {
    // 남은 작업이 n보다 작은 경우
    const total = works.reduce((acc,cur)=> acc + cur, 0);
    if(total <= n) return 0
    
    
    let answer = 0;
    works.sort((a,b) => b-a);
    while(n){
        const max = works[0];
        for(let i=0; i<works.length; i+=1){
            if(works[i] >= max){
                n -= 1;
                works[i] -= 1;
            }
            if(!n) break;
        }
    }
    return works.reduce((a,b) => a + b**2, 0);
}