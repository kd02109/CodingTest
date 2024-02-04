function solution(maps) {
    const destination = [maps.length-1, maps[0].length-1]
    const dx = [-1,0,1,0];
    const dy = [0,1,0,-1];
    let answer = 0;
    const queue = [[0,0,1]];
    maps[0][0] = 0;
    
    while(queue.length){
        let [x,y,count] = queue.shift();
        if(x === destination[0] && y ===destination[1]){
            answer = count;
            break;
        }
        
        for(let i=0; i<dx.length; i+=1){
            let nx = x+dx[i];
            let ny = y+dy[i];
            if(nx>=0 && nx<maps.length && ny >=0 && ny<maps[0].length && maps[nx][ny] === 1){
                maps[nx][ny] = 0;
                queue.push([nx,ny,count+1]);
            }
        }

    } 

    if(answer === 0) return -1
    return answer
}