# Flatten

for tc in range(1, 10+1):
    COUNT = int(input())
    lst = list(map(int, input().split()))
    cnt = 0
    ans = 100
    while cnt < COUNT:
        lst.sort()
        lst[0] += 1
        lst[-1] -= 1
        cnt += 1
        if ans > max(lst) - min(lst):
            ans = max(lst) - min(lst)
    lst.sort()
    print(f'#{tc} {lst[-1] - lst[0]}')