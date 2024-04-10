function solution(name) {
    let answer = 0;
    let cursor = name.length-1;
    
    for(let i=0; i<name.length; i+=1){
        const char = name[i]
        let minMove = Math.min((name.charCodeAt(i) - 'A'.charCodeAt(0)), ( 'Z'.charCodeAt(0) - name.charCodeAt(i) + 1))
        answer += minMove;
        
        let startA = i+1
        while(name[startA] === "A" && startA <name.length){
            startA += 1;
        }
        
        cursor = Math.min(cursor, i*2 + name.length-startA, 2 * (name.length-startA) + i )
    }
    
    return answer + cursor
}
