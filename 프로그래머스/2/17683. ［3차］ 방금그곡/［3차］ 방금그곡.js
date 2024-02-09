function timeCalculate(n1, n2) {
  const temp1 = n1.split(":").map(v => parseInt(v));
  const temp2 = n2.split(":").map(v => parseInt(v));

  const first = temp1[0] * 60 + temp1[1];
  const second = temp2[0] * 60 + temp2[1];

  return second - first;
}

function change(str){
    str = str.replace(/C#/gi, "Z");
    str = str.replace(/D#/gi, "X");
    str = str.replace(/F#/gi, "V");
    str = str.replace(/G#/gi, "N");
    str = str.replace(/A#/gi, "M");
    return str
}


function solution(m, musicinfos) {
    m = change(m)
    let answer =[]
    for(let i=0; i<musicinfos.length; i+=1){
        let [start, end, title, music] = musicinfos[i].split(',')
        music = change(music);
        const playingTime = timeCalculate(start, end);

        if(music.length > playingTime){
            music = music.slice(0,playingTime)
        }else{
            const quo = Math.floor(playingTime/music.length);
            for (let i = 0; i < quo; i++) {
                if (music.length > playingTime) break;
                music += music;
            }
            music = music.slice(0, playingTime)
        }
        if (music.includes(m)) answer.push([title, playingTime]);
    }

    if(answer.length === 0) return "(None)"
    answer.sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (a[1] === b[1]) return 0;
      if (a[1] < b[1]) return 1;
    });
    return answer[0][0];
}