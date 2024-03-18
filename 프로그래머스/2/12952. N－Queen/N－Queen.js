function solution(n) {
    const board = Array.from({length: n}, ()=> -1)
    let answer = 0;
    function isPossible(row, col, board){
        for(let i=0; i<row; i+=1){
            // 현재 col과 row 번째 배치된 queen col이 같을지 비교
            if(col === board[i]) return false;
            if(Math.abs(i-row) === Math.abs(col-board[i])) return false
        }
        return true;   
    }
    
    function dfs(row, board){
        const tmpBoard = [...board]

        if(row === n) {
            answer += 1;
            //console.log(tmpBoard)
        }
        
        for(let col=0; col<n; col+=1){
            if(isPossible(row, col, tmpBoard)){
                tmpBoard[row] = col;
                dfs(row+1, tmpBoard);
            }
        }
    }
    dfs(0, board);
    return answer
}