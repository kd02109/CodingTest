function solution(park, routes) {
    var answer = [];
    const {length: yLength} = park
    const {length: xLength} = park[0]
    let h = 0;
    let w = 0
    
    for(let i=0; i<yLength; i++){
        for(let j=0; j<xLength; j++){
            if(park[i][j] === "S"){
                w = j
                h = i
                break
            }
        }
    }
    const direction = {E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] }
    
    for(let i=0; i<routes.length; i++){
        const [type, length] = routes[i].split(' ')
        let [nx,ny] = [w,h]
        let cnt = 0
        while(cnt<length){
            nx +=direction[type][1]
            ny +=direction[type][0]
            if(nx >= xLength || nx <0 || ny>=yLength || ny <0 || park[ny][nx] === "X"){
                break
            }
            cnt +=1
        }
        if(cnt === Number(length)){
            w = nx
            h = ny
        }
    }
    return [h,w]
}