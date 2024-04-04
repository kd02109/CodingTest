function solution(n) {
    const board = Array.from({length: n}, ()=> -1)
    let answer = 0;
    const check = (row, col, board) => {
        for(let i=0; i<row; i+=1){
            if(col === board[i]) return false;
            if(Math.abs(row-i) === Math.abs(col-board[i])) return false;
        }
        return true;
    }
    
    const dfs = (layer, arr) =>{
        if(layer === n){
            answer += 1;
        }

        for(let i=0; i<n ; i+=1){
            if(check(layer, i, arr)){
              arr[layer] = i;
              dfs(layer+1, [...arr])  
            } 
        }
    }
    
    dfs(0,board)
    return answer;
}