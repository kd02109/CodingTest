function solution(word) {
    const answer = [];
    const alpha = ["A", "E", "I", "O", "U"];
    function dfs(str){
        answer.push(str)
        if(str.length === alpha.length) return;
        for(let i =0 ; i<alpha.length; i++){
            dfs(str+alpha[i])
        }      
    }
    dfs("");

    return answer.indexOf(word);
}