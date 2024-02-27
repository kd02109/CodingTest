function solution(n, left, right) {
    const nums = Array.from({length:n}, (_,idx)=>idx+1);
    const answer = [];
    
    for(let i=left; i<=right; i+=1){
        const max = Math.max(Math.floor(i/n), i%n); 
        answer.push(nums[max]);
    }
    return answer;
}