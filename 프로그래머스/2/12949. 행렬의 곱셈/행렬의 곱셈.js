function solution(arr1, arr2) {
    var answer = [];
    
    function calculate(arr){
        const sum = []
        for(let i=0; i<arr2[0].length; i++){
            const arrset = [];
            let total = 0
            for(let j=0; j<arr2.length; j++){
                arrset.push(arr2[j][i])
            }
            for(let k=0; k<arr.length; k++){
                total += (arr[k]*arrset[k])
            }
            sum.push(total)
        }    
        return sum
    }
    
    
    for(let i=0; i<arr1.length; i++){
        const arr = [...arr1[i]];
        const arrset = calculate(arr)
        answer.push(arrset)
    }
    return answer;
}