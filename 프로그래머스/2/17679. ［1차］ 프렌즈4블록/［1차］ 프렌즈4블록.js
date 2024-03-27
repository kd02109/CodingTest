function solution(m, n, board) {
    board = board.map(item => item.split(''));
    
    while(true){
        const possible = [];
        for(let i=0; i<m-1; i+=1){
            for(let j=0; j<n-1; j+=1){
                const base = board[i][j];
                if(base === board[i][j+1] && base === board[i+1][j] && base === board[i+1][j+1] && base !== 0) possible.push([i,j]);
            }
        }
        
        // 정답 도출
        if(!possible.length){
            return board.flat().filter(item => item === 0).length ;
        }
        
        // 겹치는 block 삭제
        possible.forEach(item => {
            const [x,y] = item;
            board[x][y] = 0;
            board[x+1][y] = 0;
            board[x][y+1] = 0;
            board[x+1][y+1] = 0;
        });
        
        // board 재배열
        // 밑에서부터 위로 바꾸기
        for(let i=m-1; i>0; i-=1){
            for(let j=0; j<n; j+=1){
                for(let z = i-1; z>=0 && !board[i][j]; z-=1){
                    if(board[z][j]){
                        board[i][j] = board[z][j];
                        board[z][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}