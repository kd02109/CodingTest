# 새종이


WIDTH = 100

N = int(input())
lst = [list(map(int, input().split())) for _ in range(N)]
board = [[0]*(WIDTH+1) for _ in range(WIDTH+1)]
ans = [0] * (N+1)
for value in lst:
    [value[0], value[1]] = [WIDTH - value[1]-value[3]+1, value[0]]
    [value[2], value[3]] = [value[0] + value[3], value[1]+value[2]]

for i in range(N):
    idx = i+1
    [px,py,nx,ny] = lst[i]
    for x in range(px, nx):
        for y in range(py,ny):
            board[x][y] = idx

for i in range(WIDTH+1):
    for j in range(WIDTH+1):
        idx = board[i][j]
        ans[idx] += 1

for i in range(1, len(ans)):
    print(ans[i])
