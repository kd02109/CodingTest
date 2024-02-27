function solution(citations) {
    let answer = 0;
    citations.sort((a,b)=> b-a);
    citations.forEach((value,idx)=>{
        if(value > idx) answer = idx+1;
    })
    return answer;
}