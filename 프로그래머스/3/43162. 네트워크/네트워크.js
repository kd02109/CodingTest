function solution(n, computers) {
    const visited = new Array(n).fill(0);
    let answer = 0;
    
    const bfs = (node) => {
        visited[node] = 1;
        const queue = [node];
        
        while(queue.length){
            const start = queue.shift()
            for(let i=0; i<computers[start].length; i+=1){
                if(computers[start][i] === 1 && !visited[i]){
                    visited[i] = 1;
                    queue.push(i);
                }
            }
        }
    }
    
    for(let i=0; i<n; i+=1){
        if(!visited[i]){
            bfs(i);
            answer += 1;
        }
    }
    
    return answer;
}