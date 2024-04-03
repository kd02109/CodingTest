function solution(picks, minerals) {
    // 미네랄 곡괭이가 캘수 있는 최대 개수로 맞추기
    const totalPicks = picks.reduce((acc,cur)=>acc+cur, 0);
    minerals = minerals.slice(0, totalPicks*5);
    
    const score = {
        diamond: {
            diamond:1,
            iron:1,
            stone:1,
        },
        iron : {
            diamond:5,
            iron:1,
            stone:1,
        },
        stone : {
            diamond:25,
            iron:5,
            stone:1,
        }
    }
    
    // 새로운 점수 배열 만들기
    const newScore = [];
    for(let i=0; i<minerals.length; i+=5){
        const slice = minerals.slice(i,i+5);
        let [diamond, iron, stone] = [0,0,0];
        slice.forEach(mineral => {
            diamond += score.diamond[mineral];
            iron += score.iron[mineral];
            stone += score.stone[mineral];
        })
        newScore.push([diamond, iron, stone]);
    }
    
    // 점수 배열 오름차순 정렬
    newScore.sort((a,b) => a[2]-b[2]);
    
    // 최소 피로도 구하기 
    let [dia, iron, stone] = picks;
    let answer = 0;
    while(newScore.length){
        const tired = newScore.pop();
        if(dia){
            dia -= 1;
            answer += tired[0];
        }else if(iron){
            iron -=1;
            answer += tired[1];
        }else{
            stone -=1;
            answer += tired[2];
        }
    }
    return answer
}