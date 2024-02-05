function solution(storey) {
    let answer = Infinity;
    function dfs(num,count){
        if(count > answer) return;
        if(num === 0){
            answer = count;
            return; 
        }
        let res = num % 10;
        dfs(Math.floor(num/10), count + res);
        dfs(Math.floor(num/10)+1, count+(10-res));
    }
    dfs(storey,0)
    return answer;
}