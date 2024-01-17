function solution(people, limit) {
    people.sort((a,b)=> a-b);
    let start = 0;
    let end = people.length - 1;
    let answer = 0;
    while(start<end){
        const total = people[start] + people[end]
        
        if(total <= limit){
            start += 1;
            end -= 1;
        }else{
            end -= 1;
        }
        answer +=1;
        if(start === end) return answer + 1
    }
    return answer
}