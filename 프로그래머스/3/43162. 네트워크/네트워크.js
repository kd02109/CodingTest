function solution(n, computers) {
    let answer = 0;
    const visited = Array.from({length:n}, ()=>0);
    const queue = [];
    
    for(let i = 0; i<n; i+=1){
        if(!visited[i]){
            queue.push(i);
            visited[i] = 1;
            answer += 1;
        }
        while(queue.length){
            const current = queue.shift();
            computers[current].forEach((value, idx)=>{
                if(!visited[idx] && value === 1){
                    queue.push(idx);
                    visited[idx] = 1;
                }
            })
        }
    }
    
    return answer;
}
