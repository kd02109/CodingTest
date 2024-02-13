function solution(storey) {
    let answer = Infinity;
    
    function dfs(storey, count){
        if(count > answer) return;
        if(storey === 0){
            answer = Math.min(answer, count);
            return;
        }
        const res = storey%10
        dfs(Math.floor(storey/10), count+res);
        dfs(Math.floor(storey/10)+1, count + (10-res));
    }
    dfs(storey,0)
    return answer
}