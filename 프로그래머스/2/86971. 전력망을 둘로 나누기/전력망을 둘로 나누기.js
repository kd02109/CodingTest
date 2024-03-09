function solution(n, wires) {
    let count = 1;
    let answer = Infinity;
    while(count <=n){
        const [node1, node2] = wires.pop();
        answer = Math.min(Math.abs(bfs(node1, wires) - bfs(node2, wires)), answer); 
        wires.unshift([node1, node2])
        count += 1;
    }
    
    function bfs(node, wires){
        let len = 1;
        const visited = [node];
        const queue = [node];
        while(queue.length){
            const start = queue.pop();
            wires.forEach(wire => {
                const [node1, node2] = wire;
                if(node1 === start && !visited.includes(node2)){
                    queue.push(node2)
                    len += 1;
                    visited.push(node2)
                }
                else if(node2 === start && !visited.includes(node1)){
                    queue.push(node1)
                    len += 1;
                    visited.push(node1)
                }
            })
        }
        return len;
    }
    return answer;
}