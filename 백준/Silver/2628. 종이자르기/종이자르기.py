# 종이 자르기

C, R = map(int, input().split())
c_lst = [0, C]
r_lst = [0, R]

N = int(input())
for tc in range(N):
    isCol, idx = map(int, input().split())
    if isCol == 0:
        r_lst.append(idx)
    else:
        c_lst.append(idx)

r_lst.sort()
c_lst.sort()

r_max = 0
for i in range(1, len(r_lst)):
    r_max = max(r_lst[i]-r_lst[i-1], r_max)

c_max = 0
for i in range(1, len(c_lst)):
    c_max = max(c_lst[i]-c_lst[i-1], c_max)
print(r_max*c_max)