# 색종이
board = [[0]*101 for _ in range(101)]

T = int(input())
papers = [list(map(int, input().split())) for _ in range(T)]

for value in papers:
    [x,y] = value
    for nx in range(x, 10+x):
        for ny in range(y, 10+y):
            board[nx][ny] = 1

cnt=0
for row in board:
    for box in row:
        if box == 1:
            cnt+=1

print(cnt)