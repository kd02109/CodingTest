function solution(board){
    let answer = 0;
    if(board.length <=1 || board[0].length <=1) return 1;
    
    for(let i=1; i<board.length; i+=1){
        for(let j=1; j<board[0].length; j+=1){
            if(board[i][j] > 0){
                const min = Math.min(board[i-1][j-1], board[i][j-1], board[i-1][j])
                board[i][j] = min+1
                answer = Math.max(answer, board[i][j])
            }
        }
    }
    return answer **2
}