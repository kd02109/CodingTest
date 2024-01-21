function solution(clothes) {
  const map = new Map();
  clothes.forEach(([wear, type]) => {
      if(!map.has(type)) map.set(type,1)
      else{
          map.set(type, map.get(type)+1)
      }
  })

  const values = [...map.values()];
  

  return values.reduce((acc,cur)=> acc*(cur+1),1) - 1
}