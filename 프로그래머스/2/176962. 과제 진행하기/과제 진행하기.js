function solution(plans) {
    const length = plans.length
    plans = plans.map(([name, time, duration]) => [name, changeTime(time), Number(duration)]);
    plans.sort((a,b) => b[1]-a[1]);

    const stack = [];
    console.log(plans)
    while(plans.length){
        const [name, time, duration] = plans.pop();
        stack.forEach((val, idx, arr) => {
            if(time < val[1])  arr[idx][1] += duration
        })
        stack.push([name, time + duration]);
    }

    const answer = stack.sort((a, b) => a[1] - b[1]).map(val => val[0]);
    return answer;
}

const changeTime = (time) => {
    const [hour, minute] = time.split(":").map(item => Number(item));
    return hour * 60 + minute;
}