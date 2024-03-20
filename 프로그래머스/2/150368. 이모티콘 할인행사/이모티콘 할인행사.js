function solution(users, emoticons) {
    const answer = [0,0];
    const percent = [10,20,30,40];
    
    // 할인율 모든 조합 만들기 중복 가능
    const possiblePercent = []
    function dfs(count, possible){
        if(count === emoticons.length){
            possiblePercent.push(possible);
            return;
        }
        for(let i=0; i<percent.length; i+=1){
            dfs(count+1, [...possible, percent[i]])
        }
    }
    dfs(0,[])
    
    possiblePercent.forEach(percents => {
        let totalPrice = 0;
        let totalMember = 0;
        users.forEach(user => {
            const [userPercent, changeMemberPrice] = user;
            let purchase = 0;
            emoticons.forEach((emoticon,idx)=>{
                if(percents[idx] >= userPercent) purchase += emoticon * ((100-percents[idx])/100)
            })
            if(purchase >= changeMemberPrice){ 
                totalMember += 1;
            }else{
                totalPrice += purchase;
            }
        })
        if(answer[0] < totalMember || (answer[0] === totalMember && answer[1] < totalPrice)){
            answer[0] = totalMember
            answer[1] = totalPrice
        }
    })
    return answer;
}