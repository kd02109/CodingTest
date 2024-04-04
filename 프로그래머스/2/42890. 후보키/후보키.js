function solution(relation) {
    const idxArr = Array.from({length: relation[0].length}, (_, idx)=> idx);
    const answer = [];
    const combi = [];
    
    const combination = (arr,set) =>{
        if(set.length) combi.push(set)
        if(arr.length === 0) return
        arr.forEach((value, idx)=>{
            const newArr = arr.slice(idx+1);
            combination(newArr,[...set, value]);
        })
    }
    combination(idxArr, []);

    combi.sort((a,b)=> a.length-b.length);
    
    const isUnique = (arr) => {
        const set = new Set();
        for(let i=0; i<relation.length; i+=1){
            let key = ""
            for(let j=0; j<arr.length; j+=1) key += relation[i][arr[j]]
            set.add(key)
        }
        if([...set].length === relation.length) return true;
        return false;
    }
    
    const checkMin = (answer, set) => {
        for(let i=0; i<answer.length; i+=1){
            const base = answer[i];
            let count = 0;
            for(let j=0; j<set.length; j+=1){
                if(base.includes(set[j])) count += 1;
            }
            if(count === base.length) return false;
        }
        return true;
    }
    
    combi.forEach(set => {
        if(isUnique(set) && checkMin(answer, set)) answer.push(set)
    })
    return answer.length
}
