# 줄세우기
P = int(input())
for tc in range(1, P+1):
    cnt = 0
    lst = list(map(int, input().split()))[1:]
    for i in range(1, len(lst)):
        for j in range(i):
            if lst[i] < lst[j]:
                cnt += 1
    print(f'{tc} {cnt}')