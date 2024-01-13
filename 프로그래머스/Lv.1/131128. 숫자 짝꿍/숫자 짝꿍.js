
function solution(X, Y) {
    const answer = []
    const [xMap, xList] = getMap(X);
    const [yMap, yList] = getMap(Y);
    const minList = xList.length > yList.length ? yList : xList;
    
    for(let i=0; i<minList.length; i++){
        const value = minList[i]
        if(xMap[value] >0 && yMap[value] >0){
            answer.push((minList[i]));
            xMap[value] -= 1;
            yMap[value] -= 1;
        }
    }
    if(answer.length === 0) return '-1'
    
    const set = new Set(answer)
    if(set.size === 1 && set.has("0")) return '0'
    return answer.sort((a,b)=> b-a).join('')
}

function getMap(num) {
    const nums = num.toString(10).split('')
    const obj = {}
    nums.forEach(num => {
        obj[num]? obj[num] += 1 : obj[num] = 1 
    })
    return [obj,nums]
}