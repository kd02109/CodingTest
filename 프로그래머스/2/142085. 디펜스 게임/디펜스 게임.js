function solution(n, k, enemy) {
   //if(k >= enemy.length) return k
    
   let [start, end] = [0, enemy.length];
   while(start <= end){
       let shield = k;
       let mid = Math.floor((start + end)/2);
       const slice = enemy.slice(0, mid).sort((a,b)=> b-a);
       const sum = slice.reduce((acc,cur)=>{
           if(shield){
               shield -=1;
               return acc;
           }
           return acc + cur;
       }, 0);
       if(n-sum >= 0 || shield > 0){
           start = mid + 1;
       }else{
           end = mid -1;
       }
   }
   return end;
}