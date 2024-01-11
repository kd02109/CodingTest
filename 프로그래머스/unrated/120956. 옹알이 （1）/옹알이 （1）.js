function solution(babbling) {
    let answer = 0;
    babbling.forEach(babble => {
        const aya = babble.replace('aya', "-");
        const ye = aya.replace('ye', "-")
        const woo = ye.replace('woo', "-")
        const ma = woo.replace('ma', "-")
        const total = ma.replace(/-/g, "")
        if(total === "") answer +=1
    })
    return answer
}