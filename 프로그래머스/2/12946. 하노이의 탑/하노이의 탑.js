function solution(n) {
    const answer = [];
    function dfs(from, to, other, n){
        if(n === 0) return;
        dfs(from,other,to,n-1);
        answer.push([from, to]);
        dfs(other, to, from, n-1)
    }
    dfs(1,3,2,n)
    return answer;
}
