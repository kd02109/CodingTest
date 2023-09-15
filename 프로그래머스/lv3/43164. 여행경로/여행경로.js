function solution(tickets) {
    tickets.sort()
    let answer = []
    let result = []
    const visited = []
    let len = tickets.length;
    
    const dfs = (str, count) => {
        result.push(str)
        if(count === len){
            answer.push(result)
            return true
        }
        for(let i=0; i<tickets.length; i++){
            if(tickets[i][0] === str && !visited[i]){
                visited[i] = true
                if(dfs(tickets[i][1], count+1)) return true
                visited[i] = false
            }
        }
        result.pop()
        return false
    }
    dfs("ICN", 0)
    return answer[0]
}