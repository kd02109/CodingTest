function solution(triangle) {
    const len = triangle.length - 2
    for(let i=len; i>=0; i -= 1){
        for(let j=0; j<=i; j+=1){
            triangle[i][j] += Math.max(triangle[i+1][j], triangle[i+1][j+1]);
        }
    }
    return triangle[0][0]
}