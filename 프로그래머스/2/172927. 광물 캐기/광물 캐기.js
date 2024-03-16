function solution(picks, minerals) {
    let totalPick = picks.reduce((acc,cur) => acc + cur);
    let [dia,iron, stone] = picks;
    minerals = minerals.slice(0, totalPick * 5);
    const tireds = [];
    const obj = {diamond: 0, iron: 0, stone: 0}
    
    for(let i=0; i<minerals.length; i+=5){
        const mineralSet = minerals.slice(i,i+5);
        const set = {...obj};
        mineralSet.forEach(mineral => {
            set[mineral]+=1; 
        })
        tireds.push([
            set.diamond * 1 + set.iron * 1 + set.stone * 1,
            set.diamond * 5 + set.iron * 1 + set.stone * 1,
            set.diamond * 25 + set.iron * 5 + set.stone * 1,
        ])
    }
    
    tireds.sort((a,b) => {
        return a[2]-b[2]
    })
    
    let answer = 0;
    while(tireds.length){
        const mineralScore = tireds.pop();
        if(dia){
            dia -=1;
            answer += mineralScore[0]
        }else if(iron){
            iron -=1;
            answer += mineralScore[1]
        }else{
            stone -=1;
            answer += mineralScore[2]
        }
    }
    return answer
}