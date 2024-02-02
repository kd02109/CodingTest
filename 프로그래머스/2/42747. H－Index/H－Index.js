function solution(citations) {
    let answer = 0;
    const len = citations.length;
    citations.sort((a,b)=> b-a);
    for(let i=0; i<len; i+=1){
        if(citations[i] > i) answer += 1;
    }
    return answer;
}