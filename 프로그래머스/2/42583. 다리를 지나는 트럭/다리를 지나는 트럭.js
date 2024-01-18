function solution(bridge_length, weight, truck_weights) {
    const bridge = Array.from({length:bridge_length},()=>0);
    let answer = 0;
    let bridge_weigth = 0
    while(truck_weights.length > 0){
        bridge_weigth -= bridge.shift();
        if(bridge_weigth+truck_weights[0] > weight){
            bridge.push(0);
        }else{
            const truck = truck_weights.shift()
            bridge.push(truck);
            bridge_weigth += truck;
        }
        answer += 1;
    }
    return answer + bridge_length
}