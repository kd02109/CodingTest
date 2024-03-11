function solution(relation) {
    const rowLen = relation.length;
    const colLen = relation[0].length;
    const set = new Set();
    const visited = Array.from({length: colLen}, ()=> 0);
    
    // 모든 가능한 조합 구하기
    const combi = new Set();
    function dfs(key, idx){
        if(key.length > colLen) return;
        key = key.split('').sort().join('');
        if(combi.has(key)) return;
        combi.add(key)
        for(let i=idx+1; i<colLen; i+=1){
            if(!visited[i]){
                visited[i] = 1;
                dfs(key + i, idx);
                visited[i] = 0;
            }
        }
    }
    dfs("", -1)
    
    const combiSort = [...combi].slice(1).sort((a,b) => a.length - b.length).map(item => {
        const arr = item.split('').map(item => Number(item));
        return arr
    })
    
    // 관계키 가능 여부 저장하기
    const candidate = [];
    
    function checkUnique(arr){
        const isUnique = new Set();
        for(let i=0; i<rowLen; i+=1){
            let str = "";
            for(let j=0; j<arr.length; j+=1){
                str += relation[i][arr[j]]
            }
            isUnique.add(str)
        }
        return [...isUnique].length === rowLen;
    }
    
    function isMinimality(combo, candidate){
        let minumality = true;
        candidate.forEach(set => {
            let cnt = 0;
            set = set.split('');
            set.forEach(idx => {
                if(combo.includes(idx)) cnt += 1;
            })
            if(cnt === set.length) minumality = false
        })
        return minumality
    }
    
    for(let i=0; i<combiSort.length; i+=1){
        let base= combiSort[i].join('')
        if(checkUnique(combiSort[i]) && isMinimality(base, candidate)) candidate.push(base);
    }

    return candidate.length
}

