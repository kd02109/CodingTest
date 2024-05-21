# 평범한 숫자

T = int(input())

for tc in range(1, T+1):
    N = int(input())
    lst = list(map(int, input().split()))
    answer = 0
    for i in range(1, N-1):
        if lst[i] > lst[i-1] and lst[i] < lst[i+1]:
            answer += 1
        elif lst[i] < lst[i-1] and lst[i] > lst[i+1]:
            answer += 1
    print(f'#{tc} {answer}')