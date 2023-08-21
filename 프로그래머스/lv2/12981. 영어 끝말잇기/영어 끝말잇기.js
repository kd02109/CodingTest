function solution(n, words) {
    var answer = [];

    const map = new Map()
    let lastWord = words[0][0]
    for(let i=0; i<words.length; i++){
        const word = words[i]
        if(map.get(word) || lastWord[lastWord.length-1] !== word[0]){

            const number = ((i+1)%n) ===0 ? n : ((i+1)%n)
            const count = Math.floor((i+1)/n) < (i+1)/n ? Math.floor((i+1)/n)+1 : Math.floor((i+1)/n)
            
            return [number, count]
        }else{
            lastWord = word
            map.set(word, word)
        }
    }
    
    return [0,0]
}