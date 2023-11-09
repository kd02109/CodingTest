const NUMBER = 65536;
function solution(str1, str2) {
    const notAlpha= /[^a-z]/g;
    const alpha = /[a-z]/g;
    const strLower1 = str1.toLowerCase().replace(notAlpha, " ")
    const strLower2 = str2.toLowerCase().replace(notAlpha, " ")
    
    const str1Arr = makeArr(strLower1, alpha);
    const str2Arr = makeArr(strLower2, alpha);
    
    if(str1Arr.length ===0 && str2Arr.length === 0) return NUMBER
    
    const str1Obj= makeObj(str1Arr, {});
    const str2Obj = makeObj(str2Arr, {});

   const keys = [...new Set([...Object.keys(str1Obj), ...Object.keys(str2Obj)])]
   let total = 0;
   let cluster = 0
   
   for(let key of keys){
       if(str1Obj[key] && str2Obj[key]){
           total += Math.max(str1Obj[key], str2Obj[key])
           cluster += Math.min(str1Obj[key], str2Obj[key])
       }else {
           str1Obj[key] ? total += str1Obj[key] : total += str2Obj[key]
       }
   }
    
    return Math.floor(cluster/total *NUMBER);
}


function makeArr(string, reg){

    const arr = []
    const stringToArr = string.split("");
    stringToArr.forEach((item, index) => {
        if(item !== " " && stringToArr[index+1] !== " " && stringToArr[index+1] !== undefined){
            arr.push(item + stringToArr[index+1])
        }
    })
    return arr
}

function makeObj(arr, obj){
    for(let char of arr){
        obj[char] ? obj[char] += 1 : obj[char] = 1; 
    }
    return obj
}