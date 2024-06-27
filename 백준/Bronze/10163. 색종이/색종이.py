# 새종이


WIDTH = 1000

N = int(input())
lst = [list(map(int, input().split())) for _ in range(N)]
board = [[0]*(WIDTH+1) for _ in range(WIDTH+1)]
ans = [0] * (N+1)
for value in lst:
    [value[0], value[1]] = [WIDTH - value[1]-value[3]+1, value[0]]
    [value[2], value[3]] = [value[0] + value[3], value[1]+value[2]]

for i in range(N-1,-1,-1):
    idx = i+1
    cnt = 0
    [px,py,nx,ny] = lst[i]
    for x in range(px, nx):
        for y in range(py,ny):
            if board[x][y] == 0:
                board[x][y] = idx
                cnt += 1
    ans[idx] = cnt

for i in range(1, len(ans)):
    print(ans[i])
