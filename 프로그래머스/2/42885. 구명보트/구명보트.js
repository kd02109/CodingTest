function solution(people, limit) {
    people.sort((a,b)=> b-a);
    let start = 0;
    let end = people.length - 1;
    let answer = 0;
    while(start <= end){
        const sum = people[start] + people[end];
        if(sum <= limit){
            start += 1;
            end -= 1;
        }
        if(sum > limit){
            start += 1;
        }
        answer += 1;
    }
    return answer;
}