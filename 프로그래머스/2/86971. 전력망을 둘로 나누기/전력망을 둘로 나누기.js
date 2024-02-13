function solution(n, wires) {
    let answer = Infinity;
    let count = 0;
    while(count < wires.length){
        const [node1, node2] = wires.shift();
        answer = Math.min(answer, Math.abs(bfs(node1, wires) - bfs(node2, wires)));
        wires.push([node1,node2]);
        count += 1;
    }
    
    function bfs(node, wires){
        const queue = [node];
        const visited = [];
        while(queue.length){
            const root = queue.pop();
            wires.forEach(wire => {
                if(wire[0] === root && !visited.includes(wire[1])) queue.push(wire[1]);
                if(wire[1] === root && !visited.includes(wire[0])) queue.push(wire[0]);
            })
            visited.push(root);
        }
      
        return visited.length;
    }
    return answer;
}