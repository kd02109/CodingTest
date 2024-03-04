function solution(m, n, board) {
    const boards = board.map(row => row.split(''));
    const dx = [1,0,1];
    const dy = [0,1,1];

    while(true){
        
        let possible = [];
        for(let i=0; i<m-1; i+=1){
            for(let j=0; j<n-1; j+=1){
                const base = boards[i][j]
                if(base === boards[i+1][j] && base === boards[i][j+1] && base === boards[i+1][j+1] && base !== 0) possible.push([i,j]);
            }
        }
        
        if(possible.length === 0) break;

        possible.forEach(item => {
            const [x,y] = item;
            boards[x][y] = 0
            boards[x][y+1] = 0
            boards[x+1][y] = 0
            boards[x+1][y+1] = 0
        })
        

        for(let i=m-1; i>1; i-=1){
            for(let j=0; j<n+1; j+=1){
                for(let k=i-1; k>=0 && !boards[i][j]; k-=1){
                    if(!boards[i][j] && boards[k][j]){
                        boards[i][j] = boards[k][j];
                        boards[k][j] = 0;
                    }
                }
            }
        }
    }
    return boards.flat().filter(item => !item).length;
    
}