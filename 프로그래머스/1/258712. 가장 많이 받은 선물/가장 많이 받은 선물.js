function solution(friends, gifts) {
    var answer = 0;
    const friendMap = friends.reduce((acc, cur, idx)=> {
        acc[cur] = idx;
        acc[idx] = cur;
        return acc
    }, {})
    
    const giftIdx = {...friendMap};
    const giftMap = Array.from({length:friends.length}, ()=> new Array(friends.length).fill(0));
    
    // 준 선물 기록
    gifts.map(gift => {
        const [give, get] = gift.split(' ');
        const giveIdx = friendMap[give];
        const getIdx = friendMap[get];
        giftMap[giveIdx][getIdx] += 1;
    })
    
    // 선물 지수 기록하기 
    for(let i=0; i<giftMap.length; i+=1){
        const giveTotal = giftMap[i].reduce((acc,cur) => acc+cur);
        let gaveTotal = 0;
        for(let j=0; j<giftMap.length; j+=1){
            gaveTotal += giftMap[j][i]
        }
        giftIdx[i] = giveTotal - gaveTotal;
        giftIdx[friendMap[i]] = giveTotal - gaveTotal;
    }
    

    for(let i=0; i<giftMap.length; i+=1){
        let nextGift = 0;
        for(let j=0; j<giftMap.length; j+=1){
            if(i===j) continue;
            const give = giftMap[i][j];
            const get = giftMap[j][i];
            const giveGiftIdx = giftIdx[i];
            const getGiftIdx = giftIdx[j];
            if(give > get) nextGift += 1;
            else if(give === get && giveGiftIdx > getGiftIdx) nextGift += 1;
        }
        answer = Math.max(answer, nextGift);
    }
    
    return answer;
}