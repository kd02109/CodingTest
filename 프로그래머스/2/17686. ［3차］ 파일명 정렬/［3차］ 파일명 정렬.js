function solution(files) {
    const fileChange = [...files].map(item => item.match(/(\D+)(\d+)/))
    fileChange.sort((a,b)=>{
        if(a[1].toLowerCase()>b[1].toLowerCase()) return 1
        else if(a[1].toLowerCase() < b[1].toLowerCase()) return -1
        else {
            return Number(a[2]) - Number(b[2])
        }
    })
    const answer = fileChange.map(item => item.input)
    return answer

}
