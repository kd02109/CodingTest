function solution(priorities, location) {
    const priority = priorities.map((item, idx) => [item,idx])
    const queue = [];
    
    while(priority.length){
        const [item,idx] = priority.shift();
        if(priority.some(el => el[0] >item)){
            priority.push([item,idx])
        }else{
            queue.push([item,idx])
        }
    }

    return queue.findIndex(item => item[1] === location) + 1
}