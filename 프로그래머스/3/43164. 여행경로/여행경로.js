function solution(tickets) {
    tickets.sort();
    const visited = Array.from({length: tickets.length}, ()=>0);
    let answer = [];
    const result = [];
    function dfs(start, layer){
        result.push(start)
        if(layer === tickets.length){
            answer = result
            return true;
        }
        for(let i=0; i<tickets.length; i++){
            if(!visited[i] && tickets[i][0] === start){
                visited[i] = 1;
                if(dfs(tickets[i][1], layer+1)) return true;
                visited[i] = 0;
            }
        }
        result.pop();
        return false;
    }
    
    dfs("ICN",0)
    return answer
}