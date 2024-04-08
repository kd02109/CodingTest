function solution(n, info) {
    const answer = [];
    const possible = [];
    const scoreObj = [10,9,8,7,6,5,4,3,2,1,0].reduce((acc,cur,idx)=>{
        acc[idx] = cur;
        return acc
    }, {});
    
    const combi = (layer, arr, count, score) => {
        if(layer === 10){
            arr[layer] = count;
            possible.push([score, arr]);
            return;
        }
        let apachi = 0;
        let apachiShoot = info[layer]
        if(apachiShoot){
            apachi = scoreObj[layer];
        }
        const lion = apachiShoot+1;
        combi(layer+1,[...arr,0], count, score - apachi);
        
        if(count >=lion){
            combi(layer+1, [...arr, lion], count-lion, score+scoreObj[layer]);
        }
    }
    combi(0, [], n, 0);
    possible.sort((a,b) => {
        if(b[0] === a[0]){
            return b[1].filter(shoot => shoot>0).length - a[1].filter(shoot => shoot>0).length
        }
        return b[0] - a[0]
    })

    if(possible[0][0] <= 0) return [-1];
    return possible[0][1]
}
