function solution(orders, course) {
    const answer = [];
    course.forEach(count => {
        const map = new Map();
        orders.forEach(order => {
            const visited = Array.from({length:order.length}, ()=>0);
            dfs("", order, count, map, 0, visited);
        })
        const countMenu = [...map];
        const max = Math.max(...countMenu.map(item => item[1]));
        if(max > 1){
            countMenu.forEach((item) => {
                if(item[1] === max) answer.push(item[0])
            })
        }
    })
    
    function dfs(menu, order, count, map, idx, visited){
        if(order.length < count) return;
        if(menu.length === count){
            const re = menu.split('').sort().join('');
            if(map.get(re)) map.set(re, map.get(re)+1);
            else map.set(re, 1);
            return;
        }
        
        for(let i=idx; i<order.length; i+=1){
            if(!visited[i]){
                visited[i] = 1;
                dfs(menu+order[i], order, count, map, i+1, visited);
                visited[i] = 0;
            }
        }
    }
    return answer.sort()
}
