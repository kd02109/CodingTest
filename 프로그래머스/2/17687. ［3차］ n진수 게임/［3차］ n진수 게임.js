function solution(n, t, m, p) {
  let answer = '';
  let number = 0
  let turn = 0
  while(answer.length < t){
      const changeNumber = number.toString(n);
      let length = 0
      while(length < changeNumber.length){
          if(turn % m === p-1){
            answer += changeNumber[length].toUpperCase()
          }
          if(answer.length === t) break
          length+=1
          turn +=1
      }
      number += 1
  }
  return answer;
}