function solution(plans) {
    const sortPlans = plans.map(([name, time, count]) => [name, changeTime(time), Number(count)]).sort((a,b)=> b[1] - a[1]);
    const stack = [];
    while(sortPlans.length){
        const [name, time, count] = sortPlans.pop();
        stack.forEach(([name, totalCount],idx,arr) => {
            if(totalCount > time) arr[idx][1] += count;
        })
        stack.push([name, time+count])
    }
    return stack.sort((a,b)=> a[1]-b[1]).map(item => item[0])
}

const changeTime = (time) => {
    const [hour, minute] = time.split(":").map(item => Number(item));
    return hour * 60 + minute;
}