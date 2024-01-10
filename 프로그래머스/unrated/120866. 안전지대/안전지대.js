
function solution(board) { 
    const len = board.length
    const dx = [-1,0,1,-1,1,-1,0,1]
    const dy = [-1,-1,-1,0,0,1,1,1]
    
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++)
            if(board[i][j] === 1){
                for(let z=0; z<dx.length; z++){
                    const nx = i +dx[z];
                    const ny = j +dy[z];
                    if(nx >= 0 && nx < len && ny >= 0 && ny < len){
                        if(board[nx][ny] !== 1) board[nx][ny] = 2
                    }
                }
            }
    }
    
   return board.flat().filter(item => item ===0).length
}
