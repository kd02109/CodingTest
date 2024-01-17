function solution(s) {
    const {length} = s
    let answer = length
    for(let i = 1; i<=length/2; i++){
        let base = 1;
        let baseChar = s.slice(0,i)
        let str = ""
        let j = i;
        for(j; j<length; j += i){
            const nextChar = s.slice(j,j+i)
            if(baseChar === nextChar){
                base += 1;
            }else{
                str += base === 1? baseChar : `${base}${baseChar}`
                baseChar = nextChar;
                base = 1;
            }
        }
        
        if(base > 1){
            str += `${base}${baseChar}`
        }else{
            str += s.slice(j-i,length)
        }

        answer = Math.min(str.length, answer)
    }
    return answer
}