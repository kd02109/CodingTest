function solution(board) {
    const boards = board.map(item => item.split(''));
    let start = []
    let end = []
    
    for(let i=0; i<boards.length; i+=1){
        for(let j=0; j<boards[0].length; j+=1){
            if(boards[i][j] === "R") start = [i, j];
            if(boards[i][j] === "G") end = [i, j];
        }
    }
    
    function BFS(start, end){
        const dx = [1,0,-1,0];
        const dy = [0,1,0,-1];
        const queue = []
        
        queue.push([...start,0])
        boards[start[0]][start[1]] = 1
        while(queue.length){
            let [x,y, time] = queue.shift();
            for(let i=0; i<dx.length; i+=1){
                let nx = x+dx[i];
                let ny = y+dy[i];
                while(nx>=0 && nx<board.length && ny>=0 && ny<board[0].length && boards[nx][ny] !== "D"){
                    nx += dx[i];
                    ny += dy[i];
                }
                nx -= dx[i];
                ny -= dy[i];
                
                if(nx === end[0] && ny === end[1]){
                    return time + 1
                }
                if(boards[nx][ny] !== 1){
                    queue.push([nx,ny,time+1])
                    boards[nx][ny] = 1
                }
            }
        }
        return -1;
    }
    const answer = BFS(start, end);

    return answer;
}