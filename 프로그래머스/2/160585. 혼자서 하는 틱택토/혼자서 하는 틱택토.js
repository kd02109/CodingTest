function solution(board) {
// 이긴 상황 O -> O가 1개 더 많음 
// 이긴 상황 X -> X와 O의 개수가 같음 
// 비긴 상황 혹은 진행 상황 O, X의 개수가 같음 혹은 O의 개수가 1개 더 많음 
    const newBoard = board.join('').split('')
    let countX = getCount(newBoard, "X");
    let countO = getCount(newBoard, "O");
    
    if(countO < countX || countO-countX > 1) return 0
    
    let winO = checkWin(newBoard, "O");
    let winX = checkWin(newBoard, "X");
    
    if(winO && winX) return 0
    if(winO > 1 && winX > 1) return 0
    if(winO  && countO-countX !== 1) return 0
    if(winX  && countO-countX !== 0) return 0
    return 1
}

function getCount(board,base){
    return board.filter(item => item === base).length
}

function checkWin(board, base){
    let count = 0;
    const winArr = [
        [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ]
    winArr.forEach(win => {
        const [a,b,c] = win
        if(board[a] === base && board[b] === base && board[c]===base) count+=1
    })
    return count
}