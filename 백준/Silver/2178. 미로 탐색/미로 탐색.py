# https://www.acmicpc.net/problem/2178
N, M = map(int, input().split())

board = []
for i in range(N):
    partial = list(input())
    board.append(partial)

dir_x = [0,1,-1,0]
dir_y = [1,0,0,-1]

def BFS(board: list):
    q = [[0,0]]
    v = [[0] * M for _ in range(N)]
    v[0][0] = 1
    while q:
        [x, y] = q.pop(0)
        if x == N-1 and y == M-1:
            return v[x][y]
        for i in range(len(dir_x)):
            nx = x + dir_x[i]
            ny = y + dir_y[i]
            if 0 <= nx < N and 0 <= ny < M and board[nx][ny] == '1' and v[nx][ny] == 0:
                q.append([nx,ny])
                v[nx][ny] = v[x][y]+1
    return 0

print(BFS(board))