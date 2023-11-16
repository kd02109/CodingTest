function solution(maps) {
  const [xLength, yLength] = [maps.length, maps[0].length];    
  const visited = Array.from({length: xLength}, ()=>new Array(yLength).fill(false))
  const [lastX, lastY] =  [xLength-1, yLength-1]
  let answer = 1;
  const dx = [0,1,0,-1];
  const dy = [1,0,-1,0];
  const queue = [[0,0,1]];
  visited[0][0] = false;

  while(queue.length>0){
      const [x,y,count] = queue.shift()
      if(x === lastX && y === lastY){
          answer = count
          break;
      }
      for(let i=0; i<4; i++){
          let nx = x+dx[i];
          let ny = y+dy[i];
          if(nx >= 0 && nx < xLength && ny >= 0 && ny < yLength && visited[nx][ny] === false && maps[nx][ny] === 1){
              visited[nx][ny] = true;
              queue.push([nx,ny,count+1])
          }
      }
  }  
    return answer === 1? -1: answer
}