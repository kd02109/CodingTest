function solution(edges) {
    const answer = [0,0,0,0]
    const makeMap = (arr) => {
        const map = new Map();
        arr.forEach(value => {
            const [start, end] = value;
            if(!map.has(start)) map.set(start, [0,0]);
            if(!map.has(end)) map.set(end, [0,0]);
            
            let [giveStart, getStart] = map.get(start);
            let [giveEnd, getEnd] = map.get(end);
            if(start === end){
                map.set(start, [giveStart+1, getStart+1]);
            }
            
            if(start !== end){
                map.set(start, [giveStart+1, getStart]);
                map.set(end, [giveEnd, getEnd+1]);
            }
        })
        return map;
    }
    const map = makeMap(edges);
    
    const makeAnswer = (map) => {
        const arr = [...map];
        let pointCount = 0;
        arr.forEach(value => {
            const [node, count] = value;
            const [give, get] = count;
            if(give >= 2 && get === 0){
                answer[0] = node;
                pointCount = give;
            }
            if(give === 0){
                answer[2] += 1;
            }
            if(give >= 2 && get >= 2){
                answer[3] += 1;
            }
        })
        answer[1] = pointCount - answer[2] - answer[3];
    }
    makeAnswer(map);
    return answer;
}