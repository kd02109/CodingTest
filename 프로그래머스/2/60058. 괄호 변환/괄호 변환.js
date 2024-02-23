function solution(p) {
    if(p === "") return ""
    
    let [u,v] = ["",""]
    let first = 0;
    let end = 0;
    for(let i=0; i<p.length; i+=1){
        u += p[i];
        if(p[i] === "(") first += 1;
        if(p[i] === ")") end += 1;
        if(first === end) break
    }
    v = p.slice(first+end)

    if(u[0] === "(") return u + solution(v)
    else{
        let newU = ""
        for(let i=1; i<u.length-1; i+=1){
            const base = u[i]
            newU += base === "(" ? ")" : "("
        }
        return `(${solution(v)})`+newU
    }
}
//solution("(())))((())(()")