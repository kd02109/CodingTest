function solution(maps) {
    const dx = [0,1,0,-1];
    const dy = [1,0,-1,0];
    const map = maps.map(board => board.split(''))
    const X = "X"
        
    function calculateSum(start){
        const queue = [start];
        let total = Number(map[start[0]][start[1]]);
        map[start[0]][start[1]] = X;
        while(queue.length>0){
            const [x,y] = queue.shift()
            for(let i=0; i<dx.length; i+=1){
                const nx = x+dx[i];
                const ny = y+dy[i];
                if(nx>=0 && nx < map.length && ny >=0 && ny <map[0].length && map[nx][ny] !== "X"){
                    total += Number(map[nx][ny]);
                    queue.push([nx,ny]);
                    map[nx][ny] = X;
                }
            }
        }
        return total
    }
    
    const answer = [];
    
    for(let i=0; i<map.length; i+=1){
        for(let j=0; j<map[0].length; j+=1){
            if(map[i][j] !== X){
                const total = calculateSum([i,j])
                answer.push(total)
            }
        }
    }
    answer.sort((a,b)=> a-b)
    return answer.length === 0 ? [-1] : answer;
}