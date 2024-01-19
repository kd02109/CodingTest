function solution(players, callings) {
     // 1. ["mumu", "soe", "poe", "kai", "mine"]
     // 2.  ["kai", "kai", "mine", "mine"]
    
    const race = {}
    const ranks = {}
    
    players.forEach((player, idx) => {
        ranks[player] = idx+1;
        race[idx+1] = player;
    })
    
    for(let i=0; i<callings.length; i+=1){
        const callPlayer = callings[i]
        const callingRank = ranks[callPlayer] //num
        
        const nextPlayer = race[callingRank-1]
        const nextRank = callingRank-1
        
        race[nextRank] = callPlayer;
        ranks[nextPlayer] = callingRank;
        
        race[callingRank] = nextPlayer;
        ranks[callPlayer] = nextRank
    }
    return Array.from({length: players.length}, (_,idx)=>race[idx+1])
}