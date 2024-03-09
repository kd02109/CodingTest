function changeShop(m){
    return m.replaceAll("C#", "H").replaceAll("D#", "I").replaceAll("F#","J").replaceAll("G#", "K").replaceAll("A#", "L").replaceAll("B#","M")
}

function changeMinutes(start, end){
    const [startH, startM] = start.split(":").map(item => Number(item));
    const [endH, endM] = end.split(":").map(item => Number(item));
    return (endH*60 + endM)-(startH*60 + startM)    
}

function solution(m, musicinfos) {
    m = changeShop(m);
    const answer = [];
    musicinfos.forEach((musicinfo) => {
        let [start, end ,title, music] = musicinfo.split(',');
        const minute = changeMinutes(start, end);
        music = changeShop(music);

        const rest =  minute % music.length;
        const qu = Math.floor(minute / music.length);
        let totalMusic = music.repeat(qu);
        totalMusic += music.slice(0,rest);
        if(totalMusic.includes(m)) answer.push([title, minute])
    })
    
    if(answer.length === 0) return "(None)"
    
    answer.sort((a,b) => {
        if(b[1]=== a[1]) return 0
        return b[1] - a[1]
    })
    
    return answer[0][0]
}