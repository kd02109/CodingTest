function solution(priorities, location) {
    priorities = priorities.map((priority,idx) => [priority, idx]);
    let answer = 0;
    while(priorities.length){
        const [priority, idx] = priorities.shift();
        if(priorities.every(([value, index]) => value <= priority)){
            answer += 1;
            if(idx === location) return answer;
        }else{
            priorities.push([priority, idx]);
        }
    }
}