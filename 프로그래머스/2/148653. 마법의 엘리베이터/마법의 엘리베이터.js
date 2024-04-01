function solution(storey) {
    let answer = 100_000_000;
    function dfs(storeis, count){
        if(count > answer) return;
        
        if(storeis === 0){
            answer = Math.min(answer, count);
            return
        };
        
        const quad = Math.floor(storeis/10);
        const dist = storeis % 10;
        
        dfs(quad, count+dist);
        dfs(quad+1, count+(10-dist));
    }
    dfs(storey,0);
    
    return answer;
}