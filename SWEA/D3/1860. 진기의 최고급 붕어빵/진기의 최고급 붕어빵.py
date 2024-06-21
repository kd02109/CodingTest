# 진기의 최고급 붕어빵

T = int(input())

for tc in range(1, T+1):
    N, M, K = map(int, input().split())
    people = list(map(int, input().split()))
    people.sort()
    cnt = 0
    possible = "Possible"
    for i in people:
        cnt += 1
        if (i//M) * K < cnt:
            possible = "Impossible"
            break
    print(f'#{tc} {possible}')