function checkPlace(place){
    place = place.map(item => item.split(''));
    const people = []
    for(let i=0; i<place.length; i+=1){
        for(let j=0; j<place.length; j+=1){
            if(place[i][j] === "P") people.push([i,j]);
        }
    }
    const dx = [1,-1,0,0];
    const dy = [0,0,1,-1]
    while(people.length){
        let [x,y] = people.pop();
        for(let i=0; i<dx.length; i+=1){
            let nx = x+dx[i];
            let ny = y+dy[i];
            if(nx>=0 && nx<5 && ny>=0 && ny<5){
                if(place[nx][ny] === "X") continue;
                if(place[nx][ny] === "P") return 0;
                for(let j=0; j<dx.length; j+=1){
                    let nnx = nx + dx[j];
                    let nny = ny + dy[j];
                    if(nnx>=0 && nnx<5 && nny>=0 && nny<5){
                        if(nnx === x && nny === y) continue;
                        if(place[nnx][nny] === "P") return 0;
                    }
                }
            }
        }
    }
    return 1;
}


function solution(places) {
    const answer = [];
    places.forEach(place => {
        answer.push(checkPlace(place))
    })
    return answer;
}