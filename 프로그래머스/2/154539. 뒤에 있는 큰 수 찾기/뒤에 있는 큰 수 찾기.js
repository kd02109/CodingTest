function solution(numbers) {
    // 정답을 numbers의 길이만큼 -1로 생성
    const answer = Array.from({length:numbers.length}, ()=>-1);
    
    // stack에는 numbers의 인덱스 값을 넣습니다.
    const stack = []
    
    for(let i = 0; i<numbers.length; i++){
        while(stack.length>0 && numbers[stack.at(-1)] < numbers[i] ){
            // 현재 기준의 수가 stack의 마지막 값보다 클 경우, 
            // 해당 stack 인덱스의 정답을 현재 비교하는 숫자로 교체
            // stack에서 제거
            answer[stack.pop()] = numbers[i]
        }
        stack.push(i)
    }
    return answer
}