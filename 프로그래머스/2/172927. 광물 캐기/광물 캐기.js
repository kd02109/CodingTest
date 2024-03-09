function solution(picks, minerals) {
    let [dia, iron, stone] = picks;
    let totalPicks = picks.reduce((acc,cur)=> acc+cur, 0);
    
    if(totalPicks === 0) return 0;
    
    let tired = [];
    const obj = {diamond : 0, iron: 0, stone: 0};
    let answer = 0;
    
    for(let i=0; i < minerals.length; i+=5){
        const slice = minerals.slice(i,i+5);
        slice.forEach(mineral => {
            obj[mineral] += 1;
        })
        tired.push([obj.diamond + obj.iron + obj.stone, obj.diamond*5 + obj.iron + obj.stone ,obj.diamond*25 + obj.iron*5 + obj.stone ])
        obj.diamond = 0;
        obj.iron = 0;
        obj.stone = 0;
    }
    
    if(totalPicks < tired.length) tired = tired.slice(0,totalPicks)
    
    tired.sort((a,b) => {
        return a[2] - b[2];
    })

    
    while(tired.length !== 0 && totalPicks !== 0){
        const value = tired.pop();
        if(dia > 0){
            dia -=1;
            totalPicks -=1;
            answer += value[0]
        }
        else if(iron > 0){
            iron -=1;
            totalPicks -=1;
            answer += value[1]
        }
        else if(stone > 0) {
            stone -=1;
            totalPicks -=1;
            answer += value[2]
        }
    }
    return answer;
}