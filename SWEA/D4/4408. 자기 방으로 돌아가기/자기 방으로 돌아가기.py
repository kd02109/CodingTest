# 자기 방으로 돌아가기

T = int(input())

for tc in range(1, T+1):
    N = int(input())
    lst = [list(map(int, input().split())) for _ in range(N)]
    room = [0] * 201
    for value in lst:
        start = end = 0
        if value[0] > value[1]:
            end = (value[0] + 1) // 2
            start = (value[1] + 1) // 2
        else:
            end = (value[1] + 1) // 2
            start = (value[0] + 1) // 2
        for i in range(start,end+1):
            room[i] += 1
    ans = max(room)
    print(f'#{tc} {ans}')