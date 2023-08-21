function solution(n)
{
  let answer = 0;
  let total = n
  
  while(total>0){
      if(total%2 ===0){
          total = total/2
      }else{
          total--
          answer++
      }
  }
return answer
}