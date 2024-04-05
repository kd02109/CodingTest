function solution(users, emoticons) {
    const percents = [10,20,30,40];
    let [memberships, totalPrice] = [0,0]
    const percentSet = [];
    
    // 모든 가능한 % 조합 구하기
    const dfs = (layer, set) => {
        if(layer === emoticons.length){
            percentSet.push(set);
            return;
        }
        for(let i=0; i<percents.length; i+=1){
            dfs(layer+1, [...set, percents[i]]);
        }
    }
    dfs(0, []);
    
    //가능한 최대 맴버쉽 및 가격 구하기
    percentSet.forEach(percent => {
        let eachPercentTotalPrice = 0;
        let eachpercentMembership = 0;
        users.forEach(user => {
            const [userPercent, userPrice] = user;
            let eachUserPrice = 0;
            percent.forEach((value, idx)=>{
                if(userPercent <= value) {
                    eachUserPrice += (emoticons[idx] * ((100-value)/100));
                }
            })
            if(eachUserPrice >= userPrice) eachpercentMembership += 1;
            else eachPercentTotalPrice += eachUserPrice;
        })
        if(memberships < eachpercentMembership || (memberships === eachpercentMembership && totalPrice < eachPercentTotalPrice  )){
            memberships = eachpercentMembership;
            totalPrice = eachPercentTotalPrice;
        }
    })
    
    return [memberships, totalPrice]
}