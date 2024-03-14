function solution(cards) {
    cards = cards.map(num => num-1);
    
    function bfs(idx,visited){
        let count = 0;
        while(!visited[idx]){
            visited[idx] = 1;
            idx = cards[idx];
            count += 1;
        }
        return count
    }
    
    let answer = 0;
    
    for(let i=0; i<cards.length; i+=1){
        const visited = Array.from({length: cards.length}, ()=>0);
        const group1 = bfs(i,visited);
        if(group1 === cards.length){
            answer = Math.max(answer, 0);
            continue;
        }
        for(let j=0; j<cards.length; j+=1){

            if(!visited[j]){
                const visited2 = [...visited];
                const group2 = bfs(j,visited);
                answer = Math.max(group1 * group2, answer);
            }
        }
    }

    return answer;
}