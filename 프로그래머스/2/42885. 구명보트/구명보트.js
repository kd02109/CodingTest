function solution(people, limit) {
    people.sort((a,b)=>a-b);
    let answer = 0;
    let start = 0;
    let end = people.length-1;
    while(start <= end){
        const total = people[start] + people[end]
        if(total > limit){
            end -= 1;
        }
        else{
            start += 1;
            end -=1;
        }
        answer += 1;
    }
    return answer
}