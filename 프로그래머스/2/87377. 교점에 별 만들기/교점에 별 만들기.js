function solution(line) {
    let answer = [];
    
    const check = (arr) => {
        const [line1, line2] = arr;
        const denominator = line1[0]*line2[1] - line1[1] * line2[0];
        if(denominator === 0) return false;
        let x = (line1[1]*line2[2]-line2[1]*line1[2])/denominator
        let y = (line1[2]*line2[0]-line2[2]*line1[0])/denominator
        return [x,y];
    }
    
    const combi = (layer, arr, line)=>{
        if(layer === 2){
            const possible = check(arr);
            if(Array.isArray(possible) && Math.floor(possible[0]) === possible[0] && Math.floor(possible[1]) === possible[1]){
                answer.push(possible);
            }
            return;
        }
        
        line.forEach((value,idx) => {
            const newLine = line.slice(idx+1);
            combi(layer+1, [...arr, value], newLine);
        })
    }
    combi(0, [], line)
    
    const x = answer.map(value => value[0]);
    const y = answer.map(value => value[1]);
    
    const minX = Math.min(...x);
    const maxX = Math.max(...x);
    const minY = Math.min(...y);
    const maxY = Math.max(...y);
    
    let map = Array.from({length:maxY-minY+1}, ()=> Array.from({length:maxX-minX+1}, ()=>"."));
    answer.forEach(value => {
        const [x,y] = value;
        const nx = x - minX;
        const ny = y - minY;
        map[ny][nx] = "*";
    })
    map.reverse();
    map = map.map(item => item.join(''));
    if(map.length === 1) map = map.flat();
    return map;
}