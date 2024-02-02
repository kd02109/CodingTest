function solution(orders, course) {
    const answer = [];
    const newOrders = orders.map(order => order.split(''));
    
    course.forEach(count => {
        const map = new Map();
        for(let i=0; i<newOrders.length; i+=1){
            const order = newOrders[i];
            if(order.length < count) continue;
            if(order.length === count){
                const menu = order.sort().join('')
                if(map.has(menu)) map.set(menu, map.get(menu)+1);
                else map.set(menu, 1);
                continue;
            }
            const visited = Array.from({length: order.length}, ()=>0);
            const set = new Set();
            dfs("",0, visited, order, count, set,0);
            const arr = [...set];
            arr.forEach(menu => {
                if(map.has(menu)) map.set(menu, map.get(menu)+1);
                else map.set(menu, 1);
            })
        }
        const arr = [...map];
        const countArr = arr.map(item => item[1]);
        const max = Math.max(...countArr);
        if(max > 1){
            arr.forEach(menu => {
                if(menu[1] == max) answer.push(menu[0]);
            })
        }
    })
    
    function dfs(menu, layer, visited, order, count, set,idx){
        if(menu.length === count){
            const sortMenu = menu.split('').sort().join('');
            set.add(sortMenu);
            return;
        }
        for(let i=idx; i<order.length; i+=1){
            if(!visited[i]){
                visited[i] = 1;
                dfs(menu+order[i], layer+1, visited, order,count,set,i+1)
                visited[i] = 0;
            }
        }
    }
    
    
    return answer.sort();
}