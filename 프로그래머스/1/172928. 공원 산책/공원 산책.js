function solution(park, routes) {
    let [x,y] = findStart(park);
    const lenX = park.length;
    const leyY = park[0].length;
    const direction = {
        "E" : [0,1],
        "W" : [0,-1],
        "S" : [1,0],
        "N" : [-1,0]
    }
    
    routes.forEach(route=> {
        const [type, len] = route.split(' ');
        let nx = x;
        let ny = y;
        let cnt = 0
        while(cnt < Number(len)){
            nx += direction[type][0];
            ny += direction[type][1];
            if(nx<0 || nx>=lenX || ny<0 || ny>=leyY || park[nx][ny] === "X") break;
            cnt += 1;
        }
        if(cnt === Number(len)){
            x= nx;
            y= ny;
        }
    })
    return [x,y]
}


function findStart(park) {
    let x = 0;
    let y = 0;
    for(let i=0; i<park.length; i++){
        for(let j=0; j<park[0].length; j++){
            if(park[i][j] === "S"){
                x = i;
                y = j;
                break;
            }
        }
    }
    return [x,y];
}
