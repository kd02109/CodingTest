# 마그네틱

T = 10
for tc in range(1, T+1):
    N = int(input())
    lst = [list(map(int, input().split())) for _ in range(N)]
    cnt = 0
    for i in range(N):
        flag = False
        for j in range(N):
            if lst[j][i] == 1:
                flag = True
            if flag and lst[j][i] == 2:
                cnt += 1
                flag = False
    print(f'#{tc} {cnt}')