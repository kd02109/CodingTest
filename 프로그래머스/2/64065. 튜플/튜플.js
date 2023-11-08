function solution(s) {
    const sArr = s.split(/[\{\}\,]/);
    const arr =  sArr.filter((item)=> item !== '').map(item => Number(item));

    const set = new Set(arr);
    const size = Array.from({length: set.size+1}, ()=>0)
    
    const obj = {}
    for(let el of arr){
        obj[el] ? obj[el] +=1 : obj[el] =1  
    }
    const entry = Object.entries(obj).sort((a,b) => b[1]-a[1]);
    return entry.map(([item, _])=> Number(item));
}