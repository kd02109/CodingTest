function solution(p) {
    if(p === "") return "";
    
    let [open, close] = [0,0];
    for(let i=0; i<p.length; i+=1){
        if(p[i] === "(") open += 1;
        if(p[i] === ")") close += 1;
        if(open === close) break;
    }
    let u = p.slice(0,open+close);
    let v = p.slice(open+close);
    
    if(u[0] === "(") return u+solution(v);
    else{
        let newU =""
        for(let i=1; i<u.length-1; i+=1){
            if(u[i] === "(") newU += ")"
            else newU +=  "("
        }
        return `(${solution(v)})`+newU
    }
}
