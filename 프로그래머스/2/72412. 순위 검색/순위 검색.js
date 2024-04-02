function combi(personInfo,score, map){
    function dfs(answer, arr){
        if(map[answer]){
            map[answer].push(score);
        }else map[answer]= [score];
        
        if(arr.length === 0) return;
        
        for(let i=0; i<arr.length; i+=1){
            const info = arr[i]
            const newArr = arr.slice(i+1);
            dfs(answer+info, newArr);
        }
    }
    dfs("",personInfo);
}

function binSearch(values,score){
    let min = 0;
    let max = values.length;
    while(min < max){
        const mid = Math.floor((min+max)/2);
        if(values[mid] >= score){
            max = mid;
        }else{
            min = mid + 1;
        }
    }

    return values.length - min
}


function solution(info, query) {
    const keyMap = {};
    const answer = [];
    
    info = info.map(item => item.split(' '));
    
    for(let i=0; i<info.length; i+=1){
         const score = Number(info[i].pop());
         const personInfo = info[i];
        combi(personInfo, score, keyMap);
    }
    
    for (let key in keyMap) keyMap[key].sort((a, b) => a - b);
    
    for(let i=0; i<query.length; i+=1){
        const require = query[i]
        const requireArr = require.replaceAll(" and", "").replaceAll('-','').split(' ');
        const requireScore = Number(requireArr.pop());
        const str = requireArr.join('');
        let count = 0;
        
        if(keyMap[str]){
            const arr = keyMap[str];
            count = binSearch(arr, requireScore);
        }
        answer.push(count);
    }

    return answer;
}

