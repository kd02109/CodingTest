function solution(orders, course) {
    const answer = [];
    course.forEach(count => {
        const orderMap = new Map();
        orders.forEach(order=>{
            const visited = Array.from({length:order.length}, ()=>0);
            dfs(visited,order,orderMap, "",count, 0)
        })
        const mapArr = [...orderMap];
        const max = Math.max(...mapArr.map(menu => menu[1]))
        if(max > 1){
            mapArr.forEach(menu => {
            if(menu[1] === max) answer.push(menu[0])
            })
        }

    })
    
    function dfs(visited,order,orderMap, combo, targetCount, idx){
        if(combo.length === targetCount){
            const sortCombo = combo.split('').sort().join('');
            if(!orderMap.get(sortCombo)) orderMap.set(sortCombo, 1);
            else{
                orderMap.set(sortCombo, orderMap.get(sortCombo)+1);
            }
            return;
        }
        for(let i=idx; i<order.length; i+=1){
            if(!visited[i]){
                visited[i] = 1;
                dfs(visited,order,orderMap, combo+order[i], targetCount, i+1)
                visited[i] = 0;
            }
        }
    }

    return answer.sort();
}