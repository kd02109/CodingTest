function solution(tickets) {
    tickets.sort()
    const visited = Array.from({length:tickets.length}, ()=>0);
    const answer = ["ICN"];
    function dfs(target, layer){
        if(layer === tickets.length) return true;
        for(let i=0; i<tickets.length; i+=1){
            const [start, next] = tickets[i];
            if(start === target && !visited[i]){
                visited[i] = 1;
                answer.push(next);
                if(dfs(next, layer+1)) return true;
                visited[i] = 0;
            }
        }
        answer.pop();
        return false;
    }
    
    
    dfs("ICN",0);
    return answer;
}