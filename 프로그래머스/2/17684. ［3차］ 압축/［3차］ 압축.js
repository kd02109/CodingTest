function solution(msg) {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce((acc,cur,idx)=>{
        acc[cur] = idx+1
        return {...acc}
    },{})
    
    const answer = [];
    let next = 1;
    let num = 27;
    
    for(let i=0; i<msg.length; i+=next){
        next = 1
        let char = msg[i]
        let nextChar = char + msg[i+next]
        while(true){
            if(alpha[char] && !alpha[nextChar]){
                answer.push(alpha[char]);
                alpha[nextChar] = num;
                num+=1;
                break;
            }
            next += 1;
            char = nextChar;
            nextChar = char+msg[i+next];
        }
    }
    return answer;
}