function solution(s) {
    let arr = [...s];

    var answer = 0;
    for(let i=0; i<s.length; i++){
        if(check([...arr])) answer +=1

        const arrSlice = arr.slice(1)
        arr = [...arrSlice, arr[0]]
        
    }
    return answer;
}


function check (arr) {
    
    const value = arr[0];
    if(value === "}" || value === "]" || value === ")") return false

    const queue = [];
    

    while(arr.length>0){
        const brick = arr.shift();
        const lastValue = queue[queue.length-1];
        if(brick === "[" || brick === "(" || brick === "{" ) {
            queue.push(brick);
            continue;
        }
        
        
        if(brick === "]" && lastValue ==="[") queue.pop()
        else if(brick === "}" && lastValue ==="{") queue.pop()
        else if(brick === ")" && lastValue ==="(") queue.pop()
        else queue.push(brick)
    }
    
    return queue.length === 0
}