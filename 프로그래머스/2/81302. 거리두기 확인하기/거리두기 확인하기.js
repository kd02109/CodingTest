function checkPlace(place){
    const map = place.map(item => item.split(''))

    const queue = [];
    
    for(let i=0; i<5; i+=1){
        for(let j=0; j<5; j+=1){
            if(map[i][j] === "P") queue.push([i,j]) 
        }
    }

    while(queue.length){
        let [x,y] = queue.shift();
        const dx = [0,-1,0,1];
        const dy = [-1,0,1,0];
        
        for(let i=0; i<dx.length; i+=1){
            let nx = x+dx[i];
            let ny = y+dy[i];
            
            if(nx<0 || nx >4 || ny<0 || ny >4) continue;
            if(map[nx][ny] === "P") return 0;
            if(map[nx][ny] === "X") continue;
            

            for(let j=0; j<dx.length; j+=1){
                let nnx = nx + dx[j];
                let nny = ny + dy[j]
                
                if(nnx<0 || nnx >4 || nny<0 || nny >4) continue;
                if(nnx === x && nny === y) continue;
                if(map[nnx][nny] === "P") return 0;
            }
        }
    }
    return 1;
}


function solution(places) {
    const answer = [];
    
    places.forEach(place => {
        answer.push(checkPlace(place));
    });
    return answer;
}