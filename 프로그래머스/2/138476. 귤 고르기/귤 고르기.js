function solution(k, tangerine) {
    const map = new Map();
    for(let kg of tangerine){
        map.set(kg, map.get(kg)? map.get(kg)+1 : 1)
    }
    
    const arr = [...map].sort((a,b) => b[1]-a[1])
    let count = 0;
    let answer = 0;
    
    for(let [key, number] of arr){
        count+=number
        answer+=1
        if(count >= k) break
    }

    return answer;
}