function solution(N, road, K) {
    const minTime = Array.from({length: N+1}, ()=>Infinity);
    const lines = Array.from({length : N+1}, ()=> []);
    road.forEach(([node,node2,time])=>{
        lines[node].push({to:node2, cost: time});
        lines[node2].push({to:node, cost: time});
    })
    
    const queue = [{to:1, cost:0}];
    minTime[1] = 0;
    
    while(queue.length){
        const {to} = queue.pop();
        lines[to].forEach(next => {
            if(minTime[next.to] > next.cost + minTime[to]){
                minTime[next.to] = next.cost + minTime[to]
                queue.push(next)
            }
        })
    }
    return minTime.filter(item => item <=K).length

}