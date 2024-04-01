function solution(n, info) {
    const answer = [];
    const board = [0,1,2,3,4,5,6,7,8,9,10].reduce((acc,cur,idx) => {
        acc[cur] = 10 - idx;
        return acc
    }, {})

    function dfs(idx, count, info, score, my){
        if(idx > 10){
            my[my.length-1] += count;
            answer.push([score, my]);
            return;
        }
        
        const apaci = info[idx];
        const currentScore = board[idx];
        
        if(apaci){
            dfs(idx+1, count, info, score-currentScore, [...my, 0]);
        }else{
            dfs(idx+1, count, info, score, [...my, 0]);
        }
        
        if(count >= apaci + 1){
            dfs(idx+1, count-(apaci+1), info, score+currentScore, [...my, apaci+1]);
        }
    }
    dfs(0,n,info,0,[]);
    
    answer.sort((a,b)=> {
        if(b[0] === a[0]){
            return b[1].filter(item => item !==0).length - a[1].filter(item => item !==0).length
        }
        return b[0]-a[0]
    });
    
    if(answer[0][0] <= 0) return [-1]
    return answer[0][1];
}
