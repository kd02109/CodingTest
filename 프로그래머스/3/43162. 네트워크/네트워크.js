function solution(n, computers) {
    let answer = 0;
    const visited = Array.from({length: n}, ()=>0);
    const queue = [];
    for(let i=0; i<n; i+=1){
        if(!visited[i]){
            visited[i] = true;
            queue.push(i);
            answer++;
        }
        while(queue.length){
            const current = queue.shift()
            computers[current].forEach((node,idx) => {
                if(node === 1 && !visited[idx]){
                    queue.push(idx);
                    visited[idx] = true;
                }
            })
        }
    }
    return answer;
}
