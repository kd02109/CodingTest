function solution(record) {
    const EnterLeave = record.filter(item => item.split(' ')[0] !== "Change")
    const EnterChange = record.filter(item => item.split(' ')[0] !== "Leave")
    const answer = [];
    const userObj = {    }
    for(let user of EnterChange){
        const [enter, id, name] = user.split(' ');
        userObj[id] = name 
    }
    
    for(let user of EnterLeave){
        const [enter, id, name] = user.split(' '); 
        if(enter === "Enter"){
            answer.push(`${userObj[id]}님이 들어왔습니다.`)
        }
        if(enter === "Leave"){
            answer.push(`${userObj[id]}님이 나갔습니다.`)
        }
    }

    return answer;
}