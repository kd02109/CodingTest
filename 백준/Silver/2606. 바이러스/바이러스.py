# https://www.acmicpc.net/problem/2606

N = int(input())
M = int(input())

board = [[] for _  in range(N+1)]

for i in range(M):
    s,e = map(int, input().split())
    board[s].append(e)
    board[e].append(s)

def BFS(start:int):
    q = [start]
    v = [0] * (N+1)
    v[start] = 1
    cnt = 0
    while q:
        start = q.pop(0)
        for end in board[start]:
            if v[end] == 0:
                v[end] = 1
                q.append(end)
                cnt +=1
    return cnt

print(BFS(1))
