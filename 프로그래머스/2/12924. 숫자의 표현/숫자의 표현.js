function solution(n) {

    const arr = []
    for(let i=1; i<= Math.sqrt(n); i+=1){
        if(n%i === 0){
            arr.push(i)
            if(n/i !== i) arr.push(n/i)
        }
    }
    return arr.filter(num => num%2 === 1).length
}