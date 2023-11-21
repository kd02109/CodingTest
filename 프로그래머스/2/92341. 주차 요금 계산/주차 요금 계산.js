function solution(fees, records) {
    const [baseTime, baseFee, plusTime, plusFee] = fees;

    const newRecords = records.map(item => {
        const itemArr = item.split(" ")
        const time = itemArr[0].split(":").map((item, index) => {
            if(index === 0) return Number(item) * 60
            return Number(item)
        }).reduce((acc,cur)=> acc+cur,0)
        const car = itemArr[1]
        const InOut = itemArr[2]
        return [time, car, InOut]
    })
    
    const carNumber = [...new Set(newRecords.map(record => record[1]))].sort((a,b) => Number(a) - Number(b))

    const obj = {}
    for(let value of carNumber){
        obj[value] = 0
    }
    
    const carIn = {}
    for(let i=0; i<newRecords.length; i++){
        const [time, car, inout] = newRecords[i]
        if(inout === "IN"){
            obj[car] -= time
            carIn[car] = "IN"
        }
        if(inout === "OUT"){
            obj[car] +=time
            carIn[car] = "OUT"
        }
    }
    
    let answer = [];
    for(let car of carNumber){
        if(carIn[car] === "IN"){
            obj[car] += 24*60-1;
        }

        if(obj[car]<=baseTime) answer.push(baseFee);
        if(obj[car]>baseTime){
            const fee = baseFee + Math.ceil((obj[car] - baseTime)/plusTime) * plusFee
            answer.push(fee)
        }
    }
    

    return answer;
}