function solution(edges) {
    const makeMap = (arr) => {
        return arr.reduce((acc, cur) => {
            const [key , end] = cur;
            // [give, get]
            if(!acc.has(key)) acc.set(key, [0,0]);
            if(!acc.has(end)) acc.set(end, [0,0]);
            
            const [keyGive, keyGet] = acc.get(key);
            const [endGive, endGet] = acc.get(end);
            
            // 출발 지점과 도착 지점이 같을때
            if(key === end){
                acc.set(key, [keyGive+1, keyGet+1])
                return acc
            }
            
            acc.set(key, [keyGive+1, keyGet]);
            acc.set(end, [endGive, endGet+1]);
            return acc
        }, new Map())
    }
    
    const checkMap = (map) => {
        const answer = Array.from({length : 4}, ()=>0)
        for(let value of map){
            const [key, count] = value;
            const [give, get] = count;
            if(give >=2 && get === 0){
                answer[0] = key
            }else if(give === 0){
                answer[2] += 1;
            }else if(give >= 2 && get >= 2){
                answer[3] += 1;
            }
        }
        // 도넛 개수 구하기 
        // 정점의 출발 노드 개수 - 막대 - 팔자
        const startGive = map.get(answer[0])[0];
        answer[1] = startGive - answer[2] - answer[3];
        return answer
    }
    
    const map = makeMap(edges);
    const answer = checkMap(map);
    return answer;
}