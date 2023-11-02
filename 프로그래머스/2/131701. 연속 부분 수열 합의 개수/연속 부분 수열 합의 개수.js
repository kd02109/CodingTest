function solution(elements) {
    const answerSet = new Set();
    const elementsConcat = [...elements, ...elements]
    
    for(let i=1; i<=elements.length; i++){
        for(let j=0; j<elementsConcat.length; j+=1){
            const sum = elementsConcat.slice(j, j+i).reduce((acc, val) => acc+val)
            if(!answerSet.has(sum)) answerSet.add(sum)
        }
    }

    return answerSet.size;
}