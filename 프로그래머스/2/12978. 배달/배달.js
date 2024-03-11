function solution(N, road, K) {
    const visited = Array.from({length: N+1}, ()=>Infinity);
    visited[1] = 0;
    
    const qu = [[1,0]]
    
    while(qu.length){
        let [start, time] = qu.pop();
        for(let i=0; i<road.length; i+=1){
            const [base, end, len] = road[i];
            if(start === base && visited[end] > len + time){
                visited[end] = len + time;
                qu.push([end, time+len])
            }
            if(start === end && visited[base] > len + time){
                visited[base] = len + time;
                qu.push([base, time+len])
            }
        }
    }
    return visited.filter(value => value <= K).length
}