# 그래프의 삼각형

from _collections import defaultdict

T = int(input())

for tc in range(1, T+1):
    N, M = map(int, input().split())
    adj = defaultdict(list)

    for _ in range(M):
        x, y = map(int, input().split())
        adj[x].append(y)
        adj[y].append(x)

    total = 0
    for i in range(1, N+1):
        for j in range(i+1, N+1):
            for k in range(j+1, N+1):
                if i in adj[j] and j in adj[k] and k in adj[i]:
                    total+=1
    print(f'#{tc} {total}')