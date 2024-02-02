function solution(s) {
    const arr = s.replace(/[{}]/g, "").split(",")
    const map = new Map()
    arr.forEach(value => {
        if(map.has(value)) map.set(value, map.get(value)+1);
        else map.set(value,1)
    })
    const answer = [...map].sort((a,b)=> b[1]-a[1]).map(item => Number(item[0]));
    return answer
    
}