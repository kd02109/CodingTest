function solution(n) {
    const answer = [];
    function dfs(layer, from, to, other){
        if(layer === n) return;
        dfs(layer+1, from, other, to);
        answer.push([from, to])
        dfs(layer+1, other, to, from);
    }
    dfs(0,1,3,2)
    return answer
}
