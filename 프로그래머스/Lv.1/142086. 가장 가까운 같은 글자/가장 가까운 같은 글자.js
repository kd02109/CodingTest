function solution(s) {
    const map = new Map()
    const answer = []
    for(let i=0; i<s.length; i++){
        const char = s[i]
        if(!map.has(char)){
            map.set(char, i)
            answer.push(-1)
        }else{
            const lastIdx = map.get(char)
            answer.push(i-lastIdx)
            map.set(char,i)
        }
    }
    return answer
}