function solution(arr) {
    const answer = [0,0];
    function dfs(rowStart, colStart, rowEnd, colEnd){
        const base = arr[rowStart][colStart];
        let flag = true;
        
        for(let i = rowStart; i<rowEnd; i+=1){
            for(let j = colStart; j<colEnd; j+=1){
                if(base !== arr[i][j] ){
                    flag = false;
                    break;
                }
            }
        }
        
        if(flag){
            answer[base] += 1;
            return;
        }
        
        const half = (rowEnd - rowStart) / 2;
        dfs(rowStart, colStart, rowEnd - half, colEnd - half);
        dfs(rowStart, colStart + half, rowEnd - half, colEnd);
        dfs(rowStart + half, colStart, rowEnd, colEnd - half);
        dfs(rowStart + half, colStart + half, rowEnd, colEnd);
    }
    dfs(0,0, arr.length, arr.length);
    
    return answer;
}