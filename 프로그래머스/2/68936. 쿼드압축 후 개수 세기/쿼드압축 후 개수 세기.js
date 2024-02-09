function solution(arr) {
    const answer = [0,0];
   
    function dfs(row, col, half){
      let flag = true;
      const base = arr[row][col]
      for(let i=row; i<row+half; i+=1){
          for(let j=col; j<col+half; j+=1){
              if(arr[i][j] !== base) {
                  flag = false;
                  break;
              }
          }
          if(!flag) break;
      }
       half /= 2;
        if(!flag){
            dfs(row, col, half);
            dfs(row+half, col, half);
            dfs(row, col+half, half);
            dfs(row+half, col+half, half);
        }else{
            arr[row][col] === 1 ? answer[1] += 1 : answer[0] += 1
        }
    }
    dfs(0,0, arr.length);
    return answer
}