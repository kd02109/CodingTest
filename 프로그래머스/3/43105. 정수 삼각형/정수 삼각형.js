function solution(triangle) {
    var answer = 0;
    const memo = Array.from({length: triangle.length}, ()=> new Array(triangle.length).fill(-1))
    const dfs = (row, col) => {
        if(row === triangle.length) return 0
        if(memo[row][col] !== -1) return memo[row][col] 
        memo[row][col]  =  triangle[row][col] + Math.max(dfs(row+1, col), dfs(row+1, col+1));
        return memo[row][col]
    }
    return dfs(0, 0);
}