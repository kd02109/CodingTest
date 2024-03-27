function solution(citations) {
    let answer = 0;
    citations.sort((a,b)=> b-a);
    citations.forEach((citation,idx)=>{
        if(citation > idx) answer += 1;
    })
    return answer
}