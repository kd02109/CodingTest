function solution(arr) {
    const answer = [0,0];
    
    function def(row, col, len){
        let flag = true;
        
        for(let i=row; i<row+len; i++){
            for(let j=col; j<col+len; j++){
                if(arr[row][col] !== arr[i][j]) {
                    flag = false;
                    break;
                }
            }
        }    
        const half = len / 2;
        if(!flag){
            def(row, col, half);
            def(row+half, col, half);
            def(row, col+half, half);
            def(row+half, col+half, half);
        }else{
            arr[row][col] === 1 ? answer[1] += 1 : answer[0] += 1
        }
        
    }
    def(0,0,arr.length)
    return answer;
}