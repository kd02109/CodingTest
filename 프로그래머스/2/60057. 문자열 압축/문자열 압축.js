function solution(s) {
    let answer = s;
    for(let i=1; i<=(s.length/2); i+=1){
        let possible = ""
        let base = s.slice(0,i);
        let count = 1;
        let next = ""
        for(let j=i; j<s.length; j+=i){
            next = s.slice(j, j+i)
            if(base === next){
                count += 1;
            }else{
                if(count === 1) possible += base;
                else possible +=`${count}${base}`
                base = next;
                count = 1;
            }
        }
        if(count > 1) possible += `${count}${base}`
        else possible += next
        if(answer.length > possible.length) answer = possible;
    }
    return answer.length
}