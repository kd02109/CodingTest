function solution(participant, completion) {
    const done = new Map();
    completion.forEach((player)=>{
        if(done.has(player)) {
            done.set(player, done.get(player)+1);
        }else{
            done.set(player,1)
        }
    })
    
    for(let i=0; i<participant.length; i++){
        const player = participant[i]
        if(done.has(player) && done.get(player) > 0){
            done.set(player,done.get(player)-1)
        }
        else{
            return player
        }
    }
}