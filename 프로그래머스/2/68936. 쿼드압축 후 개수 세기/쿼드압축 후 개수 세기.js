function solution(arr) {
    const answer = [0,0];
    
    function dfs(col,row, colEnd, rowEnd){
        const base = arr[row][col];
        let isPossible = true;
        for(let i=row; i<rowEnd; i+=1){
            for(let j=col; j<colEnd; j+=1){
                if(base !== arr[i][j]){
                    isPossible = false;
                    break;
                } 
            }
        }
        if(isPossible){
            answer[base] += 1;
            return;
        }
        
        const colHalf = (colEnd-col)/2;
        const rowHalf = (rowEnd-row)/2;
        dfs(col, row, colEnd - colHalf, rowEnd - rowHalf);
        dfs(col+colHalf, row, colEnd, rowEnd - rowHalf);
        dfs(col, row + rowHalf, colEnd - colHalf, rowEnd);
        dfs(col+colHalf, row+rowHalf, colEnd, rowEnd);
    }
    
    dfs(0,0,arr.length, arr[0].length);
    
    return answer
}