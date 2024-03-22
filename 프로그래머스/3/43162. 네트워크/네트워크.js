function solution(n, computers) {
    const visited = Array.from({length:n}, ()=>0);
    
    const bfs = (node) => {
        const queue = [node];
        while(queue.length){
            const idx = queue.shift();
            visited[idx] = 1;
            for(let i=0; i<n; i+=1){
                if(computers[idx][i] === 1 && !visited[i]){
                    queue.push(i);
                }
            }
        }
    }
    
    let answer = 0;
    
    for(let i=0; i<n; i+=1){
        if(!visited[i]){
            bfs(i);
            answer += 1;
        }
    }
    return answer
}