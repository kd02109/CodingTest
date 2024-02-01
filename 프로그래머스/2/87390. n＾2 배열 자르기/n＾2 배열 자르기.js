function solution(n, left, right) {
    const answer = []
    const arr = Array.from({length:n}, (_,idx)=>idx+1);

    for(let i=left; i<=right; i++){
        const value = Math.floor(i/n);
        const paste = i%n
        value >= paste? answer.push(arr[value]) : answer.push(arr[paste])
    }
    return answer
}