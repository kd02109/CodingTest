function solution(word) {
    const words = ["A","E","I","O","U"];
    const group = [];
    
    function dfs(set){
        group.push(set);
        if(set === word) return;
        if(set.length === 5) return;
        for(let i=0; i<words.length; i+=1){
            dfs(set + words[i]);
        }
    }
    dfs("");
    return group.indexOf(word)
}
