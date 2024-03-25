function findMap(start, target, map){
    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
    const queue = [[...start, 0]]
    map[start[0]][start[1]] = "X"
    while(queue.length){
        let [x,y,time] = queue.shift();
        for(let i=0; i<dx.length; i+=1){
            let nx = x+dx[i];
            let ny = y+dy[i];
            if(nx>=0 && nx < map.length && ny>=0 && ny < map[0].length && map[nx][ny] !== "X"){
                if(map[nx][ny] === target) return time + 1;
                queue.push([nx,ny, time + 1]);
                map[nx][ny] = "X"
            }
        }
    }
    
    return -1;
}

function solution(maps) {
  const leverMap = maps.map(item => item.split(''));
  const endMap = maps.map(item => item.split(''));
  let start = [0,0]
  let lever = [0,0]
  
  for(let i=0; i<maps.length; i+=1){
      for(let j=0; j<maps[0].length; j+=1){
          if(maps[i][j] === "S") start = [i,j];
          if(maps[i][j] === "L") lever = [i,j]
      }
  }
    
    
  const toLever = findMap(start, "L", leverMap);
  const toEnd = findMap(lever, "E", endMap);
     
  if(toLever === -1 || toEnd === -1) return -1;
  return toLever + toEnd;
    
}


