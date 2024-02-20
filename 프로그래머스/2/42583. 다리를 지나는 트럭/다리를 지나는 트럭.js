function solution(bridge_length, weight, truck_weights) {
    const bridge = Array.from({length:bridge_length},()=>0);
    let bridgeWeight = 0;
    let answer = 0;
    while(truck_weights.length){
        const outTruck = bridge.shift();
        bridgeWeight = bridgeWeight - outTruck;
        if(bridgeWeight+truck_weights[0] <= weight ){
            const truck = truck_weights.shift();
            bridgeWeight = bridgeWeight + truck
            bridge.push(truck);
        }else{
            bridge.push(0);
        }
        answer += 1;
    }

    return answer + bridge_length;
}