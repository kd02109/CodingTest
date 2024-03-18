function solution(relation) {
    const idx = relation[0].map((_,idx) => idx);
    const combination = [];
    
    function getCombi(arr,combi){
        if(combi.length) combination.push(combi);
        if(arr.length === 0) return;
        arr.forEach((value, idx, arr) => {
            const rest = arr.slice(idx+1);
            getCombi(rest, [...combi , value]);
        })
    }
    getCombi(idx, [])

    const answer = [];
    
    function checkUnique(combi){
        const set = new Set();
        for(let i=0; i<relation.length; i+=1){
            let base = ""
            for(let j=0; j<combi.length; j+=1){
                base += relation[i][combi[j]]
            }
            set.add(base);
        }
        return [...set].length === relation.length;
    }
    
    function checkMinimality(combi){
        for(let i=0; i<answer.length; i+=1){
            let count = 0;
            let set = answer[i];
            for(let j=0; j<set.length; j+=1){
                if(combi.includes(set[j])) count += 1;
            }
            if(count === set.length) return false;
        }
        return true;
    }
    
   combination.sort((a,b) => a.length - b.length);
    combination.forEach((combi)=> {
        if(checkUnique(combi) && checkMinimality(combi)) answer.push(combi);
    })

    return answer.length;
}
