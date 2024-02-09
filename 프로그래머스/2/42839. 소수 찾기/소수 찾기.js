function checkPrime(num){
    if(num < 2) return false;
    const sqrt = Math.sqrt(num);
    let isPrime = true;
    for(let i=2; i<=sqrt; i+=1){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }
    return isPrime
}

function solution(numbers) {
    numbers = numbers.split('');
    const numberSet = [];
    const visited = Array.from({length: numbers.length}, ()=> 0);
    function dfs(num,layer){
        if(layer > numbers.length) return;
        if(!numberSet.includes(num) && num !== "") numberSet.push(num);
        for(let i=0; i<numbers.length; i+=1){
            if(!visited[i]){
                visited[i] = true;
                dfs(num+numbers[i], layer+1);
                visited[i] = false;
            }
        }
    }
    dfs("",0)
    const nums = [...new Set(numberSet.map(num => Number(num)))];
    const answer = nums.filter(checkPrime).length
    return answer
}

