function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    while(deliveries.length || pickups.length){
        let dbox = cap, pbox = cap;
        let dTrue = true, pTrue = true;
        let dNum = 0, pNum = 0;
        
        while(dbox >=0 && deliveries.length){
            let box = deliveries.pop();
            if(dTrue && box){
                dNum = deliveries.length + 1;
                dTrue = false;
            }
            
            if(dbox - box >=0) dbox -= box;
            else {
                dbox -= box
                deliveries.push(-1 * dbox);
            }
        }
        
        while(pbox >=0 && pickups.length){
            let box = pickups.pop();
            if(pTrue && box){
                pNum = pickups.length + 1;
                pTrue = false;
            }
            
            if(pbox - box >=0) pbox -= box;
            else {
                pbox -= box
                pickups.push(-1 * pbox);
            }
        }
        answer = answer + Math.max(dNum, pNum) * 2;
    }
    return answer
}

