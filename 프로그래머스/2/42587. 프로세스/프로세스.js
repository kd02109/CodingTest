function solution(priorities, location) {
    let answer = 0;
    const maps = priorities.map((item, idx) => [idx,item]);
    
    while(true){
        const [idx, value] = maps.shift();
        if(maps.every(item => item[1] <= value)){
            answer += 1;
            if(location === idx) return answer
        }else{
            maps.push([idx,value]);
        }
    }
}