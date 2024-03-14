function solution(board) {
    const boards = board.map(row => row.split(''));
    let start = [0,0]
    
    
    for(let i=0; i<boards.length; i+=1){
        for(let j=0; j<boards[0].length; j+=1){
            if(boards[i][j] === "R"){
                start = [i,j];
                break;
            }
        }
    }
    
    function bfs(){
        const queue = [[...start,0]];
        const dx = [0,0,1,-1];
        const dy = [1,-1,0,0];
        boards[start[0]][start[1]] = 0;
        while(queue.length){
            let [x,y,time] = queue.shift();
            for(let i=0; i<dx.length; i+=1){
                let nx = x + dx[i]
                let ny = y + dy[i]
                while(nx>=0 && nx <boards.length && ny >=0 && ny < boards[0].length && boards[nx][ny] !== "D"){
                    nx += dx[i];
                    ny += dy[i];
                }
                nx -= dx[i];
                ny -= dy[i];

                if(boards[nx][ny] === "G") return time + 1;
                if(boards[nx][ny] !== 0){
                    boards[nx][ny] = 0;
                    queue.push([nx,ny,time+1])
                } 
            }
        }
        return -1
    }
    const answer = bfs();
    return answer;
}