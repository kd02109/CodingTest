function solution(N, stages) {
    let total = stages.length;
    const block = {}
    for(let i of stages){
        block[i] ? block[i] += 1 : block[i] = 1;
    }
    
    const answer = []
    for(let i=1; i<=N; i++){
        if(block[i]){
            const fail = block[i]/total
            total -= block[i]
            answer.push([i,fail])
        }else{
            answer.push([i,0])
        }
    }
    return answer.sort((a,b)=> b[1]-a[1]).map(fail => fail[0])
}