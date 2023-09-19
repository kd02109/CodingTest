function solution(n) {
    const tree = []
    for(let i=1; i<=n; i++){
        const numArr = Array.from({length:i}, ()=>0)
        tree.push(numArr)
    }

    let x = -1
    let y = 0
    let count = 1
    let direction = 0
    const dx = [1,0,-1]
    const dy = [0,1,-1]
    

    for(let i=n; i>0; i-=1){
        for(let j=0; j<i; j++){
           
             x = x+dx[direction]
             y = y+dy[direction]
             tree[x][y] = count
            count++ 
        }
        direction = (direction+1)%3
    }
    let answer = []
    
    for(let i=0; i<n; i++){
        answer = [...answer, ...tree[i]]
    }

   
    return answer;
}