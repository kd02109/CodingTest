# 블랙잭

N, M = map(int, input().split())
lst = list(map(int, input().split()))

ans = 0
for i in range(len(lst)-2):
    for j in range(i+1, len(lst)-1):
        for z in range(j+1, len(lst)):
            total = lst[i] + lst[j] + lst[z]
            if total <= M:
                ans = max(ans, total)

print(ans)
