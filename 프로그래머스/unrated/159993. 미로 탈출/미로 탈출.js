const dx = [-1, 0, 1, 0]
const dy = [0, 1, 0, -1]


const goTarget = (start, maps, target, col, row) => {
    let time = 0
    const q = [start]
    maps[start[0]][start[1]] = "X"
    
    while(q.length > 0){
        const size = q.length
        for(let i=0; i<size; i++){
            const [x,y] = q.shift()
            for(let j=0; j<4; j++){
                let nx = x+dx[j]
                let ny = y+dy[j]
                if(nx>=0 && nx <col && ny>=0 && ny<row && maps[nx][ny] !== "X"){
                    
                    if(maps[nx][ny] === target) return time +1
                    q.push([nx,ny])
                    maps[nx][ny] = "X"

                }
            }
        }
        time++
    }
    return -1
}

function solution(maps) {
    // L을 찾을 맵 만들기
    const map = maps.map(item => item.split(""));
    // E를 찾을 맵 만들기
    const map2 = maps.map(item => item.split(""));

    const row  = map[0].length
    const col = map.length
    let start = []
    let lever = []
    // 시작지점, 레버위치 찾기 
    for(let i=0; i<col;i++){
        for(let j=0; j<row; j++){
            if(map[i][j] === "S") start = [i,j]
            if(map[i][j] === "L") lever = [i,j]
        }
    }
    // L까지 우선 도달하기 
    const timeToLever = goTarget(start, [...map], "L", col, row)
    const timeToArrive = goTarget(lever, [...map2], "E", col, row)
    if(timeToLever === -1 || timeToArrive === -1) return -1
    else return timeToLever + timeToArrive
}