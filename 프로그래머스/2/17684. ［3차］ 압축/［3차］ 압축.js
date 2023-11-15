const OBJ = {
    A: 1,
    B : 2,
    C : 3,
    D : 4,
    E : 5,
    F : 6,
    G : 7,
    H : 8,
    I : 9,
    J : 10,
    K : 11,
    L : 12,
    M : 13,
    N: 14,
    O: 15,
    P:16,
    Q:17,
    R:18,
    S: 19,
    T:20,
    U:21,
    V:22,
    W:23,
    X:24,
    Y:25,
    Z:26,
}

let num = 26

function solution(msg) {
    const answer = []
    let next = 1
    for(let i=0; i<msg.length; i+=next){
        next = 1
        let char = msg[i]
        let nextChar = char + msg[i+1]
        while(true){
            if(OBJ[char] && !OBJ[nextChar]) {
                answer.push(OBJ[char])
                num += 1
                OBJ[nextChar] = num
                break
            }
            char = nextChar
            next+=1
            nextChar = nextChar+msg[i+next]
        }
    }
    return answer
}