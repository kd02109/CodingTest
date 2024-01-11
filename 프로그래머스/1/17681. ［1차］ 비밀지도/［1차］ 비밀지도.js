function solution(n, arr1, arr2) {
    const answer =[]
    for(let i=0; i<n; i++){
        const first = makeBin(arr1[i], n);
        const second = makeBin(arr2[i], n);
        let brick = ""
        for(let j=0; j<n; j++){
            if(first[j] === "1" || second[j] === "1") brick+="#"
            else brick+=" "
        }
        answer.push(brick)
    }
    return answer
}

function makeBin(num, len){
    return num.toString(2).padStart(len,0);
}