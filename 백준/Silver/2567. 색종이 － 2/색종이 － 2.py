#색종이-2

board = [[0]*101 for _ in range(101)]

T = int(input())

lst = [list(map(int, input().split())) for _ in range(T)]

for block in lst:
    [x,y] = block
    for nx in range(x, x+10):
        for ny in range(y, y+10):
            board[nx][ny] = 1

ans = 0

for i in range(1,len(board)-1):
    for j in range(1,len(board)-1):
        if board[i][j] == 1:
            for (ni,nj) in [(0,1),(1,0),(0,-1),(-1,0)]:
                if board[i+ni][j+nj] == 0:
                    ans += 1

print(ans)
