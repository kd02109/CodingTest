# 전봇대

T = int(input())

for tc in range(1, T+1):
    N = int(input())
    lst = [list(map(int, input().split())) for _ in range(N)]
    answer = 0
    for i in range(N-1):
        l1 = lst[i]
        for j in range(i+1, N):
            l2 = lst[j]
            if not((l1[0] > l2[0] and l1[1] > l2[1]) or (l2[0] > l1[0] and l2[1] > l1[1])):
                answer += 1
    print(f'#{tc} {answer}')

