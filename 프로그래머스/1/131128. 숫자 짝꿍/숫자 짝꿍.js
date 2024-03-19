function solution(X, Y) {
    const answer = [];
    const x = {};
    const y = {};
    const total = [...new Set((X+Y).split(''))];
    
    getObj(X,x);
    getObj(Y,y);
    
    total.forEach(item => {
        if(x[item]  && y[item]){
            const min = Math.min(x[item],y[item])
            for(let i=0; i<min; i+=1){
                answer.push(item);
            }
        }
    })
    
    if(answer.length === 0) return "-1"
    
    answer.sort((a,b)=> b-a)
    if(answer[0] === "0") return "0"
    return answer.join('')
}

function getObj(str, obj){
    str.split('').forEach(num => {
        if(!obj[num]) obj[num] = 1;
        else obj[num] += 1;
    })
}

