function solution(begin, target, words) {
    // 단어가 들어 있지 않을 경우
    if(!words.includes(target)) return 0;
    
    const visited = Array.from({length: words.length}, ()=>0);
    let answer = words.length;
    
    const getDiff = (word, word2) => {
        let diff = 0;
        for(let i=0; i<word2.length; i+=1){
            if(word[i] !== word2[i]) diff +=1;
        }
        return diff;
    }
    
    const dfs = (word,count) => {
        if(word === target){
            answer = Math.min(answer, count);
            return;
        }
        
        for(let i=0; i<words.length; i+=1){
            const compare = words[i];
            const diff = getDiff(word, compare);
            if(diff === 1 && !visited[i]){
                visited[i] = 1;
                dfs(compare, count+1);
                visited[i] = 0;
            }
        }
    }
    dfs(begin, 0);
    return answer;
}