function solution(n, computers) {
    const length = n
    const visit = Array.from({length: length}, ()=> false)
    let answer = 0
    // edges 만들기
    const edges = []
    for(let i=0; i<computers.length; i++){
        const arr = computers[i]
        for(let j=i; j<arr.length; j++){
            if(i===j) continue
            if(arr[j] === 1) edges.push([i,j])
        }
    }
    console.log(edges)
    
  // node 만들기
  const node = new Array(length).fill().map((_) => []);
  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];
    node[from].push(to);
    node[to].push(from);
  }
    
  // 간선 찾기   
  const queue = []  

  for(let i=0; i<edges.length; i++){
      const [from, to] = edges[i];    
      if(!visit[from]){
          const nodeFrom = node[from]
          visit[from] = true

          for(let j=0; j<nodeFrom.length; j++){
            if(!visit[nodeFrom[j]]){
                queue.push(nodeFrom[j])
                visit[nodeFrom[j]] = true
            }
          }

          while(queue.length){
             let start = queue.shift()
             visit[start] = true;
             const nodeFrom = node[start]
              for(let j=0; j<nodeFrom.length; j++){
                if(!visit[nodeFrom[j]]){
                    queue.push(nodeFrom[j])
                    visit[nodeFrom[j]] = true
                }
              }
            console.log(queue)
          }
          answer +=1
      }
  }

  for(let i=0; i<visit.length; i++){
      if(!visit[i]){
          visit[i] = true
          answer +=1
      }
  }
    

  return answer;
}

solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])