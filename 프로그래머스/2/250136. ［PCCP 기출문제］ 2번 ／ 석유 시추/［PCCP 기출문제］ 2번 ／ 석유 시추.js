function solution(land) {
    let answer = 0;
    const visited = Array.from({length: land.length}, ()=>new Array(land[0].length).fill(0))
    const memo = {}
    let visitedIdx = 1;
    
    const bfs = (row,col) => {
        const dx = [1,-1,0,0];
        const dy = [0,0,1,-1];
        const queue = [[row,col]];
        visited[row][col] = visitedIdx;
        if(!memo[visitedIdx]) memo[visitedIdx] = 1;
        
        while(queue.length){
            const [x,y] = queue.shift();
            for(let i=0; i<dx.length; i+=1){
                let nx = x + dx[i];
                let ny = y + dy[i];
                if(nx>=0 && nx<land.length && ny>=0 && ny<land[0].length && land[nx][ny] === 1 && visited[nx][ny] === 0){
                    memo[visitedIdx] += 1;
                    visited[nx][ny] = visitedIdx;
                    queue.push([nx, ny]);
                }
            }
        }
    }
    
    for(let y=0; y<land[0].length; y+=1){
        const colSet = new Set();
        for(let x=0; x<land.length; x+=1){
            if(land[x][y] === 1 && visited[x][y] === 0){
                bfs(x,y);
                visitedIdx += 1;
            }
            if(visited[x][y]){
                colSet.add(visited[x][y]);
            }
        }

        const colSum = [...colSet].reduce((acc,cur)=> acc+memo[cur],0);
        answer = Math.max(answer, colSum);
    }
    return answer;
}