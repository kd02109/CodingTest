# 러시아 국기 같은 깃발

def calculation(lst, colors):
    [white, blue, red] = colors
    cnt = 0
    for v in range(N):
        for value in lst[v]:
            if v <= white and value != "W":
                cnt += 1
            elif white < v <= blue and value != "B":
                cnt += 1
            elif v > blue and value != "R":
                cnt += 1
    return cnt


T = int(input())

for tc in range(1, T + 1):
    N, M = map(int, input().split())
    lst = [list(input()) for _ in range(N)]
    ans = N * M
    for i in range(N - 2):
        for j in range(i + 1, N - 1):
            ans = min(calculation(lst, [i, j, N - j]), ans)
    print(f'#{tc} {ans}')