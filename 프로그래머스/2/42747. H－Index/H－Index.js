function solution(citations) {
    let answer = 0;
    const sort = [...citations].sort((a,b)=> b-a);
    const {length} = sort
    for(let i=0; i<length; i++){
        if(sort[i] > i) answer = i+1
        //else if(sort[i] === i) answer = i
    }
    return answer;
}