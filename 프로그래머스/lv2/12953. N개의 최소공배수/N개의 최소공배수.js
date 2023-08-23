function solution(arr) {
    arr.sort((a,b) => a-b)
    return arr.reduce((a,b)=> (a*b)/GCD(a,b))
}


function GCD(a,b){
    if(b===0){
        return a;
    }else{
        return GCD(b,a%b)
    }
}