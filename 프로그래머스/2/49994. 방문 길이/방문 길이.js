function solution(dirs) {
    let x = 0;
    let y = 0;

    const visited = {}
    const direction = {
        U : [0,1],
        D : [0,-1],
        R : [1,0],
        L : [-1,0]
    }
    
    let answer = 0;
    for(let move of dirs){
        const [dx,dy] = direction[move]
        let nx=x+dx
        let ny=y+dy
        if(nx<=5 && nx>=-5 && ny>=-5 && ny<=5){
            const str1 = `${x}${nx},${y}${ny}`
            const str2 = `${nx}${x},${ny}${y}`
            if(!visited[str1] && !visited[str2]){
                visited[str1] = 1
                visited[str2] = 1
                answer +=1
            }
            x=nx
            y=ny
        }
    }
    return answer;
}
//console.log(solution("URDL"))
