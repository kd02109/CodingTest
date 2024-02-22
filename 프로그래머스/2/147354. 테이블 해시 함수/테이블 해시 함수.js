function solution(data, col, row_begin, row_end) {
    const idxCol = col - 1;
    const rowBeginIdx = row_begin - 1;
    const rowEndIdx = row_end - 1;
    data.sort((a,b)=>{
        if(a[idxCol] === b[idxCol]) return b[0]-a[0];
        return a[idxCol] - b[idxCol];
    })

    
    let answer = 0;
    
    for(let i=rowBeginIdx; i<=rowEndIdx; i+=1){
        const base = i+1;
        let sum = 0;
        const row = data[i];
        row.forEach(value => {
            sum += value % base;
        })
        answer ^= sum;
    }
    return answer;
}