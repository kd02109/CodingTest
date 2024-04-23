function solution(friends, gifts) {
    let answer = 0;
    const map = Array.from({length: friends.length}, ()=> new Array(friends.length).fill(0));
    const obj = friends.reduce((acc, cur, idx) => {
        acc[cur] = idx;
        acc[idx] = 0;
        return acc;
    }, {});
    
    gifts.forEach(gift => {
        const [give, get] = gift.split(' ');
        const giveIdx = obj[give];
        const getIdx = obj[get];
        map[giveIdx][getIdx] += 1;
    })
    
    for(let col=0; col<map.length; col+=1){
        const totalGive = map[col].reduce((acc,cur)=> acc+cur);
        let totalGet = 0;
        for(let row=0; row<map.length; row+=1){
            totalGet += map[row][col];
        }
        obj[col] = totalGive - totalGet;
    }
    
    for(let i=0; i<map.length; i+=1){
        let possible = 0;
        for(let j=0; j<map.length; j+=1){
            if( i === j ) continue;
            if(map[i][j] === map[j][i] && obj[i] > obj[j]) possible += 1;
            if(map[i][j] > map[j][i]) possible += 1;
            
        }
        answer = Math.max(answer, possible);
    }
    return answer;
}