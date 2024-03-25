function solution(n) {
    const dx = [1,0,-1];
    const dy = [0,1,-1];
    const map = Array.from({length:n}, (_,idx)=> new Array(idx+1).fill(0))
    let num = 1;
    let x = -1;
    let y = 0;
    let dir = 0;
    for(let i = n; i>0; i-=1){
        for(let j=0; j<i; j+=1){
            x += dx[dir];
            y += dy[dir];
            map[x][y]=num;
            num += 1;
        }
        dir = dir !== 2 ? dir+1 : 0
    }
   return map.flat()
}