

function solution(msg) {
    const answer = [];
    const alpha = ["A", "B", "C", "D","E","F","G","H", "I", "J","K","L","M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].reduce((acc,cur,idx)=>{
        acc[cur] = idx+1
        return acc
    }, {})
    let num = 26;
    for(let i=0; i<msg.length;){
        let count=1;
        let base = msg[i];
        let next = msg[i] + msg[i+count]
        while(alpha[base] && alpha[next]){
            count += 1;
            base = next;
            next += msg[i+count];
        }
        answer.push(alpha[base]);
        num += 1;
        alpha[next] = num; 
        i += count
    }
    return answer;
}