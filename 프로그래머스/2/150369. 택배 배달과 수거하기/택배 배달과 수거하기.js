function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    while(deliveries.length || pickups.length){
        let dCap = cap;
        let dLen = 0;
        let pCap = cap;
        let pLen = 0;
        
        while(dCap >=0 && deliveries.length){
            const value = deliveries.pop();
            if(value > 0 && dLen === 0){
                dLen = deliveries.length + 1;
            }
            if(dCap >= value) dCap -= value;
            else{
                dCap -= value;
                deliveries.push(Math.abs(dCap));
            }
        }
        
        while(pCap >=0 && pickups.length){
            const value = pickups.pop();
            if(value > 0 && pLen === 0){
                pLen = pickups.length + 1;
            }
            if(pCap >= value) pCap -= value;
            else{
                pCap -= value;
                pickups.push(Math.abs(pCap));
            }
        }
        answer += Math.max(dLen, pLen) * 2
    }
    return answer
}

