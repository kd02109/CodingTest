function solution(n, left, right) {
    const answer = [];
    for(let i=left; i<=right; i++){
      const value = Math.max(Math.floor(i/n), i%n);
      answer.push(value+1)
    }
    return answer
}