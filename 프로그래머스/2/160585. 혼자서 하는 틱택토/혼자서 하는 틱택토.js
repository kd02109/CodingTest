function solution(board) {
    const boards = board.join('').split('');
    const O = "O";
    const X = "X"
    
    function getCounting(symbol){
        return board.join('').split('').filter(item => item===symbol).length;
    }
    const numO = getCounting(O);
    const numX = getCounting(X);
    
    if(numX > numO) return 0;
    if(numO - numX > 1) return 0;
   
    function checkWin (symbol){
        let possible = 0;
        const wins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
        wins.forEach(win => {
            if(boards[win[0]] === symbol && boards[win[1]] === symbol && boards[win[2]] === symbol) possible +=1;
        })
        return possible;
    }
    
    const winO = checkWin(O);
    const winX = checkWin(X);
    
    if(winO && winX) return 0
    if(winO && numO - numX !== 1) return 0
    if(winX && numO - numX !== 0) return 0
    
    return 1;
}