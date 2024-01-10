function solution(dots) {
  const x = dots.map(item=> item[0])
  const y = dots.map(item => item[1])
  const answer = []
  for(let i=0; i<x.length; i++){
    for(let j=i+1; j<x.length; j++){
      const value = (y[i]-y[j])/(x[i]-x[j])
        answer.push(value)
    }
  } 

  const filterAnswer = answer.filter((item,index,arr)=>{
    return arr.indexOf(item) ===arr.lastIndexOf(item) 
  })

  return filterAnswer.length%2 === 0 && filterAnswer.length<6? 1: 0
}