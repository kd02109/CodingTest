function solution(land) {
    let answer = 0;
    const visited = Array.from({length: land.length}, ()=>new Array(land[0].length).fill(0));
    const map = Array.from({length: land[0].length}, ()=>0);
    let oilIdx = 1;
    const obj = {};
    
    const calculateOil = (y, x, land) => {
        let tempTotal = 0;
        const dx = [0,0,1,-1];
        const dy = [1,-1,0,0];
        visited[x][y] = oilIdx
        const queue = [[x,y]];
        while(queue.length){
            let [x,y] = queue.shift();
            if(land[x][y] === 1) tempTotal += 1;
            for(let i=0; i<dx.length; i+=1){
                let nx = x+dx[i];
                let ny = y+dy[i];
                if(nx >=0 && nx< land.length && ny>=0 && ny < land[0].length && land[nx][ny] === 1 && visited[nx][ny] === 0){
                    queue.push([nx,ny]);
                    visited[nx][ny] = oilIdx
                }
            }
        }
        obj[oilIdx] = tempTotal;
    }

    for(let i=0; i<land[0].length; i+=1){
        let possible = 0;
        const set = new Set();
        for(let j=0; j<land.length; j+=1){
            if(land[j][i] === 1 && visited[j][i] === 0){
                possible += calculateOil(i,j,land);
                oilIdx += 1;
            }
            if(visited[j][i] !==0){
                set.add(visited[j][i])
            }
        }
        [...set].forEach(idx => {
            map[i] += obj[idx]
        })
        
    }
   
    return Math.max(...map);
}