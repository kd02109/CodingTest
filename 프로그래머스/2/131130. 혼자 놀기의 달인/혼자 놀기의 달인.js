function solution(cards) {
    cards = cards.map(num => num-1);
    
    function bfs(card,cards,visited, idx){
        const queue = [card]
        visited[idx] = 1;
        while(queue.length){
            const card = queue.shift();
            const next = cards[card];
            if(!visited[card]){
                queue.push(next)
                visited[card] = 1
            }
        }
        return visited.filter(item => !!item).length;
    }
    
    let answer = 0;
    
    for(let i=0; i<cards.length; i+=1){
        const visited = Array.from({length: cards.length}, ()=>0);
        const group1 = bfs(cards[i], cards, visited,i);
        if(group1 === cards.length){
            answer = Math.max(answer, 0);
            continue;
        }
        for(let j=0; j<cards.length; j+=1){

            if(!visited[j]){
                const visited2 = [...visited];
                const group2 = bfs(cards[j], cards, visited2,j);
                answer = Math.max(group1 * (group2-group1), answer);
            }
        }
    }

    return answer;
}