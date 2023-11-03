function solution(want, number, discount) {
    let answer = 0;
    const map = new Map()
    initMap();
    function initMap(){
        want.forEach((item, index) => {
        map.set(item, number[index])
        })
    }


    for(let i=0; i<discount.length-9; i++){
        const checkArr = discount.slice(i, i+10);
        
        for(let j=0; j<checkArr.length; j+=1){
            let num = map.get(checkArr[j]);
            if(!num) break;
            else map.set(checkArr[j], num-1);
        }
        
        const set = new Set([...map.values()]);
        if(set.size === 1 && set.has(0)) answer+=1
        initMap();
    }

    return answer;
}

