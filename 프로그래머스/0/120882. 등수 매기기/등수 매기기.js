function solution(score) {
    const obj = {};
    const scores = score.map(item => item[0] + item[1]);
    const sortArr = [...scores].sort((a,b)=>b-a);
    
    sortArr.forEach((item,idx)=>{
        if(!obj[item]) obj[item] = idx+1;
    })
    
    return scores.map(item => obj[item])
}