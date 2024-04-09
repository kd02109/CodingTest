function solution(info, query) {
    const infoObj = {};
    
    // 모든 경우의 수 찾기
    const combi = (score, arr, info) => {
        const key = arr.join("");
        if(infoObj[key]) infoObj[key].push(score);
        else infoObj[key] = [score] 
        
        if(info.length <= 0) return;
        
        info.forEach((value, idx) => {
            const newArr = info.slice(idx+1);
            combi(score, [...arr,value], newArr);
        })
    }
    
    info.forEach(person => {
        const [lan, dev, year, food, score] = person.split(" ")
        combi(Number(score), [], [lan,dev,year,food]);
    })
    
    // 정렬
    Object.keys(infoObj).forEach(key => {
        infoObj[key].sort((a,b)=> a-b);
    })
    
    const overValue = (arr, score) => {
        let left = 0;
        let right = arr.length;
        while(left < right){
            const mid = Math.floor((left+right)/2)
            if(arr[mid] >= score) right = mid;
            else left = mid + 1;
        }
        return arr.length - right;
    }
    
    const answer = query.map(data => {
        const arr = data.replaceAll(" and", "").replaceAll("-","").split(" ")
        const score = Number(arr.pop());
        const key = arr.join('')
        const values = infoObj[key];
        if(!values) return 0;
        return overValue(values, score)
    })
    return answer
}

