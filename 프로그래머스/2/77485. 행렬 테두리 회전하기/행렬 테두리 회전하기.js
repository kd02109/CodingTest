function solution(rows, columns, queries) {
    const maps = Array.from({length:rows+1}, ()=>Array.from({length: columns+1},()=>0));
    let idx = 1;
    for(let i=1; i<=rows; i+=1){
        for(let j=1; j<=columns; j+=1){
            maps[i][j] = idx;
            idx+=1;
        }
    }
    
    const answer = [];
    queries.forEach(query => {
        let [x1,y1,x2,y2] = query;
        let base = maps[x1][y1];
        let min = base;
        
        for(let i = x1; i<x2; i+=1){
            maps[i][y1] = maps[i+1][y1];
            min = Math.min(min, maps[i][y1]);
        }
        
        for(let i=y1; i<y2; i+=1){
            maps[x2][i] = maps[x2][i+1];
            min = Math.min(min, maps[x2][i])
        }
        
        for(let i=x2; i>x1; i-=1){
            maps[i][y2] = maps[i-1][y2];
            min = Math.min(min, maps[i][y2]);
        }
        
        for(let i=y2; i>y1; i-=1){
            maps[x1][i] = maps[x1][i-1];
            min = Math.min(min, maps[x1][i]);
        }
        maps[x1][y1+1] = base;
        answer.push(min);
    })
    return answer
}