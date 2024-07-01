# 자리 배정
X, Y = map(int, input().split())
lst = [[0]*(Y+1) for _ in range(X+1)]
K = int(input())

if K > X * Y:
    print(0)
else:
    dir = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    x = 1
    y = 1
    cnt = 1
    idx = 0

    while cnt < K:
        lst[x][y] = 1
        nx = x + dir[idx][0]
        ny = y + dir[idx][1]
        if 0 < nx <= X and 0 < ny <= Y and lst[nx][ny] == 0:
            x = nx
            y = ny
            cnt += 1
        else:
            idx = (idx + 1) % len(dir)
    print(x,y)