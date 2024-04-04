function solution(plans) {
    const changeTime = (time) => {
        const [hour, min] = time.split(":").map(Number);
        return hour*60 + min
    }
    const newPlans = plans.map(plan => [plan[0],changeTime(plan[1]), Number(plan[2])]);
    newPlans.sort((a,b)=> b[1]-a[1]);
    const stack = [];
    while(newPlans.length){
        const [name, time, duration] = newPlans.pop();
        stack.forEach(prev => {
            if(prev[1] > time) prev[1] += duration;
        })
        stack.push([name, time+duration]);
    }
    
    return stack.sort((a,b)=> a[1]-b[1]).map(item => item[0]);
}

