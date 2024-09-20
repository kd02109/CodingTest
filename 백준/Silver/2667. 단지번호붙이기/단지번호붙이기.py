# https://www.acmicpc.net/problem/2667

N = int(input())
board = []
for i in range(N):
    str_input = input()
    arr = arr = list(map(int, str_input))
    board.append(arr)

v = [[0 for _ in range(N)] for _ in range(N)]

dir = [[1,0], [-1,0], [0,1], [0,-1]]

def BFS(x,y):
    q = [[x,y]]
    v[x][y] = 1
    cnt = 1
    while q:
        [start_x, start_y] = q.pop(0)
        for dir_value in dir:
            nx = dir_value[0] + start_x
            ny = dir_value[1] + start_y
            if 0<=nx <N and 0<=ny<N and v[nx][ny] == 0 and board[nx][ny] == 1:
                v[nx][ny] = 1
                cnt +=1
                q.append([nx,ny])
    return cnt

ans = []

for i in range(N):
    for j in range(N):
        if board[i][j] == 1 and v[i][j] == 0:
            pod = BFS(i,j)
            ans.append(pod)

ans.sort()
print(len(ans))
for i in ans:
    print(i)