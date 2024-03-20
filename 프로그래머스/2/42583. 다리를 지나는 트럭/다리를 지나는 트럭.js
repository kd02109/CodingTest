function solution(bridge_length, weight, truck_weights) {
    let bridgeTotal = 0;
    const bridge = Array.from({length: bridge_length}, ()=> 0);
    let time = 0;
    while(truck_weights.length){
        bridgeTotal -= bridge.shift();
        if(bridgeTotal+truck_weights[0] <= weight){
            const truck = truck_weights.shift();
            bridgeTotal += truck;
            bridge.push(truck);
        }else{
            bridge.push(0);
        }
        time += 1
    }
   return time + bridge.length;
}