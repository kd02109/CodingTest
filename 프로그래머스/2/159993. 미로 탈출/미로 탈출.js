function solution(maps) {
    const MapL = maps.map(item => item.split(''));
    const MapE = maps.map(item => item.split(''));
    
    let start = [];
    let lever = [];
    let final = [];
    
    for(let i=0; i<maps.length; i++){
        for(let j=0; j<maps[i].length; j++){
            if(maps[i][j] === "S") start = [i,j];
            if(maps[i][j] === "L") lever = [i,j];
            if(maps[i][j] === "E") final = [i,j];
        }
    }
    const leverTime = findMap(start, MapL, lever);
    const endTime = findMap(lever, MapE, final);
    if(endTime === -1 || leverTime === -1) return -1;
    return leverTime+endTime;
}


function findMap(start, map, d){
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    const [detinationX, destinaionY] = d;

    const queue = [[...start,0]];
    map[start[0]][start[1]] = "X";
    

    while(queue.length){

        const [x,y,time] = queue.shift();
        for(let i=0; i<dx.length; i+=1){
            let nx = dx[i]+x;
            let ny = dy[i]+y;
            if(nx <0 || nx >= map.length || ny<0 || ny>=map[0].length || map[nx][ny] === "X") continue;
            map[nx][ny] = "X"
            queue.push([nx,ny,time+1])
            if(nx === detinationX && ny === destinaionY) return time+1;
        }
    }
    return -1;
}