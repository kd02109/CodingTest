function solution(N, stages) {
    const answer = Array.from({length : N+1}, (_,idx)=> ({stage: idx, fail: 0}))
    let total = stages.length
    const obj = {}
    stages.forEach((stage)=>{
        if(!obj[stage]) obj[stage] = 1;
        else obj[stage] += 1;
    })

    const set = [...new Set(stages)].filter(item => item <= N).sort((a,b)=> a-b);
 
    set.forEach(stage => {
        if(obj[stage]){
            answer[stage]["fail"] = (obj[stage]/total)
            total -= obj[stage];
        }
    })

    return answer.slice(1).sort((a,b)=> b.fail-a.fail).map(item => item.stage)
}