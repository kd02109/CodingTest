function solution(s){
    const answer = [];
    for(let i=0; i<s.length; i+=1){
        const lang = s[i];
        if(answer.length === 0 || lang !== answer[answer.length-1]){
            answer.push(lang)
        }else{
            answer.pop();
        }
    }
    return answer.length === 0 ? 1 : 0
}