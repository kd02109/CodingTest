function solution(numbers, target) {
    var answer = 0;
    function dfs(layer, sum){
        if(layer === numbers.length){
            if(sum === target) answer +=1
            return 
        }
        dfs(layer+1, sum+numbers[layer]);
        dfs(layer+1, sum-numbers[layer]);
    }
    dfs(0, 0)
    return answer;
}