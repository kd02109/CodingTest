function checkPlace(place){
    const stack = [];
    
    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
    
    for(let i=0; i<place.length; i+=1){
        for(let j=0; j<place.length; j+=1){
            if(place[i][j] === "P") stack.push([i,j])
        }
    }
    
    while(stack.length){
        const [x,y] = stack.pop();
        for(let i=0; i<dx.length; i+=1){
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx<0 || nx >= place.length || ny<0 || ny >=place[0].length || place[nx][ny] === "X") continue
            if(place[nx][ny] === "P") return 0;
            for(let j=0; j<dx.length; j+=1){
                let nnx = nx + dx[j];
                let nny = ny + dy[j];
                if(nnx<0 || nnx >= place.length || nny<0 || nny >=place[0].length || place[nnx][nny] === "X") continue;
                if(nnx === x && nny === y) continue;
                if(place[nnx][nny] === "P")
                    return 0;
            }
        }
    }
    
    return 1;
}

function solution(places) {    
    return places.map((place) => checkPlace(place))
}