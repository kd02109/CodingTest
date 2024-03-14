function solution(cacheSize, cities) {
    cities = cities.map(city => city.toLowerCase());
    let answer = 0;
    let cache = [];
    
    for(let i=0; i<cities.length; i+=1){
        const city = cities[i];
        if(cache.includes(city)){
            const idx = cache.indexOf(city);
            cache.splice(idx,1);
            cache.push(city);
            answer += 1
        }
        else{
            if(cache.length < cacheSize){
                cache.push(city);
            }
            else{
                cache.push(city);
                cache.shift();
            }
            answer += 5;
        }
    }
    return answer;
}