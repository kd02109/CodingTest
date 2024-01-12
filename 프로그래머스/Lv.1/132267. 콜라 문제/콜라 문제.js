function solution(a, b, n) {
  let answer = 0;
  while(n >= a){
      let rest = n%a
      n = Math.floor(n/a)
      answer += n*b
      n = (n*b)+rest
      
  }
    return answer
}