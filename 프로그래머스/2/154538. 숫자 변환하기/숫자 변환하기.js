function solution(x, y, n) {
    const cache = Array.from({length:y+1}, ()=>Infinity);
    cache[x] = 0;
    for(let i=x; i<y; i+=1){
        cache[i+n] = Math.min(cache[i]+1, cache[i+n]);
        cache[i*2] = Math.min(cache[i]+1, cache[i*2]);
        cache[i*3] = Math.min(cache[i]+1, cache[i*3]);
    }
    return cache[y] === Infinity? -1 : cache[y]
}