function solution(rows, columns, queries) {
    const map = Array.from({length: rows+2}, ()=> Array.from({length:columns+2}, ()=>0))
    let count = 1;
    for(let i=1; i<=rows; i+=1){
        for(let j=1; j<=columns; j+=1){
            map[i][j] = count;
            count += 1;
        }
    }
    
    const answer = [];
    queries.forEach(query => {
        const [x1,y1,x2,y2] = query;
        let temp = map[x1][y1]
        let minNums =  temp
        for(let i=x1; i<x2; i+=1 ){
            map[i][y1] = map[i+1][y1];
            minNums = Math.min(minNums, map[i][y1])
        }
        for(let i=y1; i < y2; i+=1){
            map[x2][i] = map[x2][i+1];
            minNums = Math.min(minNums, map[x2][i])
        }
        for(let i=x2; i > x1; i-=1 ){
            map[i][y2] = map[i-1][y2];
            minNums = Math.min(minNums, map[i][y2])
        }
        for(let i=y2; i > y1; i-=1 ){
            map[x1][i] = map[x1][i-1];
            minNums = Math.min(minNums, map[x1][i])
        }
        map[x1][y1+1] = temp;
        answer.push(minNums);
    })
    return answer;
}