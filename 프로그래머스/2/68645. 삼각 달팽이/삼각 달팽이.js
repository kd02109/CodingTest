function solution(n) {
    const tree = []
    for(let i = 0; i<n; i++){
        const arr = Array.from({length:i+1}, ()=> 0);
        tree.push(arr);
    }
    
    const dx = [1,0,-1];
    const dy = [0,1,-1];
    
    let direction = 0;
    let x = -1;
    let y = 0;
    let count = 1;
    
  
    for(let i=n; i>0; i-=1){
        for(let j=0; j<i; j++){
            x = x + dx[direction];
            y = y + dy[direction]
            tree[x][y] = count;
            count += 1;
        }
        direction = (direction+1) % 3;
    }
    return tree.flat();
    
}