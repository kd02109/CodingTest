function solution(name) {
    let answer = 0;
    let minMove = name.length - 1; // 최소 이동 횟수 초기값 설정

    for (let i = 0; i < name.length; i++) {
        // 각 문자 변경에 필요한 최소 조작 횟수 추가
        answer += Math.min(name[i].charCodeAt() - 'A'.charCodeAt(), 'Z'.charCodeAt() - name[i].charCodeAt() + 1);

        // 다음 문자가 'A'인 경우, 커서 이동 최적화 계산
        let nextIdx = i + 1;
        while (nextIdx < name.length && name[nextIdx] === 'A') {
            nextIdx++;
        }

        // minMove 업데이트
        minMove = Math.min(minMove, 2 * i + name.length - nextIdx, 2 * (name.length - nextIdx) + i);
    }

    // 문자 변경 조작 횟수와 커서 이동 최소 횟수를 합산
    answer += minMove;

    return answer;
}

console.log(solution("JEROEN")); // 56
console.log(solution("JAN")); // 23