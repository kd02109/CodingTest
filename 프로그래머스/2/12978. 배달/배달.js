function solution(N, road, K) {
    const visited = Array.from({length: N+1}, ()=>Infinity);
    visited[1] = 0;
    const queue = [[1,0]];
    
    while(queue.length){
        const [node, dist] = queue.shift();
        for(let i=0; i<road.length; i+=1){
            const data = road[i];
            if(data[0] === node && visited[data[1]] > dist + data[2]){
                visited[data[1]] = dist+data[2]
                queue.push([data[1], dist+data[2]])
            }
            
            if(data[1] === node && visited[data[0]] > dist+data[2]){
                visited[data[0]] = dist+data[2]
                queue.push([data[0], dist+data[2]])
            }
        }
    }
    console.log(visited)
    return visited.filter(item => item <=K).length
}