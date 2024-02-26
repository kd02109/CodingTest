function solution(tickets) {
    tickets.sort();
    const answer = [];
    const visited = Array.from({length:tickets.length}, ()=>0);
    function dfs(str, count){
        answer.push(str)
        if(count === tickets.length){
            return true;
        }
        for(let i=0; i<tickets.length; i++){
            if(!visited[i] && tickets[i][0] === str){
                visited[i] = true;
                if(dfs(tickets[i][1], count+1)) return true;
                visited[i] = false;
            }
        }
        answer.pop();
        return false;
    }

    dfs("ICN",0);
    return answer;
}