function solution(sequence, k) {
    let left = 0
    let right = 0
    let total = sequence[right]
    const answer  = []
    while(right<sequence.length && left< sequence.length){
        if(total === k){
            answer.push([left, right])
            total -=sequence[left]
            left ++
        }
        if(total > k){
            total -=sequence[left]
            left ++
        }
        if( total < k){
            right++
            total +=sequence[right]
        }
    }
    answer.sort((a,b) => (a[1]-a[0]) - (b[1]-b[0]))

    return answer[0]
}