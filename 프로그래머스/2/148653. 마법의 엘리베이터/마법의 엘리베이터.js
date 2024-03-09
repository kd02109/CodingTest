function solution(storey) {
    let answer = Infinity;
    function dfs(floor, count){
        if(count > answer) return;
        if(floor === 0){
            answer = Math.min(count, answer);
            return;
        }
        const rest = floor % 10;
        dfs(Math.floor(floor/10), count+rest);
        dfs(Math.floor(floor/10)+1, count+(10-rest));
    }
    dfs(storey, 0)
    return answer;
}