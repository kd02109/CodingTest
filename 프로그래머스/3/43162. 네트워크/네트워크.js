function solution(n, computers) {
    const visited = Array.from({length: n}, () => 0);
    let answer = 0;

    function bfs(node) {
        const queue = [node];
        while (queue.length) {
            const current = queue.shift();
            visited[current] = 1;
            for (let i = 0; i < n; i++) {
                if (computers[current][i] === 1 && !visited[i]) {
                    queue.push(i);
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            bfs(i);
            answer++;
        }
    }
    
    return answer;
}