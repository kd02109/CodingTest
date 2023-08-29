function solution(cacheSize, cities) {
    let answer = 0;
    
    const cityArr = cities.map(item => item.toLowerCase())
    
    const queue = []
    
    if(cacheSize === 0 ) return cities.length * 5

    for(let i=0; i<cityArr.length; i++){
        const city = cityArr[i]
        if(queue.includes(city)){
            answer += 1
            const latestIndex = queue.findIndex((item,index)=> {
                if(item === city){
                    return index
                }
            });
            
            for(let j=latestIndex; j<queue.length; j++){
                if(j === queue.length-1){
                    queue[j] = city
                }else{
                    queue[j] = queue[j+1]
                }

            }
        }
        else if(queue.length<cacheSize){
            answer +=5
            queue.push(city)
        }
        else{
            answer += 5
            queue.push(city)
            queue.shift()
        }
    }
    return answer;
}