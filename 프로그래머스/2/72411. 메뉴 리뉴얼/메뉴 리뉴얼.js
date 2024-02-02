function solution(orders, course) {
    const answer = [];
    // orders의 모든 메뉴를 배열로 변환
    const newOrders = orders.map(order => order.split(''));
    
    // 각 count별로 최대 조합 찾기
    course.forEach(count => {
        const map = new Map();
        // 각 메뉴에서 재귀적으로 유효한 조합을 찾습니다.
        for(let i=0; i<newOrders.length; i+=1){
            const order = newOrders[i];
            // 만약 메뉴의 길이가 count보다 작다면 생략
            if(order.length < count) continue;
            
            // 메뉴의 길이가 count와 같다면, 굳이 재귀를 실행할 필요 없습니다.
            if(order.length === count){
                const menu = order.sort().join('')
                if(map.has(menu)) map.set(menu, map.get(menu)+1);
                else map.set(menu, 1);
                continue;
            }
            
            // 재귀 실행
            const visited = Array.from({length: order.length}, ()=>0);
            const set = new Set();
            dfs("", visited, order, count, set,0);
            const arr = [...set];
            
            // 각 가능한 조합을 map에 저장
            arr.forEach(menu => {
                if(map.has(menu)) map.set(menu, map.get(menu)+1);
                else map.set(menu, 1);
            })
        }
        
        // 모든 손님들의 주문에서 가능한 조합을 찾고, 가장 많이 주문한 메뉴만을 찾습니다.
        const arr = [...map];
        const countArr = arr.map(item => item[1]);
        const max = Math.max(...countArr);
        
        // 해당 max 주문이 1이라면, 조건에 부합하지 않기 때문에 찾지 않습니다.
        if(max > 1){
            arr.forEach(menu => {
                if(menu[1] == max) answer.push(menu[0]);
            })
        }
    })
    
    function dfs(menu, visited, order, count, set,idx){
        if(menu.length === count){
            const sortMenu = menu.split('').sort().join('');
            set.add(sortMenu);
            return;
        }
        
        // 가능한 조합은 순서와 관련이 있습니다. 즉 combination 입니다. 조합을 구해야 합니다.
        for(let i=idx; i<order.length; i+=1){
            if(!visited[i]){
                visited[i] = 1;
                dfs(menu+order[i], visited, order,count,set,i+1)
                visited[i] = 0;
            }
        }
    }
    
    
    return answer.sort();
}