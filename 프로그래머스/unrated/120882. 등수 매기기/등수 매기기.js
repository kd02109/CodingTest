function solution(score) {
    const mean = score.map(list => list[0]+list[1])
    const sortArr = [...mean].sort((a,b)=> b-a)
    const mapping = new Map();
    sortArr.forEach((num,index) => {
        if(!mapping.has(num)) mapping.set(num, index+1)
    })

    return mean.map(num => mapping.get(num))
}