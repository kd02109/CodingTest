function solution(board) {
    function getCnt(item, board){
        let total = 0;
        for(let i=0; i<board.length; i+=1){
            for(let j=0; j<board.length; j+=1){
                if(board[i][j] === item) total += 1; 
            }
        }
        return total;
    }
    
    function countWin(item, board){
        const wins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
        const boards = board.join('');
        let total = 0;
        wins.forEach(win => {
            if(boards[win[0]] === item && boards[win[1]] === item && boards[win[2]] === item) total += 1;
        })
        return total
    }
    
    let oWin = countWin("O", board);
    let xWin = countWin("X", board);
    let oCnt = getCnt("O", board);
    let xCnt = getCnt("X", board);
    console.log(oWin, xWin)
    
    if(xWin && xCnt !== oCnt) return 0;
    if(oWin && oCnt <= xCnt) return 0;
    if(oCnt-xCnt >= 2) return 0;
    if(xCnt > oCnt) return 0;

    return 1;
}