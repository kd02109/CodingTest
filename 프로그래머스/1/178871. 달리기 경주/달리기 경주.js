function solution(players, callings) {
    const play ={}
    const rank = {}
    players.forEach((player,idx) => {
        play[player] = idx + 1;
        rank[idx+1] = player;
    }) 
    callings.forEach((call)=>{
        const curRank = play[call];
        const nextRankPlayer = rank[curRank-1];
        
        play[call] -= 1;
        play[nextRankPlayer] += 1;
        
        rank[curRank] = nextRankPlayer;
        rank[curRank-1] = call;
        
        players[curRank-1] = nextRankPlayer;
        players[curRank-2] = call;
    })
    return players
}