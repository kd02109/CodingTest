function solution(name) {
    let answer = 0;
    let rowMoving = name.length - 1;
    const a = "A".charCodeAt()
    const z = "Z".charCodeAt()
    
    for(let i=0; i<name.length; i+=1){
        const char = name[i].charCodeAt()
        answer += Math.min(char - a, z - char + 1)
        
        let nextA = i+1;
        while(name[nextA] === "A" && nextA < name.length){
            nextA += 1;
        }
        // 현재 위치까지 앞으로 갔다가 뒤로 돌기
        // 뒤로 먼저 출발한 후에 현재 위치까지 오기 
        rowMoving = Math.min(rowMoving, i*2 + name.length-nextA, (name.length-nextA) * 2 + i)
    }
    return answer + rowMoving
}
